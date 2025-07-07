/**
 * Interceptor
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
 *
 * @author      Thomas Rientjes
 * @since       2016-04-06
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
 * Interceptor
 */

const interceptor = {};


/**
 * Public Methods
 */

interceptor.handleRequest = function (requestDetails, tabIdentifier, tab) {

    const isOnAllowlist = helpers.checkAllowlisted(
        helpers.extractDomainFromUrl(tab.url, true),
        requestAnalyzer.allowlistedDomains
    );

    let iframe = '';
    if (tab.url !== requestDetails.originUrl) {
        console.log(`${LogString.PREFIX} ${LogString.IFRAME} ${tab.url} -> ${requestDetails.originUrl}`);
        iframe = requestDetails.originUrl;
    }

    if (isOnAllowlist) {
        return {
            'cancel': false
        };
    }

    const targetDetails = requestAnalyzer.getLocalTarget(requestDetails, tab.url);
    if (targetDetails['result'] === 'blocked') {
        const source = helpers.extractDomainFromUrl(tab.url, true);
        const resource = tab.url;
        return {
            'redirectUrl': chrome.runtime.getURL(`resources/blocked/index.html?source=${source}&resource=${resource}`)
        };
    }

    stateManager.requests[requestDetails.requestId] = {
        tabIdentifier, targetDetails
    };

    // Block POST, HEAD, PUT, DELETE, TRACE, OPTIONS
    if (BlockedRequestMethods[requestDetails.method]) {
        console.warn(`${LogString.PREFIX} ${LogString.NON_GET_REQUEST_BLOCKED}`);
        log.append(tab.url, requestDetails.url, LogString.NON_GET_REQUEST_BLOCKED, true, iframe);
        return {
            'cancel': true
        };
    }

    const validCandidate = requestAnalyzer.isValidCandidate(requestDetails, tab);
    if (!validCandidate) {
        return {
            'cancel': false
        };
    }

    if (interceptor._isBadResource(requestDetails.url)) {
        console.log(`${LogString.PREFIX} ${LogString.EVIL_RESOURCE_BLOCKED} ${requestDetails.url}`);
        log.append(tab.url, requestDetails.url, '-', true, iframe);
        return {
            'cancel': true
        };
    }

    const targetDomain = helpers.extractDomainFromUrl(requestDetails.url, true);
    const isGoogleFont = requestAnalyzer.isGoogleFont(targetDomain);
    const isGoogleMaterialIcons = requestAnalyzer.isGoogleMaterialIcons(requestDetails.url);

    if (BrowserType.FIREFOX && isGoogleFont && !isGoogleMaterialIcons) {
        const initiatorDomain = helpers.extractDomainFromUrl(tab.url, true);
        const isListed = helpers.checkAllowlisted(initiatorDomain, interceptor.allowedDomainsGoogleFonts);
        const isGoogleDomain = helpers.isGoogleDomain(initiatorDomain);
        // Check if the website is allowed to load Google Fonts
        if (interceptor.blockGoogleFonts === true && isListed === false && isGoogleDomain === false) {
            console.log(`${LogString.PREFIX} Google fonts blocked ${requestDetails.url}`);
            log.append(tab.url, requestDetails.url, '-', true, iframe);
            interceptor._handleMissingCandidate(requestDetails.url, tabIdentifier);
            ++stateManager.tabs[tabIdentifier].blocked;
            return {
                'redirectUrl': chrome.runtime.getURL('resources/google-fonts-placeholder.css')
            };
        } else if (isGoogleDomain === true) {
            console.log(`${LogString.PREFIX} Google fonts allowed, because Google Website ${initiatorDomain}`);
            return {
                'cancel': false
            };
        } else if (interceptor.blockGoogleFonts === false || isListed === true) {
            return {
                'cancel': false
            };
        }
    }

    if (targetDetails['result'] === false) {
        if (!IgnoredHost[targetDomain]) {
            ++stateManager.tabs[tabIdentifier].missing;
        }
        return interceptor._handleMissingCandidate(requestDetails.url, tabIdentifier);
    }

    console.log(`${LogString.PREFIX} ${LogString.REPLACED_RESOURCE} ${targetDetails.path}`);
    log.append(tab.url, requestDetails.url, targetDetails.path, false, iframe);

    return {
        'redirectUrl': chrome.runtime.getURL(targetDetails.path + fileGuard.secret)
    };
};


/**
 * Private Methods
 */

interceptor._handleMissingCandidate = function (requestUrl, tabIdentifier) {
    if (stateManager.showIconBadge === true) {
        let injectionCount = Object.keys(stateManager.tabs[tabIdentifier].injections).length || 0;
        const missingCount = stateManager.tabs[tabIdentifier].missing || 0;
        const blockedCount = stateManager.tabs[tabIdentifier].blocked || 0;

        injectionCount = injectionCount + missingCount + blockedCount;

        if (stateManager.changeBadgeColorMissingResources === true) {
            if (injectionCount === 0) {
                wrappers.setBadgeText(tabIdentifier, injectionCount);
                wrappers.setBadgeColoring(tabIdentifier, BadgeSettingMissingResource.TYPE);
            }
        } else {
            wrappers.setBadgeText(tabIdentifier, injectionCount);
        }
    }

    if (interceptor.blockMissing === true) {
        return {
            'cancel': true
        };
    }

    const requestUrlSegments = new URL(requestUrl);

    if (requestUrlSegments.protocol === Address.HTTP) {
        requestUrlSegments.protocol = Address.HTTPS;
        requestUrl = requestUrlSegments.toString();

        return {
            'redirectUrl': requestUrl
        };
    } else {
        return {
            'cancel': false
        };
    }
};

interceptor._handleStorageChanged = function (changes) {
    if (Setting.XHR_TEST_DOMAIN in changes) {
        interceptor.xhrTestDomain = changes.xhrTestDomain.newValue;
    }

    if (Setting.BLOCK_MISSING in changes) {
        interceptor.blockMissing = changes.blockMissing.newValue;
    }

    if (Setting.BLOCK_GOOGLE_FONTS in changes) {
        interceptor.blockGoogleFonts = changes.blockGoogleFonts.newValue;
    }

    if (Setting.ALLOWED_DOMAINS_GOOGLE_FONTS in changes) {
        interceptor.allowedDomainsGoogleFonts = changes.allowedDomainsGoogleFonts.newValue;
    }
};

interceptor._isBadResource = function (requestUrl) {
    requestUrl = requestUrl.replace(/(^\w+:|^)\/\//, '');
    return Object.keys(BadResources).filter((path) => requestUrl.startsWith(path)).length !== 0;
};

/**
 * Event Handlers
 */

chrome.storage.onChanged.addListener(interceptor._handleStorageChanged);
