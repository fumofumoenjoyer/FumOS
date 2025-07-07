/**
 * Global Constants
 * Belongs to Decentraleyes.
 *
 * @author      Thomas Rientjes
 * @since       2017-10-27
 * @license     MPL 2.0
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * Public Constants
 */

const Address = {
    'ANY': '*://*/*',
    'ANY_PATH': '/*',
    'ANY_PROTOCOL': '*://',
    'CHROME': 'chrome:',
    'DECENTRALEYES': 'decentraleyes.org',
    'EXAMPLE': 'example.org',
    'HTTP': 'http:',
    'HTTPS': 'https:',
    'WWW_PREFIX': 'www.'
};

const Environment = {
    'STABLE': 'stable',
    'STAGING': 'staging'
};

const Header = {
    'COOKIE': 'Cookie',
    'ORIGIN': 'Origin',
    'REFERER': 'Referer'
};

const MessageResponse = {
    'ASYNCHRONOUS': true,
    'SYNCHRONOUS': false
};

const Resource = {
    'MAPPING_EXPRESSION': /\.map$/i,
    'VERSION_EXPRESSION': /(?:\d{1,2}\.){1,3}\d{1,2}/,
    'VERSION_PLACEHOLDER': '{version}'
};

const SessionItem = {
    'TAB_CONTEXTS': 'tabContexts'
};

const TabContext = {
    'IDENTIFIER': 'identifier',
    'INJECTIONS': 'injections',
    'URL': 'url'
};

const Setting = {
    'BLOCK_MISSING': 'blockMissing',
    'DISABLE_PREFETCH': 'disablePrefetch',
    'ENFORCE_STAGING': 'enforceStaging',
    'SHOW_ICON_BADGE': 'showIconBadge',
    'SHOW_RELEASE_NOTES': 'showReleaseNotes',
    'STRIP_METADATA': 'stripMetadata',
    'WHITELISTED_DOMAINS': 'whitelistedDomains',
    'XHR_TEST_DOMAIN': 'xhrTestDomain'
};

const ComputedSetting = {
    'ENVIRONMENT_NAME': 'environmentName'
};

const Statistic = {
    'AMOUNT_INJECTED': 'amountInjected',
    'AMOUNT_SANITIZED': 'amountSanitized',
    'AMOUNT_BLOCKED': 'amountBlocked'
};

const WebRequest = {
    'GET': 'GET',
    'BLOCKING': 'blocking',
    'HEADERS': 'requestHeaders',
    'MAIN_FRAME_ID': 0
};

const WebRequestType = {
    'MAIN_FRAME': 'main_frame',
    'XHR': 'xmlhttprequest'
};

/**
 * Exports
 */

export default {
    Address,
    Environment,
    Header,
    MessageResponse,
    Resource,
    SessionItem,
    TabContext,
    Setting,
    ComputedSetting,
    Statistic,
    WebRequest,
    WebRequestType
};
