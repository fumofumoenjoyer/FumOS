/**
 * Stats
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
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
 * Stats
 */

const stats = {};


/**
 * Public Methods
 */

stats.setStats = function (injection) {
    const data = storageManager.statistics;
    const today = new Date().toISOString().slice(0, 10);
    const cdn = injection.source;
    let framework, pathSegments, newEntry;
    
    if (injection.bundle !== '') {
        pathSegments = injection.path.split('/');
        framework = `${pathSegments[0]}/${pathSegments[1]}/${pathSegments[2]}/`;
    } else {
        framework = injection.path;
    }

    if (today in data) {
        if (cdn in data[today]['cdns']) {
            data[today]['cdns'][cdn] = ++data[today]['cdns'][cdn];
        } else {
            Object.assign(data[today]['cdns'], {[cdn]: 1});
        }
        if (framework in data[today]['frameworks']) {
            data[today]['frameworks'][framework] = ++data[today]['frameworks'][framework];
        } else {
            Object.assign(data[today]['frameworks'], {[framework]: 1});
        }
    } else {
        newEntry = {'frameworks': {[framework]: 1}, 'cdns': {[cdn]: 1}};
        data[today] = newEntry;
    }

    chrome.storage.local.set({
        [Setting.INTERNAL_STATISTICS_DATA]: data,
    });
};

stats.getStats = function () {
    chrome.storage.local.get([Setting.INTERNAL_STATISTICS_DATA], function (items) {
        storageManager.statistics = items.internalStatisticsData || {};
    });
};

stats.getStats();
