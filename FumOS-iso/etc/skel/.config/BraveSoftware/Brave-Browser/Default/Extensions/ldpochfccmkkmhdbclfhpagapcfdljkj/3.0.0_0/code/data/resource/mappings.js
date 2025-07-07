/**
 * Resource Mappings
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2014-05-30
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import ResourceSets from './sets.js';

/**
 * Public Constants
 */

const mappings = {

    // Google Hosted Libraries
    'ajax.googleapis.com': {
        '/ajax/libs/': {
            'angularjs/{version}/angular.': ResourceSets.angular,
            'dojo/{version}/dojo/dojo.': ResourceSets.dojo,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'ext-core/{version}/ext-core-debug.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jqueryui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jqueryui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'mootools/{version}/mootools-yui-compressed.': ResourceSets.mootools,
            'prototype/{version}/prototype.': ResourceSets.prototypeJS,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'webfont/{version}/webfont.': ResourceSets.webfont,

            // Basic Shorthand Notations [Deprecated]
            'dojo/1/dojo/dojo.': {
                'path': 'resources/dojo/1.6.1/dojo/dojo.jsm',
                'type': 'application/javascript'
            },
            'jquery/1/jquery.': {
                'path': 'resources/jquery/1.11.1/jquery.min.jsm',
                'type': 'application/javascript'
            },
            'jqueryui/1/jquery-ui.js': {
                'path': 'resources/jqueryui/1.10.4/jquery-ui.min.jsm',
                'type': 'application/javascript'
            },
            'jqueryui/1/jquery-ui.min.js': {
                'path': 'resources/jqueryui/1.10.4/jquery-ui.min.jsm',
                'type': 'application/javascript'
            },
            'mootools/1/mootools-yui-compressed.': {
                'path': 'resources/mootools/1.1.2/mootools-yui-compressed.jsm',
                'type': 'application/javascript'
            },
            'prototype/1/prototype.': {
                'path': 'resources/prototype/1.7.1.0/prototype.jsm',
                'type': 'application/javascript'
            },
            'scriptaculous/1/scriptaculous.': {
                'path': 'resources/scriptaculous/1.9.0/scriptaculous.jsm',
                'type': 'application/javascript'
            },
            'swfobject/2/swfobject.': {
                'path': 'resources/swfobject/2.2/swfobject.jsm',
                'type': 'application/javascript'
            },
            'webfont/1/webfont.': {
                'path': 'resources/webfont/1.5.18/webfont.jsm',
                'type': 'application/javascript'
            }
        }
    },
    // Microsoft Ajax CDN
    'ajax.aspnetcdn.com': {
        '/ajax/': {
            'jQuery/jquery-{version}.': ResourceSets.jQuery,
            'jquery/jquery-{version}.': ResourceSets.jQuery,
            'modernizr/modernizr-{version}.': ResourceSets.modernizr
        }
    },
    // Microsoft Ajax CDN [Deprecated]
    'ajax.microsoft.com': {
        '/ajax/': {
            'jQuery/jquery-{version}.': ResourceSets.jQuery,
            'jquery/jquery-{version}.': ResourceSets.jQuery,
            'modernizr/modernizr-{version}.': ResourceSets.modernizr
        }
    },
    // CDNJS (Cloudflare)
    'cdnjs.cloudflare.com': {
        '/ajax/libs/': {
            'angular.js/{version}/angular.': ResourceSets.angular,
            'backbone.js/{version}/backbone.': ResourceSets.backbone,
            'backbone.js/{version}/backbone-min.': ResourceSets.backbone,
            'dojo/{version}/dojo.': ResourceSets.dojo,
            'ember.js/{version}/ember.': ResourceSets.ember,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jqueryui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jqueryui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'modernizr/{version}/modernizr.': ResourceSets.modernizr,
            'moment.js/{version}/moment.': ResourceSets.moment,
            'mootools/{version}/mootools-core': ResourceSets.mootools,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'underscore.js/{version}/underscore.': ResourceSets.underscore,
            'underscore.js/{version}/underscore-min.': ResourceSets.underscore,
            'webfont/{version}/webfont': ResourceSets.webfont
        }
    },
    // jQuery CDN (MaxCDN)
    'code.jquery.com': {
        '/': {
            'jquery-{version}.': ResourceSets.jQuery,
            'ui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'ui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,

            // Basic Shorthand Notations [Deprecated]
            'jquery-latest.': {
                'path': 'resources/jquery/1.11.1/jquery.min.jsm',
                'type': 'application/javascript'
            },
            'jquery.': {
                'path': 'resources/jquery/1.11.1/jquery.min.jsm',
                'type': 'application/javascript'
            }
        }
    },
    // jsDelivr (MaxCDN)
    'cdn.jsdelivr.net': {
        '/': {
            'angularjs/{version}/angular.': ResourceSets.angular,
            'backbonejs/{version}/backbone.': ResourceSets.backbone,
            'backbonejs/{version}/backbone-min.': ResourceSets.backbone,
            'dojo/{version}/dojo.': ResourceSets.dojo,
            'emberjs/{version}/ember.': ResourceSets.ember,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jquery.ui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jquery.ui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'momentjs/{version}/moment.': ResourceSets.moment,
            'mootools/{version}/mootools-': ResourceSets.mootools,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'underscorejs/{version}/underscore.': ResourceSets.underscore,
            'underscorejs/{version}/underscore-min.': ResourceSets.underscore,
            'webfontloader/{version}/webfont': ResourceSets.webfont
        }
    },
    // Yandex CDN
    'yastatic.net': {
        '/': {
            'angularjs/{version}/angular.': ResourceSets.angular,
            'backbone/{version}/backbone.': ResourceSets.backbone,
            'backbone/{version}/backbone-min.': ResourceSets.backbone,
            'dojo/{version}/dojo/dojo.': ResourceSets.dojo,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jquery-ui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jquery-ui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'modernizr/{version}/modernizr.': ResourceSets.modernizr,
            'momentjs/{version}/moment.': ResourceSets.moment,
            'prototype/{version}/prototype.': ResourceSets.prototypeJS,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'underscore/{version}/underscore.': ResourceSets.underscore,
            'underscore/{version}/underscore-min.': ResourceSets.underscore
        }
    },
    // Yandex CDN [Deprecated]
    'yandex.st': {
        '/': {
            'angularjs/{version}/angular.': ResourceSets.angular,
            'backbone/{version}/backbone.': ResourceSets.backbone,
            'backbone/{version}/backbone-min.': ResourceSets.backbone,
            'dojo/{version}/dojo/dojo.': ResourceSets.dojo,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jquery-ui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jquery-ui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'modernizr/{version}/modernizr.': ResourceSets.modernizr,
            'momentjs/{version}/moment.': ResourceSets.moment,
            'prototype/{version}/prototype.': ResourceSets.prototypeJS,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'underscore/{version}/underscore.': ResourceSets.underscore,
            'underscore/{version}/underscore-min.': ResourceSets.underscore
        }
    },
    // Baidu CDN
    'apps.bdimg.com': {
        '/libs/': {
            'angular.js/{version}/angular.': ResourceSets.angular,
            'backbone.js/{version}/backbone.': ResourceSets.backbone,
            'backbone.js/{version}/backbone-min.': ResourceSets.backbone,
            'dojo/{version}/dojo.': ResourceSets.dojo,
            'ember.js/{version}/ember.': ResourceSets.ember,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jqueryui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jqueryui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'moment/{version}/moment.': ResourceSets.moment,
            'mootools/{version}/mootools-yui-compressed.': ResourceSets.mootools,
            'prototype/{version}/prototype.': ResourceSets.prototypeJS,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'swfobject/{version}/swfobject_src.': ResourceSets.swfobject,
            'underscore.js/{version}/underscore.': ResourceSets.underscore,
            'underscore.js/{version}/underscore-min.': ResourceSets.underscore,
            'webfont/{version}/webfont.': ResourceSets.webfont,
            'webfont/{version}/webfont_debug.': ResourceSets.webfont
        }
    },
    // Baidu CDN [Deprecated]
    'libs.baidu.com': {
        '/': {
            'backbone/{version}/backbone.': ResourceSets.backbone,
            'backbone/{version}/backbone-min.': ResourceSets.backbone,
            'dojo/{version}/dojo.': ResourceSets.dojo,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jqueryui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jqueryui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'moment/{version}/moment.': ResourceSets.moment,
            'mootools/{version}/mootools-yui-compressed.': ResourceSets.mootools,
            'prototype/{version}/prototype.': ResourceSets.prototypeJS,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'underscore/{version}/underscore.': ResourceSets.underscore,
            'underscore/{version}/underscore-min.': ResourceSets.underscore,
            'webfont/{version}/webfont.': ResourceSets.webfont,
            'webfont/{version}/webfont_debug.': ResourceSets.webfont
        }
    },
    // Sina Public Resources
    'lib.sinaapp.com': {
        '/js/': {
            'angular.js/angular-{version}/angular.': ResourceSets.angular,
            'backbone/{version}/backbone.': ResourceSets.backbone,
            'dojo/{version}/dojo.': ResourceSets.dojo,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'ext-core/{version}/ext-core-debug.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jquery-ui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jquery-ui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'mootools/{version}/mootools.': ResourceSets.mootools,
            'prototype/{version}/prototype.': ResourceSets.prototypeJS,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'underscore/{version}/underscore.': ResourceSets.underscore,
            'underscore/{version}/underscore-min.': ResourceSets.underscore,
            'webfont/{version}/webfont.': ResourceSets.webfont,
            'webfont/{version}/webfont_debug.': ResourceSets.webfont
        }
    },
    // UpYun Library
    'upcdn.b0.upaiyun.com': {
        '/libs/': {
            'dojo/dojo-{version}.': ResourceSets.dojo,
            'emberjs/emberjs-{version}.': ResourceSets.ember,
            'jquery/jquery-{version}.': ResourceSets.jQuery,
            'jqueryui/jquery.ui-{version}.js': ResourceSets.jQueryUI,
            'jqueryui/jquery.ui-{version}.min.js': ResourceSets.jQueryUI,
            'modernizr/modernizr-{version}.': ResourceSets.modernizr,
            'mootoolscore/mootools.core-{version}.': ResourceSets.mootools
        }
    },
    // BootCDN
    'cdn.bootcss.com': {
        '/': {
            'angular.js/{version}/angular.': ResourceSets.angular,
            'backbone.js/{version}/backbone.': ResourceSets.backbone,
            'backbone.js/{version}/backbone-min.': ResourceSets.backbone,
            'dojo/{version}/dojo.': ResourceSets.dojo,
            'ember.js/{version}/ember.': ResourceSets.ember,
            'ext-core/{version}/ext-core.': ResourceSets.extCore,
            'jquery/{version}/jquery.': ResourceSets.jQuery,
            'jqueryui/{version}/jquery-ui.js': ResourceSets.jQueryUI,
            'jqueryui/{version}/jquery-ui.min.js': ResourceSets.jQueryUI,
            'modernizr/{version}/modernizr.': ResourceSets.modernizr,
            'moment.js/{version}/moment.': ResourceSets.moment,
            'mootools/{version}/mootools-yui-compressed.': ResourceSets.mootools,
            'prototype/{version}/prototype.': ResourceSets.prototypeJS,
            'scriptaculous/{version}/scriptaculous.': ResourceSets.scriptaculous,
            'swfobject/{version}/swfobject.': ResourceSets.swfobject,
            'underscore.js/{version}/underscore.': ResourceSets.underscore,
            'underscore.js/{version}/underscore-min.': ResourceSets.underscore,
            'webfont/{version}/webfontloader.': ResourceSets.webfont
        }
    }
};

/**
 * Initializations
 */

// Geekzu Public Service [Mirror]
mappings['sdn.geekzu.org'] = {
    '/ajax/ajax/libs/': mappings['ajax.googleapis.com']['/ajax/libs/']
};

// USTC Linux User Group [Mirror]
mappings['ajax.proxy.ustclug.org'] = mappings['ajax.googleapis.com'];

/**
 * Exports
 */

export default mappings;
