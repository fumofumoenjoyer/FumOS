/**
 * State Manager
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
 *
 * @author      Thomas Rientjes
 * @since       2017-03-10
 *
 * @author      nobody
 * @since       2020-02-26
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * State Manager
 */

const stateManager = {};


/**
 * Public Methods
 */

stateManager.registerInjection = function (tabIdentifier, injection, url) {
    let registeredTab;
 
    if (injection['result'] !== false) {
        const injectionIdentifier = injection.source + injection.path;
        registeredTab = stateManager.tabs[tabIdentifier];
        registeredTab.injections[injectionIdentifier] = injection;
    }

    if (registeredTab === undefined) {
        return;
    }

    const initiatorDomain = helpers.extractDomainFromUrl(url, true) || Address.EXAMPLE;
    const htmlFilterIsActive = manipulateDOM.checkHtmlFilterEnabled(initiatorDomain);
    const injectionCount = Object.keys(registeredTab.injections).length || 0;
    const missingCount = registeredTab.missing || 0;
    const blockedCount = registeredTab.blocked || 0;

    if (injectionCount > 0) {
        chrome.browserAction.setTitle({
            'tabId': tabIdentifier,
            'title': `LocalCDN (${injectionCount})`
        });
    }
    if (stateManager.showIconBadge === true) {
        if ((missingCount > 0 || blockedCount > 0) && stateManager.changeBadgeColorMissingResources) {
            wrappers.setBadgeColoring(tabIdentifier, BadgeSettingMissingResource.TYPE);
        } else if (htmlFilterIsActive) {
            wrappers.setBadgeColoring(tabIdentifier, BadgeSettingHTMLFilter.TYPE);
        } else {
            wrappers.setBadgeColoring(tabIdentifier, BadgeSetting.TYPE);
        }
        wrappers.setBadgeText(tabIdentifier, (injectionCount + missingCount + blockedCount));
    }
    if (isNaN(storageManager.amountInjected)) {
        storageManager.type.get(Setting.AMOUNT_INJECTED, function (items) {
            storageManager.amountInjected = items.amountInjected;
            storageManager.type.set({
                [Setting.AMOUNT_INJECTED]: ++storageManager.amountInjected
            });
        });
    } else {
        chrome.storage.local.set({
            [Setting.AMOUNT_INJECTED]: ++storageManager.amountInjected
        });
    }

    if (stateManager.internalStatistics) {
        stats.setStats(injection);
    }
};

stateManager.addDomainToAllowlist = function (domain) {
    return new Promise((resolve) => {
        let allowlistedDomains = requestAnalyzer.allowlistedDomains;

        allowlistedDomains[domain] = true;
        storageManager.type.set({allowlistedDomains}, resolve);
    });
};

stateManager.removeDomainFromAllowlist = function (domain) {
    return new Promise((resolve) => {
        const allowlistedDomains = requestAnalyzer.allowlistedDomains;

        if (allowlistedDomains[domain]) {
            delete allowlistedDomains[domain];
        } else {
            for (const key in allowlistedDomains) {
                if (key.startsWith('*.') && domain.endsWith(key.substring(2))) {
                    delete allowlistedDomains[key];
                    break;
                }
            }
        }

        storageManager.type.set({allowlistedDomains}, resolve);
    });
};

stateManager.addDomainToManipulateDOMlist = function (domain) {
    return new Promise((resolve) => {
        const domainsManipulateDOM = requestAnalyzer.domainsManipulateDOM;

        domainsManipulateDOM[domain] = true;

        storageManager.type.set({domainsManipulateDOM}, resolve);
    });
};

stateManager.removeDomainFromManipulateDOMlist = function (domain) {
    return new Promise((resolve) => {
        const domainsManipulateDOM = requestAnalyzer.domainsManipulateDOM;

        delete domainsManipulateDOM[domain];

        storageManager.type.set({domainsManipulateDOM}, resolve);
    });
};

stateManager.addDomainToGoogleFontsList = function (domain) {
    return new Promise((resolve) => {
        const allowedDomainsGoogleFonts = interceptor.allowedDomainsGoogleFonts;

        allowedDomainsGoogleFonts[domain] = true;

        storageManager.type.set({allowedDomainsGoogleFonts}, resolve);
    });
};

stateManager.removeDomainFromGoogleFontsList = function (domain) {
    return new Promise((resolve) => {
        const allowedDomainsGoogleFonts = interceptor.allowedDomainsGoogleFonts;

        delete allowedDomainsGoogleFonts[domain];

        storageManager.type.set({allowedDomainsGoogleFonts}, resolve);
    });
};

/**
 * Private Methods
 */

stateManager._createTab = function (tab) {
    const tabIdentifier = tab.id;

    stateManager.tabs[tabIdentifier] = {
        'injections': {},
        'missing': 0,
        'blocked': 0
    };

    const requestFilters = {
        'tabId': tabIdentifier,
        'urls': stateManager.validHosts
    };

    chrome.webRequest.onBeforeRequest.addListener(function (requestDetails) {
        tab = stateManager.tabs[tabIdentifier].details || {};
        return interceptor.handleRequest(requestDetails, tabIdentifier, tab);
    }, requestFilters, [WebRequest.BLOCKING]);
};

stateManager._removeTab = function (tabIdentifier) {
    delete stateManager.tabs[tabIdentifier];
};

stateManager._updateTab = function (details) {   
    const tabDomain = helpers.extractDomainFromUrl(details.url, true);
    const domainIsAllowlisted = stateManager._domainIsListed(tabDomain);
    const frameIdentifier = details.frameId;
    const tabIdentifier = details.tabId;

    if (frameIdentifier !== 0 || tabIdentifier === -1) {
        return;
    }

    chrome.browserAction.setTitle({
        'tabId': tabIdentifier,
        'title': 'LocalCDN (0)'
    });

    if (domainIsAllowlisted) {
        stateManager._setIconDisabled(tabIdentifier);
        chrome.browserAction.setTitle({
            'tabId': tabIdentifier,
            'title': 'LocalCDN (–)'
        });
    }

    if (stateManager.showIconBadge === true) {
        stateManager._clearBadgeText(tabIdentifier);
    }

    if (stateManager.tabs[tabIdentifier]) {
        stateManager.tabs[tabIdentifier].injections = {};
        stateManager.tabs[tabIdentifier].missing = 0;
        stateManager.tabs[tabIdentifier].blocked = 0;
    }
};

stateManager._handleStorageChanged = function (changes) {
    if (Setting.SHOW_ICON_BADGE in changes) {
        stateManager.showIconBadge = changes.showIconBadge.newValue;
        if (changes.showIconBadge.newValue !== true) {
            chrome.tabs.query({}, function (tabs) {
                tabs.forEach(stateManager._removeIconBadgeFromTab);
            });
        }
    } else if (Setting.STRIP_METADATA in changes) {
        requestSanitizer.disable();
        if (changes.stripMetadata.newValue !== false) {
            requestSanitizer.enable();
        }
    } else if (Setting.NEGATE_HTML_FILTER_LIST in changes) {
        stateManager.getInvertOption = changes.negateHtmlFilterList.newValue;
    } else if (Setting.SELECTED_ICON in changes) {
        stateManager.selectedIcon = changes.selectedIcon.newValue;
    } else if (Setting.INTERNAL_STATISTICS in changes) {
        stateManager.internalStatistics = changes.internalStatistics.newValue;
    } else if (Setting.INTERNAL_STATISTICS_DATA in changes) {
        stats.data = changes.internalStatisticsData.newValue;
    } else if (Setting.HIDE_DONATION_BUTTON in changes) {
        stateManager.hideDonationButton = changes.hideDonationButton.newValue;
    } else if (Setting.CHANGE_BADGE_COLOR_MISSING_RESOURCES in changes) {
        stateManager.changeBadgeColorMissingResources = changes.changeBadgeColorMissingResources.newValue;
    } else if (Setting.LOGGING in changes) {
        stateManager.logging = changes.enableLogging.newValue;
    } else if (Setting.BADGE_DEFAULT_TEXT_COLOR in changes) {
        wrappers.badgeDefaultTextColor = changes.badgeDefaultTextColor.newValue;
    } else if (Setting.BADGE_DEFAULT_BACKGROUND_COLOR in changes) {
        wrappers.badgeDefaultBackgroundColor = changes.badgeDefaultBackgroundColor.newValue;
    } else if (Setting.BADGE_HTML_FILTER_TEXT_COLOR in changes) {
        wrappers.badgeHTMLfilterTextColor = changes.badgeHTMLfilterTextColor.newValue;
    } else if (Setting.BADGE_HTML_FILTER_BACKGROUND_COLOR in changes) {
        wrappers.badgeHTMLFilterBackgroundColor = changes.badgeHTMLFilterBackgroundColor.newValue;
    }
};

stateManager._clearBadgeText = function (tabIdentifier) {
    wrappers.setBadgeText(tabIdentifier, '');
};

stateManager._removeIconBadgeFromTab = function (tab) {
    stateManager._clearBadgeText(tab.id);
};

stateManager._domainIsListed = function (domain, listname) {
    if (domain !== null) {
        let isAllowlisted;

        if (listname === 'manipulate-dom') {
            const allowlistRecord = helpers.checkAllowlisted(domain, requestAnalyzer.domainsManipulateDOM);
            isAllowlisted = Boolean(allowlistRecord);
        } else {
            const allowlistRecord = helpers.checkAllowlisted(domain, requestAnalyzer.allowlistedDomains);
            isAllowlisted = Boolean(allowlistRecord);
        }
        return isAllowlisted;
    }
    return false;
};

stateManager._setIconDisabled = function (tabIdentifier) {
    wrappers.setIcon({
        'path': stateManager.selectedIcon || 'Default',
        'tabId': tabIdentifier
    }, 'Disabled');
};


/**
 * Initializations
 */

stateManager.requests = {};
stateManager.tabs = {};
stateManager.getInvertOption = true;
stateManager.validHosts = [];
stateManager.selectedIcon = 'Default';
stateManager.internalStatistics = false;
stateManager.hideDonationButton = false;
stateManager.changeBadgeColorMissingResources = false;
stateManager.logging = false;

for (const mapping in mappings.cdn) {
    let supportedHost = Address.ANY_PROTOCOL + mapping + Address.ANY_PATH;
    stateManager.validHosts.push(supportedHost);
}

chrome.tabs.query({}, function (tabs) {
    tabs.forEach(stateManager._createTab);
});

storageManager.type.get([
    Setting.SHOW_ICON_BADGE,
    Setting.NEGATE_HTML_FILTER_LIST,
    Setting.SELECTED_ICON,
    Setting.INTERNAL_STATISTICS,
    Setting.HIDE_DONATION_BUTTON,
    Setting.CHANGE_BADGE_COLOR_MISSING_RESOURCES,
    Setting.LOGGING,
    Setting.AMOUNT_INJECTED
], function (items) {
    if (items.showIconBadge === undefined) {
        items.showIconBadge = true;
    }
    if (items.selectedIcon === undefined) {
        stateManager.selectedIcon = 'Default';
    }
    if (items.negateHtmlFilterList === undefined) {
        stateManager.getInvertOption = true;
    } else {
        stateManager.getInvertOption = items.negateHtmlFilterList;
    }
    stateManager.showIconBadge = items.showIconBadge;
    stateManager.selectedIcon = items.selectedIcon;
    stateManager.internalStatistics = items.internalStatistics;
    stateManager.hideDonationButton = items.hideDonationButton;
    stateManager.changeBadgeColorMissingResources = items.changeBadgeColorMissingResources;
    stateManager.logging = items.enableLogging;
    stateManager.amountInjected = items.amountInjected;
});

chrome.storage.local.get([Setting.INTERNAL_STATISTICS], function (items) {
    stateManager.internalStatistics = items.internalStatistics;
});


/**
 * Event Handlers
 */

chrome.tabs.onCreated.addListener(stateManager._createTab);
chrome.tabs.onRemoved.addListener(stateManager._removeTab);

chrome.webRequest.onBeforeRequest.addListener(function (requestDetails) {
    if (requestDetails.tabId !== -1 && stateManager.tabs[requestDetails.tabId]) {
        stateManager.tabs[requestDetails.tabId].details = {
            'url': requestDetails.url
        };
    }
}, {'types': [WebRequestType.MAIN_FRAME], 'urls': [Address.ANY]}, [WebRequest.BLOCKING]);

chrome.webNavigation.onCommitted.addListener(stateManager._updateTab, {
    'url': [{'urlContains': ':'}]
});

chrome.webRequest.onErrorOccurred.addListener(function (requestDetails) {
    if (stateManager.requests[requestDetails.requestId]) {
        delete stateManager.requests[requestDetails.requestId];
    }
}, {'urls': [Address.ANY]});

chrome.webRequest.onBeforeRedirect.addListener(function (requestDetails) {
    const knownRequest = stateManager.requests[requestDetails.requestId];
    if (knownRequest) {
        stateManager.registerInjection(
            knownRequest.tabIdentifier,
            knownRequest.targetDetails,
            requestDetails.originUrl
        );
        delete stateManager.requests[requestDetails.requestId];
    }
}, {'urls': [Address.ANY]});

chrome.storage.onChanged.addListener(stateManager._handleStorageChanged);
