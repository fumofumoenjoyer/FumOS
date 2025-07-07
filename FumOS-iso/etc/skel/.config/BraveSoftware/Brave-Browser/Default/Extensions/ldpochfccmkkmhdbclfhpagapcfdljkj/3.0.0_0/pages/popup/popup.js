/**
 * Popup Page
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
 * Private Functions
 */

const _groupResourceInjections = (injections) => {

    return Object.values(injections).reduce((accumulator, injection) => {

        accumulator[injection.source] = accumulator[injection.source] ?? [];
        accumulator[injection.source].push(injection);

        return accumulator;

    }, {});
};

const _createInjectionGroupHeaderElement = (source, injections) => {

    let injectionGroupHeaderElement, badgeElement, badgeTextNode, cdnNameTextNode;

    injectionGroupHeaderElement = document.createElement('li');
    injectionGroupHeaderElement.setAttribute('class', 'list-item');

    badgeElement = document.createElement('span');
    badgeElement.setAttribute('class', 'badge');

    badgeTextNode = document.createTextNode(injections.length);
    badgeElement.appendChild(badgeTextNode);

    cdnNameTextNode = document.createTextNode(Helpers.determineCdnName(source));

    injectionGroupHeaderElement.appendChild(badgeElement);
    injectionGroupHeaderElement.appendChild(cdnNameTextNode);

    return injectionGroupHeaderElement;
};

const _createInjectionElement = (injection) => {

    let injectionElement, filename, name, nameTextNode, noteElement, noteTextNode;

    injectionElement = document.createElement('li');
    injectionElement.setAttribute('class', 'sublist-item');

    filename = Helpers.extractFilenameFromPath(injection.path);
    name = Helpers.determineResourceName(filename);

    nameTextNode = document.createTextNode(`- ${name}`);
    injectionElement.appendChild(nameTextNode);

    noteElement = document.createElement('span');
    noteElement.setAttribute('class', 'side-note');

    noteTextNode = document.createTextNode(` v${injection.version}`);

    noteElement.appendChild(noteTextNode);
    injectionElement.appendChild(noteElement);

    return injectionElement;
};

const _createInjectionGroupElement = (source, injections) => {

    let injectionGroupElement;

    injectionGroupElement = document.createElement('ul');
    injectionGroupElement.setAttribute('class', 'sublist');

    for (const injection of injections) {

        const injectionElement = _createInjectionElement(injection);
        injectionGroupElement.appendChild(injectionElement);
    }

    return injectionGroupElement;
};

const _createInjectionOverviewElement = (groupedInjections) => {

    const injectionOverviewElement = document.createElement('ul');
    injectionOverviewElement.setAttribute('class', 'list');

    for (const [source, injections] of Object.entries(groupedInjections)) {

        let injectionGroupHeaderElement, injectionGroupElement;

        injectionGroupHeaderElement = _createInjectionGroupHeaderElement(source, injections);
        injectionGroupElement = _createInjectionGroupElement(source, injections);

        injectionOverviewElement.appendChild(injectionGroupHeaderElement);
        injectionOverviewElement.appendChild(injectionGroupElement);
    }

    return injectionOverviewElement;
};

const _renderInjectionPanel = (groupedInjections) => {

    let websiteContextElement, injectionOverviewElement;

    websiteContextElement = document.getElementById('website-context');
    injectionOverviewElement = _createInjectionOverviewElement(groupedInjections);

    websiteContextElement.append(injectionOverviewElement);
};

const _close = async () => {

    const platform = await chrome.runtime.getPlatformInfo();

    if (platform.os === chrome.runtime.PlatformOs.ANDROID) {

        const activeTab = await chrome.tabs.getCurrent();

        if (activeTab) {
            chrome.tabs.remove(activeTab.id);
        } else {
            window.close();
        }

    } else {
        window.close();
    }
};

/**
 * Event Handlers
 */

const _onTestingUtilityLinkClicked = (event) => {

    if (event.button === 0 || event.button === 1) {

        chrome.tabs.create({
            'url': 'https://decentraleyes.org/test',
            'active': (event.button === 0)
        });
    }

    if (event.button === 0) {
        window.close();
    }
};

const _onOptionsButtonClicked = async () => {

    const platform = await chrome.runtime.getPlatformInfo();

    if (platform.os === chrome.runtime.PlatformOs.ANDROID) {

        chrome.tabs.create({
            'url': chrome.runtime.getURL('pages/options/options.html'),
            'active': true
        });

        return window.close();

    } else {

        chrome.runtime.openOptionsPage();
        return window.close();
    }
};

const _renderNonContextualContents = async () => {

    let versionLabelElement, counterElement, testingUtilityLinkElement, optionsButtonElement, amountInjected;

    versionLabelElement = document.getElementById('version-label');
    counterElement = document.getElementById('injection-counter');
    testingUtilityLinkElement = document.getElementById('testing-utility-link');
    optionsButtonElement = document.getElementById('options-button');

    versionLabelElement.innerText = Helpers.determineVersion();

    amountInjected = await Helpers.delegateAction('statistics:get-amount-injected');
    counterElement.innerText = Helpers.formatNumber(amountInjected.value);

    testingUtilityLinkElement.addEventListener('mouseup', _onTestingUtilityLinkClicked);
    optionsButtonElement.addEventListener('mouseup', _onOptionsButtonClicked);

    testingUtilityLinkElement.addEventListener('keydown', (event) => {

        const enterOrSpaceKeyPressed = Helpers.enterOrSpaceKeyPressed(event);

        if (enterOrSpaceKeyPressed) {

            chrome.tabs.create({
                'url': 'https://decentraleyes.org/test'
            });

            window.close();
        }
    });

    optionsButtonElement.addEventListener('keydown', (event) => {

        const enterOrSpaceKeyPressed = Helpers.enterOrSpaceKeyPressed(event);

        if (enterOrSpaceKeyPressed) {

            chrome.runtime.openOptionsPage();
            return window.close();
        }
    });
};

const _onProtectionToggled = async () => {

    let bypassCache, activeTab;

    bypassCache = (typeof browser === 'undefined');
    activeTab = await Helpers.determineActiveTab();

    chrome.tabs.reload(activeTab.id, {bypassCache});
    _close();
};

const _enableProtection = async () => {

    let activeTab, tabDomain;

    activeTab = await Helpers.determineActiveTab();
    tabDomain = await Helpers.delegateAction('domain:extract-from-url', activeTab.url);

    await Helpers.delegateAction('domain:remove-from-whitelist', tabDomain);
    _onProtectionToggled();
};

const _disableProtection = async () => {

    let activeTab, tabDomain;

    activeTab = await Helpers.determineActiveTab();
    tabDomain = await Helpers.delegateAction('domain:extract-from-url', activeTab.url);

    await Helpers.delegateAction('domain:add-to-whitelist', tabDomain);
    _onProtectionToggled();
};

const _renderDomainWhitelistPanel = async (domain) => {

    let websiteContextElement, protectionToggleElement, domainIndicatorElement, domainIsWhitelisted;

    websiteContextElement = document.getElementById('website-context');
    protectionToggleElement = document.getElementById('protection-toggle-button');
    domainIndicatorElement = document.getElementById('domain-indicator');

    protectionToggleElement.setAttribute('dir', Helpers.determineScriptDirection());
    domainIndicatorElement.innerText = domain;

    domainIsWhitelisted = await Helpers.delegateAction('domain:is-whitelisted', domain);

    if (domainIsWhitelisted === true) {

        const enableProtectionTitle = chrome.i18n.getMessage('enableProtectionTitle');

        protectionToggleElement.setAttribute('class', 'button button-toggle');
        protectionToggleElement.addEventListener('click', _enableProtection);
        protectionToggleElement.setAttribute('title', enableProtectionTitle);

        protectionToggleElement.addEventListener('keydown', (event) => {

            const enterOrSpaceKeyPressed = Helpers.enterOrSpaceKeyPressed(event);

            if (enterOrSpaceKeyPressed) {
                _enableProtection();
            }
        });

    } else {

        const disableProtectionTitle = chrome.i18n.getMessage('disableProtectionTitle');

        protectionToggleElement.setAttribute('class', 'button button-toggle active');
        protectionToggleElement.addEventListener('click', _disableProtection);
        protectionToggleElement.setAttribute('title', disableProtectionTitle);

        protectionToggleElement.addEventListener('keydown', (event) => {

            const enterOrSpaceKeyPressed = Helpers.enterOrSpaceKeyPressed(event);

            if (enterOrSpaceKeyPressed) {
                _disableProtection();
            }
        });
    }

    websiteContextElement.classList.remove('hidden');
};

const _renderContextualContents = async () => {

    let activeTab, tabDomain, tabContext, groupedInjections;

    activeTab = await Helpers.determineActiveTab();
    tabDomain = await Helpers.delegateAction('domain:extract-from-url', activeTab.url);

    if (tabDomain !== null) {
        await _renderDomainWhitelistPanel(tabDomain);
    }

    tabContext = await Helpers.delegateAction('tab-context:get', activeTab.id);
    groupedInjections = _groupResourceInjections(tabContext.injections);

    if (Object.keys(groupedInjections).length > 0) {
        _renderInjectionPanel(groupedInjections);
    }
};

const _onDocumentLoaded = async () => {

    Helpers.applyI18nContentToDocument(document);
    Helpers.applyI18nTitlesToDocument(document);

    await _renderNonContextualContents();
    await _renderContextualContents();

    Helpers.unhideDocumentContents(document);
};

/**
 * Initializations
 */

document.addEventListener('DOMContentLoaded', _onDocumentLoaded);
