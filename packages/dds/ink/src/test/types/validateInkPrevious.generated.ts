/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/ink-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IClearOperation": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IClearOperation():
    TypeOnly<old.IClearOperation>;
declare function use_current_InterfaceDeclaration_IClearOperation(
    use: TypeOnly<current.IClearOperation>);
use_current_InterfaceDeclaration_IClearOperation(
    get_old_InterfaceDeclaration_IClearOperation());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IClearOperation": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IClearOperation():
    TypeOnly<current.IClearOperation>;
declare function use_old_InterfaceDeclaration_IClearOperation(
    use: TypeOnly<old.IClearOperation>);
use_old_InterfaceDeclaration_IClearOperation(
    get_current_InterfaceDeclaration_IClearOperation());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IColor": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IColor():
    TypeOnly<old.IColor>;
declare function use_current_InterfaceDeclaration_IColor(
    use: TypeOnly<current.IColor>);
use_current_InterfaceDeclaration_IColor(
    get_old_InterfaceDeclaration_IColor());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IColor": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IColor():
    TypeOnly<current.IColor>;
declare function use_old_InterfaceDeclaration_IColor(
    use: TypeOnly<old.IColor>);
use_old_InterfaceDeclaration_IColor(
    get_current_InterfaceDeclaration_IColor());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateStrokeOperation": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ICreateStrokeOperation():
    TypeOnly<old.ICreateStrokeOperation>;
declare function use_current_InterfaceDeclaration_ICreateStrokeOperation(
    use: TypeOnly<current.ICreateStrokeOperation>);
use_current_InterfaceDeclaration_ICreateStrokeOperation(
    get_old_InterfaceDeclaration_ICreateStrokeOperation());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ICreateStrokeOperation": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ICreateStrokeOperation():
    TypeOnly<current.ICreateStrokeOperation>;
declare function use_old_InterfaceDeclaration_ICreateStrokeOperation(
    use: TypeOnly<old.ICreateStrokeOperation>);
use_old_InterfaceDeclaration_ICreateStrokeOperation(
    get_current_InterfaceDeclaration_ICreateStrokeOperation());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInk": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IInk():
    TypeOnly<old.IInk>;
declare function use_current_InterfaceDeclaration_IInk(
    use: TypeOnly<current.IInk>);
use_current_InterfaceDeclaration_IInk(
    get_old_InterfaceDeclaration_IInk());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInk": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IInk():
    TypeOnly<current.IInk>;
declare function use_old_InterfaceDeclaration_IInk(
    use: TypeOnly<old.IInk>);
use_old_InterfaceDeclaration_IInk(
    get_current_InterfaceDeclaration_IInk());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInkEvents": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IInkEvents():
    TypeOnly<old.IInkEvents>;
declare function use_current_InterfaceDeclaration_IInkEvents(
    use: TypeOnly<current.IInkEvents>);
use_current_InterfaceDeclaration_IInkEvents(
    get_old_InterfaceDeclaration_IInkEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInkEvents": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IInkEvents():
    TypeOnly<current.IInkEvents>;
declare function use_old_InterfaceDeclaration_IInkEvents(
    use: TypeOnly<old.IInkEvents>);
use_old_InterfaceDeclaration_IInkEvents(
    get_current_InterfaceDeclaration_IInkEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_IInkOperation": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_IInkOperation():
    TypeOnly<old.IInkOperation>;
declare function use_current_TypeAliasDeclaration_IInkOperation(
    use: TypeOnly<current.IInkOperation>);
use_current_TypeAliasDeclaration_IInkOperation(
    get_old_TypeAliasDeclaration_IInkOperation());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_IInkOperation": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_IInkOperation():
    TypeOnly<current.IInkOperation>;
declare function use_old_TypeAliasDeclaration_IInkOperation(
    use: TypeOnly<old.IInkOperation>);
use_old_TypeAliasDeclaration_IInkOperation(
    get_current_TypeAliasDeclaration_IInkOperation());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInkPoint": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IInkPoint():
    TypeOnly<old.IInkPoint>;
declare function use_current_InterfaceDeclaration_IInkPoint(
    use: TypeOnly<current.IInkPoint>);
use_current_InterfaceDeclaration_IInkPoint(
    get_old_InterfaceDeclaration_IInkPoint());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInkPoint": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IInkPoint():
    TypeOnly<current.IInkPoint>;
declare function use_old_InterfaceDeclaration_IInkPoint(
    use: TypeOnly<old.IInkPoint>);
use_old_InterfaceDeclaration_IInkPoint(
    get_current_InterfaceDeclaration_IInkPoint());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInkStroke": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IInkStroke():
    TypeOnly<old.IInkStroke>;
declare function use_current_InterfaceDeclaration_IInkStroke(
    use: TypeOnly<current.IInkStroke>);
use_current_InterfaceDeclaration_IInkStroke(
    get_old_InterfaceDeclaration_IInkStroke());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IInkStroke": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IInkStroke():
    TypeOnly<current.IInkStroke>;
declare function use_old_InterfaceDeclaration_IInkStroke(
    use: TypeOnly<old.IInkStroke>);
use_old_InterfaceDeclaration_IInkStroke(
    get_current_InterfaceDeclaration_IInkStroke());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IPen": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IPen():
    TypeOnly<old.IPen>;
declare function use_current_InterfaceDeclaration_IPen(
    use: TypeOnly<current.IPen>);
use_current_InterfaceDeclaration_IPen(
    get_old_InterfaceDeclaration_IPen());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IPen": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IPen():
    TypeOnly<current.IPen>;
declare function use_old_InterfaceDeclaration_IPen(
    use: TypeOnly<old.IPen>);
use_old_InterfaceDeclaration_IPen(
    get_current_InterfaceDeclaration_IPen());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IStylusOperation": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IStylusOperation():
    TypeOnly<old.IStylusOperation>;
declare function use_current_InterfaceDeclaration_IStylusOperation(
    use: TypeOnly<current.IStylusOperation>);
use_current_InterfaceDeclaration_IStylusOperation(
    get_old_InterfaceDeclaration_IStylusOperation());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IStylusOperation": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IStylusOperation():
    TypeOnly<current.IStylusOperation>;
declare function use_old_InterfaceDeclaration_IStylusOperation(
    use: TypeOnly<old.IStylusOperation>);
use_old_InterfaceDeclaration_IStylusOperation(
    get_current_InterfaceDeclaration_IStylusOperation());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_Ink": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_Ink():
    TypeOnly<old.Ink>;
declare function use_current_ClassDeclaration_Ink(
    use: TypeOnly<current.Ink>);
use_current_ClassDeclaration_Ink(
    get_old_ClassDeclaration_Ink());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_Ink": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_Ink():
    TypeOnly<current.Ink>;
declare function use_old_ClassDeclaration_Ink(
    use: TypeOnly<old.Ink>);
use_old_ClassDeclaration_Ink(
    get_current_ClassDeclaration_Ink());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InkCanvas": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_InkCanvas():
    TypeOnly<old.InkCanvas>;
declare function use_current_ClassDeclaration_InkCanvas(
    use: TypeOnly<current.InkCanvas>);
use_current_ClassDeclaration_InkCanvas(
    get_old_ClassDeclaration_InkCanvas());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InkCanvas": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_InkCanvas():
    TypeOnly<current.InkCanvas>;
declare function use_old_ClassDeclaration_InkCanvas(
    use: TypeOnly<old.InkCanvas>);
use_old_ClassDeclaration_InkCanvas(
    get_current_ClassDeclaration_InkCanvas());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InkFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_InkFactory():
    TypeOnly<old.InkFactory>;
declare function use_current_ClassDeclaration_InkFactory(
    use: TypeOnly<current.InkFactory>);
use_current_ClassDeclaration_InkFactory(
    get_old_ClassDeclaration_InkFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_InkFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_InkFactory():
    TypeOnly<current.InkFactory>;
declare function use_old_ClassDeclaration_InkFactory(
    use: TypeOnly<old.InkFactory>);
use_old_ClassDeclaration_InkFactory(
    get_current_ClassDeclaration_InkFactory());
