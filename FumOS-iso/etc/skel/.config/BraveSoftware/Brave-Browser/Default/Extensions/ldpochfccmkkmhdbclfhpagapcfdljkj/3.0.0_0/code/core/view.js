/**
 * View Manager
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2024-10-17
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../data/constants.js';
import Helpers from '../utilities/helpers.js';
import Storage from './storage.js';
import Wrappers from '../utilities/wrappers.js';

/**
 * Private Functions
 */

const _renderTabWhitelistState = async (tabIdentifier, url, injectionCount = 0) => {

    let domain, domainIsWhitelisted;

    domain = Helpers.extractDomainFromUrl(url);
    domainIsWhitelisted = await Helpers.domainIsWhitelisted(domain);

    if (domainIsWhitelisted) {
        Wrappers.action.setIcon({'tabId': tabIdentifier, 'path': Helpers.determineIconPaths('disabled')});
    } else {
        Wrappers.action.setIcon({'tabId': tabIdentifier, 'path': Helpers.determineIconPaths('default')});
    }

    if (domainIsWhitelisted && injectionCount <= 0) {
        Wrappers.action.setTitle({'tabId': tabIdentifier, 'title': 'Decentraleyes (–)'});
    } else {
        Wrappers.action.setTitle({'tabId': tabIdentifier, 'title': `Decentraleyes (${injectionCount})`});
    }
};

const _clearBadgeText = (tabIdentifier) => {
    Wrappers.action.setBadgeText({'tabId': tabIdentifier, 'text': ''});
};

/**
 * Public Functions
 */

const renderInitialTabState = async (tabIdentifier, url, clearBadgeText = true) => {

    const showIconBadge = await Storage.getSetting(Constants.Setting.SHOW_ICON_BADGE);

    _renderTabWhitelistState(tabIdentifier, url);

    if (showIconBadge === true && clearBadgeText === true) {
        _clearBadgeText(tabIdentifier);
    }
};

const renderInjectionCount = async (tabIdentifier, injectionCount) => {

    const showIconBadge = await Storage.getSetting(Constants.Setting.SHOW_ICON_BADGE);

    if (injectionCount > 0) {

        Wrappers.action.setTitle({'tabId': tabIdentifier, 'title': `Decentraleyes (${injectionCount})`});

        if (showIconBadge === true) {
            Wrappers.action.setBadgeText({'tabId': tabIdentifier, 'text': injectionCount.toString()});
        }
    }
};

/**
 * Event Handlers
 */

chrome.runtime.onInstalled.addListener(async (details) => {

    let location, previousVersion, showReleaseNotes;

    location = chrome.runtime.getURL('pages/welcome/welcome.html');

    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL ||
        details.reason === chrome.runtime.OnInstalledReason.UPDATE) {

        previousVersion = details.previousVersion;

        if (previousVersion && previousVersion.startsWith('3')) {
            return; // Do not show release notes after minor updates.
        }

        if (details.temporary === true) {
            return; // Only show release notes on full installations.
        }

        showReleaseNotes = await Storage.getSetting(Constants.Setting.SHOW_RELEASE_NOTES);

        if (showReleaseNotes === true) {
            chrome.tabs.create({'url': location, 'active': false});
        }
    }
});

chrome.storage.onChanged.addListener(async (changes) => {

    if (Object.keys(changes).includes(Constants.Setting.SHOW_ICON_BADGE)) {

        const tabContexts = await Storage.getTabContexts();

        if (changes[Constants.Setting.SHOW_ICON_BADGE].newValue === true) {

            for (const tabContext of Object.values(tabContexts)) {

                let tabIdentifier, injectionCount;

                tabIdentifier = tabContext[Constants.TabContext.IDENTIFIER];
                injectionCount = Object.keys(tabContext[Constants.TabContext.INJECTIONS]).length;

                renderInjectionCount(tabIdentifier, injectionCount);
            }

        } else {

            for (const tabContext of Object.values(tabContexts)) {
                _clearBadgeText(tabContext[Constants.TabContext.IDENTIFIER]);
            }
        }
    }

    if (Object.keys(changes).includes(Constants.Setting.WHITELISTED_DOMAINS)) {

        const tabContexts = await Storage.getTabContexts();

        for (const tabContext of Object.values(tabContexts)) {

            _renderTabWhitelistState(
                tabContext[Constants.TabContext.IDENTIFIER],
                tabContext[Constants.TabContext.URL],
                Object.keys(tabContext[Constants.TabContext.INJECTIONS]).length
            );
        }
    }
});

/**
 * Initializations
 */

Wrappers.action.setBadgeBackgroundColor({'color': 'rgb(74, 130, 108)'});
Wrappers.action.setBadgeTextColor({'color': 'rgb(255, 255, 255)'});

/**
 * Exports
 */

export default {
    renderInitialTabState,
    renderInjectionCount
};
