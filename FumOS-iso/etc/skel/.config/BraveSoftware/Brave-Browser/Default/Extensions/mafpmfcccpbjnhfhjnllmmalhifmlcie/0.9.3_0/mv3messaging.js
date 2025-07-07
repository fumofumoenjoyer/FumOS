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
