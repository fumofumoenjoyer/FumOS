/**
 * Browser API Wrappers
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2017-12-03
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Public Constants
 */

const action = {

    setBadgeBackgroundColor (details) {
        chrome.action.setBadgeBackgroundColor(details);
    },

    setBadgeText (details) {
        chrome.action.setBadgeText(details);
    },

    setBadgeTextColor (details) {

        if (chrome.action.setBadgeTextColor !== undefined) {
            chrome.action.setBadgeTextColor(details);
        }
    },

    setIcon (details) {
        chrome.action.setIcon(details);
    },

    async setTitle (details) {

        const platformInformation = await chrome.runtime.getPlatformInfo();

        if (platformInformation.os !== chrome.runtime.PlatformOs.ANDROID) {
            await chrome.action.setTitle(details);
        }
    }
};

/**
 * Exports
 */

export default {
    action
};
