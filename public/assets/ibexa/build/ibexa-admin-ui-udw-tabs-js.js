"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-udw-tabs-js"],{

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/location.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/location.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocationsBreadcrumbs: () => (/* binding */ buildLocationsBreadcrumbs),
/* harmony export */   findLocationsByIds: () => (/* binding */ findLocationsByIds),
/* harmony export */   removeRootFromPathString: () => (/* binding */ removeRootFromPathString)
/* harmony export */ });
/* harmony import */ var _text_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/text.helper.js");
/* harmony import */ var _request_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");
/* harmony import */ var _notification_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/notification.helper.js");
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");




var removeRootFromPathString = function removeRootFromPathString(pathString) {
  var pathArray = pathString.split('/').filter(function (id) {
    return id;
  });
  return pathArray.splice(1, pathArray.length - 1);
};
var buildLocationsBreadcrumbs = function buildLocationsBreadcrumbs(locations) {
  return locations.map(function (Location) {
    return (0,_text_helper__WEBPACK_IMPORTED_MODULE_0__.escapeHTML)(Location.ContentInfo.Content.TranslatedName);
  }).join(' / ');
};
var findLocationsByIds = function findLocationsByIds(idList, callback) {
  var _getRestInfo = (0,_context_helper__WEBPACK_IMPORTED_MODULE_3__.getRestInfo)(),
    token = _getRestInfo.token,
    siteaccess = _getRestInfo.siteaccess,
    accessToken = _getRestInfo.accessToken,
    instanceUrl = _getRestInfo.instanceUrl;
  var Translator = (0,_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var body = JSON.stringify({
    ViewInput: {
      identifier: "locations-by-path-string-".concat(idList.join('-')),
      "public": false,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: {
          SectionIdentifier: 'ascending'
        },
        Filter: {
          LocationIdCriterion: idList.join(',')
        },
        limit: 50,
        offset: 0
      }
    }
  });
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/views"), {
    method: 'POST',
    headers: (0,_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }),
    body: body,
    mode: (0,_request_helper__WEBPACK_IMPORTED_MODULE_1__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  var errorMessage = Translator.trans(/*@Desc("Cannot find children Locations with ID %idList%")*/'select_location.error', {
    idList: idList.join(',')
  }, 'ibexa_universal_discovery_widget');
  fetch(request).then(_request_helper__WEBPACK_IMPORTED_MODULE_1__.getJsonFromResponse).then(function (viewData) {
    return viewData.View.Result.searchHits.searchHit;
  }).then(function (searchHits) {
    return searchHits.map(function (searchHit) {
      return searchHit.value.Location;
    });
  }).then(callback)["catch"](function () {
    return (0,_notification_helper__WEBPACK_IMPORTED_MODULE_2__.showErrorNotification)(errorMessage);
  });
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computePages: () => (/* binding */ computePages)
/* harmony export */ });
/**
 * Computes array with pagination pages.
 *
 * Example 1: [ 1, "...", 5, 6, 7, 8, 9, 10 ] (for: proximity = 2; pagesNumber = 10; activePageIndex = 7)
 * Example 2: [ 1, "...", 3, 4, 5, 6, 7, "...", 10 ] (for: proximity = 2; pagesNumber = 10; activePageIndex = 5)
 * Example 3: [ 1, "...", 8, 9, 10, 11, 12, "...", 20 ] (for: proximity = 2; pagesNumber = 20; activePageIndex = 10)
 *
 * @param {Object} params
 * @param {Number} params.proximity
 * @param {Number} params.activePageIndex
 * @param {Number} params.pagesCount
 * @param {String} params.separator
 *
 * @returns {Array}
 */
var computePages = function computePages(_ref) {
  var _ref$proximity = _ref.proximity,
    proximity = _ref$proximity === void 0 ? 2 : _ref$proximity,
    activePageIndex = _ref.activePageIndex,
    pagesCount = _ref.pagesCount,
    _ref$separator = _ref.separator,
    separator = _ref$separator === void 0 ? '...' : _ref$separator;
  var pages = [];
  var wasSeparator = false;
  for (var i = 1; i <= pagesCount; i++) {
    var isFirstPage = i === 1;
    var isLastPage = i === pagesCount;
    var isInRange = i >= activePageIndex + 1 - proximity && i <= activePageIndex + 1 + proximity;
    if (isFirstPage || isLastPage || isInRange) {
      pages.push(i);
      wasSeparator = false;
    } else if (!wasSeparator) {
      pages.push(separator);
      wasSeparator = true;
    }
  }
  return pages;
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/text.helper.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/text.helper.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeHTML: () => (/* binding */ escapeHTML),
/* harmony export */   escapeHTMLAttribute: () => (/* binding */ escapeHTMLAttribute)
/* harmony export */ });
var _window = window,
  doc = _window.document;
var escapeHTML = function escapeHTML(string) {
  var stringTempNode = doc.createElement('div');
  stringTempNode.appendChild(doc.createTextNode(string));
  return stringTempNode.innerHTML;
};
var escapeHTMLAttribute = function escapeHTMLAttribute(string) {
  if (string === null) {
    return '';
  }
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertDateToTimezone: () => (/* binding */ convertDateToTimezone),
/* harmony export */   formatFullDateTime: () => (/* binding */ formatFullDateTime),
/* harmony export */   formatShortDateTime: () => (/* binding */ formatShortDateTime),
/* harmony export */   getBrowserTimezone: () => (/* binding */ getBrowserTimezone)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var convertDateToTimezone = function convertDateToTimezone(date) {
  var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().timezone;
  var forceSameTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var moment = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getMoment)();
  return moment(date).tz(timezone, forceSameTime);
};
var formatDate = function formatDate(date) {
  var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var format = arguments.length > 2 ? arguments[2] : undefined;
  if (timezone) {
    date = convertDateToTimezone(date, timezone);
  }
  var moment = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getMoment)();
  return moment(date).formatICU(format);
};
var formatFullDateTime = function formatFullDateTime(date) {
  var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().timezone;
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().dateFormat.fullDateTime;
  return formatDate(date, timezone, format);
};
var formatShortDateTime = function formatShortDateTime(date) {
  var timezone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().timezone;
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().dateFormat.shortDateTime;
  return formatDate(date, timezone, format);
};
var getBrowserTimezone = function getBrowserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/user.helper.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/user.helper.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getId: () => (/* binding */ getId)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");

var _window = window,
  doc = _window.document;
var getId = function getId() {
  var _doc$querySelector, _user$user;
  var _getAdminUiConfig = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)(),
    user = _getAdminUiConfig.user;
  var metaUserId = (_doc$querySelector = doc.querySelector('meta[name="UserId"]')) === null || _doc$querySelector === void 0 ? void 0 : _doc$querySelector.content;
  var userId = metaUserId !== null && metaUserId !== void 0 ? metaUserId : (_user$user = user.user) === null || _user$user === void 0 ? void 0 : _user$user.User;
  return userId ? parseInt(userId, 10) : 0;
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js ***!
  \*****************************************************************************************/
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
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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






var _window = window,
  document = _window.document;
var MIN_SEARCH_ITEMS_DEFAULT = 5;
var MIN_ITEMS_LIST_HEIGHT = 150;
var ITEMS_LIST_WIDGET_MARGIN = 8;
var ITEMS_LIST_SITE_MARGIN = ITEMS_LIST_WIDGET_MARGIN + 4;
var RESTRICTED_AREA_ITEMS_CONTAINER = 190;
var Dropdown = function Dropdown(_ref) {
  var dropdownListRef = _ref.dropdownListRef,
    value = _ref.value,
    options = _ref.options,
    onChange = _ref.onChange,
    small = _ref.small,
    single = _ref.single,
    disabled = _ref.disabled,
    placeholder = _ref.placeholder,
    extraClasses = _ref.extraClasses,
    renderSelectedItem = _ref.renderSelectedItem,
    minSearchItems = _ref.minSearchItems;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var containerItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var selectionInfoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    filterText = _useState4[0],
    setFilterText = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    itemsListStyles = _useState6[0],
    setItemsListStyles = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    overflowItemsCount = _useState8[0],
    setOverflowItemsCount = _useState8[1];
  var selectedItems = single ? [options.find(function (option) {
    return option.value === value;
  })] : value.map(function (singleValue) {
    return options.find(function (option) {
      return option.value === singleValue;
    });
  });
  var dropdownClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'ibexa-dropdown': true,
    'ibexa-dropdown--single': single,
    'ibexa-dropdown--multi': !single,
    'ibexa-dropdown--small': small,
    'ibexa-dropdown--disabled': disabled,
    'ibexa-dropdown--expanded': isExpanded
  }, extraClasses, true));
  var toggleExpanded = function toggleExpanded() {
    calculateAndSetItemsListStyles();
    setIsExpanded(function (prevState) {
      return !prevState && !disabled;
    });
  };
  var updateFilterValue = function updateFilterValue(event) {
    return setFilterText(event.target.value);
  };
  var resetInputValue = function resetInputValue() {
    return setFilterText('');
  };
  var showItem = function showItem(itemValue, searchedTerm) {
    if (searchedTerm.length < 3) {
      return true;
    }
    var itemValueLowerCase = itemValue.toLowerCase();
    var searchedTermLowerCase = searchedTerm.toLowerCase();
    return itemValueLowerCase.indexOf(searchedTermLowerCase) === 0;
  };
  var renderItem = function renderItem(item) {
    var isItemSelected = single ? item.value === value : value.includes(item.value);
    var itemClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'ibexa-dropdown__item': true,
      'ibexa-dropdown__item--selected': isItemSelected,
      'ibexa-dropdown__item--hidden': !showItem(item.label, filterText)
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: itemClassName,
      key: item.value,
      onClick: function onClick() {
        onChange(item.value);
        if (single) {
          toggleExpanded();
        }
      }
    }, !single && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "checkbox",
      className: "ibexa-input ibexa-input--checkbox",
      checked: isItemSelected,
      onChange: function onChange() {}
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ibexa-dropdown__item-label"
    }, item.label), single && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-dropdown__item-check"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "checkmark",
      extraClasses: "ibexa-icon--tiny-small ibexa-dropdown__item-check-icon"
    })));
  };
  var calculateAndSetItemsListStyles = function calculateAndSetItemsListStyles() {
    var itemsStyles = {};
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      width = _containerRef$current.width,
      left = _containerRef$current.left,
      top = _containerRef$current.top,
      height = _containerRef$current.height,
      bottom = _containerRef$current.bottom;
    itemsStyles.width = width;
    itemsStyles.left = left;
    if (window.innerHeight - bottom > MIN_ITEMS_LIST_HEIGHT) {
      itemsStyles.top = top + height + ITEMS_LIST_WIDGET_MARGIN;
      itemsStyles.maxHeight = window.innerHeight - bottom - ITEMS_LIST_SITE_MARGIN;
    } else {
      var _headerContainer$offs;
      var headerContainer = document.querySelector('.ibexa-main-header');
      var headerHeight = (_headerContainer$offs = headerContainer === null || headerContainer === void 0 ? void 0 : headerContainer.offsetHeight) !== null && _headerContainer$offs !== void 0 ? _headerContainer$offs : 0;
      itemsStyles.top = top - ITEMS_LIST_WIDGET_MARGIN;
      itemsStyles.maxHeight = top - headerHeight - ITEMS_LIST_SITE_MARGIN;
      itemsStyles.transform = 'translateY(-100%)';
    }
    setItemsListStyles(itemsStyles);
  };
  var renderItemsList = function renderItemsList() {
    var searchPlaceholder = Translator.trans(/*@Desc("Search...")*/'dropdown.placeholder', {}, 'ibexa_universal_discovery_widget');
    var itemsContainerClass = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'ibexa-dropdown__items': true,
      'ibexa-dropdown__items--search-hidden': options.length < minSearchItems
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: itemsContainerClass,
      style: itemsListStyles,
      ref: containerItemsRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-input-text-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: searchPlaceholder,
      className: "ibexa-dropdown__items-filter ibexa-input ibexa-input--small ibexa-input--text form-control",
      onChange: updateFilterValue,
      value: filterText
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-input-text-wrapper__actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--clear",
      tabIndex: "-1",
      onClick: resetInputValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "discard",
      extraClasses: "ibexa-icon--small"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--search",
      tabIndex: "-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      name: "search",
      extraClasses: "ibexa-icon--small"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "ibexa-dropdown__items-list"
    }, options.map(renderItem)));
  };
  var renderPlaceholder = function renderPlaceholder() {
    if (!placeholder) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "ibexa-dropdown__selected-item ibexa-dropdown__selected-item--predefined ibexa-dropdown__selected-placeholder"
    }, placeholder);
  };
  var renderSelectedMultipleItem = function renderSelectedMultipleItem(item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.value,
      className: "ibexa-dropdown__selected-item"
    }, item.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ibexa-dropdown__remove-selection",
      onClick: function onClick() {
        return onChange(item.value);
      }
    }));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpanded) {
      return;
    }
    var scrollContainer = document.querySelector('.ibexa-main-container__content-column');
    var onInteractionOutside = function onInteractionOutside(event) {
      var _containerItemsRef$cu;
      if (containerRef.current.contains(event.target) || (_containerItemsRef$cu = containerItemsRef.current) !== null && _containerItemsRef$cu !== void 0 && _containerItemsRef$cu.contains(event.target)) {
        return;
      }
      setIsExpanded(false);
    };
    document.body.addEventListener('click', onInteractionOutside, false);
    scrollContainer === null || scrollContainer === void 0 || scrollContainer.addEventListener('scroll', calculateAndSetItemsListStyles, false);
    return function () {
      document.body.removeEventListener('click', onInteractionOutside);
      scrollContainer === null || scrollContainer === void 0 || scrollContainer.removeEventListener('scroll', calculateAndSetItemsListStyles);
      setItemsListStyles({});
    };
  }, [isExpanded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (single || !selectionInfoRef.current) {
      return;
    }
    var itemsWidth = 0;
    var numberOfOverflowItems = 0;
    var selectedItemsNodes = selectionInfoRef.current.querySelectorAll('.ibexa-dropdown__selected-item');
    var selectedItemsOverflow = selectionInfoRef.current.querySelector('.ibexa-dropdown__selected-overflow-number');
    var dropdownItemsContainerWidth = selectionInfoRef.current.offsetWidth - RESTRICTED_AREA_ITEMS_CONTAINER;
    if (selectedItemsOverflow) {
      selectedItemsNodes.forEach(function (item) {
        item.hidden = false;
      });
      selectedItemsNodes.forEach(function (item, index) {
        var isOverflowNumber = item.classList.contains('ibexa-dropdown__selected-overflow-number');
        itemsWidth += item.offsetWidth;
        if (!isOverflowNumber && index !== 0 && itemsWidth > dropdownItemsContainerWidth) {
          var isPlaceholder = item.classList.contains('ibexa-dropdown__selected-placeholder');
          item.hidden = true;
          if (!isPlaceholder) {
            numberOfOverflowItems++;
          }
        }
      });
      selectedItemsOverflow.hidden = !numberOfOverflowItems;
      if (numberOfOverflowItems !== overflowItemsCount) {
        setOverflowItemsCount(numberOfOverflowItems);
      }
    }
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (single) {
      setIsExpanded(false);
    }
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: dropdownClassName,
    ref: containerRef,
    onClick: toggleExpanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-dropdown__wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "ibexa-dropdown__selection-info",
    ref: selectionInfoRef
  }, selectedItems.length === 0 && renderPlaceholder(), single && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ibexa-dropdown__selected-item"
  }, renderSelectedItem(selectedItems[0])), !single && selectedItems.map(function (singleValue) {
    return renderSelectedMultipleItem(singleValue);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "ibexa-dropdown__selected-item ibexa-dropdown__selected-item--predefined ibexa-dropdown__selected-overflow-number",
    hidden: overflowItemsCount === 0
  }, overflowItemsCount)))), isExpanded && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(renderItemsList(), dropdownListRef.current));
};
Dropdown.propTypes = {
  dropdownListRef: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)]).isRequired,
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  small: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  single: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  renderSelectedItem: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  minSearchItems: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
};
Dropdown.defaultProps = {
  small: false,
  single: false,
  disabled: false,
  placeholder: null,
  extraClasses: '',
  renderSelectedItem: function renderSelectedItem(item) {
    return item === null || item === void 0 ? void 0 : item.label;
  },
  minSearchItems: MIN_SEARCH_ITEMS_DEFAULT
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var PaginationButton = function PaginationButton(_ref) {
  var label = _ref.label,
    disabled = _ref.disabled,
    additionalClasses = _ref.additionalClasses,
    buttonAdditionalClasses = _ref.buttonAdditionalClasses,
    onPageChange = _ref.onPageChange,
    pageIndex = _ref.pageIndex;
  var handleClick = function handleClick() {
    if (!disabled && Number.isInteger(pageIndex)) {
      onPageChange(pageIndex);
    }
  };
  var className = "c-pagination-button page-item ".concat(additionalClasses);
  className = disabled ? "".concat(className, " disabled") : className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "page-link ".concat(buttonAdditionalClasses),
    onClick: handleClick,
    type: "button"
  }, label));
};
PaginationButton.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  pageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  additionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  buttonAdditionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
PaginationButton.defaultProps = {
  pageIndex: null,
  label: '',
  disabled: false,
  additionalClasses: '',
  buttonAdditionalClasses: '',
  onPageChange: function onPageChange() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js ***!
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/pagination.helper.js");
/* harmony import */ var _pagination_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.button */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.button.js");




var DOTS = '...';
var Pagination = function Pagination(_ref) {
  var totalCount = _ref.totalCount,
    itemsPerPage = _ref.itemsPerPage,
    proximity = _ref.proximity,
    activePageIndex = _ref.activePageIndex,
    onPageChange = _ref.onPageChange,
    paginationDisabled = _ref.disabled;
  var pagesCount = Math.ceil(totalCount / itemsPerPage);
  if (pagesCount <= 1) {
    return null;
  }
  var previousPage = activePageIndex - 1;
  var nextPage = activePageIndex + 1;
  var isFirstPage = activePageIndex === 0;
  var isLastPage = activePageIndex + 1 === pagesCount;
  var pages = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_2__.computePages)({
    proximity: proximity,
    activePageIndex: activePageIndex,
    pagesCount: pagesCount,
    separator: DOTS
  });
  var paginationButtons = pages.map(function (page, index) {
    if (page === DOTS) {
      var key = "dots-".concat(index);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: key,
        label: DOTS,
        disabled: true
      });
    }
    var isCurrentPage = page === activePageIndex + 1;
    var additionalClasses = isCurrentPage ? 'active' : '';
    var label = "".concat(page);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: page,
      pageIndex: page - 1,
      label: label,
      additionalClasses: additionalClasses,
      onPageChange: onPageChange,
      disabled: isCurrentPage || paginationDisabled
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-pagination pagination ibexa-pagination__navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageIndex: previousPage,
    additionalClasses: "prev",
    disabled: isFirstPage || paginationDisabled,
    onPageChange: onPageChange
  }), paginationButtons, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pagination_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageIndex: nextPage,
    additionalClasses: "next",
    disabled: isLastPage || paginationDisabled,
    onPageChange: onPageChange
  }));
};
Pagination.propTypes = {
  proximity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  activePageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  totalCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tag/tag.js":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tag/tag.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var Tag = function Tag(_ref) {
  var content = _ref.content,
    onRemove = _ref.onRemove,
    isDeletable = _ref.isDeletable,
    extraClasses = _ref.extraClasses;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'ibexa-tag': true,
    'ibexa-tag--deletable': isDeletable
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-tag__content"
  }, content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "ibexa-tag__remove-btn",
    onClick: onRemove
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "circle-close",
    extraClasses: "ibexa-icon--small"
  })));
};
Tag.propTypes = {
  content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  isDeletable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Tag.defaultProps = {
  onRemove: function onRemove() {},
  isDeletable: true,
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js ***!
  \*******************************************************************************************/
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



var Thumbnail = function Thumbnail(_ref) {
  var thumbnailData = _ref.thumbnailData,
    iconExtraClasses = _ref.iconExtraClasses,
    contentTypeIconPath = _ref.contentTypeIconPath;
  var renderContentTypeIcon = function renderContentTypeIcon() {
    if (!contentTypeIconPath) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-thumbnail__icon-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extraClasses: "ibexa-icon--small",
      customPath: contentTypeIconPath
    }));
  };
  if (thumbnailData.mimeType === 'image/svg+xml') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-thumbnail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      extraClasses: iconExtraClasses,
      customPath: thumbnailData.resource
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-thumbnail"
  }, renderContentTypeIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "c-thumbnail__image",
    src: thumbnailData.resource
  }));
};
Thumbnail.propTypes = {
  thumbnailData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    mimeType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    resource: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired,
  iconExtraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  contentTypeIconPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Thumbnail.defaultProps = {
  iconExtraClasses: null,
  contentTypeIconPath: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnail);

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarksTab: () => (/* binding */ BookmarksTab),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab/tab */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js");
/* harmony import */ var _components_bookmarks_list_bookmarks_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bookmarks-list/bookmarks.list */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/bookmarks-list/bookmarks.list.js");
/* harmony import */ var _components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/grid-view/grid.view */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js");
/* harmony import */ var _components_finder_finder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/finder/finder */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js");
/* harmony import */ var _components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tree-view/tree.view */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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










var BookmarksTabModule = function BookmarksTabModule() {
  var isMarkedLocationSetByBookmarksRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var restorationStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.RestInfoContext);
  var tabsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.TabsConfigContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.CurrentViewContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    currentView = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.MarkedLocationIdContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    markedLocationId = _useContext4[0],
    setMarkedLocationId = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.SortingContext),
    _useContext6 = _slicedToArray(_useContext5, 1),
    sorting = _useContext6[0];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.SortOrderContext),
    _useContext8 = _slicedToArray(_useContext7, 1),
    sortOrder = _useContext8[0];
  var rootLocationId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.RootLocationIdContext);
  var _useContext9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.LoadedLocationsMapContext),
    _useContext10 = _slicedToArray(_useContext9, 2),
    loadedLocationsMap = _useContext10[0],
    dispatchLoadedLocationsAction = _useContext10[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    bookmarkedLocationMarked = _useState2[0],
    setBookmarkedLocationMarked = _useState2[1];
  var views = {
    grid: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_3__["default"], {
      itemsPerPage: tabsConfig.bookmarks.itemsPerPage
    }),
    finder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_finder_finder__WEBPACK_IMPORTED_MODULE_4__["default"], {
      itemsPerPage: tabsConfig.bookmarks.itemsPerPage
    }),
    tree: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_5__["default"], {
      itemsPerPage: tabsConfig.bookmarks.itemsPerPage
    })
  };
  var renderBrowseLocations = function renderBrowseLocations() {
    if (!markedLocationId) {
      return null;
    }
    return views[currentView];
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var isCleared = markedLocationId === null && (loadedLocationsMap === null || loadedLocationsMap === void 0 ? void 0 : loadedLocationsMap.length) === 0;
    if (!isCleared && !isMarkedLocationSetByBookmarksRef.current) {
      restorationStateRef.current = {
        markedLocationId: markedLocationId,
        loadedLocationsMap: loadedLocationsMap
      };
      setMarkedLocationId(null);
      dispatchLoadedLocationsAction({
        type: 'CLEAR_LOCATIONS'
      });
    }
  }, [setMarkedLocationId, dispatchLoadedLocationsAction, markedLocationId, loadedLocationsMap]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (!isMarkedLocationSetByBookmarksRef.current) {
        setMarkedLocationId(restorationStateRef.current.markedLocationId);
        dispatchLoadedLocationsAction({
          type: 'SET_LOCATIONS',
          data: restorationStateRef.current.loadedLocationsMap
        });
      }
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!bookmarkedLocationMarked) {
      return;
    }
    isMarkedLocationSetByBookmarksRef.current = true;
    setMarkedLocationId(bookmarkedLocationMarked);
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadAccordionData)(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: bookmarkedLocationMarked,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
    });
  }, [bookmarkedLocationMarked, currentView, restInfo, dispatchLoadedLocationsAction, setMarkedLocationId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (markedLocationId !== bookmarkedLocationMarked) {
      dispatchLoadedLocationsAction({
        type: 'CUT_LOCATIONS',
        locationId: markedLocationId
      });
      setBookmarkedLocationMarked(null);
    }
  }, [markedLocationId, setBookmarkedLocationMarked, bookmarkedLocationMarked, dispatchLoadedLocationsAction]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-bookmarks-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tab_tab__WEBPACK_IMPORTED_MODULE_1__["default"], null, restorationStateRef.current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_bookmarks_list_bookmarks_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    itemsPerPage: tabsConfig.bookmarks.itemsPerPage,
    setBookmarkedLocationMarked: setBookmarkedLocationMarked
  }), renderBrowseLocations())));
};
var BookmarksTab = {
  id: 'bookmarks',
  component: BookmarksTabModule,
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Bookmarks")*/'bookmarks.label', {}, 'ibexa_universal_discovery_widget');
  },
  getIcon: function getIcon() {
    return (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_8__.getIconPath)('bookmark');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarksTabModule);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowseTab: () => (/* binding */ BrowseTab),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab/tab */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js");
/* harmony import */ var _components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/grid-view/grid.view */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js");
/* harmony import */ var _components_finder_finder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/finder/finder */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js");
/* harmony import */ var _components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tree-view/tree.view */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var BrowseTabModule = function BrowseTabModule() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.CurrentViewContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    currentView = _useContext2[0];
  var tabsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.TabsConfigContext);
  var views = {
    grid: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_grid_view_grid_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
      itemsPerPage: tabsConfig.browse.itemsPerPage
    }),
    finder: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_finder_finder__WEBPACK_IMPORTED_MODULE_3__["default"], {
      itemsPerPage: tabsConfig.browse.itemsPerPage
    }),
    tree: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tree_view_tree_view__WEBPACK_IMPORTED_MODULE_4__["default"], {
      itemsPerPage: tabsConfig.browse.itemsPerPage
    })
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-browse-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tab_tab__WEBPACK_IMPORTED_MODULE_1__["default"], null, views[currentView]));
};
var BrowseTab = {
  id: 'browse',
  component: BrowseTabModule,
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.getTranslator)();
    return Translator.trans(/*@Desc("Browse")*/'browse.label', {}, 'ibexa_universal_discovery_widget');
  },
  getIcon: function getIcon() {
    return (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_7__.getIconPath)('browse');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowseTabModule);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/actions-menu/actions.menu.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/actions-menu/actions.menu.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var ActionsMenu = function ActionsMenu() {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.ConfirmContext);
  var cancelUDW = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.CancelContext);
  var allowConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.AllowConfirmationContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.SelectedLocationsContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    selectedLocations = _useContext2[0];
  var confirmLabel = Translator.trans(/*@Desc("Confirm")*/'actions_menu.confirm', {}, 'ibexa_universal_discovery_widget');
  var cancelLabel = Translator.trans(/*@Desc("Discard")*/'actions_menu.cancel', {}, 'ibexa_universal_discovery_widget');
  var isConfirmDisabled = selectedLocations.length === 0;
  var renderActionsContent = function renderActionsContent() {
    if (!allowConfirmation) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-actions-menu__confirm-btn-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-actions-menu__confirm-btn btn ibexa-btn ibexa-btn--primary",
      type: "button",
      onClick: function onClick() {
        return onConfirm();
      },
      disabled: isConfirmDisabled
    }, confirmLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-actions-menu__cancel-btn-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-actions-menu__cancel-btn btn ibexa-btn ibexa-btn--secondary",
      type: "button",
      onClick: cancelUDW
    }, cancelLabel)));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-actions-menu"
  }, renderActionsContent());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionsMenu);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/bookmarks-list/bookmarks.list.js":
/*!*****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/bookmarks-list/bookmarks.list.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_locations_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/locations.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/locations.helper.js");
/* harmony import */ var _hooks_useLoadBookmarksFetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useLoadBookmarksFetch */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadBookmarksFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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









var SCROLL_OFFSET = 200;
var BookmarksList = function BookmarksList(_ref) {
  var setBookmarkedLocationMarked = _ref.setBookmarkedLocationMarked,
    itemsPerPage = _ref.itemsPerPage;
  var refBookmarksList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    offset = _useState2[0],
    setOffset = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    bookmarks = _useState4[0],
    setBookmarks = _useState4[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    markedLocationId = _useContext2[0],
    setMarkedLocationId = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    loadedLocationsMap = _useContext4[0],
    dispatchLoadedLocationsAction = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SelectedLocationsContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    dispatchSelectedLocationsAction = _useContext6[1];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.MultipleConfigContext),
    _useContext8 = _slicedToArray(_useContext7, 1),
    multiple = _useContext8[0];
  var allowedContentTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.AllowedContentTypesContext);
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.ContentTypesMapContext);
  var containersOnly = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.ContainersOnlyContext);
  var markedLocationData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_helpers_locations_helper__WEBPACK_IMPORTED_MODULE_6__.findMarkedLocation)(loadedLocationsMap, markedLocationId);
  }, [markedLocationId, loadedLocationsMap]);
  var _useLoadBookmarksFetc = (0,_hooks_useLoadBookmarksFetch__WEBPACK_IMPORTED_MODULE_7__.useLoadBookmarksFetch)(itemsPerPage, offset),
    _useLoadBookmarksFetc2 = _slicedToArray(_useLoadBookmarksFetc, 3),
    data = _useLoadBookmarksFetc2[0],
    isLoading = _useLoadBookmarksFetc2[1],
    reloadBookmarks = _useLoadBookmarksFetc2[2];
  var loadMore = function loadMore(_ref2) {
    var target = _ref2.target;
    var areAllItemsLoaded = bookmarks.length >= data.count;
    var isOffsetReached = target.scrollHeight - target.clientHeight - target.scrollTop < SCROLL_OFFSET;
    if (areAllItemsLoaded || !isOffsetReached || isLoading) {
      return;
    }
    setOffset(offset + itemsPerPage);
  };
  var renderLoadingSpinner = function renderLoadingSpinner() {
    if (!isLoading) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-bookmarks-list__spinner-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLoading) {
      return;
    }
    setBookmarks(function (prevState) {
      return [].concat(_toConsumableArray(prevState), _toConsumableArray(data.items));
    });
  }, [data.items, isLoading]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__.parse)(refBookmarksList.current);
  }, [bookmarks]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var isBookmarkMarked = bookmarks.some(function (_ref3) {
      var id = _ref3.id;
      return id === markedLocationId;
    });
    if (isBookmarkMarked && markedLocationData.bookmarked === false) {
      reloadBookmarks();
      setBookmarks([]);
      setMarkedLocationId(null);
    } else if (!isBookmarkMarked && markedLocationData.bookmarked) {
      reloadBookmarks();
      setBookmarks([]);
    }
  }, [markedLocationData.bookmarked]);
  if (!bookmarks.length) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-bookmarks-list",
    onScroll: loadMore,
    ref: refBookmarksList
  }, bookmarks.map(function (bookmark) {
    var isMarked = bookmark.id === markedLocationId;
    var contentTypeInfo = contentTypesMap[bookmark.ContentInfo.Content.ContentType._href];
    var isContainer = contentTypeInfo.isContainer;
    var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeInfo.identifier);
    var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
      'c-bookmarks-list__item': true,
      'c-bookmarks-list__item--marked': isMarked,
      'c-bookmarks-list__item--not-selectable': isNotSelectable
    });
    var markLocation = function markLocation() {
      if (isMarked) {
        return;
      }
      dispatchLoadedLocationsAction({
        type: 'CLEAR_LOCATIONS'
      });
      setBookmarkedLocationMarked(bookmark.id);
      if (!multiple) {
        dispatchSelectedLocationsAction({
          type: 'CLEAR_SELECTED_LOCATIONS'
        });
        if (!isNotSelectable) {
          dispatchSelectedLocationsAction({
            type: 'ADD_SELECTED_LOCATION',
            location: bookmark
          });
        }
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: bookmark.id,
      className: className,
      onClick: markLocation
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      extraClasses: "ibexa-icon--small",
      customPath: contentTypeInfo.thumbnail
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      title: bookmark.ContentInfo.Content.TranslatedName,
      "data-tooltip-container-selector": ".c-bookmarks-list",
      className: "c-bookmarks-list__item-name"
    }, bookmark.ContentInfo.Content.TranslatedName));
  }), renderLoadingSpinner());
};
BookmarksList.propTypes = {
  setBookmarkedLocationMarked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
BookmarksList.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookmarksList);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.helpers.js":
/*!*******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.helpers.js ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLoadedLocationsLimitedMap: () => (/* binding */ getLoadedLocationsLimitedMap)
/* harmony export */ });
var getLoadedLocationsLimitedMap = function getLoadedLocationsLimitedMap(loadedLocationsFullMap, activeLocationId) {
  var itemIndex = loadedLocationsFullMap.findIndex(function (_ref) {
    var parentLocationId = _ref.parentLocationId;
    return parentLocationId === activeLocationId;
  });
  if (itemIndex === -1) {
    return [];
  }
  return loadedLocationsFullMap.slice(0, itemIndex + 1);
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _breadcrumbs_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumbs.helpers */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.helpers.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
var _this = undefined;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var Breadcrumbs = function Breadcrumbs() {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var hiddenListWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    setMarkedLocationId = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.GridActiveLocationIdContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    gridActiveLocationId = _useContext4[0],
    setGridActiveLocationId = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.LoadedLocationsMapContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    loadedLocationsFullMap = _useContext6[0],
    dispatchLoadedLocationsAction = _useContext6[1];
  var loadedLocationsMap = (0,_breadcrumbs_helpers__WEBPACK_IMPORTED_MODULE_4__.getLoadedLocationsLimitedMap)(loadedLocationsFullMap, gridActiveLocationId);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hiddenListVisible = _useState2[0],
    setHiddenListVisible = _useState2[1];
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return loadedLocationsMap.reduce(function (splittedItems, loadedLocation, index) {
        if (loadedLocationsMap.length - 3 <= index) {
          splittedItems.visibleItems.push(loadedLocation);
        } else {
          splittedItems.hiddenItems.push(loadedLocation);
        }
        return splittedItems;
      }, {
        visibleItems: [],
        hiddenItems: []
      });
    }, [loadedLocationsMap]),
    visibleItems = _useMemo.visibleItems,
    hiddenItems = _useMemo.hiddenItems;
  var goToLocation = function goToLocation(locationId) {
    var itemIndex = loadedLocationsMap.findIndex(function (data) {
      return data.parentLocationId === locationId;
    });
    var updatedLoadedLocations = loadedLocationsMap.slice(0, itemIndex + 1);
    updatedLoadedLocations[updatedLoadedLocations.length - 1].subitems = [];
    dispatchLoadedLocationsAction({
      type: 'SET_LOCATIONS',
      data: updatedLoadedLocations
    });
    setMarkedLocationId(locationId);
    setGridActiveLocationId(locationId);
  };
  var toggleHiddenListVisible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setHiddenListVisible(!hiddenListVisible);
  }, [setHiddenListVisible, hiddenListVisible]);
  var handleTogglerClick = function handleTogglerClick(event) {
    event.stopPropagation();
    toggleHiddenListVisible();
  };
  var renderHiddenList = function renderHiddenList() {
    if (!hiddenItems.length) {
      return null;
    }
    var hiddenListClassNames = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'c-breadcrumbs__hidden-list': true,
      'c-breadcrumbs__hidden-list--visible': hiddenListVisible
    });
    var toggleClassNames = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'c-breadcrumbs__hidden-list-toggler': true,
      'c-breadcrumbs__hidden-list-toggler--active': hiddenListVisible
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: hiddenListWrapperRef,
      className: "c-breadcrumbs__hidden-list-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: toggleClassNames,
      onClick: handleTogglerClick,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "options",
      extraClasses: "ibexa-icon--small-medium"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: hiddenListClassNames
    }, hiddenItems.map(function (item) {
      var locationId = item.parentLocationId;
      var locationName = locationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_ROOT_LOCATION_ID ? Translator.trans(/*@Desc("Root Location")*/'breadcrumbs.root_location', {}, 'ibexa_universal_discovery_widget') : item.location.ContentInfo.Content.TranslatedName;
      var onClickHandler = goToLocation.bind(_this, locationId);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: locationId,
        onClick: onClickHandler,
        className: "c-breadcrumbs__hidden-list-item"
      }, locationName);
    })));
  };
  var renderSeparator = function renderSeparator() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-breadcrumbs__list-item-separator"
    }, "/");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!hiddenListVisible) {
      return;
    }
    var hideHiddenMenuOnClickOutside = function hideHiddenMenuOnClickOutside(event) {
      var _hiddenListWrapperRef, _hiddenListWrapperRef2;
      var target = event.target;
      if ((_hiddenListWrapperRef = (_hiddenListWrapperRef2 = hiddenListWrapperRef.current) === null || _hiddenListWrapperRef2 === void 0 ? void 0 : _hiddenListWrapperRef2.contains(target)) !== null && _hiddenListWrapperRef !== void 0 ? _hiddenListWrapperRef : false) {
        return;
      }
      setHiddenListVisible(false);
    };
    window.document.body.addEventListener('click', hideHiddenMenuOnClickOutside, false);
    return function () {
      return window.document.body.removeEventListener('click', hideHiddenMenuOnClickOutside, false);
    };
  }, [hiddenListVisible, setHiddenListVisible, hiddenListWrapperRef]);
  if (loadedLocationsMap.some(function (loadedLocation) {
    return loadedLocation.parentLocationId !== 1 && !loadedLocation.location;
  })) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-breadcrumbs"
  }, renderHiddenList(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-breadcrumbs__list-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-breadcrumbs__list"
  }, visibleItems.map(function (item, index) {
    var locationId = item.parentLocationId;
    var locationName = locationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_ROOT_LOCATION_ID ? Translator.trans(/*@Desc("Root Location")*/'breadcrumbs.root_location', {}, 'ibexa_universal_discovery_widget') : item.location.ContentInfo.Content.TranslatedName;
    var isLast = index === visibleItems.length - 1;
    var onClickHandler = goToLocation.bind(_this, locationId);
    var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'c-breadcrumbs__list-item': true,
      'c-breadcrumbs__list-item--last': isLast
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: locationId,
      onClick: onClickHandler,
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-breadcrumbs__list-item-text"
    }, locationName), !isLast && renderSeparator());
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumbs);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/collapsible/collapsible.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/collapsible/collapsible.js ***!
  \***********************************************************************************************************************/
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Collapsible = function Collapsible(_ref) {
  var isInitiallyExpanded = _ref.isInitiallyExpanded,
    title = _ref.title,
    children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isInitiallyExpanded),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-filters__collapsible': true,
    'c-filters__collapsible--hidden': !isExpanded
  });
  var toggleCollapsed = function toggleCollapsed() {
    return setIsExpanded(function (prevState) {
      return !prevState;
    });
  };
  var initTooltipsRef = function initTooltipsRef(node) {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_3__.parse)(node);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    ref: initTooltipsRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__collapsible-title",
    onClick: toggleCollapsed
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__collapsible-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__collapsible-content-wrapper"
  }, children)));
};
Collapsible.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  isInitiallyExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Collapsible.defaultProps = {
  isInitiallyExpanded: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapsible);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-widget/content.create.widget.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-widget/content.create.widget.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dropdown/dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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







var MINIMUM_ITEMS_COUNT_FOR_SEARCH_TO_APPEAR = 10;
var ContentCreateWidget = function ContentCreateWidget() {
  var _selectedLocation$loc, _suggestionsStorage$s;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.getTranslator)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.getAdminUiConfig)();
  var refContentTree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var dropdownListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.DropdownPortalRefContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    markedLocationId = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 1),
    loadedLocationsMap = _useContext4[0];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.ContentOnTheFlyConfigContext),
    allowedLanguages = _useContext5.allowedLanguages,
    preselectedLanguage = _useContext5.preselectedLanguage,
    preselectedContentType = _useContext5.preselectedContentType;
  var allowedContentTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.AllowedContentTypesContext);
  var _useContext6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.SuggestionsStorageContext),
    _useContext7 = _slicedToArray(_useContext6, 1),
    suggestionsStorage = _useContext7[0];
  var languages = adminUiConfig.languages,
    contentTypes = adminUiConfig.contentTypes;
  var selectedLocation = loadedLocationsMap.find(function (loadedLocation) {
    return loadedLocation.parentLocationId === markedLocationId;
  });
  var mappedLanguages = languages.priority.map(function (languageCode) {
    return languages.mappings[languageCode];
  });
  var filteredLanguages = mappedLanguages.filter(function (language) {
    var userHasPermission = !selectedLocation || !selectedLocation.permissions || !selectedLocation.permissions.create.restrictedLanguageCodes.length || selectedLocation.permissions.create.restrictedLanguageCodes.includes(language.languageCode);
    var isAllowedLanguage = !allowedLanguages || allowedLanguages.includes(language.languageCode);
    return userHasPermission && isAllowedLanguage && language.enabled;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    filterQuery = _useState2[0],
    setFilterQuery = _useState2[1];
  var firstLanguageCode = filteredLanguages.length ? filteredLanguages[0].languageCode : '';
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(preselectedLanguage || firstLanguageCode),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedLanguage = _useState4[0],
    setSelectedLanguage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(preselectedContentType),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedContentType = _useState6[0],
    setSelectedContentType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isSelectedSuggestion = _useState8[0],
    setIsSelectedSuggestion = _useState8[1];
  var _useContext8 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.ActiveTabContext),
    _useContext9 = _slicedToArray(_useContext8, 2),
    setActiveTab = _useContext9[1];
  var _useContext10 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.CreateContentWidgetContext),
    _useContext11 = _slicedToArray(_useContext10, 2),
    createContentVisible = _useContext11[0],
    setCreateContentVisible = _useContext11[1];
  var _useContext12 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.ContentOnTheFlyDataContext),
    _useContext13 = _slicedToArray(_useContext12, 2),
    setContentOnTheFlyData = _useContext13[1];
  var close = function close() {
    setCreateContentVisible(false);
  };
  var updateFilterQuery = function updateFilterQuery(event) {
    var query = event.target.value.toLowerCase();
    setFilterQuery(query);
  };
  var updateSelectedLanguage = function updateSelectedLanguage(value) {
    return setSelectedLanguage(value);
  };
  var isConfirmDisabled = !selectedContentType || !selectedLanguage || markedLocationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_ROOT_LOCATION_ID;
  var createContent = function createContent() {
    setContentOnTheFlyData({
      locationId: markedLocationId,
      languageCode: selectedLanguage,
      contentTypeIdentifier: selectedContentType
    });
    setActiveTab('content-create');
  };
  var createContentLabel = Translator.trans(/*@Desc("Create content")*/'create_content.label', {}, 'ibexa_universal_discovery_widget');
  var selectLanguageLabel = Translator.trans(/*@Desc("Select a language")*/'create_content.select_language', {}, 'ibexa_universal_discovery_widget');
  var createLabel = Translator.trans(/*@Desc("Create")*/'create_content.create', {}, 'ibexa_universal_discovery_widget');
  var cancelLabel = Translator.trans(/*@Desc("Discard")*/'content_create.cancel.label', {}, 'ibexa_universal_discovery_widget');
  var placeholder = Translator.trans(/*@Desc("Search by content type")*/'content_create.placeholder', {}, 'ibexa_universal_discovery_widget');
  var filtersDescLabel = Translator.trans(/*@Desc("Select a content type from list")*/'content.create.filters.desc', {}, 'ibexa_universal_discovery_widget');
  var createUnderLabel = Translator.trans(/*@Desc("Location: %location%")*/'content.create.editing_details', {
    location: selectedLocation === null || selectedLocation === void 0 || (_selectedLocation$loc = selectedLocation.location) === null || _selectedLocation$loc === void 0 ? void 0 : _selectedLocation$loc.ContentInfo.Content.TranslatedName
  }, 'ibexa_universal_discovery_widget');
  var widgetClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
    'ibexa-extra-actions': true,
    'ibexa-extra-actions--create': true,
    'ibexa-extra-actions--hidden': !createContentVisible,
    'c-content-create': true
  });
  var languageOptions = mappedLanguages.filter(function (language) {
    return language.enabled;
  }).map(function (language) {
    return {
      value: language.languageCode,
      label: language.name
    };
  });
  var contentTypesWithSuggestions = Object.entries(contentTypes);
  var suggestions = (_suggestionsStorage$s = suggestionsStorage[selectedLocation === null || selectedLocation === void 0 ? void 0 : selectedLocation.parentLocationId]) !== null && _suggestionsStorage$s !== void 0 ? _suggestionsStorage$s : [];
  if (suggestions) {
    contentTypesWithSuggestions.unshift(['Suggestions', suggestions.map(function (_ref) {
      var data = _ref.data;
      return data;
    })]);
  }
  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
      return contentTypesWithSuggestions.reduce(function (_ref2, _ref3) {
        var _selectedLocation$per, _selectedLocation$per2;
        var contentTypesToShowPrevious = _ref2.contentTypesToShow,
          allGroupsItemsCountPrevious = _ref2.allGroupsItemsCount;
        var _ref4 = _slicedToArray(_ref3, 2),
          groupName = _ref4[0],
          groupItems = _ref4[1];
        var restrictedContentTypeIds = (_selectedLocation$per = selectedLocation === null || selectedLocation === void 0 || (_selectedLocation$per2 = selectedLocation.permissions) === null || _selectedLocation$per2 === void 0 ? void 0 : _selectedLocation$per2.create.restrictedContentTypeIds) !== null && _selectedLocation$per !== void 0 ? _selectedLocation$per : [];
        var groupFilteredItems = _toConsumableArray(groupItems).filter(function (groupItem) {
          var hasNotPermission = restrictedContentTypeIds.length && !restrictedContentTypeIds.includes(groupItem.id.toString());
          var isNotAllowedContentType = allowedContentTypes && !allowedContentTypes.includes(groupItem.identifier);
          var isHiddenByConfig = groupItem.isHidden;
          return !hasNotPermission && !isNotAllowedContentType && !isHiddenByConfig;
        });
        var hasAnyItems = !!groupFilteredItems.length;
        if (!hasAnyItems) {
          return {
            contentTypesToShow: contentTypesToShowPrevious,
            allGroupsItemsCount: allGroupsItemsCountPrevious
          };
        }
        return {
          contentTypesToShow: [].concat(_toConsumableArray(contentTypesToShowPrevious), [[groupName, groupFilteredItems]]),
          allGroupsItemsCount: allGroupsItemsCountPrevious + groupFilteredItems.length
        };
      }, {
        contentTypesToShow: [],
        allGroupsItemsCount: 0
      });
    }, [contentTypesWithSuggestions, selectedLocation, allowedContentTypes]),
    contentTypesToShow = _useMemo.contentTypesToShow,
    allGroupsItemsCount = _useMemo.allGroupsItemsCount;
  var instantFilterInputWrapperClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
    'ibexa-instant-filter__input-wrapper': true,
    'ibexa-instant-filter__input-wrapper--hidden': allGroupsItemsCount <= MINIMUM_ITEMS_COUNT_FOR_SEARCH_TO_APPEAR
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setSelectedLanguage(preselectedLanguage || firstLanguageCode);
  }, [preselectedLanguage, firstLanguageCode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_5__.parse)(refContentTree.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions-container__backdrop",
    hidden: !createContentVisible,
    onClick: close
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: widgetClassName,
    ref: refContentTree
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, createContentLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions__header-subtitle"
  }, createUnderLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions__content ibexa-extra-actions__content--create"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "ibexa-label ibexa-extra-actions__section-header"
  }, selectLanguageLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions__section-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dropdownListRef: dropdownListRef,
    onChange: updateSelectedLanguage,
    single: true,
    value: selectedLanguage,
    options: languageOptions,
    extraClasses: "c-udw-dropdown"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-extra-actions__section-content ibexa-extra-actions__section-content--content-type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-instant-filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: instantFilterInputWrapperClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    autoFocus: true,
    className: "ibexa-instant-filter__input ibexa-input ibexa-input--text form-control",
    type: "text",
    placeholder: placeholder,
    onChange: updateFilterQuery
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-instant-filter__desc"
  }, filtersDescLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-instant-filter__items"
  }, contentTypesToShow.map(function (_ref5, index) {
    var _ref6 = _slicedToArray(_ref5, 2),
      groupName = _ref6[0],
      groupItems = _ref6[1];
    var isSuggestionGroup = !!suggestions.length && index === 0;
    var visibleGroupItems = groupItems.filter(function (groupItem) {
      var isSearchedName = !filterQuery || groupItem.name.toLowerCase().includes(filterQuery);
      return isSearchedName;
    });
    if (visibleGroupItems.length === 0) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-instant-filter__group",
      key: groupName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-instant-filter__group-name"
    }, groupName), visibleGroupItems.map(function (_ref7) {
      var name = _ref7.name,
        thumbnail = _ref7.thumbnail,
        identifier = _ref7.identifier;
      var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_1__.createCssClassNames)({
        'ibexa-instant-filter__group-item': true,
        'ibexa-instant-filter__group-item--selected': identifier === selectedContentType && isSuggestionGroup === isSelectedSuggestion
      });
      var updateSelectedContentType = function updateSelectedContentType() {
        setSelectedContentType(identifier);
        setIsSelectedSuggestion(isSuggestionGroup);
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: identifier,
        className: className,
        onClick: updateSelectedContentType
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        customPath: thumbnail,
        extraClasses: "ibexa-icon--small"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-check"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-label ibexa-label--checkbox-radio form-check-label"
      }, name)));
    }));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-create__confirm-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "c-content-create__confirm-button btn ibexa-btn ibexa-btn--primary",
    onClick: createContent,
    disabled: isConfirmDisabled,
    type: "button"
  }, createLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--secondary",
    onClick: close,
    type: "button"
  }, cancelLabel))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentCreateWidget);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js":
/*!***************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js ***!
  \***************************************************************************************************************************************/
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
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _translation_selector_translation_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../translation-selector/translation.selector */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../..//universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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








var ContentEditButton = function ContentEditButton(_ref) {
  var version = _ref.version,
    location = _ref.location,
    isDisabled = _ref.isDisabled,
    label = _ref.label;
  var Routing = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getRouting)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getAdminUiConfig)();
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.RestInfoContext);
  var allowRedirects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.AllowRedirectsContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.EditOnTheFlyDataContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    setEditOnTheFlyData = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.ActiveTabContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    setActiveTab = _useContext4[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.ContentTypesMapContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTranslationSelectorVisible = _useState2[0],
    setIsTranslationSelectorVisible = _useState2[1];
  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var isUserContentType = adminUiConfig.userContentTypes.includes(contentTypeInfo.identifier);
  var btnClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-content-edit-button__btn btn ibexa-btn ibexa-btn--ghost': true,
    'ibexa-btn--no-text': label !== null
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIsTranslationSelectorVisible(false);
  }, [version]);
  var hideTranslationSelector = function hideTranslationSelector() {
    setIsTranslationSelectorVisible(false);
  };
  var toggleTranslationSelectorVisibility = function toggleTranslationSelectorVisibility() {
    var languageCodes = version.VersionInfo.languageCodes.split(',');
    if (languageCodes.length === 1) {
      editContent(languageCodes[0]);
    } else {
      setIsTranslationSelectorVisible(true);
    }
  };
  var redirectToContentEdit = function redirectToContentEdit(contentId, versionNo, language, locationId) {
    if (allowRedirects) {
      var href = isUserContentType ? Routing.generate('ibexa.user.update', {
        contentId: contentId,
        versionNo: versionNo,
        language: language
      }, true) : Routing.generate('ibexa.content.draft.edit', {
        contentId: contentId,
        versionNo: versionNo,
        language: language,
        locationId: locationId
      }, true);
      window.location.href = href;
      return;
    }
    setEditOnTheFlyData({
      contentId: contentId,
      versionNo: versionNo,
      languageCode: language,
      locationId: locationId
    });
    setActiveTab('content-edit');
  };
  var editContent = function editContent(languageCode) {
    var contentId = location.ContentInfo.Content._id;
    if (isUserContentType) {
      redirectToContentEdit(contentId, version.VersionInfo.versionNo, languageCode, location.id);
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__.createDraft)(_objectSpread(_objectSpread({}, restInfo), {}, {
      contentId: contentId
    }), function (response) {
      return redirectToContentEdit(contentId, response.Version.VersionInfo.versionNo, languageCode, location.id);
    });
  };
  var renderTranslationSelector = function renderTranslationSelector() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_translation_selector_translation_selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hideTranslationSelector: hideTranslationSelector,
      selectTranslation: editContent,
      version: version,
      isOpen: isTranslationSelectorVisible && version
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-edit-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: btnClassName,
    disabled: !version || isDisabled,
    onClick: toggleTranslationSelectorVisibility,
    "data-tooltip-container-selector": ".c-udw-tab",
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "edit",
    extraClasses: "ibexa-icon--small"
  }), label), renderTranslationSelector());
};
ContentEditButton.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  version: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node)
};
ContentEditButton.defaultProps = {
  label: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentEditButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.item.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.item.js ***!
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
/* harmony import */ var _toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle-selection/toggle.selection */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _hooks_useSelectedLocationsHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useSelectedLocationsHelpers */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsHelpers.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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









var ContentTableItem = function ContentTableItem(_ref) {
  var location = _ref.location;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.CurrentViewContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    currentView = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SortingContext),
    _useContext4 = _slicedToArray(_useContext3, 1),
    sorting = _useContext4[0];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SortOrderContext),
    _useContext6 = _slicedToArray(_useContext5, 1),
    sortOrder = _useContext6[0];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.LoadedLocationsMapContext),
    _useContext8 = _slicedToArray(_useContext7, 2),
    dispatchLoadedLocationsAction = _useContext8[1];
  var _useContext9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.MarkedLocationIdContext),
    _useContext10 = _slicedToArray(_useContext9, 2),
    markedLocationId = _useContext10[0],
    setMarkedLocationId = _useContext10[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.ContentTypesMapContext);
  var _useContext11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SelectedLocationsContext),
    _useContext12 = _slicedToArray(_useContext11, 2),
    dispatchSelectedLocationsAction = _useContext12[1];
  var _useContext13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.MultipleConfigContext),
    _useContext14 = _slicedToArray(_useContext13, 1),
    multiple = _useContext14[0];
  var rootLocationId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.RootLocationIdContext);
  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var _useSelectedLocations = (0,_hooks_useSelectedLocationsHelpers__WEBPACK_IMPORTED_MODULE_7__.useSelectedLocationsHelpers)(),
    checkIsSelectable = _useSelectedLocations.checkIsSelectable,
    checkIsSelectionBlocked = _useSelectedLocations.checkIsSelectionBlocked;
  var isNotSelectable = !checkIsSelectable(location);
  var isSelectionBlocked = checkIsSelectionBlocked(location);
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
    'ibexa-table__row c-content-table-item': true,
    'c-content-table-item--marked': markedLocationId === location.id,
    'c-content-table-item--not-selectable': isNotSelectable
  });
  var markLocation = function markLocation(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    var isSelectionButtonClicked = nativeEvent.target.closest('.c-udw-toggle-selection');
    if (isSelectionButtonClicked) {
      return;
    }
    dispatchLoadedLocationsAction({
      type: 'SET_LOCATIONS',
      data: [{
        parentLocationId: null,
        count: 1,
        subitems: [{
          location: location
        }]
      }]
    });
    setMarkedLocationId(location.id);
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__.loadAccordionData)(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: location.id,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
    });
    if (!multiple) {
      dispatchSelectedLocationsAction({
        type: 'CLEAR_SELECTED_LOCATIONS'
      });
      if (!isNotSelectable) {
        dispatchSelectedLocationsAction({
          type: 'ADD_SELECTED_LOCATION',
          location: location
        });
      }
    }
  };
  var renderToggleSelection = function renderToggleSelection() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location,
      multiple: multiple,
      isDisabled: isSelectionBlocked,
      isHidden: isNotSelectable
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: className,
    onClick: markLocation
  }, multiple && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "ibexa-table__cell ibexa-table__cell--has-checkbox"
  }, renderToggleSelection()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "ibexa-table__cell c-content-table-item__icon-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "ibexa-icon--small",
    customPath: contentTypeInfo.thumbnail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "ibexa-table__cell"
  }, location.ContentInfo.Content.TranslatedName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "ibexa-table__cell"
  }, (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_4__.formatShortDateTime)(new Date(location.ContentInfo.Content.lastModificationDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    className: "ibexa-table__cell"
  }, contentTypeInfo.name));
};
ContentTableItem.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTableItem);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.js":
/*!***************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_table_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.table.item */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.item.js");
/* harmony import */ var _common_pagination_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/pagination/pagination */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/pagination/pagination.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var ContentTable = function ContentTable(_ref) {
  var count = _ref.count,
    itemsPerPage = _ref.itemsPerPage,
    items = _ref.items,
    activePageIndex = _ref.activePageIndex,
    title = _ref.title,
    onPageChange = _ref.onPageChange,
    renderCustomHeader = _ref.renderCustomHeader;
  var Translator = (0,_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.MultipleConfigContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    multiple = _useContext2[0];
  var refContentTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var nameLabel = Translator.trans(/*@Desc("Name")*/'content_table.name', {}, 'ibexa_universal_discovery_widget');
  var modifiedLabel = Translator.trans(/*@Desc("Modified")*/'content_table.modified', {}, 'ibexa_universal_discovery_widget');
  var contentTypeLabel = Translator.trans(/*@Desc("Content type")*/'content_table.content_type', {}, 'ibexa_universal_discovery_widget');
  var renderHeaderCell = function renderHeaderCell(label) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      className: "ibexa-table__header-cell"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ibexa-table__header-cell-text-wrapper"
    }, label));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_6__.parse)(refContentTable.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-table",
    ref: refContentTable
  }, renderCustomHeader ? renderCustomHeader() : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-table-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-table-header__headline"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-scrollable-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "ibexa-table table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    className: "ibexa-table__head-row"
  }, multiple && renderHeaderCell(), renderHeaderCell(), renderHeaderCell(nameLabel), renderHeaderCell(modifiedLabel), renderHeaderCell(contentTypeLabel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
    className: "ibexa-table__body"
  }, items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_table_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: item.id,
      location: item
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-table__pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_pagination_pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
    proximity: 1,
    itemsPerPage: itemsPerPage,
    activePageIndex: activePageIndex,
    totalCount: count,
    onPageChange: onPageChange,
    disabled: false
  })));
};
ContentTable.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  activePageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  renderCustomHeader: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
ContentTable.defaultProps = {
  title: '',
  renderCustomHeader: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTable);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-type-selector/content.type.selector.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-type-selector/content.type.selector.js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _collapsible_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../collapsible/collapsible */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/collapsible/collapsible.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var ContentTypeSelector = function ContentTypeSelector() {
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getAdminUiConfig)();
  var contentTypesMap = adminUiConfig.contentTypes;
  var allowedContentTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.AllowedContentTypesContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_1__.SelectedContentTypesContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedContentTypes = _useContext2[0],
    dispatchSelectedContentTypesAction = _useContext2[1];
  var handleContentTypeSelect = function handleContentTypeSelect(_ref) {
    var nativeEvent = _ref.nativeEvent;
    var contentTypeIdentifier = nativeEvent.target.dataset.contentTypeIdentifier;
    var action = {
      contentTypeIdentifier: contentTypeIdentifier
    };
    action.type = selectedContentTypes.includes(contentTypeIdentifier) ? 'REMOVE_CONTENT_TYPE' : 'ADD_CONTENT_TYPE';
    dispatchSelectedContentTypesAction(action);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, Object.entries(contentTypesMap).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      contentTypeGroup = _ref3[0],
      contentTypes = _ref3[1];
    var isHiddenGroup = contentTypes.every(function (contentType) {
      return allowedContentTypes && !allowedContentTypes.includes(contentType.identifier);
    });
    if (isHiddenGroup) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_collapsible_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: contentTypeGroup,
      title: contentTypeGroup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "c-filters__collapsible-list"
    }, contentTypes.map(function (contentType) {
      var isHidden = allowedContentTypes && !allowedContentTypes.includes(contentType.identifier);
      if (isHidden) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: contentType.identifier,
        className: "c-filters__collapsible-list-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "form-check form-check-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "checkbox",
        id: "ibexa-search-content-type-".concat(contentType.identifier),
        className: "ibexa-input ibexa-input--checkbox form-check-input",
        value: contentType.identifier,
        "data-content-type-identifier": contentType.identifier,
        onChange: handleContentTypeSelect,
        checked: selectedContentTypes.includes(contentType.identifier)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "checkbox-inline form-check-label",
        htmlFor: "ibexa-search-content-type-".concat(contentType.identifier),
        title: contentType.name,
        "data-tooltip-container-selector": ".c-udw-tab"
      }, contentType.name)));
    })));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTypeSelector);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/filters/filters.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/filters/filters.js ***!
  \***************************************************************************************************************/
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
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dropdown/dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js");
/* harmony import */ var _content_type_selector_content_type_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content-type-selector/content.type.selector */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-type-selector/content.type.selector.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_location_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/location.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/location.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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










var Filters = function Filters(_ref) {
  var search = _ref.search;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getAdminUiConfig)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_3__.SelectedContentTypesContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedContentTypes = _useContext2[0],
    dispatchSelectedContentTypesAction = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_3__.SelectedSectionContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    selectedSection = _useContext4[0],
    setSelectedSection = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_3__.SelectedSubtreeContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    selectedSubtree = _useContext6[0],
    setSelectedSubtree = _useContext6[1];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_3__.SelectedLanguageContext),
    _useContext8 = _slicedToArray(_useContext7, 2),
    selectedLanguage = _useContext8[0],
    setSelectedLanguage = _useContext8[1];
  var _useContext9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_3__.SelectedSubtreeBreadcrumbsContext),
    _useContext10 = _slicedToArray(_useContext9, 2),
    selectedSubtreeBreadcrumbs = _useContext10[0],
    setSelectedSubtreeBreadcrumbs = _useContext10[1];
  var prevSelectedLanguage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selectedLanguage);
  var dropdownListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.DropdownPortalRefContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    filtersCleared = _useState2[0],
    setFiltersCleared = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isNestedUdwOpened = _useState4[0],
    setIsNestedUdwOpened = _useState4[1];
  var filterSubtreeUdwConfig = JSON.parse(window.document.querySelector('#react-udw').dataset.filterSubtreeUdwConfig);
  var handleNestedUdwConfirm = function handleNestedUdwConfirm(items) {
    var _items = _slicedToArray(items, 1),
      pathString = _items[0].pathString;
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_location_helper__WEBPACK_IMPORTED_MODULE_8__.findLocationsByIds)((0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_location_helper__WEBPACK_IMPORTED_MODULE_8__.removeRootFromPathString)(pathString), function (locations) {
      return setSelectedSubtreeBreadcrumbs((0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_location_helper__WEBPACK_IMPORTED_MODULE_8__.buildLocationsBreadcrumbs)(locations), pathString);
    });
    setSelectedSubtree(pathString);
    setIsNestedUdwOpened(false);
  };
  var nestedUdwConfig = _objectSpread({
    onConfirm: handleNestedUdwConfirm,
    onCancel: function onCancel() {
      return setIsNestedUdwOpened(false);
    },
    tabs: adminUiConfig.universalDiscoveryWidget.tabs,
    title: 'Browsing content'
  }, filterSubtreeUdwConfig);
  var nestedUdwContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(window.document.createElement('div'));
  var updateSelectedLanguage = function updateSelectedLanguage(value) {
    return setSelectedLanguage(value);
  };
  var clearFilters = function clearFilters() {
    dispatchSelectedContentTypesAction({
      type: 'CLEAR_CONTENT_TYPES'
    });
    setSelectedSection('');
    clearSelectedSubtree();
    setFiltersCleared(true);
  };
  var clearSelectedSubtree = function clearSelectedSubtree() {
    setSelectedSubtree('');
    setSelectedSubtreeBreadcrumbs('');
  };
  var updateSection = function updateSection(value) {
    return setSelectedSection(value);
  };
  var makeSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    prevSelectedLanguage.current = selectedLanguage;
    search(0);
  }, [search, selectedLanguage]);
  var isApplyButtonEnabled = !!selectedContentTypes.length || !!selectedSection || !!selectedSubtree || prevSelectedLanguage.current !== selectedLanguage;
  var renderSubtreeBreadcrumbs = function renderSubtreeBreadcrumbs() {
    if (!selectedSubtreeBreadcrumbs) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-tag-view-select__selected-list"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-tag-view-select__selected-item-tag"
    }, selectedSubtreeBreadcrumbs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn ibexa-tag-view-select__selected-item-tag-remove-btn",
      onClick: clearSelectedSubtree
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "discard",
      extraClasses: "ibexa-icon--tiny"
    }))));
  };
  var renderSelectContentButton = function renderSelectContentButton() {
    var selectLabel = Translator.trans(/*@Desc("Select content")*/'filters.tag_view_select.select', {}, 'ibexa_universal_discovery_widget');
    var changeLabel = Translator.trans(/*@Desc("Change content")*/'filters.tag_view_change.select', {}, 'ibexa_universal_discovery_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "ibexa-tag-view-select__btn-select-path btn ibexa-btn ibexa-btn--secondary",
      type: "button",
      onClick: function onClick() {
        return setIsNestedUdwOpened(true);
      }
    }, selectedSubtree ? changeLabel : selectLabel);
  };
  var filtersLabel = Translator.trans(/*@Desc("Filters")*/'filters.title', {}, 'ibexa_universal_discovery_widget');
  var languageLabel = Translator.trans(/*@Desc("Language")*/'filters.language', {}, 'ibexa_universal_discovery_widget');
  var sectionLabel = Translator.trans(/*@Desc("Section")*/'filters.section', {}, 'ibexa_universal_discovery_widget');
  var subtreeLabel = Translator.trans(/*@Desc("Subtree")*/'filters.subtree', {}, 'ibexa_universal_discovery_widget');
  var clearLabel = Translator.trans(/*@Desc("Clear")*/'filters.clear', {}, 'ibexa_universal_discovery_widget');
  var applyLabel = Translator.trans(/*@Desc("Apply")*/'filters.apply', {}, 'ibexa_universal_discovery_widget');
  var languageOptions = Object.values(adminUiConfig.languages.mappings).filter(function (language) {
    return language.enabled;
  }).map(function (language) {
    return {
      value: language.languageCode,
      label: language.name
    };
  });
  var sectionOptions = Object.entries(adminUiConfig.sections).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      sectionIdentifier = _ref3[0],
      sectionName = _ref3[1];
    return {
      value: sectionIdentifier,
      label: sectionName
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (filtersCleared) {
      setFiltersCleared(false);
      makeSearch();
    }
  }, [filtersCleared, makeSearch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.document.body.append(nestedUdwContainer.current);
    return function () {
      nestedUdwContainer.current.remove();
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isNestedUdwOpened && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__["default"], nestedUdwConfig), nestedUdwContainer.current), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__header-content"
  }, filtersLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__header-actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--small",
    type: "button",
    onClick: clearFilters
  }, clearLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btn ibexa-btn ibexa-btn--secondary ibexa-btn--small ibexa-btn--apply",
    onClick: makeSearch,
    disabled: !isApplyButtonEnabled
  }, applyLabel))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__row c-filters__row--language"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__row-title"
  }, languageLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dropdownListRef: dropdownListRef,
    single: true,
    onChange: updateSelectedLanguage,
    value: selectedLanguage,
    options: languageOptions,
    extraClasses: "c-udw-dropdown"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_type_selector_content_type_selector__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__row-title"
  }, sectionLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
    dropdownListRef: dropdownListRef,
    single: true,
    onChange: updateSection,
    value: selectedSection,
    options: sectionOptions,
    extraClasses: "c-udw-dropdown"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-filters__row-title"
  }, subtreeLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-tag-view-select"
  }, renderSubtreeBreadcrumbs(), renderSelectContentButton()))));
};
Filters.propTypes = {
  search: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.branch.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.branch.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _finder_leaf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder.leaf */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.leaf.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useFindLocationsByParentLocationIdFetch */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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









var CLASS_IS_BRANCH_RESIZING = 'ibexa-is-branch-resizing';
var SCROLL_OFFSET = 200;
var FinderBranch = function FinderBranch(_ref) {
  var locationData = _ref.locationData,
    itemsPerPage = _ref.itemsPerPage;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    offset = _useState2[0],
    setOffset = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    branchWidth = _useState4[0],
    setBranchWidth = _useState4[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.LoadedLocationsMapContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    loadedLocationsMap = _useContext2[0],
    dispatchLoadedLocationsAction = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SortingContext),
    _useContext4 = _slicedToArray(_useContext3, 1),
    sorting = _useContext4[0];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SortOrderContext),
    _useContext6 = _slicedToArray(_useContext5, 1),
    sortOrder = _useContext6[0];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.ContentTypesMapContext);
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.MarkedLocationIdContext),
    _useContext8 = _slicedToArray(_useContext7, 1),
    markedLocationId = _useContext8[0];
  var branchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var sortingOptions = _universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SORTING_OPTIONS.find(function (option) {
    return option.sortClause === sorting;
  });
  var _useFindLocationsByPa = (0,_hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_7__.useFindLocationsByParentLocationIdFetch)(locationData, {
      sortClause: sortingOptions.sortClause,
      sortOrder: sortOrder
    }, itemsPerPage, offset),
    _useFindLocationsByPa2 = _slicedToArray(_useFindLocationsByPa, 2),
    loadedLocations = _useFindLocationsByPa2[0],
    isLoading = _useFindLocationsByPa2[1];
  var subitems = locationData.subitems,
    collapsed = locationData.collapsed;
  var resizeStartPositionX = 0;
  var branchCurrentWidth = 0;
  var loadMore = function loadMore(_ref2) {
    var target = _ref2.target;
    var areAllItemsLoaded = locationData.subitems.length >= locationData.totalCount;
    var isOffsetReached = target.scrollHeight - target.clientHeight - target.scrollTop < SCROLL_OFFSET;
    if (areAllItemsLoaded || !isOffsetReached || isLoading) {
      return;
    }
    setOffset(Math.min(offset + itemsPerPage, locationData.totalCount));
  };
  var expandBranch = function expandBranch() {
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: _objectSpread(_objectSpread({}, locationData), {}, {
        collapsed: false
      })
    });
  };
  var changeBranchWidth = function changeBranchWidth(_ref3) {
    var clientX = _ref3.clientX;
    var newBranchWidth = branchCurrentWidth + (clientX - resizeStartPositionX);
    if (newBranchWidth < 50) {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: _objectSpread(_objectSpread({}, locationData), {}, {
          collapsed: true
        })
      });
      newBranchWidth = 0;
      _removeResizeListeners();
    }
    setBranchWidth(newBranchWidth);
  };
  var _removeResizeListeners = function removeResizeListeners() {
    window.document.removeEventListener('mousemove', changeBranchWidth);
    window.document.removeEventListener('mouseup', _removeResizeListeners);
    window.document.body.classList.remove(CLASS_IS_BRANCH_RESIZING);
  };
  var addResizeListeners = function addResizeListeners(_ref4) {
    var nativeEvent = _ref4.nativeEvent;
    resizeStartPositionX = nativeEvent.clientX;
    branchCurrentWidth = branchRef.current.getBoundingClientRect().width;
    window.document.addEventListener('mousemove', changeBranchWidth, false);
    window.document.addEventListener('mouseup', _removeResizeListeners, false);
    window.document.body.classList.add(CLASS_IS_BRANCH_RESIZING);
  };
  var renderCollapsedBranch = function renderCollapsedBranch() {
    if (!collapsed) {
      return null;
    }
    var selectedLocation = subitems.find(function (subitem) {
      return loadedLocationsMap.find(function (loadedLocation) {
        return loadedLocation.parentLocationId === subitem.location.id;
      }) || subitem.location.id === markedLocationId;
    });
    var contentName = selectedLocation ? selectedLocation.location.ContentInfo.Content.TranslatedName : '';
    var iconPath = locationData.location ? contentTypesMap[locationData.location.ContentInfo.Content.ContentType._href].thumbnail : (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper_js__WEBPACK_IMPORTED_MODULE_5__.getIconPath)('folder');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-finder-branch__info-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-finder-branch__icon-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      extraClasses: "ibexa-icon--small",
      customPath: iconPath
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-finder-branch__name"
    }, contentName));
  };
  var renderDragHandler = function renderDragHandler() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-finder-branch__resize-handler",
      onMouseDown: addResizeListeners
    });
  };
  var renderSubitems = function renderSubitems() {
    if (collapsed) {
      return null;
    }
    var width = branchWidth ? branchWidth : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-finder-branch__items-wrapper",
      onScroll: loadMore,
      style: {
        width: width
      }
    }, subitems.map(function (_ref5) {
      var location = _ref5.location;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_leaf__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: location.id,
        location: location
      });
    }), renderLoadingSpinner()), renderDragHandler());
  };
  var renderLoadingSpinner = function renderLoadingSpinner() {
    if (!isLoading) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-finder-branch__loading-spinner-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOffset(0);
  }, [sortingOptions.sortClause, sortOrder]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (loadedLocations.subitems) {
      var data = _objectSpread(_objectSpread(_objectSpread({}, locationData), loadedLocations), {}, {
        subitems: [].concat(_toConsumableArray(locationData.subitems), _toConsumableArray(loadedLocations.subitems))
      });
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: data
      });
    }
  }, [loadedLocations, dispatchLoadedLocationsAction, isLoading]);
  if (!subitems.length && !collapsed && !isLoading) {
    return null;
  }
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_6__.createCssClassNames)({
    'c-finder-branch': true,
    'c-finder-branch--collapsed': collapsed
  });
  var onClick = collapsed ? expandBranch : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    onClick: onClick,
    ref: branchRef
  }, renderCollapsedBranch(), renderSubitems());
};
FinderBranch.propTypes = {
  locationData: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    parentLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
    totalCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    collapsed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  }).isRequired,
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
FinderBranch.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinderBranch);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.js ***!
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
/* harmony import */ var _finder_branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finder.branch */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.branch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Finder = function Finder(_ref) {
  var itemsPerPage = _ref.itemsPerPage;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.LoadedLocationsMapContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    loadedLocationsMap = _useContext2[0];
  var finderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var container = finderRef.current;
    container.scrollLeft = container.scrollWidth - container.clientWidth;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-finder",
    ref: finderRef
  }, loadedLocationsMap.map(function (loadedLocation) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_finder_branch__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: loadedLocation.parentLocationId,
      itemsPerPage: itemsPerPage,
      locationData: loadedLocation
    });
  }));
};
Finder.propTypes = {
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
Finder.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Finder);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.leaf.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/finder/finder.leaf.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle-selection/toggle.selection */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useSelectedLocationsHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useSelectedLocationsHelpers */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsHelpers.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var _window = window,
  document = _window.document;
var FinderLeaf = function FinderLeaf(_ref) {
  var location = _ref.location;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    markedLocationId = _useContext2[0],
    setMarkedLocationId = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    loadedLocationsMap = _useContext4[0],
    dispatchLoadedLocationsAction = _useContext4[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.ContentTypesMapContext);
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.SelectedLocationsContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    dispatchSelectedLocationsAction = _useContext6[1];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.MultipleConfigContext),
    _useContext8 = _slicedToArray(_useContext7, 1),
    multiple = _useContext8[0];
  var _useSelectedLocations = (0,_hooks_useSelectedLocationsHelpers__WEBPACK_IMPORTED_MODULE_6__.useSelectedLocationsHelpers)(),
    checkIsSelectable = _useSelectedLocations.checkIsSelectable,
    checkIsSelected = _useSelectedLocations.checkIsSelected,
    checkIsSelectionBlocked = _useSelectedLocations.checkIsSelectionBlocked;
  var isSelected = checkIsSelected(location);
  var isNotSelectable = !checkIsSelectable(location);
  var isSelectionBlocked = checkIsSelectionBlocked(location);
  var markLocation = function markLocation(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    var isSelectionButtonClicked = nativeEvent.target.closest('.c-udw-toggle-selection');
    var isMarkedLocationClicked = location.id === markedLocationId;
    if (isSelectionButtonClicked || isMarkedLocationClicked) {
      return;
    }
    setMarkedLocationId(location.id);
    dispatchLoadedLocationsAction({
      type: 'CUT_LOCATIONS',
      locationId: location.id
    });
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: {
        parentLocationId: location.id,
        subitems: []
      }
    });
    if (!multiple) {
      dispatchSelectedLocationsAction({
        type: 'CLEAR_SELECTED_LOCATIONS'
      });
      if (!isNotSelectable) {
        dispatchSelectedLocationsAction({
          type: 'ADD_SELECTED_LOCATION',
          location: location
        });
      }
    }
  };
  var renderToggleSelection = function renderToggleSelection() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      location: location,
      multiple: multiple,
      isDisabled: isSelectionBlocked,
      isHidden: isNotSelectable
    });
  };
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
    'c-finder-leaf': true,
    'c-finder-leaf--marked': !!loadedLocationsMap.find(function (loadedLocation) {
      return loadedLocation.parentLocationId === location.id;
    }),
    'c-finder-leaf--has-children': !!location.childCount,
    'c-finder-leaf--not-selectable': isNotSelectable,
    'c-finder-leaf--selected': isSelected && !multiple
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__.parse)(document.querySelector('.c-udw-tab'));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    onClick: markLocation
  }, renderToggleSelection(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-finder-leaf__name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-finder-leaf__icon-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    extraClasses: "ibexa-icon--small ibexa-icon--base-dark",
    customPath: contentTypesMap[location.ContentInfo.Content.ContentType._href].thumbnail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    title: location.ContentInfo.Content.TranslatedName,
    "data-tooltip-container-selector": ".c-udw-tab"
  }, location.ContentInfo.Content.TranslatedName)));
};
FinderLeaf.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FinderLeaf);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.item.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.item.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toggle-selection/toggle.selection */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js");
/* harmony import */ var _common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/thumbnail/thumbnail */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useSelectedLocationsHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useSelectedLocationsHelpers */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsHelpers.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var isSelectionButtonClicked = function isSelectionButtonClicked(event) {
  return event.target.closest('.c-udw-toggle-selection');
};
var GridViewItem = function GridViewItem(_ref) {
  var location = _ref.location,
    version = _ref.version;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.GridActiveLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    setGridActiveLocationId = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.MarkedLocationIdContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    markedLocationId = _useContext4[0],
    setMarkedLocationId = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.LoadedLocationsMapContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    dispatchLoadedLocationsAction = _useContext6[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.ContentTypesMapContext);
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.SelectedLocationsContext),
    _useContext8 = _slicedToArray(_useContext7, 2),
    dispatchSelectedLocationsAction = _useContext8[1];
  var _useContext9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.MultipleConfigContext),
    _useContext10 = _slicedToArray(_useContext9, 1),
    multiple = _useContext10[0];
  var containersOnly = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.ContainersOnlyContext);
  var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var isContainer = contentTypeInfo.isContainer;
  var _useSelectedLocations = (0,_hooks_useSelectedLocationsHelpers__WEBPACK_IMPORTED_MODULE_5__.useSelectedLocationsHelpers)(),
    checkIsSelectable = _useSelectedLocations.checkIsSelectable,
    checkIsSelected = _useSelectedLocations.checkIsSelected,
    checkIsSelectionBlocked = _useSelectedLocations.checkIsSelectionBlocked;
  var isSelected = checkIsSelected(location);
  var isNotSelectable = !checkIsSelectable(location);
  var isSelectionBlocked = checkIsSelectionBlocked(location);
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
    'ibexa-grid-view-item': true,
    'ibexa-grid-view-item--marked': markedLocationId === location.id,
    'ibexa-grid-view-item--not-selectable': isNotSelectable,
    'ibexa-grid-view-item--selected': isSelected && !multiple
  });
  var markLocation = function markLocation(_ref2) {
    var nativeEvent = _ref2.nativeEvent;
    if (isSelectionButtonClicked(nativeEvent)) {
      return;
    }
    setMarkedLocationId(location.id);
    dispatchLoadedLocationsAction({
      type: 'CUT_LOCATIONS',
      locationId: location.id
    });
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: {
        parentLocationId: location.id,
        subitems: []
      }
    });
    if (!multiple) {
      dispatchSelectedLocationsAction({
        type: 'CLEAR_SELECTED_LOCATIONS'
      });
      if (!isNotSelectable) {
        dispatchSelectedLocationsAction({
          type: 'ADD_SELECTED_LOCATION',
          location: location
        });
      }
    }
  };
  var loadLocation = function loadLocation(_ref3) {
    var nativeEvent = _ref3.nativeEvent;
    if (isSelectionButtonClicked(nativeEvent) || containersOnly && !isContainer) {
      return;
    }
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: {
        parentLocationId: location.id,
        subitems: []
      }
    });
    setGridActiveLocationId(location.id);
  };
  var renderToggleSelection = function renderToggleSelection() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-grid-view-item__checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toggle_selection_toggle_selection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location,
      multiple: multiple,
      isDisabled: isSelectionBlocked,
      isHidden: isNotSelectable
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    onClick: markLocation,
    onDoubleClick: loadLocation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view-item__image-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_3__["default"], {
    thumbnailData: version.Thumbnail,
    iconExtraClasses: "ibexa-icon--extra-large",
    contentTypeIconPath: contentTypesMap[location.ContentInfo.Content.ContentType._href].thumbnail
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view-item__footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view-item__title",
    title: location.ContentInfo.Content.TranslatedName
  }, location.ContentInfo.Content.TranslatedName)), renderToggleSelection());
};
GridViewItem.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  version: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
GridViewItem.defaultProps = {
  version: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridViewItem);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.js ***!
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
/* harmony import */ var _grid_view_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.view.item */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/grid-view/grid.view.item.js");
/* harmony import */ var _breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../breadcrumbs/breadcrumbs */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useFindLocationsByParentLocationIdFetch */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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






var SCROLL_OFFSET = 200;
var GridView = function GridView(_ref) {
  var itemsPerPage = _ref.itemsPerPage;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    offset = _useState2[0],
    setOffset = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.LoadedLocationsMapContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    loadedLocationsMap = _useContext2[0],
    dispatchLoadedLocationsAction = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.SortingContext),
    _useContext4 = _slicedToArray(_useContext3, 1),
    sorting = _useContext4[0];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.SortOrderContext),
    _useContext6 = _slicedToArray(_useContext5, 1),
    sortOrder = _useContext6[0];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.GridActiveLocationIdContext),
    _useContext8 = _slicedToArray(_useContext7, 1),
    gridActiveLocationId = _useContext8[0];
  var sortingOptions = _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.SORTING_OPTIONS.find(function (option) {
    return option.sortClause === sorting;
  });
  var locationData = loadedLocationsMap.find(function (_ref2) {
    var parentLocationId = _ref2.parentLocationId;
    return parentLocationId === gridActiveLocationId;
  });
  var locationDataToLoad = loadedLocationsMap.length ? loadedLocationsMap[loadedLocationsMap.length - 1] : {
    subitems: []
  };
  var _useFindLocationsByPa = (0,_hooks_useFindLocationsByParentLocationIdFetch__WEBPACK_IMPORTED_MODULE_4__.useFindLocationsByParentLocationIdFetch)(locationDataToLoad, {
      sortClause: sortingOptions.sortClause,
      sortOrder: sortOrder
    }, itemsPerPage, offset, true),
    _useFindLocationsByPa2 = _slicedToArray(_useFindLocationsByPa, 2),
    loadedLocations = _useFindLocationsByPa2[0],
    isLoading = _useFindLocationsByPa2[1];
  var loadMore = function loadMore(_ref3) {
    var target = _ref3.target;
    var areAllItemsLoaded = locationData.subitems.length >= loadedLocations.totalCount;
    var isOffsetReached = target.scrollHeight - target.clientHeight - target.scrollTop < SCROLL_OFFSET;
    if (areAllItemsLoaded || !isOffsetReached || isLoading) {
      return;
    }
    setOffset(offset + itemsPerPage);
  };
  var renderItem = function renderItem(itemData) {
    if (!itemData.version) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_view_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: itemData.location.id,
      location: itemData.location,
      version: itemData.version
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isLoading || !loadedLocations.subitems) {
      return;
    }
    var data = _objectSpread(_objectSpread(_objectSpread({}, locationData), loadedLocations), {}, {
      subitems: [].concat(_toConsumableArray(locationData.subitems), _toConsumableArray(loadedLocations.subitems))
    });
    setOffset(0);
    dispatchLoadedLocationsAction({
      type: 'UPDATE_LOCATIONS',
      data: data
    });
  }, [loadedLocations, dispatchLoadedLocationsAction, isLoading]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-grid-view c-grid__items-wrapper",
    onScroll: loadMore
  }, locationData === null || locationData === void 0 ? void 0 : locationData.subitems.map(renderItem)));
};
GridView.propTypes = {
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
GridView.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridView);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectedContentTypesContext: () => (/* binding */ SelectedContentTypesContext),
/* harmony export */   SelectedLanguageContext: () => (/* binding */ SelectedLanguageContext),
/* harmony export */   SelectedSectionContext: () => (/* binding */ SelectedSectionContext),
/* harmony export */   SelectedSubtreeBreadcrumbsContext: () => (/* binding */ SelectedSubtreeBreadcrumbsContext),
/* harmony export */   SelectedSubtreeContext: () => (/* binding */ SelectedSubtreeContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_spinner_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _content_table_content_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content-table/content.table */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-table/content.table.js");
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filters/filters */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/filters/filters.js");
/* harmony import */ var _search_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.tags */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.tags.js");
/* harmony import */ var _hooks_useSearchByQueryFetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useSearchByQueryFetch */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSearchByQueryFetch.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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


var SelectedLanguageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedContentTypesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedSectionContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedSubtreeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedSubtreeBreadcrumbsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();









var selectedContentTypesReducer = function selectedContentTypesReducer(state, action) {
  switch (action.type) {
    case 'ADD_CONTENT_TYPE':
      return [].concat(_toConsumableArray(state), [action.contentTypeIdentifier]);
    case 'REMOVE_CONTENT_TYPE':
      return state.filter(function (contentTypeIdentifier) {
        return contentTypeIdentifier !== action.contentTypeIdentifier;
      });
    case 'CLEAR_CONTENT_TYPES':
      return [];
    default:
      throw new Error();
  }
};
var Search = function Search(_ref) {
  var itemsPerPage = _ref.itemsPerPage;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_10__.getTranslator)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_10__.getAdminUiConfig)();
  var allowedContentTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.AllowedContentTypesContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    setMarkedLocationId = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.ActiveTabContext),
    _useContext4 = _slicedToArray(_useContext3, 4),
    setActiveTab = _useContext4[1],
    previousActiveTab = _useContext4[2],
    initialActiveTab = _useContext4[3];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SearchTextContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    searchText = _useContext6[0],
    setSearchText = _useContext6[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    offset = _useState2[0],
    setOffset = _useState2[1];
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(selectedContentTypesReducer, []),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    selectedContentTypes = _useReducer2[0],
    dispatchSelectedContentTypesAction = _useReducer2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedSection = _useState4[0],
    setSelectedSection = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedSubtree = _useState6[0],
    setSelectedSubtree = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedSubtreeBreadcrumbs = _useState8[0],
    setSelectedSubtreeBreadcrumbs = _useState8[1];
  var languages = adminUiConfig.languages;
  var mappedLanguages = languages.priority.map(function (value) {
    return languages.mappings[value];
  });
  var firstLanguageCode = mappedLanguages.length ? mappedLanguages[0].languageCode : '';
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(firstLanguageCode),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedLanguage = _useState10[0],
    setSelectedLanguage = _useState10[1];
  var prevSearchText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useSearchByQueryFetc = (0,_hooks_useSearchByQueryFetch__WEBPACK_IMPORTED_MODULE_7__.useSearchByQueryFetch)(),
    _useSearchByQueryFetc2 = _slicedToArray(_useSearchByQueryFetc, 3),
    isLoading = _useSearchByQueryFetc2[0],
    data = _useSearchByQueryFetc2[1],
    searchByQuery = _useSearchByQueryFetc2[2];
  var search = function search() {
    var shouldResetOffset = prevSearchText.current !== searchText && offset !== 0;
    prevSearchText.current = searchText;
    if (shouldResetOffset) {
      setOffset(0);
      return;
    }
    var contentTypes = !!selectedContentTypes.length ? _toConsumableArray(selectedContentTypes) : allowedContentTypes;
    setMarkedLocationId(null);
    searchByQuery(searchText, contentTypes, selectedSection, selectedSubtree, itemsPerPage, offset, selectedLanguage);
  };
  var changePage = function changePage(pageIndex) {
    return setOffset(pageIndex * itemsPerPage);
  };
  var handleResultsClear = function handleResultsClear() {
    var activeTabNew = previousActiveTab !== null && previousActiveTab !== void 0 ? previousActiveTab : initialActiveTab;
    setActiveTab(activeTabNew);
    setSearchText('');
  };
  var renderCustomTableHeader = function renderCustomTableHeader() {
    var selectedLanguageName = languages.mappings[selectedLanguage].name;
    var searchResultsTitle = Translator.trans(/*@Desc("Results for “%search_phrase%” (%total%)")*/'search.search_results', {
      search_phrase: searchText,
      total: data.count
    }, 'ibexa_universal_discovery_widget');
    var searchResultsSubtitle = Translator.trans(/*@Desc("in %search_language%")*/'search.search_results.in_language', {
      search_language: selectedLanguageName
    }, 'ibexa_universal_discovery_widget');
    var searchResultsClearBtnLabel = Translator.trans(/*@Desc("Clear results")*/'search.search_results.clear_btn.label', {}, 'ibexa_universal_discovery_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-table-header c-search__table-header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-table-header__headline c-search__table-title"
    }, searchResultsTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn ibexa-btn ibexa-btn--secondary ibexa-btn--small c-search__clear-results-btn",
      onClick: handleResultsClear
    }, searchResultsClearBtnLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-search__table-subtitle"
    }, searchResultsSubtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-search__search-tags"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_search_tags__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  };
  var renderSearchResults = function renderSearchResults() {
    if (data.count) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_table_content_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        count: data.count,
        items: data.items,
        itemsPerPage: itemsPerPage,
        activePageIndex: offset ? offset / itemsPerPage : 0,
        onPageChange: changePage,
        renderCustomHeader: renderCustomTableHeader
      });
    } else if (!!data.items) {
      var noResultsLabel = Translator.trans(/*@Desc("No results found for %query%")*/'search.no_results', {
        query: searchText
      }, 'ibexa_universal_discovery_widget');
      var noResultsHints = [Translator.trans(/*@Desc("Check the spelling of keywords.")*/'search.no_results.hint.check_spelling', {}, 'ibexa_universal_discovery_widget'), Translator.trans(/*@Desc("Try more general keywords.")*/'search.no_results.hint.more_general', {}, 'ibexa_universal_discovery_widget'), Translator.trans(/*@Desc("Try different keywords.")*/'search.no_results.hint.different_kewords', {}, 'ibexa_universal_discovery_widget'), Translator.trans(/*@Desc("Try fewer keywords. Reducing keywords results in more matches.")*/'search.no_results.hint.fewer_keywords', {}, 'ibexa_universal_discovery_widget')];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, renderCustomTableHeader(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-search__no-results"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        src: "/bundles/ibexaadminui/img/no-results.svg"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "c-search__no-results-title"
      }, noResultsLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-search__no-results-subtitle"
      }, noResultsHints.map(function (hint, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: key // eslint-disable-line react/no-array-index-key
          ,
          className: "c-search__no-results-hint"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "c-search__no-results-hint-icon-wrapper"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "approved",
          extraClasses: "ibexa-icon--small-medium"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "c-search__no-results-hint-text"
        }, hint));
      }))));
    }
  };
  var spinnerWrapperClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_9__.createCssClassNames)({
    'c-search__spinner-wrapper': true,
    'c-search__spinner-wrapper--show': isLoading
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(search, [searchText, offset]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedContentTypesContext.Provider, {
    value: [selectedContentTypes, dispatchSelectedContentTypesAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedSectionContext.Provider, {
    value: [selectedSection, setSelectedSection]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedSubtreeContext.Provider, {
    value: [selectedSubtree, setSelectedSubtree]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedSubtreeBreadcrumbsContext.Provider, {
    value: [selectedSubtreeBreadcrumbs, setSelectedSubtreeBreadcrumbs]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedLanguageContext.Provider, {
    value: [selectedLanguage, setSelectedLanguage]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-search__main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-search__sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_filters_filters__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isCollapsed: false,
    search: search
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-search__content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: spinnerWrapperClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null)), renderSearchResults()))))))));
};
Search.propTypes = {
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
Search.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.tags.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.tags.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js");
/* harmony import */ var _common_tag_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/tag/tag */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/tag/tag.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var SearchTags = function SearchTags() {
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getAdminUiConfig)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_1__.SelectedContentTypesContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedContentTypes = _useContext2[0],
    dispatchSelectedContentTypesAction = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_1__.SelectedSectionContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    selectedSection = _useContext4[0],
    setSelectedSection = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_1__.SelectedSubtreeContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    setSelectedSubtree = _useContext6[1];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_search_search__WEBPACK_IMPORTED_MODULE_1__.SelectedSubtreeBreadcrumbsContext),
    _useContext8 = _slicedToArray(_useContext7, 2),
    selectedSubtreeBreadcrumbs = _useContext8[0],
    setSelectedSubtreeBreadcrumbs = _useContext8[1];
  var clearSelectedSubtree = function clearSelectedSubtree() {
    setSelectedSubtree('');
    setSelectedSubtreeBreadcrumbs('');
  };
  var contentTypesMap = Object.values(adminUiConfig.contentTypes).reduce(function (contentTypeDataMap, contentTypeGroup) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-search-tags"
  }, selectedContentTypes.map(function (contentTypeIdentifier) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_tag_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: contentTypeIdentifier,
      content: contentTypesMap[contentTypeIdentifier].name,
      onRemove: function onRemove() {
        return dispatchSelectedContentTypesAction({
          contentTypeIdentifier: contentTypeIdentifier,
          type: 'REMOVE_CONTENT_TYPE'
        });
      },
      extraClasses: "c-search-tags__tag"
    });
  }), !!selectedSection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_tag_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: selectedSection,
    onRemove: function onRemove() {
      return setSelectedSection('');
    },
    extraClasses: "c-search-tags__tag"
  }), !!selectedSubtreeBreadcrumbs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_tag_tag__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: selectedSubtreeBreadcrumbs,
    onRemove: function onRemove() {
      return clearSelectedSubtree();
    },
    extraClasses: "c-search-tags__tag"
  }));
};
SearchTags.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchTags);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.item.js":
/*!******************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.item.js ***!
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/thumbnail/thumbnail */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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







var SelectedLocationsItem = function SelectedLocationsItem(_ref) {
  var location = _ref.location,
    permissions = _ref.permissions;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.getAdminUiConfig)();
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.getTranslator)();
  var refSelectedLocationsItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.SelectedLocationsContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    dispatchSelectedLocationsAction = _useContext2[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_5__.ContentTypesMapContext);
  var clearLabel = Translator.trans(/*@Desc("Clear selection")*/'selected_locations.clear_selection', {}, 'ibexa_universal_discovery_widget');
  var removeFromSelection = function removeFromSelection() {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__.hideAll)(refSelectedLocationsItem.current);
    dispatchSelectedLocationsAction({
      type: 'REMOVE_SELECTED_LOCATION',
      id: location.id
    });
  };
  var sortedActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var selectedItemActions = adminUiConfig.universalDiscoveryWidget.selectedItemActions;
    var actions = selectedItemActions ? _toConsumableArray(selectedItemActions) : [];
    return actions.sort(function (actionA, actionB) {
      return actionB.priority - actionA.priority;
    });
  }, []);
  var version = location.ContentInfo.Content.CurrentVersion.Version;
  var thumbnailData = version ? version.Thumbnail : {};
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_2__.parse)(refSelectedLocationsItem.current);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selected-locations-item",
    ref: refSelectedLocationsItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selected-locations-item__image-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    thumbnailData: thumbnailData,
    iconExtraClasses: "ibexa-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selected-locations-item__info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-selected-locations-item__info-name"
  }, location.ContentInfo.Content.TranslatedName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-selected-locations-item__info-description"
  }, contentTypesMap[location.ContentInfo.Content.ContentType._href].name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selected-locations-item__actions-wrapper"
  }, sortedActions.map(function (action) {
    var Component = action.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
      key: action.id,
      location: location,
      permissions: permissions
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "c-selected-locations-item__remove-button btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text",
    onClick: removeFromSelection,
    title: clearLabel,
    "data-tooltip-container-selector": ".c-udw-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--tiny-small"
  }))));
};
SelectedLocationsItem.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  permissions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedLocationsItem);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.js":
/*!*************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _selected_locations_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selected.locations.item */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.item.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var SelectedLocations = function SelectedLocations() {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
  var refSelectedLocations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var refTogglerButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.SelectedLocationsContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedLocations = _useContext2[0],
    dispatchSelectedLocationsAction = _useContext2[1];
  var allowConfirmation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_6__.AllowConfirmationContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
    'c-selected-locations': true,
    'c-selected-locations--expanded': isExpanded
  });
  var expandLabel = Translator.trans(/*@Desc("Expand sidebar")*/'selected_locations.expand.sidebar', {}, 'ibexa_universal_discovery_widget');
  var collapseLabel = Translator.trans(/*@Desc("Collapse sidebar")*/'selected_locations.collapse.sidebar', {}, 'ibexa_universal_discovery_widget');
  var togglerLabel = isExpanded ? collapseLabel : expandLabel;
  var clearSelection = function clearSelection() {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_1__.hideAll)(refSelectedLocations.current);
    dispatchSelectedLocationsAction({
      type: 'CLEAR_SELECTED_LOCATIONS'
    });
  };
  var toggleExpanded = function toggleExpanded() {
    setIsExpanded(!isExpanded);
  };
  var renderSelectionCounter = function renderSelectionCounter() {
    var selectedLabel = Translator.transChoice(/*@Desc("{1}%count% selected item|[2,Inf]%count% selected items")*/'selected_locations.selected_items', selectedLocations.length, {
      count: selectedLocations.length
    }, 'ibexa_universal_discovery_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-selected-locations__selection-counter"
    }, selectedLabel);
  };
  var renderToggleButton = function renderToggleButton() {
    var iconName = isExpanded ? 'caret-double-next' : 'caret-double-back';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      ref: refTogglerButton,
      type: "button",
      className: "c-selected-locations__toggle-button btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text",
      onClick: toggleExpanded,
      title: togglerLabel,
      "data-tooltip-container-selector": ".c-udw-tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: "ibexa-icon--small"
    }));
  };
  var renderActionButtons = function renderActionButtons() {
    var removeLabel = Translator.transChoice(/*@Desc("{1}Deselect|[2,Inf]Deselect all")*/'selected_locations.deselect_all', selectedLocations.length, {}, 'ibexa_universal_discovery_widget');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-selected-locations__actions"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "c-selected-locations__clear-selection-button btn ibexa-btn ibexa-btn--small ibexa-btn--secondary",
      onClick: clearSelection
    }, removeLabel));
  };
  var renderLocationsList = function renderLocationsList() {
    if (!isExpanded) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-selected-locations__items-wrapper"
    }, renderActionButtons(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-selected-locations__items-list"
    }, selectedLocations.map(function (selectedLocation) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_selected_locations_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: selectedLocation.location.id,
        location: selectedLocation.location,
        permissions: selectedLocation.permissions
      });
    })));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!allowConfirmation) {
      return;
    }
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_1__.parse)(refSelectedLocations.current);
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_1__.hideAll)();
    var bootstrap = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getBootstrap)();
    var toggleButtonTooltip = bootstrap.Tooltip.getOrCreateInstance('.c-selected-locations__toggle-button');
    toggleButtonTooltip.setContent({
      '.tooltip-inner': togglerLabel
    });
  }, [isExpanded]);
  if (!allowConfirmation) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    ref: refSelectedLocations
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-selected-locations__header"
  }, renderSelectionCounter(), renderToggleButton()), renderLocationsList());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedLocations);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab-selector/tab.selector.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab-selector/tab.selector.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var TabSelector = function TabSelector() {
  var tabs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.TabsContext);
  var tabsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.TabsConfigContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.ActiveTabContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    activeTab = _useContext2[0],
    setActiveTab = _useContext2[1];
  var sortedTabs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return tabs.sort(function (tabA, tabB) {
      if (!tabsConfig[tabB.id] || !tabsConfig[tabA.id]) {
        return 0;
      }
      return tabsConfig[tabB.id].priority - tabsConfig[tabA.id].priority;
    });
  }, [tabs, tabsConfig]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tab-selector"
  }, sortedTabs.map(function (tab) {
    if (tab.isHiddenOnList || tabsConfig[tab.id] && tabsConfig[tab.id].hidden) {
      return null;
    }
    var onClick = function onClick() {
      return setActiveTab(tab.id);
    };
    var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-tab-selector__item': true,
      'c-tab-selector__item--selected': tab.id === activeTab
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className,
      key: tab.id,
      onClick: onClick,
      title: tab.getLabel(),
      "data-tooltip-container-selector": ".c-udw-tab"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      customPath: tab.getIcon(),
      extraClasses: "ibexa-icon--small-medium"
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabSelector);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js ***!
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
/* harmony import */ var _top_menu_top_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top-menu/top.menu */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.js");
/* harmony import */ var _actions_menu_actions_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions-menu/actions.menu */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/actions-menu/actions.menu.js");
/* harmony import */ var _tab_selector_tab_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tab-selector/tab.selector */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab-selector/tab.selector.js");
/* harmony import */ var _selected_locations_selected_locations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selected-locations/selected.locations */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/selected-locations/selected.locations.js");
/* harmony import */ var _content_create_widget_content_create_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content-create-widget/content.create.widget */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-create-widget/content.create.widget.js");
/* harmony import */ var _content_meta_preview_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../content.meta.preview.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var Tab = function Tab(_ref) {
  var children = _ref.children,
    actionsDisabledMap = _ref.actionsDisabledMap;
  var topBarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var bottomBarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('100%'),
    _useState2 = _slicedToArray(_useState, 2),
    contentHeight = _useState2[0],
    setContentHeight = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.SelectedLocationsContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    selectedLocations = _useContext2[0];
  var dropdownPortalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.DropdownPortalRefContext);
  var selectedLocationsComponent = !!selectedLocations.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_selected_locations_selected_locations__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null;
  var contentStyles = {
    height: contentHeight
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (topBarRef.current && bottomBarRef.current) {
      var height = "calc(100% - ".concat(topBarRef.current.offsetHeight + bottomBarRef.current.offsetHeight, "px)");
      setContentHeight(height);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab__top-bar",
    ref: topBarRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_top_menu_top_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    actionsDisabledMap: actionsDisabledMap
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab__content",
    style: contentStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab__left-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_create_widget_content_create_widget__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_tab_selector_tab_selector__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab__main"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab__right-sidebar"
  }, _content_meta_preview_module__WEBPACK_IMPORTED_MODULE_7__["default"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_meta_preview_module__WEBPACK_IMPORTED_MODULE_7__["default"], null), selectedLocationsComponent)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab__bottom-bar",
    ref: bottomBarRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_actions_menu_actions_menu__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-udw-tab__dropdown-portal",
    ref: dropdownPortalRef
  }));
};
Tab.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any).isRequired,
  actionsDisabledMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
Tab.defaultProps = {
  actionsDisabledMap: {
    'content-create-button': false,
    'sort-switcher': false,
    'view-switcher': false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js":
/*!*********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/toggle-selection/toggle.selection.js ***!
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
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var ToggleSelection = function ToggleSelection(_ref) {
  var multiple = _ref.multiple,
    location = _ref.location,
    isDisabled = _ref.isDisabled,
    isHidden = _ref.isHidden;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SelectedLocationsContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    selectedLocations = _useContext2[0],
    dispatchSelectedLocationsAction = _useContext2[1];
  var isSelected = selectedLocations.some(function (selectedItem) {
    return selectedItem.location.id === location.id;
  });
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-udw-toggle-selection ibexa-input': true,
    'ibexa-input--checkbox': multiple,
    'c-udw-toggle-selection--hidden': isHidden
  });
  var toggleSelection = function toggleSelection() {
    var action = isSelected ? {
      type: 'REMOVE_SELECTED_LOCATION',
      id: location.id
    } : {
      type: 'ADD_SELECTED_LOCATION',
      location: location
    };
    dispatchSelectedLocationsAction(action);
  };
  if (!multiple) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    className: className,
    checked: isSelected,
    disabled: isDisabled || isHidden,
    onChange: toggleSelection
  });
};
ToggleSelection.propTypes = {
  location: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isHidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ToggleSelection.defaultProps = {
  isHidden: false,
  isDisabled: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSelection);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _top_menu_search_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top.menu.search.input */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.search.input.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var TopMenu = function TopMenu(_ref) {
  var actionsDisabledMap = _ref.actionsDisabledMap;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.getTranslator)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_6__.getAdminUiConfig)();
  var topMenuActions = adminUiConfig.universalDiscoveryWidget.topMenuActions;
  var title = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.TitleContext);
  var cancelUDW = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.CancelContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSearchOpened = _useState2[0],
    setIsSearchOpened = _useState2[1];
  var sortedActions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var actions = topMenuActions;
    return actions.sort(function (actionA, actionB) {
      return actionB.priority - actionA.priority;
    });
  }, []);
  var backTitle = Translator.trans(/*@Desc("Close")*/'close.label', {}, 'ibexa_universal_discovery_widget');
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
    'c-top-menu': true,
    'c-top-menu--search-opened': isSearchOpened
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "c-top-menu__title-wrapper",
    "data-tooltip-container-selector": ".c-udw-tab",
    title: title
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-top-menu__actions-wrapper"
  }, sortedActions.map(function (action) {
    var Component = action.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, {
      key: action.id,
      isDisabled: actionsDisabledMap[action.id]
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_top_menu_search_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSearchOpened: isSearchOpened,
    setIsSearchOpened: setIsSearchOpened
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-top-menu__cancel-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "c-top-menu__cancel-btn btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text",
    type: "button",
    onClick: cancelUDW,
    title: backTitle,
    "data-tooltip-container-selector": ".c-top-menu__cancel-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--medium"
  }))));
};
TopMenu.propTypes = {
  actionsDisabledMap: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
TopMenu.defaultProps = {
  actionsDisabledMap: {
    'content-create-button': false,
    'sort-switcher': false,
    'view-switcher': false
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopMenu);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.search.input.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/top-menu/top.menu.search.input.js ***!
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
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var ENTER_CHAR_CODE = 13;
var SEARCH_TAB_ID = 'search';
var TopMenuSearchInput = function TopMenuSearchInput(_ref) {
  var isSearchOpened = _ref.isSearchOpened,
    setIsSearchOpened = _ref.setIsSearchOpened;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.ActiveTabContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    activeTab = _useContext2[0],
    setActiveTab = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_4__.SearchTextContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    searchText = _useContext4[0],
    setSearchText = _useContext4[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchText),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-top-menu-search-input': true,
    'c-top-menu-search-input--search-opened': isSearchOpened
  });
  var searchBtnClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-top-menu-search-input__search-btn btn ibexa-btn ibexa-btn--no-text': true,
    'ibexa-btn--primary': isSearchOpened,
    'ibexa-btn--tertiary': !isSearchOpened
  });
  var updateInputValue = function updateInputValue(_ref2) {
    var value = _ref2.target.value;
    return setInputValue(value);
  };
  var search = function search(value) {
    if (activeTab !== SEARCH_TAB_ID) {
      setActiveTab('search');
    }
    setSearchText(value);
  };
  var handleSearchBtnClick = function handleSearchBtnClick() {
    if (isSearchOpened) {
      search(inputValue);
      setIsSearchOpened(false);
    } else {
      setIsSearchOpened(true);
    }
  };
  var handleKeyPressed = function handleKeyPressed(_ref3) {
    var charCode = _ref3.charCode;
    if (charCode === ENTER_CHAR_CODE) {
      search(inputValue);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isSearchOpened) {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
    }
  }, [isSearchOpened]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      var isClickOutside = !event.target.closest('.c-top-menu-search-input');
      if (isClickOutside) {
        setIsSearchOpened(false);
      }
    };
    document.addEventListener('click', handleClickOutside, false);
    return function () {
      return document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: inputRef,
    type: "text",
    className: "c-top-menu-search-input__search-input",
    onChange: updateInputValue,
    onKeyPress: handleKeyPressed,
    value: inputValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: searchBtnClassName,
    type: "button",
    onClick: handleSearchBtnClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "search",
    extraClasses: "ibexa-icon--small"
  })));
};
TopMenuSearchInput.propTypes = {
  setIsSearchOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isSearchOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopMenuSearchInput);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/translation-selector/translation.selector.js ***!
  \*****************************************************************************************************************************************/
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
var _this = undefined;





var TranslationSelectorButton = function TranslationSelectorButton(_ref) {
  var hideTranslationSelector = _ref.hideTranslationSelector,
    selectTranslation = _ref.selectTranslation,
    version = _ref.version,
    isOpen = _ref.isOpen;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getTranslator)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getAdminUiConfig)();
  var languageCodes = version ? version.VersionInfo.languageCodes.split(',') : [];
  var editTranslationLabel = Translator.trans(/*@Desc("Select translation")*/'meta_preview.edit_translation', {}, 'ibexa_universal_discovery_widget');
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-translation-selector': true,
    'c-translation-selector--hidden': !isOpen
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-translation-selector__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "c-translation-selector__title"
  }, "".concat(editTranslationLabel, " (").concat(languageCodes.length, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "c-translation-selector__close-button btn",
    type: "button",
    onClick: hideTranslationSelector
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-translation-selector__languages-wrapper"
  }, languageCodes.map(function (languageCode) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: languageCode,
      className: "c-translation-selector__language",
      onClick: selectTranslation.bind(_this, languageCode)
    }, adminUiConfig.languages.mappings[languageCode].name);
  })));
};
TranslationSelectorButton.propTypes = {
  hideTranslationSelector: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  selectTranslation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  version: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslationSelectorButton);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tree-view/tree.view.js ***!
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_user_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/user.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/user.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_locations_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/locations.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/locations.helper.js");
/* harmony import */ var _content_tree_content_tree_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../content-tree/content.tree.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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









var TreeView = function TreeView(_ref) {
  var itemsPerPage = _ref.itemsPerPage;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_8__.getAdminUiConfig)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.LoadedLocationsMapContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    loadedLocationsMap = _useContext2[0],
    dispatchLoadedLocationsAction = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.MarkedLocationIdContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    markedLocationId = _useContext4[0],
    setMarkedLocationId = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.MultipleConfigContext),
    _useContext6 = _slicedToArray(_useContext5, 1),
    multiple = _useContext6[0];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.SelectedLocationsContext),
    _useContext8 = _slicedToArray(_useContext7, 2),
    dispatchSelectedLocationsAction = _useContext8[1];
  var _useContext9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.SortOrderContext),
    _useContext10 = _slicedToArray(_useContext9, 1),
    sortOrder = _useContext10[0];
  var _useContext11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.SortingContext),
    _useContext12 = _slicedToArray(_useContext11, 1),
    sorting = _useContext12[0];
  var allowedContentTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.AllowedContentTypesContext);
  var containersOnly = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.ContainersOnlyContext);
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.ContentTypesMapContext);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.RestInfoContext);
  var rootLocationId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_7__.RootLocationIdContext);
  var locationData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_helpers_locations_helper__WEBPACK_IMPORTED_MODULE_4__.findMarkedLocation)(loadedLocationsMap, markedLocationId);
  }, [markedLocationId, loadedLocationsMap]);
  var userId = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_user_helper__WEBPACK_IMPORTED_MODULE_2__.getId)();
  var expandItem = function expandItem(item, event) {
    event.preventDefault();
    event.currentTarget.closest('.c-list-item__row').querySelector('.c-list-item__toggler').click();
  };
  var markLocation = function markLocation(item) {
    var locationId = item.locationId;
    if (locationId === markedLocationId) {
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__.loadAccordionData)(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: locationId,
      sortClause: sorting,
      sortOrder: sortOrder,
      rootLocationId: rootLocationId
    }), function (locationsMap) {
      var location = locationsMap[locationsMap.length - 1].location;
      var contentTypeInfo = contentTypesMap[location.ContentInfo.Content.ContentType._href];
      var isContainer = contentTypeInfo.isContainer;
      var isNotSelectable = containersOnly && !isContainer || allowedContentTypes && !allowedContentTypes.includes(contentTypeInfo.identifier);
      setMarkedLocationId(locationId);
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
      if (!multiple) {
        dispatchSelectedLocationsAction({
          type: 'CLEAR_SELECTED_LOCATIONS'
        });
        if (!isNotSelectable) {
          dispatchSelectedLocationsAction({
            type: 'REPLACE_SELECTED_LOCATIONS',
            locations: [{
              location: location
            }]
          });
        }
      }
    });
  };
  var _readSubtreeRecursive = function readSubtreeRecursive(tree) {
    if (tree.length === 0) {
      return [];
    }
    var location = tree.shift();
    return [{
      children: _readSubtreeRecursive(tree),
      limit: itemsPerPage,
      locationId: location.parentLocationId,
      offset: 0,
      '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode'
    }];
  };
  var readSubtree = function readSubtree() {
    return _readSubtreeRecursive(_toConsumableArray(loadedLocationsMap));
  };
  var currentLocationPath = locationData && locationData.location ? locationData.location.pathString : '/1/';
  var locationsLoaded = loadedLocationsMap.length > 1 || loadedLocationsMap.length === 1 && loadedLocationsMap[0].subitems.length > 0;
  var contentTreeVisible = markedLocationId !== null && locationsLoaded || markedLocationId === null;
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-tree': true,
    'c-tree--single-select': !multiple
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, contentTreeVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_content_tree_content_tree_module__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userId: userId,
    currentLocationPath: currentLocationPath,
    rootLocationId: rootLocationId,
    subitemsLimit: adminUiConfig.contentTree.childrenLoadMaxLimi,
    subitemsLoadLimit: adminUiConfig.contentTree.loadMoreLimit,
    treeMaxDepth: adminUiConfig.contentTree.treeMaxDepth,
    restInfo: restInfo,
    onClickItem: expandItem,
    readSubtree: readSubtree,
    afterItemToggle: markLocation,
    sort: {
      sortClause: sorting,
      sortOrder: sortOrder
    },
    resizable: false
  }));
};
TreeView.propTypes = {
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
TreeView.defaultProps = {
  itemsPerPage: 50
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeView);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentCreateTab: () => (/* binding */ ContentCreateTab),
/* harmony export */   "default": () => (/* binding */ ContentCreateTabModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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






var ContentCreateTabModule = function ContentCreateTabModule() {
  var Routing = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getRouting)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.ContentOnTheFlyDataContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    contentOnTheFlyData = _useContext2[0],
    setContentOnTheFlyData = _useContext2[1];
  var tabs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.TabsContext);
  var contentOnTheFlyConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.ContentOnTheFlyConfigContext);
  var onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.ConfirmContext);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.RestInfoContext);
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.ActiveTabContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    setActiveTab = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.CreateContentWidgetContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    setCreateContentVisible = _useContext6[1];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.SelectedLocationsContext),
    _useContext8 = _slicedToArray(_useContext7, 2),
    selectedLocations = _useContext8[0],
    dispatchSelectedLocationsAction = _useContext8[1];
  var _useContext9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.LoadedLocationsMapContext),
    _useContext10 = _slicedToArray(_useContext9, 2),
    loadedLocationsMap = _useContext10[0],
    dispatchLoadedLocationsAction = _useContext10[1];
  var _useContext11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.MultipleConfigContext),
    _useContext12 = _slicedToArray(_useContext11, 1),
    multiple = _useContext12[0];
  var iframeRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var getIframeUrl = function getIframeUrl() {
    var locationId = contentOnTheFlyData.locationId,
      languageCode = contentOnTheFlyData.languageCode,
      contentTypeIdentifier = contentOnTheFlyData.contentTypeIdentifier;
    return Routing.generate('ibexa.content.on_the_fly.create', {
      locationId: locationId,
      languageCode: languageCode,
      contentTypeIdentifier: contentTypeIdentifier
    });
  };
  var cancelContentCreate = function cancelContentCreate() {
    setCreateContentVisible(false);
    setContentOnTheFlyData({});
    setActiveTab(tabs[0].id);
  };
  var publishContent = function publishContent() {
    var submitButton = iframeRef.current.contentWindow.document.body.querySelector('[data-action="publish"]');
    if (submitButton) {
      submitButton.click();
    }
  };
  var handleCancelInIframe = function handleCancelInIframe(event) {
    event.preventDefault();
    cancelContentCreate();
  };
  var handleIframeLoad = function handleIframeLoad() {
    var locationId = iframeRef.current.contentWindow.document.querySelector('meta[name="LocationID"]');
    var iframeBody = iframeRef.current.contentWindow.document.body;
    var iframeConfirmBtn = iframeBody.querySelector('.ibexa-context-menu .ibexa-btn--confirm');
    var iframeCancelBtn = iframeBody.querySelector('.ibexa-context-menu .ibexa-btn--cancel');
    var iframeCloseBtn = iframeBody.querySelector('.ibexa-anchor-navigation-menu__close');
    if (locationId) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
        id: parseInt(locationId.content, 10)
      }), function (createdItems) {
        if (contentOnTheFlyConfig.autoConfirmAfterPublish) {
          var items = multiple ? [].concat(_toConsumableArray(selectedLocations), [{
            location: createdItems[0]
          }]) : [{
            location: createdItems[0]
          }];
          onConfirm(items);
          return;
        }
        var clonedLoadedLocations = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(loadedLocationsMap);
        var parentLocationData = clonedLoadedLocations[clonedLoadedLocations.length - 1];
        var action = multiple ? {
          type: 'ADD_SELECTED_LOCATION',
          location: createdItems[0]
        } : {
          type: 'REPLACE_SELECTED_LOCATIONS',
          locations: [{
            location: createdItems[0]
          }]
        };
        parentLocationData.subitems = [];
        parentLocationData.totalCount = parentLocationData.totalCount + 1;
        dispatchLoadedLocationsAction({
          type: 'SET_LOCATIONS',
          data: clonedLoadedLocations
        });
        dispatchSelectedLocationsAction(action);
        cancelContentCreate();
      });
    }
    iframeConfirmBtn === null || iframeConfirmBtn === void 0 || iframeConfirmBtn.addEventListener('click', publishContent, false);
    iframeCancelBtn === null || iframeCancelBtn === void 0 || iframeCancelBtn.addEventListener('click', handleCancelInIframe, false);
    iframeCloseBtn === null || iframeCloseBtn === void 0 || iframeCloseBtn.addEventListener('click', handleCancelInIframe, false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-content-create"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: getIframeUrl(),
    className: "m-content-create__iframe",
    ref: iframeRef,
    onLoad: handleIframeLoad
  }));
};
var ContentCreateTab = {
  id: 'content-create',
  component: ContentCreateTabModule,
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_5__.getTranslator)();
    return Translator.trans(/*@Desc("Content create")*/'content_create.label', {}, 'ibexa_universal_discovery_widget');
  },
  getIcon: function getIcon() {
    return (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_4__.getIconPath)('search');
  },
  isHiddenOnList: true
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentEditTab: () => (/* binding */ ContentEditTab),
/* harmony export */   "default": () => (/* binding */ ContentEditTabModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
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





var ContentEditTabModule = function ContentEditTabModule() {
  var Routing = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getRouting)();
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.ActiveTabContext),
    _useContext2 = _slicedToArray(_useContext, 3),
    setActiveTab = _useContext2[1],
    previousActiveTab = _useContext2[2];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    loadedLocationsMap = _useContext4[0],
    dispatchLoadedLocationsAction = _useContext4[1];
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.SelectedLocationsContext),
    _useContext6 = _slicedToArray(_useContext5, 2),
    selectedLocations = _useContext6[0],
    dispatchSelectedLocationsAction = _useContext6[1];
  var _useContext7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_1__.EditOnTheFlyDataContext),
    _useContext8 = _slicedToArray(_useContext7, 2),
    editOnTheFlyData = _useContext8[0],
    setEditOnTheFlyData = _useContext8[1];
  var iframeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var publishContent = function publishContent() {
    var submitButton = iframeRef.current.contentWindow.document.body.querySelector('[data-action="publish"]');
    if (submitButton) {
      submitButton.click();
    }
  };
  var cancelContentEdit = function cancelContentEdit() {
    setActiveTab(previousActiveTab);
    setEditOnTheFlyData({});
  };
  var handleContentPublished = function handleContentPublished(locationId) {
    var clonedLocationsMap = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_4__["default"])(loadedLocationsMap);
    var isInSubitems = false;
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_3__.findLocationsByParentLocationId)(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: locationId
    }), function (response) {
      var clonedSelectedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_4__["default"])(selectedLocations);
      var index = clonedSelectedLocation.findIndex(function (clonedLocation) {
        return clonedLocation.location.id === locationId;
      });
      if (index !== -1) {
        clonedSelectedLocation[index].location = response.location;
        dispatchSelectedLocationsAction({
          type: 'REPLACE_SELECTED_LOCATIONS',
          locations: clonedSelectedLocation
        });
      }
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: response
      });
    });
    clonedLocationsMap.forEach(function (clonedLocation) {
      var subitem = clonedLocation.subitems.find(function (_ref) {
        var location = _ref.location;
        return location.id === locationId;
      });
      if (subitem) {
        clonedLocation.subitems = [];
        isInSubitems = true;
      }
    });
    if (isInSubitems) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: clonedLocationsMap
      });
    }
    cancelContentEdit();
  };
  var handleIframeLoad = function handleIframeLoad() {
    var locationId = iframeRef.current.contentWindow.document.querySelector('meta[name="LocationID"]');
    var iframeBody = iframeRef.current.contentWindow.document.body;
    var iframeConfirmBtn = iframeBody.querySelector('.ibexa-context-menu .ibexa-btn--confirm');
    var iframeCancelBtn = iframeBody.querySelector('.ibexa-context-menu .ibexa-btn--cancel');
    var iframeCloseBtn = iframeBody.querySelector('.ibexa-anchor-navigation-menu__close');
    if (locationId) {
      handleContentPublished(parseInt(locationId.content, 10));
    }
    iframeConfirmBtn === null || iframeConfirmBtn === void 0 || iframeConfirmBtn.addEventListener('click', publishContent, false);
    iframeCancelBtn === null || iframeCancelBtn === void 0 || iframeCancelBtn.addEventListener('click', cancelContentEdit, false);
    iframeCloseBtn === null || iframeCloseBtn === void 0 || iframeCloseBtn.addEventListener('click', cancelContentEdit, false);
  };
  var iframeUrl = Routing.generate('ibexa.content.on_the_fly.edit', {
    contentId: editOnTheFlyData.contentId,
    versionNo: editOnTheFlyData.versionNo,
    languageCode: editOnTheFlyData.languageCode,
    locationId: editOnTheFlyData.locationId
  }, true);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: iframeUrl,
    className: "c-content-edit__iframe",
    ref: iframeRef,
    onLoad: handleIframeLoad
  }));
};
var ContentEditTab = {
  id: 'content-edit',
  component: ContentEditTabModule,
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_2__.getTranslator)();
    return Translator.trans(/*@Desc("Content edit")*/'content_edit.label', {}, 'ibexa_universal_discovery_widget');
  },
  isHiddenOnList: true
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.meta.preview.module.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/thumbnail/thumbnail */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/thumbnail/thumbnail.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/spinner/spinner */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js");
/* harmony import */ var _helpers_locations_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/locations.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/locations.helper.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _components_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/content-edit-button/content.edit.button */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/content-edit-button/content.edit.button.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
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












var ContentMetaPreview = function ContentMetaPreview() {
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_11__.getTranslator)();
  var Routing = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_11__.getRouting)();
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_11__.getAdminUiConfig)();
  var refContentMetaPreview = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    markedLocationId = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    loadedLocationsMap = _useContext4[0],
    dispatchLoadedLocationsAction = _useContext4[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.ContentTypesMapContext);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.RestInfoContext);
  var allowRedirects = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_8__.AllowRedirectsContext);
  var locationData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_helpers_locations_helper__WEBPACK_IMPORTED_MODULE_5__.findMarkedLocation)(loadedLocationsMap, markedLocationId);
  }, [markedLocationId, loadedLocationsMap]);
  var lastModifiedLabel = Translator.trans(/*@Desc("Modified")*/'meta_preview.last_modified', {}, 'ibexa_universal_discovery_widget');
  var creationDateLabel = Translator.trans(/*@Desc("Created")*/'meta_preview.creation_date', {}, 'ibexa_universal_discovery_widget');
  var translationsLabel = Translator.trans(/*@Desc("Translations")*/'meta_preview.translations', {}, 'ibexa_universal_discovery_widget');
  var languages = adminUiConfig.languages,
    timezone = adminUiConfig.timezone,
    dateFormat = adminUiConfig.dateFormat;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_10__.parse)(refContentMetaPreview.current);
  });
  if (!markedLocationId || markedLocationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_11__.SYSTEM_ROOT_LOCATION_ID || !locationData) {
    return null;
  }
  var bookmarked = locationData.bookmarked,
    location = locationData.location,
    version = locationData.version,
    permissions = locationData.permissions;
  var bookmarkIconName = bookmarked ? 'bookmark-active' : 'bookmark';
  var isLocationDataLoaded = !!(location && version);
  var toggleBookmarked = function toggleBookmarked() {
    var toggleBookmark = bookmarked ? _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__.removeBookmark : _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_6__.addBookmark;
    toggleBookmark(_objectSpread(_objectSpread({}, restInfo), {}, {
      locationId: location.id
    }), function () {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: _objectSpread(_objectSpread({}, locationData), {}, {
          bookmarked: !bookmarked
        })
      });
    });
  };
  var previewContent = function previewContent() {
    location.href = Routing.generate('ibexa.content.view', {
      contentId: location.ContentInfo.Content._id,
      locationId: location.id
    }, true);
  };
  var renderActions = function renderActions() {
    var previewLabel = Translator.trans(/*@Desc("Preview")*/'meta_preview.preview', {}, 'ibexa_universal_discovery_widget');
    var editLabel = Translator.trans(/*@Desc("Edit")*/'meta_preview.edit', {}, 'ibexa_universal_discovery_widget');
    var bookmarksAddLabel = Translator.trans(/*@Desc("Add to bookmarks")*/'meta_preview.bookmarks_add', {}, 'ibexa_universal_discovery_widget');
    var bookmarksRemoveLabel = Translator.trans(/*@Desc("Remove from bookmarks")*/'meta_preview.bookrmarks_remove', {}, 'ibexa_universal_discovery_widget');
    var previewButton = allowRedirects ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__action-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-content-meta-preview__preview-button btn ibexa-btn ibexa-btn--ghost",
      type: "button",
      onClick: previewContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "view",
      extraClasses: "ibexa-icon--small"
    }), previewLabel)) : null;
    var hasAccess = permissions && permissions.edit.hasAccess;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__actions"
    }, previewButton, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__action-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_content_edit_button_content_edit_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      location: location,
      version: version,
      isDisabled: !hasAccess,
      label: editLabel
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__action-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-content-meta-preview__toggle-bookmark-button btn ibexa-btn ibexa-btn--ghost",
      type: "button",
      onClick: toggleBookmarked
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: bookmarkIconName,
      extraClasses: "ibexa-icon--small"
    }), bookmarked ? bookmarksRemoveLabel : bookmarksAddLabel)));
  };
  var renderMetaPreviewLoadingSpinner = function renderMetaPreviewLoadingSpinner() {
    var spinnerWrapperClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'c-content-meta-preview__loading-spinner-wrapper': true,
      'c-content-meta-preview__loading-spinner-wrapper--hidden': isLocationDataLoaded
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: spinnerWrapperClassName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_spinner_spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  };
  var renderMetaPreview = function renderMetaPreview() {
    if (!isLocationDataLoaded) {
      return;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__preview"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_thumbnail_thumbnail__WEBPACK_IMPORTED_MODULE_2__["default"], {
      thumbnailData: version.Thumbnail,
      iconExtraClasses: "ibexa-icon--extra-large"
    })), renderActions(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__header"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-content-meta-preview__content-name"
    }, location.ContentInfo.Content.TranslatedName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__content-type-name"
    }, contentTypesMap[location.ContentInfo.Content.ContentType._href].name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, lastModifiedLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_9__.formatShortDateTime)(new Date(location.ContentInfo.Content.lastModificationDate), timezone, dateFormat.shortDateTimeFormat))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, creationDateLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_9__.formatShortDateTime)(new Date(location.ContentInfo.Content.publishedDate), timezone, dateFormat.shortDateTimeFormat))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row"
    }, translationsLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-content-meta-preview__details-item-row c-content-meta-preview__translations-wrapper"
    }, version.VersionInfo.languageCodes.split(',').map(function (languageCode) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        key: languageCode,
        className: "c-content-meta-preview__translation"
      }, languages.mappings[languageCode].name);
    }))))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-content-meta-preview",
    ref: refContentMetaPreview
  }, renderMetaPreviewLoadingSpinner(), renderMetaPreview());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentMetaPreview);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/locations.helper.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/locations.helper.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMarkedLocation: () => (/* binding */ findMarkedLocation)
/* harmony export */ });
var findMarkedLocation = function findMarkedLocation(loadedLocationsMap, markedLocationId) {
  var _lastLoadedLocation$s;
  var markedLocation = loadedLocationsMap.find(function (_ref) {
    var parentLocationId = _ref.parentLocationId;
    return parentLocationId === markedLocationId;
  });
  if (markedLocation) {
    return markedLocation;
  } else if (!loadedLocationsMap.length) {
    return {};
  }
  var lastLoadedLocation = loadedLocationsMap[loadedLocationsMap.length - 1];
  return (_lastLoadedLocation$s = lastLoadedLocation.subitems.find(function (_ref2) {
    var location = _ref2.location;
    return location.id === markedLocationId;
  })) !== null && _lastLoadedLocation$s !== void 0 ? _lastLoadedLocation$s : {};
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/selected.locations.helper.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/selected.locations.helper.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsSelectable: () => (/* binding */ checkIsSelectable),
/* harmony export */   checkIsSelected: () => (/* binding */ checkIsSelected),
/* harmony export */   checkIsSelectionBlocked: () => (/* binding */ checkIsSelectionBlocked)
/* harmony export */ });
var checkIsSelectable = function checkIsSelectable(_ref) {
  var _allowedContentTypes$;
  var location = _ref.location,
    contentTypesMap = _ref.contentTypesMap,
    allowedContentTypes = _ref.allowedContentTypes,
    containersOnly = _ref.containersOnly;
  var contentType = contentTypesMap[location.ContentInfo.Content.ContentType._href];
  var isContainer = contentType.isContainer,
    identifier = contentType.identifier;
  var isAllowedContentType = (_allowedContentTypes$ = allowedContentTypes === null || allowedContentTypes === void 0 ? void 0 : allowedContentTypes.includes(identifier)) !== null && _allowedContentTypes$ !== void 0 ? _allowedContentTypes$ : true;
  return (!containersOnly || isContainer) && isAllowedContentType;
};
var checkIsSelected = function checkIsSelected(_ref2) {
  var location = _ref2.location,
    selectedLocations = _ref2.selectedLocations;
  return selectedLocations.some(function (selectedLocation) {
    return selectedLocation.location.id === location.id;
  });
};
var checkIsSelectionBlocked = function checkIsSelectionBlocked(_ref3) {
  var location = _ref3.location,
    selectedLocations = _ref3.selectedLocations,
    multipleItemsLimit = _ref3.multipleItemsLimit;
  return multipleItemsLimit !== 0 && selectedLocations.length >= multipleItemsLimit && !checkIsSelected({
    location: location,
    selectedLocations: selectedLocations
  });
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useFindLocationsByParentLocationIdFetch.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFindLocationsByParentLocationIdFetch: () => (/* binding */ useFindLocationsByParentLocationIdFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/content.type.helper.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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




var fetchInitialState = {
  dataFetched: false,
  data: {}
};
var fetchReducer = function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return fetchInitialState;
    case 'FETCH_END':
      return {
        data: action.data,
        dataFetched: true
      };
    default:
      throw new Error();
  }
};
var useFindLocationsByParentLocationIdFetch = function useFindLocationsByParentLocationIdFetch(locationData, _ref, limit, offset) {
  var sortClause = _ref.sortClause,
    sortOrder = _ref.sortOrder;
  var gridView = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.BlockFetchLocationHookContext),
    _useContext2 = _slicedToArray(_useContext, 1),
    isFetchLocationHookBlocked = _useContext2[0];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.SuggestionsStorageContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    suggestionsStorage = _useContext4[0],
    setSuggestionsStorage = _useContext4[1];
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(fetchReducer, fetchInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var getFindLocationsPromise = function getFindLocationsPromise() {
    return new Promise(function (resolve) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__.findLocationsByParentLocationId)(_objectSpread(_objectSpread({}, restInfo), {}, {
        parentLocationId: locationData.parentLocationId,
        sortClause: sortClause,
        sortOrder: sortOrder,
        limit: limit,
        offset: offset,
        gridView: gridView
      }), resolve);
    });
  };
  var getFindSuggestionsPromise = function getFindSuggestionsPromise() {
    return new Promise(function (resolve) {
      if (suggestionsStorage[locationData.parentLocationId]) {
        resolve(suggestionsStorage[locationData.parentLocationId]);
        return;
      }
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__.findSuggestions)(_objectSpread(_objectSpread({}, restInfo), {}, {
        parentLocationId: locationData.parentLocationId
      }), resolve);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFetchLocationHookBlocked) {
      return;
    }
    var effectCleaned = false;
    if (!locationData.parentLocationId || locationData.collapsed || locationData.subitems.length >= locationData.totalCount || locationData.subitems.length >= limit + offset) {
      dispatch({
        type: 'FETCH_END',
        data: state.data
      });
      return;
    }
    dispatch({
      type: 'FETCH_START'
    });
    Promise.all([getFindLocationsPromise(), getFindSuggestionsPromise()]).then(function (_ref2) {
      var _suggestions$View;
      var _ref3 = _slicedToArray(_ref2, 2),
        locations = _ref3[0],
        suggestions = _ref3[1];
      if (effectCleaned) {
        return;
      }
      var suggestionsResults = (_suggestions$View = suggestions.View) === null || _suggestions$View === void 0 || (_suggestions$View = _suggestions$View.Result.aggregations[0]) === null || _suggestions$View === void 0 ? void 0 : _suggestions$View.entries.map(function (_ref4) {
        var key = _ref4.key;
        return {
          data: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_content_type_helper__WEBPACK_IMPORTED_MODULE_1__.getContentTypeDataByHref)(key.ContentType._href)
        };
      });
      if (suggestionsResults) {
        setSuggestionsStorage(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, locationData.parentLocationId, suggestionsResults));
        });
      }
      dispatch({
        type: 'FETCH_END',
        data: locations
      });
    });
    return function () {
      effectCleaned = true;
    };
  }, [restInfo, sortClause, sortOrder, locationData.parentLocationId, locationData.subitems.length, limit, offset, gridView, locationData.collapsed, isFetchLocationHookBlocked]);
  if (isFetchLocationHookBlocked) {
    return [{}, true];
  }
  return [state.data, !state.dataFetched];
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadBookmarksFetch.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadBookmarksFetch.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoadBookmarksFetch: () => (/* binding */ useLoadBookmarksFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
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



var fetchInitialState = {
  dataFetched: false,
  data: {}
};
var fetchReducer = function fetchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return fetchInitialState;
    case 'FETCH_END':
      return {
        data: action.data,
        dataFetched: true
      };
    default:
      throw new Error();
  }
};
var useLoadBookmarksFetch = function useLoadBookmarksFetch(limit, offset) {
  var effectCleanedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.RestInfoContext);
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(fetchReducer, fetchInitialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var reload = function reload() {
    effectCleanedRef.current = false;
    dispatch({
      type: 'FETCH_START'
    });
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__.loadBookmarks)(_objectSpread(_objectSpread({}, restInfo), {}, {
      limit: limit,
      offset: offset
    }), function (response) {
      if (effectCleanedRef.current) {
        return;
      }
      dispatch({
        type: 'FETCH_END',
        data: response
      });
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    effectCleanedRef.current = false;
    dispatch({
      type: 'FETCH_START'
    });
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_1__.loadBookmarks)(_objectSpread(_objectSpread({}, restInfo), {}, {
      limit: limit,
      offset: offset
    }), function (response) {
      if (effectCleanedRef.current) {
        return;
      }
      dispatch({
        type: 'FETCH_END',
        data: response
      });
    });
    return function () {
      effectCleanedRef.current = true;
    };
  }, [restInfo, limit, offset]);
  return [state.data, !state.dataFetched, reload];
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLoadedLocationsReducer: () => (/* binding */ useLoadedLocationsReducer)
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

var initialState = [{
  parentLocationId: 1,
  subitems: []
}];
var cutLocationsAfter = function cutLocationsAfter(state, action) {
  var itemIndex = state.findIndex(function (data) {
    return data.parentLocationId === action.locationId;
  });
  if (itemIndex === -1) {
    return state;
  }
  return state.slice(0, itemIndex + 1);
};
var updateLocationsMap = function updateLocationsMap(state, action) {
  var parentLocationIndex = state.findIndex(function (location) {
    return location.parentLocationId === action.data.parentLocationId;
  });
  var updatedState = _toConsumableArray(state);
  if (parentLocationIndex !== -1) {
    updatedState[parentLocationIndex] = action.data;
    return updatedState;
  }
  var childrenIndex = state.findIndex(function (data) {
    return data.subitems.find(function (item) {
      return item.location.id === action.data.parentLocationId;
    });
  });
  if (childrenIndex !== -1) {
    updatedState = updatedState.slice(0, childrenIndex + 1);
  }
  updatedState.push(action.data);
  return updatedState;
};
var setLocations = function setLocations(state, action) {
  return action.data;
};
var clearLoactions = function clearLoactions() {
  return [];
};
var loadedLocationsReducer = function loadedLocationsReducer(state, action) {
  switch (action.type) {
    case 'CUT_LOCATIONS':
      return cutLocationsAfter(state, action);
    case 'UPDATE_LOCATIONS':
      return updateLocationsMap(state, action);
    case 'SET_LOCATIONS':
      return setLocations(state, action);
    case 'CLEAR_LOCATIONS':
      return clearLoactions();
    default:
      throw new Error();
  }
};
var useLoadedLocationsReducer = function useLoadedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(loadedLocationsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    loadedLocationsMap = _useReducer2[0],
    dispatchLoadedLocationsAction = _useReducer2[1];
  return [loadedLocationsMap, dispatchLoadedLocationsAction];
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSearchByQueryFetch.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSearchByQueryFetch.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSearchByQueryFetch: () => (/* binding */ useSearchByQueryFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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




var SEARCH_START = 'SEARCH_START';
var SEARCH_END = 'SEARCH_END';
var startSearch = function startSearch() {
  return {
    isLoading: true,
    data: {}
  };
};
var endSearch = function endSearch(_ref) {
  var response = _ref.response;
  return {
    isLoading: false,
    data: response
  };
};
var searchByQueryReducer = function searchByQueryReducer(state, action) {
  switch (action.type) {
    case SEARCH_START:
      return startSearch();
    case SEARCH_END:
      return endSearch(action);
    default:
      throw new Error();
  }
};
var useSearchByQueryFetch = function useSearchByQueryFetch() {
  var _getAdminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getAdminUiConfig)(),
    damWidgetConfig = _getAdminUiConfig.damWidget;
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.LoadedLocationsMapContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    dispatchLoadedLocationsAction = _useContext2[1];
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(searchByQueryReducer, {
      isLoading: false,
      data: {}
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    isLoading = _useReducer2$.isLoading,
    data = _useReducer2$.data,
    dispatch = _useReducer2[1];
  var searchByQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (searchText, contentTypesIdentifiers, sectionIdentifier, subtreePathString, limit, offset, languageCode) {
    var sortClause = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var sortOrder = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
    var imageCriterionData = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
    var aggregations = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : {};
    var filters = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : {};
    var fullTextCriterion = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : null;
    var contentNameCriterion = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : null;
    var dateCriterion = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : null;
    var useAlwaysAvailable = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : true;
    var isBookmarked = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : null;
    var fieldCriterionData = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : null;
    var handleFetch = function handleFetch(response) {
      dispatchLoadedLocationsAction({
        type: 'CLEAR_LOCATIONS'
      });
      dispatch({
        type: SEARCH_END,
        response: response
      });
    };
    var query = {};
    if (searchText) {
      query.FullTextCriterion = "".concat(searchText, "*");
    }
    if (fullTextCriterion) {
      query.FullTextCriterion = fullTextCriterion;
    }
    if (contentNameCriterion) {
      query.ContentNameCriterion = contentNameCriterion;
    }
    if (contentTypesIdentifiers && contentTypesIdentifiers.length) {
      query.ContentTypeIdentifierCriterion = contentTypesIdentifiers;
    }
    if (sectionIdentifier) {
      query.SectionIdentifierCriterion = sectionIdentifier;
    }
    if (subtreePathString) {
      query.SubtreeCriterion = subtreePathString;
    }
    if (dateCriterion) {
      query.DateMetadataCriterion = dateCriterion;
    }
    if (isBookmarked) {
      query.IsBookmarkedCriterion = true;
    }
    if (fieldCriterionData) {
      query.AND = {
        Field: fieldCriterionData
      };
    }
    var isImageCriterionDataEmpty = !imageCriterionData || Object.keys(imageCriterionData).length === 0;
    if (!isImageCriterionDataEmpty) {
      var imagesCriterion = damWidgetConfig.image.fieldDefinitionIdentifiers.reduce(function (criterions, fieldDefinitionIdentifier) {
        return [].concat(_toConsumableArray(criterions), [_objectSpread({
          fieldDefIdentifier: fieldDefinitionIdentifier
        }, imageCriterionData)]);
      }, []);
      query.OR = {
        ImageCriterion: imagesCriterion
      };
    }
    dispatch({
      type: SEARCH_START
    });
    return (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_2__.findLocationsBySearchQuery)(_objectSpread(_objectSpread({}, restInfo), {}, {
      query: query,
      aggregations: aggregations,
      filters: filters,
      sortClause: sortClause,
      sortOrder: sortOrder,
      limit: limit,
      offset: offset,
      languageCode: languageCode,
      useAlwaysAvailable: useAlwaysAvailable
    }), handleFetch);
  }, [restInfo, dispatch]);
  return [isLoading, data, searchByQuery];
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsHelpers.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsHelpers.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelectedLocationsHelpers: () => (/* binding */ useSelectedLocationsHelpers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_selected_locations_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/selected.locations.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/helpers/selected.locations.helper.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var useSelectedLocationsHelpers = function useSelectedLocationsHelpers() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.MultipleConfigContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    multipleItemsLimit = _useContext2[1];
  var contentTypesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.ContentTypesMapContext);
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.SelectedLocationsContext),
    _useContext4 = _slicedToArray(_useContext3, 1),
    selectedLocations = _useContext4[0];
  var containersOnly = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.ContainersOnlyContext);
  var allowedContentTypes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_2__.AllowedContentTypesContext);
  var checkIsSelectableWrapped = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (location) {
    return (0,_helpers_selected_locations_helper__WEBPACK_IMPORTED_MODULE_1__.checkIsSelectable)({
      location: location,
      contentTypesMap: contentTypesMap,
      allowedContentTypes: allowedContentTypes,
      containersOnly: containersOnly
    });
  }, [contentTypesMap, allowedContentTypes, containersOnly]);
  var checkIsSelectedWrapped = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (location) {
    return (0,_helpers_selected_locations_helper__WEBPACK_IMPORTED_MODULE_1__.checkIsSelected)({
      location: location,
      selectedLocations: selectedLocations
    });
  }, [selectedLocations]);
  var checkIsSelectionBlockedWrapped = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (location) {
    return (0,_helpers_selected_locations_helper__WEBPACK_IMPORTED_MODULE_1__.checkIsSelectionBlocked)({
      location: location,
      selectedLocations: selectedLocations,
      multipleItemsLimit: multipleItemsLimit
    });
  }, [selectedLocations, multipleItemsLimit]);
  return {
    checkIsSelectable: checkIsSelectableWrapped,
    checkIsSelected: checkIsSelectedWrapped,
    checkIsSelectionBlocked: checkIsSelectionBlockedWrapped
  };
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSelectedLocationsReducer: () => (/* binding */ useSelectedLocationsReducer)
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
var selectedLocationsReducer = function selectedLocationsReducer(state, action) {
  switch (action.type) {
    case 'ADD_SELECTED_LOCATION':
      return [].concat(_toConsumableArray(state), [{
        location: action.location,
        permissions: action.permissions
      }]);
    case 'REMOVE_SELECTED_LOCATION':
      return state.filter(function (selectedItem) {
        return selectedItem.location.id !== action.id;
      });
    case 'ADD_SELECTED_LOCATIONS':
      return action.locations.reduce(function (selectedLocations, location) {
        return [].concat(_toConsumableArray(selectedLocations), [{
          location: location
        }]);
      }, state);
    case 'CLEAR_SELECTED_LOCATIONS':
      return [];
    case 'REPLACE_SELECTED_LOCATIONS':
      return action.locations;
    default:
      throw new Error();
  }
};
var useSelectedLocationsReducer = function useSelectedLocationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(selectedLocationsReducer, state),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    selectedLocations = _useReducer2[0],
    dispatchSelectedLocationsAction = _useReducer2[1];
  return [selectedLocations, dispatchSelectedLocationsAction];
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchTab: () => (/* binding */ SearchTab),
/* harmony export */   ValueTypeDefault: () => (/* binding */ SearchTabModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tab/tab */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/tab/tab.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/components/search/search.js");
/* harmony import */ var _universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./universal.discovery.module */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var SearchTabModule = function SearchTabModule() {
  var tabsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.TabsConfigContext);
  var restorationStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.MarkedLocationIdContext),
    _useContext2 = _slicedToArray(_useContext, 2),
    markedLocationId = _useContext2[0],
    setMarkedLocationId = _useContext2[1];
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_universal_discovery_module__WEBPACK_IMPORTED_MODULE_3__.LoadedLocationsMapContext),
    _useContext4 = _slicedToArray(_useContext3, 2),
    loadedLocationsMap = _useContext4[0],
    dispatchLoadedLocationsAction = _useContext4[1];
  var actionsDisabledMap = {
    'content-create-button': false,
    'sort-switcher': true,
    'view-switcher': true
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var isCleared = markedLocationId === null && (loadedLocationsMap === null || loadedLocationsMap === void 0 ? void 0 : loadedLocationsMap.length) === 0;
    if (!isCleared) {
      restorationStateRef.current = {
        markedLocationId: markedLocationId,
        loadedLocationsMap: loadedLocationsMap
      };
    }
  }, [setMarkedLocationId, dispatchLoadedLocationsAction, markedLocationId, loadedLocationsMap]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      if (restorationStateRef.current) {
        setMarkedLocationId(restorationStateRef.current.markedLocationId);
        dispatchLoadedLocationsAction({
          type: 'SET_LOCATIONS',
          data: restorationStateRef.current.loadedLocationsMap
        });
      }
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "m-search-tab"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tab_tab__WEBPACK_IMPORTED_MODULE_1__["default"], {
    actionsDisabledMap: actionsDisabledMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_search_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    itemsPerPage: tabsConfig.search.itemsPerPage
  })));
};
var SearchTab = {
  id: 'search',
  component: SearchTabModule,
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_4__.getTranslator)();
    return Translator.trans(/*@Desc("Search")*/'search.label', {}, 'ibexa_universal_discovery_widget');
  },
  getIcon: function getIcon() {
    return (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_icon_helper__WEBPACK_IMPORTED_MODULE_5__.getIconPath)('search');
  },
  isHiddenOnList: true
};


/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGGREGATIONS_LIMIT: () => (/* binding */ AGGREGATIONS_LIMIT),
/* harmony export */   QUERY_LIMIT: () => (/* binding */ QUERY_LIMIT),
/* harmony export */   addBookmark: () => (/* binding */ addBookmark),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   fetchAdminConfig: () => (/* binding */ fetchAdminConfig),
/* harmony export */   findContentInfo: () => (/* binding */ findContentInfo),
/* harmony export */   findLocationsById: () => (/* binding */ findLocationsById),
/* harmony export */   findLocationsByParentLocationId: () => (/* binding */ findLocationsByParentLocationId),
/* harmony export */   findLocationsBySearchQuery: () => (/* binding */ findLocationsBySearchQuery),
/* harmony export */   findSuggestions: () => (/* binding */ findSuggestions),
/* harmony export */   loadAccordionData: () => (/* binding */ loadAccordionData),
/* harmony export */   loadBookmarks: () => (/* binding */ loadBookmarks),
/* harmony export */   loadContentInfo: () => (/* binding */ loadContentInfo),
/* harmony export */   loadContentTypes: () => (/* binding */ loadContentTypes),
/* harmony export */   loadLocationsWithPermissions: () => (/* binding */ loadLocationsWithPermissions),
/* harmony export */   removeBookmark: () => (/* binding */ removeBookmark)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/request.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/notification.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");
/* harmony import */ var _common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/helpers/request.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var DEFAULT_INSTANCE_URL = window.location.origin;
var HEADERS_CREATE_VIEW = {
  Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
  'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1'
};
var ENDPOINT_CREATE_VIEW = '/api/ibexa/v2/views';
var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
var ENDPOINT_LOCATION = '/api/ibexa/v2/module/universal-discovery/location';
var ENDPOINT_ACCORDION = '/api/ibexa/v2/module/universal-discovery/accordion';
var ENDPOINT_LOCATION_LIST = '/api/ibexa/v2/module/universal-discovery/locations';
var QUERY_LIMIT = 50;
var AGGREGATIONS_LIMIT = 4;
var addLanguageCodeToCreateViewEndpoint = function addLanguageCodeToCreateViewEndpoint(body, languageCode) {
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getAdminUiConfig)();
  body.ViewInput.languageCode = languageCode !== null && languageCode !== void 0 ? languageCode : adminUiConfig.languages.priority[0];
};
var showErrorNotificationAbortWrapper = function showErrorNotificationAbortWrapper(error) {
  if ((error === null || error === void 0 ? void 0 : error.name) === 'AbortError') {
    return;
  }
  return (0,_common_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.showErrorNotification)(error);
};
var mapSubitems = function mapSubitems(subitems) {
  return subitems.locations.map(function (location) {
    var mappedSubitems = {
      location: location.Location
    };
    if (subitems.versions) {
      var version = subitems.versions.find(function (_ref) {
        var Version = _ref.Version;
        return Version.VersionInfo.Content._href === location.Location.Content._href;
      });
      mappedSubitems.version = version.Version;
    }
    return mappedSubitems;
  });
};
var findLocationsByParentLocationId = function findLocationsByParentLocationId(_ref2, callback) {
  var token = _ref2.token,
    siteaccess = _ref2.siteaccess,
    accessToken = _ref2.accessToken,
    parentLocationId = _ref2.parentLocationId,
    _ref2$limit = _ref2.limit,
    limit = _ref2$limit === void 0 ? QUERY_LIMIT : _ref2$limit,
    _ref2$offset = _ref2.offset,
    offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
    _ref2$sortClause = _ref2.sortClause,
    sortClause = _ref2$sortClause === void 0 ? 'DatePublished' : _ref2$sortClause,
    _ref2$sortOrder = _ref2.sortOrder,
    sortOrder = _ref2$sortOrder === void 0 ? 'ascending' : _ref2$sortOrder,
    _ref2$gridView = _ref2.gridView,
    gridView = _ref2$gridView === void 0 ? false : _ref2$gridView,
    _ref2$instanceUrl = _ref2.instanceUrl,
    instanceUrl = _ref2$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref2$instanceUrl;
  var url = "".concat(instanceUrl).concat(ENDPOINT_LOCATION, "/").concat(parentLocationId);
  if (gridView) {
    url += '/gridview';
  }
  var request = new Request("".concat(url, "?limit=").concat(limit, "&offset=").concat(offset, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var _response$LocationDat = response.LocationData,
      bookmarked = _response$LocationDat.bookmarked,
      location = _response$LocationDat.location,
      permissions = _response$LocationDat.permissions,
      subitems = _response$LocationDat.subitems,
      version = _response$LocationDat.version;
    var subitemsData = mapSubitems(subitems);
    var locationData = {
      location: location ? location.Location : null,
      version: version ? version.Version : null,
      totalCount: subitems.totalCount,
      subitems: subitemsData,
      bookmarked: bookmarked,
      permissions: permissions,
      parentLocationId: parentLocationId
    };
    callback(locationData);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadAccordionData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref3, callback) {
    var token, siteaccess, accessToken, parentLocationId, _ref3$limit, limit, _ref3$sortClause, sortClause, _ref3$sortOrder, sortOrder, _ref3$gridView, gridView, _ref3$rootLocationId, rootLocationId, _ref3$instanceUrl, instanceUrl, url, request;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = _ref3.token, siteaccess = _ref3.siteaccess, accessToken = _ref3.accessToken, parentLocationId = _ref3.parentLocationId, _ref3$limit = _ref3.limit, limit = _ref3$limit === void 0 ? QUERY_LIMIT : _ref3$limit, _ref3$sortClause = _ref3.sortClause, sortClause = _ref3$sortClause === void 0 ? 'DatePublished' : _ref3$sortClause, _ref3$sortOrder = _ref3.sortOrder, sortOrder = _ref3$sortOrder === void 0 ? 'ascending' : _ref3$sortOrder, _ref3$gridView = _ref3.gridView, gridView = _ref3$gridView === void 0 ? false : _ref3$gridView, _ref3$rootLocationId = _ref3.rootLocationId, rootLocationId = _ref3$rootLocationId === void 0 ? 1 : _ref3$rootLocationId, _ref3$instanceUrl = _ref3.instanceUrl, instanceUrl = _ref3$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref3$instanceUrl;
          url = "".concat(instanceUrl).concat(ENDPOINT_ACCORDION, "/").concat(parentLocationId);
          if (gridView) {
            url += '/gridview';
          }
          request = new Request("".concat(url, "?limit=").concat(limit, "&sortClause=").concat(sortClause, "&sortOrder=").concat(sortOrder, "&rootLocationId=").concat(rootLocationId), {
            method: 'GET',
            headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
              token: token,
              siteaccess: siteaccess,
              accessToken: accessToken,
              extraHeaders: {
                Accept: 'application/json'
              }
            }),
            mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
              instanceUrl: instanceUrl
            }),
            credentials: 'same-origin'
          });
          fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
            var data = response.AccordionData;
            var mappedItems = data.breadcrumb.map(function (item) {
              var location = item.Location;
              var itemData = data.columns[location.id];
              var mappedItem = {
                location: location,
                totalCount: itemData ? itemData.subitems.totalCount : undefined,
                subitems: itemData ? mapSubitems(itemData.subitems) : [],
                parentLocationId: location.id,
                collapsed: !data.columns[location.id]
              };
              return mappedItem;
            });
            var rootLocationData = data.columns[1];
            var lastLocationData = data.columns[parentLocationId];
            if (rootLocationData) {
              mappedItems.unshift({
                totalCount: rootLocationData ? rootLocationData.subitems.totalCount : undefined,
                subitems: rootLocationData ? mapSubitems(rootLocationData.subitems) : [],
                parentLocationId: 1,
                collapsed: false
              });
            }
            mappedItems.push({
              location: lastLocationData.location.Location,
              version: lastLocationData.version.Version,
              totalCount: lastLocationData ? lastLocationData.subitems.totalCount : undefined,
              subitems: lastLocationData ? mapSubitems(lastLocationData.subitems) : [],
              bookmarked: lastLocationData.bookmarked,
              permissions: lastLocationData.permissions,
              parentLocationId: parentLocationId
            });
            callback(mappedItems);
          })["catch"](showErrorNotificationAbortWrapper);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function loadAccordionData(_x, _x2) {
    return _ref4.apply(this, arguments);
  };
}();
var findLocationsBySearchQuery = function findLocationsBySearchQuery(_ref5, callback) {
  var token = _ref5.token,
    siteaccess = _ref5.siteaccess,
    accessToken = _ref5.accessToken,
    query = _ref5.query,
    aggregations = _ref5.aggregations,
    filters = _ref5.filters,
    _ref5$sortClause = _ref5.sortClause,
    sortClause = _ref5$sortClause === void 0 ? 'DatePublished' : _ref5$sortClause,
    _ref5$sortOrder = _ref5.sortOrder,
    sortOrder = _ref5$sortOrder === void 0 ? 'ascending' : _ref5$sortOrder,
    _ref5$limit = _ref5.limit,
    limit = _ref5$limit === void 0 ? QUERY_LIMIT : _ref5$limit,
    _ref5$offset = _ref5.offset,
    offset = _ref5$offset === void 0 ? 0 : _ref5$offset,
    _ref5$languageCode = _ref5.languageCode,
    languageCode = _ref5$languageCode === void 0 ? null : _ref5$languageCode,
    _ref5$instanceUrl = _ref5.instanceUrl,
    instanceUrl = _ref5$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref5$instanceUrl,
    _ref5$useAlwaysAvaila = _ref5.useAlwaysAvailable,
    useAlwaysAvailable = _ref5$useAlwaysAvaila === void 0 ? true : _ref5$useAlwaysAvaila;
  var body = {
    ViewInput: {
      identifier: "udw-locations-by-search-query-".concat(query.FullTextCriterion),
      "public": false,
      useAlwaysAvailable: useAlwaysAvailable,
      LocationQuery: {
        FacetBuilders: {},
        SortClauses: sortClause && sortOrder ? _defineProperty({}, sortClause, sortOrder) : {},
        Query: query,
        Aggregations: aggregations,
        Filters: filters,
        limit: limit,
        offset: offset
      }
    }
  };
  addLanguageCodeToCreateViewEndpoint(body, languageCode);
  var abortController = new AbortController();
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin',
    signal: abortController.signal
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var _response$View$Result = response.View.Result,
      count = _response$View$Result.count,
      searchAggregations = _response$View$Result.aggregations,
      searchHits = _response$View$Result.searchHits;
    var items = searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback({
      items: items,
      aggregations: searchAggregations,
      count: count
    });
  })["catch"](showErrorNotificationAbortWrapper);
  return {
    abortController: abortController
  };
};
var findLocationsById = function findLocationsById(_ref7, callback) {
  var token = _ref7.token,
    siteaccess = _ref7.siteaccess,
    accessToken = _ref7.accessToken,
    id = _ref7.id,
    _ref7$noLanguageCode = _ref7.noLanguageCode,
    noLanguageCode = _ref7$noLanguageCode === void 0 ? false : _ref7$noLanguageCode,
    _ref7$useAlwaysAvaila = _ref7.useAlwaysAvailable,
    useAlwaysAvailable = _ref7$useAlwaysAvaila === void 0 ? undefined : _ref7$useAlwaysAvaila,
    _ref7$limit = _ref7.limit,
    limit = _ref7$limit === void 0 ? QUERY_LIMIT : _ref7$limit,
    _ref7$offset = _ref7.offset,
    offset = _ref7$offset === void 0 ? 0 : _ref7$offset,
    _ref7$instanceUrl = _ref7.instanceUrl,
    instanceUrl = _ref7$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref7$instanceUrl;
  var body = {
    ViewInput: {
      identifier: "udw-locations-by-id-".concat(id),
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
      },
      useAlwaysAvailable: useAlwaysAvailable
    }
  };
  if (useAlwaysAvailable !== undefined) {
    body.ViewInput.useAlwaysAvailable = useAlwaysAvailable;
  }
  if (!noLanguageCode) {
    addLanguageCodeToCreateViewEndpoint(body);
  }
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Location;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var findContentInfo = function findContentInfo(_ref8, callback) {
  var token = _ref8.token,
    siteaccess = _ref8.siteaccess,
    accessToken = _ref8.accessToken,
    contentId = _ref8.contentId,
    _ref8$limit = _ref8.limit,
    limit = _ref8$limit === void 0 ? QUERY_LIMIT : _ref8$limit,
    _ref8$offset = _ref8.offset,
    offset = _ref8$offset === void 0 ? 0 : _ref8$offset,
    _ref8$instanceUrl = _ref8.instanceUrl,
    instanceUrl = _ref8$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref8$instanceUrl;
  var body = {
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      }
    }
  };
  addLanguageCodeToCreateViewEndpoint(body);
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadBookmarks = function loadBookmarks(_ref9, callback) {
  var token = _ref9.token,
    siteaccess = _ref9.siteaccess,
    accessToken = _ref9.accessToken,
    limit = _ref9.limit,
    offset = _ref9.offset,
    _ref9$instanceUrl = _ref9.instanceUrl,
    instanceUrl = _ref9$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref9$instanceUrl;
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_BOOKMARK, "?limit=").concat(limit, "&offset=").concat(offset), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var count = response.BookmarkList.count;
    var items = response.BookmarkList.items.map(function (item) {
      return item.Location;
    });
    callback({
      count: count,
      items: items
    });
  })["catch"](showErrorNotificationAbortWrapper);
};
var toggleBookmark = function toggleBookmark(_ref10, callback, method) {
  var siteaccess = _ref10.siteaccess,
    token = _ref10.token,
    accessToken = _ref10.accessToken,
    locationId = _ref10.locationId,
    _ref10$instanceUrl = _ref10.instanceUrl,
    instanceUrl = _ref10$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref10$instanceUrl;
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_BOOKMARK, "/").concat(locationId), {
    method: method,
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponseStatus).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var addBookmark = function addBookmark(options, callback) {
  toggleBookmark(options, callback, 'POST');
};
var removeBookmark = function removeBookmark(options, callback) {
  toggleBookmark(options, callback, 'DELETE');
};
var loadContentTypes = function loadContentTypes(_ref11, callback) {
  var token = _ref11.token,
    siteaccess = _ref11.siteaccess,
    accessToken = _ref11.accessToken,
    _ref11$instanceUrl = _ref11.instanceUrl,
    instanceUrl = _ref11$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref11$instanceUrl;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/types"), {
    method: 'GET',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.ContentTypeInfoList+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var createDraft = function createDraft(_ref12, callback) {
  var token = _ref12.token,
    siteaccess = _ref12.siteaccess,
    accessToken = _ref12.accessToken,
    contentId = _ref12.contentId,
    _ref12$instanceUrl = _ref12.instanceUrl,
    instanceUrl = _ref12$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref12$instanceUrl;
  var request = new Request("".concat(instanceUrl, "/api/ibexa/v2/content/objects/").concat(contentId, "/currentversion"), {
    method: 'COPY',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.VersionUpdate+json'
      }
    }),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var loadContentInfo = function loadContentInfo(_ref13, callback) {
  var token = _ref13.token,
    siteaccess = _ref13.siteaccess,
    accessToken = _ref13.accessToken,
    contentId = _ref13.contentId,
    _ref13$noLanguageCode = _ref13.noLanguageCode,
    noLanguageCode = _ref13$noLanguageCode === void 0 ? false : _ref13$noLanguageCode,
    _ref13$useAlwaysAvail = _ref13.useAlwaysAvailable,
    useAlwaysAvailable = _ref13$useAlwaysAvail === void 0 ? undefined : _ref13$useAlwaysAvail,
    _ref13$limit = _ref13.limit,
    limit = _ref13$limit === void 0 ? QUERY_LIMIT : _ref13$limit,
    _ref13$offset = _ref13.offset,
    offset = _ref13$offset === void 0 ? 0 : _ref13$offset,
    signal = _ref13.signal,
    _ref13$instanceUrl = _ref13.instanceUrl,
    instanceUrl = _ref13$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref13$instanceUrl;
  var body = {
    ViewInput: {
      identifier: "udw-load-content-info-".concat(contentId),
      "public": false,
      ContentQuery: {
        FacetBuilders: {},
        SortClauses: {},
        Filter: {
          ContentIdCriterion: "".concat(contentId)
        },
        limit: limit,
        offset: offset
      },
      useAlwaysAvailable: useAlwaysAvailable
    }
  };
  if (useAlwaysAvailable !== undefined) {
    body.ViewInput.useAlwaysAvailable = useAlwaysAvailable;
  }
  if (!noLanguageCode) {
    addLanguageCodeToCreateViewEndpoint(body);
  }
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_CREATE_VIEW), {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: HEADERS_CREATE_VIEW
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request, {
    signal: signal
  }).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(function (response) {
    var items = response.View.Result.searchHits.searchHit.map(function (searchHit) {
      return searchHit.value.Content;
    });
    callback(items);
  })["catch"](showErrorNotificationAbortWrapper);
};
var loadLocationsWithPermissions = function loadLocationsWithPermissions(_ref14, callback) {
  var token = _ref14.token,
    siteaccess = _ref14.siteaccess,
    accessToken = _ref14.accessToken,
    locationIds = _ref14.locationIds,
    signal = _ref14.signal,
    _ref14$instanceUrl = _ref14.instanceUrl,
    instanceUrl = _ref14$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref14$instanceUrl;
  var request = new Request("".concat(instanceUrl).concat(ENDPOINT_LOCATION_LIST, "?locationIds=").concat(locationIds), {
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: {
        Accept: 'application/vnd.ibexa.api.VersionUpdate+json'
      }
    }),
    method: 'GET',
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request, {
    signal: signal
  }).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};
var fetchAdminConfig = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref15) {
    var token, siteaccess, accessToken, _ref15$instanceUrl, instanceUrl, request, adminUiData, adminUiConfig;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          token = _ref15.token, siteaccess = _ref15.siteaccess, accessToken = _ref15.accessToken, _ref15$instanceUrl = _ref15.instanceUrl, instanceUrl = _ref15$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref15$instanceUrl;
          request = new Request("".concat(instanceUrl, "/api/ibexa/v2/application-config"), {
            method: 'GET',
            headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
              token: token,
              siteaccess: siteaccess,
              accessToken: accessToken,
              extraHeaders: {
                Accept: 'application/json'
              }
            }),
            mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
              instanceUrl: instanceUrl
            }),
            credentials: 'same-origin'
          });
          _context2.next = 4;
          return fetch(request);
        case 4:
          adminUiData = _context2.sent;
          _context2.next = 7;
          return adminUiData.json();
        case 7:
          adminUiConfig = _context2.sent;
          return _context2.abrupt("return", adminUiConfig.ApplicationConfig);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function fetchAdminConfig(_x3) {
    return _ref16.apply(this, arguments);
  };
}();
var findSuggestions = function findSuggestions(_ref17, callback) {
  var siteaccess = _ref17.siteaccess,
    token = _ref17.token,
    parentLocationId = _ref17.parentLocationId,
    accessToken = _ref17.accessToken,
    _ref17$instanceUrl = _ref17.instanceUrl,
    instanceUrl = _ref17$instanceUrl === void 0 ? DEFAULT_INSTANCE_URL : _ref17$instanceUrl;
  var body = {
    ViewInput: {
      identifier: 'view_with_aggregation',
      LocationQuery: {
        // '0' is a proper choice here because aggregation will still provide proper results.
        // We care only about the aggregation itself, not about fetching records.
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
  };
  addLanguageCodeToCreateViewEndpoint(body);
  var request = new Request(ENDPOINT_CREATE_VIEW, {
    method: 'POST',
    headers: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestHeaders)({
      token: token,
      siteaccess: siteaccess,
      accessToken: accessToken,
      extraHeaders: _objectSpread({}, HEADERS_CREATE_VIEW)
    }),
    body: JSON.stringify(body),
    mode: (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_0__.getRequestMode)({
      instanceUrl: instanceUrl
    }),
    credentials: 'same-origin'
  });
  fetch(request).then(_common_helpers_request_helper_js__WEBPACK_IMPORTED_MODULE_3__.handleRequestResponse).then(callback)["catch"](showErrorNotificationAbortWrapper);
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/universal.discovery.module.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveTabContext: () => (/* binding */ ActiveTabContext),
/* harmony export */   AllowConfirmationContext: () => (/* binding */ AllowConfirmationContext),
/* harmony export */   AllowRedirectsContext: () => (/* binding */ AllowRedirectsContext),
/* harmony export */   AllowedContentTypesContext: () => (/* binding */ AllowedContentTypesContext),
/* harmony export */   BlockFetchLocationHookContext: () => (/* binding */ BlockFetchLocationHookContext),
/* harmony export */   CancelContext: () => (/* binding */ CancelContext),
/* harmony export */   ConfirmContext: () => (/* binding */ ConfirmContext),
/* harmony export */   ContainersOnlyContext: () => (/* binding */ ContainersOnlyContext),
/* harmony export */   ContentOnTheFlyConfigContext: () => (/* binding */ ContentOnTheFlyConfigContext),
/* harmony export */   ContentOnTheFlyDataContext: () => (/* binding */ ContentOnTheFlyDataContext),
/* harmony export */   ContentTypesInfoMapContext: () => (/* binding */ ContentTypesInfoMapContext),
/* harmony export */   ContentTypesMapContext: () => (/* binding */ ContentTypesMapContext),
/* harmony export */   CreateContentWidgetContext: () => (/* binding */ CreateContentWidgetContext),
/* harmony export */   CurrentViewContext: () => (/* binding */ CurrentViewContext),
/* harmony export */   DropdownPortalRefContext: () => (/* binding */ DropdownPortalRefContext),
/* harmony export */   EditOnTheFlyDataContext: () => (/* binding */ EditOnTheFlyDataContext),
/* harmony export */   GridActiveLocationIdContext: () => (/* binding */ GridActiveLocationIdContext),
/* harmony export */   LoadedLocationsMapContext: () => (/* binding */ LoadedLocationsMapContext),
/* harmony export */   MarkedLocationIdContext: () => (/* binding */ MarkedLocationIdContext),
/* harmony export */   MultipleConfigContext: () => (/* binding */ MultipleConfigContext),
/* harmony export */   RestInfoContext: () => (/* binding */ RestInfoContext),
/* harmony export */   RootLocationIdContext: () => (/* binding */ RootLocationIdContext),
/* harmony export */   SNACKBAR_ACTIONS: () => (/* binding */ SNACKBAR_ACTIONS),
/* harmony export */   SORTING_OPTIONS: () => (/* binding */ SORTING_OPTIONS),
/* harmony export */   SearchTextContext: () => (/* binding */ SearchTextContext),
/* harmony export */   SelectedLocationsContext: () => (/* binding */ SelectedLocationsContext),
/* harmony export */   SnackbarActionsContext: () => (/* binding */ SnackbarActionsContext),
/* harmony export */   SortOrderContext: () => (/* binding */ SortOrderContext),
/* harmony export */   SortingContext: () => (/* binding */ SortingContext),
/* harmony export */   StartingLocationIdContext: () => (/* binding */ StartingLocationIdContext),
/* harmony export */   SuggestionsStorageContext: () => (/* binding */ SuggestionsStorageContext),
/* harmony export */   TabsConfigContext: () => (/* binding */ TabsConfigContext),
/* harmony export */   TabsContext: () => (/* binding */ TabsContext),
/* harmony export */   TitleContext: () => (/* binding */ TitleContext),
/* harmony export */   UDWContext: () => (/* binding */ UDWContext),
/* harmony export */   VIEWS: () => (/* binding */ VIEWS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/helpers/deep.clone.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useLoadedLocationsReducer */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useLoadedLocationsReducer.js");
/* harmony import */ var _hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useSelectedLocationsReducer */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/hooks/useSelectedLocationsReducer.js");
/* harmony import */ var _services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/universal.discovery.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/services/universal.discovery.service.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _document$querySelect, _document$querySelect2;
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
  document = _window.document;
var CLASS_SCROLL_DISABLED = 'ibexa-scroll-disabled';
var defaultRestInfo = {
  accsessToken: null,
  instanceUrl: window.location.origin,
  token: (_document$querySelect = document.querySelector('meta[name="CSRF-Token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.content,
  siteaccess: (_document$querySelect2 = document.querySelector('meta[name="SiteAccess"]')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.content
};
var SORTING_OPTIONS = [{
  value: 'date:asc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Date")*/'sorting.date.label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-down ibexa-icon--tiny-small"
    }));
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Sort by date")*/'sorting.date.selected_label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-down ibexa-icon--tiny-small"
    }));
  },
  sortClause: 'DatePublished',
  sortOrder: 'ascending'
}, {
  value: 'date:desc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Date")*/'sorting.date.label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-up ibexa-icon--tiny-small"
    }));
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__option-label"
    }, Translator.trans(/*@Desc("Sort by date")*/'sorting.date.selected_label', {}, 'ibexa_universal_discovery_widget'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "back",
      extraClasses: "c-simple-dropdown__arrow-up ibexa-icon--tiny-small"
    }));
  },
  sortClause: 'DatePublished',
  sortOrder: 'descending'
}, {
  value: 'name:asc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Name A-Z")*/'sorting.name.asc.label', {}, 'ibexa_universal_discovery_widget');
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Sort by name A-Z")*/'sorting.name.asc.selected_label', {}, 'ibexa_universal_discovery_widget');
  },
  sortClause: 'ContentName',
  sortOrder: 'ascending'
}, {
  value: 'name:desc',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Name Z-A")*/'sorting.name.desc.label', {}, 'ibexa_universal_discovery_widget');
  },
  selectedLabel: function selectedLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Sort by name Z-A")*/'sorting.name.desc.selected_label', {}, 'ibexa_universal_discovery_widget');
  },
  sortClause: 'ContentName',
  sortOrder: 'descending'
}];
var VIEWS = [{
  value: 'finder',
  iconName: 'panels',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Panels view")*/'sorting.panels.view', {}, 'ibexa_universal_discovery_widget');
  }
}, {
  value: 'grid',
  iconName: 'view-grid',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Grid view")*/'sorting.grid.view', {}, 'ibexa_universal_discovery_widget');
  }
}, {
  value: 'tree',
  iconName: 'content-tree',
  getLabel: function getLabel() {
    var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getTranslator)();
    return Translator.trans(/*@Desc("Tree view")*/'sorting.tree.view', {}, 'ibexa_universal_discovery_widget');
  }
}];
var SNACKBAR_ACTIONS = {
  INSERT: 'insert',
  DUPLICATE: 'duplicate',
  EDIT: 'edit',
  DOWNLOAD: 'download',
  DELETE: 'delete',
  TOGGLE_SELECTION: 'toggleSelection'
};
var UDWContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var RestInfoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowRedirectsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowConfirmationContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentTypesInfoMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MultipleConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContainersOnlyContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var AllowedContentTypesContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ActiveTabContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TabsConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TabsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var TitleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CancelContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ConfirmContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SortingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SortOrderContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CurrentViewContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var MarkedLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var StartingLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var LoadedLocationsMapContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var RootLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SelectedLocationsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var CreateContentWidgetContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentOnTheFlyDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var ContentOnTheFlyConfigContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var EditOnTheFlyDataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var BlockFetchLocationHookContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SearchTextContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var DropdownPortalRefContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SuggestionsStorageContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var GridActiveLocationIdContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var SnackbarActionsContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var UniversalDiscoveryModule = function UniversalDiscoveryModule(props) {
  var restInfo = props.restInfo;
  var adminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.getAdminUiConfig)();
  var tabs = adminUiConfig.universalDiscoveryWidget.tabs;
  var defaultMarkedLocationId = props.startingLocationId || props.rootLocationId;
  var abortControllerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var dropdownPortalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      activeTab: props.activeTab,
      previousActiveTab: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    _useState2$ = _useState2[0],
    activeTab = _useState2$.activeTab,
    previousActiveTab = _useState2$.previousActiveTab,
    setActiveTabsData = _useState2[1];
  var setActiveTab = function setActiveTab(activeTabNew) {
    return setActiveTabsData(function (_ref) {
      var activeTabOld = _ref.activeTab;
      return {
        activeTab: activeTabNew,
        previousActiveTab: activeTabOld
      };
    });
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeSortClause),
    _useState4 = _slicedToArray(_useState3, 2),
    sorting = _useState4[0],
    setSorting = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeSortOrder),
    _useState6 = _slicedToArray(_useState5, 2),
    sortOrder = _useState6[0],
    setSortOrder = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.activeView),
    _useState8 = _slicedToArray(_useState7, 2),
    currentView = _useState8[0],
    setCurrentView = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultMarkedLocationId !== 1 ? defaultMarkedLocationId : null),
    _useState10 = _slicedToArray(_useState9, 2),
    markedLocationId = _useState10[0],
    setMarkedLocationId = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    createContentVisible = _useState12[0],
    setCreateContentVisible = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    contentOnTheFlyData = _useState14[0],
    setContentOnTheFlyData = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    editOnTheFlyData = _useState16[0],
    setEditOnTheFlyData = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    contentTypesInfoMap = _useState18[0],
    setContentTypesInfoMap = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.startingLocationId && props.startingLocationId !== 1 && props.startingLocationId !== props.rootLocationId),
    _useState20 = _slicedToArray(_useState19, 2),
    isFetchLocationHookBlocked = _useState20[0],
    setIsFetchLocationHookBlocked = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    searchText = _useState22[0],
    setSearchText = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState24 = _slicedToArray(_useState23, 2),
    suggestionsStorage = _useState24[0],
    setSuggestionsStorage = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(markedLocationId),
    _useState26 = _slicedToArray(_useState25, 2),
    gridActiveLocationId = _useState26[0],
    setGridActiveLocationId = _useState26[1];
  var _useLoadedLocationsRe = (0,_hooks_useLoadedLocationsReducer__WEBPACK_IMPORTED_MODULE_5__.useLoadedLocationsReducer)([{
      parentLocationId: props.rootLocationId,
      subitems: []
    }]),
    _useLoadedLocationsRe2 = _slicedToArray(_useLoadedLocationsRe, 2),
    loadedLocationsMap = _useLoadedLocationsRe2[0],
    dispatchLoadedLocationsAction = _useLoadedLocationsRe2[1];
  var _useSelectedLocations = (0,_hooks_useSelectedLocationsReducer__WEBPACK_IMPORTED_MODULE_6__.useSelectedLocationsReducer)(),
    _useSelectedLocations2 = _slicedToArray(_useSelectedLocations, 2),
    selectedLocations = _useSelectedLocations2[0],
    dispatchSelectedLocationsAction = _useSelectedLocations2[1];
  var activeTabConfig = tabs.find(function (tab) {
    return tab.id === activeTab;
  });
  var Tab = activeTabConfig.component;
  var className = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_4__.createCssClassNames)({
    'm-ud': true,
    'm-ud--locations-selected': !!selectedLocations.length && props.allowConfirmation
  });
  var loadPermissions = function loadPermissions() {
    var locationIds = selectedLocations.filter(function (item) {
      return !item.permissions;
    }).map(function (item) {
      return item.location.id;
    }).join(',');
    if (!locationIds) {
      return Promise.resolve(null);
    }
    return new Promise(function (resolve) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadLocationsWithPermissions)(_objectSpread(_objectSpread({}, restInfo), {}, {
        locationIds: locationIds,
        signal: abortControllerRef.current.signal
      }), function (response) {
        return resolve(response);
      });
    });
  };
  var loadVersions = function loadVersions() {
    var signal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var locationsWithoutVersion = selectedLocations.filter(function (selectedItem) {
      return !selectedItem.location.ContentInfo.Content.CurrentVersion.Version;
    });
    if (!locationsWithoutVersion.length) {
      return Promise.resolve([]);
    }
    var contentIds = locationsWithoutVersion.map(function (item) {
      return item.location.ContentInfo.Content._id;
    }).join(',');
    return new Promise(function (resolve) {
      (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadContentInfo)(_objectSpread(_objectSpread({}, restInfo), {}, {
        noLanguageCode: true,
        useAlwaysAvailable: true,
        contentId: contentIds,
        signal: signal
      }), function (response) {
        return resolve(response);
      });
    });
  };
  var contentTypesMapGlobal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Object.values(adminUiConfig.contentTypes).reduce(function (contentTypesMap, contentTypesGroup) {
      contentTypesGroup.forEach(function (contentType) {
        contentTypesMap[contentType.href] = contentType;
      });
      return contentTypesMap;
    }, {});
  }, [adminUiConfig.contentTypes]);
  var onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var selectedItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : selectedLocations;
    loadVersions().then(function (locationsWithVersions) {
      var clonedSelectedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedItems);
      if (Array.isArray(locationsWithVersions)) {
        locationsWithVersions.forEach(function (content) {
          var clonedLocation = clonedSelectedLocation.find(function (clonedItem) {
            return clonedItem.location.ContentInfo.Content._id === content._id;
          });
          if (clonedLocation) {
            clonedLocation.location.ContentInfo.Content.CurrentVersion.Version = content.CurrentVersion.Version;
          }
        });
      }
      var updatedLocations = clonedSelectedLocation.map(function (selectedItem) {
        var clonedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedItem.location);
        var contentType = clonedLocation.ContentInfo.Content.ContentType;
        clonedLocation.ContentInfo.Content.ContentTypeInfo = contentTypesInfoMap[contentType._href];
        return clonedLocation;
      });
      props.onConfirm(updatedLocations);
    });
  }, [selectedLocations, contentTypesInfoMap]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _adminUiConfig$univer;
    var addContentTypesInfo = function addContentTypesInfo(contentTypes) {
      setContentTypesInfoMap(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), contentTypes);
      });
    };
    var handleLoadContentTypes = function handleLoadContentTypes(response) {
      var contentTypesMap = response.ContentTypeInfoList.ContentType.reduce(function (contentTypesList, item) {
        contentTypesList[item._href] = item;
        return contentTypesList;
      }, {});
      addContentTypesInfo(contentTypesMap);
    };
    (_adminUiConfig$univer = adminUiConfig.universalDiscoveryWidget.contentTypesLoaders) === null || _adminUiConfig$univer === void 0 || _adminUiConfig$univer.forEach(function (contentTypesLoader) {
      return contentTypesLoader(addContentTypesInfo);
    });
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadContentTypes)(restInfo, handleLoadContentTypes);
    document.body.dispatchEvent(new CustomEvent('ibexa-udw-opened'));
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_8__.parse)(document.querySelector('.c-udw-tab'));
    return function () {
      document.body.dispatchEvent(new CustomEvent('ibexa-udw-closed'));
      (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_tooltips_helper__WEBPACK_IMPORTED_MODULE_8__.hideAll)();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!props.selectedLocations.length) {
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.findLocationsById)(_objectSpread(_objectSpread({}, restInfo), {}, {
      noLanguageCode: true,
      useAlwaysAvailable: true,
      id: props.selectedLocations.join(','),
      limit: props.selectedLocations.length
    }), function (locations) {
      var mappedLocation = props.selectedLocations.map(function (locationId) {
        var location = locations.find(function (_ref2) {
          var id = _ref2.id;
          return id === parseInt(locationId, 10);
        });
        return {
          location: location
        };
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: mappedLocation
      });
    });
  }, [props.selectedLocations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _abortControllerRef$c;
    (_abortControllerRef$c = abortControllerRef.current) === null || _abortControllerRef$c === void 0 || _abortControllerRef$c.abort();
    abortControllerRef.current = new AbortController();
    Promise.all([loadPermissions(), loadVersions(abortControllerRef.current.signal)]).then(function (response) {
      var _response = _slicedToArray(response, 2),
        locationsWithPermissions = _response[0],
        locationsWithVersions = _response[1];
      if (!(locationsWithPermissions !== null && locationsWithPermissions !== void 0 && locationsWithPermissions.LocationList.locations.length) && !locationsWithVersions.length) {
        return;
      }
      var clonedSelectedLocation = (0,_common_helpers_deep_clone_helper__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedLocations);
      locationsWithPermissions.LocationList.locations.forEach(function (item) {
        var locationWithoutPermissions = clonedSelectedLocation.find(function (selectedItem) {
          return selectedItem.location.id === item.location.Location.id;
        });
        if (locationWithoutPermissions) {
          locationWithoutPermissions.permissions = item.permissions;
        }
      });
      locationsWithVersions.forEach(function (content) {
        var clonedLocation = clonedSelectedLocation.find(function (clonedItem) {
          return clonedItem.location.ContentInfo.Content._id === content._id;
        });
        if (clonedLocation) {
          clonedLocation.location.ContentInfo.Content.CurrentVersion.Version = content.CurrentVersion.Version;
        }
      });
      dispatchSelectedLocationsAction({
        type: 'REPLACE_SELECTED_LOCATIONS',
        locations: clonedSelectedLocation
      });
    });
    return function () {
      var _abortControllerRef$c2;
      (_abortControllerRef$c2 = abortControllerRef.current) === null || _abortControllerRef$c2 === void 0 || _abortControllerRef$c2.abort();
    };
  }, [selectedLocations]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.body.classList.add(CLASS_SCROLL_DISABLED);
    return function () {
      document.body.classList.remove(CLASS_SCROLL_DISABLED);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentView === 'grid') {
      if (loadedLocationsMap[loadedLocationsMap.length - 1]) {
        loadedLocationsMap[loadedLocationsMap.length - 1].subitems = [];
      }
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: loadedLocationsMap
      });
    } else if ((currentView === 'finder' || currentView === 'tree') && !!markedLocationId && markedLocationId !== loadedLocationsMap[loadedLocationsMap.length - 1].parentLocationId && loadedLocationsMap[loadedLocationsMap.length - 1].subitems.find(function (subitem) {
      return subitem.location.id === markedLocationId;
    })) {
      dispatchLoadedLocationsAction({
        type: 'UPDATE_LOCATIONS',
        data: {
          parentLocationId: markedLocationId,
          subitems: []
        }
      });
    }
  }, [currentView]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!props.startingLocationId || props.startingLocationId === _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_9__.SYSTEM_ROOT_LOCATION_ID || props.startingLocationId === props.rootLocationId) {
      return;
    }
    (0,_services_universal_discovery_service__WEBPACK_IMPORTED_MODULE_7__.loadAccordionData)(_objectSpread(_objectSpread({}, restInfo), {}, {
      parentLocationId: props.startingLocationId,
      sortClause: sorting,
      sortOrder: sortOrder,
      gridView: currentView === 'grid',
      rootLocationId: props.rootLocationId
    }), function (locationsMap) {
      dispatchLoadedLocationsAction({
        type: 'SET_LOCATIONS',
        data: locationsMap
      });
      setMarkedLocationId(props.startingLocationId);
      setIsFetchLocationHookBlocked(false);
    });
  }, [props.startingLocationId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var locationsMap = loadedLocationsMap.map(function (loadedLocation) {
      loadedLocation.subitems = [];
      return loadedLocation;
    });
    dispatchLoadedLocationsAction({
      type: 'SET_LOCATIONS',
      data: locationsMap
    });
  }, [sorting, sortOrder]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (currentView === 'grid') {
      setGridActiveLocationId(markedLocationId !== null && markedLocationId !== void 0 ? markedLocationId : defaultMarkedLocationId);
    }
  }, [currentView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UDWContext.Provider, {
    value: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestInfoContext.Provider, {
    value: restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockFetchLocationHookContext.Provider, {
    value: [isFetchLocationHookBlocked, setIsFetchLocationHookBlocked]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowRedirectsContext.Provider, {
    value: props.allowRedirects
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowConfirmationContext.Provider, {
    value: props.allowConfirmation
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesInfoMapContext.Provider, {
    value: contentTypesInfoMap
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentTypesMapContext.Provider, {
    value: contentTypesMapGlobal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MultipleConfigContext.Provider, {
    value: [props.multiple, props.multipleItemsLimit]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContainersOnlyContext.Provider, {
    value: props.containersOnly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AllowedContentTypesContext.Provider, {
    value: props.allowedContentTypes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SnackbarActionsContext.Provider, {
    value: props.snackbarEnabledActions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActiveTabContext.Provider, {
    value: [activeTab, setActiveTab, previousActiveTab, props.activeTab]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsContext.Provider, {
    value: tabs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TabsConfigContext.Provider, {
    value: props.tabsConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TitleContext.Provider, {
    value: props.title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CancelContext.Provider, {
    value: props.onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConfirmContext.Provider, {
    value: onConfirm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortingContext.Provider, {
    value: [sorting, setSorting]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SortOrderContext.Provider, {
    value: [sortOrder, setSortOrder]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CurrentViewContext.Provider, {
    value: [currentView, setCurrentView]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MarkedLocationIdContext.Provider, {
    value: [markedLocationId, setMarkedLocationId]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StartingLocationIdContext.Provider, {
    value: props.startingLocationId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GridActiveLocationIdContext.Provider, {
    value: [gridActiveLocationId, setGridActiveLocationId]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoadedLocationsMapContext.Provider, {
    value: [loadedLocationsMap, dispatchLoadedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RootLocationIdContext.Provider, {
    value: props.rootLocationId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SelectedLocationsContext.Provider, {
    value: [selectedLocations, dispatchSelectedLocationsAction]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CreateContentWidgetContext.Provider, {
    value: [createContentVisible, setCreateContentVisible]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SuggestionsStorageContext.Provider, {
    value: [suggestionsStorage, setSuggestionsStorage]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentOnTheFlyDataContext.Provider, {
    value: [contentOnTheFlyData, setContentOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContentOnTheFlyConfigContext.Provider, {
    value: props.contentOnTheFly
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditOnTheFlyDataContext.Provider, {
    value: [editOnTheFlyData, setEditOnTheFlyData]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchTextContext.Provider, {
    value: [searchText, setSearchText]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DropdownPortalRefContext.Provider, {
    value: dropdownPortalRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Tab, null)))))))))))))))))))))))))))))))))));
  /* eslint-enable max-len */
};
UniversalDiscoveryModule.propTypes = {
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  rootLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  startingLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  multiple: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multipleItemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  containersOnly: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  allowedContentTypes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  activeSortClause: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  activeSortOrder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  activeView: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  contentOnTheFly: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    allowedLanguages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    allowedLocations: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    preselectedLocation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    preselectedContentType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
    autoConfirmAfterPublish: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
  }).isRequired,
  tabsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    priority: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
  })).isRequired,
  selectedLocations: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  allowRedirects: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  allowConfirmation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    token: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    siteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    accsessToken: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    instanceUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  snackbarEnabledActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
UniversalDiscoveryModule.defaultProps = {
  onCancel: null,
  activeTab: 'browse',
  rootLocationId: 1,
  startingLocationId: null,
  multiple: false,
  multipleItemsLimit: 1,
  containersOnly: false,
  activeSortClause: 'date',
  activeSortOrder: 'ascending',
  activeView: 'finder',
  selectedLocations: [],
  restInfo: defaultRestInfo,
  snackbarEnabledActions: Object.values(SNACKBAR_ACTIONS)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UniversalDiscoveryModule);

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
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/browse.tab.module.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/bookmarks.tab.module.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/search.tab.module.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.create.tab.module.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/universal-discovery/content.edit.tab.module.js"));
/******/ }
]);