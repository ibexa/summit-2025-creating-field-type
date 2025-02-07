(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-dashboard-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/base.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/base.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalizationChart: () => (/* binding */ PersonalizationChart)
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
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var doc = window.document;
var LineChart = window.ibexa.core.chart.LineChart;
var IBEXA_WHITE = '#fff';
var IBEXA_COLOR_BASE_DARK = '#878b90';
var PersonalizationChart = /*#__PURE__*/function (_LineChart) {
  function PersonalizationChart(data) {
    var _this;
    _classCallCheck(this, PersonalizationChart);
    _this = _callSuper(this, PersonalizationChart, [data]);
    _this.chartNode = doc.querySelector(".ibexa-chart--".concat(data.chartName));
    _this.canvas = _this.chartNode.querySelector('.ibexa-chart__canvas');
    _this.legendNode = _this.chartNode.querySelector('.ibexa-perso-dashboard-chart-legend');
    _this.summaryNode = _this.chartNode.querySelector('.ibexa-perso-dashboard-chart-summary');
    return _this;
  }
  _inherits(PersonalizationChart, _LineChart);
  return _createClass(PersonalizationChart, [{
    key: "setData",
    value: function setData(data) {
      _superPropGet(PersonalizationChart, "setData", this, 3)([data]);
      if (data.summary) {
        this.summary = data.summary;
      }
    }
  }, {
    key: "setPlugins",
    value: function setPlugins() {
      var _this2 = this;
      this.plugins = [{
        beforeInit: function beforeInit(chart) {
          var itemTemplate = _this2.legendNode.dataset.itemTemplate;
          var fragment = doc.createDocumentFragment();
          chart.data.datasets.forEach(function (dataset, index) {
            var _dataset$legendItem$n, _dataset$legendItem$s;
            var container = doc.createElement('div');
            var renderedItemTemplate = itemTemplate.replace('{{ checked_color }}', dataset.backgroundColor).replace('{{ dataset_index }}', index).replace('{{ label }}', (_dataset$legendItem$n = dataset.legendItem.name) !== null && _dataset$legendItem$n !== void 0 ? _dataset$legendItem$n : '').replace('{{ label_value }}', (_dataset$legendItem$s = dataset.legendItem.summary) !== null && _dataset$legendItem$s !== void 0 ? _dataset$legendItem$s : '');
            container.insertAdjacentHTML('beforeend', renderedItemTemplate);
            var checkboxNode = container.querySelector('.ibexa-perso-dashboard-chart-legend__item-wrapper');
            checkboxNode.querySelector('input').checked = !dataset.hidden;
            fragment.append(checkboxNode);
          });
          _this2.legendNode.appendChild(fragment);
          return fragment;
        }
      }];
    }
  }, {
    key: "setLegendCheckboxBackground",
    value: function setLegendCheckboxBackground(checkbox) {
      var checkedColor = checkbox.dataset.checkedColor;
      var checked = checkbox.checked;
      if (checked) {
        checkbox.style.backgroundColor = checkedColor;
        checkbox.style.borderColor = checkedColor;
      } else {
        checkbox.style.backgroundColor = IBEXA_WHITE;
        checkbox.style.borderColor = IBEXA_COLOR_BASE_DARK;
      }
    }
  }, {
    key: "setLegendCheckboxes",
    value: function setLegendCheckboxes() {
      var _this3 = this;
      if (!this.legendNode) {
        return;
      }
      this.legendNode.querySelectorAll('.ibexa-input--legend-item-checkbox').forEach(function (checkbox) {
        _this3.setLegendCheckboxBackground(checkbox);
        checkbox.addEventListener('change', function (event) {
          var datasetIndex = event.currentTarget.dataset.datasetIndex;
          var dataset = _this3.chart.data.datasets[datasetIndex];
          var productsPurchased = doc.querySelector('.ibexa-products-purchased');
          dataset.hidden = !dataset.hidden;
          _this3.setLegendCheckboxBackground(event.currentTarget);
          _this3.chart.update();
          if (productsPurchased) {
            productsPurchased.dataset.scrollTo = '';
          }
        });
      });
    }
  }, {
    key: "callbackAfterRender",
    value: function callbackAfterRender() {
      this.updateSummary();
      this.setLegendCheckboxes();
    }
  }, {
    key: "updateSummary",
    value: function updateSummary() {
      var _this4 = this;
      var itemTemplate = this.summaryNode.dataset.itemTemplate;
      if (this.summaryNode) {
        this.summaryNode.innerHTML = '';
        this.summary.forEach(function (summaryItem) {
          var renderedTotalItemTemplate = itemTemplate.replace('{{ value }}', summaryItem.value).replace('{{ label }}', summaryItem.label);
          _this4.summaryNode.insertAdjacentHTML('beforeend', renderedTotalItemTemplate);
        });
      }
    }
  }]);
}(LineChart);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/conversion.rate.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/conversion.rate.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConversionRateChart: () => (/* binding */ ConversionRateChart)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/base.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var ConversionRateChart = /*#__PURE__*/function (_PersonalizationChart) {
  function ConversionRateChart(data) {
    _classCallCheck(this, ConversionRateChart);
    return _callSuper(this, ConversionRateChart, [_objectSpread(_objectSpread({}, data), {
      chartName: 'conversion-rate'
    })]);
  }
  _inherits(ConversionRateChart, _PersonalizationChart);
  return _createClass(ConversionRateChart);
}(_base__WEBPACK_IMPORTED_MODULE_0__.PersonalizationChart);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/events.js":
/*!**************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/events.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsChart: () => (/* binding */ EventsChart)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/base.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var EventsChart = /*#__PURE__*/function (_PersonalizationChart) {
  function EventsChart(data) {
    _classCallCheck(this, EventsChart);
    return _callSuper(this, EventsChart, [_objectSpread(_objectSpread({}, data), {
      chartName: 'collected-events'
    })]);
  }
  _inherits(EventsChart, _PersonalizationChart);
  return _createClass(EventsChart);
}(_base__WEBPACK_IMPORTED_MODULE_0__.PersonalizationChart);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/recommendation.calls.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/recommendation.calls.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecommendationCallsChart: () => (/* binding */ RecommendationCallsChart)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/base.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var RecommendationCallsChart = /*#__PURE__*/function (_PersonalizationChart) {
  function RecommendationCallsChart(data) {
    _classCallCheck(this, RecommendationCallsChart);
    return _callSuper(this, RecommendationCallsChart, [_objectSpread(_objectSpread({}, data), {
      chartName: 'recommendation-calls'
    })]);
  }
  _inherits(RecommendationCallsChart, _PersonalizationChart);
  return _createClass(RecommendationCallsChart);
}(_base__WEBPACK_IMPORTED_MODULE_0__.PersonalizationChart);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/revenue.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/revenue.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevenueChart: () => (/* binding */ RevenueChart)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/base.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var RevenueChart = /*#__PURE__*/function (_PersonalizationChart) {
  function RevenueChart(data) {
    _classCallCheck(this, RevenueChart);
    return _callSuper(this, RevenueChart, [_objectSpread(_objectSpread({}, data), {
      chartName: 'revenue'
    })]);
  }
  _inherits(RevenueChart, _PersonalizationChart);
  return _createClass(RevenueChart);
}(_base__WEBPACK_IMPORTED_MODULE_0__.PersonalizationChart);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/events */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/events.js");
/* harmony import */ var _charts_revenue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts/revenue */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/revenue.js");
/* harmony import */ var _charts_conversion_rate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts/conversion.rate */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/conversion.rate.js");
/* harmony import */ var _charts_recommendation_calls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/recommendation.calls */ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/charts/recommendation.calls.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




(function (doc, ibexa, Routing) {
  var SELECTOR_INTERVAL_INPUT = '.ibexa-time-range__date-interval';
  var SELECTOR_END_DATE_INPUT = '.ibexa-time-range__end-date';
  var CLASS_FETCHING_DATA = 'ibexa-container--fetching-data';
  var dashboardForm = doc.querySelector('form[name="dashboard"]');
  var chartsInputsContainer = doc.querySelector('.ibexa-perso-charts__inputs-container');
  var productsPurchasedInputsContainer = doc.querySelector('.ibexa-products-purchased__inputs-container');
  var popularityDurationSelect = doc.querySelector('#dashboard_popularity_duration');
  var chartsData = doc.querySelector('.ibexa-perso-charts').dataset.chartsData;
  var chartsInitData = chartsData ? JSON.parse(chartsData) : {};
  var productsPurchasedSection = doc.querySelector('.ibexa-products-purchased');
  var charts = {};
  var getJsonFromResponse = ibexa.helpers.request.getJsonFromResponse;
  var chartsMap = {
    revenue: _charts_revenue__WEBPACK_IMPORTED_MODULE_1__.RevenueChart,
    recommendation_calls: _charts_recommendation_calls__WEBPACK_IMPORTED_MODULE_3__.RecommendationCallsChart,
    conversion_rate: _charts_conversion_rate__WEBPACK_IMPORTED_MODULE_2__.ConversionRateChart,
    collected_events: _charts_events__WEBPACK_IMPORTED_MODULE_0__.EventsChart
  };
  var customerId = doc.querySelector('.ibexa-perso-charts').dataset.customerId;
  var handleChartsIntervalChange = function handleChartsIntervalChange(event) {
    var container = event.currentTarget.closest('.ibexa-time-range');
    var dateIntervalNameInput = container.querySelector('select');
    var endDateInput = container.querySelector(SELECTOR_END_DATE_INPUT);
    var reportParamsInterval = container.querySelector('.ibexa-time-range__date-interval').value;
    var reportParamsEndDate = endDateInput.value || Math.floor(new Date().getTime() / 1000);
    var intervalLabel = '';
    if (dateIntervalNameInput.value === 'custom_range' && endDateInput.value === '') {
      return;
    }
    if (dateIntervalNameInput.value === 'custom_range') {
      intervalLabel = container.querySelector('.ibexa-time-range__period-select').value;
    } else {
      intervalLabel = dateIntervalNameInput.querySelector("option[value=\"".concat(dateIntervalNameInput.value, "\"]")).innerHTML;
    }
    doc.querySelectorAll('.ibexa-chart__time-range').forEach(function (node) {
      node.innerHTML = intervalLabel;
    });
    doc.querySelector('.ibexa-perso-charts__download-full-report').href = Routing.generate('ibexa.personalization.report.recommendation_detailed', {
      date_interval: reportParamsInterval,
      end_date: reportParamsEndDate,
      customerId: customerId
    });
    if (productsPurchasedSection) {
      productsPurchasedSection.dataset.scrollTo = '';
    }
    fetchChartsData();
  };
  var fetchChartsData = function fetchChartsData() {
    var formData = new FormData(dashboardForm);
    var queryParams = new URLSearchParams(formData).toString();
    var request = new Request("".concat(Routing.generate('ibexa.personalization.chart.data', {
      customerId: customerId
    }), "?").concat(queryParams), {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json'
      }
    });
    doc.querySelector('.ibexa-perso-charts').classList.toggle(CLASS_FETCHING_DATA);
    fetch(request).then(getJsonFromResponse).then(function (response) {
      Object.entries(response.charts).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          chartKey = _ref2[0],
          data = _ref2[1];
        if (Object.prototype.hasOwnProperty.call(charts, chartKey)) {
          charts[chartKey].setData(data);
          charts[chartKey].updateChart();
        }
      });
      doc.querySelector('.ibexa-perso-charts').classList.toggle(CLASS_FETCHING_DATA);
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var handleProductsPurchasedIntervalChange = function handleProductsPurchasedIntervalChange(event) {
    var container = event.target.closest('.ibexa-time-range');
    var dateIntervalNameInput = container.querySelector('select');
    var endDateInput = container.querySelector(SELECTOR_END_DATE_INPUT);
    if (dateIntervalNameInput.value === 'custom_range' && endDateInput.value === '') {
      return;
    }
    dashboardForm.submit();
  };
  Object.entries(chartsMap).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      chartKey = _ref4[0],
      ChartClass = _ref4[1];
    if (Object.prototype.hasOwnProperty.call(chartsInitData, chartKey)) {
      charts[chartKey] = new ChartClass(chartsInitData[chartKey]);
      charts[chartKey].render();
    }
  });
  chartsInputsContainer.querySelector(SELECTOR_INTERVAL_INPUT).addEventListener('change', handleChartsIntervalChange, false);
  chartsInputsContainer.querySelector(SELECTOR_END_DATE_INPUT).addEventListener('change', handleChartsIntervalChange, false);
  if (productsPurchasedInputsContainer) {
    productsPurchasedInputsContainer.querySelector(SELECTOR_INTERVAL_INPUT).addEventListener('change', handleProductsPurchasedIntervalChange, false);
    productsPurchasedInputsContainer.querySelector(SELECTOR_END_DATE_INPUT).addEventListener('change', handleProductsPurchasedIntervalChange, false);
  }
  if (productsPurchasedSection) {
    var scrollTo = productsPurchasedSection.dataset.scrollTo;
    var scrollTarget = scrollTo ? doc.querySelector(scrollTo) : null;
    if (scrollTarget) {
      scrollTarget.scrollIntoView();
    }
  }
  if (popularityDurationSelect) {
    popularityDurationSelect.addEventListener('change', function () {
      return dashboardForm.submit();
    }, false);
  }
})(window.document, window.ibexa, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/page.title.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/page.title.js ***!
  \***********************************************************************************/
/***/ (() => {

(function (doc, Routing) {
  var customerIdSelector = doc.querySelector('.ibexa-perso-mandator-selector__select');
  if (!customerIdSelector) {
    return;
  }
  customerIdSelector.addEventListener('change', function (event) {
    var url = Routing.generate('ibexa.personalization.dashboard', {
      customerId: event.target.value
    });
    window.location.href = url;
  }, false);
})(window.document, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/time.range.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/time.range.js ***!
  \***********************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var secondsInDay = 86400;
  var MAIN_WRAPPER_SELECTOR = '.ibexa-time-range';
  var convertDateToTimezone = ibexa.helpers.timezone.convertDateToTimezone;
  var timePeriodNodes = doc.querySelectorAll(MAIN_WRAPPER_SELECTOR);
  var getUnixTimestampUTC = function getUnixTimestampUTC(dateObject) {
    var date = new Date(Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate()));
    return Math.floor(date.getTime() / 1000);
  };
  var handleFlatPickrChange = function handleFlatPickrChange(timestamps, _ref) {
    var dates = _ref.dates,
      inputField = _ref.inputField;
    var timeRangeContainer = inputField.closest(MAIN_WRAPPER_SELECTOR);
    if (dates.length === 2) {
      var startDate = getUnixTimestampUTC(dates[0]);
      var endDate = getUnixTimestampUTC(dates[1]);
      var days = (endDate - startDate) / secondsInDay;
      setValues(timeRangeContainer, "P0Y0M".concat(days, "DT0H"), endDate);
      timeRangeContainer.querySelector('.ibexa-time-range__end-date').dispatchEvent(new Event('change'));
    } else if (dates.length === 0) {
      setValues(timeRangeContainer, '');
      timeRangeContainer.querySelector('.ibexa-time-range__end-date').dispatchEvent(new Event('change'));
    }
  };
  var handlePeriodListChange = function handlePeriodListChange(event) {
    var value = event.target.value;
    var timeRangeContainer = event.target.closest(MAIN_WRAPPER_SELECTOR);
    var customTimeRangeContainer = timeRangeContainer.querySelector('.ibexa-time-range__custom-range-container');
    var method = value !== 'custom_range' ? 'add' : 'remove';
    customTimeRangeContainer.classList[method]('d-none');
    if (value !== 'custom_range') {
      setValues(timeRangeContainer, value);
      timeRangeContainer.querySelector('.ibexa-time-range__date-interval').dispatchEvent(new Event('change'));
    }
  };
  var setValues = function setValues(container, interval) {
    var endDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    container.querySelector('.ibexa-time-range__date-interval').setAttribute('value', interval);
    container.querySelector('.ibexa-time-range__end-date').setAttribute('value', endDate);
  };
  timePeriodNodes.forEach(function (node) {
    var defaultDate = [];
    var periodListSelect = node.querySelector('select');
    var dateTimePickerField = node.querySelector('.ibexa-time-range__custom-date');
    var dateTimePickerInput = dateTimePickerField === null || dateTimePickerField === void 0 ? void 0 : dateTimePickerField.querySelector('.ibexa-date-time-picker__input');
    if (!dateTimePickerInput) {
      return;
    }
    if (dateTimePickerInput.dataset.start && dateTimePickerInput.dataset.end) {
      var browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      defaultDate.push(new Date(convertDateToTimezone(dateTimePickerInput.dataset.start, browserTimezone, true)), new Date(convertDateToTimezone(dateTimePickerInput.dataset.end, browserTimezone, true)));
    }
    var dateTimePickerWidget = new ibexa.core.DateTimePicker({
      container: dateTimePickerField,
      onChange: handleFlatPickrChange,
      flatpickrConfig: {
        mode: 'range',
        enableTime: false,
        formatDate: function formatDate(date) {
          return ibexa.helpers.timezone.formatFullDateTime(date, null, ibexa.adminUiConfig.dateFormat.shortDate);
        },
        defaultDate: defaultDate
      }
    });
    dateTimePickerWidget.init();
    periodListSelect.addEventListener('change', function (event) {
      return handlePeriodListChange(event);
    }, false);
  });
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/page.title.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/time.range.js"));
/******/ }
]);