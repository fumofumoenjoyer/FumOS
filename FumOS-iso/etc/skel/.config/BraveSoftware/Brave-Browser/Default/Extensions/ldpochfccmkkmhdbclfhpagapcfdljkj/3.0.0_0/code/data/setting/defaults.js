/**
 * Setting Defaults
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
    [Constants.Setting.BLOCK_MISSING]: false,
    [Constants.Setting.DISABLE_PREFETCH]: true,
    [Constants.Setting.ENFORCE_STAGING]: false,
    [Constants.Setting.SHOW_ICON_BADGE]: true,
    [Constants.Setting.SHOW_RELEASE_NOTES]: true,
    [Constants.Setting.STRIP_METADATA]: true,
    [Constants.Setting.WHITELISTED_DOMAINS]: {},
    [Constants.Setting.XHR_TEST_DOMAIN]: Constants.Address.DECENTRALEYES
};

/**
 * Exports
 */

export default defaults;
