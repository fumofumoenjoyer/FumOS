/* global chrome Popup diffuseRemoteValue listenDiffuseValueRequest requestRemoteValue sendMessage*/

window.onload = () => {
  function v3_init() {
    initRemoteUI();
  }
  // Fill i18n in HTML
  Popup.fill(document.body, (m) => {
    return chrome.i18n.getMessage(m);
  });

  // eslint-disable-next-line no-undef
  if (true) {
    v3_init();
    return;
  }
  const port = chrome.runtime.connect({
    name: "popup"
  });

  const popup = new Popup(
    (...args) => chrome.i18n.getMessage(...args),
    (event) => port.postMessage({ enabled: event.target.checked }),
    () => port.postMessage({ retry: true }),
    (
      (
        typeof true !== 'undefined'
        // eslint-disable-next-line no-undef
        && true
      )
        ? (newValue) => port.postMessage({ runInBackground: newValue })
        : undefined
    )
  );

  port.onMessage.addListener((m) => {
    const { clients, enabled, total, missingFeature, consented } = m;

    if (missingFeature) {
      popup.missingFeature(missingFeature);
      return;
    }

    popup.setConsent(consented);

    if (enabled) {
      popup.turnOn(clients, total);
    } else {
      popup.turnOff();
    }
  });

  // eslint-disable-next-line no-unused-vars
  async function onMessage(message, sender, reply) {
    console.log('Received message: ' + message.kind);
  }

  async function initRemoteUI(){
    chrome.runtime.onMessage.addListener(onMessage);

    sendMessage('snowflake-remoteui-init', {});

    const popup = new Popup(
      (...args) => chrome.i18n.getMessage(...args),
      (event) => diffuseRemoteValue("snowflake-preference", "snowflake-enabled", event.target.checked),
      () => {}, // retryFunc
      (
        (
          typeof true !== 'undefined'
          // eslint-disable-next-line no-undef
          && true
        )
          ? (newValue) => diffuseRemoteValue("snowflake-preference", "runInBackground", newValue)
          : () => {}
      )
    );

    let running = await requestRemoteValue("snowflake-offscreen-status", "running");
    let count = await requestRemoteValue("snowflake-offscreen-status", "clientCount");
    let total = await requestRemoteValue("snowflake-offscreen-status", "clientTotal");
    let consented = await requestRemoteValue("snowflake-preference", "snowflake-consented");
    console.log("Running: " + running);
    console.log("Client count: " + count);
    console.log("Total: " + total);
    console.log("Consented: " + consented);

    popup.turnOff();
    if (typeof consented !== 'undefined' && consented) {
      popup.setConsent(true);
    }else {
      popup.setConsent(false);
      popup.missingFeature('popupNeedConsent');
    }

    if (running) {
      popup.turnOn(count, total);
    }

    function onRemoteDiffuseValue(kind, name, value) {
      if (kind === "snowflake-offscreen-status") {
        if (name === "running") {
          if (value) {
            popup.turnOn(count, total);
          } else {
            popup.turnOff();
          }
        }
        if (name === "clientCount") {
          count = value;
          popup.turnOn(count, total);
        }
        if (name === "clientTotal") {
          total = value;
          popup.turnOn(count, total);
        }
      }
    }

    listenDiffuseValueRequest(onRemoteDiffuseValue);
  }
};
