/**
 * Statistic
 * Belongs to LocalCDN (since 2020-02-26)
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
 * Statistic
 */

let statistics = {};


/**
 * Private Methods
 */

statistics._onDocumentLoaded = function () {
    helpers.insertI18nContentIntoDocument(document);
    helpers.insertI18nTitlesIntoDocument(document);

    chrome.storage.local.get([Setting.DEFAULT_RANGE_STATISTIC], function (items) {
        statistics._dateUnit = items.defaultRangeStatistic || 'week';
        document.getElementById('date-range').value = statistics._dateUnit;

        statistics._setDateRange();
        statistics._registerListener();
        statistics._getStatistics().then(statistics._renderContents);
    });
};

statistics._renderContents = function () {
    statistics._filterAndSortData();
    statistics._determineInjections();

    statistics._clearTables();
    statistics._determineInjections();
    statistics._generateTable(statistics._dataSortedCDNs, 'cdns');
    statistics._generateTable(statistics._dataSortedFrameworks, 'frameworks');
};

statistics._generateTable = function (data, type) {
    let arr = Object.values(data);
    if (arr.length === 0) {
        arr = [['no data', '-']];
    }

    for (const value of arr) {
        let row, keyColumn, valueColumn;

        row = document.createElement('tr');

        keyColumn = document.createElement('td');
        keyColumn.appendChild(statistics._displayNameOfFramework(value[0], type));
        row.appendChild(keyColumn);

        valueColumn = document.createElement('td');
        valueColumn.appendChild(document.createTextNode(value[1]));
        row.appendChild(valueColumn);

        document.getElementById(`tbody-${type}`).appendChild(row);
    }
};

statistics._filterAndSortData = function () {
    let tmpCDNs, tmpFrameworks;

    tmpCDNs = {};
    tmpFrameworks = {};

    // Purge
    statistics._dataSortedCDNs = {};
    statistics._dataSortedFrameworks = {};

    statistics._dateRange.forEach(function (entry) {
        if (entry in statistics._data) {
            statistics._mergeObjects(statistics._data[entry]['cdns'], tmpCDNs);
            statistics._mergeObjects(statistics._data[entry]['frameworks'], tmpFrameworks);
        }
    });
    statistics._dataSortedCDNs = Object.entries(tmpCDNs).sort((a, b) => b[1] - a[1]);
    statistics._dataSortedFrameworks = Object.entries(tmpFrameworks).sort((a, b) => b[1] - a[1]);
};

statistics._mergeObjects = function (obj, arr) {
    for (let [key, value] of Object.entries(obj)) {
        let domain, bundle;
        domain = key;
        bundle = targets.determineBundle(domain);
        if (bundle !== '') {
            bundle = domain.split('/');
            domain = `${bundle[0]}/${bundle[1]}/${bundle[2]}/`;
        }
        // If CDN/Framework exists, add it, otherwise create new one
        if (arr[domain]) {
            arr[domain] += value;
        } else {
            arr[domain] = value;
        }
    }
};

statistics._setDateRange = function () {
    let today, from, days, type;

    today = new Date();
    from = new Date();
    type = statistics._dateUnit;

    // Purge
    statistics._dateRange = [];

    if (type === 'week') {
        days = 7;
    } else if (type === 'month') {
        days = 30;
    } else if (type === 'year') {
        days = 365;
    } else if (type === 'all') {
        days = statistics._daysSinceYearOfRelease();
    } else {
        statistics._dateRange = [new Date().toISOString().slice(0, 10)];
    }

    if (days > 1) {
        for (let i = 0; i < days; i++) {
            let diff, day;

            // NOTE: setDate/getDate is buggy over day/month/year boundaries
            diff = 24 * 3600000 * i;
            day = from.setTime(today.getTime() - diff);
            statistics._dateRange.push(new Date(day).toISOString().slice(0, 10));
        }
    }
    statistics._renderContents();
};

statistics._determineInjections = function () {
    // NOTE: Differences between CDNs and frameworks possible.
    //       CDN can be contacted without loading a framework.
    let sum, days, avg;

    sum = 0;
    days = 0;

    statistics._dataOverview = [];

    statistics._dateRange.forEach(function (entry) {
        if (entry in statistics._data) {
            for (const value of Object.values(statistics._data[entry]['frameworks'])) {
                sum += parseFloat(value);
            }
            days++;
        }
    });
    avg = sum / days > 0 ? sum / days : 0;
    avg = Math.round((avg + Number.EPSILON) * 100) / 100;

    document.getElementById('avg-quantity').textContent = isNaN(avg) ? '-' : helpers.formatNumber(avg);
    document.getElementById('quantity-injected-frameworks').textContent = isNaN(sum) ? '-' : sum;
};

statistics._getStatistics = function () {
    return new Promise((resolve) => {
        chrome.storage.local.get([Setting.INTERNAL_STATISTICS_DATA], function (items) {
            statistics._data = items.internalStatisticsData;
            resolve();
        });
    });
};

statistics._clearTables = function () {
    const tbody = document.querySelectorAll('tbody');

    tbody.forEach((table) => {
        while (table.hasChildNodes()) {
            table.removeChild(table.firstChild);
        }
    });
};

statistics._displayNameOfFramework = function (str, type) {
    // Is used in generateTable(), but should only be used for frameworks
    if (type === 'frameworks' && str !== 'no data') {
        let filename, line, lbName, lbVersion, version;

        // Create elements
        line = document.createElement('p');
        lbName = document.createElement('span');
        lbVersion = document.createElement('span');

        filename = helpers.extractFilenameFromPath(str);
        filename = targets.determineResourceName(filename);

        if (filename === 'Unknown') {
            filename = targets.determineBundle(str);
            if (filename === '' && str.startsWith('resources/font-awesome/')) {
                filename = 'Font Awesome (Fonts)';
            } else if (str === 'resources/google-charts/loader.jsm') {
                filename = 'Google Charts';
            } else if (str === 'resources/fontawesome/5.15.1/css/v4-shims.css') {
                filename = 'Font Awesome (Shim)';
            } else if (str === 'resources/twitter-bootstrap/fonts/') {
                filename = 'Bootstrap (Fonts)';
            } else if (str.length === 0) {
                console.warn(`[LocalCDN] Missing path: ${str}`);
            }
        }

        version = str.match(Resource.VERSION_EXPRESSION);
        if (version !== null && version.length > 0) {
            version = version[0] === 'latest' ? version[0] : `v${version[0]}`;
        } else {
            version = '';
            console.log(`[LocalCDN] Missing version: ${str}`);
        }

        lbName.appendChild(document.createTextNode(filename));
        lbVersion.appendChild(document.createTextNode(version));
        lbVersion.classList.add('version');
        line.appendChild(lbName);
        line.appendChild(lbVersion);

        return line;
    }
    // If type is CDN
    return document.createTextNode(str);
};

statistics._handlerDateRange = function ({target}) {
    let type = target.value;
    if (type === 'day' || type === 'week' || type === 'month' || type === 'year' || type === 'all') {
        statistics._dateUnit = type;
        statistics._saveDefaultRange(type);
    } else if (type === 'delete') {
        statistics._deleteStatistic();
    }
    statistics._getStatistics().then(statistics._setDateRange);
};

statistics._deleteStatistic = function () {
    let text = chrome.i18n.getMessage('dialogConfirmDeleteStatistics');
    if (confirm(text)) {
        chrome.storage.local.set({
            [Setting.INTERNAL_STATISTICS_DATA]: {}
        });
        chrome.runtime.sendMessage({'topic': 'statistic:delete'});
    }
};

statistics._saveDefaultRange = function (value) {
    chrome.storage.local.set({
        [Setting.DEFAULT_RANGE_STATISTIC]: value
    });
};

statistics._registerListener = function () {
    document.getElementById('date-range').addEventListener('change', statistics._handlerDateRange);
    document.getElementById('btn-delete').addEventListener('click', function () {
        statistics._handlerDateRange({'target': {'value': 'delete'}});
    });
};

statistics._daysSinceYearOfRelease = function () {
    let timeDifference, millisecondsPerDay;

    timeDifference = new Date() - new Date('2020-01-01');
    millisecondsPerDay = 24 * 60 * 60 * 1000;
    return Math.floor(timeDifference / millisecondsPerDay);
};


/**
 * Initializations
 */

statistics._data = {};
statistics._dataSortedCDNs = {};
statistics._dataSortedFrameworks = {};
statistics._dataOverview = [];
statistics._dateRange = [];
statistics._dateUnit = 'week';

document.addEventListener('DOMContentLoaded', statistics._onDocumentLoaded);
