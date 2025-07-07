/**
 * Request Sanitizer
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2018-01-10
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import Constants from '../../data/constants.js';
import Helpers from '../../utilities/helpers.js';
import Storage from '../storage.js';

/**
 * Private Functions
 */

const _stripMetadata = async () => {

    const stripMetadata = await Storage.getSetting(Constants.Setting.STRIP_METADATA);

    if (stripMetadata !== false) {
        Storage.incrementStatistic(Constants.Statistic.AMOUNT_SANITIZED);
    }
};

/**
 * Event Handlers
 */

chrome.webRequest.onBeforeSendHeaders.addListener(_stripMetadata, {
    'urls': Helpers.determineValidHosts()
});
