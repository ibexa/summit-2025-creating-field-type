(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-parts-javascript-js"],{

/***/ "./public/bundles/ibexaadminuiassets/vendors/react-dom/client.js":
/*!***********************************************************************!*\
  !*** ./public/bundles/ibexaadminuiassets/vendors/react-dom/client.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function (c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function (c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/browser.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/tooltips.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




var ICON_NAME_MAP = {
  info: 'about',
  error: 'notice',
  warning: 'warning',
  success: 'approved'
};
var SIZES = ['small', 'medium', 'large'];
var Alert = function Alert(_ref) {
  var type = _ref.type,
    title = _ref.title,
    subtitle = _ref.subtitle,
    size = _ref.size,
    iconNameProp = _ref.iconName,
    iconPath = _ref.iconPath,
    showSubtitleBelow = _ref.showSubtitleBelow,
    showCloseBtn = _ref.showCloseBtn,
    onClose = _ref.onClose,
    extraClasses = _ref.extraClasses,
    children = _ref.children;
  var className = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty(_defineProperty(_defineProperty({
    'alert ibexa-alert': true
  }, "ibexa-alert--".concat(type), true), "ibexa-alert--".concat(size), true), extraClasses, true));
  var contentClassName = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'ibexa-alert__content': true,
    'ibexa-alert__content--subtitle-below': showSubtitleBelow
  });
  var iconName = undefined;
  if (!iconPath) {
    iconName = iconNameProp ? iconNameProp : ICON_NAME_MAP[type];
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: iconName,
    customPath: iconPath,
    extraClasses: "ibexa-icon--small ibexa-alert__icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: contentClassName
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-alert__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-alert__subtitle"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-alert__extra_content"
  }, children)), showCloseBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--no-text ibexa-alert__close-btn",
    type: "button",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon--tiny"
  })));
};
Alert.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.values(ICON_NAME_MAP)).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  iconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  iconPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  showSubtitleBelow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  showCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(SIZES)
};
Alert.defaultProps = {
  title: null,
  subtitle: null,
  iconName: null,
  iconPath: null,
  showSubtitleBelow: false,
  showCloseBtn: false,
  onClose: function onClose() {},
  extraClasses: '',
  children: null,
  size: 'medium'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/input/filter.search.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/input/filter.search.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var Search = function Search(_ref) {
  var onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    extraClasses = _ref.extraClasses,
    value = _ref.value;
  var Translator = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_3__.getTranslator)();
  var inputPlaceholder = placeholder || Translator.trans(/*@Desc("Search...")*/'search.placeholder', {}, 'ibexa_universal_discovery_widget');
  var searchClassName = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'form-control': true,
    'ibexa-input': true,
    'ibexa-input--text': true
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "filter",
    placeholder: inputPlaceholder,
    value: value,
    onChange: onChange,
    className: searchClassName
  });
};
Search.propTypes = {
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
Search.defaultProps = {
  placeholder: '',
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
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




var SimpleDropdown = function SimpleDropdown(_ref) {
  var options = _ref.options,
    selectedOption = _ref.selectedOption,
    extraClasses = _ref.extraClasses,
    onOptionClick = _ref.onOptionClick,
    isDisabled = _ref.isDisabled,
    selectedItemLabel = _ref.selectedItemLabel,
    isSwitcher = _ref.isSwitcher;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var dropdownClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-simple-dropdown': true,
    'c-simple-dropdown--expanded': isExpanded,
    'c-simple-dropdown--disabled': isDisabled,
    'c-simple-dropdown--switcher': isSwitcher
  }, extraClasses, true));
  var dropdownItemsClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-simple-dropdown__items': true,
    'c-simple-dropdown__items--hidden': !isExpanded
  });
  var toggleExpanded = function toggleExpanded() {
    if (isDisabled) {
      return;
    }
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  };
  var onOptionClickWrapper = function onOptionClickWrapper(option) {
    onOptionClick(option);
    setIsExpanded(false);
  };
  var renderItem = function renderItem(item) {
    var _item$label;
    var isItemSelected = item.value === (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value);
    var itemClass = (0,_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'c-simple-dropdown__list-item': true,
      'c-simple-dropdown__list-item--selected': isItemSelected
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: item.value,
      className: itemClass,
      onClick: function onClick() {
        return onOptionClickWrapper(item);
      }
    }, item.iconName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: item.iconName,
      extraClasses: "c-simple-dropdown__list-item-type-icon ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.getLabel()), isItemSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-simple-dropdown__list-item-checkmark"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "checkmark",
      extraClasses: "c-simple-dropdown__list-item-checkmark-icon ibexa-icon--tiny-small"
    })));
  };
  var renderCaretIcon = function renderCaretIcon() {
    var iconName = isExpanded ? 'caret-up' : 'caret-down';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: "ibexa-icon--tiny-small c-simple-dropdown__expand-icon"
    });
  };
  var renderSelectedLabel = function renderSelectedLabel() {
    var _selectedOption$label;
    if (!selectedOption && !!selectedItemLabel) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-simple-dropdown__selected-item-label"
    }, selectedItemLabel.length ? selectedItemLabel : (_selectedOption$label = selectedOption.label) !== null && _selectedOption$label !== void 0 ? _selectedOption$label : selectedOption.getLabel());
  };
  var renderSelectedIcon = function renderSelectedIcon() {
    if (!selectedOption || !selectedOption.iconName) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: selectedOption.iconName,
      extraClasses: "ibexa-icon--small c-simple-dropdown__selected-item-type-icon"
    });
  };
  var renderSelectedItem = function renderSelectedItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "c-simple-dropdown__selected",
      type: "button",
      onClick: toggleExpanded
    }, renderSelectedIcon(), renderSelectedLabel(), renderCaretIcon());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpanded) {
      return;
    }
    var onInteractionOutside = function onInteractionOutside(event) {
      if (containerRef.current.contains(event.target)) {
        return;
      }
      setIsExpanded(false);
    };
    document.body.addEventListener('click', onInteractionOutside, false);
    return function () {
      document.body.removeEventListener('click', onInteractionOutside, false);
    };
  }, [isExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: dropdownClass,
    ref: containerRef
  }, renderSelectedItem(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: dropdownItemsClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-simple-dropdown__list-items"
  }, options.map(renderItem))));
};
SimpleDropdown.propTypes = {
  options: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  selectedOption: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onOptionClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectedItemLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isSwitcher: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
SimpleDropdown.defaultProps = {
  isDisabled: false,
  extraClasses: '',
  selectedItemLabel: '',
  isSwitcher: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleDropdown);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/spinner/spinner.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js ***!
  \*********************************************************************************************/
/***/ (() => {

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
(function (global, doc, ibexa, Translator) {
  ibexa.EzLandingPageValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid) {
    "use strict";

    function EzLandingPageValidator(config) {
      var _this;
      _classCallCheck(this, EzLandingPageValidator);
      _this = _callSuper(this, EzLandingPageValidator, [config]);
      _this.pageBuilder = config.pageBuilder;
      return _this;
    }

    /**
     * Validates the input field value
     *
     * @method validateInput
     * @returns {Object}
     * @memberof EzLandingPageValidator
     */
    _inherits(EzLandingPageValidator, _ibexa$BaseFieldValid);
    return _createClass(EzLandingPageValidator, [{
      key: "validateInput",
      value: function validateInput() {
        var isValid = this.pageBuilder.validateAllBlocksData();
        var errorMessage = Translator.trans(/*@Desc("Some blocks are missing configuration")*/'fieldtype.landing_page.missing_proper_configuration.error.message', {}, 'ibexa_page_builder');
        return {
          isError: !isValid,
          errorMessage: errorMessage
        };
      }
    }]);
  }(ibexa.BaseFieldValidator);
  ibexa.EzLandingPageLayoutValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid2) {
    "use strict";

    function EzLandingPageLayoutValidator(config) {
      var _this2;
      _classCallCheck(this, EzLandingPageLayoutValidator);
      _this2 = _callSuper(this, EzLandingPageLayoutValidator, [config]);
      _this2.pageBuilder = config.pageBuilder;
      return _this2;
    }
    _inherits(EzLandingPageLayoutValidator, _ibexa$BaseFieldValid2);
    return _createClass(EzLandingPageLayoutValidator, [{
      key: "validateLayout",
      value: function validateLayout() {
        var isValidLayout = this.pageBuilder.validateLayoutData();
        var errorMessage = Translator.trans(/*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'layout_selector.error.label', {}, 'ibexa_page_builder');
        return {
          isError: !isValidLayout,
          errorMessage: errorMessage
        };
      }
    }]);
  }(ibexa.BaseFieldValidator);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js":
/*!*****************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js ***!
  \*****************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
(function (global, doc, ibexa) {
  global.ibexa = global.ibexa || {
    modules: {}
  };
  var CLASS_PREVIEW_ACTION_SELECTED = 'ibexa-btn--selected';
  var CLASS_DROPDOWN_EXPANDED = 'ibexa-dropdown--expanded';
  var CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_WITH_BACKDROP = 'ibexa-with-backdrop';
  var CLASS_DROPDOWN_SWITCHER = 'ibexa-dropdown__switcher';
  var SELECTOR_DROPDOWN = '.ibexa-dropdown';
  var SELECTOR_ICON_CHECKBOX = '.ibexa-checkbox-icon__checkbox';
  var SELECTOR_EXTRA_ACTIONS_EDIT = '.ibexa-extra-actions--page-edit';
  var SELECTOR_EXTRA_ACTIONS_CREATE = '.ibexa-extra-actions--page-create';
  var SELECTOR_EXTRA_ACTIONS_WRAPPER = '.ibexa-page-info-bar__create-content-wrapper';
  var SELECTOR_STANDARD_ACTIONS_WRAPPER = '.ibexa-page-info-bar__actions';
  var PREVIEW_WIDTH_MAP = {
    desktop: '100%',
    tablet: '1280px',
    mobile: '800px'
  };
  global.ibexa.modules.InfoBar = /*#__PURE__*/function () {
    "use strict";

    function InfoBar() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$containerSelecto = _ref.containerSelector,
        containerSelector = _ref$containerSelecto === void 0 ? '.ibexa-pb-infobar' : _ref$containerSelecto,
        _ref$isCreateMode = _ref.isCreateMode,
        isCreateMode = _ref$isCreateMode === void 0 ? false : _ref$isCreateMode;
      _classCallCheck(this, InfoBar);
      this.container = doc.querySelector(containerSelector);
      this.isCreateMode = isCreateMode;
      this.subMenuBackdrop = new ibexa.core.Backdrop();
      this.contentActionSwitcher = this.container.querySelector('.ibexa-pb-action-bar__content-action-switcher');
      this.contentModeSwitcher = this.container.querySelector('.ibexa-pb-action-bar__content-mode-switcher');
      this.previewSwitcher = this.container.querySelector('.ibexa-preview-switcher');
      this.createContentBtnWrapper = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_WRAPPER);
      this.standardActionsWrapper = this.container.querySelector(SELECTOR_STANDARD_ACTIONS_WRAPPER);
      this.editActionsWrapper = this.standardActionsWrapper ? this.standardActionsWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_EDIT) : null;
      this.contentUrl = this.container.querySelector('.ibexa-pb-content-action-info__url');
      this.contentLanguage = this.container.querySelector('.ibexa-pb-content-action-info__language-name');
      this.contentAuthor = this.container.querySelector('.ibexa-content-details__author');
      this.contentModificationDate = this.container.querySelector('.ibexa-content-details__modified-date');
      if (this.previewSwitcher) {
        this.previewActions = _toConsumableArray(this.previewSwitcher.querySelectorAll('.ibexa-preview-switcher__action'));
      }
      if (this.createContentBtnWrapper) {
        this.dropdownSwitcher = this.createContentBtnWrapper.querySelector('.ibexa-dropdown__switcher');
        this.createContentBtn = this.createContentBtnWrapper.querySelector('.ibexa-pb-action-bar__create-content');
      }
      this.redirectToAction = this.redirectToAction.bind(this);
      this.showVersionLanguagePicker = this.showVersionLanguagePicker.bind(this);
      this.hideVersionLanguagePicker = this.hideVersionLanguagePicker.bind(this);
      this.toggleContentMode = this.toggleContentMode.bind(this);
      this.changePreviewMode = this.changePreviewMode.bind(this);
      this.showPreviewExtraActions = this.showPreviewExtraActions.bind(this);
      this.hidePreviewExtraActions = this.hidePreviewExtraActions.bind(this);
      this.toggleEditExtraActions = this.toggleEditExtraActions.bind(this);
      this.showEditExtraActions = this.showEditExtraActions.bind(this);
      this.hideEditExtraActions = this.hideEditExtraActions.bind(this);
      this.removeSubMenuBackdrop = this.removeSubMenuBackdrop.bind(this);
      this.onDraftConflictModalCancel = this.onDraftConflictModalCancel.bind(this);
      this.onVersionLanguagePickerBackdropClick = this.onVersionLanguagePickerBackdropClick.bind(this);
      this.attachEventListeners();
    }
    return _createClass(InfoBar, [{
      key: "attachEventListeners",
      value: function attachEventListeners() {
        var _this = this;
        if (!this.isCreateMode && this.contentActionSwitcher) {
          this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.redirectToAction, false);
        }
        if (this.contentModeSwitcher) {
          this.contentModeSwitcher.querySelector(SELECTOR_ICON_CHECKBOX).addEventListener('change', this.toggleContentMode, false);
        }
        if (this.previewActions) {
          this.previewActions.forEach(function (action) {
            return action.addEventListener('click', _this.changePreviewMode, false);
          });
        }
        if (this.dropdownSwitcher) {
          this.dropdownSwitcher.addEventListener('click', this.toggleEditExtraActions, false);
        }
        if (this.createContentBtn) {
          this.createContentBtn.addEventListener('click', this.showPreviewExtraActions, false);
          var extraActions = this.container.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
          if (extraActions) {
            this.attachSubmitEvent(extraActions);
          }
        }
        doc.body.addEventListener('ibexa-draft-conflict-modal-hidden', this.onDraftConflictModalCancel, false);
      }
    }, {
      key: "attachSubmitEvent",
      value: function attachSubmitEvent(actions) {
        var form = actions.querySelector('form');
        var radioBtns = _toConsumableArray(actions.querySelectorAll('.form-check [type="radio"]'));
        radioBtns.forEach(function (btn) {
          return btn.addEventListener('change', function () {
            form.submit();
          }, false);
        });
      }
    }, {
      key: "redirectToAction",
      value: function redirectToAction(event) {
        var dataset = event.currentTarget.dataset;
        if (this.contentActionSwitcher.classList.contains('disabled')) {
          return;
        }
        this.toggleSwitcherState(this.contentActionSwitcher);
        if (!dataset.urlPreview) {
          this.showVersionLanguagePicker();
        } else {
          global.location.href = dataset.urlPreview;
        }
      }
    }, {
      key: "addSubMenuBackdrop",
      value: function addSubMenuBackdrop(eventHandler) {
        if (this.subMenuBackdrop) {
          return;
        }
        this.subMenuBackdrop.addEventListener('click', eventHandler, false);
        this.subMenuBackdrop.show();
      }
    }, {
      key: "removeSubMenuBackdrop",
      value: function removeSubMenuBackdrop(eventHandler) {
        if (!this.subMenuBackdrop) {
          return;
        }
        this.subMenuBackdrop.hide();
        this.subMenuBackdrop.removeEventListener('click', eventHandler);
      }
    }, {
      key: "toggleContentMode",
      value: function toggleContentMode() {
        this.toggleSwitcherState(this.contentModeSwitcher);
        ibexa.helpers.tooltips.hideAll();
      }
    }, {
      key: "toggleSwitcherState",
      value: function toggleSwitcherState(switcher) {
        switcher.classList.toggle('is-checked');
      }
    }, {
      key: "toggleEditActions",
      value: function toggleEditActions(show) {
        this.editActionsWrapper.classList.toggle(CLASS_WITH_BACKDROP, show);
        this.editActionsWrapper.classList.toggle(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN, !show);
      }
    }, {
      key: "changePreviewMode",
      value: function changePreviewMode(event) {
        this.previewActions.forEach(function (action) {
          return action.classList.remove(CLASS_PREVIEW_ACTION_SELECTED);
        });
        event.currentTarget.classList.add(CLASS_PREVIEW_ACTION_SELECTED);
        var type = event.currentTarget.dataset.previewMode;
        doc.querySelector('#page-builder-preview').style = "width: ".concat(PREVIEW_WIDTH_MAP[type], ";");
        ibexa.helpers.tooltips.hideAll();
      }
    }, {
      key: "onDraftConflictModalCancel",
      value: function onDraftConflictModalCancel() {
        this.hideVersionLanguagePicker();
      }
    }, {
      key: "showVersionLanguagePicker",
      value: function showVersionLanguagePicker() {
        if (this.editActionsWrapper.classList.contains('ibexa-extra-actions--prevent-show')) {
          var languageRadioOption = this.editActionsWrapper.querySelector('[type="radio"]');
          languageRadioOption.checked = true;
          languageRadioOption.dispatchEvent(new CustomEvent('change'));
          return;
        }
        this.toggleEditActions(true);
        this.addSubMenuBackdrop(this.onVersionLanguagePickerBackdropClick);
      }
    }, {
      key: "onVersionLanguagePickerBackdropClick",
      value: function onVersionLanguagePickerBackdropClick(_ref2) {
        var target = _ref2.target;
        var wrapper = target.closest(SELECTOR_STANDARD_ACTIONS_WRAPPER);
        if (wrapper) {
          return;
        }
        this.hideVersionLanguagePicker();
      }
    }, {
      key: "hideVersionLanguagePicker",
      value: function hideVersionLanguagePicker() {
        var switcher = this.contentActionSwitcher.querySelector(SELECTOR_ICON_CHECKBOX);
        this.toggleEditActions(false);
        switcher.checked = false;
        this.toggleSwitcherState(this.contentActionSwitcher);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "showPreviewExtraActions",
      value: function showPreviewExtraActions() {
        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.remove(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "hidePreviewExtraActions",
      value: function hidePreviewExtraActions(_ref3) {
        var target = _ref3.target;
        var wrapper = target.closest(SELECTOR_EXTRA_ACTIONS_WRAPPER);
        if (wrapper) {
          return;
        }
        var actions = this.createContentBtnWrapper.querySelector(SELECTOR_EXTRA_ACTIONS_CREATE);
        actions.classList.add(CLASS_PREVIEW_EXTRA_ACTIONS_HIDDEN);
        actions.classList.remove(CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hidePreviewExtraActions);
      }
    }, {
      key: "toggleEditExtraActions",
      value: function toggleEditExtraActions(event) {
        var isExpanded = event.target.classList.contains(CLASS_DROPDOWN_EXPANDED) || event.target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));
        if (isExpanded) {
          this.hideEditExtraActions(event);
        } else {
          this.showEditExtraActions();
        }
      }
    }, {
      key: "showEditExtraActions",
      value: function showEditExtraActions() {
        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.add(CLASS_DROPDOWN_EXPANDED);
        dropdown.classList.add(CLASS_WITH_BACKDROP);
        this.addSubMenuBackdrop(this.hideEditExtraActions);
      }
    }, {
      key: "hideEditExtraActions",
      value: function hideEditExtraActions(_ref4) {
        var target = _ref4.target;
        var isDropdown = target.classList.contains(CLASS_DROPDOWN_EXPANDED) || target.closest(".".concat(CLASS_DROPDOWN_EXPANDED));
        var isDropdownSwitcher = target.classList.contains(CLASS_DROPDOWN_SWITCHER);
        if (isDropdown && !isDropdownSwitcher) {
          return;
        }
        var dropdown = this.createContentBtnWrapper.querySelector(SELECTOR_DROPDOWN);
        dropdown.classList.remove(CLASS_DROPDOWN_EXPANDED, CLASS_WITH_BACKDROP);
        this.removeSubMenuBackdrop(this.hideEditExtraActions);
      }
    }]);
  }();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js ***!
  \*******************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc) {
  var CONFIG_PANEL_SIDE_LEFT = 'LEFT';
  var CONFIG_PANEL_SIDE_RIGHT = 'RIGHT';
  var openedConfigPanelSettings = _defineProperty(_defineProperty({}, CONFIG_PANEL_SIDE_LEFT, null), CONFIG_PANEL_SIDE_RIGHT, null);
  var getSide = function getSide(event) {
    var _event$detail$side$to, _event$detail;
    return (_event$detail$side$to = (_event$detail = event.detail) === null || _event$detail === void 0 || (_event$detail = _event$detail.side) === null || _event$detail === void 0 ? void 0 : _event$detail.toUpperCase()) !== null && _event$detail$side$to !== void 0 ? _event$detail$side$to : CONFIG_PANEL_SIDE_LEFT;
  };
  var closeConfigPanel = function closeConfigPanel(side) {
    if (openedConfigPanelSettings[side]) {
      var wasConfigPanelClosed = openedConfigPanelSettings[side].onClose();
      if (wasConfigPanelClosed) {
        openedConfigPanelSettings[side] = null;
      }
      return wasConfigPanelClosed;
    }
    return true;
  };
  var openConfigPanel = function openConfigPanel(configPanelSettings, side) {
    var wasPrevConfigPanelClosed = closeConfigPanel(side);
    if (wasPrevConfigPanelClosed) {
      var _configPanelSettings$, _configPanelSettings$2;
      var wasNewConfigPanelOpened = (_configPanelSettings$ = configPanelSettings === null || configPanelSettings === void 0 || (_configPanelSettings$2 = configPanelSettings.onOpen) === null || _configPanelSettings$2 === void 0 ? void 0 : _configPanelSettings$2.call(configPanelSettings)) !== null && _configPanelSettings$ !== void 0 ? _configPanelSettings$ : true;
      if (wasNewConfigPanelOpened) {
        openedConfigPanelSettings[side] = configPanelSettings;
      }
    } else {
      var _configPanelSettings$3;
      configPanelSettings === null || configPanelSettings === void 0 || (_configPanelSettings$3 = configPanelSettings.onAbort) === null || _configPanelSettings$3 === void 0 || _configPanelSettings$3.call(configPanelSettings);
    }
    return wasPrevConfigPanelClosed;
  };
  var handleConfigPanelClose = function handleConfigPanelClose(event) {
    var side = getSide(event);
    var configPanelsClosed = closeConfigPanel(side);
    if (!configPanelsClosed) {
      event.preventDefault();
    }
  };
  var handleConfigPanelCloseItself = function handleConfigPanelCloseItself(event) {
    var side = getSide(event);
    openedConfigPanelSettings[side] = null;
  };
  var handleConfigPanelOpen = function handleConfigPanelOpen(event) {
    var _event$detail2;
    var side = getSide(event);
    var configPanelSettings = (_event$detail2 = event.detail) === null || _event$detail2 === void 0 ? void 0 : _event$detail2.settings;
    var configPanelsOpened = openConfigPanel(configPanelSettings, side);
    if (!configPanelsOpened) {
      event.preventDefault();
    }
  };
  doc.addEventListener('ibexa-pb-config-panel-open', handleConfigPanelOpen, false);
  doc.addEventListener('ibexa-pb-config-panel-close', handleConfigPanelClose, false);
  doc.addEventListener('ibexa-pb-config-panel-close-itself', handleConfigPanelCloseItself, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js ***!
  \******************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var EXCLUDED_VALIDATOR_NAMES = ['EzLandingPageValidator', 'EzLandingPageLayoutValidator'];
  var CLOSE_CONFIG_PANEL_KEY = 'Escape';
  var CONFIG_PANEL_FOOTER_WITH_SCROLL = 'ibexa-pb-config-panel__footer--slim';
  var fieldsConfigPanel = doc.querySelector('.ibexa-pb-fields-config-panel');
  var fieldsConfigPanelTogglerBtn = doc.querySelector('.ibexa-pb-action-bar__action-btn--show-fields');
  var configPanelCloseBtn = doc.querySelector('.ibexa-pb-config-panel__footer-close');
  var configPanelFooter = doc.querySelector('.ibexa-pb-config-panel__footer');
  var configPanelBody = doc.querySelector('.ibexa-pb-config-panel__body');
  var isFieldsConfigPanelOpenedAtStartup = fieldsConfigPanelTogglerBtn.classList.contains('ibexa-btn--selected');
  var backdrop = new window.ibexa.core.Backdrop({
    extraClasses: ['ibexa-pb-config-panel__backdrop']
  });
  var LEFT_CONFIG_PANEL_WIDTH_KEY_NAME = 'ibexa-pb-config-panel-width-left';
  var DEFAULT_CONFIG_PANEL_MIN_WIDTH = 830;
  var DEFAULT_CONFIG_PANEL_MAX_WIDTH = 1920;
  var localStoragePanelWidth = window.localStorage.getItem(LEFT_CONFIG_PANEL_WIDTH_KEY_NAME);
  var configPanelLocalWidth = localStoragePanelWidth ? Number(localStoragePanelWidth) : DEFAULT_CONFIG_PANEL_MIN_WIDTH;
  var configPanelWidth = configPanelLocalWidth;
  var resizer = fieldsConfigPanel.querySelector('.ibexa-pb-config-panel__resizer');
  var clientXWhenStartDraging = {
    clientX: null,
    resizing: false
  };
  var startResizing = function startResizing(_ref) {
    var clientX = _ref.clientX;
    clientXWhenStartDraging.clientX = clientX;
    clientXWhenStartDraging.resizing = true;
  };
  var stopResizing = function stopResizing() {
    clientXWhenStartDraging.resizing = false;
  };
  var resize = function resize(_ref2) {
    var clientX = _ref2.clientX;
    if (!clientXWhenStartDraging.resizing) {
      return;
    }
    var newConfigPanelWidth = configPanelWidth - (clientXWhenStartDraging.clientX - clientX);
    var maxConfigPanelWidth = Math.min(window.screen.width, DEFAULT_CONFIG_PANEL_MAX_WIDTH);
    var minMaxConfigPanelWidth = Math.min(Math.max(newConfigPanelWidth, DEFAULT_CONFIG_PANEL_MIN_WIDTH), maxConfigPanelWidth);
    window.localStorage.setItem(LEFT_CONFIG_PANEL_WIDTH_KEY_NAME, minMaxConfigPanelWidth);
    fieldsConfigPanel.style.width = "".concat(minMaxConfigPanelWidth, "px");
  };
  var toggleFooterScrollClass = function toggleFooterScrollClass(isScroll) {
    configPanelFooter.classList.toggle(CONFIG_PANEL_FOOTER_WITH_SCROLL, isScroll);
  };
  var fitFooter = function fitFooter() {
    var hasVerticalScrollbar = configPanelBody.scrollHeight > configPanelBody.clientHeight;
    toggleFooterScrollClass(hasVerticalScrollbar);
  };
  var openConfigPanel = function openConfigPanel() {
    fieldsConfigPanel.classList.toggle('ibexa-pb-config-panel--closed');
    fieldsConfigPanel.style.width = "".concat(configPanelLocalWidth, "px");
    fieldsConfigPanelTogglerBtn.classList.toggle('ibexa-btn--selected');
    fieldsConfigPanelTogglerBtn.style.zIndex = 656;
    backdrop.show();
    fitFooter();
    resizer.addEventListener('mousedown', startResizing, false);
    doc.addEventListener('mousemove', resize, false);
    doc.addEventListener('mouseup', stopResizing, false);
    doc.addEventListener('click', closeConfigPanelByClickOutside, false);
    doc.addEventListener('keyup', closeConfigPanelByKeyboard, false);
    configPanelCloseBtn.addEventListener('click', _closeConfigPanel, false);
    window.addEventListener('resize', fitFooter, false);
    return true;
  };
  var _closeConfigPanel = function closeConfigPanel() {
    fieldsConfigPanel.classList.add('ibexa-pb-config-panel--closed');
    fieldsConfigPanelTogglerBtn.classList.remove('ibexa-btn--selected');
    fieldsConfigPanelTogglerBtn.style.zIndex = 0;
    backdrop.remove();
    resizer.removeEventListener('mousedown', startResizing, false);
    doc.removeEventListener('mousemove', resize, false);
    doc.removeEventListener('mouseup', stopResizing, false);
    doc.removeEventListener('click', closeConfigPanelByClickOutside);
    doc.removeEventListener('keyup', closeConfigPanelByKeyboard);
    configPanelCloseBtn.removeEventListener('click', _closeConfigPanel, false);
    window.removeEventListener('resize', fitFooter, false);
    return true;
  };
  var toggleFieldsConfigPanel = function toggleFieldsConfigPanel() {
    var isConfigPanelClosed = fieldsConfigPanel.classList.contains('ibexa-pb-config-panel--closed');
    if (isConfigPanelClosed) {
      var wasConfigPanelOpened = doc.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
        cancelable: true,
        detail: {
          settings: {
            onOpen: openConfigPanel,
            onClose: _closeConfigPanel
          }
        }
      }));
      if (wasConfigPanelOpened) {
        ibexa.helpers.tooltips.hideAll();
      }
    } else {
      doc.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
      _closeConfigPanel();
    }
  };
  var closeConfigPanelByClickOutside = function closeConfigPanelByClickOutside(event) {
    return event.target.classList.contains('ibexa-backdrop') && _closeConfigPanel();
  };
  var closeConfigPanelByKeyboard = function closeConfigPanelByKeyboard(event) {
    return event.key === CLOSE_CONFIG_PANEL_KEY && _closeConfigPanel();
  };
  fieldsConfigPanelTogglerBtn.addEventListener('click', toggleFieldsConfigPanel, false);
  fieldsConfigPanel.style.width = "".concat(configPanelWidth, "px");
  if (isFieldsConfigPanelOpenedAtStartup) {
    doc.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
      cancelable: true,
      detail: {
        settings: {
          onOpen: function onOpen() {},
          onClose: _closeConfigPanel,
          onAbort: _closeConfigPanel
        }
      }
    }));
  }
  doc.body.addEventListener('ibexa-form-builder:before-open', function () {
    fieldsConfigPanel.classList.add('ibexa-pb-fields-config-panel--full-screen-field-opened');
  }, false);
  doc.body.addEventListener('ibexa-form-builder:before-close', function () {
    fieldsConfigPanel.classList.remove('ibexa-pb-fields-config-panel--full-screen-field-opened');
  }, false);
  doc.body.addEventListener('ibexa-pb:validation:other-field-types', function (event) {
    var isValid = event.detail.isValid;
    fieldsConfigPanelTogglerBtn.classList.toggle('ibexa-btn--error', !isValid);
  }, false);
  doc.body.addEventListener('ibexa-inputs-validation:change-state', function () {
    var isFormValid = true;
    ibexa.fieldTypeValidators.forEach(function (validator) {
      var validatorName = validator.constructor.name;
      var isValidatorExcluded = EXCLUDED_VALIDATOR_NAMES.includes(validatorName);
      if (!isValidatorExcluded) {
        var fieldsToValidate = validator.fieldsToValidate,
          fieldSelector = validator.fieldSelector;
        fieldsToValidate.forEach(function (fieldToValidate) {
          var fieldContainer = validator.getFieldTypeContainer(fieldToValidate.item.closest(fieldSelector));
          var hasContainerErrorClass = fieldContainer.classList.contains('is-invalid');
          var hasInvalidNodes = !!fieldContainer.querySelectorAll('.is-invalid').length;
          if (hasContainerErrorClass || hasInvalidNodes) {
            isFormValid = false;
          }
        });
      }
    });
    fieldsConfigPanelTogglerBtn.classList.toggle('ibexa-btn--error', !isFormValid);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.publish.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.publish.js ***!
  \******************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator) {
  var VALIDATOR_NAME_PAGE = 'EzLandingPageValidator';
  var VALIDATOR_NAME_PAGE_LAYOUT = 'EzLandingPageLayoutValidator';
  var form = doc.querySelector('.ibexa-form-validate');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
  var menuBtnsToValidate = doc.querySelectorAll('button[data-validate]');
  var validateForm = function validateForm(event) {
    var btn = event.currentTarget;
    var isFormError = !parseInt(btn.dataset.isFormValid, 10);
    if (!isFormError) {
      doc.body.dispatchEvent(new CustomEvent('ibexa-pb:validation:other-field-types', {
        detail: {
          isValid: true
        }
      }));
      doc.body.dispatchEvent(new CustomEvent('ibexa-pb:validation:layout', {
        detail: {
          isValid: true
        }
      }));
      return;
    }
    var validatorsWithErrors = btn.dataset.validatorsWithErrors.split(',');
    var isPageLayoutError = validatorsWithErrors.includes(VALIDATOR_NAME_PAGE_LAYOUT);
    var isPageFieldTypeError = validatorsWithErrors.includes(VALIDATOR_NAME_PAGE);
    var otherInvalidFieldTypes = _toConsumableArray(validatorsWithErrors);
    var pageFieldTypeIndex = otherInvalidFieldTypes.indexOf(VALIDATOR_NAME_PAGE);
    if (pageFieldTypeIndex > -1) {
      otherInvalidFieldTypes.splice(pageFieldTypeIndex, 1);
    }
    var pageLayoutTypeIndex = otherInvalidFieldTypes.indexOf(VALIDATOR_NAME_PAGE_LAYOUT);
    if (pageLayoutTypeIndex > -1) {
      otherInvalidFieldTypes.splice(pageLayoutTypeIndex, 1);
    }
    var otherFieldTypesInvalid = !!otherInvalidFieldTypes.length;
    if (otherFieldTypesInvalid) {
      var pageFieldTypeErrorMessage = Translator.trans(/*@Desc("Fields error")*/'infobar.form.error.message', {}, 'ibexa_page_builder_infobar');
      ibexa.pb.notification.addNotification({
        message: pageFieldTypeErrorMessage,
        type: ibexa.pb.notification.type.ERROR
      });
    }
    if (isPageLayoutError) {
      var pageLayoutErrorMessage = Translator.trans(/*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'infobar.page.layout.error.label', {}, 'ibexa_page_builder_infobar');
      ibexa.pb.notification.addNotification({
        message: pageLayoutErrorMessage,
        type: ibexa.pb.notification.type.ERROR
      });
    }
    if (isPageFieldTypeError) {
      var _pageFieldTypeErrorMessage = Translator.trans(/*@Desc("Update missing configuration in the Block view")*/'infobar.page.field.type.error.message', {}, 'ibexa_page_builder_infobar');
      ibexa.pb.notification.addNotification({
        message: _pageFieldTypeErrorMessage,
        type: ibexa.pb.notification.type.ERROR
      });
    }
    doc.body.dispatchEvent(new CustomEvent('ibexa-pb:validation:other-field-types', {
      detail: {
        isValid: !otherFieldTypesInvalid
      }
    }));
    doc.body.dispatchEvent(new CustomEvent('ibexa-pb:validation:layout', {
      detail: {
        isValid: !isPageLayoutError
      }
    }));
  };
  submitBtns.forEach(function (btn) {
    btn.addEventListener('click', validateForm, false);
  });
  menuBtnsToValidate.forEach(function (btn) {
    btn.addEventListener('click', validateForm, false);
  });
})(window, document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.react.blocks.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.react.blocks.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  doc.body.addEventListener('ibexa-pb-app-iframe-loaded', function () {
    var iframe = doc.getElementById('page-builder-preview');
    var iframeBody = iframe.contentWindow.document.body;
    var updatedBlocksDetails = [];
    iframeBody.addEventListener('ibexa-post-update-blocks-preview', function (_ref) {
      var detail = _ref.detail;
      var blockIds = detail.blockIds,
        blocksMap = detail.blocksMap;
      updatedBlocksDetails = blockIds.map(function (id) {
        return blocksMap[id];
      });
    });
    iframeBody.addEventListener('ibexa-active-block-clicked', function () {
      if (!updatedBlocksDetails.length) {
        return;
      }
      updatedBlocksDetails.forEach(function (updatedBlockDetails) {
        var reactBlocks = _toConsumableArray(iframeBody.querySelectorAll('.ibexa-react-block'));
        var reactBlock = reactBlocks.find(function (block) {
          return updatedBlockDetails.config.component === block.dataset.componentName;
        });
        if (!reactBlock) {
          return;
        }
        var _reactBlock$dataset = reactBlock.dataset,
          componentName = _reactBlock$dataset.componentName,
          componentProps = _reactBlock$dataset.props;
        var props = JSON.parse(componentProps).attributes;
        var _iframe$contentWindow = iframe.contentWindow,
          getReactComponent = _iframe$contentWindow.getReactComponent,
          renderReactComponent = _iframe$contentWindow.renderReactComponent;
        var ReactComponent = null;
        try {
          ReactComponent = getReactComponent(componentName);
        } catch (err) {
          console.error(err.message);
        }
        if (!ReactComponent) {
          return;
        }
        renderReactComponent(reactBlock, ReactComponent, props);
      });
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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



var ConfigPanelBody = function ConfigPanelBody(_ref) {
  var children = _ref.children,
    extraClasses = _ref.extraClasses;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-pb-config-panel__body': true
  }, extraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, children);
};
ConfigPanelBody.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ConfigPanelBody.defaultProps = {
  children: null,
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPanelBody);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var ConfigPanelFooter = function ConfigPanelFooter(_ref) {
  var children = _ref.children,
    extraClasses = _ref.extraClasses,
    isClosed = _ref.isClosed;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSlimFooter = _useState2[0],
    setIsSlimFooter = _useState2[1];
  var footerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var fitFooter = function fitFooter() {
    var content = footerRef.current.previousElementSibling;
    if (!content) {
      return;
    }
    var hasVerticalScrollbar = content.scrollHeight > content.clientHeight;
    setIsSlimFooter(hasVerticalScrollbar);
  };
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'ibexa-pb-config-panel__footer': true,
    'ibexa-pb-config-panel__footer--slim': isSlimFooter
  }, extraClasses, true));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener('resize', fitFooter, false);
    fitFooter();
    return function () {
      window.removeEventListener('resize', fitFooter, false);
    };
  }, [isClosed]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: footerRef,
    className: className
  }, children);
};
ConfigPanelFooter.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
ConfigPanelFooter.defaultProps = {
  children: null,
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPanelFooter);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG_PANEL_TYPE_LEFT: () => (/* binding */ CONFIG_PANEL_TYPE_LEFT),
/* harmony export */   CONFIG_PANEL_TYPE_RIGHT: () => (/* binding */ CONFIG_PANEL_TYPE_RIGHT),
/* harmony export */   LEFT_PANEL_TYPES: () => (/* binding */ LEFT_PANEL_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
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



var CONFIG_PANEL_TYPE_LEFT = 'CONFIG_PANEL_TYPE_LEFT';
var CONFIG_PANEL_TYPE_RIGHT = 'CONFIG_PANEL_TYPE_RIGHT';
var LEFT_PANEL_TYPES = {
  FIELDS: 'fields',
  LAYOUT_SELECTOR: 'layout-selector',
  SCHEDULER: 'scheduler',
  VISIBILITY: 'visibility'
};
var DEFAULT_CONFIG_PANEL_MIN_WIDTH = 830;
var DEFAULT_CONFIG_PANEL_MAX_WIDTH = 1920;
var LEFT_CONFIG_PANEL_WIDTH_KEY_NAME = 'ibexa-pb-config-panel-width-left';
var RIGHT_CONFIG_PANEL_WIDTH_KEY_NAME = 'ibexa-pb-config-panel-width-right';
var ConfigPanel = function ConfigPanel(_ref) {
  var extraClasses = _ref.extraClasses,
    type = _ref.type,
    children = _ref.children,
    title = _ref.title,
    subtitle = _ref.subtitle,
    isClosed = _ref.isClosed,
    isDistractionFreeModeActive = _ref.isDistractionFreeModeActive,
    leftPanelType = _ref.leftPanelType;
  var isLeftPanel = type === CONFIG_PANEL_TYPE_LEFT;
  var isRightPanel = type === CONFIG_PANEL_TYPE_RIGHT;
  var localStoragePanelWidthName = isLeftPanel ? LEFT_CONFIG_PANEL_WIDTH_KEY_NAME : RIGHT_CONFIG_PANEL_WIDTH_KEY_NAME;
  var localStoragePanelWidth = window.localStorage.getItem(localStoragePanelWidthName);
  var configPanelLocalWidth = localStoragePanelWidth ? Number(localStoragePanelWidth) : DEFAULT_CONFIG_PANEL_MIN_WIDTH;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isResizing = _useState2[0],
    setIsResizing = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(configPanelLocalWidth),
    _useState4 = _slicedToArray(_useState3, 2),
    configPanelWidth = _useState4[0],
    setConfigPanelWidth = _useState4[1];
  var configPanelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var clientXWhenStartDraging = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var backdrop = new window.ibexa.core.Backdrop({
    extraClasses: ['ibexa-pb-config-panel__backdrop']
  });
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty(_defineProperty({
    'ibexa-pb-config-panel': true,
    'ibexa-pb-config-panel--closed': isClosed,
    'ibexa-pb-config-panel--left': isLeftPanel && !isDistractionFreeModeActive,
    'ibexa-pb-config-panel--right': isRightPanel && !isDistractionFreeModeActive,
    'ibexa-pb-config-panel--resizing': isResizing,
    'ibexa-pb-config-panel--distraction-free-mode-active': isDistractionFreeModeActive
  }, "ibexa-pb-config-panel--".concat(leftPanelType), isLeftPanel), extraClasses, true));
  var resizerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'ibexa-pb-config-panel__resizer': true,
    'ibexa-pb-config-panel__resizer--left': isLeftPanel,
    'ibexa-pb-config-panel__resizer--right': isRightPanel
  });
  var startResizing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var clientX = _ref2.clientX;
    clientXWhenStartDraging.current = clientX;
    setIsResizing(true);
  }, [clientXWhenStartDraging]);
  var stopResizing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsResizing(false);
  }, []);
  var resize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref3) {
    var clientX = _ref3.clientX;
    if (isResizing) {
      var newConfigPanelWidth = isLeftPanel ? configPanelWidth - (clientXWhenStartDraging.current - clientX) : configPanelWidth + (clientXWhenStartDraging.current - clientX);
      var maxConfigPanelWidth = Math.min(window.screen.width, DEFAULT_CONFIG_PANEL_MAX_WIDTH);
      var minMaxConfigPanelWidth = Math.min(Math.max(newConfigPanelWidth, DEFAULT_CONFIG_PANEL_MIN_WIDTH), maxConfigPanelWidth);
      window.localStorage.setItem(localStoragePanelWidthName, minMaxConfigPanelWidth);
      setConfigPanelWidth(minMaxConfigPanelWidth);
    }
  }, [isResizing]);
  var toggleBtnIndex = function toggleBtnIndex(isOpened) {
    if (isRightPanel) {
      return;
    }
    var toggleBtn = document.querySelector(".ibexa-pb-action-bar__action-btn--".concat(leftPanelType));
    toggleBtn.style.zIndex = isOpened ? 656 : 0;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-added'));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isClosed) {
      backdrop.show();
      toggleBtnIndex(true);
      setConfigPanelWidth(configPanelLocalWidth);
    }
    return function () {
      backdrop.remove();
      toggleBtnIndex(false);
    };
  }, [isClosed]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isResizing) {
      document.addEventListener('mousemove', resize, false);
      document.addEventListener('mouseup', stopResizing, false);
      return function () {
        document.removeEventListener('mousemove', resize, false);
        document.removeEventListener('mouseup', stopResizing, false);
      };
    }
  }, [isResizing, resize, stopResizing]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: configPanelRef,
    style: _objectSpread({}, !isDistractionFreeModeActive && {
      width: isClosed ? 0 : configPanelWidth
    }),
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ibexa-pb-config-panel__header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "ibexa-pb-config-panel__title"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: "ibexa-pb-config-panel__subtitle"
  }, subtitle)), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: resizerClassName,
    onMouseDown: startResizing
  })));
};
ConfigPanel.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isDistractionFreeModeActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  leftPanelType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
ConfigPanel.defaultProps = {
  extraClasses: '',
  type: CONFIG_PANEL_TYPE_LEFT,
  title: null,
  subtitle: null,
  isClosed: false,
  isDistractionFreeModeActive: false,
  leftPanelType: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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


var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_PLACEHOLDER_REMOVING = 'droppable-placeholder--removing';
var SELECTOR_ZONE = '[data-ibexa-zone-id]';
var PLACEHOLDER_POSITION_TOP = 'top';
var TIMEOUT_REMOVE_PLACEHOLDERS = 500;
var DragDrop = /*#__PURE__*/function (_Component) {
  function DragDrop(props) {
    var _this;
    _classCallCheck(this, DragDrop);
    _this = _callSuper(this, DragDrop, [props]);
    _this.onDragOverTimeout = null;
    _this.placeholderRemovalTimeout = null;
    _this.getElement = _this.getElement.bind(_this);
    _this.getInitDragDropState = _this.getInitDragDropState.bind(_this);
    _this.scrollContainer = _this.scrollContainer.bind(_this);
    _this.removePlaceholderWithAnimation = _this.removePlaceholderWithAnimation.bind(_this);
    _this.removePlaceholderWithoutAnimation = _this.removePlaceholderWithoutAnimation.bind(_this);
    _this.createPlaceholder = _this.createPlaceholder.bind(_this);
    _this.insertAfter = _this.insertAfter.bind(_this);
    _this.insertBefore = _this.insertBefore.bind(_this);
    _this.addPlaceholderBesideElement = _this.addPlaceholderBesideElement.bind(_this);
    _this.addPlaceholderInZone = _this.addPlaceholderInZone.bind(_this);
    _this.removePlaceholders = _this.removePlaceholders.bind(_this);
    _this.removePlaceholdersAfterTimeout = _this.removePlaceholdersAfterTimeout.bind(_this);
    return _this;
  }

  /**
   * Finds next element identifier
   *
   * @method findNextElementIdentifier
   * @param {HTMLElement} placeholder
   * @param {String} elementIdentifier
   * @returns {String|null}
   */
  _inherits(DragDrop, _Component);
  return _createClass(DragDrop, [{
    key: "findNextElementIdentifier",
    value: function findNextElementIdentifier(placeholder, elementIdentifier) {
      if (placeholder.dataset.position === PLACEHOLDER_POSITION_TOP) {
        return placeholder.dataset[elementIdentifier];
      }
      return placeholder.nextElementSibling ? placeholder.nextElementSibling.dataset[elementIdentifier] : null;
    }

    /**
     * Removes placeholders
     *
     * @method removePlaceholders
     * @param {NodeList|Array} placeholders
     * @param {Function} removePlaceholderCallback
     */
  }, {
    key: "removePlaceholders",
    value: function removePlaceholders(placeholders, removePlaceholderCallback) {
      placeholders.forEach(removePlaceholderCallback);
    }

    /**
     * Removes a placeholder node without removal animation
     *
     * @method removePlaceholderWithoutAnimation
     * @param {HTMLElement} placeholder
     */
  }, {
    key: "removePlaceholderWithoutAnimation",
    value: function removePlaceholderWithoutAnimation(placeholder) {
      window.clearTimeout(this.placeholderRemovalTimeout);
      window.clearTimeout(this.onDragOverTimeout);
      if (!placeholder || !placeholder.parentNode) {
        return;
      }
      placeholder.parentNode.removeChild(placeholder);
    }

    /**
     * Removes a placeholder with removal animation
     *
     * @method removePlaceholderWithAnimation
     * @param {HTMLElement} placeholder
     */
  }, {
    key: "removePlaceholderWithAnimation",
    value: function removePlaceholderWithAnimation(placeholder) {
      var _this2 = this;
      placeholder.classList.add(CLASS_PLACEHOLDER_REMOVING);
      window.clearTimeout(this.placeholderRemovalTimeout);
      window.clearTimeout(this.onDragOverTimeout);
      this.placeholderRemovalTimeout = window.setTimeout(function () {
        return _this2.removePlaceholderWithoutAnimation(placeholder);
      }, TIMEOUT_REMOVE_PLACEHOLDERS);
    }

    /**
     * Rremoves a placeholder node after a timeout
     *
     * @method removePlaceholdersAfterTimeout
     * @param {Function} onTimeout
     */
  }, {
    key: "removePlaceholdersAfterTimeout",
    value: function removePlaceholdersAfterTimeout(getPlaceholderNodes, onTimeout) {
      var _this3 = this;
      window.clearTimeout(this.onDragOverTimeout);
      this.onDragOverTimeout = window.setTimeout(function () {
        _this3.removePlaceholders(getPlaceholderNodes(), _this3.removePlaceholderWithAnimation);
        onTimeout();
      }, TIMEOUT_REMOVE_PLACEHOLDERS);
    }

    /**
     * Adds a placeholder node beside element (above or below)
     *
     * @method addPlaceholderBesideElement
     * @param {HTMLElement} element
     * @param {Number} positionY
     * @param {NodeList|Array} placeholders
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @param {Function} onElementDragOver
     * @returns {Object}
     */
  }, {
    key: "addPlaceholderBesideElement",
    value: function addPlaceholderBesideElement(element, positionY, placeholders, elementIdentifier, onElementDragOver, _ref) {
      var placeholderPosition = _ref.placeholderPosition,
        placeholderElementId = _ref.placeholderElementId,
        placeholderZoneId = _ref.placeholderZoneId;
      var placeholder = this.createPlaceholder(element, elementIdentifier, onElementDragOver);
      var rect = element.getBoundingClientRect();
      var middlePositionY = rect.top + rect.height / 2;
      var position = positionY <= middlePositionY ? PLACEHOLDER_POSITION_TOP : 'bottom';
      var placehoderExists = placeholderPosition === position && placeholderElementId === placeholder.dataset[elementIdentifier] && placeholderZoneId === placeholder.dataset.ibexaZoneId;
      if (placehoderExists) {
        return {
          placeholderPosition: placeholderPosition,
          placeholderElementId: placeholderElementId,
          placeholderZoneId: placeholderZoneId
        };
      }
      this.removePlaceholders(placeholders, this.removePlaceholderWithoutAnimation);
      placeholder.dataset.position = position;
      if (position === PLACEHOLDER_POSITION_TOP) {
        this.insertBefore(element, placeholder);
      } else {
        this.insertAfter(element, placeholder);
      }
      return {
        placeholderElementId: placeholder.dataset[elementIdentifier],
        placeholderZoneId: placeholder.dataset.ibexaZoneId,
        placeholderPosition: position
      };
    }

    /**
     * Add a placeholder node inside a zone
     *
     * @method addPlaceholderInZone
     * @param {HTMLElement} zone
     * @param {NodeList|Array} placeholders
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @param {Function} onElementDragOver
     */
  }, {
    key: "addPlaceholderInZone",
    value: function addPlaceholderInZone(zone, placeholders, elementIdentifier, onElementDragOver) {
      var placeholder = this.createPlaceholder(zone, elementIdentifier, onElementDragOver);
      this.removePlaceholders(placeholders, this.removePlaceholderWithoutAnimation);
      zone.appendChild(placeholder);
    }

    /**
     * Inserts a node before a target node
     *
     * @method insertBefore
     * @param {HTMLElement} where
     * @param {HTMLElement} what
     */
  }, {
    key: "insertBefore",
    value: function insertBefore(where, what) {
      if (where && where.parentNode) {
        where.parentNode.insertBefore(what, where);
      }
    }

    /**
     * Inserts a node after a target node
     *
     * @method insertAfter
     * @param {HTMLElement} where
     * @param {HTMLElement} what
     */
  }, {
    key: "insertAfter",
    value: function insertAfter(where, what) {
      if (where && where.parentNode) {
        where.parentNode.insertBefore(what, where.nextSibling);
      }
    }

    /**
     * Create a placeholder node
     *
     * @method createPlaceholder
     * @param {HTMLElement} element
     * @param {String} elementIdentifier a data attribute identifier (like 'zone' stays for `data-zone`)
     * @returns {HTMLElement}
     */
  }, {
    key: "createPlaceholder",
    value: function createPlaceholder(element, elementIdentifier) {
      var placeholder = document.createElement('div');
      placeholder.classList.add(CLASS_PLACEHOLDER);
      if (element.dataset[elementIdentifier]) {
        placeholder.dataset[elementIdentifier] = element.dataset[elementIdentifier];
      }
      placeholder.dataset.zoneId = element.dataset.zoneId ? element.dataset.zoneId : element.closest(SELECTOR_ZONE).dataset.ibexaZoneId;
      return placeholder;
    }

    /**
     * Scroll container
     *
     * @method scrollContainer
     * @param {Event} event
     * @param {Number} event.clientY
     * @param {HTMLElement} container
     */
  }, {
    key: "scrollContainer",
    value: function scrollContainer(_ref2, container) {
      var clientY = _ref2.clientY;
      var diffSize = 50;
      if (container.innerHeight - clientY < diffSize) {
        container.scrollBy({
          top: 5
        });
      } else if (clientY < diffSize) {
        container.scrollBy({
          top: -5
        });
      }
    }

    /**
     * Gets an element recursively that matches a callback action comparison
     *
     * @method getElement
     * @param {HTMLElement} element
     * @param {Function} checkIsCorrect comparison check callback
     * @returns {HTMLElement|undefined}
     */
  }, {
    key: "getElement",
    value: function getElement(element, checkIsCorrect) {
      var parent = element.parentNode;
      if (!parent) {
        return undefined;
      }
      if (checkIsCorrect(element)) {
        return element;
      }
      return checkIsCorrect(parent) ? parent : this.getElement(parent, checkIsCorrect);
    }

    /**
     * Returns initial drag & drop state
     *
     * @method getInitDragDropState
     * @returns {Object}
     */
  }, {
    key: "getInitDragDropState",
    value: function getInitDragDropState() {
      return {
        draggedSidebarElementType: null,
        dragOverZoneId: null,
        placeholderType: null,
        placeholderElementId: null,
        placeholderZoneId: null,
        placeholderPosition: null
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.render({
        getElement: this.getElement,
        getInitDragDropState: this.getInitDragDropState,
        scrollContainer: this.scrollContainer,
        removePlaceholderWithAnimation: this.removePlaceholderWithAnimation,
        removePlaceholderWithoutAnimation: this.removePlaceholderWithoutAnimation,
        insertAfter: this.insertAfter,
        insertBefore: this.insertBefore,
        removePlaceholders: this.removePlaceholders,
        addPlaceholderBesideElement: this.addPlaceholderBesideElement,
        addPlaceholderInZone: this.addPlaceholderInZone,
        removePlaceholdersAfterTimeout: this.removePlaceholdersAfterTimeout,
        findNextElementIdentifier: this.findNextElementIdentifier
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
DragDrop.propTypes = {
  render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DragDrop);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/page.builder.history.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/page.builder.history.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIONS: () => (/* binding */ ACTIONS),
/* harmony export */   "default": () => (/* binding */ PageBuilderHistory),
/* harmony export */   findInsertBlockPosition: () => (/* binding */ findInsertBlockPosition),
/* harmony export */   findReorderBlockPositions: () => (/* binding */ findReorderBlockPositions)
/* harmony export */ });
/* harmony import */ var _helpers_deep_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/deep.clone */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js");
/* harmony import */ var _page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-builder/page.builder */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ACTIONS = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  REORDER: 'REORDER',
  UPDATE: 'UPDATE'
};
var getReorderedItem = function getReorderedItem(beforeArr, afterArr) {
  var leftIndex = afterArr.findIndex(function (blockId, blockIndex) {
    return beforeArr.indexOf(blockId) !== blockIndex;
  });
  var rightIndex = afterArr.findLastIndex(function (blockId, blockIndex) {
    return beforeArr.indexOf(blockId) !== blockIndex;
  });
  if (beforeArr[leftIndex] === afterArr[rightIndex]) {
    return beforeArr[leftIndex];
  }
  return beforeArr[rightIndex];
};
var findInsertBlockPosition = function findInsertBlockPosition(_ref) {
  var currBlocksIds = _ref.currBlocksIds,
    prevBlocksIds = _ref.prevBlocksIds;
  var index = prevBlocksIds.findIndex(function (blockId) {
    return !currBlocksIds.includes(blockId);
  });
  return index;
};
var findReorderBlockPositions = function findReorderBlockPositions(_ref2) {
  var block = _ref2.block,
    prevBlocksIds = _ref2.prevBlocksIds,
    zoneKey = _ref2.zoneKey,
    added = _ref2.added,
    deleted = _ref2.deleted;
  if (added && deleted) {
    var _destinationPosition = deleted.prevBlocksIds.findIndex(function (blockId) {
      return blockId === block.id;
    });
    return {
      sourceZoneKey: added.zoneKey,
      destinationZoneKey: deleted.zoneKey,
      destinationPosition: _destinationPosition,
      positionChangeMethod: _page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__.POSITION_CHANGE_METHOD.DRAG
    };
  }
  var destinationPosition = prevBlocksIds.findIndex(function (blockId) {
    return blockId === block.id;
  });
  return {
    sourceZoneKey: zoneKey,
    destinationZoneKey: zoneKey,
    destinationPosition: destinationPosition,
    positionChangeMethod: _page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__.POSITION_CHANGE_METHOD.DRAG
  };
};
var PageBuilderHistory = /*#__PURE__*/function () {
  function PageBuilderHistory(initialEntry) {
    _classCallCheck(this, PageBuilderHistory);
    this.stateChangesPrev = [];
    this.stateChangesNext = [];
    this.lastEntry = JSON.parse(initialEntry);
  }
  return _createClass(PageBuilderHistory, [{
    key: "getLastChanges",
    value: function getLastChanges() {
      return this.stateChangesPrev[this.stateChangesPrev.length - 1];
    }
  }, {
    key: "getNextChanges",
    value: function getNextChanges() {
      return this.stateChangesNext[this.stateChangesNext.length - 1];
    }
  }, {
    key: "getBlocksZonesMap",
    value: function getBlocksZonesMap(zones) {
      var output = {};
      zones.forEach(function (zone, zoneKey) {
        zone.blocks.forEach(function (_ref3) {
          var id = _ref3.id;
          output[id] = zoneKey;
        });
      });
      return output;
    }
  }, {
    key: "getPrevAndCurrBlocksIds",
    value: function getPrevAndCurrBlocksIds(zones, zoneKey) {
      var _this$lastEntry$zones, _this$lastEntry$zones2;
      var prevZoneBlocks = (_this$lastEntry$zones = (_this$lastEntry$zones2 = this.lastEntry.zones[zoneKey]) === null || _this$lastEntry$zones2 === void 0 ? void 0 : _this$lastEntry$zones2.blocks) !== null && _this$lastEntry$zones !== void 0 ? _this$lastEntry$zones : [];
      var currZoneBlocks = zones[zoneKey].blocks;
      var prevBlocksIds = prevZoneBlocks.map(function (_ref4) {
        var id = _ref4.id;
        return id;
      });
      var currBlocksIds = currZoneBlocks.map(function (_ref5) {
        var id = _ref5.id;
        return id;
      });
      return {
        prevZoneBlocks: prevZoneBlocks,
        currZoneBlocks: currZoneBlocks,
        prevBlocksIds: prevBlocksIds,
        currBlocksIds: currBlocksIds
      };
    }
  }, {
    key: "getDiffForNewBlock",
    value: function getDiffForNewBlock(zones, prevBlockZonesMap, currBlockZonesMap) {
      var _Object$entries$find = Object.entries(currBlockZonesMap).find(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 1),
            currBlockId = _ref7[0];
          return prevBlockZonesMap[currBlockId] === undefined;
        }),
        _Object$entries$find2 = _slicedToArray(_Object$entries$find, 2),
        blockId = _Object$entries$find2[0],
        zoneKey = _Object$entries$find2[1];
      var _this$getPrevAndCurrB = this.getPrevAndCurrBlocksIds(zones, zoneKey),
        currZoneBlocks = _this$getPrevAndCurrB.currZoneBlocks,
        prevBlocksIds = _this$getPrevAndCurrB.prevBlocksIds,
        currBlocksIds = _this$getPrevAndCurrB.currBlocksIds;
      var newBlock = currZoneBlocks.find(function (_ref8) {
        var id = _ref8.id;
        return id === blockId;
      });
      return {
        action: ACTIONS.ADD,
        block: newBlock,
        prevBlocksIds: prevBlocksIds,
        currBlocksIds: currBlocksIds,
        zoneKey: zoneKey
      };
    }
  }, {
    key: "getDiffForDeletedBlock",
    value: function getDiffForDeletedBlock(zones, prevBlockZonesMap, currBlockZonesMap) {
      var _Object$entries$find3 = Object.entries(prevBlockZonesMap).find(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 1),
            prevBlockId = _ref10[0];
          return currBlockZonesMap[prevBlockId] === undefined;
        }),
        _Object$entries$find4 = _slicedToArray(_Object$entries$find3, 2),
        blockId = _Object$entries$find4[0],
        zoneKey = _Object$entries$find4[1];
      var _this$getPrevAndCurrB2 = this.getPrevAndCurrBlocksIds(zones, zoneKey),
        prevZoneBlocks = _this$getPrevAndCurrB2.prevZoneBlocks,
        prevBlocksIds = _this$getPrevAndCurrB2.prevBlocksIds,
        currBlocksIds = _this$getPrevAndCurrB2.currBlocksIds;
      var deletedBlock = prevZoneBlocks.find(function (_ref11) {
        var id = _ref11.id;
        return id === blockId;
      });
      return {
        action: ACTIONS.DELETE,
        block: deletedBlock,
        prevBlocksIds: prevBlocksIds,
        currBlocksIds: currBlocksIds,
        zoneKey: zoneKey
      };
    }
  }, {
    key: "getDiffForReorderedBlock",
    value: function getDiffForReorderedBlock(zones, prevBlockZonesMap, currBlockZonesMap) {
      var _this = this;
      var movedBetweenZonesBlockMetadata = Object.entries(prevBlockZonesMap).find(function (_ref12) {
        var _ref13 = _slicedToArray(_ref12, 2),
          blockKey = _ref13[0],
          zoneKey = _ref13[1];
        return currBlockZonesMap[blockKey] !== zoneKey;
      });
      if (movedBetweenZonesBlockMetadata) {
        var _movedBetweenZonesBlo = _slicedToArray(movedBetweenZonesBlockMetadata, 2),
          blockId = _movedBetweenZonesBlo[0],
          prevZoneKey = _movedBetweenZonesBlo[1];
        var currZoneKey = currBlockZonesMap[blockId];
        var deletedBlockZoneData = this.getPrevAndCurrBlocksIds(zones, prevZoneKey);
        var addedBlockZoneData = this.getPrevAndCurrBlocksIds(zones, currZoneKey);
        var block = zones[currZoneKey].blocks.find(function (_ref14) {
          var id = _ref14.id;
          return id === blockId;
        });
        return {
          action: ACTIONS.REORDER,
          block: block,
          deleted: {
            zoneKey: prevZoneKey,
            prevBlocksIds: deletedBlockZoneData.prevBlocksIds,
            currBlocksIds: deletedBlockZoneData.currBlocksIds
          },
          added: {
            zoneKey: currZoneKey,
            prevBlocksIds: addedBlockZoneData.prevBlocksIds,
            currBlocksIds: addedBlockZoneData.currBlocksIds
          }
        };
      }
      var output;
      var _loop = function _loop() {
        var _this$getPrevAndCurrB3 = _this.getPrevAndCurrBlocksIds(zones, zoneKey),
          prevBlocksIds = _this$getPrevAndCurrB3.prevBlocksIds,
          currBlocksIds = _this$getPrevAndCurrB3.currBlocksIds;
        var reorderedBlockId = getReorderedItem(prevBlocksIds, currBlocksIds);
        if (reorderedBlockId) {
          var _block = zones[zoneKey].blocks.find(function (_ref15) {
            var id = _ref15.id;
            return id === reorderedBlockId;
          });
          output = {
            action: ACTIONS.REORDER,
            block: _block,
            prevBlocksIds: prevBlocksIds,
            currBlocksIds: currBlocksIds,
            zoneKey: zoneKey
          };
          return 1; // break
        }
      };
      for (var zoneKey in zones) {
        if (_loop()) break;
      }
      return output;
    }
  }, {
    key: "getDiffForUpdatedBlock",
    value: function getDiffForUpdatedBlock(zones) {
      var updatedBlock;
      var zoneKey;
      for (zoneKey in this.lastEntry.zones) {
        updatedBlock = this.lastEntry.zones[zoneKey].blocks.find(function (prevBlock, prevBlockKey) {
          var currBlock = zones[zoneKey].blocks[prevBlockKey];
          var prevBlockStringified = JSON.stringify(prevBlock);
          var currBlockStringified = JSON.stringify(currBlock);
          return prevBlockStringified !== currBlockStringified;
        });
        if (updatedBlock) {
          break;
        }
      }
      return {
        action: ACTIONS.UPDATE,
        block: updatedBlock,
        zoneKey: zoneKey
      };
    }
  }, {
    key: "getDiff",
    value: function getDiff(entry) {
      var prevBlockZonesMap = this.getBlocksZonesMap(this.lastEntry.zones);
      var currBlockZonesMap = this.getBlocksZonesMap(entry.zones);
      var prevBlocksCount = Object.entries(prevBlockZonesMap).length;
      var currBlocksCount = Object.entries(currBlockZonesMap).length;
      if (prevBlocksCount < currBlocksCount) {
        return this.getDiffForNewBlock(entry.zones, prevBlockZonesMap, currBlockZonesMap);
      } else if (prevBlocksCount > currBlocksCount) {
        return this.getDiffForDeletedBlock(entry.zones, prevBlockZonesMap, currBlockZonesMap);
      }
      var reorderedData = this.getDiffForReorderedBlock(entry.zones, prevBlockZonesMap, currBlockZonesMap);
      if (reorderedData) {
        return reorderedData;
      }
      return this.getDiffForUpdatedBlock(entry.zones);
    }
  }, {
    key: "addEntry",
    value: function addEntry(newEntry) {
      if (this.lastEntry.layout != newEntry.layout) {
        return;
      }
      var newChangesEntry = this.getDiff(newEntry);
      if (!newChangesEntry.block) {
        return;
      }
      this.stateChangesPrev.push(newChangesEntry);
      this.lastEntry = newEntry;
      this.stateChangesNext = [];
    }
  }, {
    key: "getRevertedEntryFromAddDiff",
    value: function getRevertedEntryFromAddDiff(lastEntry, lastChange) {
      var newZoneBlocks = lastEntry.zones[lastChange.zoneKey].blocks.filter(function (_ref16) {
        var id = _ref16.id;
        return id !== lastChange.block.id;
      });
      lastEntry.zones[lastChange.zoneKey].blocks = newZoneBlocks;
      return lastEntry;
    }
  }, {
    key: "getRevertedEntryFromDeleteDiff",
    value: function getRevertedEntryFromDeleteDiff(lastEntry, lastChange) {
      var zoneBlocks = lastEntry.zones[lastChange.zoneKey].blocks;
      var newZoneBlocks = lastChange.prevBlocksIds.map(function (blockId) {
        var oldBlock = zoneBlocks.find(function (_ref17) {
          var id = _ref17.id;
          return id === blockId;
        });
        return oldBlock !== null && oldBlock !== void 0 ? oldBlock : lastChange.block;
      });
      lastEntry.zones[lastChange.zoneKey].blocks = newZoneBlocks;
      return lastEntry;
    }
  }, {
    key: "getRevertedEntryFromReorderDiff",
    value: function getRevertedEntryFromReorderDiff(lastEntry, lastChange) {
      if (lastChange.added && lastChange.deleted) {
        var addedZoneBlocks = lastEntry.zones[lastChange.added.zoneKey].blocks;
        var deletedZoneBlocks = lastEntry.zones[lastChange.deleted.zoneKey].blocks;
        var addedNewZoneBlocks = lastChange.added.prevBlocksIds.map(function (blockId) {
          return addedZoneBlocks.find(function (_ref18) {
            var id = _ref18.id;
            return id === blockId;
          });
        });
        var deletedNewZoneBlocks = lastChange.deleted.prevBlocksIds.map(function (blockId) {
          var block = deletedZoneBlocks.find(function (_ref19) {
            var id = _ref19.id;
            return id === blockId;
          });
          if (block) {
            return block;
          }
          return addedZoneBlocks.find(function (_ref20) {
            var id = _ref20.id;
            return id === blockId;
          });
        });
        lastEntry.zones[lastChange.added.zoneKey].blocks = addedNewZoneBlocks;
        lastEntry.zones[lastChange.deleted.zoneKey].blocks = deletedNewZoneBlocks;
        return lastEntry;
      }
      var zoneBlocks = lastEntry.zones[lastChange.zoneKey].blocks;
      var newZoneBlocks = lastChange.prevBlocksIds.map(function (blockId) {
        return zoneBlocks.find(function (_ref21) {
          var id = _ref21.id;
          return id === blockId;
        });
      });
      lastEntry.zones[lastChange.zoneKey].blocks = newZoneBlocks;
      return lastEntry;
    }
  }, {
    key: "getRevertedEntryFromUpdateDiff",
    value: function getRevertedEntryFromUpdateDiff(lastEntry, lastChange) {
      var zoneBlocks = lastEntry.zones[lastChange.zoneKey].blocks;
      var updatedBlockIndex = zoneBlocks.findIndex(function (_ref22) {
        var id = _ref22.id;
        return id === lastChange.block.id;
      });
      lastEntry.zones[lastChange.zoneKey].blocks[updatedBlockIndex] = lastChange.block;
      return lastEntry;
    }
  }, {
    key: "getRevertedEntry",
    value: function getRevertedEntry(lastChange) {
      var lastEntry = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_0__["default"])(this.lastEntry);
      switch (lastChange.action) {
        case ACTIONS.ADD:
          return this.getRevertedEntryFromAddDiff(lastEntry, lastChange);
        case ACTIONS.DELETE:
          return this.getRevertedEntryFromDeleteDiff(lastEntry, lastChange);
        case ACTIONS.REORDER:
          return this.getRevertedEntryFromReorderDiff(lastEntry, lastChange);
        case ACTIONS.UPDATE:
          return this.getRevertedEntryFromUpdateDiff(lastEntry, lastChange);
      }
    }
  }, {
    key: "isPrevEmpty",
    get: function get() {
      return this.stateChangesPrev.length === 0;
    }
  }, {
    key: "isNextEmpty",
    get: function get() {
      return this.stateChangesNext.length === 0;
    }
  }, {
    key: "undo",
    value: function undo(callback) {
      var lastChanges = this.getLastChanges();
      var lastEntry = this.getRevertedEntry(lastChanges);
      try {
        var actionStatus = callback({
          value: lastEntry,
          diff: lastChanges
        });
        if (!actionStatus) {
          throw new Error("Something has gone wrong, callback action didn't finish succesfully!");
        }
      } catch (error) {
        console.error(error);
        return;
      }
      var newChangesEntry = this.getDiff(lastEntry);
      this.lastEntry = lastEntry;
      this.stateChangesPrev.pop();
      this.stateChangesNext.push(newChangesEntry);
    }
  }, {
    key: "redo",
    value: function redo(callback) {
      var nextChanges = this.getNextChanges();
      var lastEntry = this.getRevertedEntry(nextChanges);
      try {
        var actionStatus = callback({
          value: lastEntry,
          diff: nextChanges
        });
        if (!actionStatus) {
          throw new Error("Something has gone wrong, callback action didn't finish succesfully!");
        }
      } catch (error) {
        console.error(error);
        return;
      }
      var newChangesEntry = this.getDiff(lastEntry);
      this.lastEntry = lastEntry;
      this.stateChangesNext.pop();
      this.stateChangesPrev.push(newChangesEntry);
    }
  }]);
}();


/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Generates a GUID string.
 *
 * @function generateGuid
 * @param prefix {String} the id prefix
 * @return {String} The generated GUID.
 *
 * @example b-af8a8416-6e18-a307-bd9c-f2c947bbb3aa
 * @author Slavik Meltser (http://slavik.meltser.info/?p=142)
 */
var generateGuid = function generateGuid() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'guid-';
  return [prefix, makeGuidPiece(), makeGuidPiece(true), makeGuidPiece(true), makeGuidPiece()].join('');
};

/**
 * Generates GUID piece
 * @param addDashes {Boolean} add dashes flag
 * @return {String} generated piece of guid
 */
var makeGuidPiece = function makeGuidPiece(addDashes) {
  var piece = "".concat(Math.random().toString(16), "000000000").substr(2, 8);
  return addDashes ? "-".concat(piece.substr(0, 4), "-").concat(piece.substr(4, 4)) : piece;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateGuid);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MINUTES_IN_DAY: () => (/* binding */ MINUTES_IN_DAY),
/* harmony export */   MINUTES_IN_HOUR: () => (/* binding */ MINUTES_IN_HOUR),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var MINUTES_IN_HOUR = 60;
var MINUTES_IN_DAY = MINUTES_IN_HOUR * 24;
var PERCENTAGE_FACTOR = 100;
var getEventInDayLeftPosition = function getEventInDayLeftPosition(timestamp) {
  var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
  var date = convertDateToTimezone(parseInt(timestamp, 10));
  var minutesCount = date.hour() * MINUTES_IN_HOUR + date.minutes();
  var leftPosition = minutesCount / MINUTES_IN_DAY * PERCENTAGE_FACTOR;
  return leftPosition;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEventInDayLeftPosition);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/**
 * Checks whether a given item is an object.
 *
 * @function isObject
 * @param {Any} item
 * @returns {Boolean}
 */
var isObject = function isObject(item) {
  return item instanceof Object && item.constructor === Object;
};

/**
 * Serializes object into a string format
 *
 * @function serializeObject
 * @param {String} key param key
 * @param {Object} param reguest param
 * @returns {String}
 */
var serializeObject = function serializeObject(key, param) {
  return Object.entries(param).reduce(function (requestParameters, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      paramKey = _ref2[0],
      paramValue = _ref2[1];
    return [].concat(_toConsumableArray(requestParameters), [serializeByType("".concat(key, "[").concat(paramKey, "]"), paramValue)]);
  }, []).join('&');
};

/**
 * Serializes array into a string format
 *
 * @function serializeArray
 * @param {String} key param key
 * @param {Array} param reguest param
 * @returns {String}
 */
var serializeArray = function serializeArray(key, param) {
  return param.map(function (paramValue, index) {
    return serializeByType("".concat(key, "[").concat(index, "]"), paramValue);
  }).join('&');
};

/**
 * Serializes data by type
 *
 * @function serializeByType
 * @param {String} key param key
 * @param {Mixed} param reguest param
 * @returns {String}
 */
var serializeByType = function serializeByType(key, value) {
  if (isObject(value)) {
    return serializeObject(key, value);
  } else if (Array.isArray(value)) {
    return serializeArray(key, value);
  }
  return "".concat(key, "=").concat(value);
};

/**
 * Serializes request params into a string format
 *
 * @function serialize
 * @param {Object} params request params
 * @returns {String}
 */
var serialize = function serialize(params) {
  return Object.keys(params).map(function (key) {
    var value = params[key];
    if (isObject(value)) {
      return serializeObject(key, value);
    }
    if (Array.isArray(value)) {
      return serializeArray(key, value);
    }
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
  }).join('&');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serialize);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




var ActionMenu = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var label = _ref.label,
    handleDragStart = _ref.handleDragStart,
    isEditable = _ref.isEditable,
    children = _ref.children;
  var attrs = {
    className: (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
      'c-pb-action-menu': true,
      'c-pb-action-menu--editable': isEditable
    })
  };
  var handleMouseDown = isEditable ? handleDragStart : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", _extends({}, attrs, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-action-menu__name-wrapper",
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-action-menu__drag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "drag",
    extraClasses: "c-pb-action-menu__drag-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-action-menu__name"
  }, label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-action-menu__actions"
  }, children));
});
ActionMenu.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,
  handleDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isEditable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
ActionMenu.displayName = 'ActionMenu';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionMenu);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block-config-panel/block.config.panel.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block-config-panel/block.config.panel.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");




var BlockConfigPanel = function BlockConfigPanel(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    isClosed = _ref.isClosed,
    onCancel = _ref.onCancel,
    isDistractionFreeModeActive = _ref.isDistractionFreeModeActive,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    extraClasses: "c-pb-block-config-panel",
    type: _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__.CONFIG_PANEL_TYPE_RIGHT,
    onCancel: onCancel,
    title: title,
    subtitle: subtitle,
    isClosed: isClosed,
    isDistractionFreeModeActive: isDistractionFreeModeActive
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-block-config-panel__body"
  }, children));
};
BlockConfigPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  subtitle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isDistractionFreeModeActive: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
BlockConfigPanel.defaultProps = {
  children: null,
  subtitle: null,
  isDistractionFreeModeActive: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/block.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/block.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var Block = function Block(_ref) {
  var type = _ref.type,
    name = _ref.name,
    onDrag = _ref.onDrag,
    onDragStart = _ref.onDragStart,
    thumbnail = _ref.thumbnail,
    isDraggable = _ref.isDraggable,
    isHidden = _ref.isHidden;
  var handleDragStart = function handleDragStart(event) {
    event.dataTransfer.effectAllowed = 'copy';
    event.dataTransfer.setData('text/html', event.currentTarget);
  };
  var handleMouseDown = function handleMouseDown() {
    onDragStart(type);
  };
  var addNameEllipsisRef = function addNameEllipsisRef(node) {
    if (node && node.scrollWidth > node.clientWidth) {
      node.title = name;
      window.ibexa.helpers.tooltips.parse(node);
    }
  };
  var blockAttrs = {
    className: 'c-pb-toolbox-block',
    hidden: isHidden
  };
  var blockContentAttrs = {
    className: 'c-pb-toolbox-block__content'
  };
  if (isDraggable) {
    blockAttrs.className = "".concat(blockAttrs.className, " ").concat(blockAttrs.className, "--draggable");
    blockContentAttrs.draggable = 'true';
    blockContentAttrs.onDragStart = handleDragStart;
    blockContentAttrs.onDrag = onDrag;
    blockContentAttrs.onMouseDown = handleMouseDown;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", blockAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", blockContentAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox-block__drag"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "drag",
    extraClasses: "c-pb-toolbox-block__drag-icon ibexa-icon--tiny-small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox-block__type"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    customPath: thumbnail,
    extraClasses: "ibexa-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: addNameEllipsisRef,
    className: "c-pb-toolbox-block__label"
  }, name)));
};
Block.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onDrag: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isDraggable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isHidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/blocks.group.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/blocks.group.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var BlocksGroup = function BlocksGroup(_ref) {
  var title = _ref.title,
    children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var blocksGroupClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-pb-toolbox-blocks-group': true,
    'c-pb-toolbox-blocks-group--collapsed': isCollapsed
  });
  var iconName = isCollapsed ? 'caret-down' : 'caret-up';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: blocksGroupClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox-blocks-group__title-bar",
    onClick: function onClick() {
      return setIsCollapsed(function (isCollapsedPrev) {
        return !isCollapsedPrev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox-blocks-group__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox-blocks-group__toggler"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: iconName,
    extraClasses: "ibexa-icon--tiny-small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox-blocks-group__blocks"
  }, children));
};
BlocksGroup.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
BlocksGroup.defaultProps = {
  title: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlocksGroup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js");
/* harmony import */ var _iframe_iframe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iframe/iframe */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
/* harmony import */ var _action_menu_action_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../action-menu/action.menu */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/action-menu/action.menu.js");
/* harmony import */ var _config_popup_config_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-popup/config.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _date_picker_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../date-picker/date.picker */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js");
/* harmony import */ var _block_config_panel_block_config_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../block-config-panel/block.config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block-config-panel/block.config.panel.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _services_clipboard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/clipboard.service */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/clipboard.service.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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












var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa,
  bootstrap = _window.bootstrap,
  Popper = _window.Popper;
var SELECTOR_BLOCK_PREVIEW = '.c-pb-block-preview__inner';
var CLASS_ACTION_MENU_TO_RIGHT = 'c-pb-preview-block--action-menu-to-right';
var CLASS_PREVIEW = 'c-pb-block-preview';
var CLASS_PREVIEW_DRAGGING = 'c-pb-block-preview--is-dragging-out';
var CLASS_PREVIEW_HIGHLIGHT = 'c-pb-block-preview--highlighted';
var CLASS_TREE_ELEMENT_SELECTED = 'c-tb-list-item-single__element--selected';
var PreviewBlock = /*#__PURE__*/function (_Component) {
  function PreviewBlock(props) {
    var _this;
    _classCallCheck(this, PreviewBlock);
    _this = _callSuper(this, PreviewBlock, [props]);
    _this.pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
    _this.pageBuilderPreviewBlockOptionsMenu = document.querySelector('.ibexa-pb-preview-block-options-menu');
    _this._refPreviewComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refIframeComponent = null;
    _this._refActionMenuComponent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refDatePicker = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refOptionsMenuBtn = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refOptionsPopoverDOM = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.state = {
      shouldPopupWatchLoad: false,
      isConfigPopupVisible: false,
      isConfigDataSent: false,
      isConfigDistractionFreeModeActive: false,
      isUdwOpened: false,
      udwProps: null,
      isAirtimePopupOpened: false,
      maxHeight: 50,
      isActive: props.isActive,
      blockConfigPanelTitle: props.block.name || props.meta.config.name,
      isOptionsMenuOpened: false,
      automaticallyOpenBlockSettingsEnabled: ibexa.adminUiConfig.automaticallyOpenBlockSettings === 'enabled',
      isOpenedOnInit: false
    };
    _this.prepareConfigPopup = _this.prepareConfigPopup.bind(_this);
    _this.removeBlock = _this.removeBlock.bind(_this);
    _this.hideConfigPopup = _this.hideConfigPopup.bind(_this);
    _this.handleDragStart = _this.handleDragStart.bind(_this);
    _this.initDragging = _this.initDragging.bind(_this);
    _this.unMountBlock = _this.unMountBlock.bind(_this);
    _this.showConfigPopup = _this.showConfigPopup.bind(_this);
    _this.handleOnConfigPopupIframeLoad = _this.handleOnConfigPopupIframeLoad.bind(_this);
    _this.handleLoadAfterConfigFormSubmit = _this.handleLoadAfterConfigFormSubmit.bind(_this);
    _this.preventHidingConfigPopup = _this.preventHidingConfigPopup.bind(_this);
    _this.openUdw = _this.openUdw.bind(_this);
    _this.closeUdw = _this.closeUdw.bind(_this);
    _this.setConfigIframeRef = _this.setConfigIframeRef.bind(_this);
    _this.setConfigFormSubmittedState = _this.setConfigFormSubmittedState.bind(_this);
    _this.getConfigIframe = _this.getConfigIframe.bind(_this);
    _this.removeDragEventListeners = _this.removeDragEventListeners.bind(_this);
    _this.setActionMenuPosition = _this.setActionMenuPosition.bind(_this);
    _this.openAirtimePopup = _this.openAirtimePopup.bind(_this);
    _this.changeAirtime = _this.changeAirtime.bind(_this);
    _this.closeAirtimePopup = _this.closeAirtimePopup.bind(_this);
    _this.setAirtimePopupRef = _this.setAirtimePopupRef.bind(_this);
    _this.setActiveBlock = _this.setActiveBlock.bind(_this);
    _this.updatePanelTitle = _this.updatePanelTitle.bind(_this);
    _this.createPopperInstanceOrUpdate = _this.createPopperInstanceOrUpdate.bind(_this);
    _this.closeOptionsMenuOnClickOutside = _this.closeOptionsMenuOnClickOutside.bind(_this);
    _this.duplicateBlock = _this.duplicateBlock.bind(_this);
    _this.refreshBlock = _this.refreshBlock.bind(_this);
    _this.copyBlockToClipboard = _this.copyBlockToClipboard.bind(_this);
    _this.toggleTreeElementSelected = _this.toggleTreeElementSelected.bind(_this);
    _this.handleHoverInStructureBlock = _this.handleHoverInStructureBlock.bind(_this);
    _this.handleHoverOutStructureBlock = _this.handleHoverOutStructureBlock.bind(_this);
    return _this;
  }
  _inherits(PreviewBlock, _Component);
  return _createClass(PreviewBlock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      if (window.getComputedStyle(wrapper).position === 'static') {
        wrapper.style.position = 'relative';
      }
      wrapper.dataset.type = 'preview';
      wrapper.tabIndex = '0';
      wrapper.classList.add(CLASS_PREVIEW);
      wrapper.addEventListener('dragover', this.props.onDragOver, false);
      wrapper.addEventListener('dragstart', this.initDragging, false);
      wrapper.addEventListener('dragend', this.removeDragEventListeners, false);
      wrapper.addEventListener('mouseenter', this.setActionMenuPosition, false);
      wrapper.addEventListener('click', this.setActiveBlock, false);
      wrapper.addEventListener('mouseenter', this.handleHoverInStructureBlock, false);
      wrapper.addEventListener('mouseleave', this.handleHoverOutStructureBlock, false);
      window.ibexa.helpers.tooltips.parse(wrapper);
      if (this.props.meta.isNew && !this.props.meta.isReverted && this.state.automaticallyOpenBlockSettingsEnabled) {
        this.prepareConfigPopup(null, true);
      }
      this.previewIframeOffsetTop = this.props.previewWindow.frameElement.getBoundingClientRect().top;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      document.body.classList.toggle('ibexa-airtime-popup-visible', this.state.isAirtimePopupOpened);
      if (this.state.isAirtimePopupOpened) {
        var hourElement = this._refDatePicker.current.dateTimePickerWidget.flatpickrInstance.hourElement;
        hourElement.addEventListener('focusin', function () {
          var modalInstance = bootstrap.Modal.getInstance(_this2._refAirtimePopupComponent._refModal);
          if (modalInstance) {
            modalInstance._focustrap.deactivate();
            hourElement.addEventListener('focusout', function () {
              modalInstance._focustrap.activate();
            }, {
              once: true
            });
          }
        }, false);
      }
      if (this.state.isOptionsMenuOpened !== prevState.isOptionsMenuOpened) {
        if (this.state.isOptionsMenuOpened) {
          document.body.addEventListener('click', this.closeOptionsMenuOnClickOutside, false);
          this.props.previewWindow.document.body.addEventListener('click', this.closeOptionsMenuOnClickOutside, false);
        } else {
          document.body.removeEventListener('click', this.closeOptionsMenuOnClickOutside);
          this.props.previewWindow.document.body.removeEventListener('click', this.closeOptionsMenuOnClickOutside);
        }
      }
      this._refActionMenuComponent.current.classList.toggle('c-pb-action-menu--visible', this.state.isOptionsMenuOpened);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      wrapper.removeEventListener('mouseenter', this.showActionMenu);
      wrapper.removeEventListener('dragover', this.props.onDragOver);
      wrapper.removeEventListener('dragend', this.removeDragEventListeners);
      wrapper.removeEventListener('mouseenter', this.setActionMenuPosition);
      wrapper.removeEventListener('click', this.setActiveBlock);
      wrapper.removeEventListener('mouseenter', this.handleHoverInStructureBlock, false);
      wrapper.removeEventListener('mouseleave', this.handleHoverOutStructureBlock, false);
    }

    /**
     * Finds block preview wrapper
     *
     * @method findBlockWrapper
     * @param {HTMLElement} block
     * @returns {HTMLElement|undefined}
     */
  }, {
    key: "findBlockWrapper",
    value: function findBlockWrapper(block) {
      if (!block) {
        return;
      }
      return block.dataset.blockId ? block : block.closest('[data-ez-block-id]');
    }
  }, {
    key: "getConfigIframe",
    value: function getConfigIframe() {
      return this._refIframeComponent && this._refIframeComponent._refIframe;
    }
  }, {
    key: "getAirtimePopup",
    value: function getAirtimePopup() {
      return this._refAirtimePopupComponent && this._refAirtimePopupComponent._refModal;
    }
  }, {
    key: "setActiveBlock",
    value: function setActiveBlock() {
      var _this$props = this.props,
        onClick = _this$props.onClick,
        block = _this$props.block;
      onClick(block.id);
    }
  }, {
    key: "setActionMenuPosition",
    value: function setActionMenuPosition(_ref) {
      var currentTarget = _ref.currentTarget;
      if (currentTarget.querySelector('.c-pb-action-menu')) {
        var rect = currentTarget.getBoundingClientRect();
        var shouldAlignActionMenuToRight = rect.left > window.innerWidth / 2;
        var actionMenuTopPosition = rect.y < 0 ? Math.abs(rect.y) : 0;
        currentTarget.querySelector('.c-pb-action-menu').style.top = "".concat(actionMenuTopPosition, "px");
        currentTarget.classList.toggle(CLASS_ACTION_MENU_TO_RIGHT, shouldAlignActionMenuToRight);
      }
    }
  }, {
    key: "openAirtimePopup",
    value: function openAirtimePopup(_ref2) {
      var detail = _ref2.detail;
      this.airtimeDate = detail.airtime;
      this.setState({
        isAirtimePopupOpened: true,
        airtimePopupData: {
          onSubmit: detail.onSubmit
        }
      });
    }
  }, {
    key: "applyAirtime",
    value: function applyAirtime(callback) {
      if (!this.airtimeDate) {
        return;
      }
      this.closeAirtimePopup();
      callback(this.airtimeDate);
    }
  }, {
    key: "changeAirtime",
    value: function changeAirtime(airtime) {
      this.airtimeDate = airtime;
    }
  }, {
    key: "setAirtimePopupRef",
    value: function setAirtimePopupRef(popup) {
      this._refAirtimePopupComponent = popup;
    }
  }, {
    key: "closeAirtimePopup",
    value: function closeAirtimePopup() {
      this.forceAirtimePopupBackdropHidden();
      this.setState({
        isAirtimePopupOpened: false
      });
    }
  }, {
    key: "openUdw",
    value: function openUdw(_ref3) {
      var _this3 = this;
      var detail = _ref3.detail;
      var udwProps = _objectSpread(_objectSpread({}, detail), {}, {
        onCancel: function onCancel() {
          var _detail$onCancel;
          detail === null || detail === void 0 || (_detail$onCancel = detail.onCancel) === null || _detail$onCancel === void 0 || _detail$onCancel.call(detail);
          _this3.closeUdw();
        },
        onConfirm: function onConfirm(items) {
          var _detail$onConfirm;
          detail === null || detail === void 0 || (_detail$onConfirm = detail.onConfirm) === null || _detail$onConfirm === void 0 || _detail$onConfirm.call(detail, items);
          _this3.closeUdw();
        }
      });
      this.setState({
        isUdwOpened: true,
        udwProps: udwProps
      });
    }
  }, {
    key: "closeUdw",
    value: function closeUdw() {
      this.setState({
        isUdwOpened: false,
        udwProps: null
      });
    }
  }, {
    key: "unMountBlock",
    value: function unMountBlock() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      window.ibexa.helpers.tooltips.hideAll(wrapper);
      this.props.root.unmount();
      wrapper.parentNode.removeChild(wrapper);
    }
  }, {
    key: "removeBlock",
    value: function removeBlock() {
      var _this4 = this;
      var emitChangeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      var blockFlaggedToRemove = wrapper.classList.contains('c-pb-block-preview--is-removing');
      if (blockFlaggedToRemove) {
        return;
      }
      this.props.onRemove(this.props.block, emitChangeEvent);
      window.ibexa.helpers.tooltips.hideAll(wrapper);
      wrapper.classList.add('c-pb-block-preview--is-removing');
      wrapper.addEventListener('animationend', function (event) {
        if (event.animationName === 'remove-field') {
          _this4.unMountBlock();
        }
      }, false);
      this.setState({
        isOptionsMenuOpened: false
      });
    }
  }, {
    key: "setConfigFormSubmittedState",
    value: function setConfigFormSubmittedState() {
      this.getConfigIframe().onload = this.handleLoadAfterConfigFormSubmit;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          isConfigDataSent: true,
          shouldPopupWatchLoad: true
        });
      });
    }
  }, {
    key: "handleLoadAfterConfigFormSubmit",
    value: function handleLoadAfterConfigFormSubmit() {
      var _this5 = this;
      var iframe = this.getConfigIframe();
      var iframeDocument = iframe.contentDocument;
      var blockConfiguration = iframeDocument.querySelector('[name="BlockConfiguration"]');
      var blockVisible = iframeDocument.querySelector('[name="BlockVisible"]');
      if (!blockConfiguration) {
        this.setState(function (state) {
          return _objectSpread(_objectSpread({}, state), {}, {
            isConfigDataSent: false,
            shouldPopupWatchLoad: false
          });
        }, function () {
          _this5.attachConfigPopupEventHandlers();
        });
        return;
      }
      var blockData = JSON.parse(blockConfiguration.content);
      var isVisible = parseInt(blockVisible.content, 10);
      iframe.onload = null;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false,
          isOpenedOnInit: false
        });
      }, function () {
        return _this5.props.onBlockDataUpdate({
          blockData: blockData,
          isVisible: isVisible
        });
      });
    }
  }, {
    key: "handleOnConfigPopupIframeLoad",
    value: function handleOnConfigPopupIframeLoad(iframe) {
      if (this.state.isUdwOpened) {
        return;
      }
      this.showConfigPopup(iframe);
    }
  }, {
    key: "renderConfigPopup",
    value: function renderConfigPopup() {
      var _this$state = this.state,
        isConfigPopupVisible = _this$state.isConfigPopupVisible,
        isConfigDataSent = _this$state.isConfigDataSent,
        blockConfigPanelTitle = _this$state.blockConfigPanelTitle,
        isConfigDistractionFreeModeActive = _this$state.isConfigDistractionFreeModeActive,
        isOpenedOnInit = _this$state.isOpenedOnInit;
      var _this$props2 = this.props,
        block = _this$props2.block,
        blockNo = _this$props2.blockNo,
        meta = _this$props2.meta;
      var isDuplicated = meta.isDuplicated;
      var duplicatedBlockTitle = Translator.trans(/*@Desc("%block_name% [duplicate]")*/'block.name.duplicate', {
        block_name: blockConfigPanelTitle
      }, 'ibexa_page_builder');
      var title = isOpenedOnInit && isDuplicated ? duplicatedBlockTitle : blockConfigPanelTitle;
      if (!isConfigPopupVisible) {
        return null;
      }
      var iframeAttrs = {
        ref: this.setConfigIframeRef,
        src: 'about:blank',
        id: block.id,
        name: block.id,
        title: block.id,
        onLoad: isConfigDataSent ? this.handleLoadAfterConfigFormSubmit : this.handleOnConfigPopupIframeLoad,
        isVisible: !isConfigDataSent,
        isLoading: isConfigDataSent
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_block_config_panel_block_config_panel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onCancel: this.hideConfigPopup,
        title: title,
        subtitle: blockNo,
        isClosed: !isConfigPopupVisible,
        isDistractionFreeModeActive: isConfigDistractionFreeModeActive,
        isOpenedOnInit: isOpenedOnInit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, iframeAttrs, {
        fs: true
      }))), this.pageBuilderConfigPanelWrapper);
    }
  }, {
    key: "forceAirtimePopupBackdropHidden",
    value: function forceAirtimePopupBackdropHidden() {
      var popup = this.getAirtimePopup();
      this.forcePopupBackdropHidden(popup);
    }
  }, {
    key: "forcePopupBackdropHidden",
    value: function forcePopupBackdropHidden(popup) {
      if (popup) {
        window.bootstrap.Modal.getOrCreateInstance(popup).hide();
      }
    }
  }, {
    key: "hideConfigPopup",
    value: function hideConfigPopup() {
      var blockConfigPanelTitle = this.props.block.name || this.props.meta.config.name;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false,
          isOpenedOnInit: false,
          blockConfigPanelTitle: blockConfigPanelTitle
        });
      });
    }
  }, {
    key: "showConfigPopup",
    value: function showConfigPopup() {
      if (!this.state.shouldPopupWatchLoad) {
        return;
      }
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        });
      }, this.attachConfigPopupEventHandlers);
    }
  }, {
    key: "preventHidingConfigPopup",
    value: function preventHidingConfigPopup(event) {
      event.preventDefault();
    }
  }, {
    key: "prepareConfigPopup",
    value: function prepareConfigPopup(event) {
      var _this6 = this;
      var isOpenedOnInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var actionBtn = event === null || event === void 0 ? void 0 : event.currentTarget;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isConfigPopupVisible: true,
          shouldPopupWatchLoad: true,
          isOpenedOnInit: isOpenedOnInit
        });
      }, function () {
        actionBtn === null || actionBtn === void 0 || actionBtn.blur();
        _this6.props.onConfigPopupOpen(_this6.props.block);
      });
    }
  }, {
    key: "updatePanelTitle",
    value: function updatePanelTitle(_ref4) {
      var currentTarget = _ref4.currentTarget;
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          blockConfigPanelTitle: currentTarget.value
        });
      });
    }
  }, {
    key: "attachConfigPopupEventHandlers",
    value: function attachConfigPopupEventHandlers() {
      var _this7 = this;
      if (this.state.isConfigDataSent) {
        return;
      }
      var iframeDoc = this.getConfigIframe().contentDocument;
      iframeDoc.body.addEventListener('ibexa-pb:extra-modal:render', function (event) {
        var renderModal = event.detail.renderModal;
        var openedConfigPanel = document.querySelector('.ibexa-pb-config-panel:not(.ibexa-pb-config-panel--closed)');
        var modal = renderModal(document.body);
        var modalInstance = bootstrap.Modal.getOrCreateInstance(modal, {
          backdrop: false
        });
        var configPanelInitialZIndex = window.getComputedStyle(openedConfigPanel).zIndex;
        modal.addEventListener('hide.bs.modal', function () {
          openedConfigPanel.style.zIndex = configPanelInitialZIndex;
        }, false);
        modal.addEventListener('show.bs.modal', function () {
          openedConfigPanel.style.zIndex = 1;
        }, false);
        modalInstance.show();
      }, false);
      iframeDoc.body.addEventListener('ibexa-open-udw', this.openUdw, false);
      iframeDoc.body.addEventListener('ibexa-open-airtime-popup', this.openAirtimePopup, false);
      iframeDoc.body.addEventListener('ibexa-distraction-free:enable', function () {
        return _this7.setState({
          isConfigDistractionFreeModeActive: true
        });
      }, false);
      iframeDoc.body.addEventListener('ibexa-distraction-free:disable', function () {
        return _this7.setState({
          isConfigDistractionFreeModeActive: false
        });
      }, false);
      iframeDoc.querySelector('[name="block_configuration"]').addEventListener('submit', this.setConfigFormSubmittedState, false);
      iframeDoc.querySelector('[data-form-action="discard"]').addEventListener('click', this.hideConfigPopup, false);
      iframeDoc.querySelector('[name="block_configuration[name]"]').addEventListener('input', this.updatePanelTitle, false);
    }
  }, {
    key: "initDragging",
    value: function initDragging(event) {
      var preview = event.currentTarget.querySelector(SELECTOR_BLOCK_PREVIEW);
      var image = document.querySelector("[data-ibexa-toolbox-block-type=\"".concat(this.props.meta.config.type, "\"]"));
      image.hidden = false;
      if (preview) {
        event.currentTarget.classList.remove(CLASS_PREVIEW_HIGHLIGHT);
        event.currentTarget.classList.add(CLASS_PREVIEW_DRAGGING);
        event.currentTarget.ondragover = function () {
          return true;
        };
        event.currentTarget.addEventListener('drag', this.props.onDrag, false);
      }
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', image);
      event.dataTransfer.setDragImage(image, 0, 0);
    }
  }, {
    key: "removeDragEventListeners",
    value: function removeDragEventListeners(_ref5) {
      var currentTarget = _ref5.currentTarget;
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      currentTarget.classList.remove(CLASS_PREVIEW_DRAGGING);
      wrapper.removeEventListener('drag', this.props.onDrag);
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart() {
      var wrapper = this.findBlockWrapper(this._refPreviewComponent.current);
      var _this$props3 = this.props,
        block = _this$props3.block,
        meta = _this$props3.meta;
      var preview = wrapper.querySelector(SELECTOR_BLOCK_PREVIEW);
      var wrapperClasses = wrapper.className.split(' ').filter(function (wrapperClass) {
        return wrapperClass !== '';
      });
      meta.preview = preview.innerHTML;
      wrapper.draggable = true;
      this.props.onDragStart({
        block: block,
        meta: meta,
        wrapperClasses: wrapperClasses,
        unMountBlock: this.unMountBlock
      });
    }
  }, {
    key: "handleHoverInStructureBlock",
    value: function handleHoverInStructureBlock(_ref6) {
      var currentTarget = _ref6.currentTarget;
      this.toggleTreeElementSelected(currentTarget, true);
    }
  }, {
    key: "handleHoverOutStructureBlock",
    value: function handleHoverOutStructureBlock(_ref7) {
      var currentTarget = _ref7.currentTarget;
      this.toggleTreeElementSelected(currentTarget, false);
    }
  }, {
    key: "toggleTreeElementSelected",
    value: function toggleTreeElementSelected(currentTarget, isHovered) {
      var ezBlockId = currentTarget.dataset.ezBlockId;
      var structureElement = document.querySelector(".c-tb-list-item-single[data-block-id=\"".concat(ezBlockId, "\"]"));
      if (structureElement) {
        var singleItemElement = structureElement.querySelector('& > .c-tb-list-item-single__element');
        singleItemElement.classList.toggle(CLASS_TREE_ELEMENT_SELECTED, isHovered);
      }
    }
  }, {
    key: "renderActionMenu",
    value: function renderActionMenu() {
      var _this$props4 = this.props,
        block = _this$props4.block,
        isEditable = _this$props4.isEditable,
        isAvailable = _this$props4.isAvailable,
        label = _this$props4.label;
      var props = {
        label: label,
        handleDragStart: this.handleDragStart,
        blockId: block.id,
        isEditable: isEditable && isAvailable,
        ref: this._refActionMenuComponent
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_menu_action_menu__WEBPACK_IMPORTED_MODULE_5__["default"], props, this.renderActions());
    }
  }, {
    key: "duplicateBlock",
    value: function duplicateBlock() {
      this.setState({
        isOptionsMenuOpened: false
      });
      this.props.onDuplicate(this.props.block);
    }
  }, {
    key: "refreshBlock",
    value: function refreshBlock() {
      var _this$props5 = this.props,
        block = _this$props5.block,
        meta = _this$props5.meta;
      this.setState({
        isOptionsMenuOpened: false
      });
      this.props.onBlockDataUpdate({
        blockData: block,
        isVisible: meta.isVisible
      });
    }
  }, {
    key: "copyBlockToClipboard",
    value: function copyBlockToClipboard() {
      var block = this.props.block;
      (0,_services_clipboard_service__WEBPACK_IMPORTED_MODULE_11__.setItemClipboard)(block);
      this.setState({
        isOptionsMenuOpened: false
      });
    }
  }, {
    key: "closeOptionsMenuOnClickOutside",
    value: function closeOptionsMenuOnClickOutside(event) {
      var isClickedInsidePopupMenu = this._refOptionsPopoverDOM.current.contains(event.target);
      var isClickedMenuOptionsBtn = this._refOptionsMenuBtn.contains(event.target);
      if (!isClickedInsidePopupMenu && !isClickedMenuOptionsBtn) {
        event.preventDefault();
        this.setState({
          isOptionsMenuOpened: false
        });
      }
    }
  }, {
    key: "createPopperInstanceOrUpdate",
    value: function createPopperInstanceOrUpdate(btnNode) {
      var _this8 = this;
      if (!btnNode || !this._refOptionsPopoverDOM.current) {
        return;
      }
      if (!this._refOptionsPopoverInstance) {
        var newPoperInstance = Popper.createPopper(btnNode, this._refOptionsPopoverDOM.current, {
          placement: 'bottom',
          modifiers: [{
            name: 'offset',
            options: {
              offset: function offset(_ref8) {
                var placement = _ref8.placement,
                  popper = _ref8.popper;
                if (placement === 'left' || placement === 'right') {
                  return [popper.height / 2 - 30, _this8.previewIframeOffsetTop + 8];
                }
                if (placement === 'top') {
                  return [0, 8 - _this8.previewIframeOffsetTop];
                }
                return [0, _this8.previewIframeOffsetTop + 8];
              }
            }
          }, {
            name: 'flip',
            options: {
              fallbackPlacements: ['top', 'left', 'right']
            }
          }]
        });
        this._refOptionsPopoverInstance = newPoperInstance;
      } else {
        this._refOptionsPopoverInstance.update();
      }
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var isEditable = this.props.isEditable;
      var popupMenuClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_10__.createCssClassNames)({
        'ibexa-popup-menu c-pb-preview-block__options-menu': true,
        'c-pb-preview-block__options-menu--opened': this.state.isOptionsMenuOpened
      });
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
        className: popupMenuClass,
        ref: this._refOptionsPopoverDOM
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "ibexa-popup-menu__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "ibexa-popup-menu__item-content",
        onClick: this.copyBlockToClipboard
      }, Translator.trans(/*@Desc("Copy")*/'block.copy', {}, 'ibexa_page_builder'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "ibexa-popup-menu__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "ibexa-popup-menu__item-content",
        onClick: this.duplicateBlock
      }, Translator.trans(/*@Desc("Duplicate")*/'block.duplicate', {}, 'ibexa_page_builder'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "ibexa-popup-menu__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "ibexa-popup-menu__item-content",
        onClick: this.refreshBlock
      }, Translator.trans(/*@Desc("Refresh")*/'block.refresh', {}, 'ibexa_page_builder'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "ibexa-popup-menu__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        disabled: !isEditable,
        type: "button",
        className: "ibexa-popup-menu__item-content",
        onClick: this.removeBlock
      }, Translator.trans(/*@Desc("Delete")*/'block.delete', {}, 'ibexa_page_builder')))), this.pageBuilderPreviewBlockOptionsMenu);
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var _this9 = this;
      var block = this.props.block;
      var delayShow = 400;
      var delayHide = 0;
      var moveUp = function moveUp() {
        document.body.dispatchEvent(new CustomEvent('ibexa-pb-blocks:move', {
          detail: {
            blockId: block.id,
            action: 'move-up'
          }
        }));
      };
      var moveDown = function moveDown() {
        document.body.dispatchEvent(new CustomEvent('ibexa-pb-blocks:move', {
          detail: {
            blockId: block.id,
            action: 'move-down'
          }
        }));
      };
      var moveUpAttrs = {
        className: 'c-pb-preview-block__action ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text c-pb-action-menu__move-up',
        'data-tooltip-iframe-selector': '#page-builder-preview',
        title: Translator.trans(/*@Desc("Move up block")*/'block.move.up', {}, 'ibexa_page_builder'),
        onClick: moveUp,
        'data-delay-show': delayShow,
        'data-delay-hide': delayHide
      };
      var moveDownAttrs = {
        className: 'c-pb-preview-block__action ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text c-pb-action-menu__move-down',
        'data-tooltip-iframe-selector': '#page-builder-preview',
        title: Translator.trans(/*@Desc("Move down block")*/'block.move.down', {}, 'ibexa_page_builder'),
        onClick: moveDown,
        'data-delay-show': delayShow,
        'data-delay-hide': delayHide
      };
      var settingAttrs = {
        className: 'c-pb-preview-block__action ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text',
        'data-tooltip-iframe-selector': '#page-builder-preview',
        title: Translator.trans(/*@Desc("Block settings")*/'block.settings', {}, 'ibexa_page_builder'),
        onClick: this.prepareConfigPopup,
        'data-delay-show': delayShow,
        'data-delay-hide': delayHide
      };
      var optionsAttrs = {
        className: 'c-pb-preview-block__action ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text',
        'data-tooltip-iframe-selector': '#page-builder-preview',
        ref: function ref(node) {
          _this9._refOptionsMenuBtn = node;
          if (node) {
            _this9.createPopperInstanceOrUpdate(node);
          }
        },
        onClick: function onClick() {
          _this9.setState(function (state) {
            return _objectSpread(_objectSpread({}, state), {}, {
              isOptionsMenuOpened: !state.isOptionsMenuOpened
            });
          });
        }
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, moveUpAttrs, {
        type: "button"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "back",
        extraClasses: "ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, moveDownAttrs, {
        type: "button"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "back",
        extraClasses: "ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, settingAttrs, {
        type: "button"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "settings-block",
        extraClasses: "ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", _extends({}, optionsAttrs, {
        type: "button"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "options",
        extraClasses: "ibexa-icon--small"
      })));
    }
  }, {
    key: "setConfigIframeRef",
    value: function setConfigIframeRef(component) {
      this._refIframeComponent = component;
    }
  }, {
    key: "renderUdw",
    value: function renderUdw() {
      var UniversalDiscovery = ibexa.modules.UniversalDiscovery;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UniversalDiscovery, this.state.udwProps);
    }
  }, {
    key: "renderActionBtns",
    value: function renderActionBtns() {
      var cancelLabel = Translator.trans(/*@Desc("Cancel")*/'airtime_popup.discard.btn', {}, 'ibexa_page_builder');
      var submitLabel = Translator.trans(/*@Desc("Submit")*/'airtime_popup.submit.btn', {}, 'ibexa_page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--filled-info",
        onClick: this.applyAirtime.bind(this, this.state.airtimePopupData.onSubmit),
        type: "button"
      }, submitLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn ibexa-btn ibexa-btn--info",
        onClick: this.closeAirtimePopup,
        type: "button"
      }, cancelLabel));
    }
  }, {
    key: "renderAirtimePopup",
    value: function renderAirtimePopup() {
      var popupTitle = Translator.trans(/*@Desc("Content airtime settings")*/'airtime_popup.title', {}, 'ibexa_page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_config_popup_config_popup__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: this.setAirtimePopupRef,
        onClose: this.closeAirtimePopup,
        isVisible: true,
        isLoading: false,
        additionalClasses: "c-pb-config-popup--airtime",
        name: popupTitle,
        footer: this.renderActionBtns()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_date_picker_date_picker__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onDateChange: this.changeAirtime,
        airtime: this.airtimeDate,
        ref: this._refDatePicker
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        meta = _this$props6.meta,
        isAvailable = _this$props6.isAvailable,
        udwContainer = _this$props6.udwContainer,
        airtimeContainer = _this$props6.airtimeContainer,
        label = _this$props6.label;
      var _this$state2 = this.state,
        isUdwOpened = _this$state2.isUdwOpened,
        isAirtimePopupOpened = _this$state2.isAirtimePopupOpened,
        automaticallyOpenBlockSettingsEnabled = _this$state2.automaticallyOpenBlockSettingsEnabled,
        isOpenedOnInit = _this$state2.isOpenedOnInit;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isUdwOpened && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(this.renderUdw(), udwContainer), isAirtimePopupOpened && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(this.renderAirtimePopup(), airtimeContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_preview__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: this._refPreviewComponent,
        preview: meta.preview,
        name: meta.config.name,
        label: label,
        isValid: meta.isValid,
        isVisible: meta.isVisible,
        shouldDisplayError: meta.shouldDisplayError,
        isAvailable: isAvailable,
        removeBlock: this.removeBlock,
        hasInsertAnimation: meta.isReverted,
        isConfigPanelOpenedOnInit: isOpenedOnInit && automaticallyOpenBlockSettingsEnabled
      }), isAvailable && this.renderActionMenu(), isAvailable && this.renderConfigPopup(), this.renderOptions());
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
PreviewBlock.propTypes = {
  onDragOver: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onBlockDataUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  block: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  root: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    config: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
    preview: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    shouldDisplayError: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
    isValid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
    isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
    isNew: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isReverted: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
    isDuplicated: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
  }).isRequired,
  onConfigPopupOpen: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  udwContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element).isRequired,
  onDrag: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  isEditable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  isActive: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  isAvailable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  airtimeContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element).isRequired,
  onDuplicate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  previewWindow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  blockNo: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired
};
PreviewBlock.defaultProps = {
  isAvailable: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewBlock);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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


var _window = window,
  Translator = _window.Translator;
var CLASS_INVISIBLE = 'ibexa-mark-invisible';
var setInvisibleClass = function setInvisibleClass(preview, isVisible) {
  var container = document.createElement('div');
  container.insertAdjacentHTML('beforeend', preview);
  _toConsumableArray(container.childNodes).forEach(function (child) {
    if (child instanceof HTMLElement) {
      child.classList.toggle(CLASS_INVISIBLE, !isVisible);
    }
  });
  return container.innerHTML;
};
var Preview = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var hasInsertAnimationProp = _ref.hasInsertAnimation,
    previewProp = _ref.preview,
    isValid = _ref.isValid,
    shouldDisplayError = _ref.shouldDisplayError,
    isAvailable = _ref.isAvailable,
    removeBlock = _ref.removeBlock,
    label = _ref.label,
    isVisible = _ref.isVisible,
    isConfigPanelOpenedOnInit = _ref.isConfigPanelOpenedOnInit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasInsertAnimationProp),
    _useState2 = _slicedToArray(_useState, 2),
    hasInsertAnimation = _useState2[0],
    setHasInsertAnimation = _useState2[1];
  var baseClassName = 'c-pb-block-preview__inner';
  var onRef = function onRef(node) {
    node === null || node === void 0 || node.addEventListener('animationend', function () {
      if (hasInsertAnimation) {
        setHasInsertAnimation(false);
      }
    });
    ref.current = node;
  };
  var className = "".concat(baseClassName);
  var preview = previewProp.trim();
  var getPreviewClassName = function getPreviewClassName() {
    if (!isAvailable) {
      return 'c-pb-block-preview__unavailable-block-content';
    }
    if (preview.length) {
      return className;
    }
    return "".concat(className, " ").concat(baseClassName, "--empty");
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (preview.length === 0) {
      return;
    }
    var range = document.createRange();
    range.selectNode(ref.current);
    preview = setInvisibleClass(preview, isVisible);
    var documentFragment = range.createContextualFragment(preview);
    ref.current.innerHTML = '';
    ref.current.append(documentFragment);
  }, [preview]);
  if (hasInsertAnimation) {
    className = "".concat(className, " ").concat(baseClassName, "--has-insert-animation");
  }
  if (!isValid && shouldDisplayError && !isConfigPanelOpenedOnInit) {
    className = "".concat(className, " ").concat(baseClassName, "--invalid");
  }
  if (!isAvailable) {
    className = "".concat(className, " ").concat(baseClassName, "--unavailable");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-mask"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-mask-title"
    }, Translator.trans(/*@Desc("This element is not available in this page")*/'block.no_availability.title', {}, 'ibexa_page_builder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-mask-content"
    }, Translator.trans(/*@Desc("You have to delete it to publish")*/'block.no_availability.content', {}, 'ibexa_page_builder')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: "c-pb-block-preview__delete-unavailable-block",
      onClick: removeBlock
    }, Translator.trans(/*@Desc("Delete")*/'block.no_availability.delete', {}, 'ibexa_page_builder'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-block-preview__unavailable-block-content",
      ref: onRef
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: getPreviewClassName()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: onRef
  }, preview.length ? null : label));
});
Preview.displayName = 'Preview';
Preview.propTypes = {
  preview: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  shouldDisplayError: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isValid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isAvailable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  removeBlock: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  hasInsertAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isConfigPanelOpenedOnInit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Preview.defaultProps = {
  isConfigPanelOpenedOnInit: false,
  isAvailable: false,
  removeBlock: function removeBlock() {},
  hasInsertAnimation: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preview);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/config-popup/config.popup.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



var _window = window,
  Translator = _window.Translator;
var CLASS_MODAL_OPEN = 'modal-open';
var MODAL_CONFIG = {
  backdrop: 'static',
  keyboard: true
};
var ConfigPopup = /*#__PURE__*/function (_Component) {
  function ConfigPopup(props) {
    var _this;
    _classCallCheck(this, ConfigPopup);
    _this = _callSuper(this, ConfigPopup, [props]);
    _this._refModal = null;
    _this.setModalRef = _this.setModalRef.bind(_this);
    _this.onKeyUp = _this.onKeyUp.bind(_this);
    _this.state = {
      currentProps: {
        isVisible: props.isVisible,
        isLoading: props.isLoading
      },
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    return _this;
  }
  _inherits(ConfigPopup, _Component);
  return _createClass(ConfigPopup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var show = this.state.isVisible;
      if (show) {
        var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
          focus: this.props.hasFocus
        }));
        bootstrapModal.show();
        this.attachModalEventHandlers();
      }
      window.ibexa.helpers.tooltips.parse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var show = this.state.isVisible;
      var bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(this._refModal, _objectSpread(_objectSpread({}, MODAL_CONFIG), {}, {
        focus: this.props.hasFocus
      }));
      if (show) {
        bootstrapModal.show();
        this.attachModalEventHandlers();
      } else {
        bootstrapModal.hide();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.bootstrap.Modal.getOrCreateInstance(this._refModal).hide();
      document.body.classList.remove(CLASS_MODAL_OPEN);
    }
  }, {
    key: "attachModalEventHandlers",
    value: function attachModalEventHandlers() {
      this._refModal.addEventListener('keyup', this.onKeyUp);
      this._refModal.addEventListener('hidden.bs.modal', this.props.onClose);
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var originalEvent = event.originalEvent;
      var escKeyCode = 27;
      var escKeyPressed = originalEvent && (originalEvent.which === escKeyCode || originalEvent.keyCode === escKeyCode);
      if (escKeyPressed) {
        this.props.onClose();
      }
    }
  }, {
    key: "setModalRef",
    value: function setModalRef(component) {
      this._refModal = component;
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      if (!this.hasSubtitle()) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "ibexa-modal__subheader c-pb-config-popup__subtitle"
      }, this.props.type);
    }
  }, {
    key: "hasSubtitle",
    value: function hasSubtitle() {
      var type = this.props.type;
      return !!type;
    }
  }, {
    key: "render",
    value: function render() {
      var isVisible = this.state.isVisible;
      var additionalClasses = this.props.additionalClasses;
      var modalAttrs = {
        className: 'c-pb-config-popup modal fade ibexa-modal',
        ref: this.setModalRef,
        tabIndex: this.props.hasFocus ? '-1' : undefined
      };
      var closeBtnLabel = Translator.trans(/*@Desc("Close")*/'config_popup.close.label', {}, 'ibexa_page_builder');
      document.body.classList.toggle(CLASS_MODAL_OPEN, isVisible);
      if (this.hasSubtitle()) {
        modalAttrs.className = "".concat(modalAttrs.className, " ibexa-modal--has-subtitle");
      }
      if (additionalClasses) {
        modalAttrs.className = "".concat(modalAttrs.className, " ").concat(additionalClasses);
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", modalAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-dialog c-pb-config-popup__dialog modal-lg",
        role: "dialog"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
        className: "modal-title"
      }, this.props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "close c-pb-config-popup__btn--close",
        "data-bs-dismiss": "modal",
        "aria-label": closeBtnLabel,
        onClick: this.props.onClose,
        title: closeBtnLabel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "discard",
        extraClasses: "ibexa-icon--small-medium"
      }))), this.renderSubtitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-body c-pb-config-popup__body"
      }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "modal-footer"
      }, this.props.footer))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isVisible !== prevState.currentProps.isVisible || nextProps.isLoading !== prevState.currentProps.isLoading) {
        return {
          currentProps: {
            isVisible: nextProps.isVisible,
            isLoading: nextProps.isLoading
          },
          isVisible: nextProps.isVisible,
          isLoading: nextProps.isLoading
        };
      }
      return null;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
ConfigPopup.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  hasFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  additionalClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  footer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)
};
ConfigPopup.defaultProps = {
  isVisible: false,
  isLoading: true,
  type: null,
  hasFocus: true,
  additionalClasses: null,
  footer: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigPopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/date-picker/date.picker.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
var DatePicker = /*#__PURE__*/function (_PureComponent) {
  function DatePicker(props) {
    var _this;
    _classCallCheck(this, DatePicker);
    _this = _callSuper(this, DatePicker, [props]);
    _this.setPickerRef = _this.setPickerRef.bind(_this);
    _this.updateAirtime = _this.updateAirtime.bind(_this);
    _this.clearAirtime = _this.clearAirtime.bind(_this);
    return _this;
  }
  _inherits(DatePicker, _PureComponent);
  return _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var airtime = this.props.airtime;
      var userTimezoneCurrentTime = convertDateToTimezone(new Date());
      var selectedDateWithUserTimezone = airtime ? convertDateToTimezone(airtime * 1000) : userTimezoneCurrentTime;
      var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      var minDate = new Date(this.roundMinutes(convertDateToTimezone(userTimezoneCurrentTime, browserTimezone, true)));
      var defaultDate = new Date(this.roundMinutes(convertDateToTimezone(selectedDateWithUserTimezone, browserTimezone, true)));
      if (defaultDate < minDate) {
        defaultDate = minDate;
      }
      minDate.setSeconds(0);
      this.dateTimePickerWidget = new ibexa.core.DateTimePicker({
        container: this._refPicker,
        onChange: this.updateAirtime,
        flatpickrConfig: {
          enableTime: true,
          minDate: minDate,
          defaultDate: defaultDate,
          inline: true
        }
      });
      this.dateTimePickerWidget.init();
    }
  }, {
    key: "roundMinutes",
    value: function roundMinutes(date) {
      var roundDiff = date.minute() % 5;
      if (roundDiff) {
        return date.add(5 - roundDiff, 'minutes');
      }
      return date;
    }
  }, {
    key: "updateAirtime",
    value: function updateAirtime(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        timestamp = _ref2[0];
      this.props.onDateChange(timestamp);
    }
  }, {
    key: "clearAirtime",
    value: function clearAirtime() {
      this.dateTimePickerWidget.clear();
    }
  }, {
    key: "setPickerRef",
    value: function setPickerRef(ref) {
      this._refPicker = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var label = Translator.trans(/*@Desc("Date and time")*/'date_picker.label', {}, 'ibexa_page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-date-picker",
        ref: this.setPickerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-pb-date-picker__label ibexa-label"
      }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-date-picker__input-wrapper ibexa-date-time-picker ibexa-input-text-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        type: "text",
        className: "c-pb-date-picker__input ibexa-input ibexa-input--date form-control ibexa-date-time-picker__input flatpickr flatpickr-date-input",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "ibexa-input-text-wrapper__actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--clear",
        tabIndex: "-1",
        onClick: this.clearAirtime
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "discard",
        extraClasses: "ibexa-icon--tiny"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--no-text ibexa-input-text-wrapper__action-btn ibexa-input-text-wrapper__action-btn--calendar",
        tabIndex: "-1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "date",
        extraClasses: "ibexa-icon--small"
      })))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
DatePicker.propTypes = {
  onDateChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  airtime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatePicker);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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
var ErrorBoundary = /*#__PURE__*/function (_Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false
    };
    return _this;
  }
  _inherits(ErrorBoundary, _Component);
  return _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.error('catch:error', error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var errorMessage = Translator.trans(/*@Desc("Something went wrong")*/'error.message', {}, 'ibexa_page_builder');
      if (this.state.hasError) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, errorMessage);
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
ErrorBoundary.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/hidden-block/hidden.blocks.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/hidden-block/hidden.blocks.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var HiddenBlocks = function HiddenBlocks(_ref) {
  var blocksToRender = _ref.blocksToRender;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-hidden-blocks"
  }, blocksToRender.map(function (_ref2) {
    var type = _ref2.type,
      name = _ref2.name,
      thumbnail = _ref2.thumbnail;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: name,
      className: "c-pb-hidden-block",
      "data-ibexa-toolbox-block-type": type,
      hidden: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-hidden-block__content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-hidden-block__drag"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "drag",
      extraClasses: "c-pb-hidden-block__drag-icon ibexa-icon--tiny-small"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-hidden-block__type"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      customPath: thumbnail,
      extraClasses: "ibexa-icon--small"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-hidden-block__label"
    }, name)));
  }));
};
HiddenBlocks.propTypes = {
  blocksToRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  }).isRequired).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HiddenBlocks);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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


var Iframe = /*#__PURE__*/function (_PureComponent) {
  function Iframe(props) {
    var _this;
    _classCallCheck(this, Iframe);
    _this = _callSuper(this, Iframe, [props]);
    _this._refIframe = null;
    _this.state = {
      currentProps: {
        isVisible: props.isVisible,
        isLoading: props.isLoading
      },
      isVisible: props.isVisible,
      isLoading: props.isLoading
    };
    _this.handleLoad = _this.handleLoad.bind(_this);
    _this.setPreviewRef = _this.setPreviewRef.bind(_this);
    return _this;
  }
  _inherits(Iframe, _PureComponent);
  return _createClass(Iframe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: true
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.isLoading && !this.state.isLoading && this._refIframe) {
        this._refIframe.contentWindow.document.body.dispatchEvent(new CustomEvent('ibexa-inputs:recalculate-styling'));
      }
    }
  }, {
    key: "handleLoad",
    value: function handleLoad() {
      this.props.onLoad(this._refIframe);
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: false
        });
      });
    }
  }, {
    key: "setPreviewRef",
    value: function setPreviewRef(iframe) {
      this._refIframe = iframe;
    }
  }, {
    key: "renderLoadingScreen",
    value: function renderLoadingScreen() {
      if (!this.state.isLoading) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-iframe__loader-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-iframe__loader"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        id = _this$props.id,
        name = _this$props.name,
        src = _this$props.src;
      var attrs = {
        className: 'c-pb-iframe'
      };
      var iframeAttrs = {
        id: id,
        src: src,
        name: name,
        ref: this.setPreviewRef,
        onLoad: this.handleLoad,
        className: 'c-pb-iframe__preview',
        frameBorder: 0,
        hidden: !this.state.isVisible
      };
      if (this.state.isLoading) {
        attrs.className = "".concat(attrs.className, " ").concat(attrs.className, "--is-loading");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", attrs, this.renderLoadingScreen(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", iframeAttrs));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isVisible !== prevState.currentProps.isVisible || nextProps.isLoading !== prevState.currentProps.isLoading) {
        return {
          currentProps: {
            isVisible: nextProps.isVisible,
            isLoading: nextProps.isLoading
          },
          isVisible: nextProps.isVisible,
          isLoading: nextProps.isLoading
        };
      }
      return null;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
Iframe.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onLoad: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  src: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
Iframe.defaultProps = {
  id: 'page-builder-preview',
  name: 'page-builder-preview',
  title: 'Page preview',
  isVisible: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Iframe);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_alert_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/alert/alert.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");
/* harmony import */ var _common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.footer */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js");
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
  Translator = _window.Translator,
  ReactDOM = _window.ReactDOM;
var CLOSE_CONFIG_PANEL_KEY = 'Escape';
var LayoutSelector = /*#__PURE__*/function (_Component) {
  function LayoutSelector(props) {
    var _this;
    _classCallCheck(this, LayoutSelector);
    _this = _callSuper(this, LayoutSelector, [props]);
    _this.renderLayoutItem = _this.renderLayoutItem.bind(_this);
    _this.selectItem = _this.selectItem.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.subtitle = Translator.trans(/*@Desc("Choose layout")*/'layout_selector.create.subtitle', {}, 'ibexa_page_builder');
    _this.state = {
      currentProps: {
        itemSelectedId: props.itemSelectedId,
        isValidActiveLayout: props.isValidActiveLayout
      },
      itemSelectedId: props.itemSelectedId,
      isValidActiveLayout: props.isValidActiveLayout
    };
    return _this;
  }
  _inherits(LayoutSelector, _Component);
  return _createClass(LayoutSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.body.addEventListener('click', this.closeConfigPanelByClickOutside);
      document.body.addEventListener('keyup', this.closeConfigPanelByKeyboard);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.closeConfigPanelByClickOutside);
      document.body.removeEventListener('keyup', this.closeConfigPanelByKeyboard);
    }
  }, {
    key: "closeConfigPanelByClickOutside",
    value: function closeConfigPanelByClickOutside(_ref) {
      var target = _ref.target;
      if (target.classList.contains('ibexa-backdrop')) {
        this.props.onCancel();
      }
    }
  }, {
    key: "closeConfigPanelByKeyboard",
    value: function closeConfigPanelByKeyboard(_ref2) {
      var key = _ref2.key;
      if (key === CLOSE_CONFIG_PANEL_KEY) {
        this.props.onCancel();
      }
    }
  }, {
    key: "selectItem",
    value: function selectItem(event) {
      this.setState({
        itemSelectedId: event.currentTarget.dataset.id,
        isValidActiveLayout: true
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.selectItem(event);
      }
    }
  }, {
    key: "renderLayoutItem",
    value: function renderLayoutItem(data) {
      if (!data.visible && data.id !== this.state.itemSelectedId) {
        return null;
      }
      var isSelected = data.id === this.state.itemSelectedId;
      var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
        'c-pb-layout-selector__item': true,
        'c-pb-layout-selector__item--selected': isSelected,
        'c-pb-layout-selector__item--unavailable': !data.visible
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        role: "button",
        tabIndex: "0",
        key: data.id,
        className: className,
        onClick: this.selectItem,
        onKeyDown: this.handleKeyDown,
        "data-id": data.id,
        title: data.description
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "c-pb-layout-selector__item-image",
        src: data.thumbnail
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: "c-pb-layout-selector__item-desc"
      }, data.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        tabIndex: "-1",
        type: "radio",
        checked: isSelected,
        className: "c-pb-layout-selector__radio ibexa-input ibexa-input--radio"
      }));
    }
  }, {
    key: "renderWarningMessage",
    value: function renderWarningMessage() {
      var warningMessage = Translator.trans(/*@Desc("Switching layout saves the current Page draft")*/'layout_selector.warning.message', {}, 'ibexa_page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_alert_alert__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "info",
        title: warningMessage
      });
    }
  }, {
    key: "renderErrorMessage",
    value: function renderErrorMessage() {
      var errorMessage = Translator.trans(/*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'layout_selector.error.label', {}, 'ibexa_page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_alert_alert__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "error",
        title: errorMessage
      });
    }
  }, {
    key: "renderAlerts",
    value: function renderAlerts() {
      if (!this.props.displaySaveDraftWarning && this.state.isValidActiveLayout) {
        return null;
      }
      return this.state.isValidActiveLayout ? this.renderWarningMessage() : this.renderErrorMessage();
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$state = this.state,
        isValidActiveLayout = _this$state.isValidActiveLayout,
        itemSelectedId = _this$state.itemSelectedId;
      var _this$props = this.props,
        onCancel = _this$props.onCancel,
        onConfirm = _this$props.onConfirm;
      var forceSelection = !isValidActiveLayout;
      var cancelBtnLabel = Translator.trans(/*@Desc("Discard")*/'layout_selector.discard.label', {}, 'ibexa_page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--filled-info",
        disabled: !itemSelectedId,
        onClick: function onClick() {
          return onConfirm(itemSelectedId);
        }
      }, this.props.confirmBtnLabel), !forceSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "btn ibexa-btn ibexa-btn--info",
        onClick: onCancel
      }, cancelBtnLabel));
    }
  }, {
    key: "actionBtnsConfig",
    value: function actionBtnsConfig() {
      var _this$state2 = this.state,
        isValidActiveLayout = _this$state2.isValidActiveLayout,
        itemSelectedId = _this$state2.itemSelectedId;
      var _this$props2 = this.props,
        onConfirm = _this$props2.onConfirm,
        confirmBtnLabel = _this$props2.confirmBtnLabel;
      var forceSelection = !isValidActiveLayout;
      var cancelBtnLabel = Translator.trans(/*@Desc("Discard")*/'layout_selector.discard.label', {}, 'ibexa_page_builder');
      var btnsConfig = [{
        label: confirmBtnLabel,
        onClick: function onClick() {
          return onConfirm(itemSelectedId);
        },
        disabled: !itemSelectedId,
        className: 'ibexa-btn--filled-info'
      }];
      if (!forceSelection) {
        btnsConfig.push({
          label: cancelBtnLabel,
          className: 'ibexa-btn--info'
        });
      }
      return btnsConfig;
    }
  }, {
    key: "renderPopup",
    value: function renderPopup() {
      var isValidActiveLayout = this.state.isValidActiveLayout;
      var _this$props3 = this.props,
        title = _this$props3.title,
        layouts = _this$props3.layouts,
        isCreateMode = _this$props3.isCreateMode,
        onCancel = _this$props3.onCancel;
      var forceSelection = !isValidActiveLayout;
      var forceFooterBtnsClick = forceSelection || isCreateMode;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClose: onCancel,
        isVisible: true,
        size: "medium",
        actionBtnsConfig: this.actionBtnsConfig(),
        title: title,
        noCloseBtn: forceFooterBtnsClick,
        extraClasses: "c-pb-layout-selector__popup",
        showTooltip: false
      }, this.renderAlerts(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-layout-selector__subtitle"
      }, this.subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-layout-selector__layouts"
      }, layouts.map(this.renderLayoutItem)));
    }
  }, {
    key: "renderConfigPanel",
    value: function renderConfigPanel() {
      var _this$props4 = this.props,
        title = _this$props4.title,
        layouts = _this$props4.layouts,
        onCancel = _this$props4.onCancel,
        isVisible = _this$props4.isVisible;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        type: _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_5__.CONFIG_PANEL_TYPE_LEFT,
        leftPanelType: _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_5__.LEFT_PANEL_TYPES.LAYOUT_SELECTOR,
        extraClasses: "ibexa-pb-config-panel--layout-switcher c-pb-layout-selector",
        onCancel: onCancel,
        isClosed: !isVisible,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
        extraClasses: "c-pb-layout-selector__content"
      }, this.renderAlerts(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-layout-selector__layouts"
      }, layouts.map(this.renderLayoutItem))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isClosed: !isVisible
      }, this.renderFooter()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        isCreateMode = _this$props5.isCreateMode,
        modalContainer = _this$props5.modalContainer;
      return ReactDOM.createPortal(isCreateMode ? this.renderPopup() : this.renderConfigPanel(), modalContainer);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.itemSelectedId !== prevState.currentProps.itemSelectedId || nextProps.isValidActiveLayout !== prevState.currentProps.isValidActiveLayout) {
        return {
          currentProps: {
            itemSelectedId: nextProps.itemSelectedId,
            isValidActiveLayout: nextProps.isValidActiveLayout
          },
          itemSelectedId: nextProps.itemSelectedId,
          isValidActiveLayout: nextProps.isValidActiveLayout
        };
      }
      return null;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
LayoutSelector.propTypes = {
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  layouts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  modalContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  confirmBtnLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  itemSelectedId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isValidActiveLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isCreateMode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  displaySaveDraftWarning: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSelector);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var LayoutSwitcher = function LayoutSwitcher(_ref) {
  var isSwitchingLayout = _ref.isSwitchingLayout,
    isDisabled = _ref.isDisabled,
    hasErrorState = _ref.hasErrorState,
    onClick = _ref.onClick;
  var btnTitle = Translator.trans(/*@Desc("Switch layout")*/'switch_layout.label', {}, 'ibexa_page_builder');
  var btnClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    'btn ibexa-btn ibexa-btn--selector ibexa-btn--no-text ibexa-pb-action-bar__action-btn': true
  }, "ibexa-pb-action-bar__action-btn--".concat(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__.LEFT_PANEL_TYPES.LAYOUT_SELECTOR), true), 'ibexa-btn--selected', isSwitchingLayout), 'ibexa-btn--error', hasErrorState), 'disabled ', isDisabled));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: btnClassName,
    onClick: onClick,
    title: btnTitle,
    type: "button",
    ref: ibexa.helpers.tooltips.parse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "layout-switch",
    extraClasses: "ibexa-icon--medium"
  }));
};
LayoutSwitcher.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isSwitchingLayout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  hasErrorState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutSwitcher);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/notification/notification.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/notification/notification.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NOTIFICATION_TYPE: () => (/* binding */ NOTIFICATION_TYPE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var NOTIFICATION_TYPE = {
  ERROR: 'error',
  WARNING: 'warning'
};
var NOTIFICATION_ICON_NAMES = {
  ERROR: 'warning',
  WARNING: 'notice'
};
var Notification = function Notification(_ref) {
  var message = _ref.message,
    type = _ref.type,
    onClose = _ref.onClose,
    noCloseBtn = _ref.noCloseBtn;
  var notificationTypeProperty = Object.keys(NOTIFICATION_TYPE).find(function (key) {
    return NOTIFICATION_TYPE[key] === type;
  });
  var iconName = NOTIFICATION_ICON_NAMES[notificationTypeProperty];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-notification c-pb-notification--".concat(type)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: iconName,
    extraClasses: "c-pb-notification__icon ibexa-icon--small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-notification__message"
  }, message), !noCloseBtn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-notification__close-btn-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "c-pb-notification__close-btn btn ibexa-btn ibexa-btn--no-text",
    onClick: onClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "discard",
    extraClasses: "c-pb-notification__close-btn-icon ibexa-icon--tiny-small"
  }))));
};
Notification.propTypes = {
  message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(Object.values(NOTIFICATION_TYPE)).isRequired,
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  noCloseBtn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Notification.defaultProps = {
  onClose: function onClose() {},
  noCloseBtn: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/settings-popup/settings.popup.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/settings-popup/settings.popup.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/popup/popup.component.js");



var _window = window,
  Translator = _window.Translator;
var SettingsPopup = function SettingsPopup(_ref) {
  var isVisible = _ref.isVisible,
    onContinue = _ref.onContinue,
    onChangeSettings = _ref.onChangeSettings;
  var title = Translator.trans(/*@Desc("How builder works")*/'settings.popup.title', {}, 'ibexa_page_builder');
  var addBlockInfoLabel = Translator.trans(/*@Desc("When you add a block by dragging it from Page blocks menu into the drop zone, the block settings panel opens immediately where you can configure all block properties.")*/'settings.popup.add_block_info', {}, 'ibexa_page_builder');
  var defaultBehaviourLabel = Translator.trans(/*@Desc("This is a default behavior which applies to both Page and Dashboard builder. You can globally turn off automatic opening of the block settings panel in the user settings.")*/'settings.popup.default_behaviour', {}, 'ibexa_page_builder');
  var actionBtnsConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var continueBtn = {
      label: Translator.trans(/*@Desc("Continue")*/'settings.popup.continue', {}, 'ibexa_page_builder'),
      className: 'ibexa-btn--filled-info'
    };
    var changeSettingsBtn = {
      label: Translator.trans(/*@Desc("Change settings")*/'settings.popup.change_settings', {}, 'ibexa_page_builder'),
      'data-bs-dismiss': 'modal',
      onClick: onChangeSettings,
      className: 'ibexa-btn--info'
    };
    return [continueBtn, changeSettingsBtn];
  }, [onChangeSettings]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_popup_popup_component_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isVisible: isVisible,
    size: "medium",
    onClose: onContinue,
    title: title,
    extraClasses: "c-pb-settings-modal__popup",
    actionBtnsConfig: actionBtnsConfig
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-settings-modal__text-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "c-pb-settings-modal__text"
  }, addBlockInfoLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "c-pb-settings-modal__text"
  }, defaultBehaviourLabel)));
};
SettingsPopup.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onContinue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onChangeSettings: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/structure/actions/menu.action.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/structure/actions/menu.action.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");




var StructureViewMenuAction = function StructureViewMenuAction(_ref) {
  var item = _ref.item,
    itemLabel = _ref.itemLabel,
    eventType = _ref.eventType,
    action = _ref.action;
  var isDisabled = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__.isItemEmpty)(item);
  var handleOnClick = function handleOnClick() {
    item.onItemClick(item.id);
    item.onItemHoverOut(item.id);
    document.body.dispatchEvent(new CustomEvent("ibexa-pb-blocks:".concat(eventType), {
      detail: {
        blockId: item.id,
        action: action
      }
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isDisabled: isDisabled,
    onClick: handleOnClick
  });
};
StructureViewMenuAction.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    onItemHoverOut: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
    onItemClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
  }).isRequired,
  itemLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  eventType: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  action: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
StructureViewMenuAction.defaultProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StructureViewMenuAction);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/structure/structure.tree.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/structure/structure.tree.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_menu_action_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/menu.action.js */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/structure/actions/menu.action.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var MODULE_ID = 'ibexa-page-builder-tree';
var ROOT_ITEM_ID = '0';
var userId = ibexa.helpers.user.getId();
var StructureTree = function StructureTree(_ref) {
  var zones = _ref.zones,
    scrollTo = _ref.scrollTo,
    hoverIn = _ref.hoverIn,
    hoverOut = _ref.hoverOut,
    blocksIdMap = _ref.blocksIdMap;
  var treeBuilderModuleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var tree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var treeZonesStructure = zones.map(function (_ref2, index) {
      var zoneId = _ref2.id,
        blocks = _ref2.blocks;
      var dropZoneLabel = Translator.trans(/*@Desc("Drop zone %number%")*/'structure.drop.zone', {
        number: index + 1
      }, 'ibexa_page_builder');
      var treeBlocksStructure = blocks.map(function (_ref3) {
        var blockId = _ref3.id,
          name = _ref3.name,
          icon = _ref3.icon;
        var blockName = blocksIdMap.get(blockId);
        var label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "c-pb-structure-block"
        }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "c-pb-structure-block__icon"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
          customPath: icon,
          extraClasses: "ibexa-icon ibexa-icon--small"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "c-pb-structure-block__label"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
          className: "c-pb-structure-block__block-name"
        }, blockName), ": ", name));
        return {
          id: blockId,
          label: label,
          total: 0,
          isContainer: false,
          internalItem: {},
          onItemClick: function onItemClick() {
            return scrollTo(blockId);
          },
          onItemHoverIn: function onItemHoverIn() {
            return hoverIn(blockId);
          },
          onItemHoverOut: function onItemHoverOut() {
            return hoverOut(blockId);
          },
          customAttrs: {
            'data-block-id': blockId
          }
        };
      });
      return {
        id: zoneId,
        name: dropZoneLabel,
        label: dropZoneLabel,
        total: treeBlocksStructure.length,
        isContainer: true,
        subitems: treeBlocksStructure,
        actionsDisabled: true,
        dragItemDisabled: true
      };
    });
    return {
      subitems: treeZonesStructure,
      total: treeZonesStructure.length,
      id: ROOT_ITEM_ID,
      isContainer: false
    };
  }, [zones, blocksIdMap, scrollTo, hoverIn, hoverOut]);
  var blockToZonesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new Map(zones.flatMap(function (_ref4, zoneIndex) {
      var blocks = _ref4.blocks;
      return blocks.map(function (_ref5) {
        var blockId = _ref5.id;
        return [blockId, zoneIndex];
      });
    }));
  }, [zones]);
  var callbackDeleteElements = function callbackDeleteElements(_ref6) {
    var selectedData = _ref6.selectedData;
    var blockId = selectedData[0].id;
    document.body.dispatchEvent(new CustomEvent('ibexa-pb-blocks:action', {
      detail: {
        blockId: blockId,
        action: 'remove'
      }
    }));
    return Promise.resolve(selectedData);
  };
  var callbackMoveElements = function callbackMoveElements(_ref7, _ref8) {
    var nextIndex = _ref7.nextIndex,
      nextParent = _ref7.nextParent,
      sibling = _ref7.sibling,
      siblingPosition = _ref7.siblingPosition;
    var selectedData = _ref8.selectedData;
    var eventDetails = {
      blockId: selectedData[0].id,
      action: 'move'
    };
    if (nextIndex === -1) {
      var _treeBuilderModuleRef;
      var destinationZoneKey = zones.findIndex(function (_ref9) {
        var id = _ref9.id;
        return id === nextParent.id;
      });
      var destinationZone = zones[destinationZoneKey];
      var destinationPosition = destinationZone.blocks.length;
      eventDetails.destinationZoneKey = destinationZoneKey;
      eventDetails.destinationPosition = destinationPosition;
      (_treeBuilderModuleRef = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef === void 0 || _treeBuilderModuleRef.expandItems([{
        id: nextParent.id
      }]);
    } else {
      var nextBlockId = sibling.id;
      var _destinationZoneKey = blockToZonesMap.get(nextBlockId);
      var _destinationPosition = zones[_destinationZoneKey].blocks.findIndex(function (_ref10) {
        var id = _ref10.id;
        return id === nextBlockId;
      });
      if (siblingPosition !== 'prev') {
        _destinationPosition += 1;
      }
      eventDetails.destinationZoneKey = _destinationZoneKey;
      eventDetails.destinationPosition = _destinationPosition;
    }
    document.body.dispatchEvent(new CustomEvent('ibexa-pb-blocks:move', {
      detail: eventDetails
    }));
    return Promise.resolve(selectedData);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _treeBuilderModuleRef2;
    var treeZonesStructureIds = tree.subitems.filter(function (_ref11) {
      var subitems = _ref11.subitems;
      return subitems.length;
    }).map(function (zone) {
      return {
        id: zone.id
      };
    });
    var itemsToExpand = [{
      id: ROOT_ITEM_ID
    }].concat(_toConsumableArray(treeZonesStructureIds));
    (_treeBuilderModuleRef2 = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef2 === void 0 || _treeBuilderModuleRef2.expandItems(itemsToExpand);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox-structure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ibexa.modules.TreeBuilder, {
    ref: treeBuilderModuleRef,
    headerVisible: false,
    tree: tree,
    isActive: function isActive() {
      return false;
    },
    moduleId: MODULE_ID,
    userId: userId,
    selectionDisabled: true,
    rootElementDisabled: true,
    actionsType: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_TYPE.CONTEXTUAL_MENU,
    callbackDeleteElements: callbackDeleteElements,
    callbackMoveElements: callbackMoveElements,
    isResizable: false,
    forceDefaultTheme: true
  }));
};
var treeBuilderConfig = _defineProperty({}, MODULE_ID, {
  menuActions: [{
    priority: 20,
    id: 'modifying',
    subitems: [{
      priority: 10,
      id: 'moveUp',
      eventType: 'move',
      action: 'move-up',
      component: _actions_menu_action_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_PARENT.SINGLE_ITEM],
      itemLabel: Translator.trans(/*@Desc("Move up")*/'structure.action.move.up', {}, 'ibexa_page_builder')
    }, {
      priority: 20,
      id: 'moveDown',
      eventType: 'move',
      action: 'move-down',
      component: _actions_menu_action_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_PARENT.SINGLE_ITEM],
      itemLabel: Translator.trans(/*@Desc("Move down")*/'structure.action.move.down', {}, 'ibexa_page_builder')
    }, {
      priority: 30,
      id: 'configure',
      eventType: 'action',
      action: 'configure',
      component: _actions_menu_action_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_PARENT.SINGLE_ITEM],
      itemLabel: Translator.trans(/*@Desc("Configuration")*/'structure.action.configuration', {}, 'ibexa_page_builder')
    }, {
      priority: 40,
      id: 'clipboard-copy',
      eventType: 'action',
      action: 'clipboard-copy',
      component: _actions_menu_action_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_PARENT.SINGLE_ITEM],
      itemLabel: Translator.trans(/*@Desc("Copy")*/'structure.action.copy', {}, 'ibexa_page_builder')
    }, {
      priority: 50,
      id: 'duplicate',
      eventType: 'action',
      action: 'duplicate',
      component: _actions_menu_action_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_PARENT.SINGLE_ITEM],
      itemLabel: Translator.trans(/*@Desc("Duplicate")*/'structure.action.duplicate', {}, 'ibexa_page_builder')
    }, {
      priority: 60,
      id: 'refresh',
      eventType: 'action',
      action: 'refresh',
      component: _actions_menu_action_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_PARENT.SINGLE_ITEM],
      itemLabel: Translator.trans(/*@Desc("Refresh")*/'structure.action.refresh', {}, 'ibexa_page_builder')
    }]
  }, {
    priority: 40,
    id: 'deleting',
    subitems: [{
      priority: 60,
      id: 'delete',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_4__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.ACTION_PARENT.SINGLE_ITEM],
      isModalDisabled: true
    }]
  }]
});
StructureTree.propTypes = {
  zones: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    blocks: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
      type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
      id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
    }))
  }).isRequired).isRequired,
  scrollTo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  hoverIn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  hoverOut: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  blocksIdMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Map).isRequired
};
window.ibexa.addConfig('treeBuilder', treeBuilderConfig);
window.ibexa.addConfig('modules.StructureTree', StructureTree);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StructureTree);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.blocks.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.blocks.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_blocks_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block/blocks.group */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/blocks.group.js");
/* harmony import */ var _block_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block/block */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/block.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var _window = window,
  Translator = _window.Translator;
var BlocksToolbox = function BlocksToolbox(_ref) {
  var blocksToRender = _ref.blocksToRender,
    onBlockDrag = _ref.onBlockDrag,
    onBlockDragStart = _ref.onBlockDragStart,
    isAddingBlocksEnabled = _ref.isAddingBlocksEnabled,
    additionalBlocks = _ref.additionalBlocks;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    blockFilterQuery = _useState2[0],
    setBlockFilterQuery = _useState2[1];
  var updateBlockFilterQuery = function updateBlockFilterQuery(_ref2) {
    var target = _ref2.target;
    setBlockFilterQuery(target.value);
  };
  var blockFilterQueryLowerCase = blockFilterQuery.toLowerCase();
  var blocksByCategories = {};
  var _iterator = _createForOfIteratorHelper(additionalBlocks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _config$category, _blocksByCategories$_;
      var config = _step.value;
      var blockNameLowerCase = config.name.toLowerCase();
      var isHidden = !blockNameLowerCase.includes(blockFilterQueryLowerCase);
      (_blocksByCategories$_ = blocksByCategories[_config$category = config.category]) !== null && _blocksByCategories$_ !== void 0 ? _blocksByCategories$_ : blocksByCategories[_config$category] = [];
      blocksByCategories[config.category].push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_block_block__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: config.type,
        type: config.type,
        name: config.name,
        thumbnail: config.thumbnail,
        onDragStart: function onDragStart(type) {
          return onBlockDragStart(type, true);
        },
        onDrag: onBlockDrag,
        isDraggable: isAddingBlocksEnabled,
        isHidden: isHidden
      }));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(blocksToRender),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _config$category2, _blocksByCategories$_2;
      var _config = _step2.value;
      var _blockNameLowerCase = _config.name.toLowerCase();
      var _isHidden = !_blockNameLowerCase.includes(blockFilterQueryLowerCase);
      (_blocksByCategories$_2 = blocksByCategories[_config$category2 = _config.category]) !== null && _blocksByCategories$_2 !== void 0 ? _blocksByCategories$_2 : blocksByCategories[_config$category2] = [];
      blocksByCategories[_config.category].push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_block_block__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: _config.type,
        type: _config.type,
        name: _config.name,
        thumbnail: _config.thumbnail,
        onDragStart: onBlockDragStart,
        onDrag: onBlockDrag,
        isDraggable: isAddingBlocksEnabled,
        isHidden: _isHidden
      }));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var blockFilterPlaceholder = Translator.trans(/*@Desc("Search...")*/'block_filter.placeholder', {}, 'ibexa_page_builder');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox__search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "filter",
    placeholder: blockFilterPlaceholder,
    value: blockFilterQuery,
    onChange: updateBlockFilterQuery,
    className: "form-control ibexa-input ibexa-input--text c-pb-toolbox__toolbox-filter"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox__list"
  }, Object.keys(blocksByCategories).map(function (blockCategory) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_block_blocks_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: blockCategory,
      key: "block-group-".concat(blockCategory)
    }, blocksByCategories[blockCategory]);
  })));
};
BlocksToolbox.propTypes = {
  blocksToRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({}).isRequired).isRequired,
  additionalBlocks: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  onBlockDrag: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onBlockDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isAddingBlocksEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
BlocksToolbox.defaultProps = {
  additionalBlocks: []
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlocksToolbox);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toolbox_tab_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbox.tab.button */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.tab.button.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var DEFAULT_TOOLBOX_MIN_WIDTH = 360;
var DEFAULT_TOOLBOX_MAX_WIDTH = 520;
var TOOLBOX_WIDTH = 'ibexa-pb-toolbox-width';
var toolboxLocalWidth = Number(window.localStorage.getItem(TOOLBOX_WIDTH));
var Toolbox = function Toolbox(_ref) {
  var setSidebarSide = _ref.setSidebarSide,
    children = _ref.children;
  var infobarTogglerContainer = document.querySelector('.ibexa-pb-action-bar__right');
  var toolboxRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var backdrop = new window.ibexa.core.Backdrop({
    isTransparent: true
  });
  var clientXWhenStartDraging = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isResizing = _useState2[0],
    setIsResizing = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(toolboxLocalWidth || DEFAULT_TOOLBOX_MIN_WIDTH),
    _useState4 = _slicedToArray(_useState3, 2),
    toolboxWidth = _useState4[0],
    setToolboxWidth = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      activeTab: children[0].type.name,
      title: children[0].props.title,
      isOpened: true
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    tab = _useState6[0],
    setTab = _useState6[1];
  var changeActiveTab = function changeActiveTab(tabName) {
    setTab(function (prevTab) {
      var shouldBeOpened = prevTab.activeTab === tabName || tabName === '' || !prevTab.isOpened;
      return {
        activeTab: prevTab.activeTab === tabName ? '' : tabName,
        isOpened: shouldBeOpened ? !prevTab.isOpened : prevTab.isOpened,
        title: children.find(function (child) {
          return child.type.name === tabName;
        }).props.title
      };
    });
  };
  var wrapperClasses = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_5__.createCssClassNames)({
    'c-pb-toolbox': true,
    'c-pb-toolbox--collapsed': !tab.isOpened,
    'c-pb-toolbox--resizing': isResizing
  });
  var renderedChildren = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return children.find(function (child) {
      return tab.activeTab === child.type.name;
    });
  }, [tab, children]);
  var toolboxTabBtns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "ibexa-pb-action-bar__action-btns"
    }, children.map(function (_ref2) {
      var _ref2$props = _ref2.props,
        iconName = _ref2$props.iconName,
        name = _ref2$props.name,
        title = _ref2$props.title,
        componentTypeName = _ref2.type.name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_toolbox_tab_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: componentTypeName,
        name: name,
        title: title,
        changeActiveTab: changeActiveTab,
        iconName: iconName,
        tab: tab,
        tabName: componentTypeName
      });
    }));
  }, [children, tab]);
  var startResizing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref3) {
    var clientX = _ref3.clientX;
    clientXWhenStartDraging.current = clientX;
    setIsResizing(true);
  }, [clientXWhenStartDraging]);
  var stopResizing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsResizing(false);
  }, []);
  var resize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref4) {
    var clientX = _ref4.clientX;
    if (isResizing) {
      var newToolboxWidth = toolboxWidth + (clientXWhenStartDraging.current - clientX);
      var minMaxToolboxWidth = Math.min(Math.max(newToolboxWidth, DEFAULT_TOOLBOX_MIN_WIDTH), DEFAULT_TOOLBOX_MAX_WIDTH);
      window.localStorage.setItem(TOOLBOX_WIDTH, minMaxToolboxWidth);
      setToolboxWidth(minMaxToolboxWidth);
    }
  }, [isResizing]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isResizing) {
      document.addEventListener('mousemove', resize, false);
      document.addEventListener('mouseup', stopResizing, false);
      backdrop.show();
      return function () {
        document.removeEventListener('mousemove', resize, false);
        document.removeEventListener('mouseup', stopResizing, false);
        backdrop.remove();
      };
    }
  }, [isResizing, resize, stopResizing]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(toolboxTabBtns, infobarTogglerContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: toolboxRef,
    style: {
      width: tab.isOpened ? toolboxWidth : 0
    },
    className: wrapperClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox__action-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox__toggler",
    onClick: setSidebarSide
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "collapse",
    extraClasses: "ibexa-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox__title-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "c-pb-toolbox__title"
  }, tab.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox__content"
  }, renderedChildren), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-toolbox__resizer",
    onMouseDown: startResizing
  })));
};
Toolbox.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  setSidebarSide: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
Toolbox.defaultProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toolbox);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.structure.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.structure.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _structure_structure_tree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structure/structure.tree.js */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/structure/structure.tree.js");



var StructureToolbox = function StructureToolbox(_ref) {
  var fieldValue = _ref.fieldValue,
    scrollTo = _ref.scrollTo,
    hoverIn = _ref.hoverIn,
    hoverOut = _ref.hoverOut,
    blocksIdMap = _ref.blocksIdMap,
    blocksIconMap = _ref.blocksIconMap;
  var zonesToRender = fieldValue.zones.map(function (_ref2) {
    var id = _ref2.id,
      blocks = _ref2.blocks,
      label = _ref2.label;
    return {
      id: id,
      label: label,
      blocks: blocks.map(function (_ref3) {
        var blockId = _ref3.id,
          type = _ref3.type,
          name = _ref3.name;
        var blockIcon = blocksIconMap.get(type);
        return {
          type: type,
          name: name,
          id: blockId,
          icon: blockIcon
        };
      })
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_structure_structure_tree_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    zones: zonesToRender,
    scrollTo: scrollTo,
    hoverIn: hoverIn,
    hoverOut: hoverOut,
    blocksIdMap: blocksIdMap
  });
};
StructureToolbox.propTypes = {
  fieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    layout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    zones: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
      blocks: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
        name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
        type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
        id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
      }))
    }).isRequired).isRequired
  }).isRequired,
  scrollTo: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  hoverIn: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  hoverOut: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  blocksIdMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Map).isRequired,
  blocksIconMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Map).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StructureToolbox);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.tab.button.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.tab.button.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




var _window = window,
  ibexa = _window.ibexa;
var ToolboxTabBtn = function ToolboxTabBtn(_ref) {
  var iconName = _ref.iconName,
    changeActiveTab = _ref.changeActiveTab,
    tab = _ref.tab,
    tabName = _ref.tabName,
    name = _ref.name,
    title = _ref.title;
  var btnClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'btn ibexa-btn ibexa-btn--no-text ibexa-btn--selector ibexa-pb-action-bar__action-btn ibexa-preview-switcher__action': true,
    'ibexa-btn--selected': tab.isOpened && tab.activeTab === tabName
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "data-tab-name": name,
    className: btnClassName,
    onClick: function onClick() {
      return changeActiveTab(tabName);
    },
    type: "button",
    title: title,
    ref: ibexa.helpers.tooltips.parse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: iconName,
    extraClasses: "ibexa-icon--medium"
  }));
};
ToolboxTabBtn.propTypes = {
  changeActiveTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  iconName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  tab: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    activeTab: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    isOpened: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
  }).isRequired,
  tabName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolboxTabBtn);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   POSITION_CHANGE_METHOD: () => (/* binding */ POSITION_CHANGE_METHOD),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-dom/client */ "./public/bundles/ibexaadminuiassets/vendors/react-dom/client.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/iframe/iframe */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
/* harmony import */ var _components_block_preview_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/block/preview.block */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/block/preview.block.js");
/* harmony import */ var _components_toolbox_toolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/toolbox/toolbox */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.js");
/* harmony import */ var _components_toolbox_toolbox_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/toolbox/toolbox.blocks */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.blocks.js");
/* harmony import */ var _components_toolbox_toolbox_structure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toolbox/toolbox.structure */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/toolbox/toolbox.structure.js");
/* harmony import */ var _components_layout_selector_layout_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout-selector/layout.selector */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-selector/layout.selector.js");
/* harmony import */ var _components_layout_switcher_layout_switcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout-switcher/layout.switcher */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/layout-switcher/layout.switcher.js");
/* harmony import */ var _components_settings_popup_settings_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/settings-popup/settings.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/settings-popup/settings.popup.js");
/* harmony import */ var _components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/error-boundary/error.boundary */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js");
/* harmony import */ var _components_hidden_block_hidden_blocks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/hidden-block/hidden.blocks */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/hidden-block/hidden.blocks.js");
/* harmony import */ var _components_notification_notification_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notification/notification.js */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/notification/notification.js");
/* harmony import */ var _timeline_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../timeline.module */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline.module.js");
/* harmony import */ var _guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../guid-generator/guid.generator */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js");
/* harmony import */ var _services_preview_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/preview.service */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js");
/* harmony import */ var _services_timeline_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/timeline.service */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js");
/* harmony import */ var _services_clipboard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/clipboard.service */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/clipboard.service.js");
/* harmony import */ var _helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../helpers/deep.clone */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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























var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa,
  document = _window.document,
  Routing = _window.Routing;
var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_HIGHLIGHT = 'c-pb-block-preview--highlighted';
var CLASS_ZONE = 'm-page-builder__zone';
var CLASS_ZONE_EMPTY = 'm-page-builder__zone--empty';
var CLASS_ZONE_DRAGOVER = 'm-page-builder__zone--dragover';
var CLASS_PAGE_BUILDER_DISABLED = 'ibexa-pb-app--is-disabled';
var CLASS_GO_BACK_ENABLED = 'ibexa-pb-app--go-back-enabled';
var SELECTOR_PLACEHOLDER = '.droppable-placeholder';
var SELECTOR_ZONE = '[data-ibexa-zone-id]';
var CLASS_BLOCK_PREVIEW_HOVERED = 'c-pb-action-menu--visible';
var SELECTOR_SAVE_DRAFT = '#ezplatform_content_forms_content_edit_saveDraft';
var PLACEHOLDER_TYPE_ZONE = 'zone';
var IDENTIFIER_BLOCK_DATA_ATTRIBUTE = 'ezBlockId';
var ELEMENT_DIV = 'div';
var TIMEOUT_REMOVE_HIGHLIGHT = 3000;
var BLOCKS_BASE_STATE = {
  shouldDisplayError: false,
  isValid: false,
  preview: ''
};
var POSITION_CHANGE_METHOD = {
  DRAG: 'drag',
  ARROWS: 'arrows'
};
var PageBuilder = /*#__PURE__*/function (_Component) {
  function PageBuilder(props) {
    var _this;
    _classCallCheck(this, PageBuilder);
    _this = _callSuper(this, PageBuilder, [props]);
    _this.requestForm = _this.requestForm.bind(_this);
    _this.handleLayoutSelectorCancelExternal = _this.handleLayoutSelectorCancelExternal.bind(_this);
    _this.handleLayoutSelectorCancelInternal = _this.handleLayoutSelectorCancelInternal.bind(_this);
    _this.handleLayoutSelectorCancelOnCreate = _this.handleLayoutSelectorCancelOnCreate.bind(_this);
    _this.handleLayoutSelectorConfirm = _this.handleLayoutSelectorConfirm.bind(_this);
    _this.handleIframeLoad = _this.handleIframeLoad.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);
    _this.handleDragStartSidebarBlock = _this.handleDragStartSidebarBlock.bind(_this);
    _this.handleDragStartPreviewBlock = _this.handleDragStartPreviewBlock.bind(_this);
    _this.handleElementDragOver = _this.handleElementDragOver.bind(_this);
    _this.handleBlockRemove = _this.handleBlockRemove.bind(_this);
    _this.renderSinglePreviewBlock = _this.renderSinglePreviewBlock.bind(_this);
    _this.handleZoneDragOver = _this.handleZoneDragOver.bind(_this);
    _this.handleBlockDataUpdate = _this.handleBlockDataUpdate.bind(_this);
    _this.updateBlocksPreview = _this.updateBlocksPreview.bind(_this);
    _this.updateBlocksPreviewState = _this.updateBlocksPreviewState.bind(_this);
    _this.attachDocumentDropListeners = _this.attachDocumentDropListeners.bind(_this);
    _this.getPreviewDocument = _this.getPreviewDocument.bind(_this);
    _this.getPreviewWindow = _this.getPreviewWindow.bind(_this);
    _this.getBlockPreviewNode = _this.getBlockPreviewNode.bind(_this);
    _this.getPlaceholderPreviewNode = _this.getPlaceholderPreviewNode.bind(_this);
    _this.getBlocksFromZones = _this.getBlocksFromZones.bind(_this);
    _this.disableInIframeClicks = _this.disableInIframeClicks.bind(_this);
    _this.setPageFieldTypeFormFieldValue = _this.setPageFieldTypeFormFieldValue.bind(_this);
    _this.validateAllBlocksData = _this.validateAllBlocksData.bind(_this);
    _this.validateAllBlocksAvailability = _this.validateAllBlocksAvailability.bind(_this);
    _this.validateLayoutData = _this.validateLayoutData.bind(_this);
    _this.areBlocksValid = _this.areBlocksValid.bind(_this);
    _this.validateBlockData = _this.validateBlockData.bind(_this);
    _this.setBlockValidState = _this.setBlockValidState.bind(_this);
    _this.initBlocksPreviewState = _this.initBlocksPreviewState.bind(_this);
    _this.handleDragBlock = _this.handleDragBlock.bind(_this);
    _this.showLayoutSelector = _this.showLayoutSelector.bind(_this);
    _this.setIframeRef = _this.setIframeRef.bind(_this);
    _this.getPlaceholderNodes = _this.getPlaceholderNodes.bind(_this);
    _this.handleDragOverTimeout = _this.handleDragOverTimeout.bind(_this);
    _this.cancelDropState = _this.cancelDropState.bind(_this);
    _this.setIsEditableState = _this.setIsEditableState.bind(_this);
    _this.setDocumentDragOverEventHandler = _this.setDocumentDragOverEventHandler.bind(_this);
    _this.unsetDocumentDragOverEventHandler = _this.unsetDocumentDragOverEventHandler.bind(_this);
    _this.setClientYPosition = _this.setClientYPosition.bind(_this);
    _this.updateTimelineEvents = _this.updateTimelineEvents.bind(_this);
    _this.updateTimelineEventsState = _this.updateTimelineEventsState.bind(_this);
    _this.handleOnBlockClick = _this.handleOnBlockClick.bind(_this);
    _this.handleClickOutsideBlock = _this.handleClickOutsideBlock.bind(_this);
    _this.clearZoneDragOverState = _this.clearZoneDragOverState.bind(_this);
    _this.updatePreviewRequestParams = _this.updatePreviewRequestParams.bind(_this);
    _this.duplicatePreviewBlock = _this.duplicatePreviewBlock.bind(_this);
    _this.setSidebarSide = _this.setSidebarSide.bind(_this);
    _this.scrollIntoBlockPreview = _this.scrollIntoBlockPreview.bind(_this);
    _this.hoverInBlockPreview = _this.hoverInBlockPreview.bind(_this);
    _this.hoverOutBlockPreview = _this.hoverOutBlockPreview.bind(_this);
    _this.getLastBlockTypeNumber = _this.getLastBlockTypeNumber.bind(_this);
    _this.handleStructureViewEvent = _this.handleStructureViewEvent.bind(_this);
    _this.handleClipboardChange = _this.handleClipboardChange.bind(_this);
    _this.handleMoveEvent = _this.handleMoveEvent.bind(_this);
    _this.setSettingsModalVisible = _this.setSettingsModalVisible.bind(_this);
    _this.renderNotifications = _this.renderNotifications.bind(_this);
    _this.addNotification = _this.addNotification.bind(_this);
    _this.removeNotification = _this.removeNotification.bind(_this);
    _this.blockConfigRequestForm = window.document.querySelector('form[name="request_block_configuration"]');
    _this.blockConfigTextarea = _this.blockConfigRequestForm.querySelector('#request_block_configuration_page');
    _this.blockConfigBlocksInput = _this.blockConfigRequestForm.querySelector('#request_block_configuration_block_id');
    _this.blockConfigSubmit = _this.blockConfigRequestForm.querySelector('#request_block_configuration_request');
    _this.updatePreviewRequestParamsComponents = window.ibexa.pageBuilder.components ? window.ibexa.pageBuilder.components.updatePreviewRequestParams : [];
    _this.onDragOverTimeout = null;
    _this.contentEditForm = null;
    _this._clientY = 0;
    _this._blockPreviewRefs = new Map();
    var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
    var blocksMap = _this.initBlocksMap();
    var layoutSelectorTitle = Translator.trans(/*@Desc("Select layout")*/'layout_selector.create.title', {}, 'ibexa_page_builder');
    var layoutSelectorConfirmBtnLabel = Translator.trans(/*@Desc("Select")*/'layout_selector.create.select.label', {}, 'ibexa_page_builder');
    _this.state = _objectSpread(_objectSpread({}, props.getInitDragDropState()), {}, {
      draggedPreviewBlockData: null,
      draggedSidebarBlockType: null,
      iframeLoaded: false,
      isIframelessMode: false,
      previewUrl: props.previewUrl,
      fieldValue: props.fieldValue,
      noDropzones: !props.fieldValue.zones.length,
      blocksMap: blocksMap,
      shouldUpdateBlocksPreviewState: !!Object.keys(blocksMap).length,
      isSwitchingLayout: false,
      shouldCreateBlocksPreviewNodes: false,
      layoutSelectorTitle: layoutSelectorTitle,
      layoutSelectorConfirmBtnLabel: layoutSelectorConfirmBtnLabel,
      timestamp: convertDateToTimezone(new Date()).valueOf(),
      timelineEvents: ibexa.pageBuilder.timeline.events,
      activeBlockId: null,
      isOverZone: false,
      dragOverZoneId: null,
      blockPreviewPagePreviewRequestParams: {},
      isValidActiveLayout: _this.isValidActiveLayout(props.fieldValue),
      layoutSelected: false,
      hasLayoutValidationError: false,
      isSidebarLeftSide: false,
      isDraggedSidebarBlockFromClipboard: false,
      blocksTypeMap: _this.initBlocksTypeMap(props.blocksConfig),
      blocksIdMap: _this.initBlocksIdMap(props.fieldValue, props.blocksConfig),
      isSettingsModalVisible: true,
      blocksIconMap: _this.initBlocksIconMap(props.blocksConfig),
      notificationsMap: new Map(),
      clipboardBlockConfig: null
    });
    return _this;
  }
  _inherits(PageBuilder, _Component);
  return _createClass(PageBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var _this$state = this.state,
        iframeLoaded = _this$state.iframeLoaded,
        shouldUpdateBlocksPreviewState = _this$state.shouldUpdateBlocksPreviewState,
        noDropzones = _this$state.noDropzones;
      var isCreateMode = this.isCreateMode();
      this.modalContainer = document.createElement(ELEMENT_DIV);
      this.udwContainer = document.createElement(ELEMENT_DIV);
      this.airtimeContainer = document.createElement(ELEMENT_DIV);
      this.layoutSwitcherContainer = document.querySelector('.ibexa-pb-action-bar__layout-switcher-toggler');
      this.pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
      this.timelineContainer = document.querySelector('.ibexa-pb-timeline-wrapper');
      this.loader = document.querySelector('.ibexa-pb-iframe-backdrop');
      this.actionBar = document.querySelector('.ibexa-pb-action-bar');
      if (!isCreateMode) {
        this.loader.classList.remove('ibexa-pb-iframe-backdrop--is-loading');
      }
      this.actionBar.classList.remove('ibexa-pb-action-bar--hidden');
      this.modalContainer.classList.add('m-page-builder__modal-container');
      this.udwContainer.classList.add('m-page-builder__udw-container');
      this.airtimeContainer.classList.add('m-page-builder__airtime-container');
      document.body.appendChild(this.modalContainer);
      document.body.appendChild(this.udwContainer);
      document.body.appendChild(this.airtimeContainer);
      document.body.classList.add(CLASS_PAGE_BUILDER_DISABLED, CLASS_GO_BACK_ENABLED);
      if (noDropzones) {
        var message = Translator.trans(/*@Desc("This page does not have a designed dropzone area for adding content")*/'notification.no_dropzone', {}, 'ibexa_page_builder');
        this.addNotification({
          id: 'notification-no-dropzone',
          message: message,
          type: _components_notification_notification_js__WEBPACK_IMPORTED_MODULE_14__.NOTIFICATION_TYPE.WARNING,
          noCloseBtn: true
        });
      }
      if (iframeLoaded) {
        this.manageZoneEventHandlers();
        this.disableInIframeClicks();
        if (shouldUpdateBlocksPreviewState) {
          this.initBlocksPreviewState();
        }
        document.body.classList.remove(CLASS_PAGE_BUILDER_DISABLED, CLASS_GO_BACK_ENABLED);
      }
      if (isCreateMode) {
        document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
          cancelable: true,
          detail: {}
        }));
        this.setState(function () {
          return {
            isIframelessMode: true
          };
        });
      }
      if (!this.state.isValidActiveLayout) {
        this.showLayoutSelector();
      }
      if (!this.validateAllBlocksAvailability()) {
        var _message = Translator.trans(/*@Desc("One or more blocks is not available in this page")*/'block.no_availability', {}, 'ibexa_page_builder');
        this.addNotification({
          message: _message,
          type: _components_notification_notification_js__WEBPACK_IMPORTED_MODULE_14__.NOTIFICATION_TYPE.ERROR
        });
      }
      this.validateAllBlocksData();
      document.body.addEventListener('ibexa-pb:validation:layout', function (_ref) {
        var isValid = _ref.detail.isValid;
        _this2.setState(function () {
          return {
            hasLayoutValidationError: !isValid
          };
        });
      }, false);
      document.body.addEventListener('ibexa-pb-blocks:move', this.handleMoveEvent, false);
      document.body.addEventListener('ibexa-pb-blocks:action', this.handleStructureViewEvent, false);
      document.body.addEventListener(_services_clipboard_service__WEBPACK_IMPORTED_MODULE_19__.CLIPBOARD_CHANGE_EVENT, this.handleClipboardChange, false);
      document.body.addEventListener('click', this.handleClickOutsideBlock, false);
      window.ibexa.addConfig('pb.notification', {
        addNotification: this.addNotification,
        removeNotification: this.removeNotification,
        type: _components_notification_notification_js__WEBPACK_IMPORTED_MODULE_14__.NOTIFICATION_TYPE
      });
      this.setClipboardBlocks((0,_services_clipboard_service__WEBPACK_IMPORTED_MODULE_19__.getItemClipboard)());
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$state2 = this.state,
        draggedPreviewBlockData = _this$state2.draggedPreviewBlockData,
        draggedSidebarBlockType = _this$state2.draggedSidebarBlockType,
        blocksMap = _this$state2.blocksMap;
      var isDuringDragDrop = !!draggedPreviewBlockData || !!draggedSidebarBlockType;
      var willBeDuringDragDrop = !!nextState.draggedPreviewBlockData || !!nextState.draggedSidebarBlockType;
      var blocksMapWillChange = blocksMap !== nextState.blocksMap;
      var dragDropContinues = isDuringDragDrop && willBeDuringDragDrop;
      var shouldNotUpdate = dragDropContinues && !blocksMapWillChange;
      return !shouldNotUpdate;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$state3 = this.state,
        iframeLoaded = _this$state3.iframeLoaded,
        shouldUpdateBlocksPreviewState = _this$state3.shouldUpdateBlocksPreviewState,
        shouldCreateBlocksPreviewNodes = _this$state3.shouldCreateBlocksPreviewNodes,
        isOverZone = _this$state3.isOverZone;
      if (!iframeLoaded) {
        return;
      }
      if (shouldUpdateBlocksPreviewState) {
        this.initBlocksPreviewState();
      }
      if (shouldCreateBlocksPreviewNodes) {
        this.createBlocksPreviewNodes();
      }
      if (!isOverZone) {
        this.props.removePlaceholders(this.getPlaceholderNodes(), this.props.removePlaceholderWithAnimation);
      }
      this.renderPreviewBlocks();
      this.manageZoneEventHandlers();
      this.disableInIframeClicks();
      if (!prevState.activeBlockId && this.state.activeBlockId) {
        this.getPreviewDocument().body.dispatchEvent(new CustomEvent('ibexa-active-block-clicked'));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalContainer);
      document.body.removeChild(this.udwContainer);
      document.body.removeChild(this.airtimeContainer);
    }
  }, {
    key: "isCreateMode",
    value: function isCreateMode() {
      return ['create', 'translate_without_base_language'].includes(this.props.mode);
    }
  }, {
    key: "isValidActiveLayout",
    value: function isValidActiveLayout(fieldValue) {
      return this.props.layoutsConfig.some(function (layoutConfig) {
        return layoutConfig.id === fieldValue.layout && layoutConfig.visible;
      });
    }
  }, {
    key: "getFieldValue",
    value: function getFieldValue() {
      var fieldSelector = this.props.pageFieldValueSelector.trim();
      var pageFieldInput = document.querySelector(fieldSelector);
      var fieldValue = JSON.parse(pageFieldInput.value);
      return fieldValue;
    }
  }, {
    key: "duplicatePreviewBlock",
    value: function duplicatePreviewBlock(zoneId, block) {
      var fieldValue = this.getPageFieldTypeState();
      var zoneKey = fieldValue.zones.findIndex(function (_ref2) {
        var id = _ref2.id;
        return id === zoneId;
      });
      var blockPosition = fieldValue.zones[zoneKey].blocks.findIndex(function (_ref3) {
        var id = _ref3.id;
        return id === block.id;
      });
      var newBlock = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(block);
      newBlock.id = (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_16__["default"])('b-');
      newBlock.attributes.forEach(function (attribute) {
        attribute.id = (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_16__["default"])('a-');
      });
      this.insertPreviewBlock(newBlock, {
        zoneKey: zoneKey,
        blockPosition: blockPosition + 1,
        isDuplicated: true
      }, true);
    }
  }, {
    key: "insertPreviewBlock",
    value: function insertPreviewBlock(newBlock, _ref4) {
      var _fieldValue$zones$zon,
        _fieldValue$zones$zon2,
        _this3 = this;
      var zoneKey = _ref4.zoneKey,
        blockPosition = _ref4.blockPosition,
        _ref4$isReverted = _ref4.isReverted,
        isReverted = _ref4$isReverted === void 0 ? false : _ref4$isReverted,
        _ref4$isDuplicated = _ref4.isDuplicated,
        isDuplicated = _ref4$isDuplicated === void 0 ? false : _ref4$isDuplicated;
      var emitChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      var zoneId = fieldValue.zones[zoneKey].id;
      var nextBlockId = (_fieldValue$zones$zon = (_fieldValue$zones$zon2 = fieldValue.zones[zoneKey].blocks[blockPosition]) === null || _fieldValue$zones$zon2 === void 0 ? void 0 : _fieldValue$zones$zon2.id) !== null && _fieldValue$zones$zon !== void 0 ? _fieldValue$zones$zon : null;
      var config = this.props.blocksConfig.find(function (configEntry) {
        return configEntry.type === newBlock.type;
      });
      var newBlockDOMElement = document.createElement('div');
      var nextBlockDOMElement = this.getPreviewDocument().querySelector("[data-ez-block-id=\"".concat(nextBlockId, "\"]"));
      var destinationZoneDOMElement = this.getPreviewDocument().querySelector("[data-ibexa-zone-id=\"".concat(zoneId, "\"]"));
      var leftoverBlockNode = this.getBlockPreviewNode(newBlock.id);
      var blocksIdMap = new Map(this.state.blocksIdMap);
      if (leftoverBlockNode) {
        leftoverBlockNode.ibexaBlockRoot.unmount();
        leftoverBlockNode.remove();
      }
      if (!blocksIdMap.has(newBlock.id)) {
        var blockName = this.state.blocksTypeMap.get(newBlock.type);
        var lastBlockTypeNumber = this.getLastBlockTypeNumber(blockName);
        blocksIdMap.set(newBlock.id, "".concat(blockName, " #").concat(lastBlockTypeNumber + 1));
      }
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, newBlock, zoneId, nextBlockId);
      blocksMap[newBlock.id] = _objectSpread(_objectSpread({}, BLOCKS_BASE_STATE), {}, {
        config: config,
        isVisible: true,
        isNew: !isReverted,
        isReverted: isReverted,
        isDuplicated: isDuplicated
      });
      newBlockDOMElement.dataset.ezBlockId = newBlock.id;
      destinationZoneDOMElement.insertBefore(newBlockDOMElement, nextBlockDOMElement);
      this.setState(function () {
        return {
          fieldValue: fieldValue,
          blocksMap: blocksMap,
          blocksIdMap: blocksIdMap
        };
      }, function () {
        _this3.updateBlocksPreview([newBlock.id], emitChange);
      });
    }
  }, {
    key: "removePreviewBlock",
    value: function removePreviewBlock(blockId) {
      var blocksMap = this.getBlocksMapState();
      var blockToRemove = this._blockPreviewRefs.get(blockId);
      delete blocksMap[blockId];
      blockToRemove.removeBlock(false);
    }
  }, {
    key: "reorderPreviewBlock",
    value: function reorderPreviewBlock(block, _ref5) {
      var _fieldValue$zones$des,
        _fieldValue$zones$des2,
        _this4 = this;
      var destinationZoneKey = _ref5.destinationZoneKey,
        destinationPosition = _ref5.destinationPosition,
        positionChangeMethod = _ref5.positionChangeMethod;
      var emitChangeEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var fieldValue = this.getPageFieldTypeState();
      var zoneIndex = fieldValue.zones.findIndex(function (zone) {
        return zone.blocks.some(function (_ref6) {
          var id = _ref6.id;
          return id === block.id;
        });
      });
      var destinationZoneLength = fieldValue.zones[destinationZoneKey].blocks.length;
      var blockIndex = fieldValue.zones[destinationZoneKey].blocks.findIndex(function (_ref7) {
        var id = _ref7.id;
        return id === block.id;
      });
      var nextBlockPosition = destinationPosition;
      if (positionChangeMethod === POSITION_CHANGE_METHOD.ARROWS) {
        nextBlockPosition = destinationZoneKey < zoneIndex ? destinationZoneLength : 0;
        if (blockIndex !== -1) {
          nextBlockPosition = destinationPosition > blockIndex ? destinationPosition + 1 : destinationPosition;
        }
      }
      var nextBlockId = (_fieldValue$zones$des = (_fieldValue$zones$des2 = fieldValue.zones[destinationZoneKey].blocks[nextBlockPosition]) === null || _fieldValue$zones$des2 === void 0 ? void 0 : _fieldValue$zones$des2.id) !== null && _fieldValue$zones$des !== void 0 ? _fieldValue$zones$des : null;
      var destinationZoneId = fieldValue.zones[destinationZoneKey].id;
      fieldValue.zones = this.removeBlockDataFromZone(_toConsumableArray(fieldValue.zones), block.id);
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, block, destinationZoneId, nextBlockId);
      var blockDOMElement = this.getPreviewDocument().querySelector("[data-ez-block-id=\"".concat(block.id, "\"]"));
      var nextBlockDOMElement = this.getPreviewDocument().querySelector("[data-ez-block-id=\"".concat(nextBlockId, "\"]"));
      var destinationZoneDOMElement = this.getPreviewDocument().querySelector("[data-ibexa-zone-id=\"".concat(destinationZoneId, "\"]"));
      destinationZoneDOMElement.insertBefore(blockDOMElement, nextBlockDOMElement);
      this.setState(function () {
        return {
          fieldValue: fieldValue
        };
      }, function () {
        return _this4.setPageFieldTypeFormFieldValue(_this4.stringifyPageFieldTypeState(), emitChangeEvent);
      });
    }
  }, {
    key: "updatePreviewBlock",
    value: function updatePreviewBlock(blockId) {
      var _this5 = this;
      this.setState(function () {
        return {
          fieldValue: _this5.getFieldValue()
        };
      }, function () {
        return _this5.updateBlocksPreview([blockId], false);
      });
    }
  }, {
    key: "updatePreviewRequestParams",
    value: function updatePreviewRequestParams(blockPreviewPagePreviewRequestParams) {
      var _this6 = this;
      var blocksIds = Object.keys(this.state.blocksMap);
      this.setState(function () {
        return {
          blockPreviewPagePreviewRequestParams: blockPreviewPagePreviewRequestParams
        };
      }, function () {
        return _this6.updateBlocksPreview(blocksIds);
      });
    }
  }, {
    key: "handleOnBlockClick",
    value: function handleOnBlockClick(activeBlockId) {
      this.setState(function () {
        return {
          activeBlockId: activeBlockId
        };
      });
    }
  }, {
    key: "handleClickOutsideBlock",
    value: function handleClickOutsideBlock(_ref8) {
      var target = _ref8.target;
      var block = target.closest('.c-pb-block-preview');
      if (block) {
        return;
      }
      this.setState(function () {
        return {
          activeBlockId: null
        };
      });
    }
  }, {
    key: "handleClipboardChange",
    value: function handleClipboardChange(event) {
      this.setClipboardBlocks(event.detail.content);
    }
  }, {
    key: "setClipboardBlocks",
    value: function setClipboardBlocks(block) {
      if (!block) {
        return;
      }
      var blocksConfig = this.props.blocksConfig;
      var blockConfig = blocksConfig.find(function (configEntry) {
        return configEntry.type === block.type;
      });
      if (!blockConfig) {
        return;
      }
      var clipboardCategory = Translator.trans(/*@Desc("Clipboard")*/'clipboard', {}, 'ibexa_page_builder');
      var clipboardBlockConfig = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(blockConfig);
      clipboardBlockConfig.copyOf = block;
      clipboardBlockConfig.category = clipboardCategory;
      this.setState({
        clipboardBlockConfig: clipboardBlockConfig
      });
    }
  }, {
    key: "validateAllBlocksAvailability",
    value: function validateAllBlocksAvailability() {
      var blocks = this.props.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
      var blocksConfig = this.props.blocksConfig;
      return blocks.every(function (block) {
        var blockConfig = blocksConfig.find(function (config) {
          return config.type === block.type;
        });
        return blockConfig.visible;
      });
    }
  }, {
    key: "createBlocksPreviewNodes",
    value: function createBlocksPreviewNodes() {
      var fieldValue = this.getPageFieldTypeState();
      var preview = this.getPreviewDocument();
      fieldValue.zones.forEach(function (zone) {
        zone.blocks.forEach(function (block) {
          var container = document.createElement(ELEMENT_DIV);
          container.dataset.ezBlockId = block.id;
          container.dataset.zoneId = zone.id;
          preview.querySelector("[data-ibexa-zone-id=\"".concat(zone.id, "\"]")).append(container);
        });
      });
      this.setState(function () {
        return {
          shouldCreateBlocksPreviewNodes: false
        };
      });
    }
  }, {
    key: "initBlocksTypeMap",
    value: function initBlocksTypeMap(blocksConfig) {
      var blocksTypeMap = new Map();
      blocksConfig.forEach(function (blockConfig) {
        blocksTypeMap.set(blockConfig.type, blockConfig.name);
      });
      return blocksTypeMap;
    }
  }, {
    key: "initBlocksIconMap",
    value: function initBlocksIconMap(blocksConfig) {
      var blocksIconMap = new Map();
      blocksConfig.forEach(function (blockConfig) {
        blocksIconMap.set(blockConfig.type, blockConfig.thumbnail);
      });
      return blocksIconMap;
    }
  }, {
    key: "initBlocksIdMap",
    value: function initBlocksIdMap(fieldValue, blocksConfig) {
      var blocksIdMap = new Map();
      var blockNameCount = {};
      var blocksTypeMap = this.initBlocksTypeMap(blocksConfig);
      fieldValue.zones.forEach(function (zone) {
        zone.blocks.forEach(function (_ref9) {
          var id = _ref9.id,
            type = _ref9.type;
          var blockName = blocksTypeMap.get(type);
          blockNameCount[blockName] = (blockNameCount[blockName] || 0) + 1;
          blocksIdMap.set(id, "".concat(blockName, " #").concat(blockNameCount[blockName]));
        });
      });
      return blocksIdMap;
    }
  }, {
    key: "initBlocksMap",
    value: function initBlocksMap() {
      var _this7 = this;
      var blocks = this.props.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
      var blocksConfig = this.props.blocksConfig;
      var blocksMap = blocks.reduce(function (total, block) {
        var blockConfig = blocksConfig.find(function (config) {
          return config.type === block.type;
        });
        total[block.id] = _objectSpread(_objectSpread({}, BLOCKS_BASE_STATE), {}, {
          config: blockConfig,
          isValid: _this7.validateBlockData(block, blockConfig),
          isVisible: block.visible
        });
        return total;
      }, {});
      return blocksMap;
    }
  }, {
    key: "initBlocksPreviewState",
    value: function initBlocksPreviewState() {
      var _this8 = this;
      var blocksMap = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(this.state.blocksMap);
      Object.entries(blocksMap).forEach(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
          id = _ref11[0],
          meta = _ref11[1];
        meta.preview = _this8.getBlockPreviewNode(id).innerHTML;
      });
      this.setState(function () {
        return {
          blocksMap: blocksMap,
          shouldUpdateBlocksPreviewState: false
        };
      });
    }
  }, {
    key: "getLastBlockTypeNumber",
    value: function getLastBlockTypeNumber(type) {
      var highestValue = 0;
      var _iterator = _createForOfIteratorHelper(this.state.blocksIdMap.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var value = _step.value;
          if (value.includes(type)) {
            var lastDigits = value.split('#').at(-1).replace(')', '');
            var lastNumber = parseInt(lastDigits, 10);
            if (lastNumber > highestValue) {
              highestValue = lastNumber;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return highestValue;
    }
  }, {
    key: "getBlocksFromZones",
    value: function getBlocksFromZones() {
      return this.state.fieldValue.zones.reduce(function (total, zone) {
        return [].concat(_toConsumableArray(total), _toConsumableArray(zone.blocks));
      }, []);
    }
  }, {
    key: "validateAllBlocksData",
    value: function validateAllBlocksData() {
      var _this$areBlocksValid = this.areBlocksValid(),
        areValid = _this$areBlocksValid.areValid,
        blocksMap = _this$areBlocksValid.blocksMap;
      if (areValid) {
        return true;
      }
      this.setState(function () {
        return {
          blocksMap: blocksMap
        };
      });
      return false;
    }
  }, {
    key: "validateLayoutData",
    value: function validateLayoutData() {
      return this.state.isValidActiveLayout;
    }
  }, {
    key: "setBlockValidState",
    value: function setBlockValidState(block) {
      var isValid = this.validateBlockData(block, this.state.blocksMap[block.id].config);
      return _objectSpread(_objectSpread({}, block), {}, {
        isValid: isValid
      });
    }
  }, {
    key: "areBlocksValid",
    value: function areBlocksValid() {
      var _this9 = this;
      var blocksMap = this.getBlocksMapState();
      this.state.fieldValue.zones.forEach(function (zone) {
        zone.blocks.forEach(function (block) {
          var isValid = _this9.validateBlockData(block, blocksMap[block.id].config);
          if (!isValid) {
            blocksMap[block.id] = _objectSpread(_objectSpread({}, (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(blocksMap[block.id])), {}, {
              isValid: false
            });
          }
          blocksMap[block.id].shouldDisplayError = !blocksMap[block.id].isValid;
        });
      });
      return {
        blocksMap: blocksMap,
        areValid: Object.values(blocksMap).every(function (block) {
          return block.isValid;
        })
      };
    }
  }, {
    key: "validateBlockData",
    value: function validateBlockData(block, config) {
      if (config.visible) {
        return block.attributes.every(function (attribute) {
          var _attrConfig$constrain;
          var attrConfig = config.attributes.find(function (attributeConfig) {
            return attributeConfig.id === attribute.name;
          });
          if (attrConfig !== null && attrConfig !== void 0 && (_attrConfig$constrain = attrConfig.constraints) !== null && _attrConfig$constrain !== void 0 && _attrConfig$constrain.not_blank) {
            var value = attribute.value;
            if (value === null || value === undefined || value === '') {
              return false;
            }
            return !!"".concat(value).trim().length;
          }
          return true;
        });
      }
      return false;
    }
  }, {
    key: "updateBlocksPreview",
    value: function updateBlocksPreview(blockIds) {
      var _this10 = this;
      var emitChangeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var blocksMap = this.getBlocksMapState();
      var hasBlockIds = Array.isArray(blockIds) && blockIds.length;
      blockIds = hasBlockIds ? blockIds : this.getBlocksFromZones().map(function (block) {
        return block.id;
      });
      var page = this.stringifyPageFieldTypeState();
      var now = new Date().getTime();
      var referenceTimestamp = Math.max(now, this.state.timestamp);
      var promise = (0,_services_preview_service__WEBPACK_IMPORTED_MODULE_17__.getBlockPreview)({
        page: page,
        blockIds: blockIds,
        intent: this.props.mode,
        parameters: _objectSpread(_objectSpread({}, this.props.blockPreviewRequestParams), {}, {
          intentParameters: this.props.intentParameters,
          pagePreview: _objectSpread({
            referenceTimestamp: Math.floor(referenceTimestamp / 1000)
          }, this.state.blockPreviewPagePreviewRequestParams)
        })
      }, this.props.previewSiteaccess);
      var blocksToUpdate = blockIds.reduce(function (output, id) {
        return _objectSpread(_objectSpread({}, output), {}, _defineProperty({}, id, {
          html: "\n                        <div class=\"c-pb-block-preview__loader-container\">\n                            <div class=\"c-pb-block-preview__loader\"></div>\n                        </div>\n                    ",
          data: {
            visible: blocksMap[id].isVisible,
            isNew: true,
            loading: true
          }
        }));
      }, {});
      this.setPageFieldTypeFormFieldValue(page, emitChangeEvent);
      this.updateBlocksPreviewState({
        blocks: blocksToUpdate
      });
      promise.then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this10.updateBlocksPreviewState(data, true);
      }).then(function (detail) {
        window.setTimeout(function () {
          _this10.getPreviewDocument().body.dispatchEvent(new CustomEvent('ibexa-post-update-blocks-preview', {
            detail: {
              fieldValue: detail.fieldValue,
              blocksMap: detail.blocksMap,
              blockIds: detail.blockIds
            }
          }));
        }, 0);
      })["catch"](function (error) {
        var message = Translator.trans(/*@Desc("Cannot update blocks preview")*/'block.cannot_update', {}, 'ibexa_page_builder');
        _this10.addNotification({
          message: message,
          type: _components_notification_notification_js__WEBPACK_IMPORTED_MODULE_14__.NOTIFICATION_TYPE.ERROR
        });
        console.error('Cannot update blocks preview', error);
      });
    }
  }, {
    key: "updateBlocksPreviewState",
    value: function updateBlocksPreviewState(data) {
      var _this11 = this;
      var blockIds = [];
      var blocksMap = this.getBlocksMapState();
      var fieldValue = this.getPageFieldTypeState();
      Object.entries(data.blocks).forEach(function (_ref12) {
        var _meta$data$isNew;
        var _ref13 = _slicedToArray(_ref12, 2),
          id = _ref13[0],
          meta = _ref13[1];
        if (!blocksMap[id]) {
          return;
        }
        var _fieldValue$zones$red = fieldValue.zones.reduce(function (total, zone) {
            return [].concat(_toConsumableArray(total), [zone.blocks.find(function (blockEntry) {
              return blockEntry.id === id;
            })]);
          }, []).filter(function (blockEntry) {
            return blockEntry;
          }),
          _fieldValue$zones$red2 = _slicedToArray(_fieldValue$zones$red, 1),
          block = _fieldValue$zones$red2[0];
        blocksMap[id].isNew = (_meta$data$isNew = meta.data.isNew) !== null && _meta$data$isNew !== void 0 ? _meta$data$isNew : false;
        blocksMap[id].preview = meta.html;
        blocksMap[id].isVisible = meta.data.visible;
        blocksMap[id].shouldDisplayError = true;
        blocksMap[id].isValid = _this11.validateBlockData(block, blocksMap[id].config);
        blockIds.push(id);
      });
      this.setState(function () {
        return {
          blocksMap: blocksMap
        };
      });
      return {
        blockIds: blockIds,
        blocksMap: blocksMap,
        fieldValue: fieldValue
      };
    }
  }, {
    key: "updateTimelineEvents",
    value: function updateTimelineEvents() {
      var page = this.stringifyPageFieldTypeState();
      var promise = (0,_services_timeline_service__WEBPACK_IMPORTED_MODULE_18__.getTimelineEvents)({
        page: page,
        intent: this.props.mode,
        parameters: _objectSpread(_objectSpread({}, this.props.timelineGetEventsRequestParams), {}, {
          intentParameters: this.props.intentParameters,
          pagePreview: {
            referenceTimestamp: parseInt(this.state.timestamp / 1000, 10)
          }
        })
      });
      promise.then(function (response) {
        return response.json();
      }).then(this.updateTimelineEventsState);
    }
  }, {
    key: "updateTimelineEventsState",
    value: function updateTimelineEventsState(data) {
      this.setState(function () {
        return {
          timelineEvents: data.events
        };
      });
    }
  }, {
    key: "getBlocksMapState",
    value: function getBlocksMapState() {
      return (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(this.state.blocksMap);
    }
  }, {
    key: "getPageFieldTypeState",
    value: function getPageFieldTypeState() {
      return (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(this.state.fieldValue);
    }
  }, {
    key: "stringifyPageFieldTypeState",
    value: function stringifyPageFieldTypeState() {
      return JSON.stringify(this.state.fieldValue);
    }
  }, {
    key: "setPageFieldTypeFormFieldValue",
    value: function setPageFieldTypeFormFieldValue(page) {
      var emitChangeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var fieldSelector = this.props.pageFieldValueSelector.trim();
      if (!fieldSelector || !fieldSelector.length) {
        console.error('Missing page fieldtype form field selector!');
        return;
      }
      var pageFieldInput = document.querySelector(fieldSelector);
      pageFieldInput.value = page;
      if (emitChangeEvent) {
        pageFieldInput.dispatchEvent(new CustomEvent('change'));
      }
    }
  }, {
    key: "handleBlockDataUpdate",
    value: function handleBlockDataUpdate(_ref14) {
      var _this12 = this;
      var blockData = _ref14.blockData,
        isVisible = _ref14.isVisible;
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      fieldValue.zones = fieldValue.zones.map(function (zone) {
        zone.blocks = zone.blocks.map(function (block) {
          if (block.id === blockData.id) {
            block = blockData;
          }
          return _objectSpread({}, block);
        });
        return zone;
      });
      blocksMap[blockData.id].isVisible = !!isVisible;
      this.setState(function () {
        return {
          fieldValue: fieldValue,
          blocksMap: blocksMap
        };
      }, function () {
        _this12.updateBlocksPreview([blockData.id]);
        _this12.updateTimelineEvents();
      });
    }
  }, {
    key: "getPreviewWindow",
    value: function getPreviewWindow() {
      return this._refIframeComponent._refIframe.contentWindow;
    }
  }, {
    key: "getPreviewDocument",
    value: function getPreviewDocument() {
      return this._refIframeComponent._refIframe.contentDocument;
    }
  }, {
    key: "getBlockPreviewNode",
    value: function getBlockPreviewNode(id) {
      return this.getPreviewDocument().querySelector("[data-ez-block-id=\"".concat(id, "\"]:not(").concat(SELECTOR_PLACEHOLDER, ")"));
    }
  }, {
    key: "getPlaceholderPreviewNode",
    value: function getPlaceholderPreviewNode() {
      return this.getPreviewDocument().querySelector(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "removeBlockDataFromZone",
    value: function removeBlockDataFromZone(zones, blockId) {
      return zones.map(function (zone) {
        zone.blocks = zone.blocks.filter(function (block) {
          return block.id !== blockId;
        });
        return zone;
      });
    }
  }, {
    key: "insertBlockDataIntoZone",
    value: function insertBlockDataIntoZone(zones, newBlock, zoneId, nextBlockId) {
      var updatedZones = zones.map(function (zone) {
        var isSameZone = zone.id === zoneId;
        if (isSameZone && nextBlockId) {
          var nextBlock = zone.blocks.find(function (block) {
            return block.id === nextBlockId;
          });
          var insertIndex = nextBlock ? zone.blocks.indexOf(nextBlock) : 0;
          zone.blocks.splice(insertIndex, 0, newBlock);
        } else if (isSameZone && !nextBlockId) {
          zone.blocks = [].concat(_toConsumableArray(zone.blocks), [newBlock]);
        }
        return zone;
      });
      this.handleOnBlockClick(newBlock.id);
      return updatedZones;
    }
  }, {
    key: "getBlock",
    value: function getBlock(target) {
      return this.props.getElement(target, function (element) {
        return element.dataset && element.dataset.ezBlockId;
      });
    }
  }, {
    key: "handleBlockRemove",
    value: function handleBlockRemove(block) {
      var _this13 = this;
      var emitChangeEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      fieldValue.zones = this.removeBlockDataFromZone(fieldValue.zones, block.id);
      delete blocksMap[block.id];
      this.setState(function () {
        return {
          draggedSidebarBlockType: null,
          draggedPreviewBlockData: null,
          fieldValue: fieldValue,
          blocksMap: blocksMap
        };
      }, function () {
        _this13.setPageFieldTypeFormFieldValue(_this13.stringifyPageFieldTypeState(), emitChangeEvent);
        _this13.updateTimelineEvents();
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.unsetDocumentDragOverEventHandler();
      if (this.state.draggedSidebarBlockType) {
        this.handleDropSidebarBlock();
      } else if (this.state.draggedPreviewBlockData) {
        this.handleDropPreviewBlock();
      }
      this.clearZoneDragOverState(event.currentTarget);
    }
  }, {
    key: "clearZoneDragOverState",
    value: function clearZoneDragOverState(zone) {
      zone.classList.remove(CLASS_ZONE_DRAGOVER);
      return zone;
    }
  }, {
    key: "cancelDropState",
    value: function cancelDropState() {
      var initDragDropState = this.props.getInitDragDropState();
      this.unsetDocumentDragOverEventHandler();
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          isOverZone: false,
          dragOverZoneId: null
        });
      });
    }
  }, {
    key: "handleDropPreviewBlock",
    value: function handleDropPreviewBlock() {
      var _placeholder$classLis,
        _this14 = this;
      var placeholder = this.getPlaceholderPreviewNode();
      if (!placeholder) {
        return this.cancelDropState();
      }
      var data = this.state.draggedPreviewBlockData;
      var zoneId = placeholder.dataset.zoneId;
      var nextBlockId = this.props.findNextElementIdentifier(placeholder, IDENTIFIER_BLOCK_DATA_ATTRIBUTE);
      var fieldValue = this.getPageFieldTypeState();
      var initDragDropState = this.props.getInitDragDropState();
      var droppedBlockId = data.block.id;
      var dragImage = document.querySelector("[data-ibexa-toolbox-block-type=\"".concat(data.meta.config.type, "\"]"));
      var blocksMap = this.getBlocksMapState();
      if (nextBlockId === droppedBlockId) {
        fieldValue.zones.forEach(function (zone) {
          var nextBlockData = zone.blocks.find(function (block) {
            return block.id === nextBlockId;
          });
          if (nextBlockData) {
            var afterNextBlockIndex = zone.blocks.indexOf(nextBlockData) + 1;
            nextBlockId = zone.blocks[afterNextBlockIndex] ? zone.blocks[afterNextBlockIndex].id : null;
          }
        });
      }
      fieldValue.zones = this.removeBlockDataFromZone(_toConsumableArray(fieldValue.zones), data.block.id);
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, data.block, zoneId, nextBlockId);
      blocksMap[data.block.id].isNew = false;
      data.unMountBlock();
      (_placeholder$classLis = placeholder.classList).add.apply(_placeholder$classLis, _toConsumableArray(data.wrapperClasses));
      placeholder.classList.remove(CLASS_PLACEHOLDER);
      placeholder.dataset.ezBlockId = data.block.id;
      dragImage.hidden = true;
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          fieldValue: fieldValue,
          blocksMap: blocksMap
        });
      }, function () {
        return _this14.setPageFieldTypeFormFieldValue(_this14.stringifyPageFieldTypeState());
      });
    }
  }, {
    key: "handleDropSidebarBlock",
    value: function handleDropSidebarBlock() {
      var _this15 = this;
      var placeholder = this.getPlaceholderPreviewNode();
      if (!placeholder) {
        return this.cancelDropState();
      }
      var _this$state4 = this.state,
        isDraggedSidebarBlockFromClipboard = _this$state4.isDraggedSidebarBlockFromClipboard,
        clipboardBlockConfig = _this$state4.clipboardBlockConfig;
      var config = isDraggedSidebarBlockFromClipboard ? clipboardBlockConfig : this.props.blocksConfig.find(function (configEntry) {
        return configEntry.type === _this15.state.draggedSidebarBlockType;
      });
      var newBlock = this.createNewBlock(config);
      var zoneId = placeholder.dataset.zoneId;
      var nextBlockId = this.props.findNextElementIdentifier(placeholder, IDENTIFIER_BLOCK_DATA_ATTRIBUTE);
      var fieldValue = this.getPageFieldTypeState();
      var blocksMap = this.getBlocksMapState();
      var initDragDropState = this.props.getInitDragDropState();
      var blocksIdMap = new Map(this.state.blocksIdMap);
      var blockName = this.state.blocksTypeMap.get(newBlock.type);
      var lastBlockTypeNumber = this.getLastBlockTypeNumber(blockName);
      fieldValue.zones = this.insertBlockDataIntoZone(fieldValue.zones, newBlock, zoneId, nextBlockId);
      blocksMap[newBlock.id] = _objectSpread(_objectSpread({}, BLOCKS_BASE_STATE), {}, {
        config: config,
        isVisible: true,
        isNew: true
      });
      blocksIdMap.set(newBlock.id, "".concat(blockName, " #").concat(lastBlockTypeNumber + 1));
      placeholder.classList.remove(CLASS_PLACEHOLDER);
      placeholder.classList.add(CLASS_HIGHLIGHT);
      placeholder.dataset.ezBlockId = newBlock.id;
      window.setTimeout(function () {
        var placeholders = _this15.getPreviewDocument().querySelectorAll('.c-pb-block-preview--highlighted');
        placeholders.forEach(function (placeholderElement) {
          placeholderElement.classList.remove(CLASS_HIGHLIGHT);
        });
      }, TIMEOUT_REMOVE_HIGHLIGHT);
      this.setState(function () {
        return _objectSpread(_objectSpread({}, initDragDropState), {}, {
          draggedPreviewBlockData: null,
          draggedSidebarBlockType: null,
          fieldValue: fieldValue,
          blocksMap: blocksMap,
          blocksIdMap: blocksIdMap
        });
      }, function () {
        return _this15.setPageFieldTypeFormFieldValue(_this15.stringifyPageFieldTypeState());
      });
    }
  }, {
    key: "createNewBlock",
    value: function createNewBlock(config) {
      if (config.copyOf) {
        var newBlock = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(config.copyOf);
        newBlock.id = (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_16__["default"])('b-');
        newBlock.attributes.forEach(function (attribute) {
          attribute.id = (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_16__["default"])('a-');
        });
        return newBlock;
      }
      return {
        id: (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_16__["default"])('b-'),
        type: config.type,
        name: config.name,
        view: Object.keys(config.views)[0],
        attributes: config.attributes.reduce(function (total, attr) {
          total.push({
            id: (0,_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_16__["default"])('a-'),
            name: attr.id,
            value: attr.value || null
          });
          return total;
        }, [])
      };
    }
  }, {
    key: "setClientYPosition",
    value: function setClientYPosition(_ref15) {
      var clientY = _ref15.clientY;
      this._clientY = clientY;
    }
  }, {
    key: "setDocumentDragOverEventHandler",
    value: function setDocumentDragOverEventHandler() {
      this.getPreviewDocument().addEventListener('dragover', this.setClientYPosition, false);
    }
  }, {
    key: "unsetDocumentDragOverEventHandler",
    value: function unsetDocumentDragOverEventHandler() {
      this.getPreviewDocument().removeEventListener('dragover', this.setClientYPosition);
    }
  }, {
    key: "handleDragStartSidebarBlock",
    value: function handleDragStartSidebarBlock(draggedSidebarBlockType, isDraggedSidebarBlockFromClipboard) {
      this.setDocumentDragOverEventHandler();
      this.setState(function () {
        return {
          draggedSidebarBlockType: draggedSidebarBlockType,
          isDraggedSidebarBlockFromClipboard: isDraggedSidebarBlockFromClipboard,
          draggedPreviewBlockData: null
        };
      }, this.attachDocumentDropListeners);
    }
  }, {
    key: "handleDragStartPreviewBlock",
    value: function handleDragStartPreviewBlock(draggedPreviewBlockData) {
      this.setDocumentDragOverEventHandler();
      this.setState(function () {
        return {
          draggedSidebarBlockType: null,
          draggedPreviewBlockData: draggedPreviewBlockData
        };
      }, this.attachDocumentDropListeners);
    }
  }, {
    key: "attachDocumentDropListeners",
    value: function attachDocumentDropListeners() {
      var _this16 = this;
      var elements = [this.getPreviewDocument(), document];
      elements.forEach(function (element) {
        element.ondragover = function () {
          return _this16.props.removePlaceholdersAfterTimeout(_this16.getPlaceholderNodes, _this16.handleDragOverTimeout);
        };
      });
    }
  }, {
    key: "handleDragOverTimeout",
    value: function handleDragOverTimeout() {
      this.cancelDropState();
    }
  }, {
    key: "handleIframeLoad",
    value: function handleIframeLoad() {
      var _this17 = this;
      if (this.state.iframeLoaded) {
        return;
      }
      var previewDoc = this.getPreviewDocument();
      var link = previewDoc.createElement('link');
      link.id = 'ibexa-pb-app-styles';
      link.rel = 'stylesheet';
      link.href = this.props.iframeCss;
      this.handleUndoRedoFromKeyboard();
      this.getPreviewDocument().body.appendChild(link);
      this.setState(function () {
        return {
          iframeLoaded: true
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-pb-app-iframe-loaded'));
        document.body.classList.remove(CLASS_PAGE_BUILDER_DISABLED);
        previewDoc.onbeforeunload = function () {
          return _this17.setState(function () {
            return {
              iframeLoaded: false
            };
          });
        };
      });
    }
  }, {
    key: "handleUndoRedoFromKeyboard",
    value: function handleUndoRedoFromKeyboard() {
      var previewDoc = this.getPreviewDocument();
      var handleKeyboard = function handleKeyboard(event) {
        var activeElement = event.currentTarget.activeElement;
        var isInputActiveElement = activeElement.tagName.toLowerCase() === 'input';
        var isTextAreaActiveElement = activeElement.tagName.toLowerCase() === 'textarea';
        if (isInputActiveElement || isTextAreaActiveElement) {
          return;
        }
        var isUndoPressed = ibexa.helpers.system.isUndoPressed(event);
        var isRedoPressed = ibexa.helpers.system.isRedoPressed(event);
        if (isUndoPressed) {
          event.preventDefault();
          document.body.dispatchEvent(new CustomEvent('ibexa-pb-history:undo'));
        }
        if (isRedoPressed) {
          event.preventDefault();
          document.body.dispatchEvent(new CustomEvent('ibexa-pb-history:redo'));
        }
      };
      previewDoc.addEventListener('keydown', handleKeyboard, false);
      document.addEventListener('keydown', handleKeyboard, false);
    }
  }, {
    key: "handleZoneDragOver",
    value: function handleZoneDragOver(_ref16) {
      var _this18 = this;
      var target = _ref16.target;
      var _this$state5 = this.state,
        dragOverZoneId = _this$state5.dragOverZoneId,
        placeholderType = _this$state5.placeholderType;
      var zoneId = target.dataset.ibexaZoneId;
      if (!zoneId || zoneId === dragOverZoneId && placeholderType === PLACEHOLDER_TYPE_ZONE) {
        return false;
      }
      this.setState(function () {
        return {
          placeholderType: PLACEHOLDER_TYPE_ZONE,
          dragOverZoneId: zoneId,
          isOverZone: true
        };
      }, function () {
        _this18.getPreviewDocument().querySelectorAll(SELECTOR_ZONE).forEach(_this18.clearZoneDragOverState);
        target.classList.add(CLASS_ZONE_DRAGOVER);
        _this18.props.addPlaceholderInZone(target, _this18.getPlaceholderNodes(), IDENTIFIER_BLOCK_DATA_ATTRIBUTE, _this18.handleElementDragOver);
      });
    }
  }, {
    key: "getPlaceholderNodes",
    value: function getPlaceholderNodes() {
      return this.getPreviewDocument().querySelectorAll(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "handleElementDragOver",
    value: function handleElementDragOver(_ref17) {
      var target = _ref17.target,
        clientY = _ref17.clientY,
        currentTarget = _ref17.currentTarget;
      var block = this.getBlock(target);
      var isPlaceholder = currentTarget.classList.contains(CLASS_PLACEHOLDER);
      if (!block || isPlaceholder) {
        return;
      }
      block.closest(SELECTOR_ZONE).classList.add(CLASS_ZONE_DRAGOVER);
      var placeholders = this.getPlaceholderNodes();
      var _this$state6 = this.state,
        placeholderPosition = _this$state6.placeholderPosition,
        placeholderElementId = _this$state6.placeholderElementId,
        placeholderZoneId = _this$state6.placeholderZoneId;
      var placeholderMeta = this.props.addPlaceholderBesideElement(block, clientY, placeholders, IDENTIFIER_BLOCK_DATA_ATTRIBUTE, this.handleElementDragOver, {
        placeholderPosition: placeholderPosition,
        placeholderElementId: placeholderElementId,
        placeholderZoneId: placeholderZoneId
      });
      this.setState(function () {
        return _objectSpread({
          placeholderType: 'block'
        }, placeholderMeta);
      });
    }
  }, {
    key: "toggleZoneColor",
    value: function toggleZoneColor(zone) {
      var noBlocks = _toConsumableArray(zone.children).every(function (zoneItem) {
        return zoneItem.classList.contains('m-page-builder__fieldset') || zoneItem.classList.contains('c-pb-block-preview--is-removing');
      });
      zone.classList.toggle(CLASS_ZONE_EMPTY, noBlocks);
    }
  }, {
    key: "manageZoneEventHandlers",
    value: function manageZoneEventHandlers() {
      var _this19 = this;
      var _this$state7 = this.state,
        noDropzones = _this$state7.noDropzones,
        notificationsMap = _this$state7.notificationsMap;
      var zones = _toConsumableArray(this.getPreviewDocument().querySelectorAll(SELECTOR_ZONE));
      var callToActionText = Translator.trans(/*@Desc("Drag and drop blocks here")*/'drag.drop.blocks.here', {}, 'ibexa_page_builder');
      var noZonesNotificationAdded = notificationsMap.has('notification-no-zones');
      if (!zones.length && !noDropzones && !noZonesNotificationAdded) {
        var message = Translator.trans(/*@Desc("There is no added zones in template")*/'notification.no_zones_in_template', {}, 'ibexa_page_builder');
        this.addNotification({
          id: 'notification-no-zones',
          message: message,
          type: _components_notification_notification_js__WEBPACK_IMPORTED_MODULE_14__.NOTIFICATION_TYPE.WARNING,
          noCloseBtn: true
        });
      }
      zones.forEach(function (zone, index) {
        var hasFieldset = zone.querySelector('fieldset') !== null;
        if (!hasFieldset) {
          var dropZoneLabel = Translator.trans(/*@Desc("Drop zone %number%")*/'structure.drop.zone', {
            number: index + 1
          }, 'ibexa_page_builder');
          var fieldset = document.createElement('fieldset');
          var legend = document.createElement('legend');
          fieldset.classList.add('m-page-builder__fieldset');
          legend.classList.add('m-page-builder__legend');
          fieldset.appendChild(legend);
          legend.textContent = dropZoneLabel;
          zone.insertBefore(fieldset, zone.firstChild);
          zone.classList.add(CLASS_ZONE);
        }
        _this19.toggleZoneColor(zone);
        zone.dataset.callToActionText = callToActionText;
        zone.ondragover = _this19.handleZoneDragOver;
        zone.ondragenter = _this19.handleZoneDragOver;
        zone.ondrop = _this19.handleDrop;
      });
    }
  }, {
    key: "disableInIframeClicks",
    value: function disableInIframeClicks() {
      this.getPreviewDocument().body.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
      this.getPreviewDocument().body.addEventListener('click', this.handleClickOutsideBlock, false);
    }
  }, {
    key: "renderPreviewBlocks",
    value: function renderPreviewBlocks() {
      this.getBlocksFromZones().forEach(this.renderSinglePreviewBlock);
    }
  }, {
    key: "renderSinglePreviewBlock",
    value: function renderSinglePreviewBlock(block) {
      var _blockNode$ibexaBlock,
        _this20 = this;
      var blockMeta = _objectSpread({}, this.state.blocksMap[block.id]);
      var blockNode = this.getBlockPreviewNode(block.id);
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var isEditable = this.state.timestamp <= convertDateToTimezone(new Date()).valueOf() && this.state.isValidActiveLayout;
      var blockConfig = this.props.blocksConfig.find(function (blockConfigEntry) {
        return blockConfigEntry.type === block.type;
      });
      var zoneId = blockNode.closest(SELECTOR_ZONE).dataset.ibexaZoneId;
      var blockNo = this.state.blocksIdMap.get(block.id);
      var label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, blockNo, ":"), " ", block.name);
      if (blockMeta.isNew) {
        if (window.getComputedStyle(blockNode).getPropertyValue('position') === 'static') {
          blockNode.style.position = 'relative';
        }
        this.props.customizeNewBlockNode(blockNode, {
          blockType: blockMeta.config.type,
          pageLayoutIdentifier: this.state.fieldValue.layout,
          zoneId: zoneId
        });
      }
      blockNode.ibexaBlockRoot = (_blockNode$ibexaBlock = blockNode.ibexaBlockRoot) !== null && _blockNode$ibexaBlock !== void 0 ? _blockNode$ibexaBlock : _react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(blockNode);
      blockNode.ibexaBlockRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_block_preview_block__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: block.id,
        ref: function ref(node) {
          _this20._blockPreviewRefs.set(block.id, node);
        },
        label: label,
        blockNo: blockNo,
        block: block,
        root: blockNode.ibexaBlockRoot,
        meta: blockMeta,
        onDragOver: this.handleElementDragOver,
        onDragStart: this.handleDragStartPreviewBlock,
        onDrag: this.handleDragBlock,
        onRemove: this.handleBlockRemove,
        onBlockDataUpdate: this.handleBlockDataUpdate,
        onConfigPopupOpen: this.requestForm,
        onDuplicate: this.duplicatePreviewBlock.bind(null, zoneId),
        udwContainer: this.udwContainer,
        airtimeContainer: this.airtimeContainer,
        previewWindow: this.getPreviewWindow(),
        isEditable: isEditable,
        isActive: this.state.activeBlockId === block.id,
        onClick: this.handleOnBlockClick,
        isAvailable: blockConfig.visible
      }));
    }
  }, {
    key: "handleDragBlock",
    value: function handleDragBlock() {
      this.props.scrollContainer({
        clientY: this._clientY
      }, this.getPreviewWindow());
    }
  }, {
    key: "requestForm",
    value: function requestForm(block) {
      this.blockConfigRequestForm.target = block.id;
      this.blockConfigTextarea.value = JSON.stringify(this.state.fieldValue);
      this.blockConfigBlocksInput.value = block.id;
      this.blockConfigRequestForm.submit();
    }
  }, {
    key: "getBlocksData",
    value: function getBlocksData(zones) {
      return zones.map(function (zone) {
        return _objectSpread(_objectSpread({}, zone), {}, {
          blocks: zone.blocks.map(function (block) {
            return block.data;
          })
        });
      });
    }
  }, {
    key: "handleLayoutSelectorCancelExternal",
    value: function handleLayoutSelectorCancelExternal() {
      var isValidActiveLayout = this.state.isValidActiveLayout;
      var isCreateMode = this.isCreateMode();
      if (isCreateMode || !isValidActiveLayout) {
        return false;
      }
      this.setState({
        isSwitchingLayout: false,
        hasLayoutValidationError: false
      });
      return true;
    }
  }, {
    key: "handleLayoutSelectorCancelInternal",
    value: function handleLayoutSelectorCancelInternal() {
      this.setState({
        isSwitchingLayout: !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself')),
        hasLayoutValidationError: false
      });
    }
  }, {
    key: "handleLayoutSelectorCancelOnCreate",
    value: function handleLayoutSelectorCancelOnCreate() {
      var previousHref = window.ibexa.pageBuilder.config.onCreateCancelURL;
      if (previousHref.length) {
        window.location.href = previousHref;
      } else {
        window.history.back();
      }
    }
  }, {
    key: "handleLayoutSelectorConfirm",
    value: function handleLayoutSelectorConfirm(layoutId) {
      var _this21 = this;
      var zones = this.createZonesStructure(layoutId);
      var fieldValue = this.getPageFieldTypeState();
      var isSwitchingLayout = this.state.isSwitchingLayout;
      fieldValue.layout = layoutId;
      fieldValue.zones = zones;
      this.setState(function () {
        return {
          iframeLoaded: false,
          isSwitchingLayout: !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself')),
          hasLayoutValidationError: false,
          shouldCreateBlocksPreviewNodes: isSwitchingLayout,
          fieldValue: fieldValue,
          layoutSelected: true,
          isValidActiveLayout: _this21.isValidActiveLayout(fieldValue)
        };
      }, function () {
        _this21.setPageFieldTypeFormFieldValue(_this21.stringifyPageFieldTypeState());
        window.document.querySelector(SELECTOR_SAVE_DRAFT).click();
      });
    }
  }, {
    key: "createZonesStructure",
    value: function createZonesStructure(layoutId) {
      var layoutConfig = this.props.layoutsConfig.find(function (layout) {
        return layout.id === layoutId;
      });
      var fieldValue = this.getPageFieldTypeState();
      var zones = _toConsumableArray(layoutConfig.zones).map(function (zone) {
        zone.blocks = [];
        return zone;
      });
      if (this.state.isSwitchingLayout) {
        fieldValue.zones.forEach(function (zone, index) {
          var zoneToAddBlocks = zones[index] || zones[zones.length - 1];
          zoneToAddBlocks.blocks = [].concat(_toConsumableArray(zoneToAddBlocks.blocks), _toConsumableArray(zone.blocks));
        });
      }
      return zones;
    }
  }, {
    key: "setSettingsModalVisible",
    value: function setSettingsModalVisible() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSettingsModalVisible: !state.isSettingsModalVisible
        });
      });
    }
  }, {
    key: "goToSettings",
    value: function goToSettings() {
      var editDropdownId = '#user_setting_update_block_settings';
      window.location.href = "".concat(Routing.generate('ibexa.user_settings.update', {
        identifier: 'content_edit'
      })).concat(editDropdownId);
    }
  }, {
    key: "renderSettingsModal",
    value: function renderSettingsModal() {
      var isSettingsModalVisible = this.state.isSettingsModalVisible;
      var _ibexa$adminUiConfig$ = ibexa.adminUiConfig.isPageBuilderVisited,
        isPageBuilderVisited = _ibexa$adminUiConfig$ === void 0 ? false : _ibexa$adminUiConfig$;
      if (!isSettingsModalVisible || !this.modalContainer || isPageBuilderVisited) {
        return null;
      }
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_settings_popup_settings_popup__WEBPACK_IMPORTED_MODULE_11__["default"], {
        isVisible: isSettingsModalVisible,
        onContinue: this.setSettingsModalVisible,
        onChangeSettings: this.goToSettings
      }), this.modalContainer);
    }
  }, {
    key: "renderLayoutSelector",
    value: function renderLayoutSelector() {
      var _this$state8 = this.state,
        fieldValue = _this$state8.fieldValue,
        layoutSelectorTitle = _this$state8.layoutSelectorTitle,
        layoutSelectorConfirmBtnLabel = _this$state8.layoutSelectorConfirmBtnLabel,
        isSwitchingLayout = _this$state8.isSwitchingLayout,
        layoutSelected = _this$state8.layoutSelected,
        isValidActiveLayout = _this$state8.isValidActiveLayout;
      var layoutsConfig = this.props.layoutsConfig;
      var isOnlyOneLayout = this.isOnlyOneLayout();
      var isCreateMode = this.isCreateMode();
      if (layoutSelected) {
        return null;
      }
      if (isOnlyOneLayout && isCreateMode) {
        this.handleLayoutSelectorConfirm(fieldValue.layout);
        return null;
      }
      if (!isCreateMode && !isSwitchingLayout) {
        return null;
      }
      var attrs = {
        layouts: layoutsConfig,
        onCancel: isCreateMode ? this.handleLayoutSelectorCancelOnCreate : this.handleLayoutSelectorCancelInternal,
        onConfirm: this.handleLayoutSelectorConfirm,
        modalContainer: this.modalContainer,
        itemSelectedId: fieldValue.layout,
        title: layoutSelectorTitle,
        confirmBtnLabel: layoutSelectorConfirmBtnLabel,
        isVisible: isSwitchingLayout,
        isValidActiveLayout: isValidActiveLayout,
        isCreateMode: isCreateMode,
        displaySaveDraftWarning: !isCreateMode
      };
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_selector_layout_selector__WEBPACK_IMPORTED_MODULE_9__["default"], attrs), this.pageBuilderConfigPanelWrapper);
    }
  }, {
    key: "renderLayoutSwitcher",
    value: function renderLayoutSwitcher() {
      if (this.isOnlyOneLayout()) {
        return null;
      }
      var _this$state9 = this.state,
        isSwitchingLayout = _this$state9.isSwitchingLayout,
        isValidActiveLayout = _this$state9.isValidActiveLayout,
        hasLayoutValidationError = _this$state9.hasLayoutValidationError;
      var onClick = isSwitchingLayout ? this.handleLayoutSelectorCancelInternal : this.showLayoutSelector;
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_switcher_layout_switcher__WEBPACK_IMPORTED_MODULE_10__["default"], {
        isSwitchingLayout: isSwitchingLayout,
        onClick: onClick,
        isDisabled: !isValidActiveLayout,
        hasErrorState: hasLayoutValidationError && !isSwitchingLayout
      }), this.layoutSwitcherContainer);
    }
  }, {
    key: "isOnlyOneLayout",
    value: function isOnlyOneLayout() {
      return this.props.layoutsConfig.filter(function (layout) {
        return layout.visible;
      }).length === 1;
    }
  }, {
    key: "setIsEditableState",
    value: function setIsEditableState(oldTimestamp, selectedTimestamp) {
      var _this22 = this;
      var blocksIds = Object.keys(this.state.blocksMap);
      this.setState(function () {
        return {
          timestamp: selectedTimestamp
        };
      }, function () {
        return _this22.updateBlocksPreview(blocksIds);
      });
    }
  }, {
    key: "renderTimeline",
    value: function renderTimeline() {
      var timelineEvents = this.state.timelineEvents;
      var referenceTimestamp = this.props.referenceTimestamp;
      var attrs = {
        onTimelineEventSelect: this.setIsEditableState,
        events: timelineEvents,
        selectedTimestamp: referenceTimestamp * 1000
      };
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_module__WEBPACK_IMPORTED_MODULE_15__["default"], attrs), this.timelineContainer);
    }
  }, {
    key: "showLayoutSelector",
    value: function showLayoutSelector() {
      var _this23 = this;
      var layoutSelectorTitle = Translator.trans(/*@Desc("Switch layout")*/'layout_selector.switch.title', {}, 'ibexa_page_builder');
      var layoutSelectorConfirmBtnLabel = Translator.trans(/*@Desc("Submit")*/'layout_selector.switch.confirm.label', {}, 'ibexa_page_builder');
      this.setState(function () {
        return {
          isSwitchingLayout: document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
            cancelable: true,
            detail: {
              settings: {
                onClose: _this23.handleLayoutSelectorCancelExternal
              }
            }
          })),
          hasLayoutValidationError: false,
          layoutSelected: false,
          layoutSelectorTitle: layoutSelectorTitle,
          layoutSelectorConfirmBtnLabel: layoutSelectorConfirmBtnLabel
        };
      });
    }
  }, {
    key: "renderIframe",
    value: function renderIframe() {
      var _this$state10 = this.state,
        isIframelessMode = _this$state10.isIframelessMode,
        previewUrl = _this$state10.previewUrl,
        iframeLoaded = _this$state10.iframeLoaded;
      if (isIframelessMode) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: this.setIframeRef,
        onLoad: this.handleIframeLoad,
        src: previewUrl,
        isLoading: !iframeLoaded
      });
    }
  }, {
    key: "renderActiveLayoutError",
    value: function renderActiveLayoutError() {
      if (this.state.isValidActiveLayout) {
        return null;
      }
      var errorMessage = Translator.trans(/*@Desc("The layout of this landing page is no longer available and you cannot publish it. Please select a different layout.")*/'layout_selector.error.label', {}, 'ibexa_page_builder');
      var errorButtonMessage = Translator.trans(/*@Desc("Change layout")*/'layout_selector.error.change_layout', {}, 'ibexa_page_builder');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__active-layout-error"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__active-layout-error-content container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__active-layout-error-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_21__["default"], {
        name: "warning",
        extraClasses: "ibexa-icon--medium"
      }), errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn btn-primary",
        onClick: this.showLayoutSelector,
        type: "button"
      }, errorButtonMessage)));
    }
  }, {
    key: "setIframeRef",
    value: function setIframeRef(ref) {
      this._refIframeComponent = ref;
    }
  }, {
    key: "setSidebarSide",
    value: function setSidebarSide() {
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSidebarLeftSide: !state.isSidebarLeftSide
        });
      });
    }
  }, {
    key: "scrollIntoBlockPreview",
    value: function scrollIntoBlockPreview(blockId) {
      var iframeDocument = this.getPreviewDocument();
      var blockPreview = iframeDocument.querySelector("[data-ez-block-id=\"".concat(blockId, "\"]"));
      blockPreview.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "hoverInBlockPreview",
    value: function hoverInBlockPreview(blockId) {
      this.toggleHoverBlockPreview(blockId, true);
    }
  }, {
    key: "hoverOutBlockPreview",
    value: function hoverOutBlockPreview(blockId) {
      this.toggleHoverBlockPreview(blockId, false);
    }
  }, {
    key: "toggleHoverBlockPreview",
    value: function toggleHoverBlockPreview(blockId, isHovered) {
      var iframeDocument = this.getPreviewDocument();
      var blockPreviewActionMenu = iframeDocument.querySelector("[data-ez-block-id=\"".concat(blockId, "\"] > .c-pb-action-menu"));
      if (blockPreviewActionMenu) {
        blockPreviewActionMenu.classList.toggle(CLASS_BLOCK_PREVIEW_HOVERED, isHovered);
      }
    }
  }, {
    key: "getPreviewBlockRef",
    value: function getPreviewBlockRef(blockId) {
      var blockPreviewRef = this._blockPreviewRefs.get(blockId);
      return blockPreviewRef;
    }
  }, {
    key: "handleStructureViewEvent",
    value: function handleStructureViewEvent(event) {
      var _event$detail = event.detail,
        blockId = _event$detail.blockId,
        action = _event$detail.action;
      var blockPreviewRef = this.getPreviewBlockRef(blockId);
      if (!blockPreviewRef) {
        return;
      }
      switch (action) {
        case 'remove':
          blockPreviewRef.removeBlock();
          break;
        case 'configure':
          blockPreviewRef.prepareConfigPopup(event);
          break;
        case 'refresh':
          blockPreviewRef.refreshBlock();
          break;
        case 'duplicate':
          blockPreviewRef.duplicateBlock();
          break;
        case 'clipboard-copy':
          blockPreviewRef.copyBlockToClipboard();
          break;
      }
    }
  }, {
    key: "handleMoveEvent",
    value: function handleMoveEvent(_ref18) {
      var detail = _ref18.detail;
      var blockId = detail.blockId,
        action = detail.action;
      var zones = this.state.fieldValue.zones;
      var findBlockById = function findBlockById(findBlockId) {
        var _iterator2 = _createForOfIteratorHelper(zones),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var zone = _step2.value;
            var blockElement = zone.blocks.find(function (block) {
              return block.id === findBlockId;
            });
            if (blockElement) {
              return blockElement;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return null;
      };
      var findZoneAndBlockIndex = function findZoneAndBlockIndex(findBlockId) {
        for (var i = 0; i < zones.length; i++) {
          var _blockIndex = zones[i].blocks.findIndex(function (block) {
            return block.id === findBlockId;
          });
          if (_blockIndex !== -1) {
            return {
              zoneIndex: i,
              blockIndex: _blockIndex
            };
          }
        }
        return null;
      };
      var block = findBlockById(blockId);
      var _findZoneAndBlockInde = findZoneAndBlockIndex(blockId),
        zoneIndex = _findZoneAndBlockInde.zoneIndex,
        blockIndex = _findZoneAndBlockInde.blockIndex;
      var lastZoneIndex = zones.length - 1;
      var lastZoneBlockIndex = zones[lastZoneIndex].blocks.length > 0 ? zones[lastZoneIndex].blocks.length - 1 : 0;
      var lastBlockIndex = zones[zoneIndex].blocks.length > 0 ? zones[zoneIndex].blocks.length - 1 : 0;
      var destinationPosition = null;
      var destinationZoneKey = zoneIndex;
      var positionChangeMethod = POSITION_CHANGE_METHOD.ARROWS;
      this.hoverOutBlockPreview(blockId);
      switch (action) {
        case 'move':
          destinationZoneKey = detail.destinationZoneKey;
          destinationPosition = detail.destinationPosition;
          positionChangeMethod = POSITION_CHANGE_METHOD.DRAG;
          break;
        case 'move-up':
          if (blockIndex === 0 && zoneIndex === 0) {
            return;
          }
          destinationPosition = blockIndex - 1;
          if (blockIndex === 0) {
            destinationZoneKey = zoneIndex - 1;
            destinationPosition = zones[destinationZoneKey].blocks.length;
          }
          break;
        case 'move-down':
          if (blockIndex === lastZoneBlockIndex && zoneIndex === lastZoneIndex) {
            return;
          }
          destinationPosition = blockIndex + 1;
          if (blockIndex === lastBlockIndex) {
            destinationZoneKey = zoneIndex + 1;
            destinationPosition = 0;
          }
          break;
      }
      this.reorderPreviewBlock(block, {
        destinationZoneKey: destinationZoneKey,
        destinationPosition: destinationPosition,
        positionChangeMethod: positionChangeMethod
      }, true);
    }
  }, {
    key: "addNotification",
    value: function addNotification(notificationConfig) {
      this.setState(function (prevState) {
        var customId = notificationConfig.id;
        var notificationsMap = new Map(prevState.notificationsMap);
        var id = customId ? customId : "notification-".concat(notificationsMap.size);
        notificationsMap.set(id, _objectSpread({}, notificationConfig));
        return {
          notificationsMap: notificationsMap
        };
      });
    }
  }, {
    key: "removeNotification",
    value: function removeNotification(key) {
      var _this24 = this;
      this.setState(function () {
        var notificationsMap = new Map(_this24.state.notificationsMap);
        notificationsMap["delete"](key);
        return {
          notificationsMap: notificationsMap
        };
      });
    }
  }, {
    key: "renderNotifications",
    value: function renderNotifications() {
      var _this25 = this;
      var notificationsMapToArray = Array.from(this.state.notificationsMap);
      var handleOnClose = function handleOnClose(key, onClose) {
        _this25.removeNotification(key);
        onClose && onClose();
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, notificationsMapToArray.map(function (_ref19) {
        var _ref20 = _slicedToArray(_ref19, 2),
          key = _ref20[0],
          _ref20$ = _ref20[1],
          message = _ref20$.message,
          type = _ref20$.type,
          onClose = _ref20$.onClose,
          noCloseBtn = _ref20$.noCloseBtn;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_notification_notification_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
          key: key,
          message: message,
          type: type,
          onClose: handleOnClose.bind(null, key, onClose),
          noCloseBtn: noCloseBtn
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this26 = this;
      var pageBuilderContentClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_22__.createCssClassNames)({
        'm-page-builder__content': true,
        'm-page-builder__content--reversed': this.state.isSidebarLeftSide
      });
      var _this$props = this.props,
        blocksConfig = _this$props.blocksConfig,
        toolboxTitle = _this$props.toolboxTitle;
      var _this$state11 = this.state,
        iframeLoaded = _this$state11.iframeLoaded,
        timestamp = _this$state11.timestamp,
        clipboardBlockConfig = _this$state11.clipboardBlockConfig;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var blocksToRender = !!blocksConfig.length ? blocksConfig.filter(function (config) {
        return config.visible;
      }) : [];
      var additionalBlocks = clipboardBlockConfig ? [clipboardBlockConfig] : [];
      var isAddingBlocksEnabled = timestamp <= convertDateToTimezone(new Date()).valueOf() && iframeLoaded && this.state.isValidActiveLayout;
      var blockPreviewPagePreviewRequestParams = (0,_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_20__["default"])(this.state.blockPreviewPagePreviewRequestParams);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder"
      }, iframeLoaded && this.renderSettingsModal(), this.modalContainer && this.renderLayoutSelector(), this.layoutSwitcherContainer && this.renderLayoutSwitcher(), this.timelineContainer && this.renderTimeline(), this.renderActiveLayoutError(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: pageBuilderContentClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__preview-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__notifications",
        role: "alert"
      }, this.renderNotifications()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__preview"
      }, this.renderIframe())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_toolbox_toolbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        setSidebarSide: this.setSidebarSide
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_toolbox_toolbox_blocks__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: "elements",
        iconName: "block-add",
        title: toolboxTitle,
        additionalBlocks: additionalBlocks,
        blocksToRender: blocksToRender,
        onBlockDrag: this.handleDragBlock,
        onBlockDragStart: this.handleDragStartSidebarBlock,
        isAddingBlocksEnabled: isAddingBlocksEnabled
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_toolbox_toolbox_structure__WEBPACK_IMPORTED_MODULE_8__["default"], {
        name: "structure",
        iconName: "content-tree",
        title: Translator.trans(/*@Desc("Structure view")*/'toolbox.structure.view', {}, 'ibexa_page_builder'),
        fieldValue: this.state.fieldValue,
        scrollTo: this.scrollIntoBlockPreview,
        hoverIn: this.hoverInBlockPreview,
        hoverOut: this.hoverOutBlockPreview,
        blocksIdMap: this.state.blocksIdMap,
        blocksIconMap: this.state.blocksIconMap
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_hidden_block_hidden_blocks__WEBPACK_IMPORTED_MODULE_13__["default"], {
        blocksToRender: blocksToRender
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-page-builder__block-config-wrapper"
      }), this.updatePreviewRequestParamsComponents.map(function (CustomComponent, index) {
        var key = index;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomComponent, {
          key: key,
          updatePreviewRequestParams: _this26.updatePreviewRequestParams,
          blockPreviewPagePreviewRequestParams: blockPreviewPagePreviewRequestParams
        });
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var builderPropTypes = {
  getInitDragDropState: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  getElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  scrollContainer: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  removePlaceholderWithAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  removePlaceholderWithoutAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  addPlaceholderBesideElement: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  addPlaceholderInZone: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  removePlaceholders: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  findNextElementIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  insertAfter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  insertBefore: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  removePlaceholdersAfterTimeout: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired
};
var pageBuilderConfigPropTypes = {
  propTypes: {
    blockPreviewRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    blocksConfig: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array).isRequired,
    fieldValue: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object).isRequired,
    iframeCss: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,
    intentParameters: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
    layoutsConfig: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object).isRequired).isRequired,
    mode: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,
    pageFieldValueSelector: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,
    previewSiteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,
    previewUrl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired,
    referenceTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number).isRequired,
    timelineGetEventsRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
  },
  defaultProps: {
    blockPreviewRequestParams: {},
    timelineGetEventsRequestParams: {},
    intentParameters: {}
  }
};
PageBuilder.propTypes = _objectSpread(_objectSpread({
  customizeNewBlockNode: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
}, builderPropTypes), pageBuilderConfigPropTypes.propTypes);
PageBuilder.defaultProps = _objectSpread(_objectSpread({}, pageBuilderConfigPropTypes.defaultProps), {}, {
  /**
   * Extension point to customize the new block HTML attributes
   *
   * @function customizeNewBlockNode
   * @param {HTMLElement} block
   * @param {Object} meta
   * @param {String} meta.blockType
   * @param {String} meta.pageLayoutIdentifier
   * @param {String} meta.zoneId
   * @returns {HTMLElement}
   */
  customizeNewBlockNode: function customizeNewBlockNode(node, meta) {
    if (window.ibexa.pageBuilder && window.ibexa.pageBuilder.callbacks && window.ibexa.pageBuilder.callbacks.customizeNewBlockNode) {
      return window.ibexa.pageBuilder.callbacks.customizeNewBlockNode(node, meta);
    }
    return node;
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBuilder);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/clipboard.service.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/clipboard.service.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIPBOARD_CHANGE_EVENT: () => (/* binding */ CLIPBOARD_CHANGE_EVENT),
/* harmony export */   getItemClipboard: () => (/* binding */ getItemClipboard),
/* harmony export */   setItemClipboard: () => (/* binding */ setItemClipboard)
/* harmony export */ });
var CLIPBOARD_STORAGE_KEY = 'ibexa-pb-clipboard';
var CLIPBOARD_CHANGE_EVENT = 'ibexa-pb-clipboard:change';
var clipboard = new window.ibexa.core.Storage({
  key: CLIPBOARD_STORAGE_KEY,
  eventName: CLIPBOARD_CHANGE_EVENT,
  isUserAware: true
});
var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
clipboard.init();
var setItemClipboard = function setItemClipboard(data) {
  try {
    clipboard.setItem(data);
    var message = Translator.trans(/*@Desc("Block %name% has been copied successfully.")*/'clipboard.set_item.success', {
      name: data.name
    }, 'ibexa_page_builder');
    ibexa.helpers.notification.showSuccessNotification(message);
  } catch (_unused) {
    var _message = Translator.trans(/*@Desc("Cannot copy block to clipboard.")*/'clipboard.set_item.error', {}, 'ibexa_page_builder');
    ibexa.helpers.notification.showErrorNotification(_message);
  }
};
var getItemClipboard = function getItemClipboard() {
  try {
    return clipboard.getItem();
  } catch (_unused2) {
    var message = Translator.trans(/*@Desc("Cannot get block from clipboard.")*/'clipboard.get_item.error', {}, 'ibexa_page_builder');
    ibexa.helpers.notification.showErrorNotification(message);
  }
};


/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/preview.service.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockPreview: () => (/* binding */ getBlockPreview)
/* harmony export */ });
/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/serialize */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js");


/**
 * Gets block preview
 *
 * @function getBlockPreview
 * @param {Object} body request data
 * @returns {Promise} Fetch promise
 */
var getBlockPreview = function getBlockPreview(body, targetSiteaccess) {
  var url = window.Routing.generate('ibexa.page_builder.block.siteaccess_preview', {
    siteaccessName: targetSiteaccess
  });
  var token = document.querySelector('meta[name="CSRF-Token"]').content;
  var request = new Request(url, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': token,
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_0__["default"])(body),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request);
};

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/services/timeline.service.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimelineEvents: () => (/* binding */ getTimelineEvents)
/* harmony export */ });
/* harmony import */ var _helpers_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/serialize */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/serialize.js");


/**
 * Gets the timeline events
 *
 * @function getTimelineEvents
 * @param {Object} body request data
 * @returns {Promise} Fetch promise
 */
var getTimelineEvents = function getTimelineEvents(body) {
  var url = window.Routing.generate('ibexa.page_builder.timeline.events.get');
  var request = new Request(url, {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: (0,_helpers_serialize__WEBPACK_IMPORTED_MODULE_0__["default"])(body),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request);
};

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-builder/page.builder */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/page.builder.js");
/* harmony import */ var _core_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/drag.drop */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js");
/* harmony import */ var _core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/page.builder.history */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/page.builder.history.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  ibexa = _window.ibexa,
  document = _window.document;
var PageBuilderModule = /*#__PURE__*/function (_PureComponent) {
  function PageBuilderModule(props) {
    var _this;
    _classCallCheck(this, PageBuilderModule);
    _this = _callSuper(this, PageBuilderModule, [props]);
    _this.pageBuilderHistoryInstance = null;
    _this.validateAllBlocksData = _this.validateAllBlocksData.bind(_this);
    _this.validateLayoutData = _this.validateLayoutData.bind(_this);
    _this.setPageBuilderRef = _this.setPageBuilderRef.bind(_this);
    return _this;
  }
  _inherits(PageBuilderModule, _PureComponent);
  return _createClass(PageBuilderModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var historyUndoBtn = document.querySelector('.ibexa-preview-history__action[data-history-action="undo"]');
      var historyRedoBtn = document.querySelector('.ibexa-preview-history__action[data-history-action="redo"]');
      var fieldSelector = ibexa.pageBuilder.config.pageFieldValueSelector.trim();
      var pageFieldInput = document.querySelector(fieldSelector);
      this.pageBuilderHistoryInstance = new _core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__["default"](pageFieldInput.value);
      window.pageBuilderHistoryInstance = this.pageBuilderHistoryInstance;
      pageFieldInput.addEventListener('change', function (event) {
        var value = event.currentTarget.value;
        _this2.pageBuilderHistoryInstance.addEntry(JSON.parse(value));
        _this2.toggleHistoryBtn(historyUndoBtn, !_this2.pageBuilderHistoryInstance.isPrevEmpty);
        _this2.toggleHistoryBtn(historyRedoBtn, !_this2.pageBuilderHistoryInstance.isNextEmpty);
      }, false);
      document.body.addEventListener('ibexa-pb-history:undo', function () {
        if (_this2.pageBuilderHistoryInstance.isPrevEmpty) {
          return;
        }
        _this2.pageBuilderHistoryInstance.undo(function (_ref) {
          var value = _ref.value,
            diff = _ref.diff;
          pageFieldInput.value = JSON.stringify(value);
          _this2.applyDiff(diff);
          return true;
        });
        _this2.toggleHistoryBtn(historyRedoBtn, true);
        if (_this2.pageBuilderHistoryInstance.isPrevEmpty) {
          _this2.toggleHistoryBtn(historyUndoBtn, false);
        }
      });
      document.body.addEventListener('ibexa-pb-history:redo', function () {
        if (_this2.pageBuilderHistoryInstance.isNextEmpty) {
          return;
        }
        _this2.pageBuilderHistoryInstance.redo(function (_ref2) {
          var value = _ref2.value,
            diff = _ref2.diff;
          pageFieldInput.value = JSON.stringify(value);
          _this2.applyDiff(diff);
          return true;
        });
        _this2.toggleHistoryBtn(historyUndoBtn, true);
        if (_this2.pageBuilderHistoryInstance.isNextEmpty) {
          _this2.toggleHistoryBtn(historyRedoBtn, false);
        }
      });
      historyUndoBtn.addEventListener('click', function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-pb-history:undo'));
      });
      historyRedoBtn.addEventListener('click', function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-pb-history:redo'));
      });
    }
  }, {
    key: "applyDiff",
    value: function applyDiff(diff) {
      switch (diff.action) {
        case _core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__.ACTIONS.ADD:
          this._refPageBuilder.removePreviewBlock(diff.block.id);
          break;
        case _core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__.ACTIONS.DELETE:
          {
            var blockPosition = (0,_core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__.findInsertBlockPosition)(diff);
            this._refPageBuilder.insertPreviewBlock(diff.block, {
              zoneKey: diff.zoneKey,
              blockPosition: blockPosition,
              isReverted: true
            });
            break;
          }
        case _core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__.ACTIONS.REORDER:
          {
            var blocksPositions = (0,_core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__.findReorderBlockPositions)(diff);
            this._refPageBuilder.reorderPreviewBlock(diff.block, blocksPositions);
            break;
          }
        case _core_page_builder_history__WEBPACK_IMPORTED_MODULE_3__.ACTIONS.UPDATE:
          this._refPageBuilder.updatePreviewBlock(diff.block.id);
          break;
      }
    }
  }, {
    key: "toggleHistoryBtn",
    value: function toggleHistoryBtn(btn, isEnabled) {
      var tooltipWrapperNode = btn.querySelector('.ibexa-preview-history__tooltip-wrapper');
      btn.disabled = !isEnabled;
      tooltipWrapperNode.dataset.bsOriginalTitle = isEnabled ? tooltipWrapperNode.dataset.enabledTitle : tooltipWrapperNode.dataset.disabledTitle;
      ibexa.helpers.tooltips.parse(btn);
    }
  }, {
    key: "validateAllBlocksData",
    value: function validateAllBlocksData() {
      return this._refPageBuilder.validateAllBlocksData();
    }
  }, {
    key: "validateLayoutData",
    value: function validateLayoutData() {
      return this._refPageBuilder.validateLayoutData();
    }
  }, {
    key: "setPageBuilderRef",
    value: function setPageBuilderRef(ref) {
      this._refPageBuilder = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        render: function render(methods) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_page_builder_page_builder__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
            ref: _this3.setPageBuilderRef
          }, _this3.props, methods));
        }
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageBuilderModule);
ibexa.addConfig('modules.PageBuilder', PageBuilderModule);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline.module.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline.module.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _timeline_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js");
/* harmony import */ var _timeline_components_schedule_toggler_schedule_toggler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/components/schedule-toggler/schedule.toggler */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-toggler/schedule.toggler.js");
/* harmony import */ var _timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/components/back-to-current-time/back.to.current.time */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js");
/* harmony import */ var _timeline_components_schedule_config_panel_schedule_config_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/components/schedule-config-panel/schedule.config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.js");
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
  ibexa = _window.ibexa;
var CLASS_TIMELINE_VISIBLE = 'ibexa-pb-timeline-visible';
var CLOSE_CONFIG_PANEL_KEY = 'Escape';
var TimelineModule = /*#__PURE__*/function (_PureComponent) {
  function TimelineModule(props) {
    var _this;
    _classCallCheck(this, TimelineModule);
    _this = _callSuper(this, TimelineModule, [props]);
    _this.pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_this);
    _this.toggleScheduleConfigPanel = _this.toggleScheduleConfigPanel.bind(_this);
    _this.closeConfigPanelInternal = _this.closeConfigPanelInternal.bind(_this);
    _this.closeTimelineBar = _this.closeTimelineBar.bind(_this);
    _this.openTimelineBar = _this.openTimelineBar.bind(_this);
    _this.closeConfigPanelExternal = _this.closeConfigPanelExternal.bind(_this);
    _this.closeConfigPanelByClickOutside = _this.closeConfigPanelByClickOutside.bind(_this);
    _this.closeConfigPanelByKeyboard = _this.closeConfigPanelByKeyboard.bind(_this);
    var selectedTimestamp = props.selectedTimestamp;
    var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
    var now = convertDateToTimezone(new Date()).valueOf();
    var isFutureTimeSelected = selectedTimestamp > now;
    _this.state = {
      selectedTimestamp: props.selectedTimestamp,
      isTimelineVisible: false,
      isConfigPanelVisible: false,
      isGoBackToCurrentTimeVisible: isFutureTimeSelected,
      canShowAgainGoBackToCurrentTime: !isFutureTimeSelected
    };
    return _this;
  }
  _inherits(TimelineModule, _PureComponent);
  return _createClass(TimelineModule, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isTimelineVisible = this.state.isTimelineVisible;
      document.body.classList.toggle(CLASS_TIMELINE_VISIBLE, isTimelineVisible);
      window.ibexa.helpers.tooltips.hideAll();
      if (this.state.isConfigPanelVisible) {
        document.body.addEventListener('click', this.closeConfigPanelByClickOutside, false);
        document.body.addEventListener('keyup', this.closeConfigPanelByKeyboard, false);
      } else {
        document.body.removeEventListener('click', this.closeConfigPanelByClickOutside);
        document.body.removeEventListener('keyup', this.closeConfigPanelByKeyboard);
      }
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      var _this$props = this.props,
        onTimelineEventSelect = _this$props.onTimelineEventSelect,
        events = _this$props.events;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var oldTimestamp = this.state.selectedTimestamp;
      var now = convertDateToTimezone(new Date()).valueOf();
      var isFutureTimeSelected = selectedTimestamp > now;
      this.setState(function (_ref) {
        var isGoBackToCurrentTimeVisiblePrev = _ref.isGoBackToCurrentTimeVisible,
          canShowAgainGoBackToCurrentTimePrev = _ref.canShowAgainGoBackToCurrentTime;
        return {
          selectedTimestamp: selectedTimestamp,
          isGoBackToCurrentTimeVisible: isGoBackToCurrentTimeVisiblePrev && isFutureTimeSelected || isFutureTimeSelected && canShowAgainGoBackToCurrentTimePrev,
          canShowAgainGoBackToCurrentTime: !isFutureTimeSelected
        };
      }, function () {
        onTimelineEventSelect(oldTimestamp, selectedTimestamp, events);
      });
    }
  }, {
    key: "toggleScheduleConfigPanel",
    value: function toggleScheduleConfigPanel() {
      var _this2 = this;
      this.setState(function (_ref2) {
        var isConfigPanelVisiblePrev = _ref2.isConfigPanelVisible;
        if (isConfigPanelVisiblePrev) {
          document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
          return {
            isConfigPanelVisible: false
          };
        }
        var wasConfigPanelOpened = document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
          cancelable: true,
          detail: {
            settings: {
              onClose: _this2.closeConfigPanelExternal
            }
          }
        }));
        return {
          isConfigPanelVisible: wasConfigPanelOpened
        };
      });
    }
  }, {
    key: "closeConfigPanelByClickOutside",
    value: function closeConfigPanelByClickOutside(event) {
      var target = event.target;
      if (target.classList.contains('ibexa-backdrop')) {
        this.closeConfigPanelInternal();
      }
    }
  }, {
    key: "closeConfigPanelByKeyboard",
    value: function closeConfigPanelByKeyboard(event) {
      if (event.key === CLOSE_CONFIG_PANEL_KEY) {
        this.closeConfigPanelInternal();
      }
    }
  }, {
    key: "closeConfigPanelInternal",
    value: function closeConfigPanelInternal() {
      this.setState(function () {
        return {
          isConfigPanelVisible: !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'))
        };
      });
    }
  }, {
    key: "closeConfigPanelExternal",
    value: function closeConfigPanelExternal() {
      this.setState(function () {
        return {
          isConfigPanelVisible: false
        };
      });
      return true;
    }
  }, {
    key: "openTimelineBar",
    value: function openTimelineBar() {
      this.setState(function () {
        return {
          isTimelineVisible: true
        };
      });
    }
  }, {
    key: "closeTimelineBar",
    value: function closeTimelineBar() {
      this.setState(function () {
        return {
          isTimelineVisible: false
        };
      });
    }
  }, {
    key: "renderTimelineBtn",
    value: function renderTimelineBtn() {
      var isConfigPanelVisible = this.state.isConfigPanelVisible;
      var timelineTogglerContainer = document.querySelector('.ibexa-pb-action-bar__timeline-toggler');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_components_schedule_toggler_schedule_toggler__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isVisible: isConfigPanelVisible,
        toggle: this.toggleScheduleConfigPanel
      }), timelineTogglerContainer);
    }
  }, {
    key: "renderBackToCurrentTime",
    value: function renderBackToCurrentTime() {
      var alertsSideTray = document.querySelector('.ibexa-pb-back-to-current-time-wrapper');
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_components_back_to_current_time_back_to_current_time__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSelectedTimestampChange: this.changeSelectedTimestamp
      }), alertsSideTray);
    }
  }, {
    key: "render",
    value: function render() {
      var events = this.props.events;
      var _this$state = this.state,
        selectedTimestamp = _this$state.selectedTimestamp,
        isConfigPanelVisible = _this$state.isConfigPanelVisible,
        isGoBackToCurrentTimeVisible = _this$state.isGoBackToCurrentTimeVisible,
        isTimelineVisible = _this$state.isTimelineVisible;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-timeline"
      }, this.renderTimelineBtn(), isGoBackToCurrentTimeVisible && this.renderBackToCurrentTime(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
        events: events,
        selectedTimestamp: selectedTimestamp,
        onSelectedTimestampChange: this.changeSelectedTimestamp,
        closeTimeline: this.closeTimelineBar
      }), /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_components_schedule_config_panel_schedule_config_panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        events: events,
        selectedTimestamp: selectedTimestamp,
        isClosed: !isConfigPanelVisible,
        isTimelineVisible: isTimelineVisible,
        onSelectedTimestampChange: this.changeSelectedTimestamp,
        onCancel: this.closeConfigPanelInternal,
        onShowTimeline: this.openTimelineBar,
        onHideTimeline: this.closeTimelineBar
      }), this.pageBuilderConfigPanelWrapper));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
TimelineModule.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array).isRequired,
  onTimelineEventSelect: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelineModule);
ibexa.addConfig('modules.Timeline', TimelineModule);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js":
/*!**********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/back-to-current-time/back.to.current.time.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
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
var BackToCurrentTime = /*#__PURE__*/function (_PureComponent) {
  function BackToCurrentTime(props) {
    var _this;
    _classCallCheck(this, BackToCurrentTime);
    _this = _callSuper(this, BackToCurrentTime, [props]);
    _this.setCurrentTime = _this.setCurrentTime.bind(_this);
    return _this;
  }
  _inherits(BackToCurrentTime, _PureComponent);
  return _createClass(BackToCurrentTime, [{
    key: "setCurrentTime",
    value: function setCurrentTime() {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var onSelectedTimestampChange = this.props.onSelectedTimestampChange;
      onSelectedTimestampChange(convertDateToTimezone(new Date()).valueOf());
    }
  }, {
    key: "render",
    value: function render() {
      var warningText = Translator.trans(/*@Desc("Previewing in the future")*/'back_to_current_time.warning.text', {}, 'ibexa_timeline');
      var btnText = Translator.trans(/*@Desc("Back to current time")*/'back_to_current_time.info.text', {}, 'ibexa_timeline');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-back-to-current-time"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-back-to-current-time__title"
      }, warningText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "btn btn-link c-pb-back-to-current-time__btn",
        onClick: this.setCurrentTime,
        type: "button"
      }, btnText));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
BackToCurrentTime.propTypes = {
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackToCurrentTime);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");



var CalendarPaginator = function CalendarPaginator(_ref) {
  var displayedDate = _ref.displayedDate,
    onMonthChange = _ref.onMonthChange;
  var _window$ibexa$helpers = window.ibexa.helpers.timezone,
    convertDateToTimezone = _window$ibexa$helpers.convertDateToTimezone,
    formatFullDateTime = _window$ibexa$helpers.formatFullDateTime;
  var paginatorBtnClassName = 'btn ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text c-pb-calendar-paginator__caret';
  var date = convertDateToTimezone(displayedDate);
  var setPreviousMonth = function setPreviousMonth() {
    date.month(date.month() - 1);
    onMonthChange(date.valueOf());
  };
  var setNextMonth = function setNextMonth() {
    date.month(date.month() + 1);
    onMonthChange(date.valueOf());
  };
  var getFormattedDate = function getFormattedDate() {
    return formatFullDateTime(date, null, 'MMMM YYYY');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-calendar-paginator"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: paginatorBtnClassName,
    onClick: setPreviousMonth,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-back",
    extraClasses: "ibexa-icon--tiny-small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, getFormattedDate()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: paginatorBtnClassName,
    onClick: setNextMonth,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-next",
    extraClasses: "ibexa-icon--tiny-small"
  })));
};
CalendarPaginator.propTypes = {
  displayedDate: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onMonthChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPaginator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-popup/calendar.popup.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-popup/calendar.popup.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar/calendar */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js");
/* harmony import */ var _timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline-popup/timeline.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js");
/* harmony import */ var _timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline-popup/timeline.popup.container */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");






var _window = window,
  Translator = _window.Translator,
  moment = _window.moment,
  ibexa = _window.ibexa;
var CalendarPopup = function CalendarPopup(props) {
  var selectedTimestamp = props.selectedTimestamp;
  var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
  var calendarBtnTitle = Translator.trans(/*@Desc("Timeline calendar")*/'timeline.calendar', {}, 'ibexa_timeline');
  var selectedDate = convertDateToTimezone(selectedTimestamp, ibexa.adminUiConfig.timezone);
  var formattedSelectedTime = moment(selectedDate).formatICU('H:mm');
  var formattedSelectedDate = moment(selectedDate).formatICU('MMMM dd,yyyy');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-calendar-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__.TimelinePopupContext.Consumer, null, function (_ref) {
    var togglePopup = _ref.togglePopup;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn ibexa-btn ibexa-btn--ghost c-pb-calendar-popup__toggler",
      onClick: togglePopup,
      title: calendarBtnTitle,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "schedule",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-pb-calendar-popup__toggler-label-time"
    }, formattedSelectedTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-pb-calendar-popup__toggler-label-date"
    }, formattedSelectedDate));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    scrollWrapperExtraClasses: "c-pb-calendar-popup__scroll-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_calendar__WEBPACK_IMPORTED_MODULE_2__["default"], props)));
};
CalendarPopup.propTypes = {
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CalendarPopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-paginator/calendar.paginator */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-paginator/calendar.paginator.js");
/* harmony import */ var _month_view_month_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../month-view/month.view */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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




var Calendar = /*#__PURE__*/function (_PureComponent) {
  function Calendar(props) {
    var _this;
    _classCallCheck(this, Calendar);
    _this = _callSuper(this, Calendar, [props]);
    _this.changeMonth = _this.changeMonth.bind(_this);
    _this.changeSelectedTimestamp = _this.changeSelectedTimestamp.bind(_this);
    _this.state = {
      isCalendarExpanded: false,
      selectedDate: props.selectedTimestamp,
      displayedDate: props.selectedTimestamp
    };
    return _this;
  }
  _inherits(Calendar, _PureComponent);
  return _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.ibexa.helpers.tooltips.parse();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;
      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }
      this.setState(function () {
        return {
          selectedDate: _this2.props.selectedTimestamp,
          displayedDate: _this2.props.selectedTimestamp
        };
      });
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(displayedDate) {
      this.setState(function () {
        return {
          displayedDate: displayedDate
        };
      });
    }
  }, {
    key: "changeSelectedTimestamp",
    value: function changeSelectedTimestamp(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        selectedDate = _this$state.selectedDate,
        displayedDate = _this$state.displayedDate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-calendar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_paginator_calendar_paginator__WEBPACK_IMPORTED_MODULE_2__["default"], {
        displayedDate: displayedDate,
        onMonthChange: this.changeMonth
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_month_view_month_view__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
        displayedDate: displayedDate,
        selectedDate: selectedDate,
        onChangeSelectedTimestamp: this.changeSelectedTimestamp
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
Calendar.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Calendar);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/click-outside-popup/click.outside.popup.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/click-outside-popup/click.outside.popup.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var ClickOutsidePopup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, containerRef) {
  var onClickOutside = _ref.onClickOutside,
    isPopupExpanded = _ref.isPopupExpanded,
    className = _ref.className,
    children = _ref.children;
  var handleDocumentClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
    var isClickOutside = !containerRef.current.contains(event.target);
    if (isClickOutside) {
      onClickOutside();
    }
  }, [onClickOutside, containerRef]);
  var handleIframeClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var isClickOutside = !containerRef.current.contains(document.activeElement);
    if (isClickOutside) {
      onClickOutside();
    }
  }, [onClickOutside, containerRef]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isPopupExpanded) {
      document.addEventListener('click', handleDocumentClick, false);
      window.addEventListener('blur', handleIframeClick, false);
    }
    return function () {
      document.removeEventListener('click', handleDocumentClick, false);
      window.removeEventListener('blur', handleIframeClick, false);
    };
  }, [handleDocumentClick, handleIframeClick, isPopupExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    ref: containerRef
  }, children);
});
ClickOutsidePopup.propTypes = {
  onClickOutside: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isPopupExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired
};
ClickOutsidePopup.displayName = 'ClickOutsidePopup';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClickOutsidePopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");




var DayView = function DayView(_ref) {
  var event = _ref.event,
    timestamp = _ref.timestamp,
    isSelected = _ref.isSelected,
    isSelectable = _ref.isSelectable,
    day = _ref.day,
    onChangeSelectedTimestamp = _ref.onChangeSelectedTimestamp;
  var changeSelectedTimestamp = function changeSelectedTimestamp() {
    return onChangeSelectedTimestamp(timestamp);
  };
  var hasEvent = !!event;
  var wrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-pb-day-view': true,
    'c-pb-day-view--is-selected': isSelected,
    'c-pb-day-view--is-selectable': isSelectable,
    'c-pb-day-view--has-event': hasEvent
  });
  var wrapperAttrs = {
    className: wrapperClassName
  };
  if (isSelectable) {
    wrapperAttrs.onClick = changeSelectedTimestamp;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", wrapperAttrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-pb-day-view__label"
  }, day), hasEvent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    event: event,
    inside: _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_2__.EVENT_MARKER_INSIDE_CALENDAR
  }));
};
DayView.propTypes = {
  day: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired, (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired]).isRequired,
  timestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onChangeSelectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isSelectable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
DayView.defaultProps = {
  event: null,
  isSelectable: true,
  isSelected: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DayView);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EVENT_MARKER_INSIDE_CALENDAR: () => (/* binding */ EVENT_MARKER_INSIDE_CALENDAR),
/* harmony export */   EVENT_MARKER_INSIDE_TIMELINE: () => (/* binding */ EVENT_MARKER_INSIDE_TIMELINE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-tooltip/event.tooltip */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/event.in.day.position */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js");
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





var EVENT_MARKER_INSIDE_CALENDAR = 'EVENT_MARKER_INSIDE_CALENDAR';
var EVENT_MARKER_INSIDE_TIMELINE = 'EVENT_MARKER_INSIDE_TIMELINE';
var EventMarker = /*#__PURE__*/function (_Component) {
  function EventMarker(props) {
    var _this;
    _classCallCheck(this, EventMarker);
    _this = _callSuper(this, EventMarker, [props]);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.renderDot = _this.renderDot.bind(_this);
    _this.showTooltip = _this.showTooltip.bind(_this);
    _this.hideTooltip = _this.hideTooltip.bind(_this);
    _this._refMarker = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this._refTooltip = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.hideTooltipTimeout = null;
    _this.state = {
      isTooltipVisible: false
    };
    return _this;
  }
  _inherits(EventMarker, _Component);
  return _createClass(EventMarker, [{
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
        onSetTime = _this$props.onSetTime,
        timestamp = _this$props.timestamp;
      onSetTime(parseInt(timestamp, 10));
    }
  }, {
    key: "showTooltip",
    value: function showTooltip() {
      this.toggleTooltipVisibility(true);
      window.document.body.addEventListener('mousemove', this.hideTooltip, false);
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(event) {
      var _this2 = this;
      var eventMarker = event.target.closest('.c-pb-event-marker');
      var eventTooltip = event.target.closest('.c-pb-event-tooltip');
      var isCurrentMarker = eventMarker === this._refMarker.current;
      var isCurrentMarkerTooltip = eventTooltip === this._refTooltip.current;
      window.clearTimeout(this.hideTooltipTimeout);
      if (isCurrentMarker || isCurrentMarkerTooltip) {
        return;
      }
      this.hideTooltipTimeout = window.setTimeout(function () {
        _this2.toggleTooltipVisibility(false);
        window.document.body.removeEventListener('mousemove', _this2.hideTooltip, false);
      }, 200);
    }
  }, {
    key: "toggleTooltipVisibility",
    value: function toggleTooltipVisibility(isTooltipVisible) {
      this.setState(function () {
        return {
          isTooltipVisible: isTooltipVisible
        };
      });
    }
  }, {
    key: "renderDot",
    value: function renderDot() {
      var event = this.props.event;
      var label = event.descriptions.length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-pb-event-marker__dot"
      }, label);
    }
  }, {
    key: "renderEventTooltip",
    value: function renderEventTooltip() {
      var event = this.props.event;
      var isTooltipVisible = this.state.isTooltipVisible;
      if (!isTooltipVisible) {
        return null;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_tooltip_event_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
        descriptions: event.descriptions,
        markerRef: this._refMarker,
        ref: this._refTooltip
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        inside = _this$props2.inside,
        event = _this$props2.event,
        timestamp = _this$props2.timestamp;
      var isInsideCalendar = inside === EVENT_MARKER_INSIDE_CALENDAR;
      var isInsideTimeline = inside === EVENT_MARKER_INSIDE_TIMELINE;
      var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
        'c-pb-event-marker': true,
        'c-pb-event-marker--in-calendar': isInsideCalendar,
        'c-pb-event-marker--in-timeline': isInsideTimeline
      });
      var attrs = {
        className: className,
        ref: this._refMarker,
        onMouseEnter: this.showTooltip
      };
      if (event.type) {
        attrs['data-event-type'] = event.type;
      }
      if (isInsideTimeline) {
        var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__["default"])(timestamp);
        attrs.onClick = this.handleClick;
        attrs.style = {
          left: "".concat(leftPosition, "%")
        };
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", attrs, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        className: "c-pb-event-marker__btn",
        type: "button"
      }, this.renderDot()), this.renderEventTooltip());
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
EventMarker.propTypes = {
  event: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  onSetTime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  timestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  inside: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
EventMarker.defaultProps = {
  inside: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventMarker);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-tooltip/event.tooltip.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  Popper = _window.Popper;
var EventTooltip = /*#__PURE__*/function (_PureComponent) {
  function EventTooltip(props) {
    var _this;
    _classCallCheck(this, EventTooltip);
    _this = _callSuper(this, EventTooltip, [props]);
    _this.eventsTooltipsContainer = document.querySelector('.ibexa-pb-events-tooltip-container');
    _this.popperInstance = null;
    _this.renderDescription = _this.renderDescription.bind(_this);
    return _this;
  }
  _inherits(EventTooltip, _PureComponent);
  return _createClass(EventTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createPopperInstanceOrUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.createPopperInstanceOrUpdate();
    }
  }, {
    key: "createPopperInstanceOrUpdate",
    value: function createPopperInstanceOrUpdate() {
      var _this$props = this.props,
        markerRef = _this$props.markerRef,
        innerRef = _this$props.innerRef;
      var markerNode = markerRef.current;
      var tooltipNode = innerRef.current;
      if (!markerNode) {
        return;
      }
      if (!this.popperInstance) {
        this.popperInstance = Popper.createPopper(markerNode, tooltipNode, {
          placement: 'left',
          modifiers: [{
            name: 'offset',
            options: {
              offset: function offset(_ref) {
                var placement = _ref.placement,
                  popper = _ref.popper;
                if (placement === 'left' || placement === 'right') {
                  return [popper.height / 2 - 30, 8];
                }
                return [0, 8];
              }
            }
          }, {
            name: 'flip',
            options: {
              fallbackPlacements: ['right', 'bottom', 'top']
            }
          }]
        });
      } else {
        this.popperInstance.update();
      }
    }
  }, {
    key: "setInnerHTML",
    value: function setInnerHTML(__html) {
      return {
        __html: __html
      };
    }
  }, {
    key: "renderDescription",
    value: function renderDescription(description, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "c-pb-event-tooltip__item",
        dangerouslySetInnerHTML: this.setInnerHTML(description)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        descriptions = _this$props2.descriptions,
        innerRef = _this$props2.innerRef;
      return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip",
        ref: innerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__arrow-wrapper",
        "data-popper-arrow": true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__arrow",
        "data-popper-arrow": true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__hidden-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-event-tooltip__scroll-wrapper"
      }, descriptions.map(this.renderDescription)))), this.eventsTooltipsContainer);
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
EventTooltip.propTypes = {
  descriptions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  markerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element)
  }),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Element)
  })
};
EventTooltip.defaultProps = {
  markerRef: {},
  innerRef: {}
};
var EventTooltipForwarded = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventTooltip, _extends({
    innerRef: ref
  }, props));
});
EventTooltipForwarded.displayName = 'EventTooltip';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTooltipForwarded);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list-popup/events.list.popup.js":
/*!****************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list-popup/events.list.popup.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events_list_events_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events-list/events.list */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js");
/* harmony import */ var _timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline-popup/timeline.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js");
/* harmony import */ var _timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timeline-popup/timeline.popup.container */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");






var _window = window,
  Translator = _window.Translator;
var EventsListPopup = function EventsListPopup(props) {
  var isDisabled = props.events.length === 0;
  var togglerLabel = Translator.trans(/*@Desc("Jump to event")*/'timeline.events_list_popup.toggler.label', {}, 'ibexa_timeline');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-events-list-popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup__WEBPACK_IMPORTED_MODULE_3__.TimelinePopupContext.Consumer, null, function (_ref) {
    var togglePopup = _ref.togglePopup;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn ibexa-btn ibexa-btn--ghost c-pb-events-list-popup__toggler",
      onClick: togglePopup,
      disabled: isDisabled,
      type: "button"
    }, togglerLabel, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "caret-down"
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_timeline_popup_timeline_popup_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    extraClasses: "c-pb-events-list-popup__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_list_events_list__WEBPACK_IMPORTED_MODULE_2__["default"], props)));
};
EventsListPopup.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsListPopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


var EventsList = function EventsList(_ref) {
  var events = _ref.events,
    onSelectedTimestampChange = _ref.onSelectedTimestampChange;
  var handleClick = function handleClick(date) {
    return onSelectedTimestampChange(date * 1000);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-events-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-pb-events-list__list"
  }, events.map(function (event, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      className: "c-pb-events-list__item",
      onClick: function onClick() {
        return handleClick(event.date);
      },
      dangerouslySetInnerHTML: {
        __html: event.description
      }
    });
  })));
};
EventsList.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsList);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/month-view/month.view.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _day_view_day_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../day-view/day.view */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/day-view/day.view.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



var DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var MonthView = /*#__PURE__*/function (_PureComponent) {
  function MonthView(props) {
    var _this;
    _classCallCheck(this, MonthView);
    _this = _callSuper(this, MonthView, [props]);
    var eventsByDay = _this.filterEvents(props.events);
    _this.state = {
      eventsByDay: eventsByDay
    };
    return _this;
  }
  _inherits(MonthView, _PureComponent);
  return _createClass(MonthView, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevEvents = _ref.events;
      var events = this.props.events;
      var isSameNumberOfEvents = prevEvents.length === events.length;
      var areSameEvents = isSameNumberOfEvents && events.every(function (event, index) {
        return prevEvents[index] && prevEvents[index].date === event.date;
      });
      if (areSameEvents) {
        return;
      }
      var eventsByDay = this.filterEvents(events);
      this.setState(function () {
        return {
          eventsByDay: eventsByDay
        };
      });
    }
  }, {
    key: "groupEventsByDay",
    value: function groupEventsByDay(total, event) {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000);
      var timestamp = convertDateToTimezone(new Date(eventDate.year(), eventDate.month(), eventDate.date(), 12)).hour(12).valueOf();
      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }
      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events) {
      var groupedEvents = events.reduce(this.groupEventsByDay, {});
      return groupedEvents;
    }
  }, {
    key: "getAdminPanelLanguageCode",
    value: function getAdminPanelLanguageCode() {
      return document.querySelector('html').getAttribute('lang').replace(new RegExp('_', 'g'), '-');
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders() {
      return DAYS.map(function (day) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          className: "c-pb-month-view__header",
          key: day
        }, day);
      });
    }
  }, {
    key: "renderDaysBeforeMonth",
    value: function renderDaysBeforeMonth() {
      var _this2 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var firstDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), 1);
      var day = firstDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());
      for (var i = 0; i !== day; i++) {
        days.push('');
      }
      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index - day + 1, 12)).hour(12);
        var dayOfMonth = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        var label = dayOfMonth;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this2.state.eventsByDay[timestamp],
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this2.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysOfMonth",
    value: function renderDaysOfMonth() {
      var _this3 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var days = [];
      var selectedDate = convertDateToTimezone(this.props.selectedDate);
      var now = convertDateToTimezone(new Date());
      for (var i = 0; i !== daysInMonth; i++) {
        days.push('');
      }
      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month(), index + 1, 12)).hour(12);
        var dayOfMonth = date.date();
        var isSelected = selectedDate.isSame(date, 'day');
        var isNotSelectable = now.isAfter(date, 'day');
        var isToday = now.isSame(date, 'day');
        var dailyTimestamp = date.valueOf();
        var label = dayOfMonth === 1 ? date.locale(_this3.getAdminPanelLanguageCode()).format('D MMM') : dayOfMonth;
        if (isToday) {
          date.hour(now.hour());
          date.minute(now.minute());
        }
        var timestamp = date.valueOf();
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this3.state.eventsByDay[dailyTimestamp],
          isSelected: isSelected,
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this3.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "renderDaysAfterMonth",
    value: function renderDaysAfterMonth() {
      var _this4 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var displayedDate = convertDateToTimezone(this.props.displayedDate);
      var daysInMonth = displayedDate.daysInMonth();
      var lastDayOfMonth = new Date(displayedDate.year(), displayedDate.month(), daysInMonth);
      var day = 6 - lastDayOfMonth.getDay();
      var days = [];
      var now = convertDateToTimezone(new Date());
      for (var i = 0; i !== day; i++) {
        days.push('');
      }
      return days.map(function (item, index) {
        var date = convertDateToTimezone(new Date(displayedDate.year(), displayedDate.month() + 1, index + 1, 12)).hour(12);
        var dayOfMonth = date.date();
        var timestamp = date.valueOf();
        var isNotSelectable = now.isAfter(date, 'day');
        var label = dayOfMonth === 1 ? date.locale(_this4.getAdminPanelLanguageCode()).format('D MMM') : dayOfMonth;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_day_view_day_view__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: timestamp,
          timestamp: timestamp,
          day: label,
          event: _this4.state.eventsByDay[timestamp],
          isSelectable: !isNotSelectable,
          onChangeSelectedTimestamp: _this4.props.onChangeSelectedTimestamp
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-month-view"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-month-view__headers"
      }, this.renderHeaders()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-month-view__days"
      }, this.renderDaysBeforeMonth(), this.renderDaysOfMonth(), this.renderDaysAfterMonth()));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
MonthView.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  onChangeSelectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  displayedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired, (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired]).isRequired,
  selectedDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date).isRequired, (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired]).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthView);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.js":
/*!************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/simple-dropdown/simple.dropdown.js");
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");
/* harmony import */ var _common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel.footer */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js");
/* harmony import */ var _events_list_events_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events-list/events.list */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list/events.list.js");
/* harmony import */ var _calendar_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calendar/calendar */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar/calendar.js");
/* harmony import */ var _schedule_config_panel_no_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule.config.panel.no.events */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.no.events.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var _window = window,
  Translator = _window.Translator;
var VIEW_LIST = 'VIEW_LIST';
var VIEW_CALENDAR = 'VIEW_CALENDAR';
var VIEW_OPTIONS = [{
  value: VIEW_LIST,
  iconName: 'view-list',
  label: Translator.trans(/*@Desc("List")*/'timeline.schedule.config_panel.view_switcher.list_view', {}, 'ibexa_timeline')
}, {
  value: VIEW_CALENDAR,
  iconName: 'date',
  label: Translator.trans(/*@Desc("Calendar")*/'timeline.schedule.config_panel.view_switcher.calendar_view', {}, 'ibexa_timeline')
}];
var ScheduleConfigPanel = function ScheduleConfigPanel(_ref) {
  var events = _ref.events,
    selectedTimestamp = _ref.selectedTimestamp,
    isClosed = _ref.isClosed,
    onSelectedTimestampChange = _ref.onSelectedTimestampChange,
    onCancel = _ref.onCancel,
    onShowTimeline = _ref.onShowTimeline,
    onHideTimeline = _ref.onHideTimeline,
    isTimelineVisible = _ref.isTimelineVisible;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(VIEW_LIST),
    _useState2 = _slicedToArray(_useState, 2),
    viewMode = _useState2[0],
    setViewMode = _useState2[1];
  var noEvents = events.length === 0;
  var configPanelTitle = Translator.trans(/*@Desc("Schedule")*/'timeline.schedule.config_panel.title', {}, 'ibexa_timeline');
  var showTimelineLabel = Translator.trans(/*@Desc("Show timeline")*/'timeline.schedule.config_panel.show_timeline', {}, 'ibexa_timeline');
  var hideTimelineLabel = Translator.trans(/*@Desc("Hide timeline")*/'timeline.schedule.config_panel.hide_timeline', {}, 'ibexa_timeline');
  var viewLabel = Translator.trans(/*@Desc("View")*/'timeline.schedule.config_panel.view', {}, 'ibexa_timeline');
  var closeBtnLabel = Translator.trans(/*@Desc("Close")*/'timeline.schedule.config_panel.close', {}, 'ibexa_timeline');
  var handleViewModeSwitch = function handleViewModeSwitch(_ref2) {
    var value = _ref2.value;
    setViewMode(value);
  };
  var selectedOption = VIEW_OPTIONS.find(function (option) {
    return option.value === viewMode;
  });
  var renderContentViews = function renderContentViews() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, viewMode === VIEW_LIST && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_events_list_events_list__WEBPACK_IMPORTED_MODULE_6__["default"], {
      events: events,
      onSelectedTimestampChange: onSelectedTimestampChange
    }), viewMode === VIEW_CALENDAR && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-pb-schedule-config-panel__calendar-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      events: events,
      onSelectedTimestampChange: onSelectedTimestampChange,
      selectedTimestamp: selectedTimestamp
    })));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-pb-schedule-config-panel",
    type: _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_3__.CONFIG_PANEL_TYPE_LEFT,
    leftPanelType: _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_3__.LEFT_PANEL_TYPES.SCHEDULER,
    showCloseBtn: true,
    onCancel: onCancel,
    title: configPanelTitle,
    isClosed: isClosed
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_4__["default"], {
    extraClasses: "c-pb-schedule-config-panel__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel__top-panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--small ibexa-btn--tertiary",
    onClick: isTimelineVisible ? onHideTimeline : onShowTimeline,
    type: "button"
  }, isTimelineVisible ? hideTimelineLabel : showTimelineLabel), !noEvents && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_simple_dropdown_simple_dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    options: VIEW_OPTIONS,
    selectedOption: selectedOption,
    onOptionClick: handleViewModeSwitch,
    selectedItemLabel: viewLabel,
    isSwitcher: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel__content"
  }, noEvents ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_schedule_config_panel_no_events__WEBPACK_IMPORTED_MODULE_8__["default"], null) : renderContentViews())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isClosed: isClosed,
    extraClasses: "c-pb-schedule-config-panel__footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn ibexa-btn ibexa-btn--filled-info",
    onClick: onCancel
  }, closeBtnLabel)));
};
ScheduleConfigPanel.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onShowTimeline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onHideTimeline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  isTimelineVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.no.events.js":
/*!**********************************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-config-panel/schedule.config.panel.no.events.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var _window = window,
  Translator = _window.Translator;
var ScheduleConfigPanelNoEvents = function ScheduleConfigPanelNoEvents() {
  var title = Translator.trans(/*@Desc("No events")*/'timeline.schedule.config_panel.no_events.title', {}, 'ibexa_timeline');
  var subtitle = Translator.trans(/*@Desc("Your events will show up here")*/'timeline.schedule.config_panel.no_events.subtitle', {}, 'ibexa_timeline');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel-no-events"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "c-pb-schedule-config-panel-no-events__image",
    src: "/bundles/ibexapagebuilder/img/no-events.svg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-schedule-config-panel-no-events__text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "c-pb-schedule-config-panel-no-events__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-pb-schedule-config-panel-no-events__subtitle"
  }, subtitle)));
};
ScheduleConfigPanelNoEvents.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleConfigPanelNoEvents);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-toggler/schedule.toggler.js":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/schedule-toggler/schedule.toggler.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var ScheduleToggler = function ScheduleToggler(_ref) {
  var isVisible = _ref.isVisible,
    toggle = _ref.toggle;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty(_defineProperty({
    'btn ibexa-btn ibexa-btn--no-text ibexa-btn--selector': true,
    'ibexa-pb-action-bar__action-btn': true
  }, "ibexa-pb-action-bar__action-btn--".concat(_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__.LEFT_PANEL_TYPES.SCHEDULER), true), 'ibexa-btn--selected', isVisible));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: className,
    onClick: toggle,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "timeline",
    extraClasses: "ibexa-icon--medium"
  }));
};
ScheduleToggler.propTypes = {
  isVisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleToggler);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _thumb_thumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumb/thumb */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js");
/* harmony import */ var _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-marker/event.marker */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/event-marker/event.marker.js");
/* harmony import */ var _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/event.in.day.position */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js");
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





var Slider = /*#__PURE__*/function (_Component) {
  function Slider(props) {
    var _this;
    _classCallCheck(this, Slider);
    _this = _callSuper(this, Slider, [props]);
    _this._refSlider = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    _this.renderMarker = _this.renderMarker.bind(_this);
    _this.setTime = _this.setTime.bind(_this);
    _this.groupEventsByDate = _this.groupEventsByDate.bind(_this);
    _this.updateSliderRect = _this.updateSliderRect.bind(_this);
    var eventsToDisplay = _this.filterEvents(props.events, props.selectedTimestamp);
    _this.state = {
      sliderRect: {},
      eventsToDisplay: eventsToDisplay,
      selectedTimestamp: props.selectedTimestamp,
      currentTimestamp: _this.generateCurrentTimestamp()
    };
    return _this;
  }
  _inherits(Slider, _Component);
  return _createClass(Slider, [{
    key: "generateCurrentTimestamp",
    value: function generateCurrentTimestamp() {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      return convertDateToTimezone(new Date()).valueOf();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.updateSliderRect();
      window.addEventListener('resize', this.updateSliderRect, false);
      setInterval(function () {
        return _this2.setState({
          currentTimestamp: _this2.generateCurrentTimestamp()
        });
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSliderRect);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;
      var _this$props = this.props,
        selectedTimestamp = _this$props.selectedTimestamp,
        events = _this$props.events;
      var areSameEvents = events.every(function (event, index) {
        return prevProps.events[index] && prevProps.events[index].date === event.date;
      });
      if (prevProps.selectedTimestamp === selectedTimestamp && areSameEvents) {
        return;
      }
      var eventsToDisplay = this.filterEvents(events, selectedTimestamp);
      this.setState(function () {
        return {
          selectedTimestamp: _this3.props.selectedTimestamp,
          eventsToDisplay: eventsToDisplay
        };
      });
    }
  }, {
    key: "updateSliderRect",
    value: function updateSliderRect() {
      var _this4 = this;
      this.setState(function () {
        return {
          sliderRect: _this4._refSlider.current.getBoundingClientRect()
        };
      });
    }
  }, {
    key: "groupEventsByDate",
    value: function groupEventsByDate(now, total, event) {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var eventDate = convertDateToTimezone(event.date * 1000, undefined, true);
      var isSameDate = eventDate.isSame(now, 'day');
      var timestamp = new Date(eventDate.year(), eventDate.month(), eventDate.date(), eventDate.hour(), eventDate.minute() + 1).getTime();
      if (!isSameDate) {
        return total;
      }
      if (total[timestamp]) {
        total[timestamp] = {
          descriptions: [].concat(_toConsumableArray(total[timestamp].descriptions), [event.description])
        };
      } else {
        total[timestamp] = {
          icon: event.icon,
          type: event.type,
          descriptions: [event.description]
        };
      }
      return total;
    }
  }, {
    key: "filterEvents",
    value: function filterEvents(events, selectedTimestamp) {
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var now = convertDateToTimezone(selectedTimestamp);
      var groupedEvents = events.reduce(this.groupEventsByDate.bind(this, now), {});
      return groupedEvents;
    }
  }, {
    key: "setTime",
    value: function setTime(selectedTimestamp) {
      this.props.onSelectedTimestampChange(selectedTimestamp);
    }
  }, {
    key: "renderCurrentTimeBtn",
    value: function renderCurrentTimeBtn() {
      var _this5 = this;
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var _this$state = this.state,
        selectedTimestamp = _this$state.selectedTimestamp,
        currentTimestamp = _this$state.currentTimestamp;
      var selectedDate = convertDateToTimezone(selectedTimestamp);
      var currentDate = convertDateToTimezone(currentTimestamp);
      var isSameDate = currentDate.isSame(selectedDate, 'day');
      var isSameMinute = currentDate.isSame(selectedDate, 'minute');
      if (!isSameDate || isSameMinute) {
        return null;
      }
      var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_4__["default"])(currentTimestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-pb-slider__current-time-btn",
        style: {
          left: "".concat(leftPosition, "%")
        },
        onClick: function onClick() {
          return _this5.props.onSelectedTimestampChange(currentTimestamp);
        }
      });
    }
  }, {
    key: "renderMarker",
    value: function renderMarker(_ref, index) {
      var _ref2 = _slicedToArray(_ref, 2),
        timestamp = _ref2[0],
        event = _ref2[1];
      var key = "".concat(index, "-").concat(timestamp);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: key,
        timestamp: timestamp,
        event: event,
        onSetTime: this.setTime,
        inside: _event_marker_event_marker__WEBPACK_IMPORTED_MODULE_3__.EVENT_MARKER_INSIDE_TIMELINE
      });
    }
  }, {
    key: "renderHours",
    value: function renderHours() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hours"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "12:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "4:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "8:00 AM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "12:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "4:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "8:00 PM"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider__hour",
        "data-hour": "11:59 PM"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        eventsToDisplay = _this$state2.eventsToDisplay,
        selectedTimestamp = _this$state2.selectedTimestamp;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-slider",
        ref: this._refSlider
      }, this.renderHours(), this.renderCurrentTimeBtn(), Object.entries(eventsToDisplay).map(this.renderMarker), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_thumb_thumb__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sliderRect: this.state.sliderRect,
        selectedTimestamp: selectedTimestamp,
        onSetTime: this.setTime
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Slider.propTypes = {
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/thumb/thumb.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/event.in.day.position */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/event.in.day.position.js");
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



var KEYCODE_RIGHT_BTN = 3;
var Thumb = /*#__PURE__*/function (_Component) {
  function Thumb(props) {
    var _this;
    _classCallCheck(this, Thumb);
    _this = _callSuper(this, Thumb, [props]);
    _this.attachMouseMoveEvent = _this.attachMouseMoveEvent.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.removeListeners = _this.removeListeners.bind(_this);
    _this.onTimeChangeTimeout = null;
    _this.backdrop = new window.ibexa.core.Backdrop({
      isTransparent: true
    });
    var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__["default"])(props.selectedTimestamp);
    _this.state = {
      leftPosition: leftPosition
    };
    return _this;
  }
  _inherits(Thumb, _Component);
  return _createClass(Thumb, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selectedTimestamp === this.props.selectedTimestamp) {
        return;
      }
      var leftPosition = (0,_helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.selectedTimestamp);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      document.body.removeEventListener('mousemove', this.handleMouseMove);
      document.body.removeEventListener('mouseup', this.removeListeners);
      this.removeBackdrop();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var sliderRect = this.props.sliderRect;
      var isMovedOutside = event.clientX > sliderRect.right || event.clientX < sliderRect.left;
      if (isMovedOutside) {
        return;
      }
      var convertDateToTimezone = window.ibexa.helpers.timezone.convertDateToTimezone;
      var diff = event.clientX - sliderRect.left;
      var leftPosition = diff / sliderRect.width * 100;
      var minutesCount = _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__.MINUTES_IN_DAY * leftPosition / 100;
      var hour = Math.floor(minutesCount / _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__.MINUTES_IN_HOUR);
      var minutes = Math.floor(minutesCount % _helpers_event_in_day_position__WEBPACK_IMPORTED_MODULE_2__.MINUTES_IN_HOUR);
      var date = convertDateToTimezone(parseInt(this.props.selectedTimestamp, 10));
      date.hour(hour);
      date.minutes(minutes);
      window.clearTimeout(this.onTimeChangeTimeout);
      this.onTimeChangeTimeout = window.setTimeout(this.setTime.bind(this, date.valueOf()), 300);
      this.setState(function () {
        return {
          leftPosition: leftPosition
        };
      });
    }
  }, {
    key: "setTime",
    value: function setTime(timestamp) {
      this.props.onSetTime(timestamp);
    }
  }, {
    key: "attachMouseMoveEvent",
    value: function attachMouseMoveEvent(_ref) {
      var nativeEvent = _ref.nativeEvent;
      var keyCode = nativeEvent.keyCode || nativeEvent.which;
      if (keyCode === KEYCODE_RIGHT_BTN) {
        return;
      }
      this.addBackdrop();
      document.body.addEventListener('mousemove', this.handleMouseMove, false);
      document.body.addEventListener('mouseup', this.removeListeners, false);
    }
  }, {
    key: "addBackdrop",
    value: function addBackdrop() {
      this.backdrop.show();
    }
  }, {
    key: "removeBackdrop",
    value: function removeBackdrop() {
      this.backdrop.hide();
    }
  }, {
    key: "render",
    value: function render() {
      var leftPosition = this.state.leftPosition;
      var style = {
        left: "".concat(leftPosition, "%")
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-pb-thumb",
        onMouseDown: this.attachMouseMoveEvent,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "c-pb-thumb__bottom-arrow",
        draggable: false,
        src: "/bundles/ibexapagebuilder/img/timeline-thumb.svg"
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
Thumb.propTypes = {
  sliderRect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  onSetTime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumb);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.container.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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



var TimelinePopupContainer = function TimelinePopupContainer(_ref) {
  var children = _ref.children,
    extraClasses = _ref.extraClasses,
    scrollWrapperExtraClasses = _ref.scrollWrapperExtraClasses;
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-pb-timeline-popup__container': true
  }, extraClasses, true));
  var scrollWrapperClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)(_defineProperty({
    'c-pb-timeline-popup__scroll-wrapper': true
  }, scrollWrapperExtraClasses, true));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: scrollWrapperClassName
  }, children));
};
TimelinePopupContainer.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  scrollWrapperExtraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TimelinePopupContainer.defaultProps = {
  extraClasses: '',
  scrollWrapperExtraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelinePopupContainer);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/timeline-popup/timeline.popup.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelinePopupContext: () => (/* binding */ TimelinePopupContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _click_outside_popup_click_outside_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../click-outside-popup/click.outside.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/click-outside-popup/click.outside.popup.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
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
  bootstrap = _window.bootstrap;
var TimelinePopupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
var TimelinePopup = function TimelinePopup(_ref) {
  var extraClasses = _ref.extraClasses,
    children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPopupExpanded = _useState2[0],
    setIsPopupExpanded = _useState2[1];
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var closePopup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setIsPopupExpanded(false);
  }, [setIsPopupExpanded]);
  var togglePopup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setIsPopupExpanded(!isPopupExpanded);
  }, [isPopupExpanded]);
  var className = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)(_defineProperty({
    'c-pb-timeline-popup': true,
    'c-pb-timeline-popup--popup-expanded': isPopupExpanded
  }, extraClasses, true));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _containerRef$current;
    var elementsWithTooltip = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll('[data-original-title]');
    elementsWithTooltip.forEach(function (element) {
      var tooltip = bootstrap.Tooltip.getInstance(element);
      tooltip === null || tooltip === void 0 || tooltip.hide();
    });
  }, [isPopupExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_click_outside_popup_click_outside_popup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: containerRef,
    className: className,
    onClickOutside: closePopup,
    isPopupExpanded: isPopupExpanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TimelinePopupContext.Provider, {
    value: {
      closePopup: closePopup,
      togglePopup: togglePopup
    }
  }, children));
};
TimelinePopup.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
TimelinePopup.defaultProps = {
  extraClasses: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelinePopup);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/timeline.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_slider_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider/slider */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/slider/slider.js");
/* harmony import */ var _components_calendar_popup_calendar_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/calendar-popup/calendar.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/calendar-popup/calendar.popup.js");
/* harmony import */ var _components_events_list_popup_events_list_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/events-list-popup/events.list.popup */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/timeline/components/events-list-popup/events.list.popup.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");






var _window = window,
  Translator = _window.Translator;
var Timeline = function Timeline(props) {
  var closeTimeline = props.closeTimeline;
  var closeBtnTitle = Translator.trans(/*@Desc("Close timeline")*/'timeline.close_btn', {}, 'ibexa_timeline');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__close-btn-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--tertiary ibexa-btn--no-text c-pb-timeline__close-btn",
    onClick: closeTimeline,
    title: closeBtnTitle,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "discard",
    extraClasses: "ibexa-icon ibexa-icon--small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__timeline-calendar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_calendar_popup_calendar_popup__WEBPACK_IMPORTED_MODULE_3__["default"], props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__list-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_events_list_popup_events_list_popup__WEBPACK_IMPORTED_MODULE_4__["default"], props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-pb-timeline__slider-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_slider_slider__WEBPACK_IMPORTED_MODULE_2__["default"], props)));
};
Timeline.propTypes = {
  selectedTimestamp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  events: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
  onSelectedTimestampChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  closeTimeline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);

/***/ }),

/***/ "./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/components/segment.group.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/components/segment.group.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _segment_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./segment.item */ "./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/components/segment.item.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var SEGMENTS_COUNT_TO_SHOW_MORE_BUTTON = 5;
var SegmentGroup = function SegmentGroup(_ref) {
  var segments = _ref.segments,
    id = _ref.id,
    name = _ref.name,
    segmentFilterQueryLowerCase = _ref.segmentFilterQueryLowerCase,
    onChange = _ref.onChange,
    moreButtonLabel = _ref.moreButtonLabel;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(segments.length > SEGMENTS_COUNT_TO_SHOW_MORE_BUTTON),
    _useState2 = _slicedToArray(_useState, 2),
    isMoreButtonVisible = _useState2[0],
    setIsMoreButtonVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMoreButtonClicked = _useState4[0],
    setIsMoreButtonClicked = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isCollapsed = _useState6[0],
    setIsCollapsed = _useState6[1];
  var groupHidden = segments.every(function (segment) {
    var lowerCaseSegmentName = segment.name.toLowerCase();
    return !lowerCaseSegmentName.includes(segmentFilterQueryLowerCase);
  });
  var segmentListClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-segments__list': true,
    'c-segments__list--hidden': isCollapsed
  });
  var segmentGroupClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-segments__group': true,
    'c-segments__group--hidden': !segments.length || groupHidden
  });
  var handleMoreButtonClick = function handleMoreButtonClick() {
    setIsMoreButtonVisible(false);
    setIsMoreButtonClicked(true);
  };
  var segmentsVisible = segments.filter(function (segment) {
    var lowerCaseSegmentName = segment.name.toLowerCase();
    return lowerCaseSegmentName.includes(segmentFilterQueryLowerCase);
  });
  var handleCollapse = function handleCollapse() {
    setIsCollapsed(!isCollapsed);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isMoreButtonClicked) {
      setIsMoreButtonVisible(segmentsVisible.length > SEGMENTS_COUNT_TO_SHOW_MORE_BUTTON);
    }
  }, [segmentsVisible, isMoreButtonClicked]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: segmentGroupClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "c-segments__group-name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "c-segments__group-button",
    type: "button",
    onClick: handleCollapse
  }, name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: isCollapsed ? 'caret-down' : 'caret-up',
    extraClasses: "c-segments__group-icon ibexa-icon--small ibexa-icon--toggle"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: segmentListClass
  }, segments.map(function (segment) {
    var isVisible = segmentsVisible.some(function (segmentVisible) {
      return segmentVisible.id === segment.id;
    });
    var segmentsVisibleIndex = segmentsVisible.findIndex(function (segmentVisible) {
      return segmentVisible.id === segment.id;
    });
    var isHidden = !isVisible || segmentsVisibleIndex > 4 && isMoreButtonVisible;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_segment_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: segment.id,
      id: segment.id,
      name: segment.name,
      isHidden: isHidden,
      onChange: onChange
    });
  }), isMoreButtonVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "c-segments__more-button",
    onClick: handleMoreButtonClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-segments__more-icon"
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-segments__more-label"
  }, moreButtonLabel))));
};
SegmentGroup.propTypes = {
  segments: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  })),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  segmentFilterQueryLowerCase: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  moreButtonLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SegmentGroup);

/***/ }),

/***/ "./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/components/segment.item.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/components/segment.item.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");



var SegmentItem = function SegmentItem(_ref) {
  var id = _ref.id,
    name = _ref.name,
    isHidden = _ref.isHidden,
    _onChange = _ref.onChange;
  var segmentItemClass = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
    'c-segments__item': true,
    'c-segments__item--hidden': isHidden
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: segmentItemClass
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "c-segments__label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "radio",
    name: "segment",
    className: "ibexa-input ibexa-input--radio",
    onChange: function onChange() {
      return _onChange(id);
    }
  }), name));
};
SegmentItem.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SegmentItem);

/***/ }),

/***/ "./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.footer.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_input_filter_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/input/filter.search */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/input/filter.search.js");
/* harmony import */ var _components_segment_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/segment.group */ "./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/components/segment.group.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
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
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var CLOSE_CONFIG_PANEL_KEY = 'Escape';
var UpdatePreviewRequestParams = function UpdatePreviewRequestParams(_ref) {
  var updatePreviewRequestParams = _ref.updatePreviewRequestParams,
    blockPreviewPagePreviewRequestParams = _ref.blockPreviewPagePreviewRequestParams;
  var segmentationsListNode = document.querySelector('.ibexa-segmentation-list');
  var pageBuilderConfigPanelWrapper = document.querySelector('.ibexa-pb-config-panels-wrapper');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isConfigPanelVisible = _useState2[0],
    setIsConfigPanelVisible = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    segmentFilterQuery = _useState4[0],
    setSegmentFilterQuery = _useState4[1];
  var closeBtnLabel = Translator.trans(/*@Desc("Save and close")*/'visibility.action_btn.close', {}, 'ibexa_page_builder');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isConfigPanelVisible) {
      document.body.addEventListener('click', closeConfigPanelByClickOutside, false);
      document.body.addEventListener('keyup', closeConfigPanelByKeyboard, false);
    }
    return function () {
      document.body.removeEventListener('click', closeConfigPanelByClickOutside);
      document.body.removeEventListener('keyup', closeConfigPanelByKeyboard);
    };
  }, [isConfigPanelVisible]);
  if (!segmentationsListNode) {
    return;
  }
  var segmentationsList = JSON.parse(segmentationsListNode.dataset.segments);
  var handleExternalCloseConfigPanel = function handleExternalCloseConfigPanel() {
    setIsConfigPanelVisible(false);
    return true;
  };
  var handleInternalCloseConfigPanel = function handleInternalCloseConfigPanel() {
    setIsConfigPanelVisible(function () {
      return !document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
    });
  };
  var closeConfigPanelByClickOutside = function closeConfigPanelByClickOutside(event) {
    return event.target.classList.contains('ibexa-backdrop') && handleInternalCloseConfigPanel();
  };
  var closeConfigPanelByKeyboard = function closeConfigPanelByKeyboard(event) {
    return event.key === CLOSE_CONFIG_PANEL_KEY && handleInternalCloseConfigPanel();
  };
  var toggleConfigPanel = function toggleConfigPanel() {
    setIsConfigPanelVisible(function (isConfigPanelVisiblePrev) {
      if (isConfigPanelVisiblePrev) {
        document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-close-itself'));
        return false;
      }
      var wasConfigPanelOpened = document.dispatchEvent(new CustomEvent('ibexa-pb-config-panel-open', {
        cancelable: true,
        detail: {
          settings: {
            onClose: handleExternalCloseConfigPanel
          }
        }
      }));
      if (wasConfigPanelOpened) {
        ibexa.helpers.tooltips.hideAll();
      }
      return wasConfigPanelOpened;
    });
  };
  var handleSegmentSelect = function handleSegmentSelect(segmentId) {
    var requestParams = _objectSpread({}, blockPreviewPagePreviewRequestParams);
    if (segmentId) {
      requestParams.segmentId = segmentId;
    } else {
      delete requestParams.segmentId;
    }
    updatePreviewRequestParams(requestParams);
  };
  var renderInfobarActionMenuButton = function renderInfobarActionMenuButton() {
    var togglerTitle = Translator.trans(/*@Desc("Visibility")*/'visibility.action_btn.title', {}, 'ibexa_page_builder');
    var togglerClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_9__.createCssClassNames)(_defineProperty(_defineProperty({
      'btn ibexa-btn ibexa-btn--no-text ibexa-btn--selector': true,
      'ibexa-pb-action-bar__action-btn': true
    }, "ibexa-pb-action-bar__action-btn--".concat(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__.LEFT_PANEL_TYPES.VISIBILITY), true), 'ibexa-btn--selected', isConfigPanelVisible));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: togglerClassName,
      onClick: toggleConfigPanel,
      title: togglerTitle,
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "profile",
      extraClasses: "ibexa-icon--medium"
    }));
  };
  var updateSegmentFilterQuery = function updateSegmentFilterQuery(_ref2) {
    var value = _ref2.target.value;
    setSegmentFilterQuery(value);
  };
  var renderSegmentationList = function renderSegmentationList() {
    var configPanelTitle = Translator.trans(/*@Desc("Segments")*/'segments.config_panel.title', {}, 'ibexa_page_builder');
    var noneOptionLabel = Translator.trans(/*@Desc("None")*/'segments.config_panel.none_option.label', {}, 'ibexa_page_builder');
    var moreButtonLabel = Translator.trans(/*@Desc("More")*/'segments.config_panel.more_button', {}, 'ibexa_page_builder');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__.CONFIG_PANEL_TYPE_LEFT,
      leftPanelType: _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_4__.LEFT_PANEL_TYPES.VISIBILITY,
      isClosed: !isConfigPanelVisible,
      onCancel: handleInternalCloseConfigPanel,
      title: configPanelTitle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_5__["default"], {
      extraClasses: "c-segments"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-segments__container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-segments__wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-segments__search-bar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_input_filter_search__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: updateSegmentFilterQuery,
      value: segmentFilterQuery,
      extraClasses: "c-segments__sidebar-filter"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "c-segments__label c-segments__label--no-filters"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "radio",
      name: "segment",
      className: "ibexa-input ibexa-input--radio",
      onChange: function onChange() {
        return handleSegmentSelect(null);
      },
      defaultChecked: true
    }), noneOptionLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-segments__filters"
    }, segmentationsList.map(function (segmentationGroup) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_segment_group__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: segmentationGroup.id,
        id: segmentationGroup.id,
        name: segmentationGroup.name,
        segments: segmentationGroup.segments,
        onChange: handleSegmentSelect,
        segmentFilterQueryLowerCase: segmentFilterQuery.toLowerCase(),
        moreButtonLabel: moreButtonLabel
      });
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isClosed: !isConfigPanelVisible
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn ibexa-btn ibexa-btn--filled-info",
      onClick: handleInternalCloseConfigPanel
    }, closeBtnLabel)));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(renderInfobarActionMenuButton(), segmentationsListNode), /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(renderSegmentationList(), pageBuilderConfigPanelWrapper));
};
UpdatePreviewRequestParams.propTypes = {
  updatePreviewRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  blockPreviewPagePreviewRequestParams: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdatePreviewRequestParams);
window.ibexa.addConfig('pageBuilder.components.updatePreviewRequestParams', [UpdatePreviewRequestParams], true);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js":
/*!******************************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
module.exports = __webpack_require__.p + "images/about-info.31a3b8ee.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/about.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/about.d648fc1f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/approved.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/approved.8dcddbcc.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/article.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/article.87d9802e.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/back.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/back.daf9f5e9.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/blog.1bbae791.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/blog_post.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/blog_post.4509899b.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-down.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/caret-down.f72f2589.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/caret-up.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/caret-up.c2ba7f03.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/checkmark.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/checkmark.6bbaed08.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/circle-close.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/circle-close.cf4e3719.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/content-tree.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/content-tree.513377cf.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/create.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/create.948e3424.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/date.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/date.51e2752f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/discard.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/discard.7ab1b667.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/download.svg ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/download.40d98643.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/drag.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/drag.9b430792.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/duplicate.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/duplicate.4961d378.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/edit.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/edit.4fa25121.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/expand-left.svg ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/expand-left.251d3a23.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/fields.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fields.22fbf40a.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/file.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/file.f6e0bf0b.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/filters.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/filters.59e95d7d.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/folder.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/folder.977267fb.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/form.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/form.015bc963.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/gallery.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/gallery.7e496553.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/image.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/image.c05d71e7.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/landing_page.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/landing_page.2e7e2424.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/notice.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/notice.9e08cc1f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/options.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/options.15578e01.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/place.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/place.d190c3f6.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/product.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/product.aa6dd0a1.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/qa-form.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/qa-form.9e25b46c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/search.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/search.548ac5f3.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/spinner.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/spinner.ab67bf41.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/system-information.svg ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/system-information.d0dbc17c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/trash.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/trash.d1555488.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload-image.svg ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/upload-image.09f70b0c.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/upload.svg ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/upload.2c5ac915.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/user.19743a46.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/user_group.svg ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/user_group.82314755.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/video.svg ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/video.c5fb6c8f.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-grid.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/view-grid.1b49c5a6.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view-list.svg ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/view-list.2752b827.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg":
/*!******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/view.svg ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/view.6c174a86.svg";

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/img/icons/warning.svg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/warning.449e4631.svg";

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page.builder.module.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/infobar.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.config.panel.opening.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.fields.config.panel.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/fieldType/ezlandingpage.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.publish.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.react.blocks.js"), __webpack_exec__("./vendor/ibexa/segmentation/src/bundle/ui-dev/src/modules/page.builder.update.preview.request.params.js"));
/******/ }
]);