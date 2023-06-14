/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { defaultLogger } from "./logging";

const { log } = defaultLogger;

export class Timer {
	private lastTime: number = Date.now();
	private totalTime: number = 0;

	constructor(private enabled: boolean) {}
	public time(msg?: string, print?: boolean) {
		const currTime = Date.now();
		const diffTime = currTime - this.lastTime;
		this.lastTime = currTime;
		const diffTimeInSeconds = diffTime / 1000;
		if (msg) {
			if (this.enabled) {
				if (diffTime > 100) {
					log(`${msg} - ${diffTimeInSeconds.toFixed(3)}s`);
				} else {
					log(`${msg} - ${diffTime}ms`);
				}
			} else if (print) {
				log(msg);
			}
		}
		this.totalTime += diffTime;
		return diffTimeInSeconds;
	}

	public getTotalTime() {
		return this.totalTime;
	}
}
