/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { IClient } from "@fluid-example/bubblebench-common";
import { EditableField } from "@fluid-internal/tree";
import { BubbleWrapper } from "./bubble";
import { Client, FlexBubble } from "./schema";

export class ClientWrapper implements IClient {
	constructor(public readonly clientTreeProxy: Client) {}

	public get clientId() {
		return this.clientTreeProxy.clientId;
	}

	public set clientId(value: string) {
		this.clientTreeProxy.clientId = value;
	}

	public get color() {
		return this.clientTreeProxy.color;
	}
	public set color(value: string) {
		this.clientTreeProxy.color = value;
	}

	public get bubbles() {
		return Array.from(
			this.clientTreeProxy.bubbles,
			(bubbleTreeProxy) => new BubbleWrapper(bubbleTreeProxy),
		);
	}

	public increaseBubbles(bubble: FlexBubble) {
		const bubbles: EditableField = this.clientTreeProxy.bubbles;
		bubbles[bubbles.length] = bubble;
	}

	public decreaseBubbles() {
		const bubbles = this.clientTreeProxy.bubbles;
		if (bubbles.length > 1) {
			bubbles.deleteNodes(bubbles.length - 1);
		}
	}
}
