/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { strict as assert } from "assert";
import { stub, useFakeTimers, SinonFakeTimers } from "sinon";
import { ISocketStorageDiscovery } from "@fluidframework/odsp-driver-definitions";
import { IClient, ISignalMessage } from "@fluidframework/protocol-definitions";
import { ITelemetryLoggerExt, MockLogger } from "@fluidframework/telemetry-utils";
import { Socket } from "socket.io-client";
import { EpochTracker } from "../../epochTracker";
import { LocalPersistentCache } from "../../odspCache";
import { getHashedDocumentId } from "../../odspPublicUtils";
import { OdspDocumentDeltaConnection } from "../../odspDocumentDeltaConnection";
import * as socketModule from "../../socketModule";
import * as joinSession from "../../vroom";
import { OdspDocumentService } from "../../odspDocumentService";
import { OdspDocumentServiceFactory } from "../../odspDocumentServiceFactory";
import { OdspFluidDataStoreLocator } from "../../contractsPublic";
import { createOdspUrl } from "../../createOdspUrl";
import { OdspDriverUrlResolver } from "../../odspDriverUrlResolver";
import { ClientSocketMock } from "./socketMock";

describe("DeltaConnectionMetadata update tests", () => {
	let clock: SinonFakeTimers;
	const client: IClient = {
		mode: "write",
		scopes: ["doc:read", "doc:write"],
		details: { capabilities: { interactive: true } },
		permission: [],
		user: { id: "userId" },
	};

	let logger: ITelemetryLoggerExt;
	const siteUrl = "https://microsoft.sharepoint-df.com/siteUrl";
	const driveId = "driveId";
	const itemId = "itemId";
	let epochTracker: EpochTracker;
	let localCache: LocalPersistentCache;
	let hashedDocumentId: string;
	let service: OdspDocumentService;
	let socket: ClientSocketMock | undefined;
	const resolver = new OdspDriverUrlResolver();
	const joinSessionResponse: ISocketStorageDiscovery = {
		deltaStorageUrl: "https://fake/deltaStorageUrl",
		deltaStreamSocketUrl: "https://localhost:3001",
		id: "id",
		tenantId: "tenantId",
		snapshotStorageUrl: "https://fake/snapshotStorageUrl",
		refreshSessionDurationSeconds: 100,
	};
	let odspDocumentServiceFactory: OdspDocumentServiceFactory;

	// Stash the real setTimeout because sinon fake timers will hijack it.
	const realSetTimeout = setTimeout;

	// function to yield control in the Javascript event loop.
	async function yieldEventLoop(): Promise<void> {
		await new Promise<void>((resolve) => {
			realSetTimeout(resolve, 0);
		});
	}

	async function tickClock(tickValue: number) {
		clock.tick(tickValue);

		// Yield the event loop because the outbound op will be processed asynchronously.
		await yieldEventLoop();
	}

	function addJoinSessionStub(label: string) {
		joinSessionResponse.sensitivityLabelsInfo = JSON.stringify({
			labels: label,
			timestamp: Date.now(),
		});
		const joinSessionStub = stub(joinSession, "fetchJoinSession").callsFake(
			async () => joinSessionResponse,
		);
		return joinSessionStub;
	}

	before(async () => {
		hashedDocumentId = await getHashedDocumentId(driveId, itemId);
	});

	beforeEach(async () => {
		clock = useFakeTimers();
		odspDocumentServiceFactory = new OdspDocumentServiceFactory(
			async (_options) => "token",
			async (_options) => "token",
			new LocalPersistentCache(2000),
			{ snapshotOptions: { timeout: 2000 } },
		);
		const locator: OdspFluidDataStoreLocator = { driveId, itemId, siteUrl, dataStorePath: "/" };
		const request = createOdspUrl(locator);
		const resolvedUrl = await resolver.resolve({ url: request });
		logger = new MockLogger().toTelemetryLogger();
		epochTracker = new EpochTracker(
			localCache,
			{
				docId: hashedDocumentId,
				resolvedUrl,
			},
			logger,
		);

		service = (await odspDocumentServiceFactory.createDocumentService(
			resolvedUrl,
			logger,
		)) as OdspDocumentService;
	});

	async function mockSocket<T>(_response: Socket, callback: () => Promise<T>): Promise<T> {
		const getSocketCreationStub = stub(socketModule, "SocketIOClientStatic");
		getSocketCreationStub.returns(_response);
		try {
			return await callback();
		} finally {
			getSocketCreationStub.restore();
		}
	}

	it("Delta connection metadata should be updated via Fluid signals and join session response", async () => {
		await tickClock(1);
		socket = new ClientSocketMock();
		let eventRaised = false;
		let content: Record<string, string>;

		const handler = (metadata: Record<string, string>) => {
			eventRaised = true;
			assert.strictEqual(
				JSON.parse(metadata.sensitivityLabelsInfo).labels,
				content.labels,
				"label via event should match",
			);
		};

		let joinSessionStub = addJoinSessionStub("label1");

		content = { labels: "label1" };
		service.on("metadataUpdate", handler);
		const connection = (await mockSocket(socket as unknown as Socket, async () =>
			service.connectToDeltaStream(client),
		)) as OdspDocumentDeltaConnection;
		assert(eventRaised, "event1 should have been raised");
		service.off("metadataUpdate", handler);
		joinSessionStub.restore();

		assert(!connection.disposed, "connection should not be disposed");

		assert(joinSessionStub.calledOnce, "Should called once on first try");

		await tickClock(1);

		// Now change label through signal and listen as event on service.
		eventRaised = false;
		content = { labels: "label2" };
		const signalContent1 = { labels: "label2", timestamp: Date.now() };
		const signalMessage1: ISignalMessage = {
			clientId: null,
			content: JSON.stringify({
				contents: {
					type: "PolicyLabelsUpdate",
					content: signalContent1,
				},
			}),
		};

		service.on("metadataUpdate", handler);

		socket.emit("signal", signalMessage1);
		assert(eventRaised, "event2 should have been raised");
		service.off("metadataUpdate", handler);

		await tickClock(1);

		// Now update through join session response
		eventRaised = false;
		content = { labels: "label3" };
		service.on("metadataUpdate", handler);
		joinSessionStub = addJoinSessionStub("label3");
		await tickClock(70000);
		joinSessionStub.restore();
		assert(eventRaised, "event3 should have been raised");
		service.off("metadataUpdate", handler);
	});

	afterEach(async () => {
		clock.reset();
		socket?.close();
		await epochTracker.removeEntries().catch(() => {});
	});

	afterEach(async () => {
		clock.restore();
	});
});