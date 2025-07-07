/**
 * Shorthands
 * Belongs to LocalCDN (since 2020-02-26)
 * (Origin: Decentraleyes)
 *
 * @author      Thomas Rientjes
 * @since       2018-02-24
 *
 * @author      nobody
 * @since       2020-02-26
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Shorthands
 */

const shorthands = {};

shorthands.specialFiles = function (channelHost, channelPath, searchString) {

    let lastVersion;
    const CompleteURL = channelHost + channelPath + searchString;

    /**
     * NOTE:
     * jsDelivr allows to load several files in one request
     * This is just a workaround. If there are more websites which use this,
     * we will have to do crazy things here to find and redirect these files.
     *
     * It's not possible to respond to a request with multiple redirections
     * https://gitlab.com/nobody42/localcdn/-/issues/45
     */

    if (Regex.JSDELIVR_COMBINE.test(channelHost + channelPath)) {
        return {
            'source': channelHost,
            'versionDelivered': 'beta',
            'path': 'resources/jsdelivr-combine-jquery-hogan-algoliasearch-autocomplete.jsm',
            'bundle': ''
        };
    } else if ((channelHost + channelPath) === 'cdn.jsdelivr.net/g/algoliasearch@3(algoliasearchLite.min.js),algoliasearch.helper@2') {
        // https://gitlab.com/nobody42/localcdn/-/issues/55
        return {
            'source': channelHost,
            'versionDelivered': 'beta',
            'path': 'resources/algoliasearch3.33.0_algoliasearchLite_algoliasearchHelper.jsm',
            'bundle': ''
        };
    } else if (Regex.GOOGLE_MATERIAL_ICONS.test(CompleteURL)) {
        lastVersion = targets.setLastVersion('/google-material-design-icons/');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'path': 'resources/google-material-design-icons/google-material-design-icons.css',
            'bundle': ''
        };
    } else if (channelPath.endsWith(MaterialIcons.DEFAULT)) {
        lastVersion = targets.setLastVersion('/materialicons/');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'path': `resources/google-material-design-icons/materialicons/${lastVersion}/MaterialIcons.woff2`,
            'bundle': ''
        };
    } else if (Regex.BOOTSTRAP_DATEPICKER_3.test(channelPath)) {
        lastVersion = targets.setLastVersion('/bootstrap-datepicker/1.');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'path': `resources/bootstrap-datepicker/${lastVersion}/bootstrap-datepicker3.standalone.min.css`,
            'bundle': ''
        };
    } else if (Regex.BOOTSTRAP_DATEPICKER.test(channelPath)) {
        lastVersion = targets.setLastVersion('/bootstrap-datepicker/1.');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'path': `resources/bootstrap-datepicker/${lastVersion}/bootstrap-datepicker.standalone.min.css`,
            'bundle': ''
        };
    } else if (Regex.FONT_AWESOME.test(channelHost + channelPath)) {
        lastVersion = targets.setLastVersion('/font-awesome/4.');
        return {
            'source': channelHost,
            'versionRequested': '4.6.3',
            'versionDelivered': lastVersion,
            'path': 'resources/webfont/fa-loader.css',
            'bundle': ''
        };
    } else if (Regex.FONT_AWESOME_WITH_CODE.test(channelHost + channelPath)) {
        let fileExtension = channelPath.endsWith('css') ? 'css' : 'jsm';
        lastVersion = targets.setLastVersion('/font-awesome/4.');
        return {
            'source': channelHost,
            'versionRequested': '4.6.3',
            'versionDelivered': lastVersion,
            'path': `resources/webfont/fa-loader.${fileExtension}`,
            'bundle': ''
        };
    } else if ((channelHost + channelPath) === 'cdn.jsdelivr.net/npm/vue') {
        lastVersion = targets.setLastVersion('/vue/2.');
        return {
            'source': channelHost,
            'versionRequested': 'latest',
            'versionDelivered': lastVersion,
            'path': `resources/vue/${lastVersion}/vue.min.jsm`,
            'bundle': ''
        };
    } else if (Regex.ROCKET_LOADER.test(CompleteURL)) {
        return {
            'source': channelHost,
            'versionRequested': 'latest',
            'path': 'resources/rocket-loader/latest/rocket-loader.min.jsm',
            'bundle': ''
        };
    } else if ((channelHost + channelPath) === 'unpkg.com/@umds/object-assign@4.1.1-beta.24/object-assign.min.js') {
        lastVersion = targets.setLastVersion('/object-assign@4.');
        return {
            'source': channelHost,
            'versionRequested': '4.1.1',
            'versionDelivered': lastVersion,
            'path': `resources/object-assign/${lastVersion}/object-assign.min.jsm`,
            'bundle': ''
        };
    } else if ((channelHost + channelPath) === 'netdna.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css') {
        // This CDN delivers 'Font Awesome v4.7.0' as latest version
        lastVersion = targets.setLastVersion('/font-awesome/4.');
        return {
            'source': channelHost,
            'versionRequested': lastVersion,
            'path': `resources/font-awesome/${lastVersion}/css/font-awesome.min.css`,
            'bundle': ''
        };
    } else if ((channelHost + channelPath).startsWith('cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/')) {
        if (channelPath.endsWith('js')) {
            channelPath += 'm';
        }
        lastVersion = targets.setLastVersion('/select2/4.');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': '4.1.0-beta.1',
            'path': `resources/select2/${lastVersion}/${helpers.extractFilenameFromPath(channelPath)}`,
            'bundle': 'Select2'
        };
    } else if (channelHost + channelPath === 'cdn.jsdelivr.net/npm/anchor-js/anchor.min.js') {
        // This CDN always delivers the latest version of 'AnchorJS'
        lastVersion = targets.setLastVersion('/anchor-js/4.');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': lastVersion,
            'path': `resources/anchor-js/${lastVersion}/anchor.min.jsm`,
            'bundle': ''
        };
    } else if (Regex.BOOTSTRAP_FONTS_ONLY.test(channelPath)) {
        return {
            'source': channelHost,
            'path': `resources/twitter-bootstrap/fonts/${helpers.extractFilenameFromPath(channelPath)}`,
            'bundle': 'Bootstrap (Fonts)'
        };
    } else if (CompleteURL === 'cdn.jsdelivr.net/npm/videojs-seek-buttons/dist/videojs-seek-buttons.min.js') {
        lastVersion = targets.setLastVersion('/videojs-seek-buttons/');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': lastVersion,
            'path': `resources/videojs-seek-buttons/${lastVersion}/videojs-seek-buttons.min.jsm`,
            'bundle': 'videojs-seek-buttons'
        };
    } else if ((channelHost + channelPath).startsWith('cdn.jsdelivr.net/gh/johnroy-ui/up@master/materialize.')) {
        if (channelPath.endsWith('js')) {
            channelPath = 'js/materialize.min.js';
        } else {
            channelPath = 'css/materialize.min.css';
        }
        return {
            'source': channelHost,
            'versionDelivered': '1.0.0',
            'versionRequested': '1.0.0',
            'path': `resources/materialize/1.0.0/${channelPath}`,
            'bundle': 'Materialize'
        };
    } else if (CompleteURL === 'cdn.jsdelivr.net/npm/vue@2') {
        lastVersion = targets.setLastVersion('/vue/2.');
        if (lastVersion === '') {
            return {
                'result': false,
            };
        }
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': lastVersion,
            'path': `resources/vue/${lastVersion}/vue.min.jsm`,
            'bundle': ''
        };
    } else if (CompleteURL === 'cdn.jsdelivr.net/npm/vue@3') {
        lastVersion = targets.setLastVersion('/vue/3.');
        if (lastVersion === '') {
            return {
                'result': false,
            };
        }
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': lastVersion,
            'path': `resources/vue/${lastVersion}/vue.min.jsm`,
            'bundle': ''
        };
    } else if (CompleteURL.startsWith('cdn.jsdelivr.net/npm/exif-js')) {
        lastVersion = targets.setLastVersion('/exif-js/2.');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': lastVersion,
            'path': `resources/exif-js/${lastVersion}/exif.min.jsm`,
            'bundle': ''
        };
    } else if (CompleteURL.startsWith('ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js') ||
               CompleteURL.startsWith('code.jquery.com/jquery-latest.')) {
        return {
            'source': channelHost,
            'versionDelivered': '1.11.2',
            'versionRequested': '1.11.1',
            'path': 'resources/jquery/1.11.2/jquery.min.jsm',
            'bundle': ''
        };
    } else if (CompleteURL.startsWith('code.createjs.com/createjs-')) {
        lastVersion = targets.setLastVersion('/createjs/');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': lastVersion,
            'path': `resources/createjs/${lastVersion}/createjs.min.jsm`,
            'bundle': ''
        };
    } else if (CompleteURL.startsWith('cdnjs.cloudflare.com/ajax/libs/gsap/latest/')) {
        if (channelPath.endsWith('js')) {
            channelPath += 'm';
        }
        lastVersion = '1.20.5';
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'path': `resources/gsap/${lastVersion}/${helpers.extractFilenameFromPath(channelPath)}`,
            'bundle': 'GSAP'
        };
    } else if (CompleteURL.startsWith('cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.')) {
        return {
            'source': channelHost,
            'versionDelivered': 'latest',
            'versionRequested': 'latest',
            'path': 'resources/google-material-design-icons/google-material-design-icons.css',
            'bundle': ''
        };
    } else if (CompleteURL.startsWith('cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.')) {
        lastVersion = targets.setLastVersion('/webcomponentsjs/');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': 'latest',
            'path': `resources/webcomponentsjs/${lastVersion}/webcomponents-loader.min.jsm`,
            'bundle': ''
        };
    } else if (CompleteURL.startsWith('unpkg.com/aos@next/dist/aos.')) {
        let file;
        lastVersion = targets.setLastVersion('/aos/latest');
        if (channelPath.endsWith('js')) {
            file = 'aos.jsm';
        } else {
            file = 'aos.css';
        }
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': 'next',
            'path': `resources/aos/${lastVersion}/${file}`,
            'bundle': ''
        };
    } else if (Regex.DOCSIFY.test(channelPath)) {
        lastVersion = targets.setLastVersion('/docsify/');
        return {
            'source': channelHost,
            'versionDelivered': lastVersion,
            'versionRequested': channelPath.split('@')[1],
            'path': `resources/docsify/${lastVersion}/docsify.min.jsm`,
            'bundle': ''
        };
    }
    return {
        'result': false,
    };
};
