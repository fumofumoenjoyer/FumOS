/**
 * Log
 * Belongs to LocalCDN
 *
 * @author      nobody
 * @since       2021-02-19
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Log
 */

const log = {};

log.append = function (initiator, resource, target, highlight, iframe = '') {
    storageManager.type.get(Setting.LOGGING, function (items) {
        if (items.enableLogging) {
            log.data.push({initiator, resource, target, highlight, iframe});
        }
    });
};

log.data = [];
