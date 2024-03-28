/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import type * as old from "@fluidframework/fluid-runner-previous";

import type * as current from "../../index.js";


// See 'build-tools/src/type-test-generator/compatibility.ts' for more information.
type TypeOnly<T> = T extends number
	? number
	: T extends string
	? string
	: T extends boolean | bigint | symbol
	? T
	: {
			[P in keyof T]: TypeOnly<T[P]>;
	  };

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICodeLoaderBundle": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICodeLoaderBundle():
    TypeOnly<old.ICodeLoaderBundle>;
declare function use_current_InterfaceDeclaration_ICodeLoaderBundle(
    use: TypeOnly<current.ICodeLoaderBundle>): void;
use_current_InterfaceDeclaration_ICodeLoaderBundle(
    get_old_InterfaceDeclaration_ICodeLoaderBundle());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICodeLoaderBundle": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICodeLoaderBundle():
    TypeOnly<current.ICodeLoaderBundle>;
declare function use_old_InterfaceDeclaration_ICodeLoaderBundle(
    use: TypeOnly<old.ICodeLoaderBundle>): void;
use_old_InterfaceDeclaration_ICodeLoaderBundle(
    get_current_InterfaceDeclaration_ICodeLoaderBundle());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_IExportFileResponse": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_IExportFileResponse():
    TypeOnly<old.IExportFileResponse>;
declare function use_current_TypeAliasDeclaration_IExportFileResponse(
    use: TypeOnly<current.IExportFileResponse>): void;
use_current_TypeAliasDeclaration_IExportFileResponse(
    get_old_TypeAliasDeclaration_IExportFileResponse());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_IExportFileResponse": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_IExportFileResponse():
    TypeOnly<current.IExportFileResponse>;
declare function use_old_TypeAliasDeclaration_IExportFileResponse(
    use: TypeOnly<old.IExportFileResponse>): void;
use_old_TypeAliasDeclaration_IExportFileResponse(
    get_current_TypeAliasDeclaration_IExportFileResponse());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidFileConverter": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFluidFileConverter():
    TypeOnly<old.IFluidFileConverter>;
declare function use_current_InterfaceDeclaration_IFluidFileConverter(
    use: TypeOnly<current.IFluidFileConverter>): void;
use_current_InterfaceDeclaration_IFluidFileConverter(
    get_old_InterfaceDeclaration_IFluidFileConverter());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFluidFileConverter": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFluidFileConverter():
    TypeOnly<current.IFluidFileConverter>;
declare function use_old_InterfaceDeclaration_IFluidFileConverter(
    use: TypeOnly<old.IFluidFileConverter>): void;
use_old_InterfaceDeclaration_IFluidFileConverter(
    get_current_InterfaceDeclaration_IFluidFileConverter());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITelemetryOptions": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITelemetryOptions():
    TypeOnly<old.ITelemetryOptions>;
declare function use_current_InterfaceDeclaration_ITelemetryOptions(
    use: TypeOnly<current.ITelemetryOptions>): void;
use_current_InterfaceDeclaration_ITelemetryOptions(
    get_old_InterfaceDeclaration_ITelemetryOptions());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITelemetryOptions": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITelemetryOptions():
    TypeOnly<current.ITelemetryOptions>;
declare function use_old_InterfaceDeclaration_ITelemetryOptions(
    use: TypeOnly<old.ITelemetryOptions>): void;
use_old_InterfaceDeclaration_ITelemetryOptions(
    get_current_InterfaceDeclaration_ITelemetryOptions());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_OutputFormat": {"forwardCompat": false}
*/
declare function get_old_EnumDeclaration_OutputFormat():
    TypeOnly<old.OutputFormat>;
declare function use_current_EnumDeclaration_OutputFormat(
    use: TypeOnly<current.OutputFormat>): void;
use_current_EnumDeclaration_OutputFormat(
    get_old_EnumDeclaration_OutputFormat());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_OutputFormat": {"backCompat": false}
*/
declare function get_current_EnumDeclaration_OutputFormat():
    TypeOnly<current.OutputFormat>;
declare function use_old_EnumDeclaration_OutputFormat(
    use: TypeOnly<old.OutputFormat>): void;
use_old_EnumDeclaration_OutputFormat(
    get_current_EnumDeclaration_OutputFormat());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createContainerAndExecute": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_createContainerAndExecute():
    TypeOnly<typeof old.createContainerAndExecute>;
declare function use_current_FunctionDeclaration_createContainerAndExecute(
    use: TypeOnly<typeof current.createContainerAndExecute>): void;
use_current_FunctionDeclaration_createContainerAndExecute(
    get_old_FunctionDeclaration_createContainerAndExecute());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createContainerAndExecute": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_createContainerAndExecute():
    TypeOnly<typeof current.createContainerAndExecute>;
declare function use_old_FunctionDeclaration_createContainerAndExecute(
    use: TypeOnly<typeof old.createContainerAndExecute>): void;
use_old_FunctionDeclaration_createContainerAndExecute(
    get_current_FunctionDeclaration_createContainerAndExecute());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createLogger": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_createLogger():
    TypeOnly<typeof old.createLogger>;
declare function use_current_FunctionDeclaration_createLogger(
    use: TypeOnly<typeof current.createLogger>): void;
use_current_FunctionDeclaration_createLogger(
    get_old_FunctionDeclaration_createLogger());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createLogger": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_createLogger():
    TypeOnly<typeof current.createLogger>;
declare function use_old_FunctionDeclaration_createLogger(
    use: TypeOnly<typeof old.createLogger>): void;
use_old_FunctionDeclaration_createLogger(
    get_current_FunctionDeclaration_createLogger());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_exportFile": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_exportFile():
    TypeOnly<typeof old.exportFile>;
declare function use_current_FunctionDeclaration_exportFile(
    use: TypeOnly<typeof current.exportFile>): void;
use_current_FunctionDeclaration_exportFile(
    get_old_FunctionDeclaration_exportFile());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_exportFile": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_exportFile():
    TypeOnly<typeof current.exportFile>;
declare function use_old_FunctionDeclaration_exportFile(
    use: TypeOnly<typeof old.exportFile>): void;
use_old_FunctionDeclaration_exportFile(
    get_current_FunctionDeclaration_exportFile());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_fluidRunner": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_fluidRunner():
    TypeOnly<typeof old.fluidRunner>;
declare function use_current_FunctionDeclaration_fluidRunner(
    use: TypeOnly<typeof current.fluidRunner>): void;
use_current_FunctionDeclaration_fluidRunner(
    get_old_FunctionDeclaration_fluidRunner());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_fluidRunner": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_fluidRunner():
    TypeOnly<typeof current.fluidRunner>;
declare function use_old_FunctionDeclaration_fluidRunner(
    use: TypeOnly<typeof old.fluidRunner>): void;
use_old_FunctionDeclaration_fluidRunner(
    get_current_FunctionDeclaration_fluidRunner());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getSnapshotFileContent": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getSnapshotFileContent():
    TypeOnly<typeof old.getSnapshotFileContent>;
declare function use_current_FunctionDeclaration_getSnapshotFileContent(
    use: TypeOnly<typeof current.getSnapshotFileContent>): void;
use_current_FunctionDeclaration_getSnapshotFileContent(
    get_old_FunctionDeclaration_getSnapshotFileContent());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getSnapshotFileContent": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getSnapshotFileContent():
    TypeOnly<typeof current.getSnapshotFileContent>;
declare function use_old_FunctionDeclaration_getSnapshotFileContent(
    use: TypeOnly<typeof old.getSnapshotFileContent>): void;
use_old_FunctionDeclaration_getSnapshotFileContent(
    get_current_FunctionDeclaration_getSnapshotFileContent());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getTelemetryFileValidationError": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_getTelemetryFileValidationError():
    TypeOnly<typeof old.getTelemetryFileValidationError>;
declare function use_current_FunctionDeclaration_getTelemetryFileValidationError(
    use: TypeOnly<typeof current.getTelemetryFileValidationError>): void;
use_current_FunctionDeclaration_getTelemetryFileValidationError(
    get_old_FunctionDeclaration_getTelemetryFileValidationError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_getTelemetryFileValidationError": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_getTelemetryFileValidationError():
    TypeOnly<typeof current.getTelemetryFileValidationError>;
declare function use_old_FunctionDeclaration_getTelemetryFileValidationError(
    use: TypeOnly<typeof old.getTelemetryFileValidationError>): void;
use_old_FunctionDeclaration_getTelemetryFileValidationError(
    get_current_FunctionDeclaration_getTelemetryFileValidationError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_parseBundleAndExportFile": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_parseBundleAndExportFile():
    TypeOnly<typeof old.parseBundleAndExportFile>;
declare function use_current_FunctionDeclaration_parseBundleAndExportFile(
    use: TypeOnly<typeof current.parseBundleAndExportFile>): void;
use_current_FunctionDeclaration_parseBundleAndExportFile(
    get_old_FunctionDeclaration_parseBundleAndExportFile());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_parseBundleAndExportFile": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_parseBundleAndExportFile():
    TypeOnly<typeof current.parseBundleAndExportFile>;
declare function use_old_FunctionDeclaration_parseBundleAndExportFile(
    use: TypeOnly<typeof old.parseBundleAndExportFile>): void;
use_old_FunctionDeclaration_parseBundleAndExportFile(
    get_current_FunctionDeclaration_parseBundleAndExportFile());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_validateAndParseTelemetryOptions": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_validateAndParseTelemetryOptions():
    TypeOnly<typeof old.validateAndParseTelemetryOptions>;
declare function use_current_FunctionDeclaration_validateAndParseTelemetryOptions(
    use: TypeOnly<typeof current.validateAndParseTelemetryOptions>): void;
use_current_FunctionDeclaration_validateAndParseTelemetryOptions(
    get_old_FunctionDeclaration_validateAndParseTelemetryOptions());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_validateAndParseTelemetryOptions": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_validateAndParseTelemetryOptions():
    TypeOnly<typeof current.validateAndParseTelemetryOptions>;
declare function use_old_FunctionDeclaration_validateAndParseTelemetryOptions(
    use: TypeOnly<typeof old.validateAndParseTelemetryOptions>): void;
use_old_FunctionDeclaration_validateAndParseTelemetryOptions(
    get_current_FunctionDeclaration_validateAndParseTelemetryOptions());
