(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-product-edit-js"],{

/***/ "./vendor/ibexa/measurement/src/bundle/Resources/public/js/attribute.measurement.validator.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/measurement/src/bundle/Resources/public/js/attribute.measurement.validator.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _measurement_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./measurement.validator */ "./vendor/ibexa/measurement/src/bundle/Resources/public/js/measurement.validator.js");

(function (global, doc, ibexa) {
  var SELECTOR_FIELD = '.ibexa-attribute-edit--measurement';
  var SELECTOR_SOURCE_INPUT = '.ibexa-input-text-wrapper--type-number .ibexa-input--text';
  var SELECTOR_LABEL = '.ibexa-attribute-edit__label';
  var validator = new _measurement_validator__WEBPACK_IMPORTED_MODULE_0__.IbexaMeasurementValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    labelSelector: SELECTOR_LABEL,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " .ibexa-input-text-wrapper--type-number input"),
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: ['.ibexa-form-error'],
      invalidStateSelectors: [SELECTOR_SOURCE_INPUT]
    }]
  });
  validator.init();
  ibexa.addConfig('fieldTypeValidators', [validator], true);
})(window, document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/measurement/src/bundle/Resources/public/js/measurement.validator.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/measurement/src/bundle/Resources/public/js/measurement.validator.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IbexaMeasurementValidator: () => (/* binding */ IbexaMeasurementValidator)
/* harmony export */ });
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
var IbexaMeasurementValidator = /*#__PURE__*/function (_window$ibexa$BaseFie) {
  function IbexaMeasurementValidator(config) {
    var _this;
    _classCallCheck(this, IbexaMeasurementValidator);
    _this = _callSuper(this, IbexaMeasurementValidator, [config]);
    _this.fieldSelector = config.fieldSelector;
    _this.labelSelector = config.labelSelector;
    return _this;
  }
  _inherits(IbexaMeasurementValidator, _window$ibexa$BaseFie);
  return _createClass(IbexaMeasurementValidator, [{
    key: "checkSingleMeasurementInput",
    value: function checkSingleMeasurementInput(input) {
      var isRequired = input.required;
      var minValue = parseFloat(input.min);
      var maxValue = parseFloat(input.max);
      var parsedValue = parseFloat(input.value);
      var isEmpty = isNaN(parsedValue);
      var isBelowMinValue = !isNaN(minValue) && parsedValue < minValue;
      var isAboveMaxValue = !isNaN(maxValue) && parsedValue > maxValue;
      return {
        isEmpty: isEmpty,
        isRequired: isRequired,
        isBelowMinValue: isBelowMinValue,
        isAboveMaxValue: isAboveMaxValue,
        minValue: minValue,
        maxValue: maxValue
      };
    }
  }, {
    key: "validateSimpleMeasurement",
    value: function validateSimpleMeasurement(input) {
      var _this$checkSingleMeas = this.checkSingleMeasurementInput(input),
        isEmpty = _this$checkSingleMeas.isEmpty,
        isRequired = _this$checkSingleMeas.isRequired,
        isBelowMinValue = _this$checkSingleMeas.isBelowMinValue,
        isAboveMaxValue = _this$checkSingleMeas.isAboveMaxValue,
        minValue = _this$checkSingleMeas.minValue,
        maxValue = _this$checkSingleMeas.maxValue;
      var label = input.closest(this.fieldSelector).querySelector(this.labelSelector).innerHTML;
      var isError = isEmpty && isRequired || isBelowMinValue || isAboveMaxValue;
      var result = {
        isError: isError
      };
      if (isEmpty && isRequired) {
        result.errorMessage = window.ibexa.errors.emptyField.replace('{fieldName}', label);
      } else if (isBelowMinValue || isAboveMaxValue) {
        result.errorMessage = window.ibexa.errors.outOfRangeValue.replace('{fieldName}', label).replace('{min}', minValue).replace('{max}', maxValue);
      }
      return result;
    }
  }, {
    key: "validateRangeMeasurement",
    value: function validateRangeMeasurement(rangeContainer) {
      var label = rangeContainer.closest(this.fieldSelector).querySelector(this.labelSelector).innerHTML;
      var firstInput = rangeContainer.querySelector('.ibexa-measurement-form-number__input--first');
      var secondInput = rangeContainer.querySelector('.ibexa-measurement-form-number__input--second');
      var firstInputParsedValue = parseFloat(firstInput.value);
      var secondInputParsedValue = parseFloat(secondInput.value);
      var firstInputChecks = this.checkSingleMeasurementInput(firstInput);
      var secondInputChecks = this.checkSingleMeasurementInput(secondInput);
      var isFirstInputError = firstInputChecks.isEmpty && firstInputChecks.isRequired || firstInputChecks.isBelowMinValue || firstInputChecks.isAboveMaxValue;
      var isSecondInputError = secondInputChecks.isEmpty && secondInputChecks.isRequired || secondInputChecks.isBelowMinValue || secondInputChecks.isAboveMaxValue;
      var rangeMinValue = firstInputChecks.minValue;
      var rangeMaxValue = firstInputChecks.maxValue;
      var isRangeRequired = firstInputChecks.isRequired;
      var isRangeError = firstInputParsedValue && secondInputParsedValue && firstInputParsedValue > secondInputParsedValue;
      var isError = isFirstInputError || isSecondInputError || isRangeError;
      var result = {
        isError: isError
      };
      if (isRangeRequired && (firstInputChecks.isEmpty || secondInputChecks.isEmpty)) {
        result.errorMessage = window.ibexa.errors.emptyField.replace('{fieldName}', label);
      } else if (firstInputChecks.isBelowMinValue || firstInputChecks.isAboveMaxValue || secondInputChecks.isBelowMinValue || secondInputChecks.isAboveMaxValue) {
        result.errorMessage = window.ibexa.errors.outOfRangeValue.replace('{fieldName}', label).replace('{min}', rangeMinValue).replace('{max}', rangeMaxValue);
      } else if (isRangeError) {
        var _window = window,
          Translator = _window.Translator;
        result.errorMessage = Translator.trans(/*@Desc("First value should not be greater than the second one.")*/'error.first_greater_than_second.message', {}, 'validators');
      }
      return result;
    }
  }, {
    key: "validateInput",
    value: function validateInput(_ref) {
      var currentTarget = _ref.currentTarget;
      var rangeContainer = currentTarget.closest('.ibexa-measurement-form-number--range');
      var isRangeMeasurement = !!rangeContainer;
      if (isRangeMeasurement) {
        return this.validateRangeMeasurement(rangeContainer);
      }
      return this.validateSimpleMeasurement(currentTarget);
    }
  }]);
}(window.ibexa.BaseFieldValidator);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attributeType/attribute.color.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attributeType/attribute.color.js ***!
  \******************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var colorAttributesInput = doc.querySelectorAll('.ibexa-attribute-edit--color .ibexa-input');
  var setColorAttributeLabelValue = function setColorAttributeLabelValue(_ref) {
    var currentTarget = _ref.currentTarget;
    var colorValue = currentTarget.value;
    var attributeNode = currentTarget.closest('.ibexa-attribute-edit--color');
    var colorHexValueNode = attributeNode.querySelector('.ibexa-attribute-edit__hex-value');
    colorHexValueNode.innerHTML = colorValue;
  };
  colorAttributesInput.forEach(function (colorAttributeInput) {
    colorAttributeInput.addEventListener('input', setColorAttributeLabelValue, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attributeType/attribute.number.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attributeType/attribute.number.js ***!
  \*******************************************************************************************************/
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
(function (global, doc, ibexa) {
  var SELECTOR_FIELD = '.ibexa-attribute-edit--number';
  var SELECTOR_INTEGER_FIELD = '.ibexa-attribute-edit--integer';
  var SELECTOR_SOURCE_INPUT = '.ibexa-input--text';
  var SELECTOR_LABEL = '.ibexa-attribute-edit__label';
  var IbexaAttributeNumberValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid) {
    "use strict";

    function IbexaAttributeNumberValidator() {
      _classCallCheck(this, IbexaAttributeNumberValidator);
      return _callSuper(this, IbexaAttributeNumberValidator, arguments);
    }
    _inherits(IbexaAttributeNumberValidator, _ibexa$BaseFieldValid);
    return _createClass(IbexaAttributeNumberValidator, [{
      key: "validateInput",
      value: function validateInput(_ref) {
        var currentTarget = _ref.currentTarget;
        var isRequired = currentTarget.required;
        var parsedValue = currentTarget.value.replaceAll(' ', '');
        var isEmpty = !parsedValue;
        var isTooShort = parsedValue.length < parseInt(currentTarget.dataset.min, 10);
        var isTooLong = parsedValue.length > parseInt(currentTarget.dataset.max, 10);
        var isError = isEmpty && isRequired || isTooShort || isTooLong;
        var label = currentTarget.closest(SELECTOR_FIELD).querySelector(SELECTOR_LABEL).innerHTML;
        var result = {
          isError: isError
        };
        if (isEmpty) {
          result.errorMessage = ibexa.errors.emptyField.replace('{fieldName}', label);
        } else if (isTooShort) {
          result.errorMessage = ibexa.errors.tooShort.replace('{fieldName}', label).replace('{minLength}', currentTarget.dataset.min);
        } else if (isTooLong) {
          result.errorMessage = ibexa.errors.tooLong.replace('{fieldName}', label).replace('{maxLength}', currentTarget.dataset.max);
        }
        return result;
      }
    }, {
      key: "validateInteger",
      value: function validateInteger(_ref2) {
        var currentTarget = _ref2.currentTarget;
        var label = currentTarget.closest(SELECTOR_INTEGER_FIELD).querySelector(SELECTOR_LABEL).innerHTML;
        var isRequired = currentTarget.required;
        var isEmpty = !currentTarget.value;
        var isError = isEmpty && isRequired || !Number.isInteger(Number(currentTarget.value));
        var result = {
          isError: isError
        };
        if (isEmpty) {
          result.errorMessage = ibexa.errors.emptyField.replace('{fieldName}', label);
        } else if (isError) {
          result.errorMessage = ibexa.errors.isNotInteger.replace('{fieldName}', label);
        }
        return result;
      }
    }]);
  }(ibexa.BaseFieldValidator);
  var validator = new IbexaAttributeNumberValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " input"),
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: ['.ibexa-form-error'],
      invalidStateSelectors: [SELECTOR_SOURCE_INPUT]
    }, {
      selector: "".concat(SELECTOR_FIELD).concat(SELECTOR_INTEGER_FIELD, " input"),
      eventName: 'blur',
      callback: 'validateInteger',
      errorNodeSelectors: ['.ibexa-form-error'],
      invalidStateSelectors: [SELECTOR_SOURCE_INPUT]
    }]
  });
  validator.init();
  ibexa.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/fieldType/code.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/fieldType/code.js ***!
  \***************************************************************************************/
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
(function (global, doc, ibexa) {
  var SELECTOR_FIELD = '.ibexa-data-source__field--code';
  var SELECTOR_SOURCE_INPUT = '.ibexa-data-source__input';
  var SELECTOR_LABEL = '.ibexa-data-source__label';
  var IbexaCodeValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid) {
    "use strict";

    function IbexaCodeValidator() {
      _classCallCheck(this, IbexaCodeValidator);
      return _callSuper(this, IbexaCodeValidator, arguments);
    }
    _inherits(IbexaCodeValidator, _ibexa$BaseFieldValid);
    return _createClass(IbexaCodeValidator, [{
      key: "validateInput",
      value: function validateInput(_ref) {
        var currentTarget = _ref.currentTarget;
        var isRequired = currentTarget.required;
        var parsedValue = currentTarget.value.replaceAll(' ', '');
        var isEmpty = !parsedValue;
        var isError = isEmpty && isRequired;
        var label = currentTarget.closest(SELECTOR_FIELD).querySelector(SELECTOR_LABEL).innerHTML;
        var result = {
          isError: isError
        };
        if (isEmpty) {
          result.errorMessage = ibexa.errors.emptyField.replace('{fieldName}', label);
        }
        return result;
      }
    }]);
  }(ibexa.BaseFieldValidator);
  var validator = new IbexaCodeValidator({
    classInvalid: 'is-invalid',
    fieldSelector: SELECTOR_FIELD,
    eventsMap: [{
      selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_SOURCE_INPUT),
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: ['.ibexa-form-error'],
      invalidStateSelectors: [SELECTOR_SOURCE_INPUT]
    }]
  });
  validator.init();
  ibexa.addConfig('fieldTypeValidators', [validator], true);
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attributeType/attribute.color.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/attributeType/attribute.number.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/fieldType/code.js"), __webpack_exec__("./vendor/ibexa/measurement/src/bundle/Resources/public/js/attribute.measurement.validator.js"));
/******/ }
]);