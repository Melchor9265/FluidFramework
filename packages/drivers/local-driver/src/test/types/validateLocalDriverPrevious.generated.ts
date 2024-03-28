/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import type * as old from "@fluidframework/local-driver-previous";

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
* "ClassDeclaration_LocalDeltaStorageService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalDeltaStorageService():
    TypeOnly<old.LocalDeltaStorageService>;
declare function use_current_ClassDeclaration_LocalDeltaStorageService(
    use: TypeOnly<current.LocalDeltaStorageService>): void;
use_current_ClassDeclaration_LocalDeltaStorageService(
    get_old_ClassDeclaration_LocalDeltaStorageService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDeltaStorageService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalDeltaStorageService():
    TypeOnly<current.LocalDeltaStorageService>;
declare function use_old_ClassDeclaration_LocalDeltaStorageService(
    use: TypeOnly<old.LocalDeltaStorageService>): void;
use_old_ClassDeclaration_LocalDeltaStorageService(
    get_current_ClassDeclaration_LocalDeltaStorageService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentDeltaConnection": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalDocumentDeltaConnection():
    TypeOnly<old.LocalDocumentDeltaConnection>;
declare function use_current_ClassDeclaration_LocalDocumentDeltaConnection(
    use: TypeOnly<current.LocalDocumentDeltaConnection>): void;
use_current_ClassDeclaration_LocalDocumentDeltaConnection(
    get_old_ClassDeclaration_LocalDocumentDeltaConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentDeltaConnection": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalDocumentDeltaConnection():
    TypeOnly<current.LocalDocumentDeltaConnection>;
declare function use_old_ClassDeclaration_LocalDocumentDeltaConnection(
    use: TypeOnly<old.LocalDocumentDeltaConnection>): void;
use_old_ClassDeclaration_LocalDocumentDeltaConnection(
    get_current_ClassDeclaration_LocalDocumentDeltaConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalDocumentService():
    TypeOnly<old.LocalDocumentService>;
declare function use_current_ClassDeclaration_LocalDocumentService(
    use: TypeOnly<current.LocalDocumentService>): void;
use_current_ClassDeclaration_LocalDocumentService(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_LocalDocumentService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalDocumentService():
    TypeOnly<current.LocalDocumentService>;
declare function use_old_ClassDeclaration_LocalDocumentService(
    use: TypeOnly<old.LocalDocumentService>): void;
use_old_ClassDeclaration_LocalDocumentService(
    get_current_ClassDeclaration_LocalDocumentService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalDocumentServiceFactory():
    TypeOnly<old.LocalDocumentServiceFactory>;
declare function use_current_ClassDeclaration_LocalDocumentServiceFactory(
    use: TypeOnly<current.LocalDocumentServiceFactory>): void;
use_current_ClassDeclaration_LocalDocumentServiceFactory(
    get_old_ClassDeclaration_LocalDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalDocumentServiceFactory():
    TypeOnly<current.LocalDocumentServiceFactory>;
declare function use_old_ClassDeclaration_LocalDocumentServiceFactory(
    use: TypeOnly<old.LocalDocumentServiceFactory>): void;
use_old_ClassDeclaration_LocalDocumentServiceFactory(
    get_current_ClassDeclaration_LocalDocumentServiceFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentStorageService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalDocumentStorageService():
    TypeOnly<old.LocalDocumentStorageService>;
declare function use_current_ClassDeclaration_LocalDocumentStorageService(
    use: TypeOnly<current.LocalDocumentStorageService>): void;
use_current_ClassDeclaration_LocalDocumentStorageService(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_LocalDocumentStorageService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalDocumentStorageService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalDocumentStorageService():
    TypeOnly<current.LocalDocumentStorageService>;
declare function use_old_ClassDeclaration_LocalDocumentStorageService(
    use: TypeOnly<old.LocalDocumentStorageService>): void;
use_old_ClassDeclaration_LocalDocumentStorageService(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_LocalDocumentStorageService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalResolver": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalResolver():
    TypeOnly<old.LocalResolver>;
declare function use_current_ClassDeclaration_LocalResolver(
    use: TypeOnly<current.LocalResolver>): void;
use_current_ClassDeclaration_LocalResolver(
    get_old_ClassDeclaration_LocalResolver());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalResolver": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalResolver():
    TypeOnly<current.LocalResolver>;
declare function use_old_ClassDeclaration_LocalResolver(
    use: TypeOnly<old.LocalResolver>): void;
use_old_ClassDeclaration_LocalResolver(
    get_current_ClassDeclaration_LocalResolver());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalSessionStorageDbFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalSessionStorageDbFactory():
    TypeOnly<old.LocalSessionStorageDbFactory>;
declare function use_current_ClassDeclaration_LocalSessionStorageDbFactory(
    use: TypeOnly<current.LocalSessionStorageDbFactory>): void;
use_current_ClassDeclaration_LocalSessionStorageDbFactory(
    get_old_ClassDeclaration_LocalSessionStorageDbFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalSessionStorageDbFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalSessionStorageDbFactory():
    TypeOnly<current.LocalSessionStorageDbFactory>;
declare function use_old_ClassDeclaration_LocalSessionStorageDbFactory(
    use: TypeOnly<old.LocalSessionStorageDbFactory>): void;
use_old_ClassDeclaration_LocalSessionStorageDbFactory(
    get_current_ClassDeclaration_LocalSessionStorageDbFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createLocalDocumentService": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_createLocalDocumentService():
    TypeOnly<typeof old.createLocalDocumentService>;
declare function use_current_FunctionDeclaration_createLocalDocumentService(
    use: TypeOnly<typeof current.createLocalDocumentService>): void;
use_current_FunctionDeclaration_createLocalDocumentService(
    get_old_FunctionDeclaration_createLocalDocumentService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createLocalDocumentService": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_createLocalDocumentService():
    TypeOnly<typeof current.createLocalDocumentService>;
declare function use_old_FunctionDeclaration_createLocalDocumentService(
    use: TypeOnly<typeof old.createLocalDocumentService>): void;
use_old_FunctionDeclaration_createLocalDocumentService(
    get_current_FunctionDeclaration_createLocalDocumentService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createLocalResolverCreateNewRequest": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_createLocalResolverCreateNewRequest():
    TypeOnly<typeof old.createLocalResolverCreateNewRequest>;
declare function use_current_FunctionDeclaration_createLocalResolverCreateNewRequest(
    use: TypeOnly<typeof current.createLocalResolverCreateNewRequest>): void;
use_current_FunctionDeclaration_createLocalResolverCreateNewRequest(
    get_old_FunctionDeclaration_createLocalResolverCreateNewRequest());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_createLocalResolverCreateNewRequest": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_createLocalResolverCreateNewRequest():
    TypeOnly<typeof current.createLocalResolverCreateNewRequest>;
declare function use_old_FunctionDeclaration_createLocalResolverCreateNewRequest(
    use: TypeOnly<typeof old.createLocalResolverCreateNewRequest>): void;
use_old_FunctionDeclaration_createLocalResolverCreateNewRequest(
    get_current_FunctionDeclaration_createLocalResolverCreateNewRequest());
