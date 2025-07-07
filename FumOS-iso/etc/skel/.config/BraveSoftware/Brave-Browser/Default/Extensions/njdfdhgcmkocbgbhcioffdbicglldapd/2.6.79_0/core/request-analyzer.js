/**
 * Request Analyzer
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
 *
 * @author      Thomas Rientjes
 * @since       2016-04-11
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
 * Request Analyzer
 */

const requestAnalyzer = {};


/**
 * Public Methods
 */

requestAnalyzer.isValidCandidate = function (requestDetails, tabDetails) {
    const initiatorDomain = helpers.extractDomainFromUrl(tabDetails.url, true);

    if (initiatorDomain === null) {
        initiatorDomain = Address.EXAMPLE;
    }

    // If requested Domain not in mappings.js it is not relevant
    const requestedDomain = helpers.extractDomainFromUrl(requestDetails.url, true);
    if (mappings['cdn'][requestedDomain] === undefined) {
        return false;
    }

    const isAllowlisted = helpers.checkAllowlisted(initiatorDomain, requestAnalyzer.allowlistedDomains);
    if (isAllowlisted) {
        return false;
    }

    // Font Awesome injections in Chromium deactivated  (https://gitlab.com/nobody42/localcdn/-/issues/67)
    if (!BrowserType.FIREFOX) {
        let requestType = requestAnalyzer.chromeSupport(requestDetails.url);
        if (requestType !== '') {
            console.warn(`${LogString.PREFIX} ${requestType} ${LogString.NOT_SUPPORTED}`);
            log.append(tabDetails.url, requestDetails.url, `${requestType} ${LogString.NOT_SUPPORTED}`, true);
            return false;
        }
    }

    // Ignore requests if website is 'yandex.com' and CDN is 'yastatic.net', because website and CDN are the same.
    if (tabDetails.url.includes('yandex.com') && requestDetails.url.includes('yastatic.net')) {
        log.append(tabDetails.url, requestDetails.url, LogString.YANDEX, true);
        return false;
    }

    // Only requests of type GET can be valid candidates.
    return requestDetails.method === WebRequest.GET;
};

requestAnalyzer.chromeSupport = function (url) {
    let value = '';

    if (url.includes('font-awesome')) {
        value = 'font-awesome';
    } else if (url.includes('fontawesome')) {
        value = 'font-awesome';
    } else if (url.includes('fork-awesome')) {
        value = 'fork-awesome';
    }

    return value;
};

requestAnalyzer.isGoogleMaterialIcons = function (url) {
    return url.includes('Material+Icons') || url.includes('materialicons');
};

requestAnalyzer.isGoogleFont = function (domain) {
    return domain.includes('fonts.googleapis.com') || domain.includes('fonts.gstatic.com');
};

requestAnalyzer.getLocalTarget = function (requestDetails, initiator) {
    let destinationSearchString;

    destinationSearchString = '';
    const destinationUrl = new URL(requestDetails.url);

    const destinationHost = destinationUrl.host;
    const destinationPath = destinationUrl.pathname;
    if (destinationUrl.search) {
        destinationSearchString = destinationUrl.search;
    }

    // Use the proper mappings for the targeted host.
    const hostMappings = mappings.cdn[destinationHost];

    // Resource mapping files are never locally available.
    if (Resource.MAPPING_EXPRESSION.test(destinationPath)) {
        return {
            'result': false,
        };
    }

    const basePath = requestAnalyzer._matchBasePath(hostMappings, destinationPath)['result'];
    const resourceMappings = hostMappings[basePath];

    if (!resourceMappings) {
        return {
            'result': false,
        };
    }

    // Return either the local target's path or false.
    // eslint-disable-next-line max-len
    return requestAnalyzer._findLocalTarget(
        resourceMappings,
        basePath,
        destinationHost,
        destinationPath,
        destinationSearchString,
        initiator
    );
};


/**
 * Private Methods
 */

requestAnalyzer._matchBasePath = function (hostMappings, channelPath) {
    for (const basePath of Object.keys(hostMappings)) {
        if (channelPath.startsWith(basePath)) {
            return {
                'result': basePath,
            };
        }
    }

    return {
        'result': false,
    };
};

// eslint-disable-next-line max-len
requestAnalyzer._findLocalTarget = function (resourceMappings, basePath, channelHost, channelPath, destinationSearchString, initiator) {
    let resourcePath, versionNumber, resourcePattern, shorthandResource;

    resourcePath = channelPath.replace(basePath, '');
    if (resourcePath.startsWith('bootstrap')) {
        resourcePath = resourcePath.replace(Regex.TWITTER_BOOTSTRAP_ALPHA_BETA, '');
    }

    // Evaluate first in case of version 'latest' and numerals in resource
    versionNumber = resourcePath.match(Resource.VERSION_EXPRESSION);

    // Handle weird version expressions
    if (!versionNumber && Resource.SINGLE_NUMBER_EXPRESSION.test(channelPath)) {
        versionNumber = channelPath.match(/\d{1,2}/);
        resourcePattern = resourcePath.replaceAll(versionNumber, Resource.VERSION_PLACEHOLDER);
        versionNumber = [`${versionNumber}.0`];
    } else {
        resourcePattern = resourcePath.replaceAll(versionNumber, Resource.VERSION_PLACEHOLDER);
    }

    shorthandResource = shorthands.specialFiles(channelHost, channelPath, destinationSearchString);
    if (shorthandResource['result'] !== false) {
        console.log(`${LogString.PREFIX} ${LogString.REPLACED_RESOURCE} ${shorthandResource.path}`);
        log.append(initiator, channelHost + channelPath, shorthandResource.path, false);
        return shorthandResource;
    }

    if (resourcePattern === undefined) {
        return {
            'result': false,
        };
    }

    for (let resourceMold of Object.keys(resourceMappings)) {
        if (resourcePattern.startsWith(resourceMold)) {
            let targetPath, versionDelivered, versionRequested, bundle;
            targetPath = resourceMappings[resourceMold].path;
            targetPath = targetPath.replaceAll(Resource.VERSION_PLACEHOLDER, versionNumber);
            // Replace the requested version with the latest depending on major version
            versionDelivered = targets.setLastVersion(targetPath, versionNumber);
            if (versionDelivered === '') {
                return {
                    'result': false,
                };
            }

            targetPath = targetPath.replaceAll(versionNumber, versionDelivered);

            if (versionNumber === null) {
                versionDelivered = targetPath.match(Resource.VERSION_EXPRESSION).toString();
                versionRequested = 'latest';
            } else {
                versionRequested = versionNumber[0];
            }

            // Get bundle name
            bundle = targets.determineBundle(targetPath);
            if (bundle !== '') {
                targetPath = requestAnalyzer._getPathOfBundle(initiator, channelHost, channelPath, targetPath, bundle);
                if (bundle === 'vex (Bundle)' && !targetPath.endsWith('.min.css') && targetPath.endsWith('.css')) {
                    targetPath = targetPath.replace('.css', '.min.css');
                }
            }
            if (targetPath['result'] === false) {
                break;
            }

            targetPath = requestAnalyzer._redirectTargetFile(targetPath);

            // Prepare and return a local target.
            return {
                'source': channelHost,
                'versionRequested': versionRequested,
                'versionDelivered': versionDelivered,
                'path': targetPath,
                'bundle': bundle
            };
        }
    }

    if (!IgnoredHost[channelHost]) {
        console.warn(`${LogString.PREFIX} ${LogString.MISSING_RESOURCE} ${channelHost}${channelPath}`);
        log.append(initiator, channelHost + channelPath, '-', true);
    }

    if (Object.keys(mappings.cdn).includes(helpers.extractDomainFromUrl(initiator, true))) {
        return {'result': 'blocked'};
    }

    return {
        'result': false,
    };
};

requestAnalyzer._redirectTargetFile = function (targetPath) {
    return RedirectMap[targetPath] || targetPath;
};


requestAnalyzer._getPathOfBundle = function (initiator, channelHost, channelPath, targetPath, bundle) {
    let filename = channelPath.split('/').pop();

    if (bundle === ReqAnalyzer.BUNDLE_MATHJAX && filename !== 'MathJax.js') {
        filename = requestAnalyzer._handleMathJax(channelPath, channelHost, initiator);
    } else if (bundle === ReqAnalyzer.BUNDLE_TINYMCE && filename !== 'tinymce.min.js') {
        filename = requestAnalyzer._handleTinyMCE(channelPath, channelHost, initiator);
    } else if (bundle === ReqAnalyzer.BUNDLE_DATATABLES) {
        filename = requestAnalyzer._handleUncompressedFiles(filename);
    } else if (bundle === ReqAnalyzer.BUNDLE_SCROLLMAGIC && !filename.endsWith('.min.js')) {
        filename = requestAnalyzer._handleUncompressedFiles(filename);
    } else if (bundle === ReqAnalyzer.BUNDLE_FONT_AWESOME) {
        filename = requestAnalyzer._handleFontawesomeFiles(targetPath, filename);
    } else if (bundle === ReqAnalyzer.BUNDLE_PURE_CSS) {
        filename = (filename === 'pure-min.css' ? 'pure.min.css' : filename);
    }

    if (filename === false) {
        return {
            'result': false,
        };
    }

    return helpers.formatFilename(filename.endsWith('.js')
        ? `${targetPath + filename}m`
        : targetPath + filename);
};

requestAnalyzer._handleMathJax = function (channelPath, channelHost, initiator) {
    let filename = channelPath.replace(Resource.MATHJAX, '');
    if (filename.startsWith('/npm/mathjax@3')) {
        filename = filename.replace('/npm/mathjax@3/', '');
    }
    if (filename === 'config/TeX-AMS_HTML.js') {
        filename = 'config/TeX-AMS_HTML-full.js';
    }
    if (!MathJaxFiles[filename] && !MathJax3Files[filename]) {
        console.warn(`${LogString.PREFIX} ${LogString.MISSING_RESOURCE} ${channelHost + channelPath}`);
        log.append(initiator, channelHost + channelPath, '-', true);
        return false;
    }
    return filename;
};

requestAnalyzer._handleUncompressedFiles = function (filename) {
    if (!filename.endsWith('.min.js') && filename.endsWith('.js')) {
        return filename.replace('.js', '.min.js');
    } else if (!filename.endsWith('.min.css') && filename.endsWith('.css')) {
        return filename.replace('.css', '.min.css');
    }
    return filename;
};

requestAnalyzer._handleTinyMCE = function (channelPath, channelHost, initiator) {
    const filename = channelPath.replace(Resource.TINYMCE, '');
    if (filename.startsWith('plugins/')) {
        console.warn(`${LogString.PREFIX} ${LogString.MISSING_RESOURCE} ${channelHost + channelPath}`);
        log.append(initiator, channelHost + channelPath, '-', true);
        return false;
    }
    return filename;
};

requestAnalyzer._handleFontawesomeFiles = function (targetPath, filename) {
    if (targetPath === 'resources/font-awesome/4.7.0/fonts/') {
        return filename.replace('fontawesome-webfont.woff', 'fontawesome-webfont.woff2');
    }
    return filename;
};

requestAnalyzer._applyAllowlistedDomains = function () {
    storageManager.type.get(Setting.ALLOWLISTED_DOMAINS, function (items) {
        requestAnalyzer.allowlistedDomains = items.allowlistedDomains || {};
    });
};
requestAnalyzer._applyManipulateDOMDomains = function () {
    storageManager.type.get(Setting.DOMAINS_MANIPULATE_DOM, function (items) {
        requestAnalyzer.domainsManipulateDOM = items.domainsManipulateDOM || {};
    });
};


/**
 * Initializations
 */

requestAnalyzer.allowlistedDomains = {};
requestAnalyzer._applyAllowlistedDomains();

requestAnalyzer.domainsManipulateDOM = {};
requestAnalyzer._applyManipulateDOMDomains();


/**
 * Event Handlers
 */

chrome.storage.onChanged.addListener(requestAnalyzer._applyAllowlistedDomains);
chrome.storage.onChanged.addListener(requestAnalyzer._applyManipulateDOMDomains);
