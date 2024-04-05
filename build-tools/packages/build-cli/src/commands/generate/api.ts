/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import fs from "node:fs/promises";
import path from "node:path";

import { Flags } from "@oclif/core";
import type { ExportSpecifierStructure } from "ts-morph";
import { ModuleKind, Project, ScriptKind } from "ts-morph";

import { BaseCommand } from "../../base.js";
// eslint-disable-next-line import/no-internal-modules
import { ApiLevel } from "../../library/apiLevel.js";
// eslint-disable-next-line import/no-internal-modules
import { getApiExports } from "../../library/typescriptApi.js";
import type { CommandLogger } from "../../logging.js";

/**
 * Literal pattern to search for in file prefix to replace with unscoped package name.
 *
 * @privateRemarks api-extractor use <@..>, but <> is problematic for command line
 * specification. A policy incorrectly thinks an argument like that should not be quoted.
 * It is just easier to use an alternate bracket style.
 */
const unscopedPackageNameString = "{@unscopedPackageName}";

/**
 * Generates type declarations files for Fluid Framework APIs to support API levels (/alpha, /beta. etc.).
 */
export default class GenerateEntrypointsCommand extends BaseCommand<
	typeof GenerateEntrypointsCommand
> {
	static readonly description =
		`Generates type declaration entrypoints for Fluid Framework API levels (/alpha, /beta. etc.)`;

	static readonly flags = {
		mainEntrypoint: Flags.file({
			description: "Main entrypoint file containing all untrimmed exports.",
			default: "./src/index.ts",
			exists: true,
		}),
		outDir: Flags.directory({
			description: "Directory to emit entrypoint declaration files.",
			default: "./lib",
			exists: true,
		}),
		outFilePrefix: Flags.string({
			description: `File name prefix for emitting entrypoint declaration files. Pattern of '${unscopedPackageNameString}' within value will be replaced with the unscoped name of this package.`,
			default: "",
		}),
		outFileSuffix: Flags.string({
			description:
				"File name suffix including extension for emitting entrypoint declaration files.",
			default: ".d.ts",
		}),
		...BaseCommand.flags,
	};

	public async run(): Promise<void> {
		const { mainEntrypoint, outFileSuffix } = this.flags;

		return generateEntrypoints(
			mainEntrypoint,
			{ pathPrefix: await getOutPathPrefix(this.flags), pathSuffix: outFileSuffix },
			this.logger,
		);
	}
}

async function getOutPathPrefix({
	outDir,
	outFilePrefix,
}: { outDir: string; outFilePrefix: string }): Promise<string> {
	if (!outFilePrefix) {
		// If no other prefix, ensure a trailing path separator.
		// The join with '.' will effectively trim a trailing / or \ from outDir.
		return `${path.join(outDir, ".")}${path.sep}`;
	}

	return path.join(
		outDir,
		outFilePrefix.includes(unscopedPackageNameString)
			? outFilePrefix.replace(unscopedPackageNameString, await getLocalUnscopedPackageName())
			: outFilePrefix,
	);
}

async function getLocalUnscopedPackageName(): Promise<string> {
	const packageJson = await fs.readFile("./package.json", { encoding: "utf8" });
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
	const packageName = JSON.parse(packageJson).name;
	if (typeof packageName !== "string") {
		// eslint-disable-next-line unicorn/prefer-type-error
		throw new Error(`unable to read package name`);
	}

	const unscopedPackageName = /[^/]+$/.exec(packageName)?.[0];
	if (unscopedPackageName === undefined) {
		throw new Error(`unable to parse package name`);
	}

	return unscopedPackageName;
}

const generatedHeader: string = `/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by "flub generate api" in @fluidframework/build-tools.
 */
`;

async function generateEntrypoints(
	mainEntrypoint: string,
	{ pathPrefix, pathSuffix }: { pathPrefix: string; pathSuffix: string },
	log: CommandLogger,
): Promise<void> {
	/**
	 * List of source file save promises. Used to collect modified source file save promises so we can await them all at
	 * once.
	 */
	const fileSavePromises: Promise<void>[] = [];

	log.info(`Processing: ${mainEntrypoint}`);

	const project = new Project({
		skipAddingFilesFromTsConfig: true,
		// Note: it is likely better to leverage a tsconfig file from package rather than
		// assume Node16 and no other special setup. However, currently configs are pretty
		// standard with simple Node16 module specification and using a tsconfig for just
		// part of its setting may be confusing to document and keep tidy with dual-emit.
		compilerOptions: { module: ModuleKind.Node16 },
	});
	const mainSourceFile = project.addSourceFileAtPath(mainEntrypoint);
	const exports = getApiExports(mainSourceFile);

	if (exports.unknown.length > 0) {
		log.errorLog(
			`${
				exports.unknown.length
			} export(s) found without a recognized API level:\n\t${exports.unknown.map(
				({ name, decl }) =>
					`${decl.getSourceFile().getFilePath()}:${decl.getStartLineNumber()}: ${name}`,
			)}`,
		);
	}

	// This order is critical as public should include beta should include alpha.
	const apiLevels: readonly Exclude<ApiLevel, typeof ApiLevel.internal>[] = [
		ApiLevel.public,
		ApiLevel.beta,
		ApiLevel.alpha,
	] as const;
	const namedExports: Omit<ExportSpecifierStructure, "kind">[] = [];
	for (const apiLevel of apiLevels) {
		// Append this levels additional (or only) exports sorted by ascending case-sensitive name
		const orgLength = namedExports.length;
		const levelExports = [...exports[apiLevel]].sort((a, b) => (a.name > b.name ? 1 : -1));
		for (const levelExport of levelExports) {
			namedExports.push({ ...levelExport, leadingTrivia: "\n\t" });
		}
		if (namedExports.length > orgLength) {
			namedExports[orgLength].leadingTrivia = `\n\t// ${apiLevel} APIs\n\t`;
			namedExports[namedExports.length - 1].trailingTrivia = "\n";
		}

		const outFile = `${pathPrefix}${apiLevel}${pathSuffix}`;
		log.info(`\tGenerating ${outFile}`);
		const sourceFile = project.createSourceFile(outFile, undefined, {
			overwrite: true,
			scriptKind: ScriptKind.TS,
		});

		sourceFile.insertText(0, generatedHeader);
		sourceFile.addExportDeclaration({
			moduleSpecifier: `./${mainSourceFile
				.getBaseName()
				.replace(/\.(?:d\.)?([cm]?)ts$/, ".$1js")}`,
			namedExports,
		});

		fileSavePromises.push(sourceFile.save());
	}

	await Promise.all(fileSavePromises);
}
