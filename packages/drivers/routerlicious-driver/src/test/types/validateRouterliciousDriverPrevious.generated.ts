/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import type * as old from "@fluidframework/routerlicious-driver-previous";

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
* "ClassDeclaration_DefaultTokenProvider": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DefaultTokenProvider():
    TypeOnly<old.DefaultTokenProvider>;
declare function use_current_ClassDeclaration_DefaultTokenProvider(
    use: TypeOnly<current.DefaultTokenProvider>): void;
use_current_ClassDeclaration_DefaultTokenProvider(
    get_old_ClassDeclaration_DefaultTokenProvider());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DefaultTokenProvider": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DefaultTokenProvider():
    TypeOnly<current.DefaultTokenProvider>;
declare function use_old_ClassDeclaration_DefaultTokenProvider(
    use: TypeOnly<old.DefaultTokenProvider>): void;
use_old_ClassDeclaration_DefaultTokenProvider(
    get_current_ClassDeclaration_DefaultTokenProvider());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DocumentPostCreateError": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DocumentPostCreateError():
    TypeOnly<old.DocumentPostCreateError>;
declare function use_current_ClassDeclaration_DocumentPostCreateError(
    use: TypeOnly<current.DocumentPostCreateError>): void;
use_current_ClassDeclaration_DocumentPostCreateError(
    get_old_ClassDeclaration_DocumentPostCreateError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DocumentPostCreateError": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DocumentPostCreateError():
    TypeOnly<current.DocumentPostCreateError>;
declare function use_old_ClassDeclaration_DocumentPostCreateError(
    use: TypeOnly<old.DocumentPostCreateError>): void;
use_old_ClassDeclaration_DocumentPostCreateError(
    get_current_ClassDeclaration_DocumentPostCreateError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRouterliciousDriverPolicies": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IRouterliciousDriverPolicies():
    TypeOnly<old.IRouterliciousDriverPolicies>;
declare function use_current_InterfaceDeclaration_IRouterliciousDriverPolicies(
    use: TypeOnly<current.IRouterliciousDriverPolicies>): void;
use_current_InterfaceDeclaration_IRouterliciousDriverPolicies(
    get_old_InterfaceDeclaration_IRouterliciousDriverPolicies());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IRouterliciousDriverPolicies": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IRouterliciousDriverPolicies():
    TypeOnly<current.IRouterliciousDriverPolicies>;
declare function use_old_InterfaceDeclaration_IRouterliciousDriverPolicies(
    use: TypeOnly<old.IRouterliciousDriverPolicies>): void;
use_old_InterfaceDeclaration_IRouterliciousDriverPolicies(
    // @ts-expect-error compatibility expected to be broken
    get_current_InterfaceDeclaration_IRouterliciousDriverPolicies());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITokenProvider": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITokenProvider():
    TypeOnly<old.ITokenProvider>;
declare function use_current_InterfaceDeclaration_ITokenProvider(
    use: TypeOnly<current.ITokenProvider>): void;
use_current_InterfaceDeclaration_ITokenProvider(
    get_old_InterfaceDeclaration_ITokenProvider());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITokenProvider": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITokenProvider():
    TypeOnly<current.ITokenProvider>;
declare function use_old_InterfaceDeclaration_ITokenProvider(
    use: TypeOnly<old.ITokenProvider>): void;
use_old_InterfaceDeclaration_ITokenProvider(
    get_current_InterfaceDeclaration_ITokenProvider());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITokenResponse": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITokenResponse():
    TypeOnly<old.ITokenResponse>;
declare function use_current_InterfaceDeclaration_ITokenResponse(
    use: TypeOnly<current.ITokenResponse>): void;
use_current_InterfaceDeclaration_ITokenResponse(
    get_old_InterfaceDeclaration_ITokenResponse());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITokenResponse": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITokenResponse():
    TypeOnly<current.ITokenResponse>;
declare function use_old_InterfaceDeclaration_ITokenResponse(
    use: TypeOnly<old.ITokenResponse>): void;
use_old_InterfaceDeclaration_ITokenResponse(
    get_current_InterfaceDeclaration_ITokenResponse());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITokenService": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ITokenService():
    TypeOnly<old.ITokenService>;
declare function use_current_InterfaceDeclaration_ITokenService(
    use: TypeOnly<current.ITokenService>): void;
use_current_InterfaceDeclaration_ITokenService(
    get_old_InterfaceDeclaration_ITokenService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ITokenService": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ITokenService():
    TypeOnly<current.ITokenService>;
declare function use_old_InterfaceDeclaration_ITokenService(
    use: TypeOnly<old.ITokenService>): void;
use_old_InterfaceDeclaration_ITokenService(
    get_current_InterfaceDeclaration_ITokenService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RouterliciousDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_RouterliciousDocumentServiceFactory():
    TypeOnly<old.RouterliciousDocumentServiceFactory>;
declare function use_current_ClassDeclaration_RouterliciousDocumentServiceFactory(
    use: TypeOnly<current.RouterliciousDocumentServiceFactory>): void;
use_current_ClassDeclaration_RouterliciousDocumentServiceFactory(
    get_old_ClassDeclaration_RouterliciousDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RouterliciousDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_RouterliciousDocumentServiceFactory():
    TypeOnly<current.RouterliciousDocumentServiceFactory>;
declare function use_old_ClassDeclaration_RouterliciousDocumentServiceFactory(
    use: TypeOnly<old.RouterliciousDocumentServiceFactory>): void;
use_old_ClassDeclaration_RouterliciousDocumentServiceFactory(
    get_current_ClassDeclaration_RouterliciousDocumentServiceFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedEnumDeclaration_RouterliciousErrorType": {"forwardCompat": false}
*/

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedEnumDeclaration_RouterliciousErrorType": {"backCompat": false}
*/

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_RouterliciousErrorTypes": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_RouterliciousErrorTypes():
    TypeOnly<typeof old.RouterliciousErrorTypes>;
declare function use_current_VariableDeclaration_RouterliciousErrorTypes(
    use: TypeOnly<typeof current.RouterliciousErrorTypes>): void;
use_current_VariableDeclaration_RouterliciousErrorTypes(
    get_old_VariableDeclaration_RouterliciousErrorTypes());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_RouterliciousErrorTypes": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_RouterliciousErrorTypes():
    TypeOnly<typeof current.RouterliciousErrorTypes>;
declare function use_old_VariableDeclaration_RouterliciousErrorTypes(
    use: TypeOnly<typeof old.RouterliciousErrorTypes>): void;
use_old_VariableDeclaration_RouterliciousErrorTypes(
    get_current_VariableDeclaration_RouterliciousErrorTypes());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_RouterliciousErrorTypes": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_RouterliciousErrorTypes():
    TypeOnly<old.RouterliciousErrorTypes>;
declare function use_current_TypeAliasDeclaration_RouterliciousErrorTypes(
    use: TypeOnly<current.RouterliciousErrorTypes>): void;
use_current_TypeAliasDeclaration_RouterliciousErrorTypes(
    get_old_TypeAliasDeclaration_RouterliciousErrorTypes());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_RouterliciousErrorTypes": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_RouterliciousErrorTypes():
    TypeOnly<current.RouterliciousErrorTypes>;
declare function use_old_TypeAliasDeclaration_RouterliciousErrorTypes(
    use: TypeOnly<old.RouterliciousErrorTypes>): void;
use_old_TypeAliasDeclaration_RouterliciousErrorTypes(
    get_current_TypeAliasDeclaration_RouterliciousErrorTypes());
