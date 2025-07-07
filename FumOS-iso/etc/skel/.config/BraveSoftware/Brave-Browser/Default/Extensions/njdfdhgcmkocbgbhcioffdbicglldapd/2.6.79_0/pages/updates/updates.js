/**
 * Main Updates Page
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
 *
 * @author      nobody
 * @since       2020-03-08
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Updates
 */

let updates = {};


/**
 * Private Methods
 */

updates._openHistoryReleaseNotes = function () {
    let container, toggle;

    container = document.getElementById('history-release-notes');
    toggle = document.getElementById('history-indicator');

    if (container.style.display === 'none') {
        container.style.display = 'block';
        toggle.textContent = '–';
    } else {
        container.style.display = 'none';
        toggle.textContent = '+';
    }
};

updates._onDocumentLoaded = function () {
    let updateElements, urlParams;

    document.getElementById('generate-ublock-rules').checked = false;
    document.getElementById('generate-umatrix-rules').checked = false;
    document.getElementById('generate-adguard-rules').checked = false;

    updates._openHistoryReleaseNotes();

    updateElements = {
        ['ruleSets']: document.getElementsByName('rule-sets'),
        ['copyRuleSet']: document.getElementById('button-copy-rule-set'),
    };

    for (let ruleSets of updateElements.ruleSets) {
        ruleSets.addEventListener('change', ruleGenerator.openRuleSet);
    }

    updateElements.copyRuleSet.addEventListener('click', ruleGenerator.copyRuleSet);

    document.getElementById('history').addEventListener('click', updates._openHistoryReleaseNotes);

    // GET parameter to display the rule set generator
    urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mappingupdate') === 'true') {
        document.getElementById('generator-section').style.display = 'block';
    }
};

document.addEventListener('DOMContentLoaded', updates._onDocumentLoaded);
