"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-mfu-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isChrome: () => (/* binding */ isChrome),
/* harmony export */   isEdge: () => (/* binding */ isEdge),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isSafari: () => (/* binding */ isSafari)
/* harmony export */ });
var userAgent = window.navigator.userAgent;
var isEdge = function isEdge() {
  return userAgent.includes('Edg');
}; // Edge previously had Edge but they changed to Edg
var isChrome = function isChrome() {
  return userAgent.includes('Chrome') && !isEdge();
};
var isFirefox = function isFirefox() {
  return userAgent.includes('Firefox');
};
var isSafari = function isSafari() {
  return userAgent.includes('Safari') && !isChrome() && !isEdge();
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentTypeDataMapByHref: () => (/* binding */ createContentTypeDataMapByHref),
/* harmony export */   getContentTypeData: () => (/* binding */ getContentTypeData),
/* harmony export */   getContentTypeDataByHref: () => (/* binding */ getContentTypeDataByHref),
/* harmony export */   getContentTypeIconUrl: () => (/* binding */ getContentTypeIconUrl),
/* harmony export */   getContentTypeIconUrlByHref: () => (/* binding */ getContentTypeIconUrlByHref),
/* harmony export */   getContentTypeIdentifierByHref: () => (/* binding */ getContentTypeIdentifierByHref),
/* harmony export */   getContentTypeName: () => (/* binding */ getContentTypeName),
/* harmony export */   getContentTypeNameByHref: () => (/* binding */ getContentTypeNameByHref)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var contentTypesDataMap = null;
var contentTypesDataMapByHref = null;

/**
 * Creates map with content types identifiers as keys for faster lookup
 *
 * @function createContentTypeDataMap
 * @returns {Object} contentTypesDataMap
 */
var createContentTypeDataMap = function createContentTypeDataMap() {
  return Object.values((0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().contentTypes).reduce(function (contentTypeDataMap, contentTypeGroup) {
    var _iterator = _createForOfIteratorHelper(contentTypeGroup),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var contentTypeData = _step.value;
        contentTypeDataMap[contentTypeData.identifier] = contentTypeData;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return contentTypeDataMap;
  }, {});
};
var createContentTypeDataMapByHref = function createContentTypeDataMapByHref() {
  return Object.values((0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().contentTypes).reduce(function (contentTypeDataMapByHref, contentTypeGroup) {
    var _iterator2 = _createForOfIteratorHelper(contentTypeGroup),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var contentTypeData = _step2.value;
        contentTypeDataMapByHref[contentTypeData.href] = contentTypeData;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return contentTypeDataMapByHref;
  }, {});
};

/**
 * Returns an URL to a content type icon
 *
 * @function getContentTypeIcon
 * @param {String} contentTypeIdentifier
 * @returns {String|null} url to icon
 */
var getContentTypeIconUrl = function getContentTypeIconUrl(contentTypeIdentifier) {
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
    return null;
  }
  var iconUrl = contentTypesDataMap[contentTypeIdentifier].thumbnail;
  return iconUrl;
};

/**
 * Returns contentType name from contentType identifier
 *
 * @function getContentTypeName
 * @param {String} contentTypeIdentifier
 * @returns {String|null} contentType name
 */
var getContentTypeName = function getContentTypeName(contentTypeIdentifier) {
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  if (!contentTypeIdentifier || !contentTypesDataMap[contentTypeIdentifier]) {
    return null;
  }
  return contentTypesDataMap[contentTypeIdentifier].name;
};
var getContentTypeData = function getContentTypeData(contentTypeIdentifier) {
  var _contentTypesDataMap$;
  if (!contentTypesDataMap) {
    contentTypesDataMap = createContentTypeDataMap();
  }
  return (_contentTypesDataMap$ = contentTypesDataMap[contentTypeIdentifier]) !== null && _contentTypesDataMap$ !== void 0 ? _contentTypesDataMap$ : null;
};
var getContentTypeIconUrlByHref = function getContentTypeIconUrlByHref(contentTypeHref) {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
    return null;
  }
  var iconUrl = contentTypesDataMapByHref[contentTypeHref].thumbnail;
  return iconUrl;
};
var getContentTypeNameByHref = function getContentTypeNameByHref(contentTypeHref) {
  var _getContentTypeDataBy, _getContentTypeDataBy2;
  return (_getContentTypeDataBy = (_getContentTypeDataBy2 = getContentTypeDataByHref(contentTypeHref)) === null || _getContentTypeDataBy2 === void 0 ? void 0 : _getContentTypeDataBy2.name) !== null && _getContentTypeDataBy !== void 0 ? _getContentTypeDataBy : null;
};
var getContentTypeIdentifierByHref = function getContentTypeIdentifierByHref(contentTypeHref) {
  var _getContentTypeDataBy3, _getContentTypeDataBy4;
  return (_getContentTypeDataBy3 = (_getContentTypeDataBy4 = getContentTypeDataByHref(contentTypeHref)) === null || _getContentTypeDataBy4 === void 0 ? void 0 : _getContentTypeDataBy4.identifier) !== null && _getContentTypeDataBy3 !== void 0 ? _getContentTypeDataBy3 : null;
};
var getContentTypeDataByHref = function getContentTypeDataByHref(contentTypeHref) {
  if (!contentTypesDataMapByHref) {
    contentTypesDataMapByHref = createContentTypeDataMapByHref();
  }
  if (!contentTypeHref || !contentTypesDataMapByHref[contentTypeHref]) {
    return null;
  }
  return contentTypesDataMapByHref[contentTypeHref];
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SYSTEM_ROOT_LOCATION: () => (/* binding */ SYSTEM_ROOT_LOCATION),
/* harmony export */   SYSTEM_ROOT_LOCATION_ID: () => (/* binding */ SYSTEM_ROOT_LOCATION_ID),
/* harmony export */   SYSTEM_ROOT_LOCATION_PATH: () => (/* binding */ SYSTEM_ROOT_LOCATION_PATH),
/* harmony export */   getAdminUiConfig: () => (/* binding */ getAdminUiConfig),
/* harmony export */   getBootstrap: () => (/* binding */ getBootstrap),
/* harmony export */   getFlatpickr: () => (/* binding */ getFlatpickr),
/* harmony export */   getMoment: () => (/* binding */ getMoment),
/* harmony export */   getPopper: () => (/* binding */ getPopper),
/* harmony export */   getRestInfo: () => (/* binding */ getRestInfo),
/* harmony export */   getRootDOMElement: () => (/* binding */ getRootDOMElement),
/* harmony export */   getRouting: () => (/* binding */ getRouting),
/* harmony export */   getTranslator: () => (/* binding */ getTranslator),
/* harmony export */   isExternalInstance: () => (/* binding */ isExternalInstance),
/* harmony export */   setAdminUiConfig: () => (/* binding */ setAdminUiConfig),
/* harmony export */   setBootstrap: () => (/* binding */ setBootstrap),
/* harmony export */   setFlatpickr: () => (/* binding */ setFlatpickr),
/* harmony export */   setMoment: () => (/* binding */ setMoment),
/* harmony export */   setPopper: () => (/* binding */ setPopper),
/* harmony export */   setRestInfo: () => (/* binding */ setRestInfo),
/* harmony export */   setRootDOMElement: () => (/* binding */ setRootDOMElement),
/* harmony export */   setRouting: () => (/* binding */ setRouting),
/* harmony export */   setTranslator: () => (/* binding */ setTranslator)
/* harmony export */ });
var _window$ibexa, _document$querySelect, _document$querySelect2;
var _window = window,
  bootstrap = _window.bootstrap,
  flatpickr = _window.flatpickr,
  moment = _window.moment,
  Popper = _window.Popper,
  Routing = _window.Routing,
  Translator = _window.Translator;
var adminUiConfig = (_window$ibexa = window.ibexa) === null || _window$ibexa === void 0 ? void 0 : _window$ibexa.adminUiConfig;
var rootDOMElement = document.body;
var restInfo = {
  accessToken: null,
  instanceUrl: window.location.origin,
  token: (_document$querySelect = document.querySelector('meta[name="CSRF-Token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content,
  siteaccess: (_document$querySelect2 = document.querySelector('meta[name="SiteAccess"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.content
};
var SYSTEM_ROOT_LOCATION_ID = 1;
var SYSTEM_ROOT_LOCATION_PATH = "/".concat(SYSTEM_ROOT_LOCATION_ID, "/");
var SYSTEM_ROOT_LOCATION = {
  pathString: SYSTEM_ROOT_LOCATION_PATH
};
var setRestInfo = function setRestInfo(_ref) {
  var instanceUrl = _ref.instanceUrl,
    accessToken = _ref.accessToken,
    token = _ref.token,
    siteaccess = _ref.siteaccess;
  restInfo.instanceUrl = instanceUrl !== null && instanceUrl !== void 0 ? instanceUrl : restInfo.instanceUrl;
  restInfo.accessToken = accessToken !== null && accessToken !== void 0 ? accessToken : restInfo.accessToken;
  restInfo.token = token !== null && token !== void 0 ? token : restInfo.token;
  restInfo.siteaccess = siteaccess !== null && siteaccess !== void 0 ? siteaccess : restInfo.siteaccess;
};
var setAdminUiConfig = function setAdminUiConfig(loadedAdminUiConfig) {
  return adminUiConfig = loadedAdminUiConfig;
};
var setBootstrap = function setBootstrap(bootstrapInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!bootstrap || forceSet) {
    bootstrap = bootstrapInstance;
  }
};
var setFlatpickr = function setFlatpickr(flatpickrInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!flatpickr || forceSet) {
    flatpickr = flatpickrInstance;
  }
};
var setMoment = function setMoment(momentInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!moment || forceSet) {
    moment = momentInstance;
  }
};
var setPopper = function setPopper(PopperInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Popper || forceSet) {
    Popper = PopperInstance;
  }
};
var setRouting = function setRouting(RoutingInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Routing || forceSet) {
    Routing = RoutingInstance;
  }
};
var setTranslator = function setTranslator(TranslatorInstance) {
  var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!Translator || forceSet) {
    Translator = TranslatorInstance;
  }
};
var setRootDOMElement = function setRootDOMElement(rootDOMElementParam) {
  return rootDOMElement = rootDOMElementParam;
};
var getAdminUiConfig = function getAdminUiConfig() {
  return adminUiConfig;
};
var getBootstrap = function getBootstrap() {
  return bootstrap;
};
var getFlatpickr = function getFlatpickr() {
  return flatpickr;
};
var getMoment = function getMoment() {
  return moment;
};
var getPopper = function getPopper() {
  return Popper;
};
var getRouting = function getRouting() {
  return Routing;
};
var getTranslator = function getTranslator() {
  return Translator;
};
var getRestInfo = function getRestInfo() {
  return restInfo;
};
var getRootDOMElement = function getRootDOMElement() {
  return rootDOMElement;
};
var isExternalInstance = function isExternalInstance() {
  var instanceUrl = restInfo.instanceUrl;
  return window.origin !== instanceUrl;
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getIconPath: () => (/* binding */ getIconPath)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var getIconPath = function getIconPath(path, iconSet) {
  var adminUiConfig = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)();
  if (!iconSet) {
    iconSet = adminUiConfig.iconPaths.defaultIconSet;
  }
  var iconSetPath = adminUiConfig.iconPaths.iconSets[iconSet];
  return "".concat(iconSetPath, "#").concat(path);
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getJsonFromResponse: () => (/* binding */ getJsonFromResponse),
/* harmony export */   getRequestHeaders: () => (/* binding */ getRequestHeaders),
/* harmony export */   getRequestMode: () => (/* binding */ getRequestMode),
/* harmony export */   getStatusFromResponse: () => (/* binding */ getStatusFromResponse),
/* harmony export */   getTextFromResponse: () => (/* binding */ getTextFromResponse)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var getErrorMessage = function getErrorMessage(response) {
  var responseErrorMessage = response.json().then(function (jsonResponse) {
    var _jsonResponse$ErrorMe;
    return (_jsonResponse$ErrorMe = jsonResponse.ErrorMessage) === null || _jsonResponse$ErrorMe === void 0 ? void 0 : _jsonResponse$ErrorMe.errorMessage;
  });
  return responseErrorMessage;
};
var handleRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
    var Translator, responseErrorMessage, errorMessage, defaultErrorMsg;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (response.ok) {
            _context.next = 8;
            break;
          }
          Translator = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
          _context.next = 4;
          return getErrorMessage(response);
        case 4:
          responseErrorMessage = _context.sent;
          errorMessage = responseErrorMessage || response.statusText;
          defaultErrorMsg = Translator.trans(/*@Desc("Something went wrong. Try to refresh the page or contact your administrator.")*/'error.request.default_msg');
          throw Error(errorMessage || defaultErrorMsg);
        case 8:
          return _context.abrupt("return", response);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function handleRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getJsonFromResponse = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
    var parsedRequest;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return handleRequest(response);
        case 2:
          parsedRequest = _context2.sent;
          return _context2.abrupt("return", parsedRequest.json());
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getJsonFromResponse(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getTextFromResponse = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(response) {
    var parsedRequest;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return handleRequest(response);
        case 2:
          parsedRequest = _context3.sent;
          return _context3.abrupt("return", parsedRequest.text());
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getTextFromResponse(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getStatusFromResponse = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(response) {
    var parsedRequest;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return handleRequest(response);
        case 2:
          parsedRequest = _context4.sent;
          return _context4.abrupt("return", parsedRequest.status);
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getStatusFromResponse(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getRequestMode = function getRequestMode(_ref5) {
  var instanceUrl = _ref5.instanceUrl;
  return window.location.origin === instanceUrl ? 'same-origin' : 'cors';
};
var getRequestHeaders = function getRequestHeaders(_ref6) {
  var token = _ref6.token,
    siteaccess = _ref6.siteaccess,
    accessToken = _ref6.accessToken,
    extraHeaders = _ref6.extraHeaders;
  if (accessToken) {
    return _objectSpread(_objectSpread({
      Authorization: "Bearer ".concat(accessToken)
    }, siteaccess && {
      'X-Siteaccess': siteaccess
    }), extraHeaders);
  }
  return _objectSpread(_objectSpread(_objectSpread({}, token && {
    'X-CSRF-Token': token
  }), siteaccess && {
    'X-Siteaccess': siteaccess
  }), extraHeaders);
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideAll: () => (/* binding */ hideAll),
/* harmony export */   observe: () => (/* binding */ observe),
/* harmony export */   parse: () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var _browser_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js");
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var _window = window,
  doc = _window.document;
var lastInsertTooltipTarget = null;
var TOOLTIPS_SELECTOR = '[title], [data-tooltip-title]';
var observerConfig = {
  childList: true,
  subtree: true
};
var resizeEllipsisObserver = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    parse(entry.target);
  });
});
var observer = new MutationObserver(function (mutationsList) {
  if (lastInsertTooltipTarget) {
    mutationsList.forEach(function (mutation) {
      var addedNodes = mutation.addedNodes,
        removedNodes = mutation.removedNodes;
      if (addedNodes.length) {
        addedNodes.forEach(function (addedNode) {
          if (addedNode instanceof Element) {
            parse(addedNode);
          }
        });
      }
      if (removedNodes.length) {
        removedNodes.forEach(function (removedNode) {
          if (removedNode.classList && !removedNode.classList.contains('ibexa-tooltip')) {
            lastInsertTooltipTarget = null;
            doc.querySelectorAll('.ibexa-tooltip.show').forEach(function (tooltipNode) {
              tooltipNode.remove();
            });
          }
        });
      }
    });
  }
});
var modifyPopperConfig = function modifyPopperConfig(iframe, defaultBsPopperConfig) {
  if (!iframe) {
    return defaultBsPopperConfig;
  }
  var iframeDOMRect = iframe.getBoundingClientRect();
  var offsetX = iframeDOMRect.x;
  var offsetY = iframeDOMRect.y;
  var offsetModifier = {
    name: 'offset',
    options: {
      offset: function offset(_ref) {
        var placement = _ref.placement;
        var _placement$split = placement.split('-'),
          _placement$split2 = _slicedToArray(_placement$split, 1),
          basePlacement = _placement$split2[0];
        switch (basePlacement) {
          case 'top':
            return [offsetX, -offsetY];
          case 'bottom':
            return [offsetX, offsetY];
          case 'right':
            return [offsetY, offsetX];
          case 'left':
            return [offsetY, -offsetX];
          default:
            return [];
        }
      }
    }
  };
  var offsetModifierIndex = defaultBsPopperConfig.modifiers.findIndex(function (modifier) {
    return modifier.name == 'offset';
  });
  if (offsetModifierIndex != -1) {
    defaultBsPopperConfig.modifiers[offsetModifierIndex] = offsetModifier;
  } else {
    defaultBsPopperConfig.modifiers.push(offsetModifier);
  }
  return defaultBsPopperConfig;
};
var getTextHeight = function getTextHeight(text, styles) {
  var tag = doc.createElement('div');
  tag.innerText = text;
  for (var key in styles) {
    tag.style[key] = styles[key];
  }
  doc.body.appendChild(tag);
  var _tag$getBoundingClien = tag.getBoundingClientRect(),
    texHeight = _tag$getBoundingClien.height;
  doc.body.removeChild(tag);
  return texHeight;
};
var isTitleEllipsized = function isTitleEllipsized(node) {
  var title = node.dataset.originalTitle;
  var _node$getBoundingClie = node.getBoundingClientRect(),
    nodeWidth = _node$getBoundingClie.width,
    nodeHeight = _node$getBoundingClie.height;
  var computedNodeStyles = getComputedStyle(node);
  var styles = {
    width: "".concat(nodeWidth, "px"),
    padding: computedNodeStyles.getPropertyValue('padding'),
    'font-size': computedNodeStyles.getPropertyValue('font-size'),
    'font-family': computedNodeStyles.getPropertyValue('font-family'),
    'font-weight': computedNodeStyles.getPropertyValue('font-weight'),
    'font-style': computedNodeStyles.getPropertyValue('font-style'),
    'font-variant': computedNodeStyles.getPropertyValue('font-variant'),
    'line-height': computedNodeStyles.getPropertyValue('line-height'),
    'word-break': 'break-all'
  };
  var textHeight = getTextHeight(title, styles);
  return textHeight > nodeHeight;
};
var initializeTooltip = function initializeTooltip(tooltipNode, hasEllipsisStyle) {
  var _tooltipNode$dataset$, _tooltipNode$dataset$2, _tooltipNode$dataset$3;
  var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
  var _tooltipNode$dataset = tooltipNode.dataset,
    delayShow = _tooltipNode$dataset.delayShow,
    delayHide = _tooltipNode$dataset.delayHide;
  var delay = {
    show: delayShow ? parseInt(delayShow, 10) : 150,
    hide: delayHide ? parseInt(delayHide, 10) : 75
  };
  var title = tooltipNode.title;
  var extraClass = (_tooltipNode$dataset$ = tooltipNode.dataset.tooltipExtraClass) !== null && _tooltipNode$dataset$ !== void 0 ? _tooltipNode$dataset$ : '';
  var placement = (_tooltipNode$dataset$2 = tooltipNode.dataset.tooltipPlacement) !== null && _tooltipNode$dataset$2 !== void 0 ? _tooltipNode$dataset$2 : 'bottom';
  var trigger = (_tooltipNode$dataset$3 = tooltipNode.dataset.tooltipTrigger) !== null && _tooltipNode$dataset$3 !== void 0 ? _tooltipNode$dataset$3 : 'hover';
  var useHtml = tooltipNode.dataset.tooltipUseHtml !== undefined;
  var container = tooltipNode.dataset.tooltipContainerSelector ? tooltipNode.closest(tooltipNode.dataset.tooltipContainerSelector) : 'body';
  var iframe = document.querySelector(tooltipNode.dataset.tooltipIframeSelector);
  new bootstrap.Tooltip(tooltipNode, {
    delay: delay,
    placement: placement,
    trigger: trigger,
    container: container,
    popperConfig: modifyPopperConfig.bind(null, iframe),
    html: useHtml,
    template: "<div class=\"tooltip ibexa-tooltip ".concat(extraClass, "\">\n                        <div class=\"tooltip-arrow ibexa-tooltip__arrow\"></div>\n                        <div class=\"tooltip-inner ibexa-tooltip__inner\"></div>\n                   </div>")
  });
  tooltipNode.addEventListener('inserted.bs.tooltip', function (event) {
    lastInsertTooltipTarget = event.currentTarget;
  });
  if ((0,_browser_helper__WEBPACK_IMPORTED_MODULE_0__.isSafari)()) {
    if (tooltipNode.children) {
      var childWithTitle = _toConsumableArray(tooltipNode.children).find(function (child) {
        return title === child.textContent;
      });
      var childHasEllipsisStyle = childWithTitle && getComputedStyle(childWithTitle).textOverflow === 'ellipsis';
      if (childWithTitle && childHasEllipsisStyle) {
        childWithTitle.classList.add('ibexa-safari-tooltip');
      }
    } else {
      if (hasEllipsisStyle) {
        tooltipNode.classList.add('ibexa-safari-tooltip');
      }
    }
  }
};
var parse = function parse() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  if (!baseElement) {
    return;
  }
  var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
  var tooltipNodes = _toConsumableArray(baseElement.querySelectorAll(TOOLTIPS_SELECTOR));
  if (baseElement instanceof Element) {
    tooltipNodes.push(baseElement);
  }
  var _iterator = _createForOfIteratorHelper(tooltipNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tooltipNode = _step.value;
      var hasEllipsisStyle = getComputedStyle(tooltipNode).textOverflow === 'ellipsis';
      var hasNewTitle = tooltipNode.hasAttribute('title');
      var tooltipInitialized = !!tooltipNode.dataset.originalTitle;
      var shouldHaveTooltip = !hasEllipsisStyle;
      if (!tooltipInitialized && hasNewTitle) {
        resizeEllipsisObserver.observe(tooltipNode);
        tooltipNode.dataset.originalTitle = tooltipNode.title;
        if (!shouldHaveTooltip) {
          shouldHaveTooltip = isTitleEllipsized(tooltipNode);
        }
        if (shouldHaveTooltip) {
          initializeTooltip(tooltipNode, hasEllipsisStyle);
        } else {
          tooltipNode.removeAttribute('title');
        }
      } else if (tooltipInitialized && (hasNewTitle || hasEllipsisStyle)) {
        if (hasNewTitle) {
          tooltipNode.dataset.originalTitle = tooltipNode.title;
        }
        var tooltipInstance = bootstrap.Tooltip.getInstance(tooltipNode);
        var hasTooltip = !!tooltipInstance;
        if (!shouldHaveTooltip) {
          shouldHaveTooltip = isTitleEllipsized(tooltipNode);
        }
        if (hasTooltip && (hasNewTitle && shouldHaveTooltip || !shouldHaveTooltip)) {
          tooltipInstance.dispose();
        }
        if (shouldHaveTooltip && (hasNewTitle || !hasTooltip)) {
          tooltipNode.title = tooltipNode.dataset.originalTitle;
          initializeTooltip(tooltipNode, hasEllipsisStyle);
        } else {
          tooltipNode.removeAttribute('title');
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
var hideAll = function hideAll() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  if (!baseElement) {
    return;
  }
  var bootstrap = (0,_context_helper__WEBPACK_IMPORTED_MODULE_1__.getBootstrap)();
  var tooltipsNode = baseElement.querySelectorAll(TOOLTIPS_SELECTOR);
  var _iterator2 = _createForOfIteratorHelper(tooltipsNode),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var tooltipNode = _step2.value;
      bootstrap.Tooltip.getOrCreateInstance(tooltipNode).hide();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var observe = function observe() {
  var baseElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
  observer.observe(baseElement, observerConfig);
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCssClassNames: () => (/* binding */ createCssClassNames)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }
  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      condition = _ref2[1];
    if (condition) {
      return "".concat(total, " ").concat(name);
    }
    return total;
  }, '').trim();
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/text.helper.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/text.helper.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fileSizeToString: () => (/* binding */ fileSizeToString)
/* harmony export */ });
var fileSizeToString = function fileSizeToString(filesize) {
  var units = ['bytes', 'KB', 'MB', 'GB'];
  var kilobyte = 1024;
  var size = parseInt(filesize, 10) || 0;
  var unitIndex = 0;
  while (size >= kilobyte) {
    size = size / kilobyte;
    unitIndex++;
  }
  var decimalUnits = unitIndex < 1 ? 0 : 1;
  return "".concat(size.toFixed(size >= 10 || decimalUnits), " ").concat(units[unitIndex]);
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _urlIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlIcon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js");
/* harmony import */ var _inculdedIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inculdedIcon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/inculdedIcon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var Icon = function Icon(props) {
  var cssClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'ibexa-icon': true
  }, props.extraClasses, true));
  var isIconIncluded = props.useIncludedIcon || (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isIconIncluded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inculdedIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cssClass: cssClass,
    name: props.name,
    defaultIconName: props.defaultIconName
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urlIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cssClass: cssClass,
    name: props.name,
    customPath: props.customPath
  }));
};
Icon.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  useIncludedIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  defaultIconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null,
  useIncludedIcon: false,
  defaultIconName: 'about-info'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/inculdedIcon.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/inculdedIcon.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/about.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_info_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/about-info.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_approved_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/approved.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_article_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/article.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/back.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/blog.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_post_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_up_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_circle_close_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_create_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/create.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_content_tree_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_date_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/date.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_discard_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/discard.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_drag_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/drag.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_download_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/download.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_duplicate_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_edit_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/edit.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_expand_left_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_fields_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/fields.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_file_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/file.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_filters_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/filters.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_folder_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/folder.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_form_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/form.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_gallery_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/gallery.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_image_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/image.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_landing_page_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_notice_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/notice.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_options_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/options.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_place_svg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/place.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_product_svg__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/product.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_qa_form_svg__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_search_svg__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/search.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/spinner.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_system_information_svg__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/system-information.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_trash_svg__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/trash.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_video_svg__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/video.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_svg__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_grid_svg__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_list_svg__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/view-list.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_svg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/user.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_group_svg__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/user_group.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_svg__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/upload.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_image_svg__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_img_icons_warning_svg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/img/icons/warning.svg */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg");
















































var iconsMap = {
  about: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_svg__WEBPACK_IMPORTED_MODULE_2__,
  'about-info': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_about_info_svg__WEBPACK_IMPORTED_MODULE_3__,
  approved: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_approved_svg__WEBPACK_IMPORTED_MODULE_4__,
  article: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_article_svg__WEBPACK_IMPORTED_MODULE_5__,
  back: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_back_svg__WEBPACK_IMPORTED_MODULE_6__,
  blog: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_svg__WEBPACK_IMPORTED_MODULE_7__,
  blog_post: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_blog_post_svg__WEBPACK_IMPORTED_MODULE_8__,
  'caret-down': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_down_svg__WEBPACK_IMPORTED_MODULE_9__,
  'caret-up': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_caret_up_svg__WEBPACK_IMPORTED_MODULE_10__,
  'circle-close': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_circle_close_svg__WEBPACK_IMPORTED_MODULE_11__,
  create: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_create_svg__WEBPACK_IMPORTED_MODULE_12__,
  checkmark: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_checkmark_svg__WEBPACK_IMPORTED_MODULE_13__,
  'content-tree': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_content_tree_svg__WEBPACK_IMPORTED_MODULE_14__,
  date: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_date_svg__WEBPACK_IMPORTED_MODULE_15__,
  discard: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_discard_svg__WEBPACK_IMPORTED_MODULE_16__,
  drag: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_drag_svg__WEBPACK_IMPORTED_MODULE_17__,
  download: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_download_svg__WEBPACK_IMPORTED_MODULE_18__,
  duplicate: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_duplicate_svg__WEBPACK_IMPORTED_MODULE_19__,
  'expand-left': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_expand_left_svg__WEBPACK_IMPORTED_MODULE_21__,
  edit: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_edit_svg__WEBPACK_IMPORTED_MODULE_20__,
  file: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_file_svg__WEBPACK_IMPORTED_MODULE_23__,
  filters: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_filters_svg__WEBPACK_IMPORTED_MODULE_24__,
  fields: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_fields_svg__WEBPACK_IMPORTED_MODULE_22__,
  folder: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_folder_svg__WEBPACK_IMPORTED_MODULE_25__,
  form: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_form_svg__WEBPACK_IMPORTED_MODULE_26__,
  gallery: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_gallery_svg__WEBPACK_IMPORTED_MODULE_27__,
  image: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_image_svg__WEBPACK_IMPORTED_MODULE_28__,
  landing_page: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_landing_page_svg__WEBPACK_IMPORTED_MODULE_29__,
  notice: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_notice_svg__WEBPACK_IMPORTED_MODULE_30__,
  options: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_options_svg__WEBPACK_IMPORTED_MODULE_31__,
  place: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_place_svg__WEBPACK_IMPORTED_MODULE_32__,
  product: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_product_svg__WEBPACK_IMPORTED_MODULE_33__,
  'qa-form': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_qa_form_svg__WEBPACK_IMPORTED_MODULE_34__,
  search: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_search_svg__WEBPACK_IMPORTED_MODULE_35__,
  spinner: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_spinner_svg__WEBPACK_IMPORTED_MODULE_36__,
  'system-information': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_system_information_svg__WEBPACK_IMPORTED_MODULE_37__,
  trash: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_trash_svg__WEBPACK_IMPORTED_MODULE_38__,
  video: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_video_svg__WEBPACK_IMPORTED_MODULE_39__,
  view: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_svg__WEBPACK_IMPORTED_MODULE_40__,
  'view-grid': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_grid_svg__WEBPACK_IMPORTED_MODULE_41__,
  'view-list': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_view_list_svg__WEBPACK_IMPORTED_MODULE_42__,
  user: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_svg__WEBPACK_IMPORTED_MODULE_43__,
  user_group: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_user_group_svg__WEBPACK_IMPORTED_MODULE_44__,
  upload: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_svg__WEBPACK_IMPORTED_MODULE_45__,
  'upload-image': _ibexa_admin_ui_src_bundle_Resources_public_img_icons_upload_image_svg__WEBPACK_IMPORTED_MODULE_46__,
  warning: _ibexa_admin_ui_src_bundle_Resources_public_img_icons_warning_svg__WEBPACK_IMPORTED_MODULE_47__
};
var InculdedIcon = function InculdedIcon(props) {
  var _iconsMap$name;
  var name = props.name,
    cssClass = props.cssClass,
    defaultIconName = props.defaultIconName;
  var IconComponent = (_iconsMap$name = iconsMap[name]) !== null && _iconsMap$name !== void 0 ? _iconsMap$name : iconsMap[defaultIconName];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, {
    className: cssClass
  });
};
InculdedIcon.propTypes = {
  cssClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  defaultIconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
InculdedIcon.defaultProps = {
  cssClass: '',
  name: 'about-info',
  defaultIconName: 'about-info'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InculdedIcon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/urlIcon.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");



var UrlIcon = function UrlIcon(props) {
  var _props$customPath;
  var linkHref = (_props$customPath = props.customPath) !== null && _props$customPath !== void 0 ? _props$customPath : (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_2__.getIconPath)(props.name);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: props.cssClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: linkHref
  }));
};
UrlIcon.propTypes = {
  cssClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
UrlIcon.defaultProps = {
  customPath: null,
  name: null,
  cssClass: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlIcon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var TooltipPopupComponent = function TooltipPopupComponent(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children,
    onConfirm = _ref.onConfirm,
    confirmBtnAttrs = _ref.confirmBtnAttrs,
    confirmLabel = _ref.confirmLabel,
    onClose = _ref.onClose,
    closeBtnAttrs = _ref.closeBtnAttrs,
    closeLabel = _ref.closeLabel,
    visible = _ref.visible,
    extraClasses = _ref.extraClasses;
  var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-tooltip-popup': true
  }, extraClasses, true));
  var attrs = {
    className: className,
    hidden: !visible
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "c-tooltip-popup__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__subtitle"
  }, subtitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__content",
    ref: contentRef
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tooltip-popup__footer"
  }, confirmLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    className: "btn ibexa-btn ibexa-btn--primary",
    type: "button",
    onClick: onConfirm
  }, confirmBtnAttrs), confirmLabel), closeLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
    className: "btn ibexa-btn ibexa-btn--ghost",
    type: "button",
    onClick: onClose
  }, closeBtnAttrs), closeLabel)));
};
TooltipPopupComponent.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  confirmLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  closeLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  confirmBtnAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  closeBtnAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TooltipPopupComponent.defaultProps = {
  subtitle: '',
  onClose: function onClose() {},
  onConfirm: function onConfirm() {},
  confirmLabel: '',
  closeLabel: '',
  confirmBtnAttrs: {},
  closeBtnAttrs: {},
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TooltipPopupComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropAreaComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _helpers_text_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/text.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var DropAreaComponent = /*#__PURE__*/function (_Component) {
  function DropAreaComponent(props) {
    var _this;
    _classCallCheck(this, DropAreaComponent);
    _this = _callSuper(this, DropAreaComponent, [props]);
    _this._refFileInput = null;
    _this._refForm = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.hasMultiMsgForFileSizes = _this.props.maxFileSizes.length > 1;
    _this.state = {
      filesSizeExpanded: false
    };
    _this.openFileSelector = _this.openFileSelector.bind(_this);
    _this.handleUpload = _this.handleUpload.bind(_this);
    _this.renderMaxFileMsgsToggler = _this.renderMaxFileMsgsToggler.bind(_this);
    _this.renderMaxFileSizeItems = _this.renderMaxFileSizeItems.bind(_this);
    return _this;
  }

  /**
   * Opens a browser native file selector
   *
   * @method openFileSelector
   * @param {Event} event
   * @memberof DropAreaComponent
   */
  _inherits(DropAreaComponent, _Component);
  return _createClass(DropAreaComponent, [{
    key: "openFileSelector",
    value: function openFileSelector(event) {
      event.preventDefault();
      this._refFileInput.click();
    }

    /**
     * Handles file upload
     *
     * @method handleUpload
     * @param {Event} event
     * @memberof DropAreaComponent
     */
  }, {
    key: "handleUpload",
    value: function handleUpload(event) {
      this.props.preventDefaultAction(event);
      this.props.addItemsToUpload(this.props.processUploadedFiles(event));
      event.currentTarget.value = null;
    }
  }, {
    key: "renderMaxFileMsgsToggler",
    value: function renderMaxFileMsgsToggler() {
      var _this2 = this;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      if (!this.hasMultiMsgForFileSizes) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "c-drop-area__max-file-size-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "about-info",
        extraClasses: "c-drop-area__max-file-size-icon ibexa-icon--small"
      }), Translator.trans(/*@Desc("Max. file size")*/'max_file_size.message.general', {}, 'ibexa_multi_file_upload'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-drop-area__max-file-size-toggle-btn",
        onClick: function onClick() {
          return _this2.setState(function (prevState) {
            return {
              filesSizeExpanded: !prevState.filesSizeExpanded
            };
          });
        }
      }));
    }
  }, {
    key: "renderMaxFileSizeItems",
    value: function renderMaxFileSizeItems() {
      var _this3 = this;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.props.maxFileSizes.map(function (contentType) {
        var itemKey = contentType.name.replace(/\s/g, '-');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: itemKey,
          className: "c-drop-area__max-file-size-item"
        }, !_this3.hasMultiMsgForFileSizes && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: "about-info",
          extraClasses: "c-drop-area__max-file-size-icon ibexa-icon--small"
        }), Translator.trans(/*@Desc("%contentTypeName% max file size: %maxFileSize%")*/'max_file_size.message', {
          contentTypeName: contentType.name,
          maxFileSize: (0,_helpers_text_helper__WEBPACK_IMPORTED_MODULE_3__.fileSizeToString)(contentType.maxFileSize)
        }, 'ibexa_multi_file_upload'));
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('drop', this.props.preventDefaultAction, false);
      window.addEventListener('dragover', this.props.preventDefaultAction, false);
      this._refForm.current.addEventListener('drop', this.handleUpload, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('drop', this.props.preventDefaultAction, false);
      window.removeEventListener('dragover', this.props.preventDefaultAction, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      var dropActionMessage = Translator.trans(/*@Desc("Drag and drop file")*/'drop_action.message', {}, 'ibexa_multi_file_upload');
      var separatorMessage = Translator.trans(/*@Desc("or")*/'drop_action.separator', {}, 'ibexa_multi_file_upload');
      var uploadBtnLabel = Translator.trans(/*@Desc("Upload file")*/'upload_btn.label', {}, 'ibexa_multi_file_upload');
      var maxFilesSizeListClassNames = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
        'c-drop-area__max-files-size': true,
        'c-drop-area__max-files-size--expanded': this.state.filesSizeExpanded
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
        className: "c-drop-area",
        onDrop: this.handleUpload,
        ref: this._refForm
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-drop-area__message c-drop-area__message--main"
      }, dropActionMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-drop-area__message c-drop-area__message--separator"
      }, separatorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--secondary c-drop-area__btn-select",
        onClick: this.openFileSelector,
        tabIndex: "-1"
      }, uploadBtnLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-drop-area__message c-drop-area__message--filesize"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: maxFilesSizeListClassNames
      }, this.renderMaxFileMsgsToggler(), this.renderMaxFileSizeItems())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        className: "c-drop-area__input--hidden",
        ref: function ref(_ref) {
          return _this4._refFileInput = _ref;
        },
        id: "mfu-files",
        type: "file",
        name: "files[]",
        hidden: true,
        multiple: true,
        onChange: this.handleUpload
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

DropAreaComponent.propTypes = {
  maxFileSizes: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
  processUploadedFiles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  preventDefaultAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  addItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");



var ProgressBarComponent = function ProgressBarComponent(props) {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var message = Translator.trans(/*@Desc("Uploading...")*/'upload.progress_bar.uploading', {}, 'ibexa_multi_file_upload');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-progress-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-progress-bar__value",
    style: {
      '--progress': "".concat(props.progress, "%")
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-progress-bar__label"
  }, props.progress, "% ", message));
};
ProgressBarComponent.propTypes = {
  progress: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBarComponent);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadItemComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _helpers_text_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/text.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../progress-bar/progress.bar.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/progress-bar/progress.bar.component.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var UploadItemComponent = /*#__PURE__*/function (_Component) {
  function UploadItemComponent(props) {
    var _props$item$struct, _props$item$errorMsgs;
    var _this;
    _classCallCheck(this, UploadItemComponent);
    _this = _callSuper(this, UploadItemComponent, [props]);
    _this.isExternalInstance = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.isExternalInstance)();
    _this.handleFileValidationError = _this.handleFileValidationError.bind(_this);
    _this.handleEditBtnClick = _this.handleEditBtnClick.bind(_this);
    _this.handleUploadAbort = _this.handleUploadAbort.bind(_this);
    _this.handleUploadError = _this.handleUploadError.bind(_this);
    _this.handleUploadLoad = _this.handleUploadLoad.bind(_this);
    _this.handleUploadProgress = _this.handleUploadProgress.bind(_this);
    _this.handleUploadEnd = _this.handleUploadEnd.bind(_this);
    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
    _this.handleFileDeleted = _this.handleFileDeleted.bind(_this);
    _this.abortUploading = _this.abortUploading.bind(_this);
    _this.initPublishFile = _this.initPublishFile.bind(_this);
    _this.deleteFile = _this.deleteFile.bind(_this);
    _this.handleContentError = _this.handleContentError.bind(_this);
    _this.handleFileDeletedError = _this.handleFileDeletedError.bind(_this);
    _this.contentInfoInput = null;
    _this.contentVersionInfoInput = null;
    _this.contentVersionNoInput = null;
    _this.contentEditBtn = null;
    _this.state = {
      uploading: false,
      uploaded: props.isUploaded,
      aborted: false,
      failed: props.isFailed,
      deleted: false,
      progress: 0,
      xhr: null,
      struct: (_props$item$struct = props.item.struct) !== null && _props$item$struct !== void 0 ? _props$item$struct : null,
      totalSize: (0,_helpers_text_helper__WEBPACK_IMPORTED_MODULE_6__.fileSizeToString)(props.item.file.size),
      uploadedSize: '0',
      errorMsgs: (_props$item$errorMsgs = props.item.errorMsgs) !== null && _props$item$errorMsgs !== void 0 ? _props$item$errorMsgs : [],
      hasMultipleErrorsExpanded: false
    };
    return _this;
  }
  _inherits(UploadItemComponent, _Component);
  return _createClass(UploadItemComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        item = _this$props.item,
        adminUiConfig = _this$props.adminUiConfig,
        parentInfo = _this$props.parentInfo,
        createFileStruct = _this$props.createFileStruct,
        isUploaded = _this$props.isUploaded,
        isFailed = _this$props.isFailed,
        checkCanUpload = _this$props.checkCanUpload,
        contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
        currentLanguage = _this$props.currentLanguage;
      this.contentInfoInput = window.document.querySelector('#form_subitems_content_edit_content_info');
      this.contentVersionInfoInput = window.document.querySelector('#form_subitems_content_edit_version_info_content_info');
      this.contentVersionNoInput = window.document.querySelector('#form_subitems_content_edit_version_info_version_no');
      this.contentEditBtn = window.document.querySelector('#form_subitems_content_edit_create');
      if (isUploaded || isFailed) {
        return;
      }
      var config = _objectSpread(_objectSpread({}, adminUiConfig.multiFileUpload), {}, {
        contentCreatePermissionsConfig: contentCreatePermissionsConfig
      });
      if (!checkCanUpload(item.file, parentInfo, config, this.handleFileValidationError)) {
        this.setState(function () {
          return {
            uploading: false,
            uploaded: false,
            aborted: false,
            failed: true
          };
        });
        return;
      }
      var createFileStructParams = {
        parentInfo: parentInfo,
        config: adminUiConfig,
        languageCode: currentLanguage
      };
      createFileStruct(item.file, createFileStructParams, this.handleContentError).then(this.initPublishFile);
    }
  }, {
    key: "initPublishFile",
    value: function initPublishFile(struct) {
      this.props.publishFile(struct, {
        upload: {
          onabort: this.handleUploadAbort,
          onerror: this.handleUploadError,
          onload: this.handleUploadLoad,
          onprogress: this.handleUploadProgress
        },
        onloadstart: this.handleLoadStart,
        onerror: this.handleUploadError
      }, this.handleUploadEnd, this.handleContentError);
    }
  }, {
    key: "handleFileDeletedError",
    value: function handleFileDeletedError(errorMsg) {
      this.setState(function (prevState) {
        return {
          failed: true,
          deleted: false,
          errorMsgs: [].concat(_toConsumableArray(prevState.errorMsgs), [errorMsg])
        };
      });
    }
  }, {
    key: "handleContentError",
    value: function handleContentError(errorMsg) {
      var _this2 = this;
      this.setState(function (prevState) {
        return {
          failed: true,
          errorMsgs: [].concat(_toConsumableArray(prevState.errorMsgs), [errorMsg])
        };
      }, function () {
        return _this2.props.onCreateError(_objectSpread(_objectSpread({}, _this2.props.item), {}, {
          errorMsgs: _this2.state.errorMsgs
        }));
      });
    }
  }, {
    key: "handleFileValidationError",
    value: function handleFileValidationError(errorMsgs) {
      var _this3 = this;
      this.setState(function () {
        return {
          uploading: false,
          uploaded: false,
          aborted: false,
          failed: true,
          errorMsgs: errorMsgs
        };
      }, function () {
        return _this3.props.onCreateError(_objectSpread(_objectSpread({}, _this3.props.item), {}, {
          errorMsgs: _this3.state.errorMsgs
        }));
      });
    }
  }, {
    key: "handleLoadStart",
    value: function handleLoadStart(event) {
      this.setState(function () {
        return {
          uploading: true,
          uploaded: false,
          aborted: false,
          failed: false,
          xhr: event.target
        };
      });
    }
  }, {
    key: "handleUploadAbort",
    value: function handleUploadAbort() {
      this.setState(function () {
        return {
          uploading: false,
          uploaded: false,
          aborted: true,
          failed: false
        };
      });
    }
  }, {
    key: "handleUploadError",
    value: function handleUploadError() {
      this.setState(function (state) {
        return {
          uploading: false,
          uploaded: false,
          aborted: state.aborted,
          failed: true
        };
      });
    }
  }, {
    key: "handleUploadLoad",
    value: function handleUploadLoad() {
      this.setState(function () {
        return {
          uploading: false,
          uploaded: true,
          aborted: false,
          failed: false
        };
      });
    }
  }, {
    key: "handleUploadProgress",
    value: function handleUploadProgress(event) {
      var _this4 = this;
      var fraction = event.loaded / event.total;
      var progress = parseInt(fraction * 100, 10);
      this.setState(function () {
        return {
          uploadedSize: (0,_helpers_text_helper__WEBPACK_IMPORTED_MODULE_6__.fileSizeToString)(fraction * parseInt(_this4.props.item.file.size, 10)),
          uploading: true,
          uploaded: false,
          aborted: false,
          failed: false,
          progress: progress
        };
      });
    }
  }, {
    key: "handleUploadEnd",
    value: function handleUploadEnd() {
      var _this5 = this;
      this.setState(function (state) {
        var struct = JSON.parse(state.xhr.response);
        return {
          struct: struct,
          uploading: false,
          uploaded: true,
          aborted: false,
          failed: false
        };
      }, function () {
        var item = _this5.props.item;
        _this5.props.onAfterUpload(_objectSpread(_objectSpread({}, item), {}, {
          struct: _this5.state.struct
        }));
      });
    }
  }, {
    key: "abortUploading",
    value: function abortUploading() {
      this.state.xhr.abort();
      this.props.onAfterAbort(this.props.item);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile() {
      var failed = this.state.failed;
      var item = this.props.item;
      if (failed) {
        this.props.removeItemsToUpload([item]);
        this.handleFileDeleted(item);
      } else {
        this.props.deleteFile(this.state.struct, this.handleFileDeleted, this.handleFileDeletedError);
      }
    }
  }, {
    key: "handleFileDeleted",
    value: function handleFileDeleted() {
      this.props.onAfterDelete(this.props.item);
      this.setState({
        deleted: true
      });
    }
  }, {
    key: "getContentTypeIdentifier",
    value: function getContentTypeIdentifier() {
      var _item$struct;
      var _this$props2 = this.props,
        contentTypesMap = _this$props2.contentTypesMap,
        item = _this$props2.item;
      if (!((_item$struct = item.struct) !== null && _item$struct !== void 0 && _item$struct.Content)) {
        return null;
      }
      var contentTypeHref = item.struct.Content.ContentType._href;
      var contentType = contentTypesMap ? contentTypesMap[contentTypeHref] : null;
      var contentTypeIdentifier = contentType ? contentType.identifier : null;
      return contentTypeIdentifier;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var failed = this.state.failed;
      var contentTypeIdentifier = this.getContentTypeIdentifier();
      if (!contentTypeIdentifier || failed) {
        return null;
      }
      var contentTypeIconUrl = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_2__.getContentTypeIconUrl)(contentTypeIdentifier);
      var _contentTypeIconUrl$s = contentTypeIconUrl.split('#'),
        _contentTypeIconUrl$s2 = _slicedToArray(_contentTypeIconUrl$s, 2),
        iconName = _contentTypeIconUrl$s2[1];
      if (this.isExternalInstance) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          name: iconName,
          extraClasses: "ibexa-icon--small",
          defaultIconName: "file"
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        customPath: contentTypeIconUrl,
        extraClasses: "ibexa-icon--small"
      });
    }
  }, {
    key: "renderProgressBar",
    value: function renderProgressBar() {
      var _this$state = this.state,
        uploaded = _this$state.uploaded,
        aborted = _this$state.aborted,
        progress = _this$state.progress,
        totalSize = _this$state.totalSize,
        uploadedSize = _this$state.uploadedSize,
        failed = _this$state.failed;
      if (uploaded || aborted || failed) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
        progress: progress,
        uploaded: uploadedSize,
        total: totalSize
      });
    }
  }, {
    key: "renderErrorInfo",
    value: function renderErrorInfo() {
      var _this6 = this;
      var _this$state2 = this.state,
        failed = _this$state2.failed,
        errorMsgs = _this$state2.errorMsgs;
      if (!failed) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var hasMultipleErrors = errorMsgs.length > 1;
      var label = hasMultipleErrors ? Translator.trans(/*@Desc("Failed to upload ")*/'multierror.label', {}, 'ibexa_multi_file_upload') : errorMsgs[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__message c-upload-list-item__message--error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "warning",
        extraClasses: "ibexa-icon--tiny-small"
      }), label, hasMultipleErrors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-upload-list-item__multiple-errors-toggle-btn",
        onClick: function onClick() {
          return _this6.setState(function (prevState) {
            return {
              hasMultipleErrorsExpanded: !prevState.hasMultipleErrorsExpanded
            };
          });
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "caret-down",
        extraClasses: "ibexa-icon--tiny-small"
      })));
    }
  }, {
    key: "renderSuccessMessage",
    value: function renderSuccessMessage() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var uploaded = this.state.uploaded;
      if (!uploaded) {
        return;
      }
      var message = Translator.trans(/*@Desc("100% Uploaded")*/'upload.success.message', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__message c-upload-list-item__message--success"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "checkmark",
        extraClasses: "ibexa-icon--tiny-small"
      }), message);
    }
  }, {
    key: "renderAbortBtn",
    value: function renderAbortBtn() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var uploading = this.state.uploading;
      if (!uploading) {
        return null;
      }
      var label = Translator.trans(/*@Desc("Abort")*/'abort.label', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-btn--small c-upload-list-item__action c-upload-list-item__action--abort",
        onClick: this.abortUploading,
        title: label,
        tabIndex: "-1",
        type: "button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "trash",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "handleEditBtnClick",
    value: function handleEditBtnClick(event) {
      event.preventDefault();
      var struct = this.state.struct;
      var content = struct.Content;
      var contentId = content._id;
      var languageCode = content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language['0'].languageCode;
      var versionNo = content.CurrentVersion.Version.VersionInfo.versionNo;
      this.contentInfoInput.value = contentId;
      this.contentVersionInfoInput.value = contentId;
      this.contentVersionNoInput.value = versionNo;
      window.document.querySelector("#form_subitems_content_edit_language_".concat(languageCode)).checked = true;
      this.contentEditBtn.click();
    }
  }, {
    key: "renderEditBtn",
    value: function renderEditBtn() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var _this$state3 = this.state,
        uploaded = _this$state3.uploaded,
        failed = _this$state3.failed,
        struct = _this$state3.struct;
      var canEdit = uploaded && !failed;
      if (!canEdit || this.isExternalInstance || !this.props.enableUploadedItemEdit) {
        return null;
      }
      var label = Translator.trans(/*@Desc("Edit")*/'edit.label', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-btn--small c-upload-list-item__action c-upload-list-item__action--edit",
        title: label,
        onClick: this.handleEditBtnClick,
        tabIndex: "-1",
        type: "button",
        disabled: !struct
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "edit",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "renderDeleteBtn",
    value: function renderDeleteBtn() {
      var _this$state4 = this.state,
        uploaded = _this$state4.uploaded,
        aborted = _this$state4.aborted,
        failed = _this$state4.failed,
        struct = _this$state4.struct;
      var canDelete = uploaded && !aborted || failed;
      if (!canDelete) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var label = Translator.trans(/*@Desc("Delete")*/'delete.label', {}, 'ibexa_multi_file_upload');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-btn--small c-upload-list-item__action c-upload-list-item__action--delete",
        onClick: this.deleteFile,
        title: label,
        tabIndex: "-1",
        type: "button",
        disabled: !(struct || failed)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: "trash",
        extraClasses: "ibexa-icon--small"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
        failed = _this$state5.failed,
        deleted = _this$state5.deleted,
        totalSize = _this$state5.totalSize,
        errorMsgs = _this$state5.errorMsgs,
        hasMultipleErrorsExpanded = _this$state5.hasMultipleErrorsExpanded;
      var hasMultipleErrors = errorMsgs.length > 1;
      var wrapperClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
        'c-upload-list-item': true,
        'c-upload-list-item--errored': failed,
        'c-upload-list-item--expanded-multiple-errors': hasMultipleErrorsExpanded
      });
      if (deleted) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: wrapperClassName
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__icon-wrapper"
      }, this.renderIcon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__meta"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__name"
      }, this.props.item.file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__size"
      }, totalSize)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__info"
      }, this.renderErrorInfo(), this.renderSuccessMessage(), this.renderProgressBar()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list-item__actions"
      }, this.renderAbortBtn(), this.renderEditBtn(), this.renderDeleteBtn()), hasMultipleErrors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "c-upload-list-item__multiple-errors-list"
      }, errorMsgs.map(function (errorMsg) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
          key: errorMsg.replace(/\s/g, '-'),
          className: "c-upload-list-item__multiple-errors-item"
        }, errorMsg);
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

UploadItemComponent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  onAfterUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onAfterAbort: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onAfterDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isUploaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isFailed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  removeItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onCreateError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  errorMsgs: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  enableUploadedItemEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
UploadItemComponent.defaultProps = {
  onAfterUpload: function onAfterUpload() {},
  onAfterAbort: function onAfterAbort() {},
  onAfterDelete: function onAfterDelete() {},
  createFileStruct: function createFileStruct() {},
  publishFile: function publishFile() {},
  deleteFile: function deleteFile() {},
  checkCanUpload: function checkCanUpload() {},
  isUploaded: false,
  isFailed: false,
  currentLanguage: '',
  contentCreatePermissionsConfig: {},
  removeItemsToUpload: function removeItemsToUpload() {},
  onCreateError: function onCreateError() {},
  errorMsgs: [],
  enableUploadedItemEdit: true
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadListComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _upload_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.item.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.item.component.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var UploadListComponent = /*#__PURE__*/function (_Component) {
  function UploadListComponent(props) {
    var _this;
    _classCallCheck(this, UploadListComponent);
    _this = _callSuper(this, UploadListComponent, [props]);
    _this.state = {
      items: [],
      erroredItems: []
    };
    return _this;
  }
  _inherits(UploadListComponent, _Component);
  return _createClass(UploadListComponent, [{
    key: "handleAfterUpload",
    value: function handleAfterUpload(item) {
      var _this2 = this;
      this.setState(function (state) {
        return {
          items: [].concat(_toConsumableArray(state.items), [item])
        };
      }, function () {
        _this2.props.removeItemsToUpload([item]);
        _this2.props.onAfterUpload(_this2.state.items);
      });
    }
  }, {
    key: "handleAfterAbort",
    value: function handleAfterAbort(item) {
      this.props.removeItemsToUpload([item]);
      this.setState(function (state) {
        var items = state.items.filter(function (data) {
          return data.id !== item.id;
        });
        return {
          uploaded: items.length,
          items: items
        };
      });
    }
  }, {
    key: "handleAfterDelete",
    value: function handleAfterDelete(item) {
      var _this3 = this;
      this.setState(function (state) {
        var items = state.items.filter(function (data) {
          return data.id !== item.id;
        });
        var erroredItems = state.erroredItems.filter(function (data) {
          return data.id !== item.id;
        });
        return {
          uploaded: items.length,
          items: items,
          erroredItems: erroredItems
        };
      }, function () {
        return _this3.props.onAfterDelete(item);
      });
    }
  }, {
    key: "handleCreateError",
    value: function handleCreateError(item) {
      this.props.removeItemsToUpload([item]);
      this.setState(function (state) {
        var isAlredyAddedToErroredItems = !!state.erroredItems.find(function (erroredItem) {
          return erroredItem.id === item.id;
        });
        if (!isAlredyAddedToErroredItems) {
          return {
            erroredItems: [].concat(_toConsumableArray(state.erroredItems), [item])
          };
        }
      });
    }
  }, {
    key: "renderItemToUpload",
    value: function renderItemToUpload(item) {
      return this.renderItem(item, {
        isUploaded: false,
        createFileStruct: this.props.createFileStruct,
        publishFile: this.props.publishFile,
        onAfterAbort: this.handleAfterAbort.bind(this),
        onAfterUpload: this.handleAfterUpload.bind(this),
        onCreateError: this.handleCreateError.bind(this),
        checkCanUpload: this.props.checkCanUpload,
        removeItemsToUpload: this.props.removeItemsToUpload
      });
    }
  }, {
    key: "renderUploadedItem",
    value: function renderUploadedItem(item) {
      return this.renderItem(item, {
        isUploaded: true,
        deleteFile: this.props.deleteFile,
        onAfterDelete: this.handleAfterDelete.bind(this)
      });
    }
  }, {
    key: "renderErroredItem",
    value: function renderErroredItem(item) {
      return this.renderItem(item, {
        isFailed: true,
        deleteFile: this.props.deleteFile,
        onAfterDelete: this.handleAfterDelete.bind(this)
      });
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, customAttrs) {
      var _this$props = this.props,
        adminUiConfig = _this$props.adminUiConfig,
        parentInfo = _this$props.parentInfo,
        contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
        contentTypesMap = _this$props.contentTypesMap,
        currentLanguage = _this$props.currentLanguage;
      var attrs = _objectSpread({
        item: item,
        key: item.id,
        adminUiConfig: adminUiConfig,
        parentInfo: parentInfo,
        contentCreatePermissionsConfig: contentCreatePermissionsConfig,
        contentTypesMap: contentTypesMap,
        currentLanguage: currentLanguage,
        enableUploadedItemEdit: this.props.enableUploadedItemEdit
      }, customAttrs);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_upload_item_component__WEBPACK_IMPORTED_MODULE_2__["default"], attrs);
    }
  }, {
    key: "render",
    value: function render() {
      var itemsToUpload = this.props.itemsToUpload;
      var _this$state = this.state,
        items = _this$state.items,
        erroredItems = _this$state.erroredItems;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-list__items"
      }, itemsToUpload.map(this.renderItemToUpload.bind(this)), erroredItems.map(this.renderErroredItem.bind(this)), items.map(this.renderUploadedItem.bind(this))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

UploadListComponent.propTypes = {
  itemsToUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  onAfterUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  removeItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onAfterDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  enableUploadedItemEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
UploadListComponent.defaultProps = {
  itemsToUpload: [],
  currentLanguage: '',
  onAfterDelete: function onAfterDelete() {},
  enableUploadedItemEdit: true
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UploadPopupModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js");
/* harmony import */ var _common_tooltip_popup_tooltip_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/tooltip-popup/tooltip.popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tooltip-popup/tooltip.popup.component.js");
/* harmony import */ var _drop_area_drop_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../drop-area/drop.area.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/drop-area/drop.area.component.js");
/* harmony import */ var _upload_list_upload_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../upload-list/upload.list.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-list/upload.list.component.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var CLASS_SCROLL_DISABLED = 'ibexa-scroll-disabled';
var UploadPopupModule = /*#__PURE__*/function (_Component) {
  function UploadPopupModule(props) {
    var _this;
    _classCallCheck(this, UploadPopupModule);
    _this = _callSuper(this, UploadPopupModule, [props]);
    _this.refTooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
    return _this;
  }
  _inherits(UploadPopupModule, _Component);
  return _createClass(UploadPopupModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.rootDOMElement.classList.add(CLASS_SCROLL_DISABLED);
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_3__.parse)(this.refTooltip.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.classList.remove(CLASS_SCROLL_DISABLED);
    }
  }, {
    key: "getContentTypesMaxFileSize",
    value: function getContentTypesMaxFileSize() {
      var _this$props$adminUiCo = this.props.adminUiConfig.multiFileUpload,
        locationMappings = _this$props$adminUiCo.locationMappings,
        defaultMappings = _this$props$adminUiCo.defaultMappings,
        defaultMaxFileSize = _this$props$adminUiCo.maxFileSize;
      var mappings = locationMappings.length ? locationMappings : defaultMappings;
      var contentTypeIdentifiers = Object.keys(this.props.contentCreatePermissionsConfig);
      return contentTypeIdentifiers.reduce(function (maxFileSizes, contentTypeIdentifier) {
        var contentTypeName = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__.getContentTypeName)(contentTypeIdentifier);
        var contentTypeMapping = mappings.find(function (item) {
          return item.contentTypeIdentifier === contentTypeIdentifier;
        });
        maxFileSizes.push({
          name: contentTypeName,
          maxFileSize: (contentTypeMapping === null || contentTypeMapping === void 0 ? void 0 : contentTypeMapping.maxFileSize) || defaultMaxFileSize
        });
        return maxFileSizes;
      }, []);
    }
  }, {
    key: "render",
    value: function render() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
      var hasAnyUploadedItems = !!this.props.uploadedItems.length;
      var hasAnyItemsToUpload = !!this.props.itemsToUpload.length;
      var label = Translator.trans(/*@Desc("Upload")*/'upload_popup.label', {}, 'ibexa_multi_file_upload');
      var confirmBtnLabel = !hasAnyUploadedItems && !hasAnyItemsToUpload ? Translator.trans(/*@Desc("Close")*/'upload_popup.close_label', {}, 'ibexa_multi_file_upload') : Translator.trans(/*@Desc("Confirm and close")*/'upload_popup.confirm_label', {}, 'ibexa_multi_file_upload');
      var closeBtnLabel = Translator.trans(/*@Desc("Cancel pending upload")*/'upload_popup.cancel_label', {}, 'ibexa_multi_file_upload');
      var _this$props = this.props,
        addItemsToUpload = _this$props.addItemsToUpload,
        subtitle = _this$props.subtitle,
        visible = _this$props.visible,
        onConfirm = _this$props.onConfirm,
        onClose = _this$props.onClose,
        onAfterUpload = _this$props.onAfterUpload,
        createFileStruct = _this$props.createFileStruct,
        publishFile = _this$props.publishFile,
        deleteFile = _this$props.deleteFile,
        checkCanUpload = _this$props.checkCanUpload,
        adminUiConfig = _this$props.adminUiConfig,
        parentInfo = _this$props.parentInfo,
        contentCreatePermissionsConfig = _this$props.contentCreatePermissionsConfig,
        contentTypesMap = _this$props.contentTypesMap,
        currentLanguage = _this$props.currentLanguage,
        onAfterDelete = _this$props.onAfterDelete,
        itemsToUpload = _this$props.itemsToUpload,
        removeItemsToUpload = _this$props.removeItemsToUpload,
        preventDefaultAction = _this$props.preventDefaultAction,
        processUploadedFiles = _this$props.processUploadedFiles,
        enableUploadedItemEdit = _this$props.enableUploadedItemEdit;
      var tooltipAttrs = {
        subtitle: subtitle,
        visible: visible,
        onConfirm: onConfirm,
        onClose: onClose,
        title: Translator.trans(/*@Desc("Multi-file upload")*/'upload_popup.title', {}, 'ibexa_multi_file_upload'),
        confirmLabel: confirmBtnLabel,
        closeLabel: closeBtnLabel,
        confirmBtnAttrs: {
          disabled: itemsToUpload.length
        },
        closeBtnAttrs: {
          disabled: !itemsToUpload.length
        }
      };
      var listAttrs = {
        onAfterUpload: onAfterUpload,
        createFileStruct: createFileStruct,
        publishFile: publishFile,
        deleteFile: deleteFile,
        checkCanUpload: checkCanUpload,
        adminUiConfig: adminUiConfig,
        parentInfo: parentInfo,
        contentCreatePermissionsConfig: contentCreatePermissionsConfig,
        contentTypesMap: contentTypesMap,
        currentLanguage: currentLanguage,
        onAfterDelete: onAfterDelete,
        itemsToUpload: itemsToUpload,
        removeItemsToUpload: removeItemsToUpload,
        enableUploadedItemEdit: enableUploadedItemEdit
      };
      if (hasAnyUploadedItems || hasAnyItemsToUpload) {
        tooltipAttrs.extraClasses = 'c-tooltip-popup--with-uploaded-items';
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-popup",
        ref: this.refTooltip
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_tooltip_popup_tooltip_popup_component__WEBPACK_IMPORTED_MODULE_5__["default"], tooltipAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-upload-popup__label"
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_drop_area_drop_area_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
        addItemsToUpload: addItemsToUpload,
        maxFileSizes: this.getContentTypesMaxFileSize(),
        preventDefaultAction: preventDefaultAction,
        processUploadedFiles: processUploadedFiles
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_upload_list_upload_list_component__WEBPACK_IMPORTED_MODULE_7__["default"], listAttrs)));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

UploadPopupModule.propTypes = {
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  itemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  uploadedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onAfterUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  preventDefaultAction: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  processUploadedFiles: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  addItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  removeItemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onAfterDelete: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  enableUploadedItemEdit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
UploadPopupModule.defaultProps = {
  subtitle: '',
  visible: true,
  itemsToUpload: [],
  uploadedItems: [],
  currentLanguage: '',
  contentCreatePermissionsConfig: {},
  onConfirm: function onConfirm() {},
  onClose: function onClose() {},
  onAfterDelete: function onAfterDelete() {},
  enableUploadedItemEdit: true
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/config.loader.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/config.loader.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _multi_file_upload_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multi.file.upload.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js");

(function (ibexa) {
  ibexa.addConfig('modules.MultiFileUpload', _multi_file_upload_module__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/helpers/text.helper.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fileSizeToString: () => (/* binding */ fileSizeToString)
/* harmony export */ });
/* harmony import */ var _common_helpers_text_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helpers/text.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/text.helper.js");


// @deprecated, will be removed in 5.0
var fileSizeToString = _common_helpers_text_helper__WEBPACK_IMPORTED_MODULE_0__.fileSizeToString;

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/multi.file.upload.module.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUBITEMS_TRIGGER_ID: () => (/* binding */ SUBITEMS_TRIGGER_ID),
/* harmony export */   UDW_TRIGGER_ID: () => (/* binding */ UDW_TRIGGER_ID),
/* harmony export */   "default": () => (/* binding */ MultiFileUploadModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _components_upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/upload-popup/upload.popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/components/upload-popup/upload.popup.component.js");
/* harmony import */ var _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/multi.file.upload.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var UDW_TRIGGER_ID = 'UDW';
var SUBITEMS_TRIGGER_ID = 'SUBITEMS';
var MultiFileUploadModule = /*#__PURE__*/function (_Component) {
  function MultiFileUploadModule(props) {
    var _this;
    _classCallCheck(this, MultiFileUploadModule);
    _this = _callSuper(this, MultiFileUploadModule, [props]);
    var popupVisible = true;
    _this.configRootNode = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getRootDOMElement)();
    _this._itemsUploaded = [];
    if (!props.itemsToUpload || !props.itemsToUpload.length) {
      popupVisible = false;
    }
    _this.handleDropOnWindow = _this.handleDropOnWindow.bind(_this);
    _this.handleAfterUpload = _this.handleAfterUpload.bind(_this);
    _this.handleAfterDelete = _this.handleAfterDelete.bind(_this);
    _this.showUploadPopup = _this.showUploadPopup.bind(_this);
    _this.hidePopup = _this.hidePopup.bind(_this);
    _this.confirmPopup = _this.confirmPopup.bind(_this);
    _this.processUploadedFiles = _this.processUploadedFiles.bind(_this);
    _this.setUdwStateOpened = _this.setUdwStateOpened.bind(_this);
    _this.setUdwStateClosed = _this.setUdwStateClosed.bind(_this);
    _this.addItemsToUpload = _this.addItemsToUpload.bind(_this);
    _this.removeItemsToUpload = _this.removeItemsToUpload.bind(_this);
    _this.state = {
      udwOpened: false,
      popupVisible: popupVisible,
      itemsToUpload: props.itemsToUpload,
      allowDropOnWindow: true,
      uploadDisabled: Object.values(props.contentCreatePermissionsConfig).every(function (isEnabled) {
        return !isEnabled;
      })
    };
    return _this;
  }
  _inherits(MultiFileUploadModule, _Component);
  return _createClass(MultiFileUploadModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.manageDropEvent();
      this.configRootNode.addEventListener('ibexa-udw-opened', this.setUdwStateOpened, false);
      this.configRootNode.addEventListener('ibexa-udw-closed', this.setUdwStateClosed, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.manageDropEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.configRootNode.removeEventListener('ibexa-udw-opened', this.setUdwStateOpened, false);
      this.configRootNode.removeEventListener('ibexa-udw-closed', this.setUdwStateClosed, false);
    }
  }, {
    key: "setUdwStateOpened",
    value: function setUdwStateOpened() {
      this.setState({
        udwOpened: true
      });
    }
  }, {
    key: "setUdwStateClosed",
    value: function setUdwStateClosed() {
      this.setState({
        udwOpened: false
      });
    }
  }, {
    key: "manageDropEvent",
    value: function manageDropEvent() {
      var _this$state = this.state,
        uploadDisabled = _this$state.uploadDisabled,
        popupVisible = _this$state.popupVisible,
        itemsToUpload = _this$state.itemsToUpload;
      if (!uploadDisabled && !popupVisible && !itemsToUpload.length) {
        this.configRootNode.addEventListener('drop', this.handleDropOnWindow, false);
        this.configRootNode.addEventListener('dragover', this.preventDefaultAction, false);
      }
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          popupVisible: false,
          allowDropOnWindow: true
        });
      });
      this.props.onPopupClose(this._itemsUploaded);
      this._itemsUploaded = [];
    }
  }, {
    key: "confirmPopup",
    value: function confirmPopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          popupVisible: false,
          allowDropOnWindow: true
        });
      });
      this.props.onPopupConfirm(this._itemsUploaded);
      if (this.props.triggerId === SUBITEMS_TRIGGER_ID && !!this._itemsUploaded.length) {
        window.location.reload();
      }
      this._itemsUploaded = [];
    }
  }, {
    key: "showUploadPopup",
    value: function showUploadPopup() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          popupVisible: true,
          itemsToUpload: [],
          allowDropOnWindow: false
        });
      });
    }
  }, {
    key: "handleAfterUpload",
    value: function handleAfterUpload(itemsUploaded) {
      this._itemsUploaded = itemsUploaded;
    }
  }, {
    key: "handleAfterDelete",
    value: function handleAfterDelete(deletedItem) {
      this._itemsUploaded = this._itemsUploaded.filter(function (data) {
        return data.id !== deletedItem.id;
      });
    }
  }, {
    key: "handleDropOnWindow",
    value: function handleDropOnWindow(event) {
      this.preventDefaultAction(event);
      event.stopImmediatePropagation();
      var itemsToUpload = this.processUploadedFiles(event);

      // Covers the case when dragging and dropping page elements inside the browser,
      // like links, images, etc.
      if (!this.state.allowDropOnWindow || !itemsToUpload.length || this.state.udwOpened) {
        return;
      }
      this.configRootNode.removeEventListener('drop', this.handleDropOnWindow, false);
      this.configRootNode.removeEventListener('dragover', this.preventDefaultAction, false);
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          itemsToUpload: itemsToUpload,
          popupVisible: true,
          allowDropOnWindow: false
        });
      });
    }
  }, {
    key: "extractDroppedFilesList",
    value: function extractDroppedFilesList(event) {
      var list;
      if (event.nativeEvent) {
        list = event.nativeEvent.dataTransfer || event.nativeEvent.target;
      } else {
        list = event.dataTransfer;
      }
      return list;
    }
  }, {
    key: "processUploadedFiles",
    value: function processUploadedFiles(event) {
      var list = this.extractDroppedFilesList(event);
      return Array.from(list.files).map(function (file) {
        return {
          id: Math.floor(Math.random() * Date.now()),
          file: file
        };
      });
    }
  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "renderBtn",
    value: function renderBtn() {
      if (!this.props.withUploadButton) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var uploadDisabled = this.state.uploadDisabled;
      var label = Translator.trans(/*@Desc("Upload")*/'multi_file_upload_open_btn.label', {}, 'ibexa_multi_file_upload');
      var isTriggeredBySubitems = this.props.triggerId === SUBITEMS_TRIGGER_ID;
      var buttonClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_7__.createCssClassNames)({
        'ibexa-btn btn': true,
        'ibexa-btn--secondary ibexa-btn--small': !isTriggeredBySubitems,
        'ibexa-btn--ghost': isTriggeredBySubitems
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: buttonClassName,
        onClick: this.showUploadPopup,
        disabled: uploadDisabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        name: "upload",
        extraClasses: "ibexa-icon--small"
      }), " ", label);
    }
  }, {
    key: "addItemsToUpload",
    value: function addItemsToUpload(items) {
      this.setState(function (prevState) {
        var newItems = items.filter(function (item) {
          return !prevState.itemsToUpload.find(function (stateItem) {
            return stateItem.id === item.id;
          });
        });
        if (newItems.length) {
          return {
            itemsToUpload: [].concat(_toConsumableArray(prevState.itemsToUpload), _toConsumableArray(newItems))
          };
        }
      });
    }
  }, {
    key: "removeItemsToUpload",
    value: function removeItemsToUpload(items) {
      var itemsIds = items.map(function (item) {
        return item.id;
      });
      this.setState(function (prevState) {
        var itemsToUpload = prevState.itemsToUpload.filter(function (stateItem) {
          return !itemsIds.includes(stateItem.id);
        });
        if (itemsToUpload.length !== prevState.itemsToUpload.length) {
          return {
            itemsToUpload: itemsToUpload
          };
        }
      });
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      if (!this.state.popupVisible) {
        return null;
      }
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
      var subtitle = Translator.trans(/*@Desc("Under %name%")*/'multi_file_upload_popup.subtitle', {
        name: this.props.parentInfo.name
      }, 'ibexa_multi_file_upload');
      var attrs = _objectSpread(_objectSpread({}, this.props), {}, {
        subtitle: this.props.parentInfo.name ? subtitle : '',
        visible: true,
        onClose: this.hidePopup,
        onConfirm: this.confirmPopup,
        itemsToUpload: this.state.itemsToUpload,
        uploadedItems: this._itemsUploaded,
        onAfterUpload: this.handleAfterUpload,
        onAfterDelete: this.handleAfterDelete,
        preventDefaultAction: this.preventDefaultAction,
        processUploadedFiles: this.processUploadedFiles,
        addItemsToUpload: this.addItemsToUpload,
        removeItemsToUpload: this.removeItemsToUpload,
        contentCreatePermissionsConfig: this.props.contentCreatePermissionsConfig,
        enableUploadedItemEdit: this.props.triggerId === SUBITEMS_TRIGGER_ID
      });
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_4__["default"], attrs), this.configRootNode);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-mfu"
      }, this.renderBtn(), this.renderPopup());
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

MultiFileUploadModule.propTypes = {
  adminUiConfig: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    multiFileUpload: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
      defaultMappings: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired,
      fallbackContentType: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
      locationMappings: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)).isRequired,
      maxFileSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
    }).isRequired
  }).isRequired,
  parentInfo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    locationPath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    language: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired
  }).isRequired,
  checkCanUpload: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  createFileStruct: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  deleteFile: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onPopupClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  onPopupConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  publishFile: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  itemsToUpload: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  withUploadButton: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  contentCreatePermissionsConfig: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  contentTypesMap: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  currentLanguage: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  triggerId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
MultiFileUploadModule.defaultProps = {
  checkCanUpload: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.checkCanUpload,
  createFileStruct: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.createFileStruct,
  deleteFile: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.deleteFile,
  onPopupClose: function onPopupClose() {},
  onPopupConfirm: function onPopupConfirm() {},
  publishFile: _services_multi_file_upload_service__WEBPACK_IMPORTED_MODULE_5__.publishFile,
  itemsToUpload: [],
  withUploadButton: true,
  currentLanguage: '',
  contentCreatePermissionsConfig: {},
  triggerId: SUBITEMS_TRIGGER_ID
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/services/multi.file.upload.service.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkCanUpload: () => (/* binding */ checkCanUpload),
/* harmony export */   createFileStruct: () => (/* binding */ createFileStruct),
/* harmony export */   deleteFile: () => (/* binding */ deleteFile),
/* harmony export */   publishFile: () => (/* binding */ publishFile)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Resources/public/js/scripts/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");


var handleOnReadyStateChange = function handleOnReadyStateChange(xhr, onSuccess, onError) {
  if (xhr.readyState !== 4) {
    return;
  }
  if (xhr.status === 0 && xhr.statusText === '') {
    // request aborted
    return;
  }
  if (xhr.status >= 400 || !xhr.status) {
    onError(xhr);
    return;
  }
  onSuccess(JSON.parse(xhr.response));
};
var handleRequestResponse = function handleRequestResponse(response) {
  if (!response.ok) {
    throw Error(response.text());
  }
  return response;
};
var readFile = function readFile(file, resolve, reject) {
  var _this = this;
  this.addEventListener('load', function () {
    return resolve({
      fileReader: _this,
      file: file
    });
  }, false);
  this.addEventListener('error', function () {
    return reject();
  }, false);
  this.readAsDataURL(file);
};
var findFileTypeMapping = function findFileTypeMapping(mappings, file) {
  return mappings.find(function (item) {
    return item.mimeTypes.find(function (type) {
      return type === file.type;
    });
  });
};
var isMimeTypeAllowed = function isMimeTypeAllowed(mappings, file) {
  return !!findFileTypeMapping(mappings, file);
};
var checkFileTypeAllowed = function checkFileTypeAllowed(file, locationMapping) {
  return !locationMapping ? true : isMimeTypeAllowed(locationMapping.mappings, file);
};
var detectContentTypeMapping = function detectContentTypeMapping(file, parentInfo, config) {
  var locationMapping = config.locationMappings.find(function (item) {
    return item.contentTypeIdentifier === parentInfo.contentTypeIdentifier;
  });
  var mappings = locationMapping ? locationMapping.mappings : config.defaultMappings;
  return findFileTypeMapping(mappings, file) || config.fallbackContentType;
};
var getContentTypeByIdentifier = function getContentTypeByIdentifier(identifier) {
  var _getRestInfo = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo.instanceUrl,
    token = _getRestInfo.token,
    siteaccess = _getRestInfo.siteaccess,
    accessToken = _getRestInfo.accessToken;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/types?identifier=").concat(identifier), {
    method: 'GET',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json'
      }
    }),
    credentials: 'same-origin',
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    })
  });
  return fetch(request).then(handleRequestResponse);
};
var getFieldDefinitionByIdentifier = function getFieldDefinitionByIdentifier(contentTypeId, fieldIdentifier) {
  var _getRestInfo2 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo2.instanceUrl,
    token = _getRestInfo2.token,
    siteaccess = _getRestInfo2.siteaccess,
    accessToken = _getRestInfo2.accessToken;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/types/").concat(contentTypeId, "/fieldDefinition/").concat(fieldIdentifier), {
    method: 'GET',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.FieldDefinition+json'
      }
    }),
    credentials: 'same-origin',
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    })
  });
  return fetch(request).then(handleRequestResponse);
};
var prepareStruct = function prepareStruct(_ref, data, contentErrorCallback) {
  var parentInfo = _ref.parentInfo,
    config = _ref.config,
    languageCode = _ref.languageCode;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
  var parentLocation = "/api/ibexa/v2/content/locations".concat(parentInfo.locationPath);
  parentLocation = parentLocation.endsWith('/') ? parentLocation.slice(0, -1) : parentLocation;
  var mapping = detectContentTypeMapping(data.file, parentInfo, config.multiFileUpload);
  return getContentTypeByIdentifier(mapping.contentTypeIdentifier).then(function (response) {
    return response.json();
  })["catch"](function () {
    contentErrorCallback(Translator.trans(/*@Desc("Cannot get content type by identifier")*/'cannot_get_content_type_identifier.message', {}, 'ibexa_multi_file_upload'));
  }).then(function (response) {
    var splitedFileNameNoExtension = data.file.name.split('.').slice(0, -1);
    var nameFieldValue = splitedFileNameNoExtension.join(' ');
    var fileValue = {
      fileName: data.file.name,
      data: data.fileReader.result.replace(/^.*;base64,/, '')
    };
    var contentType = response.ContentTypeInfoList.ContentType[0];
    var contentFieldIdentifier = mapping.contentFieldIdentifier;
    return getFieldDefinitionByIdentifier(contentType.id, contentFieldIdentifier).then(function (parsedResponse) {
      return parsedResponse.json();
    })["catch"](function () {
      contentErrorCallback(Translator.trans(/*@Desc("Cannot get content type by identifier")*/'cannot_get_content_type_identifier.message', {}, 'ibexa_multi_file_upload'));
    }).then(function (parsedResponse) {
      var fieldDefinition = parsedResponse.FieldDefinition;
      if (fieldDefinition.fieldType === 'ezimage') {
        fileValue.alternativeText = data.file.name;
      }
      var fields = [{
        fieldDefinitionIdentifier: mapping.nameFieldIdentifier,
        fieldValue: nameFieldValue
      }, {
        fieldDefinitionIdentifier: contentFieldIdentifier,
        fieldValue: fileValue
      }];
      var struct = {
        ContentCreate: {
          ContentType: {
            _href: contentType._href
          },
          mainLanguageCode: languageCode !== null && languageCode !== void 0 ? languageCode : parentInfo.language,
          LocationCreate: {
            ParentLocation: {
              _href: parentLocation
            },
            sortField: 'PATH',
            sortOrder: 'ASC'
          },
          Section: null,
          alwaysAvailable: true,
          remoteId: null,
          modificationDate: new Date().toISOString(),
          fields: {
            field: fields
          }
        }
      };
      return struct;
    })["catch"](function () {
      contentErrorCallback(Translator.trans(/*@Desc("Cannot create content structure")*/'cannot_create_content_structure.message', {}, 'ibexa_multi_file_upload'));
    });
  })["catch"](function () {
    contentErrorCallback(Translator.trans(/*@Desc("Cannot create content structure")*/'cannot_create_content_structure.message', {}, 'ibexa_multi_file_upload'));
  });
};
var createDraft = function createDraft(struct, requestEventHandlers) {
  var _getRestInfo3 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo3.instanceUrl,
    token = _getRestInfo3.token,
    siteaccess = _getRestInfo3.siteaccess,
    accessToken = _getRestInfo3.accessToken;
  var xhr = new XMLHttpRequest();
  var body = JSON.stringify(struct);
  var headers = (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
    token: token,
    siteaccess: siteaccess,
    accessToken: accessToken,
    extraHeaders: {
      Accept: 'application/vnd.ibexa.api.Content+json',
      'Content-Type': 'application/vnd.ibexa.api.ContentCreate+json'
    }
  });
  return new Promise(function (resolve, reject) {
    xhr.open('POST', "".concat(instanceUrl, "/api/ibexa/v2/content/objects"), true);
    xhr.onreadystatechange = handleOnReadyStateChange.bind(null, xhr, resolve, reject);
    if (requestEventHandlers && Object.keys(requestEventHandlers).length) {
      var uploadEvents = requestEventHandlers.upload;
      if (uploadEvents && Object.keys(uploadEvents).length) {
        xhr.upload.onabort = uploadEvents.onabort;
        xhr.upload.onerror = reject;
        xhr.upload.onload = uploadEvents.onload;
        xhr.upload.onprogress = uploadEvents.onprogress;
        xhr.upload.ontimeout = uploadEvents.ontimeout;
      }
      xhr.onerror = reject;
      xhr.onloadstart = requestEventHandlers.onloadstart;
    }
    for (var headerType in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, headerType)) {
        xhr.setRequestHeader(headerType, headers[headerType]);
      }
    }
    xhr.send(body);
  });
};
var publishDraft = function publishDraft(data) {
  if (!(data !== null && data !== void 0 && data.Content)) {
    return Promise.reject('Cannot publish content based on an uploaded file');
  }
  var _getRestInfo4 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo4.instanceUrl,
    token = _getRestInfo4.token,
    siteaccess = _getRestInfo4.siteaccess,
    accessToken = _getRestInfo4.accessToken;
  var request = new Request("".concat(instanceUrl).concat(data.Content.CurrentVersion.Version._href), {
    method: 'POST',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        'X-HTTP-Method-Override': 'PUBLISH'
      }
    }),
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponse);
};
var canCreateContent = function canCreateContent(file, parentInfo, config) {
  if (!Object.prototype.hasOwnProperty.call(config, 'contentCreatePermissionsConfig') || !config.contentCreatePermissionsConfig) {
    return true;
  }
  var contentTypeConfig = detectContentTypeMapping(file, parentInfo, config);
  return config.contentCreatePermissionsConfig[contentTypeConfig.contentTypeIdentifier];
};
var getMaxFileSize = function getMaxFileSize(file, parentInfo, config) {
  var _detectContentTypeMap = detectContentTypeMapping(file, parentInfo, config),
    contentMaxFileSize = _detectContentTypeMap.maxFileSize;
  return contentMaxFileSize || config.maxFileSize;
};
var checkCanUpload = function checkCanUpload(file, parentInfo, config, errorCallback) {
  var errorMsgs = [];
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
  var locationMapping = config.locationMappings.find(function (item) {
    return item.contentTypeIdentifier === parentInfo.contentTypeIdentifier;
  });
  var maxFileSize = getMaxFileSize(file, parentInfo, config);
  if (!canCreateContent(file, parentInfo, config)) {
    errorMsgs.push(Translator.trans(/*@Desc("You do not have permission to create this Content item")*/'disallowed_content_type.message', {}, 'ibexa_multi_file_upload'));
  }
  if (!checkFileTypeAllowed(file, locationMapping)) {
    errorMsgs.push(Translator.trans(/*@Desc("File type is not allowed")*/'disallowed_type.message', {}, 'ibexa_multi_file_upload'));
  }
  if (file.size > maxFileSize) {
    errorMsgs.push(Translator.trans(/*@Desc("File size is not allowed")*/'disallowed_size.message', {}, 'ibexa_multi_file_upload'));
  }
  if (errorMsgs.length) {
    errorCallback(errorMsgs);
    return false;
  }
  return true;
};
var createFileStruct = function createFileStruct(file, params, contentErrorCallback) {
  return new Promise(readFile.bind(new FileReader(), file)).then(function (fileData) {
    return prepareStruct(params, fileData, contentErrorCallback);
  });
};
var publishFile = function publishFile(data, requestEventHandlers, successCallback, contentErrorCallback) {
  createDraft(data, requestEventHandlers).then(publishDraft).then(successCallback)["catch"](function () {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
    contentErrorCallback(Translator.trans(/*@Desc("An error occurred while publishing a file")*/'general.error.message', {}, 'ibexa_multi_file_upload'));
  });
};
var deleteFile = function deleteFile(struct, callback, contentErrorCallback) {
  var _getRestInfo5 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRestInfo)(),
    instanceUrl = _getRestInfo5.instanceUrl,
    token = _getRestInfo5.token,
    siteaccess = _getRestInfo5.siteaccess,
    accessToken = _getRestInfo5.accessToken;
  var request = new Request("".concat(instanceUrl).concat(struct.Content._href), {
    method: 'DELETE',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken
    }),
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(handleRequestResponse).then(callback)["catch"](function () {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
    contentErrorCallback(Translator.trans(/*@Desc("An error occurred while deleting a file")*/'delete.error.message', {}, 'ibexa_multi_file_upload'));
  });
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about-info.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about-info.31a3b8ee.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about.d648fc1f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/approved.8dcddbcc.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/article.87d9802e.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/back.daf9f5e9.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/blog.1bbae791.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/blog_post.4509899b.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/caret-down.f72f2589.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/caret-up.c2ba7f03.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/checkmark.6bbaed08.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/circle-close.cf4e3719.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/content-tree.513377cf.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/create.948e3424.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/date.51e2752f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/discard.7ab1b667.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/download.40d98643.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/drag.9b430792.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/duplicate.4961d378.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/edit.4fa25121.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/expand-left.251d3a23.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/fields.22fbf40a.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/file.f6e0bf0b.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/filters.59e95d7d.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/folder.977267fb.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/form.015bc963.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gallery.7e496553.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image.c05d71e7.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/landing_page.2e7e2424.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/notice.9e08cc1f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/options.15578e01.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/place.d190c3f6.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/product.aa6dd0a1.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/qa-form.9e25b46c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/search.548ac5f3.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/spinner.ab67bf41.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/system-information.d0dbc17c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/trash.d1555488.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/upload-image.09f70b0c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/upload.2c5ac915.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/user.19743a46.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/user_group.82314755.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/video.c5fb6c8f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/view-grid.1b49c5a6.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/view-list.2752b827.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/view.6c174a86.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/warning.449e4631.svg";

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ ((module) => {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/multi-file-upload/config.loader.js"));
/******/ }
]);