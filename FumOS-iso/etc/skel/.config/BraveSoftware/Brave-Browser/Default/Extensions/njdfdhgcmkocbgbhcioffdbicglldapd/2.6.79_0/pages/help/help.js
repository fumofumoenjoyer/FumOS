/**
 * Help Page
 * Belongs to LocalCDN (since 2020-02-26)
 *
 * @author      nobody
 * @since       2020-05-04
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Help
 */

let help = {};


/**
 * Private Methods
 */

help._onDocumentLoaded = function () {
    let language = navigator.language;

    help._languageSupported = helpers.languageIsFullySupported(language);
    help._scriptDirection = helpers.determineScriptDirection(language);

    if (!helpers.insertI18nContentIntoDocument(document)) {
        document.getElementById('notice-locale').style.display = 'block';
    }
};


/**
 * Initializations
 */

document.addEventListener('DOMContentLoaded', help._onDocumentLoaded);
