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
