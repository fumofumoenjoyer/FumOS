/**
 * Internal Target Module
 * Belongs to LocalCDN (since 2020-02-26)
 *
 * @author      nobody
 * @since       2020-11-04
 *
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

'use strict';


/**
 * Targets
 */

const targets = {};


/**
 * Public Methods
 */

targets.determineBundle = function (path) {
    path = path.replace('resources', '');
    let val = '';
    if (path.startsWith('/bootstrap-datepicker')) {
        val = 'Bootstrap Datepicker';
    } else if (path.startsWith('/jquery.lazy/')) {
        val = 'jQuery Lazy';
    } else if (path.startsWith('/waypoints/')) {
        val = 'Waypoints';
    } else if (path.startsWith('/highlight.js/')) {
        val = 'highlight.js';
    } else if (path.startsWith('/element-ui/')) {
        val = 'ElementUI';
    } else if (path.startsWith('/select2/')) {
        val = 'Select2';
    } else if (path.startsWith('/gsap/')) {
        val = 'GSAP';
    } else if (path.startsWith('/angular-translate/')) {
        val = 'angular-translate';
    } else if (path.startsWith('/OwlCarousel2/')) {
        val = 'Owl Carousel 2';
    } else if (Regex.FONT_AWESOME_FONTS_ONLY.test(path)) {
        val = 'Font Awesome (Fonts)';
    } else if (Regex.BOOTSTRAP_FONTS_ONLY.test(path)) {
        val = 'Bootstrap (Fonts)';
    } else if (path.startsWith('/jquery.cycle2/')) {
        val = 'Cycle2';
    } else if (path.startsWith('/semantic-ui/')) {
        val = 'Semantic UI';
    } else if (path.startsWith('/datatables/')) {
        val = 'DataTables';
    } else if (path.startsWith('/mathjax/')) {
        val = 'MathJax';
    } else if (path.startsWith('/pure/')) {
        val = 'Pure CSS';
    } else if (path.startsWith('/vex-js/')) {
        val = 'vex';
    } else if (path.startsWith('/tinymce/')) {
        val = 'TinyMCE';
    } else if (path.startsWith('/ScrollMagic/')) {
        val = 'ScrollMagic';
    }

    return val === '' ? val : `${val} (Bundle)`;
};

targets.setLastVersion = function (type, version) {
    type = type.replace('resources', '');
    if (version !== null && version !== undefined) {
        version = version.toString();
    }
    if (type.startsWith('/1000hz-bootstrap-validator/0.')) return '0.11.9';
    if (type.startsWith('/ajax-bootstrap-select/1.')) return '1.4.5';
    if (type.startsWith('/algoliasearch/3.')) return '3.35.1';
    if (type.startsWith('/algoliasearch/4.')) return '4.24.0';
    if (type.startsWith('/algoliasearch/5.')) return '5.20.2';
    if (type.startsWith('/alpinejs/2.')) return '2.8.2';
    if (type.startsWith('/alpinejs/3.')) return '3.14.9';
    if (type.startsWith('/anchor-js/3.')) return '3.2.2';
    if (type.startsWith('/anchor-js/4.')) return '4.3.1';
    if (type.startsWith('/anchor-js/5.')) return '5.0.0';
    if (type.startsWith('/angular.js/1.')) {
        if (helpers.compareVersion('1.0.8', version)) return '1.0.8'; // <= v1.0.8
        if (helpers.compareVersion('1.2.19', version)) return '1.2.19'; // > v1.0.8 to <= v1.2.19
        if (helpers.compareVersion('1.2.32', version)) return '1.2.32'; // > 1.2.19 to <= v1.2.32
        if (helpers.compareVersion('1.3.0', version)) return '1.3.0'; // > 1.2.32 to <= 1.3.0
        if (helpers.compareVersion('1.3.20', version)) return '1.3.20'; // > 1.3.0 to <= 1.3.20
        if (helpers.compareVersion('1.4.14', version)) return '1.4.14'; // > 1.3.20 to <= 1.4.14
        if (helpers.compareVersion('1.5.11', version)) return '1.5.11'; // > 1.4.14 to <= 1.5.11
        if (helpers.compareVersion('1.6.10', version)) return '1.6.10'; // > 1.5.11 to <= 1.6.10
        return '1.8.2'; // >= 1.6.11
    }
    if (type.startsWith('/angular-i18n/1.')) return '1.8.3';
    if (type.startsWith('/angularjs-slider/2.')) return '6.7.0';
    if (type.startsWith('/angularjs-slider/3.')) return '6.7.0';
    if (type.startsWith('/angularjs-slider/4.')) return '6.7.0';
    if (type.startsWith('/angularjs-slider/5.')) return '6.7.0';
    if (type.startsWith('/angularjs-slider/6.')) return '6.7.0';
    if (type.startsWith('/angularjs-slider/7.')) return '7.1.0';
    if (type.startsWith('/angularjs-toaster/0.')) return '0.4.18';
    if (type.startsWith('/angularjs-toaster/1.')) return '1.2.0';
    if (type.startsWith('/angularjs-toaster/2.')) return '2.2.0';
    if (type.startsWith('/angularjs-toaster/3.')) return '3.0.0';
    if (type.startsWith('/angular-bootstrap-colorpicker/3.')) return '3.0.32';
    if (type.startsWith('/zumper-angular-payments/1.')) return '1.0.7';
    if (type.startsWith('/angular-translate-loader-partial/2.')) return '2.19.1';
    if (type.startsWith('/angular-ui-bootstrap/')) {
        if (helpers.compareVersion('0.10.0', version)) return '0.10.0'; // <= v0.10.0
        if (helpers.compareVersion('0.14.3', version)) return '0.14.3'; // > 0.10.0 <= v0.14.3
        if (helpers.compareVersion('0.14.4', version)) return '1.3.3'; // > 0.14.3 <= v1.3.3
        return '2.5.6';
    }
    if (type.startsWith('/angular-ui-router/')) {
        if (helpers.compareVersion('0.4.3', version)) return '0.4.3'; // <= 0.4.3
        return '1.1.1'; // > 0.4.3
    }
    if (type.startsWith('/angucomplete-alt/3.')) return '3.0.0';
    if (type.startsWith('/animate.css/3.')) return '3.7.2';
    if (type.startsWith('/animate.css/4.')) return '4.1.1';
    if (type.startsWith('/animejs/3.')) return '3.2.2';
    if (type.startsWith('/autocomplete.js/0.')) return '0.38.1';
    if (type.startsWith('/autocomplete.js/1.')) return '1.5.4';
    if (type.startsWith('/angular-material/1.') || type.startsWith('/angular-material/0.')) return '1.2.5';
    if (type.startsWith('/angular-translate/2.')) return '2.19.1';
    if (type.startsWith('/aos/2.') || type.startsWith('/aos/latest')) return '2.3.4';
    if (type.startsWith('/appboy-web-sdk/3.')) return '3.5.1';
    if (type.startsWith('/asciinema-player/2.')) return '2.6.1';
    if (type.startsWith('/axios/0.')) return '0.27.2';
    if (type.startsWith('/axios/1.')) return '1.8.4';
    if (type.startsWith('/backbone.js/0.')) return '0.9.10';
    if (type.startsWith('/backbone.js/1.')) return '1.6.0';
    if (type.startsWith('/baguettebox.js/1.')) return '1.12.0';
    if (type.startsWith('/blazy/1.')) return '1.8.2';
    if (type.startsWith('/bluebird/3.')) return '3.7.2';
    if (type.startsWith('/bodymovin/4.')) return '4.13.0';
    if (type.startsWith('/bodymovin/5.')) return '5.12.2';
    if (type.startsWith('/bootbox.js/4.')) return '4.4.0';
    if (type.startsWith('/bootbox.js/5.')) return '5.5.3';
    if (type.startsWith('/bootbox.js/6.')) return '6.0.2';
    if (type.startsWith('/bootstrap-daterangepicker/2.')) return '2.1.27';
    if (type.startsWith('/bootstrap-daterangepicker/3.')) return '3.1';
    if (type.startsWith('/bootstrap-datepicker/1.')) return '1.10.0';
    if (type.startsWith('/bootstrap-icons/1.')) return '1.11.3';
    if (type.startsWith('/bootstrap-multiselect/0.')) return '0.9.16';
    if (type.startsWith('/bootstrap-multiselect/1.')) return '1.1.2';
    if (type.startsWith('/bootstrap-slider/10.')) return '10.6.2';
    if (type.startsWith('/bootstrap-slider/11.')) return '11.0.2';
    if (type.startsWith('/bootstrap-select/1.')) return '1.13.18';
    if (type.startsWith('/bootstrap-table/1.')) return '1.24.1';
    if (type.startsWith('/bootstrap-toggle/2.')) return '2.2.2';
    if (type.startsWith('/bootstrap-vue/2.')) return '2.23.1';
    if (type.startsWith('/bootstrap-3-typeahead/4.')) return '4.0.2';
    if (type.startsWith('/bootswatch/3.')) return '3.4.0';
    if (type.startsWith('/bootswatch/4.')) return '4.6.1';
    if (type.startsWith('/bootswatch/5.')) return '5.3.3';
    if (type.startsWith('/bowser/')) {
        if (version !== 'latest' && helpers.compareVersion('1.9.4', version)) return '1.9.4';
        return '2.11.0';
    }
    if (type.startsWith('/bulma/0.') || type.startsWith('/bulma/1.')) return '1.0.3';
    if (type.startsWith('/bxslider/4.')) return '4.2.17';
    if (type.startsWith('/Chart.js/2.')) return '2.9.4';
    if (type.startsWith('/Chart.js/3.')) return '3.9.1';
    if (type.startsWith('/Chart.js/4.')) return '4.4.1';
    if (type.startsWith('/clappr/0.') || type.startsWith('/clappr/latest/')) return '0.4.7';
    if (type.startsWith('/chosen/1.')) return '1.8.7';
    if (type.startsWith('/clipboard.js/1.')) return '1.7.1';
    if (type.startsWith('/clipboard.js/2.')) return '2.0.11';
    if (type.startsWith('/cookieconsent2/3.')) return '3.1.1';
    if (type.startsWith('/corejs-typeahead/1.')) return '1.3.4';
    if (type.startsWith('/createjs/')) return '1.0.0';
    if (type.startsWith('/d3/3.')) return '3.5.17';
    if (type.startsWith('/d3/4.')) return '4.13.0';
    if (type.startsWith('/d3/5.')) return '5.16.0';
    if (type.startsWith('/d3/6.')) return '6.7.0';
    if (type.startsWith('/d3/7.')) return '7.9.0';
    if (type.startsWith('/datatables/1.')) return '1.11.0';
    if (type.startsWith('/dayjs/1.')) return '1.11.13';
    if (type.startsWith('/dexie/3.')) return '3.2.7';
    if (type.startsWith('/dexie/4.') || type.startsWith('/dexie/latest')) return '4.0.11';
    if (type.startsWith('/docsearch.js/2.')) return '2.6.3';
    if (type.startsWith('/docsify/4.') || type.startsWith('/docsify/')) return '4.13.1';
    if (type.startsWith('/docsify-themeable/0.')) return '0.9.0';
    if (type.startsWith('/dygraph/1.')) return '1.1.1';
    if (type.startsWith('/dygraph/2.')) return '2.2.1';
    if (type.startsWith('/element-ui/2.')) return '2.15.14';
    if (type.startsWith('/embedly-player/0.')) return '0.1.0';
    if (type.startsWith('/ethjs')) return '0.4.0';
    if (type.startsWith('/exif-js/2.')) return '2.3.0';
    if (type.startsWith('/ext-core/3.')) return '3.1.0';
    if (type.startsWith('/fastclick/1.')) return '1.0.6';
    if (type.startsWith('/fancybox/2.')) return '2.1.7';
    if (type.startsWith('/fancybox/3.')) return '3.5.7';
    if (type.startsWith('/feather-icons/4.')) return '4.29.2';
    if (type.startsWith('/featherlight/1.')) return '1.7.13';
    if (type.startsWith('/flickity/3.')) return '3.0.0';
    if (type.startsWith('/flv.js/')) return '1.6.2';
    if (type.startsWith('/font-awesome/3.')) return '3.2.1';
    if (type.startsWith('/font-awesome/4.')) return '4.7.0';
    if (type.startsWith('/font-awesome/5.')) return '5.15.4';
    if (type.startsWith('/font-awesome/6.')) return '6.7.2';
    if (type.startsWith('/fork-awesome/1.')) return '1.2.0';
    if (type.startsWith('/foundation/5.')) return '5.5.3';
    if (type.startsWith('/foundation/6.')) return '6.9.0';
    if (type.startsWith('/foundicons/3.')) return '3.0.0';
    if (type.startsWith('/granim/2.')) return '2.0.0';
    if (type.startsWith('/gsap/1.')) return '1.20.5';
    if (type.startsWith('/gsap/2.')) return '2.1.3';
    if (type.startsWith('/gsap/3.')) return '3.12.7';
    if (type.startsWith('/materialicons/')) return 'v143';
    if (type.startsWith('/materialiconsoutlined/')) return 'v109';
    if (type.startsWith('/materialiconsround/')) return 'v108';
    if (type.startsWith('/materialiconssharp/')) return 'v109';
    if (type.startsWith('/materialiconstwotone/')) return 'v112';
    if (type.startsWith('/handlebars.js/4.')) return '4.7.8';
    if (type.startsWith('/highlight.js/7.')) return '9.18.5';
    if (type.startsWith('/highlight.js/8.')) return '9.18.5';
    if (type.startsWith('/highlight.js/9.')) return '9.18.5';
    if (type.startsWith('/highlight.js/10.')) return '11.9.0';
    if (type.startsWith('/highlight.js/11.')) return '11.11.1';
    if (type.startsWith('/history/4.')) return '4.10.1';
    if (type.startsWith('/history/5.')) return '5.3.0';
    if (type.startsWith('/hls.js/0.')) return '0.14.17';
    if (type.startsWith('/hls.js/1.')) return '1.5.18';
    if (type.startsWith('/hogan.js/')) return '3.0.2';
    if (type.startsWith('/instantsearch.css/7.')) return '7.4.5';
    if (type.startsWith('/instantsearch.css/8.')) return '8.5.1';
    if (type.startsWith('/instantsearch.js/3.')) return '3.7.0';
    if (type.startsWith('/instantsearch.js/4.')) return '4.77.0';
    if (type.startsWith('/in-view/0.')) return '0.6.1';
    if (type.startsWith('/iScroll/5.')) return '5.2.0';
    if (type.startsWith('/izimodal/1.')) return '1.6.1';
    if (type.startsWith('/jets/0.')) return '0.14.1';
    if (type.startsWith('/jquery/1.')) {
        if (helpers.compareVersion('1.7.1', version)) return '1.7.1'; // <= v1.7.1
        if (helpers.compareVersion('1.8.3', version)) return '1.8.3'; // > 1.7.1 to <= 1.8.3
        if (helpers.compareVersion('1.9.1', version)) return '1.9.1'; // > 1.8.3 to <= 1.9.1
        if (helpers.compareVersion('1.11.2', version)) return '1.11.2'; // > 1.9.1 to <= 1.11.2
        if (version === '1.11.3') return '1.11.3'; // = 1.11.3
        return '1.12.4'; // > 1.11.3
    }
    if (type.startsWith('/jquery/2.')) return '2.2.4';
    if (type.startsWith('/jquery/3.') || type.startsWith('/jquery/latest')) {
        if (helpers.compareVersion('3.2.1', version)) return '3.2.1'; // <= v3.2.1
        if (helpers.compareVersion('3.5.1', version)) return '3.5.1'; // <= v3.5.1
        return '3.7.1';
    }
    if (type.startsWith('/jquery.devbridge-autocomplete/1.')) return '1.4.11';
    if (type.startsWith('/jqueryui/1.')) {
        if (helpers.compareVersion('1.8.24', version)) return '1.8.24'; // <= v1.8.24
        if (helpers.compareVersion('1.10.0', version)) return '1.10.0'; // > v1.8.24 to <= v1.10.0
        if (helpers.compareVersion('1.11.4', version)) return '1.11.4'; // > v1.10.0 to <= v1.11.4
        return '1.14.1'; // >= 1.14.1
    }
    if (type.startsWith('/jquery-ajax-unobtrusive/3.')) return '3.2.6';
    if (type.startsWith('/jquery.blockUI/2.')) return '2.70';
    if (type.startsWith('/jquery.colorbox/1.')) return '1.6.4';
    if (type.startsWith('/jquery-cookie/1.')) return '1.4.1';
    if (type.startsWith('/jquery-csv/1.')) return '1.0.40';
    if (type.startsWith('/jquery-easing/1.')) return '1.4.1';
    if (type.startsWith('/jquery-jcrop/0.')) return '0.9.15';
    if (type.startsWith('/jquery.lazyload/1.')) return '1.9.1';
    if (type.startsWith('/jquery.lazy/1.')) return '1.7.11';
    if (type.startsWith('/jquery.matchHeight/0.')) return '0.7.2';
    if (type.startsWith('/jquery-migrate/1.')) return '1.4.1';
    if (type.startsWith('/jquery-migrate/3.')) return '3.5.2';
    if (type.startsWith('/jquery-minicolors/2.')) return '2.3.6';
    if (type.startsWith('/jquery-mobile/1.')) {
        if (helpers.compareVersion('1.3.2', version)) return '1.3.2'; // <= v1.3.2
        return '1.4.5';
    }
    if (type.startsWith('/jquery-mousewheel/3.')) return '3.2.2';
    if (type.startsWith('/jScrollPane/2.')) return '2.2.2';
    if (type.startsWith('/jquery-validate/1.')) return '1.21.0';
    if (type.startsWith('/jeditable.js/1.')) return '1.8.0';
    if (type.startsWith('/jeditable.js/2.')) return '2.0.19';
    if (type.startsWith('/jquery.cycle2/2.')) return '2.1.6';
    if (type.startsWith('/jquery.scrollbar/0.')) return '0.2.11';
    if (type.startsWith('/jquery-powertip/1.')) return '1.2.0';
    if (type.startsWith('/jquery-validation-unobtrusive/3.')) return '3.2.12';
    if (type.startsWith('/jquery-validation-unobtrusive/4.')) return '4.0.0';
    if (type.startsWith('/jquery.tablesorter/2.')) return '2.32.0';
    if (type.startsWith('/jquery-scrollTo/2.')) return '2.1.3';
    if (type.startsWith('/jquery-timeago/1.')) return '1.6.7';
    if (type.startsWith('/jquery-tiny-pubsub/0.')) return '0.7.0';
    if (type.startsWith('/jquery-ujs/1.')) return '1.2.3';
    if (type.startsWith('/jquery-modal/0.')) return '0.9.2';
    if (type.startsWith('/jasny-bootstrap/3.')) return '3.1.3';
    if (type.startsWith('/jasny-bootstrap/4.')) return '4.0.0';
    if (type.startsWith('/js-cookie/2.')) return '2.2.1';
    if (type.startsWith('/js-cookie/3.')) return '3.0.5';
    if (type.startsWith('/jsrender/1.')) return '1.0.15';
    if (type.startsWith('/knockout/3.')) {
        if (helpers.compareVersion('3.4.2', version)) return '3.4.2'; // <= v3.4.2
        return '3.5.1';
    }
    if (type.startsWith('/knockout.mapping/2.')) return '2.4.1';
    if (type.startsWith('/lazysizes/4.')) return '4.1.8';
    if (type.startsWith('/lazysizes/5.')) return '5.3.2';
    if (type.startsWith('/leaflet/0.')) return '0.7.7';
    if (type.startsWith('/leaflet/1.')) {
        if (helpers.compareVersion('1.7.1', version)) return '1.7.1'; // <= v1.7.1
        return '1.9.4';
    }
    if (type.startsWith('/Leaflet.EasyButton/2.')) return '2.4.0';
    if (type.startsWith('/leaflet.featuregroup.subgroup/1.')) return '1.0.2';
    if (type.startsWith('/leaflet.markercluster/1.')) return '1.5.3';
    if (type.startsWith('/libphonenumber-js/1.')) return '1.11.18';
    if (type.startsWith('/libsodium-wrappers/0.')) return '0.5.4';
    if (type.startsWith('/lightbox2/2.')) return '2.11.5';
    if (type.startsWith('/lightcase/2.')) return '2.5.0';
    if (type.startsWith('/lightgallery/1.')) return '1.10.0';
    if (type.startsWith('/lightgallery/2.')) return '2.8.3';
    if (type.startsWith('/lodash.js/3.')) return '3.10.1';
    if (type.startsWith('/lodash.js/4.')) return '4.17.21';
    if (type.startsWith('/lozad')) return '1.16.0';
    if (type.startsWith('/lunr.js/2.')) return '2.3.9';
    if (type.startsWith('/magnific-popup.js/1.')) return '1.2.0';
    if (type.startsWith('/markdown-it/')) return '13.0.2';
    if (type.startsWith('/mdbootstrap/4.')) return '4.20.0';
    if (type.startsWith('/material-design-icons/2.')) return '2.8.94';
    if (type.startsWith('/material-design-icons/3.')) return '3.9.97';
    if (type.startsWith('/material-design-icons/4.')) return '4.9.95';
    if (type.startsWith('/material-design-icons/5.')) return '5.8.55';
    if (type.startsWith('/materialize/0.')) {
        if (helpers.compareVersion('0.97.8', version)) return '0.97.8'; // <= v0.97.8
        return '0.100.2';
    }
    if (type.startsWith('/materialize/1.')) return '1.0.0';
    if (type.startsWith('/mathjax/2.') || type.startsWith('/mathjax/latest')) return '2.7.5';
    if (type.startsWith('/mathjax/3.')) return '3.2.2';
    if (type.startsWith('/mdb-ui-kit/3.')) return '3.11.0';
    if (type.startsWith('/mdb-ui-kit/4.')) return '4.4.0';
    if (type.startsWith('/mdb-ui-kit/5.')) return '5.0.0';
    if (type.startsWith('/mdb-ui-kit/6.')) return '6.4.2';
    if (type.startsWith('/mdb-ui-kit/7.')) return '7.3.2';
    if (type.startsWith('/mdb-ui-kit/8.')) return '8.2.0';
    if (type.startsWith('/mobile/1.')) return '1.4.5';
    if (type.startsWith('/Modaal/0.')) return '0.4.4';
    if (type.startsWith('/modernizr/2.')) return '2.8.3';
    if (type.startsWith('/moment.js/2.')) {
        if (helpers.compareVersion('2.5.1', version)) return '2.5.1'; // <= v2.5.1
        return '2.30.1';
    }
    if (type.startsWith('/mootools/1.')) {
        if (helpers.compareVersion('1.4.5', version)) return '1.4.5'; // <= v1.4.5
        return '1.6.0';
    }
    if (type.startsWith('/mousetrap/1.')) return '1.6.5';
    if (type.startsWith('/ngx-bootstrap/')) {
        // The only resource used from ngx-bootstrap is the CSS file for the datepicker.
        // This CSS is unchanged since version 7. So it's not necessary to host it more than once.
        if (helpers.compareVersion('6.2.0', version)) return '6.2.0'; // <= v6.2.0
        return '19.0.2';
    }
    if (type.startsWith('/noUiSlider/14.')) return '14.7.0';
    if (type.startsWith('/noUiSlider/15.')) return '15.8.1';
    if (type.startsWith('/nprogress/0.')) return '0.2.0';
    if (type.startsWith('/nvd3/1.')) return '1.8.6';
    if (type.startsWith('/object-assign@4.')) return '4.1.1';
    if (type.startsWith('/oclazyload/1.')) return '1.1.0';
    if (type.startsWith('/OwlCarousel2/2.')) return '2.3.4';
    if (type.startsWith('/owl-carousel/1.')) return '1.3.3';
    if (type.startsWith('/owl-carousel/2.')) return '2.3.4';
    if (type.startsWith('/p2p-media-loader-core') || type.startsWith('/p2p-media-loader-hlsjs')) {
        if (helpers.compareVersion('0.6.2', version)) return '0.6.2'; // <= v0.6.2
        return '2.2.1';
    }
    if (type.startsWith('/p5.js/0.')) return '0.10.2';
    if (type.startsWith('/p5.js/1.')) return '1.11.3';
    if (type.startsWith('/page.js/1.')) return '1.11.6';
    if (type.startsWith('/paginationjs/2.')) return '2.6.0';
    if (type.startsWith('/plyr/3.')) return '3.7.8';
    if (type.startsWith('/popper.js/1.')) return '1.16.1';
    if (type.startsWith('/popper.js/2.')) return '2.11.8';
    if (type.startsWith('/progressbar.js/1.')) return '1.1.1';
    if (type.startsWith('/prop-types/15.')) return '15.8.1';
    if (type.startsWith('/protonet-jquery.inview/1.')) return '1.1.2';
    if (type.startsWith('/prototype/1.')) return '1.7.3';
    if (type.startsWith('/pure/0.')) return '0.6.2';
    if (type.startsWith('/pure/1.')) return '1.0.1';
    if (type.startsWith('/pure/2.')) return '2.2.0';
    if (type.startsWith('/pure/3.')) return '3.0.0';
    if (type.startsWith('/rangeslider.js/2.')) return '2.3.3';
    if (type.startsWith('/raven.js/3.')) return '3.27.2';
    if (type.startsWith('/react/16.')) return '16.14.0';
    if (type.startsWith('/react/17.')) return '17.0.2';
    if (type.startsWith('/react/18.')) return '18.3.1';
    if (type.startsWith('/react/19.')) return '19.0.0';
    if (type.startsWith('/react-dom/16.')) return '16.14.0';
    if (type.startsWith('/react-dom/17.')) return '17.0.2';
    if (type.startsWith('/react-dom/18.')) return '18.3.1';
    if (type.startsWith('/react-dom/19.')) return '19.0.0';
    if (type.startsWith('/react-intl/')) {
        // NOTE: Parameters swapped. (= anything greater than v5.0.0)
        if (helpers.compareVersion(version, '5.0.0')) return '7.1.10'; // >= v5.0.0
    }
    if (type.startsWith('/react-redux/7.')) return '7.2.8';
    if (type.startsWith('/react-redux/8.')) return '8.1.3';
    if (type.startsWith('/react-router/5.')) return '5.3.3';
    if (type.startsWith('/react-router/6.')) return '6.28.1';
    if (type.startsWith('/react-side-effect/')) return '2.1.2';
    if (type.startsWith('/react-lifecycles-compat/')) return '3.0.4';
    if (type.startsWith('/redux/4.')) return '4.2.1';
    if (type.startsWith('/redux/5.')) return '5.0.1';
    if (type.startsWith('/rickshaw/1.')) return '1.7.1';
    if (type.startsWith('/script.js/2.')) return '2.5.9';
    if (type.startsWith('/scriptaculous/1.')) return '1.9.0';
    if (type.startsWith('/ScrollMagic/2.')) return '2.0.8';
    if (type.startsWith('/search-insights/1.')) return '1.10.0';
    if (type.startsWith('/search-insights/2.')) return '2.17.3';
    if (type.startsWith('/select2/3.')) return '3.5.4';
    if (type.startsWith('/select2/4.')) return '4.0.13';
    if (type.startsWith('/semantic-ui/2.')) return '2.5.0';
    if (type.startsWith('/showdown/0.')) return '0.5.1';
    if (type.startsWith('/showdown/1.')) return '1.9.1';
    if (type.startsWith('/showdown/2.')) return '2.1.0';
    if (type.startsWith('/simplebar/5.')) return '5.3.9';
    if (type.startsWith('/simplebar/6.')) return '6.3.0';
    if (type.startsWith('/simplemde/')) return '1.11.2';
    if (type.startsWith('/slick-carousel/1.')) {
        if (helpers.compareVersion('1.8.1', version)) return '1.8.1'; // <= v1.8.1
        return '1.9.0';
    }
    if (type.startsWith('/slick-lightbox/0.')) return '0.2.12';
    if (type.startsWith('/slider-pro/1.')) return '1.6.2';
    if (type.startsWith('/snowplow/2.')) return '2.18.2';
    if (type.startsWith('/socket.io/2.')) return '2.4.0';
    if (type.startsWith('/socket.io/3.')) return '3.1.3';
    if (type.startsWith('/socket.io/4.')) return '4.8.1';
    if (type.startsWith('/spin.js/2.')) return '2.3.2';
    if (type.startsWith('/spin.js/3.')) return '3.1.0';
    if (type.startsWith('/spin.js/4.')) return '4.1.2';
    if (type.startsWith('/stickyfill/1.')) return '1.1.4';
    if (type.startsWith('/stickyfill/2.')) return '2.1.0';
    if (type.startsWith('/sticky-js/')) return '1.3.0';
    if (type.startsWith('/store.js/2.')) return '2.0.12';
    if (type.startsWith('/supabase-js/2.')) return '2.39.3';
    if (type.startsWith('/swagger-ui/4.')) return '4.18.3';
    if (type.startsWith('/swagger-ui/5.')) return '5.20.2';
    if (type.startsWith('/Swiper/3.')) return '3.4.2';
    if (type.startsWith('/Swiper/4.')) return '4.5.1';
    if (type.startsWith('/Swiper/5.')) return '5.4.5';
    if (type.startsWith('/Swiper/6.')) return '6.8.4';
    if (type.startsWith('/Swiper/7.')) return '7.4.1';
    if (type.startsWith('/Swiper/8.')) return '8.4.7';
    if (type.startsWith('/Swiper/9.')) return '9.4.1';
    if (type.startsWith('/Swiper/10.') || type.startsWith('/Swiper/11.') || type.startsWith('/Swiper/')) return '11.0.5';
    if (type.startsWith('/tensorflow/')) {
        // NOTE: Parameters swapped. (= anything greater than v2.0.0)
        if (helpers.compareVersion(version, '2.0.0')) return '4.22.0'; // >= v2.0.0
    }
    if (type.startsWith('/tether/1.')) return '1.4.7';
    if (type.startsWith('/tinymce/5.')) return '5.10.5';
    if (type.startsWith('/tinymce/6.') || type.startsWith('/tinymce/7.')) return '7.6.1';
    if (type.startsWith('/tooltipster/3.')) return '3.3.0';
    if (type.startsWith('/tooltipster/4.')) return '4.2.8';
    if (type.startsWith('/toastr.js/2.') || type.startsWith('/toastr.js/latest/')) return '2.1.4';
    if (type.startsWith('/twitter-bootstrap/2.')) return '2.3.2';
    if (type.startsWith('/twitter-bootstrap/3.')) {
        if (helpers.compareVersion('3.0.0', version)) return '3.0.0'; // <= 3.0.0
        if (helpers.compareVersion('3.3.7', version)) return '3.3.7'; // <= 3.3.7
        return '3.4.1';
    }
    if (type.startsWith('/twitter-bootstrap/4.')) {
        if (helpers.compareVersion('4.1.1', version)) return '4.1.1'; // <= 4.1.1
        if (helpers.compareVersion('4.4.1', version)) return '4.4.1'; // <= 4.4.1
        return '4.6.1';
    }
    if (type.startsWith('/twitter-bootstrap/5.')) {
        if (helpers.compareVersion('5.1.3', version)) return '5.1.3'; // <= 5.1.3
        return '5.3.3';
    }
    if (type.startsWith('/twix.js/0.')) return '0.3.0';
    if (type.startsWith('/twix.js/1.')) return '1.3.0';
    if (type.startsWith('/underscore.js/1.')) return '1.13.7';
    if (type.startsWith('/URI.js/1.')) return '1.19.11';
    if (type.startsWith('/urlive/1.')) return '1.1.1';
    if (type.startsWith('/vanilla-lazyload')) return '19.1.3';
    if (type.startsWith('/vex-js/3.')) return '3.1.1';
    if (type.startsWith('/vex-js/4.')) return '4.1.0';
    if (type.startsWith('/videojs-seek-buttons/1.')) return '1.6.0';
    if (type.startsWith('/videojs-seek-buttons/2.')) return '2.2.1';
    if (type.startsWith('/videojs-seek-buttons/3.')) return '3.0.1';
    if (type.startsWith('/videojs-seek-buttons/4.')) return '4.0.3';
    if (type.startsWith('/video.js/')) {
        if (helpers.compareVersion('5.20.5', version)) return '5.20.5'; // <= 5.20.5
        if (helpers.compareVersion('6.13.0', version)) return '6.13.0'; // > 5.20.5 to <= 6.13.0
        if (helpers.compareVersion('7.21.1', version)) return '7.21.1'; // > 6.13.0 to <= 7.21.1
        return '8.22.0';
    }
    if (type.startsWith('/vue/1.')) return '1.0.28';
    if (type.startsWith('/vue/2.')) return '2.6.14';
    if (type.startsWith('/vue/3.')) return '3.5.13';
    if (type.startsWith('/vue-i18n/8.')) return '8.27.2';
    if (type.startsWith('/vue-i18n/9.')) return '9.14.0';
    if (type.startsWith('/vue-i18n/10.')) return '10.0.5';
    if (type.startsWith('/vue-i18n/11.')) return '11.1.1';
    if (type.startsWith('/vue-match-media/1.')) return '1.0.3';
    if (type.startsWith('/vue-resource/1.')) return '1.5.3';
    if (type.startsWith('/vue-router/3.')) return '3.6.5';
    if (type.startsWith('/vue-router/4.')) return '4.5.0';
    if (type.startsWith('/vuex/3.')) return '3.6.2';
    if (type.startsWith('/vuex/4.')) return '4.1.0';
    if (type.startsWith('/waypoints/4.')) return '4.0.1';
    if (type.startsWith('/webcomponentsjs/')) return '2.8.0';
    if (type.startsWith('/webfont')) return '1.6.28';
    if (type.startsWith('/webrtc-adapter/6.')) return '6.4.8';
    if (type.startsWith('/webrtc-adapter/7.')) return '7.7.1';
    if (type.startsWith('/webrtc-adapter/8.')) return '9.0.1';
    if (type.startsWith('/webrtc-adapter/9.')) return '9.0.1';
    if (type.startsWith('/wow/1.')) return '1.1.2';
    if (version === null) return 'latest';
    return '';
};

targets.determineResourceName = function (filename) {
    // eslint-disable-next-line no-use-before-define
    return ListOfFiles[filename] || 'Unknown';
};

const ListOfFiles = {
    'featherlight.min.css': 'featherlight (CSS)',
    'featherlight.min.jsm': 'featherlight (JS)',
    'featherlight.gallery.min.css': 'featherlight Gallery (CSS)',
    'featherlight.gallery.min.jsm': 'featherlight Gallery (JS)',
    'mousetrap.min.jsm': 'mousetrap',
    'jquery.powertip.min.jsm': 'jquery-powertip',
    'jsrender.min.jsm': 'jsrender',
    'supabase.min.jsm': 'supabase-js',
    'handlebars.min.jsm': 'handlebars.js',
    'URI.min.jsm': 'URI.js',
    'vue-router.global.min.jsm': 'vue-router',
    'tf.min.jsm': 'tensorflow',
    'nprogress.min.jsm': 'nprogress (JS)',
    'nprogress.min.css': 'nprogress (CSS)',
    'swagger-ui-bundle.min.jsm': 'Swagger-UI (JS)',
    'swagger-ui.min.css': 'Swagger-UI (CSS)',
    'knockout.mapping.min.jsm': 'knockout.mapping',
    'jquery.colorbox-min.jsm': 'Colorbox',
    'rangeslider.min.css': 'rangeslider.js (CSS)',
    'rangeslider.min.jsm': 'rangeslider.js (JS)',
    'in-view.min.jsm': 'in-view',
    'jquery.minicolors.min.jsm': 'jquery-minicolors (JS)',
    'jquery.minicolors.min.css': 'jquery-minicolors (CSS)',
    'jquery.Jcrop.min.jsm': 'jquery-jcrop (JS)',
    'jquery.Jcrop.min.css': 'jquery-jcrop (CSS)',
    'react-intl.iife.min.jsm': 'react-intl',
    'lunr.min.jsm': 'lunr.js',
    'jquery.scrollTo.min.jsm': 'jQuery.scrollTo',
    'twix.min.jsm': 'twix.js',
    'angular-locale_en-us.min.jsm': 'angular-i18n',
    'angular-translate-loader-partial.min.jsm': 'angular-translate-loader-partial',
    'tinymce.min.jsm': 'TinyMCE',
    'createjs.min.jsm': 'CreateJS',
    'vue-match-media.min.jsm': 'vue-match-media',
    'typeahead.bundle.min.jsm': 'corejs-typeahead',
    'lightbox.min.jsm': 'Lightbox2',
    'iziModal.min.jsm': 'iziModal',
    'granim.min.jsm': 'Granim.js',
    'validator.min.jsm': 'Bootstrap Validator',
    'flickity.pkgd.min.jsm': 'Flickity',
    'theme-defaults.css': 'docsify theme',
    'theme-simple.css': 'docsify theme',
    'theme-simple-dark.css': 'docsify theme',
    'docsify.min.jsm': 'docsify',
    'foundation.min.jsm': 'foundation (JS)',
    'foundation.min.css': 'foundation (CSS)',
    'asciinema-player.min.jsm': 'asciinema player (JS)',
    'asciinema-player.min.css': 'asciinema player (CSS)',
    'dygraph.min.jsm': 'dygraph',
    'search-insights.min.jsm': 'Search Insights',
    'fork-awesome.min.css': 'Fork Awesome',
    'foundation-icons.min.css': 'Foundation Icon Fonts',
    'jquery.timeago.min.jsm': 'jquery-timeago',
    'jquery.fittext.min.jsm': 'FitText.js',
    'aos.css': 'aos (CSS)',
    'aos.jsm': 'aos (JS)',
    'exif.min.jsm': 'Exif.js',
    'bootstrap-icons.min.css': 'Bootstrap Icons',
    'clappr.min.jsm': 'clappr',
    'script.min.jsm': 'script.js',
    'rails.min.jsm': 'jquery-ujs',
    'algolia-min.css': 'InstantSearch.css',
    'simplebar.min.css': 'simplebar (CSS)',
    'simplebar.min.jsm': 'simplebar (JS)',
    'sticky.min.jsm': 'sticky-js',
    'jquery.unobtrusive-ajax.min.jsm': 'jQuery Unobtrusive Ajax',
    'vuex.min.jsm': 'vuex',
    'alpine.jsm': 'alpinejs',
    'ba-tiny-pubsub.min.jsm': 'jQuery Tiny Pub/Sub',
    'fastclick.min.jsm': 'FastClick',
    'bodymovin.min.jsm': 'bodymovin/lottie',
    'jquery.bxslider.min.jsm': 'bxslider (JS)',
    'jquery.bxslider.min.css': 'bxslider (CSS)',
    'easy-button.min.jsm': 'Leaflet.EasyButton',
    'leaflet.featuregroup.subgroup.jsm': 'Leaflet.FeatureGroup.SubGroup',
    'leaflet.markercluster.jsm': 'leaflet.markercluster',
    'embedly-player.min.jsm': 'embedly player',
    'bs-datepicker.css': 'Datepicker (ngx-bootstrap)',
    'sp.min.jsm': 'Snowplow',
    'appboy.min.jsm': 'Appboy/Braze Web SDK',
    'MaterialIcons.woff2': 'Google Material Icons',
    'font-awesome': 'Font Awesome',
    'leaflet.jsm': 'leaflet (JS)',
    'leaflet.css': 'leaflet (CSS)',
    'bluebird.min.jsm': 'bluebird',
    'feather.min.jsm': 'Feather Icons',
    'babel.min.jsm': 'Babel standalone',
    'anime.min.jsm': 'animejs',
    'lightcase.min.jsm': 'lightcase (JS)',
    'lightcase.min.css': 'lightcase (CSS)',
    'jasny-bootstrap.min.css': 'Jasny Bootstrap (JS)',
    'jasny-bootstrap.min.jsm': 'Jasny Bootstrap (CSS)',
    'bulma.min.css': 'Bulma',
    'hogan.min.jsm': 'hogan.js',
    'highlight.min.jsm': 'highlight.js (Bundle)',
    'jquery.cookie.min.jsm': 'jquery-cookie',
    'jquery.scrollbar.min.jsm': 'jQuery Scrollbar',
    'dayjs.min.jsm': 'Day.js',
    'jquery.validate.unobtrusive.min.jsm': 'jQuery Validate Unobtrusive',
    'jquery.sliderPro.min.jsm': 'Slider Pro (JS)',
    'knockout-min.jsm': 'Knockout',
    'knockout-latest.min.jsm': 'Knockout',
    'bootstrap-multiselect.min.jsm': 'Bootstrap Multiselect',
    'ajax-bootstrap-select.min.jsm': 'Ajax Bootstrap Select',
    'bootstrap-vue.min.jsm': 'BootstrapVue (JS)',
    'bootstrap-vue.min.css': 'BootstrapVue (CSS)',
    'bowser.min.jsm': 'Bowser',
    'mirage2.min.jsm': 'mirage2',
    'chosen.jquery.min.jsm': 'chosen',
    'nouislider.min.jsm': 'noUiSlider (JS)',
    'mdb-ui-kit.min.jsm': 'MDB UI Kit (JS)',
    'mdb-ui-kit.min.css': 'MDB UI Kit (CSS)',
    'docsearch.min.jsm': 'docsearch.js (JS)',
    'docsearch.min.css': 'docsearch.js (CSS)',
    'blazy.min.jsm': 'blazy',
    'materialdesignicons.min.css': 'MaterialDesign',
    'dexie.min.jsm': 'dexie',
    'p5.min.jsm': 'p5.js',
    'p5.sound.min.jsm': 'p5.js (Sound)',
    'jquery.inview.min.jsm': 'inview (Protonet)',
    'modaal.min.jsm': 'Modaal (JS)',
    'modaal.min.css': 'Modaal (CSS)',
    'jquery.magnific-popup.min.jsm': 'magnific-popup.js (JS)',
    'magnific-popup.min.css': 'magnific-popup.js (CSS)',
    'pagination.min.css': 'Pagination.js (CSS)',
    'pagination.min.jsm': 'Pagination.js (JS)',
    'bootstrap-table.min.jsm': 'Bootstrap Table (JS)',
    'bootstrap-table.min.css': 'Bootstrap Table (CSS)',
    'jquery.matchHeight-min.jsm': 'jquery.matchHeight.js',
    'iscroll.min.jsm': 'iScroll',
    'drawer.min.jsm': 'Drawer (JS)',
    'drawer.min.css': 'Drawer (CSS)',
    'lightgallery-all.min.jsm': 'lightGallery (JS)',
    'lightgallery.min.css': 'lightGallery (CSS)',
    'sodium.min.jsm': 'libsodium.js',
    'polyfill.min.jsm': 'Babel Polyfill',
    'video-js.min.css': 'Video.js (CSS)',
    'video.min.jsm': 'Video.js (JS)',
    'cookieconsent.min.css': 'Cookie Consent (CSS)',
    'cookieconsent.min.jsm': 'Cookie Consent (JS)',
    'markdown-it.min.jsm': 'markdown-it',
    'vue-i18n.min.jsm': 'Vue.js (i18n)',
    'v4-shims.min.css': 'Font Awesome (Shim)',
    'instantsearch.production.min.jsm': 'InstantSearch.js',
    'redux.min.jsm': 'Redux',
    'react-side-effect.min.jsm': 'react-side-effect',
    'react-router.min.jsm': 'react router',
    'react-redux.min.jsm': 'react redux',
    'react-lifecycles-compat.min.jsm': 'react lifecycles compat',
    'prop-types.min.jsm': 'prop-types',
    'history.min.jsm': 'history',
    'axios.min.jsm': 'Axios',
    'object-assign.min.jsm': 'Object assign',
    'slick-lightbox.css': 'slick-lightbox CSS',
    'slick-lightbox.min.jsm': 'slick-lightbox JS',
    'noframework.waypoints.min.jsm': 'Waypoints (Bundle)',
    'jquery.waypoints.min.jsm': 'Waypoints (Bundle)',
    'waypoints.debug.jsm': 'Waypoints (Bundle)',
    'zepto.waypoints.min.jsm': 'Waypoints (Bundle)',
    'shortcuts/infinite.min.jsm': 'Waypoints (Bundle)',
    'shortcuts/inview.min.jsm': 'Waypoints (Bundle)',
    'shortcuts/sticky.min.jsm': 'Waypoints (Bundle)',
    'anchor.min.jsm': 'AnchorJS',
    'jquery.easing.min.jsm': 'jQuery Easing Plugin',
    'baguetteBox.min.jsm': 'baguetteBox.js (JS)',
    'baguetteBox.min.css': 'baguetteBox.js (CSS)',
    'videojs-seek-buttons.min.css': 'Videojs seek buttons (CSS)',
    'videojs-seek-buttons.min.jsm': 'Videojs seek buttons (JS)',
    'p2p-media-loader-hlsjs.min.jsm': 'P2P Media Loader Hls.js',
    'bootstrap-toggle.min.jsm': 'Bootstrap Toggle (JS)',
    'bootstrap2-toggle.min.jsm': 'Bootstrap2 Toggle (JS)',
    'bootstrap-toggle.min.css': 'Bootstrap Toggle (CSS)',
    'bootstrap2-toggle.min.css': 'Bootstrap2 Toggle (CSS)',
    'vue-resource.min.jsm': 'vue-resource',
    'jquery.lazy.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.plugins.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.ajax.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.av.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.iframe.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.noop.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.picture.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.script.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.vimeo.min.jsm': 'jQuery Lazy (Bundle)',
    'jquery.lazy.youtube.min.jsm': 'jQuery Lazy (Bundle)',
    'fa-loader.jsm': 'Font Awesome CSS (WFL)',
    'fa-loader.css': 'Font Awesome JS (WFL)',
    'jquery.tooltipster.min.jsm': 'Tooltipster',
    'jquery.jscrollpane.min.jsm': 'jScrollPane',
    'stickyfill.min.jsm': 'Stickyfill',
    'jquery.mousewheel.min.jsm': 'jQuery Mousewheel',
    'a1f20be65b.css': 'Font Awesome (CSS)',
    'a1f20be65b.jsm': 'Font Awesome (JS)',
    'owl.transitions.min.css': 'OwlCarousel (CSS Transitions)',
    'owl.theme.min.css': 'OwlCarousel (CSS Theme)',
    'owl.carousel.min.css': 'OwlCarousel (CSS)',
    'owl.carousel.min.jsm': 'OwlCarousel (JS)',
    'bootstrap-datepicker3.standalone.min.css': 'Bootstrap Datepicker 3 (CSS)',
    'jets.min.jsm': 'Jets.js',
    'lazyload.min.jsm': 'Vanilla Lazyload',
    'materialize.min.jsm': 'Materialize (JS)',
    'materialize.min.css': 'Materialize (CSS)',
    'slick.min.jsm': 'slick (JS)',
    'slick.min.css': 'slick (CSS)',
    'slick-theme.min.css': 'slick (Theme)',
    'google-material-design-icons.css': 'Google Material Icons',
    'Chart.bundle.min.jsm': 'Chart.js (JS)', // for statistics page
    'Chart.bundle.min.css': 'Chart.js (CSS)', // for statistics page
    'chart.min.jsm': 'Chart.js (JS)',
    'Chart.min.css': 'Chart.js (CSS)',
    'bootbox.min.jsm': 'BootboxJS',
    'bootstrap3-typeahead.min.jsm': 'Bootstrap 3 Typeahead',
    'libphonenumber-js.min.jsm': 'libphonenumber-js',
    'showdown.min.jsm': 'Showdown',
    'angular-ui-utils.min.jsm': 'Angular UI Utils',
    'bootstrap-colorpicker-module.min.jsm': 'Angular Bootstrap Colorpicker (JS)',
    'colorpicker.min.css': 'Angular Bootstrap Colorpicker (CSS)',
    'ethjs.min.jsm': 'ethjs',
    'adapter.min.jsm': 'WebRTC adapter',
    'algoliasearch.min.jsm': 'AlgoliaSearch',
    'algoliasearch3.33.0_algoliasearchLite_algoliasearchHelper.jsm': 'jsDelivr combined',
    'all.min.css': 'Font Awesome (CSS)',
    'all.min.jsm': 'Font Awesome (JS)',
    'angucomplete-alt.min.jsm': 'AngulComplete',
    'angular-animate.min.jsm': 'AngularJS Animate',
    'angular-aria.min.jsm': 'AngularJS Aria',
    'angular-cookies.min.jsm': 'AngularJS Cookies',
    'angular-loader.min.jsm': 'AngularJS Loader',
    'angular-material.min.css': 'AngularJS Material Design',
    'angular-material.min.jsm': 'AngularJS Material Design',
    'angular-message-format.min.jsm': 'AngularJS Message Format',
    'angular-messages.min.jsm': 'AngularJS Messages',
    'angular-parse-ext.min.jsm': 'AngularJS ParseExt',
    'angular-payments.jsm': 'Angular Payments',
    'angular-resource.min.jsm': 'AngularJS Resource',
    'angular-route.min.jsm': 'AngularJS Route',
    'angular-sanitize.min.jsm': 'AngularJS Sanitize',
    'angular-stripe-checkout.min.jsm': 'Angular Stripe Checkout',
    'angular-touch.min.jsm': 'AngularJS Touch',
    'angular-ui-router.min.jsm': 'Angular UI Router',
    'angular.min.jsm': 'Angular (JS)',
    'animate.min.css': 'Animate (CSS)',
    'autocomplete.min.jsm': 'autocomplete.js',
    'backbone-min.jsm': 'Backbone.js',
    'bootstrap-datepicker.min.jsm': 'Bootstrap Datepicker (JS)',
    'bootstrap-datepicker.standalone.min.css': 'Bootstrap Datepicker (CSS)',
    'bootstrap-select.min.css': 'Bootstrap-select (CSS)',
    'bootstrap-select.min.jsm': 'Bootstrap-select (JS)',
    'bootstrap-slider.min.css': 'bootstrap-slider (CSS)',
    'bootstrap-slider.min.jsm': 'bootstrap-slider (JS)',
    'bootstrap.min.css': 'Bootstrap (CSS)',
    'bootstrap.min.jsm': 'Bootstrap (JS)',
    'clipboard.min.jsm': 'clipboard.js',
    'd3-legend.min.jsm': 'D3.js Legend',
    'd3.min.jsm': 'D3.js',
    'daterangepicker.min.jsm': 'Bootstrap Daterangepicker',
    'ember.min.jsm': 'Ember.js',
    'ext-core.jsm': 'Ext Core',
    'flv.min.jsm': 'flv.js',
    'font-awesome.min.css': 'Font Awesome',
    'hls.min.jsm': 'hls.js',
    'jquery-migrate.min.jsm': 'jQuery Migrate',
    'jquery-ui.min.css': 'jQuery UI Themes',
    'jquery-ui.min.jsm': 'jQuery UI',
    'jquery.autocomplete.min.jsm': 'jQuery Ajax AutoComplete',
    'jquery.blockUI.min.jsm': 'jQuery Block UI',
    'jquery.csv.min.jsm': 'jQuery-csv',
    'jquery.fancybox-media.jsm': 'fancyBox Media (JS)',
    'jquery.fancybox.min.css': 'fancyBox (CSS)',
    'jquery.fancybox.min.jsm': 'fancyBox (JS)',
    'jquery.jeditable.min.jsm': 'jQuery Validation Plugin',
    'jquery.lazyload.min.jsm': 'jQuery Lazy Load',
    'jquery.min.jsm': 'jQuery',
    'jquery.mobile.min.jsm': 'jQuery Mobile (JS)',
    'jquery.mobile.min.css': 'jQuery Mobile (CSS)',
    'jquery.modal.min.css': 'jQuery Modal',
    'jquery.modal.min.jsm': 'jQuery Modal',
    'jquery.tablesorter.min.jsm': 'jQuery Tablesorter',
    'jquery.urlive.min.jsm': 'jQuery URLive',
    'jquery.validate.min.jsm': 'jQuery jeditable',
    'js.cookie.min.jsm': 'JavaScript Cookie',
    'jsdelivr-combine-jquery-hogan-algoliasearch-autocomplete.jsm': 'jsDelivr combined',
    'lazysizes.min.jsm': 'lazysizes',
    'lodash.min.jsm': 'Lodash',
    'lozad.min.jsm': 'lozad.js',
    'mdb.min.css': 'MDBootstrap (CSS)',
    'mdb.min.jsm': 'MDBootstrap (JS)',
    'modernizr.min.jsm': 'Modernizr',
    'moment-with-locales.min.jsm': 'Moment.js',
    'mootools-core.min.jsm': 'MooTools',
    'nv.d3.min.css': 'NVD3 (CSS)',
    'nv.d3.min.jsm': 'NVD3 (JS)',
    'ocLazyLoad.min.jsm': 'ocLazyLoad',
    'p2p-media-loader-core.min.jsm': 'P2P Media Loader Core',
    'page.min.jsm': 'page.js',
    'plyr.min.css': 'plyr (CSS)',
    'plyr.min.jsm': 'plyr (JS)',
    'plyr.svg': 'plyr (SVG)',
    'popper.min.jsm': 'Popper',
    'prototype.min.jsm': 'Prototype',
    'prototype.jsm': 'Prototype',
    'raven.min.jsm': 'Raven.js',
    'react-dom.production.min.jsm': 'ReactDOM',
    'react.production.min.jsm': 'React',
    'rickshaw.min.css': 'rickshaw (CSS)',
    'rickshaw.min.jsm': 'rickshaw (JS)',
    'rocket-loader.min.jsm': 'Rocket Loader',
    'rzslider.min.jsm': 'AngularJS slider',
    'scriptaculous.jsm': 'Scriptaculous',
    'select.min.jsm': 'AngularJS ui-select',
    'select2.full.min.jsm': 'Select2 (JS)',
    'select2.min.css': 'Select2 (CSS)',
    'simplemde.min.css': 'simplemde (CSS)',
    'simplemde.min.jsm': 'simplemde (JS)',
    'socket.io.min.jsm': 'Socket.IO',
    'spin.min.jsm': 'spin.js',
    'store.legacy.min.jsm': 'Store.js',
    'swfobject.jsm': 'SWFObject',
    'swiper.min.css': 'Swiper (CSS)',
    'swiper.min.jsm': 'Swiper (JS)',
    'tether.min.jsm': 'Tether (JS)',
    'toaster.min.css': 'AngularJS Toaster (CSS)',
    'toaster.min.jsm': 'AngularJS Toaster (JS)',
    'toastr.min.css': 'toastr.js',
    'toastr.min.jsm': 'toastr.js',
    'ui-bootstrap-tpls.min.jsm': 'Angular UI Bootstrap',
    'ui-bootstrap.min.jsm': 'Angular UI Bootstrap',
    'underscore-min.jsm': 'Underscore.js',
    'urlize.jsm': 'urlize',
    'vue.min.jsm': 'Vue.js',
    'webcomponents-loader.min.jsm': 'WebComponents Loader (JS)',
    'webfontloader.jsm': 'Web Font Loader',
    'wow.min.jsm': 'WOW'
};
