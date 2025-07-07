/**
 * Entry Point
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
 *
 * @author      Thomas Rientjes
 * @since       2016-04-04
 *
 * @author      nobody
 * @since       2020-02-26
 *
 * @license     MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Main
 */

const main = {};


/**
 * Private Methods
 */

main._initializeSettings = function () {
    storageManager.checkStorageType();

    storageManager.type.get(null, function (items) {
        // Delete old keys
        if (items.whitelistedDomains !== undefined) {
            if (items.allowlistedDomains === undefined || Object.keys(items.allowlistedDomains).length === 0) {
                items['allowlistedDomains'] = items.whitelistedDomains;
            }
            delete items['whitelistedDomains'];
            storageManager.type.remove('whitelistedDomains');
        }

        // Convert value of notifications
        if (items.hideReleaseNotes !== undefined) {
            if (items.hideReleaseNotes === true) {
                items.updateNotification = 0;
            } else {
                items.updateNotification = 2;
            }
            delete items['hideReleaseNotes'];
            storageManager.type.remove('hideReleaseNotes');
        }

        // Use default if key is missing
        for (const key of Object.keys(SettingDefaults)) {
            if (items[key] === undefined) {
                items[key] = SettingDefaults[key];
            }
        }

        if (items.disablePrefetch !== false) {
            chrome.privacy.network.networkPredictionEnabled.set({
                'value': false
            });
        }

        stateManager.selectedIcon = items.selectedIcon;
        wrappers.setIcon({
            'path': stateManager.selectedIcon
        }, 'Enabled');

        storageManager.amountInjected = items.amountInjected;
        interceptor.xhrTestDomain = items.xhrTestDomain;
        interceptor.allowedDomainsGoogleFonts = items.allowedDomainsGoogleFonts;
        interceptor.blockMissing = items.blockMissing;
        interceptor.blockGoogleFonts = items.blockGoogleFonts;
        requestAnalyzer.allowlistedDomains = items.allowlistedDomains;

        wrappers.badgeDefaultTextColor = items.badgeDefaultTextColor;
        wrappers.badgeDefaultBackgroundColor = items.badgeDefaultBackgroundColor;
        wrappers.badgeHTMLfilterTextColor = items.badgeHTMLfilterTextColor;
        wrappers.badgeHTMLFilterBackgroundColor = items.badgeHTMLFilterBackgroundColor;
        wrappers.badgeMissingResourceTextColor = items.badgeMissingResourceTextColor;
        wrappers.badgeMissingResourceBackgroundColor = items.badgeMissingResourceBackgroundColor;

        wrappers.setBadgeTextColor({'color': items.badgeDefaultTextColor, 'type': 'default'});
        wrappers.setBadgeBackgroundColor({'color': items.badgeDefaultBackgroundColor, 'type': 'default'});

        storageManager.type.set(items);
    });
};

main._showReleaseNotes = function (details) {
    storageManager.checkStorageType();

    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        storageManager.type.set({
            [Setting.LAST_MAPPING_UPDATE]: mappings.lastMappingUpdate
        }, function () {
            if (details.temporary !== true) {
                chrome.tabs.create({
                    'url': chrome.runtime.getURL('pages/welcome/welcome.html'),
                    'active': true
                });
            }
        });
    } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
        storageManager.type.get(null, function (items) {
            let mappingUpdate = items.lastMappingUpdate !== mappings.lastMappingUpdate;

            // Migrate old keys to new keys https://codeberg.org/nobody/LocalCDN/issues/613
            if (items.badgeDefaultBackgroundColor === undefined) {
                items.badgeDefaultBackgroundColor = items.badgeColor;
                delete items.badgeColor;
            }

            // Migrate old keys to new keys https://codeberg.org/nobody/LocalCDN/issues/613
            if (items.badgeDefaultTextColor === undefined) {
                items.badgeDefaultTextColor = items.badgeTextColor;
                delete items.badgeTextColor;
            }

            // Remove old keys
            for (const key of Object.keys(items)) {
                if (!(key in SettingDefaults) && key !== undefined) {
                    delete items[key];
                }
            }
            // Override old value https://codeberg.org/nobody/LocalCDN/issues/177
            items.xhrTestDomain = 'localcdn.org';

            // Updated mappings.js
            if (mappingUpdate) {
                items.lastMappingUpdate = mappings.lastMappingUpdate;
            }

            if ((mappingUpdate && items.updateNotification === 1) || items.updateNotification === 2) {
                chrome.tabs.create({
                    'url': chrome.runtime.getURL(`pages/updates/updates.html?mappingupdate=${mappingUpdate}`),
                    'active': false
                });
            } else {
                // No mappings.js update
            }
            storageManager.type.set(items);
        });
    }
};


/**
 * Initializations
 */
chrome.runtime.onInstalled.addListener(main._showReleaseNotes);
main._initializeSettings();
