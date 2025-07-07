/******/ (function() { // webpackBootstrap
/******/ 	"use strict";

;// ../../libs/common/src/vault/enums/vault-messages.enum.ts
const VaultMessages = {
    HasBwInstalled: "hasBwInstalled",
    checkBwInstalled: "checkIfBWExtensionInstalled",
    OpenAtRiskPasswords: "openAtRiskPasswords",
    PopupOpened: "popupOpened",
};


;// ./src/vault/content/send-popup-open-message.ts

(function (globalContext) {
    // Send a message to the window that the popup opened
    globalContext.postMessage({ command: VaultMessages.PopupOpened });
})(window);

/******/ })()
;