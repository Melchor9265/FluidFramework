/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { DoublyLinkedList, walkList } from "./collections/index.js";
// eslint-disable-next-line import/no-deprecated
import { ISegment, SegmentGroup } from "./mergeTreeNodes.js";

/**
 * @deprecated - This class should not be used externally and will be removed in a subsequent release.
 * @legacy
 * @alpha
 *
 * @privateRemarks After the deprecation period this class should be remove from this package's exports, and only be used internally
 */
export class SegmentGroupCollection {
	// eslint-disable-next-line import/no-deprecated
	private readonly segmentGroups: DoublyLinkedList<SegmentGroup>;

	constructor(private readonly segment: ISegment) {
		// eslint-disable-next-line import/no-deprecated
		this.segmentGroups = new DoublyLinkedList<SegmentGroup>();
	}

	public get size(): number {
		return this.segmentGroups.length;
	}

	public get empty(): boolean {
		return this.segmentGroups.empty;
	}

	// eslint-disable-next-line import/no-deprecated
	public enqueue(segmentGroup: SegmentGroup): void {
		this.segmentGroups.push(segmentGroup);
		segmentGroup.segments.push(this.segment);
	}

	// eslint-disable-next-line import/no-deprecated
	public dequeue(): SegmentGroup | undefined {
		return this.segmentGroups.shift()?.data;
	}

	// eslint-disable-next-line import/no-deprecated
	public remove?(segmentGroup: SegmentGroup): boolean {
		const found = this.segmentGroups.find((v) => v.data === segmentGroup);
		if (found === undefined) {
			return false;
		}
		this.segmentGroups.remove(found);
		return true;
	}

	// eslint-disable-next-line import/no-deprecated
	public pop?(): SegmentGroup | undefined {
		return this.segmentGroups.pop ? this.segmentGroups.pop()?.data : undefined;
	}

	public copyTo(segment: ISegment): void {
		walkList(this.segmentGroups, (sg) =>
			segment.segmentGroups.enqueueOnCopy(sg.data, this.segment),
		);
	}

	// eslint-disable-next-line import/no-deprecated
	private enqueueOnCopy(segmentGroup: SegmentGroup, sourceSegment: ISegment): void {
		this.enqueue(segmentGroup);
		if (segmentGroup.previousProps) {
			// duplicate the previousProps for this segment
			const index = segmentGroup.segments.indexOf(sourceSegment);
			if (index !== -1) {
				// TODO Non null asserting, why is this not null?
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				segmentGroup.previousProps.push(segmentGroup.previousProps[index]!);
			}
		}
	}
}
