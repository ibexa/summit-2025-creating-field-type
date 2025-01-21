"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-price-edit-js"],{

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/form.validation.helper.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/form.validation.helper.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsEmpty: () => (/* binding */ checkIsEmpty),
/* harmony export */   formatErrorLine: () => (/* binding */ formatErrorLine),
/* harmony export */   validateIsEmptyField: () => (/* binding */ validateIsEmptyField)
/* harmony export */ });
/* harmony import */ var _context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _icon_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/icon.helper.js");


var formatErrorLine = function formatErrorLine(errorMessage) {
  var errorIcon = "<svg class=\"ibexa-icon ibexa-icon--small ibexa-form-error__icon\">\n        <use xlink:href=\"".concat((0,_icon_helper__WEBPACK_IMPORTED_MODULE_1__.getIconPath)('notice'), "\"></use>\n    </svg>");
  var container = document.createElement('em');
  var errorMessageNode = document.createTextNode(errorMessage);
  container.classList.add('ibexa-form-error__row');
  container.insertAdjacentHTML('beforeend', errorIcon);
  container.append(errorMessageNode);
  return container;
};
var checkIsEmpty = function checkIsEmpty(field) {
  var _ref;
  var errorMessage = '';
  var Translator = (0,_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
  var input = field.querySelector('.ibexa-input');
  var label = field.querySelector('.ibexa-label');
  if (label) {
    var fieldName = label.innerText;
    errorMessage = Translator.trans(/*@Desc("%fieldName% cannot be empty.")*/'error.required.field', {
      fieldName: fieldName
    }, 'forms');
  } else {
    errorMessage = Translator.trans(/*@Desc("This value should not be blank.")*/'error.required.field_not_blank', {}, 'forms');
  }
  return {
    isValid: (_ref = input.value || input.value === 0) !== null && _ref !== void 0 ? _ref : false,
    errorMessage: errorMessage
  };
};
var validateIsEmptyField = function validateIsEmptyField(field) {
  var input = field.querySelector('.ibexa-input');
  var label = field.querySelector('.ibexa-label');
  var errorWrapper = field.querySelector('.ibexa-form-error');
  var validatorOutput = checkIsEmpty(field);
  var isValid = validatorOutput.isValid,
    errorMessage = validatorOutput.errorMessage;
  if (input) {
    input.classList.toggle('is-invalid', !isValid);
  }
  if (label && input) {
    label.classList.toggle('is-invalid', !isValid);
  }
  errorWrapper.innerText = '';
  if (!isValid) {
    errorWrapper.append(formatErrorLine(errorMessage));
  }
  return validatorOutput;
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

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.edit.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.edit.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_form_validation_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/form.validation.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/form.validation.helper.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

(function (global, doc) {
  var productPriceForm = doc.querySelector('.ibexa-pc-product-price-edit-form');
  var currencySubunits = productPriceForm.dataset.currencySubunits;
  var inputsWithMinAttr = doc.querySelectorAll('.ibexa-input[min]');
  var basePriceInput = doc.querySelector('.ibexa-pc-product-price-edit-form__base-price-input');
  var customerBasePriceInputs = doc.querySelectorAll('.ibexa-pc-product-custom-price__customer-base-price-input');
  var customPriceRuleInputs = doc.querySelectorAll('.ibexa-pc-product-custom-price__custom-price-rule-input');
  var customPriceInputs = doc.querySelectorAll('.ibexa-pc-product-custom-price__custom-price-input');
  var updateBasePricesButton = doc.querySelector('.ibexa-pc-product-price-edit-form__update-base-prices-button');
  var markRowCheckboxes = doc.querySelectorAll('.ibexa-pc-product-custom-price__mark-row-checkbox');
  var parseNumberValue = function parseNumberValue(value) {
    var parsedFloatValue = parseFloat(value);
    var fixedFloatValue = parsedFloatValue.toFixed(currencySubunits);
    return Number(fixedFloatValue);
  };
  var isNumberValueValid = function isNumberValueValid(_ref) {
    var value = _ref.value,
      _ref$minValue = _ref.minValue,
      minValue = _ref$minValue === void 0 ? 0 : _ref$minValue,
      _ref$allowEmpty = _ref.allowEmpty,
      allowEmpty = _ref$allowEmpty === void 0 ? false : _ref$allowEmpty,
      _ref$onlyPositive = _ref.onlyPositive,
      onlyPositive = _ref$onlyPositive === void 0 ? false : _ref$onlyPositive;
    if (allowEmpty && !value) {
      return true;
    }
    var parsedValue = parseNumberValue(value);
    if (isNaN(parsedValue)) {
      return false;
    }
    if (onlyPositive) {
      return parsedValue > 0;
    }
    return parsedValue >= minValue;
  };
  var setUpdateBasePricesButtonState = function setUpdateBasePricesButtonState() {
    var isAnyCheckboxSelected = _toConsumableArray(markRowCheckboxes).some(function (checkbox) {
      return checkbox.checked;
    });
    updateBasePricesButton.disabled = !isAnyCheckboxSelected;
  };
  var updateBasePrices = function updateBasePrices() {
    if (!isNumberValueValid({
      value: basePriceInput.value,
      onlyPositive: true
    })) {
      return;
    }
    markRowCheckboxes.forEach(function (checkbox) {
      if (!checkbox.checked) {
        return;
      }
      var customerBasePriceInput = checkbox.closest('.ibexa-table__row').querySelector('.ibexa-pc-product-custom-price__customer-base-price-input');
      customerBasePriceInput.value = basePriceInput.value;
      customerBasePriceInput.dispatchEvent(new Event('change'));
    });
  };
  var calculateCustomPrice = function calculateCustomPrice(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var customerGroupPriceRow = currentTarget.closest('.ibexa-table__row');
    var customerBasePriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__customer-base-price-input');
    var globalPriceRuleInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__global-price-rule-input');
    var customPriceRuleInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-rule-input');
    var customPriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-input');
    var isCustomPriceRuleValid = isNumberValueValid({
      value: customPriceRuleInput.value,
      minValue: -100,
      allowEmpty: true
    });
    var isCustomerBasePriceValueValid = isNumberValueValid({
      value: customerBasePriceInput.value,
      allowEmpty: true,
      onlyPositive: true
    });
    var isCustomPriceValueValid = isNumberValueValid({
      value: customPriceInput.value,
      allowEmpty: true
    });
    customerBasePriceInput.classList.toggle('is-invalid', !isCustomerBasePriceValueValid);
    customPriceRuleInput.classList.toggle('is-invalid', !isCustomPriceRuleValid);
    customPriceInput.classList.toggle('is-invalid', !isCustomPriceValueValid);
    if (customerBasePriceInput.value === '') {
      customPriceInput.value = '';
      return;
    }
    if (!isCustomerBasePriceValueValid || !isCustomPriceRuleValid) {
      return;
    }
    var customerBasePriceValue = parseNumberValue(customerBasePriceInput.value);
    var globalPriceRuleValue = parseNumberValue(globalPriceRuleInput.value);
    var customPriceRuleValue = parseNumberValue(customPriceRuleInput.value);
    var priceRuleValue = isNaN(customPriceRuleValue) ? globalPriceRuleValue : customPriceRuleValue;
    var discount = customerBasePriceValue * priceRuleValue / 100;
    var calculatedPrice = parseNumberValue(customerBasePriceValue + discount);
    customPriceInput.value = calculatedPrice;
    customPriceInput.classList.remove('is-invalid');
  };
  var calculateCustomPriceRule = function calculateCustomPriceRule(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var customerGroupPriceRow = currentTarget.closest('.ibexa-table__row');
    var customerBasePriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__customer-base-price-input');
    var customPriceInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-input');
    var customPriceRuleInput = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__custom-price-rule-input');
    var globalPriceRuleCell = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__global-price-rule-cell');
    var isCustomerBasePriceValueValid = isNumberValueValid({
      value: customerBasePriceInput.value,
      onlyPositive: true
    });
    var isCustomPriceValue = isNumberValueValid({
      value: customPriceInput.value
    });
    customerBasePriceInput.classList.toggle('is-invalid', !isCustomerBasePriceValueValid);
    customPriceInput.classList.toggle('is-invalid', !isCustomPriceValue);
    if (customPriceInput.value === '') {
      customPriceRuleInput.value = '';
      globalPriceRuleCell.classList.remove('ibexa-pc-product-custom-price__global-price-rule-cell--unused');
      return;
    }
    if (!isCustomerBasePriceValueValid || !isCustomPriceValue) {
      return;
    }
    var customerBasePriceValue = parseNumberValue(customerBasePriceInput.value);
    var customPriceValue = parseNumberValue(customPriceInput.value);
    var percentageCustomPriceOfBasePrice = parseNumberValue(customPriceValue / customerBasePriceValue * 100);
    var customPriceRule = parseNumberValue(percentageCustomPriceOfBasePrice - 100);
    customPriceRuleInput.value = customPriceRule;
    customPriceRuleInput.dispatchEvent(new Event('change'));
  };
  var toggleGlobalPriceState = function toggleGlobalPriceState(_ref4) {
    var currentTarget = _ref4.currentTarget;
    var customPriceRuleInput = currentTarget;
    var customerGroupPriceRow = customPriceRuleInput.closest('.ibexa-table__row');
    var globalPriceRuleCell = customerGroupPriceRow.querySelector('.ibexa-pc-product-custom-price__global-price-rule-cell');
    globalPriceRuleCell.classList.toggle('ibexa-pc-product-custom-price__global-price-rule-cell--unused', isNumberValueValid({
      value: customPriceRuleInput.value,
      minValue: -100
    }));
  };
  var validateBasePriceInput = function validateBasePriceInput() {
    var field = basePriceInput.closest('.ibexa-pc-edit__form-field');
    var label = field.querySelector('.ibexa-label');
    var errorWrapper = field.querySelector('.ibexa-form-error');
    var emptyValueValidatorOutput = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_form_validation_helper__WEBPACK_IMPORTED_MODULE_0__.checkIsEmpty)(field);
    var isFieldValid = isNumberValueValid({
      value: basePriceInput.value,
      onlyPositive: true
    }) && emptyValueValidatorOutput.isValid;
    basePriceInput.classList.toggle('is-invalid', !isFieldValid);
    label.classList.toggle('is-invalid', !isFieldValid);
    errorWrapper.innerText = '';
    if (!emptyValueValidatorOutput.isValid) {
      errorWrapper.append((0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_form_validation_helper__WEBPACK_IMPORTED_MODULE_0__.formatErrorLine)(emptyValueValidatorOutput.errorMessage));
    }
  };
  customerBasePriceInputs.forEach(function (customerBasePriceInput) {
    customerBasePriceInput.addEventListener('change', calculateCustomPrice, false);
    customerBasePriceInput.addEventListener('input', calculateCustomPrice, false);
  });
  customPriceInputs.forEach(function (customPriceInput) {
    customPriceInput.addEventListener('change', calculateCustomPriceRule, false);
    customPriceInput.addEventListener('input', calculateCustomPriceRule, false);
  });
  customPriceRuleInputs.forEach(function (customPriceRuleInput) {
    customPriceRuleInput.addEventListener('change', function (event) {
      calculateCustomPrice(event);
      toggleGlobalPriceState(event);
    }, false);
    customPriceRuleInput.addEventListener('input', function (event) {
      calculateCustomPrice(event);
      toggleGlobalPriceState(event);
    }, false);
  });
  markRowCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', setUpdateBasePricesButtonState, false);
  });
  updateBasePricesButton.addEventListener('click', updateBasePrices, false);
  basePriceInput.addEventListener('blur', validateBasePriceInput, false);
  inputsWithMinAttr.forEach(function (input) {
    var minInputValue = input.min;
    input.addEventListener('change', function (event) {
      return event.target.value = Math.max(event.target.value, minInputValue);
    }, false);
  });
  productPriceForm.addEventListener('submit', function (event) {
    validateBasePriceInput();
    var invalidInputs = productPriceForm.querySelectorAll('.is-invalid');
    if (invalidInputs.length) {
      event.preventDefault();
    }
  }, false);
  setUpdateBasePricesButtonState();
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.price.edit.js"));
/******/ }
]);