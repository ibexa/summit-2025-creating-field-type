"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-site-context-location-preview-js"],{

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

/***/ "./vendor/ibexa/site-context/src/bundle/Resources/public/js/admin.location.preview.tree.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/site-context/src/bundle/Resources/public/js/admin.location.preview.tree.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_loader_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.loader.class */ "./vendor/ibexa/site-context/src/bundle/Resources/public/js/preview.loader.class.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");


(function (global, doc, Popover, Routing) {
  var INIT_POPOVER_DELAY = 200;
  var SHOW_POPOVER_DELAY = 400;
  var CONTEXT_SITEACCESS_INPUT_SELECTOR = '.ibexa-change-siteaccess-context';
  var CONTENT_TREE_LIST_ITEM_SELECTOR = '.c-tb-list-item-single__element';
  var CONTENT_TREE_LIST_ITEM_LINK_SELECTOR = '.c-tb-list-item-single__link';
  var CONTENT_TREE_LIST_ITEM_LINK_REGEXP = /\/view\/content\/\d+\/full\/true\/(\d+)/;
  var previewTemplateNode = doc.querySelector('.ibexa-sc-tree-preview');
  var _getAdminUiConfig = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_1__.getAdminUiConfig)(),
    focusMode = _getAdminUiConfig.focusMode;
  var currentVisibleItem = null;
  var initPopoverTimeout = null;
  var showPopoverTimeout = null;
  var getLocationIdFromHref = function getLocationIdFromHref(href) {
    return href.match(CONTENT_TREE_LIST_ITEM_LINK_REGEXP)[1];
  };
  var getSiteAccessContext = function getSiteAccessContext() {
    var input = doc.querySelector(CONTEXT_SITEACCESS_INPUT_SELECTOR);
    if (input && !input.disabled) {
      return input.value;
    }
    return '';
  };
  var iframeLoadCallback = function iframeLoadCallback(event, _ref) {
    var isAccepted = _ref.isAccepted;
    if (isAccepted) {
      this.iframe.classList.add('ibexa-preview-popover-content__iframe--success');
    }
    var previewWrapper = this.iframeWrapper.closest('.ibexa-preview-popover-content');
    var documentHTML = this.iframe.contentWindow.document.documentElement;
    var documentBody = documentHTML.querySelector('body');
    var scaleValue = previewWrapper.offsetWidth / this.iframe.offsetWidth;
    documentHTML.style.transformOrigin = 'top';
    documentHTML.style.overflow = 'hidden';
    if (!isAccepted) {
      this.iframeWrapper.classList.add('ibexa-preview-popover-content__iframe-wrapper--full-width');
      documentBody.style.display = 'flex';
      documentBody.style.height = '100%';
    } else {
      documentHTML.style.scale = scaleValue;
    }
    this.blockPointerEvents();
  };
  var removeExistingPreviewPopovers = function removeExistingPreviewPopovers() {
    var allPreviewPopovers = doc.querySelectorAll("".concat(CONTENT_TREE_LIST_ITEM_SELECTOR, "[aria-describedby]"));
    allPreviewPopovers.forEach(function (previewPopover) {
      var previewPopoverInstance = Popover.getInstance(previewPopover);
      previewPopoverInstance === null || previewPopoverInstance === void 0 || previewPopoverInstance.dispose();
    });
  };
  var createPreview = function createPreview(locationId) {
    var previewUrl = Routing.generate('ibexa.site_context.location_preview', {
      locationId: locationId
    });
    var previewTemplate = previewTemplateNode.content.cloneNode(true);
    var previewPopover = doc.createElement('div');
    previewPopover.appendChild(previewTemplate);
    var iframeWrapperNode = previewPopover.querySelector('.ibexa-preview-popover-content__iframe-wrapper');
    var loaderWrapperNode = previewPopover.querySelector('.ibexa-preview-popover-content__loader-wrapper');
    var previewLoaderInstance = new _preview_loader_class__WEBPACK_IMPORTED_MODULE_0__["default"]({
      iframeWrapper: iframeWrapperNode,
      loaderWrapper: loaderWrapperNode,
      previewUrl: previewUrl,
      fallbackTheme: focusMode ? 'dark' : 'light',
      iframeLoadCallback: iframeLoadCallback
    });
    previewLoaderInstance.init();
    return {
      previewInstance: previewLoaderInstance,
      previewElement: previewPopover
    };
  };
  var initPreviewPopovers = function initPreviewPopovers() {
    if (getSiteAccessContext() === '') {
      return;
    }
    doc.body.addEventListener('mouseover', function (event) {
      var contentTreeItem = event.target.classList.contains(CONTENT_TREE_LIST_ITEM_SELECTOR) ? event.target : event.target.closest(CONTENT_TREE_LIST_ITEM_SELECTOR);
      var popover = null;
      var currentPreviewInstance = null;
      if (!contentTreeItem || contentTreeItem === currentVisibleItem) {
        return;
      }
      currentVisibleItem = contentTreeItem;
      initPopoverTimeout = setTimeout(function () {
        var contentTreeItemLink = contentTreeItem.querySelector(CONTENT_TREE_LIST_ITEM_LINK_SELECTOR);
        if (!contentTreeItemLink) {
          return;
        }
        var locationId = getLocationIdFromHref(contentTreeItemLink.href);
        if (locationId) {
          removeExistingPreviewPopovers();
          var _createPreview = createPreview(locationId),
            previewInstance = _createPreview.previewInstance,
            previewElement = _createPreview.previewElement;
          currentPreviewInstance = previewInstance;
          popover = new Popover(contentTreeItem, {
            placement: 'right',
            fallbackPlacements: [],
            offset: function offset(_ref2) {
              var popper = _ref2.popper;
              return [popper.height / 2 - contentTreeItem.offsetHeight / 2 - 10, 16];
            },
            html: true,
            sanitize: false,
            trigger: 'manual',
            content: function content() {
              return previewElement;
            },
            customClass: 'ibexa-preview-popover ibexa-preview-popover--hidden'
          });
          popover.show();
          showPopoverTimeout = setTimeout(function () {
            var _popover;
            (_popover = popover) === null || _popover === void 0 || (_popover = _popover.tip) === null || _popover === void 0 || _popover.classList.remove('ibexa-preview-popover--hidden');
          }, SHOW_POPOVER_DELAY);
        }
      }, INIT_POPOVER_DELAY);
      contentTreeItem.addEventListener('mouseleave', function () {
        var _currentPreviewInstan, _popover2;
        clearTimeout(showPopoverTimeout);
        clearTimeout(initPopoverTimeout);
        currentVisibleItem = null;
        (_currentPreviewInstan = currentPreviewInstance) === null || _currentPreviewInstan === void 0 || _currentPreviewInstan.remove();
        (_popover2 = popover) === null || _popover2 === void 0 || _popover2.dispose();
      }, {
        once: true
      });
    });
  };
  initPreviewPopovers();
})(window, window.document, window.bootstrap.Popover, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/site-context/src/bundle/Resources/public/js/preview.loader.class.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/site-context/src/bundle/Resources/public/js/preview.loader.class.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATUS_GROUPS: () => (/* binding */ STATUS_GROUPS),
/* harmony export */   "default": () => (/* binding */ PreviewLoader)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var STATUS_GROUPS = {
  INFORMATIONAL: 'informational',
  SUCCESSFUL: 'successful',
  REDIRECTION: 'redirection',
  CLIENT_ERROR: 'client error',
  SERVER_ERROR: 'server error'
};
var PreviewLoader = /*#__PURE__*/function () {
  function PreviewLoader(_ref) {
    var iframeWrapper = _ref.iframeWrapper,
      loaderWrapper = _ref.loaderWrapper,
      previewUrl = _ref.previewUrl,
      acceptableStatusGroups = _ref.acceptableStatusGroups,
      iframeLoadCallback = _ref.iframeLoadCallback,
      fallbackTheme = _ref.fallbackTheme;
    _classCallCheck(this, PreviewLoader);
    this.iframeWrapper = iframeWrapper;
    this.iframe = iframeWrapper.querySelector('iframe');
    this.loaderWrapper = loaderWrapper;
    this.previewUrl = previewUrl;
    this.fallbackTheme = fallbackTheme !== null && fallbackTheme !== void 0 ? fallbackTheme : 'light';
    this.acceptableStatusGroups = acceptableStatusGroups !== null && acceptableStatusGroups !== void 0 ? acceptableStatusGroups : [STATUS_GROUPS.SUCCESSFUL];
    this.iframeLoadCallback = iframeLoadCallback !== null && iframeLoadCallback !== void 0 ? iframeLoadCallback : this.defaultIframeLoadCallback;
    this.abortController = new AbortController();
    this.checkPreviewStatusCode = this.checkPreviewStatusCode.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    this.initIframe = this.initIframe.bind(this);
  }
  return _createClass(PreviewLoader, [{
    key: "checkPreviewStatusCode",
    value: function checkPreviewStatusCode(statusCode) {
      return this.acceptableStatusGroups.some(function (statusGroup) {
        var _PreviewLoader$getSta = PreviewLoader.getStatusRangeCodes(statusGroup),
          start = _PreviewLoader$getSta.start,
          end = _PreviewLoader$getSta.end;
        return statusCode >= start && statusCode <= end;
      });
    }
  }, {
    key: "getPreviewStatus",
    value: function getPreviewStatus() {
      var signal = this.abortController.signal;
      return fetch(this.previewUrl, {
        method: 'HEAD',
        signal: signal
      }).then(function (_ref2) {
        var status = _ref2.status;
        return status;
      });
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.loaderWrapper.style.display = 'none';
    }
  }, {
    key: "blockPointerEvents",
    value: function blockPointerEvents() {
      var documentHTML = this.iframe.contentWindow.document.documentElement;
      documentHTML.style.pointerEvents = 'none';
    }
  }, {
    key: "defaultIframeLoadCallback",
    value: function defaultIframeLoadCallback() {
      this.blockPointerEvents();
    }
  }, {
    key: "initIframe",
    value: function initIframe(url, _ref3) {
      var _this = this;
      var isAccepted = _ref3.isAccepted;
      this.iframe.src = url;
      this.iframe.addEventListener('load', function (event) {
        _this.iframeLoadCallback(event, {
          isAccepted: isAccepted
        });
        _this.hideLoader();
      }, false);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.abortController.abort();
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.getPreviewStatus().then(this.checkPreviewStatusCode).then(function (isAccepted) {
        var iframeUrl = isAccepted ? _this2.previewUrl : window.Routing.generate('ibexa.site_context.no_preview_available', {
          theme: _this2.fallbackTheme
        });
        _this2.initIframe(iframeUrl, {
          isAccepted: isAccepted
        });
      })["catch"](function (error) {
        if (error.name === 'AbortError') {
          return;
        }
      });
    }
  }], [{
    key: "getStatusRangeCodes",
    value: function getStatusRangeCodes(statusGroup) {
      switch (statusGroup) {
        case STATUS_GROUPS.INFORMATIONAL:
          return {
            start: 100,
            end: 199
          };
        case STATUS_GROUPS.SUCCESSFUL:
          return {
            start: 200,
            end: 299
          };
        case STATUS_GROUPS.REDIRECTION:
          return {
            start: 300,
            end: 399
          };
        case STATUS_GROUPS.CLIENT_ERROR:
          return {
            start: 400,
            end: 499
          };
        case STATUS_GROUPS.SERVER_ERROR:
          return {
            start: 500,
            end: 599
          };
        default:
          throw Error("status group not implemented: ".concat(statusGroup));
      }
    }
  }]);
}();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/site-context/src/bundle/Resources/public/js/admin.location.preview.tree.js"));
/******/ }
]);