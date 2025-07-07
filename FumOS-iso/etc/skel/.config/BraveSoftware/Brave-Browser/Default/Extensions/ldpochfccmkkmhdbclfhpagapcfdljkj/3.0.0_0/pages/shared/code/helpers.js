/**
 * Page Helpers
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2024-10-10
 * @license     MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Public Functions
 */

const awaitInitialization = () => {

    return new Promise((resolve, reject) => {

        let request, intervalIdentifier, timeoutIdentifier;

        request = {'topic': 'extension:is-initialized'};

        intervalIdentifier = setInterval(() => {

            chrome.runtime.sendMessage(request, (response) => {

                if (response?.value === true) {

                    clearInterval(intervalIdentifier);
                    clearTimeout(timeoutIdentifier);

                    resolve();
                }
            });

        }, 100);

        timeoutIdentifier = setTimeout(() => {

            clearInterval(intervalIdentifier);
            reject(new Error('The extension failed to initialize.'));

        }, 10000);
    });
};

const delegateAction = (identifier, payload, persist = true) => {

    return new Promise((resolve, reject) => {

        const request = {'topic': identifier, 'value': payload};

        chrome.runtime.sendMessage(request, (response) => {

            if (response) {
                resolve(response.value);
            } else {

                if (persist === true) {

                    awaitInitialization().then(() => {
                        delegateAction(identifier, payload, false).then(resolve).catch(reject);
                    }).catch(reject);

                } else {
                    reject(new Error(`Action "${identifier}" failed to complete.`));
                }
            }
        });
    });
};

const determineActiveTab = async () => {

    let queryParameters, tabs;

    queryParameters = {'active': true, 'currentWindow': true};
    tabs = await chrome.tabs.query(queryParameters);

    if (tabs[0]) {
        return tabs[0];
    }

    queryParameters = {'active': true};
    tabs = await chrome.tabs.query(queryParameters);

    return tabs[0];
};

const determineScriptDirection = (language) => {

    let rightToLeftLanguages, scriptDirection;

    rightToLeftLanguages = ['ar', 'he'];
    language ??= navigator.language;

    if (rightToLeftLanguages.indexOf(language) === -1) {
        scriptDirection = 'ltr';
    } else {
        scriptDirection = 'rtl';
    }

    return scriptDirection;
};

const languageIsFullySupported = (language) => {

    let supportedLanguages, languageSupported;

    supportedLanguages = [
        'ar', 'bg', 'bn', 'cs', 'da', 'de', 'el', 'en', 'eo', 'es', 'et',
        'fi', 'fr', 'he', 'hr', 'hu', 'id', 'is', 'it', 'ja', 'ko', 'nb',
        'nl', 'pl', 'pt', 'ro', 'ru', 'si', 'sq', 'sv', 'tr', 'uk', 'zh'
    ];

    language ??= navigator.language;
    languageSupported = false;

    for (const supportedLanguage of supportedLanguages) {

        if (language.search(supportedLanguage) !== -1) {
            languageSupported = true;
        }
    }

    return languageSupported;
};

const applyI18nContentToDocument = (document) => {

    let i18nElements, scriptDirection;

    i18nElements = document.querySelectorAll('[data-i18n-content]');
    scriptDirection = determineScriptDirection();

    i18nElements.forEach((i18nElement) => {

        const i18nMessageName = i18nElement.getAttribute('data-i18n-content');

        i18nElement.innerText = chrome.i18n.getMessage(i18nMessageName);
        i18nElement.setAttribute('dir', scriptDirection);
    });
};

const applyI18nTitlesToDocument = (document) => {

    let i18nElements, scriptDirection;

    i18nElements = document.querySelectorAll('[data-i18n-title]');
    scriptDirection = determineScriptDirection();

    i18nElements.forEach((i18nElement) => {

        const i18nMessageName = i18nElement.getAttribute('data-i18n-title');

        i18nElement.setAttribute('title', chrome.i18n.getMessage(i18nMessageName));
        i18nElement.setAttribute('dir', scriptDirection);
    });
};

const unhideDocumentContents = (document) => {
    document.getElementById('wrapper').classList.remove('hidden');
};

const extractFilenameFromPath = (path) => {

    let pathSegments, filename;

    pathSegments = path.split('/');
    filename = pathSegments[pathSegments.length - 1];

    return filename;
};

const enterOrSpaceKeyPressed = (event) => {

    if (! event.isComposing && event.keyCode !== 229) {
        return event.keyCode === 13 || event.keyCode === 32;
    }

    return false;
};

const determineResourceName = (filename) => {

    switch (filename) {

    case 'angular.min.jsm':
        return 'AngularJS';
    case 'backbone-min.jsm':
        return 'Backbone.js';
    case 'dojo.jsm':
        return 'Dojo';
    case 'ember.min.jsm':
        return 'Ember.js';
    case 'ext-core.jsm':
        return 'Ext Core';
    case 'jquery.min.jsm':
        return 'jQuery';
    case 'jquery-ui.min.jsm':
        return 'jQuery UI';
    case 'modernizr.min.jsm':
        return 'Modernizr';
    case 'mootools-yui-compressed.jsm':
        return 'MooTools';
    case 'prototype.jsm':
        return 'Prototype';
    case 'scriptaculous.jsm':
        return 'Scriptaculous';
    case 'swfobject.jsm':
        return 'SWFObject';
    case 'underscore-min.jsm':
        return 'Underscore.js';
    case 'webfont.jsm':
        return 'Web Font Loader';
    default:
        return 'Unknown';
    }
};

const determineCdnName = (domainName) => {

    switch (domainName) {

    case 'ajax.googleapis.com':
        return 'Google Hosted Libraries';
    case 'ajax.aspnetcdn.com':
        return 'Microsoft Ajax CDN';
    case 'ajax.microsoft.com':
        return 'Microsoft Ajax CDN [Deprecated]';
    case 'cdnjs.cloudflare.com':
        return 'CDNJS (Cloudflare)';
    case 'code.jquery.com':
        return 'jQuery CDN (MaxCDN)';
    case 'cdn.jsdelivr.net':
        return 'jsDelivr (MaxCDN)';
    case 'yastatic.net':
        return 'Yandex CDN';
    case 'yandex.st':
        return 'Yandex CDN [Deprecated]';
    case 'apps.bdimg.com':
        return 'Baidu CDN';
    case 'libs.baidu.com':
        return 'Baidu CDN [Deprecated]';
    case 'lib.sinaapp.com':
        return 'Sina Public Resources';
    case 'upcdn.b0.upaiyun.com':
        return 'UpYun Library';
    case 'cdn.bootcss.com':
        return 'BootCDN';
    case 'sdn.geekzu.org':
        return 'Geekzu Public Service [Mirror]';
    case 'ajax.proxy.ustclug.org':
        return 'USTC Linux User Group [Mirror]';
    default:
        return 'Unknown';
    }
};

const determineVersion = () => {

    const version = chrome.runtime.getManifest().version;

    if (version.indexOf('beta') === -1) {
        return version;
    } else {
        return 'BETA';
    }
};

const formatNumber = (number) => {

    if (typeof number === 'number') {
        return number.toLocaleString();
    }
};

/**
 * Exports
 */

export default {
    awaitInitialization,
    delegateAction,
    determineActiveTab,
    determineScriptDirection,
    languageIsFullySupported,
    applyI18nContentToDocument,
    applyI18nTitlesToDocument,
    unhideDocumentContents,
    extractFilenameFromPath,
    enterOrSpaceKeyPressed,
    determineResourceName,
    determineCdnName,
    determineVersion,
    formatNumber
};
