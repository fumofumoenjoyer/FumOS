/**
 * Internal API Wrapper Module
 * Belongs to LocalCDN.
 *
 * @author      Thomas Rientjes
 * @since       2017-12-03

 * @author      nobody
 * @since       2020-07-09

 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Wrappers
 */

const wrappers = {};


/**
 * Public Methods
 */

wrappers.setBadgeBackgroundColor = function (details) {
    if (chrome.browserAction.setBadgeBackgroundColor === undefined) {
        return;
    }

    if (details.type === BadgeSetting.TYPE) {
        storageManager.type.set({[Setting.BADGE_DEFAULT_BACKGROUND_COLOR]: details.color});
        wrappers.badgeDefaultBackgroundColor = details.color;
    } else if (details.type === BadgeSettingHTMLFilter.TYPE) {
        storageManager.type.set({[Setting.BADGE_HTML_FILTER_BACKGROUND_COLOR]: details.color});
        wrappers.badgeColorHTMLfilter = details.color;
    } else if (details.type === BadgeSettingMissingResource.TYPE) {
        storageManager.type.set({[Setting.BADGE_MISSING_RESOURCE_BACKGROUND_COLOR]: details.color});
        wrappers.badgeMissingResourceBackgroundColor = details.color;
    }
};

wrappers.setBadgeTextColor = function (details) {
    if (chrome.browserAction.setBadgeTextColor === undefined) {
        return;
    }

    if (details.type === BadgeSetting.TYPE) {
        storageManager.type.set({[Setting.BADGE_DEFAULT_TEXT_COLOR]: details.color});
        wrappers.badgeDefaultTextColor = details.color;
    } else if (details.type === BadgeSettingHTMLFilter.TYPE) {
        storageManager.type.set({[Setting.BADGE_HTML_FILTER_TEXT_COLOR]: details.color});
        wrappers.badgeDefaultTextColorHTMLfilter = details.color;
    } else if (details.type === BadgeSettingMissingResource.TYPE) {
        storageManager.type.set({[Setting.BADGE_MISSING_RESOURCE_TEXT_COLOR]: details.color});
        wrappers.badgeMissingResourceTextColor = details.color;
    }
};

wrappers.setBadgeText = function (tabId, text) {
    if (chrome.browserAction.setBadgeText !== undefined) {
        chrome.browserAction.setBadgeText({
            'tabId': tabId,
            'text': `${text}`
        });
    }
};

wrappers.setIcon = function (details, type) {
    if (chrome.browserAction.setIcon) {
        details.path = IconType[details.path][type];
        chrome.browserAction.setIcon(details);
    }
};

wrappers.setBadgeColoring = function (tabId, value) {
    let textColor, backgroundColor;

    if (value === BadgeSettingHTMLFilter.TYPE) {
        textColor = wrappers.badgeHTMLfilterTextColor;
        backgroundColor = wrappers.badgeHTMLFilterBackgroundColor;
    } else if (value === BadgeSetting.TYPE) {
        textColor = wrappers.badgeDefaultTextColor;
        backgroundColor = wrappers.badgeDefaultBackgroundColor;
    } else if (value === BadgeSettingMissingResource.TYPE) {
        textColor = wrappers.badgeMissingResourceTextColor;
        backgroundColor = wrappers.badgeMissingResourceBackgroundColor;
    } else {
        return;
    }

    if (chrome.browserAction.setBadgeTextColor !== undefined) {
        chrome.browserAction.setBadgeTextColor({
            'tabId': tabId,
            'color': textColor
        });
    }

    if (chrome.browserAction.setBadgeBackgroundColor !== undefined) {
        chrome.browserAction.setBadgeBackgroundColor({
            'tabId': tabId,
            'color': backgroundColor
        });
    }
};
