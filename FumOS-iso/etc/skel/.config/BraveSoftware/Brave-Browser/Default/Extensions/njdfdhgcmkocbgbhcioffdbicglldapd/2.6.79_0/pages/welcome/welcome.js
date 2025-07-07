/**
 * Welcome Page
 * Belongs to LocalCDN (since 2020-02-26)
 *
 * @author      nobody
 * @since       2020-03-29
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Welcome
 */

let welcome = {};


/**
 * Private Methods
 */

welcome._onDocumentLoaded = function () {
    if (!window.location.href.startsWith('moz-extension')) {
        document.getElementById('chromium-banner').style.display = 'block';
    }
    document.getElementById('open-settings').addEventListener('mouseup', function () { chrome.runtime.openOptionsPage(); });
};

document.addEventListener('DOMContentLoaded', welcome._onDocumentLoaded);
