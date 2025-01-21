(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-page-builder-create-js"],{

/***/ "./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.create.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.create.js ***!
  \*****************************************************************************************/
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
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (doc, React, ReactDOM, ibexa) {
  var SELECTOR_FIELD = '.ibexa-field-edit--ezlandingpage';
  var SELECTOR_INPUT = '.ibexa-data-source__input';
  var pageBuilderContainer = doc.querySelector('#ibexa-pb-app-root');
  var pageBuilderRoot = ReactDOM.createRoot(pageBuilderContainer);
  // eslint-disable-next-line
  var infobar = new ibexa.modules.InfoBar({
    isCreateMode: true
  });
  var pageBuilderConfig = _objectSpread(_objectSpread({}, ibexa.pageBuilder.config), {}, {
    isCreateMode: true
  });
  // eslint-disable-next-line
  var initValidators = function initValidators(pageBuilder) {
    var validator = new ibexa.EzLandingPageValidator({
      classInvalid: 'is-invalid',
      pageBuilder: pageBuilder,
      fieldSelector: SELECTOR_FIELD,
      eventsMap: [{
        selector: "".concat(SELECTOR_FIELD, " ").concat(SELECTOR_INPUT),
        eventName: 'change',
        callback: 'validateInput',
        errorNodeSelectors: ['.ibexa-field-edit__label-wrapper']
      }]
    });
    validator.init();
    ibexa.fieldTypeValidators = ibexa.fieldTypeValidators ? [].concat(_toConsumableArray(ibexa.fieldTypeValidators), [validator]) : [validator];
  };
  pageBuilderRoot.render(React.createElement(ibexa.modules.PageBuilder, _objectSpread(_objectSpread({}, pageBuilderConfig), {}, {
    ref: initValidators
  })));
})(window.document, window.React, window.ReactDOM, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/page-builder/src/bundle/Resources/public/js/page.builder.create.js"));
/******/ }
]);