/*
 *  /MathJax/latest.js
 *
 *  Copyright (c) 2009-2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/*
 * @author      nobody
 * @since       2022-11-04
 *
 * This file was modified:
 * - Obfuscation reverted with www.dcode.fr
 * - getLatestMathJax defused and call the loadDefaultMathJax() method directly.
 */

(function() {
    function Error(text) {
        if (console && console.log) {
            console.log(text);
        }
    }

    function getScript() {
        if (document.currentScript) {
            return document.currentScript;
        }
        var scriptsIncluded = document.getElementsByTagName("script");
        var i = 0;
        var patchLen = scriptsIncluded.length;
        for (; i < patchLen; i++) {
            var script = scriptsIncluded[i];
            var cdn;
            for (cdn in CDN) {
                if (CDN.hasOwnProperty(cdn)) {
                    var url = CDN[cdn].mathjax;
                    if (script.src && script.src.substr(0, url.length) === url) {
                        return script;
                    }
                }
            }
        }
    }

    function getCDN(script) {
        if (!script) {
            return;
        }
        var cdn = script.src.replace(/https:\/\//, "").replace(/[\/\?].*/, "");
        return CDN[cdn];
    }

    function getURLParameter() {
        var pathmatches;
        try {
            pathmatches = valExpr.exec(document.cookie);
        } catch (r) {}
        if (pathmatches && pathmatches[1] !== "") {
            return pathmatches[1];
        }
    }

    // function setVersion(value) {
    //     cookie = "mjx.latest=" + value;
    //     var d = new Date;
    //     d.setDate(d.getDate() + 7);
    //     cookie = cookie + ("; expires=" + d.toGMTString());
    //     cookie = cookie + "; path=/";
    //     try {
    //         document.cookie = cookie;
    //     } catch (r) {}
    // }

    // function getXMLHttpRequest() {
    //     if (window.XMLHttpRequest) {
    //         return new XMLHttpRequest;
    //     }
    //     if (window.ActiveXObject) {
    //         try {
    //             return new ActiveXObject("Msxml2.XMLHTTP");
    //         } catch (q) {}
    //         try {
    //             return new ActiveXObject("Microsoft.XMLHTTP");
    //         } catch (q) {}
    //     }
    // }

    function loadMathJax(url) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = url;
        var el_head = document.head || document.getElementsByTagName("head")[0] || document.body;
        if (el_head) {
            el_head.appendChild(script);
        } else {
            Error("Can't find the document <head> element");
        }
    }

    function loadDefaultMathJax() {
        var script = getScript();
        if (script) {
            loadMathJax(script.src.replace(/\/latest\.js/, "/MathJax.js"));
        } else {
            Error("Can't determine the URL for loading MathJax");
        }
    }

    function getLatestMathJax(cdn, config, unpacked) {
        // var request = getXMLHttpRequest();
        // if (request) {
        //  request.onreadystatechange = function() {
        //      if (request.readyState === 4) {
        //          if (request.status === 200) {
        //              var json = JSON.parse(request.responseText);
        //              if (json instanceof Array) {
        //                  json = json[0];
        //              }
        //              var value = json[cdn.version];
        //              if (value.substr(0, 2) === "2.") {
        //                  setVersion(value);
        //                  loadMathJax(cdn.mathjax + json[cdn.version] + unpacked + "/MathJax.js" + config);
        //                  return;
        //              }
        //          } else {
        //              Error("Problem acquiring MathJax version: status = " + request.status);
        //          }
        //          loadDefaultMathJax();
        //      }
        //  };
        //  request.open("GET", cdn.api, true);
        //  request.send(null);
        // } else {
        //  Error("Can't create XMLHttpRequest object");
        //  loadDefaultMathJax();
        // }
        loadDefaultMathJax();
    }

    var CDN = {
        "cdnjs.cloudflare.com": {
            api: "https://api.cdnjs.com/libraries/mathjax?fields=version",
            version: "version",
            mathjax: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/"
        },
        "cdn.rawgit.com": {
            api: "https://api.github.com/repos/mathjax/mathjax/releases/latest",
            version: "tag_name",
            mathjax: "https://cdn.rawgit.com/mathjax/MathJax/"
        },
        "cdn.jsdelivr.net": {
            api: "https://api.jsdelivr.com/v1/jsdelivr/libraries?name=mathjax&lastversion=*",
            version: "lastversion",
            mathjax: "https://cdn.jsdelivr.net/mathjax/"
        }
    };

    var valExpr = /(?:^|;\s*)mjx\.latest=([^;]*)(?:;|$)/;
    var script = getScript();
    var cdn = getCDN(script);

    if (cdn) {
        var config = script.src.replace(/.*?(\?|$)/, "$1");
        config = config + ((config ? "&" : "?") + "latest");
        var unpacked = script.src.match(/\/unpacked\/latest\.js/) ? "/unpacked" : "";
        var version = getURLParameter();
        if (version) {
            loadMathJax(cdn.mathjax + version + unpacked + "/MathJax.js" + config);
        } else {
            getLatestMathJax(cdn, config, unpacked);
        }
    } else {
        loadDefaultMathJax();
    }
})();
