/* global log, dbg, snowflake */

/**
Communication with the snowflake broker.

Browser snowflakes must register with the broker in order
to get assigned to clients.
*/

// Represents a broker running remotely.
class Broker {

  /**
   * When interacting with the Broker, snowflake must generate a unique session
   * ID so the Broker can keep track of each proxy's signalling channels.
   * On construction, this Broker object does not do anything until
   * `getClientOffer` is called.
   * @param {Config} config
   */
  constructor(config) {
    this.getClientOffer = this.getClientOffer.bind(this);
    this._postRequest = this._postRequest.bind(this);
    this.setNATType = this.setNATType.bind(this);

    this.config = config;
    this.url = config.brokerUrl;
    this.natType = "unknown";
    if (0 === this.url.indexOf('localhost', 0)) {
      // Ensure url has the right protocol + trailing slash.
      this.url = 'http://' + this.url;
    }
    if (0 !== this.url.indexOf('http', 0)) {
      this.url = 'https://' + this.url;
    }
    if ('/' !== this.url.substr(-1)) {
      this.url += '/';
    }
  }

  /**
   * Promises some client SDP Offer.
   * Registers this Snowflake with the broker using an HTTP POST request, and
   * waits for a response containing some client offer that the Broker chooses
   * for this proxy..
   * Rejects on timeout or on error.
   * TODO: Actually support multiple clients.
   */
  getClientOffer(id, numClientsConnected) {
    return new Promise((fulfill, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.DONE !== xhr.readyState) {
          return;
        }
        if (xhr.status !== Broker.CODE.OK) {
          log('Broker ERROR: Unexpected ' + xhr.status + ' - ' + xhr.statusText);
          snowflake.ui.setStatus(' failure. Please refresh.');
          reject(Broker.MESSAGE.UNEXPECTED);
          return;
        }
        const response = JSON.parse(xhr.responseText);
        switch (response.Status) {
          case Broker.STATUS.MATCH: fulfill(response); return;
          case Broker.STATUS.TIMEOUT: reject(Broker.MESSAGE.TIMEOUT); return;
          default: {
            log('Broker ERROR: Unexpected ' + response.Status);
            reject(Broker.MESSAGE.UNEXPECTED);
            return;
          }
        }
      };
      this._xhr = xhr; // Used by spec to fake async Broker interaction
      const clients = Math.floor(numClientsConnected / 8) * 8;
      const data = {
        Version: "1.3",
        Sid: id,
        Type: this.config.proxyType,
        NAT: this.natType,
        Clients: clients,
        AcceptedRelayPattern: this.config.allowedRelayPattern,
      };
      this._postRequest(xhr, 'proxy', JSON.stringify(data));
    });
  }

  /**
   * Assumes getClientOffer happened, and a WebRTC SDP answer has been generated.
   * Sends it back to the broker, which passes it to back to the original client.
   * @param {string} id
   * @param {RTCSessionDescription} answer
   */
  sendAnswer(id, answer) {
    dbg(id + ' - Sending answer back to broker...\n');
    dbg(answer.sdp);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.DONE !== xhr.readyState) {
        return;
      }
      switch (xhr.status) {
        case Broker.CODE.OK:
          dbg('Broker: Successfully replied with answer.');
          dbg(xhr.responseText);
          break;
        default:
          dbg('Broker ERROR: Unexpected ' + xhr.status + ' - ' + xhr.statusText);
          snowflake.ui.setStatus(' failure. Please refresh.');
          break;
      }
    };
    const data = {"Version": "1.0", "Sid": id, "Answer": JSON.stringify(answer)};
    this._postRequest(xhr, 'answer', JSON.stringify(data));
  }

  setNATType(natType) {
    this.natType = natType;
  }

  /**
   * @param {XMLHttpRequest} xhr
   * @param {string} urlSuffix for the broker is different depending on what action
   * is desired.
   * @param {string} payload
   */
  _postRequest(xhr, urlSuffix, payload) {
    try {
      xhr.open('POST', this.url + urlSuffix);
    } catch (err) {
      /*
      An exception happens here when, for example, NoScript allows the domain
      on which the proxy badge runs, but not the domain to which it's trying
      to make the HTTP xhr. The exception message is like "Component
      returned failure code: 0x805e0006 [nsIXMLHttpRequest.open]" on Firefox.
      */
      log('Broker: exception while connecting: ' + err.message);
      return;
    }
    xhr.send(payload);
  }

}

Broker.CODE = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500
};

Broker.STATUS = {
  MATCH: "client match",
  TIMEOUT: "no match"
};

Broker.MESSAGE = {
  TIMEOUT: 'Timed out waiting for a client offer.',
  UNEXPECTED: 'Unexpected status.'
};


class Config {
  constructor(proxyType) {
    this.proxyType = proxyType || '';
  }
}

Config.prototype.brokerUrl = 'snowflake-broker.torproject.net';

Config.prototype.defaultRelayAddr = 'wss://snowflake.freehaven.net';

// Original non-wss relay:
// host: '192.81.135.242'
// port: 9902

// Bytes per second. Set to undefined to disable limit.
Config.prototype.rateLimitBytes = undefined;

Config.prototype.minRateLimit = 10 * 1024;

Config.prototype.rateLimitHistory = 5.0;

Config.prototype.defaultBrokerPollInterval = 60.0 * 1000; //1 poll every minutes
Config.prototype.slowestBrokerPollInterval = 6 * 60 * 60.0 * 1000; //1 poll every 6 hours
Config.prototype.pollAdjustment = 100.0 * 1000;
Config.prototype.fastBrokerPollInterval = 30 * 1000; //1 poll every 30 seconds

// Recheck our NAT type once every 2 days
Config.prototype.natCheckInterval = 2 * 24 * 60 * 60 * 1000;

// Timeout after sending answer before datachannel is opened
Config.prototype.datachannelTimeout = 20 * 1000;

// Timeout to close proxypair if no messages are sent
Config.prototype.messageTimeout = 30 * 1000;

// This must be smaller than the clien't timeout (`ClientTimeout`)
// (which is 5 seconds by default as of now), otherwise the client would be
// gone before we send the answer.
// And it, obviously, must be smaller than `datachannelTimeout`.
Config.prototype.answerTimeout = 3 * 1000;

Config.prototype.maxNumClients = 1;

Config.prototype.proxyType = "";

// TODO: Different ICE servers.
Config.prototype.pcConfig = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302']
    }
  ]
};

Config.PROBEURL = "https://snowflake-broker.torproject.net:8443/probe";

Config.prototype.allowedRelayPattern="snowflake.torproject.net";
/* global snowflake, log, dbg, debug, Util, Parse, WS */

/**
Represents a single:

   client <-- webrtc --> snowflake <-- websocket --> relay

Every ProxyPair has a Snowflake ID, which is necessary when responding to the
Broker with an WebRTC answer.
*/

class ProxyPair {

  /**
   * @param {DummyRateLimit | BucketRateLimit} rateLimit specifies a rate limit on traffic
   * @param {Config} config
   */
  constructor(rateLimit, config) {
    this.prepareDataChannel = this.prepareDataChannel.bind(this);
    this.connectRelay = this.connectRelay.bind(this);
    this.onClientToRelayMessage = this.onClientToRelayMessage.bind(this);
    this.onRelayToClientMessage = this.onRelayToClientMessage.bind(this);
    this.onError = this.onError.bind(this);
    this.flush = this.flush.bind(this);

    /** @type {string | URL} */
    this.relayURL = config.defaultRelayAddr;
    this.rateLimit = rateLimit;
    this.config = config;
    this.id = Util.genSnowflakeID();
    this.c2rSchedule = [];
    this.r2cSchedule = [];
    this.nowConnected = false;
  }

  /** Prepare a WebRTC PeerConnection and await for an SDP offer. */
  begin() {
    /** @private */
    this.pc = new RTCPeerConnection(this.config.pcConfig);
    // OnDataChannel triggered remotely from the client when connection succeeds.
    this.pc.ondatachannel = ({ channel }) => {
      dbg('Data Channel established...');
      this.prepareDataChannel(channel);
      /** @private */
      this.client = channel;
    };
  }

  /**
   * @param {RTCSessionDescription} offer
   * @param {(answer: RTCSessionDescription) => void} sendAnswer
   * @returns {boolean} `true` on success, `false` on fail.
   */
  receiveWebRTCOffer(offer, sendAnswer) {
    if ('offer' !== offer.type) {
      log('Invalid SDP received -- was not an offer.');
      return false;
    }
    dbg('SDP ' + offer.type + ' successfully received.');

    this.pc.setRemoteDescription(offer)
    // Since we don't have a singaling channel, besides the initial offer/answer,
    // mark the end of ICE candidates, in case it's not already marked in the offer.
    .then(() => this.pc.addIceCandidate({ candidate: '' }))
    .then(() => this.pc.createAnswer())
    .then((sdp) => {
      dbg('webrtc: Answer ready.');
      return this.pc.setLocalDescription(sdp);
    })
    .catch(() => {
      this.close();
      dbg('webrtc: Failed to create or set Answer');
    });

    // Send the answer when ready.
    const onceSendAnswer = () => {
      sendAnswer(this.pc.localDescription);

      this.pc.onicegatheringstatechange = null;
      clearTimeout(this.answerTimeoutId);
    };
    this.pc.onicegatheringstatechange = () => {
      if (this.pc.iceGatheringState === 'complete' && this.pc.connectionState !== 'closed') {
        dbg('Finished gathering ICE candidates.');
        onceSendAnswer();
      }
    };
    if (this.pc.iceGatheringState === 'complete') {
      // This probably never happens as we've `setRemoteDescription` just now,
      // but let's play it safe.
      onceSendAnswer();
    } else {
      this.answerTimeoutId = setTimeout(() => {
        dbg('answerTimeout');
        // ICE gathering is taking a while to complete - send what we got so far.
        if (!this.pc.localDescription) {
          // We don't have anything to send yet. Sigh. The client will probably timeout waiting
          // for us, but let's not bail and just try to wait some more in hope that it won't.
          // Worst case scenario - `datachannelTimeout` callback will run.
          return;
        }
        onceSendAnswer();
      }, this.config.answerTimeout);
    }

    this.connectRelay(offer);

    return true;
  }

  /**
   * Given a WebRTC DataChannel, prepare callbacks.
   * @param {RTCDataChannel} channel
   * @private
   */
  prepareDataChannel(channel) {
    channel.onopen = () => {
      log('WebRTC DataChannel opened!');
      snowflake.ui.increaseClients();
      this.nowConnected = true;

      // if we don't receive any keep-alive messages from the client, close the
      // connection
      const onStaleTimeout = () => {
        console.log("Closing stale connection.");
        this.flush();
        this.close();
      };
      this.refreshStaleTimeout = () => {
        clearTimeout(this.messageTimer);
        this.messageTimer = setTimeout(onStaleTimeout, this.config.messageTimeout);
      };
      this.refreshStaleTimeout();
    };
    channel.onclose = () => {
      log('WebRTC DataChannel closed.');
      snowflake.ui.setStatus('disconnected by webrtc.');
      if (this.nowConnected) {
        snowflake.ui.decreaseClients();
        this.nowConnected = false;
      }
      this.flush();
      this.close();
    };
    channel.onerror = function () {
      log('Data channel error!');
    };
    channel.binaryType = "arraybuffer";
    channel.onmessage = this.onClientToRelayMessage;
  }

  /**
   * @param {RTCSessionDescription} remoteDescription
   * @private
   */
  connectRelay(remoteDescription) {
    dbg('Connecting to relay...');
    // Get a remote IP address from the PeerConnection, if possible. Add it to
    // the WebSocket URL's query string if available.
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/remoteDescription
    const clientIP = Parse.ipFromSDP(remoteDescription.sdp);
    const relay = this.relay = WS.makeWebSocket(this.relayURL, clientIP);
    relay.label = 'websocket-relay';
    relay.onopen = () => {
      clearTimeout(this.connectToRelayTimeoutId);
      log(relay.label + ' connected!');
      snowflake.ui.setStatus('connected');
    };
    relay.onclose = () => {
      log(relay.label + ' closed.');
      snowflake.ui.setStatus('disconnected.');
      if (this.nowConnected) {
        snowflake.ui.decreaseClients();
        this.nowConnected = false;
      }
      this.flush();
      this.close();
    };
    relay.onerror = this.onError;
    relay.onmessage = this.onRelayToClientMessage;
    // TODO: Better websocket timeout handling.
    this.connectToRelayTimeoutId = setTimeout((() => {
      log(relay.label + ' timed out connecting.');
      relay.onclose();
    }), 5000);
  }

  /**
   * WebRTC --> websocket
   * @param {MessageEvent} msg
   * @private
   */
  onClientToRelayMessage(msg) {
    this.c2rSchedule.push(msg.data);
    this.flush();

    this.refreshStaleTimeout();
  }

  /**
   * websocket --> WebRTC
   * @param {MessageEvent} event
   * @private
   */
  onRelayToClientMessage(event) {
    this.r2cSchedule.push(event.data);
    this.flush();
  }

  /** @private */
  onError(event) {
    const ws = event.target;
    log(ws.label + ' error.');
    this.close();
  }

  /** Close both WebRTC and websocket. */
  close() {
    if (debug) {
      this.pc.getStats().then(report => {
        let transportStats;
        for (const stat of report.values()) {
          // Also consider 'data-channel'.
          if (stat.type === 'transport') {
            transportStats = stat;
            break;
          }
        }
        if (!transportStats) {
          return;
        }
        function bytesToMBytesStr(numBytes) {
          return (numBytes / 1024 / 1024).toFixed(3);
        }
        log(
          `Connection closed. Traffic (up|down):`
          + ` ${bytesToMBytesStr(transportStats.bytesReceived)} MB|`
          + `${bytesToMBytesStr(transportStats.bytesSent)} MB`
          + `, packets: ${transportStats.packetsReceived}|`
          + `${transportStats.packetsSent}`
        );
      });
    }

    clearTimeout(this.connectToRelayTimeoutId);
    clearTimeout(this.messageTimer);
    clearTimeout(this.answerTimeoutId);
    clearTimeout(this.flush_timeout_id);
    if (this.webrtcIsReady()) {
      this.client.close();
    }
    if (this.peerConnOpen()) {
      this.pc.close();
    }
    if (this.relayIsReady()) {
      this.relay.close();
    }
    this.onCleanup();
  }

  /**
   * Send as much data in both directions as the rate limit currently allows.
   * @private
   */
  flush() {
    let busy = true;
    while (busy && !this.rateLimit.isLimited()) {
      busy = false;
      // WebRTC --> websocket
      if (this.c2rSchedule.length > 0 && this.relayIsReady() && this.relay.bufferedAmount < this.MAX_BUFFER) {
        const chunk = this.c2rSchedule.shift();
        this.relay.send(chunk);
        this.rateLimit.update(chunk.byteLength);
        busy = true;
      }
      // websocket --> WebRTC
      if (this.r2cSchedule.length > 0 && this.webrtcIsReady() && this.client.bufferedAmount < this.MAX_BUFFER) {
        const chunk = this.r2cSchedule.shift();
        this.client.send(chunk);
        this.rateLimit.update(chunk.byteLength);
        busy = true;
      }
    }

    if (this.flush_timeout_id) {
      clearTimeout(this.flush_timeout_id);
      this.flush_timeout_id = 0;
    }
    if (this.r2cSchedule.length > 0 || this.c2rSchedule.length > 0) {
      this.flush_timeout_id = setTimeout(this.flush, this.rateLimit.when() * 1000);
    }
  }

  webrtcIsReady() {
    return null !== this.client && 'open' === this.client.readyState;
  }

  relayIsReady() {
    return (null !== this.relay) && (WebSocket.OPEN === this.relay.readyState);
  }

  peerConnOpen() {
    return (null !== this.pc) && ('closed' !== this.pc.connectionState);
  }

  /**
   * @param {URL | string} relayURL
   */
  setRelayURL(relayURL) {
    this.relayURL = relayURL;
  }

}

ProxyPair.prototype.MAX_BUFFER = 10 * 1024 * 1024;

ProxyPair.prototype.pc = null;
ProxyPair.prototype.client = null; // WebRTC Data channel
ProxyPair.prototype.relay = null; // websocket

ProxyPair.prototype.connectToRelayTimeoutId = 0;
ProxyPair.prototype.messageTimer = 0;
ProxyPair.prototype.answerTimeoutId = 0;
ProxyPair.prototype.flush_timeout_id = 0;

ProxyPair.prototype.onCleanup = () => {};
/* global log, dbg, DummyRateLimit, BucketRateLimit, ProxyPair */

/**
A JavaScript WebRTC snowflake proxy

Uses WebRTC from the client, and Websocket to the server.

Assume that the webrtc client plugin is always the offerer, in which case
this proxy must always act as the answerer.

TODO: More documentation
*/

class Snowflake {

  /**
   * Prepare the Snowflake with a Broker (to find clients) and optional UI.
   * @param {Config} config
   * @param {WebExtUI | BadgeUI | DebugUI} ui
   * @param {Broker} broker
   */
  constructor(config, ui, broker) {
    this.receiveOffer = this.receiveOffer.bind(this);

    this.config = config;
    this.ui = ui;
    this.broker = broker;
    this.broker.setNATType(ui.natType);
    this.proxyPairs = [];
    this.natFailures = 0;
    this.pollInterval = this.config.defaultBrokerPollInterval;
    if (undefined === this.config.rateLimitBytes) {
      this.rateLimit = new DummyRateLimit();
    } else {
      this.rateLimit = new BucketRateLimit(this.config.rateLimitBytes * this.config.rateLimitHistory, this.config.rateLimitHistory);
    }
    this.retries = 0;
  }

  /**
   * Start asking the broker for clients and serving them.
   */
  beginServingClients() {
    if (this.proxyPairs.length < this.config.maxNumClients) {
      this.pollBroker();
    } else {
      dbg('Polling skipped: at client capacity.');
    }
    this.pollTimeoutId = setTimeout((() => {
      this.beginServingClients();
    }), this.pollInterval);
  }

  /**
   * Try to get a client from the broker and start serving it upon success.
   * @private
   */
  pollBroker() {
    const pair = this.makeProxyPair();
    log('Polling broker..');

    let msg = 'Polling for client ... ';
    if (this.retries > 0) {
      msg += '[retries: ' + this.retries + ']';
    }
    this.ui.setStatus(msg);

    //update NAT type
    console.log("NAT type: " + this.ui.natType);
    this.broker.setNATType(this.ui.natType);

    const recv = this.broker.getClientOffer(pair.id, this.proxyPairs.length);
    recv.then((resp) => {
      const clientNAT = resp.NAT;
      if (!this.receiveOffer(pair, resp.Offer, resp.RelayURL)) {
        pair.close();
        return;
      }
      //set a timeout for channel creation
      setTimeout((() => {
        if (!pair.webrtcIsReady()) {
          log('proxypair datachannel timed out waiting for open');
          pair.close();
          // increase poll interval
          this.pollInterval =
            Math.min(this.pollInterval + this.config.pollAdjustment,
              this.config.slowestBrokerPollInterval);
          if (clientNAT == "restricted") {
            this.natFailures++;
          }
          // if we fail to connect to a restricted client 3 times in
          // a row, assume we have a restricted NAT
          if (this.natFailures >= 3) {
            this.ui.natType = "restricted";
            console.log("Learned NAT type: restricted");
            this.natFailures = 0;
            this.config.maxNumClients = 1;
          }
          this.broker.setNATType(this.ui.natType);
        } else {
          // decrease poll interval
          this.pollInterval =
            Math.max(this.pollInterval - this.config.pollAdjustment,
              this.config.defaultBrokerPollInterval);
          this.natFailures = 0;
          if (this.ui.natType == "unrestricted") {
            this.pollInterval = this.config.fastBrokerPollInterval;
            this.config.maxNumClients = 2;
          }
        }
      }), this.config.datachannelTimeout);
    }, function () {
      //on error, close proxy pair
      pair.close();
    });
    this.retries++;
  }

  /**
   * Receive an SDP offer from some client assigned by the Broker
   * @param {ProxyPair} pair an available ProxyPair.
   * @param {string} desc
   * @param {string | undefined} relayURL
   * @returns {boolean} `true` on success, `false` on fail.
   * @private
   */
  receiveOffer(pair, desc, relayURL) {
    try {
      if (relayURL !== undefined) {
        const relayURLParsed = new URL(relayURL);
        const hostname = relayURLParsed.hostname;
        const protocol = relayURLParsed.protocol;
        if (protocol !== "wss:") {
          log('incorrect relay url protocol');
          return false;
        }
        if (!Snowflake.checkRelayPattern(this.config.allowedRelayPattern, hostname)) {
          log('relay url hostname does not match allowed pattern');
          return false;
        }
        pair.setRelayURL(relayURL);
      }
      /** @type {RTCSessionDescriptionInit} */
      const offer = JSON.parse(desc);
      dbg('Received:\n\n' + offer.sdp + '\n');
      const sdp = new RTCSessionDescription(offer);
      const result = pair.receiveWebRTCOffer(
        sdp,
        answer => this.broker.sendAnswer(pair.id, answer)
      );
      return result;
    } catch (e) {
      log('ERROR: Unable to receive Offer: ' + e);
      return false;
    }
  }

  /**
   * @returns {ProxyPair}
   * @private
   */
  makeProxyPair() {
    const pair = new ProxyPair(this.rateLimit, this.config);
    this.proxyPairs.push(pair);

    log('Snowflake IDs: ' + (this.proxyPairs.map(p => p.id)).join(' | '));

    pair.onCleanup = () => {
      // Delete from the list of proxy pairs.
      const ind = this.proxyPairs.indexOf(pair);
      if (ind > -1) {
        this.proxyPairs.splice(ind, 1);
      }
    };
    pair.begin();
    return pair;
  }

  /** Stop all proxypairs. */
  disable() {
    log('Disabling Snowflake.');
    clearTimeout(this.pollTimeoutId);
    while (this.proxyPairs.length > 0) {
      this.proxyPairs.pop().close();
    }
  }

  /**
   * checkRelayPattern match str against patten
   * @param {string} pattern
   * @param {string} str typically a domain name to be checked
   * @return {boolean}
   * @private
   */
  static checkRelayPattern(pattern, str) {
    if (typeof pattern !== "string") {
      throw 'invalid checkRelayPattern input: pattern';
    }
    if (typeof str !== "string") {
      throw 'invalid checkRelayPattern input: str';
    }

    let exactMatch = false;
    if (pattern.charAt(0) === "^") {
      exactMatch = true;
      pattern = pattern.substring(1);
    }

    if (exactMatch) {
      return pattern.localeCompare(str) === 0;
    }
    return str.endsWith(pattern);
  }

}

Snowflake.prototype.rateLimit = null;

Snowflake.MESSAGE = {
  CONFIRMATION: 'You\'re currently serving a Tor user via Snowflake.'
};
/**
All of Snowflake's DOM manipulation and inputs.
*/

class UI {

  constructor() {
    this.initStats();
  }

  initStats() {
    this.stats = [0];
    setInterval((() => {
      this.stats.unshift(0);
      this.stats.splice(24);
      this.postActive();
    }), 60 * 60 * 1000);
  }

  setStatus() {}

  get active() {
    return this.clients > 0;
  }

  postActive() {}

  increaseClients() {
    this.clients += 1;
    this.stats[0] += 1;
    // Do not remove this call without a full usage search
    // its is used for status synchronization by its subclasses
    this.postActive();
    return this.clients;
  }

  decreaseClients() {
    this.clients -= 1;
    if(this.clients < 0) {
      this.clients = 0;
    }
    // Do not remove this call without a full usage search
    // its is used for status synchronization by its subclasses
    this.postActive();
    return this.clients;
  }

  log() {}

}

UI.prototype.clients = 0;
UI.prototype.stats = null;
/* exported Util, Params, DummyRateLimit */
/* global Config */

/**
A JavaScript WebRTC snowflake proxy

Contains helpers for parsing query strings and other utilities.
*/

class Util {

  static genSnowflakeID() {
    return Math.random().toString(36).substring(2);
  }

  static hasWebRTC() {
    return typeof RTCPeerConnection === 'function';
  }

  // check to see that localStorage is not only supported
  // but also that there is storage space available
  // see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#testing_for_availability
  static hasLocalStorage() {
    try {
      const x = "snowflake-allow";
      localStorage.setItem(x, x);
      localStorage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        localStorage &&
        localStorage.length !== 0
      );
    }
  }

  /**
   * @returns {Promise<"restricted" | "unrestricted">}
   * resolves to "restricted" if we
   * fail to make a test connection to a known restricted
   * NAT, "unrestricted" if the test connection succeeds, and
   * "unknown" if we fail to reach the probe test server
   * @param {number} timeout
   */
  static checkNATType(timeout) {
    let pc = new RTCPeerConnection({iceServers: [
      {urls: 'stun:stun1.l.google.com:19302'}
    ]});
    let channel = pc.createDataChannel("NAT test");
    return (new Promise((fulfill, reject) => {
      let open = false;
      channel.onopen = function() {
        open = true;
        fulfill("unrestricted");
      };
      pc.onicecandidate = (evt) => {
        if (evt.candidate == null) {
          //ice gathering is finished
          Util.sendOffer(pc.localDescription)
          .then((answer) => {
            setTimeout(() => {
              if(!open) {
                fulfill("restricted");
              }
            }, timeout);
            pc.setRemoteDescription(JSON.parse(answer));
          }).catch((e) => {
            console.log(e);
            reject("Error receiving probetest answer");
          });
        }
      };
      pc.createOffer()
      .then((offer) =>  pc.setLocalDescription(offer))
      .catch((e) => {
        console.log(e);
        reject("Error creating offer for probetest");
      });
    }).finally(() => {
      channel.close();
      pc.close();
    }));
  }

  /**
   * Assumes getClientOffer happened, and a WebRTC SDP answer has been generated.
   * Sends it back to the broker, which passes it back to the original client.
   * @param {RTCSessionDescription} offer
   */
  static sendOffer(offer) {
    return new Promise((fulfill, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.timeout = 30 * 1000;
      xhr.onreadystatechange = function() {
        if (xhr.DONE !== xhr.readyState) {
          return;
        }
        switch (xhr.status) {
          case 200: {
            const response = JSON.parse(xhr.responseText);
            return fulfill(response.Answer); // Should contain offer.
          }
          default:
            console.log('Probe ERROR: Unexpected ' + xhr.status + ' - ' + xhr.statusText);
            return reject('Failed to get answer from probe service');
        }
      };
      const data = {"Status": "client match", "Offer": JSON.stringify(offer)};
      try {
        xhr.open('POST', Config.PROBEURL);
      } catch (error) {
        console.log('Signaling Server: exception while connecting: ' + error.message);
        return reject('unable to connect to signaling server');
      }
      xhr.send(JSON.stringify(data));
    });
  }
}


class Parse {

  /**
   * @param {typeof document.cookie} cookies
   * Parse a cookie data string (usually document.cookie). The return type is an
   * object mapping cookies names to values. Returns null on error.
   * http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-8747038
   */
  static cookie(cookies) {
    const result = {};
    const strings = cookies ? cookies.split(';') : [];
    for (let i = 0, len = strings.length; i < len; i++) {
      const string = strings[i];
      const j = string.indexOf('=');
      if (-1 === j) {
        return null;
      }
      const name = decodeURIComponent(string.substr(0, j).trim());
      const value = decodeURIComponent(string.substr(j + 1).trim());
      if (!(name in result)) {
        result[name] = value;
      }
    }
    return result;
  }

  /**
   * Parse a count of bytes. A suffix of 'k', 'm', or 'g' (or uppercase)
   * does what you would think. Returns null on error.
   */
  static byteCount(spec) {
    let matches = spec.match(/^(\d+(?:\.\d*)?)(\w*)$/);
    if (matches === null) {
      return null;
    }
    let count = Number(matches[1]);
    if (isNaN(count)) {
      return null;
    }
    const UNITS = new Map([
      ['', 1],
      ['k', 1024],
      ['m', 1024*1024],
      ['g', 1024*1024*1024],
    ]);
    let unit = matches[2].toLowerCase();
    if (!UNITS.has(unit)) {
      return null;
    }
    let multiplier = UNITS.get(unit);
    return count * multiplier;
  }

  /**
   * Parse a remote connection-address out of the "c=" Connection Data field
   * or the "a=" attribute fields of the session description.
   * Return undefined if none is found.
   * https://tools.ietf.org/html/rfc4566#section-5.7
   * https://tools.ietf.org/html/rfc5245#section-15
   */
  static ipFromSDP(sdp) {
    console.log(sdp);
    const ref = [
      /^a=candidate:[a-zA-Z0-9+/]+ \d+ udp \d+ ([\d.]+) /mg,
      /^a=candidate:[a-zA-Z0-9+/]+ \d+ udp \d+ ([0-9A-Fa-f:.]+) /mg,
      /^c=IN IP4 ([\d.]+)(?:(?:\/\d+)?\/\d+)?(:? |$)/mg,
      /^c=IN IP6 ([0-9A-Fa-f:.]+)(?:\/\d+)?(:? |$)/mg
    ];
    for (let i = 0, len = ref.length; i < len; i++) {
      const pattern = ref[i];
      let m = pattern.exec(sdp);
      while (m != null) {
        if(Parse.isRemoteIP(m[1])) return m[1];
        m = pattern.exec(sdp);
      }
    }
  }

  /**
   * Parse the mapped port out of an ice candidate returned from the
   * onicecandidate callback
   */
  static portFromCandidate(c) {
    const pattern = /(?:[\d.]+|[0-9A-Fa-f:.]+) (\d+) typ srflx/m;
    const m = pattern.exec(c);
    if (m != null) {
      return m[1];
    }
    return null;
  }

  /** Determine whether an IP address is a local, unspecified, or loopback address */
  static isRemoteIP(ip) {
    if (ip.includes(":")) {
      const ip6 = ip.split(':');
      // Loopback address
      const loopback = /^(?:0*:)*?:?0*1$/m;
      // Unspecified address
      const unspecified = /^(?:0*:)*?:?0*$/m;
      // Local IPv6 addresses are defined in https://tools.ietf.org/html/rfc4193
      return !((loopback.exec(ip) != null) || (unspecified.exec(ip) != null) ||
        (parseInt(ip6[0],16)&0xfe00) == 0xfc00);
    }

    // Local IPv4 addresses are defined in https://tools.ietf.org/html/rfc1918
    const ip4 = ip.split('.');
    return !(ip4[0] == 10 || ip4[0] == 127 || ip == "0.0.0.0" ||
      (ip4[0] == 172 && (ip4[1]&0xf0) == 16) ||
      (ip4[0] == 192 && ip4[1] == 168) ||
      // Carrier-Grade NAT as per https://tools.ietf.org/htm/rfc6598
      (ip4[0] == 100 && (ip4[1]&0xc0) == 64) ||
      // Dynamic Configuration as per https://tools.ietf.org/htm/rfc3927
      (ip4[0] == 169 && ip4[1] == 254));
  }

}


class Params {

  static getBool(query, param, defaultValue) {
    if (!query.has(param)) {
      return defaultValue;
    }
    const val = query.get(param);
    if ('true' === val || '1' === val || '' === val) {
      return true;
    }
    if ('false' === val || '0' === val) {
      return false;
    }
    return null;
  }

  /**
   * Get an object value and parse it as a byte count. Example byte counts are
   * '100' and '1.3m'. Returns |defaultValue| if param is not a key. Return null
   * on a parsing error.
   */
  static getByteCount(query, param, defaultValue) {
    if (!query.has(param)) {
      return defaultValue;
    }
    return Parse.byteCount(query.get(param));
  }

}


class BucketRateLimit {

  constructor(capacity, time) {
    this.capacity = capacity;
    this.time = time;
  }

  age() {
    const now = new Date();
    const delta = (now - this.lastUpdate) / 1000.0;
    this.lastUpdate = now;
    this.amount -= delta * this.capacity / this.time;
    if (this.amount < 0.0) {
      this.amount = 0.0;
    }
  }

  update(n) {
    this.age();
    this.amount += n;
    return this.amount <= this.capacity;
  }

  /** How many seconds in the future will the limit expire? */
  when() {
    this.age();
    return (this.amount - this.capacity) / (this.capacity / this.time);
  }

  isLimited() {
    this.age();
    return this.amount > this.capacity;
  }

}

BucketRateLimit.prototype.amount = 0.0;

BucketRateLimit.prototype.lastUpdate = new Date();


/** A rate limiter that never limits. */
class DummyRateLimit {

  constructor(capacity, time) {
    this.capacity = capacity;
    this.time = time;
  }

  update() {
    return true;
  }

  when() {
    return 0.0;
  }

  isLimited() {
    return false;
  }

}
/*
Only WebSocket-specific stuff.
*/

// eslint-disable-next-line no-unused-vars
class WS {
  /**
   * Creates a WebSocket URL from a base URL and an optional client IP address
   * string.
   * @param {URL|string} url
   * @param {?string} clientIP
   * @return {URL}
   */
  static makeWebSocketURL(url, clientIP) {
    url = new URL(url);
    if (clientIP != null) {
      url.searchParams.set('client_ip', clientIP);
    }
    return url;
  }

  /**
   * Creates a WebSocket connection from a URL and an optional client IP address
   * string.
   * @param {URL|string} url
   * @param {?string} clientIP
   * @return {WebSocket}
   */
  static makeWebSocket(url, clientIP) {
    let ws = new WebSocket(WS.makeWebSocketURL(url, clientIP));
    /*
    'User agents can use this as a hint for how to handle incoming binary data:
    if the attribute is set to 'blob', it is safe to spool it to disk, and if it
    is set to 'arraybuffer', it is likely more efficient to keep the data in
    memory.'
    */
    ws.binaryType = 'arraybuffer';
    return ws;
  }

  /**
   * @param {URL | string} addr
   */
  static probeWebSocket(addr) {
    return /** @type {Promise<void>} */(new Promise((resolve, reject) => {
      const ws = WS.makeWebSocket(addr, null);
      ws.onopen = () => {
        resolve();
        ws.close();
      };
      ws.onerror = () => {
        reject();
        ws.close();
      };
    }));
  }

}
/* global module, require */

/*
WebRTC shims for multiple browsers.
*/

if (typeof module !== "undefined" && module !== null ? module.exports : undefined) {
  window = {};
  document = {
    getElementById: function() {
      return null;
    }
  };
  chrome = {};
  location = { search: '' };
  ({ URLSearchParams } = require('url'));
  if ((typeof TESTING === "undefined" || TESTING === null) || !TESTING) {
    webrtc = require('wrtc');
    RTCPeerConnection = webrtc.RTCPeerConnection;
    RTCSessionDescription = webrtc.RTCSessionDescription;
    WebSocket = require('ws');
    ({ XMLHttpRequest } = require('xmlhttprequest'));
  }
}
/* global chrome */

// eslint-disable-next-line no-unused-vars
function requestRemoteValue(kind, name) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-unused-vars
    let onNewMessage = (message, sender, reply) => {
      if (message.kind === "remote-value" && message.data.kind === kind && message.data.name === name) {
        chrome.runtime.onMessage.removeListener(onNewMessage);
        resolve(message.data.value);
      }
    };
    chrome.runtime.onMessage.addListener(onNewMessage);
    sendMessage('request-remote-value', {kind: kind, name: name});
  });
}

// eslint-disable-next-line no-unused-vars
function replyRemoteValue(kind, name, value) {
  sendMessage('remote-value', {kind: kind, name: name, value: value}).then();
}

// eslint-disable-next-line no-unused-vars
function diffuseRemoteValue(kind, name, value) {
  sendMessage('diffuse-value', {kind: kind, name: name, value: value}).then();
}

// eslint-disable-next-line no-unused-vars
function listenRemoteValueRequest(callback) {
  if (typeof callback !== "function") {
    throw new Error("callback must be a function");
  }
  // eslint-disable-next-line no-unused-vars
  chrome.runtime.onMessage.addListener((message, sender, reply) => {
    if (message.kind === "request-remote-value") {
      callback(message.data.kind, message.data.name);
    }
  });
}

// eslint-disable-next-line no-unused-vars
function listenDiffuseValueRequest(callback) {
  // eslint-disable-next-line no-unused-vars
  chrome.runtime.onMessage.addListener((message, sender, reply) => {
    if (message.kind === "diffuse-value") {
      callback(message.data.kind, message.data.name, message.data.value);
    }
  });
}

async function sendMessage(kind, data) {
  await chrome.runtime.sendMessage({
    kind: kind,
    data: data
  });
}
/* global chrome */

/**
 * Decide whether we need to request or revoke the 'background' permission, and
 * set the `runInBackground` storage value appropriately.
 * @param {boolean | undefined} enabledSetting
 * @param {boolean | undefined} runInBackgroundSetting
 */
// eslint-disable-next-line no-unused-vars
function maybeChangeBackgroundPermission(enabledSetting, runInBackgroundSetting) {
  const needBackgroundPermission =
    runInBackgroundSetting
    // When the extension is disabled, we need the permission to be revoked because
    // otherwise it'll keep the browser process running for no reason.
    && enabledSetting;
  // Yes, this is called even if the permission is already in the state we need
  // it to be in (granted/removed).
  new Promise(r => {
    chrome.permissions[needBackgroundPermission ? "request" : "remove"](
      { permissions: ['background'] },
      r
    );
  })
  .then(success => {
    // Currently the resolve value is `true` even when the permission was alrady granted
    // before it was requested (already removed before it was revoked). TODO Need to make
    // sure it's the desired behavior and if it needs to change.
    // https://developer.chrome.com/docs/extensions/reference/permissions/#method-remove
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions/remove#return_value
    // https://github.com/mdn/content/pull/17516
    if (success) {
      chrome.storage.local.set({ runInBackground: runInBackgroundSetting });
    }
  });
}
/* global chrome replyRemoteValue listenRemoteValueRequest diffuseRemoteValue listenDiffuseValueRequest requestRemoteValue UI Config Util WS Broker Snowflake maybeChangeBackgroundPermission*/

// eslint-disable-next-line no-unused-vars
let log, dbg, snowflake, config, debug;

const DEFAULT_ENABLED = false;

const isServiceWorker = typeof chrome.offscreen !== 'undefined';
if (isServiceWorker) {
  const dummyFunction = () => {};
  // Ensure that the service worker wakes up and actually creates
  // the offscreen document (below).
  // Otherwise, when the browser is launched, none of the extension's
  // code is run, until the user opens the popup
  // (which starts the service worker).
  // See https://gitlab.torproject.org/tpo/anti-censorship/pluggable-transports/snowflake-webext/-/issues/104#note_3070566
  //
  // TODO read up on offscreen document lifetime and ensure
  // that this covers all cases.
  chrome.runtime.onStartup.addListener(dummyFunction);
  chrome.runtime.onInstalled.addListener(dummyFunction);
}

(function () {
  'use strict';

  debug = true;

  async function init() {
    if (typeof chrome.offscreen === 'undefined') {
      await initOffscreen();
    } else {
      await initServiceWorker();
    }
  }

  async function initServiceWorker() {
    const storageDefaultValues = {
      "runInBackground": false,
      "snowflake-enabled": DEFAULT_ENABLED,
    };
    /** @type {undefined | typeof storageDefaultValues} */
    let storageCache = undefined;
    /** @type {Promise<typeof storageDefaultValues>} */
    const storageCacheP = chrome.storage.local.get(
      storageDefaultValues
    )
    .then((storage) => {
      storageCache = storage;
      return storageCache;
    });
    chrome.storage.onChanged.addListener(async (changes) => {
      const storageCache_ = storageCache || await storageCacheP;
      for (let [key, { newValue }] of Object.entries(changes)) {
        storageCache_[key] = newValue;
      }
    });

    async function onRemoteRequestValue(kind, name) {
      if (kind === "snowflake-preference") {
        let result = await chrome.storage.local.get([name]);
        replyRemoteValue(kind, name, result[name]);
      }
    }

    function onRemoteRequestValueWrapper(kind, name) {
      onRemoteRequestValue(kind, name);
    }

    listenRemoteValueRequest(onRemoteRequestValueWrapper);

    async function onRemoteDiffuseValue(kind, name, value) {
      if (kind === "snowflake-preference") {
        // Why need `storageCache` instead of just
        // `chrome.storage.local.get().then(maybeChangeBackgroundPermission)`?
        // Because if we use `then()`, then the
        // `chrome.permissions.request()` call is performed with
        // a greater delay after the user has clicked the toggle,
        // and we get an error:
        // > This function must be called during a user gesture
        // i.e. the "user gesture event" "times out".
        // See e.g. https://issues.chromium.org/issues/40238709
        //
        // And why not just `storageCache_ = await storageCacheP`?
        // Because of the same issue.
        // `await` always postpones the execution of an async function,
        // regardless of whether the promise is already resolved,
        // even if it's not a promise at all but an object itself.
        // Trying to use `storageCache` first effectively turns this function
        // into a synchronous one.
        //
        // So we want to never hit `await` here,
        // otherwise we'll get the error,
        // at least in the version 130 of Chromium.
        // TODO fix: but in reality, despite `chrome.storage.local.get()`
        // being very fast, this _can_ happen, e.g. if the user opened
        // the popup, then kept it open for a while until the service worker
        // shuts down. Then, when they toggle `runInBackground`,
        // we'll get the error.
        const storageCache_ = storageCache || await storageCacheP;

        // We do _not_ want to set `runInBackground` in storage here.
        // `maybeChangeBackgroundPermission()` will set it,
        // depending on whether the permission request was granted.
        if (name !== "runInBackground") {
          let obj = {};
          obj[name] = value;
          chrome.storage.local.set(obj);

          storageCache_[name] = value;
        }

        if (
          typeof true !== 'undefined'
          // eslint-disable-next-line no-undef
          && true
        ) {
          if (name === "snowflake-enabled") {
            maybeChangeBackgroundPermission(
              value,
              storageCache_["runInBackground"]
            );
          } else if (name === "runInBackground") {
            maybeChangeBackgroundPermission(
              storageCache_["snowflake-enabled"],
              value,
            );
          }
        }
      }
    }

    listenDiffuseValueRequest(onRemoteDiffuseValue);


    chrome.runtime.onMessage.addListener(onMessage);

    const existingContexts = await chrome.runtime.getContexts({
      contextTypes: ['OFFSCREEN_DOCUMENT']
    });

    /* Service worker may get terminated, the offscreen document will outlive it in this case  */
    if (existingContexts.length > 0) {
      return;
    }

    await chrome.offscreen.createDocument({
      url: 'offscreen.html',
      reasons: [chrome.offscreen.Reason.WEB_RTC],
      justification: 'Use WebRTC.',
    });


    // Keep other components alive
    sendMessage('snowflake-serviceworker-init', {});

    let consented = await chrome.storage.local.get(["snowflake-consented"]);
    if (consented["snowflake-consented"] !== true) {
      chrome.tabs.create({url: chrome.runtime.getURL("consent.html")});
    }
  }

  class WebExtOffscreenUI extends UI {
    constructor() {
      super();
      this.running = false;
    }

    checkNAT() {
      Util.checkNATType(config.datachannelTimeout).then((type) => {
        console.log("Setting NAT type: " + type);
        this.natType = type;
      }).catch((e) => {
        console.log(e);
      });
    }

    initNATType() {
      this.natType = "unknown";
      this.checkNAT();
      setInterval(() => {
        this.checkNAT();
      }, config.natCheckInterval);
    }

    tryProbe() {
      WS.probeWebSocket(config.defaultRelayAddr)
      .then(
        () => {
          this.missingFeature = false;
          this.setEnabled(true);
        },
        () => {
          log('Could not connect to bridge.');
          this.missingFeature = 'popupBridgeUnreachable';
          this.setEnabled(false);
        }
      );
    }

    postActive() {
      super.postActive();
      diffuseRemoteValue("snowflake-offscreen-status", "clientCount", this.clients);
      diffuseRemoteValue("snowflake-offscreen-status", "clientTotal", this.getTotal());
    }

    getTotal() {
      return this.stats.reduce((t, c) => t + c, 0);
    }
  }

  async function sendMessage(kind, data) {
    await chrome.runtime.sendMessage({
      kind: kind,
      data: data
    });
  }

  // eslint-disable-next-line no-unused-vars
  async function onMessage(message, sender, reply) {
    console.log('Received message: ' + message.kind);
  }


  async function initOffscreen() {

    chrome.runtime.onMessage.addListener(onMessage);

    config = new Config("webext");

    let ui = new WebExtOffscreenUI();

    let broker = new Broker(config);

    snowflake = new Snowflake(config, ui, broker);

    log = function (msg) {
      console.log('Snowflake: ' + msg);
    };

    dbg = log;

    log('== snowflake proxy ==');

    dbg('Contacting Broker at ' + broker.url);

    sendMessage('snowflake-offscreen-init', {});

    function replyOffscreenStatus(kind, name) {
      if (kind === "snowflake-offscreen-status") {
        if (name === "clientCount") {
          replyRemoteValue(kind, name, ui.clients);
          return;
        }
        if (name === "running") {
          replyRemoteValue(kind, name, ui.running);
          return;
        }
        if (name === "clientTotal") {
          replyRemoteValue(kind, name, ui.getTotal());
        }
        replyRemoteValue(kind, name, "");
      }
    }

    listenRemoteValueRequest(replyOffscreenStatus);

    function diffuseValueReceiver(kind, name, value) {
      if (kind === "snowflake-preference") {
        if (name === "snowflake-enabled") {
          if (value === true) {
            ui.initNATType();
            snowflake.beginServingClients();
            ui.running = true;
            diffuseRemoteValue("snowflake-offscreen-status", "running", true);
          } else {
            snowflake.disable();
            ui.running = false;
            diffuseRemoteValue("snowflake-offscreen-status", "running", false);
          }
        }
      }
    }

    listenDiffuseValueRequest(diffuseValueReceiver);

    let shouldAutoStart = await requestRemoteValue("snowflake-preference", "snowflake-enabled");
    console.log("Should auto start: " + shouldAutoStart);
    if (shouldAutoStart === true) {
      ui.initNATType();
      snowflake.beginServingClients();
      ui.running = true;
      diffuseRemoteValue("snowflake-offscreen-status", "running", true);
    }
  }

  // Initialize the extension
  init();
}());