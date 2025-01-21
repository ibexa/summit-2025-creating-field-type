(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-block-config-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/fieldType/base/base-field.js":
/*!*****************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/fieldType/base/base-field.js ***!
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
  var BaseFieldValidator = /*#__PURE__*/function () {
    "use strict";

    function BaseFieldValidator(config) {
      _classCallCheck(this, BaseFieldValidator);
      this.classInvalid = config.classInvalid;
      this.eventsMap = config.eventsMap;
      this.fieldSelector = config.fieldSelector;
      this.fieldContainer = config.fieldContainer;
      this.fieldsToValidate = [];
      this.isValid = this.isValid.bind(this);
    }
    return _createClass(BaseFieldValidator, [{
      key: "getFieldTypeContainer",
      value: function getFieldTypeContainer(fallback) {
        return this.fieldContainer ? this.fieldContainer : fallback;
      }

      /**
       * Attaches event to elements found with a selector provided by field config
       *
       * @method attachEvent
       * @param {Object} config
       * @memberof BaseFieldValidator
       */
    }, {
      key: "attachEvent",
      value: function attachEvent(config) {
        var container = this.getFieldTypeContainer(doc);
        var elements = config.elements || container.querySelectorAll(config.selector);
        elements.forEach(this.attachEventToElement.bind(this, config));
      }

      /**
       * Attaches event to elements found with a selector provided by field config
       *
       * @method attachEventToElement
       * @param {Object} config
       * @param {HTMLElement} item
       * @memberof BaseFieldValidator
       */
    }, {
      key: "attachEventToElement",
      value: function attachEventToElement(config, item) {
        var isValueValidator = typeof config.isValueValidator !== 'undefined' ? config.isValueValidator : true;
        this.fieldsToValidate.push({
          item: item,
          isValueValidator: isValueValidator,
          callback: config.validateField
        });
        item.addEventListener(config.eventName, config.validateField, false);
        item.addEventListener('checkIsValid', this.isValid, false);
      }

      /**
       * Removes event from a node found by a given selector
       *
       * @method removeEvent
       * @param {String} eventName
       * @param {String} selector
       * @param {Function} callback
       * @memberof BaseFieldValidator
       */
    }, {
      key: "removeEvent",
      value: function removeEvent(eventName, selector, callback) {
        var _this = this;
        this.getFieldTypeContainer(doc).querySelectorAll(selector).forEach(function (item) {
          item.removeEventListener('checkIsValid', _this.isValid, false);
          item.removeEventListener(eventName, callback, false);
        });
      }

      /**
       * Finds nodes to add validation state
       *
       * @method findValidationStateNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */
    }, {
      key: "findValidationStateNodes",
      value: function findValidationStateNodes(fieldNode, input) {
        var selectors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(fieldNode.querySelectorAll(selector)));
        }, []);
      }

      /**
       * Toggles the invalid state
       *
       * @method toggleInvalidState
       * @param {Boolean} isError
       * @param {Object} config
       * @param {HTMLElement} input
       * @memberof BaseFieldValidator
       */
    }, {
      key: "toggleInvalidState",
      value: function toggleInvalidState(isError, config, input) {
        var _this2 = this;
        var container = this.getFieldTypeContainer(input.closest(this.fieldSelector));
        var methodName = isError ? 'add' : 'remove';
        var nodes = this.findValidationStateNodes(container, input, config.invalidStateSelectors);
        container.classList[methodName](this.classInvalid);
        input.classList[methodName](this.classInvalid);
        nodes.forEach(function (el) {
          return el.classList[methodName](_this2.classInvalid);
        });
        doc.body.dispatchEvent(new CustomEvent('ibexa-inputs-validation:change-state', {
          detail: {
            nodes: nodes
          }
        }));
      }

      /**
       * Creates an error node
       *
       * @method createErrorNode
       * @param {String} message
       * @returns {HTMLElement}
       * @memberof BaseFieldValidator
       */
    }, {
      key: "createErrorNode",
      value: function createErrorNode(message) {
        return ibexa.helpers.formValidation.formatErrorLine(message);
      }

      /**
       * Finds the error containers
       *
       * @method findErrorContainers
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */
    }, {
      key: "findErrorContainers",
      value: function findErrorContainers(fieldNode, input, selectors) {
        return selectors.reduce(function (total, selector) {
          return total.concat(_toConsumableArray(fieldNode.querySelectorAll(selector)));
        }, []);
      }

      /**
       * Finds the existing error nodes
       *
       * @method findExistingErrorNodes
       * @param {HTMLElement} fieldNode
       * @param {HTMLElement} input
       * @param {Array} selectors
       * @returns {Array}
       * @memberof BaseFieldValidator
       */
    }, {
      key: "findExistingErrorNodes",
      value: function findExistingErrorNodes(fieldNode, input, selectors) {
        return this.findErrorContainers(fieldNode, input, selectors);
      }

      /**
       * Toggles the error message
       *
       * @method toggleErrorMessage
       * @param {Object} validationResult
       * @param {Object} config
       * @param {HTMLElement} input
       * @memberof BaseFieldValidator
       */
    }, {
      key: "toggleErrorMessage",
      value: function toggleErrorMessage(validationResult, config, input) {
        var _this3 = this;
        var container = this.getFieldTypeContainer(input.closest(this.fieldSelector));
        var nodes = this.findErrorContainers(container, input, config.errorNodeSelectors);
        var existingErrorSelectors = config.errorNodeSelectors.map(function (selector) {
          return "".concat(selector, " .ibexa-form-error__row");
        });
        var existingErrorNodes = this.findExistingErrorNodes(container, input, existingErrorSelectors);
        existingErrorNodes.forEach(function (el) {
          return el.remove();
        });
        if (validationResult.isError) {
          nodes.forEach(function (el) {
            var errorNode = _this3.createErrorNode(validationResult.errorMessage);
            el.append(errorNode);
          });
        }
      }

      /**
       * Validates the field
       *
       * @method validateField
       * @param {Object} config
       * @param {Event} event
       * @memberof BaseFieldValidator
       */
    }, {
      key: "validateField",
      value: function validateField(config, event) {
        var validationResult = this[config.callback](event);
        if (!validationResult) {
          return;
        }
        this.toggleInvalidState(validationResult.isError, config, event.target);
        this.toggleErrorMessage(validationResult, config, event.target);
        return validationResult;
      }

      /**
       * Attaches event listeners based on a config.
       *
       * @method init
       * @memberof BaseFieldValidator
       */
    }, {
      key: "init",
      value: function init() {
        var _this4 = this;
        this.fieldsToValidate = [];
        this.eventsMap.forEach(function (eventConfig) {
          eventConfig.validateField = _this4.validateField.bind(_this4, eventConfig);
          _this4.attachEvent(eventConfig);
        });
      }

      /**
       * Removes event listeners and attaches again.
       *
       * @method reinit
       * @memberof BaseFieldValidator
       */
    }, {
      key: "reinit",
      value: function reinit() {
        var _this5 = this;
        this.eventsMap.forEach(function (_ref) {
          var eventName = _ref.eventName,
            selector = _ref.selector,
            validateField = _ref.validateField;
          return _this5.removeEvent(eventName, selector, validateField);
        });
        this.init();
      }

      /**
       * Cancels all errors
       *
       * @method cancelErrors
       * @returns {Object}
       */
    }, {
      key: "cancelErrors",
      value: function cancelErrors() {
        return {
          isError: false
        };
      }

      /**
       * Checks whether field values are valid
       *
       * @method isValid
       * @returns {Boolean}
       */
    }, {
      key: "isValid",
      value: function isValid() {
        if (!this.fieldsToValidate.length) {
          return true;
        }
        var results = [];
        this.fieldsToValidate.forEach(function (field) {
          if (field.isValueValidator) {
            results.push(field.callback({
              target: field.item,
              currentTarget: field.item
            }));
          }
        });
        return results.every(function (result) {
          return result && !result.isError;
        });
      }
    }]);
  }();
  ibexa.addConfig('BaseFieldValidator', BaseFieldValidator);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/fieldType/validator/richtext-validator.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/fieldType/validator/richtext-validator.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["richtextEditor", "selectorField", "labelSelector"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
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
var RichTextValidator = /*#__PURE__*/function (_ibexa$BaseFieldValid) {
  function RichTextValidator(_ref) {
    var _this;
    var richtextEditor = _ref.richtextEditor,
      selectorField = _ref.selectorField,
      labelSelector = _ref.labelSelector,
      config = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, RichTextValidator);
    _this = _callSuper(this, RichTextValidator, [config]);
    _this.richtextEditor = richtextEditor;
    _this.selectorField = selectorField;
    _this.labelSelector = labelSelector;
    return _this;
  }

  /**
   * Validates the input
   *
   * @method validateInput
   * @param {Event} event
   * @returns {Object}
   * @memberof RichTextValidator
   */
  _inherits(RichTextValidator, _ibexa$BaseFieldValid);
  return _createClass(RichTextValidator, [{
    key: "validateInput",
    value: function validateInput(event) {
      var _fieldContainer$query;
      var Translator = (0,_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getTranslator)();
      var fieldContainer = event.currentTarget.closest(this.selectorField);
      var isRequired = fieldContainer.classList.contains('ibexa-field-edit--required');
      var label = (_fieldContainer$query = fieldContainer.querySelector(this.labelSelector)) === null || _fieldContainer$query === void 0 ? void 0 : _fieldContainer$query.innerHTML;
      var isEmpty = !this.richtextEditor.getData().length;
      var isError = isRequired && isEmpty;
      var result = {
        isError: isError
      };
      if (isError) {
        if (label) {
          result.errorMessage = ibexa.errors.emptyField.replace('{fieldName}', label);
        } else {
          result.errorMessage = Translator.trans(/*@Desc("This value should not be blank.")*/'error.required.field_not_blank', {}, 'forms');
        }
      }
      return result;
    }
  }]);
}(ibexa.BaseFieldValidator);
var initValidator = function initValidator(container, selectorField, selectorErrorNone, selectorInput, labelSelector, richtextEditor) {
  var validator = new RichTextValidator({
    classInvalid: 'is-invalid',
    fieldContainer: container.closest(selectorField),
    eventsMap: [{
      selector: '.ibexa-data-source__input.ibexa-input--textarea',
      eventName: 'input',
      callback: 'validateInput',
      errorNodeSelectors: [selectorErrorNone]
    }, {
      selector: selectorInput,
      eventName: 'blur',
      callback: 'validateInput',
      errorNodeSelectors: [selectorErrorNone]
    }],
    richtextEditor: richtextEditor,
    selectorField: selectorField,
    selectorInput: selectorInput,
    labelSelector: labelSelector
  });
  validator.init();
  return validator;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initValidator);

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

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js ***!
  \********************************************************************************************************************/
/***/ (() => {

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
(function (global, doc, ibexa, Translator) {
  var SELECTOR_FIELD_WRAPPER = '.ibexa-pb-block-embed-field';
  ibexa.BlockConfigEmbedFieldBase = /*#__PURE__*/function () {
    "use strict";

    function BlockConfigEmbedFieldBase() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, BlockConfigEmbedFieldBase);
      this.selectorPreview = config.selectorPreview || '.ibexa-pb-embed-meta__preview';
      this.selectorIcon = config.selectorIcon || '.ibexa-pb-embed-meta__preview-icon';
      this.selectorTitle = config.selectorTitle || '.ibexa-pb-embed-meta__title';
      this.selectorContentType = config.selectorContentType || '.ibexa-pb-embed-meta__content-type';
      this.selectorEmbedMeta = config.selectorEmbedMeta || '.ibexa-pb-embed-meta';
      this.previewFieldTypeIdentifier = config.previewFieldTypeIdentifier || 'ezimage';
      this.openUDWSelector = config.openUDWSelector || '[data-open-udw-embed]';
      this.openUDW = this.openUDW.bind(this);
    }

    /**
     * Gets placeholders nodes
     *
     * @method getPlaceholderNodes
     * @param {HTMLElement} container
     * @returns {Object}
     */
    return _createClass(BlockConfigEmbedFieldBase, [{
      key: "getPlaceholderNodes",
      value: function getPlaceholderNodes(container) {
        return {
          preview: container.querySelector(this.selectorPreview),
          previewIcon: container.querySelector(this.selectorIcon),
          title: container.querySelector(this.selectorTitle),
          contentType: container.querySelector(this.selectorContentType)
        };
      }

      /**
       * Clears the meta information
       *
       * @method clearMeta
       * @param {HTMLElement} btn
       * @param {HTMLElement} container
       */
    }, {
      key: "clearMeta",
      value: function clearMeta(btn, container) {
        doc.querySelector(btn.dataset.target).value = '';
        container.setAttribute('hidden', true);
        btn.removeAttribute('hidden');
      }

      /**
       * Gets the preview src
       *
       * @method getPreviewSrc
       * @param {Array} data list of Content objects
       * @returns {String}
       */
    }, {
      key: "getPreviewSrc",
      value: function getPreviewSrc(data) {
        var _versionData$ContentI,
          _this = this;
        var versionData = Array.isArray(data) ? data[0] || {} : {};
        var currentVersion = (_versionData$ContentI = versionData.ContentInfo) === null || _versionData$ContentI === void 0 || (_versionData$ContentI = _versionData$ContentI.Content) === null || _versionData$ContentI === void 0 ? void 0 : _versionData$ContentI.CurrentVersion;
        if (!currentVersion) {
          return '';
        }
        var version = currentVersion.Version;
        var imageField = version.Fields.field.find(function (field) {
          return field.fieldTypeIdentifier === _this.previewFieldTypeIdentifier;
        });
        return imageField && imageField.fieldValue ? imageField.fieldValue.uri : '';
      }

      /**
       * Gets the input value
       *
       * @method getInputValue
       * @param {Array} data list of Content objects
       * @returns {Number}
       */
    }, {
      key: "getInputValue",
      value: function getInputValue(data) {
        return data[0].ContentInfo.Content._id;
      }

      /**
       * Gets the content info
       *
       * @method getContentInfo
       * @param {Array} data list of Content objects
       * @returns {Object}
       */
    }, {
      key: "getContentInfo",
      value: function getContentInfo(data) {
        return data[0].ContentInfo.Content;
      }

      /**
       * Gets the location
       *
       * @method getLocation
       * @param {Array} data list of Content objects
       * @returns {Object}
       */
    }, {
      key: "getLocation",
      value: function getLocation(data) {
        return data[0];
      }

      /**
       * Updates the field value
       *
       * @method updateFieldValue
       * @param {HTMLElement} btn
       * @param {Array} items list of Content objects
       */
    }, {
      key: "updateFieldValue",
      value: function updateFieldValue(btn, items) {
        var metaContainer = btn.closest(SELECTOR_FIELD_WRAPPER).querySelector(this.selectorEmbedMeta);
        var location = this.getLocation(items);
        var contentInfo = this.getContentInfo(items);
        var previewSrc = this.getPreviewSrc(items);
        var inputValue = this.getInputValue(items);
        var _this$getPlaceholderN = this.getPlaceholderNodes(metaContainer),
          preview = _this$getPlaceholderN.preview,
          previewIcon = _this$getPlaceholderN.previewIcon,
          title = _this$getPlaceholderN.title,
          contentType = _this$getPlaceholderN.contentType;
        var contentTypeName = ibexa.helpers.contentType.getContentTypeName(contentInfo.ContentTypeInfo.identifier);
        var contentTypeIcon = ibexa.helpers.contentType.getContentTypeIconUrl(contentInfo.ContentTypeInfo.identifier);
        var contentName = ibexa.helpers.text.escapeHTML(contentInfo.TranslatedName);
        var ellipsisContent = contentType.querySelector('.ibexa-middle-ellipsis');
        doc.querySelector(btn.dataset.target).value = inputValue;
        title.innerHTML = contentName;
        ibexa.helpers.ellipsis.middle.update(ellipsisContent, contentTypeName);
        if (previewSrc) {
          preview.src = previewSrc;
          preview.removeAttribute('hidden');
          previewIcon.setAttribute('hidden', true);
        } else {
          preview.setAttribute('hidden', true);
          previewIcon.removeAttribute('hidden');
          previewIcon.querySelector('use').setAttribute('href', contentTypeIcon);
        }
        metaContainer.removeAttribute('hidden');
        btn.setAttribute('hidden', true);
        var embeddedItemActionsContainer = metaContainer.querySelector('.ibexa-embedded-item-actions');
        var embedMetaActionsNode = metaContainer.querySelector('.ibexa-pb-embed-meta__actions');
        var embeddedItemActionsTemplate = metaContainer.dataset.embeddedItemActionsTemplate;
        embeddedItemActionsContainer.remove();
        embedMetaActionsNode.insertAdjacentHTML('beforeend', embeddedItemActionsTemplate);
        var itemActionsMenuContainer = metaContainer.querySelector('.ibexa-embedded-item-actions .ibexa-multilevel-popup-menu');
        var itemActionsTriggerElement = metaContainer.querySelector('.ibexa-embedded-item-actions .ibexa-embedded-item-actions__menu-trigger-btn');
        var languageCodes = contentInfo.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language.map(function (language) {
          return language.languageCode;
        });
        title.dataset.ibexaUpdateContentId = contentInfo._id;
        title.dataset.ibexaUpdateSourceDataPath = 'Content.Name';
        doc.body.dispatchEvent(new CustomEvent('ibexa-embedded-item:create-dynamic-menu', {
          detail: {
            languageCodes: languageCodes,
            contentId: contentInfo._id,
            locationId: location.id,
            menuTriggerElement: itemActionsTriggerElement,
            menuContainer: itemActionsMenuContainer
          }
        }));
      }

      /**
       * Attaches event listener for remove button
       *
       * @method attachRemoveItemEvent
       * @param {HTMLElement} btn
       */
    }, {
      key: "attachRemoveItemEvent",
      value: function attachRemoveItemEvent(btn) {
        var metaContainer = btn.closest(SELECTOR_FIELD_WRAPPER).querySelector(this.selectorEmbedMeta);
        var removeBtn = metaContainer.querySelector('.ibexa-pb-embed-meta__action--remove');
        removeBtn.addEventListener('click', this.clearMeta.bind(this, btn, metaContainer), false);
      }
    }, {
      key: "attachChangeItemEvent",
      value: function attachChangeItemEvent(btn) {
        var metaContainer = btn.closest(SELECTOR_FIELD_WRAPPER).querySelector(this.selectorEmbedMeta);
        var changeBtn = metaContainer.querySelector('.ibexa-pb-embed-meta__action--change');
        changeBtn.addEventListener('click', function () {
          btn.click();
        }, false);
      }

      /**
       * Opens UDW
       *
       * @method openUDW
       * @param {Event} event
       */
    }, {
      key: "openUDW",
      value: function openUDW(event) {
        event.preventDefault();
        var currentTarget = event.currentTarget;
        var config = JSON.parse(currentTarget.dataset.udwConfig);
        var title = Translator.trans(/*@Desc("Browse content")*/'config_form.block_config.embed_field_base.udw.title', {}, 'ibexa_page_builder');
        var openUdwEvent = new CustomEvent('ibexa-open-udw', {
          detail: _objectSpread({
            title: title,
            multiple: false,
            onConfirm: this.updateFieldValue.bind(this, currentTarget)
          }, config)
        });
        doc.body.dispatchEvent(openUdwEvent);
      }

      /**
       * Initializes the embed field event handlers
       *
       * @method init
       */
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : doc;
        var openUdwBtns = _toConsumableArray(container.querySelectorAll(this.openUDWSelector));
        openUdwBtns.forEach(function (btn) {
          _this2.attachRemoveItemEvent(btn);
          _this2.attachChangeItemEvent(btn);
          btn.addEventListener('click', _this2.openUDW, false);
        });
      }
    }]);
  }();
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js ***!
  \*****************************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (doc, bootstrap, ibexa) {
  var validateIsEmptyField = ibexa.helpers.formValidation.validateIsEmptyField;
  var SELECTOR_INVALID = '.is-invalid';
  var SELECTOR_TAB = '.ibexa-pb-block-config__tab';
  var errorNodes = _toConsumableArray(doc.querySelectorAll(SELECTOR_INVALID));
  var configForm = doc.querySelector('form[name="block_configuration"]');
  var requiredInputs = configForm.querySelectorAll('[required="required"]');
  var validateInput = function validateInput(input) {
    var field = input.closest('.ibexa-field-edit, .form-group');
    return validateIsEmptyField(field);
  };
  errorNodes.forEach(function (errorNode, index) {
    var tab = errorNode.closest(SELECTOR_TAB);
    var navLinkId = tab.getAttribute('aria-labelledby');
    var navLink = doc.getElementById(navLinkId);
    var navItem = navLink.closest('.ibexa-tabs__tab');
    navItem.classList.add('ibexa-tabs__tab--error');
    if (!index) {
      var _doc$querySelector;
      bootstrap.Tab.getOrCreateInstance(navLink).show();
      (_doc$querySelector = doc.querySelector('.ibexa-tabs__tab--active')) === null || _doc$querySelector === void 0 || _doc$querySelector.classList.remove('ibexa-tabs__tab--active');
      navItem.classList.add('ibexa-tabs__tab--active');
    }
  });
  requiredInputs.forEach(function (requiredInput) {
    requiredInput.addEventListener('change', function (event) {
      return validateInput(event.target);
    }, false);
    requiredInput.addEventListener('blur', function (event) {
      return validateInput(event.target);
    }, false);
    requiredInput.addEventListener('input', function (event) {
      return validateInput(event.target);
    }, false);
  });
  configForm.addEventListener('submit', function (event) {
    var submitter = event.submitter;
    if (!(submitter !== null && submitter !== void 0 && submitter.hasAttribute('formnovalidate'))) {
      var currentRequiredInputs = configForm.querySelectorAll('[required="required"]');
      var isFormValid = _toConsumableArray(currentRequiredInputs).map(validateInput).every(function (_ref) {
        var isValid = _ref.isValid;
        return isValid;
      });
      if (!isFormValid) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }
  }, false);
})(window.document, window.bootstrap, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.navigation.js":
/*!**************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.navigation.js ***!
  \**************************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var SCROLL_POSITION_TO_FIT = 25;
  var MIN_HEIGHT_DIFF_FOR_FITTING_HEADER = 50;
  var CONFIG_PANEL_FOOTER_WITH_SCROLL = 'ibexa-pb-block-config__actions--slim';
  var CONFIG_PANEL_HEADER_WITH_SCROLL = 'ibexa-pb-block-config__header--slim';
  var ACTIVE_TAB_CLASS = 'ibexa-tabs__tab--active';
  var configPanelForm = doc.querySelector('.ibexa-pb-block-config');
  var observerConfig = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['class']
  };
  if (!configPanelForm) {
    return;
  }
  var configPanelBody = configPanelForm.querySelector('.ibexa-pb-block-config__body');
  var configPanelFooter = configPanelForm.querySelector('.ibexa-pb-block-config__actions');
  var configPanelHeader = configPanelForm.querySelector('.ibexa-pb-block-config__header');
  var tabs = _toConsumableArray(configPanelHeader.querySelectorAll('.ibexa-tabs__tab:not(.ibexa-tabs__tab--more)'));
  var onLoad = function onLoad() {
    fitFooter();
  };
  var fitFooter = function fitFooter() {
    var hasVerticalScrollbar = configPanelBody.scrollHeight > configPanelBody.clientHeight;
    toggleFooterScrollClass(hasVerticalScrollbar);
  };
  var fitHeader = function fitHeader(_ref) {
    var currentTarget = _ref.currentTarget;
    var configBodyHeightDiff = configPanelBody.scrollHeight - configPanelBody.clientHeight;
    var isScrollTop = currentTarget.scrollTop === 0;
    if (isScrollTop) {
      toggleHeaderScrollClass(!isScrollTop);
    }
    if (configBodyHeightDiff < MIN_HEIGHT_DIFF_FOR_FITTING_HEADER) {
      return;
    }
    var isScrolledDeep = currentTarget.scrollTop > SCROLL_POSITION_TO_FIT;
    toggleHeaderScrollClass(isScrolledDeep);
  };
  var toggleFooterScrollClass = function toggleFooterScrollClass(isScroll) {
    configPanelFooter.classList.toggle(CONFIG_PANEL_FOOTER_WITH_SCROLL, isScroll);
  };
  var toggleHeaderScrollClass = function toggleHeaderScrollClass(isScrolled) {
    configPanelHeader.classList.toggle(CONFIG_PANEL_HEADER_WITH_SCROLL, isScrolled);
  };
  var tabChange = function tabChange(mutationsList) {
    mutationsList.forEach(function (mutation) {
      var _mutation$oldValue;
      var isActive = mutation.target.classList.contains(ACTIVE_TAB_CLASS);
      var wasNotActive = !((_mutation$oldValue = mutation.oldValue) !== null && _mutation$oldValue !== void 0 && _mutation$oldValue.includes(ACTIVE_TAB_CLASS));
      if (isActive && wasNotActive) {
        var hasVerticalScrollbar = configPanelBody.scrollHeight > configPanelBody.clientHeight;
        if (hasVerticalScrollbar) {
          configPanelBody.scrollTo(0, 0);
        }
        toggleFooterScrollClass(hasVerticalScrollbar);
      }
    });
  };
  var observer = new MutationObserver(tabChange);
  global.addEventListener('load', onLoad, false);
  global.addEventListener('resize', fitFooter, false);
  configPanelBody === null || configPanelBody === void 0 || configPanelBody.addEventListener('scroll', fitHeader, false);
  tabs.forEach(function (tab) {
    observer.observe(tab, observerConfig);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js ***!
  \***********************************************************************************************************************/
/***/ (() => {

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
(function (global, doc, ibexa, Translator) {
  ibexa.BlockConfigScheduleFieldBase = /*#__PURE__*/function () {
    "use strict";

    function BlockConfigScheduleFieldBase() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, BlockConfigScheduleFieldBase);
      this.classLoading = config.classLoading || 'ibexa-pb-schedule--is-loading';
      this.selectorContainer = config.selectorContainer || '.ibexa-pb-schedule';
      this.selectorActiveList = config.selectorActiveList || '.ibexa-pb-schedule__active-items';
      this.selectorActiveItem = config.selectorActiveItem || '.ibexa-pb-schedule-active-item';
      this.selectorNoActiveItemsInfo = config.selectorNoActiveItemsInfo || '.ibexa-pb-schedule__no-active-items-info';
      this.selectorQueueList = config.selectorQueueList || '.ibexa-pb-schedule__queue-items';
      this.selectorQueueItem = config.selectorQueueItem || '.ibexa-pb-schedule-queue-item';
      this.selectorNoQueuedItemsInfo = config.selectorNoQueuedItemsInfo || '.ibexa-pb-schedule__no-queued-items-info';
      this.selectorDragPlaceholder = config.selectorDragPlaceholder || '.ibexa-pb-schedule-placeholder';
      this.selectorOpenUdwBtn = config.selectorOpenUdwBtn || '.ibexa-btn--select-content';
      this.selectorTrashBtn = config.selectorTrashBtn || '.ibexa-btn--trash';
      this.selectorChangeAirtimeBtn = config.selectorChangeAirtimeBtn || '.ibexa-btn--change-airtime';
      this.selectorEventsTextarea = config.selectorEventsTextarea || '#block_configuration_attributes_events_value';
      this.timeoutRemovePlaceholders = config.timeoutRemovePlaceholders || 500;
      this.classNoActiveItemsInfoHidden = config.classNoActiveItemsInfoHidden || 'ibexa-pb-schedule__no-active-items-info--hidden';
      this.classActiveItemUnavailable = config.classActiveItemUnavailable || 'ibexa-pb-schedule-active-item--is-unavailable';
      this.classNoQueuedItemsInfoHidden = config.classNoQueuedItemsInfoHidden || 'ibexa-pb-schedule__no-queued-items-info--hidden';
      this.classQueuedItemUnavailable = config.classQueuedItemUnavailable || 'ibexa-pb-schedule-queue-item--is-unavailable';
      this.classActiveItemDragDisabled = config.classActiveItemDragDisabled || 'ibexa-pb-schedule-active-item--drag-disabled';
      this.classDragPlaceholder = config.classDragPlaceholder || 'ibexa-pb-schedule-placeholder';
      this.draggedItem = null;
      this.onDragOverTimeout = null;
      this.onDragStartHandler = this.onDragStartHandler.bind(this);
      this.onDragEndHandler = this.onDragEndHandler.bind(this);
      this.renderItems = this.renderItems.bind(this);
      this.lastItemsListRequestNo = -1;
    }
    return _createClass(BlockConfigScheduleFieldBase, [{
      key: "getItemsList",
      value: function getItemsList(container, events) {
        var _this = this;
        var url = window.Routing.generate('ibexa.page.block.schedule_block.list_content');
        var model = JSON.parse(container.dataset.model);
        var blockValue = model.blockValue;
        var data = new FormData();
        this.lastItemsListRequestNo += 1;
        this.toggleLoadingScreen(container, true);
        blockValue.attributes = blockValue.attributes.map(function (attr) {
          if (attr.name === 'events') {
            attr.value = JSON.stringify(events);
          }
          return attr;
        });
        data.append('blockValue', JSON.stringify(blockValue));
        var request = new Request(url, {
          method: 'POST',
          body: data,
          mode: 'same-origin',
          credentials: 'same-origin'
        });
        var requestNo = this.lastItemsListRequestNo;
        fetch(request).then(function (response) {
          return response.json();
        }).then(function (json) {
          if (requestNo < _this.lastItemsListRequestNo) {
            return;
          }
          var _json$lists = json.lists,
            active = _json$lists.active,
            queue = _json$lists.queue;
          container.dataset.blockValue = JSON.stringify(json.blockValue);
          _this.renderItems(container, {
            active: active,
            queue: queue
          });
        });
      }
    }, {
      key: "addNewEvents",
      value: function addNewEvents(container, newEvents) {
        var eventsTextarea = container.querySelector(this.selectorEventsTextarea);
        var currentEvents = JSON.parse(eventsTextarea.value);
        var allEvents = [].concat(_toConsumableArray(currentEvents), _toConsumableArray(newEvents));
        eventsTextarea.value = JSON.stringify(allEvents);
        return allEvents;
      }
    }, {
      key: "toggleLoadingScreen",
      value: function toggleLoadingScreen(container, show) {
        container.classList.toggle(this.classLoading, show);
      }
    }, {
      key: "openUdw",
      value: function openUdw(container, event) {
        event.preventDefault();
        var currentTarget = event.currentTarget;
        var config = JSON.parse(currentTarget.dataset.udwConfig);
        var title = Translator.trans(/*@Desc("Select content")*/'config_form.widgets.schedule.udw.title', {}, 'ibexa_page_builder');
        var openUdwEvent = new CustomEvent('ibexa-open-udw', {
          detail: _objectSpread({
            title: title,
            multiple: true,
            onConfirm: this.confirmUdwHandler.bind(this, container)
          }, config)
        });
        doc.body.dispatchEvent(openUdwEvent);
      }
    }, {
      key: "openAirtimePopup",
      value: function openAirtimePopup(callback) {
        var airtime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getDefaultAirtime();
        var openAirtimePopupEvent = new CustomEvent('ibexa-open-airtime-popup', {
          detail: {
            airtime: airtime,
            onSubmit: callback
          }
        });
        doc.body.dispatchEvent(openAirtimePopupEvent);
      }
    }, {
      key: "confirmUdwHandler",
      value: function confirmUdwHandler(container, items) {
        this.openAirtimePopup(this.addItemsFromUDW.bind(this, container, items));
      }
    }, {
      key: "addItemsFromUDW",
      value: function addItemsFromUDW(container, itemsLocations, airtime) {
        var _this2 = this;
        var events = itemsLocations.map(function (itemLocation) {
          var itemData = {
            locationId: itemLocation.id
          };
          return _this2.createItemAddedEvent(itemData, airtime);
        });
        var allEvents = this.addNewEvents(container, events);
        this.getItemsList(container, allEvents);
      }

      /**
       *
       * @param {Number} dateTime
       * @returns {{id: String, dateTime: Number}}
       */
    }, {
      key: "getEventBasicParams",
      value: function getEventBasicParams(dateTime) {
        return {
          id: this.generateId('sbe-'),
          dateTime: dateTime
        };
      }

      /**
       * @returns {Number}
       */
    }, {
      key: "getDefaultAirtime",
      value: function getDefaultAirtime() {
        var now = new Date();
        now.setSeconds(0);
        return Math.floor(now.getTime() / 1000);
      }
    }, {
      key: "createEvent",
      value: function createEvent(additionalParams, type) {
        var airtime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getDefaultAirtime();
        var basicEventParams = this.getEventBasicParams(airtime);
        return _objectSpread(_objectSpread(_objectSpread({}, basicEventParams), additionalParams), {}, {
          type: type
        });
      }
    }, {
      key: "createItemAddedEvent",
      value: function createItemAddedEvent(_ref, additionDate) {
        var locationId = _ref.locationId;
        var newItemData = {
          id: this.generateId('sbi-'),
          additionDate: additionDate,
          location: {
            id: locationId
          }
        };
        return this.createEvent({
          item: newItemData
        }, 'itemAdded', additionDate);
      }
    }, {
      key: "createItemRemovedEvent",
      value: function createItemRemovedEvent(_ref2, dateTime) {
        var itemId = _ref2.itemId;
        return this.createEvent({
          itemId: itemId
        }, 'itemRemoved', dateTime);
      }
    }, {
      key: "createItemsReorderedEvent",
      value: function createItemsReorderedEvent(_ref3, dateTime) {
        var map = _ref3.map;
        return this.createEvent({
          map: map
        }, 'itemsReordered', dateTime);
      }
    }, {
      key: "createLimitChangedEvent",
      value: function createLimitChangedEvent(_ref4, dateTime) {
        var limit = _ref4.limit;
        return this.createEvent({
          limit: limit
        }, 'limitChanged', dateTime);
      }
    }, {
      key: "generateId",
      value: function generateId() {
        var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id-';
        return [prefix, this.makeIdPiece(), this.makeIdPiece(true), this.makeIdPiece(true), this.makeIdPiece()].join('');
      }
    }, {
      key: "makeIdPiece",
      value: function makeIdPiece(addDashes) {
        var piece = "".concat(Math.random().toString(16), "000000000").substr(2, 8);
        return addDashes ? "-".concat(piece.substr(0, 4), "-").concat(piece.substr(4, 4)) : piece;
      }
    }, {
      key: "onDragStartHandler",
      value: function onDragStartHandler(event) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.setData('text/html', event.currentTarget);
        setTimeout(function () {
          event.target.style.setProperty('display', 'none');
        }, 0);
        this.draggedItem = event.currentTarget;
        this.draggedItem.classList.add('ibexa-pb-schedule-queue-item--is-dragging-out');
      }
    }, {
      key: "onDragEndHandler",
      value: function onDragEndHandler() {
        this.draggedItem.style.removeProperty('display');
        this.draggedItem.classList.remove('ibexa-pb-schedule-queue-item--is-dragging-out');
      }
    }, {
      key: "hidePlaceholdersAfterTimeout",
      value: function hidePlaceholdersAfterTimeout(container) {
        var _this3 = this;
        global.clearTimeout(this.onDragOverTimeout);
        this.onDragOverTimeout = global.setTimeout(function () {
          return _this3.removeDragPlaceholder(container);
        }, this.timeoutRemovePlaceholders);
      }
    }, {
      key: "attachEventsToDraggableItems",
      value: function attachEventsToDraggableItems(container, item) {
        item.ondragstart = this.onDragStartHandler;
        item.ondragend = this.onDragEndHandler;
        item.ondrag = this.hidePlaceholdersAfterTimeout.bind(this, container);
      }
    }, {
      key: "attachEventsToActiveListBtns",
      value: function attachEventsToActiveListBtns(container, item) {
        item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, false), false);
        item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
      }
    }, {
      key: "attachEventsToQueueListBtns",
      value: function attachEventsToQueueListBtns(container, item) {
        item.querySelector(this.selectorTrashBtn).addEventListener('click', this.removeListItem.bind(this, container, true), false);
        item.querySelector(this.selectorChangeAirtimeBtn).addEventListener('click', this.updateAirtime.bind(this, container), false);
      }
    }, {
      key: "attachEventsToLimitInput",
      value: function attachEventsToLimitInput(container) {
        var limitInput = container.querySelector('#block_configuration_attributes_limit_value');
        limitInput.addEventListener('change', this.onLimitChanged.bind(this, container), false);
      }
    }, {
      key: "updateAirtime",
      value: function updateAirtime(container, event) {
        event.preventDefault();
        var itemNode = event.target.closest('[data-airtime]');
        var isUnavailable = itemNode.classList.contains(this.classActiveItemUnavailable) || itemNode.classList.contains(this.classQueuedItemUnavailable);
        if (isUnavailable) {
          return;
        }
        var airtime = itemNode.dataset.airtime;
        this.openAirtimePopup(this.setAirtime.bind(this, container, event), airtime);
        ibexa.helpers.tooltips.hideAll(itemNode);
      }
    }, {
      key: "setAirtime",
      value: function setAirtime(container, event, airtime) {
        var itemNode = event.target.closest('[data-item-id]');
        var _itemNode$dataset = itemNode.dataset,
          locationId = _itemNode$dataset.locationId,
          itemId = _itemNode$dataset.itemId;
        var oldAirtime = itemNode.dataset.airtime;
        var isItemInQueue = itemNode.classList.contains('ibexa-pb-schedule-queue-item');
        var removedAirtime = isItemInQueue ? oldAirtime : this.getDefaultAirtime();
        var eventRemoved = this.createItemRemovedEvent({
          itemId: itemId
        }, removedAirtime);
        var eventAdded = this.createItemAddedEvent({
          locationId: locationId
        }, airtime);
        var allEvents = this.addNewEvents(container, [eventRemoved, eventAdded]);
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "removeListItem",
      value: function removeListItem(container, isQueueList, event) {
        event.preventDefault();
        var listElementNode = event.currentTarget.closest('[data-item-id]');
        var _listElementNode$data = listElementNode.dataset,
          itemId = _listElementNode$data.itemId,
          airtime = _listElementNode$data.airtime;
        var scheduleEvent = isQueueList ? this.createItemRemovedEvent({
          itemId: itemId
        }, airtime) : this.createItemRemovedEvent({
          itemId: itemId
        });
        var allEvents = this.addNewEvents(container, [scheduleEvent]);
        ibexa.helpers.tooltips.hideAll(listElementNode);
        listElementNode.remove();
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "removeDragPlaceholder",
      value: function removeDragPlaceholder(container) {
        var placeholder = container.querySelector(this.selectorDragPlaceholder);
        if (placeholder) {
          placeholder.remove();
        }
      }
    }, {
      key: "addPlaceholder",
      value: function addPlaceholder(container, element, positionY) {
        var rect = element.getBoundingClientRect();
        var middlePositionY = rect.top + rect.height / 2;
        var where = positionY <= middlePositionY ? element : element.nextSibling;
        this.addPlaceholderAfter(container, where);
      }
    }, {
      key: "addPlaceholderAfter",
      value: function addPlaceholderAfter(container, element) {
        var isDragPlaceholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var wrapper = doc.createElement('div');
        var list = container.querySelector(this.selectorActiveList);
        wrapper.insertAdjacentHTML('beforeend', list.dataset.placeholder);
        var placeholder = wrapper.querySelector(this.selectorDragPlaceholder);
        placeholder.classList.toggle(this.classDragPlaceholder, isDragPlaceholder);
        list.insertBefore(placeholder, element);
      }
    }, {
      key: "onDragOverHandler",
      value: function onDragOverHandler(container, event) {
        var listItem = event.target.closest("".concat(this.selectorActiveItem, ":not(").concat(this.selectorDragPlaceholder, ")"));
        if (!listItem) {
          return false;
        }
        this.removeDragPlaceholder(container);
        this.addPlaceholder(container, listItem, event.clientY);
      }

      /**
       *
       * @param {HTMLElement} container
       */
    }, {
      key: "onDropHandler",
      value: function onDropHandler(container) {
        var list = container.querySelector(this.selectorActiveList);
        list.insertBefore(this.draggedItem, list.querySelector(this.selectorDragPlaceholder));
        this.removeDragPlaceholder(container);
        this.onItemsReordered(container, list);
      }

      /**
       *
       * @param {HTMLElement} container
       * @param {HTMLElement} list
       */
    }, {
      key: "onItemsReordered",
      value: function onItemsReordered(container, list) {
        var elementsNodes = list.querySelectorAll('.ibexa-pb-schedule-active-item');
        var newOrderIdsMap = _toConsumableArray(elementsNodes).map(function (elementNode) {
          return elementNode.dataset.itemId;
        });
        var reorderEvent = this.createItemsReorderedEvent({
          map: newOrderIdsMap
        });
        var allEvents = this.addNewEvents(container, [reorderEvent]);
        this.getItemsList(container, allEvents);
      }

      /**
       *
       * @param {HTMLElement} container
       * @param {Event} event
       */
    }, {
      key: "onLimitChanged",
      value: function onLimitChanged(container, event) {
        var inputElement = event.target;
        var newLimit = inputElement.value;
        var limitChangeEvent = this.createLimitChangedEvent({
          limit: newLimit
        });
        var allEvents = this.addNewEvents(container, [limitChangeEvent]);
        this.getItemsList(container, allEvents);
      }
    }, {
      key: "renderActiveItem",
      value: function renderActiveItem(container, item) {
        var escapeHTML = ibexa.helpers.text.escapeHTML;
        var list = container.querySelector(this.selectorActiveList);
        var template = list.dataset.activeItemTemplate;
        var isUnavailable = item.location.unavailable;
        var additionalClasses = isUnavailable ? this.classActiveItemUnavailable : '';
        var contentName = escapeHTML(item.location.contentInfo.name);
        var contentId = escapeHTML(item.location.contentInfo.id);
        var itemId = escapeHTML(item.id);
        var locationId = escapeHTML(item.location.id);
        var additionDate = escapeHTML(item.additionDate);
        var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ item_id }}', itemId).replace('{{ location_id }}', locationId).replace('{{ airtime }}', additionDate).replace('{{ additional_classes }}', additionalClasses);
        var wrapper = doc.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', renderedItem);
        var listItem = wrapper.querySelector(this.selectorActiveItem);
        var listItemLabelNode = listItem.querySelector('.ibexa-pb-schedule-active-item__label');
        var itemActionsMenuContainer = listItem.querySelector('.ibexa-embedded-item-actions__menu');
        var itemActionsTriggerElement = listItem.querySelector('.ibexa-embedded-item-actions__menu-trigger-btn');
        listItemLabelNode.dataset.ibexaUpdateContentId = contentId;
        listItemLabelNode.dataset.ibexaUpdateSourceDataPath = 'Content.Name';
        list.append(listItem);
        doc.body.dispatchEvent(new CustomEvent('ibexa-embedded-item:create-dynamic-menu', {
          detail: {
            contentId: contentId,
            locationId: locationId,
            menuTriggerElement: itemActionsTriggerElement,
            menuContainer: itemActionsMenuContainer
          }
        }));
      }
    }, {
      key: "renderQueueItem",
      value: function renderQueueItem(container, item) {
        var formatFullDateTime = ibexa.helpers.timezone.formatFullDateTime;
        var escapeHTML = ibexa.helpers.text.escapeHTML;
        var formatedAdditionDate = formatFullDateTime(item.additionDate * 1000);
        var list = container.querySelector(this.selectorQueueList);
        var isUnavailable = item.location.unavailable;
        var additionalClasses = isUnavailable ? this.classQueuedItemUnavailable : '';
        var template = list.dataset.queueTemplate;
        var contentName = escapeHTML(item.location.contentInfo.name);
        var contentId = escapeHTML(item.location.contentInfo.id);
        var itemId = escapeHTML(item.id);
        var locationId = escapeHTML(item.location.id);
        var additionDate = escapeHTML(item.additionDate);
        var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ item_id }}', itemId).replace('{{ location_id }}', locationId).replace('{{ airtime }}', additionDate).replace('{{ airtime_formatted }}', formatedAdditionDate).replace('{{ additional_classes }}', additionalClasses);
        var wrapper = doc.createElement('div');
        wrapper.insertAdjacentHTML('beforeend', renderedItem);
        var listItem = wrapper.querySelector(this.selectorQueueItem);
        var listItemLabelNode = listItem.querySelector('.ibexa-pb-schedule-queue-item__label-title');
        var itemActionsMenuContainer = listItem.querySelector('.ibexa-embedded-item-actions__menu');
        var itemActionsTriggerElement = listItem.querySelector('.ibexa-embedded-item-actions__menu-trigger-btn');
        listItemLabelNode.dataset.ibexaUpdateContentId = contentId;
        listItemLabelNode.dataset.ibexaUpdateSourceDataPath = 'Content.Name';
        list.append(listItem);
        doc.body.dispatchEvent(new CustomEvent('ibexa-embedded-item:create-dynamic-menu', {
          detail: {
            contentId: contentId,
            locationId: locationId,
            menuTriggerElement: itemActionsTriggerElement,
            menuContainer: itemActionsMenuContainer
          }
        }));
      }
    }, {
      key: "removeNodeChildren",
      value: function removeNodeChildren(node) {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
      }
    }, {
      key: "clearItems",
      value: function clearItems(container) {
        var activeList = container.querySelector(this.selectorActiveList);
        var queueList = container.querySelector(this.selectorQueueList);
        this.removeNodeChildren(activeList);
        this.removeNodeChildren(queueList);
      }
    }, {
      key: "manageNoItemsLabels",
      value: function manageNoItemsLabels(container, _ref5) {
        var activeItems = _ref5.activeItems,
          queuedItems = _ref5.queuedItems;
        var noActiveItems = !activeItems.length;
        var noQueuedItems = !queuedItems.length;
        container.querySelector(this.selectorNoActiveItemsInfo).classList.toggle(this.classNoActiveItemsInfoHidden, !noActiveItems);
        container.querySelector(this.selectorNoQueuedItemsInfo).classList.toggle(this.classNoQueuedItemsInfoHidden, !noQueuedItems);
      }
    }, {
      key: "renderItems",
      value: function renderItems(container, _ref6) {
        var active = _ref6.active,
          queue = _ref6.queue;
        this.clearItems(container);
        this.manageNoItemsLabels(container, {
          activeItems: active,
          queuedItems: queue
        });
        active.forEach(this.renderActiveItem.bind(this, container));
        queue.forEach(this.renderQueueItem.bind(this, container));
        this.attachEventsToLists(container);
        this.toggleLoadingScreen(container, false);
        ibexa.helpers.tooltips.parse(container);
      }
    }, {
      key: "disableDragOnActiveList",
      value: function disableDragOnActiveList(container) {
        var _this4 = this;
        var activeItems = container.querySelectorAll(this.selectorActiveItem);
        activeItems.forEach(function (activeItem) {
          activeItem.classList.add(_this4.classActiveItemDragDisabled);
        });
      }
    }, {
      key: "attachEventsToLists",
      value: function attachEventsToLists(container) {
        var activeList = container.querySelector(this.selectorActiveList);
        var activeListItems = activeList.querySelectorAll(this.selectorActiveItem);
        var queueListItems = container.querySelectorAll(this.selectorQueueItem);
        if (activeListItems.length > 1) {
          activeList.ondragover = this.onDragOverHandler.bind(this, container);
          activeListItems.forEach(this.attachEventsToDraggableItems.bind(this, container));
        } else {
          activeList.ondragover = null;
          this.disableDragOnActiveList(container);
        }
        activeList.ondrop = this.onDropHandler.bind(this, container);
        activeListItems.forEach(this.attachEventsToActiveListBtns.bind(this, container));
        queueListItems.forEach(this.attachEventsToQueueListBtns.bind(this, container));
      }

      /**
       * Initializes the schedule field event handlers
       *
       * @method init
       */
    }, {
      key: "init",
      value: function init() {
        var _this5 = this;
        var containers = doc.querySelectorAll(this.selectorContainer);
        containers.forEach(function (container) {
          var openUdwBtn = container.querySelector(_this5.selectorOpenUdwBtn);
          var model = JSON.parse(container.dataset.model);
          _this5.attachEventsToLists(container);
          _this5.attachEventsToLimitInput(container);
          _this5.renderItems(container, {
            active: model.lists.active,
            queue: model.lists.queue
          });
          openUdwBtn.addEventListener('click', _this5.openUdw.bind(_this5, container), false);
        });
      }
    }]);
  }();
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/context.helper.js");
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/helpers/timezone.helper.js");


(function (global, doc, ibexa) {
  var SELECTOR_REVEAL = '.ibexa-pb-reveal-hide-date-time__reveal';
  var SELECTOR_HIDE = '.ibexa-pb-reveal-hide-date-time__hide';
  var SELECTOR_PICKER = '.ibexa-picker';
  var SELECTOR_PICKER_FORM_INPUT = '.ibexa-picker__form-input';
  var containerReveal = doc.querySelector(SELECTOR_REVEAL);
  var containerHide = doc.querySelector(SELECTOR_HIDE);
  if (!containerReveal || !containerHide) {
    return;
  }
  var pickerComponentReveal = containerReveal.querySelector('#block_configuration_since_custom_date').closest(SELECTOR_PICKER);
  var pickerComponentHide = containerHide.querySelector('#block_configuration_till_custom_date').closest(SELECTOR_PICKER);
  var getNowAccurateToMinutes = function getNowAccurateToMinutes() {
    var now = new Date();
    now.setSeconds(0);
    var userTimezone = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_context_helper__WEBPACK_IMPORTED_MODULE_0__.getAdminUiConfig)().timezone;
    var dateWithUserTimezone = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_1__.convertDateToTimezone)(now, userTimezone);
    var localTimezone = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_1__.getBrowserTimezone)();
    var convertedDate = (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_helpers_timezone_helper__WEBPACK_IMPORTED_MODULE_1__.convertDateToTimezone)(dateWithUserTimezone, localTimezone, true).format();
    return convertedDate;
  };
  var getPickerSelectedDate = function getPickerSelectedDate(pickerComponent) {
    var pickerHiddenInput = pickerComponent.querySelector(SELECTOR_PICKER_FORM_INPUT);
    var inputValue = pickerHiddenInput.value;
    return inputValue ? new Date(inputValue * 1000) : null;
  };
  var getPickerFlatpickrInstance = function getPickerFlatpickrInstance(pickerComponent) {
    var pickerWidget = ibexa.helpers.objectInstances.getInstance(pickerComponent);
    return pickerWidget.flatpickrInstance;
  };
  var setPickerDate = function setPickerDate(pickerContainer, date) {
    var pickerInstance = getPickerFlatpickrInstance(pickerContainer);
    pickerInstance.setDate(date, true);
  };
  var setPickerMinDate = function setPickerMinDate(pickerContainer, minDate) {
    var pickerInstance = getPickerFlatpickrInstance(pickerContainer);
    pickerInstance.set('minDate', minDate);
  };
  var toggleCustomDateInput = function toggleCustomDateInput(customDateInput, disabled) {
    customDateInput.hidden = disabled;
  };
  var isRadioButton = function isRadioButton(eventTarget) {
    return eventTarget.type === 'radio';
  };
  var setNeverHideState = function setNeverHideState() {
    var neverOptionRadioButton = containerHide.querySelector('input[type=radio][value=never]');
    neverOptionRadioButton.checked = true;
    toggleCustomDateInput(pickerComponentHide, true);
  };
  var onRevealOptionChange = function onRevealOptionChange(_ref) {
    var target = _ref.target;
    if (!isRadioButton(target)) {
      return;
    }
    var customDateOptionSelected = target.value === 'custom_date';
    var nowAccurateToMinutes = getNowAccurateToMinutes();
    if (customDateOptionSelected) {
      setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
      setPickerDate(pickerComponentReveal, nowAccurateToMinutes);
      setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
    } else {
      var hideDate = getPickerSelectedDate(pickerComponentHide);
      if (hideDate && hideDate < nowAccurateToMinutes) {
        setNeverHideState();
      } else {
        setPickerMinDate(pickerComponentHide, nowAccurateToMinutes);
      }
    }
    toggleCustomDateInput(pickerComponentReveal, !customDateOptionSelected);
  };
  var onHideOptionChange = function onHideOptionChange(_ref2) {
    var target = _ref2.target;
    if (!isRadioButton(target)) {
      return;
    }
    var customDateOptionSelected = target.value === 'custom_date';
    if (customDateOptionSelected) {
      var _revealDate = getPickerSelectedDate(pickerComponentReveal);
      var _nowAccurateToMinutes = getNowAccurateToMinutes();
      var newMinHideDate = _revealDate < _nowAccurateToMinutes ? _nowAccurateToMinutes : _revealDate;
      setPickerMinDate(pickerComponentHide, newMinHideDate);
      setPickerDate(pickerComponentHide, newMinHideDate);
    }
    toggleCustomDateInput(pickerComponentHide, !customDateOptionSelected);
  };
  var onRevealCustomDateChange = function onRevealCustomDateChange(newDates) {
    if (!newDates.length) {
      return;
    }
    var newRevealDate = new Date(newDates[0]);
    var hideDate = getPickerSelectedDate(pickerComponentHide);
    var clearHideDate = newRevealDate > hideDate;
    setPickerMinDate(pickerComponentHide, newRevealDate);
    if (clearHideDate) {
      // flatpickr ignores minDate when only time has changed:
      // https://github.com/flatpickr/flatpickr/issues/591
      setPickerDate(pickerComponentHide, null);
    }
  };
  var flatpickrInstanceReveal = getPickerFlatpickrInstance(pickerComponentReveal);
  var isCustomDateSelectedReveal = containerReveal.querySelector('input[type=radio][value=custom_date]').checked;
  var isCustomDateSelectedHide = containerHide.querySelector('input[type=radio][value=custom_date]').checked;
  var revealDate = getPickerSelectedDate(pickerComponentReveal);
  var nowAccurateToMinutes = getNowAccurateToMinutes();
  flatpickrInstanceReveal.config.onChange.push(onRevealCustomDateChange);
  toggleCustomDateInput(pickerComponentReveal, !isCustomDateSelectedReveal);
  toggleCustomDateInput(pickerComponentHide, !isCustomDateSelectedHide);
  setPickerMinDate(pickerComponentReveal, nowAccurateToMinutes);
  setPickerMinDate(pickerComponentHide, revealDate);
  containerReveal.addEventListener('click', onRevealOptionChange, false);
  containerHide.addEventListener('click', onHideOptionChange, false);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/block.config.attributes.group.js":
/*!***************************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/block.config.attributes.group.js ***!
  \***************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var addNewGroupBtns = doc.querySelectorAll('.ibexa-btn--add-new-group');
  var removeGroupsBtns = doc.querySelectorAll('.ibexa-btn--remove-groups');
  var attributesGroups = doc.querySelectorAll('.ibexa-collapse--attributes-group');
  var removeGroup = function removeGroup(_ref) {
    var currentTarget = _ref.currentTarget;
    currentTarget.closest('.ibexa-collapse--attributes-group').remove();
  };
  var removeCheckedGroups = function removeCheckedGroups(event) {
    var selectedGroupCheckboxes = event.currentTarget.closest('.ibexa-block-attributes-group-wrapper').querySelectorAll('.ibexa-collapse--attributes-group .ibexa-collapse__header .ibexa-input--checkbox:checked');
    selectedGroupCheckboxes.forEach(function (selectedGroupCheckbox) {
      return selectedGroupCheckbox.closest('.ibexa-collapse--attributes-group').remove();
    });
    updateRemoveGroupsBtnState(event);
  };
  var updateRemoveGroupsBtnState = function updateRemoveGroupsBtnState(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var container = currentTarget.closest('.ibexa-block-attributes-group-wrapper');
    var selectedGroupCheckboxes = container.querySelectorAll('.ibexa-collapse--attributes-group .ibexa-input--checkbox:checked');
    var removeGroupsBtn = container.querySelector('.ibexa-btn--remove-groups');
    removeGroupsBtn.disabled = selectedGroupCheckboxes.length === 0;
  };
  addNewGroupBtns.forEach(function (addNewGroupBtn) {
    addNewGroupBtn.addEventListener('click', function (_ref3) {
      var currentTarget = _ref3.currentTarget;
      var groupsContainer = currentTarget.closest('.ibexa-block-attributes-group-wrapper').querySelector('.ibexa-block-attributes-group-wrapper__container');
      var nextGroupIndex = groupsContainer.dataset.nextGroupIndex;
      var template = groupsContainer.dataset.prototype.replaceAll('__name__', nextGroupIndex);
      var wrapper = doc.createElement('div');
      wrapper.insertAdjacentHTML('beforeend', template);
      var group = wrapper.querySelector('.ibexa-collapse--attributes-group');
      group.querySelector('.ibexa-btn--remove-group').addEventListener('click', removeGroup, false);
      group.querySelector('.ibexa-input--checkbox').addEventListener('change', updateRemoveGroupsBtnState, false);
      groupsContainer.append(group);
      groupsContainer.dataset.nextGroupIndex = parseInt(nextGroupIndex, 10) + 1;
      doc.body.dispatchEvent(new CustomEvent('ibexa-attributes-group-added', {
        detail: {
          container: group
        }
      }));
      doc.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
    }, false);
  });
  removeGroupsBtns.forEach(function (removeGroupsBtn) {
    removeGroupsBtn.addEventListener('click', removeCheckedGroups, false);
  });
  attributesGroups.forEach(function (attributesGroup) {
    var _attributesGroup$quer;
    var removeGroupBtn = attributesGroup.querySelector('.ibexa-btn--remove-group');
    if (removeGroupBtn) {
      removeGroupBtn.addEventListener('click', removeGroup, false);
    }
    (_attributesGroup$quer = attributesGroup.querySelector('.ibexa-input--checkbox')) === null || _attributesGroup$quer === void 0 || _attributesGroup$quer.addEventListener('change', updateRemoveGroupsBtnState, false);
  });
})(window, document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (doc) {
  var SELECTOR_CHECKBOX = '.ibexa-pb-block-checkbox-field__item input[type="checkbox"]';
  var SELECTOR_LABEL = '.ibexa-pb-block-checkbox-field__label';
  var CLASS_IS_CHECKED = 'is-checked';
  var checkboxes = doc.querySelectorAll(SELECTOR_CHECKBOX);
  var updateCheckboxState = function updateCheckboxState(_ref) {
    var currentTarget = _ref.currentTarget;
    currentTarget.closest(SELECTOR_LABEL).classList.toggle(CLASS_IS_CHECKED, currentTarget.checked);
  };
  var attachEvents = function attachEvents(checkbox) {
    return checkbox.addEventListener('change', updateCheckboxState, false);
  };
  checkboxes.forEach(attachEvents);
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref2) {
    var detail = _ref2.detail;
    var addedCheckboxes = detail.container.querySelectorAll(SELECTOR_CHECKBOX);
    addedCheckboxes.forEach(attachEvents);
  }, false);
})(window.document);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js ***!
  \****************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator) {
  var _this = this;
  var SELECTOR_COLLECTION = '.ibexa-pb-collection';
  var SELECTOR_COLLECTION_ITEMS = '.ibexa-pb-collection__items';
  var SELECTOR_ITEM = '.ibexa-pb-collection-item';
  var SELECTOR_UDW_BTN = '.ibexa-btn--select-content';
  var SELECTOR_BLOCK_CONFIGURATION_VIEW_SELECT = '.ibexa-block-configuration-view-select';
  var collections = doc.querySelectorAll(SELECTOR_COLLECTION);
  var openUdw = function openUdw(itemsContainer, openUdwBtn, draggable, event) {
    event.preventDefault();
    var currentTarget = event.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var selectedView = doc.querySelector(SELECTOR_BLOCK_CONFIGURATION_VIEW_SELECT).value;
    var matchConfig = JSON.parse(doc.querySelector("#".concat(currentTarget.dataset.target)).dataset.match);
    var configForView = Object.assign(config, {
      cotfAllowedContentTypes: matchConfig[selectedView]
    });
    var title = Translator.trans(/*@Desc("Select content")*/'config_form.widgets.collection.udw.title', {}, 'ibexa_page_builder');
    var selectedLocations = _toConsumableArray(itemsContainer.querySelectorAll(SELECTOR_ITEM)).map(function (item) {
      return item.dataset.id;
    });
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        title: title,
        multiple: true,
        onConfirm: addItems.bind(_this, itemsContainer, openUdwBtn, draggable),
        selectedLocations: selectedLocations
      }, configForView)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  var updateInputValue = function updateInputValue(itemsContainer, openUdwBtn) {
    var items = _toConsumableArray(itemsContainer.querySelectorAll(SELECTOR_ITEM));
    var input = doc.querySelector("#".concat(openUdwBtn.dataset.target));
    input.value = _toConsumableArray(items.map(function (item) {
      return item.dataset.id;
    })).join();
  };
  var attachEventsToSelectedItem = function attachEventsToSelectedItem(itemsContainer, openUdwBtn, item) {
    return item.querySelector('.ibexa-btn--trash').addEventListener('click', removeItem.bind(_this, itemsContainer, openUdwBtn), false);
  };
  var addItems = function addItems(itemsContainer, openUdwBtn, draggable, items) {
    var fragment = doc.createDocumentFragment();
    var template = itemsContainer.dataset.template;
    items.forEach(function (item) {
      var escapeHTML = ibexa.helpers.text.escapeHTML;
      var contentTypeName = ibexa.helpers.contentType.getContentTypeName(item.ContentInfo.Content.ContentTypeInfo.identifier);
      var contentName = escapeHTML(item.ContentInfo.Content.TranslatedName);
      var contentId = escapeHTML(item.ContentInfo.Content._id);
      var languageCodes = item.ContentInfo.Content.CurrentVersion.Version.VersionInfo.VersionTranslationInfo.Language.map(function (language) {
        return language.languageCode;
      });
      var itemId = escapeHTML(item.id);
      var container = doc.createElement('div');
      var renderedItem = template.replace('{{ content_name }}', contentName).replace('{{ content_type_name }}', contentTypeName).replace('{{ id }}', itemId);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var listItem = container.querySelector(SELECTOR_ITEM);
      fragment.append(listItem);
      var itemLabelNameNode = listItem.querySelector('.ibexa-pb-collection-item__label-name');
      var itemActionsMenuContainer = listItem.querySelector('.ibexa-embedded-item-actions__menu');
      var itemActionsTriggerElement = listItem.querySelector('.ibexa-embedded-item-actions__menu-trigger-btn');
      itemLabelNameNode.dataset.ibexaUpdateContentId = contentId;
      itemLabelNameNode.dataset.ibexaUpdateSourceDataPath = 'Content.Name';
      doc.body.dispatchEvent(new CustomEvent('ibexa-embedded-item:create-dynamic-menu', {
        detail: {
          contentId: contentId,
          languageCodes: languageCodes,
          locationId: itemId,
          menuTriggerElement: itemActionsTriggerElement,
          menuContainer: itemActionsMenuContainer
        }
      }));
    });
    itemsContainer.innerHTML = '';
    itemsContainer.append(fragment);
    updateInputValue(itemsContainer, openUdwBtn);
    draggable.reinit();
    ibexa.helpers.tooltips.parse(itemsContainer);
  };
  var removeItem = function removeItem(itemsContainer, openUdwBtn, event) {
    event.preventDefault();
    var item = event.currentTarget.closest(SELECTOR_ITEM);
    item.dispatchEvent(new CustomEvent('ibexa-drag-and-drop:start-removing'));
    item.dispatchEvent(new CustomEvent('ibexa-drag-and-drop:end-removing', {
      detail: {
        callback: function callback() {
          updateInputValue(itemsContainer, openUdwBtn);
        }
      }
    }));
  };
  var initCollection = function initCollection(collection) {
    var itemsContainer = collection.querySelector(SELECTOR_COLLECTION_ITEMS);
    var openUdwBtn = collection.querySelector(SELECTOR_UDW_BTN);
    var draggable = new CollectionDraggable({
      itemsContainer: itemsContainer,
      openUdwBtn: openUdwBtn,
      selectorItem: SELECTOR_ITEM,
      selectorPlaceholder: '.ibexa-pb-collection-placeholder'
    });
    draggable.init();
    openUdwBtn.addEventListener('click', openUdw.bind(_this, itemsContainer, openUdwBtn, draggable), false);
  };
  var CollectionDraggable = /*#__PURE__*/function (_global$ibexa$core$Dr) {
    "use strict";

    function CollectionDraggable(config) {
      var _this2;
      _classCallCheck(this, CollectionDraggable);
      _this2 = _callSuper(this, CollectionDraggable, [config]);
      _this2.openUdwBtn = config.openUdwBtn;
      return _this2;
    }
    _inherits(CollectionDraggable, _global$ibexa$core$Dr);
    return _createClass(CollectionDraggable, [{
      key: "attachEventHandlersToItem",
      value: function attachEventHandlersToItem(item) {
        _superPropGet(CollectionDraggable, "attachEventHandlersToItem", this, 3)([item]);
        attachEventsToSelectedItem(this.itemsContainer, this.openUdwBtn, item);
      }
    }, {
      key: "onDrop",
      value: function onDrop() {
        _superPropGet(CollectionDraggable, "onDrop", this, 3)([]);
        updateInputValue(this.itemsContainer, this.openUdwBtn);
      }
    }]);
  }(global.ibexa.core.Draggable);
  collections.forEach(initCollection);
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    var addedCollections = detail.container.querySelectorAll(SELECTOR_COLLECTION);
    addedCollections.forEach(initCollection);
  }, false);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/dropdown.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/dropdown.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (doc, ibexa) {
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    var dropdowns = detail.container.querySelectorAll('.ibexa-dropdown:not(.ibexa-dropdown--custom-init)');
    dropdowns.forEach(function (dropdownContainer) {
      var dropdown = new ibexa.core.Dropdown({
        container: dropdownContainer
      });
      dropdown.init();
    });
  }, false);
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (doc, ibexa) {
  var BlockConfigEmbedFieldBase = ibexa.BlockConfigEmbedFieldBase;
  var embed = new BlockConfigEmbedFieldBase();
  embed.init();
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    embed.init(detail.container);
  }, false);
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_fieldType_validator_richtext_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/fieldType/validator/richtext-validator */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/fieldType/validator/richtext-validator.js");

(function (global, doc, ibexa) {
  var SELECTOR_FIELD = '.ibexa-field-edit';
  var SELECTOR_INPUT = '.ibexa-data-source__richtext';
  var SELECTOR_LABEL = '.ibexa-label';
  var SELECTOR_ERROR_NODE = '.ibexa-form-error';
  var TOP_OFFSET = 59;
  var openUdw = function openUdw(config) {
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: config
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  ibexa.addConfig('richText.alloyEditor.callbacks.selectContent', openUdw, true);
  var containers = doc.querySelectorAll('.ibexa-data-source__richtext');
  containers.forEach(function (container) {
    var richtextEditor = new ibexa.BaseRichText({
      viewportTopOffset: TOP_OFFSET
    });
    richtextEditor.init(container);
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_fieldType_validator_richtext_validator__WEBPACK_IMPORTED_MODULE_0__["default"])(container, SELECTOR_FIELD, SELECTOR_ERROR_NODE, SELECTOR_INPUT, SELECTOR_LABEL, richtextEditor);
  });
  doc.body.addEventListener('ibexa-attributes-group-added', function (_ref) {
    var detail = _ref.detail;
    var addedRichtextContainer = detail.container.querySelector('.ibexa-data-source__richtext');
    if (!addedRichtextContainer) {
      return;
    }
    var richtextEditor = new ibexa.BaseRichText();
    richtextEditor.init(addedRichtextContainer);
    (0,_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_fieldType_validator_richtext_validator__WEBPACK_IMPORTED_MODULE_0__["default"])(addedRichtextContainer, SELECTOR_FIELD, SELECTOR_ERROR_NODE, SELECTOR_INPUT, SELECTOR_LABEL, richtextEditor);
  }, false);
})(window, document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var BlockConfigScheduleFieldBase = ibexa.BlockConfigScheduleFieldBase;
  var scheduleField = new BlockConfigScheduleFieldBase();
  scheduleField.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (doc, ibexa) {
  var BlockConfigEmbedFieldBase = ibexa.BlockConfigEmbedFieldBase;
  var video = new BlockConfigEmbedFieldBase({
    previewFieldTypeIdentifier: 'ezmedia',
    openUDWSelector: '[data-open-udw-video]'
  });
  video.init();
})(window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/personalized.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/personalized.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var scenarioSelect = doc.querySelector('.ibexa-personalization-block-config__select--scenario-list');
  var outputTypeSelect = doc.querySelector('.ibexa-personalization-block-config__select--output-type-list');
  if (!scenarioSelect || !outputTypeSelect) {
    return;
  }
  var outputTypeDropdownContainer = outputTypeSelect.closest('.ibexa-dropdown');
  var outputTypeDropdown = ibexa.helpers.objectInstances.getInstance(outputTypeDropdownContainer);
  var handleScenarioChange = function handleScenarioChange() {
    filterContentTypeDropdown();
    var outputTypeDropdownVisibleItems = outputTypeDropdown.itemsListContainer.querySelectorAll('.ibexa-dropdown__item:not(.ibexa-dropdown__item--hidden)');
    if (!outputTypeDropdownVisibleItems.length) {
      return;
    }
    var value = outputTypeDropdownVisibleItems[0].dataset.value;
    outputTypeDropdown.selectOption(value);
  };
  var filterContentTypeDropdown = function filterContentTypeDropdown() {
    var selectedScenarioValue = scenarioSelect.value;
    var selectedOption = scenarioSelect.querySelector("[value=\"".concat(selectedScenarioValue, "\"]"));
    var supportedOutputTypes = JSON.parse(selectedOption.dataset.supportedOutputTypes);
    var outputTypeDropdownItems = outputTypeDropdown.itemsListContainer.querySelectorAll('.ibexa-dropdown__item');
    outputTypeDropdownItems.forEach(function (outputTypeDropdownItem) {
      var value = outputTypeDropdownItem.dataset.value;
      var hideItem = !supportedOutputTypes.includes(value);
      outputTypeDropdownItem.classList.toggle('ibexa-dropdown__item--hidden', hideItem);
    });
  };
  filterContentTypeDropdown();
  scenarioSelect.addEventListener('change', handleScenarioChange, false);
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/targeted.scenario.map.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/targeted.scenario.map.js ***!
  \******************************************************************************************************/
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
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator) {
  var _this = this;
  var personalizations = doc.querySelectorAll('.ibexa-personalization');
  var updateInputValue = function updateInputValue(itemsContainer) {
    var inputValue = _toConsumableArray(itemsContainer.querySelectorAll('.ibexa-personalization__item')).map(function (item) {
      var segmentSelect = item.querySelector('.ibexa-personalization__select--segment');
      var segmentId = segmentSelect.value;
      var segmentOption = segmentSelect.querySelector("[value=\"".concat(segmentId, "\"]"));
      var segmentName = segmentOption.innerHTML.replace(/\s/g, '');
      var _segmentOption$datase = segmentOption.dataset,
        groupId = _segmentOption$datase.groupId,
        groupName = _segmentOption$datase.groupName;
      var scenarioSelect = item.querySelector('.ibexa-personalization__select--scenario');
      var scenarioReferenceCode = scenarioSelect.value;
      var scenarioName = scenarioSelect.querySelector("[value=\"".concat(scenarioReferenceCode, "\"]")).innerHTML;
      var outputTypeSelect = item.querySelector('.ibexa-personalization__select--output-type');
      var outputTypeValue = outputTypeSelect.value;
      var outputTypeOption = outputTypeSelect.querySelector("[value=\"".concat(outputTypeValue, "\"]"));
      return {
        group: {
          id: parseInt(groupId, 10),
          name: groupName
        },
        segment: {
          id: parseInt(segmentId, 10),
          name: segmentName
        },
        scenario: {
          referenceCode: scenarioReferenceCode,
          name: scenarioName
        },
        outputType: JSON.parse(outputTypeOption.dataset.outputType)
      };
    });
    itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input').value = JSON.stringify(inputValue);
  };
  var attachEventsToItem = function attachEventsToItem(itemsContainer, listItem) {
    listItem.querySelector('.ibexa-btn--trash').addEventListener('click', function () {
      if (itemsContainer.querySelectorAll('.ibexa-personalization__item').length > 1) {
        listItem.remove();
      }
      if (itemsContainer.querySelectorAll('.ibexa-personalization__item').length === 1) {
        itemsContainer.querySelector('.ibexa-btn--trash').setAttribute('disabled', 'disabled');
      }
      updateInputValue(itemsContainer);
    }, false);
  };
  var attachEventsToItemInputs = function attachEventsToItemInputs(itemsContainer, listItem) {
    var segmentsSelect = listItem.querySelector('.ibexa-personalization__select--segment');
    var scenariosSelect = listItem.querySelector('.ibexa-personalization__select--scenario');
    var outputTypesSelect = listItem.querySelector('.ibexa-personalization__select--output-type');
    segmentsSelect.addEventListener('change', updateInputValue.bind(_this, itemsContainer), false);
    outputTypesSelect.addEventListener('change', updateInputValue.bind(_this, itemsContainer), false);
    scenariosSelect.addEventListener('change', function (event) {
      var _outputTypesOptions$;
      var scenarioValue = event.currentTarget.value;
      var scenariosConfig = getScenariosConfig(itemsContainer);
      var outputTypesConfig = getOutputTypesConfig(itemsContainer);
      var outputTypeDropdownContainer = listItem.querySelector('.ibexa-dropdown--output-type');
      var outputTypesOptions = getOutputTypeOptions(outputTypesConfig, scenariosConfig, scenarioValue);
      renderDropdownSourceOptions(outputTypeDropdownContainer, outputTypesOptions);
      var outputTypeDropdown = ibexa.helpers.objectInstances.getInstance(outputTypeDropdownContainer);
      outputTypeDropdown.recreateOptions();
      outputTypeDropdown.selectOption((_outputTypesOptions$ = outputTypesOptions[0]) === null || _outputTypesOptions$ === void 0 ? void 0 : _outputTypesOptions$.id);
      updateInputValue(itemsContainer);
    }, false);
  };
  var getSegmentationsConfig = function getSegmentationsConfig(itemsContainer) {
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    var segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
    return segmentationsConfig.filter(function (group) {
      return group.segments.length;
    });
  };
  var getScenariosConfig = function getScenariosConfig(itemsContainer) {
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    return JSON.parse(sourceInput.dataset.scenarioList);
  };
  var getOutputTypesConfig = function getOutputTypesConfig(itemsContainer) {
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    return JSON.parse(sourceInput.dataset.outputTypeList);
  };
  var getOutputTypeOptions = function getOutputTypeOptions(outputTypesConfig, scenariosConfig, scenarioValue) {
    var selectedScenarioConfig = scenariosConfig.find(function (scenarioConfig) {
      return scenarioConfig.referenceCode === scenarioValue;
    });
    var filteredOutputTypesConfig = outputTypesConfig.filter(function (outputTypeConfig) {
      return selectedScenarioConfig.supportedOutputTypes.includes(outputTypeConfig.description);
    });
    if (!filteredOutputTypesConfig) {
      return [];
    }
    var options = filteredOutputTypesConfig.map(function (outputType, index) {
      return {
        id: index,
        name: "".concat(outputType.description, " ").concat(outputType.id ? "(".concat(outputType.id, ")") : ''),
        extraDatasets: [{
          name: 'outputType',
          value: JSON.stringify(outputType)
        }]
      };
    });
    return options;
  };
  var renderItem = function renderItem(itemsContainer, draggable, itemData) {
    var _segmentationsConfig$;
    var template = itemsContainer.dataset.template;
    var container = doc.createElement('ol');
    var segmentationsConfig = getSegmentationsConfig(itemsContainer);
    var itemConfig = (_segmentationsConfig$ = segmentationsConfig.find(function (category) {
      var _itemData$group;
      return category.id === ((_itemData$group = itemData.group) === null || _itemData$group === void 0 ? void 0 : _itemData$group.id);
    })) !== null && _segmentationsConfig$ !== void 0 ? _segmentationsConfig$ : segmentationsConfig[0];
    container.insertAdjacentHTML('beforeend', template);
    var listItem = container.querySelector('.ibexa-personalization__item');
    renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig);
    renderScenarioSelect(itemsContainer, listItem, getScenariosConfig(itemsContainer), itemData);
    renderOutputTypeSelect(itemsContainer, listItem, getOutputTypesConfig(itemsContainer), itemData);
    attachEventsToItem(itemsContainer, listItem);
    attachEventsToItemInputs(itemsContainer, listItem);
    itemsContainer.append(listItem);
    draggable.reinit();
  };
  var createSourceOption = function createSourceOption(_ref) {
    var optionTemplate = _ref.optionTemplate,
      groupId = _ref.groupId,
      groupName = _ref.groupName,
      value = _ref.value,
      label = _ref.label,
      extraDatasets = _ref.extraDatasets;
    var optionsContainer = doc.createElement('select');
    var optionRendered = optionTemplate.replace('{{ group_id }}', groupId).replace('{{ group_name }}', groupName).replace('{{ value }}', value).replace('{{ label }}', label);
    optionsContainer.insertAdjacentHTML('beforeend', optionRendered);
    var createdOption = optionsContainer.querySelector('option');
    extraDatasets.forEach(function (extraDataset) {
      createdOption.dataset[extraDataset.name] = extraDataset.value;
    });
    return createdOption;
  };
  var renderDropdownSourceOptions = function renderDropdownSourceOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var optionTemplate = sourceInput.dataset.optionTemplate;
    var selectOptionsFragment = doc.createDocumentFragment();
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupName = option.name;
        var groupId = option.id;
        option.subOptions.forEach(function (subOption) {
          selectOptionsFragment.append(createSourceOption({
            optionTemplate: optionTemplate,
            groupId: groupId,
            groupName: groupName,
            value: subOption.id,
            label: subOption.name,
            extraDatasets: subOption.extraDatasets || []
          }));
        });
      } else {
        selectOptionsFragment.append(createSourceOption({
          optionTemplate: optionTemplate,
          groupId: '',
          groupName: '',
          value: option.id,
          label: option.name,
          extraDatasets: option.extraDatasets || []
        }));
      }
    });
    sourceInput.innerHTML = '';
    sourceInput.append(selectOptionsFragment);
  };
  var renderDropdownListOptions = function renderDropdownListOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var itemsList = dropdownContainer.querySelector('.ibexa-dropdown__items-list');
    var itemsListFragment = doc.createDocumentFragment();
    var itemTemplate = itemsList.dataset.template;
    var dropdownGroupTemplate = sourceInput.dataset.dropdownGroupTemplate;
    itemsList.innerHTML = '';
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupsContainer = doc.createElement('ul');
        var renderedGroup = dropdownGroupTemplate.replace('{{ group_id }}', option.id).replaceAll('{{ group_name }}', option.name);
        groupsContainer.insertAdjacentHTML('beforeend', renderedGroup);
        var addedGroup = groupsContainer.querySelector('li.ibexa-dropdown__item-group:last-of-type');
        var groupItemsList = addedGroup.querySelector('.ibexa-dropdown__item-group-list');
        option.subOptions.forEach(function (subOption) {
          var itemRendered = itemTemplate.replace('{{ value }}', subOption.id).replaceAll('{{ label }}', subOption.name);
          groupItemsList.insertAdjacentHTML('beforeend', itemRendered);
        });
        itemsListFragment.append(groupsContainer.querySelector('li.ibexa-dropdown__item-group'));
      } else {
        var itemsContainer = doc.createElement('ul');
        var itemRendered = itemTemplate.replace('{{ value }}', option.id).replaceAll('{{ label }}', option.name);
        itemsContainer.insertAdjacentHTML('beforeend', itemRendered);
        itemsListFragment.append(itemsContainer.querySelector('li'));
      }
    });
    itemsList.append(itemsListFragment);
  };
  var renderSegmentSelect = function renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig) {
    var segmentDropdownContainer = listItem.querySelector('.ibexa-dropdown--segment');
    var options = segmentationsConfig.map(function (segmentationConfig) {
      return {
        id: segmentationConfig.id,
        name: segmentationConfig.name,
        subOptions: segmentationConfig.segments.map(function (segment) {
          return {
            id: segment.id,
            name: segment.name
          };
        }) || {}
      };
    });
    var optionToSelect = itemData.segment ? itemData.segment.id : itemConfig.segments[0].id;
    var segmentDropdown = new ibexa.core.Dropdown({
      container: segmentDropdownContainer
    });
    renderDropdownSourceOptions(segmentDropdownContainer, options);
    renderDropdownListOptions(segmentDropdownContainer, options);
    segmentDropdown.init();
    segmentDropdown.selectOption(optionToSelect);
  };
  var renderScenarioSelect = function renderScenarioSelect(itemsContainer, listItem, config, itemData) {
    var scenarioDropdownContainer = listItem.querySelector('.ibexa-dropdown--scenario');
    var options = config.map(function (scenario) {
      return {
        id: scenario.referenceCode,
        name: scenario.title
      };
    });
    var optionToSelect = itemData.scenario ? itemData.scenario.referenceCode : config[0].referenceCode;
    var scenarioDropdown = new ibexa.core.Dropdown({
      container: scenarioDropdownContainer
    });
    renderDropdownSourceOptions(scenarioDropdownContainer, options);
    renderDropdownListOptions(scenarioDropdownContainer, options);
    scenarioDropdown.init();
    scenarioDropdown.selectOption(optionToSelect);
  };
  var renderOutputTypeSelect = function renderOutputTypeSelect(itemsContainer, listItem, config, itemData) {
    var _optionToSelect$id;
    var scenarioSelect = listItem.querySelector('.ibexa-personalization__select--scenario');
    var outputTypeDropdownContainer = listItem.querySelector('.ibexa-dropdown--output-type');
    var options = getOutputTypeOptions(config, getScenariosConfig(itemsContainer), scenarioSelect.value);
    var outputType = itemData.outputType || {};
    var selectedOutputTypeLabel = outputType ? "".concat(outputType.description, " ").concat(outputType.id ? "(".concat(outputType.id, ")") : '') : '';
    var optionToSelect = options.find(function (option) {
      return option.name === selectedOutputTypeLabel;
    });
    var outputTypeDropdown = new ibexa.core.Dropdown({
      container: outputTypeDropdownContainer
    });
    renderDropdownSourceOptions(outputTypeDropdownContainer, options);
    renderDropdownListOptions(outputTypeDropdownContainer, options);
    outputTypeDropdown.init();
    if (!options.length) {
      return;
    }
    outputTypeDropdown.selectOption((_optionToSelect$id = optionToSelect === null || optionToSelect === void 0 ? void 0 : optionToSelect.id) !== null && _optionToSelect$id !== void 0 ? _optionToSelect$id : options[0].id);
  };
  var PersonalizationDraggable = /*#__PURE__*/function (_global$ibexa$core$Dr) {
    "use strict";

    function PersonalizationDraggable() {
      _classCallCheck(this, PersonalizationDraggable);
      return _callSuper(this, PersonalizationDraggable, arguments);
    }
    _inherits(PersonalizationDraggable, _global$ibexa$core$Dr);
    return _createClass(PersonalizationDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _superPropGet(PersonalizationDraggable, "onDrop", this, 3)([]);
        updateInputValue(this.itemsContainer);
      }
    }]);
  }(global.ibexa.core.Draggable);
  personalizations.forEach(function (personalization) {
    var itemsContainer = personalization.querySelector('.ibexa-personalization__items');
    var draggable = new PersonalizationDraggable({
      itemsContainer: itemsContainer,
      selectorItem: '.ibexa-personalization__item',
      selectorPlaceholder: '.ibexa-personalization__item--placeholder'
    });
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    var inputValue = sourceInput.value ? JSON.parse(sourceInput.value) : [];
    var items = inputValue.length ? inputValue : [{}];
    var segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
    var allSegmentGroupsEmpty = segmentationsConfig.every(function (group) {
      return group.segments.length === 0;
    });
    var addItemBtn = personalization.querySelector('.ibexa-btn--add');
    if (!segmentationsConfig.length || allSegmentGroupsEmpty) {
      var noConfigurationMessage = Translator.trans(/*@Desc("No segments defined. Create Segments in the Admin panel to use this block.")*/'targeted_scenario_map.no_configuration', {}, 'ibexa_personalization');
      var item = "<li class=\"ibexa-personalization__item ibexa-personalization__item--no-configuration\">".concat(noConfigurationMessage, "</li>");
      var labels = personalization.querySelector('.ibexa-personalization__labels');
      itemsContainer.insertAdjacentHTML('beforeend', item);
      addItemBtn.disabled = true;
      labels.classList.add('ibexa-personalization__labels--hidden');
      return;
    }
    draggable.init();
    items.forEach(function (item) {
      return renderItem(itemsContainer, draggable, item);
    });
    updateInputValue(itemsContainer);
    if (items.length === 1) {
      var _item = personalization.querySelector('.ibexa-personalization__item');
      var deleteBtn = _item.querySelector('.ibexa-btn--trash');
      deleteBtn.setAttribute('disabled', 'disabled');
    }
    addItemBtn.addEventListener('click', function () {
      renderItem(itemsContainer, draggable, {});
      itemsContainer.querySelector('.ibexa-btn--trash').removeAttribute('disabled');
      updateInputValue(itemsContainer);
    }, false);
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js ***!
  \**************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator) {
  var _this = this;
  var segmentations = doc.querySelectorAll('.ibexa-segmentation');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var createTagContent = function createTagContent(contentName, breadcrumbs) {
    if (breadcrumbs) {
      return "".concat(breadcrumbs, " / ").concat(contentName);
    }
    return contentName;
  };
  var updateInputValue = function updateInputValue(itemsContainer) {
    var inputValue = _toConsumableArray(itemsContainer.querySelectorAll('.ibexa-segmentation__item')).map(function (item) {
      var segmentSelect = item.querySelector('.ibexa-segmentation__select--segment');
      var segmentId = segmentSelect.value;
      var segmentOption = segmentSelect.querySelector("[value=\"".concat(segmentId, "\"]"));
      var segmentName = segmentOption.innerHTML.replace(/\s/g, '');
      var contentInfoTagNode = item.querySelector('.ibexa-tag');
      var _contentInfoTagNode$d = contentInfoTagNode.dataset,
        locationId = _contentInfoTagNode$d.locationId,
        name = _contentInfoTagNode$d.name,
        breadcrumbs = _contentInfoTagNode$d.breadcrumbs;
      return {
        segment: {
          id: parseInt(segmentId, 10),
          name: segmentName
        },
        content: {
          locationId: parseInt(locationId, 10),
          name: name,
          breadcrumbs: breadcrumbs
        }
      };
    });
    itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input').value = JSON.stringify(inputValue);
  };
  var removeRootFromPathString = function removeRootFromPathString(pathString) {
    var pathArray = pathString.split('/').filter(function (val) {
      return val;
    });
    return pathArray.splice(1, pathArray.length - 2);
  };
  var findLocationsByIdList = function findLocationsByIdList(idList, callback) {
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
    var request = new Request('/api/ibexa/v2/views', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.ibexa.api.View+json; version=1.1',
        'Content-Type': 'application/vnd.ibexa.api.ViewInput+json; version=1.1',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: body,
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    var errorMessage = Translator.trans(/*@Desc("Cannot find children Locations with ID %idList%")*/'select_location.error', {
      idList: idList.join(',')
    }, 'ibexa_page_builder');
    fetch(request).then(ibexa.helpers.request.getJsonFromResponse).then(function (data) {
      callback(data.View.Result.searchHits.searchHit);
    })["catch"](function () {
      return ibexa.helpers.notification.showErrorNotification(errorMessage);
    });
  };
  var openUdw = function openUdw(itemsContainer, draggable, event) {
    event.preventDefault();
    var currentTarget = event.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select content")*/'config_form.widgets.segmentation.udw.title', {}, 'ibexa_page_builder');
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        title: title,
        onConfirm: selectContent.bind(_this, itemsContainer, currentTarget)
      }, config)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  var updateTagNode = function updateTagNode(locations, itemsContainer, contentInfoTagNode, contentItemName) {
    var breadcrumbs = locations.map(function (location) {
      return location.value.Location.ContentInfo.Content.TranslatedName;
    }).join(' / ');
    var tagContent = createTagContent(contentItemName, breadcrumbs);
    var contentInfoTagEllipsisNode = contentInfoTagNode.querySelector('.ibexa-middle-ellipsis');
    contentInfoTagNode.dataset.name = contentItemName;
    contentInfoTagNode.dataset.breadcrumbs = breadcrumbs;
    ibexa.helpers.ellipsis.middle.update(contentInfoTagEllipsisNode, tagContent);
    updateInputValue(itemsContainer);
  };
  var selectContent = function selectContent(itemsContainer, openUdwButton, items) {
    var _items = _slicedToArray(items, 1),
      selectedContent = _items[0];
    var contentInfoWrapper = openUdwButton.closest('.ibexa-segmentation__content-wrapper').querySelector('.ibexa-segmentation__content-info');
    var contentInfoTagNode = contentInfoWrapper.querySelector('.ibexa-tag');
    var contentItemName = selectedContent.ContentInfo.Content.TranslatedName;
    var locationIds = removeRootFromPathString(selectedContent.pathString);
    openUdwButton.setAttribute('hidden', 'hidden');
    contentInfoTagNode.dataset.locationId = selectedContent.id;
    if (locationIds.length) {
      findLocationsByIdList(locationIds, function (locations) {
        return updateTagNode(locations, itemsContainer, contentInfoTagNode, contentItemName);
      });
    } else {
      updateTagNode([], itemsContainer, contentInfoTagNode, contentItemName);
    }
    contentInfoWrapper.classList.remove('ibexa-segmentation__content-info--hidden');
  };
  var attachEventsToItem = function attachEventsToItem(itemsContainer, listItem, openUdwButton) {
    listItem.querySelector('.ibexa-tag__remove-btn').addEventListener('click', function () {
      var contentInfoTagNode = listItem.querySelector('.ibexa-tag');
      var contentInfoTagEllipsisNode = contentInfoTagNode.querySelector('.ibexa-middle-ellipsis');
      contentInfoTagNode.dataset.locationId = '';
      contentInfoTagNode.dataset.name = '';
      contentInfoTagNode.dataset.breadcrumbs = '';
      ibexa.helpers.ellipsis.middle.update(contentInfoTagEllipsisNode, '');
      openUdwButton.removeAttribute('hidden');
      listItem.querySelector('.ibexa-segmentation__content-info').classList.add('ibexa-segmentation__content-info--hidden');
      updateInputValue(itemsContainer);
    }, false);
    listItem.querySelector('.ibexa-btn--trash').addEventListener('click', function () {
      if (itemsContainer.querySelectorAll('.ibexa-segmentation__item').length > 1) {
        listItem.remove();
      }
      if (itemsContainer.querySelectorAll('.ibexa-segmentation__item').length === 1) {
        itemsContainer.querySelector('.ibexa-btn--trash').setAttribute('disabled', 'disabled');
      }
      updateInputValue(itemsContainer);
    }, false);
    listItem.querySelector('.ibexa-link--change').addEventListener('click', function (event) {
      event.preventDefault();
      openUdwButton.click();
    }, false);
  };
  var getSegmentationsConfig = function getSegmentationsConfig(itemsContainer) {
    var segmentationsConfig = JSON.parse(itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input').dataset.segments);
    return segmentationsConfig.filter(function (group) {
      return group.segments.length;
    });
  };
  var renderItem = function renderItem(itemsContainer, draggable, itemData) {
    var template = itemsContainer.dataset.template;
    var container = doc.createElement('ol');
    var segmentationsConfig = getSegmentationsConfig(itemsContainer);
    var itemConfig = segmentationsConfig.find(function (category) {
      return itemData.group && category.id === itemData.group.id;
    }) || segmentationsConfig[0];
    container.insertAdjacentHTML('beforeend', template);
    var listItem = container.querySelector('.ibexa-segmentation__item');
    var openUdwButton = listItem.querySelector('.ibexa-btn--select-content');
    openUdwButton.addEventListener('click', openUdw.bind(_this, itemsContainer, draggable), false);
    renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig);
    if (itemData.content && itemData.content.locationId) {
      var contentInfoWrapper = openUdwButton.closest('.ibexa-segmentation__content-wrapper').querySelector('.ibexa-segmentation__content-info');
      var contentInfoTagNode = contentInfoWrapper.querySelector('.ibexa-tag');
      var contentInfoTagEllipsisNode = contentInfoTagNode.querySelector('.ibexa-middle-ellipsis');
      var tagContent = createTagContent(itemData.content.name, itemData.content.breadcrumbs);
      openUdwButton.setAttribute('hidden', 'hidden');
      contentInfoTagNode.dataset.locationId = itemData.content.locationId;
      contentInfoTagNode.dataset.name = itemData.content.name;
      contentInfoTagNode.dataset.breadcrumbs = itemData.content.breadcrumbs;
      ibexa.helpers.ellipsis.middle.update(contentInfoTagEllipsisNode, tagContent);
      contentInfoWrapper.classList.remove('ibexa-segmentation__content-info--hidden');
    }
    attachEventsToItem(itemsContainer, listItem, openUdwButton);
    itemsContainer.append(listItem);
    draggable.reinit();
  };
  var renderDropdownSourceOptions = function renderDropdownSourceOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var optionTemplate = sourceInput.dataset.optionTemplate;
    var selectOptionsFragment = doc.createDocumentFragment();
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupName = option.name;
        var groupId = option.id;
        option.subOptions.forEach(function (subOption) {
          var optionsContainer = doc.createElement('select');
          var optionRendered = optionTemplate.replace('{{ group_id }}', groupName).replace('{{ group_name }}', groupId).replace('{{ value }}', subOption.id).replace('{{ label }}', subOption.name);
          optionsContainer.insertAdjacentHTML('beforeend', optionRendered);
          selectOptionsFragment.append(optionsContainer.querySelector('option'));
        });
      } else {
        var optionsContainer = doc.createElement('select');
        var optionRendered = optionTemplate.replace('{{ group_id }}', '').replace('{{ group_name }}', '').replace('{{ value }}', option.id).replace('{{ label }}', option.name);
        optionsContainer.insertAdjacentHTML('beforeend', optionRendered);
        selectOptionsFragment.append(optionsContainer.querySelector('option'));
      }
    });
    sourceInput.innerHTML = '';
    sourceInput.append(selectOptionsFragment);
  };
  var renderDropdownListOptions = function renderDropdownListOptions(dropdownContainer, options) {
    var sourceInput = dropdownContainer.querySelector('.ibexa-dropdown__source .ibexa-input');
    var itemsList = dropdownContainer.querySelector('.ibexa-dropdown__items-list');
    var itemsListFragment = doc.createDocumentFragment();
    var itemTemplate = itemsList.dataset.template;
    var dropdownGroupTemplate = sourceInput.dataset.dropdownGroupTemplate;
    options.forEach(function (option) {
      if (option.subOptions) {
        var groupsContainer = doc.createElement('ul');
        var renderedGroup = dropdownGroupTemplate.replace('{{ group_id }}', option.id).replaceAll('{{ group_name }}', option.name);
        groupsContainer.insertAdjacentHTML('beforeend', renderedGroup);
        var addedGroup = groupsContainer.querySelector('li.ibexa-dropdown__item-group:last-of-type');
        var groupItemsList = addedGroup.querySelector('.ibexa-dropdown__item-group-list');
        option.subOptions.forEach(function (subOption) {
          var itemRendered = itemTemplate.replace('{{ value }}', subOption.id).replaceAll('{{ label }}', subOption.name);
          groupItemsList.insertAdjacentHTML('beforeend', itemRendered);
        });
        itemsListFragment.append(groupsContainer.querySelector('li.ibexa-dropdown__item-group'));
      } else {
        var itemsContainer = doc.createElement('ul');
        var itemRendered = itemTemplate.replace('{{ value }}', option.id).replaceAll('{{ label }}', option.name);
        itemsContainer.insertAdjacentHTML('beforeend', itemRendered);
        itemsListFragment.append(itemsContainer.querySelector('li'));
      }
    });
    itemsList.append(itemsListFragment);
  };
  var renderSegmentSelect = function renderSegmentSelect(itemsContainer, listItem, itemConfig, itemData, segmentationsConfig) {
    var segmentDropdownContainer = listItem.querySelector('.ibexa-dropdown--segment');
    var segmentSelect = listItem.querySelector('.ibexa-segmentation__select--segment');
    var options = segmentationsConfig.map(function (segmentationConfig) {
      return {
        id: segmentationConfig.id,
        name: segmentationConfig.name,
        subOptions: segmentationConfig.segments.map(function (segment) {
          return {
            id: segment.id,
            name: segment.name
          };
        }) || {}
      };
    });
    segmentSelect.addEventListener('change', updateInputValue.bind(_this, itemsContainer));
    renderDropdownSourceOptions(segmentDropdownContainer, options);
    renderDropdownListOptions(segmentDropdownContainer, options);
    var optionToSelect = itemData.segment ? itemData.segment.id : itemConfig.segments[0].id;
    var segmentDropdown = new ibexa.core.Dropdown({
      container: segmentDropdownContainer
    });
    segmentDropdown.init();
    segmentDropdown.selectOption(optionToSelect);
  };
  var SegmentationDraggable = /*#__PURE__*/function (_global$ibexa$core$Dr) {
    "use strict";

    function SegmentationDraggable(config) {
      _classCallCheck(this, SegmentationDraggable);
      return _callSuper(this, SegmentationDraggable, [config]);
    }
    _inherits(SegmentationDraggable, _global$ibexa$core$Dr);
    return _createClass(SegmentationDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _superPropGet(SegmentationDraggable, "onDrop", this, 3)([]);
        updateInputValue(this.itemsContainer);
      }
    }]);
  }(global.ibexa.core.Draggable);
  segmentations.forEach(function (segmentation) {
    var itemsContainer = segmentation.querySelector('.ibexa-segmentation__items');
    var draggable = new SegmentationDraggable({
      itemsContainer: itemsContainer,
      selectorItem: '.ibexa-segmentation__item',
      selectorPlaceholder: '.ibexa-segmentation__item--placeholder'
    });
    var sourceInput = itemsContainer.closest('.ibexa-data-source').querySelector('.ibexa-data-source__input');
    var inputValue = sourceInput.value ? JSON.parse(sourceInput.value) : [];
    var items = inputValue.length ? inputValue : [{}];
    var segmentationsConfig = JSON.parse(sourceInput.dataset.segments);
    var allSegmentGroupsEmpty = segmentationsConfig.every(function (group) {
      return group.segments.length === 0;
    });
    var addItemBtn = segmentation.querySelector('.ibexa-btn--add');
    if (!segmentationsConfig.length || allSegmentGroupsEmpty) {
      var noConfigurationMessage = Translator.trans(/*@Desc("No segments defined. Create Segments in the Admin panel to use this block.")*/'targeted_content_map.no_configuration', {}, 'ibexa_page_builder');
      var item = "<li class=\"ibexa-segmentation__item ibexa-segmentation__item--no-configuration\">".concat(noConfigurationMessage, "</li>");
      var labels = segmentation.querySelector('.ibexa-segmentation__labels');
      itemsContainer.insertAdjacentHTML('beforeend', item);
      addItemBtn.disabled = true;
      labels.classList.add('ibexa-segmentation__labels--hidden');
      return;
    }
    draggable.init();
    items.forEach(function (item) {
      return renderItem(itemsContainer, draggable, item);
    });
    updateInputValue(itemsContainer);
    if (items.length === 1) {
      var _item = segmentation.querySelector('.ibexa-segmentation__item');
      var deleteBtn = _item.querySelector('.ibexa-btn--trash');
      deleteBtn.setAttribute('disabled', 'disabled');
    }
    addItemBtn.addEventListener('click', function () {
      renderItem(itemsContainer, draggable, {});
      itemsContainer.querySelector('.ibexa-btn--trash').removeAttribute('disabled');
      updateInputValue(itemsContainer);
    }, false);
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/fieldType/base/base-field.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/block.config.attributes.group.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.embed.field.base.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.schedule.field.base.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.scheduler.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.fields.errors.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/base/block.config.navigation.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/embed.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/video.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/checkbox.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/collection.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/schedule.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/richtext.js"), __webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/config-form/widgets/dropdown.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/targeted.scenario.map.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/widgets/personalized.js"), __webpack_exec__("./vendor/ibexa/segmentation/src/bundle/Resources/public/js/widgets/targeted.content.map.js"));
/******/ }
]);