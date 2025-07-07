/**
 * Options Page
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2016-08-09
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Helpers from '../shared/code/helpers.js';

/**
 * Private Constants
 */

const _whitelistTrimExpression = /^;+|;+$/g;
const _whitelistValueSeparator = ';';

const _timeouts = {
    'whitelistedDomains': null
};

/**
 * Private Functions
 */

const _getOptionElement = (key) => {
    return document.querySelector(`[data-option=${key}]`);
};

const _getOptionElements = () => {
    return document.querySelectorAll('[data-option]');
};

const _renderLocaleNotice = () => {

    const localeNoticeElement = document.getElementById('notice-locale');
    localeNoticeElement.classList.remove('hidden');
};

const _serializeWhitelistedDomains = (whitelistedDomains) => {

    const domainWhitelist = Object.keys(whitelistedDomains).join(_whitelistValueSeparator);
    return domainWhitelist.replace(_whitelistTrimExpression, '');
};

const _parseDomainWhitelist = async (domainWhitelist) => {

    const whitelistedDomains = {};

    domainWhitelist = domainWhitelist.split(_whitelistValueSeparator);

    for (const domain of domainWhitelist) {

        const normalizedDomain = await Helpers.delegateAction('domain:normalize', domain);

        if (normalizedDomain !== '') {
            whitelistedDomains[normalizedDomain] = true;
        }
    }

    return whitelistedDomains;
};

const _onHelpTranslate = () => {

    chrome.tabs.create({
        'url': 'https://crowdin.com/project/decentraleyes'
    });
};

const _setBlockMissingNoticeVisibility = (visible) => {

    const blockMissingNoticeElement = document.getElementById('notice-block-missing');

    if (visible) {
        blockMissingNoticeElement.classList.remove('hidden');
    } else {
        blockMissingNoticeElement.classList.add('hidden');
    }
};

const _getOptionElementValue = (optionElement) => {

    if (optionElement.getAttribute('type') === 'checkbox') {
        return optionElement.checked;
    } else {
        return optionElement.value;
    }
};

const _onOptionChanged = async ({target}) => {

    let optionKey, optionValue;

    optionKey = target.getAttribute('data-option');
    optionValue = _getOptionElementValue(target);

    if (optionKey === 'whitelistedDomains') {

        clearTimeout(_timeouts.whitelistedDomains);

        _timeouts.whitelistedDomains = await setTimeout(async () => {
            Helpers.delegateAction('whitelisted-domains:update', await _parseDomainWhitelist(optionValue));
        }, 100);

        return;
    }

    if (optionKey === 'blockMissing') {
        _setBlockMissingNoticeVisibility(optionValue);
    }

    Helpers.delegateAction('setting:update', {
        'key': optionKey, 'value': optionValue
    });
};

const _registerOptionChangedEventListeners = (optionElements) => {

    for (const optionElement of Object.values(optionElements)) {

        if (optionElement.getAttribute('type') === 'checkbox') {
            optionElement.addEventListener('change', _onOptionChanged);
        } else {
            optionElement.addEventListener('keyup', _onOptionChanged);
        }
    }
};

const _initializeOptionElements = (settings) => {

    const optionElements = _getOptionElements();

    for (const optionElement of optionElements) {

        const optionKey = optionElement.getAttribute('data-option');

        if (optionElement.getAttribute('type') === 'checkbox') {
            optionElement.checked = settings[optionKey].value;
        } else if (optionKey === 'whitelistedDomains') {
            optionElement.value = _serializeWhitelistedDomains(settings[optionKey].value);
        }
    }

    _registerOptionChangedEventListeners(optionElements);
};

const _onDisableBlockMissing = () => {

    const blockMissingElement = _getOptionElement('blockMissing');

    blockMissingElement.checked = false;
    blockMissingElement.dispatchEvent(new Event('change'));
};

const _registerMiscellaneousEventListeners = () => {

    let blockMissingButtonElement, helpTranslateButtonElement;

    blockMissingButtonElement = document.getElementById('button-block-missing');
    helpTranslateButtonElement = document.getElementById('button-help-translate');

    blockMissingButtonElement.addEventListener('click', _onDisableBlockMissing);
    helpTranslateButtonElement.addEventListener('click', _onHelpTranslate);

    blockMissingButtonElement.addEventListener('keydown', (event) => {

        if (Helpers.enterOrSpaceKeyPressed(event)) {
            _onDisableBlockMissing();
        }
    });

    helpTranslateButtonElement.addEventListener('keydown', (event) => {

        if (Helpers.enterOrSpaceKeyPressed(event)) {
            _onHelpTranslate();
        }
    });
};

const _renderContents = async () => {

    const settings = await Helpers.delegateAction('settings:get', {'concise': false});

    _registerMiscellaneousEventListeners();
    _initializeOptionElements(settings);

    _setBlockMissingNoticeVisibility(settings.blockMissing.value);

    if (! Helpers.languageIsFullySupported()) {
        _renderLocaleNotice();
    }
};

const _onDocumentLoaded = async () => {

    document.body.setAttribute('dir', Helpers.determineScriptDirection());
    Helpers.applyI18nContentToDocument(document);

    await _renderContents();

    Helpers.unhideDocumentContents(document);
};

/**
 * Event Handlers
 */

chrome.runtime.onMessage.addListener((message) => {

    if (message.topic === 'domain:added-to-whitelist' || message.topic === 'domain:removed-from-whitelist') {
        _getOptionElement('whitelistedDomains').value = _serializeWhitelistedDomains(message.value);
    }
});

/**
 * Initializations
 */

document.addEventListener('DOMContentLoaded', _onDocumentLoaded);
