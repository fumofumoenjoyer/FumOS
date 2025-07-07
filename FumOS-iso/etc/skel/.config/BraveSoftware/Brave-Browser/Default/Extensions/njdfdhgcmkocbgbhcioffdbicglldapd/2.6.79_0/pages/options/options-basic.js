/**
 * Options Page (Basic)
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
 * Options (Basic)
 */

let optionsBasic = {};


/**
 * Private Methods
 */

optionsBasic.init = function (opt) {
    let showIconBadge, updateNotification, disablePrefetch, stripMetadata, internalStatistics,
        hideDonationButton, allowlistedDomains;

    showIconBadge = options.getOptionElement(Setting.SHOW_ICON_BADGE);
    showIconBadge.addEventListener('change', options.onOptionChanged);
    showIconBadge.checked = opt[Setting.SHOW_ICON_BADGE];

    updateNotification = options.getOptionElement(Setting.UPDATE_NOTIFICATION);
    updateNotification.addEventListener('change', options.onOptionChanged);
    updateNotification.value = opt[Setting.UPDATE_NOTIFICATION];

    disablePrefetch = options.getOptionElement(Setting.DISABLE_PREFETCH);
    disablePrefetch.addEventListener('change', options.onOptionChanged);
    disablePrefetch.checked = opt[Setting.DISABLE_PREFETCH];

    stripMetadata = options.getOptionElement(Setting.STRIP_METADATA);
    stripMetadata.addEventListener('change', options.onOptionChanged);
    stripMetadata.checked = opt[Setting.STRIP_METADATA];

    internalStatistics = options.getOptionElement(Setting.INTERNAL_STATISTICS);
    internalStatistics.addEventListener('change', options.onOptionChanged);
    internalStatistics.checked = opt[Setting.INTERNAL_STATISTICS];

    hideDonationButton = options.getOptionElement(Setting.HIDE_DONATION_BUTTON);
    hideDonationButton.addEventListener('change', options.onOptionChanged);
    hideDonationButton.checked = opt[Setting.HIDE_DONATION_BUTTON];

    allowlistedDomains = options.getOptionElement(Setting.ALLOWLISTED_DOMAINS);
    allowlistedDomains.addEventListener('keyup', options.onOptionChanged);
    allowlistedDomains.value = opt[Setting.ALLOWLISTED_DOMAINS];
};
