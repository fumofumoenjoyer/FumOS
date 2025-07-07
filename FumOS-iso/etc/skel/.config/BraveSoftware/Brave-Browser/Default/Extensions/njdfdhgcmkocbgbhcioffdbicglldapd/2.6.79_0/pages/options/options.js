/**
 * Main Options Page
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
 *
 * @author      Thomas Rientjes
 * @since       2016-08-09
 *
 * @author      nobody
 * @since       2020-05-04
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Options
 */

let options = {};


/**
 * Private Methods
 */

options._renderContents = function () {
    let translationComplete = true;

    document.body.setAttribute('dir', options._scriptDirection);
    translationComplete = helpers.insertI18nContentIntoDocument(document);

    options._determineLocalOptionValues().then(options._determineOptionValues).then(options._renderOptionsPanel);

    if (!translationComplete) {
        options._renderLocaleNotice();
    }

    if (!BrowserType.FIREFOX) {
        document.getElementById('chromium-banner').style.display = 'block';
        document.getElementById('div-html-badge').style.display = 'none';
    }

    document.getElementById('label-version').textContent = chrome.runtime.getManifest().version;
};

options._renderOptionsPanel = function () {
    let allowlistedDomains, domainAllowlist, htmlFilterDomains, domainHtmlFilter,
        googleFontsDomains, domainAllowedGoogleFonts, basic, advanced, other;

    allowlistedDomains = options._optionValues.allowlistedDomains;
    domainAllowlist = options._serializeAllowlistedDomains(allowlistedDomains);

    htmlFilterDomains = options._optionValues.domainsManipulateDOM;
    domainHtmlFilter = options._serializeAllowlistedDomains(htmlFilterDomains);

    googleFontsDomains = options._optionValues.allowedDomainsGoogleFonts;
    domainAllowedGoogleFonts = options._serializeAllowlistedDomains(googleFontsDomains);

    basic = {
        'showIconBadge': options._optionValues.showIconBadge,
        'updateNotification': options._optionValues.updateNotification,
        'disablePrefetch': options._optionValues.disablePrefetch,
        'stripMetadata': options._optionValues.stripMetadata,
        'internalStatistics': options._internalStatistics,
        'hideDonationButton': options._optionValues.hideDonationButton,
        'allowlistedDomains': domainAllowlist
    };

    advanced = {
        'blockMissing': options._optionValues.blockMissing,
        'blockGoogleFonts': options._optionValues.blockGoogleFonts,
        'allowedDomainsGoogleFonts': domainAllowedGoogleFonts,
        'enableLogging': options._optionValues.enableLogging,
        'domainsManipulateDOM': domainHtmlFilter,
        'negateHtmlFilterList': options._optionValues.negateHtmlFilterList,
        'changeBadgeColorMissingResources': options._optionValues.changeBadgeColorMissingResources
    };

    other = {
        'selectedIcon': options._optionValues.selectedIcon,
        'badgeDefaultBackgroundColor': options._optionValues.badgeDefaultBackgroundColor,
        'badgeDefaultTextColor': options._optionValues.badgeDefaultTextColor,
        'badgeHTMLFilterBackgroundColor': options._optionValues.badgeHTMLFilterBackgroundColor,
        'badgeHTMLfilterTextColor': options._optionValues.badgeHTMLfilterTextColor,
        'badgeMissingResourceBackgroundColor': options._optionValues.badgeMissingResourceBackgroundColor,
        'badgeMissingResourceTextColor': options._optionValues.badgeMissingResourceTextColor,
        'storageType': options._optionValues.storageType
    };

    options._registerMiscellaneousEventListeners();

    if (options._optionValues.blockMissing === true) {
        options._renderBlockMissingNotice();
    }

    if (options._languageSupported === false) {
        options._renderLocaleNotice();
    }

    optionsBasic.init(basic);
    optionsAdvanced.init(advanced);
    optionsOther.init(other);
    optionsInfo.init();

    document.getElementById('btn-general-tab').addEventListener('click', options._changeTab);
    document.getElementById('btn-advanced-tab').addEventListener('click', options._changeTab);
    document.getElementById('btn-export-import-tab').addEventListener('click', options._changeTab);
};

options._renderBlockMissingNotice = function () {
    let blockMissingNoticeElement = document.getElementById('notice-block-missing');
    blockMissingNoticeElement.setAttribute('class', 'notice notice-warning');
};

options._hideBlockMissingNotice = function () {
    let blockMissingNoticeElement = document.getElementById('notice-block-missing');
    blockMissingNoticeElement.setAttribute('class', 'notice notice-warning hidden');
};

options._renderLocaleNotice = function () {
    let localeNoticeElement = document.getElementById('notice-locale');
    localeNoticeElement.setAttribute('class', 'notice notice-default');
};

options._registerMiscellaneousEventListeners = function () {
    let blockMissingButtonElement, changeEvent, optionBlockMissing;

    blockMissingButtonElement = document.getElementById('button-block-missing');
    changeEvent = new Event('change');
    optionBlockMissing = options.getOptionElement('blockMissing');

    blockMissingButtonElement.addEventListener('click', function () {
        optionBlockMissing.checked = false;
        optionBlockMissing.dispatchEvent(changeEvent);
    });
};

options._determineOptionValues = function () {
    return new Promise((resolve) => {
        let nodeList, optionList, optionKeys;

        nodeList = document.querySelectorAll('[data-option]');
        optionList = {};

        for (let element of nodeList) {
            optionList[element.getAttribute('data-option')] = true;
        }
        delete optionList.internalStatistics;

        optionKeys = Object.keys(optionList);

        if (options._storageType === 'sync') {
            chrome.storage.sync.get(optionKeys, function (items) {
                options._optionValues = items;
                resolve();
            });
        } else {
            chrome.storage.local.get(optionKeys, function (items) {
                options._optionValues = items;
                resolve();
            });
        }
    });
};

options._determineLocalOptionValues = function () {
    return new Promise((resolve) => {
        chrome.storage.local.get([Setting.INTERNAL_STATISTICS, Setting.STORAGE_TYPE], function (items) {
            options._internalStatistics = items.internalStatistics;
            options._storageType = items.storageType;
            resolve();
        });
    });
};

options.getOptionElement = function (optionKey) {
    return document.querySelector(`[data-option=${optionKey}]`);
};

options._configureLinkPrefetching = function (value) {
    if (value === false) {
        // Restore default values of related preference values.
        chrome.privacy.network.networkPredictionEnabled.clear({});
    } else {
        chrome.privacy.network.networkPredictionEnabled.set({
            'value': false,
        });
    }
};

options._serializeAllowlistedDomains = function (allowlistedDomains) {
    if (allowlistedDomains === undefined || allowlistedDomains === null) {
        return '';
    }

    let domainAllowlist, allowlistedDomainKeys;

    allowlistedDomainKeys = Object.keys(allowlistedDomains).sort();
    domainAllowlist = '';

    allowlistedDomainKeys.forEach(function (domain) {
        domainAllowlist = `${domainAllowlist}${domain}\n`;
    });

    domainAllowlist = domainAllowlist.slice(0, -1);
    domainAllowlist = domainAllowlist.replace(Allowlist.TRIM_EXPRESSION, '');

    return domainAllowlist;
};

options._parseDomainAllowlist = function (domainAllowlist) {
    let allowlistedDomains = {};

    domainAllowlist.split(Allowlist.VALUE_SEPARATOR).forEach(function (domain) {
        allowlistedDomains[helpers.normalizeDomain(domain)] = true;
    });

    return allowlistedDomains;
};


/**
 * Event Handlers
 */

options._onDocumentLoaded = function () {
    let language = navigator.language;

    options._languageSupported = helpers.languageIsFullySupported(language);
    options._scriptDirection = helpers.determineScriptDirection(language);

    options._renderContents();
};

options.onOptionChanged = function ({target}) {
    let optionKey, optionType, optionValue;

    optionKey = target.getAttribute('data-option');
    optionType = target.getAttribute('type');

    if (optionType === 'checkbox') {
        optionValue = target.checked;
    } else {
        optionValue = target.value;
    }

    switch (optionKey) {
        case Setting.UPDATE_NOTIFICATION:
            optionValue = parseInt(optionValue);
            break;
        case Setting.BLOCK_MISSING:
            if (optionValue === true) {
                options._renderBlockMissingNotice();
            } else {
                options._hideBlockMissingNotice();
            }
            break;
        case Setting.DISABLE_PREFETCH:
            options._configureLinkPrefetching(optionValue);
            break;
        case Setting.ALLOWLISTED_DOMAINS:
        case Setting.DOMAINS_MANIPULATE_DOM:
        case Setting.ALLOWED_DOMAINS_GOOGLE_FONTS:
            optionValue = options._parseDomainAllowlist(optionValue);
            break;
        case Setting.BLOCK_GOOGLE_FONTS:
            optionsAdvanced._renderAdvancedSection(optionValue);
            break;
        case Setting.NEGATE_HTML_FILTER_LIST:
            optionsAdvanced._renderHtmlFilterSection(optionValue);
            break;
        case Setting.SELECTED_ICON:
            optionsOther._setIcon(optionValue);
            break;
        case Setting.LOGGING:
            if (optionValue === false) {
                chrome.runtime.sendMessage({'topic': 'logs:delete', 'value': ''});
            }
            break;
    }

    if (options._storageType === 'sync' && optionKey !== 'internalStatistics') {
        chrome.storage.sync.set({
            [optionKey]: optionValue,
        });
    } else {
        chrome.storage.local.set({
            [optionKey]: optionValue,
        });
    }
};

options._onLinkClick = function (url) {
    chrome.tabs.create({
        'url': url,
        'active': true
    });
};

options._changeTab = function ({target}) {
    let tabContent, tabButton, optionKey;

    optionKey = target.getAttribute('data-option-tab');
    tabContent = document.getElementsByClassName('tab-content');
    tabButton = document.getElementsByClassName('option-buttons');

    for (let i = 0; i < tabContent.length; i++) {
        if (tabContent[i].id === optionKey) {
            tabContent[i].style.display = 'block';
            tabButton[i].classList.add('option-buttons-active');
        } else {
            tabContent[i].style.display = 'none';
            tabButton[i].classList.remove('option-buttons-active');
        }
    }
};


/**
 * Initializations
 */

options._storageType = 'local';

document.addEventListener('DOMContentLoaded', options._onDocumentLoaded);
