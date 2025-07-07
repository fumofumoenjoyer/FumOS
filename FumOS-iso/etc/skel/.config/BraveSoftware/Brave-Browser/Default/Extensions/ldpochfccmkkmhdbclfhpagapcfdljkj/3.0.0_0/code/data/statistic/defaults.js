/**
 * Statistic Defaults
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

import Constants from '../constants.js';

/**
 * Public Constants
 */

const defaults = {

    [Constants.Statistic.AMOUNT_INJECTED]: {
        'value': 0, 'createdAt': new Date().toISOString()
    },

    [Constants.Statistic.AMOUNT_SANITIZED]: {
        'value': 0, 'createdAt': new Date().toISOString()
    },

    [Constants.Statistic.AMOUNT_BLOCKED]: {
        'value': 0, 'createdAt': new Date().toISOString()
    }
};

/**
 * Exports
 */

export default defaults;
