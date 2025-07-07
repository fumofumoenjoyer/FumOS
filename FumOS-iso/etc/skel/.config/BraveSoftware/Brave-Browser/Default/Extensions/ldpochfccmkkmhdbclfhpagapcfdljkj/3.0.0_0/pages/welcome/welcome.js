/**
 * Welcome Page
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2024-11-11
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Private Functions
 */

const _animateHeaderElements = () => {

    document.querySelector('#icon').classList.add('animated');
    document.querySelector('#icon-accent').classList.add('animated');
    document.querySelector('#logotype').classList.add('animated');
    document.querySelector('#version-label').classList.add('animated');
};

const _animateContentElements = () => {

    document.querySelector('#first-item').classList.add('animated');
    document.querySelector('#second-item').classList.add('animated');
};

const _animateFooterElement = () => {
    document.querySelector('#footer').classList.add('animated');
};

/**
 * Event Handlers
 */

const _onDocumentVisible = () => {

    window.scrollTo(0, 0);

    _animateHeaderElements();
    _animateContentElements();
    _animateFooterElement();
};

/**
 * Initializations
 */

document.addEventListener('DOMContentLoaded', () => {

    if (document.visibilityState === 'visible') {
        _onDocumentVisible();
    } else {

        document.addEventListener('visibilitychange', () => {

            if (document.visibilityState === 'visible') {
                _onDocumentVisible();
            }
        });
    }
});
