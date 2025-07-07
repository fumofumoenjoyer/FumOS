/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 6121:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

// UNUSED EXPORTS: appendHeaderMessageToTitle, getConfirmationHeaderMessage, getNotificationHeaderMessage, getNotificationTestId

;// ../../node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const css_tag_t=globalThis,e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap();class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet()).replaceSync(this.cssText),e&&o.set(s,t));}return t;}toString(){return this.cssText;}}const r=t=>new n("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");})(s)+t[o+1],t[0]);return new n(o,t,s);},S=(s,o)=>{if(e)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=css_tag_t.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e);})(t):t;
;// ../../node_modules/@lit/reactive-element/reactive-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:reactive_element_i,defineProperty:reactive_element_e,getOwnPropertyDescriptor:h,getOwnPropertyNames:reactive_element_r,getOwnPropertySymbols:reactive_element_o,getPrototypeOf:reactive_element_n}=Object,a=globalThis,reactive_element_c=a.trustedTypes,l=reactive_element_c?reactive_element_c.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t,s)=>t,u={toAttribute(t,s){switch(s){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t;},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i;}},f=(t,s)=>!reactive_element_i(t,s),b={attribute:!0,type:String,converter:u,reflect:!1,useDefault:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap();class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()];}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&reactive_element_e(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h(this.prototype,t)??{get(){return this[s];},set(t){this[s]=t;}};return{get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0};}static getPropertyOptions(t){return this.elementProperties.get(t)??b;}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=reactive_element_n(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...reactive_element_r(t),...reactive_element_o(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map();for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c(s));}else void 0!==s&&i.push(c(s));return i;}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0;}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map(),this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set()).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map(),s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t;}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u;this._$Em=e,this[e]=h.fromAttribute(s,t.type)??this._$Ej?.get(e)??null,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map()).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set()).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&(await t),!this.isUpdatePending;}scheduleUpdate(){return this.performUpdate();}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s;}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map(),this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete();}getUpdateComplete(){return this._$ES;}shouldUpdate(t){return!0;}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[d("elementProperties")]=new Map(),y[d("finalized")]=new Map(),p?.({ReactiveElement:y}),(a.reactiveElementVersions??=[]).push("2.1.0");
;// ../../node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lit_html_t=globalThis,lit_html_i=lit_html_t.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_e="$lit$",lit_html_h=`lit$${Math.random().toFixed(9).slice(2)}$`,lit_html_o="?"+lit_html_h,lit_html_n=`<${lit_html_o}>`,lit_html_r=document,lit_html_l=()=>lit_html_r.createComment(""),lit_html_c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,lit_html_a=Array.isArray,lit_html_u=t=>lit_html_a(t)||"function"==typeof t?.[Symbol.iterator],lit_html_d="[ \t\n\f\r]",lit_html_f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${lit_html_d}(?:([^\\s"'>=/]+)(${lit_html_d}*=${lit_html_d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),lit_html_p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,lit_html_y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=lit_html_y(1),lit_html_b=lit_html_y(2),w=lit_html_y(3),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap(),C=lit_html_r.createTreeWalker(lit_html_r,129);function P(t,i){if(!lit_html_a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==lit_html_s?lit_html_s.createHTML(i):i;}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=lit_html_f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===lit_html_f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??lit_html_f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:lit_html_p):c===g||c===lit_html_p?c=m:c===v||c===_?c=lit_html_f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===lit_html_f?s+lit_html_n:d>=0?(o.push(a),s.slice(0,d)+lit_html_e+s.slice(d)+lit_html_h+x):s+lit_html_h+(-2===d?i:x);}return[P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o];};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(lit_html_e)){const i=v[a++],s=r.getAttribute(t).split(lit_html_h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(lit_html_h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(lit_html_h),s=t.length-1;if(s>0){r.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],lit_html_l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],lit_html_l());}}}else if(8===r.nodeType)if(r.data===lit_html_o)d.push({type:2,index:c});else{let t=-1;for(;-1!==(t=r.data.indexOf(lit_html_h,t+1));)d.push({type:7,index:c}),t+=lit_html_h.length-1;}c++;}}static createElement(t,i){const s=lit_html_r.createElement("template");return s.innerHTML=t,s;}}function lit_html_S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=lit_html_c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=lit_html_S(t,h._$AS(t,i.values),h,e)),i;}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode;}get _$AU(){return this._$AM._$AU;}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??lit_html_r).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=lit_html_r,e;}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv;}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t;}get startNode(){return this._$AA;}get endNode(){return this._$AB;}_$AI(t,i=this){t=lit_html_S(this,t,i),lit_html_c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):lit_html_u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB);}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=t:this.T(lit_html_r.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i;}k(t){lit_html_a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(lit_html_l()),this.O(lit_html_l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName;}get _$AU(){return this._$AM._$AU;}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String()),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=lit_html_S(this,t,i,0),o=!lit_html_c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=lit_html_S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!lit_html_c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=lit_html_S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU;}_$AI(t){lit_html_S(this,t);}}const Z={M:lit_html_e,P:lit_html_h,A:lit_html_o,C:1,L:V,R:M,D:lit_html_u,V:lit_html_S,I:R,H:k,N:I,U:L,B:H,F:z},j=lit_html_t.litHtmlPolyfillSupport;j?.(N,R),(lit_html_t.litHtmlVersions??=[]).push("3.3.0");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(lit_html_l(),t),t,void 0,s??{});}return h._$AI(t),h;};
;// ../../node_modules/lit-element/lit-element.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lit_element_s=globalThis;class lit_element_i extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t;}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T;}}lit_element_i._$litElement$=!0,lit_element_i["finalized"]=!0,lit_element_s.litElementHydrateSupport?.({LitElement:lit_element_i});const lit_element_o=lit_element_s.litElementPolyfillSupport;lit_element_o?.({LitElement:lit_element_i});const lit_element_n={_$AK:(t,e,r)=>{t._$AK(e,r);},_$AL:t=>t._$AL};(lit_element_s.litElementVersions??=[]).push("4.2.0");
;// ../../node_modules/lit/index.js

;// ../../libs/common/src/platform/enums/encryption-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var EncryptionType;
(function (EncryptionType) {
    // Symmetric encryption types
    EncryptionType[EncryptionType["AesCbc256_B64"] = 0] = "AesCbc256_B64";
    // Type 1 was the unused and removed AesCbc128_HmacSha256_B64
    EncryptionType[EncryptionType["AesCbc256_HmacSha256_B64"] = 2] = "AesCbc256_HmacSha256_B64";
    // Cose is the encoding for the key used, but contained can be:
    // - XChaCha20Poly1305
    EncryptionType[EncryptionType["CoseEncrypt0"] = 7] = "CoseEncrypt0";
    // Asymmetric encryption types. These never occur in the same places that the symmetric ones would
    // and can be split out into a separate enum.
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_B64"] = 3] = "Rsa2048_OaepSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_B64"] = 4] = "Rsa2048_OaepSha1_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha256_HmacSha256_B64"] = 5] = "Rsa2048_OaepSha256_HmacSha256_B64";
    EncryptionType[EncryptionType["Rsa2048_OaepSha1_HmacSha256_B64"] = 6] = "Rsa2048_OaepSha1_HmacSha256_B64";
})(EncryptionType || (EncryptionType = {}));
function encryptionTypeToString(encryptionType) {
    if (encryptionType in EncryptionType) {
        return EncryptionType[encryptionType];
    }
    else {
        return "Unknown encryption type " + encryptionType;
    }
}
/** The expected number of parts to a serialized EncString of the given encryption type.
 * For example, an EncString of type AesCbc256_B64 will have 2 parts
 *
 * Example of annotated serialized EncStrings:
 * 0.iv|data
 * 2.iv|data|mac
 * 3.data
 * 4.data
 *
 * @see EncString
 * @see EncryptionType
 * @see EncString.parseEncryptedString
 */
const EXPECTED_NUM_PARTS_BY_ENCRYPTION_TYPE = {
    [EncryptionType.AesCbc256_B64]: 2,
    [EncryptionType.AesCbc256_HmacSha256_B64]: 3,
    [EncryptionType.Rsa2048_OaepSha256_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha1_B64]: 1,
    [EncryptionType.Rsa2048_OaepSha256_HmacSha256_B64]: 2,
    [EncryptionType.Rsa2048_OaepSha1_HmacSha256_B64]: 2,
    [EncryptionType.CoseEncrypt0]: 1,
};

;// ../../libs/common/src/platform/enums/file-upload-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var FileUploadType;
(function (FileUploadType) {
    FileUploadType[FileUploadType["Direct"] = 0] = "Direct";
    FileUploadType[FileUploadType["Azure"] = 1] = "Azure";
})(FileUploadType || (FileUploadType = {}));

;// ../../libs/common/src/platform/enums/hash-purpose.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var HashPurpose;
(function (HashPurpose) {
    HashPurpose[HashPurpose["ServerAuthorization"] = 1] = "ServerAuthorization";
    HashPurpose[HashPurpose["LocalAuthorization"] = 2] = "LocalAuthorization";
})(HashPurpose || (HashPurpose = {}));

;// ../../libs/common/src/platform/enums/html-storage-location.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var HtmlStorageLocation;
(function (HtmlStorageLocation) {
    HtmlStorageLocation["Local"] = "local";
    HtmlStorageLocation["Memory"] = "memory";
    HtmlStorageLocation["Session"] = "session";
})(HtmlStorageLocation || (HtmlStorageLocation = {}));

;// ../../libs/common/src/platform/enums/key-suffix-options.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var KeySuffixOptions;
(function (KeySuffixOptions) {
    KeySuffixOptions["Auto"] = "auto";
    KeySuffixOptions["Pin"] = "pin";
})(KeySuffixOptions || (KeySuffixOptions = {}));

;// ../../libs/common/src/platform/enums/log-level-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var LogLevelType;
(function (LogLevelType) {
    LogLevelType[LogLevelType["Debug"] = 0] = "Debug";
    LogLevelType[LogLevelType["Info"] = 1] = "Info";
    LogLevelType[LogLevelType["Warning"] = 2] = "Warning";
    LogLevelType[LogLevelType["Error"] = 3] = "Error";
})(LogLevelType || (LogLevelType = {}));

;// ../../libs/common/src/platform/enums/storage-location.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var StorageLocation;
(function (StorageLocation) {
    StorageLocation["Both"] = "both";
    StorageLocation["Disk"] = "disk";
    StorageLocation["Memory"] = "memory";
})(StorageLocation || (StorageLocation = {}));

;// ../../libs/common/src/platform/enums/theme-type.enum.ts
/**
 * @deprecated prefer the `ThemeTypes` constants and `Theme` type over unsafe enum types
 **/
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ThemeType;
(function (ThemeType) {
    ThemeType["System"] = "system";
    ThemeType["Light"] = "light";
    ThemeType["Dark"] = "dark";
})(ThemeType || (ThemeType = {}));
const ThemeTypes = {
    System: "system",
    Light: "light",
    Dark: "dark",
};

;// ../../libs/common/src/platform/enums/index.ts









;// ../../libs/common/src/platform/services/console-log.service.ts

class ConsoleLogService {
    constructor(isDev, filter = null) {
        this.isDev = isDev;
        this.filter = filter;
        this.timersMap = new Map();
    }
    debug(message, ...optionalParams) {
        if (!this.isDev) {
            return;
        }
        this.write(LogLevelType.Debug, message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        this.write(LogLevelType.Info, message, ...optionalParams);
    }
    warning(message, ...optionalParams) {
        this.write(LogLevelType.Warning, message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        this.write(LogLevelType.Error, message, ...optionalParams);
    }
    write(level, message, ...optionalParams) {
        if (this.filter != null && this.filter(level)) {
            return;
        }
        switch (level) {
            case LogLevelType.Debug:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case LogLevelType.Info:
                // eslint-disable-next-line
                console.log(message, ...optionalParams);
                break;
            case LogLevelType.Warning:
                // eslint-disable-next-line
                console.warn(message, ...optionalParams);
                break;
            case LogLevelType.Error:
                // eslint-disable-next-line
                console.error(message, ...optionalParams);
                break;
            default:
                break;
        }
    }
}

;// ../../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment=false;/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/function sheetForTag(tag){if(tag.sheet){return tag.sheet;}// this weirdness brought to you by firefox
/* istanbul ignore next */for(var i=0;i<document.styleSheets.length;i++){if(document.styleSheets[i].ownerNode===tag){return document.styleSheets[i];}}// this function should always return with a value
// TS can't understand it though so we make it stop complaining here
return undefined;}function createStyleElement(options){var tag=document.createElement('style');tag.setAttribute('data-emotion',options.key);if(options.nonce!==undefined){tag.setAttribute('nonce',options.nonce);}tag.appendChild(document.createTextNode(''));tag.setAttribute('data-s','');return tag;}var StyleSheet=/*#__PURE__*/function(){// Using Node instead of HTMLElement since container may be a ShadowRoot
function StyleSheet(options){var _this=this;this._insertTag=function(tag){var before;if(_this.tags.length===0){if(_this.insertionPoint){before=_this.insertionPoint.nextSibling;}else if(_this.prepend){before=_this.container.firstChild;}else{before=_this.before;}}else{before=_this.tags[_this.tags.length-1].nextSibling;}_this.container.insertBefore(tag,before);_this.tags.push(tag);};this.isSpeedy=options.speedy===undefined?!isDevelopment:options.speedy;this.tags=[];this.ctr=0;this.nonce=options.nonce;// key is the value of the data-emotion attribute, it's used to identify different sheets
this.key=options.key;this.container=options.container;this.prepend=options.prepend;this.insertionPoint=options.insertionPoint;this.before=null;}var _proto=StyleSheet.prototype;_proto.hydrate=function hydrate(nodes){nodes.forEach(this._insertTag);};_proto.insert=function insert(rule){// the max length is how many rules we have per style tag, it's 65000 in speedy mode
// it's 1 in dev because we insert source maps that map a single rule to a location
// and you can only have one source map per style tag
if(this.ctr%(this.isSpeedy?65000:1)===0){this._insertTag(createStyleElement(this));}var tag=this.tags[this.tags.length-1];if(this.isSpeedy){var sheet=sheetForTag(tag);try{// this is the ultrafast version, works across browsers
// the big drawback is that the css won't be editable in devtools
sheet.insertRule(rule,sheet.cssRules.length);}catch(e){}}else{tag.appendChild(document.createTextNode(rule));}this.ctr++;};_proto.flush=function flush(){this.tags.forEach(function(tag){var _tag$parentNode;return(_tag$parentNode=tag.parentNode)==null?void 0:_tag$parentNode.removeChild(tag);});this.tags=[];this.ctr=0;};return StyleSheet;}();
;// ../../node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */var abs=Math.abs;/**
 * @param {number}
 * @return {string}
 */var Utility_from=String.fromCharCode;/**
 * @param {object}
 * @return {object}
 */var Utility_assign=Object.assign;/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */function hash(value,length){return Utility_charat(value,0)^45?(((length<<2^Utility_charat(value,0))<<2^Utility_charat(value,1))<<2^Utility_charat(value,2))<<2^Utility_charat(value,3):0;}/**
 * @param {string} value
 * @return {string}
 */function trim(value){return value.trim();}/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */function Utility_match(value,pattern){return(value=pattern.exec(value))?value[0]:value;}/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */function Utility_replace(value,pattern,replacement){return value.replace(pattern,replacement);}/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */function indexof(value,search){return value.indexOf(search);}/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */function Utility_charat(value,index){return value.charCodeAt(index)|0;}/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function Utility_substr(value,begin,end){return value.slice(begin,end);}/**
 * @param {string} value
 * @return {number}
 */function Utility_strlen(value){return value.length;}/**
 * @param {any[]} value
 * @return {number}
 */function Utility_sizeof(value){return value.length;}/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */function Utility_append(value,array){return array.push(value),value;}/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */function Utility_combine(array,callback){return array.map(callback).join('');}
;// ../../node_modules/stylis/src/Tokenizer.js
var line=1;var column=1;var Tokenizer_length=0;var position=0;var character=0;var characters='';/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */function node(value,root,parent,type,props,children,length){return{value:value,root:root,parent:parent,type:type,props:props,children:children,line:line,column:column,length:length,return:''};}/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */function Tokenizer_copy(root,props){return Utility_assign(node('',null,null,'',null,null,0),root,{length:-root.length},props);}/**
 * @return {number}
 */function Tokenizer_char(){return character;}/**
 * @return {number}
 */function prev(){character=position>0?Utility_charat(characters,--position):0;if(column--,character===10)column=1,line--;return character;}/**
 * @return {number}
 */function next(){character=position<Tokenizer_length?Utility_charat(characters,position++):0;if(column++,character===10)column=1,line++;return character;}/**
 * @return {number}
 */function peek(){return Utility_charat(characters,position);}/**
 * @return {number}
 */function caret(){return position;}/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */function slice(begin,end){return Utility_substr(characters,begin,end);}/**
 * @param {number} type
 * @return {number}
 */function token(type){switch(type){// \0 \t \n \r \s whitespace token
case 0:case 9:case 10:case 13:case 32:return 5;// ! + , / > @ ~ isolate token
case 33:case 43:case 44:case 47:case 62:case 64:case 126:// ; { } breakpoint token
case 59:case 123:case 125:return 4;// : accompanied token
case 58:return 3;// " ' ( [ opening delimit token
case 34:case 39:case 40:case 91:return 2;// ) ] closing delimit token
case 41:case 93:return 1;}return 0;}/**
 * @param {string} value
 * @return {any[]}
 */function alloc(value){return line=column=1,Tokenizer_length=Utility_strlen(characters=value),position=0,[];}/**
 * @param {any} value
 * @return {any}
 */function dealloc(value){return characters='',value;}/**
 * @param {number} type
 * @return {string}
 */function delimit(type){return trim(slice(position-1,delimiter(type===91?type+2:type===40?type+1:type)));}/**
 * @param {string} value
 * @return {string[]}
 */function Tokenizer_tokenize(value){return dealloc(tokenizer(alloc(value)));}/**
 * @param {number} type
 * @return {string}
 */function whitespace(type){while(character=peek())if(character<33)next();else break;return token(type)>2||token(character)>3?'':' ';}/**
 * @param {string[]} children
 * @return {string[]}
 */function tokenizer(children){while(next())switch(token(character)){case 0:append(identifier(position-1),children);break;case 2:append(delimit(character),children);break;default:append(from(character),children);}return children;}/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */function escaping(index,count){while(--count&&next())// not 0-9 A-F a-f
if(character<48||character>102||character>57&&character<65||character>70&&character<97)break;return slice(index,caret()+(count<6&&peek()==32&&next()==32));}/**
 * @param {number} type
 * @return {number}
 */function delimiter(type){while(next())switch(character){// ] ) " '
case type:return position;// " '
case 34:case 39:if(type!==34&&type!==39)delimiter(character);break;// (
case 40:if(type===41)delimiter(type);break;// \
case 92:next();break;}return position;}/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */function commenter(type,index){while(next())// //
if(type+character===47+10)break;// /*
else if(type+character===42+42&&peek()===47)break;return'/*'+slice(index,position-1)+'*'+Utility_from(type===47?type:next());}/**
 * @param {number} index
 * @return {string}
 */function identifier(index){while(!token(peek()))next();return slice(index,position);}
;// ../../node_modules/stylis/src/Enum.js
var Enum_MS='-ms-';var Enum_MOZ='-moz-';var Enum_WEBKIT='-webkit-';var COMMENT='comm';var Enum_RULESET='rule';var Enum_DECLARATION='decl';var PAGE='@page';var MEDIA='@media';var IMPORT='@import';var CHARSET='@charset';var VIEWPORT='@viewport';var SUPPORTS='@supports';var DOCUMENT='@document';var NAMESPACE='@namespace';var Enum_KEYFRAMES='@keyframes';var FONT_FACE='@font-face';var COUNTER_STYLE='@counter-style';var FONT_FEATURE_VALUES='@font-feature-values';var LAYER='@layer';
;// ../../node_modules/stylis/src/Serializer.js
/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function Serializer_serialize(children,callback){var output='';var length=Utility_sizeof(children);for(var i=0;i<length;i++)output+=callback(children[i],i,children,callback)||'';return output;}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */function stringify(element,index,children,callback){switch(element.type){case LAYER:if(element.children.length)break;case IMPORT:case Enum_DECLARATION:return element.return=element.return||element.value;case COMMENT:return'';case Enum_KEYFRAMES:return element.return=element.value+'{'+Serializer_serialize(element.children,callback)+'}';case Enum_RULESET:element.value=element.props.join(',');}return Utility_strlen(children=Serializer_serialize(element.children,callback))?element.return=element.value+'{'+children+'}':'';}
;// ../../node_modules/stylis/src/Middleware.js
/**
 * @param {function[]} collection
 * @return {function}
 */function middleware(collection){var length=Utility_sizeof(collection);return function(element,index,children,callback){var output='';for(var i=0;i<length;i++)output+=collection[i](element,index,children,callback)||'';return output;};}/**
 * @param {function} callback
 * @return {function}
 */function rulesheet(callback){return function(element){if(!element.root)if(element=element.return)callback(element);};}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */function prefixer(element,index,children,callback){if(element.length>-1)if(!element.return)switch(element.type){case DECLARATION:element.return=prefix(element.value,element.length,children);return;case KEYFRAMES:return serialize([copy(element,{value:replace(element.value,'@','@'+WEBKIT)})],callback);case RULESET:if(element.length)return combine(element.props,function(value){switch(match(value,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case':read-only':case':read-write':return serialize([copy(element,{props:[replace(value,/:(read-\w+)/,':'+MOZ+'$1')]})],callback);// :placeholder
case'::placeholder':return serialize([copy(element,{props:[replace(value,/:(plac\w+)/,':'+WEBKIT+'input-$1')]}),copy(element,{props:[replace(value,/:(plac\w+)/,':'+MOZ+'$1')]}),copy(element,{props:[replace(value,/:(plac\w+)/,MS+'input-$1')]})],callback);}return'';});}}/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */function namespace(element){switch(element.type){case RULESET:element.props=element.props.map(function(value){return combine(tokenize(value),function(value,index,children){switch(charat(value,0)){// \f
case 12:return substr(value,1,strlen(value));// \0 ( + > ~
case 0:case 40:case 43:case 62:case 126:return value;// :
case 58:if(children[++index]==='global')children[index]='',children[++index]='\f'+substr(children[index],index=1,-1);// \s
case 32:return index===1?'':value;default:switch(index){case 0:element=value;return sizeof(children)>1?'':value;case index=sizeof(children)-1:case 2:return index===2?value+element+element:value+element;default:return value;}}});});}}
;// ../../node_modules/stylis/src/Parser.js
/**
 * @param {string} value
 * @return {object[]}
 */function compile(value){return dealloc(parse('',null,null,null,[''],value=alloc(value),0,[0],value));}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */function parse(value,root,parent,rule,rules,rulesets,pseudo,points,declarations){var index=0;var offset=0;var length=pseudo;var atrule=0;var property=0;var previous=0;var variable=1;var scanning=1;var ampersand=1;var character=0;var type='';var props=rules;var children=rulesets;var reference=rule;var characters=type;while(scanning)switch(previous=character,character=next()){// (
case 40:if(previous!=108&&Utility_charat(characters,length-1)==58){if(indexof(characters+=Utility_replace(delimit(character),'&','&\f'),'&\f')!=-1)ampersand=-1;break;}// " ' [
case 34:case 39:case 91:characters+=delimit(character);break;// \t \n \r \s
case 9:case 10:case 13:case 32:characters+=whitespace(previous);break;// \
case 92:characters+=escaping(caret()-1,7);continue;// /
case 47:switch(peek()){case 42:case 47:Utility_append(comment(commenter(next(),caret()),root,parent),declarations);break;default:characters+='/';}break;// {
case 123*variable:points[index++]=Utility_strlen(characters)*ampersand;// } ; \0
case 125*variable:case 59:case 0:switch(character){// \0 }
case 0:case 125:scanning=0;// ;
case 59+offset:if(ampersand==-1)characters=Utility_replace(characters,/\f/g,'');if(property>0&&Utility_strlen(characters)-length)Utility_append(property>32?declaration(characters+';',rule,parent,length-1):declaration(Utility_replace(characters,' ','')+';',rule,parent,length-2),declarations);break;// @ ;
case 59:characters+=';';// { rule/at-rule
default:Utility_append(reference=ruleset(characters,root,parent,index,offset,rules,points,type,props=[],children=[],length),rulesets);if(character===123)if(offset===0)parse(characters,root,reference,reference,props,rulesets,length,points,children);else switch(atrule===99&&Utility_charat(characters,3)===110?100:atrule){// d l m s
case 100:case 108:case 109:case 115:parse(value,reference,reference,rule&&Utility_append(ruleset(value,reference,reference,0,0,rules,points,type,rules,props=[],length),children),rules,children,length,points,rule?props:children);break;default:parse(characters,reference,reference,reference,[''],children,0,points,children);}}index=offset=property=0,variable=ampersand=1,type=characters='',length=pseudo;break;// :
case 58:length=1+Utility_strlen(characters),property=previous;default:if(variable<1)if(character==123)--variable;else if(character==125&&variable++==0&&prev()==125)continue;switch(characters+=Utility_from(character),character*variable){// &
case 38:ampersand=offset>0?1:(characters+='\f',-1);break;// ,
case 44:points[index++]=(Utility_strlen(characters)-1)*ampersand,ampersand=1;break;// @
case 64:// -
if(peek()===45)characters+=delimit(next());atrule=peek(),offset=length=Utility_strlen(type=characters+=identifier(caret())),character++;break;// -
case 45:if(previous===45&&Utility_strlen(characters)==2)variable=0;}}return rulesets;}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */function ruleset(value,root,parent,index,offset,rules,points,type,props,children,length){var post=offset-1;var rule=offset===0?rules:[''];var size=Utility_sizeof(rule);for(var i=0,j=0,k=0;i<index;++i)for(var x=0,y=Utility_substr(value,post+1,post=abs(j=points[i])),z=value;x<size;++x)if(z=trim(j>0?rule[x]+' '+y:Utility_replace(y,/&\f/g,rule[x])))props[k++]=z;return node(value,root,parent,offset===0?Enum_RULESET:type,props,children,length);}/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */function comment(value,root,parent){return node(value,root,parent,COMMENT,Utility_from(Tokenizer_char()),Utility_substr(value,2,-2),0);}/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */function declaration(value,root,parent,length){return node(value,root,parent,Enum_DECLARATION,Utility_substr(value,0,length),Utility_substr(value,length+1,-1),length);}
;// ../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking=function identifierWithPointTracking(begin,points,index){var previous=0;var character=0;while(true){previous=character;character=peek();// &\f
if(previous===38&&character===12){points[index]=1;}if(token(character)){break;}next();}return slice(begin,position);};var toRules=function toRules(parsed,points){// pretend we've started with a comma
var index=-1;var character=44;do{switch(token(character)){case 0:// &\f
if(character===38&&peek()===12){// this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
// stylis inserts \f after & to know when & where it should replace this sequence with the context selector
// and when it should just concatenate the outer and inner selectors
// it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
points[index]=1;}parsed[index]+=identifierWithPointTracking(position-1,points,index);break;case 2:parsed[index]+=delimit(character);break;case 4:// comma
if(character===44){// colon
parsed[++index]=peek()===58?'&\f':'';points[index]=parsed[index].length;break;}// fallthrough
default:parsed[index]+=Utility_from(character);}}while(character=next());return parsed;};var getRules=function getRules(value,points){return dealloc(toRules(alloc(value),points));};// WeakSet would be more appropriate, but only WeakMap is supported in IE11
var fixedElements=/* #__PURE__ */new WeakMap();var compat=function compat(element){if(element.type!=='rule'||!element.parent||// positive .length indicates that this rule contains pseudo
// negative .length indicates that this rule has been already prefixed
element.length<1){return;}var value=element.value;var parent=element.parent;var isImplicitRule=element.column===parent.column&&element.line===parent.line;while(parent.type!=='rule'){parent=parent.parent;if(!parent)return;}// short-circuit for the simplest case
if(element.props.length===1&&value.charCodeAt(0)!==58/* colon */&&!fixedElements.get(parent)){return;}// if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
// then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"
if(isImplicitRule){return;}fixedElements.set(element,true);var points=[];var rules=getRules(value,points);var parentRules=parent.props;for(var i=0,k=0;i<rules.length;i++){for(var j=0;j<parentRules.length;j++,k++){element.props[k]=points[i]?rules[i].replace(/&\f/g,parentRules[j]):parentRules[j]+" "+rules[i];}}};var removeLabel=function removeLabel(element){if(element.type==='decl'){var value=element.value;if(// charcode for l
value.charCodeAt(0)===108&&// charcode for b
value.charCodeAt(2)===98){// this ignores label
element["return"]='';element.value='';}}};/* eslint-disable no-fallthrough */function emotion_cache_browser_esm_prefix(value,length){switch(hash(value,length)){// color-adjust
case 5103:return Enum_WEBKIT+'print-'+value+value;// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Enum_WEBKIT+value+value;// appearance, user-select, transform, hyphens, text-size-adjust
case 5349:case 4246:case 4810:case 6968:case 2756:return Enum_WEBKIT+value+Enum_MOZ+value+Enum_MS+value+value;// flex, flex-direction
case 6828:case 4268:return Enum_WEBKIT+value+Enum_MS+value+value;// order
case 6165:return Enum_WEBKIT+value+Enum_MS+'flex-'+value+value;// align-items
case 5187:return Enum_WEBKIT+value+Utility_replace(value,/(\w+).+(:[^]+)/,Enum_WEBKIT+'box-$1$2'+Enum_MS+'flex-$1$2')+value;// align-self
case 5443:return Enum_WEBKIT+value+Enum_MS+'flex-item-'+Utility_replace(value,/flex-|-self/,'')+value;// align-content
case 4675:return Enum_WEBKIT+value+Enum_MS+'flex-line-pack'+Utility_replace(value,/align-content|flex-|-self/,'')+value;// flex-shrink
case 5548:return Enum_WEBKIT+value+Enum_MS+Utility_replace(value,'shrink','negative')+value;// flex-basis
case 5292:return Enum_WEBKIT+value+Enum_MS+Utility_replace(value,'basis','preferred-size')+value;// flex-grow
case 6060:return Enum_WEBKIT+'box-'+Utility_replace(value,'-grow','')+Enum_WEBKIT+value+Enum_MS+Utility_replace(value,'grow','positive')+value;// transition
case 4554:return Enum_WEBKIT+Utility_replace(value,/([^-])(transform)/g,'$1'+Enum_WEBKIT+'$2')+value;// cursor
case 6187:return Utility_replace(Utility_replace(Utility_replace(value,/(zoom-|grab)/,Enum_WEBKIT+'$1'),/(image-set)/,Enum_WEBKIT+'$1'),value,'')+value;// background, background-image
case 5495:case 3959:return Utility_replace(value,/(image-set\([^]*)/,Enum_WEBKIT+'$1'+'$`$1');// justify-content
case 4968:return Utility_replace(Utility_replace(value,/(.+:)(flex-)?(.*)/,Enum_WEBKIT+'box-pack:$3'+Enum_MS+'flex-pack:$3'),/s.+-b[^;]+/,'justify')+Enum_WEBKIT+value+value;// (margin|padding)-inline-(start|end)
case 4095:case 3583:case 4068:case 2532:return Utility_replace(value,/(.+)-inline(.+)/,Enum_WEBKIT+'$1$2')+value;// (min|max)?(width|height|inline-size|block-size)
case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:// stretch, max-content, min-content, fill-available
if(Utility_strlen(value)-1-length>6)switch(Utility_charat(value,length+1)){// (m)ax-content, (m)in-content
case 109:// -
if(Utility_charat(value,length+4)!==45)break;// (f)ill-available, (f)it-content
case 102:return Utility_replace(value,/(.+:)(.+)-([^]+)/,'$1'+Enum_WEBKIT+'$2-$3'+'$1'+Enum_MOZ+(Utility_charat(value,length+3)==108?'$3':'$2-$3'))+value;// (s)tretch
case 115:return~indexof(value,'stretch')?emotion_cache_browser_esm_prefix(Utility_replace(value,'stretch','fill-available'),length)+value:value;}break;// position: sticky
case 4949:// (s)ticky?
if(Utility_charat(value,length+1)!==115)break;// display: (flex|inline-flex)
case 6444:switch(Utility_charat(value,Utility_strlen(value)-3-(~indexof(value,'!important')&&10))){// stic(k)y
case 107:return Utility_replace(value,':',':'+Enum_WEBKIT)+value;// (inline-)?fl(e)x
case 101:return Utility_replace(value,/(.+:)([^;!]+)(;|!.+)?/,'$1'+Enum_WEBKIT+(Utility_charat(value,14)===45?'inline-':'')+'box$3'+'$1'+Enum_WEBKIT+'$2$3'+'$1'+Enum_MS+'$2box$3')+value;}break;// writing-mode
case 5936:switch(Utility_charat(value,length+11)){// vertical-l(r)
case 114:return Enum_WEBKIT+value+Enum_MS+Utility_replace(value,/[svh]\w+-[tblr]{2}/,'tb')+value;// vertical-r(l)
case 108:return Enum_WEBKIT+value+Enum_MS+Utility_replace(value,/[svh]\w+-[tblr]{2}/,'tb-rl')+value;// horizontal(-)tb
case 45:return Enum_WEBKIT+value+Enum_MS+Utility_replace(value,/[svh]\w+-[tblr]{2}/,'lr')+value;}return Enum_WEBKIT+value+Enum_MS+value+value;}return value;}var emotion_cache_browser_esm_prefixer=function prefixer(element,index,children,callback){if(element.length>-1)if(!element["return"])switch(element.type){case Enum_DECLARATION:element["return"]=emotion_cache_browser_esm_prefix(element.value,element.length);break;case Enum_KEYFRAMES:return Serializer_serialize([Tokenizer_copy(element,{value:Utility_replace(element.value,'@','@'+Enum_WEBKIT)})],callback);case Enum_RULESET:if(element.length)return Utility_combine(element.props,function(value){switch(Utility_match(value,/(::plac\w+|:read-\w+)/)){// :read-(only|write)
case':read-only':case':read-write':return Serializer_serialize([Tokenizer_copy(element,{props:[Utility_replace(value,/:(read-\w+)/,':'+Enum_MOZ+'$1')]})],callback);// :placeholder
case'::placeholder':return Serializer_serialize([Tokenizer_copy(element,{props:[Utility_replace(value,/:(plac\w+)/,':'+Enum_WEBKIT+'input-$1')]}),Tokenizer_copy(element,{props:[Utility_replace(value,/:(plac\w+)/,':'+Enum_MOZ+'$1')]}),Tokenizer_copy(element,{props:[Utility_replace(value,/:(plac\w+)/,Enum_MS+'input-$1')]})],callback);}return'';});}};var defaultStylisPlugins=[emotion_cache_browser_esm_prefixer];var createCache=function createCache(options){var key=options.key;if(key==='css'){var ssrStyles=document.querySelectorAll("style[data-emotion]:not([data-s])");// get SSRed styles out of the way of React's hydration
// document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
// note this very very intentionally targets all style elements regardless of the key to ensure
// that creating a cache works inside of render of a React component
Array.prototype.forEach.call(ssrStyles,function(node){// we want to only move elements which have a space in the data-emotion attribute value
// because that indicates that it is an Emotion 11 server-side rendered style elements
// while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
// Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
// so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
// will not result in the Emotion 10 styles being destroyed
var dataEmotionAttribute=node.getAttribute('data-emotion');if(dataEmotionAttribute.indexOf(' ')===-1){return;}document.head.appendChild(node);node.setAttribute('data-s','');});}var stylisPlugins=options.stylisPlugins||defaultStylisPlugins;var inserted={};var container;var nodesToHydrate=[];{container=options.container||document.head;Array.prototype.forEach.call(// this means we will ignore elements which don't have a space in them which
// means that the style elements we're looking at are only Emotion 11 server-rendered style elements
document.querySelectorAll("style[data-emotion^=\""+key+" \"]"),function(node){var attrib=node.getAttribute("data-emotion").split(' ');for(var i=1;i<attrib.length;i++){inserted[attrib[i]]=true;}nodesToHydrate.push(node);});}var _insert;var omnipresentPlugins=[compat,removeLabel];{var currentSheet;var finalizingPlugins=[stringify,rulesheet(function(rule){currentSheet.insert(rule);})];var serializer=middleware(omnipresentPlugins.concat(stylisPlugins,finalizingPlugins));var stylis=function stylis(styles){return Serializer_serialize(compile(styles),serializer);};_insert=function insert(selector,serialized,sheet,shouldCache){currentSheet=sheet;stylis(selector?selector+"{"+serialized.styles+"}":serialized.styles);if(shouldCache){cache.inserted[serialized.name]=true;}};}var cache={key:key,sheet:new StyleSheet({key:key,container:container,nonce:options.nonce,speedy:options.speedy,prepend:options.prepend,insertionPoint:options.insertionPoint}),nonce:options.nonce,inserted:inserted,registered:{},insert:_insert};cache.sheet.hydrate(nodesToHydrate);return cache;};
;// ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js
/* eslint-disable */// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str){// 'm' and 'r' are mixing constants generated offline.
// They're not really 'magic', they just happen to work well.
// const m = 0x5bd1e995;
// const r = 24;
// Initialize the hash
var h=0;// Mix 4 bytes at a time into the hash
var k,i=0,len=str.length;for(;len>=4;++i,len-=4){k=str.charCodeAt(i)&0xff|(str.charCodeAt(++i)&0xff)<<8|(str.charCodeAt(++i)&0xff)<<16|(str.charCodeAt(++i)&0xff)<<24;k=/* Math.imul(k, m): */(k&0xffff)*0x5bd1e995+((k>>>16)*0xe995<<16);k^=/* k >>> r: */k>>>24;h=/* Math.imul(k, m): */(k&0xffff)*0x5bd1e995+((k>>>16)*0xe995<<16)^/* Math.imul(h, m): */(h&0xffff)*0x5bd1e995+((h>>>16)*0xe995<<16);}// Handle the last few bytes of the input array
switch(len){case 3:h^=(str.charCodeAt(i+2)&0xff)<<16;case 2:h^=(str.charCodeAt(i+1)&0xff)<<8;case 1:h^=str.charCodeAt(i)&0xff;h=/* Math.imul(h, m): */(h&0xffff)*0x5bd1e995+((h>>>16)*0xe995<<16);}// Do a few final mixes of the hash to ensure the last few
// bytes are well-incorporated.
h^=h>>>13;h=/* Math.imul(h, m): */(h&0xffff)*0x5bd1e995+((h>>>16)*0xe995<<16);return((h^h>>>15)>>>0).toString(36);}
;// ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,// SVG-related properties
fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};
;// ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn){var cache=Object.create(null);return function(arg){if(cache[arg]===undefined)cache[arg]=fn(arg);return cache[arg];};}
;// ../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
var emotion_serialize_esm_isDevelopment=false;var hyphenateRegex=/[A-Z]|^ms/g;var animationRegex=/_EMO_([^_]+?)_([^]*?)_EMO_/g;var isCustomProperty=function isCustomProperty(property){return property.charCodeAt(1)===45;};var isProcessableValue=function isProcessableValue(value){return value!=null&&typeof value!=='boolean';};var processStyleName=/* #__PURE__ */memoize(function(styleName){return isCustomProperty(styleName)?styleName:styleName.replace(hyphenateRegex,'-$&').toLowerCase();});var processStyleValue=function processStyleValue(key,value){switch(key){case'animation':case'animationName':{if(typeof value==='string'){return value.replace(animationRegex,function(match,p1,p2){cursor={name:p1,styles:p2,next:cursor};return p1;});}}}if(unitlessKeys[key]!==1&&!isCustomProperty(key)&&typeof value==='number'&&value!==0){return value+'px';}return value;};var noComponentSelectorMessage='Component selectors can only be used in conjunction with '+'@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware '+'compiler transform.';function handleInterpolation(mergedProps,registered,interpolation){if(interpolation==null){return'';}var componentSelector=interpolation;if(componentSelector.__emotion_styles!==undefined){return componentSelector;}switch(typeof interpolation){case'boolean':{return'';}case'object':{var keyframes=interpolation;if(keyframes.anim===1){cursor={name:keyframes.name,styles:keyframes.styles,next:cursor};return keyframes.name;}var serializedStyles=interpolation;if(serializedStyles.styles!==undefined){var next=serializedStyles.next;if(next!==undefined){// not the most efficient thing ever but this is a pretty rare case
// and there will be very few iterations of this generally
while(next!==undefined){cursor={name:next.name,styles:next.styles,next:cursor};next=next.next;}}var styles=serializedStyles.styles+";";return styles;}return createStringFromObject(mergedProps,registered,interpolation);}case'function':{if(mergedProps!==undefined){var previousCursor=cursor;var result=interpolation(mergedProps);cursor=previousCursor;return handleInterpolation(mergedProps,registered,result);}break;}}// finalize string values (regular strings and functions interpolated into css calls)
var asString=interpolation;if(registered==null){return asString;}var cached=registered[asString];return cached!==undefined?cached:asString;}function createStringFromObject(mergedProps,registered,obj){var string='';if(Array.isArray(obj)){for(var i=0;i<obj.length;i++){string+=handleInterpolation(mergedProps,registered,obj[i])+";";}}else{for(var key in obj){var value=obj[key];if(typeof value!=='object'){var asString=value;if(registered!=null&&registered[asString]!==undefined){string+=key+"{"+registered[asString]+"}";}else if(isProcessableValue(asString)){string+=processStyleName(key)+":"+processStyleValue(key,asString)+";";}}else{if(key==='NO_COMPONENT_SELECTOR'&&emotion_serialize_esm_isDevelopment){throw new Error(noComponentSelectorMessage);}if(Array.isArray(value)&&typeof value[0]==='string'&&(registered==null||registered[value[0]]===undefined)){for(var _i=0;_i<value.length;_i++){if(isProcessableValue(value[_i])){string+=processStyleName(key)+":"+processStyleValue(key,value[_i])+";";}}}else{var interpolated=handleInterpolation(mergedProps,registered,value);switch(key){case'animation':case'animationName':{string+=processStyleName(key)+":"+interpolated+";";break;}default:{string+=key+"{"+interpolated+"}";}}}}}}return string;}var labelPattern=/label:\s*([^\s;{]+)\s*(;|$)/g;// this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list
var cursor;function serializeStyles(args,registered,mergedProps){if(args.length===1&&typeof args[0]==='object'&&args[0]!==null&&args[0].styles!==undefined){return args[0];}var stringMode=true;var styles='';cursor=undefined;var strings=args[0];if(strings==null||strings.raw===undefined){stringMode=false;styles+=handleInterpolation(mergedProps,registered,strings);}else{var asTemplateStringsArr=strings;styles+=asTemplateStringsArr[0];}// we start at 1 since we've already handled the first arg
for(var i=1;i<args.length;i++){styles+=handleInterpolation(mergedProps,registered,args[i]);if(stringMode){var templateStringsArr=strings;styles+=templateStringsArr[i];}}// using a global regex with .exec is stateful so lastIndex has to be reset each time
labelPattern.lastIndex=0;var identifierName='';var match;// https://esbench.com/bench/5b809c2cf2949800a0f61fb5
while((match=labelPattern.exec(styles))!==null){identifierName+='-'+match[1];}var name=murmur2(styles)+identifierName;return{name:name,styles:styles,next:cursor};}
;// ../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser=true;function getRegisteredStyles(registered,registeredStyles,classNames){var rawClassName='';classNames.split(' ').forEach(function(className){if(registered[className]!==undefined){registeredStyles.push(registered[className]+";");}else if(className){rawClassName+=className+" ";}});return rawClassName;}var registerStyles=function registerStyles(cache,serialized,isStringTag){var className=cache.key+"-"+serialized.name;if(// we only need to add the styles to the registered cache if the
// class name could be used further down
// the tree but if it's a string tag, we know it won't
// so we don't have to add it to registered cache.
// this improves memory usage since we can avoid storing the whole style string
(isStringTag===false||// we need to always store it if we're in compat mode and
// in node since emotion-server relies on whether a style is in
// the registered cache to know whether a style is global or not
// also, note that this check will be dead code eliminated in the browser
isBrowser===false)&&cache.registered[className]===undefined){cache.registered[className]=serialized.styles;}};var insertStyles=function insertStyles(cache,serialized,isStringTag){registerStyles(cache,serialized,isStringTag);var className=cache.key+"-"+serialized.name;if(cache.inserted[serialized.name]===undefined){var current=serialized;do{cache.insert(serialized===current?"."+className:'',current,cache.sheet,true);current=current.next;}while(current!==undefined);}};
;// ../../node_modules/@emotion/css/create-instance/dist/emotion-css-create-instance.esm.js
function insertWithoutScoping(cache,serialized){if(cache.inserted[serialized.name]===undefined){return cache.insert('',serialized,cache.sheet,true);}}function merge(registered,css,className){var registeredStyles=[];var rawClassName=getRegisteredStyles(registered,registeredStyles,className);if(registeredStyles.length<2){return className;}return rawClassName+css(registeredStyles);}var createEmotion=function createEmotion(options){var cache=createCache(options);cache.sheet.speedy=function(value){this.isSpeedy=value;};cache.compat=true;var css=function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var serialized=serializeStyles(args,cache.registered,undefined);insertStyles(cache,serialized,false);return cache.key+"-"+serialized.name;};var keyframes=function keyframes(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}var serialized=serializeStyles(args,cache.registered);var animation="animation-"+serialized.name;insertWithoutScoping(cache,{name:serialized.name,styles:"@keyframes "+animation+"{"+serialized.styles+"}"});return animation;};var injectGlobal=function injectGlobal(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}var serialized=serializeStyles(args,cache.registered);insertWithoutScoping(cache,serialized);};var cx=function cx(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return merge(cache.registered,css,classnames(args));};return{css:css,cx:cx,injectGlobal:injectGlobal,keyframes:keyframes,hydrate:function hydrate(ids){ids.forEach(function(key){cache.inserted[key]=true;});},flush:function flush(){cache.registered={};cache.inserted={};cache.sheet.flush();},sheet:cache.sheet,cache:cache,getRegisteredStyles:getRegisteredStyles.bind(null,cache.registered),merge:merge.bind(null,cache.registered,css)};};var classnames=function classnames(args){var cls='';for(var i=0;i<args.length;i++){var arg=args[i];if(arg==null)continue;var toAdd=void 0;switch(typeof arg){case'boolean':break;case'object':{if(Array.isArray(arg)){toAdd=classnames(arg);}else{toAdd='';for(var k in arg){if(arg[k]&&k){toAdd&&(toAdd+=' ');toAdd+=k;}}}break;}default:{toAdd=arg;}}if(toAdd){cls&&(cls+=' ');cls+=toAdd;}}return cls;};
;// ../../node_modules/@emotion/css/dist/emotion-css.esm.js
var _createEmotion=createEmotion({key:'css'}),flush=_createEmotion.flush,hydrate=_createEmotion.hydrate,cx=_createEmotion.cx,emotion_css_esm_merge=_createEmotion.merge,emotion_css_esm_getRegisteredStyles=_createEmotion.getRegisteredStyles,injectGlobal=_createEmotion.injectGlobal,keyframes=_createEmotion.keyframes,emotion_css_esm_css=_createEmotion.css,sheet=_createEmotion.sheet,cache=_createEmotion.cache;
;// ./src/autofill/content/components/constants/styles.ts
const lightTheme = {
    transparent: {
        hover: `rgb(0 0 0 / 0.02)`,
    },
    shadow: `rgba(168 179 200)`,
    primary: {
        100: `rgba(219, 229, 246)`,
        300: `rgba(121, 161, 233)`,
        600: `rgba(23, 93, 220)`,
        700: `rgba(26, 65, 172)`,
    },
    secondary: {
        100: `rgba(230, 233, 239)`,
        300: `rgba(168, 179, 200)`,
        500: `rgba(90, 109, 145)`,
        600: `rgba(83, 99, 131)`,
        700: `rgba(63, 75, 99)`,
    },
    success: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    danger: {
        100: `rgba(255, 236, 239)`,
        600: `rgba(203, 38, 58)`,
        700: `rgba(149, 27, 42)`,
    },
    warning: {
        100: `rgba(255, 248, 228)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(172, 88, 0)`,
    },
    info: {
        100: `rgba(219, 229, 246)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(26, 65, 172)`,
    },
    art: {
        primary: `rgba(2, 15, 102)`,
        accent: `rgba(44, 221, 223)`,
    },
    text: {
        main: `rgba(27, 32, 41)`,
        muted: `rgba(90, 109, 145)`,
        contrast: `rgba(255, 255, 255)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(192, 17, 118)`,
    },
    background: {
        DEFAULT: `rgba(255, 255, 255)`,
        alt: `rgba(243, 246, 249)`,
        alt2: `rgba(23, 92, 219)`,
        alt3: `rgba(26, 65, 172)`,
        alt4: `rgba(2, 15, 102)`,
    },
    brandLogo: `rgba(23, 93, 220)`,
};
const darkTheme = {
    transparent: {
        hover: `rgb(255 255 255 / 0.02)`,
    },
    shadow: `rgba(0, 0, 0)`,
    primary: {
        100: `rgba(26, 39, 78)`,
        300: `rgba(26, 65, 172)`,
        600: `rgba(101, 171, 255)`,
        700: `rgba(170, 195, 239)`,
    },
    secondary: {
        100: `rgba(48, 57, 70)`,
        300: `rgba(82, 91, 106)`,
        500: `rgba(121, 128, 142)`,
        600: `rgba(143, 152, 166)`,
        700: `rgba(158, 167, 181)`,
    },
    success: {
        100: `rgba(11, 111, 21)`,
        600: `rgba(107, 241, 120)`,
        700: `rgba(191, 236, 195)`,
    },
    danger: {
        100: `rgba(149, 27, 42)`,
        600: `rgba(255, 78, 99)`,
        700: `rgba(255, 236, 239)`,
    },
    warning: {
        100: `rgba(172, 88, 0)`,
        600: `rgba(255, 191, 0)`,
        700: `rgba(255, 248, 228)`,
    },
    info: {
        100: `rgba(26, 65, 172)`,
        600: `rgba(121, 161, 233)`,
        700: `rgba(219, 229, 246)`,
    },
    art: {
        primary: `rgba(243, 246, 249)`,
        accent: `rgba(44, 221, 233)`,
    },
    text: {
        main: `rgba(243, 246, 249)`,
        muted: `rgba(136, 152, 181)`,
        contrast: `rgba(18 26 39)`,
        alt2: `rgba(255, 255, 255)`,
        code: `rgba(255, 143, 208)`,
    },
    background: {
        DEFAULT: `rgba(32, 39, 51)`,
        alt: `rgba(18, 26, 39)`,
        alt2: `rgba(47, 52, 61)`,
        alt3: `rgba(48, 57, 70)`,
        alt4: `rgba(18, 26, 39)`,
    },
    brandLogo: `rgba(255, 255, 255)`,
};
const styles_themes = {
    light: lightTheme,
    dark: darkTheme,
    // For compatibility
    system: lightTheme,
};
const spacing = {
    4: `16px`,
    3: `12px`,
    2: `8px`,
    "1.5": `6px`,
    1: `4px`,
};
const border = {
    radius: {
        large: `8px`,
        full: `9999px`,
    },
};
const typography = {
    body1: `
    line-height: 24px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
  `,
    body2: `
    line-height: 20px;
    font-family: Roboto, sans-serif;
    font-size: 14px;
  `,
    helperMedium: `
    line-height: 16px;
    font-family: Roboto, sans-serif;
    font-size: 12px;
  `,
};
const styles_ruleNames = {
    fill: "fill",
    stroke: "stroke",
};
/*
 * `color` is an intentionally generic name here, since either fill or stroke may apply, due to
 * inconsistent SVG construction. This consequently precludes dynamic multi-colored icons here.
 */
const styles_buildIconColorRule = (color, rule = styles_ruleNames.fill) => `
  ${rule}: ${color};
`;
const animations = {
    spin: `
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  `,
};
function scrollbarStyles(theme, color) {
    const thumbColor = (color === null || color === void 0 ? void 0 : color.thumb) || styles_themes[theme].secondary["500"];
    const trackColor = (color === null || color === void 0 ? void 0 : color.track) || styles_themes[theme].background.alt;
    return {
        /* FireFox & Chrome support */
        default: `
      scrollbar-color: ${thumbColor} ${trackColor};
    `,
        /* Safari Support */
        safari: `
      ::-webkit-scrollbar {
        overflow: auto;
      }
      ::-webkit-scrollbar-thumb {
        border-width: 4px;
        border-style: solid;
        border-radius: 0.5rem;
        border-color: transparent;
        background-clip: content-box;
        background-color: ${thumbColor};
      }
      ::-webkit-scrollbar-track {
        ${trackColor};
      }
      ::-webkit-scrollbar-thumb:hover {
        ${styles_themes[theme].secondary["600"]};
      }
    `,
    };
}

;// ./src/autofill/content/components/icons/angle-down.ts



function AngleDown({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M13.53.47a.75.75 0 0 0-1.06 0L7 5.94 1.53.47A.75.75 0 1 0 .47 1.53l6 6a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/angle-up.ts



function AngleUp({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 8"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M.47 7.53a.75.75 0 0 0 1.06 0L7 2.06l5.47 5.47a.75.75 0 1 0 1.06-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/shield.ts



function Shield({ ariaHidden = true, color, theme }) {
    const shapeColor = color || styles_themes[theme].brandLogo;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M13.469.2A.647.647 0 0 0 13 0H1a.639.639 0 0 0-.468.2.641.641 0 0 0-.2.468v8a4.81 4.81 0 0 0 .348 1.777c.216.557.507 1.083.865 1.563.367.48.779.925 1.229 1.329.417.383.857.741 1.317 1.073.4.284.82.553 1.26.807.44.254.75.425.932.515.183.09.33.16.44.208.087.041.181.062.277.06a.58.58 0 0 0 .27-.063c.113-.05.259-.118.444-.208s.5-.262.932-.515c.432-.253.857-.523 1.26-.807.46-.332.9-.69 1.319-1.073.45-.404.861-.849 1.228-1.33.357-.48.648-1.005.865-1.562a4.79 4.79 0 0 0 .348-1.777v-8A.63.63 0 0 0 13.47.2Zm-1.547 8.54c0 2.9-4.921 5.392-4.921 5.392V1.714h4.92v7.027Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/brand-icon-container.ts



function BrandIconContainer({ iconLink, theme }) {
    const Icon = x `<div class=${brandIconContainerStyles}>${Shield({ theme })}</div>`;
    return iconLink ? x `<a href="${iconLink}" target="_blank" rel="noreferrer">${Icon}</a>` : Icon;
}
const brandIconContainerStyles = emotion_css_esm_css `
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;

  > svg {
    width: auto;
    height: 100%;
  }
`;

;// ./src/autofill/content/components/icons/business.ts



function Business({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M3.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM7.25 3a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM7.25 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM6.5 9.75A.75.75 0 0 1 7.25 9h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM2.5 6.75A.75.75 0 0 1 3.25 6h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM3.25 9a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z"
      />
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        fill-rule="evenodd"
        d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1Zm.5 1.5v13H4V13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5h2.5v-13h-9Z"
        clip-rule="evenodd"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/close.ts



function Close({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M.22.22a.75.75 0 0 1 1.06 0L7 5.94 12.72.22a.75.75 0 1 1 1.06 1.06L8.06 7l5.72 5.72a.75.75 0 1 1-1.06 1.06L7 8.06l-5.72 5.72a.75.75 0 0 1-1.06-1.06L5.94 7 .22 1.28a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/collection-shared.ts



function CollectionShared({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M3.5.75A.75.75 0 0 1 4.25 0h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 3.5.75ZM2.25 2a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-9.5ZM6 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 11.46a1.928 1.928 0 0 0-.586-1.386 2.035 2.035 0 0 0-2.828 0A1.928 1.928 0 0 0 3 11.461c0 .298.241.539.54.539h2.92a.54.54 0 0 0 .54-.54ZM8 11.46a2.928 2.928 0 0 0-.371-1.426A2.005 2.005 0 0 1 9 9.5a2.035 2.035 0 0 1 1.414.574A1.928 1.928 0 0 1 11 11.461a.54.54 0 0 1-.54.539H7.904c.063-.168.097-.35.097-.54Z"
      />
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        fill-rule="evenodd"
        d="M12 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10Zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h10Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/exclamation-triangle.ts



function ExclamationTriangle({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? themes[theme].secondary["300"] : color || themes[theme].text.main;
    return html `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11Z"
      />
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        d="M7.31639 5C7.01564 5 6.78295 5.26359 6.82025 5.56202L7.19525 8.56202C7.22653 8.81223 7.43923 9 7.69139 9H8.30861C8.56077 9 8.77347 8.81223 8.80475 8.56202L9.17975 5.56202C9.21705 5.26359 8.98436 5 8.68361 5H7.31639Z"
      />
      <path
        class=${css(buildIconColorRule(shapeColor, ruleNames.fill))}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.37384 1.01584C8.76324 -0.04174 7.23675 -0.041739 6.62616 1.01584L0.2149 12.1205C-0.395695 13.1781 0.36755 14.5 1.58874 14.5H14.4113C15.6325 14.5 16.3957 13.1781 15.7851 12.1205L9.37384 1.01584ZM14.4861 12.8705L8.0748 1.76584C8.06066 1.74135 8.05029 1.7355 8.04562 1.73291C8.03694 1.7281 8.02122 1.72266 8 1.72266C7.97878 1.72266 7.96305 1.7281 7.95438 1.73291C7.94971 1.7355 7.93934 1.74135 7.9252 1.76584L1.51394 12.8705C1.4998 12.895 1.49992 12.9069 1.50001 12.9122C1.50018 12.9221 1.50333 12.9385 1.51394 12.9568C1.52455 12.9752 1.53713 12.9861 1.54563 12.9912C1.55021 12.994 1.56046 13 1.58874 13H14.4113C14.4395 13 14.4498 12.994 14.4544 12.9912C14.4629 12.9861 14.4754 12.9752 14.4861 12.9568C14.4967 12.9385 14.4998 12.9221 14.5 12.9122C14.5001 12.9069 14.5002 12.895 14.4861 12.8705Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/external-link.ts



function ExternalLink({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M1.5 2.75c0-.69.56-1.25 1.25-1.25h3.5a.75.75 0 0 0 0-1.5h-3.5A2.75 2.75 0 0 0 0 2.75v8.5A2.75 2.75 0 0 0 2.75 14h8.5A2.75 2.75 0 0 0 14 11.25v-3.5a.75.75 0 0 0-1.5 0v3.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
      />
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M9.75 0a.75.75 0 0 0 0 1.5h1.69L7.22 5.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.69a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75h-3.5Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/family.ts



function Family({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        fill-rule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-1.5 0a6.47 6.47 0 0 1-.932 3.356 3.732 3.732 0 0 0-1.106-.784 3.547 3.547 0 0 0-.516-.19 2 2 0 1 0-3.444-1.297c-.323-.216-.681-.4-1.069-.536a2.5 2.5 0 1 0-3.065-.155 5.405 5.405 0 0 0-1.59.674 3.912 3.912 0 0 0-.977.893A6.5 6.5 0 1 1 14.5 8ZM2.531 11.514a.75.75 0 0 0 .103-.13c.276-.436.552-.801.942-1.047a3.837 3.837 0 0 1 1.177-.492 5.243 5.243 0 0 1 .845-.095h.007l.022.001h.023c.436 0 .865.07 1.262.205.381.13.733.335 1.037.584.175.143.324.3.448.465l.164.226a4.13 4.13 0 0 0-1.035 1.565 4.407 4.407 0 0 0-.276 1.537c0 .043.004.085.01.125a6.5 6.5 0 0 1-4.729-2.944Zm10.033.964.07.08a6.481 6.481 0 0 1-3.894 1.9.757.757 0 0 0 .01-.125c0-.35.062-.694.181-1.013a2.63 2.63 0 0 1 .505-.842c.213-.237.462-.42.73-.543.267-.123.55-.185.834-.185.284 0 .567.062.835.185.267.123.516.306.729.543ZM7 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/folder.ts



function Folder({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 13"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M2 0a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8L6.586.586A2 2 0 0 0 5.172 0H2Zm5.379 3.5L5.525 1.646a.5.5 0 0 0-.353-.146H2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7.379Z"
        fill-rule="evenodd"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/globe.ts



function Globe({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 14.5c.23 0 .843-.226 1.487-1.514.524-1.048.906-2.526.994-4.236H5.519c.088 1.71.47 3.188.994 4.236C7.157 14.274 7.77 14.5 8 14.5ZM5.52 7.25h4.96c-.087-1.71-.47-3.188-.993-4.236C8.843 1.726 8.23 1.5 8 1.5c-.23 0-.843.226-1.487 1.514C5.99 4.062 5.607 5.54 5.52 7.25Zm6.463 0h2.474a6.506 6.506 0 0 0-3.766-5.168c.718 1.305 1.197 3.125 1.292 5.168Zm-7.966 0c.095-2.043.574-3.863 1.292-5.168A6.506 6.506 0 0 0 1.543 7.25h2.474Zm7.966 1.5c-.095 2.043-.574 3.863-1.292 5.168a6.506 6.506 0 0 0 3.766-5.168h-2.474Zm-6.677 5.185c-.718-1.305-1.197-3.125-1.292-5.168H1.54a6.506 6.506 0 0 0 3.766 5.168Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/pencil-square.ts



function PencilSquare({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M11.013.677a1.75 1.75 0 0 1 2.474 0l.836.836a1.75 1.75 0 0 1 0 2.475L9.03 9.28a.75.75 0 0 1-.348.197l-3 .75a.75.75 0 0 1-.91-.91l.75-3a.75.75 0 0 1 .198-.348L11.013.677Zm1.414 1.06a.25.25 0 0 0-.354 0l-.646.647a.75.75 0 0 1 .103.086l1 1a.751.751 0 0 1 .087.103l.646-.646a.25.25 0 0 0 0-.353l-.836-.836Zm-.854 2.88a.752.752 0 0 1-.103-.087l-1-1a.756.756 0 0 1-.087-.103L6.928 6.884 6.531 8.47l1.586-.397 3.456-3.456Z"
      />
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M2.75 2.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-3.5a.75.75 0 0 1 1.5 0v3.5A2.75 2.75 0 0 1 11.25 15h-8.5A2.75 2.75 0 0 1 0 12.25v-8.5A2.75 2.75 0 0 1 2.75 1h3.5a.75.75 0 0 1 0 1.5h-3.5Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/spinner.ts



function Spinner({ ariaHidden = true, color, disabled, theme, disableSpin = false, }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      class=${disableSpin ? "" : animation}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM11.536 11.536a1.5 1.5 0 1 1 2.12 2.12 1.5 1.5 0 0 1-2.12-2.12ZM9.5 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM0 8a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM4.464 13.657a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.12ZM2.343 2.343a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.12-2.12Z"
      />
    </svg>
  `;
}
const animation = emotion_css_esm_css `
  animation: ${keyframes(animations.spin)} 2s infinite linear;
`;

;// ./src/autofill/content/components/icons/user.ts



function User({ ariaHidden = true, color, disabled, theme }) {
    const shapeColor = disabled ? styles_themes[theme].secondary["300"] : color || styles_themes[theme].text.main;
    return x `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
      fill="none"
      aria-hidden="${ariaHidden}"
    >
      <path
        class=${emotion_css_esm_css(styles_buildIconColorRule(shapeColor, styles_ruleNames.fill))}
        d="M9.203 7.339a4 4 0 1 0-4.407 0A7.033 7.033 0 0 0 2.05 8.953a6.655 6.655 0 0 0-1.517 2.162A6.393 6.393 0 0 0 0 13.667C0 14.403.597 15 1.333 15h11.334c.736 0 1.333-.597 1.333-1.333 0-.876-.181-1.743-.533-2.552a6.654 6.654 0 0 0-1.517-2.162 7.032 7.032 0 0 0-2.747-1.614ZM9.5 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm2.592 7.714c.247.57.384 1.175.405 1.786H1.503a4.897 4.897 0 0 1 .405-1.786 5.156 5.156 0 0 1 1.177-1.675 5.534 5.534 0 0 1 1.787-1.136A5.805 5.805 0 0 1 7 8.5c.732 0 1.456.137 2.128.403.673.265 1.28.652 1.787 1.136a5.156 5.156 0 0 1 1.177 1.675Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/icons/index.ts
















;// ./src/autofill/content/components/buttons/close-button.ts




function CloseButton({ handleCloseNotification, i18n, theme }) {
    return x `
    <button
      type="button"
      aria-label=${i18n.close}
      class=${closeButtonStyles(theme)}
      @click=${handleCloseNotification}
    >
      ${Close({ theme })}
    </button>
  `;
}
const closeButtonStyles = (theme) => emotion_css_esm_css `
  border: 1px solid transparent;
  border-radius: ${spacing["1"]};
  background-color: transparent;
  cursor: pointer;
  width: 36px;
  height: 36px;

  :hover {
    border: 1px solid ${styles_themes[theme].primary["600"]};
  }

  > svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
`;

;// ./src/autofill/content/components/notification/header-message.ts



function NotificationHeaderMessage({ message, theme }) {
    return x `
    <span title=${message} class=${notificationHeaderMessageStyles(theme)}>${message}</span>
  `;
}
const notificationHeaderMessageStyles = (theme) => emotion_css_esm_css `
  flex-grow: 1;
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 28px;
  white-space: nowrap;
  color: ${styles_themes[theme].text.main};
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

;// ./src/autofill/content/components/notification/header.ts







const componentClassPrefix = "notification-header";
const { css: header_css } = createEmotion({
    key: componentClassPrefix,
});
function NotificationHeader({ i18n, message, standalone = false, theme = ThemeTypes.Light, handleCloseNotification, }) {
    const showIcon = true;
    const isDismissable = true;
    return x `
    <div class=${notificationHeaderStyles({ standalone, theme })}>
      ${showIcon ? BrandIconContainer({ theme }) : null}
      ${message ? NotificationHeaderMessage({ message, theme }) : null}
      ${isDismissable ? CloseButton({ handleCloseNotification, i18n, theme }) : null}
    </div>
  `;
}
const notificationHeaderStyles = ({ standalone, theme, }) => header_css `
  gap: ${spacing[2]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${styles_themes[theme].background.DEFAULT};
  padding: 12px 16px 8px 16px;
  white-space: nowrap;

  ${standalone
    ? header_css ``
    : header_css `
        border-bottom: 0.5px solid ${styles_themes[theme].secondary["300"]};
      `}
`;

;// ./src/autofill/content/components/illustrations/celebrate.ts


// This icon has static multi-colors for each theme
function Celebrate({ theme }) {
    if (theme === ThemeTypes.Dark) {
        return x `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
        <path
          d="M32.6273 37.2714L3.88045 49.2492C2.98525 49.6222 1.95344 49.4181 1.26769 48.7323C0.581933 48.0466 0.377816 47.0148 0.750816 46.1196L12.7287 17.3728C13.622 15.2288 15.9911 14.1069 18.2158 14.7743L19.0257 15.0173C26.6887 17.3161 32.6839 23.3113 34.9828 30.9743L35.2257 31.7842C35.8931 34.0089 34.7712 36.3781 32.6273 37.2714Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.6426 44.7649C12.9332 43.4627 11.2495 41.9951 9.62721 40.3728C8.00492 38.7505 6.53732 37.0668 5.23507 35.3574L5.74088 34.1434C7.10571 35.9897 8.67231 37.8151 10.4286 39.5714C12.1848 41.3277 14.0103 42.8943 15.8566 44.2591L14.6426 44.7649ZM9.86079 46.7574C8.69632 45.7641 7.54698 44.7037 6.42165 43.5783C5.29632 42.453 4.23589 41.3037 3.24264 40.1392L2.755 41.3095C3.65901 42.3487 4.6147 43.3741 5.62028 44.3797C6.62586 45.3853 7.65127 46.341 8.69048 47.245L9.86079 46.7574ZM21.0629 42.0898C18.5607 40.5957 16.0508 38.6488 13.701 36.299C11.3512 33.9492 9.40432 31.4393 7.91017 28.9371L8.45815 27.622C9.94515 30.2728 11.9779 32.973 14.5024 35.4976C17.027 38.0221 19.7272 40.0548 22.378 41.5418L21.0629 42.0898ZM10.9297 21.6902C11.8698 25.118 14.18 28.9793 17.6004 32.3996C21.0207 35.82 24.882 38.1302 28.3098 39.0703L30.1472 38.3047C29.5643 38.2191 28.9477 38.0815 28.3004 37.8889C25.1702 36.9575 21.6052 34.8017 18.4018 31.5982C15.1983 28.3948 13.0425 24.8297 12.1111 21.6996C11.9185 21.0523 11.7809 20.4357 11.6953 19.8528L10.9297 21.6902Z"
          fill="#F3F6F9"
        />
        <path
          d="M27.706 22.294C32.3531 26.9411 34.6852 32.1435 32.9149 33.9138C31.1445 35.6842 25.9421 33.3521 21.295 28.7049C16.6479 24.0578 14.3158 18.8554 16.0861 17.085C17.8564 15.3147 23.0588 17.6468 27.706 22.294Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31.6828 29.6463C30.8097 27.6986 29.1563 25.347 26.9046 23.0953C24.6529 20.8436 22.3013 19.1902 20.3536 18.3171C19.376 17.8788 18.5567 17.6628 17.9359 17.6303C17.3148 17.5979 17.0236 17.7503 16.8875 17.8864C16.7514 18.0225 16.5989 18.3138 16.6314 18.9349C16.6638 19.5556 16.8799 20.3749 17.3182 21.3526C18.1912 23.3003 19.8447 25.6519 22.0964 27.9035C24.3481 30.1552 26.6996 31.8087 28.6473 32.6818C29.625 33.12 30.4443 33.3361 31.0651 33.3685C31.6862 33.401 31.9774 33.2486 32.1135 33.1125C32.2496 32.9763 32.402 32.6851 32.3696 32.064C32.3371 31.4433 32.1211 30.624 31.6828 29.6463ZM32.9149 33.9138C34.6852 32.1435 32.3531 26.9411 27.706 22.294C23.0588 17.6468 17.8564 15.3147 16.0861 17.085C14.3158 18.8554 16.6479 24.0578 21.295 28.7049C25.9421 33.3521 31.1445 35.6842 32.9149 33.9138Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.053 15.3169C16.1064 14.7329 14.0334 15.7146 13.2517 17.5906L1.2739 46.3374C0.989218 47.0206 1.14501 47.8081 1.66839 48.3315C2.19178 48.8549 2.97928 49.0107 3.66253 48.726L32.4093 36.7482C34.2853 35.9665 35.267 33.8935 34.683 31.9469L34.44 31.137C32.1959 23.6565 26.3434 17.804 18.8629 15.5599L18.053 15.3169ZM12.2056 17.1547C13.2106 14.7428 15.8759 13.4806 18.3786 14.2314L19.1886 14.4744C27.034 16.828 33.1719 22.9659 35.5256 30.8113L35.7685 31.6213C36.5193 34.124 35.2571 36.7893 32.8452 37.7943L4.09841 49.7721C2.99125 50.2335 1.71514 49.981 0.867022 49.1329C0.0189018 48.2848 -0.233545 47.0087 0.227771 45.9015L12.2056 17.1547Z"
          fill="#175DDC"
        />
        <path
          d="M24.65 0.331121C24.6952 0.137206 24.8681 0 25.0672 0C25.2663 0 25.4391 0.137206 25.4843 0.331121L25.5055 0.421998C25.7994 1.68306 26.784 2.66773 28.0451 2.9616L28.136 2.98277C28.3299 3.02796 28.4671 3.20082 28.4671 3.39993C28.4671 3.59904 28.3299 3.77189 28.136 3.81708L28.0451 3.83826C26.784 4.13212 25.7994 5.11679 25.5055 6.37786L25.4843 6.46873C25.4391 6.66265 25.2663 6.79985 25.0672 6.79985C24.8681 6.79985 24.6952 6.66265 24.65 6.46873L24.6288 6.37786C24.335 5.11679 23.3503 4.13212 22.0892 3.83826L21.9984 3.81708C21.8044 3.77189 21.6672 3.59904 21.6672 3.39993C21.6672 3.20082 21.8044 3.02796 21.9984 2.98277L22.0892 2.9616C23.3503 2.66773 24.335 1.68306 24.6288 0.421997L24.65 0.331121Z"
          fill="#175DDC"
        />
        <path
          d="M46.183 8.83088C46.2282 8.63696 46.401 8.49976 46.6001 8.49976C46.7992 8.49976 46.9721 8.63696 47.0173 8.83088L47.0385 8.92175C47.3323 10.1828 48.317 11.1675 49.5781 11.4614L49.6689 11.4825C49.8628 11.5277 50 11.7006 50 11.8997C50 12.0988 49.8628 12.2716 49.6689 12.3168L49.5781 12.338C48.317 12.6319 47.3323 13.6165 47.0385 14.8776L47.0173 14.9685C46.9721 15.1624 46.7992 15.2996 46.6001 15.2996C46.401 15.2996 46.2282 15.1624 46.183 14.9685L46.1618 14.8776C45.8679 13.6165 44.8833 12.6319 43.6222 12.338L43.5313 12.3168C43.3374 12.2716 43.2002 12.0988 43.2002 11.8997C43.2002 11.7006 43.3374 11.5277 43.5313 11.4825L43.6222 11.4614C44.8833 11.1675 45.8679 10.1828 46.1618 8.92175L46.183 8.83088Z"
          fill="#175DDC"
        />
        <path
          d="M38.8164 43.3968C38.8616 43.2029 39.0344 43.0657 39.2335 43.0657C39.4327 43.0657 39.6055 43.2029 39.6507 43.3968L39.6719 43.4877C39.9657 44.7487 40.9504 45.7334 42.2115 46.0273L42.3024 46.0484C42.4963 46.0936 42.6335 46.2665 42.6335 46.4656C42.6335 46.6647 42.4963 46.8376 42.3024 46.8828L42.2115 46.9039C40.9504 47.1978 39.9657 48.1825 39.6719 49.4435L39.6507 49.5344C39.6055 49.7283 39.4327 49.8655 39.2335 49.8655C39.0344 49.8655 38.8616 49.7283 38.8164 49.5344L38.7952 49.4435C38.5013 48.1825 37.5167 47.1978 36.2556 46.9039L36.1647 46.8828C35.9708 46.8376 35.8336 46.6647 35.8336 46.4656C35.8336 46.2665 35.9708 46.0936 36.1647 46.0484L36.2556 46.0273C37.5167 45.7334 38.5013 44.7487 38.7952 43.4877L38.8164 43.3968Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M43.5439 27.4056C41.9949 25.8565 39.4834 25.8565 37.9343 27.4056C37.713 27.6269 37.3543 27.6269 37.133 27.4056C36.9117 27.1843 36.9117 26.8255 37.133 26.6042C39.1246 24.6126 42.3537 24.6126 44.3453 26.6042C44.5666 26.8255 44.5666 27.1843 44.3453 27.4056C44.124 27.6269 43.7652 27.6269 43.5439 27.4056Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M46.1043 21.7127C42.8784 19.8502 38.7535 20.9555 36.891 24.1814C36.7346 24.4524 36.388 24.5452 36.117 24.3888C35.8459 24.2323 35.7531 23.8857 35.9096 23.6147C38.085 19.8468 42.903 18.5558 46.671 20.7312C46.942 20.8877 47.0349 21.2342 46.8784 21.5053C46.7219 21.7763 46.3753 21.8691 46.1043 21.7127Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
          fill="#175DDC"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
          fill="#175DDC"
        />
        <path
          d="M34.7004 9.63307C34.7004 10.8849 33.6856 11.8997 32.4337 11.8997C31.1819 11.8997 30.1671 10.8849 30.1671 9.63307C30.1671 8.38125 31.1819 7.36646 32.4337 7.36646C33.6856 7.36646 34.7004 8.38125 34.7004 9.63307Z"
          fill="#79A1E9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M32.4337 10.7664C33.0596 10.7664 33.567 10.259 33.567 9.63307C33.567 9.00716 33.0596 8.49976 32.4337 8.49976C31.8078 8.49976 31.3004 9.00716 31.3004 9.63307C31.3004 10.259 31.8078 10.7664 32.4337 10.7664ZM32.4337 11.8997C33.6856 11.8997 34.7004 10.8849 34.7004 9.63307C34.7004 8.38125 33.6856 7.36646 32.4337 7.36646C31.1819 7.36646 30.1671 8.38125 30.1671 9.63307C30.1671 10.8849 31.1819 11.8997 32.4337 11.8997Z"
          fill="#175DDC"
        />
        <path
          d="M38.1002 16.4329C38.1002 17.3717 37.3391 18.1328 36.4003 18.1328C35.4614 18.1328 34.7003 17.3717 34.7003 16.4329C34.7003 15.494 35.4614 14.7329 36.4003 14.7329C37.3391 14.7329 38.1002 15.494 38.1002 16.4329Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.4003 16.9995C36.7132 16.9995 36.9669 16.7458 36.9669 16.4329C36.9669 16.1199 36.7132 15.8662 36.4003 15.8662C36.0873 15.8662 35.8336 16.1199 35.8336 16.4329C35.8336 16.7458 36.0873 16.9995 36.4003 16.9995ZM36.4003 18.1328C37.3391 18.1328 38.1002 17.3717 38.1002 16.4329C38.1002 15.494 37.3391 14.7329 36.4003 14.7329C35.4614 14.7329 34.7003 15.494 34.7003 16.4329C34.7003 17.3717 35.4614 18.1328 36.4003 18.1328Z"
          fill="#175DDC"
        />
        <path
          d="M31.8671 44.199C31.8671 45.1379 31.106 45.899 30.1671 45.899C29.2283 45.899 28.4672 45.1379 28.4672 44.199C28.4672 43.2601 29.2283 42.499 30.1671 42.499C31.106 42.499 31.8671 43.2601 31.8671 44.199Z"
          fill="#AAC3EF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.1671 44.7656C30.4801 44.7656 30.7338 44.5119 30.7338 44.199C30.7338 43.886 30.4801 43.6323 30.1671 43.6323C29.8542 43.6323 29.6005 43.886 29.6005 44.199C29.6005 44.5119 29.8542 44.7656 30.1671 44.7656ZM30.1671 45.899C31.106 45.899 31.8671 45.1379 31.8671 44.199C31.8671 43.2601 31.106 42.499 30.1671 42.499C29.2283 42.499 28.4672 43.2601 28.4672 44.199C28.4672 45.1379 29.2283 45.899 30.1671 45.899Z"
          fill="#175DDC"
        />
        <path
          d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
          fill="#175DDC"
        />
        <path
          d="M29.0337 13.3163C29.0337 14.4116 28.1458 15.2996 27.0504 15.2996C25.9551 15.2996 25.0671 14.4116 25.0671 13.3163C25.0671 12.221 25.9551 11.333 27.0504 11.333C28.1458 11.333 29.0337 12.221 29.0337 13.3163Z"
          fill="#FFBF00"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.0504 14.1663C27.5199 14.1663 27.9004 13.7857 27.9004 13.3163C27.9004 12.8469 27.5199 12.4663 27.0504 12.4663C26.581 12.4663 26.2004 12.8469 26.2004 13.3163C26.2004 13.7857 26.581 14.1663 27.0504 14.1663ZM27.0504 15.2996C28.1458 15.2996 29.0337 14.4116 29.0337 13.3163C29.0337 12.221 28.1458 11.333 27.0504 11.333C25.9551 11.333 25.0671 12.221 25.0671 13.3163C25.0671 14.4116 25.9551 15.2996 27.0504 15.2996Z"
          fill="#175DDC"
        />
        <path
          d="M45.4667 3.96658C45.4667 6.15726 43.6908 7.93316 41.5002 7.93316C39.3095 7.93316 37.5336 6.15726 37.5336 3.96658C37.5336 1.7759 39.3095 0 41.5002 0C43.6908 0 45.4667 1.7759 45.4667 3.96658Z"
          fill="#F3F6F9"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.5002 6.79985C43.0649 6.79985 44.3334 5.53136 44.3334 3.96658C44.3334 2.40181 43.0649 1.13331 41.5002 1.13331C39.9354 1.13331 38.6669 2.40181 38.6669 3.96658C38.6669 5.53136 39.9354 6.79985 41.5002 6.79985ZM41.5002 7.93316C43.6908 7.93316 45.4667 6.15726 45.4667 3.96658C45.4667 1.7759 43.6908 0 41.5002 0C39.3095 0 37.5336 1.7759 37.5336 3.96658C37.5336 6.15726 39.3095 7.93316 41.5002 7.93316Z"
          fill="#175DDC"
        />
      </svg>
    `;
    }
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
      <path
        d="M32.6275 37.2714L3.88069 49.2492C2.98549 49.6222 1.95368 49.4181 1.26793 48.7323C0.582178 48.0466 0.37806 47.0148 0.751061 46.1196L12.7289 17.3728C13.6222 15.2288 15.9914 14.1069 18.216 14.7743L19.026 15.0173C26.6889 17.3161 32.6841 23.3113 34.983 30.9743L35.226 31.7842C35.8934 34.0089 34.7714 36.3781 32.6275 37.2714Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.6425 44.7649C12.9331 43.4627 11.2494 41.9951 9.62709 40.3728C8.00479 38.7505 6.53719 37.0668 5.23494 35.3574L5.74076 34.1434C7.10558 35.9897 8.67219 37.8151 10.4285 39.5714C12.1847 41.3277 14.0102 42.8943 15.8565 44.2591L14.6425 44.7649ZM9.86067 46.7574C8.6962 45.7641 7.54686 44.7037 6.42153 43.5783C5.2962 42.453 4.23577 41.3037 3.24251 40.1392L2.75488 41.3095C3.65889 42.3487 4.61458 43.3741 5.62016 44.3797C6.62574 45.3853 7.65114 46.341 8.69036 47.245L9.86067 46.7574ZM21.0628 42.0898C18.5605 40.5957 16.0507 38.6488 13.7009 36.299C11.3511 33.9492 9.40419 31.4393 7.91005 28.9371L8.45802 27.622C9.94503 30.2728 11.9777 32.973 14.5023 35.4976C17.0268 38.0221 19.7271 40.0548 22.3779 41.5418L21.0628 42.0898ZM10.9296 21.6902C11.8696 25.118 14.1799 28.9793 17.6003 32.3996C21.0206 35.82 24.8819 38.1302 28.3097 39.0703L30.1471 38.3047C29.5641 38.2191 28.9476 38.0815 28.3003 37.8889C25.1701 36.9575 21.6051 34.8017 18.4016 31.5982C15.1982 28.3948 13.0424 24.8297 12.111 21.6996C11.9184 21.0523 11.7808 20.4357 11.6952 19.8528L10.9296 21.6902Z"
        fill="white"
      />
      <path
        d="M27.7062 22.294C32.3534 26.9411 34.6855 32.1435 32.9151 33.9138C31.1448 35.6842 25.9424 33.3521 21.2952 28.7049C16.6481 24.0578 14.316 18.8554 16.0863 17.085C17.8567 15.3147 23.0591 17.6468 27.7062 22.294Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31.6831 29.6463C30.81 27.6986 29.1565 25.347 26.9048 23.0953C24.6532 20.8436 22.3016 19.1902 20.3539 18.3171C19.3762 17.8788 18.5569 17.6628 17.9362 17.6303C17.3151 17.5979 17.0238 17.7503 16.8877 17.8864C16.7516 18.0225 16.5992 18.3138 16.6316 18.9349C16.6641 19.5556 16.8801 20.3749 17.3184 21.3526C18.1915 23.3003 19.8449 25.6519 22.0966 27.9035C24.3483 30.1552 26.6999 31.8087 28.6476 32.6818C29.6253 33.12 30.4446 33.3361 31.0653 33.3685C31.6864 33.401 31.9776 33.2486 32.1138 33.1125C32.2499 32.9763 32.4023 32.6851 32.3698 32.064C32.3374 31.4433 32.1213 30.624 31.6831 29.6463ZM32.9151 33.9138C34.6855 32.1435 32.3534 26.9411 27.7062 22.294C23.0591 17.6468 17.8567 15.3147 16.0863 17.085C14.316 18.8554 16.6481 24.0578 21.2952 28.7049C25.9424 33.3521 31.1448 35.6842 32.9151 33.9138Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.053 15.317C16.1064 14.733 14.0334 15.7148 13.2517 17.5907L1.2739 46.3375C0.989218 47.0207 1.14501 47.8083 1.66839 48.3316C2.19178 48.855 2.97928 49.0108 3.66253 48.7261L32.4093 36.7483C34.2853 35.9666 35.267 33.8936 34.683 31.947L34.44 31.1371C32.1959 23.6566 26.3434 17.8041 18.8629 15.56L18.053 15.317ZM12.2056 17.1548C13.2106 14.7429 15.8759 13.4807 18.3786 14.2315L19.1886 14.4745C27.034 16.8281 33.1719 22.966 35.5256 30.8115L35.7685 31.6214C36.5193 34.1241 35.2571 36.7895 32.8452 37.7944L4.09841 49.7723C2.99125 50.2336 1.71514 49.9811 0.867022 49.133C0.0189018 48.2849 -0.233545 47.0088 0.227771 45.9016L12.2056 17.1548Z"
        fill="#0E3781"
      />
      <path
        d="M24.6503 0.331121C24.6954 0.137206 24.8683 0 25.0674 0C25.2665 0 25.4394 0.137206 25.4846 0.331121L25.5057 0.421998C25.7996 1.68306 26.7843 2.66773 28.0453 2.9616L28.1362 2.98277C28.3301 3.02796 28.4673 3.20082 28.4673 3.39993C28.4673 3.59904 28.3301 3.77189 28.1362 3.81708L28.0453 3.83826C26.7843 4.13212 25.7996 5.11679 25.5057 6.37786L25.4846 6.46873C25.4394 6.66265 25.2665 6.79985 25.0674 6.79985C24.8683 6.79985 24.6954 6.66265 24.6503 6.46873L24.6291 6.37786C24.3352 5.11679 23.3505 4.13212 22.0895 3.83826L21.9986 3.81708C21.8047 3.77189 21.6675 3.59904 21.6675 3.39993C21.6675 3.20082 21.8047 3.02796 21.9986 2.98277L22.0895 2.9616C23.3505 2.66773 24.3352 1.68306 24.6291 0.421997L24.6503 0.331121Z"
        fill="#0E3781"
      />
      <path
        d="M46.183 8.831C46.2282 8.63708 46.401 8.49988 46.6001 8.49988C46.7992 8.49988 46.9721 8.63708 47.0173 8.831L47.0385 8.92188C47.3323 10.1829 48.317 11.1676 49.5781 11.4615L49.6689 11.4827C49.8628 11.5278 50 11.7007 50 11.8998C50 12.0989 49.8628 12.2718 49.6689 12.317L49.5781 12.3381C48.317 12.632 47.3323 13.6167 47.0385 14.8777L47.0173 14.9686C46.9721 15.1625 46.7992 15.2997 46.6001 15.2997C46.401 15.2997 46.2282 15.1625 46.183 14.9686L46.1618 14.8777C45.8679 13.6167 44.8833 12.632 43.6222 12.3381L43.5313 12.317C43.3374 12.2718 43.2002 12.0989 43.2002 11.8998C43.2002 11.7007 43.3374 11.5278 43.5313 11.4827L43.6222 11.4615C44.8833 11.1676 45.8679 10.1829 46.1618 8.92188L46.183 8.831Z"
        fill="#0E3781"
      />
      <path
        d="M38.8163 43.3969C38.8615 43.203 39.0343 43.0658 39.2334 43.0658C39.4325 43.0658 39.6054 43.203 39.6506 43.3969L39.6718 43.4878C39.9656 44.7489 40.9503 45.7335 42.2114 46.0274L42.3022 46.0486C42.4961 46.0938 42.6334 46.2666 42.6334 46.4657C42.6334 46.6648 42.4961 46.8377 42.3022 46.8829L42.2114 46.9041C40.9503 47.1979 39.9656 48.1826 39.6718 49.4437L39.6506 49.5345C39.6054 49.7284 39.4325 49.8657 39.2334 49.8657C39.0343 49.8657 38.8615 49.7284 38.8163 49.5345L38.7951 49.4437C38.5012 48.1826 37.5166 47.1979 36.2555 46.9041L36.1646 46.8829C35.9707 46.8377 35.8335 46.6648 35.8335 46.4657C35.8335 46.2666 35.9707 46.0938 36.1646 46.0486L36.2555 46.0274C37.5166 45.7335 38.5012 44.7489 38.7951 43.4878L38.8163 43.3969Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M43.5441 27.4057C41.995 25.8567 39.4835 25.8567 37.9345 27.4057C37.7132 27.627 37.3544 27.627 37.1331 27.4057C36.9118 27.1844 36.9118 26.8256 37.1331 26.6043C39.1247 24.6127 42.3538 24.6127 44.3454 26.6043C44.5667 26.8256 44.5667 27.1844 44.3454 27.4057C44.1241 27.627 43.7653 27.627 43.5441 27.4057Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.1044 21.7127C42.8786 19.8502 38.7536 20.9555 36.8912 24.1814C36.7347 24.4524 36.3881 24.5452 36.1171 24.3888C35.8461 24.2323 35.7532 23.8857 35.9097 23.6147C38.0851 19.8468 42.9032 18.5558 46.6711 20.7312C46.9421 20.8877 47.035 21.2342 46.8785 21.5053C46.722 21.7763 46.3755 21.8691 46.1044 21.7127Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4675 7.93311C13.6582 7.93311 15.4341 9.70901 15.4341 11.8997C15.4341 12.2127 15.6878 12.4664 16.0007 12.4664C16.3137 12.4664 16.5674 12.2127 16.5674 11.8997C16.5674 9.0831 14.2841 6.7998 11.4675 6.7998C11.1545 6.7998 10.9008 7.0535 10.9008 7.36646C10.9008 7.67941 11.1545 7.93311 11.4675 7.93311Z"
        fill="#0E3781"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.553 3.36429C16.6057 4.12949 17.6494 6.41384 16.8842 8.46654C16.7749 8.75978 16.924 9.08612 17.2173 9.19543C17.5105 9.30475 17.8368 9.15564 17.9462 8.8624C18.93 6.22322 17.5881 3.28619 14.9489 2.30236C14.6556 2.19305 14.3293 2.34215 14.22 2.63539C14.1107 2.92864 14.2598 3.25497 14.553 3.36429Z"
        fill="#0E3781"
      />
      <path
        d="M34.7002 9.63307C34.7002 10.8849 33.6854 11.8997 32.4336 11.8997C31.1818 11.8997 30.167 10.8849 30.167 9.63307C30.167 8.38125 31.1818 7.36646 32.4336 7.36646C33.6854 7.36646 34.7002 8.38125 34.7002 9.63307Z"
        fill="#99BAF4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.4336 10.7664C33.0595 10.7664 33.5669 10.259 33.5669 9.63307C33.5669 9.00716 33.0595 8.49976 32.4336 8.49976C31.8077 8.49976 31.3003 9.00716 31.3003 9.63307C31.3003 10.259 31.8077 10.7664 32.4336 10.7664ZM32.4336 11.8997C33.6854 11.8997 34.7002 10.8849 34.7002 9.63307C34.7002 8.38125 33.6854 7.36646 32.4336 7.36646C31.1818 7.36646 30.167 8.38125 30.167 9.63307C30.167 10.8849 31.1818 11.8997 32.4336 11.8997Z"
        fill="#0E3781"
      />
      <path
        d="M38.1001 16.433C38.1001 17.3719 37.339 18.133 36.4002 18.133C35.4613 18.133 34.7002 17.3719 34.7002 16.433C34.7002 15.4941 35.4613 14.733 36.4002 14.733C37.339 14.733 38.1001 15.4941 38.1001 16.433Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36.4002 16.9997C36.7131 16.9997 36.9668 16.746 36.9668 16.433C36.9668 16.12 36.7131 15.8663 36.4002 15.8663C36.0872 15.8663 35.8335 16.12 35.8335 16.433C35.8335 16.746 36.0872 16.9997 36.4002 16.9997ZM36.4002 18.133C37.339 18.133 38.1001 17.3719 38.1001 16.433C38.1001 15.4941 37.339 14.733 36.4002 14.733C35.4613 14.733 34.7002 15.4941 34.7002 16.433C34.7002 17.3719 35.4613 18.133 36.4002 18.133Z"
        fill="#0E3781"
      />
      <path
        d="M31.8672 44.1991C31.8672 45.138 31.1061 45.8991 30.1672 45.8991C29.2284 45.8991 28.4673 45.138 28.4673 44.1991C28.4673 43.2602 29.2284 42.4991 30.1672 42.4991C31.1061 42.4991 31.8672 43.2602 31.8672 44.1991Z"
        fill="#DBE5F6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30.1672 44.7658C30.4802 44.7658 30.7339 44.5121 30.7339 44.1991C30.7339 43.8862 30.4802 43.6325 30.1672 43.6325C29.8543 43.6325 29.6006 43.8862 29.6006 44.1991C29.6006 44.5121 29.8543 44.7658 30.1672 44.7658ZM30.1672 45.8991C31.1061 45.8991 31.8672 45.138 31.8672 44.1991C31.8672 43.2602 31.1061 42.4991 30.1672 42.4991C29.2284 42.4991 28.4673 43.2602 28.4673 44.1991C28.4673 45.138 29.2284 45.8991 30.1672 45.8991Z"
        fill="#0E3781"
      />
      <path
        d="M47.7334 33.9993C47.7334 35.5641 46.4649 36.8326 44.9002 36.8326C43.3354 36.8326 42.0669 35.5641 42.0669 33.9993C42.0669 32.4345 43.3354 31.166 44.9002 31.166C46.4649 31.166 47.7334 32.4345 47.7334 33.9993Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M44.9002 35.6993C45.839 35.6993 46.6001 34.9382 46.6001 33.9993C46.6001 33.0604 45.839 32.2993 44.9002 32.2993C43.9613 32.2993 43.2002 33.0604 43.2002 33.9993C43.2002 34.9382 43.9613 35.6993 44.9002 35.6993ZM44.9002 36.8326C46.4649 36.8326 47.7334 35.5641 47.7334 33.9993C47.7334 32.4345 46.4649 31.166 44.9002 31.166C43.3354 31.166 42.0669 32.4345 42.0669 33.9993C42.0669 35.5641 43.3354 36.8326 44.9002 36.8326Z"
        fill="#0E3781"
      />
      <path
        d="M29.034 13.3164C29.034 14.4118 28.146 15.2997 27.0507 15.2997C25.9553 15.2997 25.0674 14.4118 25.0674 13.3164C25.0674 12.2211 25.9553 11.3331 27.0507 11.3331C28.146 11.3331 29.034 12.2211 29.034 13.3164Z"
        fill="#FFBF00"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0507 14.1664C27.5201 14.1664 27.9007 13.7859 27.9007 13.3164C27.9007 12.847 27.5201 12.4664 27.0507 12.4664C26.5812 12.4664 26.2007 12.847 26.2007 13.3164C26.2007 13.7859 26.5812 14.1664 27.0507 14.1664ZM27.0507 15.2997C28.146 15.2997 29.034 14.4118 29.034 13.3164C29.034 12.2211 28.146 11.3331 27.0507 11.3331C25.9553 11.3331 25.0674 12.2211 25.0674 13.3164C25.0674 14.4118 25.9553 15.2997 27.0507 15.2997Z"
        fill="#0E3781"
      />
      <path
        d="M45.4669 3.96658C45.4669 6.15726 43.691 7.93316 41.5003 7.93316C39.3096 7.93316 37.5337 6.15726 37.5337 3.96658C37.5337 1.7759 39.3096 0 41.5003 0C43.691 0 45.4669 1.7759 45.4669 3.96658Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.5003 6.79985C43.065 6.79985 44.3335 5.53136 44.3335 3.96658C44.3335 2.40181 43.065 1.13331 41.5003 1.13331C39.9355 1.13331 38.667 2.40181 38.667 3.96658C38.667 5.53136 39.9355 6.79985 41.5003 6.79985ZM41.5003 7.93316C43.691 7.93316 45.4669 6.15726 45.4669 3.96658C45.4669 1.7759 43.691 0 41.5003 0C39.3096 0 37.5337 1.7759 37.5337 3.96658C37.5337 6.15726 39.3096 7.93316 41.5003 7.93316Z"
        fill="#0E3781"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/illustrations/keyhole.ts


// This icon has static multi-colors for each theme
function Keyhole({ theme }) {
    if (theme === ThemeTypes.Dark) {
        return x `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
        <path
          fill="#79A1E9"
          fill-rule="evenodd"
          d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#79A1E9"
          d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
        />
        <path fill="#F3F6F9" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          clip-rule="evenodd"
        />
        <path
          fill="#F3F6F9"
          d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M67.604 76H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.769-2H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M29.628 60c1.134 1.034 1.719 2.571 1.387 4.083L28.835 74H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 1 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.633l-2.637-12Zm1.608-2H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.996.996 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.195 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#FFBF00"
          d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
          clip-rule="evenodd"
        />
      </svg>
    `;
    }
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path
        fill="#99BAF4"
        fill-rule="evenodd"
        d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#99BAF4"
        d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
      />
      <path fill="#fff" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M67.605 76H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.77-2H50a8 8 0 0 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M29.628 60c1.134 1.034 1.72 2.571 1.387 4.083L28.835 74H50a8 8 0 0 0 0-16H27.215a31.117 31.117 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 0 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.634l-2.638-12Zm1.609-2H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 1 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.995.995 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.196 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#FFBF00"
        d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/illustrations/warning.ts

// This icon has static multi-colors for each theme
function Warning() {
    return x `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
      <path
        fill="#FFBF00"
        d="M11.717.999a1.975 1.975 0 0 0-3.434 0l-8.014 14c-.764 1.333.19 3 1.717 3h16.028c1.527 0 2.48-1.667 1.717-3zm6.713 14.745-8.014-14a.475.475 0 0 0-.832 0l-8.014 14a.5.5 0 0 0 .416.755h16.028a.5.5 0 0 0 .416-.755z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M11.717 1a1.975 1.975 0 0 0-3.434 0L.269 15c-.764 1.333.19 3 1.717 3h16.028c1.527 0 2.48-1.667 1.717-3L11.717 1Zm6.713 14.745-8.014-14a.475.475 0 0 0-.832 0l-8.014 14a.5.5 0 0 0 .416.755h16.028a.5.5 0 0 0 .416-.755Z"
      />
      <path
        fill="#0E3781"
        d="M11.25 13.587c0 .697-.56 1.261-1.25 1.261s-1.25-.564-1.25-1.26c0-.697.56-1.261 1.25-1.261s1.25.564 1.25 1.26ZM9.003 6.023a.5.5 0 0 0-.496.561l.501 4.043a.5.5 0 0 0 .496.439h.992a.5.5 0 0 0 .496-.439l.5-4.043a.5.5 0 0 0-.495-.561H9.003Z"
      />
    </svg>
  `;
}

;// ./src/autofill/content/components/illustrations/index.ts




;// ./src/autofill/content/components/notification/at-risk-password/message.ts



function AtRiskNotificationMessage({ message, theme }) {
    return x `
    <div>
      ${message
        ? x `
            <span title=${message} class=${atRiskNotificationMessageStyles(theme)}>
              ${message}
            </span>
          `
        : E}
    </div>
  `;
}
const baseTextStyles = emotion_css_esm_css `
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 24px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;
const atRiskNotificationMessageStyles = (theme) => emotion_css_esm_css `
  ${baseTextStyles}

  color: ${styles_themes[theme].text.main};
  font-weight: 400;
  white-space: normal;
  word-break: break-word;
  display: inline;
`;

;// ./src/autofill/content/components/notification/at-risk-password/body.ts





const body_componentClassPrefix = "at-risk-notification-body";
const { css: body_css } = createEmotion({
    key: body_componentClassPrefix,
});
function AtRiskNotificationBody({ riskMessage, theme }) {
    return x `
    <div class=${atRiskNotificationBodyStyles({ theme })}>
      <div class=${iconContainerStyles}>${Warning()}</div>
      ${riskMessage
        ? AtRiskNotificationMessage({
            message: riskMessage,
            theme,
        })
        : E}
    </div>
  `;
}
const iconContainerStyles = body_css `
  > svg {
    width: 50px;
    height: auto;
  }
`;
const atRiskNotificationBodyStyles = ({ theme }) => body_css `
  gap: ${spacing[4]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${styles_themes[theme].background.alt};
  padding: 12px;
`;

;// ./src/autofill/content/components/buttons/action-button.ts




function ActionButton({ buttonText, disabled = false, isLoading = false, theme, handleClick, fullWidth = true, }) {
    const handleButtonClick = (event) => {
        if (!disabled && !isLoading) {
            handleClick(event);
        }
    };
    return x `
    <button
      class=${actionButtonStyles({ disabled, fullWidth, isLoading, theme })}
      title=${buttonText}
      type="button"
      @click=${handleButtonClick}
    >
      ${isLoading ? Spinner({ theme, color: styles_themes[theme].text.muted }) : buttonText}
    </button>
  `;
}
const actionButtonStyles = ({ disabled, fullWidth, isLoading, theme, }) => emotion_css_esm_css `
  ${typography.body2}

  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["3"]};
  width: ${fullWidth ? "100%" : "auto"};
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 700;

  ${disabled || isLoading
    ? `
    background-color: ${styles_themes[theme].secondary["300"]};
    color: ${styles_themes[theme].text.muted};
  `
    : `
    background-color: ${styles_themes[theme].primary["600"]};
    cursor: pointer;
    color: ${styles_themes[theme].text.contrast};

    :hover {
      border-color: ${styles_themes[theme].primary["700"]};
      background-color: ${styles_themes[theme].primary["700"]};
      color: ${styles_themes[theme].text.contrast};
    }
    :focus {
      outline: 2px solid ${styles_themes[theme].primary["600"]};
      outline-offset: 1px;
    }
  `}

  svg {
    padding: 2px 0; /* Match line-height of button body2 typography */
    width: auto;
    height: 16px;
  }
`;

;// ./src/autofill/content/components/buttons/additional-tasks/button-content.ts




function AdditionalTasksButtonContent({ buttonText, theme, }) {
    return x `
    <div class=${additionalTasksButtonContentStyles({ theme })}>
      <span>${buttonText}</span>
      ${ExternalLink({ theme, color: styles_themes[theme].text.contrast })}
    </div>
  `;
}
const additionalTasksButtonContentStyles = ({ theme }) => emotion_css_esm_css `
  gap: ${spacing[2]};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

;// ./src/autofill/content/components/notification/at-risk-password/footer.ts





function AtRiskNotificationFooter({ i18n, theme, passwordChangeUri, }) {
    return x `<div class=${atRiskNotificationFooterStyles}>
    ${passwordChangeUri &&
        ActionButton({
            handleClick: () => {
                open(passwordChangeUri, "_blank");
            },
            buttonText: AdditionalTasksButtonContent({ buttonText: i18n.changePassword, theme }),
            theme,
            fullWidth: false,
        })}
  </div>`;
}
const atRiskNotificationFooterStyles = emotion_css_esm_css `
  display: flex;
  padding: ${spacing[2]} ${spacing[4]} ${spacing[4]} ${spacing[4]};

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }
`;

;// ./src/autofill/content/components/notification/at-risk-password/container.ts







function AtRiskNotification({ handleCloseNotification, i18n, theme = ThemeTypes.Light, params, }) {
    const { passwordChangeUri, organizationName } = params;
    const riskMessage = chrome.i18n.getMessage(passwordChangeUri ? "atRiskChangePrompt" : "atRiskNavigatePrompt", organizationName);
    return x `
    <div class=${atRiskNotificationContainerStyles(theme)}>
      ${NotificationHeader({
        handleCloseNotification,
        i18n,
        message: i18n.atRiskPassword,
        theme,
    })}
      ${AtRiskNotificationBody({
        theme,
        riskMessage,
    })}
      ${passwordChangeUri
        ? AtRiskNotificationFooter({
            i18n,
            theme,
            passwordChangeUri: params === null || params === void 0 ? void 0 : params.passwordChangeUri,
        })
        : E}
    </div>
  `;
}
const atRiskNotificationContainerStyles = (theme) => emotion_css_esm_css `
  position: absolute;
  right: 20px;
  border: 1px solid ${styles_themes[theme].secondary["300"]};
  border-radius: ${spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${styles_themes[theme].background.alt};
  width: 400px;
  overflow: hidden;

  [class*="${componentClassPrefix}-"] {
    border-radius: ${spacing["4"]} ${spacing["4"]} 0 0;
    border-bottom: 0.5px solid ${styles_themes[theme].secondary["300"]};
  }
`;

;// ./src/autofill/notification/abstractions/notification-bar.ts
const NotificationTypes = {
    Add: "add",
    Change: "change",
    Unlock: "unlock",
    AtRiskPassword: "at-risk-password",
};


;// ./src/autofill/content/components/notification/confirmation/message.ts



function NotificationConfirmationMessage({ buttonAria, buttonText, itemName, message, messageDetails, handleClick, theme, }) {
    return x `
    <div class=${containerStyles}>
      ${message || buttonText
        ? x `
            <div class=${singleLineWrapperStyles}>
              ${itemName
            ? x `
                    <span class=${itemNameStyles(theme)} title=${itemName}> ${itemName} </span>
                  `
            : E}
              <span
                title=${message || buttonText}
                class=${notificationConfirmationMessageStyles(theme)}
              >
                ${message || E}
                ${buttonText
            ? x `
                      <a
                        title=${buttonText}
                        class=${notificationConfirmationButtonTextStyles(theme)}
                        @click=${handleClick}
                        @keydown=${(e) => handleButtonKeyDown(e, () => handleClick(e))}
                        aria-label=${buttonAria}
                        tabindex="0"
                        role="button"
                      >
                        ${buttonText}
                      </a>
                    `
            : E}
              </span>
            </div>
          `
        : E}
      ${messageDetails
        ? x `<div class=${AdditionalMessageStyles({ theme })}>${messageDetails}</div>`
        : E}
    </div>
  `;
}
const containerStyles = emotion_css_esm_css `
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
  width: 100%;
`;
const singleLineWrapperStyles = emotion_css_esm_css `
  display: inline;
  white-space: normal;
  word-break: break-word;
`;
const message_baseTextStyles = emotion_css_esm_css `
  overflow-x: hidden;
  text-align: left;
  text-overflow: ellipsis;
  line-height: 24px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;
const notificationConfirmationMessageStyles = (theme) => emotion_css_esm_css `
  ${message_baseTextStyles}

  color: ${styles_themes[theme].text.main};
  font-weight: 400;
  white-space: normal;
  word-break: break-word;
  display: inline;
`;
const itemNameStyles = (theme) => emotion_css_esm_css `
  ${message_baseTextStyles}

  color: ${styles_themes[theme].text.main};
  font-weight: 400;
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: bottom;
`;
const notificationConfirmationButtonTextStyles = (theme) => emotion_css_esm_css `
  ${message_baseTextStyles}

  color: ${styles_themes[theme].primary[600]};
  font-weight: 700;
  cursor: pointer;
`;
const AdditionalMessageStyles = ({ theme }) => emotion_css_esm_css `
  ${typography.body2}

  font-size: 14px;
  color: ${styles_themes[theme].text.muted};
`;
function handleButtonKeyDown(event, handleClick) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleClick();
    }
}

;// ./src/autofill/content/components/notification/confirmation/body.ts





const confirmation_body_componentClassPrefix = "notification-confirmation-body";
const { css: confirmation_body_css } = createEmotion({
    key: confirmation_body_componentClassPrefix,
});
function NotificationConfirmationBody({ buttonAria, buttonText, confirmationMessage, error, itemName, messageDetails, tasksAreComplete, theme, handleOpenVault, }) {
    const IconComponent = error ? Warning : tasksAreComplete ? Celebrate : Keyhole;
    const showConfirmationMessage = confirmationMessage || buttonText || messageDetails;
    return x `
    <div class=${notificationConfirmationBodyStyles({ theme })}>
      <div class=${body_iconContainerStyles(error)}>${IconComponent({ theme })}</div>
      ${showConfirmationMessage
        ? NotificationConfirmationMessage({
            buttonAria,
            buttonText,
            itemName: error ? undefined : itemName,
            message: confirmationMessage,
            messageDetails,
            theme,
            handleClick: handleOpenVault,
        })
        : E}
    </div>
  `;
}
const body_iconContainerStyles = (error) => confirmation_body_css `
  > svg {
    width: ${!error ? "50px" : "40px"};
    height: auto;
  }
`;
const notificationConfirmationBodyStyles = ({ theme }) => confirmation_body_css `
  gap: ${spacing[4]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${styles_themes[theme].background.alt};
  padding: 12px;
`;

;// ./src/autofill/content/components/notification/confirmation/footer.ts





function NotificationConfirmationFooter({ i18n, theme, handleButtonClick, }) {
    const primaryButtonText = i18n.nextSecurityTaskAction;
    return x `
    <div class=${notificationConfirmationFooterStyles({ theme })}>
      ${ActionButton({
        handleClick: handleButtonClick,
        buttonText: footer_AdditionalTasksButtonContent({ buttonText: primaryButtonText, theme }),
        theme,
    })}
    </div>
  `;
}
const notificationConfirmationFooterStyles = ({ theme }) => emotion_css_esm_css `
  background-color: ${styles_themes[theme].background.alt};
  padding: 0 ${spacing[3]} ${spacing[3]} ${spacing[3]};
  max-width: min-content;

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
    padding-bottom: ${spacing[4]};
  }
`;
function footer_AdditionalTasksButtonContent({ buttonText, theme }) {
    return x `
    <div class=${footer_additionalTasksButtonContentStyles({ theme })}>
      <span>${buttonText}</span>
      ${ExternalLink({ theme, color: styles_themes[theme].text.contrast })}
    </div>
  `;
}
const footer_additionalTasksButtonContentStyles = ({ theme }) => emotion_css_esm_css `
  gap: ${spacing[2]};
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

;// ./src/autofill/content/components/notification/confirmation/container.ts








function NotificationConfirmationContainer({ error, handleCloseNotification, handleOpenVault, handleOpenTasks, headerMessage, i18n, itemName, notificationTestId, task, theme = ThemeTypes.Light, type, }) {
    const confirmationMessage = getConfirmationMessage(i18n, type, error);
    const buttonText = error ? i18n.newItem : i18n.view;
    const buttonAria = error
        ? i18n.notificationNewItemAria
        : chrome.i18n.getMessage("notificationViewAria", [itemName]);
    let messageDetails;
    let remainingTasksCount;
    let tasksAreComplete = true;
    if (task && !error) {
        remainingTasksCount = task.remainingTasksCount || 0;
        tasksAreComplete = remainingTasksCount === 0;
        messageDetails =
            remainingTasksCount > 0
                ? chrome.i18n.getMessage("loginUpdateTaskSuccessAdditional", [
                    task.orgName,
                    `${remainingTasksCount}`,
                ])
                : chrome.i18n.getMessage("loginUpdateTaskSuccess", [task.orgName]);
    }
    return x `
    <div data-testid="${notificationTestId}" class=${notificationContainerStyles(theme)}>
      ${NotificationHeader({
        handleCloseNotification,
        i18n,
        message: headerMessage,
        theme,
    })}
      ${NotificationConfirmationBody({
        buttonAria,
        buttonText,
        confirmationMessage,
        error,
        itemName,
        messageDetails,
        tasksAreComplete,
        theme,
        handleOpenVault,
    })}
      ${!error && remainingTasksCount
        ? NotificationConfirmationFooter({
            i18n,
            theme,
            handleButtonClick: handleOpenTasks,
        })
        : E}
    </div>
  `;
}
const notificationContainerStyles = (theme) => emotion_css_esm_css `
  position: absolute;
  right: 20px;
  border: 1px solid ${styles_themes[theme].secondary["300"]};
  border-radius: ${spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${styles_themes[theme].background.alt};
  width: 400px;
  overflow: hidden;

  [class*="${componentClassPrefix}-"] {
    border-radius: ${spacing["4"]} ${spacing["4"]} 0 0;
    border-bottom: 0.5px solid ${styles_themes[theme].secondary["300"]};
  }
`;
function getConfirmationMessage(i18n, type, error) {
    if (error) {
        return i18n.saveFailureDetails;
    }
    /* @TODO This partial string return and later concatenation with the cipher name is needed
     * to handle cipher name overflow cases, but is risky for i18n concerns. Fix concatenation
     * with cipher name overflow when a tag replacement solution is available.
     */
    return type === NotificationTypes.Add
        ? i18n.notificationLoginSaveConfirmation
        : i18n.notificationLoginUpdatedConfirmation;
}

;// ./src/autofill/content/components/buttons/badge-button.ts



function BadgeButton({ buttonAction, buttonText, disabled = false, itemName, theme, username, }) {
    const handleButtonClick = (event) => {
        if (!disabled) {
            buttonAction(event);
        }
    };
    return x `
    <button
      type="button"
      title=${buttonText}
      aria-label=${[buttonText, [itemName, username].filter(Boolean).join(" ")]}
      class=${badgeButtonStyles({ disabled, theme })}
      @click=${handleButtonClick}
    >
      ${buttonText}
    </button>
  `;
}
const badgeButtonStyles = ({ disabled, theme }) => emotion_css_esm_css `
  ${typography.helperMedium}

  user-select: none;
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 500;

  ${disabled
    ? `
    border: 0.5px solid ${styles_themes[theme].secondary["300"]};
    background-color: ${styles_themes[theme].secondary["300"]};
    color: ${styles_themes[theme].text.muted};
  `
    : `
    border: 0.5px solid ${styles_themes[theme].primary["700"]};
    background-color: ${styles_themes[theme].primary["100"]};
    cursor: pointer;
    color: ${styles_themes[theme].primary["700"]};

    :hover {
      border-color: ${styles_themes[theme].primary["600"]};
      background-color: ${styles_themes[theme].primary["600"]};
      color: ${styles_themes[theme].text.contrast};
    }
    :focus {
      outline: 2px solid ${styles_themes[theme].primary["600"]};
      outline-offset: 2px;
    }
  `}
`;

;// ./src/autofill/content/components/buttons/edit-button.ts




function EditButton({ buttonAction, buttonText, disabled = false, theme }) {
    return x `
    <button
      type="button"
      title=${buttonText}
      aria-label=${buttonText}
      class=${editButtonStyles({ disabled, theme })}
      @click=${(event) => {
        if (!disabled) {
            buttonAction(event);
        }
    }}
    >
      ${PencilSquare({ disabled, theme })}
    </button>
  `;
}
const editButtonStyles = ({ disabled, theme }) => emotion_css_esm_css `
  ${typography.helperMedium}

  user-select: none;
  display: flex;
  border: 1px solid transparent;
  border-radius: ${spacing["1"]};
  background-color: transparent;
  padding: ${spacing["1"]};
  max-height: fit-content;
  overflow: hidden;

  ${!disabled
    ? `
    cursor: pointer;

    :hover {
      border-color: ${styles_themes[theme].primary["600"]};
    }
  `
    : ""}

  > svg {
    width: 16px;
    height: fit-content;
  }
`;

;// ./src/autofill/content/components/cipher/cipher-action.ts



function CipherAction({ handleAction = () => {
    /* no-op */
}, i18n, itemName, notificationType, theme, username, }) {
    return notificationType === NotificationTypes.Change
        ? BadgeButton({
            buttonAction: handleAction,
            buttonText: i18n.notificationUpdate,
            itemName,
            theme,
            username,
        })
        : EditButton({
            buttonAction: handleAction,
            buttonText: i18n.notificationEditTooltip,
            theme,
        });
}

;// ./src/autofill/content/components/cipher/cipher-icon.ts



/**
 * @param {string} props.color contextual color override if no icon URI is available
 * @param {string} props.size valid CSS `width` value, represents the width-basis of the graphic, with height maintaining original aspect-ratio
 */
function CipherIcon({ color, size, theme, uri }) {
    const iconClass = cipherIconStyle({ width: size });
    return uri
        ? x `<img class=${iconClass} src=${uri} />`
        : x `<span class=${iconClass}>${Globe({ color, theme })}</span>`;
}
const cipherIconStyle = ({ width }) => emotion_css_esm_css `
  width: ${width};
  height: fit-content;
`;

;// ./src/autofill/content/components/cipher/types.ts
const CipherTypes = {
    Login: 1,
    SecureNote: 2,
    Card: 3,
    Identity: 4,
};
const CipherRepromptTypes = {
    None: 0,
    Password: 1,
};
const OrganizationCategories = {
    business: "business",
    family: "family",
};

;// ./src/autofill/content/components/cipher/cipher-indicator-icons.ts





const cipherIndicatorIconsMap = {
    [OrganizationCategories.business]: Business,
    [OrganizationCategories.family]: Family,
};
function CipherInfoIndicatorIcons({ organizationCategories = [], theme, }) {
    return x `
    <span class=${cipherInfoIndicatorIconsStyles}>
      ${organizationCategories.map((name) => { var _a; return (_a = cipherIndicatorIconsMap[name]) === null || _a === void 0 ? void 0 : _a.call(cipherIndicatorIconsMap, { color: styles_themes[theme].text.muted, theme }); })}
    </span>
  `;
}
const cipherInfoIndicatorIconsStyles = emotion_css_esm_css `
  > svg {
    width: fit-content;
    height: 12px;
  }
`;

;// ./src/autofill/content/components/cipher/cipher-info.ts




function CipherInfo({ cipher, theme }) {
    const { name, login, organizationCategories } = cipher;
    const hasIndicatorIcons = organizationCategories === null || organizationCategories === void 0 ? void 0 : organizationCategories.length;
    return x `
    <div>
      <span title=${name} class=${cipherInfoPrimaryTextStyles(theme)}>
        ${[
        name,
        hasIndicatorIcons
            ? CipherInfoIndicatorIcons({
                theme,
                organizationCategories,
            })
            : E,
    ]}
      </span>

      ${(login === null || login === void 0 ? void 0 : login.username)
        ? x `<span title=${login.username} class=${cipherInfoSecondaryTextStyles(theme)}
            >${login.username}</span
          >`
        : null}
    </div>
  `;
}
const cipherInfoPrimaryTextStyles = (theme) => emotion_css_esm_css `
  ${typography.body2}

  gap: 2px;
  display: flex;
  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${styles_themes[theme].text.main};
  font-weight: 500;
`;
const cipherInfoSecondaryTextStyles = (theme) => emotion_css_esm_css `
  ${typography.helperMedium}

  display: block;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: ${styles_themes[theme].text.muted};
  font-weight: 400;
`;

;// ./src/autofill/content/components/cipher/cipher-item.ts








const cipherIconWidth = "24px";
function CipherItem({ cipher, handleAction, i18n, notificationType, theme = ThemeTypes.Light, }) {
    const { icon, name, login } = cipher;
    const uri = (icon.imageEnabled && icon.image) || undefined;
    let cipherActionButton = null;
    if (notificationType === NotificationTypes.Change || notificationType === NotificationTypes.Add) {
        cipherActionButton = x `<div>
      ${CipherAction({
            handleAction,
            i18n,
            itemName: name,
            notificationType,
            theme,
            username: login === null || login === void 0 ? void 0 : login.username,
        })}
    </div>`;
    }
    return x `
    <div class=${cipherItemStyles}>
      ${CipherIcon({ color: styles_themes[theme].text.muted, size: cipherIconWidth, theme, uri })}
      ${CipherInfo({ theme, cipher })}
    </div>
    ${cipherActionButton}
  `;
}
const cipherItemStyles = emotion_css_esm_css `
  gap: ${spacing["2"]};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: start;

  > img,
  > span {
    display: flex;
  }

  > div {
    max-width: calc(100% - ${cipherIconWidth} - ${spacing["2"]});
  }
`;

;// ./src/autofill/content/components/rows/cipher-item-row.ts




function CipherItemRow({ cipher, i18n, notificationType, theme, handleAction, }) {
    return x `
    <div class=${cipherItemRowStyles({ theme })}>
      ${CipherItem({
        cipher,
        i18n,
        notificationType,
        theme,
        handleAction,
    })}
    </div>
  `;
}
const cipherItemRowStyles = ({ theme }) => emotion_css_esm_css `
  ${typography.body1}

  gap: ${spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-width: 0 0 0.5px 0;
  border-style: solid;
  border-radius: ${spacing["2"]};
  border-color: ${styles_themes[theme].secondary["300"]};
  background-color: ${styles_themes[theme].background.DEFAULT};
  padding: ${spacing["2"]} ${spacing["3"]};
  min-height: min-content;
  max-height: 52px;
  overflow-x: hidden;
  white-space: nowrap;
  color: ${styles_themes[theme].text.main};
  font-weight: 400;

  > div {
    :first-child {
      flex: 3 3 75%;
      min-width: 25%;
    }

    :not(:first-child) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;
      max-width: 25%;

      > button {
        max-width: min-content;
      }
    }
  }
`;

;// ./src/autofill/content/components/notification/body.ts





const notification_body_componentClassPrefix = "notification-body";
const { css: notification_body_css } = createEmotion({
    key: notification_body_componentClassPrefix,
});
function NotificationBody({ ciphers = [], i18n, notificationType, theme = ThemeTypes.Light, handleEditOrUpdateAction, }) {
    // @TODO get client vendor from context
    const isSafari = false;
    return x `
    <div class=${notificationBodyStyles({ isSafari, theme })}>
      ${ciphers.map((cipher) => CipherItemRow({
        cipher,
        theme,
        i18n,
        notificationType,
        handleAction: handleEditOrUpdateAction,
    }))}
    </div>
  `;
}
const notificationBodyStyles = ({ isSafari, theme }) => notification_body_css `
  ${typography.body1}

  gap: ${spacing["1.5"]};
  display: flex;
  flex-flow: column;
  background-color: ${styles_themes[theme].background.alt};
  max-height: 123px;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;
  color: ${styles_themes[theme].text.main};
  font-weight: 400;

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }

  ${isSafari ? scrollbarStyles(theme).safari : scrollbarStyles(theme).default}
`;

;// ../../libs/common/src/billing/enums/payment-method-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PaymentMethodType;
(function (PaymentMethodType) {
    PaymentMethodType[PaymentMethodType["Card"] = 0] = "Card";
    PaymentMethodType[PaymentMethodType["BankAccount"] = 1] = "BankAccount";
    PaymentMethodType[PaymentMethodType["PayPal"] = 2] = "PayPal";
    PaymentMethodType[PaymentMethodType["BitPay"] = 3] = "BitPay";
    PaymentMethodType[PaymentMethodType["Credit"] = 4] = "Credit";
    PaymentMethodType[PaymentMethodType["WireTransfer"] = 5] = "WireTransfer";
    PaymentMethodType[PaymentMethodType["Check"] = 8] = "Check";
})(PaymentMethodType || (PaymentMethodType = {}));

;// ../../libs/common/src/billing/enums/plan-sponsorship-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanSponsorshipType;
(function (PlanSponsorshipType) {
    PlanSponsorshipType[PlanSponsorshipType["FamiliesForEnterprise"] = 0] = "FamiliesForEnterprise";
})(PlanSponsorshipType || (PlanSponsorshipType = {}));

;// ../../libs/common/src/billing/enums/plan-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanType;
(function (PlanType) {
    PlanType[PlanType["Free"] = 0] = "Free";
    PlanType[PlanType["FamiliesAnnually2019"] = 1] = "FamiliesAnnually2019";
    PlanType[PlanType["TeamsMonthly2019"] = 2] = "TeamsMonthly2019";
    PlanType[PlanType["TeamsAnnually2019"] = 3] = "TeamsAnnually2019";
    PlanType[PlanType["EnterpriseMonthly2019"] = 4] = "EnterpriseMonthly2019";
    PlanType[PlanType["EnterpriseAnnually2019"] = 5] = "EnterpriseAnnually2019";
    PlanType[PlanType["Custom"] = 6] = "Custom";
    PlanType[PlanType["FamiliesAnnually"] = 7] = "FamiliesAnnually";
    PlanType[PlanType["TeamsMonthly2020"] = 8] = "TeamsMonthly2020";
    PlanType[PlanType["TeamsAnnually2020"] = 9] = "TeamsAnnually2020";
    PlanType[PlanType["EnterpriseMonthly2020"] = 10] = "EnterpriseMonthly2020";
    PlanType[PlanType["EnterpriseAnnually2020"] = 11] = "EnterpriseAnnually2020";
    PlanType[PlanType["TeamsMonthly2023"] = 12] = "TeamsMonthly2023";
    PlanType[PlanType["TeamsAnnually2023"] = 13] = "TeamsAnnually2023";
    PlanType[PlanType["EnterpriseMonthly2023"] = 14] = "EnterpriseMonthly2023";
    PlanType[PlanType["EnterpriseAnnually2023"] = 15] = "EnterpriseAnnually2023";
    PlanType[PlanType["TeamsStarter2023"] = 16] = "TeamsStarter2023";
    PlanType[PlanType["TeamsMonthly"] = 17] = "TeamsMonthly";
    PlanType[PlanType["TeamsAnnually"] = 18] = "TeamsAnnually";
    PlanType[PlanType["EnterpriseMonthly"] = 19] = "EnterpriseMonthly";
    PlanType[PlanType["EnterpriseAnnually"] = 20] = "EnterpriseAnnually";
    PlanType[PlanType["TeamsStarter"] = 21] = "TeamsStarter";
})(PlanType || (PlanType = {}));

;// ../../libs/common/src/billing/enums/transaction-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Charge"] = 0] = "Charge";
    TransactionType[TransactionType["Credit"] = 1] = "Credit";
    TransactionType[TransactionType["PromotionalCredit"] = 2] = "PromotionalCredit";
    TransactionType[TransactionType["ReferralCredit"] = 3] = "ReferralCredit";
    TransactionType[TransactionType["Refund"] = 4] = "Refund";
})(TransactionType || (TransactionType = {}));

;// ../../libs/common/src/billing/enums/bitwarden-product-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var BitwardenProductType;
(function (BitwardenProductType) {
    BitwardenProductType[BitwardenProductType["PasswordManager"] = 0] = "PasswordManager";
    BitwardenProductType[BitwardenProductType["SecretsManager"] = 1] = "SecretsManager";
})(BitwardenProductType || (BitwardenProductType = {}));

;// ../../libs/common/src/billing/enums/product-tier-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ProductTierType;
(function (ProductTierType) {
    ProductTierType[ProductTierType["Free"] = 0] = "Free";
    ProductTierType[ProductTierType["Families"] = 1] = "Families";
    ProductTierType[ProductTierType["Teams"] = 2] = "Teams";
    ProductTierType[ProductTierType["Enterprise"] = 3] = "Enterprise";
    ProductTierType[ProductTierType["TeamsStarter"] = 4] = "TeamsStarter";
})(ProductTierType || (ProductTierType = {}));
function isNotSelfUpgradable(productType) {
    return (productType !== ProductTierType.Free &&
        productType !== ProductTierType.TeamsStarter &&
        productType !== ProductTierType.Families);
}

;// ../../libs/common/src/billing/enums/product-type.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var ProductType;
(function (ProductType) {
    ProductType[ProductType["PasswordManager"] = 0] = "PasswordManager";
    ProductType[ProductType["SecretsManager"] = 1] = "SecretsManager";
})(ProductType || (ProductType = {}));

;// ../../libs/common/src/billing/enums/plan-interval.enum.ts
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var PlanInterval;
(function (PlanInterval) {
    PlanInterval[PlanInterval["Monthly"] = 0] = "Monthly";
    PlanInterval[PlanInterval["Annually"] = 1] = "Annually";
})(PlanInterval || (PlanInterval = {}));

;// ../../libs/common/src/billing/enums/index.ts









;// ../../node_modules/@lit/reactive-element/decorators/property.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const property_o={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},property_r=(t=property_o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map()),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e;}};}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);};}throw Error("Unsupported decorator location: "+n);};function property_n(t){return(e,o)=>"object"==typeof o?property_r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0;})(t,e,o);}
;// ../../node_modules/@lit/reactive-element/decorators/state.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(r){return property_n({...r,state:!0,attribute:!1});}
;// ../../node_modules/lit/decorators.js

;// ./src/autofill/content/components/buttons/option-selection-button.ts




function OptionSelectionButton({ disabled, icon, id, text, theme, toggledOn, handleButtonClick, }) {
    const selectedOptionIconProps = { color: styles_themes[theme].text.muted, theme };
    const buttonIcon = icon === null || icon === void 0 ? void 0 : icon(selectedOptionIconProps);
    return x `
    <button
      class=${selectionButtonStyles({ disabled, toggledOn, theme })}
      data-testid="${id}-option-selection"
      title=${text}
      type="button"
      aria-haspopup="menu"
      aria-expanded=${toggledOn}
      aria-controls="option-menu"
      @click=${handleButtonClick}
    >
      ${buttonIcon !== null && buttonIcon !== void 0 ? buttonIcon : E}
      ${text ? x `<span class=${dropdownButtonTextStyles}>${text}</span>` : E}
      ${toggledOn
        ? AngleUp({ color: styles_themes[theme].text.muted, theme })
        : AngleDown({ color: styles_themes[theme].text.muted, theme })}
    </button>
  `;
}
const iconSize = "16px";
const selectionButtonStyles = ({ disabled, toggledOn, theme, }) => emotion_css_esm_css `
  ${typography.body2}

  gap: ${spacing["1.5"]};
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  columns: ${iconSize} max-content ${iconSize};
  border-radius: ${border.radius.full};
  padding: ${spacing["1"]} ${spacing["2"]};
  max-height: fit-content;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  font-weight: 400;

  ${disabled
    ? `
      border: 1px solid ${styles_themes[theme].secondary["300"]};
      background-color: ${styles_themes[theme].secondary["300"]};
      cursor: not-allowed;
      color: ${styles_themes[theme].text.muted};
    `
    : `
      border: 1px solid ${styles_themes[theme].text.muted};
      background-color: ${toggledOn ? styles_themes[theme].secondary["100"] : "transparent"};
      cursor: pointer;
      color: ${styles_themes[theme].text.muted};

      :hover {
        border-color: ${styles_themes[theme].secondary["700"]};
        background-color: ${styles_themes[theme].secondary["100"]};
      }
    `}

  > svg {
    max-width: ${iconSize};
    max-height: ${iconSize};
    height: auto;
  }
`;
const dropdownButtonTextStyles = emotion_css_esm_css `
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

;// ./src/autofill/content/components/option-selection/option-item.ts



const optionItemTagName = "option-item";
const { css: option_item_css } = createEmotion({
    key: optionItemTagName,
});
function OptionItem({ contextLabel, id, icon, text, theme, value, handleSelection, }) {
    const handleSelectionKeyUpProxy = (event) => {
        const listenedForKeys = new Set(["Enter", "Space"]);
        if (listenedForKeys.has(event.code) && event.target instanceof Element) {
            handleSelection();
        }
        return;
    };
    const iconProps = { color: styles_themes[theme].text.main, theme };
    const itemIcon = icon === null || icon === void 0 ? void 0 : icon(iconProps);
    const ariaLabel = contextLabel && text
        ? chrome.i18n.getMessage("selectItemAriaLabel", [contextLabel, text])
        : text;
    return x `<div
    class=${optionItemStyles}
    data-testid="${id}-option-item"
    key=${value}
    tabindex="0"
    title=${text}
    role="option"
    aria-label=${ariaLabel}
    @click=${handleSelection}
    @keyup=${handleSelectionKeyUpProxy}
  >
    ${itemIcon ? x `<div class=${optionItemIconContainerStyles}>${itemIcon}</div>` : E}
    <span class=${optionItemTextStyles}>${text || value}</span>
  </div>`;
}
const optionItemIconWidth = 16;
const optionItemGap = spacing["2"];
const optionItemStyles = option_item_css `
  gap: ${optionItemGap};
  user-select: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const optionItemIconContainerStyles = option_item_css `
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: ${optionItemIconWidth}px;
  max-height: ${optionItemIconWidth}px;

  > svg {
    width: 100%;
    height: auto;
  }
`;
const optionItemTextStyles = option_item_css `
  flex: 1 1 calc(100% - ${optionItemIconWidth}px - ${optionItemGap});
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

;// ./src/autofill/content/components/option-selection/option-items.ts




const optionItemsTagName = "option-items";
const { css: option_items_css } = createEmotion({
    key: optionItemsTagName,
});
function OptionItems({ id, theme, topOffset, label, options, handleOptionSelection, }) {
    // @TODO get client vendor from context
    const isSafari = false;
    return x `
    <div
      class=${optionsStyles({ theme, topOffset })}
      key="container"
      @keyup=${(e) => handleMenuKeyUp(e)}
    >
      ${label ? x `<div class=${optionsLabelStyles({ theme })}>${label}</div>` : E}
      <div class=${optionsWrapper({ isSafari, theme })}>
        ${options.map((option) => OptionItem(Object.assign(Object.assign({ id }, option), { theme, contextLabel: label, handleSelection: () => handleOptionSelection(option) })))}
      </div>
    </div>
  `;
}
function handleMenuKeyUp(event) {
    var _a;
    const items = [
        ...event.currentTarget.querySelectorAll('[tabindex="0"]'),
    ];
    const index = items.indexOf(document.activeElement);
    const direction = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (index === -1 || direction === 0) {
        return;
    }
    event.preventDefault();
    (_a = items[(index + direction + items.length) % items.length]) === null || _a === void 0 ? void 0 : _a.focus();
}
const optionsStyles = ({ theme, topOffset }) => option_items_css `
  ${typography.body1}

  -webkit-font-smoothing: antialiased;
  position: absolute;
  /* top offset + line-height of dropdown button + top and bottom padding of button + border-width */
  top: calc(${topOffset}px + 20px + ${spacing["1"]} + ${spacing["1"]} + 1px);
  border: 1px solid ${styles_themes[theme].secondary["500"]};
  border-radius: 0.5rem;
  background-clip: padding-box;
  background-color: ${styles_themes[theme].background.DEFAULT};
  padding: 0.25rem 0;
  max-width: fit-content;
  overflow-y: hidden;
  color: ${styles_themes[theme].text.main};
`;
const optionsLabelStyles = ({ theme }) => option_items_css `
  ${typography.helperMedium}

  user-select: none;
  padding: 0.375rem ${spacing["3"]};
  color: ${styles_themes[theme].text.muted};
  font-weight: 600;
`;
const optionsMenuItemMaxWidth = 260;
const optionsMenuItemsMaxHeight = 114;
const optionsWrapper = ({ isSafari, theme }) => option_items_css `
  max-height: ${optionsMenuItemsMaxHeight}px;
  overflow-y: auto;

  > [class*="${optionItemTagName}-"] {
    padding: ${spacing["1.5"]} ${spacing["3"]};
    max-width: ${optionsMenuItemMaxWidth}px;

    :hover {
      background-color: ${styles_themes[theme].primary["100"]};
    }
  }

  ${isSafari
    ? scrollbarStyles(theme, { track: "transparent" }).safari
    : scrollbarStyles(theme, { track: "transparent" }).default}
`;

;// ./src/autofill/content/components/option-selection/option-selection.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const optionSelectionTagName = "option-selection";
const { css: option_selection_css } = createEmotion({
    key: optionSelectionTagName,
});
class OptionSelection extends lit_element_i {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.id = "";
        this.options = [];
        this.theme = ThemeTypes.Light;
        this.showMenu = false;
        this.menuTopOffset = 0;
        // Determines if the opened menu should be "anchored" to the right or left side of the opening button
        this.menuIsEndJustified = false;
        this.handleButtonClick = (event) => __awaiter(this, void 0, void 0, function* () {
            if (!this.disabled) {
                const isOpening = !this.showMenu;
                if (isOpening) {
                    if (OptionSelection.currentOpenInstance && OptionSelection.currentOpenInstance !== this) {
                        OptionSelection.currentOpenInstance.showMenu = false;
                    }
                    OptionSelection.currentOpenInstance = this;
                    this.menuTopOffset = this.offsetTop;
                    // Distance from right edge of button to left edge of the viewport
                    // Assumes no enclosing frames between the intended host frame and the component
                    const boundingClientRect = this.getBoundingClientRect();
                    // Width of the client (minus scrollbar)
                    const documentWidth = document.documentElement.clientWidth;
                    // Distance between left edge of the button and right edge of the viewport
                    // (e.g. the max space the menu can use when left-aligned)
                    const distanceFromViewportRightEdge = documentWidth - boundingClientRect.left;
                    // The full width the option menu can take up
                    // (base + icon + border + gap + padding)
                    const maxDifferenceThreshold = optionsMenuItemMaxWidth + optionItemIconWidth + 2 + 8 + 12 * 2;
                    this.menuIsEndJustified = distanceFromViewportRightEdge < maxDifferenceThreshold;
                }
                else {
                    if (OptionSelection.currentOpenInstance === this) {
                        OptionSelection.currentOpenInstance = null;
                    }
                }
                this.showMenu = isOpening;
                if (this.showMenu) {
                    yield this.updateComplete;
                    const firstItem = this.querySelector('#option-menu [tabindex="0"]');
                    firstItem === null || firstItem === void 0 ? void 0 : firstItem.focus();
                }
            }
        });
        this.handleFocusOut = (event) => {
            const relatedTarget = event.relatedTarget;
            if (!(relatedTarget instanceof Node) || !this.contains(relatedTarget)) {
                this.showMenu = false;
                if (OptionSelection.currentOpenInstance === this) {
                    OptionSelection.currentOpenInstance = null;
                }
            }
        };
        this.handleOptionSelection = (selectedOption) => {
            var _a, _b;
            this.showMenu = false;
            this.selection = selectedOption;
            (_a = this.selectedSignal) === null || _a === void 0 ? void 0 : _a.set(selectedOption.value);
            // Any side-effects that should occur from the selection
            (_b = this.handleSelectionUpdate) === null || _b === void 0 ? void 0 : _b.call(this, selectedOption.value);
        };
    }
    createRenderRoot() {
        return this;
    }
    render() {
        var _a, _b;
        if (!this.selection) {
            this.selection = getDefaultOption(this.options);
        }
        return x `
      <div
        class=${optionSelectionStyles({ menuIsEndJustified: this.menuIsEndJustified })}
        @focusout=${this.handleFocusOut}
      >
        ${OptionSelectionButton({
            disabled: this.disabled,
            icon: (_a = this.selection) === null || _a === void 0 ? void 0 : _a.icon,
            id: this.id,
            text: (_b = this.selection) === null || _b === void 0 ? void 0 : _b.text,
            theme: this.theme,
            toggledOn: this.showMenu,
            handleButtonClick: this.handleButtonClick,
        })}
        ${this.showMenu
            ? OptionItems({
                id: this.id,
                label: this.label,
                options: this.options,
                theme: this.theme,
                topOffset: this.menuTopOffset,
                handleOptionSelection: this.handleOptionSelection,
            })
            : E}
      </div>
    `;
    }
}
OptionSelection.currentOpenInstance = null;
__decorate([
    property_n(),
    __metadata("design:type", Boolean)
], OptionSelection.prototype, "disabled", void 0);
__decorate([
    property_n(),
    __metadata("design:type", String)
], OptionSelection.prototype, "id", void 0);
__decorate([
    property_n(),
    __metadata("design:type", String)
], OptionSelection.prototype, "label", void 0);
__decorate([
    property_n({ type: Array }),
    __metadata("design:type", Array)
], OptionSelection.prototype, "options", void 0);
__decorate([
    property_n(),
    __metadata("design:type", String)
], OptionSelection.prototype, "theme", void 0);
__decorate([
    property_n({ type: (selectedOption) => selectedOption }),
    __metadata("design:type", Function)
], OptionSelection.prototype, "handleSelectionUpdate", void 0);
__decorate([
    property_n({ attribute: false }),
    __metadata("design:type", Object)
], OptionSelection.prototype, "selectedSignal", void 0);
__decorate([
    state_r(),
    __metadata("design:type", Object)
], OptionSelection.prototype, "showMenu", void 0);
__decorate([
    state_r(),
    __metadata("design:type", Number)
], OptionSelection.prototype, "menuTopOffset", void 0);
__decorate([
    state_r(),
    __metadata("design:type", Boolean)
], OptionSelection.prototype, "menuIsEndJustified", void 0);
__decorate([
    state_r(),
    __metadata("design:type", Object)
], OptionSelection.prototype, "selection", void 0);
/* harmony default export */ var option_selection = (customElements.define(optionSelectionTagName, OptionSelection));
function getDefaultOption(options = []) {
    return options.find((option) => option.default) || options[0];
}
const optionSelectionStyles = ({ menuIsEndJustified }) => option_selection_css `
  display: flex;
  justify-content: ${menuIsEndJustified ? "flex-end" : "flex-start"};

  > div,
  > button {
    width: 100%;
  }
`;

;// ./src/autofill/content/components/rows/button-row.ts





function ButtonRow({ theme, primaryButton, selectButtons }) {
    return x `
    <div class=${buttonRowStyles}>
      ${ActionButton({
        handleClick: primaryButton.handlePrimaryButtonClick,
        buttonText: primaryButton.text,
        isLoading: primaryButton.isLoading,
        theme,
    })}
      <div class=${optionSelectionsStyles}>
        ${selectButtons === null || selectButtons === void 0 ? void 0 : selectButtons.map(({ id, label, options, handleSelectionUpdate, selectedSignal }) => x `
              <option-selection
                key=${id}
                theme=${theme}
                .id=${id}
                .label=${label}
                .options=${options}
                .handleSelectionUpdate=${handleSelectionUpdate}
                .selectedSignal=${selectedSignal}
              ></option-selection>
            ` || E)}
      </div>
    </div>
  `;
}
const buttonRowStyles = emotion_css_esm_css `
  gap: ${spacing[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 52px;
  white-space: nowrap;
  padding-top: ${spacing[1]};

  > button {
    max-width: min-content;
    flex: 1 1 25%;
  }

  > div {
    flex: 1 1 min-content;
  }
`;
const optionSelectionsStyles = emotion_css_esm_css `
  gap: ${spacing["2"]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  > ${optionSelectionTagName} {
    /* assumes two option selections */
    max-width: calc(50% - ${spacing["1.5"]});
    min-width: 120px;
  }
`;

;// ../../node_modules/signal-polyfill/dist/index.js
var __defProp=Object.defineProperty;var __defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:true,configurable:true,writable:true,value}):obj[key]=value;var __publicField=(obj,key,value)=>{__defNormalProp(obj,typeof key!=="symbol"?key+"":key,value);return value;};var __accessCheck=(obj,member,msg)=>{if(!member.has(obj))throw TypeError("Cannot "+msg);};var __privateIn=(member,obj)=>{if(Object(obj)!==obj)throw TypeError('Cannot use the "in" operator on this value');return member.has(obj);};var __privateAdd=(obj,member,value)=>{if(member.has(obj))throw TypeError("Cannot add the same private member more than once");member instanceof WeakSet?member.add(obj):member.set(obj,value);};var __privateMethod=(obj,member,method)=>{__accessCheck(obj,member,"access private method");return method;};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function defaultEquals(a,b){return Object.is(a,b);}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let activeConsumer=null;let inNotificationPhase=false;let epoch=1;const SIGNAL=/* @__PURE__ */Symbol("SIGNAL");function setActiveConsumer(consumer){const prev=activeConsumer;activeConsumer=consumer;return prev;}function getActiveConsumer(){return activeConsumer;}function isInNotificationPhase(){return inNotificationPhase;}const REACTIVE_NODE={version:0,lastCleanEpoch:0,dirty:false,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:false,consumerIsAlwaysLive:false,producerMustRecompute:()=>false,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function producerAccessed(node){if(inNotificationPhase){throw new Error(typeof ngDevMode!=="undefined"&&ngDevMode?`Assertion error: signal read during notification phase`:"");}if(activeConsumer===null){return;}activeConsumer.consumerOnSignalRead(node);const idx=activeConsumer.nextProducerIndex++;assertConsumerNode(activeConsumer);if(idx<activeConsumer.producerNode.length&&activeConsumer.producerNode[idx]!==node){if(consumerIsLive(activeConsumer)){const staleProducer=activeConsumer.producerNode[idx];producerRemoveLiveConsumerAtIndex(staleProducer,activeConsumer.producerIndexOfThis[idx]);}}if(activeConsumer.producerNode[idx]!==node){activeConsumer.producerNode[idx]=node;activeConsumer.producerIndexOfThis[idx]=consumerIsLive(activeConsumer)?producerAddLiveConsumer(node,activeConsumer,idx):0;}activeConsumer.producerLastReadVersion[idx]=node.version;}function producerIncrementEpoch(){epoch++;}function producerUpdateValueVersion(node){if(!node.dirty&&node.lastCleanEpoch===epoch){return;}if(!node.producerMustRecompute(node)&&!consumerPollProducersForChange(node)){node.dirty=false;node.lastCleanEpoch=epoch;return;}node.producerRecomputeValue(node);node.dirty=false;node.lastCleanEpoch=epoch;}function producerNotifyConsumers(node){if(node.liveConsumerNode===void 0){return;}const prev=inNotificationPhase;inNotificationPhase=true;try{for(const consumer of node.liveConsumerNode){if(!consumer.dirty){consumerMarkDirty(consumer);}}}finally{inNotificationPhase=prev;}}function producerUpdatesAllowed(){return(activeConsumer==null?void 0:activeConsumer.consumerAllowSignalWrites)!==false;}function consumerMarkDirty(node){var _a;node.dirty=true;producerNotifyConsumers(node);(_a=node.consumerMarkedDirty)==null?void 0:_a.call(node.wrapper??node);}function consumerBeforeComputation(node){node&&(node.nextProducerIndex=0);return setActiveConsumer(node);}function consumerAfterComputation(node,prevConsumer){setActiveConsumer(prevConsumer);if(!node||node.producerNode===void 0||node.producerIndexOfThis===void 0||node.producerLastReadVersion===void 0){return;}if(consumerIsLive(node)){for(let i=node.nextProducerIndex;i<node.producerNode.length;i++){producerRemoveLiveConsumerAtIndex(node.producerNode[i],node.producerIndexOfThis[i]);}}while(node.producerNode.length>node.nextProducerIndex){node.producerNode.pop();node.producerLastReadVersion.pop();node.producerIndexOfThis.pop();}}function consumerPollProducersForChange(node){assertConsumerNode(node);for(let i=0;i<node.producerNode.length;i++){const producer=node.producerNode[i];const seenVersion=node.producerLastReadVersion[i];if(seenVersion!==producer.version){return true;}producerUpdateValueVersion(producer);if(seenVersion!==producer.version){return true;}}return false;}function producerAddLiveConsumer(node,consumer,indexOfThis){var _a;assertProducerNode(node);assertConsumerNode(node);if(node.liveConsumerNode.length===0){(_a=node.watched)==null?void 0:_a.call(node.wrapper);for(let i=0;i<node.producerNode.length;i++){node.producerIndexOfThis[i]=producerAddLiveConsumer(node.producerNode[i],node,i);}}node.liveConsumerIndexOfThis.push(indexOfThis);return node.liveConsumerNode.push(consumer)-1;}function producerRemoveLiveConsumerAtIndex(node,idx){var _a;assertProducerNode(node);assertConsumerNode(node);if(typeof ngDevMode!=="undefined"&&ngDevMode&&idx>=node.liveConsumerNode.length){throw new Error(`Assertion error: active consumer index ${idx} is out of bounds of ${node.liveConsumerNode.length} consumers)`);}if(node.liveConsumerNode.length===1){(_a=node.unwatched)==null?void 0:_a.call(node.wrapper);for(let i=0;i<node.producerNode.length;i++){producerRemoveLiveConsumerAtIndex(node.producerNode[i],node.producerIndexOfThis[i]);}}const lastIdx=node.liveConsumerNode.length-1;node.liveConsumerNode[idx]=node.liveConsumerNode[lastIdx];node.liveConsumerIndexOfThis[idx]=node.liveConsumerIndexOfThis[lastIdx];node.liveConsumerNode.length--;node.liveConsumerIndexOfThis.length--;if(idx<node.liveConsumerNode.length){const idxProducer=node.liveConsumerIndexOfThis[idx];const consumer=node.liveConsumerNode[idx];assertConsumerNode(consumer);consumer.producerIndexOfThis[idxProducer]=idx;}}function consumerIsLive(node){var _a;return node.consumerIsAlwaysLive||(((_a=node==null?void 0:node.liveConsumerNode)==null?void 0:_a.length)??0)>0;}function assertConsumerNode(node){node.producerNode??(node.producerNode=[]);node.producerIndexOfThis??(node.producerIndexOfThis=[]);node.producerLastReadVersion??(node.producerLastReadVersion=[]);}function assertProducerNode(node){node.liveConsumerNode??(node.liveConsumerNode=[]);node.liveConsumerIndexOfThis??(node.liveConsumerIndexOfThis=[]);}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function computedGet(node){producerUpdateValueVersion(node);producerAccessed(node);if(node.value===ERRORED){throw node.error;}return node.value;}function createComputed(computation){const node=Object.create(COMPUTED_NODE);node.computation=computation;const computed=()=>computedGet(node);computed[SIGNAL]=node;return computed;}const UNSET=/* @__PURE__ */Symbol("UNSET");const COMPUTING=/* @__PURE__ */Symbol("COMPUTING");const ERRORED=/* @__PURE__ */Symbol("ERRORED");const COMPUTED_NODE=/* @__PURE__ */(()=>{return{...REACTIVE_NODE,value:UNSET,dirty:true,error:null,equal:defaultEquals,producerMustRecompute(node){return node.value===UNSET||node.value===COMPUTING;},producerRecomputeValue(node){if(node.value===COMPUTING){throw new Error("Detected cycle in computations.");}const oldValue=node.value;node.value=COMPUTING;const prevConsumer=consumerBeforeComputation(node);let newValue;let wasEqual=false;try{newValue=node.computation.call(node.wrapper);const oldOk=oldValue!==UNSET&&oldValue!==ERRORED;wasEqual=oldOk&&node.equal.call(node.wrapper,oldValue,newValue);}catch(err){newValue=ERRORED;node.error=err;}finally{consumerAfterComputation(node,prevConsumer);}if(wasEqual){node.value=oldValue;return;}node.value=newValue;node.version++;}};})();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function defaultThrowError(){throw new Error();}let throwInvalidWriteToSignalErrorFn=defaultThrowError;function throwInvalidWriteToSignalError(){throwInvalidWriteToSignalErrorFn();}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function createSignal(initialValue){const node=Object.create(SIGNAL_NODE);node.value=initialValue;const getter=()=>{producerAccessed(node);return node.value;};getter[SIGNAL]=node;return getter;}function signalGetFn(){producerAccessed(this);return this.value;}function signalSetFn(node,newValue){if(!producerUpdatesAllowed()){throwInvalidWriteToSignalError();}if(!node.equal.call(node.wrapper,node.value,newValue)){node.value=newValue;signalValueChanged(node);}}const SIGNAL_NODE=/* @__PURE__ */(()=>{return{...REACTIVE_NODE,equal:defaultEquals,value:void 0};})();function signalValueChanged(node){node.version++;producerIncrementEpoch();producerNotifyConsumers(node);}/**
 * @license
 * Copyright 2024 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NODE=Symbol("node");var Signal;(Signal2=>{var _a,_brand,brand_fn,_b,_brand2,brand_fn2;class State{constructor(initialValue,options={}){__privateAdd(this,_brand);__publicField(this,_a);const ref=createSignal(initialValue);const node=ref[SIGNAL];this[NODE]=node;node.wrapper=this;if(options){const equals=options.equals;if(equals){node.equal=equals;}node.watched=options[Signal2.subtle.watched];node.unwatched=options[Signal2.subtle.unwatched];}}get(){if(!(0,Signal2.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.get");return signalGetFn.call(this[NODE]);}set(newValue){if(!(0,Signal2.isState)(this))throw new TypeError("Wrong receiver type for Signal.State.prototype.set");if(isInNotificationPhase()){throw new Error("Writes to signals not permitted during Watcher callback");}const ref=this[NODE];signalSetFn(ref,newValue);}}_a=NODE;_brand=new WeakSet();brand_fn=function(){};Signal2.isState=s=>typeof s==="object"&&__privateIn(_brand,s);Signal2.State=State;class Computed{// Create a Signal which evaluates to the value returned by the callback.
// Callback is called with this signal as the parameter.
constructor(computation,options){__privateAdd(this,_brand2);__publicField(this,_b);const ref=createComputed(computation);const node=ref[SIGNAL];node.consumerAllowSignalWrites=true;this[NODE]=node;node.wrapper=this;if(options){const equals=options.equals;if(equals){node.equal=equals;}node.watched=options[Signal2.subtle.watched];node.unwatched=options[Signal2.subtle.unwatched];}}get(){if(!(0,Signal2.isComputed)(this))throw new TypeError("Wrong receiver type for Signal.Computed.prototype.get");return computedGet(this[NODE]);}}_b=NODE;_brand2=new WeakSet();brand_fn2=function(){};Signal2.isComputed=c=>typeof c==="object"&&__privateIn(_brand2,c);Signal2.Computed=Computed;(subtle2=>{var _a2,_brand3,brand_fn3,_assertSignals,assertSignals_fn;function untrack(cb){let output;let prevActiveConsumer=null;try{prevActiveConsumer=setActiveConsumer(null);output=cb();}finally{setActiveConsumer(prevActiveConsumer);}return output;}subtle2.untrack=untrack;function introspectSources(sink){var _a3;if(!(0,Signal2.isComputed)(sink)&&!(0,Signal2.isWatcher)(sink)){throw new TypeError("Called introspectSources without a Computed or Watcher argument");}return((_a3=sink[NODE].producerNode)==null?void 0:_a3.map(n=>n.wrapper))??[];}subtle2.introspectSources=introspectSources;function introspectSinks(signal){var _a3;if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isState)(signal)){throw new TypeError("Called introspectSinks without a Signal argument");}return((_a3=signal[NODE].liveConsumerNode)==null?void 0:_a3.map(n=>n.wrapper))??[];}subtle2.introspectSinks=introspectSinks;function hasSinks(signal){if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isState)(signal)){throw new TypeError("Called hasSinks without a Signal argument");}const liveConsumerNode=signal[NODE].liveConsumerNode;if(!liveConsumerNode)return false;return liveConsumerNode.length>0;}subtle2.hasSinks=hasSinks;function hasSources(signal){if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isWatcher)(signal)){throw new TypeError("Called hasSources without a Computed or Watcher argument");}const producerNode=signal[NODE].producerNode;if(!producerNode)return false;return producerNode.length>0;}subtle2.hasSources=hasSources;class Watcher{// When a (recursive) source of Watcher is written to, call this callback,
// if it hasn't already been called since the last `watch` call.
// No signals may be read or written during the notify.
constructor(notify){__privateAdd(this,_brand3);__privateAdd(this,_assertSignals);__publicField(this,_a2);let node=Object.create(REACTIVE_NODE);node.wrapper=this;node.consumerMarkedDirty=notify;node.consumerIsAlwaysLive=true;node.consumerAllowSignalWrites=false;node.producerNode=[];this[NODE]=node;}// Add these signals to the Watcher's set, and set the watcher to run its
// notify callback next time any signal in the set (or one of its dependencies) changes.
// Can be called with no arguments just to reset the "notified" state, so that
// the notify callback will be invoked again.
watch(...signals){if(!(0,Signal2.isWatcher)(this)){throw new TypeError("Called unwatch without Watcher receiver");}__privateMethod(this,_assertSignals,assertSignals_fn).call(this,signals);const node=this[NODE];node.dirty=false;const prev=setActiveConsumer(node);for(const signal of signals){producerAccessed(signal[NODE]);}setActiveConsumer(prev);}// Remove these signals from the watched set (e.g., for an effect which is disposed)
unwatch(...signals){if(!(0,Signal2.isWatcher)(this)){throw new TypeError("Called unwatch without Watcher receiver");}__privateMethod(this,_assertSignals,assertSignals_fn).call(this,signals);const node=this[NODE];assertConsumerNode(node);for(let i=node.producerNode.length-1;i>=0;i--){if(signals.includes(node.producerNode[i].wrapper)){producerRemoveLiveConsumerAtIndex(node.producerNode[i],node.producerIndexOfThis[i]);const lastIdx=node.producerNode.length-1;node.producerNode[i]=node.producerNode[lastIdx];node.producerIndexOfThis[i]=node.producerIndexOfThis[lastIdx];node.producerNode.length--;node.producerIndexOfThis.length--;node.nextProducerIndex--;if(i<node.producerNode.length){const idxConsumer=node.producerIndexOfThis[i];const producer=node.producerNode[i];assertProducerNode(producer);producer.liveConsumerIndexOfThis[idxConsumer]=i;}}}}// Returns the set of computeds in the Watcher's set which are still yet
// to be re-evaluated
getPending(){if(!(0,Signal2.isWatcher)(this)){throw new TypeError("Called getPending without Watcher receiver");}const node=this[NODE];return node.producerNode.filter(n=>n.dirty).map(n=>n.wrapper);}}_a2=NODE;_brand3=new WeakSet();brand_fn3=function(){};_assertSignals=new WeakSet();assertSignals_fn=function(signals){for(const signal of signals){if(!(0,Signal2.isComputed)(signal)&&!(0,Signal2.isState)(signal)){throw new TypeError("Called watch/unwatch without a Computed or State argument");}}};Signal2.isWatcher=w=>__privateIn(_brand3,w);subtle2.Watcher=Watcher;function currentComputed(){var _a3;return(_a3=getActiveConsumer())==null?void 0:_a3.wrapper;}subtle2.currentComputed=currentComputed;subtle2.watched=Symbol("watched");subtle2.unwatched=Symbol("unwatched");})(Signal2.subtle||(Signal2.subtle={}));})(Signal||(Signal={}));
;// ../../node_modules/@lit-labs/signals/lib/signal-watcher.js
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const signal_watcher_i=Symbol("SignalWatcherBrand"),signal_watcher_s=new FinalizationRegistry(({watcher:t,signal:i})=>{t.unwatch(i);}),signal_watcher_h=new WeakMap();function signal_watcher_e(e){return!0===e[signal_watcher_i]?(console.warn("SignalWatcher should not be applied to the same class more than once."),e):class extends e{constructor(){super(...arguments),this._$St=new t.State(0),this._$Si=!1,this._$So=!0,this._$Sh=new Set();}_$Sl(){if(void 0!==this._$Su)return;this._$Sv=new t.Computed(()=>{this._$St.get(),super.performUpdate();});const i=this._$Su=new t.subtle.Watcher(function(){const t=signal_watcher_h.get(this);void 0!==t&&(!1===t._$Si&&t.requestUpdate(),this.watch());});signal_watcher_h.set(i,this),signal_watcher_s.register(this,{watcher:i,signal:this._$Sv}),i.watch(this._$Sv);}_$Sp(){void 0!==this._$Su&&(this._$Su.unwatch(this._$Sv),this._$Sv=void 0,this._$Su=void 0);}performUpdate(){this.isUpdatePending&&(this._$Sl(),this._$Si=!0,this._$St.set(this._$St.get()+1),this._$Si=!1,this._$Sv.get());}update(t){try{this._$So?(this._$So=!1,super.update(t)):this._$Sh.forEach(t=>t.commit());}finally{this.isUpdatePending=!1,this._$Sh.clear();}}requestUpdate(t,i,s){this._$So=!0,super.requestUpdate(t,i,s);}connectedCallback(){super.connectedCallback(),this.requestUpdate();}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{!1===this.isConnected&&this._$Sp();});}_(t){this._$Sh.add(t);const i=this._$So;this.requestUpdate(),this._$So=i;}m(t){this._$Sh.delete(t);}};}
;// ../../node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU;}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e);}update(t,e){return this.render(...e);}}
;// ../../node_modules/lit/directive.js

;// ../../node_modules/lit-html/directive-helpers.js
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:directive_helpers_t}=Z,directive_helpers_i=o=>null===o||"object"!=typeof o&&"function"!=typeof o,directive_helpers_n={HTML:1,SVG:2,MATHML:3},directive_helpers_e=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,directive_helpers_l=o=>null!=o?._$litType$?.h,directive_helpers_c=o=>void 0!==o?._$litDirective$,directive_helpers_d=o=>o?._$litDirective$,directive_helpers_f=o=>void 0===o.strings,directive_helpers_s=()=>document.createComment(""),directive_helpers_r=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(directive_helpers_s(),l),c=e.insertBefore(directive_helpers_s(),l);n=new directive_helpers_t(i,c,o,o.options);}else{const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t);}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t;}}}return n;},directive_helpers_v=(o,t,i=o)=>(o._$AI(t,i),o),directive_helpers_u={},directive_helpers_m=(o,t=directive_helpers_u)=>o._$AH=t,directive_helpers_p=o=>o._$AH,directive_helpers_M=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o;}},directive_helpers_h=o=>{o._$AR();};
;// ../../node_modules/lit-html/async-directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const async_directive_s=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),async_directive_s(i,t);return!0;},async_directive_o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size);},async_directive_r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set();else if(e.has(i))break;e.add(i),async_directive_c(t);}};function async_directive_h(i){void 0!==this._$AN?(async_directive_o(this),this._$AM=i,async_directive_r(this)):this._$AM=i;}function async_directive_n(i,t=!1,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t){if(Array.isArray(r))for(let i=e;i<r.length;i++)async_directive_s(r[i],!1),async_directive_o(r[i]);else null!=r&&(async_directive_s(r,!1),async_directive_o(r));}else async_directive_s(this,i);}const async_directive_c=i=>{i.type==directive_t.CHILD&&(i._$AP??=async_directive_n,i._$AQ??=async_directive_h);};class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),async_directive_r(this),this.isConnected=i._$AU;}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(async_directive_s(this,i),async_directive_o(this));}setValue(t){if(directive_helpers_f(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}
;// ../../node_modules/lit/async-directive.js

;// ../../node_modules/@lit-labs/signals/lib/watch.js
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class watch_h extends async_directive_f{_$Sl(){if(void 0!==this._$Su)return;this._$SW=new Signal.Computed(()=>{var i;return null===(i=this._$Sj)||void 0===i?void 0:i.get();});const i=this._$Su=new Signal.subtle.Watcher(()=>{var t;null===(t=this._$SO)||void 0===t||t._(this),i.watch();});i.watch(this._$SW);}_$Sp(){var i;void 0!==this._$Su&&(this._$Su.unwatch(this._$SW),this._$SW=void 0,this._$Su=void 0,null===(i=this._$SO)||void 0===i||i.m(this));}commit(){this.setValue(Signal.subtle.untrack(()=>{var i;return null===(i=this._$SW)||void 0===i?void 0:i.get();}));}render(i){return Signal.subtle.untrack(()=>i.get());}update(i,[t]){var h,o;return null!==(h=this._$SO)&&void 0!==h||(this._$SO=null===(o=i.options)||void 0===o?void 0:o.host),t!==this._$Sj&&void 0!==this._$Sj&&this._$Sp(),this._$Sj=t,this._$Sl(),Signal.subtle.untrack(()=>this._$SW.get());}disconnected(){this._$Sp();}reconnected(){this._$Sl();}}const watch_o=directive_e(watch_h);
;// ../../node_modules/lit/html.js

;// ../../node_modules/@lit-labs/signals/lib/html-tag.js
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const html_tag_m=o=>(t,...m)=>o(t,...m.map(o=>o instanceof Signal.State||o instanceof Signal.Computed?watch_o(o):o)),html_tag_l=html_tag_m(x),html_tag_r=html_tag_m(lit_html_b);
;// ../../node_modules/@lit-labs/signals/index.js
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const signals_l=Signal.State,signals_o=Signal.Computed,signals_r=(l,o)=>new Signal.State(l,o),signals_i=(l,o)=>new t.Computed(l,o);
;// ./src/autofill/content/components/signals/selected-collection.ts

const selectedCollection = signals_r("0");

;// ./src/autofill/content/components/signals/selected-folder.ts

const selected_folder_selectedFolder = signals_r("0");

;// ./src/autofill/content/components/signals/selected-vault.ts

const selected_vault_selectedVault = signals_r("0");

;// ./src/autofill/content/components/notification/button-row.ts







function getVaultIconByProductTier(productTierType) {
    switch (productTierType) {
        case ProductTierType.Free:
        case ProductTierType.Families:
            return Family;
        case ProductTierType.Teams:
        case ProductTierType.Enterprise:
        case ProductTierType.TeamsStarter:
            return Business;
        default:
            return User;
    }
}
// Value represents default selector state outside of data-driven state
const defaultNoneSelectValue = "0";
function NotificationButtonRow({ collections, folders, i18n, organizations, primaryButton, personalVaultIsAllowed, theme, }) {
    const currentUserVaultOption = {
        icon: User,
        default: true,
        text: i18n.myVault,
        value: defaultNoneSelectValue,
    };
    // Do not include user vault if disallowed by org policy
    const initialVaultOptions = [
        ...(personalVaultIsAllowed ? [currentUserVaultOption] : []),
    ];
    const vaultOptions = (organizations === null || organizations === void 0 ? void 0 : organizations.length)
        ? organizations.reduce((options, { id, name, productTierType }) => {
            const icon = getVaultIconByProductTier(productTierType);
            return [
                ...options,
                {
                    icon,
                    text: name,
                    value: id,
                },
            ];
        }, initialVaultOptions)
        : initialVaultOptions;
    const folderOptions = (folders === null || folders === void 0 ? void 0 : folders.length)
        ? folders.reduce((options, { id, name }) => [
            ...options,
            {
                icon: Folder,
                text: name,
                value: id === null ? defaultNoneSelectValue : id,
                default: id === null,
            },
        ], [])
        : [];
    const collectionOptions = (collections === null || collections === void 0 ? void 0 : collections.length)
        ? collections.reduce((options, { id, name }) => [
            ...options,
            {
                icon: CollectionShared,
                text: name,
                value: id === null ? defaultNoneSelectValue : id,
                default: id === null,
            },
        ], [])
        : [];
    if (vaultOptions.length === 1) {
        selected_vault_selectedVault === null || selected_vault_selectedVault === void 0 ? void 0 : selected_vault_selectedVault.set(vaultOptions[0].value);
        // If the individual vault is disabled by a vault policy,
        // a collection selection is required
        if (!personalVaultIsAllowed &&
            (collections === null || collections === void 0 ? void 0 : collections.length) &&
            selectedCollection.get() === defaultNoneSelectValue) {
            selectedCollection === null || selectedCollection === void 0 ? void 0 : selectedCollection.set(collections[0].id);
        }
    }
    return x `
    ${ButtonRow({
        theme,
        primaryButton,
        selectButtons: [
            ...(vaultOptions.length > 1
                ? [
                    {
                        id: "organization",
                        label: i18n.vault,
                        options: vaultOptions,
                        selectedSignal: selected_vault_selectedVault,
                    },
                ]
                : []),
            ...(folderOptions.length > 1 && !collectionOptions.length
                ? [
                    {
                        id: "folder",
                        label: i18n.folder,
                        options: folderOptions,
                        selectedSignal: selected_folder_selectedFolder,
                    },
                ]
                : []),
            ...(collectionOptions.length > 1
                ? [
                    {
                        id: "collection",
                        label: i18n.collection,
                        options: collectionOptions,
                        selectedSignal: selectedCollection,
                    },
                ]
                : []),
        ],
    })}
  `;
}

;// ./src/autofill/content/components/notification/footer.ts





function NotificationFooter({ collections, folders, i18n, isLoading, notificationType, organizations, personalVaultIsAllowed, theme, handleSaveAction, }) {
    const isChangeNotification = notificationType === NotificationTypes.Change;
    const isUnlockNotification = notificationType === NotificationTypes.Unlock;
    let primaryButtonText = i18n.saveAction;
    if (isUnlockNotification) {
        primaryButtonText = i18n.notificationUnlock;
    }
    return x `
    <div class=${notificationFooterStyles({ isChangeNotification })}>
      ${!isChangeNotification
        ? NotificationButtonRow({
            collections,
            folders,
            organizations,
            i18n,
            primaryButton: {
                handlePrimaryButtonClick: handleSaveAction,
                isLoading,
                text: primaryButtonText,
            },
            personalVaultIsAllowed,
            theme,
        })
        : E}
    </div>
  `;
}
const notificationFooterStyles = ({ isChangeNotification, }) => emotion_css_esm_css `
  display: flex;
  padding: ${spacing[2]} ${spacing[4]} ${isChangeNotification ? spacing[1] : spacing[4]}
    ${spacing[4]};

  :last-child {
    border-radius: 0 0 ${spacing["4"]} ${spacing["4"]};
  }
`;

;// ./src/autofill/content/components/notification/container.ts








function NotificationContainer({ handleCloseNotification, handleEditOrUpdateAction, handleSaveAction, ciphers, collections, folders, headerMessage, i18n, isLoading, organizations, personalVaultIsAllowed = true, notificationTestId, theme = ThemeTypes.Light, type, }) {
    const showBody = type !== NotificationTypes.Unlock;
    return x `
    <div data-testid="${notificationTestId}" class=${container_notificationContainerStyles(theme)}>
      ${NotificationHeader({
        handleCloseNotification,
        i18n,
        message: headerMessage,
        theme,
    })}
      ${showBody
        ? NotificationBody({
            handleEditOrUpdateAction,
            ciphers,
            notificationType: type,
            theme,
            i18n,
        })
        : E}
      ${NotificationFooter({
        handleSaveAction,
        collections,
        folders,
        i18n,
        isLoading,
        notificationType: type,
        organizations,
        personalVaultIsAllowed,
        theme,
    })}
    </div>
  `;
}
const container_notificationContainerStyles = (theme) => emotion_css_esm_css `
  position: absolute;
  right: 20px;
  border: 1px solid ${styles_themes[theme].secondary["300"]};
  border-radius: ${spacing["4"]};
  box-shadow: -2px 4px 6px 0px #0000001a;
  background-color: ${styles_themes[theme].background.alt};
  width: 400px;

  [class*="${componentClassPrefix}-"] {
    border-radius: ${spacing["4"]} ${spacing["4"]} 0 0;
  }

  [class*="${notification_body_componentClassPrefix}-"] {
    margin: ${spacing["3"]} 0 0 ${spacing["3"]};
    padding-right: ${spacing["3"]};
  }
`;

;// ./src/autofill/enums/autofill-port.enum.ts
const autofill_port_enum_AutofillPort = {
    InjectedScript: "autofill-injected-script-port",
};


;// ./src/autofill/utils/index.ts
var utils_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
    return utils_awaiter(this, arguments, void 0, function* (command, options = {}) {
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

;// ./src/autofill/notification/bar.ts
var bar_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











const logService = new ConsoleLogService(false);
let notificationBarIframeInitData = {};
let windowMessageOrigin;
let useComponentBar = false;
const notificationBarWindowMessageHandlers = {
    initNotificationBar: ({ message }) => initNotificationBar(message),
    saveCipherAttemptCompleted: ({ message }) => useComponentBar
        ? handleSaveCipherConfirmation(message)
        : handleSaveCipherAttemptCompletedMessage(message),
};
globalThis.addEventListener("load", load);
function load() {
    setupWindowMessageListener();
    sendPlatformMessage({ command: "notificationRefreshFlagValue" }, (flagValue) => {
        useComponentBar = flagValue;
        applyNotificationBarStyle();
    });
}
function applyNotificationBarStyle() {
    if (!useComponentBar) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        __webpack_require__(6121);
    }
    postMessageToParent({ command: "initNotificationBar" });
}
function getI18n() {
    return {
        appName: chrome.i18n.getMessage("appName"),
        atRiskPassword: chrome.i18n.getMessage("atRiskPassword"),
        changePassword: chrome.i18n.getMessage("changePassword"),
        close: chrome.i18n.getMessage("close"),
        collection: chrome.i18n.getMessage("collection"),
        folder: chrome.i18n.getMessage("folder"),
        loginSaveConfirmation: chrome.i18n.getMessage("loginSaveConfirmation"),
        loginSaveSuccess: chrome.i18n.getMessage("loginSaveSuccess"),
        loginUpdatedConfirmation: chrome.i18n.getMessage("loginUpdatedConfirmation"),
        loginUpdateSuccess: chrome.i18n.getMessage("loginUpdateSuccess"),
        loginUpdateTaskSuccess: chrome.i18n.getMessage("loginUpdateTaskSuccess"),
        loginUpdateTaskSuccessAdditional: chrome.i18n.getMessage("loginUpdateTaskSuccessAdditional"),
        myVault: chrome.i18n.getMessage("myVault"),
        never: chrome.i18n.getMessage("never"),
        newItem: chrome.i18n.getMessage("newItem"),
        nextSecurityTaskAction: chrome.i18n.getMessage("nextSecurityTaskAction"),
        notificationAddDesc: chrome.i18n.getMessage("notificationAddDesc"),
        notificationAddSave: chrome.i18n.getMessage("notificationAddSave"),
        notificationChangeDesc: chrome.i18n.getMessage("notificationChangeDesc"),
        notificationEdit: chrome.i18n.getMessage("edit"),
        notificationEditTooltip: chrome.i18n.getMessage("notificationEditTooltip"),
        notificationLoginSaveConfirmation: chrome.i18n.getMessage("notificationLoginSaveConfirmation"),
        notificationLoginUpdatedConfirmation: chrome.i18n.getMessage("notificationLoginUpdatedConfirmation"),
        notificationUnlock: chrome.i18n.getMessage("notificationUnlock"),
        notificationUnlockDesc: chrome.i18n.getMessage("notificationUnlockDesc"),
        notificationUpdate: chrome.i18n.getMessage("notificationChangeSave"),
        notificationViewAria: chrome.i18n.getMessage("notificationViewAria"),
        saveAction: chrome.i18n.getMessage("notificationAddSave"),
        saveAsNewLoginAction: chrome.i18n.getMessage("saveAsNewLoginAction"),
        saveFailure: chrome.i18n.getMessage("saveFailure"),
        saveFailureDetails: chrome.i18n.getMessage("saveFailureDetails"),
        saveLogin: chrome.i18n.getMessage("saveLogin"),
        typeLogin: chrome.i18n.getMessage("typeLogin"),
        unlockToSave: chrome.i18n.getMessage("unlockToSave"),
        updateLogin: chrome.i18n.getMessage("updateLogin"),
        updateLoginAction: chrome.i18n.getMessage("updateLoginAction"),
        vault: chrome.i18n.getMessage("vault"),
        view: chrome.i18n.getMessage("view"),
    };
}
/**
 * Attempts to locate an element by ID within a template’s content and casts it to the specified type.
 *
 * @param templateElement - The template whose content will be searched for the element.
 * @param elementId - The ID of the element being searched for.
 * @returns The typed element if found, otherwise log error.
 *
 */
const findElementById = (templateElement, elementId) => {
    const element = templateElement.content.getElementById(elementId);
    if (!element) {
        throw new Error(`Element with ID "${elementId}" not found in template.`);
    }
    return element;
};
/**
 * Returns the localized header message for the notification bar based on the notification type.
 *
 * @returns The localized header message string, or undefined if the type is not recognized.
 */
function getNotificationHeaderMessage(i18n, type) {
    return type
        ? {
            [NotificationTypes.Add]: i18n.saveLogin,
            [NotificationTypes.Change]: i18n.updateLogin,
            [NotificationTypes.Unlock]: i18n.unlockToSave,
            [NotificationTypes.AtRiskPassword]: i18n.atRiskPassword,
        }[type]
        : undefined;
}
/**
 * Returns the localized header message for the confirmation message bar based on the notification type.
 *
 * @returns The localized header message string, or undefined if the type is not recognized.
 */
function getConfirmationHeaderMessage(i18n, type, error) {
    if (error) {
        return i18n.saveFailure;
    }
    return type
        ? {
            [NotificationTypes.Add]: i18n.loginSaveSuccess,
            [NotificationTypes.Change]: i18n.loginUpdateSuccess,
            [NotificationTypes.Unlock]: "",
            [NotificationTypes.AtRiskPassword]: "",
        }[type]
        : undefined;
}
/**
 * Appends the header message to the document title.
 * If the header message is already present, it avoids duplication.
 */
function appendHeaderMessageToTitle(headerMessage) {
    if (!headerMessage) {
        return;
    }
    const baseTitle = document.title.split(" - ")[0];
    document.title = `${baseTitle} - ${headerMessage}`;
}
/**
 * Determines the effective notification type to use based on initialization data.
 *
 * If the vault is locked, the notification type will be set to `Unlock`.
 * Otherwise, the type provided in the init data is returned.
 *
 * @returns The resolved `NotificationType` to be used for rendering logic.
 */
function resolveNotificationType(initData) {
    if (initData.isVaultLocked) {
        return NotificationTypes.Unlock;
    }
    return initData.type;
}
/**
 * Returns the appropriate test ID based on the resolved notification type.
 *
 * @param type - The resolved NotificationType.
 * @param isConfirmation - Optional flag for confirmation vs. notification container.
 */
function getNotificationTestId(notificationType, isConfirmation = false) {
    if (isConfirmation) {
        return "confirmation-notification-bar";
    }
    return {
        [NotificationTypes.Unlock]: "unlock-notification-bar",
        [NotificationTypes.Add]: "save-notification-bar",
        [NotificationTypes.Change]: "update-notification-bar",
        [NotificationTypes.AtRiskPassword]: "at-risk-password-notification-bar",
    }[notificationType];
}
/**
 * Sets the text content of an element identified by ID within a template's content.
 *
 * @param template - The template whose content will be searched for the element.
 * @param elementId - The ID of the element whose text content is to be set.
 * @param text - The text content to set for the specified element.
 * @returns void
 *
 * This function attempts to locate an element by its ID within the content of a given HTML template.
 * If the element is found, it updates the element's text content with the provided text.
 * If the element is not found, the function does nothing, ensuring that the operation is safe and does not throw errors.
 */
function setElementText(template, elementId, text) {
    const element = template.content.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}
function initNotificationBar(message) {
    return bar_awaiter(this, void 0, void 0, function* () {
        const { initData } = message;
        if (!initData) {
            return;
        }
        notificationBarIframeInitData = initData;
        const { isVaultLocked, removeIndividualVault: personalVaultDisallowed, // renamed to avoid local method collision
        theme, } = notificationBarIframeInitData;
        const i18n = getI18n();
        const resolvedTheme = getResolvedTheme(theme !== null && theme !== void 0 ? theme : ThemeTypes.Light);
        // https://drafts.csswg.org/css-color-adjust-1/#preferred
        // Prevents preferred color scheme from forcing an opaque background in the iframe
        const colorScheme = new URLSearchParams(window.location.search).get("colorScheme") || "";
        const allowedColorScheme = matchAllowedColorSchemes(colorScheme);
        const meta = document.createElement("meta");
        meta.setAttribute("name", "color-scheme");
        meta.setAttribute("content", allowedColorScheme);
        document.getElementsByTagName("head")[0].appendChild(meta);
        if (useComponentBar) {
            const resolvedType = resolveNotificationType(notificationBarIframeInitData);
            const headerMessage = getNotificationHeaderMessage(i18n, resolvedType);
            const notificationTestId = getNotificationTestId(resolvedType);
            appendHeaderMessageToTitle(headerMessage);
            document.body.innerHTML = "";
            // Current implementations utilize a require for scss files which creates the need to remove the node.
            document.head.querySelectorAll('link[rel="stylesheet"]').forEach((node) => node.remove());
            if (isVaultLocked) {
                const notificationConfig = Object.assign(Object.assign({}, notificationBarIframeInitData), { headerMessage, type: resolvedType, notificationTestId, theme: resolvedTheme, personalVaultIsAllowed: !personalVaultDisallowed, handleCloseNotification,
                    handleEditOrUpdateAction,
                    i18n });
                const handleSaveAction = () => {
                    sendSaveCipherMessage(true);
                    B(NotificationContainer(Object.assign(Object.assign({}, notificationConfig), { handleSaveAction: () => { }, isLoading: true })), document.body);
                };
                const UnlockNotification = NotificationContainer(Object.assign(Object.assign({}, notificationConfig), { handleSaveAction }));
                return B(UnlockNotification, document.body);
            }
            // Handle AtRiskPasswordNotification render
            if (notificationBarIframeInitData.type === NotificationTypes.AtRiskPassword) {
                return B(AtRiskNotification(Object.assign(Object.assign({}, notificationBarIframeInitData), { type: notificationBarIframeInitData.type, theme: resolvedTheme, i18n, params: initData.params, handleCloseNotification })), document.body);
            }
            // Default scenario: add or update password
            const orgId = selected_vault_selectedVault.get();
            yield Promise.all([
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetOrgData" }, resolve)),
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetFolderData" }, resolve)),
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetDecryptedCiphers" }, resolve)),
                new Promise((resolve) => sendPlatformMessage({ command: "bgGetCollectionData", orgId }, resolve)),
            ]).then(([organizations, folders, ciphers, collections]) => {
                notificationBarIframeInitData = Object.assign(Object.assign({}, notificationBarIframeInitData), { organizations,
                    folders,
                    ciphers,
                    collections });
                // @TODO use context to avoid prop drilling
                return B(NotificationContainer(Object.assign(Object.assign({}, notificationBarIframeInitData), { headerMessage, type: resolvedType, theme: resolvedTheme, notificationTestId, personalVaultIsAllowed: !personalVaultDisallowed, handleCloseNotification,
                    handleSaveAction,
                    handleEditOrUpdateAction,
                    i18n })), document.body);
            });
        }
        else {
            setNotificationBarTheme();
            document.getElementById("logo").src = isVaultLocked
                ? chrome.runtime.getURL("images/icon38_locked.png")
                : chrome.runtime.getURL("images/icon38.png");
            setupLogoLink(i18n.appName);
            // i18n for "Add" template
            const addTemplate = document.getElementById("template-add");
            const neverButton = findElementById(addTemplate, "never-save");
            neverButton.textContent = i18n.never;
            const selectFolder = findElementById(addTemplate, "select-folder");
            selectFolder.hidden = isVaultLocked || removeIndividualVault();
            selectFolder.setAttribute("aria-label", i18n.folder);
            const addButton = findElementById(addTemplate, "add-save");
            addButton.textContent = i18n.notificationAddSave;
            const addEditButton = findElementById(addTemplate, "add-edit");
            // If Remove Individual Vault policy applies, "Add" opens the edit tab, so we hide the Edit button
            addEditButton.hidden = removeIndividualVault();
            addEditButton.textContent = i18n.notificationEdit;
            setElementText(addTemplate, "add-text", i18n.notificationAddDesc);
            // i18n for "Change" (update password) template
            const changeTemplate = document.getElementById("template-change");
            const changeButton = findElementById(changeTemplate, "change-save");
            changeButton.textContent = i18n.notificationUpdate;
            const changeEditButton = findElementById(changeTemplate, "change-edit");
            changeEditButton.textContent = i18n.notificationEdit;
            setElementText(changeTemplate, "change-text", i18n.notificationChangeDesc);
            // i18n for "Unlock" (unlock extension) template
            const unlockTemplate = document.getElementById("template-unlock");
            const unlockButton = findElementById(unlockTemplate, "unlock-vault");
            unlockButton.textContent = i18n.notificationUnlock;
            setElementText(unlockTemplate, "unlock-text", i18n.notificationUnlockDesc);
            // i18n for body content
            const closeButton = document.getElementById("close-button");
            if (closeButton) {
                closeButton.title = i18n.close;
            }
            const notificationType = initData.type;
            if (notificationType === "add") {
                handleTypeAdd();
            }
            else if (notificationType === "change") {
                handleTypeChange();
            }
            else if (notificationType === "unlock") {
                handleTypeUnlock();
            }
            closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener("click", handleCloseNotification);
            globalThis.addEventListener("resize", adjustHeight);
            adjustHeight();
        }
        function handleEditOrUpdateAction(e) {
            const notificationType = initData === null || initData === void 0 ? void 0 : initData.type;
            e.preventDefault();
            notificationType === "add" ? sendSaveCipherMessage(true) : sendSaveCipherMessage(false);
        }
    });
}
function handleCloseNotification(e) {
    e.preventDefault();
    sendPlatformMessage({
        command: "bgCloseNotificationBar",
    });
}
function handleSaveAction(e) {
    const selectedVault = selected_vault_selectedVault.get();
    const selectedFolder = selected_folder_selectedFolder.get();
    if (selectedVault.length > 1) {
        openAddEditVaultItemPopout(e, Object.assign({ organizationId: selectedVault }, ((selectedFolder === null || selectedFolder === void 0 ? void 0 : selectedFolder.length) > 1 ? { folder: selectedFolder } : {})));
        handleCloseNotification(e);
        return;
    }
    e.preventDefault();
    sendSaveCipherMessage(removeIndividualVault(), selectedFolder);
    if (removeIndividualVault()) {
        return;
    }
}
function handleTypeAdd() {
    setContent(document.getElementById("template-add"));
    const addButton = document.getElementById("add-save");
    addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", (e) => {
        e.preventDefault();
        // If Remove Individual Vault policy applies, "Add" opens the edit tab
        sendSaveCipherMessage(removeIndividualVault(), getSelectedFolder());
    });
    if (removeIndividualVault()) {
        // Everything past this point is only required if user has an individual vault
        return;
    }
    const editButton = document.getElementById("add-edit");
    editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true, getSelectedFolder());
    });
    const neverButton = document.getElementById("never-save");
    neverButton === null || neverButton === void 0 ? void 0 : neverButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendPlatformMessage({
            command: "bgNeverSave",
        });
    });
    loadFolderSelector();
}
function handleTypeChange() {
    setContent(document.getElementById("template-change"));
    const changeButton = document.getElementById("change-save");
    changeButton === null || changeButton === void 0 ? void 0 : changeButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(false);
    });
    const editButton = document.getElementById("change-edit");
    editButton === null || editButton === void 0 ? void 0 : editButton.addEventListener("click", (e) => {
        e.preventDefault();
        sendSaveCipherMessage(true);
    });
}
function sendSaveCipherMessage(edit, folder) {
    sendPlatformMessage({
        command: "bgSaveCipher",
        folder,
        edit,
    });
}
function handleSaveCipherAttemptCompletedMessage(message) {
    const addSaveButtonContainers = document.querySelectorAll(".add-change-cipher-buttons");
    const notificationBarOuterWrapper = document.getElementById("notification-bar-outer-wrapper");
    if (message === null || message === void 0 ? void 0 : message.error) {
        addSaveButtonContainers.forEach((element) => {
            element.textContent = chrome.i18n.getMessage("saveCipherAttemptFailed");
            element.classList.add("error-message");
            notificationBarOuterWrapper === null || notificationBarOuterWrapper === void 0 ? void 0 : notificationBarOuterWrapper.classList.add("error-event");
        });
        adjustHeight();
        logService.error(`Error encountered when saving credentials: ${message.error}`);
        return;
    }
    const messageName = notificationBarIframeInitData.type === "add" ? "passwordSaved" : "passwordUpdated";
    addSaveButtonContainers.forEach((element) => {
        element.textContent = chrome.i18n.getMessage(messageName);
        element.prepend(buildSvgDomElement(circleCheckIcon));
        element.classList.add("success-message");
        notificationBarOuterWrapper === null || notificationBarOuterWrapper === void 0 ? void 0 : notificationBarOuterWrapper.classList.add("success-event");
    });
    adjustHeight();
    globalThis.setTimeout(() => sendPlatformMessage({ command: "bgCloseNotificationBar", fadeOutNotification: true }), 3000);
}
function openAddEditVaultItemPopout(e, options) {
    e.preventDefault();
    sendPlatformMessage(Object.assign({ command: "bgOpenAddEditVaultItemPopout" }, options));
}
function openViewVaultItemPopout(cipherId) {
    sendPlatformMessage({
        command: "bgOpenViewVaultItemPopout",
        cipherId,
    });
}
function handleSaveCipherConfirmation(message) {
    const { theme, type } = notificationBarIframeInitData;
    const { error, data } = message;
    const { cipherId, task, itemName } = data || {};
    const i18n = getI18n();
    const resolvedTheme = getResolvedTheme(theme !== null && theme !== void 0 ? theme : ThemeTypes.Light);
    const resolvedType = resolveNotificationType(notificationBarIframeInitData);
    const headerMessage = getConfirmationHeaderMessage(i18n, resolvedType, error);
    const notificationTestId = getNotificationTestId(resolvedType, true);
    appendHeaderMessageToTitle(headerMessage);
    globalThis.setTimeout(() => sendPlatformMessage({ command: "bgCloseNotificationBar" }), 5000);
    return B(NotificationConfirmationContainer(Object.assign(Object.assign({}, notificationBarIframeInitData), { error,
        handleCloseNotification, handleOpenTasks: () => sendPlatformMessage({ command: "bgOpenAtRiskPasswords" }), handleOpenVault: (e) => cipherId ? openViewVaultItemPopout(cipherId) : openAddEditVaultItemPopout(e, {}), headerMessage,
        i18n, itemName: itemName !== null && itemName !== void 0 ? itemName : i18n.typeLogin, notificationTestId,
        task, theme: resolvedTheme, type: type })), document.body);
}
function handleTypeUnlock() {
    setContent(document.getElementById("template-unlock"));
    const unlockButton = document.getElementById("unlock-vault");
    unlockButton === null || unlockButton === void 0 ? void 0 : unlockButton.addEventListener("click", (e) => {
        sendPlatformMessage({
            command: "bgReopenUnlockPopout",
        });
    });
}
function setContent(template) {
    const content = document.getElementById("content");
    while (content === null || content === void 0 ? void 0 : content.firstChild) {
        content === null || content === void 0 ? void 0 : content.removeChild(content.firstChild);
    }
    const newElement = template.content.cloneNode(true);
    content === null || content === void 0 ? void 0 : content.appendChild(newElement);
}
function sendPlatformMessage(msg, responseCallback) {
    chrome.runtime.sendMessage(msg, (response) => {
        if (responseCallback) {
            responseCallback(response);
        }
    });
}
function loadFolderSelector() {
    const populateFolderData = (folderData) => {
        const select = document.getElementById("select-folder");
        if (!select) {
            return;
        }
        if (!(folderData === null || folderData === void 0 ? void 0 : folderData.length)) {
            select.appendChild(new Option(chrome.i18n.getMessage("noFoldersFound"), undefined, true));
            select.setAttribute("disabled", "true");
            return;
        }
        select.appendChild(new Option(chrome.i18n.getMessage("selectFolder"), undefined, true));
        folderData.forEach((folder) => {
            // Select "No Folder" (id=null) folder by default
            select.appendChild(new Option(folder.name, folder.id || "", false));
        });
    };
    sendPlatformMessage({ command: "bgGetFolderData" }, populateFolderData);
}
function getSelectedFolder() {
    return document.getElementById("select-folder").value;
}
function removeIndividualVault() {
    return Boolean(notificationBarIframeInitData === null || notificationBarIframeInitData === void 0 ? void 0 : notificationBarIframeInitData.removeIndividualVault);
}
function adjustHeight() {
    const body = document.querySelector("body");
    if (!body) {
        return;
    }
    const data = {
        height: body.scrollHeight,
    };
    sendPlatformMessage({
        command: "bgAdjustNotificationBar",
        data,
    });
}
function setupWindowMessageListener() {
    globalThis.addEventListener("message", handleWindowMessage);
}
function handleWindowMessage(event) {
    if (!windowMessageOrigin) {
        windowMessageOrigin = event.origin;
    }
    if (event.origin !== windowMessageOrigin) {
        return;
    }
    const message = event.data;
    const handler = notificationBarWindowMessageHandlers[message.command];
    if (!handler) {
        return;
    }
    handler({ message });
}
function setupLogoLink(linkText) {
    const logoLink = document.getElementById("logo-link");
    logoLink.title = linkText;
    const setWebVaultUrlLink = (webVaultURL) => {
        const newVaultURL = webVaultURL && decodeURIComponent(webVaultURL);
        if (newVaultURL && newVaultURL !== logoLink.href) {
            logoLink.href = newVaultURL;
        }
    };
    sendPlatformMessage({ command: "getWebVaultUrlForNotification" }, setWebVaultUrlLink);
}
function getTheme(globalThis, theme) {
    if (theme === ThemeTypes.System) {
        return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
            ? ThemeTypes.Dark
            : ThemeTypes.Light;
    }
    return theme;
}
function getResolvedTheme(theme) {
    const themeType = getTheme(globalThis, theme);
    // There are other possible passed theme values, but for now, resolve to dark or light
    const resolvedTheme = themeType === ThemeTypes.Dark ? ThemeTypes.Dark : ThemeTypes.Light;
    return resolvedTheme;
}
function setNotificationBarTheme() {
    const theme = getTheme(globalThis, notificationBarIframeInitData.theme);
    document.documentElement.classList.add(`theme_${theme}`);
}
function postMessageToParent(message) {
    globalThis.parent.postMessage(message, windowMessageOrigin || "*");
}

/******/ })()
;