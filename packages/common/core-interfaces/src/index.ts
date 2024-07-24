/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

export type { IDisposable } from "./disposable.js";

export type { IErrorBase, IGenericError, IUsageError, IThrottlingWarning } from "./error.js";
export { FluidErrorTypes } from "./error.js";

export type {
	ExtendEventProvider,
	IErrorEvent,
	IEvent,
	IEventProvider,
	IEventThisPlaceHolder,
	IEventTransformer,
	ReplaceIEventThisPlaceHolder,
	TransformedEvent,
} from "./events.js";

export type { IProvideFluidLoadable, IProvideFluidRunnable } from "./fluidLoadable.js";
export { IFluidLoadable, IFluidRunnable } from "./fluidLoadable.js";

// TypeScript forgets the index signature when customers augment IRequestHeader if we export *.
// So we export the explicit members as a workaround:
// https://github.com/microsoft/TypeScript/issues/18877#issuecomment-476921038
export type { IRequest, IRequestHeader, IResponse } from "./fluidRouter.js";

export type {
	IProvideFluidHandleContext,
	IProvideFluidHandle,
	IFluidHandleInternal,
	IFluidHandleErased,
} from "./handles.js";
export { IFluidHandleContext, IFluidHandle, fluidHandleSymbol } from "./handles.js";

export type { JsonDeserialized, JsonDeserializedOptions } from "./jsonDeserialized.js";
export type { JsonSerializable, JsonSerializableOptions } from "./jsonSerializable.js";
export type {
	SerializationErrorPerNonPublicProperties,
	SerializationErrorPerUndefinedArrayElement,
} from "./jsonSerializationErrors.js";
export type { JsonTypeWith, NonNullJsonObjectWith } from "./jsonType.js";

export type {
	ILoggingError,
	ITelemetryBaseEvent,
	ITelemetryBaseLogger,
	ITelemetryBaseProperties,
	Tagged,
	TelemetryBaseEventPropertyType,
} from "./logger.js";
export { LogLevel } from "./logger.js";
export type { FluidObjectProviderKeys, FluidObject, FluidObjectKeys } from "./provider.js";
export type { ConfigTypes, IConfigProviderBase } from "./config.js";
export type { ISignalEnvelope } from "./messages.js";
export type { ErasedType } from "./erasedType.js";

// eslint-disable-next-line no-restricted-syntax
export type * from "./exposedUtilityTypes.js";
