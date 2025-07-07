/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 19565:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 70526:
/***/ (function() {

(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/'use strict';var n=window.Document.prototype.createElement,p=window.Document.prototype.createElementNS,aa=window.Document.prototype.importNode,ba=window.Document.prototype.prepend,ca=window.Document.prototype.append,da=window.DocumentFragment.prototype.prepend,ea=window.DocumentFragment.prototype.append,q=window.Node.prototype.cloneNode,r=window.Node.prototype.appendChild,t=window.Node.prototype.insertBefore,u=window.Node.prototype.removeChild,v=window.Node.prototype.replaceChild,w=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),y=window.Element.prototype.attachShadow,z=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),A=window.Element.prototype.getAttribute,B=window.Element.prototype.setAttribute,C=window.Element.prototype.removeAttribute,D=window.Element.prototype.toggleAttribute,E=window.Element.prototype.getAttributeNS,F=window.Element.prototype.setAttributeNS,G=window.Element.prototype.removeAttributeNS,H=window.Element.prototype.insertAdjacentElement,fa=window.Element.prototype.insertAdjacentHTML,ha=window.Element.prototype.prepend,ia=window.Element.prototype.append,ja=window.Element.prototype.before,ka=window.Element.prototype.after,la=window.Element.prototype.replaceWith,ma=window.Element.prototype.remove,na=window.HTMLElement,I=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),oa=window.HTMLElement.prototype.insertAdjacentElement,pa=window.HTMLElement.prototype.insertAdjacentHTML;var qa=new Set();"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a){return qa.add(a);});function ra(a){var b=qa.has(a);a=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);return!b&&a;}var sa=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function J(a){var b=a.isConnected;if(void 0!==b)return b;if(sa(a))return!0;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document));}function K(a){var b=a.children;if(b)return Array.prototype.slice.call(b);b=[];for(a=a.firstChild;a;a=a.nextSibling)a.nodeType===Node.ELEMENT_NODE&&b.push(a);return b;}function L(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null;}function M(a,b,d){for(var f=a;f;){if(f.nodeType===Node.ELEMENT_NODE){var c=f;b(c);var e=c.localName;if("link"===e&&"import"===c.getAttribute("rel")){f=c.import;void 0===d&&(d=new Set());if(f instanceof Node&&!d.has(f))for(d.add(f),f=f.firstChild;f;f=f.nextSibling)M(f,b,d);f=L(a,c);continue;}else if("template"===e){f=L(a,c);continue;}if(c=c.__CE_shadowRoot)for(c=c.firstChild;c;c=c.nextSibling)M(c,b,d);}f=f.firstChild?f.firstChild:L(a,f);}};function N(){var a=!(null===O||void 0===O||!O.noDocumentConstructionObserver),b=!(null===O||void 0===O||!O.shadyDomFastWalk);this.m=[];this.g=[];this.j=!1;this.shadyDomFastWalk=b;this.I=!a;}function P(a,b,d,f){var c=window.ShadyDOM;if(a.shadyDomFastWalk&&c&&c.inUse){if(b.nodeType===Node.ELEMENT_NODE&&d(b),b.querySelectorAll)for(a=c.nativeMethods.querySelectorAll.call(b,"*"),b=0;b<a.length;b++)d(a[b]);}else M(b,d,f);}function ta(a,b){a.j=!0;a.m.push(b);}function ua(a,b){a.j=!0;a.g.push(b);}function Q(a,b){a.j&&P(a,b,function(d){return R(a,d);});}function R(a,b){if(a.j&&!b.__CE_patched){b.__CE_patched=!0;for(var d=0;d<a.m.length;d++)a.m[d](b);for(d=0;d<a.g.length;d++)a.g[d](b);}}function S(a,b){var d=[];P(a,b,function(c){return d.push(c);});for(b=0;b<d.length;b++){var f=d[b];1===f.__CE_state?a.connectedCallback(f):T(a,f);}}function U(a,b){var d=[];P(a,b,function(c){return d.push(c);});for(b=0;b<d.length;b++){var f=d[b];1===f.__CE_state&&a.disconnectedCallback(f);}}function V(a,b,d){d=void 0===d?{}:d;var f=d.J,c=d.upgrade||function(g){return T(a,g);},e=[];P(a,b,function(g){a.j&&R(a,g);if("link"===g.localName&&"import"===g.getAttribute("rel")){var h=g.import;h instanceof Node&&(h.__CE_isImportDocument=!0,h.__CE_registry=document.__CE_registry);h&&"complete"===h.readyState?h.__CE_documentLoadHandled=!0:g.addEventListener("load",function(){var k=g.import;if(!k.__CE_documentLoadHandled){k.__CE_documentLoadHandled=!0;var l=new Set();f&&(f.forEach(function(m){return l.add(m);}),l.delete(k));V(a,k,{J:l,upgrade:c});}});}else e.push(g);},f);for(b=0;b<e.length;b++)c(e[b]);}function T(a,b){try{var d=b.ownerDocument,f=d.__CE_registry;var c=f&&(d.defaultView||d.__CE_isImportDocument)?W(f,b.localName):void 0;if(c&&void 0===b.__CE_state){c.constructionStack.push(b);try{try{if(new c.constructorFunction()!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop();}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback&&b.hasAttributes()){var e=c.observedAttributes;for(c=0;c<e.length;c++){var g=e[c],h=b.getAttribute(g);null!==h&&a.attributeChangedCallback(b,g,null,h,null);}}J(b)&&a.connectedCallback(b);}}catch(k){X(k);}}N.prototype.connectedCallback=function(a){var b=a.__CE_definition;if(b.connectedCallback)try{b.connectedCallback.call(a);}catch(d){X(d);}};N.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;if(b.disconnectedCallback)try{b.disconnectedCallback.call(a);}catch(d){X(d);}};N.prototype.attributeChangedCallback=function(a,b,d,f,c){var e=a.__CE_definition;if(e.attributeChangedCallback&&-1<e.observedAttributes.indexOf(b))try{e.attributeChangedCallback.call(a,b,d,f,c);}catch(g){X(g);}};function va(a,b,d,f){var c=b.__CE_registry;if(c&&(null===f||"http://www.w3.org/1999/xhtml"===f)&&(c=W(c,d)))try{var e=new c.constructorFunction();if(void 0===e.__CE_state||void 0===e.__CE_definition)throw Error("Failed to construct '"+d+"': The returned value was not constructed with the HTMLElement constructor.");if("http://www.w3.org/1999/xhtml"!==e.namespaceURI)throw Error("Failed to construct '"+d+"': The constructed element's namespace must be the HTML namespace.");if(e.hasAttributes())throw Error("Failed to construct '"+d+"': The constructed element must not have any attributes.");if(null!==e.firstChild)throw Error("Failed to construct '"+d+"': The constructed element must not have any children.");if(null!==e.parentNode)throw Error("Failed to construct '"+d+"': The constructed element must not have a parent node.");if(e.ownerDocument!==b)throw Error("Failed to construct '"+d+"': The constructed element's owner document is incorrect.");if(e.localName!==d)throw Error("Failed to construct '"+d+"': The constructed element's local name is incorrect.");return e;}catch(g){return X(g),b=null===f?n.call(b,d):p.call(b,f,d),Object.setPrototypeOf(b,HTMLUnknownElement.prototype),b.__CE_state=2,b.__CE_definition=void 0,R(a,b),b;}b=null===f?n.call(b,d):p.call(b,f,d);R(a,b);return b;}function X(a){var b="",d="",f=0,c=0;a instanceof Error?(b=a.message,d=a.sourceURL||a.fileName||"",f=a.line||a.lineNumber||0,c=a.column||a.columnNumber||0):b="Uncaught "+String(a);var e=void 0;void 0===ErrorEvent.prototype.initErrorEvent?e=new ErrorEvent("error",{cancelable:!0,message:b,filename:d,lineno:f,colno:c,error:a}):(e=document.createEvent("ErrorEvent"),e.initErrorEvent("error",!1,!0,b,d,f),e.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0;}});});void 0===e.error&&Object.defineProperty(e,"error",{configurable:!0,enumerable:!0,get:function(){return a;}});window.dispatchEvent(e);e.defaultPrevented||console.error(a);};function wa(){var a=this;this.g=void 0;this.F=new Promise(function(b){a.l=b;});}wa.prototype.resolve=function(a){if(this.g)throw Error("Already resolved.");this.g=a;this.l(a);};function xa(a){var b=document;this.l=void 0;this.h=a;this.g=b;V(this.h,this.g);"loading"===this.g.readyState&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}));}function ya(a){a.l&&a.l.disconnect();}xa.prototype.G=function(a){var b=this.g.readyState;"interactive"!==b&&"complete"!==b||ya(this);for(b=0;b<a.length;b++)for(var d=a[b].addedNodes,f=0;f<d.length;f++)V(this.h,d[f]);};function Y(a){this.s=new Map();this.u=new Map();this.C=new Map();this.A=!1;this.B=new Map();this.o=function(b){return b();};this.i=!1;this.v=[];this.h=a;this.D=a.I?new xa(a):void 0;}Y.prototype.H=function(a,b){var d=this;if(!(b instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");za(this,a);this.s.set(a,b);this.v.push(a);this.i||(this.i=!0,this.o(function(){return Aa(d);}));};Y.prototype.define=function(a,b){var d=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");za(this,a);Ba(this,a,b);this.v.push(a);this.i||(this.i=!0,this.o(function(){return Aa(d);}));};function za(a,b){if(!ra(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(W(a,b))throw Error("A custom element with name '"+(b+"' has already been defined."));if(a.A)throw Error("A custom element is already being defined.");}function Ba(a,b,d){a.A=!0;var f;try{var c=d.prototype;if(!(c instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var e=function(m){var x=c[m];if(void 0!==x&&!(x instanceof Function))throw Error("The '"+m+"' callback must be a function.");return x;};var g=e("connectedCallback");var h=e("disconnectedCallback");var k=e("adoptedCallback");var l=(f=e("attributeChangedCallback"))&&d.observedAttributes||[];}catch(m){throw m;}finally{a.A=!1;}d={localName:b,constructorFunction:d,connectedCallback:g,disconnectedCallback:h,adoptedCallback:k,attributeChangedCallback:f,observedAttributes:l,constructionStack:[]};a.u.set(b,d);a.C.set(d.constructorFunction,d);return d;}Y.prototype.upgrade=function(a){V(this.h,a);};function Aa(a){if(!1!==a.i){a.i=!1;for(var b=[],d=a.v,f=new Map(),c=0;c<d.length;c++)f.set(d[c],[]);V(a.h,document,{upgrade:function(k){if(void 0===k.__CE_state){var l=k.localName,m=f.get(l);m?m.push(k):a.u.has(l)&&b.push(k);}}});for(c=0;c<b.length;c++)T(a.h,b[c]);for(c=0;c<d.length;c++){for(var e=d[c],g=f.get(e),h=0;h<g.length;h++)T(a.h,g[h]);(e=a.B.get(e))&&e.resolve(void 0);}d.length=0;}}Y.prototype.get=function(a){if(a=W(this,a))return a.constructorFunction;};Y.prototype.whenDefined=function(a){if(!ra(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.B.get(a);if(b)return b.F;b=new wa();this.B.set(a,b);var d=this.u.has(a)||this.s.has(a);a=-1===this.v.indexOf(a);d&&a&&b.resolve(void 0);return b.F;};Y.prototype.polyfillWrapFlushCallback=function(a){this.D&&ya(this.D);var b=this.o;this.o=function(d){return a(function(){return b(d);});};};function W(a,b){var d=a.u.get(b);if(d)return d;if(d=a.s.get(b)){a.s.delete(b);try{return Ba(a,b,d());}catch(f){X(f);}}}Y.prototype.define=Y.prototype.define;Y.prototype.upgrade=Y.prototype.upgrade;Y.prototype.get=Y.prototype.get;Y.prototype.whenDefined=Y.prototype.whenDefined;Y.prototype.polyfillDefineLazy=Y.prototype.H;Y.prototype.polyfillWrapFlushCallback=Y.prototype.polyfillWrapFlushCallback;function Z(a,b,d){function f(c){return function(e){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];h=[];for(var k=[],l=0;l<g.length;l++){var m=g[l];m instanceof Element&&J(m)&&k.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)h.push(m);else h.push(m);}c.apply(this,g);for(g=0;g<k.length;g++)U(a,k[g]);if(J(this))for(g=0;g<h.length;g++)k=h[g],k instanceof Element&&S(a,k);};}void 0!==d.prepend&&(b.prepend=f(d.prepend));void 0!==d.append&&(b.append=f(d.append));};function Ca(a){Document.prototype.createElement=function(b){return va(a,this,b,null);};Document.prototype.importNode=function(b,d){b=aa.call(this,b,!!d);this.__CE_registry?V(a,b):Q(a,b);return b;};Document.prototype.createElementNS=function(b,d){return va(a,this,d,b);};Z(a,Document.prototype,{prepend:ba,append:ca});};function Da(a){function b(f){return function(c){for(var e=[],g=0;g<arguments.length;++g)e[g]=arguments[g];g=[];for(var h=[],k=0;k<e.length;k++){var l=e[k];l instanceof Element&&J(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)g.push(l);else g.push(l);}f.apply(this,e);for(e=0;e<h.length;e++)U(a,h[e]);if(J(this))for(e=0;e<g.length;e++)h=g[e],h instanceof Element&&S(a,h);};}var d=Element.prototype;void 0!==ja&&(d.before=b(ja));void 0!==ka&&(d.after=b(ka));void 0!==la&&(d.replaceWith=function(f){for(var c=[],e=0;e<arguments.length;++e)c[e]=arguments[e];e=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&J(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)e.push(k);else e.push(k);}h=J(this);la.apply(this,c);for(c=0;c<g.length;c++)U(a,g[c]);if(h)for(U(a,this),c=0;c<e.length;c++)g=e[c],g instanceof Element&&S(a,g);});void 0!==ma&&(d.remove=function(){var f=J(this);ma.call(this);f&&U(a,this);});};function Ea(a){function b(c,e){Object.defineProperty(c,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(g){var h=this,k=void 0;J(this)&&(k=[],P(a,this,function(x){x!==h&&k.push(x);}));e.set.call(this,g);if(k)for(var l=0;l<k.length;l++){var m=k[l];1===m.__CE_state&&a.disconnectedCallback(m);}this.ownerDocument.__CE_registry?V(a,this):Q(a,this);return g;}});}function d(c,e){c.insertAdjacentElement=function(g,h){var k=J(h);g=e.call(this,g,h);k&&U(a,h);J(g)&&S(a,h);return g;};}function f(c,e){function g(h,k){for(var l=[];h!==k;h=h.nextSibling)l.push(h);for(k=0;k<l.length;k++)V(a,l[k]);}c.insertAdjacentHTML=function(h,k){h=h.toLowerCase();if("beforebegin"===h){var l=this.previousSibling;e.call(this,h,k);g(l||this.parentNode.firstChild,this);}else if("afterbegin"===h)l=this.firstChild,e.call(this,h,k),g(this.firstChild,l);else if("beforeend"===h)l=this.lastChild,e.call(this,h,k),g(l||this.firstChild,null);else if("afterend"===h)l=this.nextSibling,e.call(this,h,k),g(this.nextSibling,l);else throw new SyntaxError("The value provided ("+String(h)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");};}y&&(Element.prototype.attachShadow=function(c){c=y.call(this,c);if(a.j&&!c.__CE_patched){c.__CE_patched=!0;for(var e=0;e<a.m.length;e++)a.m[e](c);}return this.__CE_shadowRoot=c;});z&&z.get?b(Element.prototype,z):I&&I.get?b(HTMLElement.prototype,I):ua(a,function(c){b(c,{enumerable:!0,configurable:!0,get:function(){return q.call(this,!0).innerHTML;},set:function(e){var g="template"===this.localName,h=g?this.content:this,k=p.call(document,this.namespaceURI,this.localName);for(k.innerHTML=e;0<h.childNodes.length;)u.call(h,h.childNodes[0]);for(e=g?k.content:k;0<e.childNodes.length;)r.call(h,e.childNodes[0]);}});});Element.prototype.setAttribute=function(c,e){if(1!==this.__CE_state)return B.call(this,c,e);var g=A.call(this,c);B.call(this,c,e);e=A.call(this,c);a.attributeChangedCallback(this,c,g,e,null);};Element.prototype.setAttributeNS=function(c,e,g){if(1!==this.__CE_state)return F.call(this,c,e,g);var h=E.call(this,c,e);F.call(this,c,e,g);g=E.call(this,c,e);a.attributeChangedCallback(this,e,h,g,c);};Element.prototype.removeAttribute=function(c){if(1!==this.__CE_state)return C.call(this,c);var e=A.call(this,c);C.call(this,c);null!==e&&a.attributeChangedCallback(this,c,e,null,null);};D&&(Element.prototype.toggleAttribute=function(c,e){if(1!==this.__CE_state)return D.call(this,c,e);var g=A.call(this,c),h=null!==g;e=D.call(this,c,e);h!==e&&a.attributeChangedCallback(this,c,g,e?"":null,null);return e;});Element.prototype.removeAttributeNS=function(c,e){if(1!==this.__CE_state)return G.call(this,c,e);var g=E.call(this,c,e);G.call(this,c,e);var h=E.call(this,c,e);g!==h&&a.attributeChangedCallback(this,e,g,h,c);};oa?d(HTMLElement.prototype,oa):H&&d(Element.prototype,H);pa?f(HTMLElement.prototype,pa):fa&&f(Element.prototype,fa);Z(a,Element.prototype,{prepend:ha,append:ia});Da(a);};var Fa={};function Ga(a){function b(){var d=this.constructor;var f=document.__CE_registry.C.get(d);if(!f)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var c=f.constructionStack;if(0===c.length)return c=n.call(document,f.localName),Object.setPrototypeOf(c,d.prototype),c.__CE_state=1,c.__CE_definition=f,R(a,c),c;var e=c.length-1,g=c[e];if(g===Fa)throw Error("Failed to construct '"+f.localName+"': This element was already constructed.");c[e]=Fa;Object.setPrototypeOf(g,d.prototype);R(a,g);return g;}b.prototype=na.prototype;Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});window.HTMLElement=b;};function Ha(a){function b(d,f){Object.defineProperty(d,"textContent",{enumerable:f.enumerable,configurable:!0,get:f.get,set:function(c){if(this.nodeType===Node.TEXT_NODE)f.set.call(this,c);else{var e=void 0;if(this.firstChild){var g=this.childNodes,h=g.length;if(0<h&&J(this)){e=Array(h);for(var k=0;k<h;k++)e[k]=g[k];}}f.set.call(this,c);if(e)for(c=0;c<e.length;c++)U(a,e[c]);}}});}Node.prototype.insertBefore=function(d,f){if(d instanceof DocumentFragment){var c=K(d);d=t.call(this,d,f);if(J(this))for(f=0;f<c.length;f++)S(a,c[f]);return d;}c=d instanceof Element&&J(d);f=t.call(this,d,f);c&&U(a,d);J(this)&&S(a,d);return f;};Node.prototype.appendChild=function(d){if(d instanceof DocumentFragment){var f=K(d);d=r.call(this,d);if(J(this))for(var c=0;c<f.length;c++)S(a,f[c]);return d;}f=d instanceof Element&&J(d);c=r.call(this,d);f&&U(a,d);J(this)&&S(a,d);return c;};Node.prototype.cloneNode=function(d){d=q.call(this,!!d);this.ownerDocument.__CE_registry?V(a,d):Q(a,d);return d;};Node.prototype.removeChild=function(d){var f=d instanceof Element&&J(d),c=u.call(this,d);f&&U(a,d);return c;};Node.prototype.replaceChild=function(d,f){if(d instanceof DocumentFragment){var c=K(d);d=v.call(this,d,f);if(J(this))for(U(a,f),f=0;f<c.length;f++)S(a,c[f]);return d;}c=d instanceof Element&&J(d);var e=v.call(this,d,f),g=J(this);g&&U(a,f);c&&U(a,d);g&&S(a,d);return e;};w&&w.get?b(Node.prototype,w):ta(a,function(d){b(d,{enumerable:!0,configurable:!0,get:function(){for(var f=[],c=this.firstChild;c;c=c.nextSibling)c.nodeType!==Node.COMMENT_NODE&&f.push(c.textContent);return f.join("");},set:function(f){for(;this.firstChild;)u.call(this,this.firstChild);null!=f&&""!==f&&r.call(this,document.createTextNode(f));}});});};var O=window.customElements;function Ia(){var a=new N();Ga(a);Ca(a);Z(a,DocumentFragment.prototype,{prepend:da,append:ea});Ha(a);Ea(a);window.CustomElementRegistry=Y;a=new Y(a);document.__CE_registry=a;Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:a});}O&&!O.forcePolyfill&&"function"==typeof O.define&&"function"==typeof O.get||Ia();window.__CE_installPolyfill=Ia;}).call(self);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";

;// ./src/autofill/enums/autofill-overlay.enum.ts
const AutofillOverlayElement = {
    Button: "autofill-inline-menu-button",
    List: "autofill-inline-menu-list",
};
const AutofillOverlayPort = {
    Button: "autofill-inline-menu-button-port",
    ButtonMessageConnector: "autofill-inline-menu-button-message-connector",
    List: "autofill-inline-menu-list-port",
    ListMessageConnector: "autofill-inline-menu-list-message-connector",
};
const RedirectFocusDirection = {
    Current: "current",
    Previous: "previous",
    Next: "next",
};
const InlineMenuFillTypes = {
    AccountCreationUsername: 5,
    PasswordGeneration: 6,
    CurrentPasswordUpdate: 7,
};
const InlineMenuAccountCreationFieldType = {
    Text: "text",
    Email: "email",
    Password: "password",
    Totp: "totp",
};
const MAX_SUB_FRAME_DEPTH = 8;

// EXTERNAL MODULE: ../../node_modules/@webcomponents/custom-elements/custom-elements.min.js
var custom_elements_min = __webpack_require__(70526);
;// ../../node_modules/lit/polyfill-support.js
!function(i){"function"==typeof define&&define.amd?define(i):i();}(function(){"use strict";/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var i,n,o="__scoped";null!==(i=globalThis.reactiveElementPolyfillSupport)&&void 0!==i||(globalThis.reactiveElementPolyfillSupport=function(i){var n=i.ReactiveElement;if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){var t=n.prototype;window.ShadyDOM&&window.ShadyDOM.inUse&&!0===window.ShadyDOM.noPatch&&window.ShadyDOM.patchElementProto(t);var d=t.createRenderRoot;t.createRenderRoot=function(){var i,n,t,w=this.localName;if(window.ShadyCSS.nativeShadow)return d.call(this);if(!this.constructor.hasOwnProperty(o)){this.constructor[o]=!0;var v=this.constructor.elementStyles.map(function(i){return i instanceof CSSStyleSheet?Array.from(i.cssRules).reduce(function(i,n){return i+n.cssText;},""):i.cssText;});null===(n=null===(i=window.ShadyCSS)||void 0===i?void 0:i.ScopingShim)||void 0===n||n.prepareAdoptedCssText(v,w),void 0===this.constructor._$AJ&&window.ShadyCSS.prepareTemplateStyles(document.createElement("template"),w);}return null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);};var w=t.connectedCallback;t.connectedCallback=function(){w.call(this),this.hasUpdated&&window.ShadyCSS.styleElement(this);};var v=t._$AE;t._$AE=function(i){this.hasUpdated||window.ShadyCSS.styleElement(this),v.call(this,i);};}});var t,d=new Set(),w=new Map();null!==(n=globalThis.litHtmlPolyfillSupport)&&void 0!==n||(globalThis.litHtmlPolyfillSupport=function(i,n){if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){var o=function(i){return void 0!==i&&!d.has(i);},t=function(i){var n=w.get(i);return void 0===n&&w.set(i,n=[]),n;},v=new Map(),l=i.createElement;i.createElement=function(n,d){var w=l.call(i,n,d),v=null==d?void 0:d.scope;if(void 0!==v&&(window.ShadyCSS.nativeShadow||window.ShadyCSS.prepareTemplateDom(w,v),o(v))){var r=t(v),u=w.content.querySelectorAll("style");r.push.apply(r,Array.from(u).map(function(i){var n;return null===(n=i.parentNode)||void 0===n||n.removeChild(i),i.textContent;}));}return w;};var r=document.createDocumentFragment(),u=document.createComment(""),s=n.prototype,e=s._$AI;s._$AI=function(i,n){var v,l;void 0===n&&(n=this);var s=this._$AA.parentNode,a=null===(v=this.options)||void 0===v?void 0:v.scope;if(s instanceof ShadowRoot&&o(a)){var h=this._$AA,f=this._$AB;r.appendChild(u),this._$AA=u,this._$AB=null,e.call(this,i,n);var c=(null==i?void 0:i._$litType$)?this._$AH._$AD.el:document.createElement("template");if(function(i,n){var o,v=t(i),l=0!==v.length;l&&((o=document.createElement("style")).textContent=v.join("\n"),n.content.appendChild(o)),d.add(i),w.delete(i),window.ShadyCSS.prepareTemplateStyles(n,i),l&&window.ShadyCSS.nativeShadow&&null!==(o=n.content.querySelector("style"))&&n.content.appendChild(o);}(a,c),r.removeChild(u),null===(l=window.ShadyCSS)||void 0===l?void 0:l.nativeShadow){var y=c.content.querySelector("style");null!==y&&r.appendChild(y.cloneNode(!0));}s.insertBefore(r,f),this._$AA=h,this._$AB=f;}else e.call(this,i,n);},s._$AC=function(n){var o,t=null===(o=this.options)||void 0===o?void 0:o.scope,d=v.get(t);void 0===d&&v.set(t,d=new Map());var w=d.get(n.strings);return void 0===w&&d.set(n.strings,w=new i(n,this.options)),w;};}}),null!==(t=globalThis.litElementPolyfillSupport)&&void 0!==t||(globalThis.litElementPolyfillSupport=function(i){var n=i.LitElement;if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){n._$AJ=!0;var o=n.prototype,t=o.createRenderRoot;o.createRenderRoot=function(){return this.renderOptions.scope=this.localName,t.call(this);};}});});
;// ../../libs/common/src/auth/enums/authentication-status.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var AuthenticationStatus;
(function (AuthenticationStatus) {
    AuthenticationStatus[AuthenticationStatus["LoggedOut"] = 0] = "LoggedOut";
    AuthenticationStatus[AuthenticationStatus["Locked"] = 1] = "Locked";
    AuthenticationStatus[AuthenticationStatus["Unlocked"] = 2] = "Unlocked";
})(AuthenticationStatus || (AuthenticationStatus = {}));

;// ../../libs/common/src/autofill/constants/match-patterns.ts
const CardExpiryDateDelimiters = ["/", "-", ".", " "];
// `CardExpiryDateDelimiters` is not intended solely for regex consumption,
// so we need to format it here
const ExpiryDateDelimitersPattern = "\\" +
    CardExpiryDateDelimiters.join("\\")
        // replace space character with the regex whitespace character class
        .replace(" ", "s");
const MonthPattern = "(([1]{1}[0-2]{1})|(0?[1-9]{1}))";
// Because we're dealing with expiry dates, we assume the year will be in current or next century (as of 2024)
const ExpiryFullYearPattern = "2[0-1]{1}\\d{2}";
const DelimiterPatternExpression = new RegExp(`[${ExpiryDateDelimitersPattern}]`, "g");
const IrrelevantExpiryCharactersPatternExpression = new RegExp(
// "nor digits" to ensure numbers are removed from guidance pattern, which aren't covered by ^\w
`[^\\d${ExpiryDateDelimitersPattern}]`, "g");
const MonthPatternExpression = new RegExp(`^${MonthPattern}$`);
const ExpiryFullYearPatternExpression = new RegExp(`^${ExpiryFullYearPattern}$`);

;// ../../libs/common/src/autofill/constants/index.ts
const TYPE_CHECK = {
    FUNCTION: "function",
    NUMBER: "number",
    STRING: "string",
};
const EVENTS = {
    CHANGE: "change",
    INPUT: "input",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    KEYUP: "keyup",
    BLUR: "blur",
    CLICK: "click",
    FOCUS: "focus",
    FOCUSIN: "focusin",
    FOCUSOUT: "focusout",
    SCROLL: "scroll",
    RESIZE: "resize",
    DOMCONTENTLOADED: "DOMContentLoaded",
    LOAD: "load",
    MESSAGE: "message",
    VISIBILITYCHANGE: "visibilitychange",
    MOUSEENTER: "mouseenter",
    MOUSELEAVE: "mouseleave",
    MOUSEUP: "mouseup",
    MOUSEOUT: "mouseout",
    SUBMIT: "submit",
};
const ClearClipboardDelay = {
    Never: null,
    TenSeconds: 10,
    TwentySeconds: 20,
    ThirtySeconds: 30,
    OneMinute: 60,
    TwoMinutes: 120,
    FiveMinutes: 300,
};
/* Ids for context menu items and messaging events */
const AUTOFILL_CARD_ID = "autofill-card";
const AUTOFILL_ID = "autofill";
const SHOW_AUTOFILL_BUTTON = "show-autofill-button";
const AUTOFILL_IDENTITY_ID = "autofill-identity";
const COPY_IDENTIFIER_ID = "copy-identifier";
const COPY_PASSWORD_ID = "copy-password";
const COPY_USERNAME_ID = "copy-username";
const COPY_VERIFICATION_CODE_ID = "copy-totp";
const CREATE_CARD_ID = "create-card";
const CREATE_IDENTITY_ID = "create-identity";
const CREATE_LOGIN_ID = "create-login";
const GENERATE_PASSWORD_ID = "generate-password";
const NOOP_COMMAND_SUFFIX = "noop";
const ROOT_ID = "root";
const SEPARATOR_ID = "separator";
const UPDATE_PASSWORD = "update-password";
const NOTIFICATION_BAR_LIFESPAN_MS = 150000; // 150 seconds
const AUTOFILL_OVERLAY_HANDLE_REPOSITION = "autofill-overlay-handle-reposition-event";
const AUTOFILL_OVERLAY_HANDLE_SCROLL = "autofill-overlay-handle-scroll-event";
const UPDATE_PASSKEYS_HEADINGS_ON_SCROLL = "update-passkeys-headings-on-scroll";
const AUTOFILL_TRIGGER_FORM_FIELD_SUBMIT = "autofill-trigger-form-field-submit";
const AutofillOverlayVisibility = {
    Off: 0,
    OnButtonClick: 1,
    OnFieldFocus: 2,
};
const BrowserClientVendors = {
    Chrome: "Chrome",
    Opera: "Opera",
    Edge: "Edge",
    Vivaldi: "Vivaldi",
    Unknown: "Unknown",
};
const BrowserShortcutsUris = {
    Chrome: "chrome://extensions/shortcuts",
    Opera: "opera://extensions/shortcuts",
    Edge: "edge://extensions/shortcuts",
    Vivaldi: "vivaldi://extensions/shortcuts",
    Unknown: "https://bitwarden.com/help/keyboard-shortcuts",
};
const DisablePasswordManagerUris = {
    Chrome: "chrome://settings/autofill",
    Opera: "opera://settings/autofill",
    Edge: "edge://settings/passwords",
    Vivaldi: "vivaldi://settings/autofill",
    Unknown: "https://bitwarden.com/help/disable-browser-autofill/",
};
const ExtensionCommand = {
    AutofillCommand: "autofill_cmd",
    AutofillCard: "autofill_card",
    AutofillIdentity: "autofill_identity",
    AutofillLogin: "autofill_login",
    OpenAutofillOverlay: "open_autofill_overlay",
    GeneratePassword: "generate_password",
    OpenPopup: "open_popup",
    LockVault: "lock_vault",
    NoopCommand: "noop",
};
const CLEAR_NOTIFICATION_LOGIN_DATA_DURATION = (/* unused pure expression or super */ null && (60 * 1000)); // 1 minute
const MAX_DEEP_QUERY_RECURSION_DEPTH = 4;


;// ./src/autofill/enums/autofill-port.enum.ts
const autofill_port_enum_AutofillPort = {
    InjectedScript: "autofill-injected-script-port",
};


;// ./src/autofill/utils/index.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Generates a random string of characters.
 *
 * @param length - The length of the random string to generate.
 */
function generateRandomChars(length) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const randomChars = [];
    const randomBytes = new Uint8Array(length);
    globalThis.crypto.getRandomValues(randomBytes);
    for (let byteIndex = 0; byteIndex < randomBytes.length; byteIndex++) {
        const byte = randomBytes[byteIndex];
        randomChars.push(chars[byte % chars.length]);
    }
    return randomChars.join("");
}
/**
 * Polyfills the requestIdleCallback API with a setTimeout fallback.
 *
 * @param callback - The callback function to run when the browser is idle.
 * @param options - The options to pass to the requestIdleCallback function.
 */
function requestIdleCallbackPolyfill(callback, options) {
    if ("requestIdleCallback" in globalThis) {
        return globalThis.requestIdleCallback(() => callback(), options);
    }
    const timeoutDelay = (options === null || options === void 0 ? void 0 : options.timeout) || 1;
    return globalThis.setTimeout(() => callback(), timeoutDelay);
}
/**
 * Polyfills the cancelIdleCallback API with a clearTimeout fallback.
 *
 * @param id - The ID of the idle callback to cancel.
 */
function cancelIdleCallbackPolyfill(id) {
    if ("cancelIdleCallback" in globalThis) {
        return globalThis.cancelIdleCallback(id);
    }
    return globalThis.clearTimeout(id);
}
/**
 * Generates a random string of characters that formatted as a custom element name.
 */
function generateRandomCustomElementName() {
    const length = Math.floor(Math.random() * 5) + 8; // Between 8 and 12 characters
    const numHyphens = Math.min(Math.max(Math.floor(Math.random() * 4), 1), length - 1); // At least 1, maximum of 3 hyphens
    const hyphenIndices = [];
    while (hyphenIndices.length < numHyphens) {
        const index = Math.floor(Math.random() * (length - 1)) + 1;
        if (!hyphenIndices.includes(index)) {
            hyphenIndices.push(index);
        }
    }
    hyphenIndices.sort((a, b) => a - b);
    let randomString = "";
    let prevIndex = 0;
    for (let index = 0; index < hyphenIndices.length; index++) {
        const hyphenIndex = hyphenIndices[index];
        randomString = randomString + generateRandomChars(hyphenIndex - prevIndex) + "-";
        prevIndex = hyphenIndex;
    }
    randomString += generateRandomChars(length - prevIndex);
    return randomString;
}
/**
 * Builds a DOM element from an SVG string.
 *
 * @param svgString - The SVG string to build the DOM element from.
 * @param ariaHidden - Determines whether the SVG should be hidden from screen readers.
 */
function buildSvgDomElement(svgString, ariaHidden = true) {
    const domParser = new DOMParser();
    const svgDom = domParser.parseFromString(svgString, "image/svg+xml");
    const domElement = svgDom.documentElement;
    domElement.setAttribute("aria-hidden", `${ariaHidden}`);
    return domElement;
}
/**
 * Sends a message to the extension.
 *
 * @param command - The command to send.
 * @param options - The options to send with the command.
 */
function sendExtensionMessage(command_1) {
    return __awaiter(this, arguments, void 0, function* (command, options = {}) {
        if (typeof browser !== "undefined" &&
            typeof browser.runtime !== "undefined" &&
            typeof browser.runtime.sendMessage !== "undefined") {
            return browser.runtime.sendMessage(Object.assign({ command }, options));
        }
        return new Promise((resolve) => chrome.runtime.sendMessage(Object.assign({ command }, options), (response) => {
            if (chrome.runtime.lastError) {
                resolve(null);
            }
            resolve(response);
        }));
    });
}
/**
 * Sets CSS styles on an element.
 *
 * @param element - The element to set the styles on.
 * @param styles - The styles to set on the element.
 * @param priority - Determines whether the styles should be set as important.
 */
function setElementStyles(element, styles, priority) {
    if (!element || !styles || !Object.keys(styles).length) {
        return;
    }
    for (const styleProperty in styles) {
        element.style.setProperty(styleProperty.replace(/([a-z])([A-Z])/g, "$1-$2"), // Convert camelCase to kebab-case
        styles[styleProperty], priority ? "important" : undefined);
    }
}
/**
 * Sets up a long-lived connection with the extension background
 * and triggers an onDisconnect event if the extension context
 * is invalidated.
 *
 * @param callback - Callback export function to run when the extension disconnects
 */
function setupExtensionDisconnectAction(callback) {
    const port = chrome.runtime.connect({ name: AutofillPort.InjectedScript });
    const onDisconnectCallback = (disconnectedPort) => {
        callback(disconnectedPort);
        port.onDisconnect.removeListener(onDisconnectCallback);
    };
    port.onDisconnect.addListener(onDisconnectCallback);
}
/**
 * Handles setup of the extension disconnect action for the autofill init class
 * in both instances where the overlay might or might not be initialized.
 *
 * @param windowContext - The global window context
 */
function setupAutofillInitDisconnectAction(windowContext) {
    if (!windowContext.bitwardenAutofillInit) {
        return;
    }
    const onDisconnectCallback = () => {
        windowContext.bitwardenAutofillInit.destroy();
        delete windowContext.bitwardenAutofillInit;
    };
    setupExtensionDisconnectAction(onDisconnectCallback);
}
/**
 * Identifies whether an element is a fillable form field.
 * This is determined by whether the element is a form field and not a span.
 *
 * @param formFieldElement - The form field element to check.
 */
function elementIsFillableFormField(formFieldElement) {
    return !elementIsSpanElement(formFieldElement);
}
/**
 * Identifies whether an element is an instance of a specific tag name.
 *
 * @param element - The element to check.
 * @param tagName -  The tag name to check against.
 */
function elementIsInstanceOf(element, tagName) {
    return nodeIsElement(element) && element.tagName.toLowerCase() === tagName;
}
/**
 * Identifies whether an element is a span element.
 *
 * @param element - The element to check.
 */
function elementIsSpanElement(element) {
    return elementIsInstanceOf(element, "span");
}
/**
 * Identifies whether an element is an input field.
 *
 * @param element - The element to check.
 */
function elementIsInputElement(element) {
    return elementIsInstanceOf(element, "input");
}
/**
 * Identifies whether an element is a select field.
 *
 * @param element - The element to check.
 */
function elementIsSelectElement(element) {
    return elementIsInstanceOf(element, "select");
}
/**
 * Identifies whether an element is a textarea field.
 *
 * @param element - The element to check.
 */
function elementIsTextAreaElement(element) {
    return elementIsInstanceOf(element, "textarea");
}
/**
 * Identifies whether an element is a form element.
 *
 * @param element - The element to check.
 */
function elementIsFormElement(element) {
    return elementIsInstanceOf(element, "form");
}
/**
 * Identifies whether an element is a label element.
 *
 * @param element - The element to check.
 */
function elementIsLabelElement(element) {
    return elementIsInstanceOf(element, "label");
}
/**
 * Identifies whether an element is a description details `dd` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionDetailsElement(element) {
    return elementIsInstanceOf(element, "dd");
}
/**
 * Identifies whether an element is a description term `dt` element.
 *
 * @param element - The element to check.
 */
function elementIsDescriptionTermElement(element) {
    return elementIsInstanceOf(element, "dt");
}
/**
 * Identifies whether a node is an HTML element.
 *
 * @param node - The node to check.
 */
function nodeIsElement(node) {
    if (!node) {
        return false;
    }
    return (node === null || node === void 0 ? void 0 : node.nodeType) === Node.ELEMENT_NODE;
}
/**
 * Identifies whether a node is an input element.
 *
 * @param node - The node to check.
 */
function nodeIsInputElement(node) {
    return nodeIsElement(node) && elementIsInputElement(node);
}
/**
 * Identifies whether a node is a form element.
 *
 * @param node - The node to check.
 */
function nodeIsFormElement(node) {
    return nodeIsElement(node) && elementIsFormElement(node);
}
function nodeIsTypeSubmitElement(node) {
    return nodeIsElement(node) && getPropertyOrAttribute(node, "type") === "submit";
}
function nodeIsButtonElement(node) {
    return (nodeIsElement(node) &&
        (elementIsInstanceOf(node, "button") ||
            getPropertyOrAttribute(node, "type") === "button"));
}
function nodeIsAnchorElement(node) {
    return nodeIsElement(node) && elementIsInstanceOf(node, "a");
}
/**
 * Returns a boolean representing the attribute value of an element.
 *
 * @param element
 * @param attributeName
 * @param checkString
 */
function getAttributeBoolean(element, attributeName, checkString = false) {
    if (checkString) {
        return getPropertyOrAttribute(element, attributeName) === "true";
    }
    return Boolean(getPropertyOrAttribute(element, attributeName));
}
/**
 * Get the value of a property or attribute from a FormFieldElement.
 *
 * @param element
 * @param attributeName
 */
function getPropertyOrAttribute(element, attributeName) {
    if (attributeName in element) {
        return element[attributeName];
    }
    return element.getAttribute(attributeName);
}
/**
 * Throttles a callback function to run at most once every `limit` milliseconds.
 *
 * @param callback - The callback function to throttle.
 * @param limit - The time in milliseconds to throttle the callback.
 */
function throttle(callback, limit) {
    let waitingDelay = false;
    return function (...args) {
        if (!waitingDelay) {
            callback.apply(this, args);
            waitingDelay = true;
            globalThis.setTimeout(() => (waitingDelay = false), limit);
        }
    };
}
/**
 * Debounces a callback function to run after a delay of `delay` milliseconds.
 *
 * @param callback - The callback function to debounce.
 * @param delay - The time in milliseconds to debounce the callback.
 * @param immediate - Determines whether the callback should run immediately.
 */
function debounce(callback, delay, immediate) {
    let timeout;
    return function (...args) {
        const callImmediately = !!immediate && !timeout;
        if (timeout) {
            globalThis.clearTimeout(timeout);
        }
        timeout = globalThis.setTimeout(() => {
            timeout = null;
            if (!callImmediately) {
                callback.apply(this, args);
            }
        }, delay);
        if (callImmediately) {
            callback.apply(this, args);
        }
    };
}
/**
 * Gathers and normalizes keywords from a potential submit button element. Used
 * to verify if the element submits a login or change password form.
 *
 * @param element - The element to gather keywords from.
 */
function getSubmitButtonKeywordsSet(element) {
    const keywords = [
        element.textContent,
        element.getAttribute("type"),
        element.getAttribute("value"),
        element.getAttribute("aria-label"),
        element.getAttribute("aria-labelledby"),
        element.getAttribute("aria-describedby"),
        element.getAttribute("title"),
        element.getAttribute("id"),
        element.getAttribute("name"),
        element.getAttribute("class"),
    ];
    const keywordsSet = new Set();
    for (let i = 0; i < keywords.length; i++) {
        if (typeof keywords[i] === "string") {
            // Iterate over all keywords metadata and split them by non-letter characters.
            // This ensures we check against individual words and not the entire string.
            keywords[i]
                .toLowerCase()
                .replace(/[-\s]/g, "")
                .split(/[^\p{L}]+/gu)
                .forEach((keyword) => {
                if (keyword) {
                    keywordsSet.add(keyword);
                }
            });
        }
    }
    return keywordsSet;
}
/**
 * Generates the origin and subdomain match patterns for the URL.
 *
 * @param url - The URL of the tab
 */
function generateDomainMatchPatterns(url) {
    try {
        const extensionUrlPattern = /^(chrome|chrome-extension|moz-extension|safari-web-extension):\/\/\/?/;
        if (extensionUrlPattern.test(url)) {
            return [];
        }
        // Add protocol to URL if it is missing to allow for parsing the hostname correctly
        const urlPattern = /^(https?|file):\/\/\/?/;
        if (!urlPattern.test(url)) {
            url = `https://${url}`;
        }
        let protocolGlob = "*://";
        if (url.startsWith("file:///")) {
            protocolGlob = "*:///"; // File URLs require three slashes to be a valid match pattern
        }
        const parsedUrl = new URL(url);
        const originMatchPattern = `${protocolGlob}${parsedUrl.hostname}/*`;
        const splitHost = parsedUrl.hostname.split(".");
        const domain = splitHost.slice(-2).join(".");
        const subDomainMatchPattern = `${protocolGlob}*.${domain}/*`;
        return [originMatchPattern, subDomainMatchPattern];
    }
    catch (_a) {
        return [];
    }
}
/**
 * Determines if the status code of the web response is invalid. An invalid status code is
 * any status code that is not in the 200-299 range.
 *
 * @param statusCode - The status code of the web response
 */
function isInvalidResponseStatusCode(statusCode) {
    return statusCode < 200 || statusCode >= 300;
}
/**
 * Determines if the current context is within a sandboxed iframe.
 */
function currentlyInSandboxedIframe() {
    var _a;
    return (String(self.origin).toLowerCase() === "null" ||
        ((_a = globalThis.frameElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("sandbox")) ||
        globalThis.location.hostname === "");
}
/**
 * This object allows us to map a special character to a key name. The key name is used
 * in gathering the i18n translation of the written version of the special character.
 */
const specialCharacterToKeyMap = {
    " ": "spaceCharacterDescriptor",
    "~": "tildeCharacterDescriptor",
    "`": "backtickCharacterDescriptor",
    "!": "exclamationCharacterDescriptor",
    "@": "atSignCharacterDescriptor",
    "#": "hashSignCharacterDescriptor",
    $: "dollarSignCharacterDescriptor",
    "%": "percentSignCharacterDescriptor",
    "^": "caretCharacterDescriptor",
    "&": "ampersandCharacterDescriptor",
    "*": "asteriskCharacterDescriptor",
    "(": "parenLeftCharacterDescriptor",
    ")": "parenRightCharacterDescriptor",
    "-": "hyphenCharacterDescriptor",
    _: "underscoreCharacterDescriptor",
    "+": "plusCharacterDescriptor",
    "=": "equalsCharacterDescriptor",
    "{": "braceLeftCharacterDescriptor",
    "}": "braceRightCharacterDescriptor",
    "[": "bracketLeftCharacterDescriptor",
    "]": "bracketRightCharacterDescriptor",
    "|": "pipeCharacterDescriptor",
    "\\": "backSlashCharacterDescriptor",
    ":": "colonCharacterDescriptor",
    ";": "semicolonCharacterDescriptor",
    '"': "doubleQuoteCharacterDescriptor",
    "'": "singleQuoteCharacterDescriptor",
    "<": "lessThanCharacterDescriptor",
    ">": "greaterThanCharacterDescriptor",
    ",": "commaCharacterDescriptor",
    ".": "periodCharacterDescriptor",
    "?": "questionCharacterDescriptor",
    "/": "forwardSlashCharacterDescriptor",
};
/**
 * Determines if the current rect values are not all 0.
 */
function rectHasSize(rect) {
    if (rect.right > 0 && rect.left > 0 && rect.top > 0 && rect.bottom > 0) {
        return true;
    }
    return false;
}
/**
 * Checks if all the values corresponding to the specified keys in an object are null.
 * If no keys are specified, checks all keys in the object.
 *
 * @param obj - The object to check.
 * @param keys - An optional array of keys to check in the object. Defaults to all keys.
 * @returns Returns true if all values for the specified keys (or all keys if none are provided) are null; otherwise, false.
 */
function areKeyValuesNull(obj, keys) {
    const keysToCheck = keys && keys.length > 0 ? keys : Object.keys(obj);
    return keysToCheck.every((key) => obj[key] == null);
}
/**
 * Ensures string matches allowed color scheme, defaulting/overriding to "normal".
 * https://drafts.csswg.org/css-color-adjust-1/#color-scheme-meta
 */
function matchAllowedColorSchemes(content) {
    switch (content) {
        case "light dark":
        case "dark light":
        case "light":
        case "dark":
            // content must match one of these types.
            return content;
        default:
            return "normal";
    }
}

;// ./src/autofill/utils/svg-icons.ts
const logoIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/></svg>';
const logoLockedIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#a)"><path fill="#175DDC" d="M12.66.175A.566.566 0 0 0 12.25 0H1.75a.559.559 0 0 0-.409.175.561.561 0 0 0-.175.41v7c.002.532.105 1.06.305 1.554.189.488.444.948.756 1.368.322.42.682.81 1.076 1.163.365.335.75.649 1.152.939.35.248.718.483 1.103.706.385.222.656.372.815.45.16.08.29.141.386.182A.53.53 0 0 0 7 14a.509.509 0 0 0 .238-.055c.098-.043.225-.104.387-.182.162-.079.438-.23.816-.45.378-.222.75-.459 1.102-.707.403-.29.788-.604 1.154-.939a8.435 8.435 0 0 0 1.076-1.163c.312-.42.567-.88.757-1.367a4.19 4.19 0 0 0 .304-1.555v-7a.55.55 0 0 0-.174-.407Z"/><path fill="#fff" d="M7 12.365s4.306-2.18 4.306-4.717V1.5H7v10.865Z"/><circle cx="12.889" cy="12.889" r="4.889" fill="#F8F9FA"/><path fill="#555" d="M11.26 11.717h2.37v-.848c0-.313-.116-.58-.348-.8a1.17 1.17 0 0 0-.838-.332c-.327 0-.606.11-.838.332a1.066 1.066 0 0 0-.347.8v.848Zm3.851.424v2.546a.4.4 0 0 1-.13.3.44.44 0 0 1-.314.124h-4.445a.44.44 0 0 1-.315-.124.4.4 0 0 1-.13-.3V12.14a.4.4 0 0 1 .13-.3.44.44 0 0 1 .315-.124h.148v-.848c0-.542.204-1.008.612-1.397a2.044 2.044 0 0 1 1.462-.583c.568 0 1.056.194 1.463.583.408.39.611.855.611 1.397v.848h.149a.44.44 0 0 1 .315.124.4.4 0 0 1 .13.3Z"/></g><defs><clipPath id="a"><rect width="16" height="16" fill="#fff" rx="2"/></clipPath></defs></svg>';
const globeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-7.806 6.4c-.825 1.65-1.688 2.1-2.194 2.1-.507 0-1.369-.45-2.194-2.1-.704-1.407-1.2-3.384-1.291-5.65h6.97c-.09 2.266-.587 4.243-1.291 5.65Zm1.291-7.15h-6.97c.09-2.266.587-4.243 1.291-5.65.825-1.65 1.688-2.1 2.194-2.1.507 0 1.369.45 2.194 2.1.704 1.407 1.2 3.384 1.291 5.65Zm1.501 1.5c-.108 2.928-.847 5.505-1.946 7.19a8.507 8.507 0 0 0 5.427-7.19h-3.48Zm3.481-1.5h-3.48c-.11-2.928-.848-5.505-1.947-7.19a8.507 8.507 0 0 1 5.427 7.19Zm-13.453 0c.108-2.928.847-5.505 1.946-7.19a8.507 8.507 0 0 0-5.427 7.19h3.48Zm-3.481 1.5a8.507 8.507 0 0 0 5.427 7.19c-1.099-1.685-1.838-4.262-1.946-7.19H3.533Z" clip-rule="evenodd"/></svg>';
const creditCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" d="M5.75 14.656c0-.535.434-.969.969-.969H8.53a.969.969 0 1 1 0 1.938H6.72a.969.969 0 0 1-.969-.969ZM11.719 13.688a.969.969 0 1 0 0 1.937h3.062a.969.969 0 1 0 0-1.938H11.72Z"/><path fill="#1B2029" fill-rule="evenodd" d="M2 6.6A2.6 2.6 0 0 1 4.6 4h14.8A2.6 2.6 0 0 1 22 6.6v10.3a2.6 2.6 0 0 1-2.6 2.6H4.6A2.6 2.6 0 0 1 2 16.9V6.6Zm2.6-1.1h14.8a1.1 1.1 0 0 1 1.1 1.1v1.275h-17V6.6a1.1 1.1 0 0 1 1.1-1.1Zm15.9 4.958V16.9a1.1 1.1 0 0 1-1.1 1.1H4.6a1.1 1.1 0 0 1-1.1-1.1v-6.442h17Z" clip-rule="evenodd"/></svg>';
const idCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" d="M13.25 9.313c0-.518.42-.938.938-.938h3.124a.937.937 0 1 1 0 1.875h-3.125a.937.937 0 0 1-.937-.938Zm.938 2.188a.937.937 0 1 0 0 1.875h1.874a.938.938 0 0 0 0-1.875h-1.875ZM10.75 9.625a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0ZM12 14.442c0-.387-.08-.769-.238-1.126-.157-.357-.387-.681-.677-.954s-.635-.49-1.014-.638a3.294 3.294 0 0 0-2.392 0c-.379.148-.724.365-1.014.638-.29.273-.52.597-.677.954-.157.357-.238.74-.238 1.126 0 .446.362.808.809.808h4.632a.809.809 0 0 0 .809-.808Z"/><path fill="#1B2029" fill-rule="evenodd" d="M4.6 4A2.6 2.6 0 0 0 2 6.6v9.8A2.6 2.6 0 0 0 4.6 19h14.8a2.6 2.6 0 0 0 2.6-2.6V6.6A2.6 2.6 0 0 0 19.4 4H4.6Zm14.8 1.5H4.6a1.1 1.1 0 0 0-1.1 1.1v9.8a1.1 1.1 0 0 0 1.1 1.1h14.8a1.1 1.1 0 0 0 1.1-1.1V6.6a1.1 1.1 0 0 0-1.1-1.1Z" clip-rule="evenodd"/></svg>';
const lockIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#1B2029" d="M10 10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h2.5A.75.75 0 0 0 10 10Z"/><path fill="#1B2029" fill-rule="evenodd" d="M4 4a4 4 0 0 1 7.153-2.462.75.75 0 1 1-1.182.924A2.5 2.5 0 0 0 5.5 4v1H13a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4ZM3 6.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H3Z" clip-rule="evenodd"/></svg>';
const plusIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#1B2029" d="M8 1.006a.75.75 0 0 1 .75.75V7.25h5.517a.75.75 0 0 1 0 1.5H8.75v5.537a.75.75 0 0 1-1.5 0V8.75H1.746a.75.75 0 1 1 0-1.5H7.25V1.756a.75.75 0 0 1 .75-.75Z"/></svg>';
const viewCipherIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" d="M20 15.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v7A.75.75 0 0 1 7 11V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7a.75.75 0 0 1 0-1.5h7Z"/><path fill="#1B2029" d="M4 8.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 1.5 0V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.25a.75.75 0 0 1 0 1.5H4Z"/><path fill="#1B2029" d="M12 6.75c0 .414.336.75.75.75h2.69l-8.22 8.22a.75.75 0 1 0 1.06 1.06l8.22-8.22v2.69a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75Z"/></svg>';
const passkeyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#1B2029" fill-rule="evenodd" d="M11 3c0 1.026-.514 1.93-1.3 2.472a6.373 6.373 0 0 1 .465.143 5.899 5.899 0 0 1 1.86 1.054c.455.385.836.836 1.125 1.335a.75.75 0 1 1-1.3.75 3.583 3.583 0 0 0-.793-.94 4.4 4.4 0 0 0-1.66-.87 5.089 5.089 0 0 0-3.065.086 4.4 4.4 0 0 0-1.389.784c-.33.28-.596.598-.793.94a.75.75 0 0 1-1.3-.75c.289-.5.67-.95 1.124-1.335a5.899 5.899 0 0 1 1.861-1.054 6.363 6.363 0 0 1 .465-.143A3 3 0 1 1 11 3ZM8 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.83 14a3.001 3.001 0 1 1 0-2h4.582a.25.25 0 0 1 .156.055l.972.777a.56.56 0 0 1 .046.832L12.41 14.84a.547.547 0 0 1-.824-.059L11 14h-.25l-.6.8a.5.5 0 0 1-.8 0l-.6-.8h-.92ZM4.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd"/></svg>';
const circleCheckIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g fill="#1B2029" clip-path="url(#a)"><path d="M12.03 6.28a.75.75 0 0 0-1.06-1.06L6.75 9.44 5.03 7.72a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.75-4.75Z"/><path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>';
const spinnerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><g fill="#1B2029" clip-path="url(#a)"><path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM11.536 11.536a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12ZM9.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM0 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4.464 13.657a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.12ZM2.343 2.343a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.12-2.12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>';
const keyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><g fill="#1B2029" clip-path="url(#a)"><path d="M15.75 9.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/><path fill-rule="evenodd" d="M14.5 17a7.473 7.473 0 0 1-3.055-.648L10.75 17v1.5a1 1 0 0 1-1 1h-1.5V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707L7.32 11.68A7.5 7.5 0 1 1 14.5 17Zm-5.482-4.896-.261-.86a6 6 0 1 1 3.3 3.738l-.909-.406-1.898 1.772V18h-2.5v2.5H3.5v-2.879l5.518-5.517Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>';
const refreshIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#1B2029" fill-rule="evenodd" d="M3.052 10.777a.75.75 0 0 0 1.49.162c.393-3.61 3.514-6.443 7.329-6.443 2.737 0 5.12 1.46 6.39 3.62h-1.993a.75.75 0 0 0 0 1.5h3.981a.75.75 0 0 0 .75-.75V4.883a.75.75 0 1 0-1.5 0v2.38a8.897 8.897 0 0 0-7.628-4.267c-4.566 0-8.343 3.395-8.82 7.78Zm17.89 2.44a.75.75 0 0 0-1.49-.162c-.393 3.61-3.514 6.442-7.329 6.442a7.396 7.396 0 0 1-6.39-3.62h1.996a.75.75 0 0 0 0-1.5H3.747a.75.75 0 0 0-.75.75v3.983a.75.75 0 0 0 1.5 0v-2.376a8.897 8.897 0 0 0 7.626 4.263c4.566 0 8.343-3.395 8.82-7.78Zm-8.19-3.78a.75.75 0 0 0-1.5 0v1.594l-1.497-.49a.75.75 0 0 0-.467 1.425l1.51.494-.942 1.32a.75.75 0 1 0 1.22.871l.925-1.295.925 1.295a.75.75 0 1 0 1.22-.871l-.941-1.32 1.51-.494a.75.75 0 1 0-.467-1.426l-1.497.49V9.438Z" clip-rule="evenodd"/></svg>';

;// ./src/autofill/overlay/inline-menu/pages/shared/autofill-inline-menu-page-element.ts
var autofill_inline_menu_page_element_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


class AutofillInlineMenuPageElement extends HTMLElement {
    constructor() {
        super();
        /**
         * Handles window messages from the parent window.
         *
         * @param event - The window message event
         */
        this.handleWindowMessage = (event) => {
            if (!this.windowMessageHandlers) {
                return;
            }
            if (!this.messageOrigin) {
                this.messageOrigin = event.origin;
            }
            if (event.origin !== this.messageOrigin) {
                return;
            }
            const message = event === null || event === void 0 ? void 0 : event.data;
            const handler = this.windowMessageHandlers[message === null || message === void 0 ? void 0 : message.command];
            if (!handler) {
                return;
            }
            handler({ message });
        };
        /**
         * Handles the window blur event.
         */
        this.handleWindowBlurEvent = () => {
            this.postMessageToParent({ command: "autofillInlineMenuBlurred" });
        };
        /**
         * Handles the document keydown event. Facilitates redirecting the
         * user focus in the right direction out of the inline menu. Also facilitates
         * closing the inline menu when the user presses the Escape key.
         *
         * @param event - The document keydown event
         */
        this.handleDocumentKeyDownEvent = (event) => {
            const listenedForKeys = new Set(["Tab", "Escape", "ArrowUp", "ArrowDown"]);
            if (!listenedForKeys.has(event.code)) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            if (event.code === "Tab") {
                this.sendRedirectFocusOutMessage(event.shiftKey ? RedirectFocusDirection.Previous : RedirectFocusDirection.Next);
                return;
            }
            if (event.code === "Escape") {
                this.sendRedirectFocusOutMessage(RedirectFocusDirection.Current);
            }
        };
        this.shadowDom = this.attachShadow({ mode: "closed" });
    }
    /**
     * Initializes the inline menu page element. Facilitates ensuring that the page
     * is set up with the expected styles and translations.
     *
     * @param elementName - The name of the element, e.g. "button" or "list"
     * @param styleSheetUrl - The URL of the stylesheet to apply to the page
     * @param translations - The translations to apply to the page
     * @param portKey - Background generated key that allows the port to communicate with the background
     */
    initAutofillInlineMenuPage(elementName, styleSheetUrl, translations, portKey) {
        return autofill_inline_menu_page_element_awaiter(this, void 0, void 0, function* () {
            this.portKey = portKey;
            this.translations = translations;
            globalThis.document.documentElement.setAttribute("lang", this.getTranslation("locale"));
            globalThis.document.head.title = this.getTranslation(`${elementName}PageTitle`);
            this.shadowDom.innerHTML = "";
            const linkElement = globalThis.document.createElement("link");
            linkElement.setAttribute("rel", "stylesheet");
            linkElement.setAttribute("href", styleSheetUrl);
            return linkElement;
        });
    }
    /**
     * Posts a window message to the parent window.
     *
     * @param message - The message to post
     */
    postMessageToParent(message) {
        globalThis.parent.postMessage(Object.assign({ portKey: this.portKey }, message), "*");
    }
    /**
     * Gets a translation from the translations object.
     *
     * @param key - The key of the translation to get
     */
    getTranslation(key) {
        return this.translations[key] || "";
    }
    /**
     * Sets up global listeners for the window message, window blur, and
     * document keydown events.
     *
     * @param windowMessageHandlers - The window message handlers to use
     */
    setupGlobalListeners(windowMessageHandlers) {
        this.windowMessageHandlers = windowMessageHandlers;
        globalThis.addEventListener(EVENTS.MESSAGE, this.handleWindowMessage);
        globalThis.addEventListener(EVENTS.BLUR, this.handleWindowBlurEvent);
        globalThis.document.addEventListener(EVENTS.KEYDOWN, this.handleDocumentKeyDownEvent);
    }
    /**
     * Redirects the inline menu focus out to the previous element on KeyDown of the `Tab+Shift` keys.
     * Redirects the inline menu focus out to the next element on KeyDown of the `Tab` key.
     * Redirects the inline menu focus out to the current element on KeyDown of the `Escape` key.
     *
     * @param direction - The direction to redirect the focus out
     */
    sendRedirectFocusOutMessage(direction) {
        this.postMessageToParent({ command: "redirectAutofillInlineMenuFocusOut", direction });
    }
}

;// ./src/autofill/overlay/inline-menu/pages/button/autofill-inline-menu-button.ts
var autofill_inline_menu_button_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore







class AutofillInlineMenuButton extends AutofillInlineMenuPageElement {
    constructor() {
        super();
        this.authStatus = AuthenticationStatus.LoggedOut;
        this.inlineMenuButtonWindowMessageHandlers = {
            initAutofillInlineMenuButton: ({ message }) => this.initAutofillInlineMenuButton(message),
            checkAutofillInlineMenuButtonFocused: () => this.checkButtonFocused(),
            updateAutofillInlineMenuButtonAuthStatus: ({ message }) => this.updateAuthStatus(message.authStatus),
            updateAutofillInlineMenuColorScheme: ({ message }) => this.updatePageColorScheme(message),
        };
        /**
         * Handles a click event on the button element. Posts a message to the
         * parent window indicating that the button was clicked.
         */
        this.handleButtonElementClick = () => {
            this.postMessageToParent({ command: "autofillInlineMenuButtonClicked" });
        };
        /**
         * Triggers a re-check of the button's focus status when the mouse leaves the button.
         */
        this.handleMouseOutEvent = () => {
            globalThis.document.removeEventListener(EVENTS.MOUSEOUT, this.handleMouseOutEvent);
            this.checkButtonFocused();
        };
        this.buttonElement = globalThis.document.createElement("button");
        this.setupGlobalListeners(this.inlineMenuButtonWindowMessageHandlers);
        this.logoIconElement = buildSvgDomElement(logoIcon);
        this.logoIconElement.classList.add("inline-menu-button-svg-icon", "logo-icon");
        this.logoLockedIconElement = buildSvgDomElement(logoLockedIcon);
        this.logoLockedIconElement.classList.add("inline-menu-button-svg-icon", "logo-locked-icon");
    }
    /**
     * Initializes the inline menu button. Facilitates ensuring that the page
     * is set up with the expected styles and translations.
     *
     * @param authStatus - The authentication status of the user
     * @param styleSheetUrl - The URL of the stylesheet to apply to the page
     * @param translations - The translations to apply to the page
     * @param portKey - Background generated key that allows the port to communicate with the background
     */
    initAutofillInlineMenuButton(_a) {
        return autofill_inline_menu_button_awaiter(this, arguments, void 0, function* ({ authStatus, styleSheetUrl, translations, portKey, }) {
            const linkElement = yield this.initAutofillInlineMenuPage("button", styleSheetUrl, translations, portKey);
            this.buttonElement.tabIndex = -1;
            this.buttonElement.type = "button";
            this.buttonElement.classList.add("inline-menu-button");
            this.buttonElement.setAttribute("aria-label", this.getTranslation("toggleBitwardenVaultOverlay"));
            this.buttonElement.addEventListener(EVENTS.CLICK, this.handleButtonElementClick);
            this.postMessageToParent({ command: "updateAutofillInlineMenuColorScheme" });
            this.updateAuthStatus(authStatus);
            this.shadowDom.append(linkElement, this.buttonElement);
        });
    }
    /**
     * Updates the authentication status of the user. This will update the icon
     * displayed on the button.
     *
     * @param authStatus - The authentication status of the user
     */
    updateAuthStatus(authStatus) {
        this.authStatus = authStatus;
        this.buttonElement.innerHTML = "";
        const iconElement = this.authStatus === AuthenticationStatus.Unlocked
            ? this.logoIconElement
            : this.logoLockedIconElement;
        this.buttonElement.append(iconElement);
    }
    /**
     * Handles updating the page color scheme meta tag. Ensures that the button
     * does not present with a non-transparent background on dark mode pages.
     *
     * @param colorScheme - The color scheme of the iframe's parent page
     */
    updatePageColorScheme({ colorScheme }) {
        const colorSchemeMetaTag = globalThis.document.querySelector("meta[name='color-scheme']");
        colorSchemeMetaTag === null || colorSchemeMetaTag === void 0 ? void 0 : colorSchemeMetaTag.setAttribute("content", colorScheme);
    }
    /**
     * Checks if the button is focused. If it is not, then it posts a message
     * to the parent window indicating that the inline menu should be closed.
     */
    checkButtonFocused() {
        if (globalThis.document.hasFocus()) {
            return;
        }
        if (this.isButtonHovered()) {
            globalThis.document.addEventListener(EVENTS.MOUSEOUT, this.handleMouseOutEvent);
            return;
        }
        this.postMessageToParent({ command: "triggerDelayedAutofillInlineMenuClosure" });
    }
    /**
     * Identifies whether the button is currently hovered.
     */
    isButtonHovered() {
        var _a;
        const hoveredElement = (_a = this.buttonElement) === null || _a === void 0 ? void 0 : _a.querySelector(":hover");
        return !!(hoveredElement &&
            (hoveredElement === this.buttonElement || this.buttonElement.contains(hoveredElement)));
    }
}

;// ./src/autofill/overlay/inline-menu/pages/button/bootstrap-autofill-inline-menu-button.ts


// FIXME: Remove when updating file. Eslint update
// eslint-disable-next-line @typescript-eslint/no-require-imports
__webpack_require__(19565);
(function () {
    globalThis.customElements.define(AutofillOverlayElement.Button, AutofillInlineMenuButton);
})();

}();
/******/ })()
;