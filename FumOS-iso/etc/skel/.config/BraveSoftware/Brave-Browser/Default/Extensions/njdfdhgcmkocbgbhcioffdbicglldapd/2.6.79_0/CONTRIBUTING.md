# Contribution

The following is a set of guidelines for contributing to LocalCDN.

Pull requests via codeberg are the best way to contribute, and are always welcome. Pull requests are an easy way to add frameworks and update resources. Feel free to suggest changes to this or any other document in a pull request as well.

Please note the two-branch structure of this extension. The "develop" branch is where the next release is being produced, while "main" holds the current release. Target all pull requests to the develop branch.

I would be happy if you would implement one of the requested features. These feature requests have the label PR welcome, see [here](https://codeberg.org/nobody/LocalCDN/issues?q=&labels=74391).

## Content
* [Guidelines](#guidelines)
* [Add new resources](#add-new-resources)
  * [Add simple resources](#add-simple-resources)
  * [Add bundled resources](#add-bundled-resources)
  * [Special cases](#special-cases)
* [Add new mapping](#add-new-mapping)
* [Update Resource](#update-resource)
* [New CDNs](#new-cdns)
  * [CDN as a mirror](#cdn-as-a-mirror)
  * [CDN](#add-new-cdn)
* [Testing](#testing)
  * [Firefox](#firefox)
  * [Chrome](#chrome)
* [Translating](#translating)

## Guidelines

The following are guidelines for making changes.

### What frameworks and files to use

* If possible please always use the minified version (`*.min.js` or `*.min.css`)
* File extension of the JavaScript resources must be changed from `*.min.js` to `*.min.jsm`
* For fonts only `*.woff` and `*.woff2` are necessary
* Do not bundle large frameworks, as extensions can only be up to a limited size
* Please do not add beta or any other test or pre-release. This is not allowed by Mozilla.

### File placement

Follow the CDN structure (Primary CDN: `cdnjs.cloudflare.com`)

  ```
  [name]/[version]/[subdirectory]/[filename]
   or
  [name]/[version]/[filename]
  ```

  **Examples:**

  ```
  https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js
                                                ↑            ↑    ↑      ↑   
  /resources/                            twitter-bootstrap/4.6.0/js/bootstrap.min.jsm
  ```
  ```
  https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css
                                                ↑            ↑    ↑      ↑   
  /resources/                            twitter-bootstrap/4.6.0/css/bootstrap.min.css
  ```
  ```
  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
                                           ↑      ↑       ↑
  /resources/                            jquery/3.6.0/jquery.min.jsm
  ```

### Style guide

  Code formatting is mostly a matter of faith. Your code will probably work anyway, but readable code is very valuable. Regardless of what formatting is used, it is important that this is identical throughout the project. Therefore, please use the files located in the root directory for ESLint.

## Adding new resources

### Difference between 'Simple' and 'Bundle'

If you want to add multiple related files (more than 1x JavaScript and 1x Stylesheet), then integrate it as a bundle. This is easier than specifying all the files individually.

#### Add simple resources

> Example: `hls.js`
>
> Link: `https://cdnjs.com/libraries/hls.js/0.14.17`
>
> CDN: `https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.14.17/hls.min.js`


##### 1. Download file (and rename if necessary) to: `/resources/hls.js/0.14.17/hls.min.jsm`

Please note the file extensions. Only JavaScript files must be renamed to `*.jsm`. There is no need to rename `*.css`, `*.woff` and `*.woff2` files.

##### 2. Create resource in [`/core/resources.js`](https://codeberg.org/nobody/LocalCDN/src/commit/ad79ed13d5fee5e4892084d05d7a68e9d7c9f1aa/core/resources.js#L381-L384)

:warning: `{version}` is a placeholder and will be filled automatically by LocalCDN.

```javascript
var resources = {
   [...]
   // hls.js
   'hlsJS': {
      'path': 'resources/hls.js/{version}/hls.min.jsm'
   },
   [...]
};
```

##### 3. Specify name in [`/modules/internal/targets.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/modules/internal/targets.js#L717)

```javascript
const ListOfFiles = {
   [...]
   'hls.min.jsm': 'hls.js',
   [...]
};
```

##### 4. Specify version in [`/modules/internal/targets.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/modules/internal/targets.js#L276-L277)

```javascript
targets.setLastVersion = function (type, version) {
   [...]
   } else if (type.startsWith('/hls.js/')) {
      return '0.14.17';
   }
   [...]
};
```

##### 5. Create mapping in [`/core/mappings.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/core/mappings.js#L489)

:warning: `{version}` is a placeholder and will be filled automatically by LocalCDN.

```javascript
mappings.cdn = {
   [...]
   // jsDelivr (Cloudflare)
   'cdn.jsdelivr.net': {
      '/npm/': {
         [...]
         'hls.js@{version}': resources.hlsJS,
         [...]
      }
   }
   [...]
};
```

##### 6. Run [`/audit/audit.sh`](https://codeberg.org/nobody/LocalCDN/src/branch/main/audit) (modify if necessary)
```
bash ./audit.sh -trd hls.js
```

#### Add bundled resources

> Example: `highlight.js`
>
> Link: `https://cdnjs.com/libraries/highlight.js/10.7.1`
>
> CDN: `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/`

##### 1. Download all files to one directory: `/resources/highlight.js/10.7.1/`

Please note the file extensions. Only JavaScript files must be renamed to `*.jsm`. There is no need to rename `*.css`, `*.woff` and `*.woff2` files.

##### 2. Create resource in [`/core/resources.js`](https://codeberg.org/nobody/LocalCDN/src/commit/ad79ed13d5fee5e4892084d05d7a68e9d7c9f1aa/core/resources.js#L373-L376)

:warning: `{version}` is a placeholder and will be filled automatically by LocalCDN.

```javascript
var resources = {
   [...]
   // highlight.js (Bundle)
   'highlightJS': {
      'path': 'resources/highlight.js/{version}/'
   },
   [...]
};
```

##### 3. Specify bundle in [`/modules/internal/targets.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/modules/internal/targets.js#L40-L41)

```javascript
targets.determineBundle = function (path) {
   [...]
   } else if (path.startsWith('/highlight.js/')) {
      val = 'highlight.js';
   }
   [...]
};
```

##### 4. Specify version in [`/modules/internal/targets.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/modules/internal/targets.js#L264-L265)

```javascript
targets.setLastVersion = function (type, version) {
   [...]
   } else if (type.startsWith('/highlight.js/10.')) {
      return '10.7.1';
   }
   [...]
};
```

##### 5. Create mapping in [`/core/mappings.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/core/mappings.js#L280)

:warning: `{version}` is a placeholder and will be filled automatically by LocalCDN.

```javascript
mappings.cdn = {
   [...]
   // CDNJS (Cloudflare)
   'cdnjs.cloudflare.com': {
      '/ajax/libs/': {
         [...]
         'highlight.js/{version}/': resources.highlightJS,
         [...]
      }
   }
   [...]
};
```

##### 6. Run [`/audit/audit.sh`](https://codeberg.org/nobody/LocalCDN/src/branch/main/audit) (modify if necessary)
```
bash ./audit.sh -trd highlight.js
```

#### Special cases

Sometimes it's necessary to define the mapping in [`/core/shorthands.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/core/shorthands.js). Mostly I do this when regular expressions are necessary.

A good example is **Google Material Icons**. These icons are fetched from the same domain as the regular fonts. So we have to use regular expressions to check all requests if the term `Material Icons` is present. The current regular expression is in [`/core/constants.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/core/constants.js#L203)

```javascript
const Regex = {
      [...]
      'GOOGLE_MATERIAL_ICONS': /fonts\.googleapis\.com\/(icon|css)\?family=.*Material\+Icons/,
      [...]
};
```
Usage in [`/core/shorthands.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/core/shorthands.js#L57-L64)
```javascript
shorthands.specialFiles = function (channelHost, channelPath, searchString) {
[...]
   } else if (Regex.GOOGLE_MATERIAL_ICONS.test(channelHost + channelPath + searchString)) {
      lastVersion = targets.setLastVersion('/google-material-design-icons/');
      return {
         'source': channelHost,
         'versionDelivered': lastVersion,
         'path': 'resources/google-material-design-icons/google-material-design-icons.css',
         'bundle': ''
      };
   }
};
```

#### Examples:

* Bulma v0.9.2 https://codeberg.org/nobody/LocalCDN/commit/0e91652ae3cd6c2bd046301d3df047817e438a3b
* GSAP (Bundle) https://codeberg.org/nobody/LocalCDN/commit/c47b926d30b8c186e064624c69b8796b804c6b6f

## Add new mapping

Sometimes it is needed to add another mapping for an existing resource.  This happens when you find another CDN serving a resource, or the same CDN serving it in a different place. This is just a special case of adding a new resource: instead of doing all the steps listed, just do step five.

The example below uses Bluebird.js, and is taken from commit 949406a41e

##### Create mapping in [`/core/mappings.js`](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/core/mappings.js#L280)

:warning: `{version}` is a placeholder and will be filled automatically by LocalCDN.

```javascript
mappings.cdn = {
   [...]
    // jsDelivr (Cloudflare)
    'cdn.jsdelivr.net': {
        '/npm/': {
            [...]
            'bluebird/{version}/bluebird.': resources.bluebird,
            [...]
      }
   }
   [...]
};
```

## Update Resource

If you want to update an existing resource, please follow these steps:

> Example: `Chart.js`
>
> Link: `https://cdnjs.com/libraries/Chart.js/3.0.1`
>
> CDN: `https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.0.1/chart.min.js`

##### 1. Create directory `/resources/Chart.js/3.0.1/`

##### 2. Download file and rename it.

The filename is not relevant, so I'll modify it to match the previous version. In this example, the filename has changed from `Chart.bundle.min.js` to `chart.min.js`. To keep code changes minimal, I just rename the file and leave a [note](https://codeberg.org/nobody/LocalCDN/src/commit/dfd53999855c604b48f9b24c60949d65eeb273fd/resources/Chart.js/3.0.1/note) in the directory.

##### 3. Declare version

Here it is important to distinguish whether an upgrade is possible and whether the framework is backward compatible. In this example there are some breaking changes from v2.x to v3.x, so in the `targets.js` file the following entry has been added:

```javascript
targets.setLastVersion = function (type, version) {
   [...]
   } else if (type.startsWith('/Chart.js/2.')) {
      return '2.9.4';
   } else if (type.startsWith('/Chart.js/3.')) {
      return '3.0.1';
   }
   [...]
};
```

If the simple version comparison is not enough, there is an helper method that compares two version numbers. You can see how to use it [here](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/modules/internal/targets.js#L288-L293)

```javascript
} else if (type.startsWith('/jquery/1.')) {
   if (helpers.compareVersion('1.7.1', version)) return '1.7.1'; // <= v1.7.1
   else if (helpers.compareVersion('1.8.3', version)) return '1.8.3'; // > 1.7.1 to <= 1.8.3
   else if (helpers.compareVersion('1.11.2', version)) return '1.11.2'; // > 1.8.3 to <= 1.11.2
   else if (version === '1.11.3') return '1.11.3'; // = 1.11.3
   else return '1.12.4'; // > 1.11.3
}
```
##### 4. Run [`/audit/audit.sh`](https://codeberg.org/nobody/LocalCDN/src/branch/main/audit) (modify if necessary)
```
bash ./audit.sh -trd hls.js
```

#### Examples:
* Chart.js https://codeberg.org/nobody/LocalCDN/commit/dfd53999855c604b48f9b24c60949d65eeb273fd
* d3 v6.6.0 to v6.6.1 https://codeberg.org/nobody/LocalCDN/commit/8d79a24652ff024036bb2851fc0a6793f88e142f

## New CDNs

If you want to add a new CDN, check the structure and what frameworks are available. Please change [this date](https://codeberg.org/nobody/LocalCDN/src/commit/d2506369ab5e7cf24633899a8887b1ae48840d75/core/mappings.js#L29-L33) afterwards:

```javascript
mappings.lastMappingUpdate = '2021-02-10';
```
:warning: Please note that the date only needs to be changed when a new CDN is added. This does not affect subdirectories.

### CDN as a mirror

If one CDN is just a mirror of another, then it is very easy to add this CDN.

**Example:**
```javascript
mappings.cdn['unpkg.com'] = {
    '/': mappings.cdn['cdn.jsdelivr.net']['/npm/']
};
```

In this case all resources of UNPKG are identical with jsDelivr. The only difference is that these resources are not located in the subdirectory `npm`, but directly in the root directory.

### Add new CDN

If you want to add a normal CDN, the structure is `[domain]/[subdirectory(s)]/[version]/[filename]`.

:warning: `{version}` is a placeholder and will be filled automatically by LocalCDN.

```javascript
mappings.cdn = {
   [...]
   // Example
   'cdn.example.com': {
      '/libs/': {
         'jquery/{version}/jquery.': resources.jQuery
   }
   [...]
};
```

The complete URL for this resource is `cdn.example.com/libs/jquery/3.6.0/jquery.min.js`.

## Testing

New contributions should be tested, to ensure that they actually work as intended.  Further, investigating what is blocked and what is not, to determine future contributions, is best done through this technique.

For either browser, first download the code (either via a `git clone` command or through the 'download' button on codeberg), and save it to a local folder.

### Firefox

The easiest way to test your resource or CDN is to include the extension as a temporary extension. Please use a different user profile (`about:profiles`) for this, because your previous settings will be deleted when you remove the temporary extension.  Note that `about:profiles` and friends are literal URL's that should be entered into the address bar.

* start Firefox and create a new profile with `about:profiles`
* start the new Firefox profile and open `about:debugging`
* click `This Firefox` and `Load Temporary Add-on...`
* select `manifest.json` from the folder where you saved the extension

After that open the website that needs this resource and check the network connections with the key F12 or via the menu:
1. Web Developer sub-menu
2. Web Developer Tools
3. Network Tab

If there are no requests to the CDN, then LocalCDN is working correctly.

You can also call the original address of the resource directly, e.g. `https://code.jquery.com/jquery-2.2.4.js`. If everything is configured correctly, the browser will redirect you. An address like this should be in the address bar: `moz-extension://UUID/resources/jquery/2.2.4/jquery.min.jsm` (The UUID is a unique ID, see [Extensions and the add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/))

### Chrome

The Chrome testing process is slightly distinct from that of Firefox.

* Start chrome, and create a new profile by clicking on the user icon in the top right corner.
* Navigate to `chrome://extensions`
* Enable the Developer Mode in the top right of the page
* Select 'load unpacked'
* Select the folder with the downloaded extension

After that, open the Web Developer menu by right clicking and selecting "Inspect Element", or by pressing control-shift-I.  The other steps are identical to Firefox's.

## Translating

LocalCDN is being translated into many languages.  If you would like to help with this effort, please do so via Weblate.  The project for this extension is located [here](https://hosted.weblate.org/projects/localcdn/localcdn/).  Please use Weblate and do not submit direct pull requests whenever possible.
