/**
 * Request Analyzer
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2016-04-11
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../../data/constants.js';
import Helpers from '../../utilities/helpers.js';
import ResourceAliases from '../../data/resource/aliases.js';
import ResourceMappings from '../../data/resource/mappings.js';

/**
 * Private Functions
 */

const _matchBasePath = (hostMappings, channelPath) => {

    for (const basePath of Object.keys(hostMappings)) {

        if (channelPath.startsWith(basePath)) {
            return basePath;
        }
    }

    return null;
};

const _findLocalTarget = (resourceMappings, basePath, channel) => {

    let resourcePath, versionNumber, resourcePattern;

    resourcePath = channel.path.replace(basePath, '');

    versionNumber = resourcePath.match(Constants.Resource.VERSION_EXPRESSION);
    resourcePattern = resourcePath.replace(versionNumber, Constants.Resource.VERSION_PLACEHOLDER);

    for (const resourceMold of Object.keys(resourceMappings)) {

        if (resourcePattern.startsWith(resourceMold)) {

            let targetPath, hostAliases, version;

            targetPath = resourceMappings[resourceMold].path;
            targetPath = targetPath.replace(Constants.Resource.VERSION_PLACEHOLDER, versionNumber);

            hostAliases = ResourceAliases[channel.host];

            if (hostAliases && hostAliases[targetPath]) {

                const alias = hostAliases[targetPath];

                targetPath = alias.path;
                version = alias.version;

            } else {
                version = versionNumber?.[0] ?? targetPath.match(Constants.Resource.VERSION_EXPRESSION);
            }

            // Prepare and return a local target.
            return {'source': channel.host, 'version': version, 'path': targetPath};
        }
    }

    return null;
};

/**
 * Public Functions
 */

const determineLocalTarget = (requestDetails) => {

    let destinationUrl, destination, hostMappings, basePath, resourceMappings;

    destinationUrl = new URL(requestDetails.url);

    destination = {'host': destinationUrl.host, 'path': destinationUrl.pathname};

    // Use the appropriate mappings for the targeted host.
    hostMappings = ResourceMappings[destination.host];

    // Resource mapping files are never locally available.
    if (Constants.Resource.MAPPING_EXPRESSION.test(destination.path)) {
        return null;
    }

    basePath = _matchBasePath(hostMappings, destination.path);
    resourceMappings = hostMappings[basePath];

    if (! resourceMappings) {
        return null;
    }

    // Return either a local request target or null.
    return _findLocalTarget(resourceMappings, basePath, destination);
};

const isValidCandidate = async (requestDetails, tabDetails) => {

    let initiatorDomain, isWhitelisted;

    initiatorDomain = Helpers.extractDomainFromUrl(tabDetails.url);

    if (initiatorDomain === null) {
        initiatorDomain = Constants.Address.EXAMPLE;
    }

    isWhitelisted = await Helpers.domainIsWhitelisted(initiatorDomain);

    if (isWhitelisted) {
        return false;
    }

    // Only requests of type GET can be valid candidates.
    return requestDetails.method === Constants.WebRequest.GET;
};

/**
 * Exports
 */

export default {
    determineLocalTarget,
    isValidCandidate
};
