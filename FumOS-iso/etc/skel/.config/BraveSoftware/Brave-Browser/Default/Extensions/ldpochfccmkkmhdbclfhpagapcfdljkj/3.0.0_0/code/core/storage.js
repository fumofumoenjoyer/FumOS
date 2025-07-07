/**
 * Storage Manager
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2024-10-09
 * @license     MPL-2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../data/constants.js';
import SettingDefaults from '../data/setting/defaults.js';
import StatisticDefaults from '../data/statistic/defaults.js';

/**
 * Private Constants
 */

const _items = {
    'tabContexts': null, 'settings': null, 'statistics': null
};

const _promises = {
    'tabContexts': null, 'settings': null, 'statistics': null
};

const _timeouts = {
    'tabContexts': null, 'settings': null, 'statistics': null
};

/**
 * Private Functions
 */

const _getLocalSettings = async () => {

    const localSettings = await chrome.storage.local.get(SettingDefaults);
    return localSettings;
};

const _getManagedSettings = async () => {

    let managedSettingKeys, managedSettings;

    managedSettingKeys = Object.keys(Constants.Setting);

    try {

        managedSettings = await chrome.storage.managed.get(managedSettingKeys);

        if (window.chrome.runtime.lastError) {
            throw new Error(window.chrome.runtime.lastError);
        }

    } catch {
        managedSettings = {};
    }

    return managedSettings;
};

/**
 * Public Functions
 */

const getTabContexts = async () => {

    if (! _items.tabContexts) {

        _promises.tabContexts ??= chrome.storage.session.get(Constants.SessionItem.TAB_CONTEXTS);
        const tabContents = (await _promises.tabContexts)?.[Constants.SessionItem.TAB_CONTEXTS];

        _items.tabContexts = tabContents ?? {};
        _promises.tabContexts = null;
    }

    return _items.tabContexts;
};

const getTabContext = async (key) => {

    const tabContexts = await getTabContexts();
    key = String(key);

    return tabContexts[key] ?? null;
};

const createTabContexts = async (tabs, replaceExisting = false) => {

    const tabContexts = await getTabContexts();

    for (const tab of tabs) {

        const key = String(tab.id);

        if (replaceExisting === true || ! Object.keys(tabContexts).includes(key)) {

            tabContexts[key] = {
                [Constants.TabContext.IDENTIFIER]: Number(key),
                [Constants.TabContext.INJECTIONS]: {},
                [Constants.TabContext.URL]: tab.url ?? null
            };
        }
    }

    await chrome.storage.session.set({tabContexts});
};

const updateTabContext = async (key, value) => {

    const tabContexts = await getTabContexts();
    key = String(key);

    tabContexts[key] = value;

    await chrome.storage.session.set({tabContexts});
};

const clearTabContext = async (key) => {

    const tabContexts = await getTabContexts();
    key = String(key);

    delete tabContexts[key];

    await chrome.storage.session.set({tabContexts});
};

const getSettings = async (concise = true) => {

    if (! _items.settings) {

        let localSettings, managedSettings, settings, environmentName;

        _promises.settings ??= Promise.all([_getLocalSettings(), _getManagedSettings()]);
        [localSettings, managedSettings] = await _promises.settings;

        settings = Object.keys({...localSettings, ...managedSettings}).reduce((accumulator, key) => {

            accumulator[key] = {
                'value': managedSettings[key] || localSettings[key],
                'origin': 'local'
            };

            if (managedSettings[key]) {
                accumulator[key].origin = 'managed';
            }

            return accumulator;

        }, {});

        if (settings.blockMissing.value === true || settings.enforceStaging.value === true) {
            environmentName = Constants.Environment.STAGING;
        } else {
            environmentName = Constants.Environment.STABLE;
        };

        settings[Constants.ComputedSetting.ENVIRONMENT_NAME] = {
            'value': environmentName, 'origin': 'computed'
        };

        _items.settings ??= settings;
        _promises.settings = null;
    }

    if (concise) {

        return {...Object.fromEntries(Object.entries(_items.settings)
            .map(([key, setting]) => [key, setting.value]))};
    }

    return _items.settings;
};

const getSetting = async (key, concise = true) => {

    const settings = await getSettings(false);

    if (! Object.keys(settings).includes(key)) {
        throw new Error(`Setting "${key}" does not exist.`);
    }

    if (concise) {
        return settings[key].value;
    }

    return settings[key];
};

const updateSetting = async (key, value) => {

    const settings = await getSettings(false);

    if (! Object.keys(settings).includes(key)) {
        throw new Error(`Setting "${key}" does not exist.`);
    }

    if (settings[key].origin === 'computed') {
        throw new Error(`Setting "${key}" is read-only.`);
    }

    await chrome.storage.local.set({[key]: value});
};

const clearSetting = async (key) => {

    const settings = await getSettings(false);

    if (! Object.keys(settings).includes(key)) {
        throw new Error(`Setting "${key}" does not exist.`);
    }

    if (settings[key].origin === 'computed') {
        throw new Error(`Setting "${key}" is read-only.`);
    }

    chrome.storage.local.remove(key);
};

const getStatistics = async () => {

    if (! _items.statistics) {

        _promises.statistics ??= chrome.storage.local.get(StatisticDefaults);
        const statistics = await _promises.statistics;

        if (typeof statistics[Constants.Statistic.AMOUNT_INJECTED] === 'number') {

            statistics[Constants.Statistic.AMOUNT_INJECTED] = {
                'value': statistics[Constants.Statistic.AMOUNT_INJECTED],
                'createdAt': null
            };
        }

        _items.statistics ??= statistics;
        _promises.statistics = null;
    }

    return _items.statistics;
};

const getStatistic = async (key) => {

    const statistics = await getStatistics();

    if (! Object.keys(statistics).includes(key)) {
        throw new Error(`Statistic "${key}" does not exist.`);
    }

    return statistics[key];
};

const incrementStatistic = async (key) => {

    const statistics = await getStatistics();
    clearTimeout(_timeouts.statistics);

    if (! Object.keys(statistics).includes(key)) {
        throw new Error(`Setting "${key}" does not exist.`);
    }

    statistics[key].value = ++statistics[key].value;

    _timeouts.statistics = setTimeout(() => {
        chrome.storage.local.set(statistics);
    }, 500);
};

const clearStatistic = async (key) => {

    const statistics = await getStatistics();

    if (! Object.keys(statistics).includes(key)) {
        throw new Error(`Statistic "${key}" does not exist.`);
    }

    clearTimeout(_timeouts.statistics);
    chrome.storage.local.remove(key);
};

/**
 * Event Handlers
 */

chrome.storage.onChanged.addListener((changes) => {

    let updatedKeys, statisticKeys, settingKeys;

    updatedKeys = Object.keys(changes);

    statisticKeys = Object.values(Constants.Statistic);
    settingKeys = Object.values(Constants.Setting);

    if (updatedKeys.some((key) => statisticKeys.includes(key))) {
        _items.statistics = null;
    }

    if (updatedKeys.some((key) => settingKeys.includes(key))) {
        _items.settings = null;
    }

    if (updatedKeys.includes(Constants.SessionItem.TAB_CONTEXTS)) {
        _items.tabContexts = null;
    }
});

/**
 * Exports
 */

export default {
    getTabContexts,
    getTabContext,
    createTabContexts,
    updateTabContext,
    clearTabContext,
    getSettings,
    getSetting,
    updateSetting,
    clearSetting,
    getStatistics,
    getStatistic,
    incrementStatistic,
    clearStatistic
};
