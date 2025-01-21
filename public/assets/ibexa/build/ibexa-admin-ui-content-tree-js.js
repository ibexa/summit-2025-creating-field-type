"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-content-tree-js"],{

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCookie: () => (/* binding */ getCookie),
/* harmony export */   setBackOfficeCookie: () => (/* binding */ setBackOfficeCookie),
/* harmony export */   setCookie: () => (/* binding */ setCookie)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var _window = window,
  doc = _window.document;
var setBackOfficeCookie = function setBackOfficeCookie(name, value) {
  var maxAgeDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 356;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().backOfficePath;
  setCookie(name, value, maxAgeDays, path);
};
var setCookie = function setCookie(name, value) {
  var maxAgeDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 356;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  var maxAge = maxAgeDays * 24 * 60 * 60;
  doc.cookie = "".concat(name, "=").concat(value, ";max-age=").concat(maxAge, ";path=").concat(path);
};
var getCookie = function getCookie(name) {
  var decodedCookie = decodeURIComponent(doc.cookie);
  var cookiesArray = decodedCookie.split(';');
  var cookieValue = cookiesArray.find(function (cookie) {
    var cookieString = cookie.trim();
    var seachingString = "".concat(name, "=");
    return cookieString.indexOf(seachingString) === 0;
  });
  return cookieValue ? cookieValue.split('=')[1] : null;
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showErrorNotification: () => (/* binding */ showErrorNotification),
/* harmony export */   showInfoNotification: () => (/* binding */ showInfoNotification),
/* harmony export */   showNotification: () => (/* binding */ showNotification),
/* harmony export */   showSuccessNotification: () => (/* binding */ showSuccessNotification),
/* harmony export */   showWarningNotification: () => (/* binding */ showWarningNotification)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var NOTIFICATION_INFO_LABEL = 'info';
var NOTIFICATION_SUCCESS_LABEL = 'success';
var NOTIFICATION_WARNING_LABEL = 'warning';
var NOTIFICATION_ERROR_LABEL = 'error';

/**
 * Dispatches notification event
 *
 * @function showNotification
 * @param {Object} detail
 * @param {String} detail.message
 * @param {String} detail.label
 * @param {Function} [detail.onShow] to be called after notification Node was added
 * @param {Object} detail.rawPlaceholdersMap
 */
var showNotification = function showNotification(detail) {
  var rootDOMElement = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getRootDOMElement)();
  var event = new CustomEvent('ibexa-notify', {
    detail: detail
  });
  rootDOMElement.dispatchEvent(event);
};

/**
 * Dispatches info notification event
 *
 * @function showInfoNotification
 * @param {String} message
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showInfoNotification = function showInfoNotification(message, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return showNotification({
    message: message,
    label: NOTIFICATION_INFO_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
};

/**
 * Dispatches success notification event
 *
 * @function showSuccessNotification
 * @param {String} message
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showSuccessNotification = function showSuccessNotification(message, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return showNotification({
    message: message,
    label: NOTIFICATION_SUCCESS_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
};

/**
 * Dispatches warning notification event
 *
 * @function showWarningNotification
 * @param {String} message
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showWarningNotification = function showWarningNotification(message, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return showNotification({
    message: message,
    label: NOTIFICATION_WARNING_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
};

/**
 * Dispatches error notification event
 *
 * @function showErrorNotification
 * @param {(string | Error)} error
 * @param {Function} [onShow] to be called after notification Node was added
 * @param {Object} rawPlaceholdersMap
 */
var showErrorNotification = function showErrorNotification(error, onShow) {
  var rawPlaceholdersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isErrorObj = error instanceof Error;
  var message = isErrorObj ? error.message : error;
  showNotification({
    message: message,
    label: NOTIFICATION_ERROR_LABEL,
    onShow: onShow,
    rawPlaceholdersMap: rawPlaceholdersMap
  });
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Clones any object. Faster alternative to `JSON.parse(JSON.stringify)`
 *
 * @function deepClone
 * @param {Any} data
 * @returns {Any} cloned data
 */
var _deepClone = function deepClone(data) {
  var clonedData;
  if (_typeof(data) !== 'object') {
    return data;
  }
  if (!data) {
    return data;
  }
  if (Object.prototype.toString.apply(data) === '[object Array]') {
    clonedData = [];
    for (var i = 0; i < data.length; i++) {
      clonedData[i] = _deepClone(data[i]);
    }
    return clonedData;
  }
  clonedData = {};
  for (var _i in data) {
    if (Object.prototype.hasOwnProperty.call(data, _i)) {
      clonedData[_i] = _deepClone(data[_i]);
    }
  }
  return clonedData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_deepClone);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBasicRequestInit: () => (/* binding */ getBasicRequestInit),
/* harmony export */   handleRequestError: () => (/* binding */ handleRequestError),
/* harmony export */   handleRequestResponse: () => (/* binding */ handleRequestResponse),
/* harmony export */   handleRequestResponseStatus: () => (/* binding */ handleRequestResponseStatus)
/* harmony export */ });
/**
 * Returns basic RequestInit object for Request
 *
 * @function getBasicRequestInit
 * @param {Object} restInfo REST config hash containing: token and siteaccess properties
 * @returns {RequestInit}
 */
var getBasicRequestInit = function getBasicRequestInit(_ref) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess;
  return {
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  };
};

/**
 * Handles request error
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Response}
 */
var handleRequestError = function handleRequestError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Error|Promise}
 */
var handleRequestResponse = function handleRequestResponse(response) {
  return handleRequestError(response).json();
};

/**
 * Handles request response; returns status if response is OK
 *
 * @function handleRequestResponseStatus
 * @param {Response} response
 * @returns {number}
 */
var handleRequestResponseStatus = function handleRequestResponseStatus(response) {
  return handleRequestError(response).status;
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
var _excluded = ["className", "onClick", "disabled", "preventClose", "label"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var CLASS_NON_SCROLLABLE = 'ibexa-non-scrollable';
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};
var MODAL_SIZE_CLASS = {
  small: 'modal-sm',
  medium: '',
  large: 'modal-lg'
};
var Popup = function Popup(_ref) {
  var isVisible = _ref.isVisible,
    onClose = _ref.onClose,
    children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    hasFocus = _ref.hasFocus,
    noKeyboard = _ref.noKeyboard,
    actionBtnsConfig = _ref.actionBtnsConfig,
    size = _ref.size,
    noHeader = _ref.noHeader,
    noCloseBtn = _ref.noCloseBtn,
    extraClasses = _ref.extraClasses,
    showTooltip = _ref.showTooltip;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getRootDOMElement)();
  var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getTranslator)();
  var bootstrap = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getBootstrap)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    rootDOMElement.classList.toggle(CLASS_MODAL_OPEN, isVisible);
    rootDOMElement.classList.toggle(CLASS_NON_SCROLLABLE, isVisible);
    if (isVisible) {
      showPopup();
      modalRef.current.addEventListener('hidden.bs.modal', onClose);
    }
  }, [isVisible]);
  if (!isVisible) {
    return null;
  }
  var modalClasses = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-popup modal fade': true,
    'c-popup--no-header': noHeader
  }, extraClasses, extraClasses));
  var closeBtnLabel = Translator.trans(/*@Desc("Close")*/'popup.close.label', {}, 'ibexa_universal_discovery_widget');
  var hidePopup = function hidePopup() {
    modalRef.current.removeEventListener('hidden.bs.modal', onClose);
    bootstrap.Modal.getOrCreateInstance(modalRef.current).hide();
    rootDOMElement.classList.remove(CLASS_MODAL_OPEN, CLASS_NON_SCROLLABLE);
  };
  var showPopup = function showPopup() {
    var bootstrapModal = bootstrap.Modal.getOrCreateInstance(modalRef.current, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
      keyboard: !noKeyboard,
      focus: hasFocus
    }));
    var initializedBackdropRootElement = bootstrapModal._backdrop._config.rootElement;
    if (initializedBackdropRootElement !== rootDOMElement) {
      bootstrapModal._backdrop._config.rootElement = rootDOMElement;
    }
    bootstrapModal.show();
  };
  var handleOnClick = function handleOnClick(event, onClick, preventClose) {
    modalRef.current.removeEventListener('hidden.bs.modal', onClose);
    if (!preventClose) {
      hidePopup();
    }
    onClick(event, hidePopup);
  };
  var renderCloseBtn = function renderCloseBtn() {
    if (noCloseBtn) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "close c-popup__btn--close",
      "data-bs-dismiss": "modal",
      "aria-label": closeBtnLabel,
      onClick: hidePopup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "discard",
      extraClasses: "ibexa-icon--small"
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: modalRef,
    className: modalClasses,
    tabIndex: hasFocus ? -1 : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-dialog c-popup__dialog ".concat(MODAL_SIZE_CLASS[size]),
    role: "dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-content c-popup__content"
  }, noHeader ? renderCloseBtn() : title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-header c-popup__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "modal-title c-popup__headline",
    title: showTooltip ? title : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-popup__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-popup__subtitle"
  }, subtitle)), renderCloseBtn()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-body c-popup__body"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "modal-footer c-popup__footer"
  }, actionBtnsConfig.map(function (_ref2) {
    var className = _ref2.className,
      onClick = _ref2.onClick,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$preventClose = _ref2.preventClose,
      preventClose = _ref2$preventClose === void 0 ? false : _ref2$preventClose,
      label = _ref2.label,
      extraProps = _objectWithoutProperties(_ref2, _excluded);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({
      key: label,
      type: "button",
      className: "btn ibexa-btn ".concat(className),
      onClick: onClick ? function (event) {
        return handleOnClick(event, onClick, preventClose);
      } : hidePopup,
      disabled: disabled
    }, extraProps), label);
  })))));
};
Popup.propTypes = {
  actionBtnsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    preventClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  })).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  noHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  noKeyboard: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  showTooltip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Popup.defaultProps = {
  hasFocus: true,
  noKeyboard: false,
  onClose: null,
  size: 'large',
  noHeader: false,
  noCloseBtn: false,
  extraClasses: '',
  title: null,
  subtitle: null,
  showTooltip: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOTIFICATION_ERROR_LABEL: () => (/* binding */ NOTIFICATION_ERROR_LABEL),
/* harmony export */   NOTIFICATION_INFO_LABEL: () => (/* binding */ NOTIFICATION_INFO_LABEL),
/* harmony export */   NOTIFICATION_SUCCESS_LABEL: () => (/* binding */ NOTIFICATION_SUCCESS_LABEL),
/* harmony export */   NOTIFICATION_WARNING_LABEL: () => (/* binding */ NOTIFICATION_WARNING_LABEL),
/* harmony export */   showErrorNotification: () => (/* binding */ showErrorNotification),
/* harmony export */   showInfoNotification: () => (/* binding */ showInfoNotification),
/* harmony export */   showNotification: () => (/* binding */ showNotification),
/* harmony export */   showSuccessNotification: () => (/* binding */ showSuccessNotification),
/* harmony export */   showWarningNotification: () => (/* binding */ showWarningNotification)
/* harmony export */ });
var NOTIFICATION_INFO_LABEL = 'info';
var NOTIFICATION_SUCCESS_LABEL = 'success';
var NOTIFICATION_WARNING_LABEL = 'warning';
var NOTIFICATION_ERROR_LABEL = 'error';

/**
 * Dispatches notification event
 *
 * @method showNotification
 * @param {{message: string, label: string}} detail
 */
var showNotification = function showNotification(detail) {
  var event = new CustomEvent('ibexa-notify', {
    detail: detail
  });
  document.body.dispatchEvent(event);
};

/**
 * Dispatches info notification event
 *
 * @method showInfoNotification
 * @param {String} message
 */
var showInfoNotification = function showInfoNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_INFO_LABEL
  });
};

/**
 * Dispatches success notification event
 *
 * @method showSuccessNotification
 * @param {String} message
 */
var showSuccessNotification = function showSuccessNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_SUCCESS_LABEL
  });
};

/**
 * Dispatches warning notification event
 *
 * @method showWarningNotification
 * @param {String} message
 */
var showWarningNotification = function showWarningNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_WARNING_LABEL
  });
};

/**
 * Dispatches error notification event
 *
 * @method showErrorNotification
 * @param {(string|Error)} error
 */
var showErrorNotification = function showErrorNotification(error) {
  var isErrorObj = error instanceof Error;
  var message = isErrorObj ? error.message : error;
  showNotification({
    message: message,
    label: NOTIFICATION_ERROR_LABEL
  });
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SIZES: () => (/* binding */ SIZES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};
var Spinner = function Spinner(_ref) {
  var size = _ref.size;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-spinner': true
  }, "c-spinner--".concat(size), true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  });
};
Spinner.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.values(SIZES))
};
Spinner.defaultProps = {
  size: SIZES.MEDIUM
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentTree)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/header/header.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
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





var _window = window,
  Translator = _window.Translator;
var CLASS_IS_TREE_RESIZING = 'ibexa-is-tree-resizing';
var MIN_CONTAINER_WIDTH = 200;
var COLLAPSED_WIDTH = 66;
var EXPANDED_WIDTH = 320;
var DEFAULT_CONTAINER_WIDTH = 300;
var ContentTree = /*#__PURE__*/function (_Component) {
  function ContentTree(props) {
    var _this;
    _classCallCheck(this, ContentTree);
    _this = _callSuper(this, ContentTree, [props]);
    _this.changeContainerWidth = _this.changeContainerWidth.bind(_this);
    _this.toggleCollapseTree = _this.toggleCollapseTree.bind(_this);
    _this.addWidthChangeListener = _this.addWidthChangeListener.bind(_this);
    _this.handleResizeEnd = _this.handleResizeEnd.bind(_this);
    _this.checkIsTreeCollapsed = _this.checkIsTreeCollapsed.bind(_this);
    _this._refTreeContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refPopupContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.scrollTimeout = null;
    _this.scrollPositionRestored = false;
    _this.state = {
      resizeStartPositionX: 0,
      containerWidth: _this.getConfig('width') || DEFAULT_CONTAINER_WIDTH,
      resizedContainerWidth: 0,
      isResizing: false
    };
    return _this;
  }
  _inherits(ContentTree, _Component);
  return _createClass(ContentTree, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearDocumentResizingListeners();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.containerScrollRef.addEventListener('scroll', function (event) {
        window.clearTimeout(_this2.scrollTimeout);
        _this2.scrollTimeout = window.setTimeout(function (scrollTop) {
          _this2.saveConfig('scrollTop', scrollTop);
        }, 50, event.currentTarget.scrollTop);
      });
      document.body.dispatchEvent(new CustomEvent('ibexa-tb-rendered', {
        detail: {
          id: 'ibexa-content-tree'
        }
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
      if (this.state.containerWidth !== prevState.containerWidth) {
        this.saveConfig('width', this.state.containerWidth);
        document.body.dispatchEvent(new CustomEvent('ibexa-content-tree-resized'));
      }
      if (this.props.items && this.props.items.length && !this.scrollPositionRestored) {
        this.scrollPositionRestored = true;
        this.containerScrollRef.scrollTo(0, this.getConfig('scrollTop'));
      }
    }
  }, {
    key: "saveConfig",
    value: function saveConfig(id, value) {
      var userId = this.props.userId;
      var data = JSON.parse(window.localStorage.getItem('ibexa-content-tree-state') || '{}');
      if (!data[userId]) {
        data[userId] = {};
      }
      data[userId][id] = value;
      window.localStorage.setItem('ibexa-content-tree-state', JSON.stringify(data));
    }
  }, {
    key: "getConfig",
    value: function getConfig(id) {
      var _data$userId;
      var userId = this.props.userId;
      var data = JSON.parse(window.localStorage.getItem('ibexa-content-tree-state') || '{}');
      return (_data$userId = data[userId]) === null || _data$userId === void 0 ? void 0 : _data$userId[id];
    }
  }, {
    key: "changeContainerWidth",
    value: function changeContainerWidth(_ref) {
      var clientX = _ref.clientX;
      var currentPositionX = clientX;
      this.setState(function (state) {
        return {
          resizedContainerWidth: state.containerWidth + (currentPositionX - state.resizeStartPositionX)
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-content-resized'));
      });
    }
  }, {
    key: "toggleCollapseTree",
    value: function toggleCollapseTree() {
      var width = this.checkIsTreeCollapsed() ? EXPANDED_WIDTH : COLLAPSED_WIDTH;
      this.setState(function () {
        return {
          resizedContainerWidth: width,
          containerWidth: width
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-content-resized'));
      });
    }
  }, {
    key: "addWidthChangeListener",
    value: function addWidthChangeListener(_ref2) {
      var nativeEvent = _ref2.nativeEvent;
      var resizeStartPositionX = nativeEvent.clientX;
      var containerWidth = this._refTreeContainer.current.getBoundingClientRect().width;
      window.document.addEventListener('mousemove', this.changeContainerWidth, false);
      window.document.addEventListener('mouseup', this.handleResizeEnd, false);
      window.document.body.classList.add(CLASS_IS_TREE_RESIZING);
      this.setState(function () {
        return {
          resizeStartPositionX: resizeStartPositionX,
          containerWidth: containerWidth,
          resizedContainerWidth: containerWidth,
          isResizing: true
        };
      });
    }
  }, {
    key: "handleResizeEnd",
    value: function handleResizeEnd() {
      this.clearDocumentResizingListeners();
      this.setState(function (state) {
        return {
          resizeStartPositionX: 0,
          containerWidth: state.resizedContainerWidth,
          isResizing: false
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-content-resized'));
      });
    }
  }, {
    key: "clearDocumentResizingListeners",
    value: function clearDocumentResizingListeners() {
      window.document.removeEventListener('mousemove', this.changeContainerWidth);
      window.document.removeEventListener('mouseup', this.handleResizeEnd);
      window.document.body.classList.remove(CLASS_IS_TREE_RESIZING);
    }
  }, {
    key: "getCollapseAllBtn",
    value: function getCollapseAllBtn() {
      var _this3 = this;
      var CollapseAction = function CollapseAction() {
        var collapseAllLabel = Translator.trans(/*@Desc("Collapse all")*/'collapse_all', {}, 'ibexa_content_tree');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          onClick: _this3.props.onCollapseAllItems
        }, collapseAllLabel);
      };
      return CollapseAction;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var actions = [{
        id: 'collapse-all',
        priority: 0,
        component: this.getCollapseAllBtn()
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        toggleCollapseTree: this.toggleCollapseTree,
        isCollapsed: this.checkIsTreeCollapsed(),
        popupRef: this._refPopupContainer,
        actions: actions
      });
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this4 = this;
      var _this$props = this.props,
        items = _this$props.items,
        loadMoreSubitems = _this$props.loadMoreSubitems,
        currentLocationId = _this$props.currentLocationId,
        onClickItem = _this$props.onClickItem,
        subitemsLoadLimit = _this$props.subitemsLoadLimit,
        subitemsLimit = _this$props.subitemsLimit,
        treeMaxDepth = _this$props.treeMaxDepth,
        afterItemToggle = _this$props.afterItemToggle;
      var attrs = {
        items: items,
        path: '',
        loadMoreSubitems: loadMoreSubitems,
        currentLocationId: currentLocationId,
        subitemsLimit: subitemsLimit,
        subitemsLoadLimit: subitemsLoadLimit,
        treeMaxDepth: treeMaxDepth,
        afterItemToggle: afterItemToggle,
        isRoot: true,
        onClickItem: onClickItem
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-tree__scrollable-wrapper",
        ref: function ref(_ref3) {
          return _this4.containerScrollRef = _ref3;
        }
      }, this.checkIsTreeCollapsed() || !items || !items.length ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_list_component__WEBPACK_IMPORTED_MODULE_2__["default"], attrs));
    }
  }, {
    key: "renderLoadingSpinner",
    value: function renderLoadingSpinner() {
      var items = this.props.items;
      if (this.checkIsTreeCollapsed() || items && items.length) {
        return;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-tree__loading-spinner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "spinner",
        extraClasses: "ibexa-icon--medium ibexa-spin"
      }));
    }
  }, {
    key: "checkIsTreeCollapsed",
    value: function checkIsTreeCollapsed() {
      var width = this.state.resizedContainerWidth || this.state.containerWidth;
      return width <= MIN_CONTAINER_WIDTH;
    }
  }, {
    key: "render",
    value: function render() {
      var resizable = this.props.resizable;
      var _this$state = this.state,
        isResizing = _this$state.isResizing,
        containerWidth = _this$state.containerWidth,
        resizedContainerWidth = _this$state.resizedContainerWidth;
      var width = isResizing ? resizedContainerWidth : containerWidth;
      var containerAttrs = {
        className: 'm-tree',
        ref: this._refTreeContainer
      };
      if (width && resizable) {
        containerAttrs.style = {
          width: "".concat(width, "px")
        };
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", containerAttrs, this.renderHeader(), this.renderList(), this.renderLoadingSpinner(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-tree__resize-handler",
        onMouseDown: this.addWidthChangeListener
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this._refPopupContainer
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ContentTree.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  currentLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCollapseAllItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onClickItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  resizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
ContentTree.defaultProps = {
  subitemsLoadLimit: null,
  onClickItem: function onClickItem() {}
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/header/header.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/header/header.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _popup_actions_popup_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup-actions/popup.actions */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/popup-actions/popup.actions.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");






var Header = function Header(_ref) {
  var isCollapsed = _ref.isCollapsed,
    toggleCollapseTree = _ref.toggleCollapseTree,
    actions = _ref.actions,
    popupRef = _ref.popupRef;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
  var headerTitle = Translator.trans(/*@Desc("Content tree")*/'content_tree.header', {}, 'ibexa_content_tree');
  var renderCollapseButton = function renderCollapseButton() {
    var iconName = isCollapsed ? 'caret-next' : 'caret-back';
    var caretIconClass = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--tiny': isCollapsed,
      'ibexa-icon--small': !isCollapsed
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "ibexa-btn btn ibexa-btn--no-text ibexa-btn--tertiary c-header__toggle-btn",
      onClick: toggleCollapseTree
    }, isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "content-tree",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: caretIconClass
    }));
  };
  if (isCollapsed) {
    return renderCollapseButton();
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-header"
  }, renderCollapseButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-header__name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "content-tree",
    extraClasses: "ibexa-icon--small"
  }), headerTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-header__options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_actions_popup_actions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    listRef: popupRef,
    options: actions
  })));
};
Header.propTypes = {
  isCollapsed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  toggleCollapseTree: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  actions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  popupRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_notification_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _window$ibexa;
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
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






var ListItem = /*#__PURE__*/function (_Component) {
  function ListItem(props) {
    var _this;
    _classCallCheck(this, ListItem);
    _this = _callSuper(this, ListItem, [props]);
    _this.toggleExpandedState = _this.toggleExpandedState.bind(_this);
    _this.cancelLoadingState = _this.cancelLoadingState.bind(_this);
    _this.loadMoreSubitems = _this.loadMoreSubitems.bind(_this);
    _this.handleAfterExpandedStateChange = _this.handleAfterExpandedStateChange.bind(_this);
    _this.adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getAdminUiConfig)();
    _this.secondaryItemActions = _this.getSecondaryItemActions();
    _this.sortedActions = _this.getSortedActions();
    _this.state = {
      isExpanded: !!props.subitems.length,
      isLoading: false
    };
    return _this;
  }
  _inherits(ListItem, _Component);
  return _createClass(ListItem, [{
    key: "getSecondaryItemActions",
    value: function getSecondaryItemActions() {
      var secondaryItemActions = this.adminUiConfig.contentTreeWidget.secondaryItemActions;
      if (!secondaryItemActions) {
        return [];
      }
      return _toConsumableArray(secondaryItemActions).sort(function (prefixActionA, prefixActionB) {
        return prefixActionB.priority - prefixActionA.priority;
      });
    }
  }, {
    key: "getSortedActions",
    value: function getSortedActions() {
      var itemActions = this.adminUiConfig.contentTreeWidget.itemActions;
      var actions = itemActions ? _toConsumableArray(itemActions) : [];
      return actions.sort(function (actionA, actionB) {
        return actionB.priority - actionA.priority;
      });
    }
  }, {
    key: "cancelLoadingState",
    value: function cancelLoadingState() {
      this.setState(function () {
        return {
          isLoading: false
        };
      });
    }
  }, {
    key: "toggleExpandedState",
    value: function toggleExpandedState() {
      var _this2 = this;
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
      var _this$props = this.props,
        currentPath = _this$props.path,
        treeMaxDepth = _this$props.treeMaxDepth;
      var currentDepth = currentPath.split(',').length - 1;
      if (currentDepth >= treeMaxDepth) {
        var notificationMessage = Translator.trans(/*@Desc("Cannot load sub-items for this Location because you reached max tree depth.")*/'expand_item.limit.message', {}, 'ibexa_content_tree');
        (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_notification_helper__WEBPACK_IMPORTED_MODULE_3__.showWarningNotification)(notificationMessage);
        return;
      }
      this.setState(function (state) {
        return {
          isExpanded: !state.isExpanded
        };
      }, function () {
        var _this2$props = _this2.props,
          afterItemToggle = _this2$props.afterItemToggle,
          path = _this2$props.path;
        afterItemToggle(path, _this2.state.isExpanded);
        _this2.handleAfterExpandedStateChange();
      });
    }
  }, {
    key: "handleAfterExpandedStateChange",
    value: function handleAfterExpandedStateChange() {
      var loadInitialItems = this.state.isExpanded && !this.props.subitems.length;
      if (loadInitialItems) {
        this.loadMoreSubitems();
      }
    }
  }, {
    key: "loadMoreSubitems",
    value: function loadMoreSubitems() {
      var _this3 = this;
      var _this$props2 = this.props,
        subitems = _this$props2.subitems,
        subitemsLimit = _this$props2.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;
      if (this.state.isLoading || subitemsLimitReached) {
        return;
      }
      var _this$props3 = this.props,
        path = _this$props3.path,
        locationId = _this$props3.locationId,
        subitemsLoadLimit = _this$props3.subitemsLoadLimit,
        loadMoreSubitems = _this$props3.loadMoreSubitems;
      this.setState(function () {
        return {
          isLoading: true
        };
      }, function () {
        return loadMoreSubitems({
          path: path,
          parentLocationId: locationId,
          offset: subitems.length,
          limit: subitemsLoadLimit
        }, _this3.cancelLoadingState);
      });
    }
  }, {
    key: "checkCanLoadMore",
    value: function checkCanLoadMore() {
      var _this$props4 = this.props,
        subitems = _this$props4.subitems,
        totalSubitemsCount = _this$props4.totalSubitemsCount;
      return subitems.length < totalSubitemsCount;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props5 = this.props,
        contentTypeIdentifier = _this$props5.contentTypeIdentifier,
        locationId = _this$props5.locationId;
      var iconAttrs = {
        extraClasses: 'ibexa-icon--small ibexa-icon--dark'
      };
      if (!this.state.isLoading || this.props.subitems.length) {
        if (locationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.SYSTEM_ROOT_LOCATION_ID) {
          iconAttrs.customPath = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__.getContentTypeIconUrl)('folder');
        } else {
          iconAttrs.customPath = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__.getContentTypeIconUrl)(contentTypeIdentifier) || (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_4__.getContentTypeIconUrl)('file');
        }
      } else {
        iconAttrs.name = 'spinner';
        iconAttrs.extraClasses = "".concat(iconAttrs.extraClasses, " ibexa-spin");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-list-item__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], iconAttrs));
    }
  }, {
    key: "renderLoadMoreBtn",
    value: function renderLoadMoreBtn() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
      var _this$props6 = this.props,
        subitems = _this$props6.subitems,
        subitemsLimit = _this$props6.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;
      if (!this.state.isExpanded || subitemsLimitReached || !this.checkCanLoadMore() || !subitems.length) {
        return null;
      }
      var isLoading = this.state.isLoading;
      var seeMoreLabel = Translator.trans(/*@Desc("See more")*/'see_more', {}, 'ibexa_content_tree');
      var loadingMoreLabel = Translator.trans(/*@Desc("Loading more...")*/'loading_more', {}, 'ibexa_content_tree');
      var btnLabel = isLoading ? loadingMoreLabel : seeMoreLabel;
      var loadingSpinner = null;
      if (isLoading) {
        loadingSpinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "spinner",
          extraClasses: "ibexa-spin ibexa-icon--small c-list-item__load-more-btn-spinner"
        });
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-list-item__load-more-btn",
        onClick: this.loadMoreSubitems
      }, loadingSpinner, " ", btnLabel);
    }
  }, {
    key: "renderSubitemsLimitReachedInfo",
    value: function renderSubitemsLimitReachedInfo() {
      var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
      var _this$props7 = this.props,
        subitems = _this$props7.subitems,
        subitemsLimit = _this$props7.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;
      if (!this.state.isExpanded || !subitemsLimitReached) {
        return null;
      }
      var message = Translator.trans(/*@Desc("Loading limit reached")*/'show_more.limit_reached', {}, 'ibexa_content_tree');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__load-more-limit-info"
      }, message);
    }
  }, {
    key: "renderItemLabel",
    value: function renderItemLabel() {
      var _this4 = this;
      var _this$props8 = this.props,
        href = _this$props8.href,
        name = _this$props8.name,
        locationId = _this$props8.locationId,
        indent = _this$props8.indent,
        onClick = _this$props8.onClick;
      if (locationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.SYSTEM_ROOT_LOCATION_ID) {
        return null;
      }
      var togglerClassName = 'c-list-item__toggler';
      var togglerAttrs = {
        className: togglerClassName,
        onClick: this.toggleExpandedState,
        tabIndex: -1
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__row",
        style: {
          '--indent': indent
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__prefix-actions"
      }, this.secondaryItemActions.map(function (action) {
        var ActionComponent = action.component;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: action.id,
          className: "c-list-item__prefix-actions-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionComponent, _this4.props));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", togglerAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "c-list-item__label",
        href: href,
        onClick: onClick
      }, this.renderIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-list-item__label-content",
        title: name
      }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__actions"
      }, this.sortedActions.map(function (action) {
        var ActionComponent = action.component;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: action.id,
          className: "c-list-item__actions-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionComponent, _this4.props));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
        totalSubitemsCount = _this$props9.totalSubitemsCount,
        children = _this$props9.children,
        isInvisible = _this$props9.isInvisible,
        selected = _this$props9.selected;
      var itemClassName = 'c-list-item';
      var itemAttrs = {
        className: itemClassName
      };
      if (totalSubitemsCount) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--has-sub-items");
      }
      if (this.checkCanLoadMore()) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--can-load-more");
      }
      if (this.state.isExpanded) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-expanded");
      }
      if (isInvisible) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-hidden");
      }
      if (selected) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-selected");
      }
      if (this.props.isRootItem) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-root-item");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", itemAttrs, this.renderItemLabel(), children, this.renderLoadMoreBtn(), this.renderSubitemsLimitReachedInfo());
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
ListItem.propTypes = {
  path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  locationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isInvisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isRootItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  indent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  adminUiConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
ListItem.defaultProps = {
  children: null,
  hidden: false,
  isRootItem: false,
  onClick: function onClick() {},
  subitemsLoadLimit: null,
  indent: 0,
  adminUiConfig: (_window$ibexa = window.ibexa) === null || _window$ibexa === void 0 ? void 0 : _window$ibexa.adminUiConfig
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item/list.item.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js");
/* harmony import */ var _Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var _List = function List(_ref) {
  var items = _ref.items,
    loadMoreSubitems = _ref.loadMoreSubitems,
    currentLocationId = _ref.currentLocationId,
    path = _ref.path,
    subitemsLoadLimit = _ref.subitemsLoadLimit,
    subitemsLimit = _ref.subitemsLimit,
    treeMaxDepth = _ref.treeMaxDepth,
    afterItemToggle = _ref.afterItemToggle,
    indent = _ref.indent,
    isRoot = _ref.isRoot,
    onClickItem = _ref.onClickItem;
  var Translator = (0,_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var Routing = (0,_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getRouting)();
  var commonAttrs = {
    loadMoreSubitems: loadMoreSubitems,
    subitemsLoadLimit: subitemsLoadLimit,
    subitemsLimit: subitemsLimit,
    treeMaxDepth: treeMaxDepth,
    afterItemToggle: afterItemToggle,
    onClickItem: onClickItem
  };
  var listAttrs = _objectSpread(_objectSpread({}, commonAttrs), {}, {
    currentLocationId: currentLocationId
  });
  var listItemAttrs = commonAttrs;
  var renderNoSubitemMessage = function renderNoSubitemMessage() {
    var _items = _slicedToArray(items, 1),
      rootLocation = _items[0];
    var isRootLoaded = rootLocation;
    var noSubitemsMessage = Translator.trans(/*@Desc("This Location has no sub-items")*/'no_subitems', {}, 'ibexa_content_tree');
    if (!isRoot || !isRootLoaded || rootLocation.subitems && rootLocation.subitems.length) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list__no-items-message"
    }, noSubitemsMessage);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-list"
  }, items.map(function (item) {
    var hasPreviousPath = path && path.length;
    var locationHref = Routing.generate('ibexa.content.view', {
      contentId: item.contentId,
      locationId: item.locationId
    });
    var itemPath = "".concat(hasPreviousPath ? "".concat(path, ",") : '').concat(item.locationId);
    var subitems = item.subitems;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, item, listItemAttrs, {
      key: item.locationId,
      selected: item.locationId === currentLocationId,
      href: locationHref,
      isRootItem: isRoot,
      onClick: onClickItem.bind(null, item),
      path: itemPath,
      indent: indent
    }), subitems.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_List, _extends({
      path: itemPath,
      items: subitems,
      isRoot: false,
      indent: indent + 1
    }, listAttrs)) : renderNoSubitemMessage());
  }));
};
_List.propTypes = {
  path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  currentLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  indent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  isRoot: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClickItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
_List.defaultProps = {
  indent: 0,
  isRoot: false,
  onClickItem: function onClickItem() {},
  subitemsLoadLimit: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_List);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/popup-actions/popup.actions.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/popup-actions/popup.actions.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
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




var PopupActions = function PopupActions(_ref) {
  var listRef = _ref.listRef,
    options = _ref.options;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var containerItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var toggleExpanded = function toggleExpanded() {
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  };
  var getHeaderActions = function getHeaderActions() {
    var headerActions = window.ibexa.adminUiConfig.contentTreeWidget.headerActions;
    if (!headerActions) {
      return [];
    }
    return _toConsumableArray(headerActions).sort(function (headerActionA, headerActionB) {
      return headerActionB.priority - headerActionA.priority;
    });
  };
  var renderItem = function renderItem(item) {
    var Component = item.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "c-popup-actions__item",
      key: item.id,
      onClick: toggleExpanded
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null));
  };
  var renderItemsList = function renderItemsList() {
    var itemsStyles = {};
    var allOptions = [].concat(_toConsumableArray(options), _toConsumableArray(getHeaderActions()));
    if (containerRef.current) {
      var _containerRef$current = containerRef.current.getBoundingClientRect(),
        left = _containerRef$current.left,
        top = _containerRef$current.top,
        height = _containerRef$current.height;
      itemsStyles.left = left;
      itemsStyles.top = top + height + 8;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-popup-actions__items",
      style: itemsStyles,
      ref: containerItemsRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "c-popup-actions__items-list"
    }, allOptions.map(renderItem)));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpanded) {
      return;
    }
    var onInteractionOutside = function onInteractionOutside(event) {
      if (containerRef.current.contains(event.target) || containerItemsRef.current.contains(event.target)) {
        return;
      }
      setIsExpanded(false);
    };
    document.body.addEventListener('click', onInteractionOutside, false);
    return function () {
      document.body.removeEventListener('click', onInteractionOutside, false);
    };
  }, [isExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-popup-actions",
    ref: containerRef,
    onClick: toggleExpanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "options",
    extraClasses: "ibexa-icon--small"
  })), isExpanded && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(renderItemsList(), listRef.current));
};
PopupActions.propTypes = {
  listRef: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupActions);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentTreeModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_content_tree_content_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content-tree/content.tree */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js");
/* harmony import */ var _services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/content.tree.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
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




var _window = window,
  ibexa = _window.ibexa;
var KEY_CONTENT_TREE_SUBTREE = 'ibexa-content-tree-subtrees';
var ContentTreeModule = /*#__PURE__*/function (_Component) {
  function ContentTreeModule(props) {
    var _this;
    _classCallCheck(this, ContentTreeModule);
    _this = _callSuper(this, ContentTreeModule, [props]);
    _this.setInitialItemsState = _this.setInitialItemsState.bind(_this);
    _this.loadMoreSubitems = _this.loadMoreSubitems.bind(_this);
    _this.updateSubtreeAfterItemToggle = _this.updateSubtreeAfterItemToggle.bind(_this);
    _this.handleCollapseAllItems = _this.handleCollapseAllItems.bind(_this);
    _this.limitSubitemsInSubtree = _this.limitSubitemsInSubtree.bind(_this);
    _this.refreshContentTree = _this.refreshContentTree.bind(_this);
    _this.getLoadSubtreeParams = _this.getLoadSubtreeParams.bind(_this);
    try {
      var savedSubtree = _this.readSubtree();
      _this.items = props.preloadedLocations;
      _this.subtree = savedSubtree ? savedSubtree : _this.generateInitialSubtree();
      _this.expandCurrentLocationInSubtree();
      _this.clipTooDeepSubtreeBranches(_this.subtree[0], props.treeMaxDepth - 1);
      _this.subtree[0].children.forEach(_this.limitSubitemsInSubtree);
      _this.saveSubtree();
    } catch (error) {
      _this.items = [];
      _this.subtree = _this.generateInitialSubtree();
      _this.saveSubtree();
    }
    return _this;
  }
  _inherits(ContentTreeModule, _Component);
  return _createClass(ContentTreeModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      document.body.addEventListener('ibexa-content-tree-refresh', this.refreshContentTree, false);
      if (this.items.length) {
        this.subtree = this.generateSubtree(this.items, true);
        this.saveSubtree();
        return;
      }
      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this2.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;
      if (prevProps.sort.sortClause !== this.props.sort.sortClause || prevProps.sort.sortOrder !== this.props.sort.sortOrder) {
        (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
          _this3.setInitialItemsState(loadedSubtree[0]);
        });
      }
    }
  }, {
    key: "setInitialItemsState",
    value: function setInitialItemsState(location) {
      this.items = [location];
      this.subtree = this.generateSubtree(this.items, true);
      this.saveSubtree();
      this.forceUpdate();
    }
  }, {
    key: "loadMoreSubitems",
    value: function loadMoreSubitems(_ref, successCallback) {
      var parentLocationId = _ref.parentLocationId,
        offset = _ref.offset,
        limit = _ref.limit,
        path = _ref.path;
      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadLocationItems)(this.props.restInfo, parentLocationId, this.updateLocationsStateAfterLoadingMoreItems.bind(this, path, successCallback), limit, offset);
    }
  }, {
    key: "refreshContentTree",
    value: function refreshContentTree() {
      var _this4 = this;
      this.items = [];
      this.forceUpdate();
      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this4.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "updateLocationsStateAfterLoadingMoreItems",
    value: function updateLocationsStateAfterLoadingMoreItems(path, successCallback, location) {
      var item = this.findItem(this.items, path.split(','));
      if (!item) {
        return;
      }
      item.subitems = [].concat(_toConsumableArray(item.subitems), _toConsumableArray(location.subitems));
      this.updateSubtreeAfterLoadMoreItems(path);
      successCallback();
      this.forceUpdate();
    }
  }, {
    key: "updateSubtreeAfterLoadMoreItems",
    value: function updateSubtreeAfterLoadMoreItems(path) {
      var item = this.findItem(this.items, path.split(','));
      this.updateItemInSubtree(this.subtree[0], item, path.split(','));
      this.saveSubtree();
    }
  }, {
    key: "updateSubtreeAfterItemToggle",
    value: function updateSubtreeAfterItemToggle(path, isExpanded) {
      var item = this.findItem(this.items, path.split(','));
      if (isExpanded) {
        this.addItemToSubtree(this.subtree[0], item, path.split(','));
      } else {
        this.removeItemFromSubtree(this.subtree[0], item, path.split(','));
      }
      this.saveSubtree();
      this.props.afterItemToggle(item, isExpanded);
    }
  }, {
    key: "addItemToSubtree",
    value: function addItemToSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);
      if (!parentSubtree) {
        return;
      }
      var _this$props = this.props,
        subitemsLoadLimit = _this$props.subitemsLoadLimit,
        subitemsLimit = _this$props.subitemsLimit;
      var limit = Math.ceil(item.subitems.length / subitemsLoadLimit) * subitemsLoadLimit;
      parentSubtree.children.push({
        '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
        locationId: item.locationId,
        limit: Math.min(subitemsLimit, limit),
        offset: 0,
        children: []
      });
    }
  }, {
    key: "removeItemFromSubtree",
    value: function removeItemFromSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);
      if (!parentSubtree) {
        return;
      }
      var index = parentSubtree.children.findIndex(function (element) {
        return element.locationId === item.locationId;
      });
      if (index > -1) {
        parentSubtree.children.splice(index, 1);
      }
    }
  }, {
    key: "updateItemInSubtree",
    value: function updateItemInSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);
      if (!parentSubtree) {
        return;
      }
      var index = parentSubtree.children.findIndex(function (element) {
        return element.locationId === item.locationId;
      });
      if (index > -1) {
        parentSubtree.children[index].limit = item.subitems.length;
      }
    }
  }, {
    key: "readSubtree",
    value: function readSubtree() {
      var readSubtree = this.props.readSubtree;
      if (typeof readSubtree === 'function') {
        return readSubtree();
      }
      var _this$props2 = this.props,
        rootLocationId = _this$props2.rootLocationId,
        userId = _this$props2.userId;
      var savedSubtrees = localStorage.getItem(KEY_CONTENT_TREE_SUBTREE);
      var subtrees = savedSubtrees ? JSON.parse(savedSubtrees) : null;
      var userSubtrees = subtrees ? subtrees[userId] : null;
      var savedSubtree = userSubtrees ? userSubtrees[rootLocationId] : null;
      var subtree = savedSubtree ? JSON.parse(savedSubtree) : null;
      return subtree;
    }
  }, {
    key: "saveSubtree",
    value: function saveSubtree() {
      var _this$props3 = this.props,
        rootLocationId = _this$props3.rootLocationId,
        userId = _this$props3.userId;
      var savedSubtreesStringified = localStorage.getItem(KEY_CONTENT_TREE_SUBTREE);
      var subtrees = savedSubtreesStringified ? JSON.parse(savedSubtreesStringified) : {};
      if (!subtrees[userId]) {
        subtrees[userId] = {};
      }
      subtrees[userId][rootLocationId] = JSON.stringify(this.subtree);
      localStorage.setItem(KEY_CONTENT_TREE_SUBTREE, JSON.stringify(subtrees));
    }
  }, {
    key: "findParentSubtree",
    value: function findParentSubtree(subtree, path) {
      if (path.length < 2) {
        return;
      }
      path.shift();
      path.pop();
      return path.reduce(function (subtreeChild, locationId) {
        return subtreeChild.children.find(function (element) {
          return element.locationId === parseInt(locationId, 10);
        });
      }, subtree);
    }
  }, {
    key: "expandCurrentLocationInSubtree",
    value: function expandCurrentLocationInSubtree() {
      var _this$props4 = this.props,
        rootLocationId = _this$props4.rootLocationId,
        currentLocationPath = _this$props4.currentLocationPath;
      var path = currentLocationPath.split('/').filter(function (id) {
        return !!id;
      });
      var rootLocationIdIndex = path.findIndex(function (element) {
        return parseInt(element, 10) === rootLocationId;
      });
      if (rootLocationIdIndex === -1) {
        return;
      }
      var pathStartingAfterRootLocation = path.slice(rootLocationIdIndex - path.length + 1);
      var pathWithoutLeaf = pathStartingAfterRootLocation.slice(0, pathStartingAfterRootLocation.length - 1);
      this.expandPathInSubtree(this.subtree[0], pathWithoutLeaf);
    }
  }, {
    key: "expandPathInSubtree",
    value: function expandPathInSubtree(subtree, path) {
      if (!path.length) {
        return;
      }
      var locationId = parseInt(path[0], 10);
      var nextSubtree = subtree.children.find(function (element) {
        return element.locationId === locationId;
      });
      if (!nextSubtree) {
        nextSubtree = {
          '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
          locationId: locationId,
          limit: this.props.subitemsLimit,
          offset: 0,
          children: []
        };
        subtree.children.push(nextSubtree);
      }
      path.shift();
      this.expandPathInSubtree(nextSubtree, path);
    }
  }, {
    key: "clipTooDeepSubtreeBranches",
    value: function clipTooDeepSubtreeBranches(subtree, maxDepth) {
      var _this5 = this;
      if (maxDepth <= 0) {
        subtree.children = [];
        return;
      }
      subtree.children.forEach(function (subtreeChild) {
        return _this5.clipTooDeepSubtreeBranches(subtreeChild, maxDepth - 1);
      });
    }
  }, {
    key: "limitSubitemsInSubtree",
    value: function limitSubitemsInSubtree(subtree) {
      subtree.limit = Math.min(this.props.subitemsLimit, subtree.limit);
      subtree.children.forEach(this.limitSubitemsInSubtree);
    }
  }, {
    key: "generateInitialSubtree",
    value: function generateInitialSubtree() {
      return [{
        '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
        locationId: this.props.rootLocationId,
        limit: this.props.subitemsLoadLimit,
        offset: 0,
        children: []
      }];
    }
  }, {
    key: "generateSubtree",
    value: function generateSubtree(items, isRoot) {
      var itemsWithoutLeafs = [];
      var _this$props5 = this.props,
        subitemsLoadLimit = _this$props5.subitemsLoadLimit,
        subitemsLimit = _this$props5.subitemsLimit;
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var subitemsCount = item.subitems.length;
          var isLeaf = !subitemsCount;
          if (!isLeaf || isRoot) {
            var limit = subitemsCount ? Math.ceil(subitemsCount / subitemsLoadLimit) * subitemsLoadLimit : subitemsLoadLimit;
            itemsWithoutLeafs.push({
              '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
              locationId: item.locationId,
              limit: Math.min(subitemsLimit, limit),
              offset: 0,
              children: this.generateSubtree(item.subitems, false)
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return itemsWithoutLeafs;
    }
  }, {
    key: "findItem",
    value: function findItem(items, path) {
      var isLast = path.length === 1;
      var item = items.find(function (element) {
        return element.locationId === parseInt(path[0], 10);
      });
      if (!item) {
        return null;
      }
      if (isLast) {
        return item;
      }
      if (!(Object.prototype.hasOwnProperty.call(item, 'subitems') && Array.isArray(item.subitems))) {
        return null;
      }
      path.shift();
      return this.findItem(item.subitems, path);
    }
  }, {
    key: "getCurrentLocationId",
    value: function getCurrentLocationId() {
      var currentLocationIdString = this.props.currentLocationPath.split('/').filter(function (id) {
        return !!id;
      }).pop();
      return parseInt(currentLocationIdString, 10);
    }
  }, {
    key: "handleCollapseAllItems",
    value: function handleCollapseAllItems() {
      var _this6 = this;
      this.items = [];
      this.forceUpdate();
      this.subtree = this.generateInitialSubtree();
      this.saveSubtree();
      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this6.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "getLoadSubtreeParams",
    value: function getLoadSubtreeParams() {
      return {
        token: this.props.restInfo.token,
        siteaccess: this.props.restInfo.siteaccess,
        accessToken: this.props.restInfo.accessToken,
        subtree: this.subtree,
        sortClause: this.props.sort.sortClause,
        sortOrder: this.props.sort.sortOrder
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        onClickItem = _this$props6.onClickItem,
        subitemsLimit = _this$props6.subitemsLimit,
        subitemsLoadLimit = _this$props6.subitemsLoadLimit,
        treeMaxDepth = _this$props6.treeMaxDepth,
        userId = _this$props6.userId,
        resizable = _this$props6.resizable;
      var attrs = {
        items: this.items,
        currentLocationId: this.getCurrentLocationId(),
        subitemsLimit: subitemsLimit,
        subitemsLoadLimit: subitemsLoadLimit,
        treeMaxDepth: treeMaxDepth,
        loadMoreSubitems: this.loadMoreSubitems,
        afterItemToggle: this.updateSubtreeAfterItemToggle,
        onCollapseAllItems: this.handleCollapseAllItems,
        onClickItem: onClickItem,
        userId: userId,
        resizable: resizable
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_content_tree_content_tree__WEBPACK_IMPORTED_MODULE_2__["default"], attrs);
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ContentTreeModule.propTypes = {
  rootLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  currentLocationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  preloadedLocations: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    token: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    siteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    accessToken: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }).isRequired,
  onClickItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  readSubtree: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    sortClause: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sortOrder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  resizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ContentTreeModule.defaultProps = {
  preloadedLocations: [],
  rootLocationId: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.treeRootLocationId,
  subitemsLimit: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.childrenLoadMaxLimit,
  subitemsLoadLimit: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.loadMoreLimit,
  treeMaxDepth: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.treeMaxDepth,
  afterItemToggle: function afterItemToggle() {},
  sort: {},
  resizable: true,
  onClickItem: function onClickItem() {},
  readSubtree: null
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadLocationItems: () => (/* binding */ loadLocationItems),
/* harmony export */   loadSubtree: () => (/* binding */ loadSubtree)
/* harmony export */ });
/* harmony import */ var _Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Resources/public/js/scripts/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");
/* harmony import */ var _common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/notification.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");



var ENDPOINT_LOAD_SUBITEMS = '/api/ibexa/v2/location/tree/load-subitems';
var ENDPOINT_LOAD_SUBTREE = '/api/ibexa/v2/location/tree/load-subtree';
var DEFAULT_INSTANCE_URL = window.location.origin;
var loadLocationItems = function loadLocationItems(_ref, parentLocationId, callback) {
  var siteaccess = _ref.siteaccess,
    accessToken = _ref.accessToken,
    _ref$instanceUrl = _ref.instanceUrl,
    instanceUrl = _ref$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref$instanceUrl;
  var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var request = new Request("".concat(ENDPOINT_LOAD_SUBITEMS, "/").concat(parentLocationId, "/").concat(limit, "/").concat(offset), {
    method: 'GET',
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin',
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeNode+json'
      }
    })
  });
  fetch(request).then(_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (data) {
    var location = data.ContentTreeNode;
    location.children = location.children.map(mapChildrenToSubitems);
    return mapChildrenToSubitems(location);
  }).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.showErrorNotification);
};
var loadSubtree = function loadSubtree(_ref2, callback) {
  var token = _ref2.token,
    siteaccess = _ref2.siteaccess,
    accessToken = _ref2.accessToken,
    subtree = _ref2.subtree,
    sortClause = _ref2.sortClause,
    sortOrder = _ref2.sortOrder,
    _ref2$instanceUrl = _ref2.instanceUrl,
    instanceUrl = _ref2$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref2$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_LOAD_SUBTREE);
  if (sortClause && sortOrder) {
    path += "?sortClause=".concat(sortClause, "&sortOrder=").concat(sortOrder);
  }
  var request = new Request(path, {
    method: 'POST',
    mode: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin',
    body: JSON.stringify({
      LoadSubtreeRequest: {
        '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest',
        nodes: subtree
      }
    }),
    headers: (0,_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeRoot+json',
        'Content-Type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest+json'
      }
    })
  });
  fetch(request).then(_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_1__.handleRequestResponse).then(function (data) {
    var loadedSubtree = data.ContentTreeRoot.ContentTreeNodeList;
    return _mapChildrenToSubitemsDeep(loadedSubtree);
  }).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.showErrorNotification);
};
var _mapChildrenToSubitemsDeep = function mapChildrenToSubitemsDeep(tree) {
  return tree.map(function (subtree) {
    mapChildrenToSubitems(subtree);
    subtree.subitems = _mapChildrenToSubitemsDeep(subtree.subitems);
    return subtree;
  });
};
var mapChildrenToSubitems = function mapChildrenToSubitems(location) {
  location.totalSubitemsCount = location.totalChildrenCount;
  location.subitems = location.children;
  delete location.totalChildrenCount;
  delete location.children;
  delete location.displayLimit;
  return location;
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContentLink: () => (/* binding */ getContentLink),
/* harmony export */   getPermissions: () => (/* binding */ getPermissions),
/* harmony export */   isUser: () => (/* binding */ isUser)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var getContentLink = function getContentLink(item) {
  var locationHref = window.Routing.generate('ibexa.content.view', {
    contentId: item.contentId,
    locationId: item.locationId
  });
  return locationHref;
};
var isUser = function isUser(contentTypesInfoMap, _ref) {
  var ContentInfo = _ref.ContentInfo;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)();
  var contentType = contentTypesInfoMap[ContentInfo.Content.ContentType._href];
  return adminUiConfig.userContentTypes.includes(contentType.identifier);
};
var getPermissions = function getPermissions() {
  var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var permissionName = arguments.length > 1 ? arguments[1] : undefined;
  return permissions.find(function (_ref2) {
    var _name = _ref2._name;
    return _name === permissionName;
  });
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/notifications.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/notifications.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotDeletedItemsData: () => (/* binding */ getNotDeletedItemsData)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var getNotDeletedItemsData = function getNotDeletedItemsData(notDeletedItems, deletedItems, isUser) {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
  var output = {
    message: null
  };
  var hadUserContentItemFailed = notDeletedItems.some(isUser);
  var hadNonUserContentItemFailed = notDeletedItems.some(function (item) {
    return !isUser(item);
  });
  if (hadUserContentItemFailed && hadNonUserContentItemFailed) {
    output.message = Translator.trans(/*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be deleted or sent to Trash because you do not have proper user permissions. Contact your Administrator.")*/'bulk_delete.error.message.users_with_nonusers', {
      notDeletedCount: notDeletedItems.length,
      totalCount: deletedItems.length + notDeletedItems.length
    }, 'ibexa_content_tree_ui');
  } else if (hadUserContentItemFailed) {
    output.message = Translator.trans(/*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be deleted because you do not have proper user permissions. Contact your Administrator.")*/'bulk_delete.error.message.users', {
      notDeletedCount: notDeletedItems.length,
      totalCount: deletedItems.length + notDeletedItems.length
    }, 'ibexa_content_tree_ui');
  } else {
    output.message = Translator.trans(/*@Desc("%notDeletedCount% of the %totalCount% selected item(s) could not be sent to Trash because you do not have proper user permissions. Contact your Administrator.")*/'bulk_delete.error.message.nonusers', {
      notDeletedCount: notDeletedItems.length,
      totalCount: deletedItems.length + notDeletedItems.length
    }, 'ibexa_content_tree_ui');
  }
  return output;
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/tree.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/tree.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemToSubtree: () => (/* binding */ addItemToSubtree),
/* harmony export */   clipTooDeepSubtreeBranches: () => (/* binding */ _clipTooDeepSubtreeBranches),
/* harmony export */   expandCurrentLocationInSubtree: () => (/* binding */ expandCurrentLocationInSubtree),
/* harmony export */   findItem: () => (/* binding */ _findItem),
/* harmony export */   generateInitialSubtree: () => (/* binding */ generateInitialSubtree),
/* harmony export */   generateSubtree: () => (/* binding */ _generateSubtree),
/* harmony export */   getLoadSubtreeParams: () => (/* binding */ getLoadSubtreeParams),
/* harmony export */   limitSubitemsInSubtree: () => (/* binding */ _limitSubitemsInSubtree),
/* harmony export */   removeItemFromSubtree: () => (/* binding */ removeItemFromSubtree),
/* harmony export */   updateItemInSubtree: () => (/* binding */ updateItemInSubtree)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _findItem = function findItem(items, originalPath) {
  var path = _toConsumableArray(originalPath);
  var isLeaf = path.length === 1;
  var item = items.find(function (element) {
    return element.locationId === parseInt(path[0], 10);
  });
  if (!item) {
    return null;
  }
  if (isLeaf) {
    return item;
  }
  if (!Array.isArray(item.subitems)) {
    return null;
  }
  path.shift();
  return _findItem(item.subitems, path);
};

var generateSubtreeNode = function generateSubtreeNode(_ref) {
  var locationId = _ref.locationId,
    limit = _ref.limit,
    offset = _ref.offset,
    children = _ref.children;
  return {
    '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
    locationId: locationId,
    limit: limit,
    offset: offset !== null && offset !== void 0 ? offset : 0,
    children: children !== null && children !== void 0 ? children : []
  };
};
var _expandPathInSubtree = function expandPathInSubtree(_ref2) {
  var subtree = _ref2.subtree,
    originalPath = _ref2.path,
    subitemsLimit = _ref2.subitemsLimit;
  var path = _toConsumableArray(originalPath);
  if (!path.length) {
    return;
  }
  var locationId = parseInt(path[0], 10);
  var nextSubtree = subtree.children.find(function (subtreeChild) {
    return subtreeChild.locationId === locationId;
  });
  if (!nextSubtree) {
    nextSubtree = generateSubtreeNode({
      locationId: locationId,
      limit: subitemsLimit
    });
    subtree.children.push(nextSubtree);
  }
  path.shift();
  _expandPathInSubtree({
    subtree: nextSubtree,
    path: path,
    subitemsLimit: subitemsLimit
  });
};
var findParentSubtree = function findParentSubtree(subtree, originalPath) {
  var path = _toConsumableArray(originalPath);
  if (path.length < 2) {
    return;
  }
  path.shift();
  path.pop();
  return path.reduce(function (subtreeChild, locationId) {
    return subtreeChild.children.find(function (element) {
      return element.locationId === parseInt(locationId, 10);
    });
  }, subtree);
};
var generateInitialSubtree = function generateInitialSubtree(_ref3) {
  var rootLocationId = _ref3.rootLocationId,
    subitemsLoadLimit = _ref3.subitemsLoadLimit;
  return [generateSubtreeNode({
    locationId: rootLocationId,
    limit: subitemsLoadLimit
  })];
};
var getLoadSubtreeParams = function getLoadSubtreeParams(_ref4) {
  var subtree = _ref4.subtree,
    restInfo = _ref4.restInfo,
    sort = _ref4.sort;
  return {
    token: restInfo.token,
    siteaccess: restInfo.siteaccess,
    accessToken: restInfo.accessToken,
    instanceUrl: restInfo.instanceUrl,
    subtree: subtree.current,
    sortClause: sort.sortClause,
    sortOrder: sort.sortOrder
  };
};
var expandCurrentLocationInSubtree = function expandCurrentLocationInSubtree(_ref5) {
  var subtree = _ref5.subtree,
    rootLocationId = _ref5.rootLocationId,
    currentLocationPath = _ref5.currentLocationPath,
    subitemsLimit = _ref5.subitemsLimit;
  var path = currentLocationPath.split('/').filter(function (id) {
    return !!id;
  });
  var rootLocationIdIndex = path.findIndex(function (element) {
    return parseInt(element, 10) === rootLocationId;
  });
  if (rootLocationIdIndex === -1) {
    return;
  }
  var pathStartingAfterRootLocation = path.slice(rootLocationIdIndex - path.length + 1);
  var pathWithoutLeaf = pathStartingAfterRootLocation.slice(0, pathStartingAfterRootLocation.length - 1);
  _expandPathInSubtree({
    subtree: subtree[0],
    path: pathWithoutLeaf,
    subitemsLimit: subitemsLimit
  });
};
var _clipTooDeepSubtreeBranches = function clipTooDeepSubtreeBranches(_ref6) {
  var subtree = _ref6.subtree,
    maxDepth = _ref6.maxDepth;
  if (maxDepth <= 0) {
    subtree.children = [];
    return;
  }
  subtree.children.forEach(function (subtreeChild) {
    return _clipTooDeepSubtreeBranches({
      subtree: subtreeChild,
      maxDepth: maxDepth - 1
    });
  });
};

var _limitSubitemsInSubtree = function limitSubitemsInSubtree(_ref7) {
  var subtree = _ref7.subtree,
    subitemsLimit = _ref7.subitemsLimit;
  subtree.limit = Math.min(subitemsLimit, subtree.limit);
  subtree.children.forEach(function (subtreeChild) {
    return _limitSubitemsInSubtree({
      subtree: subtreeChild,
      subitemsLimit: subitemsLimit
    });
  });
};

var _generateSubtree = function generateSubtree(_ref8) {
  var items = _ref8.items,
    isRoot = _ref8.isRoot,
    subitemsLoadLimit = _ref8.subitemsLoadLimit,
    subitemsLimit = _ref8.subitemsLimit;
  var itemsWithoutLeafs = [];
  var _iterator = _createForOfIteratorHelper(items),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var subitemsCount = item.subitems.length;
      var isLeaf = !subitemsCount;
      if (!isLeaf || isRoot) {
        var limit = subitemsCount ? Math.ceil(subitemsCount / subitemsLoadLimit) * subitemsLoadLimit : subitemsLoadLimit;
        itemsWithoutLeafs.push(generateSubtreeNode({
          locationId: item.locationId,
          limit: Math.min(subitemsLimit, limit),
          children: _generateSubtree({
            items: item.subitems,
            isRoot: false,
            subitemsLoadLimit: subitemsLoadLimit,
            subitemsLimit: subitemsLimit
          })
        }));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return itemsWithoutLeafs;
};

var addItemToSubtree = function addItemToSubtree(subtree, item, path, _ref9) {
  var subitemsLoadLimit = _ref9.subitemsLoadLimit,
    subitemsLimit = _ref9.subitemsLimit;
  var parentSubtree = findParentSubtree(subtree, path);
  if (!parentSubtree) {
    return;
  }
  var limit = Math.ceil(item.subitems.length / subitemsLoadLimit) * subitemsLoadLimit;
  parentSubtree.children.push(generateSubtreeNode({
    locationId: item.locationId,
    limit: Math.min(subitemsLimit, limit)
  }));
};
var removeItemFromSubtree = function removeItemFromSubtree(subtree, item, path) {
  var parentSubtree = findParentSubtree(subtree, path);
  if (!parentSubtree) {
    return;
  }
  var index = parentSubtree.children.findIndex(function (element) {
    return element.locationId === item.locationId;
  });
  if (index > -1) {
    parentSubtree.children.splice(index, 1);
  }
};
var updateItemInSubtree = function updateItemInSubtree(subtree, item, path) {
  var subitemsLoadLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var parentSubtree = findParentSubtree(subtree, path);
  if (!parentSubtree) {
    return;
  }
  var index = parentSubtree.children.findIndex(function (element) {
    return element.locationId === item.locationId;
  });
  if (index > -1) {
    parentSubtree.children[index].limit = Math.max(item.subitems.length, subitemsLoadLimit);
  }
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToBookmarks: () => (/* binding */ addToBookmarks),
/* harmony export */   buildBulkRequest: () => (/* binding */ buildBulkRequest),
/* harmony export */   copyElements: () => (/* binding */ copyElements),
/* harmony export */   deleteElements: () => (/* binding */ deleteElements),
/* harmony export */   findLocationsById: () => (/* binding */ findLocationsById),
/* harmony export */   findSuggestions: () => (/* binding */ findSuggestions),
/* harmony export */   loadContentTypes: () => (/* binding */ loadContentTypes),
/* harmony export */   loadLocationItemExtendedInfo: () => (/* binding */ loadLocationItemExtendedInfo),
/* harmony export */   loadLocationItems: () => (/* binding */ loadLocationItems),
/* harmony export */   loadLocationsWithPermissions: () => (/* binding */ loadLocationsWithPermissions),
/* harmony export */   loadSubtree: () => (/* binding */ loadSubtree),
/* harmony export */   moveElements: () => (/* binding */ moveElements),
/* harmony export */   removeFromBookmarks: () => (/* binding */ removeFromBookmarks)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var _window = window,
  currentLocation = _window.location;
var DEFAULT_INSTANCE_URL = currentLocation.origin;
var ENDPOINT_TRASH_FAKE_LOCATION = '/api/ibexa/v2/content/trash';
var ENDPOINT_CONTENT_TYPES = '/api/ibexa/v2/content/types';
var ENDPOINT_LOAD_SUBITEMS = '/api/ibexa/v2/location/tree/load-subitems';
var ENDPOINT_LOAD_SUBTREE = '/api/ibexa/v2/location/tree/load-subtree';
var ENDPOINT_LOAD_LOCATIONS_WITH_PERMISSIONS = '/api/ibexa/v2/module/universal-discovery/locations';
var ENDPOINT_LOCATION = '/api/ibexa/v2/content/locations';
var ENDPOINT_USER = '/api/ibexa/v2/user/users';
var ENDPOINT_CREATE_VIEW = '/api/ibexa/v2/views';
var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
var HEADERS_CREATE_VIEW = {
  Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
  'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1'
};
var ENDPOINT_BULK = '/api/ibexa/v2/bulk';
var HEADERS_BULK = {
  Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
  'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json'
};
var QUERY_LIMIT = 50;
var AGGREGATIONS_LIMIT = 4;
var getItemPath = function getItemPath(item, path) {
  var hasPreviousPath = path && path.length;
  var itemPath = "".concat(hasPreviousPath ? "".concat(path, "/") : '').concat(item.locationId);
  return itemPath;
};
var _mapChildrenToSubitemsDeep = function mapChildrenToSubitemsDeep(tree, path) {
  return tree.map(function (subtree) {
    subtree.path = getItemPath(subtree, path);
    mapChildrenToSubitems(subtree);
    subtree.subitems = _mapChildrenToSubitemsDeep(subtree.subitems, subtree.path);
    return subtree;
  });
};
var mapChildrenToSubitems = function mapChildrenToSubitems(location) {
  location.totalSubitemsCount = location.totalChildrenCount;
  location.subitems = location.children;
  delete location.totalChildrenCount;
  delete location.children;
  delete location.displayLimit;
  return location;
};
var loadContentTypes = function loadContentTypes(siteaccess) {
  var instanceUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_INSTANCE_URL;
  var path = "".concat(instanceUrl).concat(ENDPOINT_CONTENT_TYPES);
  var request = new Request(path, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json',
      'X-Siteaccess': siteaccess
    },
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse);
};
var findLocationsById = function findLocationsById(_ref) {
  var token = _ref.token,
    siteaccess = _ref.siteaccess,
    accessToken = _ref.accessToken,
    id = _ref.id,
    _ref$limit = _ref.limit,
    limit = _ref$limit === void 0 ? QUERY_LIMIT : _ref$limit,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset,
    _ref$instanceUrl = _ref.instanceUrl,
    instanceUrl = _ref$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW);
  var body = JSON.stringify({
    ViewInput: {
      identifier: "tree-builder-locations-by-id-".concat(id),
      "public": false,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {
          SectionIdentifier: 'ascending'
        },
        Filter: {
          LocationIdCriterion: id
        },
        limit: limit,
        offset: offset
      }
    }
  });
  var request = new Request(path, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: body,
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (response) {
    return response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
  });
};
var loadLocationsWithPermissions = function loadLocationsWithPermissions(_ref2) {
  var siteaccess = _ref2.siteaccess,
    id = _ref2.id,
    _ref2$instanceUrl = _ref2.instanceUrl,
    instanceUrl = _ref2$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref2$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_LOAD_LOCATIONS_WITH_PERMISSIONS, "?locationIds=").concat(id);
  var request = new Request(path, {
    method: 'GET',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      siteaccess: siteaccess,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.LocationListData+json'
      }
    })
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (_ref3) {
    var LocationList = _ref3.LocationList;
    return LocationList.locations;
  });
};
var loadSubtree = function loadSubtree(_ref4) {
  var token = _ref4.token,
    siteaccess = _ref4.siteaccess,
    accessToken = _ref4.accessToken,
    subtree = _ref4.subtree,
    filter = _ref4.filter,
    sortClause = _ref4.sortClause,
    sortOrder = _ref4.sortOrder,
    _ref4$instanceUrl = _ref4.instanceUrl,
    instanceUrl = _ref4$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref4$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_LOAD_SUBTREE);
  if (sortClause && sortOrder) {
    path += "?sortClause=".concat(sortClause, "&sortOrder=").concat(sortOrder);
  }
  var requestBody = {
    LoadSubtreeRequest: {
      '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest',
      nodes: subtree
    }
  };
  if (filter) {
    requestBody.LoadSubtreeRequest.Filter = filter;
  }
  var request = new Request(path, {
    method: 'POST',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include',
    body: JSON.stringify(requestBody),
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeRoot+json',
        'Content-Type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest+json'
      }
    })
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (data) {
    var loadedSubtree = data.ContentTreeRoot.ContentTreeNodeList;
    return _mapChildrenToSubitemsDeep(loadedSubtree);
  });
};
var loadLocationItems = function loadLocationItems(_ref5) {
  var siteaccess = _ref5.siteaccess,
    accessToken = _ref5.accessToken,
    parentLocationId = _ref5.parentLocationId,
    _ref5$limit = _ref5.limit,
    limit = _ref5$limit === void 0 ? QUERY_LIMIT : _ref5$limit,
    _ref5$offset = _ref5.offset,
    offset = _ref5$offset === void 0 ? 0 : _ref5$offset,
    _ref5$instanceUrl = _ref5.instanceUrl,
    instanceUrl = _ref5$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref5$instanceUrl,
    contentTypeIdentifier = _ref5.contentTypeIdentifier;
  var queryParamsString = contentTypeIdentifier ? "?filter[ContentTypeIdentifierCriterion]=".concat(contentTypeIdentifier) : '';
  var path = "".concat(instanceUrl).concat(ENDPOINT_LOAD_SUBITEMS, "/").concat(parentLocationId, "/").concat(limit, "/").concat(offset).concat(queryParamsString);
  var request = new Request(path, {
    method: 'GET',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeNode+json'
      }
    })
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (data) {
    var location = data.ContentTreeNode;
    location.children = location.children.map(mapChildrenToSubitems);
    return mapChildrenToSubitems(location);
  });
};
var getBulkDeleteUserRequestOperation = function getBulkDeleteUserRequestOperation(contentId) {
  var _getRestInfo = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRestInfo)(),
    instanceUrl = _getRestInfo.instanceUrl;
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_USER, "/").concat(contentId),
    method: 'DELETE'
  };
};
var getBulkMoveRequestOperation = function getBulkMoveRequestOperation(pathString, destination) {
  var _getRestInfo2 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRestInfo)(),
    instanceUrl = _getRestInfo2.instanceUrl;
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_LOCATION).concat(pathString.slice(0, -1)),
    method: 'MOVE',
    headers: {
      Destination: destination
    }
  };
};
var getBulkCopyRequestOperation = function getBulkCopyRequestOperation(pathString, destination) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_LOCATION).concat(pathString.slice(0, -1)),
    method: 'COPY',
    headers: {
      Destination: destination
    }
  };
};
var buildBulkRequest = function buildBulkRequest(requestBodyOperations, _ref6) {
  var token = _ref6.token,
    siteaccess = _ref6.siteaccess,
    accessToken = _ref6.accessToken,
    _ref6$instanceUrl = _ref6.instanceUrl,
    instanceUrl = _ref6$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref6$instanceUrl;
  var path = "".concat(instanceUrl).concat(ENDPOINT_BULK);
  var request = new Request(path, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_BULK
    }),
    body: JSON.stringify({
      bulkOperations: {
        operations: requestBodyOperations
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include'
  });
  return request;
};
var processBulkResponse = function processBulkResponse(items, _ref7) {
  var BulkOperationResponse = _ref7.BulkOperationResponse;
  var operations = BulkOperationResponse.operations;
  var results = Object.entries(operations).reduce(function (itemsMatches, _ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      locationId = _ref9[0],
      response = _ref9[1];
    var respectiveItem = items.find(function (item) {
      return item.id === parseInt(locationId, 10);
    });
    var isSuccess = 200 <= response.statusCode && response.statusCode <= 299;
    if (isSuccess) {
      itemsMatches.success.push(respectiveItem);
    } else {
      itemsMatches.fail.push(respectiveItem);
    }
    return itemsMatches;
  }, {
    success: [],
    fail: []
  });
  return Promise.resolve(results);
};
var moveElements = function moveElements(items, destination, additionalProperties) {
  var operations = {};
  items.forEach(function (_ref10) {
    var id = _ref10.id,
      pathString = _ref10.pathString;
    operations[id] = getBulkMoveRequestOperation(pathString, "".concat(ENDPOINT_LOCATION).concat(destination));
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var copyElements = function copyElements(items, destination, additionalProperties) {
  var operations = {};
  items.forEach(function (_ref11) {
    var id = _ref11.id,
      pathString = _ref11.pathString;
    operations[id] = getBulkCopyRequestOperation(pathString, "".concat(ENDPOINT_LOCATION).concat(destination));
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var deleteElements = function deleteElements(items, additionalProperties) {
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getAdminUiConfig)();
  var contentTypes = additionalProperties.contentTypes;
  var operations = {};
  items.forEach(function (item) {
    var locationId = item.id,
      pathString = item.pathString,
      ContentInfo = item.ContentInfo;
    var contentType = contentTypes[ContentInfo.Content.ContentType._href];
    var isUserContentItem = adminUiConfig.userContentTypes.includes(contentType.identifier);
    if (isUserContentItem) {
      var contentId = ContentInfo.Content._id;
      operations[locationId] = getBulkDeleteUserRequestOperation(contentId);
    } else {
      operations[locationId] = getBulkMoveRequestOperation(pathString, ENDPOINT_TRASH_FAKE_LOCATION);
    }
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var getBulkBookmarkRequestOperation = function getBulkBookmarkRequestOperation(locationId, isAddAction) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  var method = isAddAction ? 'POST' : 'DELETE';
  return {
    uri: "".concat(instanceUrl).concat(ENDPOINT_BOOKMARK, "/").concat(locationId),
    method: method
  };
};
var addToBookmarks = function addToBookmarks(items, additionalProperties) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  var operations = {};
  items.forEach(function (_ref12) {
    var id = _ref12.id,
      locationId = _ref12.locationId;
    operations[id] = getBulkBookmarkRequestOperation(locationId, true, instanceUrl);
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var removeFromBookmarks = function removeFromBookmarks(items, additionalProperties) {
  var instanceUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_INSTANCE_URL;
  var operations = {};
  items.forEach(function (_ref13) {
    var id = _ref13.id,
      locationId = _ref13.locationId;
    operations[id] = getBulkBookmarkRequestOperation(locationId, false, instanceUrl);
  });
  var request = buildBulkRequest(operations, additionalProperties);
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(processBulkResponse.bind(null, items));
};
var findSuggestions = function findSuggestions(parentLocationId, _ref14) {
  var siteaccess = _ref14.siteaccess,
    token = _ref14.token,
    accessToken = _ref14.accessToken,
    _ref14$instanceUrl = _ref14.instanceUrl,
    instanceUrl = _ref14$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref14$instanceUrl;
  var body = JSON.stringify({
    ViewInput: {
      identifier: 'view_with_aggregation',
      LocationQuery: {
        limit: 0,
        offset: 0,
        Filter: {
          ParentLocationIdCriterion: parentLocationId
        },
        Aggregations: [{
          ContentTypeTermAggregation: {
            name: 'suggestions',
            limit: AGGREGATIONS_LIMIT
          }
        }]
      }
    }
  });
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: _objectSpread({}, HEADERS_CREATE_VIEW)
    }),
    body: body,
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (response) {
    var _response$View;
    var suggestions = (_response$View = response.View) === null || _response$View === void 0 || (_response$View = _response$View.Result.aggregations[0]) === null || _response$View === void 0 ? void 0 : _response$View.entries.map(function (_ref15) {
      var identifier = _ref15.key.ContentType.identifier;
      return {
        identifier: identifier
      };
    });
    return suggestions;
  });
};
var loadLocationItemExtendedInfo = function loadLocationItemExtendedInfo(_ref16) {
  var internalItem = _ref16.internalItem;
  var _getRestInfo3 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRestInfo)(),
    token = _getRestInfo3.token,
    siteaccess = _getRestInfo3.siteaccess,
    accessToken = _getRestInfo3.accessToken,
    instanceUrl = _getRestInfo3.instanceUrl;
  var extendedInfoPath = "".concat(instanceUrl, "/api/ibexa/v2/location/tree/").concat(internalItem.locationId, "/extended-info");
  var request = new Request(extendedInfoPath, {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTreeExtendedNodeInfo+json',
        'Content-Type': 'application/vnd.ibexa.api.ContentTreeLoadNodeExtendedInfoRequest+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper__WEBPACK_IMPORTED_MODULE_2__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'include'
  });
  return fetch(request).then(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (_ref17) {
    var ContentTreeNodeExtendedInfo = _ref17.ContentTreeNodeExtendedInfo;
    return ContentTreeNodeExtendedInfo;
  });
};

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-remove-bookmarks/add.remove.bookmarks.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-remove-bookmarks/add.remove.bookmarks.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _remove_from_bookmarks_remove_from_bookmarks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remove-from-bookmarks/remove.from.bookmarks */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js");
/* harmony import */ var _add_to_bookmarks_add_to_bookmarks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-to-bookmarks/add.to.bookmarks */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js");




var AddRemoveBookmarks = function AddRemoveBookmarks(_ref) {
  var _item$internalItem;
  var item = _ref.item;
  if ((_item$internalItem = item.internalItem) !== null && _item$internalItem !== void 0 && _item$internalItem.isBookmarked) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_remove_from_bookmarks_remove_from_bookmarks__WEBPACK_IMPORTED_MODULE_2__["default"], {
      item: item
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_add_to_bookmarks_add_to_bookmarks__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: item
  });
};
AddRemoveBookmarks.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
AddRemoveBookmarks.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddRemoveBookmarks);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var _window = window,
  Translator = _window.Translator,
  document = _window.document,
  ibexa = _window.ibexa;
var AddToBookmarks = function AddToBookmarks(_ref) {
  var item = _ref.item;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_7__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    contextSelectedData = _useContext.selectedData,
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var isMultiItemOperation = (0,_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__.isItemEmpty)(item);
  var selectedData = isMultiItemOperation ? contextSelectedData : [item];
  var selectedDataToBookmark = selectedData.filter(function (selectedItem) {
    var _selectedItem$interna;
    return !((_selectedItem$interna = selectedItem.internalItem) !== null && _selectedItem$interna !== void 0 && _selectedItem$interna.isBookmarked);
  });
  var isDisabled = selectedDataToBookmark.length === 0;
  var itemLabelWithoutCount = Translator.trans(/*@Desc("Add to bookmarks")*/'actions.add_to_bookmarks', {}, 'ibexa_content_tree_ui');
  var itemLabelWithCount = Translator.trans(/*@Desc("Add to bookmarks (%count%)")*/'actions.add_to_bookmarks.with_count', {
    count: selectedDataToBookmark.length
  }, 'ibexa_content_tree_ui');
  var isLabelWithCount = isMultiItemOperation && selectedDataToBookmark.length !== 0;
  var itemLabel = isLabelWithCount ? itemLabelWithCount : itemLabelWithoutCount;
  var addToBookmarks = function addToBookmarks() {
    var items = selectedDataToBookmark.map(function (_ref2) {
      var internalItem = _ref2.internalItem;
      return _objectSpread({
        id: internalItem.locationId
      }, internalItem);
    });
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__.addToBookmarks)(items, _objectSpread({}, restInfo)).then(function (response) {
      var bookmarkedItems = response.success,
        notBookmarkedItems = response.fail;
      if (notBookmarkedItems.length) {
        var totalCount = bookmarkedItems.length + notBookmarkedItems.length;
        var message;
        if (totalCount === 1) {
          message = Translator.trans(/*@Desc("Selected item could not be bookmarked.")*/'bulk_bookmark.error.message.single', {}, 'ibexa_content_tree_ui');
        } else {
          message = Translator.trans(/*@Desc("%notBookmarkedCount% of the %totalCount% selected item(s) could not be bookmarked.")*/'bulk_bookmark.error.message.multi', {
            notBookmarkedCount: notBookmarkedItems.length,
            totalCount: totalCount
          }, 'ibexa_content_tree_ui');
        }
        ibexa.helpers.notification.showWarningNotification(message);
      }
      if (bookmarkedItems.length) {
        var _message = Translator.trans(/*@Desc("Content item(s) bookmarked.")*/'bulk_bookmark.success.message', {}, 'ibexa_content_tree_ui');
        ibexa.helpers.notification.showSuccessNotification(_message);
        bookmarkedItems.forEach(function (_ref3) {
          var locationId = _ref3.locationId;
          document.body.dispatchEvent(new CustomEvent('ibexa-bookmark-change', {
            detail: {
              bookmarked: true,
              locationId: locationId
            }
          }));
        });
        document.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
      }
      dispatchSelectedData({
        type: _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_CLEAR
      });
      return Promise.resolve();
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isDisabled: isDisabled,
    onClick: addToBookmarks
  });
};
AddToBookmarks.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
AddToBookmarks.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToBookmarks);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-translation/add.translation.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-translation/add.translation.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var AddTranslation = function AddTranslation(_ref) {
  var _fetchedData$, _permissions$hasAcces;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_5__.RestInfoContext);
  var itemLabel = Translator.trans(/*@Desc("Add translation")*/'actions.add_translation', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'create');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = isLoading || !hasAccess;
  var addTranslation = function addTranslation() {
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
      id: item.id
    })).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        response = _ref3[0];
      var contentLanguages = response.ContentInfo.Content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language;
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:open-language-modal', {
        detail: {
          item: item,
          contentLanguages: contentLanguages,
          permissions: permissions
        }
      }));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: addTranslation
  });
};
AddTranslation.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
AddTranslation.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTranslation);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/collapse-all/collapse.all.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/collapse-all/collapse.all.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_collapse_all_collapse_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }



var _removeFromSubtree = function removeFromSubtree(subtree, idsToRemove) {
  subtree.forEach(function (item) {
    if (idsToRemove.includes(item.locationId)) {
      item.children = [];
    } else {
      _removeFromSubtree(item.children, idsToRemove);
    }
  });
};
var CollapseAll = function CollapseAll(props) {
  var _useLocalStorage = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])('subtree'),
    getLocalStorageData = _useLocalStorage.getLocalStorageData,
    saveLocalStorageData = _useLocalStorage.saveLocalStorageData;
  var afterCollapseCallback = function afterCollapseCallback(items) {
    var subtree = getLocalStorageData();
    var idsToRemove = items.map(function (item) {
      return item.id;
    });
    _removeFromSubtree(subtree, idsToRemove);
    saveLocalStorageData(subtree);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_collapse_all_collapse_all__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    afterCollapseCallback: afterCollapseCallback
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapseAll);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/create-content/create.content.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/create-content/create.content.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var CreateContent = function CreateContent(_ref) {
  var _fetchedData$, _permissions$hasAcces;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_5__.RestInfoContext);
  var itemLabel = Translator.trans(/*@Desc("Create")*/'actions.create_content', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'create');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = !item.internalItem.isContainer || isLoading || !hasAccess;
  var createContent = function createContent() {
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_4__.findSuggestions)(item.id, _objectSpread({}, restInfo)).then(function (suggestions) {
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:open-create-widget', {
        detail: {
          item: item,
          suggestions: suggestions,
          permissions: permissions
        }
      }));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: createContent
  });
};
CreateContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
CreateContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-content/delete.content.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-content/delete.content.js ***!
  \**************************************************************************************************************************/
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
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js");
/* harmony import */ var _delete_modal_delete_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-modal/delete.modal */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal/delete.modal.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






var DeleteContent = function DeleteContent(props) {
  var _fetchedData$, _permissions$hasAcces;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getAdminUiConfig)();
  var item = props.item,
    isLoading = props.isLoading,
    fetchedData = props.fetchedData;
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_5__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'delete');
  var isDeletingUser = adminUiConfig.userContentTypes.includes(item.internalItem.contentTypeIdentifier);
  var deleteLabel = Translator.trans(/*@Desc("Delete")*/'actions.delete.label.delete', {}, 'ibexa_content_tree_ui');
  var trashLabel = Translator.trans(/*@Desc("Send to trash")*/'actions.delete.label.trash', {}, 'ibexa_content_tree_ui');
  var label = isDeletingUser || (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)() ? deleteLabel : trashLabel;
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var locationDepth = item.path.split('/').length;
  var checkIsDisabled = function checkIsDisabled() {
    return isLoading || !hasAccess || locationDepth === 1;
  };
  var renderModal = function renderModal(treeBuilderDeleteModalProps) {
    if (isLoading) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_delete_modal_delete_modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      confirmBtnLabel: label,
      item: item
    }, treeBuilderDeleteModalProps));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    label: label,
    isLoading: isLoading,
    checkIsDisabled: checkIsDisabled,
    renderModal: renderModal
  }, props));
};
DeleteContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
DeleteContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal-body/delete.modal.body.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal-body/delete.modal.body.js ***!
  \********************************************************************************************************************************/
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



var DeleteBodyModal = function DeleteBodyModal(_ref) {
  var reverseRelationsCount = _ref.reverseRelationsCount,
    totalSubitemsCount = _ref.totalSubitemsCount,
    name = _ref.name,
    confirmationChecked = _ref.confirmationChecked,
    setConfirmationChecked = _ref.setConfirmationChecked,
    isDeletingUser = _ref.isDeletingUser;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var deleteDraftsWarningHeader = Translator.trans(/*@Desc("Drafts")*/'modal.delete.header.send_to_trash_draft_warning_header', {}, 'ibexa_content_tree_ui');
  var deleteDraftsWarning = Translator.trans(/*@Desc("Sending this content item to Trash will also delete all drafts of content items that haven’t been published yet, and belong to the trashed subtree.")*/'modal.delete.header.send_to_trash_draft_warning', {}, 'ibexa_content_tree_ui');
  var reverseRelationHeader = Translator.trans(/*@Desc("Conflict with reverse Relations")*/'modal.delete.reverse_relation.header', {}, 'ibexa_content_tree_ui');
  var reverseRelationMessage = Translator.trans(/*@Desc("'%name%' is in use by %reverseRelationsCount% Content item(s). You should remove all reverse Relations before deleting the Content item.")*/'modal.delete.reverse_relation.message', {
    name: name,
    reverseRelationsCount: reverseRelationsCount
  }, 'ibexa_content_tree_ui');
  var subitemsHeader = Translator.trans(/*@Desc("Sub-items")*/'modal.delete.subitems.header', {}, 'ibexa_content_tree_ui');
  var subitemsMessage = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)() ? Translator.trans(/*@Desc("Deleting '%name%' and its %totalSubitemsCount% Content item(s) will also delete the sub-items of this Location.")*/'modal.delete.subitems.message', {
    name: name,
    totalSubitemsCount: totalSubitemsCount
  }, 'ibexa_content_tree_ui') : Translator.trans(/*@Desc("Sending '%name%' and its %totalSubitemsCount% Content item(s) to Trash will also send the sub-items of this Location to Trash.")*/'modal.delete.subitems.trash_message', {
    name: name,
    totalSubitemsCount: totalSubitemsCount
  }, 'ibexa_content_tree_ui');
  var confirmMessage = Translator.trans(/*@Desc("I understand the consequences of this action.")*/'modal.delete.confirm.message', {}, 'ibexa_content_tree_ui');
  var changeConfirmBtnState = function changeConfirmBtnState() {
    setConfirmationChecked(function (prevState) {
      return !prevState;
    });
  };
  var renderHeader = function renderHeader() {
    if ((0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.isExternalInstance)() && !isDeletingUser) {
      return Translator.trans(/*@Desc("Are you sure you want to delete this Content?")*/'modal.delete.header.content', {}, 'ibexa_content_tree_ui');
    }
    if (isDeletingUser) {
      return Translator.trans(/*@Desc("Are you sure you want to delete this User?")*/'modal.delete.header.user', {}, 'ibexa_content_tree_ui');
    }
    return Translator.trans(/*@Desc("Are you sure you want to send this Content item to Trash?")*/'modal.delete.header.trash_content', {}, 'ibexa_content_tree_ui');
  };
  var renderDraftDeletionWarning = function renderDraftDeletionWarning() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-modal__trash-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label form-label required"
    }, deleteDraftsWarningHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-description"
    }, deleteDraftsWarning));
  };
  var renderReverseRelationWarning = function renderReverseRelationWarning() {
    if (reverseRelationsCount === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-modal__trash-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label form-label required"
    }, reverseRelationHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-description"
    }, reverseRelationMessage));
  };
  var renderSubitemsWarning = function renderSubitemsWarning() {
    if (totalSubitemsCount === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-modal__trash-option"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label form-label required"
    }, subitemsHeader)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ibexa-modal__option-description"
    }, subitemsMessage));
  };
  var renderConfirmation = function renderConfirmation() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "form-check"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      onChange: changeConfirmBtnState,
      checked: confirmationChecked,
      type: "checkbox",
      id: "location_trash_confirm",
      className: "ibexa-input ibexa-input--checkbox  form-check-input"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "ibexa-label ibexa-label--checkbox-radio form-check-label",
      htmlFor: "location_trash_confirm"
    }, confirmMessage));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderHeader(), renderReverseRelationWarning(), renderSubitemsWarning(), renderDraftDeletionWarning(), renderConfirmation());
};
DeleteBodyModal.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  confirmationChecked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  setConfirmationChecked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isDeletingUser: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  reverseRelationsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
DeleteBodyModal.defaultProps = {
  isDeletingUser: false,
  reverseRelationsCount: 0,
  totalSubitemsCount: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteBodyModal);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal/delete.modal.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal/delete.modal.js ***!
  \**********************************************************************************************************************/
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
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js");
/* harmony import */ var _delete_modal_body_delete_modal_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-modal-body/delete.modal.body */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-modal-body/delete.modal.body.js");
var _excluded = ["confirmBtnLabel", "item"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }





var DeleteModal = function DeleteModal(_ref) {
  var confirmBtnLabel = _ref.confirmBtnLabel,
    item = _ref.item,
    props = _objectWithoutProperties(_ref, _excluded);
  var onConfirm = props.onConfirm;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getAdminUiConfig)();
  var _item$internalItem = item.internalItem,
    reverseRelationsCount = _item$internalItem.reverseRelationsCount,
    totalSubitemsCount = _item$internalItem.totalSubitemsCount,
    name = _item$internalItem.name;
  var isDeletingUser = adminUiConfig.userContentTypes.includes(item.internalItem.contentTypeIdentifier);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    confirmationChecked = _useState2[0],
    setConfirmationChecked = _useState2[1];
  var renderModalBody = function renderModalBody() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_delete_modal_body_delete_modal_body__WEBPACK_IMPORTED_MODULE_4__["default"], {
      confirmationChecked: confirmationChecked,
      setConfirmationChecked: setConfirmationChecked,
      reverseRelationsCount: reverseRelationsCount,
      totalSubitemsCount: totalSubitemsCount,
      isDeletingUser: isDeletingUser,
      name: name
    });
  };
  var confirmBtnAttrs = {
    label: confirmBtnLabel,
    onClick: onConfirm,
    className: 'ibexa-btn--primary ibexa-btn--trigger',
    disabled: !confirmationChecked
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    confirmationBody: renderModalBody(),
    confirmBtnAttrs: confirmBtnAttrs
  }, props));
};
DeleteModal.propTypes = {
  confirmBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteModal);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/edit-content/edit.content.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/edit-content/edit.content.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var EditContent = function EditContent(_ref) {
  var _fetchedData$, _permissions$hasAcces;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_5__.RestInfoContext);
  var itemLabel = Translator.trans(/*@Desc("Edit")*/'actions.edit_content', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_4__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'edit');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = isLoading || !hasAccess;
  var editContent = function editContent() {
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
      id: item.id
    })).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        response = _ref3[0];
      var contentLanguages = response.ContentInfo.Content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language;
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:open-edit-widget', {
        detail: {
          item: item,
          contentLanguages: contentLanguages,
          permissions: permissions
        }
      }));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: editContent
  });
};
EditContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
EditContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");




var _window = window,
  Translator = _window.Translator,
  document = _window.document;
var HideContent = function HideContent(_ref) {
  var _fetchedData$, _permissions$hasAcces, _item$internalItem$is, _item$internalItem;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var itemHideLabel = Translator.trans(/*@Desc("Hide")*/'actions.hide_content', {}, 'ibexa_content_tree_ui');
  var itemRevealLabel = Translator.trans(/*@Desc("Reveal")*/'actions.reveal_content', {}, 'ibexa_content_tree_ui');
  var permissions = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_3__.getPermissions)((_fetchedData$ = fetchedData[0]) === null || _fetchedData$ === void 0 ? void 0 : _fetchedData$.permissions, 'hide');
  var hasAccess = (_permissions$hasAcces = permissions === null || permissions === void 0 ? void 0 : permissions.hasAccess) !== null && _permissions$hasAcces !== void 0 ? _permissions$hasAcces : false;
  var isDisabled = isLoading || !hasAccess;
  var isInvisible = (_item$internalItem$is = (_item$internalItem = item.internalItem) === null || _item$internalItem === void 0 ? void 0 : _item$internalItem.isInvisible) !== null && _item$internalItem$is !== void 0 ? _item$internalItem$is : false;
  var itemLabel = isInvisible ? itemRevealLabel : itemHideLabel;
  var hideContent = function hideContent() {
    if (isInvisible) {
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:reveal', {
        detail: {
          item: item
        }
      }));
    } else {
      document.body.dispatchEvent(new CustomEvent('ibexa-content-tree:hide', {
        detail: {
          item: item
        }
      }));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: hideContent
  });
};
HideContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
HideContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HideContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/preview-content/preview.content.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/preview-content/preview.content.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");



var _window = window,
  Translator = _window.Translator,
  Routing = _window.Routing;
var PreviewContent = function PreviewContent(_ref) {
  var _firstFetchedEntry$tr, _firstFetchedEntry$pr;
  var item = _ref.item,
    isLoading = _ref.isLoading,
    fetchedData = _ref.fetchedData;
  var _item$internalItem = item.internalItem,
    locationId = _item$internalItem.locationId,
    contentId = _item$internalItem.contentId,
    versionNo = _item$internalItem.versionNo;
  var firstFetchedEntry = fetchedData[0];
  var translations = (_firstFetchedEntry$tr = firstFetchedEntry === null || firstFetchedEntry === void 0 ? void 0 : firstFetchedEntry.translations.values) !== null && _firstFetchedEntry$tr !== void 0 ? _firstFetchedEntry$tr : [];
  var defaultTranslation = translations[0];
  var previewableTranslations = (_firstFetchedEntry$pr = firstFetchedEntry === null || firstFetchedEntry === void 0 ? void 0 : firstFetchedEntry.previewableTranslations.values) !== null && _firstFetchedEntry$pr !== void 0 ? _firstFetchedEntry$pr : [];
  var isDisabled = !previewableTranslations.includes(defaultTranslation) || isLoading;
  var itemLabel = Translator.trans(/*@Desc("Preview")*/'actions.preview_content', {}, 'ibexa_content_tree_ui');
  var getPreviewLink = function getPreviewLink(languageCode) {
    var _siteAccessContextSel;
    var siteAccessContextSelect = document.querySelector('.ibexa-change-siteaccess-context');
    var selectedSiteAccessContext = (_siteAccessContextSel = siteAccessContextSelect === null || siteAccessContextSelect === void 0 ? void 0 : siteAccessContextSelect.value) !== null && _siteAccessContextSel !== void 0 ? _siteAccessContextSel : null;
    var previewRouteParams = {
      locationId: locationId,
      contentId: contentId,
      versionNo: versionNo,
      languageCode: languageCode,
      referrer: 'content_view'
    };
    if (selectedSiteAccessContext) {
      previewRouteParams.preselectedSiteAccess = selectedSiteAccessContext;
    }
    return Routing.generate('ibexa.content.preview', previewRouteParams);
  };
  var openPreview = function openPreview() {
    window.location = getPreviewLink(defaultTranslation);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isLoading: isLoading,
    isDisabled: isDisabled,
    onClick: openPreview
  });
};
PreviewContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  fetchedData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))
};
PreviewContent.defaultProps = {
  item: {},
  isLoading: false,
  fetchedData: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewContent);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js":
/*!****************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








var _window = window,
  Translator = _window.Translator,
  document = _window.document,
  ibexa = _window.ibexa;
var RemoveFromBookmarks = function RemoveFromBookmarks(_ref) {
  var item = _ref.item;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_content_tree_module__WEBPACK_IMPORTED_MODULE_7__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    contextSelectedData = _useContext.selectedData,
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var isMultiItemOperation = (0,_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__.isItemEmpty)(item);
  var selectedData = isMultiItemOperation ? contextSelectedData : [item];
  var selectedDataToUnbookmark = selectedData.filter(function (selectedItem) {
    var _selectedItem$interna;
    return (_selectedItem$interna = selectedItem.internalItem) === null || _selectedItem$interna === void 0 ? void 0 : _selectedItem$interna.isBookmarked;
  });
  var isDisabled = selectedDataToUnbookmark.length === 0;
  var itemLabelWithoutCount = Translator.trans(/*@Desc("Remove from bookmarks")*/'actions.remove_from_bookmarks', {}, 'ibexa_content_tree_ui');
  var itemLabelWithCount = Translator.trans(/*@Desc("Remove from bookmarks (%count%)")*/'actions.remove_from_bookmarks.with_count', {
    count: selectedDataToUnbookmark.length
  }, 'ibexa_content_tree_ui');
  var isLabelWithCount = isMultiItemOperation && selectedDataToUnbookmark.length !== 0;
  var itemLabel = isLabelWithCount ? itemLabelWithCount : itemLabelWithoutCount;
  var removeFromBookmarks = function removeFromBookmarks() {
    var items = selectedDataToUnbookmark.map(function (_ref2) {
      var internalItem = _ref2.internalItem;
      return _objectSpread({
        id: internalItem.locationId
      }, internalItem);
    });
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_6__.removeFromBookmarks)(items, _objectSpread({}, restInfo)).then(function (response) {
      var bookmarkedItems = response.success,
        notBookmarkedItems = response.fail;
      if (notBookmarkedItems.length) {
        var totalCount = bookmarkedItems.length + notBookmarkedItems.length;
        var message;
        if (totalCount === 1) {
          message = Translator.trans(/*@Desc("Selected item could not be removed from bookmarks.")*/'bulk_unbookmark.error.message.single', {}, 'ibexa_content_tree_ui');
        } else {
          message = Translator.trans(/*@Desc("%notBookmarkedCount% of the %totalCount% selected item(s) could not be removed from bookmarks.")*/'bulk_unbookmark.error.message.multi', {
            notBookmarkedCount: notBookmarkedItems.length,
            totalCount: bookmarkedItems.length + notBookmarkedItems.length
          }, 'ibexa_content_tree_ui');
        }
        ibexa.helpers.notification.showWarningNotification(message);
      }
      if (bookmarkedItems.length) {
        var _message = Translator.trans(/*@Desc("Content item(s) removed from bookmarks.")*/'bulk_unbookmark.success.message', {}, 'ibexa_content_tree_ui');
        ibexa.helpers.notification.showSuccessNotification(_message);
        bookmarkedItems.forEach(function (_ref3) {
          var locationId = _ref3.locationId;
          document.body.dispatchEvent(new CustomEvent('ibexa-bookmark-change', {
            detail: {
              bookmarked: false,
              locationId: locationId
            }
          }));
        });
        document.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
      }
      dispatchSelectedData({
        type: _tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_CLEAR
      });
      return Promise.resolve();
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isDisabled: isDisabled,
    onClick: removeFromBookmarks
  });
};
RemoveFromBookmarks.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
RemoveFromBookmarks.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoveFromBookmarks);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/config.loader.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/config.loader.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_tree_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.tree.module */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");

(function (ibexa) {
  ibexa.addConfig('treeBuilder', _content_tree_module__WEBPACK_IMPORTED_MODULE_0__.treeBuilderConfig);
  ibexa.addConfig('modules.ContentTree', _content_tree_module__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentTypesInfoMapContext: () => (/* binding */ ContentTypesInfoMapContext),
/* harmony export */   RestInfoContext: () => (/* binding */ RestInfoContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   treeBuilderConfig: () => (/* binding */ treeBuilderConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_select_all_select_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_unselect_all_unselect_all__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all.js");
/* harmony import */ var _components_collapse_all_collapse_all_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collapse-all/collapse.all.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/collapse-all/collapse.all.js");
/* harmony import */ var _components_add_remove_bookmarks_add_remove_bookmarks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-remove-bookmarks/add.remove.bookmarks */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-remove-bookmarks/add.remove.bookmarks.js");
/* harmony import */ var _components_add_translation_add_translation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-translation/add.translation */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-translation/add.translation.js");
/* harmony import */ var _components_create_content_create_content__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/create-content/create.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/create-content/create.content.js");
/* harmony import */ var _components_edit_content_edit_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-content/edit.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/edit-content/edit.content.js");
/* harmony import */ var _components_hide_content_hide_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/hide-content/hide.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/hide-content/hide.content.js");
/* harmony import */ var _components_delete_content_delete_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/delete-content/delete.content */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/delete-content/delete.content.js");
/* harmony import */ var _common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/services/content.tree.service */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/services/content.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/helpers/getters */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/helpers/tree */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/tree.js");
/* harmony import */ var _common_helpers_notifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/helpers/notifications */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/common/helpers/notifications.js");
/* harmony import */ var _components_preview_content_preview_content_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/preview-content/preview.content.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/preview-content/preview.content.js");
/* harmony import */ var _components_remove_from_bookmarks_remove_from_bookmarks_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/remove-from-bookmarks/remove.from.bookmarks.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/remove-from-bookmarks/remove.from.bookmarks.js");
/* harmony import */ var _components_add_to_bookmarks_add_to_bookmarks_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/add-to-bookmarks/add.to.bookmarks.js */ "./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/components/add-to-bookmarks/add.to.bookmarks.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }























var RestInfoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesInfoMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var _window = window,
  ibexa = _window.ibexa,
  document = _window.document;
var MODULE_ID = 'ibexa-content-tree';
var SUBTREE_ID = 'subtree';
var ContentTreeModule = function ContentTreeModule(props) {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getTranslator)();
  var Routing = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getRouting)();
  var userId = props.userId,
    currentLocationPath = props.currentLocationPath,
    rootLocationId = props.rootLocationId,
    subitemsLimit = props.subitemsLimit,
    subitemsLoadLimit = props.subitemsLoadLimit,
    treeMaxDepth = props.treeMaxDepth;
  var treeBuilderModuleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var readSubtree = function readSubtree() {
    var customReadSubtree = props.readSubtree;
    if (typeof customReadSubtree === 'function') {
      return customReadSubtree();
    }
    return (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__.getData)({
      moduleId: MODULE_ID,
      userId: userId,
      subId: rootLocationId,
      dataId: SUBTREE_ID
    });
  };
  var saveSubtree = function saveSubtree() {
    var customSaveSubtree = props.saveSubtree;
    if (typeof customSaveSubtree === 'function') {
      customSaveSubtree();
      return;
    }
    (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_5__.saveData)({
      moduleId: MODULE_ID,
      userId: userId,
      subId: rootLocationId,
      dataId: SUBTREE_ID,
      data: subtree.current
    });
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoaded = _useState2[0],
    setIsLoaded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    contentTypesInfoMap = _useState4[0],
    setContentTypesInfoMap = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.preloadedLocations),
    _useState6 = _slicedToArray(_useState5, 2),
    tree = _useState6[0],
    setTree = _useState6[1];
  var subtree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.generateInitialSubtree)({
    rootLocationId: rootLocationId,
    subitemsLoadLimit: subitemsLoadLimit
  })); // subtree is actually tree request data
  var getCurrentLocationId = function getCurrentLocationId() {
    var currentLocationIdString = props.currentLocationPath.split('/').filter(function (id) {
      return !!id;
    }).pop();
    return parseInt(currentLocationIdString, 10);
  };
  var setInitialItemsState = function setInitialItemsState(location) {
    subtree.current = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.generateSubtree)({
      items: [location],
      isRoot: true,
      subitemsLoadLimit: subitemsLoadLimit,
      subitemsLimit: subitemsLimit
    });
    setIsLoaded(true);
    setTree(location);
    saveSubtree();
  };
  var loadTreeToState = function loadTreeToState() {
    var restInfo = props.restInfo,
      sort = props.sort;
    setIsLoaded(false);
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadSubtree)((0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.getLoadSubtreeParams)({
      subtree: subtree,
      restInfo: restInfo,
      sort: sort
    })).then(function (loadedSubtree) {
      setInitialItemsState(loadedSubtree[0]);
      var path = currentLocationPath.split('/').filter(function (id) {
        return !!id;
      });
      var rootLocationIdIndex = path.findIndex(function (element) {
        return parseInt(element, 10) === rootLocationId;
      });
      if (rootLocationIdIndex !== -1) {
        var _treeBuilderModuleRef;
        var pathStartingOnRootLocation = path.slice(rootLocationIdIndex - path.length);
        var itemsToExpand = pathStartingOnRootLocation.map(function (locationId) {
          return {
            id: parseInt(locationId, 10)
          };
        });
        (_treeBuilderModuleRef = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef === void 0 || _treeBuilderModuleRef.expandItems(itemsToExpand);
      }
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var findLocationsByIdWrapper = function findLocationsByIdWrapper(args) {
    return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.findLocationsById)(_objectSpread(_objectSpread({}, props.restInfo), {}, {
      limit: props.subitemsLoadLimit
    }, args));
  };
  var renderIcon = function renderIcon(item, otherProps) {
    var _item$internalItem = item.internalItem,
      contentTypeIdentifier = _item$internalItem.contentTypeIdentifier,
      locationId = _item$internalItem.locationId;
    var isLoading = otherProps.isLoading;
    var iconAttrs = {
      extraClasses: 'ibexa-icon--small'
    };
    if (!isLoading || item.subitems.length) {
      if (locationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.SYSTEM_ROOT_LOCATION_ID) {
        iconAttrs.customPath = ibexa.helpers.contentType.getContentTypeIconUrl('folder');
      } else {
        iconAttrs.customPath = ibexa.helpers.contentType.getContentTypeIconUrl(contentTypeIdentifier) || ibexa.helpers.contentType.getContentTypeIconUrl('file');
      }
    } else {
      iconAttrs.name = 'spinner';
      iconAttrs.extraClasses = "".concat(iconAttrs.extraClasses, " ibexa-spin");
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-ct-list-item__icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], iconAttrs));
  };
  var renderLabel = function renderLabel(item, otherProps) {
    var name = item.internalItem.name;
    var labelTruncatedCallbackRef = otherProps.labelTruncatedCallbackRef;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-tb-list-item-single__label-truncated",
      title: name,
      ref: labelTruncatedCallbackRef
    }, name);
  };
  var callbackToggleExpanded = function callbackToggleExpanded(item, _ref) {
    var isExpanded = _ref.isExpanded,
      loadMore = _ref.loadMore;
    if (isExpanded) {
      (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.addItemToSubtree)(subtree.current[0], item.internalItem, item.internalItem.path.split('/'), {
        subitemsLoadLimit: subitemsLoadLimit,
        subitemsLimit: subitemsLimit
      });
    } else {
      (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.removeItemFromSubtree)(subtree.current[0], item.internalItem, item.internalItem.path.split('/'));
    }
    saveSubtree();
    var subitems = item.subitems;
    var shouldLoadInitialItems = isExpanded && subitems && !subitems.length;
    if (shouldLoadInitialItems) {
      loadMore();
    }
  };
  var callbackMoveElements = function callbackMoveElements(item, _ref2) {
    var selectedData = _ref2.selectedData;
    var sourceIds = selectedData.map(function (selectedItem) {
      return selectedItem.id;
    }).join(',');
    return findLocationsByIdWrapper({
      id: sourceIds
    }).then(function (response) {
      var destination = "/".concat(item.nextParent.path);
      return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.moveElements)(response, destination, _objectSpread({}, props.restInfo));
    }).then(function (response) {
      var movedItems = response.success,
        notMovedItems = response.fail;
      if (notMovedItems.length) {
        var message = Translator.trans(/*@Desc("%notMovedCount% of the %totalCount% selected item(s) could not be moved because you do not have proper user permissions. Contact your Administrator.")*/'bulk_move.error.message', {
          notMovedCount: notMovedItems.length,
          totalCount: movedItems.length + notMovedItems.length
        }, 'ibexa_content_tree_ui');
        window.ibexa.helpers.notification.showWarningNotification(message);
      }
      if (movedItems.length) {
        var _item$nextParent$inte = item.nextParent.internalItem,
          name = _item$nextParent$inte.name,
          contentId = _item$nextParent$inte.contentId,
          locationId = _item$nextParent$inte.locationId;
        var _message = Translator.trans(/*@Desc("Content item(s) sent to {{ locationLink }}")*/
        'bulk_move.success.message', {}, 'ibexa_content_tree_ui');
        var rawPlaceholdersMap = {
          locationLink: Translator.trans(/*@Desc("<u><a href='%locationHref%'>%locationName%</a></u>")*/
          'bulk_action.success.link_to_location', {
            locationName: ibexa.helpers.text.escapeHTML(name),
            locationHref: Routing.generate('ibexa.content.view', {
              locationId: locationId,
              contentId: contentId
            })
          }, 'ibexa_content_tree_ui')
        };
        window.ibexa.helpers.notification.showSuccessNotification(_message, function () {}, rawPlaceholdersMap);
      }
      return Promise.resolve();
    }).then(loadTreeToState)["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var callbackCopyElements = function callbackCopyElements(item, _ref3) {
    var selectedData = _ref3.selectedData;
    var sourceIds = selectedData.map(function (selectedItem) {
      return selectedItem.id;
    }).join(',');
    return findLocationsByIdWrapper({
      id: sourceIds
    }).then(function (response) {
      var destination = "/".concat(item.path);
      return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.copyElements)(response, destination, _objectSpread({}, props.restInfo));
    }).then(function (response) {
      var copiedItems = response.success,
        notCopiedItems = response.fail;
      if (notCopiedItems.length) {
        var message = Translator.trans(/*@Desc("%notCopiedCount% of the %totalCount% selected item(s) could not be copied because you do not have proper user permissions. Contact your Administrator.")*/'bulk_copy.error.message', {
          notCopiedCount: notCopiedItems.length,
          totalCount: copiedItems.length + notCopiedItems.length
        }, 'ibexa_content_tree_ui');
        window.ibexa.helpers.notification.showWarningNotification(message);
      }
      if (copiedItems.length) {
        var _item$internalItem2 = item.internalItem,
          name = _item$internalItem2.name,
          contentId = _item$internalItem2.contentId,
          locationId = _item$internalItem2.locationId;
        var _message2 = Translator.trans(/*@Desc("Content item(s) copied to {{ locationLink }}")*/
        'bulk_copy.success.message', {}, 'ibexa_content_tree_ui');
        var rawPlaceholdersMap = {
          locationLink: Translator.trans(/*@Desc("<u><a href='%locationHref%'>%locationName%</a></u>")*/
          'bulk_action.success.link_to_location', {
            locationName: ibexa.helpers.text.escapeHTML(name),
            locationHref: Routing.generate('ibexa.content.view', {
              locationId: locationId,
              contentId: contentId
            })
          }, 'ibexa_content_tree_ui')
        };
        window.ibexa.helpers.notification.showSuccessNotification(_message2, function () {}, rawPlaceholdersMap);
      }
      return Promise.resolve();
    }).then(loadTreeToState)["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var findRedirectLocationId = function findRedirectLocationId(entries) {
    var pathIds = ibexa.helpers.location.removeRootFromPathString(currentLocationPath).map(function (id) {
      return parseInt(id, 10);
    });
    entries.forEach(function (entryId) {
      var entryIdIndex = pathIds.findIndex(function (id) {
        return id === entryId;
      });
      if (entryIdIndex !== -1) {
        pathIds = pathIds.slice(0, entryIdIndex);
      }
    });
    return pathIds[pathIds.length - 1];
  };
  var callbackDeleteElements = function callbackDeleteElements(_ref4) {
    var selectedData = _ref4.selectedData;
    var entries = selectedData.map(function (item) {
      return item.id;
    });
    var sourceIds = entries.join(',');
    return findLocationsByIdWrapper({
      id: sourceIds
    }).then(function (response) {
      return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.deleteElements)(response, _objectSpread(_objectSpread({}, props.restInfo), {}, {
        contentTypes: contentTypesInfoMap
      }));
    }).then(function (response) {
      var deletedItems = response.success,
        notDeletedItems = response.fail;
      if (notDeletedItems.length) {
        var _getNotDeletedItemsDa = (0,_common_helpers_notifications__WEBPACK_IMPORTED_MODULE_19__.getNotDeletedItemsData)(notDeletedItems, deletedItems, _common_helpers_getters__WEBPACK_IMPORTED_MODULE_17__.isUser.bind(null, contentTypesInfoMap)),
          message = _getNotDeletedItemsDa.message;
        window.ibexa.helpers.notification.showWarningNotification(message);
      } else {
        var anyUserContentItemDeleted = deletedItems.some(_common_helpers_getters__WEBPACK_IMPORTED_MODULE_17__.isUser.bind(null, contentTypesInfoMap));
        var anyNonUserContentItemDeleted = deletedItems.some(function (location) {
          return !(0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_17__.isUser)(contentTypesInfoMap, location);
        });
        var _message3 = null;
        if (anyUserContentItemDeleted && anyNonUserContentItemDeleted) {
          _message3 = Translator.trans(/*@Desc("Content item(s) sent to Trash. User(s) deleted.")*/'bulk_delete.success.message.users_with_nonusers', {}, 'ibexa_content_tree_ui');
        } else if (anyUserContentItemDeleted) {
          _message3 = Translator.trans(/*@Desc("User(s) deleted.")*/'bulk_delete.success.message.users', {}, 'ibexa_content_tree_ui');
        } else {
          _message3 = Translator.trans(/*@Desc("Content item(s) sent to Trash.")*/'bulk_delete.success.message.nonusers', {}, 'ibexa_content_tree_ui');
        }
        window.ibexa.helpers.notification.showSuccessNotification(_message3);
      }
      return Promise.resolve();
    }).then(function () {
      var pathIds = ibexa.helpers.location.removeRootFromPathString(currentLocationPath);
      var currentLocationId = parseInt(pathIds[pathIds.length - 1], 10);
      var redirectLocationId = findRedirectLocationId(entries);
      if (redirectLocationId !== currentLocationId) {
        findLocationsByIdWrapper({
          id: redirectLocationId
        }).then(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 1),
            nodeResponse = _ref6[0];
          window.location.href = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_17__.getContentLink)({
            contentId: nodeResponse.ContentInfo.Content._id,
            locationId: nodeResponse.id
          });
        });
      } else {
        window.location.reload(true);
      }
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var isActive = function isActive(item) {
    return item.internalItem.locationId === getCurrentLocationId();
  };
  var loadMoreSubitems = function loadMoreSubitems(item) {
    return (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadLocationItems)(_objectSpread(_objectSpread({}, props.restInfo), {}, {
      parentLocationId: item.internalItem.locationId,
      limit: props.subitemsLoadLimit,
      offset: item.internalItem.subitems.length
    })).then(function (location) {
      setTree(function (prevTree) {
        var prevTreeParentItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.findItem)([prevTree], item.internalItem.path.split('/'));
        if (prevTreeParentItem) {
          var nextTree = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(prevTree);
          var nextTreeParentItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.findItem)([nextTree], item.internalItem.path.split('/'));
          nextTreeParentItem.subitems = [].concat(_toConsumableArray(nextTreeParentItem.subitems), _toConsumableArray(location.subitems)).map(function (subitem) {
            return _objectSpread(_objectSpread({}, subitem), {}, {
              path: "".concat(nextTreeParentItem.path, "/").concat(subitem.locationId)
            });
          });
          (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.updateItemInSubtree)(subtree.current[0], nextTreeParentItem, item.internalItem.path.split('/'));
          saveSubtree();
          return nextTree;
        }
        return prevTree;
      });
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var getCustomItemClass = function getCustomItemClass(item) {
    var children = item.children,
      total = item.total,
      isRootItem = item.isRootItem;
    var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
      'c-ct-list-item': true,
      'c-ct-list-item--can-load-more': children && children.length < total,
      'c-ct-list-item--is-root-item': isRootItem
    });
    return className;
  };
  var renderEmpty = function renderEmpty() {
    if (!isLoaded || (tree === null || tree === void 0 ? void 0 : tree.locationId) !== undefined) {
      return null;
    }
    var emptyBadge = Translator.trans(/*@Desc("1")*/'content.1', {}, 'ibexa_content_tree_ui');
    var emptyContent = Translator.trans(/*@Desc("Your tree is empty. Start creating your structure")*/'content.empty', {}, 'ibexa_content_tree_ui');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-empty"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-empty__badge"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-badge"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-badge__content"
    }, emptyBadge))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-ct-empty__content"
    }, emptyContent));
  };
  var buildItem = function buildItem(item) {
    return item.internalItem ? item : {
      internalItem: item,
      name: item.name,
      id: item.locationId,
      href: (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_17__.getContentLink)(item),
      path: item.path,
      subitems: item.subitems,
      total: item.totalSubitemsCount,
      hidden: item.isInvisible,
      renderIcon: renderIcon,
      renderLabel: renderLabel,
      customItemClass: getCustomItemClass(item)
    };
  };
  var moduleName = Translator.trans(/*@Desc("Content tree")*/'content.tree_name', {}, 'ibexa_content_tree_ui');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadContentTypes)(props.restInfo.siteaccess).then(function (response) {
      var contentTypesMap = response.ContentTypeInfoList.ContentType.reduce(function (contentTypesList, item) {
        contentTypesList[item._href] = item;
        return contentTypesList;
      }, {});
      setContentTypesInfoMap(contentTypesMap);
    })["catch"](function () {
      var errorMessage = Translator.trans(/*@Desc("Cannot load content types")*/'load_content_types.error', {}, 'ibexa_content_tree_ui');
      ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var subtreeData = readSubtree();
    if (subtreeData) {
      subtree.current = subtreeData;
    }
    (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.expandCurrentLocationInSubtree)({
      subtree: subtree.current,
      rootLocationId: rootLocationId,
      currentLocationPath: currentLocationPath,
      subitemsLimit: subitemsLimit
    });
    (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.clipTooDeepSubtreeBranches)({
      subtree: subtree.current[0],
      maxDepth: treeMaxDepth - 1
    });
    subtree.current[0].children.forEach(function (subtreeChild) {
      return (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_18__.limitSubitemsInSubtree)({
        subtree: subtreeChild,
        subitemsLimit: subitemsLimit
      });
    });
    saveSubtree();
    loadTreeToState();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.body.addEventListener('ibexa-content-tree-refresh', loadTreeToState);
    document.body.addEventListener('ibexa-bookmark-change', loadTreeToState);
    return function () {
      document.body.removeEventListener('ibexa-content-tree-refresh', loadTreeToState);
      document.body.removeEventListener('ibexa-bookmark-change', loadTreeToState);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestInfoContext.Provider, {
    value: props.restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesInfoMapContext.Provider, {
    value: contentTypesInfoMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ibexa.modules.TreeBuilder, {
    ref: treeBuilderModuleRef,
    moduleId: MODULE_ID,
    moduleName: moduleName,
    userId: userId,
    subId: rootLocationId,
    tree: tree,
    buildItem: buildItem,
    isActive: isActive,
    loadMoreSubitems: loadMoreSubitems,
    callbackToggleExpanded: callbackToggleExpanded,
    callbackMoveElements: callbackMoveElements,
    callbackCopyElements: callbackCopyElements,
    callbackDeleteElements: callbackDeleteElements,
    subitemsLimit: subitemsLimit,
    treeDepthLimit: treeMaxDepth,
    actionsType: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_TYPE.CONTEXTUAL_MENU,
    dragDisabled: true,
    isLoading: !isLoaded,
    useTheme: true
  }, renderEmpty())));
};
ContentTreeModule.propTypes = {
  currentLocationPath: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  restInfo: PropTypes.shape({
    token: PropTypes.string.isRequired,
    siteaccess: PropTypes.string.isRequired
  }).isRequired,
  preloadedLocations: PropTypes.object,
  subitemsLimit: PropTypes.number,
  subitemsLoadLimit: PropTypes.number,
  rootLocationId: PropTypes.number,
  treeMaxDepth: PropTypes.number,
  readSubtree: PropTypes.func,
  saveSubtree: PropTypes.func,
  sort: PropTypes.shape({
    sortClause: PropTypes.string,
    sortOrder: PropTypes.string
  })
};
ContentTreeModule.defaultProps = {
  preloadedLocations: {},
  rootLocationId: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.treeRootLocationId,
  subitemsLimit: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.childrenLoadMaxLimit,
  subitemsLoadLimit: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.loadMoreLimit,
  treeMaxDepth: ibexa === null || ibexa === void 0 ? void 0 : ibexa.adminUiConfig.contentTree.treeMaxDepth,
  readSubtree: undefined,
  saveSubtree: undefined,
  sort: {}
};
var treeBuilderConfig = _defineProperty({}, MODULE_ID, {
  menuActions: [{
    priority: 20,
    id: 'modifying',
    subitems: [{
      priority: 10,
      id: 'create',
      component: _components_create_content_create_content__WEBPACK_IMPORTED_MODULE_12__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadLocationItemExtendedInfo]
    }, {
      priority: 20,
      id: 'edit',
      component: _components_edit_content_edit_content__WEBPACK_IMPORTED_MODULE_13__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadLocationItemExtendedInfo]
    }, {
      priority: 20,
      id: 'preview',
      component: _components_preview_content_preview_content_js__WEBPACK_IMPORTED_MODULE_20__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadLocationItemExtendedInfo]
    }, {
      priority: 30,
      id: 'delete',
      component: _components_delete_content_delete_content__WEBPACK_IMPORTED_MODULE_15__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadLocationItemExtendedInfo]
    }, {
      priority: 40,
      id: 'addTranslation',
      component: _components_add_translation_add_translation__WEBPACK_IMPORTED_MODULE_11__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadLocationItemExtendedInfo]
    }, {
      priority: 50,
      id: 'hide',
      component: _components_hide_content_hide_content__WEBPACK_IMPORTED_MODULE_14__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM],
      fetchMethods: [_common_services_content_tree_service__WEBPACK_IMPORTED_MODULE_16__.loadLocationItemExtendedInfo]
    }]
  }, {
    priority: 25,
    id: 'bookmark',
    subitems: [{
      priority: 10,
      id: 'addRemoveBookmarks',
      component: _components_add_remove_bookmarks_add_remove_bookmarks__WEBPACK_IMPORTED_MODULE_10__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM]
    }, {
      priority: 100,
      id: 'addBookmarks',
      component: _components_add_to_bookmarks_add_to_bookmarks_js__WEBPACK_IMPORTED_MODULE_22__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.TOP_MENU]
    }, {
      priority: 200,
      id: 'removeBookmarks',
      component: _components_remove_from_bookmarks_remove_from_bookmarks_js__WEBPACK_IMPORTED_MODULE_21__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.TOP_MENU]
    }]
  }, {
    priority: 30,
    id: 'collapsible',
    subitems: [{
      priority: 20,
      id: 'collapse',
      component: _components_collapse_all_collapse_all_js__WEBPACK_IMPORTED_MODULE_9__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM]
    }]
  }, {
    priority: 40,
    id: 'other',
    subitems: [{
      priority: 10,
      id: 'select',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_select_all_select_all__WEBPACK_IMPORTED_MODULE_7__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM]
    }, {
      priority: 20,
      id: 'unselect',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_unselect_all_unselect_all__WEBPACK_IMPORTED_MODULE_8__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.SINGLE_ITEM]
    }]
  }]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTreeModule);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");








var _window = window,
  Translator = _window.Translator;
var CollapseAll = function CollapseAll(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel,
    afterCollapseCallback = _ref.afterCollapseCallback;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_3__.ExpandContext),
    dispatchExpandedData = _useContext.dispatchExpandedData;
  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.TreeContext);
  var itemLabel = label || Translator.trans(/*@Desc("Collapse all")*/
  'actions.collapse_all', {}, 'ibexa_tree_builder_ui');
  var data = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemEmpty)(item) ? tree : item;
  var canItemBeExpanded = function canItemBeExpanded(itemToCollapse) {
    return !!itemToCollapse.subitems && itemToCollapse.subitems.length;
  };
  var collapseAllNodes = function collapseAllNodes() {
    var items = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_6__.getAllChildren)({
      data: data,
      buildItem: buildItem,
      condition: canItemBeExpanded
    });
    dispatchExpandedData({
      items: items,
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_REMOVE
    });
    afterCollapseCallback(items);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "caret-up",
    useIconAsLabel: useIconAsLabel,
    onClick: collapseAllNodes
  });
};
CollapseAll.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  afterCollapseCallback: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
CollapseAll.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false,
  afterCollapseCallback: function afterCollapseCallback() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapseAll);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal-delete/modal.delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _components_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/contextual-menu/contextual.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
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











var ACTION_TIMEOUT = 250;
var _window = window,
  Translator = _window.Translator;
var Delete = function Delete(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel,
    modalConfirmationBody = _ref.modalConfirmationBody,
    modalSize = _ref.modalSize,
    isLoading = _ref.isLoading,
    checkIsDisabled = _ref.checkIsDisabled,
    isModalDisabled = _ref.isModalDisabled,
    fetchedData = _ref.fetchedData,
    renderModal = _ref.renderModal;
  var actionTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_4__.ExpandContext),
    dispatchExpandedData = _useContext.dispatchExpandedData;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_6__.ContextualMenuContext),
    setIsClosable = _useContext2.setIsClosable,
    setIsExpanded = _useContext2.setIsExpanded;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_5__.SelectedContext),
    contextSelectedData = _useContext3.selectedData,
    dispatchSelectedData = _useContext3.dispatchSelectedData;
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.CallbackContext),
    callbackDeleteElements = _useContext4.callbackDeleteElements;
  var itemLabel = label || Translator.trans(/*@Desc("Delete")*/
  'actions.delete', {}, 'ibexa_tree_builder_ui');
  var selectedData = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_10__.isItemEmpty)(item) ? contextSelectedData : [item];
  var isDisabled = isLoading || selectedData.length === 0 || checkIsDisabled(selectedData, fetchedData);
  var hasSubitems = function hasSubitems(_ref2) {
    var subitems = _ref2.subitems;
    return !!subitems && subitems.length;
  };
  var showDeleteModal = function showDeleteModal() {
    setShowModal(true);
  };
  var deleteNodes = function deleteNodes() {
    clearTimeout(actionTimeout.current);
    actionTimeout.current = setTimeout(function () {
      setShowModal(false);
      setIsExpanded(false);
      callbackDeleteElements({
        selectedData: selectedData
      }).then(function () {
        var itemsToRemoveFromStorage = selectedData.reduce(function (storedData, _ref3) {
          var data = _ref3.internalItem;
          var childrenItems = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_9__.getAllChildren)({
            data: data,
            buildItem: buildItem,
            condition: hasSubitems
          });
          return [].concat(_toConsumableArray(storedData), _toConsumableArray(childrenItems));
        }, []);
        dispatchExpandedData({
          items: itemsToRemoveFromStorage,
          type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__.STORED_ITEMS_REMOVE
        });
        dispatchSelectedData({
          type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__.STORED_ITEMS_CLEAR
        });
      });
    }, ACTION_TIMEOUT);
  };
  var closeModal = function closeModal() {
    setShowModal(false);
  };
  var renderModalWrapper = function renderModalWrapper() {
    if (isModalDisabled) {
      return;
    }
    if (renderModal) {
      return renderModal({
        visible: showModal,
        onConfirm: deleteNodes,
        onClose: closeModal,
        size: modalSize
      });
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_modal_delete_modal_delete__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: showModal,
      onConfirm: deleteNodes,
      confirmationBody: modalConfirmationBody,
      onClose: closeModal,
      size: modalSize
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsClosable(!showModal);
  }, [showModal]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "trash",
    useIconAsLabel: useIconAsLabel,
    onClick: isModalDisabled ? deleteNodes : showDeleteModal,
    isLoading: isLoading,
    isDisabled: isDisabled,
    isCustomClose: true
  }), renderModalWrapper());
};
Delete.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  checkIsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  fetchedData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  isModalDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  modalConfirmationBody: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  modalSize: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  renderModal: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Delete.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false,
  isLoading: false,
  checkIsDisabled: function checkIsDisabled() {
    return false;
  },
  fetchedData: null,
  isModalDisabled: false,
  modalConfirmationBody: null,
  modalSize: 'large',
  renderModal: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Delete);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useDelayedChildrenSelectReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");










var _window = window,
  Translator = _window.Translator;
var SelectAll = function SelectAll(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_7__.ExpandContext),
    dispatchExpandedData = _useContext2.dispatchExpandedData;
  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.TreeContext);
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.DelayedChildrenSelectContext),
    dispatchDelayedChildrenSelectAction = _useContext3.dispatchDelayedChildrenSelectAction;
  var isMultipleItemsAction = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_6__.isItemEmpty)(item);
  var getDefaultLabel = function getDefaultLabel() {
    if (isMultipleItemsAction) {
      return Translator.trans(/*@Desc("Select all elements")*/
      'actions.select.all.elements', {}, 'ibexa_tree_builder_ui');
    }
    return Translator.trans(/*@Desc("Select all children")*/
    'actions.select.all', {}, 'ibexa_tree_builder_ui');
  };
  var itemLabel = label || getDefaultLabel();
  if (isMultipleItemsAction && tree === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: itemLabel,
      labelIcon: "checkmark",
      useIconAsLabel: useIconAsLabel,
      isDisabled: true
    });
  }
  var data = isMultipleItemsAction ? buildItem(tree) : item;
  var selectAll = function selectAll() {
    var allSubitemsWithLoadedSubitems = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_9__.getAllChildren)({
      data: data,
      buildItem: buildItem,
      condition: function condition(subitem) {
        return subitem.subitems.length > 0 || subitem.id === item.id;
      }
    });
    var shouldSelectAlsoParent = isMultipleItemsAction;
    dispatchExpandedData({
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_ADD,
      items: allSubitemsWithLoadedSubitems
    });
    if (shouldSelectAlsoParent) {
      dispatchSelectedData({
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_ADD,
        items: [data]
      });
    }
    dispatchDelayedChildrenSelectAction({
      type: _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_8__.DELAYED_CHILDREN_SELECT_ADD,
      parentId: data.id
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "checkmark",
    useIconAsLabel: useIconAsLabel,
    onClick: selectAll
  });
};
SelectAll.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
SelectAll.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectAll);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");








var _window = window,
  Translator = _window.Translator;
var UnselectAll = function UnselectAll(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.BuildItemContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.TreeContext);
  var isMultipleItemsAction = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemEmpty)(item);
  var getDefaultLabel = function getDefaultLabel() {
    if ((0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemEmpty)(item)) {
      return Translator.trans(/*@Desc("Unselect all elements")*/
      'actions.unselect.all.elements', {}, 'ibexa_tree_builder_ui');
    }
    return Translator.trans(/*@Desc("Unselect all children")*/
    'actions.unselect.all', {}, 'ibexa_tree_builder_ui');
  };
  var itemLabel = label || getDefaultLabel();
  if (isMultipleItemsAction && tree === null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: itemLabel,
      labelIcon: "checkmark",
      useIconAsLabel: useIconAsLabel,
      isDisabled: true
    });
  }
  var data = isMultipleItemsAction ? tree : item;
  var unselectAll = function unselectAll() {
    var items = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_6__.getAllChildren)({
      data: data,
      buildItem: buildItem
    });
    dispatchSelectedData({
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_REMOVE,
      items: items
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "checkmark",
    useIconAsLabel: useIconAsLabel,
    onClick: unselectAll
  });
};
UnselectAll.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
UnselectAll.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnselectAll);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _action_list_action_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-list/action.list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var getProps = function getProps(props) {
  var forcedProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.entries(props).reduce(function (output, _ref) {
    var _forcedProps$key;
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    output[key] = (_forcedProps$key = forcedProps[key]) !== null && _forcedProps$key !== void 0 ? _forcedProps$key : value;
    return output;
  }, {});
};
var ActionItem = function ActionItem(props) {
  var forcedProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_action_list_action_list__WEBPACK_IMPORTED_MODULE_6__.ForcedPropsContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_5__.IntermediateActionContext),
    intermediateAction = _useContext.intermediateAction;
  var _getProps = getProps(props, forcedProps),
    label = _getProps.label,
    labelIcon = _getProps.labelIcon,
    useIconAsLabel = _getProps.useIconAsLabel,
    isLoading = _getProps.isLoading,
    isDisabled = _getProps.isDisabled,
    extraClasses = _getProps.extraClasses,
    onClick = _getProps.onClick,
    isCustomClose = _getProps.isCustomClose;
  var getLabel = function getLabel() {
    if (useIconAsLabel && labelIcon) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        title: label
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: labelIcon,
        extraClasses: "ibexa-icon ibexa-icon--small"
      }));
    }
    return label;
  };
  var getLoader = function getLoader() {
    var loaderWrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-tb-action-list__item-loader-wrapper': true,
      'c-tb-action-list__item-loader-wrapper--hidden': !isLoading
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: loaderWrapperClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__.SIZES.SMALL
    }));
  };
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-tb-action-list__item': true,
    'c-tb-action-list__item--disabled': isDisabled || intermediateAction.isActive
  }, extraClasses, extraClasses !== ''));
  var attrs = {
    className: className
  };
  if (!isDisabled) {
    attrs.onClick = onClick;
  }
  if (isCustomClose) {
    attrs['data-custom-close'] = 1;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", attrs, getLabel(), getLoader());
};
ActionItem.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  labelIcon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isCustomClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ActionItem.defaultProps = {
  extraClasses: '',
  isDisabled: false,
  labelIcon: null,
  onClick: function onClick() {},
  useIconAsLabel: false,
  isCustomClose: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionItem);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.helpers.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.helpers.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   generateFetchActionsState: () => (/* binding */ generateFetchActionsState),
/* harmony export */   getUniqueFetchMethods: () => (/* binding */ getUniqueFetchMethods)
/* harmony export */ });
var cachedFetchMethodsMap = new Map();
var _getAllFetchMethods = function getAllFetchMethods(actions, zoneType) {
  return actions.flatMap(function (action) {
    var _action$visibleIn$inc, _action$visibleIn;
    if (action.subitems) {
      return _getAllFetchMethods(action.subitems, zoneType);
    } else if (action.fetchMethods && ((_action$visibleIn$inc = (_action$visibleIn = action.visibleIn) === null || _action$visibleIn === void 0 ? void 0 : _action$visibleIn.includes(zoneType)) !== null && _action$visibleIn$inc !== void 0 ? _action$visibleIn$inc : true)) {
      return action.fetchMethods;
    }
    return [];
  });
};
var getUniqueFetchMethods = function getUniqueFetchMethods(actions, zoneType) {
  var allFetchMethods = _getAllFetchMethods(actions, zoneType);
  var uniqueFetchMethods = allFetchMethods.filter(function (fetchMethod, index, originalFetchArray) {
    return originalFetchArray.indexOf(fetchMethod) === index;
  });
  return uniqueFetchMethods;
};
var fetchData = function fetchData(fetchMethods, item, callback) {
  fetchMethods.forEach(function (fetchMethod) {
    if (!cachedFetchMethodsMap.has(item.id)) {
      cachedFetchMethodsMap.set(item.id, new WeakMap());
    }
    var cachedItemMethods = cachedFetchMethodsMap.get(item.id);
    if (cachedItemMethods !== null && cachedItemMethods !== void 0 && cachedItemMethods.has(fetchMethod)) {
      var data = cachedItemMethods.get(fetchMethod);
      callback(data, fetchMethod, true);
    } else {
      fetchMethod(item).then(function (results) {
        cachedItemMethods.set(fetchMethod, results);
        callback(results, fetchMethod, false);
      });
    }
  });
};
var generateFetchActionsState = function generateFetchActionsState(fetchMethods, item) {
  return fetchMethods.map(function (fetchMethod) {
    var _cachedFetchMethodsMa;
    var data = (_cachedFetchMethodsMa = cachedFetchMethodsMap.get(item.id)) === null || _cachedFetchMethodsMa === void 0 ? void 0 : _cachedFetchMethodsMa.get(fetchMethod);
    return {
      fetchMethod: fetchMethod,
      isLoaded: !!data,
      data: data
    };
  });
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcedPropsContext: () => (/* binding */ ForcedPropsContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _action_list_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.list.helpers */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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




var ForcedPropsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ActionList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var item = _ref.item,
    extraClasses = _ref.extraClasses,
    useIconAsLabel = _ref.useIconAsLabel,
    parent = _ref.parent;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.MenuActionsContext),
    getMenuActions = _useContext.getMenuActions,
    allActions = _useContext.actions;
  var actions = getMenuActions({
    actions: allActions,
    item: item
  });
  var uniqueFetchMethods = (0,_action_list_helpers__WEBPACK_IMPORTED_MODULE_3__.getUniqueFetchMethods)(actions, parent);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_action_list_helpers__WEBPACK_IMPORTED_MODULE_3__.generateFetchActionsState)(uniqueFetchMethods, item)),
    _useState2 = _slicedToArray(_useState, 2),
    allFetchedData = _useState2[0],
    setAllFetchedData = _useState2[1];
  var getSortedActions = function getSortedActions(menu) {
    return _toConsumableArray(menu).sort(function (actionA, actionB) {
      return actionA.priority - actionB.priority;
    });
  };
  var _renderSubmenu = function renderSubmenu(menu) {
    return getSortedActions(menu).filter(function (menuItem) {
      var _menuItem$visibleIn;
      return menuItem.subitems || ((_menuItem$visibleIn = menuItem.visibleIn) === null || _menuItem$visibleIn === void 0 ? void 0 : _menuItem$visibleIn.includes(parent));
    }).map(function (menuItem) {
      var subitems = menuItem.subitems,
        component = menuItem.component,
        id = menuItem.id,
        forcedProps = menuItem.forcedProps,
        fetchMethods = menuItem.fetchMethods;
      if (subitems) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
          className: "c-tb-action-list__list",
          key: id
        }, _renderSubmenu(subitems));
      }
      var Component = component;
      var fetchedDataMap = allFetchedData.filter(function (_ref2) {
        var fetchMethod = _ref2.fetchMethod;
        return fetchMethods === null || fetchMethods === void 0 ? void 0 : fetchMethods.includes(fetchMethod);
      });
      var isLoading = fetchedDataMap.some(function (_ref3) {
        var isLoaded = _ref3.isLoaded;
        return !isLoaded;
      });
      var fetchedData = fetchedDataMap.map(function (_ref4) {
        var data = _ref4.data;
        return data;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ForcedPropsContext.Provider, {
        key: id,
        value: forcedProps
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({
        item: item,
        useIconAsLabel: useIconAsLabel,
        isLoading: isLoading,
        fetchedData: fetchedData
      }, menuItem)));
    });
  };
  var menu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return _renderSubmenu(actions);
  }, [actions, _renderSubmenu]);
  var onFetchLoaded = function onFetchLoaded(data, fetchMethodKey) {
    setAllFetchedData(function (state) {
      var newState = _toConsumableArray(state);
      var fetchDataEntryKey = newState.findIndex(function (_ref5) {
        var fetchMethod = _ref5.fetchMethod;
        return fetchMethod === fetchMethodKey;
      });
      newState[fetchDataEntryKey] = _objectSpread(_objectSpread({}, newState[fetchDataEntryKey]), {}, {
        isLoaded: true,
        data: data
      });
      return newState;
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_action_list_helpers__WEBPACK_IMPORTED_MODULE_3__.fetchData)(uniqueFetchMethods, item, onFetchLoaded);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: ref,
    className: "c-tb-action-list ".concat(extraClasses)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-tb-action-list__list"
  }, menu));
});
ActionList.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ActionList.defaultProps = {
  extraClasses: '',
  item: {},
  useIconAsLabel: false,
  parent: ''
};
ActionList.displayName = 'ActionList';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionList);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextualMenuContext: () => (/* binding */ ContextualMenuContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _action_list_action_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-list/action.list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js");
/* harmony import */ var _portal_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portal/portal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js");
/* harmony import */ var _components_width_container_width_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var ContextualMenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MENU_DIRECTION = {
  VERTICAL: {
    TOP: 'top',
    BOTTOM: 'bottom'
  },
  HORIZONTAL: {
    LEFT: 'left',
    RIGHT: 'right'
  }
};
var ContextualMenu = function ContextualMenu(_ref) {
  var item = _ref.item,
    isDisabled = _ref.isDisabled,
    parent = _ref.parent,
    isExpanded = _ref.isExpanded,
    setIsExpanded = _ref.setIsExpanded,
    scrollWrapperRef = _ref.scrollWrapperRef;
  var menuRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var isClosableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var portalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var menuPortalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isClosable = _useState2[0],
    setIsClosable = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      horizontal: null,
      vertical: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    menuDirection = _useState4[0],
    setMenuDirection = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isItemCovered = _useState6[0],
    setIsItemCovered = _useState6[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_width_container_width_container__WEBPACK_IMPORTED_MODULE_7__.WidthContainerContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    containerData = _useContext2[0];
  var toggleMenu = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var isCustomClose = event.target.dataset.customClose === '1';
    if (isDisabled || !isClosableRef.current || isCustomClose) {
      return;
    }
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  }, [isDisabled, isClosableRef, setIsExpanded]);
  var toggleMenuOnClickOutside = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    if (menuRef.current.contains(event.target)) {
      return;
    }
    toggleMenu(event);
  }, [menuRef, toggleMenu]);
  var wrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-contextual-menu': true,
    'c-tb-contextual-menu--burger': true,
    'c-tb-contextual-menu--expanded': isExpanded
  });
  var iconClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'ibexa-icon--small': true,
    'ibexa-icon--primary': !isDisabled && isExpanded
  });
  var togglerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-contextual-menu__toggler': true,
    'c-tb-contextual-menu__toggler--disabled': isDisabled
  });
  var actionListClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-contextual-menu': true,
    'c-tb-contextual-menu--portal': true
  });
  var portalClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-portal--hidden': !menuDirection.vertical && !menuDirection.horizontal,
    'c-tb-portal--top': menuDirection.vertical === MENU_DIRECTION.VERTICAL.TOP,
    'c-tb-portal--left': menuDirection.horizontal === MENU_DIRECTION.HORIZONTAL.LEFT,
    'c-tb-element--use-theme': containerData.useTheme
  });
  var menuContextData = {
    setIsExpanded: setIsExpanded,
    setIsClosable: setIsClosable
  };
  var getPortalPosition = function getPortalPosition() {
    var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
    var _menuRef$current$getB = menuRef.current.getBoundingClientRect(),
      menuXPos = _menuRef$current$getB.x,
      menuYPos = _menuRef$current$getB.y;
    var _rootDOMElement$getBo = rootDOMElement.getBoundingClientRect(),
      rootDOMElementXPos = _rootDOMElement$getBo.x,
      rootDOMElementYPos = _rootDOMElement$getBo.y;
    return {
      x: parseInt(menuXPos - rootDOMElementXPos, 10),
      y: parseInt(menuYPos - rootDOMElementYPos, 10)
    };
  };
  var updateElementOverflow = function updateElementOverflow() {
    var itemElement = menuRef.current.closest('.c-tb-list-item-single__element');
    var _scrollWrapperRef$cur = scrollWrapperRef.current.getBoundingClientRect(),
      scrollTop = _scrollWrapperRef$cur.top,
      scrollBottom = _scrollWrapperRef$cur.bottom;
    var _itemElement$getBound = itemElement.getBoundingClientRect(),
      itemTop = _itemElement$getBound.top,
      itemBottom = _itemElement$getBound.bottom;
    var topGap = 10;
    var bottomGap = 15;
    if (scrollTop > itemBottom - topGap || scrollBottom < itemTop + bottomGap) {
      setIsItemCovered(true);
    } else if (scrollTop < itemBottom - topGap || scrollBottom > itemTop + bottomGap) {
      setIsItemCovered(false);
    }
  };
  var updateVerticalPosition = function updateVerticalPosition() {
    if (menuPortalRef.current) {
      var itemElement = parent === 'SINGLE_ITEM' ? menuRef.current.closest('.c-tb-list-item-single__element') : menuRef.current;
      var _menuPortalRef$curren = menuPortalRef.current.getBoundingClientRect(),
        menuPortalHeight = _menuPortalRef$curren.height;
      var _itemElement$getBound2 = itemElement.getBoundingClientRect(),
        itemYPosition = _itemElement$getBound2.y;
      if (itemYPosition + menuPortalHeight > window.innerHeight) {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            vertical: MENU_DIRECTION.VERTICAL.TOP
          });
        });
      } else {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            vertical: MENU_DIRECTION.VERTICAL.BOTTOM
          });
        });
      }
    }
  };
  var updateHorizontalPosition = function updateHorizontalPosition() {
    if (menuPortalRef.current) {
      var itemElement = parent === 'SINGLE_ITEM' ? menuRef.current.closest('.c-tb-list-item-single__element') : menuRef.current;
      var _menuPortalRef$curren2 = menuPortalRef.current.getBoundingClientRect(),
        menuPortalWidth = _menuPortalRef$curren2.width;
      var _itemElement$getBound3 = itemElement.getBoundingClientRect(),
        itemRightPosition = _itemElement$getBound3.right;
      if (itemRightPosition + menuPortalWidth > window.innerWidth) {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            horizontal: MENU_DIRECTION.HORIZONTAL.LEFT
          });
        });
      } else {
        setMenuDirection(function (prevPosition) {
          return _objectSpread(_objectSpread({}, prevPosition), {}, {
            horizontal: MENU_DIRECTION.HORIZONTAL.RIGHT
          });
        });
      }
    }
  };
  var handleScroll = function handleScroll() {
    if (portalRef.current) {
      var portalPosition = getPortalPosition();
      portalRef.current.setPortalPosition(portalPosition);
    }
    updateElementOverflow();
    updateVerticalPosition();
  };
  var handlePortalRef = function handlePortalRef(portal) {
    if (portal !== portalRef.current && portal !== null) {
      var portalPosition = getPortalPosition();
      portal.setPortalPosition(portalPosition);
    }
    portalRef.current = portal;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isClosableRef.current = isClosable;
  }, [isClosable]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isExpanded) {
      window.document.addEventListener('click', toggleMenuOnClickOutside, false);
    }
    return function () {
      window.document.removeEventListener('click', toggleMenuOnClickOutside, false);
    };
  }, [isExpanded, toggleMenuOnClickOutside]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (scrollWrapperRef && isExpanded) {
      scrollWrapperRef.current.addEventListener('scroll', handleScroll);
      return function () {
        var _scrollWrapperRef$cur2;
        (_scrollWrapperRef$cur2 = scrollWrapperRef.current) === null || _scrollWrapperRef$cur2 === void 0 || _scrollWrapperRef$cur2.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isExpanded, scrollWrapperRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isExpanded) {
      updateVerticalPosition();
      updateHorizontalPosition();
    }
  }, [isExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: wrapperClassName,
    ref: menuRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: togglerClassName,
    onClick: toggleMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "options",
    extraClasses: iconClassName
  })), isExpanded && !isItemCovered && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_portal_portal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: handlePortalRef,
    extraClasses: portalClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContextualMenuContext.Provider, {
    value: menuContextData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_list_action_list__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: menuPortalRef,
    item: item,
    parent: parent,
    extraClasses: actionListClassName
  }))));
};
ContextualMenu.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  setIsExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  scrollWrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Element)
  })
};
ContextualMenu.defaultProps = {
  item: {},
  isDisabled: false,
  parent: '',
  scrollWrapperRef: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextualMenu);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAG_ID: () => (/* binding */ DRAG_ID),
/* harmony export */   DraggableContext: () => (/* binding */ DraggableContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var DraggableContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DRAG_ID = 'DRAG';
var MOVED_INDICATOR_TIMEOUT = 1000;
var DRAGGED_ELEMENT_CENTER_POS = {
  x: 25,
  y: 16
};
var DndProvider = function DndProvider(_ref) {
  var children = _ref.children,
    callbackMoveElements = _ref.callbackMoveElements,
    treeRef = _ref.treeRef;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var dragDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.DraggableDisabledContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_4__.IntermediateActionContext),
    setIntermediateAction = _useContext.setIntermediateAction,
    intermediateAction = _useContext.intermediateAction,
    groupingItemId = _useContext.groupingItemId,
    clearIntermediateAction = _useContext.clearIntermediateAction;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__.PlaceholderContext),
    placeholderDataRef = _useContext2.placeholderDataRef,
    setActiveItemsData = _useContext2.setActiveItemsData,
    clearPlaceholder = _useContext2.clearPlaceholder;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__.SelectedContext),
    contextSelectedData = _useContext3.selectedData,
    dispatchSelectedData = _useContext3.dispatchSelectedData;
  var portalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    currentMousePosition = _useState4[0],
    setCurrentMousePosition = _useState4[1];
  var getMousePosition = function getMousePosition(event) {
    return {
      x: event.pageX - DRAGGED_ELEMENT_CENTER_POS.x,
      y: event.pageY - DRAGGED_ELEMENT_CENTER_POS.y
    };
  };
  var startDragging = function startDragging(event, _ref2) {
    var item = _ref2.item;
    var isModalOpen = rootDOMElement.classList.contains('modal-open');
    if (dragDisabled || isModalOpen) {
      return;
    }
    event.preventDefault();
    setIsDragging(true);
    var selectedData = contextSelectedData.length ? contextSelectedData : [item];
    groupingItemId.current = null;
    setCurrentMousePosition(getMousePosition(event));
    setActiveItemsData(selectedData);
    setIntermediateAction({
      isActive: true,
      id: DRAG_ID,
      isItemDisabled: function isItemDisabled(itemToDisable, extras) {
        return (0,_helpers_item__WEBPACK_IMPORTED_MODULE_7__.isItemDisabled)(itemToDisable, _objectSpread(_objectSpread({}, extras), {}, {
          selectedData: selectedData
        }));
      },
      listItems: selectedData
    });
  };
  var clearDragAction = function clearDragAction() {
    clearIntermediateAction();
    clearPlaceholder();
    setIsDragging(false);
  };
  var toggleDragging = function toggleDragging(disable) {
    var scrollableWrapper = document.querySelector('.c-tb-tree__scrollable-wrapper');
    scrollableWrapper === null || scrollableWrapper === void 0 || scrollableWrapper.classList.toggle('c-tb-tree__scrollable-wrapper--disabled', !disable);
  };
  var stopDragging = function stopDragging() {
    if (dragDisabled || !intermediateAction.isActive) {
      return;
    }
    groupingItemId.current = null;
    setIsDragging(false);
    callbackMoveElements(placeholderDataRef.current, {
      selectedData: intermediateAction.listItems
    }).then(function () {
      clearPlaceholder();
      setIntermediateAction(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          highlightDestination: true
        });
      });
      dispatchSelectedData({
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__.STORED_ITEMS_CLEAR
      });
      toggleDragging(false);
      setTimeout(function () {
        clearIntermediateAction();
        toggleDragging(true);
      }, MOVED_INDICATOR_TIMEOUT);
    });
  };
  var handleMouseUpOutsideTree = function handleMouseUpOutsideTree(event) {
    var treeList = treeRef.current.querySelector('.c-tb-list');
    if (treeList && !treeList.contains(event.target)) {
      clearDragAction();
    }
  };
  var handleMouseMove = function handleMouseMove(event) {
    setCurrentMousePosition(getMousePosition(event));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (intermediateAction.isActive) {
      rootDOMElement.addEventListener('mousemove', handleMouseMove);
      rootDOMElement.addEventListener('mouseup', handleMouseUpOutsideTree);
    }
    return function () {
      rootDOMElement.removeEventListener('mousemove', handleMouseMove);
      rootDOMElement.removeEventListener('mouseup', handleMouseUpOutsideTree);
    };
  }, [intermediateAction.isActive]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (portalRef.current) {
      portalRef.current.setPortalPosition(currentMousePosition);
    }
  }, [currentMousePosition.x, currentMousePosition.y]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DraggableContext.Provider, {
    value: {
      startDragging: startDragging,
      stopDragging: stopDragging,
      clearDragAction: clearDragAction,
      isDragging: isDragging,
      portalRef: portalRef
    }
  }, children);
};
DndProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  callbackMoveElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  treeRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
DndProvider.defaultProps = {
  callbackMoveElements: function callbackMoveElements() {
    return Promise.resolve();
  },
  treeRef: {
    current: null
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DndProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/header/header.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/header/header.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contextual-menu/contextual.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var COLLAPSED_WIDTH = 66;
var EXPANDED_WIDTH = 320;
var Header = function Header(_ref) {
  var _widthContainer$resiz;
  var name = _ref.name,
    renderContent = _ref.renderContent,
    renderActions = _ref.renderActions,
    renderToggleBtn = _ref.renderToggleBtn;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.MenuActionsContext),
    actionsVisible = _useContext.actionsVisible;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ResizableContext),
    isResizable = _useContext2.isResizable;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_5__.WidthContainerContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    widthContainer = _useContext4[0],
    setWidthContainer = _useContext4[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var containerWidth = (_widthContainer$resiz = widthContainer.resizedContainerWidth) !== null && _widthContainer$resiz !== void 0 ? _widthContainer$resiz : widthContainer.containerWidth;
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_5__.checkIsTreeCollapsed)(containerWidth);
  var toggleWidthContainer = function toggleWidthContainer() {
    setWidthContainer(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        containerWidth: isCollapsed ? EXPANDED_WIDTH : COLLAPSED_WIDTH
      });
    });
  };
  var renderCollapseButton = function renderCollapseButton() {
    if (!isResizable) {
      return null;
    }
    if (renderToggleBtn) {
      return renderToggleBtn(isCollapsed, toggleWidthContainer);
    }
    var iconName = isCollapsed ? 'caret-next' : 'caret-back';
    var caretIconClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--tiny': isCollapsed,
      'ibexa-icon--small': !isCollapsed
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "ibexa-btn btn ibexa-btn--no-text ibexa-btn--tertiary c-tb-header__toggle-btn",
      onClick: toggleWidthContainer
    }, isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "content-tree",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: caretIconClassName
    }));
  };
  var renderHeaderContent = function renderHeaderContent() {
    if (renderContent) {
      return renderContent();
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-header__name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "content-tree",
      extraClasses: "ibexa-icon--small c-tb-header__tree-icon"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-tb-header__name-content"
    }, name));
  };
  var renderHeaderActions = function renderHeaderActions() {
    if (renderActions) {
      return renderActions();
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-header__options"
    }, actionsVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      parent: _tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ACTION_PARENT.TOP_MENU,
      isExpanded: isExpanded,
      setIsExpanded: setIsExpanded
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-header"
  }, renderCollapseButton(), !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderHeaderContent(), renderHeaderActions()));
};
Header.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  renderContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderToggleBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Header.defaultProps = {
  renderContent: null,
  renderActions: null,
  renderToggleBtn: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js":
/*!******************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");



var IndentationHorizontal = function IndentationHorizontal(_ref) {
  var itemDepth = _ref.itemDepth;
  var indentationClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-tb-list-item-single__indentation': true
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: indentationClass,
    style: {
      '--indent': itemDepth
    }
  });
};
IndentationHorizontal.propTypes = {
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndentationHorizontal);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntermediateActionContext: () => (/* binding */ IntermediateActionContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var IntermediateActionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var IntermediateActionProvider = function IntermediateActionProvider(_ref) {
  var children = _ref.children;
  var groupingItemId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      isActive: false,
      listItems: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    intermediateAction = _useState2[0],
    setIntermediateAction = _useState2[1];
  var clearIntermediateAction = function clearIntermediateAction() {
    groupingItemId.current = null;
    setIntermediateAction({
      isActive: false,
      listItems: []
    });
  };
  var intermediateActionDataContextValues = {
    intermediateAction: intermediateAction,
    setIntermediateAction: setIntermediateAction,
    groupingItemId: groupingItemId,
    clearIntermediateAction: clearIntermediateAction
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntermediateActionContext.Provider, {
    value: intermediateActionDataContextValues
  }, children);
};
IntermediateActionProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntermediateActionProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/limit/limit.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/limit/limit.js ***!
  \********************************************************************************************************/
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
/* harmony import */ var _indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../indentation-horizontal/indentation.horizontal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");





var Limit = function Limit(_ref) {
  var isExpanded = _ref.isExpanded,
    subitems = _ref.subitems,
    itemDepth = _ref.itemDepth;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var subitemsLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.SubitemsLimitContext);
  var subitemsLimitReached = subitems.length >= subitemsLimit;
  if (subitemsLimit === null || !isExpanded || !subitemsLimitReached) {
    return null;
  }
  var message = Translator.trans(/*@Desc("Loading limit reached")*/
  'show_more.limit_reached', {}, 'ibexa_tree_builder_ui');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single__element c-tb-list-item-single__element--limit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    itemDepth: itemDepth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tb-list-item-single__load-more-limit-info"
  }, message));
};
Limit.propTypes = {
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
Limit.defaultProps = {
  itemDepth: 0,
  subitems: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Limit);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item-single/list.item.single.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item-single/list.item.single.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _list_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../list/list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js");
/* harmony import */ var _toggler_toggler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toggler/toggler */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/toggler/toggler.js");
/* harmony import */ var _load_more_load_more__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../load-more/load.more */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/load-more/load.more.js");
/* harmony import */ var _limit_limit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../limit/limit */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/limit/limit.js");
/* harmony import */ var _contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contextual-menu/contextual.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/contextual-menu/contextual.menu.js");
/* harmony import */ var _list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../list-menu/list.menu */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-menu/list.menu.js");
/* harmony import */ var _indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../indentation-horizontal/indentation.horizontal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js");
/* harmony import */ var _local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _hooks_useDidUpdateEffect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/useDidUpdateEffect */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDidUpdateEffect.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/useDelayedChildrenSelectReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_notification_helper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



























var START_DRAG_TIMEOUT = 300;
var isSelectedLimitReached = function isSelectedLimitReached(selectedLimit, selectedData) {
  if (selectedLimit === null || selectedLimit === 1) {
    return false;
  }
  return selectedData.length >= selectedLimit;
};
var ListItemSingle = function ListItemSingle(_ref) {
  var _item$dragItemDisable, _item$actionsDisabled, _intermediateAction$c, _item$subitems2;
  var index = _ref.index,
    isRoot = _ref.isRoot,
    item = _ref.item,
    itemDepth = _ref.itemDepth,
    parents = _ref.parents,
    rootSelectionDisabled = _ref.rootSelectionDisabled,
    selectionDisabled = _ref.selectionDisabled,
    rootElementDisabled = _ref.rootElementDisabled,
    showHighlight = _ref.showHighlight,
    isLastItem = _ref.isLastItem;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_23__.getTranslator)();
  var bootstrap = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_23__.getBootstrap)();
  var isActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ActiveContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.CallbackContext),
    callbackToggleExpanded = _useContext.callbackToggleExpanded,
    callbackQuickEditElement = _useContext.callbackQuickEditElement,
    callbackQuickCreateElement = _useContext.callbackQuickCreateElement;
  var checkIsDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DisabledItemContext);
  var checkIsInputDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DisabledItemInputContext);
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_14__.DraggableContext),
    startDragging = _useContext2.startDragging,
    stopDragging = _useContext2.stopDragging,
    isDragging = _useContext2.isDragging;
  var dragDisabled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DraggableDisabledContext);
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_11__.ExpandContext),
    expandedData = _useContext3.expandedData,
    dispatchExpandedData = _useContext3.dispatchExpandedData;
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_16__.IntermediateActionContext),
    intermediateAction = _useContext4.intermediateAction;
  var loadMoreSubitems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.LoadMoreSubitemsContext);
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.MenuActionsContext),
    actionsType = _useContext5.actionsType,
    actionsVisible = _useContext5.actionsVisible;
  var moduleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ModuleIdContext);
  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_13__.PlaceholderContext),
    mouseMove = _useContext6.mouseMove;
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_12__.SelectedContext),
    selectedData = _useContext7.selectedData,
    dispatchSelectedData = _useContext7.dispatchSelectedData;
  var selectedLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.SelectedLimitContext);
  var treeDepthLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.TreeDepthLimitContext);
  var saveTreeFullWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_15__.TreeFullWidthContext);
  var _useContext8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_15__.WidthContainerContext),
    _useContext9 = _slicedToArray(_useContext8, 1),
    widthContainerData = _useContext9[0];
  var scrollWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ScrollWrapperContext);
  var _useContext10 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.DelayedChildrenSelectContext),
    delayedChildrenSelectParentsIds = _useContext10.delayedChildrenSelectParentsIds,
    dispatchDelayedChildrenSelectAction = _useContext10.dispatchDelayedChildrenSelectAction;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.BuildItemContext);
  var _useContext11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.QuickActionsContext),
    quickActionMode = _useContext11.quickActionMode,
    quickActionItemId = _useContext11.quickActionItemId,
    setQuickActionMode = _useContext11.setQuickActionMode,
    setQuickActionItemId = _useContext11.setQuickActionItemId;
  var isWaitingForDrag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var itemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var quickEditInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var quickCreateInputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var rootElementHidden = rootElementDisabled && itemDepth === -1;
  var dragItemDisabled = dragDisabled || ((_item$dragItemDisable = item.dragItemDisabled) !== null && _item$dragItemDisable !== void 0 ? _item$dragItemDisable : false);
  var actionsDisabled = (_item$actionsDisabled = item.actionsDisabled) !== null && _item$actionsDisabled !== void 0 ? _item$actionsDisabled : false;
  var isItemActive = isActive(item);
  var scrollToElementRef = function scrollToElementRef(node) {
    if (isItemActive && scrollWrapperRef.current && node) {
      var scrollWrapperTop = scrollWrapperRef.current.getBoundingClientRect().top;
      var itemTop = node.getBoundingClientRect().top;
      var offset = itemTop - scrollWrapperTop;
      scrollWrapperRef.current.scrollTo(0, offset);
    }
  };
  var labelTruncatedCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    if (node) {
      var tooltipInstance = bootstrap.Tooltip.getInstance(node);
      if (!tooltipInstance) {
        return;
      }
      if (node.scrollWidth <= node.offsetWidth) {
        tooltipInstance.disable();
      } else {
        tooltipInstance.enable();
        saveTreeFullWidth(node.scrollWidth - node.offsetWidth);
      }
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_25__.parse)(node);
    }
  }, [widthContainerData.containerWidth]);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isHovered = _useState2[0],
    setIsHovered = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(item.name),
    _useState4 = _slicedToArray(_useState3, 2),
    updatedName = _useState4[0],
    setUpdatedName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    createdName = _useState6[0],
    setCreatedName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isContextMenuOpened = _useState8[0],
    setIsContextMenuOpened = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoading = _useState10[0],
    setIsLoading = _useState10[1];
  var isQuickEditModeEnabled = quickActionItemId === item.id && quickActionMode === _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.QUICK_ACTION_MODES.EDIT;
  var isQuickCreateModeEnabled = quickActionItemId === item.id && quickActionMode === _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.QUICK_ACTION_MODES.CREATE;
  var areActionsDisabled = intermediateAction.isActive;
  var isDisabled = ((_intermediateAction$c = intermediateAction.checkIsDisabled) === null || _intermediateAction$c === void 0 ? void 0 : _intermediateAction$c.call(intermediateAction, item, {
    parents: parents
  })) || checkIsDisabled(item, {
    intermediateAction: intermediateAction
  });
  var isExpanded = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_19__.isItemStored)(item, expandedData);
  var isSelected = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_19__.isItemStored)(item, selectedData);
  var isEqualItem = function isEqualItem(itemToCompare) {
    return itemToCompare.id === item.id;
  };
  var isDestination = intermediateAction.isActive && intermediateAction.highlightDestination && intermediateAction.listItems.some(isEqualItem);
  var parent = parents[parents.length - 1];
  var quickCreatePlaceholder = Translator.trans(/*@Desc("New item")*/'quick_actions.create.placeholder', {}, 'ibexa_tree_builder_ui');
  var getCheckboxTooltip = function getCheckboxTooltip() {
    if (!isSelectedLimitReached(selectedLimit, selectedData)) {
      return null;
    }
    return Translator.trans(/*@Desc("You cannot select more than %selectedLimit% items.")*/'checkbox.limit.message', {
      selectedLimit: selectedLimit
    }, 'ibexa_tree_builder_ui');
  };
  var hoverIn = function hoverIn() {
    setIsHovered(true);
    if (item.onItemHoverIn) {
      item.onItemHoverIn();
    }
  };
  var hoverOut = function hoverOut() {
    setIsHovered(false);
    if (item.onItemHoverOut) {
      item.onItemHoverOut();
    }
  };
  var loadMore = function loadMore() {
    if (!loadMoreSubitems) {
      return;
    }
    setIsLoading(true);
    return loadMoreSubitems(item).then(function (response) {
      setIsLoading(false);
      return response;
    });
  };
  var onLabelClick = function onLabelClick(event) {
    if (isDisabled) {
      event.preventDefault();
      return;
    }
    if (intermediateAction.isActive) {
      event.preventDefault();
      if (intermediateAction.callback) {
        intermediateAction.callback(item);
      }
      return;
    }
    if (item.onItemClick) {
      item.onItemClick();
    }
  };
  var renderActions = function renderActions() {
    switch (actionsType) {
      case _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_TYPE.LIST_MENU:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: item,
          isDisabled: areActionsDisabled,
          parent: _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_PARENT.SINGLE_ITEM
        });
      case _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_TYPE.CONTEXTUAL_MENU:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contextual_menu_contextual_menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: item,
          isDisabled: areActionsDisabled,
          parent: _tree_builder_module__WEBPACK_IMPORTED_MODULE_20__.ACTION_PARENT.SINGLE_ITEM,
          isExpanded: isContextMenuOpened,
          setIsExpanded: setIsContextMenuOpened,
          scrollWrapperRef: scrollWrapperRef
        });
      default:
        return null;
    }
  };
  var renderActionsWrapper = function renderActionsWrapper() {
    if (!actionsVisible || actionsDisabled) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__actions"
    }, renderActions());
  };
  var renderQuickEditAction = function renderQuickEditAction() {
    var triggerRename = function triggerRename() {
      callbackQuickEditElement(item, updatedName);
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    var cancelRename = function cancelRename() {
      setUpdatedName(item.name);
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-actions-wrapper c-tb-list-item-single__quick-actions-wrapper--edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "folder",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      ref: quickEditInputRef,
      type: "text",
      className: "c-tb-list-item-single__quick-action-input c-tb-list-item-single__quick-action-input--edit form-control ibexa-input ibexa-input--text",
      value: updatedName,
      onChange: function onChange(event) {
        return setUpdatedName(event.currentTarget.value);
      },
      onKeyUp: function onKeyUp(event) {
        var code = event.code;
        if (code === 'Escape') {
          cancelRename();
        }
        if (code === 'Enter') {
          triggerRename();
        }
      },
      onBlur: function onBlur() {
        return triggerRename();
      }
    })));
  };
  var renderQuickCreateAction = function renderQuickCreateAction() {
    var triggerCreate = function triggerCreate() {
      callbackQuickCreateElement(item.internalItem, createdName);
      setCreatedName('');
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    var cancelCreate = function cancelCreate() {
      setCreatedName('');
      setQuickActionMode(null);
      setQuickActionItemId(null);
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-actions-wrapper c-tb-list-item-single__quick-actions-wrapper--create"
    }, renderIndentationHorizontal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-tb-list-item-single__quick-action"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "folder",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      ref: quickCreateInputRef,
      type: "text",
      className: "c-tb-list-item-single__quick-action-input c-tb-list-item-single__quick-action-input--create form-control ibexa-input ibexa-input--text",
      placeholder: quickCreatePlaceholder,
      value: createdName,
      onChange: function onChange(event) {
        return setCreatedName(event.currentTarget.value);
      },
      onKeyUp: function onKeyUp(event) {
        var code = event.code;
        if (code === 'Escape') {
          cancelCreate();
        }
        if (code === 'Enter') {
          triggerCreate();
        }
      },
      onBlur: function onBlur() {
        return triggerCreate();
      }
    })));
  };
  var renderDragIcon = function renderDragIcon() {
    var dragIconClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--tiny-small': true,
      'c-tb-list-item-single__drag-icon': true,
      'c-tb-list-item-single__drag-icon--hidden': dragItemDisabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "drag",
      extraClasses: dragIconClass
    });
  };
  var renderIndentationVerticalLine = function renderIndentationVerticalLine() {
    var indentationClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-tb-list-item-single__indentation-line': true,
      'c-tb-list-item-single__indentation-line--vertical': true
    });
    if (!isExpanded || item.total === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: indentationClass,
      style: {
        '--indent': itemDepth
      }
    });
  };
  var renderIndentationHorizontal = function renderIndentationHorizontal() {
    if (isRoot && rootSelectionDisabled) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      itemDepth: itemDepth
    });
  };
  var startDraggingItem = function startDraggingItem(event) {
    if (dragItemDisabled) {
      return;
    }
    dispatchExpandedData({
      items: [item],
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_REMOVE
    });
    startDragging(event, {
      item: item,
      parent: parent,
      index: index,
      target: itemRef.current
    });
  };
  var stopDraggingItem = function stopDraggingItem(event) {
    if (!isDragging) {
      return;
    }
    stopDragging(event);
  };
  var handleMouseMove = function handleMouseMove(event) {
    if (!isDragging) {
      return;
    }
    mouseMove(event, {
      item: item,
      parent: parent,
      index: index,
      isExpanded: isExpanded,
      isDisabled: isDisabled
    });
  };
  var handleMouseDown = function handleMouseDown(event) {
    var target = event.target;
    if (target.classList.contains('c-tb-list-item-single__quick-action-input--edit')) {
      return;
    }
    event.preventDefault();
    if (event.button !== 0) {
      return;
    }
    isWaitingForDrag.current = true;
    setTimeout(function () {
      if (isWaitingForDrag.current) {
        startDraggingItem(event);
      }
    }, START_DRAG_TIMEOUT);
  };
  var handleMouseUp = function handleMouseUp(event) {
    isWaitingForDrag.current = false;
    stopDraggingItem(event);
  };
  var handleMouseLeave = function handleMouseLeave(event) {
    if (isWaitingForDrag.current) {
      startDraggingItem(event);
      isWaitingForDrag.current = false;
      return;
    }
  };
  var getIconChoice = function getIconChoice() {
    if (item.renderIcon && !isHovered && !isSelected) {
      return item.renderIcon(item, {
        isLoading: isLoading,
        labelTruncatedCallbackRef: labelTruncatedCallbackRef
      });
    }
    return renderSelectInput();
  };
  var getLabel = function getLabel() {
    if (item.label) {
      return item.label;
    }
    if (item.renderLabel) {
      return item.renderLabel(item, {
        isLoading: isLoading,
        labelTruncatedCallbackRef: labelTruncatedCallbackRef
      });
    }
    return '';
  };
  var getHiddenInfo = function getHiddenInfo() {
    if (!item.hidden) {
      return null;
    }
    var hiddenIconClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--small': true,
      'c-tb-list-item-single__hidden-icon': true
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "view-hide",
      extraClasses: hiddenIconClass
    });
  };
  var renderLabel = function renderLabel() {
    var labelProps = {
      className: 'c-tb-list-item-single__label',
      onClick: onLabelClick
    };
    var label = getLabel();
    if (!item.href) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", labelProps, getIconChoice(), label, getHiddenInfo());
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", labelProps, getIconChoice(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "c-tb-list-item-single__link",
      href: item.href
    }, label, getHiddenInfo()));
  };
  var renderSelectInput = function renderSelectInput() {
    var inputType = selectedLimit === 1 ? 'radio' : 'checkbox';
    var isInputDisabled = !isSelected && (areActionsDisabled || isSelectedLimitReached(selectedLimit, selectedData) || checkIsInputDisabled(item));
    if (isRoot && rootSelectionDisabled || selectionDisabled) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: inputType,
      id: "ibexa-tb-row-selected-".concat(moduleId, "-").concat(item.id),
      className: "ibexa-input ibexa-input--".concat(inputType),
      onChange: toggleSelectInput,
      checked: isSelected,
      disabled: isInputDisabled,
      title: getCheckboxTooltip()
    });
  };
  var _updateIndentationLine = function updateIndentationLine(itemRefElement, indentHeight) {
    var childList = itemRefElement.querySelector(':scope > .c-tb-list');
    if (!childList || !childList.hasChildNodes()) {
      return indentHeight;
    }
    var lastChild = childList.lastElementChild.firstElementChild;
    var lastChildHasChildren = lastChild.classList.contains('c-tb-list-item-single--has-sub-items');
    indentHeight += lastChild.offsetTop;
    if (lastChildHasChildren) {
      indentHeight = _updateIndentationLine(lastChild, indentHeight);
    }
    return indentHeight;
  };
  var setIndentHeight = function setIndentHeight() {
    var newIndentHeight = itemRef.current.offsetTop;
    var itemHasChildren = itemRef.current.classList.contains('c-tb-list-item-single--has-sub-items');
    var parentElement = itemRef.current.parentElement.closest('.c-tb-list-item-single--has-sub-items');
    var indentationLine = parentElement === null || parentElement === void 0 ? void 0 : parentElement.querySelector('.c-tb-list-item-single__indentation-line--vertical');
    if (itemHasChildren) {
      newIndentHeight = _updateIndentationLine(itemRef.current, newIndentHeight);
    }
    if (indentationLine) {
      indentationLine.style.height = "".concat(newIndentHeight, "px");
    }
  };
  var toggleSelectInput = function toggleSelectInput() {
    var actionType = selectedLimit === 1 ? _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_SET : _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_TOGGLE;
    dispatchSelectedData({
      items: [item],
      type: actionType
    });
  };
  var toggleExpanded = function toggleExpanded() {
    if (treeDepthLimit !== null && itemDepth >= treeDepthLimit) {
      var notificationMessage = Translator.trans(/*@Desc("Cannot load sub-items for this Location because you reached max tree depth.")*/'expand_item.limit.message', {}, 'ibexa_tree_builder_ui');
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_notification_helper__WEBPACK_IMPORTED_MODULE_24__.showWarningNotification)(notificationMessage);
      return;
    }
    dispatchExpandedData({
      items: [item],
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_TOGGLE
    });
  };
  var itemAttrs = _objectSpread({}, item.customAttrs);
  (0,_hooks_useDidUpdateEffect__WEBPACK_IMPORTED_MODULE_18__["default"])(function () {
    callbackToggleExpanded(item, {
      isExpanded: isExpanded,
      loadMore: loadMore
    });
  }, [isExpanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _item$subitems;
    if (((_item$subitems = item.subitems) === null || _item$subitems === void 0 ? void 0 : _item$subitems.length) === 0 && isExpanded) {
      dispatchExpandedData({
        items: [item],
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_REMOVE
      });
    }
  }, [(_item$subitems2 = item.subitems) === null || _item$subitems2 === void 0 ? void 0 : _item$subitems2.length]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatchSelectedData({
      items: [item],
      type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_REPLACE
    });
    if (itemRef.current) {
      scrollToElementRef(itemRef.current);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _item$subitems3;
    var shouldSelectChildren = delayedChildrenSelectParentsIds.includes(item.id);
    var areChildrenAlreadyLoaded = !!((_item$subitems3 = item.subitems) !== null && _item$subitems3 !== void 0 && _item$subitems3.length);
    if (shouldSelectChildren && areChildrenAlreadyLoaded) {
      var allItems = (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_22__.getAllChildren)({
        data: item,
        buildItem: buildItem,
        condition: function condition(subitem) {
          return subitem.id !== item.id;
        }
      });
      var items = selectedLimit ? allItems.slice(0, selectedLimit) : allItems;
      dispatchDelayedChildrenSelectAction({
        type: _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_21__.DELAYED_CHILDREN_SELECT_REMOVE,
        parentId: item.id
      });
      dispatchSelectedData({
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_17__.STORED_ITEMS_ADD,
        items: items
      });
    }
    if (isLastItem && !isRoot && !rootElementDisabled) {
      setIndentHeight();
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isQuickCreateModeEnabled) {
      quickCreateInputRef.current.focus();
      if (!isExpanded && item.total) {
        toggleExpanded();
      }
    }
    if (isQuickEditModeEnabled) {
      quickEditInputRef.current.focus();
    }
  }, [isQuickCreateModeEnabled, isQuickEditModeEnabled]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setUpdatedName(item.name);
  }, [item.name]);
  itemAttrs.className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-tb-list-item-single': true,
    'c-tb-list-item-single--has-sub-items': item.total,
    'c-tb-list-item-single--hovered': isHovered && !isDragging && !isQuickEditModeEnabled && !isQuickCreateModeEnabled && !(dragItemDisabled && actionsDisabled),
    'c-tb-list-item-single--highlighted': showHighlight,
    'c-tb-list-item-single--clickable': item.href || item.onItemClick,
    'c-tb-list-item-single--disabled': isDisabled,
    'c-tb-list-item-single--expanded': isExpanded,
    'c-tb-list-item-single--active': isItemActive,
    'c-tb-list-item-single--hidden': item.hidden,
    'c-tb-list-item-single--destination': isDestination,
    'c-tb-list-item-single--context-menu-opened': isContextMenuOpened,
    'c-tb-list-item-single--draggable': !dragItemDisabled,
    'c-tb-list-item-single--action-and-drag-disabled': dragItemDisabled && actionsDisabled,
    'c-tb-list-item-single--quick-edit-mode': isQuickEditModeEnabled,
    'c-tb-list-item-single--quick-create-mode': isQuickCreateModeEnabled
  }, item.customItemClass, !!item.customItemClass));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, itemAttrs, {
    ref: itemRef
  }), !rootElementHidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderIndentationVerticalLine(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single__element c-tb-list-item-single__element--main",
    onMouseEnter: hoverIn,
    onMouseMove: handleMouseMove,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseLeave: function onMouseLeave(event) {
      hoverOut();
      handleMouseLeave(event);
    }
  }, renderDragIcon(), renderIndentationHorizontal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toggler_toggler__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleExpanded,
    totalSubitemsCount: item.total
  }), renderLabel(), renderQuickEditAction(), renderActionsWrapper())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_list__WEBPACK_IMPORTED_MODULE_4__["default"], {
    parents: [].concat(_toConsumableArray(parents), [item]),
    isExpanded: isExpanded,
    subitems: item.subitems,
    depth: itemDepth,
    checkIsDisabled: checkIsDisabled,
    itemRef: itemRef,
    selectionDisabled: selectionDisabled
  }), renderQuickCreateAction(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_load_more_load_more__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isExpanded: isExpanded,
    isLoading: isLoading,
    loadMore: loadMore,
    subitems: item.subitems,
    totalSubitemsCount: item.total,
    itemDepth: itemDepth + 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_limit_limit__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isExpanded: isExpanded,
    subitems: item.subitems,
    itemDepth: itemDepth + 1
  }));
};
ListItemSingle.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  index: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  checkIsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isRoot: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  parents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  setParentIndentHeight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  rootSelectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rootElementDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showHighlight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLastItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  enableQuickEditMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  enableQuickCreateMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ListItemSingle.defaultProps = {
  checkIsDisabled: function checkIsDisabled() {
    return false;
  },
  isRoot: false,
  itemDepth: 0,
  parents: [],
  setParentIndentHeight: function setParentIndentHeight() {},
  rootSelectionDisabled: false,
  selectionDisabled: false,
  rootElementDisabled: false,
  showHighlight: false,
  isLastItem: false,
  enableQuickEditMode: false,
  enableQuickCreateMode: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemSingle);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item/list.item.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item/list.item.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_item_single_list_item_single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item-single/list.item.single */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item-single/list.item.single.js");
/* harmony import */ var _placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../placeholder-destination/placeholder.destination */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js");
/* harmony import */ var _placeholder_source_placeholder_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../placeholder-source/placeholder.source */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-source/placeholder.source.js");
/* harmony import */ var _hooks_useBuildItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useBuildItem */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useBuildItem.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _portal_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/portal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js");
var _excluded = ["showPlaceholder", "item"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }









var ListItem = function ListItem(props) {
  var showPlaceholder = props.showPlaceholder,
    originalItem = props.item,
    restProps = _objectWithoutProperties(props, _excluded);
  var item = (0,_hooks_useBuildItem__WEBPACK_IMPORTED_MODULE_5__["default"])(originalItem, restProps);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__.DraggableContext),
    portalRef = _useContext.portalRef;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_6__.IntermediateActionContext),
    intermediateAction = _useContext2.intermediateAction,
    groupingItemId = _useContext2.groupingItemId;
  var isEqualItem = function isEqualItem(itemToCompare) {
    return itemToCompare.id === item.id;
  };
  var isSource = intermediateAction.isActive && !intermediateAction.highlightDestination && intermediateAction.listItems.some(isEqualItem);
  if (isSource && groupingItemId.current === null) {
    groupingItemId.current = item.id;
  }
  var renderContent = function renderContent() {
    if (isSource && groupingItemId.current !== item.id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_source_placeholder_source__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    }
    if (isSource && groupingItemId.current === item.id) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_source_placeholder_source__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_portal_portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        ref: portalRef,
        extraClasses: "c-tb-drag-and-drop-portal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-tb-list-item c-tb-list-item--grouped-source"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: "c-tb-list-item__group"
      }, intermediateAction.listItems.map(function (listItem) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_single_list_item_single__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
          key: listItem.id,
          item: listItem
        }, restProps));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-tb-list-item__cover"
      }))));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_single_list_item_single__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      item: item
    }, restProps)), showPlaceholder && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, renderContent());
};
ListItem.propTypes = {
  showPlaceholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-menu/list.menu.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-menu/list.menu.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_list_action_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-list/action.list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list/action.list.js");



var ListMenu = function ListMenu(_ref) {
  var item = _ref.item,
    isDisabled = _ref.isDisabled,
    parent = _ref.parent;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_list_action_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: item,
    isDisabled: isDisabled,
    parent: parent,
    useIconAsLabel: true
  }));
};
ListMenu.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  parent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ListMenu.defaultProps = {
  item: {},
  isDisabled: false,
  parent: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListMenu);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _list_item_list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list-item/list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list-item/list.item.js");
/* harmony import */ var _placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../placeholder-destination/placeholder.destination */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js");
/* harmony import */ var _placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var List = function List(_ref) {
  var _widthContainer$resiz, _subitems$;
  var parents = _ref.parents,
    isExpanded = _ref.isExpanded,
    subitems = _ref.subitems,
    depth = _ref.depth,
    itemRef = _ref.itemRef,
    setParentIndentHeight = _ref.setParentIndentHeight,
    rootSelectionDisabled = _ref.rootSelectionDisabled,
    selectionDisabled = _ref.selectionDisabled,
    rootElementDisabled = _ref.rootElementDisabled;
  var prevIsExpanded = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isExpanded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_5__.PlaceholderContext),
    placeholderData = _useContext.placeholderData;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_6__.WidthContainerContext),
    _useContext3 = _slicedToArray(_useContext2, 1),
    widthContainer = _useContext3[0];
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__.DraggableContext),
    isDragging = _useContext4.isDragging;
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_8__.IntermediateActionContext),
    intermediateAction = _useContext5.intermediateAction;
  var containerWidth = (_widthContainer$resiz = widthContainer.resizedContainerWidth) !== null && _widthContainer$resiz !== void 0 ? _widthContainer$resiz : widthContainer.containerWidth;
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_6__.checkIsTreeCollapsed)(containerWidth);
  var childrenDepth = depth + 1;
  var placeholderIndex = null;
  var isItemSource = function isItemSource(itemId) {
    var isEqualItem = function isEqualItem(itemToCompare) {
      return itemToCompare.id === itemId;
    };
    return intermediateAction.isActive && !intermediateAction.highlightDestination && intermediateAction.listItems.some(isEqualItem);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!subitems.length) {
      return;
    }
    if (isExpanded !== prevIsExpanded.current) {
      document.dispatchEvent(new CustomEvent('ibexa-tb-toggled-expand'));
    }
    prevIsExpanded.current = isExpanded;
  }, [isExpanded, subitems]);
  if (!subitems || !isExpanded || isCollapsed) {
    return null;
  }
  if (placeholderData.nextParent && parents.length && placeholderData.nextParent.id === parents[parents.length - 1].id) {
    placeholderIndex = placeholderData.nextIndex;
  }
  var listClasses = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-tb-list': true,
    'c-tb-list--dragging': isDragging
  });
  var isFirstSubitemSource = isItemSource((_subitems$ = subitems[0]) === null || _subitems$ === void 0 ? void 0 : _subitems$.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: listClasses
  }, !isFirstSubitemSource && placeholderIndex === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_placeholder_destination_placeholder_destination__WEBPACK_IMPORTED_MODULE_4__["default"], null), subitems.map(function (subitem, index) {
    var _subitems, _subitem$id, _placeholderData$next;
    var nextSubitemId = (_subitems = subitems[index + 1]) === null || _subitems === void 0 ? void 0 : _subitems.id;
    var isNextSubitemSource = isItemSource(nextSubitemId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: (_subitem$id = subitem.id) !== null && _subitem$id !== void 0 ? _subitem$id : "def-".concat(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_list_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      parents: parents,
      item: subitem,
      index: index,
      itemDepth: childrenDepth,
      isRoot: childrenDepth === 0,
      rootSelectionDisabled: rootSelectionDisabled,
      selectionDisabled: selectionDisabled,
      itemRef: itemRef,
      isLastItem: index === subitems.length - 1,
      setParentIndentHeight: setParentIndentHeight,
      showPlaceholder: !isNextSubitemSource && placeholderIndex === index + 1,
      showHighlight: (placeholderData === null || placeholderData === void 0 || (_placeholderData$next = placeholderData.nextParent) === null || _placeholderData$next === void 0 ? void 0 : _placeholderData$next.id) === subitem.id && (placeholderData === null || placeholderData === void 0 ? void 0 : placeholderData.nextIndex) === -1,
      rootElementDisabled: rootElementDisabled
    }));
  }));
};
List.propTypes = {
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  depth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  parents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  itemRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  setParentIndentHeight: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  rootSelectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rootElementDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
List.defaultProps = {
  depth: 0,
  parents: [],
  subitems: [],
  itemRef: null,
  setParentIndentHeight: function setParentIndentHeight() {},
  rootSelectionDisabled: false,
  selectionDisabled: false,
  rootElementDisabled: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/load-more/load.more.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/load-more/load.more.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../indentation-horizontal/indentation.horizontal */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/indentation-horizontal/indentation.horizontal.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");






var LoadMore = function LoadMore(_ref) {
  var isExpanded = _ref.isExpanded,
    isLoading = _ref.isLoading,
    subitems = _ref.subitems,
    loadMore = _ref.loadMore,
    totalSubitemsCount = _ref.totalSubitemsCount,
    itemDepth = _ref.itemDepth;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
  var subitemsLimit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_4__.SubitemsLimitContext);
  var subitemsLimitReached = subitems.length >= subitemsLimit;
  var allSubitemsLoaded = subitems.length === totalSubitemsCount;
  if (!isExpanded || subitemsLimitReached || allSubitemsLoaded || !subitems.length) {
    return null;
  }
  var seeMoreLabel = Translator.trans(/*@Desc("See more")*/'see_more', {}, 'ibexa_tree_builder_ui');
  var loadingMoreLabel = Translator.trans(/*@Desc("Loading more...")*/'loading_more', {}, 'ibexa_tree_builder_ui');
  var btnLabel = isLoading ? loadingMoreLabel : seeMoreLabel;
  var loadingSpinner = null;
  if (isLoading) {
    loadingSpinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_2__.SIZES.SMALL
    });
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single__element c-tb-list-item-single__element--load-more"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_indentation_horizontal_indentation_horizontal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    itemDepth: itemDepth
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "c-tb-list-item-single__load-more",
    onClick: loadMore
  }, loadingSpinner, " ", btnLabel));
};
LoadMore.propTypes = {
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  loadMore: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  itemDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
LoadMore.defaultProps = {
  itemDepth: 0,
  subitems: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadMore);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/loader/loader.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/loader/loader.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var Loader = function Loader() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_2__.WidthContainerContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    containerWidth = _useContext2[0].containerWidth;
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_2__.checkIsTreeCollapsed)(containerWidth);
  if (isCollapsed) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpandContext: () => (/* binding */ ExpandContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLocalStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var ExpandContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var EXPAND_DATA_STORAGE_ID = 'expanded-nodes';
var LocalStorageExpandConnector = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    initiallyExpandedItems = _ref.initiallyExpandedItems,
    isLocalStorageActive = _ref.isLocalStorageActive;
  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])(EXPAND_DATA_STORAGE_ID),
    getLocalStorageData = _useLocalStorage.getLocalStorageData,
    saveLocalStorageData = _useLocalStorage.saveLocalStorageData;
  var getInitialValues = function getInitialValues() {
    if (initiallyExpandedItems) {
      return initiallyExpandedItems;
    }
    return isLocalStorageActive && getLocalStorageData() || [];
  };
  var initialValues = getInitialValues();
  var _useStoredItemsReduce = (0,_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(initialValues),
    _useStoredItemsReduce2 = _slicedToArray(_useStoredItemsReduce, 2),
    expandedData = _useStoredItemsReduce2[0],
    dispatchExpandedData = _useStoredItemsReduce2[1];
  var expandDataContextValues = {
    expandedData: expandedData,
    dispatchExpandedData: dispatchExpandedData
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      expandItems: function expandItems(items) {
        dispatchExpandedData({
          items: items,
          type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_2__.STORED_ITEMS_ADD
        });
      }
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLocalStorageActive) {
      saveLocalStorageData(expandedData, false);
    }
  }, [expandedData]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ExpandContext.Provider, {
    value: expandDataContextValues
  }, children);
});
LocalStorageExpandConnector.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  initiallyExpandedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isLocalStorageActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
LocalStorageExpandConnector.defaultProps = {
  initiallyExpandedItems: null
};
LocalStorageExpandConnector.displayName = 'LocalStorageExpandConnector';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStorageExpandConnector);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/modal-delete/modal.delete.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");





var ModalDelete = function ModalDelete(_ref) {
  var visible = _ref.visible,
    confirmationTitle = _ref.confirmationTitle,
    confirmationBody = _ref.confirmationBody,
    onConfirm = _ref.onConfirm,
    onClose = _ref.onClose,
    confirmBtnLabel = _ref.confirmBtnLabel,
    closeBtnLabel = _ref.closeBtnLabel,
    size = _ref.size,
    confirmBtnAttrs = _ref.confirmBtnAttrs;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getRootDOMElement)();
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var modalContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var actionBtnsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var defaultConfirmBtnAttrs = {
      label: confirmBtnLabel !== null && confirmBtnLabel !== void 0 ? confirmBtnLabel : Translator.trans(/*@Desc("Confirm")*/'modal.delete.confirm', {}, 'ibexa_tree_builder_ui'),
      onClick: onConfirm,
      className: 'ibexa-btn--primary ibexa-btn--trigger'
    };
    var closeBtnAttrs = {
      label: closeBtnLabel !== null && closeBtnLabel !== void 0 ? closeBtnLabel : Translator.trans(/*@Desc("Cancel")*/'modal.delete.cancel', {}, 'ibexa_tree_builder_ui'),
      'data-bs-dismiss': 'modal',
      className: 'ibexa-btn--secondary'
    };
    return [confirmBtnAttrs !== null && confirmBtnAttrs !== void 0 ? confirmBtnAttrs : defaultConfirmBtnAttrs, closeBtnAttrs];
  }, [onConfirm, onClose, confirmBtnAttrs]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!modalContainer.current) {
      modalContainer.current = document.createElement('div');
      modalContainer.current.classList.add('c-tb-modal-delete-container');
      rootDOMElement.appendChild(modalContainer.current);
    }
    return function () {
      if (modalContainer.current) {
        modalContainer.current.remove();
      }
    };
  }, []);
  if (!modalContainer.current) {
    return null;
  }
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClose: onClose,
    isVisible: visible,
    size: size,
    actionBtnsConfig: actionBtnsConfig,
    noHeader: !confirmationTitle,
    title: confirmationTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, confirmationBody)), modalContainer.current);
};
ModalDelete.propTypes = {
  confirmationTitle: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  confirmationBody: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  confirmBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  closeBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  visible: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  confirmBtnAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
ModalDelete.defaultProps = {
  visible: false,
  confirmBtnAttrs: null,
  size: 'medium',
  confirmationTitle: null,
  confirmBtnLabel: null,
  closeBtnLabel: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalDelete);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js":
/*!********************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-destination/placeholder.destination.js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");



var PlaceholderDestination = function PlaceholderDestination() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__.DraggableContext),
    stopDragging = _useContext.stopDragging;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_2__.IntermediateActionContext),
    intermediateAction = _useContext2.intermediateAction;
  var stopDraggingItem = function stopDraggingItem(event) {
    return stopDragging(event);
  };
  var stopIntermediateAction = function stopIntermediateAction(event) {
    if (intermediateAction.isActive) {
      event.preventDefault();
      if (intermediateAction.callback) {
        intermediateAction.callback();
      }
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-list-item-single c-tb-list-placeholder-destination",
    onDragEnd: function onDragEnd(event) {
      return stopDragging(event);
    },
    onClick: stopIntermediateAction,
    onMouseUp: stopDraggingItem
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderDestination);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js":
/*!**************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DRAG_ID: () => (/* binding */ DRAG_ID),
/* harmony export */   PlaceholderContext: () => (/* binding */ PlaceholderContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var PlaceholderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DRAG_ID = 'DRAG';
var SIBLING_POSITION_PREV = 'prev';
var SIBLING_POSITION_NEXT = 'next';
var PlaceholderProvider = function PlaceholderProvider(_ref) {
  var children = _ref.children;
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.BuildItemContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    activeItemsData = _useState2[0],
    setActiveItemsData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    placeholderData = _useState4[0],
    setPlaceholderData = _useState4[1];
  var placeholderDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var getInsertIndexAndParent = function getInsertIndexAndParent(_ref2) {
    var event = _ref2.event,
      index = _ref2.index,
      isExpanded = _ref2.isExpanded,
      parent = _ref2.parent,
      item = _ref2.item;
    var currentTarget = event.currentTarget,
      clientY = event.clientY;
    var _currentTarget$getBou = currentTarget.getBoundingClientRect(),
      top = _currentTarget$getBou.top,
      height = _currentTarget$getBou.height;
    var relativeMousePosition = clientY - top;
    var output = {};
    if (parent !== null && parent !== void 0 && parent.isContainer) {
      if (item.isContainer) {
        if (relativeMousePosition < height / 4) {
          output = {
            nextIndex: index,
            nextParent: parent,
            sibling: item,
            siblingPosition: SIBLING_POSITION_PREV
          };
        } else if (relativeMousePosition < height - height / 4) {
          if (isExpanded) {
            output = {
              nextIndex: 0,
              nextParent: item,
              sibling: buildItem(item.subitems[0]),
              siblingPosition: SIBLING_POSITION_PREV
            };
          } else {
            output = {
              nextIndex: -1,
              nextParent: item
            };
          }
        } else {
          if (isExpanded) {
            output = {
              nextIndex: 0,
              nextParent: item,
              sibling: buildItem(item.subitems[0]),
              siblingPosition: SIBLING_POSITION_PREV
            };
          } else {
            output = {
              nextIndex: index + 1,
              nextParent: parent,
              sibling: item,
              siblingPosition: SIBLING_POSITION_NEXT
            };
          }
        }
      } else {
        if (relativeMousePosition < height / 2) {
          output = {
            nextIndex: index,
            nextParent: parent,
            sibling: item,
            siblingPosition: SIBLING_POSITION_PREV
          };
        } else {
          output = {
            nextIndex: index + 1,
            nextParent: parent,
            sibling: item,
            siblingPosition: SIBLING_POSITION_NEXT
          };
        }
      }
    } else {
      if (item.isContainer) {
        if (isExpanded) {
          output = {
            nextIndex: 0,
            nextParent: item,
            sibling: buildItem(item.subitems[0]),
            siblingPosition: SIBLING_POSITION_PREV
          };
        } else {
          output = {
            nextIndex: -1,
            nextParent: item
          };
        }
      }
    }
    return output;
  };
  var mouseMove = function mouseMove(event, _ref3) {
    var item = _ref3.item,
      parent = _ref3.parent,
      index = _ref3.index,
      isExpanded = _ref3.isExpanded;
    var isMouseOverActiveItem = activeItemsData.some(function (activeItem) {
      return activeItem.id === item.id;
    });
    if (isMouseOverActiveItem || activeItemsData.length === 0) {
      return;
    }
    var nextState = getInsertIndexAndParent({
      event: event,
      index: index,
      item: item,
      parent: parent,
      isExpanded: isExpanded
    });
    setPlaceholderData(nextState);
    placeholderDataRef.current = nextState;
  };
  var clearPlaceholder = function clearPlaceholder() {
    placeholderDataRef.current = null;
    setActiveItemsData([]);
    setPlaceholderData({});
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PlaceholderContext.Provider, {
    value: {
      setActiveItemsData: setActiveItemsData,
      mouseMove: mouseMove,
      placeholderData: placeholderData,
      setPlaceholderData: setPlaceholderData,
      placeholderDataRef: placeholderDataRef,
      clearPlaceholder: clearPlaceholder
    }
  }, children);
};
PlaceholderProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-source/placeholder.source.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-source/placeholder.source.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");


var PlaceholderSource = function PlaceholderSource() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_1__.DraggableContext),
    clearDragAction = _useContext.clearDragAction;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseUp: clearDragAction,
    className: "c-tb-list-item-single c-tb-list-placeholder-source"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaceholderSource);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/portal/portal.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var Portal = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    getPosition = _ref.getPosition,
    extraClasses = _ref.extraClasses;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getRootDOMElement)();
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-tb-portal c-tb-element': true
  }, extraClasses, extraClasses !== ''));
  var portalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var prevPosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: null,
    y: null
  });
  var setPortalPosition = function setPortalPosition(portalPosition) {
    var _ref2 = portalPosition !== null && portalPosition !== void 0 ? portalPosition : getPosition(),
      x = _ref2.x,
      y = _ref2.y;
    if (x !== prevPosition.current.x || y !== prevPosition.current.y) {
      prevPosition.current = {
        x: x,
        y: y
      };
      portalRef.current.style.left = "".concat(x, "px");
      portalRef.current.style.top = "".concat(y, "px");
    }
  };
  if (!portalRef.current) {
    portalRef.current = document.createElement('div');
    rootDOMElement.insertAdjacentElement('beforeend', portalRef.current);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      setPortalPosition: setPortalPosition
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      portalRef.current.remove();
      portalRef.current = null;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _portalRef$current$cl;
    portalRef.current.className = '';
    (_portalRef$current$cl = portalRef.current.classList).add.apply(_portalRef$current$cl, _toConsumableArray(className.split(' ')));
  }, [extraClasses]);
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portalRef.current);
});
Portal.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
  getPosition: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Portal.defaultProps = {
  extraClasses: '',
  getPosition: function getPosition() {
    return {};
  }
};
Portal.displayName = 'Portal';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/search/search.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/search/search.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _width_container_width_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var _window = window,
  Translator = _window.Translator;
var Search = function Search(_ref) {
  var _widthContainer$resiz;
  var onSearchInputChange = _ref.onSearchInputChange,
    initialValue = _ref.initialValue;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_width_container_width_container__WEBPACK_IMPORTED_MODULE_3__.WidthContainerContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    widthContainer = _useContext2[0];
  var containerWidth = (_widthContainer$resiz = widthContainer.resizedContainerWidth) !== null && _widthContainer$resiz !== void 0 ? _widthContainer$resiz : widthContainer.containerWidth;
  var placeholder = Translator.trans(/*@Desc("Search...")*/'search.placeholder', {}, 'ibexa_tree_builder_ui');
  var clearSearch = function clearSearch() {
    setInputValue('');
  };
  var isCollapsed = (0,_width_container_width_container__WEBPACK_IMPORTED_MODULE_3__.checkIsTreeCollapsed)(containerWidth);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onSearchInputChange(inputValue);
  }, [inputValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-search"
  }, !isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-input-text-wrapper ibexa-input-text-wrapper--search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control ibexa-input ibexa-input--text ibexa-input--small",
    autoComplete: "on",
    tabIndex: "1",
    placeholder: placeholder,
    onChange: function onChange(event) {
      return setInputValue(event.target.value);
    },
    value: inputValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-input-text-wrapper__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--no-text ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--clear",
    tabIndex: "-1",
    onClick: clearSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--tiny"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--no-text ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--search",
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "search",
    extraClasses: "ibexa-icon ibexa-icon--small"
  })))));
};
Search.propTypes = {
  onSearchInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  initialValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Search.defaultProps = {
  initialValue: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedContext: () => (/* binding */ SelectedContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var SelectedContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var getStateHash = function getStateHash(state) {
  return state.map(function (item) {
    return item.id;
  }).join('_');
};
var SelectedProvider = function SelectedProvider(_ref) {
  var children = _ref.children,
    initiallySelectedItemsIds = _ref.initiallySelectedItemsIds;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var prevSelectedDataHashRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getStateHash([]));
  var prevInitialItemsIds = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)('');
  var moduleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ModuleIdContext);
  var _useStoredItemsReduce = (0,_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    _useStoredItemsReduce2 = _slicedToArray(_useStoredItemsReduce, 2),
    selectedData = _useStoredItemsReduce2[0],
    dispatchSelectedData = _useStoredItemsReduce2[1];
  var selectedDataContextValues = {
    selectedData: selectedData,
    dispatchSelectedData: dispatchSelectedData
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var initialIds = initiallySelectedItemsIds.join(',');
    if (prevInitialItemsIds.current !== initialIds) {
      prevInitialItemsIds.current = initialIds;
      var initialValues = initiallySelectedItemsIds.map(function (id) {
        return {
          id: id
        };
      });
      dispatchSelectedData({
        items: initialValues,
        type: _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_4__.STORED_ITEMS_ADD
      });
    }
  }, [initiallySelectedItemsIds]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var currentSelectedDataHash = getStateHash(selectedData);
    var areSetsEqual = prevSelectedDataHashRef.current === currentSelectedDataHash;
    if (!areSetsEqual) {
      rootDOMElement.dispatchEvent(new CustomEvent('ibexa-tb-update-selected', {
        detail: {
          id: moduleId,
          items: selectedData
        }
      }));
      prevSelectedDataHashRef.current = currentSelectedDataHash;
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedContext.Provider, {
    value: selectedDataContextValues
  }, children);
};
SelectedProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  initiallySelectedItemsIds: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
SelectedProvider.defaultProps = {
  initiallySelectedItemsIds: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedProvider);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/toggler/toggler.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/toggler/toggler.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var Toggler = function Toggler(_ref) {
  var onClick = _ref.onClick,
    totalSubitemsCount = _ref.totalSubitemsCount;
  var togglerAttrs = {
    className: 'c-tb-toggler',
    tabIndex: -1
  };
  if (totalSubitemsCount > 0) {
    togglerAttrs.onClick = onClick;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", togglerAttrs);
};
Toggler.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggler);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeFullWidthContext: () => (/* binding */ TreeFullWidthContext),
/* harmony export */   WidthContainerContext: () => (/* binding */ WidthContainerContext),
/* harmony export */   checkIsTreeCollapsed: () => (/* binding */ checkIsTreeCollapsed),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   hasHorizontalScroll: () => (/* binding */ hasHorizontalScroll),
/* harmony export */   isContainerNarrow: () => (/* binding */ isContainerNarrow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_cookies_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/cookies.helper.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useLocalStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var CLASS_IS_TREE_RESIZING = 'ibexa-is-tree-resizing';
var CONTAINER_CONFIG_ID = 'width-container-state';
var MIN_CONTAINER_WIDTH = 200;
var NARROW_CONTAINER_WIDTH = MIN_CONTAINER_WIDTH + 24;
var FULL_WIDTH_PADDING = 5;
var DEFAULT_CONTAINER_WIDTH = 350;
var MAX_WIDTH_FOR_SCROLL = 308;
var WidthContainerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TreeFullWidthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var checkIsTreeCollapsed = function checkIsTreeCollapsed(width) {
  return width <= MIN_CONTAINER_WIDTH;
};
var isContainerNarrow = function isContainerNarrow(width) {
  return width <= NARROW_CONTAINER_WIDTH;
};
var hasHorizontalScroll = function hasHorizontalScroll(width) {
  return width <= MAX_WIDTH_FOR_SCROLL;
};
var WidthContainer = function WidthContainer(_ref) {
  var children = _ref.children,
    moduleId = _ref.moduleId,
    userId = _ref.userId,
    scrollWrapperRef = _ref.scrollWrapperRef,
    isLoaded = _ref.isLoaded,
    useTheme = _ref.useTheme;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var resizeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.ResizableContext),
    isResizable = _useContext.isResizable;
  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__["default"])(CONTAINER_CONFIG_ID, 'common'),
    getLocalStorageData = _useLocalStorage.getLocalStorageData,
    saveLocalStorageData = _useLocalStorage.saveLocalStorageData;
  var saveWidth = function saveWidth(value) {
    var cookieName = "ibexa-tb_".concat(moduleId, "_").concat(userId, "_container-width");
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_cookies_helper__WEBPACK_IMPORTED_MODULE_4__.setCookie)(cookieName, value);
  };
  var saveConfig = function saveConfig(id, value) {
    var _getLocalStorageData;
    var data = (_getLocalStorageData = getLocalStorageData()) !== null && _getLocalStorageData !== void 0 ? _getLocalStorageData : {};
    data[id] = value;
    saveLocalStorageData(data);
  };
  var getConfig = function getConfig(id) {
    var _getLocalStorageData2;
    var data = (_getLocalStorageData2 = getLocalStorageData()) !== null && _getLocalStorageData2 !== void 0 ? _getLocalStorageData2 : {};
    return data[id];
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      containerWidth: getConfig('width') || DEFAULT_CONTAINER_WIDTH,
      useTheme: useTheme
    }),
    _useState2 = _slicedToArray(_useState, 2),
    containerData = _useState2[0],
    setContainerData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    treeFullWidth = _useState4[0],
    setTreeFullWidth = _useState4[1];
  var isResizing = containerData.isResizing,
    containerWidth = containerData.containerWidth,
    resizedContainerWidth = containerData.resizedContainerWidth;
  var width = isResizing ? resizedContainerWidth : containerWidth;
  var prevContainerWidthRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(width);
  var containerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-width-container c-tb-element': true,
    'c-tb-element--use-theme': useTheme,
    'c-tb-width-container--narrow': isContainerNarrow(width),
    'c-tb-width-container--collapsed': checkIsTreeCollapsed(width),
    'c-tb-width-container--has-horizontal-scroll': hasHorizontalScroll(containerWidth)
  });
  var containerAttrs = {
    className: containerClassName,
    ref: containerRef
  };
  var clearDocumentResizingListeners = function clearDocumentResizingListeners() {
    rootDOMElement.removeEventListener('mousemove', changeContainerWidth);
    rootDOMElement.removeEventListener('mouseup', handleResizeEnd);
    rootDOMElement.classList.remove(CLASS_IS_TREE_RESIZING);
  };
  var handleResizeEnd = function handleResizeEnd() {
    clearDocumentResizingListeners();
    setContainerData(function (prevState) {
      if (prevContainerWidthRef.current !== prevState.resizedContainerWidth) {
        setTreeFullWidth(0);
      }
      prevContainerWidthRef.current = prevState.resizedContainerWidth;
      return {
        resizeStartPositionX: 0,
        containerWidth: prevState.resizedContainerWidth,
        isResizing: false
      };
    });
  };
  var changeContainerWidth = function changeContainerWidth(_ref2) {
    var clientX = _ref2.clientX;
    var currentPositionX = clientX;
    setContainerData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        resizedContainerWidth: prevState.containerWidth + (currentPositionX - prevState.resizeStartPositionX)
      });
    });
  };
  var addWidthChangeListener = function addWidthChangeListener(_ref3) {
    var nativeEvent = _ref3.nativeEvent;
    var resizeStartPositionX = nativeEvent.clientX;
    var currentContainerWidth = containerRef.current.getBoundingClientRect().width;
    rootDOMElement.addEventListener('mousemove', changeContainerWidth, false);
    rootDOMElement.addEventListener('mouseup', handleResizeEnd, false);
    rootDOMElement.classList.add(CLASS_IS_TREE_RESIZING);
    setContainerData({
      resizeStartPositionX: resizeStartPositionX,
      resizedContainerWidth: currentContainerWidth,
      containerWidth: currentContainerWidth,
      isResizing: true
    });
  };
  var saveTreeFullWidth = function saveTreeFullWidth(widthDiff) {
    setTreeFullWidth(function (prevState) {
      return Math.max(prevState, widthDiff);
    });
  };
  var expandTreeToFullWidth = function expandTreeToFullWidth() {
    if (treeFullWidth > 0) {
      setContainerData(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          containerWidth: prevState.containerWidth + treeFullWidth + FULL_WIDTH_PADDING
        });
      });
      setTreeFullWidth(0);
    }
  };
  var resizableWrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tb-width-container__resizable-wrapper': true,
    'c-tb-width-container__resizable-wrapper--active': isResizable
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    saveConfig('width', containerWidth);
    saveWidth(containerWidth);
    rootDOMElement.dispatchEvent(new CustomEvent('ibexa-content-resized', {
      detail: {
        id: moduleId
      }
    }));
  }, [containerWidth]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _scrollWrapperRef$cur;
    var scrollTimeout;
    var scrollListener = function scrollListener(event) {
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(function (scrollTop) {
        saveConfig('scrollTop', scrollTop);
      }, 50, event.currentTarget.scrollTop);
    };
    (_scrollWrapperRef$cur = scrollWrapperRef.current) === null || _scrollWrapperRef$cur === void 0 || _scrollWrapperRef$cur.addEventListener('scroll', scrollListener, false);
    return function () {
      var _scrollWrapperRef$cur2;
      clearDocumentResizingListeners();
      (_scrollWrapperRef$cur2 = scrollWrapperRef.current) === null || _scrollWrapperRef$cur2 === void 0 || _scrollWrapperRef$cur2.removeEventListener('scroll', scrollListener, false);
    };
  }, [scrollWrapperRef.current, isLoaded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    rootDOMElement.dispatchEvent(new CustomEvent('ibexa-tb-rendered', {
      detail: {
        id: moduleId
      }
    }));
  }, []);
  if (width && isResizable) {
    containerAttrs.style = {
      width: "".concat(width, "px")
    };
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WidthContainerContext.Provider, {
    value: [containerData, setContainerData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeFullWidthContext.Provider, {
    value: saveTreeFullWidth
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", containerAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: resizableWrapperClassName,
    ref: resizeRef
  }, children), isResizable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-width-container__resize-handler",
    onMouseDown: addWidthChangeListener,
    onDoubleClick: expandTreeToFullWidth
  }))));
};
WidthContainer.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  moduleId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  isResizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  scrollWrapperRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Element)
  }),
  isLoaded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  useTheme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
WidthContainer.defaultProps = {
  isResizable: true,
  scrollWrapperRef: {
    current: null
  },
  isLoaded: false,
  useTheme: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidthContainer);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/array.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/array.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeDuplicates: () => (/* binding */ removeDuplicates)
/* harmony export */ });
var findFirstIndex = function findFirstIndex(items, originalItem) {
  return items.findIndex(function (item) {
    return item.id === originalItem.id;
  });
};
var removeDuplicates = function removeDuplicates(items) {
  var output = items.filter(function (item, index) {
    var firstIndex = findFirstIndex(items, item);
    return firstIndex === index;
  });
  return output;
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isItemDisabled: () => (/* binding */ isItemDisabled),
/* harmony export */   isItemEmpty: () => (/* binding */ isItemEmpty),
/* harmony export */   isItemStored: () => (/* binding */ isItemStored)
/* harmony export */ });
var isItemDisabled = function isItemDisabled(originalItem, _ref) {
  var parents = _ref.parents,
    selectedData = _ref.selectedData;
  var isDescendant = parents.some(function (parent) {
    return selectedData.some(function (item) {
      return item.id === parent.id;
    });
  });
  return isDescendant;
};
var isItemEmpty = function isItemEmpty(item) {
  return item === null || item === undefined || Object.keys(item).length === 0;
};
var isItemStored = function isItemStored(originalItem, items) {
  return items.some(function (item) {
    return item.id === originalItem.id;
  });
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SAVE_ITEM_EVENT: () => (/* binding */ SAVE_ITEM_EVENT),
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
var SAVE_ITEM_EVENT = 'ibexa-tree-builder:local-storage-save';
var LOCAL_STORAGE_ID = 'ibexa-tree-builder';
var getData = function getData(_ref) {
  var moduleId = _ref.moduleId,
    userId = _ref.userId,
    _ref$subId = _ref.subId,
    subId = _ref$subId === void 0 ? 'default' : _ref$subId,
    dataId = _ref.dataId;
  var dataStringified = localStorage.getItem(LOCAL_STORAGE_ID);
  var data = dataStringified ? JSON.parse(dataStringified) : {};
  if (!data[moduleId]) {
    data[moduleId] = {};
  }
  if (!data[moduleId][userId]) {
    data[moduleId][userId] = {};
  }
  if (!data[moduleId][userId][subId]) {
    data[moduleId][userId][subId] = {};
  }
  return data[moduleId][userId][subId][dataId];
};
var saveData = function saveData(_ref2) {
  var moduleId = _ref2.moduleId,
    userId = _ref2.userId,
    _ref2$subId = _ref2.subId,
    subId = _ref2$subId === void 0 ? 'default' : _ref2$subId,
    dataId = _ref2.dataId,
    dataToSave = _ref2.data;
  var shouldDispatchSaveEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dataStringified = localStorage.getItem(LOCAL_STORAGE_ID);
  var data = dataStringified ? JSON.parse(dataStringified) : {};
  if (!data[moduleId]) {
    data[moduleId] = {};
  }
  if (!data[moduleId][userId]) {
    data[moduleId][userId] = {};
  }
  if (!data[moduleId][userId][subId]) {
    data[moduleId][userId][subId] = {};
  }
  data[moduleId][userId][subId][dataId] = dataToSave;
  localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(data));
  if (shouldDispatchSaveEvent) {
    window.document.dispatchEvent(new CustomEvent(SAVE_ITEM_EVENT));
  }
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllChildren: () => (/* binding */ getAllChildren),
/* harmony export */   getMenuActions: () => (/* binding */ _getMenuActions)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var EXCLUDED_ACTION_IDS = ['preview'];
var isActionExcluded = function isActionExcluded(_ref) {
  var action = _ref.action,
    item = _ref.item,
    previewExcludedItemPath = _ref.previewExcludedItemPath;
  if (!item.internalItem || !EXCLUDED_ACTION_IDS.includes(action.id)) {
    return false;
  }
  var pathString = item.internalItem.pathString;
  return previewExcludedItemPath.some(function (excludedPath) {
    return pathString.startsWith(excludedPath);
  });
};
var _getMenuActions = function getMenuActions(_ref2) {
  var _getAdminUiConfig$sit, _getAdminUiConfig$sit2;
  var actions = _ref2.actions,
    item = _ref2.item,
    _ref2$activeActionsId = _ref2.activeActionsIds,
    activeActionsIds = _ref2$activeActionsId === void 0 ? [] : _ref2$activeActionsId,
    _ref2$previewExcluded = _ref2.previewExcludedItemPath,
    previewExcludedItemPath = _ref2$previewExcluded === void 0 ? (_getAdminUiConfig$sit = (_getAdminUiConfig$sit2 = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().siteContext) === null || _getAdminUiConfig$sit2 === void 0 ? void 0 : _getAdminUiConfig$sit2.excludedPaths) !== null && _getAdminUiConfig$sit !== void 0 ? _getAdminUiConfig$sit : [] : _ref2$previewExcluded;
  var filteredActions = previewExcludedItemPath.length && item ? actions.filter(function (action) {
    return !isActionExcluded({
      action: action,
      item: item,
      previewExcludedItemPath: previewExcludedItemPath
    });
  }) : actions;
  return filteredActions.map(function (action) {
    var nextAction = _objectSpread({}, action);
    if (nextAction.component && activeActionsIds.length && !activeActionsIds.includes(nextAction.id)) {
      nextAction.forcedProps = {
        isDisabled: true
      };
    }
    if (nextAction.subitems) {
      nextAction.subitems = _getMenuActions({
        actions: nextAction.subitems,
        item: item,
        activeActionsIds: activeActionsIds
      });
    }
    return nextAction;
  });
};

var getAllChildren = function getAllChildren(_ref3) {
  var data = _ref3.data,
    buildItem = _ref3.buildItem,
    condition = _ref3.condition;
  var output = [];
  var _getAllChildrenHelper = function getAllChildrenHelper() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    items.forEach(function (originalItem) {
      var item = buildItem ? buildItem(originalItem) : originalItem;
      if (condition === undefined || condition(item)) {
        output.push(item);
      }
      _getAllChildrenHelper(item.subitems);
    });
  };
  _getAllChildrenHelper([data]);
  return output;
};

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useBuildItem.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useBuildItem.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var buildItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_1__.BuildItemContext);
  return buildItem.apply(void 0, arguments);
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DELAYED_CHILDREN_SELECT_ADD: () => (/* binding */ DELAYED_CHILDREN_SELECT_ADD),
/* harmony export */   DELAYED_CHILDREN_SELECT_REMOVE: () => (/* binding */ DELAYED_CHILDREN_SELECT_REMOVE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

var initialState = [];
var DELAYED_CHILDREN_SELECT_ADD = 'DELAYED_CHILDREN_SELECT_ADD';
var DELAYED_CHILDREN_SELECT_REMOVE = 'DELAYED_CHILDREN_SELECT_REMOVE';
var delayedChildrenSelectReducer = function delayedChildrenSelectReducer(state, action) {
  switch (action.type) {
    case DELAYED_CHILDREN_SELECT_ADD:
      {
        var nextState = _toConsumableArray(state);
        var parentId = action.parentId;
        if (!nextState.includes(parentId)) {
          nextState.push(parentId);
        }
        return nextState;
      }
    case DELAYED_CHILDREN_SELECT_REMOVE:
      {
        var _nextState = _toConsumableArray(state);
        var parentIdIndex = _nextState.findIndex(function (parentId) {
          return parentId === action.parentId;
        });
        if (parentIdIndex < 0) {
          return _nextState;
        }
        _nextState.splice(parentIdIndex, 1);
        return _nextState;
      }
    default:
      throw new Error('useDelayedChildrenSelectReducer: no such action');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(delayedChildrenSelectReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    delayedChildrenSelectParentsIds = _useReducer2[0],
    dispatchDelayedChildrenSelectAction = _useReducer2[1];
  return [delayedChildrenSelectParentsIds, dispatchDelayedChildrenSelectAction];
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDidUpdateEffect.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDidUpdateEffect.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (callback, dependencyList) {
  var firstRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!firstRender.current) {
      callback();
    } else {
      firstRender.current = false;
    }
  }, dependencyList);
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useLocalStorage.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/localStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (dataId, subIdOverride) {
  var moduleId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.ModuleIdContext);
  var userId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.UserIdContext);
  var subIdFromContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_2__.SubIdContext);
  var subId = subIdOverride !== null && subIdOverride !== void 0 ? subIdOverride : subIdFromContext;
  var getLocalStorageData = function getLocalStorageData() {
    return (0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__.getData)({
      moduleId: moduleId,
      userId: userId,
      subId: subId,
      dataId: dataId
    });
  };
  var saveLocalStorageData = function saveLocalStorageData(data) {
    var shouldDispatchSaveEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (0,_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)({
      moduleId: moduleId,
      userId: userId,
      subId: subId,
      dataId: dataId,
      data: data
    }, shouldDispatchSaveEvent);
  };
  return {
    getLocalStorageData: getLocalStorageData,
    saveLocalStorageData: saveLocalStorageData
  };
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORED_ITEMS_ADD: () => (/* binding */ STORED_ITEMS_ADD),
/* harmony export */   STORED_ITEMS_CLEAR: () => (/* binding */ STORED_ITEMS_CLEAR),
/* harmony export */   STORED_ITEMS_REMOVE: () => (/* binding */ STORED_ITEMS_REMOVE),
/* harmony export */   STORED_ITEMS_REPLACE: () => (/* binding */ STORED_ITEMS_REPLACE),
/* harmony export */   STORED_ITEMS_SET: () => (/* binding */ STORED_ITEMS_SET),
/* harmony export */   STORED_ITEMS_TOGGLE: () => (/* binding */ STORED_ITEMS_TOGGLE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _helpers_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/array */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/array.js");
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



var initialState = [];
var STORED_ITEMS_SET = 'STORED_ITEMS_SET';
var STORED_ITEMS_ADD = 'STORED_ITEMS_ADD';
var STORED_ITEMS_REMOVE = 'STORED_ITEMS_REMOVE';
var STORED_ITEMS_TOGGLE = 'STORED_ITEMS_TOGGLE';
var STORED_ITEMS_REPLACE = 'STORED_ITEMS_REPLACE';
var STORED_ITEMS_CLEAR = 'STORED_ITEMS_CLEAR';
var storedItemsReducer = function storedItemsReducer(state, action) {
  switch (action.type) {
    case STORED_ITEMS_SET:
      {
        var items = action.items;
        var nextState = (0,_helpers_array__WEBPACK_IMPORTED_MODULE_2__.removeDuplicates)(items);
        return nextState;
      }
    case STORED_ITEMS_ADD:
      {
        var _items = action.items;
        var itemsToAdd = _items.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, state);
        });
        var _nextState = [].concat(_toConsumableArray(state), _toConsumableArray(itemsToAdd));
        return _nextState;
      }
    case STORED_ITEMS_REMOVE:
      {
        var _items2 = action.items;
        var _nextState2 = state.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, _items2);
        });
        return _nextState2;
      }
    case STORED_ITEMS_REPLACE:
      {
        var _items3 = action.items;
        var _nextState3 = _toConsumableArray(state);
        var isModified = false;
        _items3.forEach(function (item) {
          var stateItemIndex = _nextState3.findIndex(function (stateItem) {
            return stateItem.id === item.id;
          });
          if (stateItemIndex >= 0) {
            _nextState3[stateItemIndex] = item;
            isModified = true;
          }
        });
        return isModified ? _nextState3 : state;
      }
    case STORED_ITEMS_TOGGLE:
      {
        var _items4 = action.items;
        var oldItems = state.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, _items4);
        });
        var newItems = _items4.filter(function (item) {
          return !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_1__.isItemStored)(item, state);
        });
        var _nextState4 = [].concat(_toConsumableArray(oldItems), _toConsumableArray(newItems));
        return _nextState4;
      }
    case STORED_ITEMS_CLEAR:
      {
        return [];
      }
    default:
      throw new Error();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(storedItemsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    storedItems = _useReducer2[0],
    dispatchStoredItemsAction = _useReducer2[1];
  return [storedItems, dispatchStoredItemsAction];
});

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTION_PARENT: () => (/* binding */ ACTION_PARENT),
/* harmony export */   ACTION_TYPE: () => (/* binding */ ACTION_TYPE),
/* harmony export */   ActiveContext: () => (/* binding */ ActiveContext),
/* harmony export */   BuildItemContext: () => (/* binding */ BuildItemContext),
/* harmony export */   CallbackContext: () => (/* binding */ CallbackContext),
/* harmony export */   DelayedChildrenSelectContext: () => (/* binding */ DelayedChildrenSelectContext),
/* harmony export */   DisabledItemContext: () => (/* binding */ DisabledItemContext),
/* harmony export */   DisabledItemInputContext: () => (/* binding */ DisabledItemInputContext),
/* harmony export */   DraggableDisabledContext: () => (/* binding */ DraggableDisabledContext),
/* harmony export */   LoadMoreSubitemsContext: () => (/* binding */ LoadMoreSubitemsContext),
/* harmony export */   MenuActionsContext: () => (/* binding */ MenuActionsContext),
/* harmony export */   ModuleIdContext: () => (/* binding */ ModuleIdContext),
/* harmony export */   QUICK_ACTION_MODES: () => (/* binding */ QUICK_ACTION_MODES),
/* harmony export */   QuickActionsContext: () => (/* binding */ QuickActionsContext),
/* harmony export */   ResizableContext: () => (/* binding */ ResizableContext),
/* harmony export */   ScrollWrapperContext: () => (/* binding */ ScrollWrapperContext),
/* harmony export */   SelectedLimitContext: () => (/* binding */ SelectedLimitContext),
/* harmony export */   SubIdContext: () => (/* binding */ SubIdContext),
/* harmony export */   SubitemsLimitContext: () => (/* binding */ SubitemsLimitContext),
/* harmony export */   TreeContext: () => (/* binding */ TreeContext),
/* harmony export */   TreeDepthLimitContext: () => (/* binding */ TreeDepthLimitContext),
/* harmony export */   UserIdContext: () => (/* binding */ UserIdContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _components_width_container_width_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/width-container/width.container */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/width-container/width.container.js");
/* harmony import */ var _components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/local-storage-expand-connector/local.storage.expand.connector */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/local-storage-expand-connector/local.storage.expand.connector.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _components_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _components_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/header/header.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/search/search.js");
/* harmony import */ var _components_list_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/list/list */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/list/list.js");
/* harmony import */ var _components_loader_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/loader/loader */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/loader/loader.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _helpers_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hooks/useDelayedChildrenSelectReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useDelayedChildrenSelectReducer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

















var BuildItemContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MenuActionsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CallbackContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ResizableContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ActiveContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DraggableDisabledContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var LoadMoreSubitemsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SubitemsLimitContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedLimitContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TreeDepthLimitContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var UserIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ModuleIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TreeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DisabledItemContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DisabledItemInputContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SubIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ScrollWrapperContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DelayedChildrenSelectContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var QuickActionsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ACTION_TYPE = {
  LIST_MENU: 'LIST_MENU',
  CONTEXTUAL_MENU: 'CONTEXTUAL_MENU'
};
var ACTION_PARENT = {
  TOP_MENU: 'TOP_MENU',
  SINGLE_ITEM: 'SINGLE_ITEM'
};
var QUICK_ACTION_MODES = {
  CREATE: 'CREATE',
  EDIT: 'EDIT'
};
var _window = window,
  ibexa = _window.ibexa;
var TreeBuilderModule = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ibexa$treeBuilder;
  var actionsType = _ref.actionsType,
    actionsVisible = _ref.actionsVisible,
    callbackAddElement = _ref.callbackAddElement,
    callbackCopyElements = _ref.callbackCopyElements,
    callbackDeleteElements = _ref.callbackDeleteElements,
    callbackMoveElements = _ref.callbackMoveElements,
    callbackToggleExpanded = _ref.callbackToggleExpanded,
    callbackQuickEditElement = _ref.callbackQuickEditElement,
    callbackQuickCreateElement = _ref.callbackQuickCreateElement,
    children = _ref.children,
    dragDisabled = _ref.dragDisabled,
    getMenuActions = _ref.getMenuActions,
    headerVisible = _ref.headerVisible,
    searchVisible = _ref.searchVisible,
    isActive = _ref.isActive,
    checkIsDisabled = _ref.checkIsDisabled,
    checkIsInputDisabled = _ref.checkIsInputDisabled,
    isResizable = _ref.isResizable,
    loadMoreSubitems = _ref.loadMoreSubitems,
    moduleId = _ref.moduleId,
    moduleName = _ref.moduleName,
    selectedLimit = _ref.selectedLimit,
    subitemsLimit = _ref.subitemsLimit,
    tree = _ref.tree,
    treeDepthLimit = _ref.treeDepthLimit,
    userId = _ref.userId,
    initiallySelectedItemsIds = _ref.initiallySelectedItemsIds,
    initiallyExpandedItems = _ref.initiallyExpandedItems,
    buildItem = _ref.buildItem,
    subId = _ref.subId,
    renderHeaderContent = _ref.renderHeaderContent,
    renderHeaderActions = _ref.renderHeaderActions,
    renderHeaderToggleBtn = _ref.renderHeaderToggleBtn,
    isLocalStorageActive = _ref.isLocalStorageActive,
    onSearchInputChange = _ref.onSearchInputChange,
    initialSearchValue = _ref.initialSearchValue,
    extraClasses = _ref.extraClasses,
    isLoading = _ref.isLoading,
    rootSelectionDisabled = _ref.rootSelectionDisabled,
    selectionDisabled = _ref.selectionDisabled,
    extraBottomItems = _ref.extraBottomItems,
    rootElementDisabled = _ref.rootElementDisabled,
    useTheme = _ref.useTheme,
    moduleMenuActions = _ref.moduleMenuActions;
  var rootDOMElement = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRootDOMElement)();
  var treeNodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var scrollWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var localStorageExpandConnectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    actionsHeight = _useState2[0],
    setActionsHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    quickActionMode = _useState4[0],
    setQuickActionMode = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    quickActionItemId = _useState6[0],
    setQuickActionItemId = _useState6[1];
  var _useDelayedChildrenSe = (0,_hooks_useDelayedChildrenSelectReducer__WEBPACK_IMPORTED_MODULE_16__["default"])(),
    _useDelayedChildrenSe2 = _slicedToArray(_useDelayedChildrenSe, 2),
    delayedChildrenSelectParentsIds = _useDelayedChildrenSe2[0],
    dispatchDelayedChildrenSelectAction = _useDelayedChildrenSe2[1];
  var actionsCallbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (node) {
    var _node$offsetHeight;
    var resizeObserver = new ResizeObserver(function (entries) {
      setActionsHeight(entries[0].target.offsetHeight);
    });
    if (!node) {
      return;
    }
    setActionsHeight((_node$offsetHeight = node.offsetHeight) !== null && _node$offsetHeight !== void 0 ? _node$offsetHeight : 0);
    resizeObserver.observe(node);
  }, []);
  var callbackContextData = {
    callbackAddElement: callbackAddElement,
    callbackCopyElements: callbackCopyElements,
    callbackDeleteElements: callbackDeleteElements,
    callbackMoveElements: callbackMoveElements,
    callbackToggleExpanded: callbackToggleExpanded,
    callbackQuickEditElement: callbackQuickEditElement,
    callbackQuickCreateElement: callbackQuickCreateElement
  };
  var menuActionsContextData = {
    actionsType: actionsType,
    actionsVisible: actionsVisible,
    getMenuActions: getMenuActions,
    actions: moduleMenuActions || (ibexa === null || ibexa === void 0 || (_ibexa$treeBuilder = ibexa.treeBuilder) === null || _ibexa$treeBuilder === void 0 || (_ibexa$treeBuilder = _ibexa$treeBuilder[moduleId]) === null || _ibexa$treeBuilder === void 0 ? void 0 : _ibexa$treeBuilder.menuActions) || []
  };
  var treeClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-tb-tree': true,
    'c-tb-tree--draggable': !dragDisabled,
    'c-tb-tree--no-header': !headerVisible
  }, extraClasses, extraClasses !== ''));
  var renderHeader = function renderHeader() {
    if (!headerVisible) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_header_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
      name: moduleName,
      renderContent: renderHeaderContent,
      renderActions: renderHeaderActions,
      renderToggleBtn: renderHeaderToggleBtn
    });
  };
  var renderSearch = function renderSearch() {
    if (!searchVisible) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_search_search__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onSearchInputChange: onSearchInputChange,
      initialValue: initialSearchValue
    });
  };
  var renderContent = function renderContent() {
    if (isLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_loader_loader__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: scrollWrapperRef,
      className: "c-tb-tree__scrollable-wrapper",
      style: {
        height: "calc(100% - ".concat(actionsHeight, "px)")
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_list_list__WEBPACK_IMPORTED_MODULE_12__["default"], {
      rootSelectionDisabled: rootSelectionDisabled,
      rootElementDisabled: rootElementDisabled,
      selectionDisabled: selectionDisabled,
      isExpanded: true,
      subitems: !(0,_helpers_item__WEBPACK_IMPORTED_MODULE_14__.isItemEmpty)(tree) ? [tree] : [],
      depth: rootElementDisabled ? -2 : -1
    }), extraBottomItems.map(function (extraItem) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_list_list__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: extraItem.id,
        selectionDisabled: true,
        isExpanded: true,
        subitems: [_objectSpread(_objectSpread({}, extraItem), {}, {
          subitems: [],
          total: 0
        })],
        depth: -1
      });
    }), children);
  };
  var triggerCreateAction = function triggerCreateAction(event) {
    var itemId = event.detail.itemId;
    setQuickActionMode(QUICK_ACTION_MODES.CREATE);
    setQuickActionItemId(itemId);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    rootDOMElement.addEventListener('ibexa-tb-trigger-quick-action-create', triggerCreateAction, false);
    return function () {
      rootDOMElement.removeEventListener('ibexa-tb-trigger-quick-action-create', triggerCreateAction, false);
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      expandItems: function expandItems(items) {
        var _localStorageExpandCo;
        return (_localStorageExpandCo = localStorageExpandConnectorRef.current) === null || _localStorageExpandCo === void 0 ? void 0 : _localStorageExpandCo.expandItems(items);
      }
    };
  });

  /* eslint-disable max-len */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ModuleIdContext.Provider, {
    value: moduleId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UserIdContext.Provider, {
    value: userId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubIdContext.Provider, {
    value: subId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResizableContext.Provider, {
    value: {
      isResizable: isResizable
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_width_container_width_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    moduleId: moduleId,
    userId: userId,
    scrollWrapperRef: scrollWrapperRef,
    isLoaded: !isLoading,
    useTheme: useTheme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BuildItemContext.Provider, {
    value: buildItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveContext.Provider, {
    value: isActive
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DraggableDisabledContext.Provider, {
    value: dragDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadMoreSubitemsContext.Provider, {
    value: loadMoreSubitems
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubitemsLimitContext.Provider, {
    value: subitemsLimit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedLimitContext.Provider, {
    value: selectedLimit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeDepthLimitContext.Provider, {
    value: treeDepthLimit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuActionsContext.Provider, {
    value: menuActionsContextData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CallbackContext.Provider, {
    value: callbackContextData
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisabledItemContext.Provider, {
    value: checkIsDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DisabledItemInputContext.Provider, {
    value: checkIsInputDisabled
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    initiallySelectedItemsIds: initiallySelectedItemsIds
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DelayedChildrenSelectContext.Provider, {
    value: {
      delayedChildrenSelectParentsIds: delayedChildrenSelectParentsIds,
      dispatchDelayedChildrenSelectAction: dispatchDelayedChildrenSelectAction
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    callbackMoveElements: callbackMoveElements,
    treeRef: treeNodeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeContext.Provider, {
    value: tree
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ScrollWrapperContext.Provider, {
    value: scrollWrapperRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_local_storage_expand_connector_local_storage_expand_connector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: localStorageExpandConnectorRef,
    initiallyExpandedItems: initiallyExpandedItems,
    isLocalStorageActive: isLocalStorageActive
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: treeClassName,
    ref: treeNodeRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tb-tree__actions",
    ref: actionsCallbackRef
  }, renderHeader(), renderSearch()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(QuickActionsContext.Provider, {
    value: {
      quickActionMode: quickActionMode,
      quickActionItemId: quickActionItemId,
      setQuickActionMode: setQuickActionMode,
      setQuickActionItemId: setQuickActionItemId
    }
  }, renderContent()))))))))))))))))))))))))));
  /* eslint-enable max-len */
});
TreeBuilderModule.propTypes = {
  isActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  moduleId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  moduleName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  callbackAddElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackCopyElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackDeleteElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackMoveElements: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackToggleExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackQuickEditElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  callbackQuickCreateElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  actionsType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  actionsVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  buildItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  dragDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  getMenuActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  headerVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  searchVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  checkIsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  checkIsInputDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isResizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectedLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeDepthLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  tree: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    total: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    renderLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
    dragItemDiasbled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    actionsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }),
  initiallySelectedItemsIds: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  initiallyExpandedItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  subId: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  renderHeaderContent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderHeaderActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  renderHeaderToggleBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isLocalStorageActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onSearchInputChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  initialSearchValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rootSelectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectionDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraBottomItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  rootElementDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  useTheme: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  moduleMenuActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
TreeBuilderModule.defaultProps = {
  actionsType: null,
  actionsVisible: true,
  children: null,
  buildItem: function buildItem(item) {
    return item;
  },
  callbackAddElement: function callbackAddElement() {},
  callbackCopyElements: function callbackCopyElements() {
    return Promise.resolve();
  },
  callbackDeleteElements: function callbackDeleteElements() {
    return Promise.resolve();
  },
  callbackMoveElements: function callbackMoveElements() {
    return Promise.resolve();
  },
  callbackQuickEditElement: function callbackQuickEditElement() {
    return Promise.resolve();
  },
  callbackQuickCreateElement: function callbackQuickCreateElement() {
    return Promise.resolve();
  },
  callbackToggleExpanded: function callbackToggleExpanded(item, _ref2) {
    var loadMore = _ref2.loadMore;
    return loadMore();
  },
  dragDisabled: false,
  getMenuActions: function getMenuActions(_ref3) {
    var actions = _ref3.actions,
      item = _ref3.item;
    return (0,_helpers_tree__WEBPACK_IMPORTED_MODULE_15__.getMenuActions)({
      actions: actions,
      item: item
    });
  },
  headerVisible: true,
  searchVisible: false,
  checkIsDisabled: function checkIsDisabled() {
    return false;
  },
  checkIsInputDisabled: function checkIsInputDisabled() {
    return false;
  },
  isResizable: true,
  selectedLimit: null,
  subitemsLimit: null,
  treeDepthLimit: null,
  tree: null,
  initiallySelectedItemsIds: [],
  initiallyExpandedItems: null,
  subId: 'default',
  renderHeaderContent: null,
  renderHeaderActions: null,
  renderHeaderToggleBtn: null,
  isLocalStorageActive: true,
  onSearchInputChange: function onSearchInputChange() {},
  initialSearchValue: '',
  extraClasses: '',
  isLoading: false,
  rootSelectionDisabled: false,
  selectionDisabled: false,
  extraBottomItems: [],
  loadMoreSubitems: undefined,
  rootElementDisabled: false,
  moduleName: undefined,
  useTheme: false,
  moduleMenuActions: null
};
TreeBuilderModule.displayName = 'TreeBuilderModule';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeBuilderModule);

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
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/ui-dev/src/modules/content-tree/config.loader.js"));
/******/ }
]);