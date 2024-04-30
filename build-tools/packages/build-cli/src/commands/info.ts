/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { Flags } from "@oclif/core";
import { type ColumnUserConfig, table } from "table";

import type { Package } from "@fluidframework/build-tools";
import { BaseCommand } from "../base";
import { releaseGroupFlag } from "../flags";
// eslint-disable-next-line import/no-deprecated
import { isMonoRepoKind } from "../library";

interface ColumnInfo {
	/**
	 * Function to extract column value from a Package instance.
	 */
	fn: (pkg: Package) => string;

	/**
	 * Control the appearance of the column
	 */
	style: ColumnUserConfig;
}

/**
 * Map lowercased column name to corresponding ColumnInfo.
 */
const nameToColumnInfo: Record<string, ColumnInfo> = {
	releaseGroup: {
		fn: (pkg: Package) => pkg.monoRepo?.kind ?? "n/a",
		style: { alignment: "left" },
	},
	name: { fn: (pkg: Package) => pkg.name, style: { alignment: "left" } },
	private: {
		fn: (pkg: Package) => (pkg.packageJson.private === true ? "-private-" : ""),
		style: { alignment: "center" },
	},
	version: {
		fn: (pkg: Package) => (pkg.monoRepo ? pkg.monoRepo.version : pkg.version),
		style: { alignment: "left" },
	},
	path: {
		fn: (pkg: Package) => pkg.directory,
		style: { alignment: "left" },
	},
};

/**
 * The root `info` command.
 */
export default class InfoCommand extends BaseCommand<typeof InfoCommand> {
	static readonly description = "Get info about the repo, release groups, and packages.";

	static readonly flags = {
		releaseGroup: releaseGroupFlag({
			required: false,
		}),
		columns: Flags.option({
			char: "c",
			description: "Specify which columns are included in report.",
			aliases: ["columns"],
			// Extract the list of valid options from the keys of 'nameToColumnInfo'.
			options: Object.keys(nameToColumnInfo),
			// Include all columns by default except for "path".  (Including "path" tends
			// to make the table extra wide.)
			default: Object.keys(nameToColumnInfo).filter((name) => name !== "path"),
			delimiter: ",",
			multiple: true,
		})(),
		private: Flags.boolean({
			allowNo: true,
			char: "p",
			default: true,
			description: "Include private packages (default true).",
			required: false,
		}),
		...BaseCommand.flags,
	};

	static readonly enableJsonFlag: boolean = true;

	async run(): Promise<Record<string, string>[]> {
		const { flags } = this;
		const context = await this.getContext();
		let packages =
			// eslint-disable-next-line import/no-deprecated
			flags.releaseGroup !== undefined && isMonoRepoKind(flags.releaseGroup)
				? context.packagesInReleaseGroup(flags.releaseGroup)
				: [...context.fullPackageMap.values()];

		// Sort by packages by name (invariant sort by codepoints).
		packages.sort((left, right) => Number(left.name > right.name) || -(left.name < right.name));

		// Filter out private packages
		if (!flags.private) {
			packages = packages.filter((p) => p.packageJson.private !== true);
		}

		const columnNames = flags.columns;
		const columns = columnNames.map((name) => nameToColumnInfo[name]);

		// Initialize 'tableData' with Pascal cased column names.
		const tableData = [
			columnNames.map((name) => {
				return name.charAt(0).toUpperCase() + name.slice(1);
			}),
		];
		const jsonData: Record<string, string>[] = [];

		for (const pkg of packages) {
			// Create a row for the current package.
			const tableRow: string[] = [];
			const jsonRow: Record<string, string> = {};

			// Copy the corresponding column info into the row.
			for (const [index, { fn }] of columns.entries()) {
				const name = columnNames[index];
				const value = fn(pkg);
				tableRow.push(value);
				jsonRow[name] = value;
			}

			// Append the row to the data.
			tableData.push(tableRow);
			jsonData.push(jsonRow);
		}

		const output = table(tableData, {
			columns: columns.map((column) => column.style),
			singleLine: true,
		});

		this.log(`\n${output}`);
		this.log(`Total package count: ${packages.length}`);
		return jsonData;
	}
}
