/**
 * Inserts data into the fields of the blocking page
 *
 * @author      nobody
 * @since       2023-01-30
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

window.addEventListener('load', function () {
    let parameters, source, resource;

    parameters = new URLSearchParams(window.location.search);

    source = parameters.get('source');
    resource = parameters.get('resource');

    if (source) {
        document.getElementById("source").textContent = source;
    }

    if (resource) {
        document.getElementById("resource").textContent = resource;
    }

})
