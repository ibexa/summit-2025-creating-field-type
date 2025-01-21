(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-taxonomy-location-view-js"],{

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js ***!
  \*****************************************************************************************/
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js ***!
  \*************************************************************************************************/
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

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.content.assign.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.content.assign.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var assignContentBtns = doc.querySelectorAll('.ibexa-btn--assign-content');
  var form = doc.querySelector('form[name="taxonomy_content_assign"]');
  var IDS_SEPARATOR = ',';
  if (!form) {
    return;
  }
  var submitButton = form.querySelector('#taxonomy_content_assign_assign');
  var assignedLocationsInput = form.querySelector('#taxonomy_content_assign_locations');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var onConfirm = function onConfirm(items) {
    closeUDW();
    assignedLocationsInput.value = items.map(function (item) {
      return item.id;
    }).join(IDS_SEPARATOR);
    submitButton.click();
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    var defaultUniversalDiscoveryTitle = Translator.trans(/*@Desc("Select Location")*/'add_location.title', {}, 'ibexa_universal_discovery_widget');
    var _event$currentTarget$ = event.currentTarget.dataset,
      udwConfig = _event$currentTarget$.udwConfig,
      universaldiscoveryTitle = _event$currentTarget$.universaldiscoveryTitle;
    var config = JSON.parse(udwConfig);
    var title = universaldiscoveryTitle !== null && universaldiscoveryTitle !== void 0 ? universaldiscoveryTitle : defaultUniversalDiscoveryTitle;
    var selectedLocationsIds = assignedLocationsInput.value.split(IDS_SEPARATOR).filter(function (idString) {
      return !!idString;
    }).map(function (idString) {
      return parseInt(idString, 10);
    });
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      selectedLocations: selectedLocationsIds
    }, config)));
  };
  assignContentBtns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.tree.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.tree.js ***!
  \*************************************************************************************/
/***/ (() => {

(function (global, doc, React, ReactDOM, ibexa) {
  var taxonomyTreeContainer = doc.querySelector('.ibexa-taxonomy-tree-container');
  if (!taxonomyTreeContainer) {
    return;
  }
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var taxonomyTreeRootElement = doc.querySelector('.ibexa-taxonomy-tree-container__root');
  var _taxonomyTreeContaine = taxonomyTreeContainer.dataset,
    taxonomyName = _taxonomyTreeContaine.taxonomy,
    moduleName = _taxonomyTreeContaine.moduleName,
    currentPath = _taxonomyTreeContaine.currentPath;
  var userId = ibexa.helpers.user.getId();
  var taxonomyTreeRoot = null;
  var removeTaxonomyTreeContainerWidth = function removeTaxonomyTreeContainerWidth(event) {
    if (event.detail.id !== 'ibexa-taxonomy-tree') {
      return;
    }
    taxonomyTreeContainer.style.width = null;
  };
  var renderTree = function renderTree() {
    taxonomyTreeRoot = ReactDOM.createRoot(taxonomyTreeRootElement);
    taxonomyTreeRoot.render(React.createElement(ibexa.modules.TaxonomyTree, {
      userId: userId,
      taxonomyName: taxonomyName,
      moduleName: moduleName,
      currentPath: currentPath,
      restInfo: {
        token: token,
        siteaccess: siteaccess
      },
      rootSelectionDisabled: !!taxonomyTreeRootElement.dataset.rootSelectionDisabled
    }));
  };
  doc.body.addEventListener('ibexa-tb-rendered', removeTaxonomyTreeContainerWidth, false);
  renderTree();
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/extra.actions.js":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/extra.actions.js ***!
  \*******************************************************************************/
/***/ (() => {

(function (global, doc) {
  var createActions = doc.querySelector('.ibexa-extra-actions--create.ibexa-extra-actions--taxonomy');
  if (!createActions) {
    return;
  }
  var createButton = doc.querySelector('.ibexa-btn--create.ibexa-btn--taxonomy-context-menu-entry');
  var form = createActions.querySelector('form');
  var shouldSubmitForm = createActions.classList.contains('ibexa-extra-actions--prevent-show');
  if (shouldSubmitForm) {
    createButton.addEventListener('click', function () {
      return form.submit();
    });
  }
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js ***!
  \********************************************************************************************************/
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
var EmptyTree = function EmptyTree() {
  var emptyBadge = Translator.trans(/*@Desc("1")*/'taxonomy.1', {}, 'ibexa_taxonomy_ui');
  var emptyContent = Translator.trans(/*@Desc("Your tree is empty. Start creating your structure")*/'taxonomy.empty', {}, 'ibexa_taxonomy_ui');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-empty__badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-badge"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-badge__content"
  }, emptyBadge))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-empty__content"
  }, emptyContent));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyTree);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/header-content/header.content.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/header-content/header.content.js ***!
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/dropdown/dropdown.js");




var _window = window,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var languages = Object.values(ibexa.adminUiConfig.languages.mappings).filter(function (_ref) {
  var enabled = _ref.enabled;
  return enabled;
});
var HeaderContent = function HeaderContent(_ref2) {
  var name = _ref2.name,
    languageCode = _ref2.languageCode,
    setLanguageCode = _ref2.setLanguageCode;
  var dropdownListRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var language = ibexa.adminUiConfig.languages.mappings[languageCode];
  var languageName = language.name;
  var languageInfoMessage = Translator.trans(/*@Desc("in %languageName%")*/'taxonomy.in_language', {
    languageName: languageName
  }, 'ibexa_taxonomy_ui');
  var options = languages.map(function (option) {
    return {
      value: option.languageCode,
      label: option.name
    };
  });
  var renderLanguageSwitcher = function renderLanguageSwitcher() {
    var switcherIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "languages",
      extraClasses: "ibexa-icon--small"
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      single: true,
      value: languageCode,
      options: options,
      dropdownListRef: dropdownListRef,
      onChange: setLanguageCode,
      renderSelectedItem: function renderSelectedItem() {
        return switcherIcon;
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!dropdownListRef.current) {
      dropdownListRef.current = document.createElement('div');
      dropdownListRef.current.classList.add('c-tt-header-content-language-list', 'c-tb-element');
      document.body.appendChild(dropdownListRef.current);
    }
    return function () {
      if (dropdownListRef.current) {
        dropdownListRef.current.remove();
      }
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-header-content c-tb-header__name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "content-tree",
    extraClasses: "ibexa-icon--small c-tb-header__tree-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-header-content__right-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-header-content__right-column-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tb-header__name-content"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tt-header-content__language"
  }, languageInfoMessage)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-tt-header-content__right-column-switcher"
  }, renderLanguageSwitcher())));
};
HeaderContent.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  languageCode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  setLanguageCode: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderContent);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var NameContent = function NameContent(_ref) {
  var _name$match;
  var searchActive = _ref.searchActive,
    searchValue = _ref.searchValue,
    name = _ref.name;
  if (!searchActive) {
    return name;
  }
  var searchNameRegexp = new RegExp("(.*)(".concat(searchValue, ")(.*)"), 'i');
  var _ref2 = (_name$match = name.match(searchNameRegexp)) !== null && _name$match !== void 0 ? _name$match : [],
    _ref3 = _slicedToArray(_ref2, 4),
    searchPrefix = _ref3[1],
    searchName = _ref3[2],
    searchSuffix = _ref3[3];
  if (!searchName) {
    return name;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tt-list-item__search-fragment"
  }, searchPrefix), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tt-list-item__search-fragment--matched"
  }, searchName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "c-tt-list-item__search-fragment"
  }, searchSuffix));
};
NameContent.propTypes = {
  searchActive: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NameContent);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/actions.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/actions.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsDisabledDelete: () => (/* binding */ checkIsDisabledDelete),
/* harmony export */   checkIsDisabledMove: () => (/* binding */ checkIsDisabledMove)
/* harmony export */ });
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/tree.js");

var checkIsDisabledMove = function checkIsDisabledMove(items) {
  if (items.length !== 1) {
    return false;
  }
  var entry = items[0].internalItem;
  return (0,_tree__WEBPACK_IMPORTED_MODULE_0__.isRoot)(entry);
};
var checkIsDisabledDelete = function checkIsDisabledDelete(items) {
  if (items.length !== 1) {
    return false;
  }
  var entry = items[0].internalItem;
  return (0,_tree__WEBPACK_IMPORTED_MODULE_0__.isRoot)(entry);
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLastElement: () => (/* binding */ getLastElement)
/* harmony export */ });
var getLastElement = function getLastElement(arr) {
  var arrLength = arr.length;
  return arr[arrLength - 1];
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/getters.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/getters.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContentLink: () => (/* binding */ getContentLink),
/* harmony export */   getPath: () => (/* binding */ getPath),
/* harmony export */   getTotal: () => (/* binding */ getTotal)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js");


/* we don't have totalSubitems because of performance, we use nested set tree properties */
var hasSubitems = function hasSubitems(item) {
  return item.right - item.left > 1;
};
var getContentLink = function getContentLink(item) {
  var locationHref = window.Routing.generate('ibexa.content.view', {
    contentId: item.contentId
  });
  return locationHref;
};
var getTotal = function getTotal(item) {
  var totalChildrenCount = 0;
  if (hasSubitems(item)) {
    if (item.__children.length) {
      totalChildrenCount = item.__children.length;
    } else {
      totalChildrenCount = 1;
    }
  }
  return totalChildrenCount;
};
var getParentPath = function getParentPath(parents) {
  if (!parents || parents.length === 0) {
    return '';
  }
  var parent = (0,_array__WEBPACK_IMPORTED_MODULE_0__.getLastElement)(parents);
  return "".concat(parent.path, "/");
};
var getPath = function getPath(item) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    parents = _ref.parents;
  var parentPath = getParentPath(parents);
  return "".concat(parentPath).concat(item.id);
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTranslatedName: () => (/* binding */ getTranslatedName),
/* harmony export */   hasTranslation: () => (/* binding */ hasTranslation)
/* harmony export */ });
var hasTranslation = function hasTranslation(entry, languageCode) {
  var _entry$names;
  return !!((_entry$names = entry.names) !== null && _entry$names !== void 0 && _entry$names[languageCode]);
};
var getTranslatedName = function getTranslatedName(entry, languageCode) {
  if (hasTranslation(entry, languageCode)) {
    var _entry$names2;
    return (_entry$names2 = entry.names) === null || _entry$names2 === void 0 ? void 0 : _entry$names2[languageCode];
  }
  return entry.name;
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/search.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/search.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSearchTreeProps: () => (/* binding */ getSearchTreeProps)
/* harmony export */ });
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");

var getMenuActions = function getMenuActions(_ref) {
  var actions = _ref.actions,
    item = _ref.item;
  var activeActionsIds = ['add', 'delete', 'assignContent'];
  return (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_tree__WEBPACK_IMPORTED_MODULE_0__.getMenuActions)({
    actions: actions,
    item: item,
    activeActionsIds: activeActionsIds
  });
};
var getSearchTreeProps = function getSearchTreeProps(_ref2) {
  var searchTree = _ref2.searchTree,
    searchActive = _ref2.searchActive;
  if (!searchActive) {
    return {};
  }
  return {
    tree: searchTree,
    isLocalStorageActive: false,
    getMenuActions: getMenuActions,
    extraClasses: 'c-tb-tree--non-expandable'
  };
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/tree.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/tree.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findItem: () => (/* binding */ _findItem),
/* harmony export */   getExpandedItems: () => (/* binding */ _getExpandedItems),
/* harmony export */   isRoot: () => (/* binding */ isRoot)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _findItem = function findItem(items, originalPath) {
  var path = _toConsumableArray(originalPath);
  var isLast = path.length === 1;
  var item = items.find(function (element) {
    return element.id === parseInt(path[0], 10);
  });
  if (!item) {
    return null;
  }
  if (isLast) {
    return item;
  }
  if (!Array.isArray(item.__children)) {
    return null;
  }
  path.shift();
  return _findItem(item.__children, path);
};

var isRoot = function isRoot(item) {
  return item.root === item.id;
};
var _getExpandedItems = function getExpandedItems(treeNode) {
  if (!treeNode.__children.length) {
    return [];
  }
  return treeNode.__children.filter(function (_ref) {
    var __children = _ref.__children;
    return __children.length;
  }).reduce(function (expandedItems, child) {
    return [].concat(_toConsumableArray(expandedItems), _toConsumableArray(_getExpandedItems(child)));
  }, [treeNode]);
};


/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assignContent: () => (/* binding */ assignContent),
/* harmony export */   deleteElements: () => (/* binding */ deleteElements),
/* harmony export */   loadNode: () => (/* binding */ loadNode),
/* harmony export */   loadSearchResults: () => (/* binding */ loadSearchResults),
/* harmony export */   loadTree: () => (/* binding */ loadTree),
/* harmony export */   loadTreeRoot: () => (/* binding */ loadTreeRoot),
/* harmony export */   moveElements: () => (/* binding */ moveElements)
/* harmony export */ });
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var NO_CONTENT_STATUS_CODE = 204;
var ENDPOINT_BULK = '/api/ibexa/v2/bulk';
var HEADERS_BULK = {
  Accept: 'application/vnd.ibexa.api.BulkOperationResponse+json',
  'Content-Type': 'application/vnd.ibexa.api.BulkOperation+json'
};
var cleanEntryIds = function cleanEntryIds(entryIds) {
  return entryIds.filter(function (el) {
    return !!el;
  });
};

// TODO: should be moved to admin-ui helpers
var handleRequestResponseWrapper = function handleRequestResponseWrapper(response) {
  var statusCode = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponseStatus)(response);
  if (statusCode === NO_CONTENT_STATUS_CODE) {
    return null;
  }
  return (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse)(response);
};
var handleAbortException = function handleAbortException(error) {
  if ((error === null || error === void 0 ? void 0 : error.name) === 'AbortError') {
    return;
  }
  throw error;
};
var loadTreeRoot = function loadTreeRoot(_ref) {
  var taxonomyName = _ref.taxonomyName;
  var loadTreeRootUrl = window.Routing.generate('ibexa.taxonomy.tree.root', {
    taxonomyName: taxonomyName
  }, true);
  var request = new Request(loadTreeRootUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var loadTree = function loadTree(_ref2) {
  var taxonomyName = _ref2.taxonomyName,
    entryIds = _ref2.entryIds;
  var loadTreeUrl = window.Routing.generate('ibexa.taxonomy.tree.subtree', {
    taxonomyName: taxonomyName,
    entryIds: cleanEntryIds(entryIds)
  }, true);
  var request = new Request(loadTreeUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var loadNode = function loadNode(_ref3) {
  var taxonomyName = _ref3.taxonomyName,
    entryId = _ref3.entryId;
  var loadNodeUrl = window.Routing.generate('ibexa.taxonomy.tree.node', {
    taxonomyName: taxonomyName,
    entryId: entryId
  }, true);
  var request = new Request(loadNodeUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var moveElements = function moveElements(entries, _ref4) {
  var restInfo = _ref4.restInfo,
    taxonomyName = _ref4.taxonomyName;
  var route = "/api/ibexa/v2/taxonomy/".concat(taxonomyName, "/entries/move");
  var request = new Request(route, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/vnd.ibexa.api.TaxonomyEntryBulkMove+json',
      'X-CSRF-Token': restInfo.token,
      'X-Siteaccess': restInfo.siteaccess
    },
    body: JSON.stringify({
      TaxonomyEntryBulkMove: {
        entries: entries
      }
    }),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var deleteElements = function deleteElements(entries, _ref5) {
  var restInfo = _ref5.restInfo,
    taxonomyName = _ref5.taxonomyName;
  var route = "/api/ibexa/v2/taxonomy/".concat(taxonomyName, "/entries");
  var request = new Request(route, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/vnd.ibexa.api.TaxonomyEntryBulkRemove+json',
      'X-CSRF-Token': restInfo.token,
      'X-Siteaccess': restInfo.siteaccess
    },
    body: JSON.stringify({
      TaxonomyEntryBulkRemove: {
        entries: entries
      }
    }),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var getBulkAssignContent = function getBulkAssignContent(taxonomyName, contentId, entriesIds) {
  return {
    uri: "/api/ibexa/v2/taxonomy/".concat(taxonomyName, "/entry-assignments/assign-to-content"),
    content: JSON.stringify({
      TaxonomyEntryAssignToContent: {
        content: contentId,
        entries: entriesIds
      }
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/vnd.ibexa.api.TaxonomyEntryAssignToContent+json'
    },
    method: 'POST'
  };
};
var assignContent = function assignContent(contentIds, entriesIds, _ref6) {
  var restInfo = _ref6.restInfo,
    taxonomyName = _ref6.taxonomyName;
  var requestBodyOperations = contentIds.map(function (contentId) {
    return getBulkAssignContent(taxonomyName, contentId, entriesIds);
  });
  var request = new Request(ENDPOINT_BULK, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, HEADERS_BULK), {}, {
      'X-CSRF-Token': restInfo.token,
      'X-Siteaccess': restInfo.siteaccess
    }),
    body: JSON.stringify({
      bulkOperations: {
        operations: requestBodyOperations
      }
    }),
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request).then(handleRequestResponseWrapper);
};
var loadSearchResults = function loadSearchResults(_ref7) {
  var taxonomyName = _ref7.taxonomyName,
    searchValue = _ref7.searchValue,
    languageCode = _ref7.languageCode,
    signal = _ref7.signal;
  var loadTreeUrl = window.Routing.generate('ibexa.taxonomy.tree.search', {
    taxonomyName: taxonomyName,
    query: searchValue,
    languageCode: languageCode
  }, true);
  var request = new Request(loadTreeUrl, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin'
  });
  return fetch(request, {
    signal: signal
  }).then(handleRequestResponseWrapper)["catch"](handleAbortException);
};

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/components/add-tag/add.tag.js":
/*!*********************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/components/add-tag/add.tag.js ***!
  \*********************************************************************************************************/
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
/* harmony import */ var _taxonomy_tree_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../taxonomy.tree.module */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.module.js");





var _window = window,
  document = _window.document,
  Translator = _window.Translator,
  ibexa = _window.ibexa;
var AddTag = function AddTag(_ref) {
  var item = _ref.item;
  var languageCode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_taxonomy_tree_module__WEBPACK_IMPORTED_MODULE_4__.LanguageCodeContext);
  var itemLabel = Translator.trans(/*@Desc("Add")*/'actions.add_tag', {}, 'ibexa_taxonomy_ui');
  var isDisabled = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__.isItemEmpty)(item);
  var addTag = function addTag() {
    var form = document.querySelector('form[name="taxonomy_entry_create"]');
    var entryIdField = form.querySelector('#taxonomy_entry_create_parent_entry');
    var languageField = form.querySelector('#taxonomy_entry_create_language');
    var languageDropdownField = languageField.closest('.ibexa-dropdown');
    var languageDropdownInstance = ibexa.helpers.objectInstances.getInstance(languageDropdownField);
    var extraActionsSidebar = document.querySelector('.ibexa-extra-actions--create');
    var openExtraActionsBtn = document.querySelector('.ibexa-btn--create.ibexa-btn--extra-actions');
    var extraActionsSubtitle = extraActionsSidebar.querySelector('.ibexa-extra-actions__header-subtitle');
    var originalId = entryIdField.value;
    var originalSubtitle = extraActionsSubtitle.innerHTML;
    var originalLanguage = languageField.value;
    var newExtraActionsSubtitleContent = extraActionsSubtitle.dataset.template.replace('{{ name }}', item.internalItem.name);
    var _revertOriginalFormState = function revertOriginalFormState() {
      entryIdField.value = originalId;
      extraActionsSubtitle.innerHTML = originalSubtitle;
      languageDropdownInstance.selectOption(originalLanguage);
      document.body.removeEventListener('ibexa-extra-actions:after-close', _revertOriginalFormState, false);
    };
    entryIdField.value = item.id;
    extraActionsSubtitle.innerHTML = newExtraActionsSubtitleContent;
    languageDropdownInstance.selectOption(languageCode);
    setTimeout(function () {
      openExtraActionsBtn.click();
      document.body.addEventListener('ibexa-extra-actions:after-close', _revertOriginalFormState, false);
    }, 0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isDisabled: isDisabled,
    onClick: addTag
  });
};
AddTag.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
AddTag.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddTag);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/components/assign-content/assign.content.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/components/assign-content/assign.content.js ***!
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
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/services/taxonomy.tree.service */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js");
/* harmony import */ var _taxonomy_tree_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../taxonomy.tree.module */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









var _window = window,
  document = _window.document,
  Translator = _window.Translator,
  ReactDOM = _window.ReactDOM,
  ibexa = _window.ibexa;
var AssignContent = function AssignContent(_ref) {
  var item = _ref.item;
  var taxonomyName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_6__.SubIdContext);
  var restInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_taxonomy_tree_module__WEBPACK_IMPORTED_MODULE_8__.RestInfoContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_4__.SelectedContext),
    contextSelectedData = _useContext.selectedData,
    dispatchSelectedData = _useContext.dispatchSelectedData;
  var itemLabel = Translator.trans(/*@Desc("Assign")*/'actions.assign', {}, 'ibexa_taxonomy_ui');
  var selectedData = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_item__WEBPACK_IMPORTED_MODULE_3__.isItemEmpty)(item) ? contextSelectedData : [item];
  var isDisabled = selectedData.length === 0;
  var assignContent = function assignContent() {
    var udwContainer = document.getElementById('react-udw');
    var udwRoot = ReactDOM.createRoot(udwContainer);
    var configContainer = document.querySelector('div[data-assign-content-udw-config]');
    var closeUDW = function closeUDW() {
      return udwRoot.unmount();
    };
    var onConfirm = function onConfirm(contentItems) {
      var entriesIds = selectedData.map(function (selectedItem) {
        return selectedItem.id;
      });
      var contentIds = contentItems.map(function (contentItem) {
        return contentItem.ContentInfo.Content._id;
      });
      (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_7__.assignContent)(contentIds, entriesIds, {
        restInfo: restInfo,
        taxonomyName: taxonomyName
      }).then(function () {
        var message;
        if (selectedData.length === 1) {
          message = Translator.trans(/*@Desc("Content has been assigned to taxonomy entry")*/'actions.assign_content.success.single', {}, 'ibexa_taxonomy_ui');
        } else {
          message = Translator.trans(/*@Desc("Content has been assigned to taxonomy entries")*/'actions.assign_content.success.multi', {}, 'ibexa_taxonomy_ui');
        }
        ibexa.helpers.notification.showSuccessNotification(message);
        window.location.reload(true);
      })["catch"](function () {
        var message = Translator.trans(/*@Desc("An unexpected error occurred while assigning Content. Please try again later.")*/
        'actions.error.message', {}, 'ibexa_taxonomy_ui');
        ibexa.helpers.notification.showErrorNotification(message);
      });
      closeUDW();
      dispatchSelectedData({
        type: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_5__.STORED_ITEMS_CLEAR
      });
    };
    var onCancel = function onCancel() {
      return closeUDW();
    };
    var openUDW = function openUDW() {
      var config = JSON.parse(configContainer.dataset.assignContentUdwConfig);
      var title = Translator.trans(/*@Desc("Select Content to assign")*/'actions.assign_content.udw_title', {}, 'ibexa_universal_discovery_widget');
      udwRoot.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
        onConfirm: onConfirm,
        onCancel: onCancel,
        title: title
      }, config)));
    };
    openUDW();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    isDisabled: isDisabled,
    onClick: assignContent
  });
};
AssignContent.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
AssignContent.defaultProps = {
  item: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssignContent);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.base.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.base.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/deep.clone.helper.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/tree.js");
/* harmony import */ var _common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/taxonomy.tree.service */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js");
/* harmony import */ var _common_helpers_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/helpers/search */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/search.js");
/* harmony import */ var _common_helpers_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/helpers/array */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/helpers/getters */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _common_helpers_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helpers/tree */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/tree.js");
/* harmony import */ var _common_components_empty_tree_empty_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/components/empty-tree/empty.tree */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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










var _window = window,
  ibexa = _window.ibexa;
var MIN_SEARCH_LENGTH = 1;
var TaxonomyTreeBase = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var userId = props.userId,
    taxonomyName = props.taxonomyName,
    moduleId = props.moduleId,
    subId = props.subId,
    subtreeId = props.subtreeId,
    currentPath = props.currentPath,
    _renderLabel = props.renderLabel,
    getItemLink = props.getItemLink,
    treeBuilderExtraProps = props.treeBuilderExtraProps,
    languageCode = props.languageCode,
    generateExtraBottomItems = props.generateExtraBottomItems,
    useTheme = props.useTheme;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    searchTree = _useState2[0],
    setSearchTree = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    searchActive = _useState4[0],
    setSearchActive = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    searchValue = _useState6[0],
    setSearchValue = _useState6[1];
  var searchRequestTimeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var abortControllerSearchRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var treeBuilderModuleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    tree = _useState8[0],
    setTree = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isLoaded = _useState10[0],
    setIsLoaded = _useState10[1];
  var readSubtree = function readSubtree() {
    var _getData;
    return (_getData = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__.getData)({
      moduleId: moduleId,
      userId: userId,
      subId: taxonomyName,
      dataId: subtreeId
    })) !== null && _getData !== void 0 ? _getData : [];
  };
  var subtree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(readSubtree());
  var setInitialItemsState = function setInitialItemsState(location) {
    setIsLoaded(true);
    setTree(location);
  };
  var saveSubtree = function saveSubtree() {
    var data = _toConsumableArray(new Set(subtree.current));
    (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_2__.saveData)({
      moduleId: moduleId,
      userId: userId,
      subId: taxonomyName,
      dataId: subtreeId,
      data: data
    });
  };
  var getLoadTreePromise = function getLoadTreePromise() {
    var _subtree$current;
    if ((_subtree$current = subtree.current) !== null && _subtree$current !== void 0 && _subtree$current.length) {
      var entryIds = subtree.current.map(function (entryPath) {
        return (0,_common_helpers_array__WEBPACK_IMPORTED_MODULE_6__.getLastElement)(entryPath.split('/'));
      });
      var _currentPath$split$sl = currentPath.split('/').slice(-1),
        _currentPath$split$sl2 = _slicedToArray(_currentPath$split$sl, 1),
        currentId = _currentPath$split$sl2[0];
      entryIds.push(currentId);
      return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadTree)({
        taxonomyName: taxonomyName,
        entryIds: entryIds
      });
    }
    return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadTreeRoot)({
      taxonomyName: taxonomyName
    });
  };
  var loadTreeToState = function loadTreeToState() {
    return getLoadTreePromise().then(function (rootResponse) {
      var _treeBuilderModuleRef;
      var _rootResponse = _slicedToArray(rootResponse, 1),
        rootItem = _rootResponse[0];
      setInitialItemsState(rootItem);
      var idsToExpand = currentPath.split('/').slice(0, -1).map(function (id) {
        return parseInt(id, 10);
      });
      if (!idsToExpand.length) {
        idsToExpand.push(parseInt(currentPath, 10));
      }
      var fakeItemsToExpand = idsToExpand.map(function (id) {
        return {
          id: id
        };
      });
      (_treeBuilderModuleRef = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef === void 0 || _treeBuilderModuleRef.expandItems(fakeItemsToExpand);
      return rootItem;
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var loadMoreSubitems = function loadMoreSubitems(item) {
    return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadNode)({
      taxonomyName: taxonomyName,
      entryId: item.id
    }).then(function (nodeResponse) {
      var children = nodeResponse.__children;
      var treeItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_8__.findItem)([tree], item.path.split('/'));
      if (treeItem) {
        var nextTree = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_deep_clone_helper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tree);
        var nextTreeItem = (0,_common_helpers_tree__WEBPACK_IMPORTED_MODULE_8__.findItem)([nextTree], item.path.split('/'));
        nextTreeItem.__children = children;
        setTree(nextTree);
      }
      return children;
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var callbackToggleExpanded = function callbackToggleExpanded(item, _ref) {
    var isExpanded = _ref.isExpanded,
      loadMore = _ref.loadMore;
    var regexp = new RegExp("/?".concat(item.id, "$"), 'g');
    var parentPath = item.path.replace(regexp, '');
    if (isExpanded) {
      subtree.current = subtree.current.filter(function (entryPath) {
        return entryPath !== parentPath;
      });
      if (!subtree.current.includes(item.path)) {
        subtree.current.push(item.path);
      }
      var shouldLoadInitialItems = item.subitems && !item.subitems.length;
      if (shouldLoadInitialItems) {
        loadMore();
      }
    } else {
      subtree.current = subtree.current.filter(function (entryPath) {
        return entryPath.indexOf(item.path) !== 0;
      });
      if (parentPath && !subtree.current.includes(item.path)) {
        subtree.current.push(parentPath);
      }
    }
    saveSubtree();
  };
  var renderEmpty = function renderEmpty() {
    if (!isLoaded || (tree === null || tree === void 0 ? void 0 : tree.id) !== undefined) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_empty_tree_empty_tree__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  };
  var buildItem = function buildItem(item, restProps) {
    return item.internalItem ? item : {
      internalItem: item,
      id: item.id,
      href: getItemLink(item),
      path: (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_7__.getPath)(item, restProps),
      subitems: item.__children,
      total: (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_7__.getTotal)(item),
      renderLabel: function renderLabel(renderItem, params) {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }
        return _renderLabel.apply(void 0, [renderItem, _objectSpread(_objectSpread({}, params), {}, {
          searchActive: searchActive,
          searchValue: searchValue
        })].concat(args));
      },
      customItemClass: 'c-tt-list-item',
      isContainer: !!(0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_7__.getTotal)(item)
    };
  };
  var onItemsMoved = loadTreeToState;
  var expandAllItems = function expandAllItems(rootItem) {
    var _treeBuilderModuleRef2;
    var hasSubitems = function hasSubitems(_ref2) {
      var subitems = _ref2.subitems;
      return !!subitems && subitems.length;
    };
    var allChildren = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_tree__WEBPACK_IMPORTED_MODULE_3__.getAllChildren)({
      data: rootItem,
      buildItem: buildItem,
      condition: hasSubitems
    });
    (_treeBuilderModuleRef2 = treeBuilderModuleRef.current) === null || _treeBuilderModuleRef2 === void 0 || _treeBuilderModuleRef2.expandItems(allChildren);
  };
  var onSearchInputChange = function onSearchInputChange(inputValue) {
    setSearchValue(inputValue.trim());
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var _abortControllerSearc;
    (_abortControllerSearc = abortControllerSearchRef.current) === null || _abortControllerSearc === void 0 || _abortControllerSearc.abort();
    clearTimeout(searchRequestTimeoutRef.current);
    searchRequestTimeoutRef.current = setTimeout(function () {
      if (searchValue.length >= MIN_SEARCH_LENGTH) {
        abortControllerSearchRef.current = new AbortController();
        (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_4__.loadSearchResults)({
          taxonomyName: taxonomyName,
          searchValue: searchValue,
          languageCode: languageCode,
          signal: abortControllerSearchRef.current.signal
        }).then(function (rootResponse) {
          if (!(rootResponse !== null && rootResponse !== void 0 && rootResponse.length)) {
            setSearchTree(null);
          } else {
            var _rootResponse2 = _slicedToArray(rootResponse, 1),
              rootItem = _rootResponse2[0];
            setSearchTree(rootItem);
            expandAllItems(rootItem);
          }
          setSearchActive(true);
        });
      } else {
        setSearchTree(null);
        setSearchActive(false);
      }
    }, 100);
    return function () {
      clearTimeout(searchRequestTimeoutRef.current);
    };
  }, [searchValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () {
    return {
      onItemsMoved: onItemsMoved,
      expandAllItems: expandAllItems
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var parentPath = currentPath.split('/').slice(0, -1).join('/');
    if (!parentPath) {
      parentPath = currentPath;
    }
    if (parentPath && !subtree.current.includes(parentPath)) {
      subtree.current.push(parentPath);
      saveSubtree();
    }
    loadTreeToState();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ibexa.modules.TreeBuilder, _extends({
    ref: treeBuilderModuleRef,
    moduleId: moduleId,
    userId: userId,
    subId: subId,
    tree: tree,
    buildItem: buildItem,
    loadMoreSubitems: loadMoreSubitems,
    callbackToggleExpanded: callbackToggleExpanded,
    isLoading: !isLoaded,
    searchVisible: true,
    onSearchInputChange: onSearchInputChange,
    initialSearchValue: searchValue,
    extraBottomItems: generateExtraBottomItems({
      searchActive: searchActive,
      searchValue: searchValue
    }),
    useTheme: useTheme
  }, treeBuilderExtraProps, (0,_common_helpers_search__WEBPACK_IMPORTED_MODULE_5__.getSearchTreeProps)({
    searchTree: searchTree,
    searchActive: searchActive
  })), renderEmpty());
});
TaxonomyTreeBase.displayName = 'TaxonomyTreeBase';
TaxonomyTreeBase.propTypes = {
  userId: PropTypes.number.isRequired,
  taxonomyName: PropTypes.string.isRequired,
  moduleId: PropTypes.string.isRequired,
  subId: PropTypes.string.isRequired,
  subtreeId: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  renderLabel: PropTypes.func.isRequired,
  getItemLink: PropTypes.func.isRequired,
  treeBuilderExtraProps: PropTypes.object.isRequired,
  languageCode: PropTypes.string.isRequired,
  generateExtraBottomItems: PropTypes.func,
  useTheme: PropTypes.bool
};
TaxonomyTreeBase.defaultProps = {
  generateExtraBottomItems: function generateExtraBottomItems() {
    return [];
  },
  useTheme: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyTreeBase);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.module.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.module.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageCodeContext: () => (/* binding */ LanguageCodeContext),
/* harmony export */   RestInfoContext: () => (/* binding */ RestInfoContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/localStorage.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_move_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/move/move */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/move/move.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/delete/delete.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_collapse_all_collapse_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_select_all_select_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_unselect_all_unselect_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/unselect-all/unselect.all.js");
/* harmony import */ var _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ibexa-tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services/taxonomy.tree.service */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/services/taxonomy.tree.service.js");
/* harmony import */ var _common_helpers_getters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/helpers/getters */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/getters.js");
/* harmony import */ var _common_helpers_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/helpers/actions */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/actions.js");
/* harmony import */ var _common_helpers_languages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/helpers/languages */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages.js");
/* harmony import */ var _components_add_tag_add_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-tag/add.tag */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/components/add-tag/add.tag.js");
/* harmony import */ var _common_components_header_content_header_content__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/components/header-content/header.content */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/header-content/header.content.js");
/* harmony import */ var _components_assign_content_assign_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/assign-content/assign.content */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/components/assign-content/assign.content.js");
/* harmony import */ var _common_components_name_content_name_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/components/name-content/name-content */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js");
/* harmony import */ var _taxonomy_tree_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./taxonomy.tree.base */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.base.js");
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

















var RestInfoContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var LanguageCodeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var languages = Object.values(ibexa.adminUiConfig.languages.mappings).filter(function (_ref) {
  var enabled = _ref.enabled;
  return enabled;
});
var MODULE_ID = 'ibexa-taxonomy-tree';
var SUBTREE_ID = 'subtree';
var LANGUAGE_ID = 'language';
var TaxonomyTree = function TaxonomyTree(props) {
  var userId = props.userId,
    taxonomyName = props.taxonomyName,
    moduleName = props.moduleName,
    currentPath = props.currentPath,
    rootSelectionDisabled = props.rootSelectionDisabled;
  var treeBaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var getLanguageCode = function getLanguageCode() {
    var _getData;
    var savedLanguageCode = (_getData = (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__.getData)({
      moduleId: MODULE_ID,
      userId: userId,
      subId: taxonomyName,
      dataId: LANGUAGE_ID
    })) !== null && _getData !== void 0 ? _getData : props.languageCode;
    if (savedLanguageCode in languages) {
      return savedLanguageCode;
    }
    return ibexa.adminUiConfig.languages.priority[0];
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getLanguageCode()),
    _useState2 = _slicedToArray(_useState, 2),
    languageCode = _useState2[0],
    setLanguageCode = _useState2[1];
  var renderLabel = function renderLabel(item, _ref2) {
    var searchActive = _ref2.searchActive,
      searchValue = _ref2.searchValue,
      labelTruncatedCallbackRef = _ref2.labelTruncatedCallbackRef;
    var name = (0,_common_helpers_languages__WEBPACK_IMPORTED_MODULE_11__.getTranslatedName)(item.internalItem, languageCode);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-tb-list-item-single__label-truncated",
      title: name,
      ref: labelTruncatedCallbackRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_name_content_name_content__WEBPACK_IMPORTED_MODULE_15__["default"], {
      searchActive: searchActive,
      searchValue: searchValue,
      name: name
    }));
  };
  var callbackDeleteElements = function callbackDeleteElements(_ref3) {
    var selectedData = _ref3.selectedData;
    var entries = selectedData.map(function (element) {
      return element.id;
    });
    return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_8__.deleteElements)(entries, {
      restInfo: props.restInfo,
      taxonomyName: taxonomyName
    }).then(treeBaseRef.current.onItemsMoved).then(function () {
      var message;
      if (selectedData.length === 1) {
        message = Translator.trans(/*@Desc("Tag %name% has been removed")*/'taxonomy.tag_removed', {
          name: selectedData[0].internalItem.name
        }, 'ibexa_taxonomy_ui');
      } else {
        var names = selectedData.map(function (element) {
          return element.internalItem.name;
        }).join(', ');
        message = Translator.trans(/*@Desc("Tags %names% has been removed")*/'taxonomy.tags_removed', {
          names: names
        }, 'ibexa_taxonomy_ui');
      }
      ibexa.helpers.notification.showSuccessNotification(message);
    }).then(function () {
      var pathIds = currentPath.split('/').map(function (id) {
        return parseInt(id, 10);
      });
      var pathLength = pathIds.length;
      entries.forEach(function (entryId) {
        var entryIdIndex = pathIds.findIndex(function (id) {
          return id === entryId;
        });
        if (entryIdIndex !== -1) {
          pathIds = pathIds.slice(0, entryIdIndex);
        }
      });
      if (pathIds.length !== pathLength) {
        var _pathIds$slice = pathIds.slice(-1),
          _pathIds$slice2 = _slicedToArray(_pathIds$slice, 1),
          entryId = _pathIds$slice2[0]; // eslint-disable-line

        (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_8__.loadNode)({
          taxonomyName: taxonomyName,
          entryId: entryId
        }).then(function (nodeResponse) {
          window.location.href = (0,_common_helpers_getters__WEBPACK_IMPORTED_MODULE_9__.getContentLink)(nodeResponse);
        });
      }
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var callbackMoveElements = function callbackMoveElements(_ref4, _ref5) {
    var nextIndex = _ref4.nextIndex,
      nextParent = _ref4.nextParent,
      sibling = _ref4.sibling,
      siblingPosition = _ref4.siblingPosition;
    var selectedData = _ref5.selectedData;
    return new Promise(function (resolve) {
      if (nextIndex === -1) {
        (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_8__.loadNode)({
          taxonomyName: taxonomyName,
          entryId: nextParent.id
        }).then(function (nodeResponse) {
          var lastChildId = nodeResponse.__children[nodeResponse.__children.length - 1].id;
          var entries = selectedData.map(function (element) {
            return {
              entry: element.id,
              sibling: lastChildId,
              position: 'next'
            };
          });
          resolve(entries);
        });
      } else {
        var entries = selectedData.map(function (element) {
          return {
            entry: element.id,
            sibling: sibling.id,
            position: siblingPosition
          };
        });
        resolve(entries);
      }
    }).then(function (entries) {
      return (0,_common_services_taxonomy_tree_service__WEBPACK_IMPORTED_MODULE_8__.moveElements)(entries, {
        restInfo: props.restInfo,
        taxonomyName: taxonomyName
      });
    }).then(treeBaseRef.current.onItemsMoved).then(function () {
      var shouldReload = !!selectedData.find(function (_ref6) {
        var path = _ref6.path;
        return path === currentPath;
      });
      var message;
      if (selectedData.length === 1) {
        message = Translator.trans(/*@Desc("Tag %name% has been moved")*/'taxonomy.tag_moved', {
          name: selectedData[0].internalItem.name
        }, 'ibexa_taxonomy_ui');
      } else {
        var names = selectedData.map(function (element) {
          return element.internalItem.name;
        }).join(', ');
        message = Translator.trans(/*@Desc("Tags %names% has been moved")*/'taxonomy.tags_moved', {
          names: names
        }, 'ibexa_taxonomy_ui');
      }
      ibexa.helpers.notification.showSuccessNotification(message);
      if (shouldReload) {
        window.location.reload();
      }
    })["catch"](window.ibexa.helpers.notification.showErrorNotification);
  };
  var renderHeaderContent = function renderHeaderContent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_components_header_content_header_content__WEBPACK_IMPORTED_MODULE_13__["default"], {
      name: moduleName,
      languageCode: languageCode,
      setLanguageCode: setLanguageCode
    });
  };
  var isActive = function isActive(item) {
    return currentPath === item.path;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_helpers_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveData)({
      moduleId: MODULE_ID,
      userId: userId,
      subId: taxonomyName,
      dataId: LANGUAGE_ID,
      data: languageCode
    });
  }, [languageCode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RestInfoContext.Provider, {
    value: props.restInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LanguageCodeContext.Provider, {
    value: languageCode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_taxonomy_tree_base__WEBPACK_IMPORTED_MODULE_16__["default"], {
    ref: treeBaseRef,
    taxonomyName: taxonomyName,
    userId: userId,
    moduleId: MODULE_ID,
    subId: taxonomyName,
    subtreeId: SUBTREE_ID,
    currentPath: currentPath,
    languageCode: languageCode,
    renderLabel: renderLabel,
    getItemLink: _common_helpers_getters__WEBPACK_IMPORTED_MODULE_9__.getContentLink,
    useTheme: true,
    treeBuilderExtraProps: {
      moduleName: moduleName,
      rootSelectionDisabled: rootSelectionDisabled,
      searchVisible: true,
      dragDisabled: false,
      renderHeaderContent: renderHeaderContent,
      callbackMoveElements: callbackMoveElements,
      callbackDeleteElements: callbackDeleteElements,
      isActive: isActive,
      actionsType: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_TYPE.CONTEXTUAL_MENU
    }
  })));
};
TaxonomyTree.propTypes = {
  userId: PropTypes.number.isRequired,
  taxonomyName: PropTypes.string.isRequired,
  restInfo: PropTypes.shape({
    token: PropTypes.string.isRequired,
    siteaccess: PropTypes.string.isRequired
  }).isRequired,
  currentPath: PropTypes.string.isRequired,
  languageCode: PropTypes.string,
  moduleName: PropTypes.string,
  rootSelectionDisabled: PropTypes.bool
};
TaxonomyTree.defaultProps = {
  languageCode: ibexa.adminUiConfig.languages.priority[0],
  moduleName: Translator.trans(/*@Desc("Taxonomy tree")*/'taxonomy.tree_name', {}, 'ibexa_taxonomy_ui'),
  rootSelectionDisabled: false
};
var treeBuilderConfig = _defineProperty({}, MODULE_ID, {
  menuActions: [{
    priority: 20,
    id: 'modifying',
    subitems: [{
      priority: 10,
      id: 'add',
      component: _components_add_tag_add_tag__WEBPACK_IMPORTED_MODULE_12__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM]
    }, {
      priority: 30,
      id: 'move',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_move_move__WEBPACK_IMPORTED_MODULE_2__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      checkIsDisabled: _common_helpers_actions__WEBPACK_IMPORTED_MODULE_10__.checkIsDisabledMove
    }, {
      priority: 40,
      id: 'delete',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_delete_delete__WEBPACK_IMPORTED_MODULE_3__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM],
      checkIsDisabled: _common_helpers_actions__WEBPACK_IMPORTED_MODULE_10__.checkIsDisabledDelete,
      modalConfirmationBody: Translator.trans(/*@Desc("Are you sure you want to delete selected tree item(s)?")*/'taxonomy.delete.confirm', {}, 'ibexa_taxonomy_ui')
    }, {
      priority: 40,
      id: 'assignContent',
      component: _components_assign_content_assign_content__WEBPACK_IMPORTED_MODULE_14__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM]
    }]
  }, {
    priority: 30,
    id: 'collapsible',
    subitems: [{
      priority: 20,
      id: 'collapse',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_collapse_all_collapse_all__WEBPACK_IMPORTED_MODULE_4__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM]
    }]
  }, {
    priority: 40,
    id: 'other',
    subitems: [{
      priority: 10,
      id: 'select',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_select_all_select_all__WEBPACK_IMPORTED_MODULE_5__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM]
    }, {
      priority: 20,
      id: 'unselect',
      component: _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_actions_unselect_all_unselect_all__WEBPACK_IMPORTED_MODULE_6__["default"],
      visibleIn: [_ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.TOP_MENU, _ibexa_tree_builder_src_bundle_ui_dev_src_modules_tree_builder_tree_builder_module__WEBPACK_IMPORTED_MODULE_7__.ACTION_PARENT.SINGLE_ITEM]
    }]
  }]
});
window.ibexa.addConfig('treeBuilder', treeBuilderConfig);
window.ibexa.addConfig('modules.TaxonomyTree', TaxonomyTree);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxonomyTree);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js":
/*!*******************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/collapse-all/collapse.all.js ***!
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

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/move/move.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/move/move.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOVE_ID: () => (/* binding */ MOVE_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/action-list-item/action.list.item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/action-list-item/action.list.item.js");
/* harmony import */ var _tree_builder_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tree.builder.module */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/tree.builder.module.js");
/* harmony import */ var _components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/placeholder-provider/placeholder.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/placeholder-provider/placeholder.provider.js");
/* harmony import */ var _components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/selected-provider/selected.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/selected-provider/selected.provider.js");
/* harmony import */ var _components_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/intermediate-action-provider/intermediate.action.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/intermediate-action-provider/intermediate.action.provider.js");
/* harmony import */ var _components_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dnd-provider/dnd.provider */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/components/dnd-provider/dnd.provider.js");
/* harmony import */ var _hooks_useStoredItemsReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useStoredItemsReducer */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/hooks/useStoredItemsReducer.js");
/* harmony import */ var _helpers_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/item */ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/helpers/item.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }










var MOVE_ID = 'MOVE';
var ACTION_TIMEOUT = 250;
var MOVED_INDICATOR_TIMEOUT = 1000;
var _window = window,
  Translator = _window.Translator;
var Move = function Move(_ref) {
  var item = _ref.item,
    label = _ref.label,
    useIconAsLabel = _ref.useIconAsLabel,
    canBeDestination = _ref.canBeDestination,
    reorderAvailable = _ref.reorderAvailable,
    checkIsDisabled = _ref.checkIsDisabled;
  var actionTimeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_dnd_provider_dnd_provider__WEBPACK_IMPORTED_MODULE_7__.DraggableContext),
    startDragging = _useContext.startDragging;
  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_selected_provider_selected_provider__WEBPACK_IMPORTED_MODULE_5__.SelectedContext),
    contextSelectedData = _useContext2.selectedData,
    dispatchSelectedData = _useContext2.dispatchSelectedData;
  var _useContext3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_tree_builder_module__WEBPACK_IMPORTED_MODULE_3__.CallbackContext),
    callbackMoveElements = _useContext3.callbackMoveElements;
  var _useContext4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_intermediate_action_provider_intermediate_action_provider__WEBPACK_IMPORTED_MODULE_6__.IntermediateActionContext),
    setIntermediateAction = _useContext4.setIntermediateAction,
    groupingItemId = _useContext4.groupingItemId,
    clearIntermediateAction = _useContext4.clearIntermediateAction;
  var _useContext5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_placeholder_provider_placeholder_provider__WEBPACK_IMPORTED_MODULE_4__.PlaceholderContext),
    clearPlaceholder = _useContext5.clearPlaceholder;
  var itemLabel = label || Translator.trans(/*@Desc("Move")*/
  'actions.move', {}, 'ibexa_tree_builder_ui');
  var selectedData = (0,_helpers_item__WEBPACK_IMPORTED_MODULE_9__.isItemEmpty)(item) ? contextSelectedData : [item];
  var isDisabled = selectedData.length === 0 || checkIsDisabled(selectedData);
  var startMoving = function startMoving(event) {
    groupingItemId.current = null;
    if (!reorderAvailable) {
      setIntermediateAction({
        isActive: true,
        listItems: selectedData,
        id: MOVE_ID,
        isItemDisabled: function isItemDisabled(itemToMove, extras) {
          return (0,_helpers_item__WEBPACK_IMPORTED_MODULE_9__.isItemDisabled)(itemToMove, _objectSpread(_objectSpread({}, extras), {}, {
            selectedData: selectedData
          })) || !canBeDestination(itemToMove);
        },
        callback: function callback(itemToMove) {
          clearTimeout(actionTimeout.current);
          actionTimeout.current = setTimeout(function () {
            groupingItemId.current = null;
            callbackMoveElements(itemToMove, {
              selectedData: selectedData
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
              setTimeout(function () {
                clearIntermediateAction();
              }, MOVED_INDICATOR_TIMEOUT);
            });
          }, ACTION_TIMEOUT);
        }
      });
    } else {
      startDragging(event, {
        item: item
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_action_list_item_action_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: itemLabel,
    labelIcon: "move",
    useIconAsLabel: useIconAsLabel,
    onClick: startMoving,
    isDisabled: isDisabled
  });
};
Move.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),
  useIconAsLabel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  canBeDestination: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  checkIsDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  reorderAvailable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
Move.defaultProps = {
  item: {},
  label: null,
  useIconAsLabel: false,
  canBeDestination: function canBeDestination() {
    return true;
  },
  checkIsDisabled: function checkIsDisabled() {
    return false;
  },
  reorderAvailable: true
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Move);

/***/ }),

/***/ "./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/tree-builder/src/bundle/ui-dev/src/modules/tree-builder/actions/select-all/select.all.js ***!
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
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.module.js"), __webpack_exec__("./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.tree.js"), __webpack_exec__("./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/admin.taxonomy.content.assign.js"), __webpack_exec__("./vendor/ibexa/taxonomy/src/bundle/Resources/public/js/extra.actions.js"));
/******/ }
]);