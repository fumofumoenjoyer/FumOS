/**
 * Runtime Messenger
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2018-05-28
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../data/constants.js';
import Helpers from '../utilities/helpers.js';
import Storage from '../core/storage.js';

/**
 * Private Functions
 */

const _handleMessageReceived = (message, sender, sendResponse) => {

    let topic, value;

    topic = message.topic;
    value = message.value;

    if (topic === 'extension:is-initialized') {

        sendResponse({'value': true});
        return Constants.MessageResponse.SYNCHRONOUS;
    }

    if (topic === 'tab-context:get') {

        Storage.getTabContext(value).then((tabContext) => {
            sendResponse({'value': tabContext});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }

    if (topic === 'settings:get') {

        Storage.getSettings(value?.concise).then((settings) => {
            sendResponse({'value': settings});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }

    if (topic === 'setting:update') {

        Storage.updateSetting(value.key, value.value).then(() => {
            sendResponse({'value': true});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }

    if (topic === 'whitelisted-domains:update') {

        Helpers.updateWhitelistedDomains(value).then(() => {
            sendResponse({'value': true});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }

    if (topic === 'statistics:get-amount-injected') {

        Storage.getStatistic(Constants.Statistic.AMOUNT_INJECTED).then((amountInjected) => {
            sendResponse({'value': amountInjected});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }

    if (topic === 'domain:extract-from-url') {

        sendResponse({'value': Helpers.extractDomainFromUrl(value)});
        return Constants.MessageResponse.SYNCHRONOUS;
    }

    if (topic === 'domain:normalize') {

        sendResponse({'value': Helpers.normalizeDomain(value)});
        return Constants.MessageResponse.SYNCHRONOUS;
    }

    if (topic === 'domain:add-to-whitelist') {

        Helpers.addDomainToWhitelist(value).then(() => {
            sendResponse({'value': true});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }

    if (topic === 'domain:remove-from-whitelist') {

        Helpers.removeDomainFromWhitelist(value).then(() => {
            sendResponse({'value': true});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }

    if (topic === 'domain:is-whitelisted') {

        Helpers.domainIsWhitelisted(value).then((domainIsWhitelisted) => {
            sendResponse({'value': domainIsWhitelisted});
        });

        return Constants.MessageResponse.ASYNCHRONOUS;
    }
};

/**
 * Event Handlers
 */

chrome.runtime.onMessage.addListener(_handleMessageReceived);
