/**
 * Whitelist Ruleset
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2024-11-03
 * @license     MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../../code/data/constants.js';
import DomainExceptions from '../../code/data/domain/exceptions.js';
import Helpers from '../../code/utilities/helpers.js';
import Scheduler from '../../code/utilities/scheduler.js';
import Storage from '../../code/core/storage.js';

/**
 * Private Constants
 */

const _ruleTemplate = {
    'priority': 3,
    'action': {
        'type': 'allow'
    },
    'condition': {
        'resourceTypes': ['main_frame', 'script', 'xmlhttprequest']
    }
};

/**
 * Private Functions
 */

const _apply = async ({whitelistedDomains}) => {

    let domainWhitelist, ruleIdentifier;

    domainWhitelist = Object.keys(whitelistedDomains).map(Helpers.normalizeDomain);
    ruleIdentifier = 5000;

    if (domainWhitelist.length > 0) {

        const ruleset = [{..._ruleTemplate}];

        ruleset[0].condition.initiatorDomains = domainWhitelist;
        ruleset[0].id = ruleIdentifier;

        await chrome.declarativeNetRequest.updateDynamicRules({
            'removeRuleIds': [ruleIdentifier],
            'addRules': ruleset
        });

    } else {

        await chrome.declarativeNetRequest.updateDynamicRules({
            'removeRuleIds': [ruleIdentifier]
        });
    }
};

const _applyDomainExceptions = async () => {

    let domainExceptions, ruleIdentifier;

    domainExceptions = [
        ...Object.keys(DomainExceptions.literal),
        ...(Object.values(DomainExceptions.dynamic).map((domain) => {
            return domain.toString().replaceAll(/([\\/])/g, '');
        }))
    ];

    ruleIdentifier = 7000;

    if (domainExceptions.length > 0) {

        const ruleset = [{..._ruleTemplate}];

        ruleset[0].condition.initiatorDomains = domainExceptions;
        ruleset[0].id = ruleIdentifier;

        await chrome.declarativeNetRequest.updateDynamicRules({
            'removeRuleIds': [ruleIdentifier],
            'addRules': ruleset
        });

    } else {

        await chrome.declarativeNetRequest.updateDynamicRules({
            'removeRuleIds': [ruleIdentifier]
        });
    }
};

/**
 * Public Functions
 */

const apply = (whitelistedDomains) => {

    return Scheduler.schedule('whitelist', {
        'callable': _apply, 'payload': {whitelistedDomains}
    });
};

/**
 * Initializations
 */

(async () => {
    apply(await Storage.getSetting(Constants.Setting.WHITELISTED_DOMAINS));
})();

/**
 * Event Handlers
 */

chrome.storage.onChanged.addListener(async (changes) => {

    if (Object.keys(changes).includes(Constants.Setting.WHITELISTED_DOMAINS)) {
        apply(await Storage.getSetting(Constants.Setting.WHITELISTED_DOMAINS));
    }
});

chrome.runtime.onInstalled.addListener(() => {
    _applyDomainExceptions();
});

/**
 * Exports
 */

export default {
    apply
};
