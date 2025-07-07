/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// ../../libs/common/src/vault/enums/vault-messages.enum.ts
const VaultMessages = {
    HasBwInstalled: "hasBwInstalled",
    checkBwInstalled: "checkIfBWExtensionInstalled",
    OpenAtRiskPasswords: "openAtRiskPasswords",
    PopupOpened: "popupOpened",
};


;// ./src/autofill/content/content-message-handler.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Handlers for window messages from the content script.
 * NOTE: These handlers should be above the event listener to ensure they are defined before being used.
 */
const windowMessageHandlers = {
    authResult: ({ data, referrer }) => handleAuthResultMessage(data, referrer),
    webAuthnResult: ({ data, referrer }) => handleWebAuthnResultMessage(data, referrer),
    [VaultMessages.checkBwInstalled]: () => handleExtensionInstallCheck(),
    duoResult: ({ data, referrer }) => handleDuoResultMessage(data, referrer),
    [VaultMessages.OpenAtRiskPasswords]: () => handleOpenAtRiskPasswordsMessage(),
};
/**
 * IMPORTANT: Safari seems to have a bug where it doesn't properly handle
 * window message events from content scripts when the listener these events
 * is registered within a class. This is why these listeners are registered
 * at the top level of this file.
 */
window.addEventListener("message", handleWindowMessageEvent, false);
chrome.runtime.onMessage.addListener(handleExtensionMessage);
setupExtensionDisconnectAction(() => {
    window.removeEventListener("message", handleWindowMessageEvent);
    chrome.runtime.onMessage.removeListener(handleExtensionMessage);
});
/**
 * Handles the post to the web vault showing the extension has been installed
 */
function handleExtensionInstallCheck() {
    window.postMessage({ command: VaultMessages.HasBwInstalled });
}
/**
 * Handles the auth result message from the window.
 *
 * @param data - Data from the window message
 * @param referrer - The referrer of the window
 */
function handleAuthResultMessage(data, referrer) {
    const { command, lastpass, code, state } = data;
    sendExtensionRuntimeMessage({ command, code, state, lastpass, referrer });
}
/**
 * Handles the Duo 2FA result message from the window.
 *
 * @param data - Data from the window message
 * @param referrer - The referrer of the window
 */
function handleDuoResultMessage(data, referrer) {
    return __awaiter(this, void 0, void 0, function* () {
        const { command, code, state } = data;
        sendExtensionRuntimeMessage({ command, code, state, referrer });
    });
}
/**
 * Handles the webauthn result message from the window.
 *
 * @param data - Data from the window message
 * @param referrer - The referrer of the window
 */
function handleWebAuthnResultMessage(data, referrer) {
    const { command, remember } = data;
    sendExtensionRuntimeMessage({ command, data: data.data, remember, referrer });
}
function handleOpenAtRiskPasswordsMessage() {
    sendExtensionRuntimeMessage({ command: VaultMessages.OpenAtRiskPasswords });
}
/**
 * Handles the window message event.
 *
 * @param event - The window message event
 */
function handleWindowMessageEvent(event) {
    const { source, data } = event;
    if (source !== window || !(data === null || data === void 0 ? void 0 : data.command)) {
        return;
    }
    const referrer = source.location.hostname;
    const handler = windowMessageHandlers[data.command];
    if (handler) {
        handler({ data, referrer });
    }
}
/**
 * Commands to forward from this script to the extension background.
 */
const forwardCommands = new Set([
    "bgUnlockPopoutOpened",
    "addToLockedVaultPendingNotifications",
    "unlockCompleted",
    "addedCipher",
]);
/**
 * Handles messages from the extension. Currently, this is
 * used to forward messages from the background context to
 * other scripts within the extension.
 *
 * @param message - The message from the extension
 */
function handleExtensionMessage(message) {
    if (forwardCommands.has(message.command)) {
        sendExtensionRuntimeMessage(message);
    }
}
/**
 * Sends a message to the extension runtime, and ignores
 * any potential promises that should be handled using
 * the `void` operator.
 *
 * @param message - The message to send to the extension runtime
 */
function sendExtensionRuntimeMessage(message) {
    void chrome.runtime.sendMessage(message);
}
/**
 * Duplicate implementation of the same named method within `apps/browser/src/autofill/utils/index.ts`.
 * This is done due to some strange observed compilation behavior present when importing the method from
 * the utils file.
 *
 * TODO: Investigate why webpack tree shaking is not removing other methods when importing from the utils file.
 * Possible cause can be seen below:
 * @see https://stackoverflow.com/questions/71679366/webpack5-does-not-seem-to-tree-shake-unused-exports
 *
 * @param callback - Callback function to run when the extension disconnects
 */
function setupExtensionDisconnectAction(callback) {
    const port = chrome.runtime.connect({ name: "autofill-injected-script-port" });
    const onDisconnectCallback = (disconnectedPort) => {
        callback(disconnectedPort);
        port.onDisconnect.removeListener(onDisconnectCallback);
    };
    port.onDisconnect.addListener(onDisconnectCallback);
}

/******/ })()
;