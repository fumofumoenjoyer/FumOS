/**
 * Background Helpers
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2017-10-26
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../data/constants.js';
import ResourceMappings from '../data/resource/mappings.js';
import Storage from '../core/storage.js';
import WhitelistRuleset from '../../rulesets/dynamic/whitelist.js';
import XhrRuleset from '../../rulesets/dynamic/xhr.js';

/**
 * Public Functions
 */

const normalizeDomain = (domain) => {

    domain = domain.toLowerCase().trim().replace(/[^A-Za-z0-9.-]/g, '');

    if (domain.startsWith(Constants.Address.WWW_PREFIX)) {
        domain = domain.slice(Constants.Address.WWW_PREFIX.length);
    }

    return domain;
};

const domainIsWhitelisted = async (domain, whitelistedDomains = null) => {

    if (domain !== null) {

        if (! whitelistedDomains) {
            whitelistedDomains = await Storage.getSetting(Constants.Setting.WHITELISTED_DOMAINS);
        }

        // On Chromium-based browsers, subdomains inherit exemptions.
        return Object.keys(whitelistedDomains).some((whitelistedDomain) => {
            return (domain === whitelistedDomain || domain.endsWith(`.${whitelistedDomain}`));
        });
    }

    return false;
};

const updateWhitelistedDomains = async (whitelistedDomains) => {

    const xhrTestDomain = await Storage.getSetting(Constants.Setting.XHR_TEST_DOMAIN);

    await Storage.updateSetting(Constants.Setting.WHITELISTED_DOMAINS, whitelistedDomains);

    await WhitelistRuleset.apply(whitelistedDomains);
    await XhrRuleset.apply(whitelistedDomains, xhrTestDomain);
};

const addDomainToWhitelist = async (domain) => {

    const whitelistedDomains = await Storage.getSetting(Constants.Setting.WHITELISTED_DOMAINS);
    whitelistedDomains[domain] = true;

    await updateWhitelistedDomains(whitelistedDomains);

    chrome.runtime.sendMessage({
        'topic': 'domain:added-to-whitelist', 'value': whitelistedDomains
    }, () => {
        if (chrome.runtime.lastError) { /**/ }
    });
};

const removeDomainFromWhitelist = async (domain) => {

    let whitelistedDomains = await Storage.getSetting(Constants.Setting.WHITELISTED_DOMAINS);

    // On Chromium-based browsers, subdomains inherit exemptions.
    whitelistedDomains = Object.fromEntries(Object.entries(whitelistedDomains).filter(([whitelistedDomain]) => {
        return ! (domain === whitelistedDomain || domain.endsWith(`.${whitelistedDomain}`));
    }));

    await updateWhitelistedDomains(whitelistedDomains);

    chrome.runtime.sendMessage({
        'topic': 'domain:removed-from-whitelist', 'value': whitelistedDomains
    }, () => {
        if (chrome.runtime.lastError) { /**/ }
    });
};

const extractDomainFromUrl = (url, normalize = true) => {

    let extractedDomain = null;

    if (typeof url !== 'string') {
        return null;
    }

    if (url.startsWith(Constants.Address.CHROME)) {
        return null;
    }

    try {
        extractedDomain = new URL(url).hostname;
    } catch {
        return null;
    }

    if (extractedDomain === '') {
        return null;
    }

    if (normalize === true) {
        extractedDomain = normalizeDomain(extractedDomain);
    }

    return extractedDomain;
};

const determineValidHosts = () => {

    const validHosts = [];

    for (const mapping of Object.keys(ResourceMappings)) {

        const supportedHost = Constants.Address.ANY_PROTOCOL + mapping + Constants.Address.ANY_PATH;
        validHosts.push(supportedHost);
    }

    return validHosts;
};

const setPrefetchDisabled = (disable) => {

    if (disable === false) {
        chrome.privacy.network.networkPredictionEnabled.clear({});
    } else {
        chrome.privacy.network.networkPredictionEnabled.set({'value': false});
    }
};

const determineIconPaths = (type) => {

    let sizes, iconPaths;

    sizes = ['16', '18', '19', '32', '36', '38', '64'];
    iconPaths = {};

    for (const size of sizes) {
        iconPaths[size] = chrome.runtime.getURL(`images/icons/action/${type}/${size}.png`);
    }

    return iconPaths;
};

/**
 * Exports
 */

export default {
    normalizeDomain,
    domainIsWhitelisted,
    updateWhitelistedDomains,
    addDomainToWhitelist,
    removeDomainFromWhitelist,
    extractDomainFromUrl,
    determineValidHosts,
    setPrefetchDisabled,
    determineIconPaths
};
