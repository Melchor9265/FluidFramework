/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { OptionsMatrix } from "@fluid-private/test-pairwise-generator";
import { ILoaderOptions } from "@fluidframework/container-definitions/internal";
import { IContainerRuntimeOptions } from "@fluidframework/container-runtime";
import { ConfigTypes } from "@fluidframework/core-interfaces";

/** Type modeling the structure of the testConfig.json file */
export interface ITestConfig {
	profiles: { [name: string]: ILoadTestConfig | undefined };
}

/** Type modeling the profile sub-structure of the testConfig.json file */
export interface ILoadTestConfig {
	opRatePerMin: number;
	progressIntervalMs: number;
	numClients: number;
	totalSendCount: number;
	totalSignalsSendCount?: number;
	readWriteCycleMs: number;
	signalsPerMin?: number;
	futureOpRatePerMin?: number;
	faultInjectionMs?: {
		min: number;
		max: number;
	};
	opsSendType?: "allClientsConcurrentReadWrite" | "staggeredReadWrite";

	/**
	 * Simulate clients going offline
	 */
	offline?: {
		/**
		 * Amount of time to wait before going offline in milliseconds
		 */
		delayMs: {
			min: number;
			max: number;
		};
		/**
		 * Amount of time clients stay offline in milliseconds
		 */
		durationMs: {
			min: number;
			max: number;
		};
		/**
		 * Percentage of containers for which to stash pending changes when the offline period ends. Note
		 * that this will only affect containers that have offline load enabled. A float between 0 and 1,
		 * 1 meaning always stash. Default is 0.5
		 */
		stashPercent?: number;
	};
	/**
	 * Number of "attachment" type blobs to upload over the course of the test run.
	 */
	totalBlobCount?: number;
	/**
	 * Size of blob to upload in bytes. Note that some services may limit the maximum uploadable blob size (e.g. 4MB in
	 * ODSP).
	 */
	blobSize?: number;
	/**
	 * Number of "attachment" type blobs to add while detached. Note this is only supported on ODSP currently.
	 */
	detachedBlobCount?: number;

	/**
	 * Override loader options to force a specific value.
	 *
	 * The optionOverride selected is the "TestDriverType-DriverEndpoint". If it's empty then the optionOverride selected is
	 * based on "TestDriverType"
	 *
	 * "TestDriverType" and "DriverEndpoint" can be found in packages/test/test-driver-definitions/src/interfaces.ts
	 */
	optionOverrides?: Record<string, OptionOverride | undefined>;

	/**
	 * Configurations for the content of the ops generated by the tests
	 */
	content?: {
		/**
		 * Specify Ops payload size for the test run.
		 */
		opSizeinBytes?: number;
		/**
		 * Whether the ops generated should have random content.
		 * This config can be used to force a low compression ratio.
		 */
		useRandomContent?: boolean;
		/**
		 * If enabled, for each op with content, the test will generate content of random size
		 * between 0 and `opSizeinBytes`
		 */
		useVariableOpSize?: boolean;
		/**
		 * Once every `largeOpRate` ops, a large op will be sent if `opSizeinBytes` is specified.
		 * By default, all ops will be large ops (`largeOpRate` is 1).
		 */
		largeOpRate?: number;
		/**
		 * How many clients should send large ops if `opSizeinBytes` is specified.
		 * By default, only one client will send large ops.
		 */
		numClients?: number;
	};
}

export interface OptionOverride {
	loader?: Partial<OptionsMatrix<ILoaderOptions>>;
	container?: Partial<OptionsMatrix<IContainerRuntimeOptions>>;
	configurations?: OptionsMatrix<Record<string, ConfigTypes>>;
}
