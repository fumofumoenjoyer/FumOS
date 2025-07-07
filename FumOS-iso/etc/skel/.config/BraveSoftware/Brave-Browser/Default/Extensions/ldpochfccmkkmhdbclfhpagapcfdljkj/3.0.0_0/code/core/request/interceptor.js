/**
 * Request Interceptor
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2016-04-06
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../../data/constants.js';
import DomainExceptions from '../../data/domain/exceptions.js';
import Helpers from '../../utilities/helpers.js';
import RequestAnalyzer from './analyzer.js';
import ResourceEnvironment from '../../data/resource/environments.js';
import State from '../state.js';
import Storage from '../storage.js';

/**
 * Private Functions
 */

const _handleMissingCandidate = async () => {

    if (await Storage.getSetting(Constants.Setting.BLOCK_MISSING) === true) {
        Storage.incrementStatistic(Constants.Statistic.AMOUNT_BLOCKED);
    }
};

const _handleRequest = async (requestDetails) => {

    let tab, validCandidate, tabDomain, settings, isSilent, targetDetails, targetPath;

    try {
        tab = await chrome.tabs.get(requestDetails.tabId);
    } catch {
        tab = {};
    }

    validCandidate = await RequestAnalyzer.isValidCandidate(requestDetails, tab);

    if (! validCandidate) {
        return;
    }

    tabDomain = Helpers.extractDomainFromUrl(tab.url);

    if (tabDomain === null) {
        tabDomain = Constants.Address.EXAMPLE;
    }

    settings = await Storage.getSettings();
    isSilent = false;

    if (requestDetails.type === Constants.WebRequestType.XHR) {

        if (tabDomain === settings[Constants.Setting.XHR_TEST_DOMAIN]) {
            isSilent = true;
        } else {
            return _handleMissingCandidate(requestDetails.url);
        }
    }

    if (DomainExceptions.literal[tabDomain]) {
        return _handleMissingCandidate(requestDetails.url, true);
    }

    for (const dynamicDomainException of DomainExceptions.dynamic) {

        if (dynamicDomainException.test(tabDomain)) {
            return _handleMissingCandidate(requestDetails.url, true);
        };
    }

    targetDetails = RequestAnalyzer.determineLocalTarget(requestDetails);
    targetPath = targetDetails?.path;

    if (! targetPath) {
        return _handleMissingCandidate(requestDetails.url);
    }

    if (! ResourceEnvironment[settings[Constants.ComputedSetting.ENVIRONMENT_NAME]][targetPath]) {
        return _handleMissingCandidate(requestDetails.url);
    }

    State.createRequestContext(requestDetails.requestId, {
        'tabIdentifier': requestDetails.tabId, 'targetDetails': targetDetails, 'isSilent': isSilent
    });

    State.registerInjection(requestDetails.requestId);
};

/**
 * Event Handlers
 */

chrome.webRequest.onBeforeRequest.addListener(_handleRequest, {
    'urls': Helpers.determineValidHosts()
});

chrome.webRequest.onErrorOccurred.addListener((requestDetails) => {
    State.deleteRequestContext(requestDetails.requestId);
}, {'urls': [Constants.Address.ANY]});
