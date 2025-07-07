/**
 * XHR Ruleset
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2024-11-19
 * @license     MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../../code/data/constants.js';
import Helpers from '../../code/utilities/helpers.js';
import Scheduler from '../../code/utilities/scheduler.js';
import Storage from '../../code/core/storage.js';

/**
 * Private Constants
 */

const _ruleTemplate = {
    'priority': 5,
    'action': {
        'type': 'redirect',
        'redirect': {'extensionPath': '/resources/jquery/2.1.4/jquery.min.jsm'}
    },
    'condition': {
        'urlFilter': '|https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js|',
        'resourceTypes': ['main_frame', 'script', 'xmlhttprequest']
    }
};

/**
 * Private Functions
 */

const _apply = async ({whitelistedDomains, xhrTestDomain}) => {

    let domainWhitelist, ruleIdentifier, ruleset;

    domainWhitelist = Object.keys(whitelistedDomains).map(Helpers.normalizeDomain);
    ruleIdentifier = 8000;

    if (await Helpers.domainIsWhitelisted(xhrTestDomain, whitelistedDomains)) {

        await chrome.declarativeNetRequest.updateDynamicRules({
            'removeRuleIds': [ruleIdentifier]
        });

    } else {

        ruleset = [{..._ruleTemplate}];

        ruleset[0].condition.excludedInitiatorDomains = domainWhitelist;
        ruleset[0].condition.initiatorDomains = [xhrTestDomain];
        ruleset[0].id = ruleIdentifier;

        await chrome.declarativeNetRequest.updateDynamicRules({
            'removeRuleIds': [ruleIdentifier],
            'addRules': ruleset
        });
    }
};

/**
 * Public Functions
 */

const apply = (whitelistedDomains, xhrTestDomain) => {

    return Scheduler.schedule('xhr', {
        'callable': _apply, 'payload': {whitelistedDomains, xhrTestDomain}
    });
};

/**
 * Initializations
 */

(async () => {

    let whitelistedDomains, xhrTestDomain;

    whitelistedDomains = await Storage.getSetting(Constants.Setting.WHITELISTED_DOMAINS);
    xhrTestDomain = await Storage.getSetting(Constants.Setting.XHR_TEST_DOMAIN);

    apply(whitelistedDomains, xhrTestDomain);
})();

/**
 * Event Handlers
 */

chrome.storage.onChanged.addListener(async (changes) => {

    if (Object.keys(changes).includes(Constants.Setting.WHITELISTED_DOMAINS ||
        Object.keys(changes).includes(Constants.Setting.XHR_TEST_DOMAIN))) {

        let whitelistedDomains, xhrTestDomain;

        whitelistedDomains = await Storage.getSetting(Constants.Setting.WHITELISTED_DOMAINS);
        xhrTestDomain = await Storage.getSetting(Constants.Setting.XHR_TEST_DOMAIN);

        apply(whitelistedDomains, xhrTestDomain);
    }
});

/**
 * Exports
 */

export default {
    apply
};
