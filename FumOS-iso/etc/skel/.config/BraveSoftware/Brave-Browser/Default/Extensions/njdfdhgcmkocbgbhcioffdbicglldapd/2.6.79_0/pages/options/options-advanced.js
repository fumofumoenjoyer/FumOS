/**
 * Options Page (Advanced)
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
 * Options (Advanced)
 */

let optionsAdvanced = {};


/**
 * Private Methods
 */

//
optionsAdvanced._renderAdvancedSection = function (optionValue) {
    if (optionValue === true) {
        document.getElementById('div-domains-allowlist-google-fonts').style.display = 'block';
    } else {
        document.getElementById('div-domains-allowlist-google-fonts').style.display = 'none';
    }
};

optionsAdvanced._renderHtmlFilterSection = function (optionValue) {
    if (optionValue === true) {
        document.getElementById('html-filter-domains-title-include').style.display = 'none';
        document.getElementById('html-filter-domains-title-exclude').style.display = 'block';
    } else {
        document.getElementById('html-filter-domains-title-include').style.display = 'block';
        document.getElementById('html-filter-domains-title-exclude').style.display = 'none';
    }
};

optionsAdvanced.preSelectBlockGoogleFonts = function (value) {
    if (value) {
        document.getElementById('div-domains-allowlist-google-fonts').style.display = 'block';
    } else {
        document.getElementById('div-domains-allowlist-google-fonts').style.display = 'none';
    }
};

optionsAdvanced.init = function (opt) {
    let blockMissing, blockGoogleFonts, allowedDomainsGoogleFonts, logging, domainsManipulateDOM,
        negateHtmlFilterList, changeBadgeColorMissingResources;

    if (BrowserType.CHROMIUM) {
        document.getElementById('html-filter-div').style.display = 'none';
        document.getElementById('block-google-fonts').style.display = 'none';
    }

    document.getElementById('last-mapping-update').textContent += ` ${mappings.lastMappingUpdate}`;

    blockMissing = options.getOptionElement(Setting.BLOCK_MISSING);
    blockMissing.addEventListener('change', options.onOptionChanged);
    blockMissing.checked = opt[Setting.BLOCK_MISSING];

    blockGoogleFonts = options.getOptionElement(Setting.BLOCK_GOOGLE_FONTS);
    blockGoogleFonts.addEventListener('change', options.onOptionChanged);
    blockGoogleFonts.checked = opt[Setting.BLOCK_GOOGLE_FONTS];
    optionsAdvanced.preSelectBlockGoogleFonts(blockGoogleFonts.checked);

    allowedDomainsGoogleFonts = options.getOptionElement(Setting.ALLOWED_DOMAINS_GOOGLE_FONTS);
    allowedDomainsGoogleFonts.addEventListener('keyup', options.onOptionChanged);
    allowedDomainsGoogleFonts.value = opt[Setting.ALLOWED_DOMAINS_GOOGLE_FONTS];

    logging = options.getOptionElement(Setting.LOGGING);
    logging.addEventListener('change', options.onOptionChanged);
    logging.checked = opt[Setting.LOGGING];

    domainsManipulateDOM = options.getOptionElement(Setting.DOMAINS_MANIPULATE_DOM);
    domainsManipulateDOM.addEventListener('keyup', options.onOptionChanged);
    domainsManipulateDOM.value = opt[Setting.DOMAINS_MANIPULATE_DOM];

    negateHtmlFilterList = options.getOptionElement(Setting.NEGATE_HTML_FILTER_LIST);
    negateHtmlFilterList.addEventListener('change', options.onOptionChanged);
    negateHtmlFilterList.checked = opt[Setting.NEGATE_HTML_FILTER_LIST];
    if (opt[Setting.NEGATE_HTML_FILTER_LIST] === false) {
        document.getElementById('html-filter-domains-title-include').style.display = 'block';
        document.getElementById('html-filter-domains-title-exclude').style.display = 'none';
    }

    changeBadgeColorMissingResources = options.getOptionElement(Setting.CHANGE_BADGE_COLOR_MISSING_RESOURCES);
    changeBadgeColorMissingResources.addEventListener('change', options.onOptionChanged);
    changeBadgeColorMissingResources.checked = opt[Setting.CHANGE_BADGE_COLOR_MISSING_RESOURCES];

    document.getElementById('generate-ublock-rules').addEventListener('change', ruleGenerator.openRuleSet);
    document.getElementById('generate-umatrix-rules').addEventListener('change', ruleGenerator.openRuleSet);
    document.getElementById('generate-adguard-rules').addEventListener('change', ruleGenerator.openRuleSet);
    document.getElementById('generate-noscript-rules').addEventListener('change', ruleGenerator.openRuleSet);
    document.getElementById('button-copy-rule-set').addEventListener('click', ruleGenerator.copyRuleSet);
    document.getElementById('negate-html-filter-list-warning').addEventListener('click', function () { options._onLinkClick(Links.CODEBERG_HTML_FILTER); });
};
