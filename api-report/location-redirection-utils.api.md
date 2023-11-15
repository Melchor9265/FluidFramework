## API Report File for "@fluidframework/location-redirection-utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ILocationRedirectionError } from '@fluidframework/driver-definitions';
import { IRequest } from '@fluidframework/core-interfaces';
import { ITelemetryBaseLogger } from '@fluidframework/core-interfaces';
import { IUrlResolver } from '@fluidframework/driver-definitions';

// @public
export function isLocationRedirectionError(error: any): error is ILocationRedirectionError;

// @public
export function resolveWithLocationRedirectionHandling<T>(api: (request: IRequest) => Promise<T>, request: IRequest, urlResolver: IUrlResolver, logger?: ITelemetryBaseLogger): Promise<T>;

// (No @packageDocumentation comment for this package)

```