/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { brand } from "../../util";
import {
	FieldKindIdentifier,
	FieldStoredSchema,
	TreeStoredSchema,
	TreeSchemaIdentifier,
	ValueSchema,
} from "./schema";

/**
 * APIs to help build schema.
 *
 * See typedSchema.ts for a wrapper for these APIs that captures the types as TypeScript types
 * in addition to runtime data.
 */

/**
 * Empty readonly set.
 */
export const emptySet: ReadonlySet<never> = new Set();

/**
 * Empty readonly map.
 */
export const emptyMap: ReadonlyMap<never, never> = new Map<never, never>();

/**
 * Helper for building {@link FieldStoredSchema}.
 * @alpha
 */
export function fieldSchema(
	kind: { identifier: FieldKindIdentifier },
	types?: Iterable<TreeSchemaIdentifier>,
): FieldStoredSchema {
	return {
		kind,
		types: types === undefined ? undefined : new Set(types),
	};
}

/**
 * See {@link TreeStoredSchema} for details.
 * @alpha
 */
export interface TreeSchemaBuilder {
	readonly localFields?: { [key: string]: FieldStoredSchema };
	readonly extraLocalFields: FieldStoredSchema;
	readonly value?: ValueSchema;
}

/**
 * Helper for building {@link TreeStoredSchema}.
 */
export function treeSchema(data: TreeSchemaBuilder): TreeStoredSchema {
	const localFields = new Map();
	const local = data.localFields ?? {};
	// eslint-disable-next-line no-restricted-syntax
	for (const key in local) {
		if (Object.prototype.hasOwnProperty.call(local, key)) {
			localFields.set(brand(key), local[key]);
		}
	}

	return {
		localFields,
		extraLocalFields: data.extraLocalFields,
		value: data.value ?? ValueSchema.Nothing,
	};
}
