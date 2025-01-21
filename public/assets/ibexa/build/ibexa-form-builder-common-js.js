(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-form-builder-common-js"],{

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

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/ezform.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/ezform.js ***!
  \**************************************************************************************/
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
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
(function (global, doc, ibexa, Translator) {
  var CLASS_LOADING_PREVIEW = 'ibexa-field-edit--loading-preview';
  var SELECTOR_FIELD = '.ibexa-field-edit--ezform';
  var fieldContainer = doc.querySelector(SELECTOR_FIELD);
  var formBuilderField = doc.querySelector('.ibexa-fb-content-edit-form');
  if (!formBuilderField) {
    return;
  }
  var formPreview = formBuilderField.querySelector('[data-ibexa-form-preview]');
  var EzFormValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid) {
    "use strict";

    function EzFormValidator() {
      _classCallCheck(this, EzFormValidator);
      return _callSuper(this, EzFormValidator, arguments);
    }
    _inherits(EzFormValidator, _ibexa$BaseFieldValid);
    return _createClass(EzFormValidator, [{
      key: "validateInput",
      value:
      /**
       * Validates the input field value
       *
       * @method validateInput
       * @param {Event} event
       * @returns {Object}
       * @memberof EzFormValidator
       */
      function validateInput(event) {
        var result = {
          isError: false
        };
        var field = event.currentTarget;
        var errorMessage = Translator.trans(/*@Desc("Form field is required")*/'form.cannot.be.empty', {}, 'ibexa_form_builder');
        if (!field.required) {
          return result;
        }
        var fieldValue = JSON.parse(field.value);
        if (fieldValue.fields.length) {
          return result;
        }
        result.isError = true;
        result.errorMessage = errorMessage;
        return result;
      }
    }]);
  }(ibexa.BaseFieldValidator);
  var validator = new EzFormValidator({
    classInvalid: 'is-invalid',
    fieldContainer: fieldContainer,
    eventsMap: [{
      elements: doc.querySelectorAll('[data-ezform-fieldvalue]'),
      eventName: 'change',
      callback: 'validateInput',
      errorNodeSelectors: ['.ibexa-field-edit__label-wrapper']
    }]
  });
  validator.init();
  formPreview.onload = function () {
    formPreview.contentWindow.onbeforeunload = function () {
      return fieldContainer.classList.add(CLASS_LOADING_PREVIEW);
    };
    fieldContainer.classList.remove(CLASS_LOADING_PREVIEW);
  };
  ibexa.fieldTypeValidators = ibexa.fieldTypeValidators ? [].concat(_toConsumableArray(ibexa.fieldTypeValidators), [validator]) : [validator];
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/form.builder.create.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/form.builder.create.js ***!
  \*****************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var CLASS_FORM_BUILDER_CLOSED = 'ibexa-fb-modal--closed';
  var CLASS_FORM_BUILDER_VISIBLE = 'ibexa-fb-modal--visible';
  var CLASS_SCROLL_DISABLED = 'ibexa-scroll-disabled';
  var CLASS_FIELD_NO_VALUE = 'ibexa-fb-content-edit-form--no-value';
  var SELECTOR_MODAL = '.ibexa-fb-modal';
  var DEFAULT_FIELDVALUE = {
    fields: []
  };
  var KEYCODE_ESCAPE = 27;
  var FIELDTYPE_EMPTY_VALUE = JSON.stringify({
    fields: [],
    content_id: null,
    content_field_id: null,
    language_code: null
  });
  var INVALID_FIELDS_ERROR = Translator.trans(/*@Desc("Not all the fields were configured correctly. Provide missing configuration.")*/'invalid.fields', {}, 'ibexa_form_builder');
  var fieldTypeContainer = doc.querySelector('.ibexa-fb-content-edit-form');
  var formBuilderContainer = doc.querySelector('#ibexa-fb-root');
  var openFormBuilderBtns = doc.querySelectorAll('[data-open-form-builder]');
  var formFieldsConfigInput = doc.querySelector('[data-ezform-fieldvalue]');
  var formBuilderRoot = null;
  var formBuilder;
  if (!formFieldsConfigInput) {
    return;
  }
  var handleEscapeOnKeyup = function handleEscapeOnKeyup(event) {
    if (event.keyCode !== KEYCODE_ESCAPE) {
      return;
    }
    closeFormBuilder();
  };
  var findFieldConfig = function findFieldConfig(field) {
    return ibexa.formBuilder.config.fieldsConfig.find(function (config) {
      return config.identifier === field.identifier;
    });
  };
  var checkFieldIsInValid = function checkFieldIsInValid(field) {
    var fieldConfig = findFieldConfig(field);
    if (!fieldConfig) {
      return true;
    }
    return !field.attributes.every(function (attr) {
      return checkAttributeValidState(fieldConfig, attr);
    });
  };
  var checkAttributeValidState = function checkAttributeValidState(fieldConfig, attr) {
    var attrConfig = fieldConfig.attributes.find(function (config) {
      return config.identifier === attr.identifier;
    });
    if (!Object.keys(attrConfig.constraints).length) {
      return true;
    }
    var isRequired = !!Object.keys(attrConfig.constraints).find(function (key) {
      return key === 'not_blank';
    });
    if (!isRequired) {
      return true;
    }
    var isValid = !!attr.value.trim().length;
    return isValid;
  };
  var checkCanCloseFormBuilder = function checkCanCloseFormBuilder() {
    var formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
    var formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;
    if (!formHasAnyFields) {
      return {
        canClose: true,
        invalidFields: []
      };
    }
    var invalidFields = formFieldsConfig.fields.filter(checkFieldIsInValid);
    return {
      canClose: !invalidFields.length,
      invalidFields: invalidFields
    };
  };
  var hideFormBuilderModal = function hideFormBuilderModal() {
    var modal = fieldTypeContainer.querySelector('.ibexa-fb-modal');
    doc.body.classList.add(CLASS_FORM_BUILDER_CLOSED);
    doc.body.classList.remove(CLASS_SCROLL_DISABLED);
    global.parent.document.body.dispatchEvent(new CustomEvent('ibexa-udw-show-footer'));
    modal.classList.remove(CLASS_FORM_BUILDER_VISIBLE);
    modal.removeEventListener('keyup', handleEscapeOnKeyup);
    formBuilderRoot.unmount();
    formBuilderRoot = null;
  };
  var hideSaveMenuPopup = function hideSaveMenuPopup() {
    var saveMenuItem = fieldTypeContainer.querySelector('.ibexa-fb-modal__save-menu-item');
    var splitBtnTrigger = saveMenuItem.querySelector('.ibexa-split-btn__toggle-btn');
    var popupMenuElement = saveMenuItem.querySelector('.ibexa-multilevel-popup-menu');
    var popupMenu = ibexa.helpers.objectInstances.getInstance(popupMenuElement);
    popupMenu.closeBranch(splitBtnTrigger.branchElement);
  };
  var saveFormBuilder = function saveFormBuilder() {
    var _checkCanCloseFormBui = checkCanCloseFormBuilder(),
      canClose = _checkCanCloseFormBui.canClose,
      invalidFields = _checkCanCloseFormBui.invalidFields;
    if (!canClose) {
      ibexa.helpers.notification.showErrorNotification(INVALID_FIELDS_ERROR);
      formBuilder.markInvalidFields(invalidFields);
      return;
    }
    updatePreview();
    hideSaveMenuPopup();
  };
  var saveAndCloseFormBuilder = function saveAndCloseFormBuilder() {
    var _checkCanCloseFormBui2 = checkCanCloseFormBuilder(),
      canClose = _checkCanCloseFormBui2.canClose,
      invalidFields = _checkCanCloseFormBui2.invalidFields;
    if (!canClose) {
      ibexa.helpers.notification.showErrorNotification(INVALID_FIELDS_ERROR);
      formBuilder.markInvalidFields(invalidFields);
      return;
    }
    ibexa.helpers.tooltips.hideAll();
    updatePreview();
    hideFormBuilderModal();
  };
  var closeFormBuilder = function closeFormBuilder() {
    doc.body.dispatchEvent(new CustomEvent('ibexa-form-builder:before-close'));
    hideFormBuilderModal();
  };
  var openFormBuilder = function openFormBuilder(event) {
    event.preventDefault();
    doc.body.dispatchEvent(new CustomEvent('ibexa-form-builder:before-open'));
    var modal = fieldTypeContainer.querySelector(SELECTOR_MODAL);
    var hasCorrectValue = formFieldsConfigInput.value.trim().length && formFieldsConfigInput.value !== 'null';
    var fieldValue = hasCorrectValue ? JSON.parse(formFieldsConfigInput.value) : DEFAULT_FIELDVALUE;
    var config = _objectSpread(_objectSpread({}, ibexa.formBuilder.config), {}, {
      fieldValue: fieldValue,
      fieldValueInput: formFieldsConfigInput,
      fieldFormRequestConfig: doc.querySelector('form[name="request_field_configuration"]')
    });
    doc.body.classList.remove(CLASS_FORM_BUILDER_CLOSED);
    doc.body.classList.add(CLASS_SCROLL_DISABLED);
    modal.classList.add(CLASS_FORM_BUILDER_VISIBLE);
    modal.focus();
    modal.addEventListener('keyup', handleEscapeOnKeyup, false);
    formBuilderRoot = ReactDOM.createRoot(formBuilderContainer);
    formBuilderRoot.render(React.createElement(ibexa.modules.FormBuilder, _objectSpread(_objectSpread({}, config), {}, {
      ref: function ref(formBuilderRef) {
        formBuilder = formBuilderRef;
      }
    })));
  };
  var removeFieldValue = function removeFieldValue() {
    formFieldsConfigInput.value = FIELDTYPE_EMPTY_VALUE;
    updatePreview();
  };
  var attachEventHandlers = function attachEventHandlers(btn) {
    var btnClose = fieldTypeContainer.querySelector('[data-close-form-builder]');
    var saveMenuItem = fieldTypeContainer.querySelector('.ibexa-fb-modal__save-menu-item');
    var saveMenuItemSplitBtnTrigger = saveMenuItem.querySelector('.ibexa-split-btn__toggle-btn');
    var btnSave = saveMenuItemSplitBtnTrigger.branchElement.querySelector('[data-save-form-builder]');
    var btnSaveAndClose = fieldTypeContainer.querySelector('[data-save-and-close-form-builder]');
    var btnRemove = fieldTypeContainer.querySelector('.ibexa-fb-content-edit-form__preview-action--trash');
    btn.addEventListener('click', openFormBuilder, false);
    btnClose.addEventListener('click', closeFormBuilder, false);
    btnSave.addEventListener('click', saveFormBuilder, false);
    btnSaveAndClose.addEventListener('click', saveAndCloseFormBuilder, false);
    btnRemove.addEventListener('click', removeFieldValue, false);
  };
  var updatePreview = function updatePreview() {
    var formFieldsConfig = formFieldsConfigInput.value ? JSON.parse(formFieldsConfigInput.value) : null;
    var formHasAnyFields = formFieldsConfig && formFieldsConfig.fields && formFieldsConfig.fields.length > 0;
    var callToAction = doc.querySelector('.ibexa-fb-content-edit-form__call-to-action');
    if (formHasAnyFields) {
      var iframeForm = doc.querySelector('form[name=request_form_preview]');
      var iframeFormInput = doc.querySelector('#request_form_preview_form');
      iframeFormInput.value = formFieldsConfigInput.value;
      iframeForm.submit();
      fieldTypeContainer.classList.remove(CLASS_FIELD_NO_VALUE);
      callToAction.setAttribute('hidden', true);
      return;
    }
    fieldTypeContainer.classList.add(CLASS_FIELD_NO_VALUE);
    callToAction.removeAttribute('hidden');
  };
  openFormBuilderBtns.forEach(attachEventHandlers);
  updatePreview();
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/resize.form.preview.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/resize.form.preview.js ***!
  \*****************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var formPreviewIframe = doc.querySelector('[name="form-preview"]');
  var tabEventAttached = false;
  if (!formPreviewIframe) {
    return;
  }
  var _resizePreviewIframeToFitContent = function resizePreviewIframeToFitContent() {
    if (!formPreviewIframe || !formPreviewIframe.contentWindow || !formPreviewIframe.contentWindow.document || !formPreviewIframe.contentWindow.document.body) {
      return;
    }
    var bodyScrollHeight = formPreviewIframe.contentWindow.document.body.scrollHeight;
    formPreviewIframe.height = bodyScrollHeight;
    if (!bodyScrollHeight && !tabEventAttached) {
      var locationTab = doc.querySelector('#ibexa-tab-label-location-view');
      if (locationTab) {
        locationTab.addEventListener('shown.bs.tab', _resizePreviewIframeToFitContent);
      }
      tabEventAttached = true;
    }
  };
  formPreviewIframe.addEventListener('load', _resizePreviewIframeToFitContent, false);
  _resizePreviewIframeToFitContent();
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/submission.details.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/submission.details.js ***!
  \****************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var modal = doc.querySelector('#submission-details-modal');
  var showModalOnLoad = function showModalOnLoad(event) {
    var values = event.relatedTarget.dataset.submissionValues;
    var tbody = modal.querySelector('tbody');
    tbody.innerHTML = '';
    tbody.insertAdjacentHTML('afterbegin', values);
  };
  if (modal) {
    modal.addEventListener('show.bs.modal', showModalOnLoad);
  }
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js ***!
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


var Action = function Action(_ref) {
  var icon = _ref.icon,
    onClick = _ref.onClick,
    title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn ibexa-btn ibexa-btn--ghost ibexa-btn--small ibexa-btn--no-text c-action",
    type: "button",
    onClick: onClick,
    title: title
  }, icon);
};
Action.propTypes = {
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/field.config.panel.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/field.config.panel.js ***!
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
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/common/components/config-panel/config.panel.body.js");




var FieldConfigPanel = function FieldConfigPanel(_ref) {
  var title = _ref.title,
    isClosed = _ref.isClosed,
    onCancel = _ref.onCancel,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    extraClasses: "c-ibexa-fb-config-panel",
    type: _ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel__WEBPACK_IMPORTED_MODULE_2__.CONFIG_PANEL_TYPE_RIGHT,
    showCloseBtn: true,
    onCancel: onCancel,
    title: title,
    isClosed: isClosed,
    hasBackBtn: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_common_components_config_panel_config_panel_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    extraClasses: "c-ibexa-fb-config-panel__body"
  }, children));
};
FieldConfigPanel.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isClosed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
FieldConfigPanel.defaultProps = {
  children: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldConfigPanel);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js ***!
  \*************************************************************************************************************/
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
/* harmony import */ var _action_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action/action */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/action/action.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _field_config_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field.config.panel */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/field.config.panel.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/iframe/iframe.js");
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
  Translator = _window.Translator;
var SELECTOR_POPUP_WRAPPER = '.m-ibexa-fb__popup-wrapper';
var FormField = /*#__PURE__*/function (_PureComponent) {
  function FormField(props) {
    var _this;
    _classCallCheck(this, FormField);
    _this = _callSuper(this, FormField, [props]);
    _this._refField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refConfigPopupComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refIframeComponent;
    _this._refUdwContainer = window.document.querySelector('#react-udw');
    _this.openFieldConfigPopup = _this.openFieldConfigPopup.bind(_this);
    _this.remove = _this.remove.bind(_this);
    _this.hideConfigPopup = _this.hideConfigPopup.bind(_this);
    _this.handleDragStart = _this.handleDragStart.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    _this.getConfigIframe = _this.getConfigIframe.bind(_this);
    _this.attachConfigPopupEventHandlers = _this.attachConfigPopupEventHandlers.bind(_this);
    _this.handleOnConfigPopupIframeLoad = _this.handleOnConfigPopupIframeLoad.bind(_this);
    _this.handleLoadAfterConfigFormSubmit = _this.handleLoadAfterConfigFormSubmit.bind(_this);
    _this.setConfigIframeRef = _this.setConfigIframeRef.bind(_this);
    _this.setConfigFormSubmittedState = _this.setConfigFormSubmittedState.bind(_this);
    _this.openUdw = _this.openUdw.bind(_this);
    _this.closeUdw = _this.closeUdw.bind(_this);
    _this.updateFieldNameState = _this.updateFieldNameState.bind(_this);
    _this.updateFieldNameOnClose = _this.updateFieldNameOnClose.bind(_this);
    _this.state = {
      isConfigPopupVisible: false,
      shouldPopupWatchLoad: false,
      isConfigDataSent: false,
      udwConfig: null,
      nameFieldValue: props.name,
      isDragging: false
    };
    return _this;
  }
  _inherits(FormField, _PureComponent);
  return _createClass(FormField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.ibexa.helpers.tooltips.parse();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.ibexa.helpers.tooltips.hideAll();
    }
  }, {
    key: "openFieldConfigPopup",
    value: function openFieldConfigPopup(event) {
      var _this2 = this;
      event.preventDefault();
      this.setState(function () {
        return {
          isConfigPopupVisible: true,
          shouldPopupWatchLoad: true
        };
      }, function () {
        return _this2.props.onConfigPopupOpened(_this2.props.id);
      });
    }
  }, {
    key: "openUdw",
    value: function openUdw(event) {
      var _this3 = this;
      this.setState({
        udwConfig: _objectSpread(_objectSpread({}, event.detail), {}, {
          onConfirm: function onConfirm(items) {
            event.detail.onConfirm(items);
            _this3.closeUdw();
          },
          onCancel: function onCancel() {
            event.detail.onCancel();
            _this3.closeUdw();
          }
        })
      });
    }
  }, {
    key: "closeUdw",
    value: function closeUdw() {
      this.setState({
        udwConfig: null
      });
    }
  }, {
    key: "updateFieldNameState",
    value: function updateFieldNameState(_ref) {
      var _this4 = this;
      var detail = _ref.detail;
      var nameFieldValue = detail.name;
      this.props.checkCanSetFieldName({
        id: detail.id,
        value: nameFieldValue,
        successCallback: function successCallback() {
          return _this4.setState(function () {
            return {
              nameFieldValue: nameFieldValue
            };
          }, detail.successCallback);
        },
        errorCallback: detail.errorCallback
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this$props = this.props,
        onRemove = _this$props.onRemove,
        id = _this$props.id;
      onRemove(id);
    }
  }, {
    key: "hideConfigPopup",
    value: function hideConfigPopup() {
      this.setState(function () {
        return {
          isConfigPopupVisible: false
        };
      }, this.updateFieldNameOnClose);
    }
  }, {
    key: "updateFieldNameOnClose",
    value: function updateFieldNameOnClose() {
      var _this5 = this;
      var _this$state = this.state,
        nameFieldValue = _this$state.nameFieldValue,
        isConfigDataSent = _this$state.isConfigDataSent;
      if (isConfigDataSent) {
        return this.props.onNameChange(this.props.id, nameFieldValue);
      }
      this.setState(function () {
        return {
          nameFieldValue: _this5.props.name
        };
      });
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(event) {
      var _this6 = this;
      var _this$props2 = this.props,
        onDragStart = _this$props2.onDragStart,
        id = _this$props2.id,
        identifier = _this$props2.identifier,
        name = _this$props2.name,
        views = _this$props2.views;
      var image = document.querySelector("[data-ibexa-sidebar-field-type=\"".concat(identifier, "\"]"));
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/html', image);
      event.dataTransfer.setDragImage(image, 0, 0);
      setTimeout(function () {
        _this6.setState({
          isDragging: true
        });
      }, 0);
      onDragStart({
        id: id,
        identifier: identifier,
        name: name,
        views: views
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd(event) {
      this.props.onDragEnd(event);
      this.setState({
        isDragging: false
      });
    }
  }, {
    key: "getConfigIframe",
    value: function getConfigIframe() {
      return this._refIframeComponent && this._refIframeComponent._refIframe;
    }
  }, {
    key: "getConfigPopup",
    value: function getConfigPopup() {
      return this._refConfigPopupComponent.current && this._refConfigPopupComponent.current._refModal;
    }
  }, {
    key: "forceConfigPopupBackdropHidden",
    value: function forceConfigPopupBackdropHidden() {
      var popup = this.getConfigPopup();
      if (popup) {
        window.bootstrap.Modal.getOrCreateInstance(popup).hide();
      }
    }
  }, {
    key: "allowScrolling",
    value: function allowScrolling() {
      document.body.classList.remove('modal-open', 'ibexa-non-scrollable');
    }
  }, {
    key: "attachConfigPopupEventHandlers",
    value: function attachConfigPopupEventHandlers() {
      if (this.state.isConfigDataSent) {
        return;
      }
      var iframeDoc = this.getConfigIframe().contentDocument;
      iframeDoc.body.addEventListener('ibexa-open-udw', this.openUdw, false);
      iframeDoc.body.addEventListener('ibexa-update-field-name', this.updateFieldNameState, false);
      iframeDoc.querySelector('[name="field_configuration"]').addEventListener('submit', this.setConfigFormSubmittedState, false);
      iframeDoc.querySelector('[data-form-action="discard"]').addEventListener('click', this.hideConfigPopup, false);
    }
  }, {
    key: "setConfigFormSubmittedState",
    value: function setConfigFormSubmittedState() {
      this.getConfigIframe().onload = this.handleLoadAfterConfigFormSubmit;
      this.setState(function () {
        return {
          isConfigPopupVisible: true,
          isConfigDataSent: true,
          shouldPopupWatchLoad: true
        };
      });
    }
  }, {
    key: "handleOnConfigPopupIframeLoad",
    value: function handleOnConfigPopupIframeLoad() {
      this.setState(function () {
        return {
          isConfigDataSent: false,
          shouldPopupWatchLoad: false,
          isConfigPopupVisible: true
        };
      }, this.attachConfigPopupEventHandlers);
    }
  }, {
    key: "handleLoadAfterConfigFormSubmit",
    value: function handleLoadAfterConfigFormSubmit() {
      var _this7 = this;
      var iframe = this.getConfigIframe();
      var iframeDocument = iframe.contentDocument;
      var fieldData = iframeDocument.querySelector('[name="FieldConfiguration"]');
      if (!fieldData) {
        this.setState(function () {
          return {
            isConfigDataSent: false,
            shouldPopupWatchLoad: false
          };
        }, this.attachConfigPopupEventHandlers);
        return;
      }
      iframe.onload = null;
      this.setState(function () {
        return {
          isConfigPopupVisible: false,
          isConfigDataSent: false,
          shouldPopupWatchLoad: false
        };
      }, function () {
        var field = JSON.parse(fieldData.content);
        _this7.props.onFieldDataUpdate(field);
        _this7.props.unmarkInvalidField(field);
      });
    }
  }, {
    key: "renderConfigPopup",
    value: function renderConfigPopup() {
      var _this$state2 = this.state,
        isConfigDataSent = _this$state2.isConfigDataSent,
        isConfigPopupVisible = _this$state2.isConfigPopupVisible,
        nameFieldValue = _this$state2.nameFieldValue;
      if (!isConfigPopupVisible) {
        this.forceConfigPopupBackdropHidden();
        this.allowScrolling();
        return null;
      }
      var id = this.props.id;
      var iframeAttrs = {
        ref: this.setConfigIframeRef,
        src: 'about:blank',
        id: id,
        name: id,
        title: id,
        onLoad: isConfigDataSent ? this.handleLoadAfterConfigFormSubmit : this.handleOnConfigPopupIframeLoad,
        isVisible: !isConfigDataSent
      };
      return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_field_config_panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onCancel: this.hideConfigPopup,
        title: nameFieldValue,
        isClosed: !isConfigPopupVisible
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_iframe_iframe__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, iframeAttrs, {
        fs: true
      }))), document.querySelector(SELECTOR_POPUP_WRAPPER));
    }
  }, {
    key: "setConfigIframeRef",
    value: function setConfigIframeRef(ref) {
      this._refIframeComponent = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$nameField;
      var _this$props3 = this.props,
        id = _this$props3.id,
        onDragOver = _this$props3.onDragOver,
        identifier = _this$props3.identifier,
        isHighlighted = _this$props3.isHighlighted,
        isRemoved = _this$props3.isRemoved;
      var udwConfig = this.state.udwConfig;
      var actionTitleSettings = Translator.trans(/*@Desc("Settings")*/'field.settings', {}, 'ibexa_form_builder');
      var actionTitleRemove = Translator.trans(/*@Desc("Remove")*/'field.remove', {}, 'ibexa_form_builder');
      var prefixFieldClassName = 'c-ibexa-fb-form-field';
      var fieldClassName = prefixFieldClassName;
      if (this.props.isInvalid) {
        fieldClassName = "".concat(fieldClassName, " ").concat(prefixFieldClassName, "--invalid");
      }
      if (this.state.isDragging) {
        fieldClassName = "".concat(fieldClassName, " ").concat(prefixFieldClassName, "--is-dragging-out");
      }
      if (isHighlighted) {
        fieldClassName = "".concat(fieldClassName, " ").concat(prefixFieldClassName, "--highlighted");
      }
      if (isRemoved) {
        fieldClassName = "".concat(fieldClassName, " ").concat(prefixFieldClassName, "--removed");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, udwConfig && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(window.ibexa.modules.UniversalDiscovery, udwConfig), this._refUdwContainer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this._refField,
        className: fieldClassName,
        onDragStart: this.handleDragStart,
        onDragOver: onDragOver,
        onDragEnd: this.handleDragEnd,
        "data-ibexa-field-id": id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__content",
        draggable: "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__left-col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__drag-handler"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "drag",
        extraClasses: "ibexa-icon--tiny-small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__label"
      }, (_this$state$nameField = this.state.nameFieldValue) !== null && _this$state$nameField !== void 0 ? _this$state$nameField : identifier)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__right-col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__setting-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_action__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: actionTitleSettings,
        onClick: this.openFieldConfigPopup,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "settings-block",
          extraClasses: "ibexa-icon--small"
        })
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-form-field__trash-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_action_action__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: actionTitleRemove,
        onClick: this.remove,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          name: "discard",
          extraClasses: "ibexa-icon--small"
        })
      }))), this.renderConfigPopup())));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
FormField.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  identifier: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  fieldName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  views: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired,
  onRemove: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onDragOver: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onDragEnd: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onConfigPopupOpened: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onFieldDataUpdate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  onNameChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  isInvalid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool).isRequired,
  checkCanSetFieldName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired,
  isHighlighted: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isRemoved: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  unmarkInvalidField: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func).isRequired
};
FormField.defaultProps = {
  isHighlighted: false,
  isRemoved: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormField);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.field.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.field.js ***!
  \******************************************************************************************************************/
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
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




var SidebarField = /*#__PURE__*/function (_PureComponent) {
  function SidebarField(props) {
    var _this;
    _classCallCheck(this, SidebarField);
    _this = _callSuper(this, SidebarField, [props]);
    _this.handleDragStart = _this.handleDragStart.bind(_this);
    _this.handleDragEnd = _this.handleDragEnd.bind(_this);
    _this.appendNewField = _this.appendNewField.bind(_this);
    _this.state = {
      isDragging: false
    };
    return _this;
  }
  _inherits(SidebarField, _PureComponent);
  return _createClass(SidebarField, [{
    key: "handleDragStart",
    value: function handleDragStart(event) {
      event.dataTransfer.effectAllowed = 'copy';
      event.dataTransfer.setData('text/html', event.currentTarget);
      var _this$props = this.props,
        onDragStart = _this$props.onDragStart,
        type = _this$props.type;
      onDragStart({
        identifier: type
      });
      this.setState(function () {
        return {
          isDragging: true
        };
      });
    }
  }, {
    key: "handleDragEnd",
    value: function handleDragEnd() {
      this.props.onDragEnd();
      this.setState(function () {
        return {
          isDragging: false
        };
      });
    }
  }, {
    key: "appendNewField",
    value: function appendNewField() {
      var _this$props2 = this.props,
        appendNewField = _this$props2.appendNewField,
        type = _this$props2.type;
      appendNewField(type);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        name = _this$props3.name,
        thumbnail = _this$props3.thumbnail,
        type = _this$props3.type,
        isHidden = _this$props3.isHidden;
      var sidebarFieldClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
        'c-ibexa-fb-sidebar-field': true,
        'c-ibexa-fb-sidebar-field--hidden': isHidden,
        'c-ibexa-fb-sidebar-field--is-dragging-out': this.state.isDragging
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: sidebarFieldClassName,
        onDragStart: this.handleDragStart,
        onDragEnd: this.handleDragEnd,
        "data-ibexa-sidebar-field-type": type,
        onClick: this.appendNewField
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__content",
        draggable: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__drag"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        name: "drag",
        extraClasses: "c-ibexa-fb-sidebar-field__drag-icon ibexa-icon--tiny-small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__type"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        customPath: thumbnail,
        extraClasses: "c-ibexa-fb-sidebar-field__type-icon ibexa-icon--small"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-ibexa-fb-sidebar-field__label"
      }, name)));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
SidebarField.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  onDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  onDragEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  isHidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool).isRequired,
  appendNewField: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarField);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.fields.group.js":
/*!*************************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.fields.group.js ***!
  \*************************************************************************************************************************/
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




var SidebarFieldsGroup = function SidebarFieldsGroup(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.isCollapsed),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var fieldsGroupClassName = (0,_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_3__.createCssClassNames)({
    'c-ibexa-fb-sidebar-fields-group': true,
    'c-ibexa-fb-sidebar-fields-group--collapsed': isCollapsed
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: fieldsGroupClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__title-bar",
    onClick: function onClick() {
      return setIsCollapsed(function (isCollapsedPrev) {
        return !isCollapsedPrev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__toggler"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "caret-down",
    extraClasses: "ibexa-icon--tiny-small"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar-fields-group__fields"
  }, props.children));
};
SidebarFieldsGroup.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  isCollapsed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
SidebarFieldsGroup.defaultProps = {
  isCollapsed: false,
  title: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarFieldsGroup);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.js ***!
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
/* harmony import */ var _ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _sidebar_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.field */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.field.js");
/* harmony import */ var _sidebar_fields_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.fields.group */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.fields.group.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }





var _window = window,
  Translator = _window.Translator;
var title = Translator.trans(/*@Desc("Fields")*/'sidebar.fields', {}, 'ibexa_form_builder');
var Sidebar = function Sidebar(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    fieldFilterQuery = _useState2[0],
    setFieldFilterQuery = _useState2[1];
  var renderSidebarField = function renderSidebarField(_ref) {
    var name = _ref.name,
      identifier = _ref.identifier,
      thumbnail = _ref.thumbnail;
    var fieldFilterQueryLowerCase = fieldFilterQuery.toLowerCase();
    var fieldNameLowerCase = name.toLowerCase();
    var isHidden = !fieldNameLowerCase.includes(fieldFilterQueryLowerCase);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: identifier,
      name: name,
      type: identifier,
      thumbnail: thumbnail,
      isHidden: isHidden,
      onDragStart: props.fieldDragStart,
      onDragEnd: props.fieldDragEnd,
      appendNewField: props.appendNewField
    });
  };
  var renderSidebarSingleGroup = function renderSidebarSingleGroup(category, isCollapsed) {
    var categoryFormFields = props.fieldsConfigByCategory[category];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sidebar_fields_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: category,
      title: category,
      isCollapsed: isCollapsed
    }, categoryFormFields.map(renderSidebarField));
  };
  var renderSidebarGroups = function renderSidebarGroups() {
    var fieldsConfigByCategory = props.fieldsConfigByCategory;
    return Object.keys(fieldsConfigByCategory).map(function (category) {
      return renderSidebarSingleGroup(category, false);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar__title-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "c-ibexa-fb-sidebar__title"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar__search-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: fieldFilterQuery,
    onChange: function onChange(event) {
      return setFieldFilterQuery(event.target.value);
    },
    className: "ibexa-input ibexa-input--text c-ibexa-fb-sidebar__sidebar-filter form-control",
    placeholder: Translator.trans(/*@Desc("Search...")*/'sidebar_filter.placeholder', {}, 'ibexa_form_builder')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_admin_ui_src_bundle_ui_dev_src_modules_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "search",
    extraClasses: "ibexa-icon--small"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-ibexa-fb-sidebar__list"
  }, renderSidebarGroups()));
};
Sidebar.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
  fieldsConfigByCategory: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object).isRequired,
  appendNewField: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  fieldDragStart: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  fieldDragEnd: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
Sidebar.defaultProps = {
  fieldDragStart: function fieldDragStart() {},
  fieldDragEnd: function fieldDragEnd() {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js ***!
  \**********************************************************************************************/
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
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/guid-generator/guid.generator.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/helpers/deep.clone.js");
/* harmony import */ var _helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/remove.from.array */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js");
/* harmony import */ var _components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/sidebar/sidebar.js");
/* harmony import */ var _components_field_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/field/form.field */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/components/field/form.field.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  Translator = _window.Translator;
var CLASS_PLACEHOLDER = 'droppable-placeholder';
var CLASS_WORKSPACE = 'm-ibexa-fb-workspace';
var SELECTOR_PLACEHOLDER = '.droppable-placeholder';
var ZONE_ID = 'workspace';
var IDENTIFIER_FIELD_DATA_ATTRIBUTE = 'ibexaFieldId';
var HIGHLIGHT_TIMEOUT = 3000;
var REMOVE_ACTIVE_ZONE_TIMEOUT = 400;
var nonDraggingState = {
  isDragging: false,
  draggedFieldData: null,
  draggedFromSidebar: null,
  dragOverZoneId: null
};
var FormBuilder = /*#__PURE__*/function (_Component) {
  function FormBuilder(props) {
    var _this;
    _classCallCheck(this, FormBuilder);
    _this = _callSuper(this, FormBuilder, [props]);
    _this._refWorkspace = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refWorkspaceContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refFieldConfigTextarea;
    _this._refFieldConfigIdInput;
    _this.handleDragStartSidebarField = _this.handleDragStartSidebarField.bind(_this);
    _this.handleDragStartFormField = _this.handleDragStartFormField.bind(_this);
    _this.handleDropSidebarField = _this.handleDropSidebarField.bind(_this);
    _this.handleDropWorkspaceField = _this.handleDropWorkspaceField.bind(_this);
    _this.handleElementDragOver = _this.handleElementDragOver.bind(_this);
    _this.handleZoneDragOver = _this.handleZoneDragOver.bind(_this);
    _this.handleZoneDragOut = _this.handleZoneDragOut.bind(_this);
    _this.handleActiveZone = _this.handleActiveZone.bind(_this);
    _this.getPlaceholderNodes = _this.getPlaceholderNodes.bind(_this);
    _this.cancelDraggingState = _this.cancelDraggingState.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);
    _this.addPlaceholderInZone = _this.addPlaceholderInZone.bind(_this);
    _this.removePlaceholders = _this.removePlaceholders.bind(_this);
    _this.removePlaceholdersWithDelay = _this.removePlaceholdersWithDelay.bind(_this);
    _this.renderFormField = _this.renderFormField.bind(_this);
    _this.removeFieldFromFieldsState = _this.removeFieldFromFieldsState.bind(_this);
    _this.updateFieldPosition = _this.updateFieldPosition.bind(_this);
    _this.insertSiblingField = _this.insertSiblingField.bind(_this);
    _this.updateFields = _this.updateFields.bind(_this);
    _this.finishDropAction = _this.finishDropAction.bind(_this);
    _this.requestFieldConfigForm = _this.requestFieldConfigForm.bind(_this);
    _this.getFieldsState = _this.getFieldsState.bind(_this);
    _this.updateFieldValue = _this.updateFieldValue.bind(_this);
    _this.updateFieldNameValue = _this.updateFieldNameValue.bind(_this);
    _this.checkCanSetFieldName = _this.checkCanSetFieldName.bind(_this);
    _this.getNewFieldName = _this.getNewFieldName.bind(_this);
    _this.appendNewField = _this.appendNewField.bind(_this);
    _this.unmarkInvalidField = _this.unmarkInvalidField.bind(_this);
    var fieldsConfigByCategory = _this.groupFormFieldsByCategory(_this.props.fieldsConfig);
    _this.state = _objectSpread(_objectSpread({}, nonDraggingState), {}, {
      fields: props.fieldValue.fields,
      fieldsConfigByCategory: fieldsConfigByCategory,
      invalidFields: [],
      fieldFilterQuery: '',
      removedFieldsIds: []
    });
    return _this;
  }
  _inherits(FormBuilder, _Component);
  return _createClass(FormBuilder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._refFieldConfigTextarea = this.props.fieldFormRequestConfig.querySelector('#request_field_configuration_form');
      this._refFieldConfigIdInput = this.props.fieldFormRequestConfig.querySelector('#request_field_configuration_field_id');
      window.document.body.dispatchEvent(new CustomEvent('ibexa-form-builder-loaded'));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.document.body.dispatchEvent(new CustomEvent('ibexa-form-builder-unloaded'));
    }
  }, {
    key: "groupFormFieldsByCategory",
    value: function groupFormFieldsByCategory(formFields) {
      return formFields.reduce(function (formFieldsMap, formField) {
        var formFieldCategory = formField.category;
        formFieldsMap[formFieldCategory] = formFieldsMap[formFieldCategory] || [];
        formFieldsMap[formFieldCategory].push(formField);
        return formFieldsMap;
      }, {});
    }
  }, {
    key: "handleDragStartSidebarField",
    value: function handleDragStartSidebarField(draggedFieldData) {
      this.setState(function () {
        return {
          isDragging: true,
          draggedFieldData: draggedFieldData,
          draggedFromSidebar: true
        };
      });
    }
  }, {
    key: "handleDragStartFormField",
    value: function handleDragStartFormField(draggedFieldData) {
      this.setState(function () {
        return {
          isDragging: true,
          draggedFieldData: draggedFieldData,
          draggedFromSidebar: false
        };
      });
    }
  }, {
    key: "handleZoneDragOver",
    value: function handleZoneDragOver(event) {
      var _this2 = this;
      event.preventDefault();
      var target = event.target;
      var _this$state = this.state,
        dragOverZoneId = _this$state.dragOverZoneId,
        isDragging = _this$state.isDragging;
      var isDropZone = target === this._refWorkspaceContent.current;
      var shouldAddPlaceholder = isDropZone && !dragOverZoneId && isDragging;
      if (shouldAddPlaceholder) {
        this.setState(function () {
          return {
            dragOverZoneId: target.dataset.ezZoneId
          };
        }, function () {
          return _this2.addPlaceholderInZone(target);
        });
      }
      return false;
    }
  }, {
    key: "handleActiveZone",
    value: function handleActiveZone() {
      var _this3 = this;
      window.clearTimeout(this.activeZoneTimeout);
      this._refWorkspace.current.classList.add("".concat(CLASS_WORKSPACE, "--active"));
      this.activeZoneTimeout = window.setTimeout(function () {
        _this3._refWorkspace.current.classList.remove("".concat(CLASS_WORKSPACE, "--active"));
      }, REMOVE_ACTIVE_ZONE_TIMEOUT);
    }
  }, {
    key: "handleZoneDragOut",
    value: function handleZoneDragOut(event) {
      if (event.target.isSameNode(this._refWorkspace.current)) {
        this.removePlaceholders();
        this.setState(_objectSpread({}, this.props.getInitDragDropState()));
      }
    }
  }, {
    key: "getFormFieldElement",
    value: function getFormFieldElement(target) {
      return this.props.getElement(target, function (element) {
        return element.dataset && element.dataset[IDENTIFIER_FIELD_DATA_ATTRIBUTE];
      });
    }
  }, {
    key: "getPlaceholderPreviewNode",
    value: function getPlaceholderPreviewNode() {
      return this._refWorkspaceContent.current.querySelector(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "removeFieldFromFieldsState",
    value: function removeFieldFromFieldsState(fieldId) {
      this.setState(function (state) {
        return {
          removedFieldsIds: [].concat(_toConsumableArray(state.removedFieldsIds), [fieldId])
        };
      });
    }
  }, {
    key: "insertSiblingField",
    value: function insertSiblingField(fields, fieldData, siblingFieldId, insertBefore) {
      var besideFieldIndex = fields.findIndex(function (element) {
        return element.id === siblingFieldId;
      });
      if (besideFieldIndex === -1) {
        var message = Translator.trans(/*@Desc("Moved field data does not exist.")*/'moved.field.data.not.exists', {}, 'ibexa_form_builder');
        window.ibexa.helpers.notification.showErrorNotification(message);
        return fields;
      }
      var insertionIndex = insertBefore ? besideFieldIndex : besideFieldIndex + 1;
      fields.splice(insertionIndex, 0, fieldData);
      return fields;
    }
  }, {
    key: "appendFormField",
    value: function appendFormField(fields, fieldData) {
      fields.push(fieldData);
      return fields;
    }
  }, {
    key: "findByFieldId",
    value: function findByFieldId(fieldId) {
      return function (field) {
        return field.id === fieldId;
      };
    }
  }, {
    key: "getNewFieldName",
    value: function getNewFieldName(fieldName) {
      var index = 1;
      var fields = this.state.fields;
      var _generateFieldName = function generateFieldName(name) {
        var isNameUsed = fields.find(function (field) {
          return field.name === name;
        });
        if (!isNameUsed) {
          return name;
        }
        var numbersInName = name.match(/(#)\d+$/);
        if (numbersInName) {
          name = name.substring(0, numbersInName.index).trim();
        }
        index++;
        return _generateFieldName("".concat(name, " #").concat(index));
      };
      return _generateFieldName(fieldName);
    }
  }, {
    key: "getNewFieldData",
    value: function getNewFieldData(fieldIdentifier) {
      var fieldsConfig = this.props.fieldsConfig;
      var fieldConfig = fieldsConfig.find(function (field) {
        return field.identifier === fieldIdentifier;
      });
      var fieldName = this.getNewFieldName(fieldConfig.name);
      var newField = {
        id: (0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__["default"])('fbf-'),
        identifier: fieldConfig.identifier,
        name: fieldName,
        attributes: fieldConfig.attributes.map(function (attr) {
          return {
            id: (0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_guid_generator_guid_generator__WEBPACK_IMPORTED_MODULE_2__["default"])('fbfa-'),
            name: attr.id,
            type: attr.type,
            identifier: attr.identifier,
            value: attr.values || attr.defaultValue || ''
          };
        }),
        validators: fieldConfig.validators || []
      };
      return newField;
    }
  }, {
    key: "appendNewField",
    value: function appendNewField(identifier) {
      var _this4 = this;
      var fieldData = this.getNewFieldData(identifier);
      this.setState(function (state) {
        return {
          fields: _this4.appendFormField((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldData)
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "handleDropSidebarField",
    value: function handleDropSidebarField(_ref) {
      var _this5 = this;
      var siblingFieldId = _ref.siblingFieldId,
        insertBefore = _ref.insertBefore;
      var fieldData = this.getNewFieldData(this.state.draggedFieldData.identifier);
      var initialData = _objectSpread({}, this.props.getInitDragDropState());
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, initialData), {}, {
          highlightedFieldId: fieldData.id,
          fields: _this5.updateFields((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldData, siblingFieldId, insertBefore)
        });
      }, this.finishDropAction);
    }
  }, {
    key: "handleDropWorkspaceField",
    value: function handleDropWorkspaceField(_ref2) {
      var _this6 = this;
      var siblingFieldId = _ref2.siblingFieldId,
        insertBefore = _ref2.insertBefore;
      var fieldId = this.state.draggedFieldData.id;
      if (fieldId === siblingFieldId) {
        return;
      }
      var initialData = _objectSpread({}, this.props.getInitDragDropState());
      this.setState(function (state) {
        return _objectSpread(_objectSpread({}, initialData), {}, {
          highlightedFieldId: fieldId,
          fields: _this6.updateFieldPosition((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), fieldId, siblingFieldId, insertBefore)
        });
      }, this.finishDropAction);
    }
  }, {
    key: "updateFieldPosition",
    value: function updateFieldPosition(fields, fieldId, siblingFieldId, insertBefore) {
      var findCallback = this.findByFieldId(fieldId);
      var fieldData = fields.find(findCallback);
      if (!fieldData) {
        return fields;
      }
      return this.updateFields((0,_helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__["default"])(fields, findCallback), fieldData, siblingFieldId, insertBefore);
    }
  }, {
    key: "updateFields",
    value: function updateFields(fields, fieldData, siblingFieldId, insertBefore) {
      if (siblingFieldId) {
        return this.insertSiblingField(fields, fieldData, siblingFieldId, insertBefore);
      }
      return this.appendFormField(fields, fieldData);
    }
  }, {
    key: "addPlaceholderInZone",
    value: function addPlaceholderInZone(target) {
      var placeholders = _toConsumableArray(this.getPlaceholderNodes());
      if (placeholders.length !== 0 && this.state.fields.length !== 0 && target.isSameNode(this._refWorkspaceContent.current)) {
        return;
      }
      this.props.addPlaceholderInZone(target, placeholders, IDENTIFIER_FIELD_DATA_ATTRIBUTE, this.removePlaceholdersWithDelay);
    }
  }, {
    key: "removePlaceholders",
    value: function removePlaceholders() {
      this.props.removePlaceholders(this.getPlaceholderNodes(), this.props.removePlaceholderWithoutAnimation);
    }
  }, {
    key: "removePlaceholdersWithDelay",
    value: function removePlaceholdersWithDelay() {
      this.props.removePlaceholdersAfterTimeout(this.getPlaceholderNodes, this.cancelDraggingState);
    }
  }, {
    key: "getPlaceholderNodes",
    value: function getPlaceholderNodes() {
      return this._refWorkspaceContent.current.querySelectorAll(SELECTOR_PLACEHOLDER);
    }
  }, {
    key: "cancelDraggingState",
    value: function cancelDraggingState() {
      this.setState(function () {
        return _objectSpread({}, nonDraggingState);
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      var placeholder = this.getPlaceholderPreviewNode();
      if (!placeholder) {
        this.finishDropAction();
        return;
      }
      var _placeholder$dataset = placeholder.dataset,
        placeholderPosition = _placeholder$dataset.position,
        siblingFieldId = _placeholder$dataset.ibexaFieldId;
      var insertBefore = placeholderPosition === 'top';
      var isFieldIdDefined = siblingFieldId && siblingFieldId !== 'undefined';
      var placeholderDropData = {
        insertBefore: insertBefore,
        siblingFieldId: isFieldIdDefined ? siblingFieldId : null,
        isNew: this.state.draggedFromSidebar
      };
      if (this.state.draggedFromSidebar) {
        this.handleDropSidebarField(placeholderDropData);
      } else {
        this.handleDropWorkspaceField(placeholderDropData);
      }
    }
  }, {
    key: "finishDropAction",
    value: function finishDropAction() {
      var _this7 = this;
      this.cancelDraggingState();
      this.setFormFieldTypeFormFieldValue();
      window.setTimeout(function () {
        _this7.setState({
          highlightedFieldId: null
        });
      }, HIGHLIGHT_TIMEOUT);
    }
  }, {
    key: "setFormFieldTypeFormFieldValue",
    value: function setFormFieldTypeFormFieldValue() {
      var changeEvent = new Event('change');
      this.props.fieldValueInput.value = JSON.stringify({
        fields: this.state.fields
      });
      this.props.fieldValueInput.dispatchEvent(changeEvent);
    }
  }, {
    key: "handleElementDragOver",
    value: function handleElementDragOver(_ref3) {
      var target = _ref3.target,
        clientY = _ref3.clientY,
        currentTarget = _ref3.currentTarget;
      var formFieldElement = this.getFormFieldElement(target);
      var isPlaceholder = currentTarget.classList.contains(CLASS_PLACEHOLDER);
      if (!formFieldElement || isPlaceholder || !this.state.isDragging) {
        return;
      }
      var placeholders = this.getPlaceholderNodes();
      var _this$state2 = this.state,
        placeholderPosition = _this$state2.placeholderPosition,
        placeholderElementId = _this$state2.placeholderElementId,
        placeholderZoneId = _this$state2.placeholderZoneId;
      var placeholderMeta = this.props.addPlaceholderBesideElement(formFieldElement, clientY, placeholders, IDENTIFIER_FIELD_DATA_ATTRIBUTE, this.handleElementDragOver, {
        placeholderPosition: placeholderPosition,
        placeholderElementId: placeholderElementId,
        placeholderZoneId: placeholderZoneId
      });
      this.setState(function () {
        return _objectSpread({}, placeholderMeta);
      });
    }
  }, {
    key: "requestFieldConfigForm",
    value: function requestFieldConfigForm(fieldId) {
      this.props.fieldFormRequestConfig.target = fieldId;
      this._refFieldConfigTextarea.value = this.props.fieldValueInput.value;
      this._refFieldConfigIdInput.value = fieldId;
      this.props.fieldFormRequestConfig.submit();
    }
  }, {
    key: "getFieldsState",
    value: function getFieldsState() {
      return (0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(this.state.fields);
    }
  }, {
    key: "updateFieldValue",
    value: function updateFieldValue(fieldData) {
      var fields = this.getFieldsState().map(function (field) {
        return field.id === fieldData.id ? _objectSpread({}, fieldData) : _objectSpread({}, field);
      });
      this.setState(function () {
        return {
          fields: fields
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "checkCanSetFieldName",
    value: function checkCanSetFieldName(_ref4) {
      var id = _ref4.id,
        value = _ref4.value,
        successCallback = _ref4.successCallback,
        errorCallback = _ref4.errorCallback;
      var isNameUsed = this.state.fields.find(function (field) {
        return field.name === value && field.id !== id;
      });
      if (isNameUsed) {
        return errorCallback();
      }
      successCallback();
    }
  }, {
    key: "updateFieldNameValue",
    value: function updateFieldNameValue(fieldId, name) {
      var fields = this.getFieldsState().map(function (field) {
        return field.id === fieldId ? _objectSpread(_objectSpread({}, field), {}, {
          name: name
        }) : _objectSpread({}, field);
      });
      this.setState(function () {
        return {
          fields: fields
        };
      }, this.setFormFieldTypeFormFieldValue);
    }
  }, {
    key: "markInvalidFields",
    value: function markInvalidFields(invalidFields) {
      this.setState(function () {
        return {
          invalidFields: invalidFields
        };
      });
    }
  }, {
    key: "unmarkInvalidField",
    value: function unmarkInvalidField(field) {
      this.setState(function (state) {
        return {
          invalidFields: state.invalidFields.filter(function (invalidField) {
            return invalidField.id !== field.id;
          })
        };
      });
    }
  }, {
    key: "checkIsFieldInvalid",
    value: function checkIsFieldInvalid(field) {
      return !!this.state.invalidFields.find(function (invalidField) {
        return invalidField.id === field.id;
      });
    }
  }, {
    key: "renderFormField",
    value: function renderFormField(config) {
      var _this8 = this;
      var isRemoved = this.state.removedFieldsIds.includes(config.id);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_field_form_field__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
        key: config.id
      }, config, {
        fieldName: window.ibexa.formBuilder.config.fieldsConfig.find(function (data) {
          return data.identifier === config.identifier;
        }).name,
        onRemove: this.removeFieldFromFieldsState,
        onDragOver: this.handleElementDragOver,
        onDragStart: this.handleDragStartFormField,
        onDragEnd: this.removePlaceholders,
        onConfigPopupOpened: this.requestFieldConfigForm,
        onFieldDataUpdate: this.updateFieldValue,
        onNameChange: this.updateFieldNameValue,
        checkCanSetFieldName: this.checkCanSetFieldName,
        isInvalid: this.checkIsFieldInvalid(config),
        isHighlighted: config.id === this.state.highlightedFieldId,
        isRemoved: isRemoved,
        unmarkInvalidField: this.unmarkInvalidField,
        ref: function ref(element) {
          if (element) {
            element._refField.current.addEventListener('animationend', function () {
              if (isRemoved) {
                _this8.setState(function (state) {
                  return {
                    fields: (0,_helpers_remove_from_array__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_ibexa_page_builder_src_bundle_ui_dev_src_modules_helpers_deep_clone__WEBPACK_IMPORTED_MODULE_3__["default"])(state.fields), _this8.findByFieldId(config.id)),
                    removedFieldsIds: state.removedFieldsIds.filter(function (fieldId) {
                      return fieldId != config.id;
                    })
                  };
                }, _this8.setFormFieldTypeFormFieldValue);
              }
            });
          }
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      var _this$state3 = this.state,
        fields = _this$state3.fields,
        isDragging = _this$state3.isDragging,
        fieldsConfigByCategory = _this$state3.fieldsConfigByCategory;
      var showEmptyMessage = !fields.length && !isDragging;
      var workspaceClassName = "".concat(CLASS_WORKSPACE, "__content");
      var emptyMessage = Translator.trans(/*@Desc("Create a form by dragging elements here")*/'drag.drop.call.to.action', {}, 'ibexa_form_builder');
      var emptyZoneHeadline = Translator.trans(/*@Desc("Build your form")*/'drag.drop.empty.zone.headline', {}, 'ibexa_form_builder');
      var emptyZoneMessage = Translator.trans(/*@Desc("Drag and drop item from library to build form")*/'drag.drop.empty.zone.message', {}, 'ibexa_form_builder');
      if (showEmptyMessage) {
        workspaceClassName = "".concat(workspaceClassName, " ").concat(CLASS_WORKSPACE, "__content--empty");
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb__workspace-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: CLASS_WORKSPACE,
        onDragOver: function onDragOver(event) {
          event.preventDefault();
          _this9.handleZoneDragOut(event);
          _this9.handleActiveZone();
          return false;
        },
        ref: this._refWorkspace
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: workspaceClassName,
        "data-empty-message": emptyMessage,
        ref: this._refWorkspaceContent,
        "data-ibexa-zone-id": ZONE_ID,
        onDrop: this.handleDrop,
        onDragOver: this.handleZoneDragOver
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb-workspace__empty-zone-placeholder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
        className: "m-ibexa-fb-workspace__empty-zone-image",
        src: "/bundles/ibexaadminui/img/empty-field-definition-group.svg",
        alt: emptyZoneMessage
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
        className: "m-ibexa-fb-workspace__empty-zone-headline"
      }, emptyZoneHeadline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb-workspace__empty-zone-label"
      }, emptyZoneMessage)), fields.map(this.renderFormField)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb__sidebar-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fieldsConfigByCategory: fieldsConfigByCategory,
        fieldDragStart: this.handleDragStartSidebarField,
        fieldDragEnd: function fieldDragEnd() {
          _this9.cancelDraggingState();
          _this9.removePlaceholders();
        },
        appendNewField: this.appendNewField
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-ibexa-fb__popup-wrapper"
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
FormBuilder.propTypes = {
  fieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    fields: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired
  }).isRequired,
  fieldValueInput: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,
  fieldFormRequestConfig: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element).isRequired,
  fieldsConfig: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    attributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array).isRequired,
    category: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    identifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired,
    thumbnail: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string).isRequired
  })).isRequired,
  getElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  getInitDragDropState: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  addPlaceholderInZone: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  addPlaceholderBesideElement: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  removePlaceholders: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  removePlaceholdersAfterTimeout: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired,
  removePlaceholderWithoutAnimation: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBuilder);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/helpers/remove.from.array.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var removeFromArray = function removeFromArray(fields, callback) {
  var fieldIndex = fields.findIndex(callback);
  if (fieldIndex !== -1) {
    fields.splice(fieldIndex, 1);
  }
  return fields;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeFromArray);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js":
/*!****************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_builder_form_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-builder/form.builder */ "./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form-builder/form.builder.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/core/drag.drop */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/core/drag.drop.js");
/* harmony import */ var _ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary */ "./vendor/ibexa/page-builder/src/bundle/ui-dev/src/modules/page-builder/components/error-boundary/error.boundary.js");
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




var FormBuilderModule = /*#__PURE__*/function (_PureComponent) {
  function FormBuilderModule(props) {
    var _this;
    _classCallCheck(this, FormBuilderModule);
    _this = _callSuper(this, FormBuilderModule, [props]);
    _this._refFormBuilder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.markInvalidFields = _this.markInvalidFields.bind(_this);
    return _this;
  }
  _inherits(FormBuilderModule, _PureComponent);
  return _createClass(FormBuilderModule, [{
    key: "markInvalidFields",
    value: function markInvalidFields(fields) {
      return this._refFormBuilder.current.markInvalidFields(fields);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_page_builder_components_error_boundary_error_boundary__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_page_builder_src_bundle_ui_dev_src_modules_core_drag_drop__WEBPACK_IMPORTED_MODULE_2__["default"], {
        render: function render(methods) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_form_builder_form_builder__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
            ref: _this2._refFormBuilder
          }, _this2.props, methods));
        }
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBuilderModule);
window.ibexa.addConfig('modules.FormBuilder', FormBuilderModule);

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
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/submission.details.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/resize.form.preview.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/ui-dev/src/modules/form.builder.module.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/ezform.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/form.builder.create.js"));
/******/ }
]);