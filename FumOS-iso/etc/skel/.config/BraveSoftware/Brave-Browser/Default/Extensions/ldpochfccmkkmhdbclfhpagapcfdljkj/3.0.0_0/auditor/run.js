/**
 * Resource Auditor
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2014-07-24 (originally "audit")
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import crypto from 'crypto';
import {promises as fileSystem} from 'fs';

/**
 * Constants
 */

const mappingUrlBlockExpression = /\/\*(?:\s*\r?\n(?:\/\/)?)?[#@] sourceMappingURL=([^\s'"]*)\s*\*\/\s*/;
const mappingUrlLineExpression = /\/\/[#@] sourceMappingURL=([^\s'"]*)\s*/;

const localResourceLocation = '../resources';
const localResourceLocationLength = localResourceLocation.length;

const recentlyUpdatedResources = [

    'backbone.js/1.4.0',

    'jquery/3.6.0',
    'jquery/3.6.1',
    'jquery/3.6.4',
    'jquery/3.7.0',
    'jquery/3.7.1',

    'moment.js/2.24.0',
    'moment.js/2.29.1',
    'moment.js/2.29.4',

    'underscore.js/1.13.4'
];

/**
 * Variables
 */

let verifyAllResources = true;

/**
 * Functions
 */

const resourceHasSourceMappingUrl = (resourceContents) => {
    return mappingUrlBlockExpression.test(resourceContents) || mappingUrlLineExpression.test(resourceContents);
};

const removeSourceMappingUrlsFromResource = (resourceContents) => {

    resourceContents = resourceContents.replace(mappingUrlBlockExpression, '');
    resourceContents = resourceContents.replace(mappingUrlLineExpression, '');

    return resourceContents;
};

const filterLocalResourcePaths = (localResourcePaths) => {

    return localResourcePaths.filter((path) => {

        for (const recentlyUpdatedResource of recentlyUpdatedResources) {

            if (path.includes(recentlyUpdatedResource)) {
                return true;
            }
        }

        return false;
    });
};

const determineLocalResourcePaths = async (folderPath) => {

    let resourceNames, localResourcePaths;

    resourceNames = await fileSystem.readdir(folderPath);
    localResourcePaths = [];

    for (const resourceName of resourceNames) {

        let resourcePath, resourceNodeStatus;

        resourcePath = `${folderPath}/${resourceName}`;
        resourceNodeStatus = await fileSystem.stat(resourcePath);

        if (resourceNodeStatus && resourceNodeStatus.isDirectory()) {
            localResourcePaths = [...localResourcePaths, ...(await determineLocalResourcePaths(resourcePath))];
        } else {
            localResourcePaths.push(resourcePath);
        }
    }

    if (verifyAllResources === false) {
        localResourcePaths = filterLocalResourcePaths(localResourcePaths);
    }

    return localResourcePaths;
};

const getLocalResourceContents = async (fileLocation) => {

    try {
        return await fileSystem.readFile(fileLocation, 'utf8');
    } catch {
        return null;
    }
};

const getRemoteResource = async (remoteResourceRoute) => {

    const remoteResourceUrls = [
        `https://ajax.googleapis.com/ajax/libs/${remoteResourceRoute}`,
        `https://cdnjs.cloudflare.com/ajax/libs/${remoteResourceRoute}`
    ];

    for (const remoteResourceUrl of remoteResourceUrls) {

        const response = await fetch(remoteResourceUrl);

        if (response.status === 200) {

            return {
                'contents': await response.text(),
                'url': remoteResourceUrl
            };
        }
    }

    throw new Error(`Resource "${remoteResourceRoute}" could not be fetched.`);
};

const hashFileContents = (fileContents) => {

    const hash = crypto.createHash('sha3-512');
    hash.update(fileContents);

    return hash.digest('hex');
};

const compareResources = (localResourceContents, remoteResourceContents, url) => {

    let hasSourceMappingUrl, sourceMappingNotice, localFileHash, remoteFileHash, fileHashesMatch;

    hasSourceMappingUrl = resourceHasSourceMappingUrl(remoteResourceContents);
    sourceMappingNotice = '[ ] REMOTE RESOURCE HAD SOURCE MAPPING URL';

    if (hasSourceMappingUrl) {

        remoteResourceContents = removeSourceMappingUrlsFromResource(remoteResourceContents);
        sourceMappingNotice = '[X] REMOTE RESOURCE HAD SOURCE MAPPING URL';
    }

    localFileHash = hashFileContents(localResourceContents);
    remoteFileHash = hashFileContents(remoteResourceContents);

    console.log(`RESOURCE HASH (SHA3-512): ${localFileHash}`);
    console.log(`RESOURCE HASH (SHA3-512): ${remoteFileHash}`);

    fileHashesMatch = (localFileHash === remoteFileHash);

    if (! fileHashesMatch) {

        console.log(url);
        console.log(remoteResourceContents);

        throw new Error('Error: Decentraleyes resource hash mismatch.');
    }

    console.log();
    console.log('[X] LOCAL AND REMOTE RESOURCE HASHES MATCH');
    console.log(sourceMappingNotice);
};

const verifyResourceContents = async (resourcePath) => {

    let resourceRoute, localResourceContents, remoteResource;

    resourceRoute = resourcePath.substring(localResourceLocationLength + 1);
    resourceRoute = resourceRoute.substring(0, resourceRoute.length - 1);

    localResourceContents = await getLocalResourceContents(resourcePath);
    remoteResource = await getRemoteResource(resourceRoute);

    console.log(remoteResource.url);

    console.log();
    console.log(resourceRoute.toUpperCase());
    console.log();

    // Compare resource content hashes.
    compareResources(localResourceContents, remoteResource.contents, remoteResource.url);

    console.log();
    console.log('------------------------------------------');
    console.log();
};

/**
 * Initializations
 */

if (process.argv[2] && process.argv[2] === '-r') {
    verifyAllResources = false;
}

/**
 * Main
 */

(async () => {

    let localResourcePaths, amountOfResources, promises;

    localResourcePaths = await determineLocalResourcePaths(localResourceLocation);
    amountOfResources = localResourcePaths.length;

    promises = localResourcePaths.map((localResourcePath) => {

        const randomExecutionDelay = Math.floor(Math.random() * (amountOfResources * 750));

        return new Promise((resolve) => {

            setTimeout(async () => {

                await verifyResourceContents(localResourcePath);
                resolve();

            }, randomExecutionDelay);
        });
    });

    await Promise.all(promises).then(() => {

        console.log('       *** FILE INTEGRITY CHECKS COMPLETED');
        console.log(`       *** ${amountOfResources}/${amountOfResources} RESOURCES WERE ANALYZED`);
        console.log();
    });
})();
