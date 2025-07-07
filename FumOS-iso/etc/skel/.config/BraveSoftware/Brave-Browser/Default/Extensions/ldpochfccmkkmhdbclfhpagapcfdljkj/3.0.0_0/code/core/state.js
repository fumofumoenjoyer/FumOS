/**
 * State Manager
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2017-03-10
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../data/constants.js';
import Helpers from '../utilities/helpers.js';
import Storage from './storage.js';
import View from './view.js';

/**
 * Private Constants
 */

const _requestContexts = {};

/**
 * Private Functions
 */

const _registerInjection = async (requestIdentifier) => {

    let tabIdentifier, targetDetails, injectionIdentifier, tabContext, injectionCount;

    ({tabIdentifier, targetDetails} = _requestContexts[requestIdentifier]);
    injectionIdentifier = targetDetails.source + targetDetails.path + targetDetails.version;

    tabContext = await Storage.getTabContext(tabIdentifier);

    tabContext[Constants.TabContext.INJECTIONS][injectionIdentifier] = targetDetails;
    injectionCount = Object.keys(tabContext[Constants.TabContext.INJECTIONS]).length;

    Storage.incrementStatistic(Constants.Statistic.AMOUNT_INJECTED);
    View.renderInjectionCount(tabIdentifier, injectionCount);

    await Storage.updateTabContext(tabIdentifier, tabContext);
};

const _clearInjections = async (requestDetails) => {

    if (requestDetails.frameId === Constants.WebRequest.MAIN_FRAME_ID) {

        if (requestDetails.tabId !== chrome.tabs.TAB_ID_NONE) {

            const tabContext = await Storage.getTabContext(requestDetails.tabId);

            if (tabContext) {

                tabContext[Constants.TabContext.INJECTIONS] = {};
                Storage.updateTabContext(requestDetails.tabId, tabContext);
            }

            View.renderInitialTabState(requestDetails.tabId, requestDetails.url);
        }
    }
};

/**
 * Public Functions
 */

const createRequestContext = (requestIdentifier, requestContext) => {
    _requestContexts[requestIdentifier] = requestContext;
};

const deleteRequestContext = (requestIdentifier) => {
    delete _requestContexts[requestIdentifier];
};

const registerInjection = (requestContextIdentifier) => {

    if (typeof _requestContexts[requestContextIdentifier] === 'object') {

        if (! _requestContexts[requestContextIdentifier].isSilent) {
            _registerInjection(requestContextIdentifier);
        }

        deleteRequestContext(requestContextIdentifier);
    }
};

/**
 * Initializations
 */

chrome.tabs.query({}, (tabs) => {

    for (const tab of tabs) {
        View.renderInitialTabState(tab.id, tab.url, false);
    }

    Storage.createTabContexts(tabs);
});

/**
 * Event Handlers
 */

chrome.tabs.onCreated.addListener((tab) => {
    Storage.createTabContexts([tab], true);
});

chrome.tabs.onRemoved.addListener((tabIdentifier) => {
    Storage.clearTabContext(tabIdentifier);
});

chrome.webRequest.onBeforeRequest.addListener(async (requestDetails) => {

    const tabContext = await Storage.getTabContext(requestDetails.tabId);

    if (tabContext) {

        const tabIdentifier = tabContext[Constants.TabContext.IDENTIFIER];

        if (tabIdentifier !== chrome.tabs.TAB_ID_NONE) {

            tabContext[Constants.TabContext.URL] = requestDetails.url;
            await Storage.updateTabContext(tabIdentifier, tabContext);
        }
    }

}, {'types': [Constants.WebRequestType.MAIN_FRAME], 'urls': [Constants.Address.ANY]});

chrome.webNavigation.onErrorOccurred.addListener(_clearInjections, {'url': [{'urlContains': ':'}]});
chrome.webNavigation.onCommitted.addListener(_clearInjections, {'url': [{'urlContains': ':'}]});

chrome.storage.onChanged.addListener(async (changes) => {

    if (Object.keys(changes).includes(Constants.Setting.ENFORCE_STAGING) ||
        Object.keys(changes).includes(Constants.Setting.BLOCK_MISSING)) {

        let environmentName = await Storage.getSetting(Constants.ComputedSetting.ENVIRONMENT_NAME);

        if (environmentName === Constants.Environment.STAGING) {
            await chrome.declarativeNetRequest.updateEnabledRulesets({'enableRulesetIds': ['redirect/staging']});
        } else {
            await chrome.declarativeNetRequest.updateEnabledRulesets({'disableRulesetIds': ['redirect/staging']});
        }

        if (Object.keys(changes).includes(Constants.Setting.BLOCK_MISSING)) {

            if (changes[Constants.Setting.BLOCK_MISSING].newValue === true) {
                chrome.declarativeNetRequest.updateEnabledRulesets({'enableRulesetIds': ['block']});
            } else {
                chrome.declarativeNetRequest.updateEnabledRulesets({'disableRulesetIds': ['block']});
            }
        }
    }

    if (Object.keys(changes).includes(Constants.Setting.STRIP_METADATA)) {

        if (changes[Constants.Setting.STRIP_METADATA].newValue === true) {
            chrome.declarativeNetRequest.updateEnabledRulesets({'enableRulesetIds': ['sanitize']});
        } else {
            chrome.declarativeNetRequest.updateEnabledRulesets({'disableRulesetIds': ['sanitize']});
        }
    }
});

chrome.storage.onChanged.addListener((changes) => {

    if (Object.keys(changes).includes(Constants.Setting.DISABLE_PREFETCH)) {
        Helpers.setPrefetchDisabled(changes[Constants.Setting.DISABLE_PREFETCH].newValue);
    }
});

/**
 * Initializations
 */

(async () => {

    let environmentName, stripMetadata;

    environmentName = await Storage.getSetting(Constants.ComputedSetting.ENVIRONMENT_NAME);
    stripMetadata = await Storage.getSetting(Constants.Setting.STRIP_METADATA);

    if (environmentName === Constants.Environment.STAGING) {
        chrome.declarativeNetRequest.updateEnabledRulesets({'enableRulesetIds': ['redirect/staging']});
    }

    if (stripMetadata === false) {
        chrome.declarativeNetRequest.updateEnabledRulesets({'disableRulesetIds': ['sanitize']});
    }
})();

(async () => {
    Helpers.setPrefetchDisabled(await Storage.getSetting(Constants.Setting.DISABLE_PREFETCH));
})();

/**
 * Exports
 */

export default {
    createRequestContext,
    deleteRequestContext,
    registerInjection
};
