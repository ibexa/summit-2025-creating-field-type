"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-catalog-filter-js"],{

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

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/category.filter.tree.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/category.filter.tree.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_dev_src_modules_category_filter_tree_category_filter_tree_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui-dev/src/modules/category-filter-tree/category.filter.tree.module */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/category-filter-tree/category.filter.tree.module.js");

(function (global, doc, React, ReactDOM, ibexa) {
  var taxonomyTreeContainer = doc.querySelector('.ibexa-taxonomy-tree-container');
  if (!taxonomyTreeContainer) {
    return;
  }
  var taxonomyTreeRootElement = doc.querySelector('.ibexa-taxonomy-tree-container__root');
  var _taxonomyTreeContaine = taxonomyTreeContainer.dataset,
    taxonomyName = _taxonomyTreeContaine.taxonomy,
    moduleName = _taxonomyTreeContaine.moduleName,
    currentPath = _taxonomyTreeContaine.currentPath,
    categoryWithFormDataUrlTemplate = _taxonomyTreeContaine.categoryWithFormDataUrlTemplate,
    activeItemId = _taxonomyTreeContaine.activeItemId;
  var userId = ibexa.helpers.user.getId();
  var taxonomyTreeRoot = null;
  var removeTaxonomyTreeContainerWidth = function removeTaxonomyTreeContainerWidth(event) {
    if (event.detail.id !== 'ibexa-category-filter-tree') {
      return;
    }
    taxonomyTreeContainer.style.width = null;
  };
  var renderTree = function renderTree() {
    taxonomyTreeRoot = ReactDOM.createRoot(taxonomyTreeRootElement);
    taxonomyTreeRoot.render(React.createElement(_ui_dev_src_modules_category_filter_tree_category_filter_tree_module__WEBPACK_IMPORTED_MODULE_0__["default"], {
      userId: userId,
      taxonomyName: taxonomyName,
      moduleName: moduleName,
      currentPath: currentPath,
      categoryWithFormDataUrlTemplate: categoryWithFormDataUrlTemplate,
      activeItemId: activeItemId !== '' ? parseInt(activeItemId, 10) : null
    }));
  };
  doc.body.addEventListener('ibexa-tb-rendered', removeTaxonomyTreeContainerWidth, false);
  renderTree();
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/category-filter-tree/category.filter.tree.module.js":
/*!************************************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/category-filter-tree/category.filter.tree.module.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ibexa_taxonomy_src_bundle_ui_dev_src_modules_common_helpers_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/languages.js");
/* harmony import */ var _ibexa_taxonomy_src_bundle_ui_dev_src_modules_common_components_name_content_name_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ibexa-taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js");
/* harmony import */ var _ibexa_taxonomy_src_bundle_ui_dev_src_modules_taxonomy_tree_taxonomy_tree_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ibexa-taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.base */ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.base.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var MODULE_ID = 'ibexa-category-filter-tree';
var SUBTREE_ID = 'subtree';
var UNCATEGORISED_FAKE_ITEM_ID = -1;
var CategoryFilterTreeModule = function CategoryFilterTreeModule(props) {
  var userId = props.userId,
    taxonomyName = props.taxonomyName,
    currentPath = props.currentPath,
    activeItemId = props.activeItemId,
    languageCode = props.languageCode,
    categoryWithFormDataUrlTemplate = props.categoryWithFormDataUrlTemplate;
  var treeBaseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _categoryWithFormData = categoryWithFormDataUrlTemplate.split('?'),
    _categoryWithFormData2 = _slicedToArray(_categoryWithFormData, 2),
    href = _categoryWithFormData2[0],
    paramsString = _categoryWithFormData2[1];
  var searchParams = new URLSearchParams(paramsString);
  var uncategorizedItemLabel = Translator.trans(/*@Desc("Uncategorized products")*/'category_filter.tree.uncategorized.label', {}, 'ibexa_product_catalog');
  var renderLabel = function renderLabel(item, _ref) {
    var searchActive = _ref.searchActive,
      searchValue = _ref.searchValue,
      labelTruncatedCallbackRef = _ref.labelTruncatedCallbackRef;
    var rootPathRegex = /^[^/]+(\/)?$/;
    var name = null;
    if (item.id === UNCATEGORISED_FAKE_ITEM_ID) {
      name = uncategorizedItemLabel;
    } else if (rootPathRegex.test(item.path)) {
      name = Translator.trans(/*@Desc("All categories")*/'category_filter.tree.root_category.label', {}, 'ibexa_product_catalog');
    } else {
      name = (0,_ibexa_taxonomy_src_bundle_ui_dev_src_modules_common_helpers_languages__WEBPACK_IMPORTED_MODULE_1__.getTranslatedName)(item.internalItem, languageCode);
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "c-tb-list-item-single__label-truncated",
      title: name,
      ref: labelTruncatedCallbackRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_taxonomy_src_bundle_ui_dev_src_modules_common_components_name_content_name_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
      searchActive: searchActive,
      searchValue: searchValue,
      name: name
    }));
  };
  var getSearchLink = function getSearchLink(item) {
    searchParams.set('page', 1);
    searchParams.set('product_search[category]', item.id === UNCATEGORISED_FAKE_ITEM_ID ? '' : item.id);
    return "".concat(href, "?").concat(searchParams.toString());
  };
  var isActive = function isActive(item) {
    var isUncategorisedActive = activeItemId === null;
    var isUncategorisedItem = item.id === UNCATEGORISED_FAKE_ITEM_ID;
    if (isUncategorisedActive && isUncategorisedItem) {
      return true;
    }
    return item.id === activeItemId;
  };
  var generateExtraBottomItems = function generateExtraBottomItems(_ref2) {
    var searchActive = _ref2.searchActive,
      searchValue = _ref2.searchValue;
    if (searchActive) {
      var searchRegex = new RegExp(".*".concat(searchValue, ".*"));
      var isMatchingSearch = searchRegex.test(uncategorizedItemLabel);
      if (!isMatchingSearch) {
        return [];
      }
    }
    return [{
      internalItem: null,
      id: UNCATEGORISED_FAKE_ITEM_ID,
      href: getSearchLink({
        id: UNCATEGORISED_FAKE_ITEM_ID
      }),
      path: UNCATEGORISED_FAKE_ITEM_ID.toString(),
      renderLabel: renderLabel,
      customItemClass: 'c-tt-list-item'
    }];
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ibexa_taxonomy_src_bundle_ui_dev_src_modules_taxonomy_tree_taxonomy_tree_base__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: treeBaseRef,
    taxonomyName: taxonomyName,
    userId: userId,
    moduleId: MODULE_ID,
    subId: "category-filter-".concat(taxonomyName),
    subtreeId: SUBTREE_ID,
    currentPath: currentPath,
    renderLabel: renderLabel,
    getItemLink: getSearchLink,
    languageCode: languageCode,
    generateExtraBottomItems: generateExtraBottomItems,
    useTheme: true,
    treeBuilderExtraProps: {
      moduleName: Translator.trans(/*@Desc("Category filter")*/'category_filter.tree.name', {}, 'ibexa_product_catalog'),
      selectionDisabled: true,
      dragDisabled: true,
      actionsVisible: false,
      isActive: isActive
    }
  });
};
CategoryFilterTreeModule.propTypes = {
  userId: PropTypes.number.isRequired,
  taxonomyName: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  languageCode: PropTypes.string,
  activeItemId: PropTypes.number.isRequired,
  categoryWithFormDataUrlTemplate: PropTypes.string.isRequired
};
CategoryFilterTreeModule.defaultProps = {
  languageCode: ibexa.adminUiConfig.languages.priority[0]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryFilterTreeModule);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/category-filter-tree/config.loader.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/category-filter-tree/config.loader.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_filter_tree_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.filter.tree.module */ "./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/category-filter-tree/category.filter.tree.module.js");

(function (ibexa) {
  ibexa.addConfig('modules.CategoryFilterTree', _category_filter_tree_module__WEBPACK_IMPORTED_MODULE_0__["default"]);
})(window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/empty-tree/empty.tree.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/components/name-content/name-content.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/common/helpers/array.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.base.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/taxonomy/src/bundle/ui-dev/src/modules/taxonomy-tree/taxonomy.tree.base.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/ui-dev/src/modules/category-filter-tree/config.loader.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/category.filter.tree.js"));
/******/ }
]);