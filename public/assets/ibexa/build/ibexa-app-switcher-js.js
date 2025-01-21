"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-app-switcher-js"],{

/***/ "./vendor/ibexa/app-switcher/src/bundle/Resources/public/js/app.switcher.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/app-switcher/src/bundle/Resources/public/js/app.switcher.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_headless_assets_src_bundle_Resources_public_vendors_qntm_app_switcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ibexa-headless-assets/src/bundle/Resources/public/vendors/qntm-app-switcher */ "./vendor/ibexa/headless-assets/src/bundle/Resources/public/vendors/qntm-app-switcher/dist/index.js");
/* harmony import */ var _scss_app_switcher_scss_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app-switcher.scss?modules */ "./vendor/ibexa/app-switcher/src/bundle/Resources/public/scss/app-switcher.scss?modules");


(function (global, doc, React, ReactDOM) {
  var appSwitcherNode = document.getElementById('qntm-app-switcher');
  if (!appSwitcherNode) {
    return;
  }
  var appSwitcherRoot = ReactDOM.createRoot(appSwitcherNode);
  appSwitcherRoot.render(React.createElement(_ibexa_headless_assets_src_bundle_Resources_public_vendors_qntm_app_switcher__WEBPACK_IMPORTED_MODULE_1__.QntmAppSwitcher, {
    partnersConfig: {
      Ibexa: {
        shouldHide: true
      }
    },
    hideCloseButton: true,
    customStyles: _scss_app_switcher_scss_modules__WEBPACK_IMPORTED_MODULE_0__["default"]
  }));
})(window, window.document, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ibexa/headless-assets/src/bundle/Resources/public/vendors/qntm-app-switcher/dist/index.css":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/headless-assets/src/bundle/Resources/public/vendors/qntm-app-switcher/dist/index.css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./vendor/ibexa/app-switcher/src/bundle/Resources/public/scss/app-switcher.scss?modules":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/app-switcher/src/bundle/Resources/public/scss/app-switcher.scss?modules ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"qntm-app-switcher":"qntm-app-switcher_iXP45","PopoverContent":"PopoverContent_vRHlc","PopoverTrigger":"PopoverTrigger_FSmke","partners":"partners_MHPFg","partner__link":"partner__link_rzeRh","footer__link":"footer__link_pHtHB"});

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ }),

/***/ "./vendor/ibexa/headless-assets/src/bundle/Resources/public/vendors/qntm-app-switcher/dist/index.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/headless-assets/src/bundle/Resources/public/vendors/qntm-app-switcher/dist/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QntmAppSwitcher: () => (/* binding */ Jd)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./vendor/ibexa/headless-assets/src/bundle/Resources/public/vendors/qntm-app-switcher/dist/index.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
var _excluded = ["scope", "children"],
  _excluded2 = ["children"],
  _excluded3 = ["children"],
  _excluded4 = ["asChild"],
  _excluded5 = ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"],
  _excluded6 = ["loop", "trapped", "onMountAutoFocus", "onUnmountAutoFocus"],
  _excluded7 = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"],
  _excluded8 = ["strategy"],
  _excluded9 = ["mainAxis", "crossAxis", "limiter"],
  _excluded10 = ["apply"],
  _excluded11 = ["__scopePopper", "virtualRef"],
  _excluded12 = ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"],
  _excluded13 = ["container"],
  _excluded14 = ["__scopePopover"],
  _excluded15 = ["forceMount"],
  _excluded16 = ["__scopePopover", "trapFocus", "onOpenAutoFocus", "onCloseAutoFocus", "disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside"],
  _excluded17 = ["__scopePopover"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n3 = 0, F = function F() {}; return { s: F, n: function n() { return _n3 >= r.length ? { done: !0 } : { done: !1, value: r[_n3++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }





var vt = (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" ? globalThis : (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? self : {};
function Zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
}
var ln = {
    exports: {}
  },
  et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Qo() {
  if (Vn) return et;
  Vn = 1;
  var e = react__WEBPACK_IMPORTED_MODULE_1__,
    t = Symbol["for"]("react.element"),
    n = Symbol["for"]("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function c(i, l, u) {
    var d,
      f = {},
      v = null,
      p = null;
    u !== void 0 && (v = "" + u), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (d in l) r.call(l, d) && !a.hasOwnProperty(d) && (f[d] = l[d]);
    if (i && i.defaultProps) for (d in l = i.defaultProps, l) f[d] === void 0 && (f[d] = l[d]);
    return {
      $$typeof: t,
      type: i,
      key: v,
      ref: p,
      props: f,
      _owner: o.current
    };
  }
  return et.Fragment = n, et.jsx = c, et.jsxs = c, et;
}
var tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function Jo() {
  return Hn || (Hn = 1,  true && function () {
    var e = react__WEBPACK_IMPORTED_MODULE_1__,
      t = Symbol["for"]("react.element"),
      n = Symbol["for"]("react.portal"),
      r = Symbol["for"]("react.fragment"),
      o = Symbol["for"]("react.strict_mode"),
      a = Symbol["for"]("react.profiler"),
      c = Symbol["for"]("react.provider"),
      i = Symbol["for"]("react.context"),
      l = Symbol["for"]("react.forward_ref"),
      u = Symbol["for"]("react.suspense"),
      d = Symbol["for"]("react.suspense_list"),
      f = Symbol["for"]("react.memo"),
      v = Symbol["for"]("react.lazy"),
      p = Symbol["for"]("react.offscreen"),
      m = Symbol.iterator,
      h = "@@iterator";
    function b(s) {
      if (s === null || _typeof(s) != "object") return null;
      var g = m && s[m] || s[h];
      return typeof g == "function" ? g : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(s) {
      {
        for (var g = arguments.length, w = new Array(g > 1 ? g - 1 : 0), O = 1; O < g; O++) w[O - 1] = arguments[O];
        A("error", s, w);
      }
    }
    function A(s, g, w) {
      {
        var O = y.ReactDebugCurrentFrame,
          j = O.getStackAddendum();
        j !== "" && (g += "%s", w = w.concat([j]));
        var I = w.map(function (L) {
          return String(L);
        });
        I.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, I);
      }
    }
    var x = !1,
      E = !1,
      _ = !1,
      R = !1,
      $ = !1,
      B;
    B = Symbol["for"]("react.module.reference");
    function X(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === r || s === a || $ || s === o || s === u || s === d || R || s === p || x || E || _ || _typeof(s) == "object" && s !== null && (s.$$typeof === v || s.$$typeof === f || s.$$typeof === c || s.$$typeof === i || s.$$typeof === l ||
      // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === B || s.getModuleId !== void 0));
    }
    function q(s, g, w) {
      var O = s.displayName;
      if (O) return O;
      var j = g.displayName || g.name || "";
      return j !== "" ? w + "(" + j + ")" : w;
    }
    function V(s) {
      return s.displayName || "Context";
    }
    function k(s) {
      if (s == null) return null;
      if (typeof s.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function") return s.displayName || s.name || null;
      if (typeof s == "string") return s;
      switch (s) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (_typeof(s) == "object") switch (s.$$typeof) {
        case i:
          var g = s;
          return V(g) + ".Consumer";
        case c:
          var w = s;
          return V(w._context) + ".Provider";
        case l:
          return q(s, s.render, "ForwardRef");
        case f:
          var O = s.displayName || null;
          return O !== null ? O : k(s.type) || "Memo";
        case v:
          {
            var j = s,
              I = j._payload,
              L = j._init;
            try {
              return k(L(I));
            } catch (_unused) {
              return null;
            }
          }
      }
      return null;
    }
    var D = Object.assign,
      N = 0,
      G,
      M,
      ae,
      ne,
      lt,
      Ae,
      ut;
    function Qe() {}
    Qe.__reactDisabledLog = !0;
    function zt() {
      {
        if (N === 0) {
          G = console.log, M = console.info, ae = console.warn, ne = console.error, lt = console.group, Ae = console.groupCollapsed, ut = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        N++;
      }
    }
    function Te() {
      {
        if (N--, N === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, s, {
              value: G
            }),
            info: D({}, s, {
              value: M
            }),
            warn: D({}, s, {
              value: ae
            }),
            error: D({}, s, {
              value: ne
            }),
            group: D({}, s, {
              value: lt
            }),
            groupCollapsed: D({}, s, {
              value: Ae
            }),
            groupEnd: D({}, s, {
              value: ut
            })
          });
        }
        N < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = y.ReactCurrentDispatcher,
      Re;
    function Le(s, g, w) {
      {
        if (Re === void 0) try {
          throw Error();
        } catch (j) {
          var O = j.stack.trim().match(/\n( *(at )?)/);
          Re = O && O[1] || "";
        }
        return "\n" + Re + s;
      }
    }
    var he = !1,
      Fe;
    {
      var Gt = typeof WeakMap == "function" ? WeakMap : Map;
      Fe = new Gt();
    }
    function ft(s, g) {
      if (!s || he) return "";
      {
        var w = Fe.get(s);
        if (w !== void 0) return w;
      }
      var O;
      he = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = ie.current, ie.current = null, zt();
      try {
        if (g) {
          var L = function L() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function set() {
              throw Error();
            }
          }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (ue) {
              O = ue;
            }
            Reflect.construct(s, [], L);
          } else {
            try {
              L.call();
            } catch (ue) {
              O = ue;
            }
            s.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            O = ue;
          }
          s();
        }
      } catch (ue) {
        if (ue && O && typeof ue.stack == "string") {
          for (var T = ue.stack.split("\n"), Z = O.stack.split("\n"), U = T.length - 1, z = Z.length - 1; U >= 1 && z >= 0 && T[U] !== Z[z];) z--;
          for (; U >= 1 && z >= 0; U--, z--) if (T[U] !== Z[z]) {
            if (U !== 1 || z !== 1) do if (U--, z--, z < 0 || T[U] !== Z[z]) {
              var re = "\n" + T[U].replace(" at new ", " at ");
              return s.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", s.displayName)), typeof s == "function" && Fe.set(s, re), re;
            } while (U >= 1 && z >= 0);
            break;
          }
        }
      } finally {
        he = !1, ie.current = I, Te(), Error.prepareStackTrace = j;
      }
      var Ie = s ? s.displayName || s.name : "",
        Bn = Ie ? Le(Ie) : "";
      return typeof s == "function" && Fe.set(s, Bn), Bn;
    }
    function Wt(s, g, w) {
      return ft(s, !1);
    }
    function qt(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function ce(s, g, w) {
      if (s == null) return "";
      if (typeof s == "function") return ft(s, qt(s));
      if (typeof s == "string") return Le(s);
      switch (s) {
        case u:
          return Le("Suspense");
        case d:
          return Le("SuspenseList");
      }
      if (_typeof(s) == "object") switch (s.$$typeof) {
        case l:
          return Wt(s.render);
        case f:
          return ce(s.type, g, w);
        case v:
          {
            var O = s,
              j = O._payload,
              I = O._init;
            try {
              return ce(I(j), g, w);
            } catch (_unused2) {}
          }
      }
      return "";
    }
    var xe = Object.prototype.hasOwnProperty,
      dt = {},
      pt = y.ReactDebugCurrentFrame;
    function De(s) {
      if (s) {
        var g = s._owner,
          w = ce(s.type, s._source, g ? g.type : null);
        pt.setExtraStackFrame(w);
      } else pt.setExtraStackFrame(null);
    }
    function Xt(s, g, w, O, j) {
      {
        var I = Function.call.bind(xe);
        for (var L in s) if (I(s, L)) {
          var T = void 0;
          try {
            if (typeof s[L] != "function") {
              var Z = Error((O || "React class") + ": " + w + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _typeof(s[L]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw Z.name = "Invariant Violation", Z;
            }
            T = s[L](g, L, O, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (U) {
            T = U;
          }
          T && !(T instanceof Error) && (De(j), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", O || "React class", w, L, _typeof(T)), De(null)), T instanceof Error && !(T.message in dt) && (dt[T.message] = !0, De(j), C("Failed %s type: %s", w, T.message), De(null));
        }
      }
    }
    var je = Array.isArray;
    function Yt(s) {
      return je(s);
    }
    function So(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag,
          w = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return w;
      }
    }
    function To(s) {
      try {
        return Sn(s), !1;
      } catch (_unused3) {
        return !0;
      }
    }
    function Sn(s) {
      return "" + s;
    }
    function Tn(s) {
      if (To(s)) return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", So(s)), Sn(s);
    }
    var Je = y.ReactCurrentOwner,
      Ro = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      },
      Rn,
      Ln,
      Kt;
    Kt = {};
    function Lo(s) {
      if (xe.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning) return !1;
      }
      return s.ref !== void 0;
    }
    function Fo(s) {
      if (xe.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return s.key !== void 0;
    }
    function Do(s, g) {
      if (typeof s.ref == "string" && Je.current && g && Je.current.stateNode !== g) {
        var w = k(Je.current.type);
        Kt[w] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(Je.current.type), s.ref), Kt[w] = !0);
      }
    }
    function jo(s, g) {
      {
        var w = function w() {
          Rn || (Rn = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function Mo(s, g) {
      {
        var w = function w() {
          Ln || (Ln = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        w.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Io = function Io(s, g, w, O, j, I, L) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: g,
        ref: w,
        props: L,
        // Record the component responsible for creating this element.
        _owner: I
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function No(s, g, w, O, j) {
      {
        var I,
          L = {},
          T = null,
          Z = null;
        w !== void 0 && (Tn(w), T = "" + w), Fo(g) && (Tn(g.key), T = "" + g.key), Lo(g) && (Z = g.ref, Do(g, j));
        for (I in g) xe.call(g, I) && !Ro.hasOwnProperty(I) && (L[I] = g[I]);
        if (s && s.defaultProps) {
          var U = s.defaultProps;
          for (I in U) L[I] === void 0 && (L[I] = U[I]);
        }
        if (T || Z) {
          var z = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          T && jo(L, z), Z && Mo(L, z);
        }
        return Io(s, T, Z, j, O, Je.current, L);
      }
    }
    var Zt = y.ReactCurrentOwner,
      Fn = y.ReactDebugCurrentFrame;
    function Me(s) {
      if (s) {
        var g = s._owner,
          w = ce(s.type, s._source, g ? g.type : null);
        Fn.setExtraStackFrame(w);
      } else Fn.setExtraStackFrame(null);
    }
    var Qt;
    Qt = !1;
    function Jt(s) {
      return _typeof(s) == "object" && s !== null && s.$$typeof === t;
    }
    function Dn() {
      {
        if (Zt.current) {
          var s = k(Zt.current.type);
          if (s) return "\n\nCheck the render method of `" + s + "`.";
        }
        return "";
      }
    }
    function Bo(s) {
      {
        if (s !== void 0) {
          var g = s.fileName.replace(/^.*[\\\/]/, ""),
            w = s.lineNumber;
          return "\n\nCheck your code at " + g + ":" + w + ".";
        }
        return "";
      }
    }
    var jn = {};
    function Vo(s) {
      {
        var g = Dn();
        if (!g) {
          var w = typeof s == "string" ? s : s.displayName || s.name;
          w && (g = "\n\nCheck the top-level render call using <" + w + ">.");
        }
        return g;
      }
    }
    function Mn(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null) return;
        s._store.validated = !0;
        var w = Vo(g);
        if (jn[w]) return;
        jn[w] = !0;
        var O = "";
        s && s._owner && s._owner !== Zt.current && (O = " It was passed a child from " + k(s._owner.type) + "."), Me(s), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, O), Me(null);
      }
    }
    function In(s, g) {
      {
        if (_typeof(s) != "object") return;
        if (Yt(s)) for (var w = 0; w < s.length; w++) {
          var O = s[w];
          Jt(O) && Mn(O, g);
        } else if (Jt(s)) s._store && (s._store.validated = !0);else if (s) {
          var j = b(s);
          if (typeof j == "function" && j !== s.entries) for (var I = j.call(s), L; !(L = I.next()).done;) Jt(L.value) && Mn(L.value, g);
        }
      }
    }
    function Ho(s) {
      {
        var g = s.type;
        if (g == null || typeof g == "string") return;
        var w;
        if (typeof g == "function") w = g.propTypes;else if (_typeof(g) == "object" && (g.$$typeof === l ||
        // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === f)) w = g.propTypes;else return;
        if (w) {
          var O = k(g);
          Xt(w, s.props, "prop", O, s);
        } else if (g.PropTypes !== void 0 && !Qt) {
          Qt = !0;
          var j = k(g);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ko(s) {
      {
        for (var g = Object.keys(s.props), w = 0; w < g.length; w++) {
          var O = g[w];
          if (O !== "children" && O !== "key") {
            Me(s), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", O), Me(null);
            break;
          }
        }
        s.ref !== null && (Me(s), C("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    function Nn(s, g, w, O, j, I) {
      {
        var L = X(s);
        if (!L) {
          var T = "";
          (s === void 0 || _typeof(s) == "object" && s !== null && Object.keys(s).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Bo(j);
          Z ? T += Z : T += Dn();
          var U;
          s === null ? U = "null" : Yt(s) ? U = "array" : s !== void 0 && s.$$typeof === t ? (U = "<" + (k(s.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : U = _typeof(s), C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", U, T);
        }
        var z = No(s, g, w, j, I);
        if (z == null) return z;
        if (L) {
          var re = g.children;
          if (re !== void 0) if (O) {
            if (Yt(re)) {
              for (var Ie = 0; Ie < re.length; Ie++) In(re[Ie], s);
              Object.freeze && Object.freeze(re);
            } else C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          } else In(re, s);
        }
        return s === r ? ko(z) : Ho(z), z;
      }
    }
    function Uo(s, g, w) {
      return Nn(s, g, w, !0);
    }
    function zo(s, g, w) {
      return Nn(s, g, w, !1);
    }
    var Go = zo,
      Wo = Uo;
    tt.Fragment = r, tt.jsx = Go, tt.jsxs = Wo;
  }()), tt;
}
 false ? 0 : ln.exports = Jo();
var S = ln.exports;
function ea(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    a;
  for (a = 0; a < r.length; a++) o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ta = ["color"],
  na = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = ea(e, ta);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", Object.assign({
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o, {
      ref: t
    }), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
      d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
      fill: r,
      fillRule: "evenodd",
      clipRule: "evenodd"
    }));
  });
function W() {
  return W = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, W.apply(this, arguments);
}
function me(e, t) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$checkForDefaultP = _ref.checkForDefaultPrevented,
    n = _ref$checkForDefaultP === void 0 ? !0 : _ref$checkForDefaultP;
  return function (o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
function ra(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Sr() {
  for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
    e[_key] = arguments[_key];
  }
  return function (t) {
    return e.forEach(function (n) {
      return ra(n, t);
    });
  };
}
function Oe() {
  for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    e[_key2] = arguments[_key2];
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(Sr.apply(void 0, e), e);
}
function Tr(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var n = [];
  function r(a, c) {
    var i = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(c),
      l = n.length;
    n = [].concat(_toConsumableArray(n), [c]);
    function u(f) {
      var v = f.scope,
        p = f.children,
        m = _objectWithoutProperties(f, _excluded),
        h = (v == null ? void 0 : v[e][l]) || i,
        b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
          return m;
        }, Object.values(m));
      return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(h.Provider, {
        value: b
      }, p);
    }
    function d(f, v) {
      var p = (v == null ? void 0 : v[e][l]) || i,
        m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(p);
      if (m) return m;
      if (c !== void 0) return c;
      throw new Error("`".concat(f, "` must be used within `").concat(a, "`"));
    }
    return u.displayName = a + "Provider", [u, d];
  }
  var o = function o() {
    var a = n.map(function (c) {
      return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(c);
    });
    return function (i) {
      var l = (i == null ? void 0 : i[e]) || a;
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return _defineProperty({}, "__scope".concat(e), _objectSpread(_objectSpread({}, i), {}, _defineProperty({}, e, l)));
      }, [i, l]);
    };
  };
  return o.scopeName = e, [r, oa.apply(void 0, [o].concat(_toConsumableArray(t)))];
}
function oa() {
  for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    e[_key3] = arguments[_key3];
  }
  var t = e[0];
  if (e.length === 1) return t;
  var n = function n() {
    var r = e.map(function (o) {
      return {
        useScope: o(),
        scopeName: o.scopeName
      };
    });
    return function (a) {
      var c = r.reduce(function (i, _ref3) {
        var l = _ref3.useScope,
          u = _ref3.scopeName;
        var f = l(a)["__scope".concat(u)];
        return _objectSpread(_objectSpread({}, i), f);
      }, {});
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
        return _defineProperty({}, "__scope".concat(t.scopeName), c);
      }, [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var gn = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
  var n = e.children,
    r = _objectWithoutProperties(e, _excluded2),
    o = react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(n),
    a = o.find(ia);
  if (a) {
    var c = a.props.children,
      i = o.map(function (l) {
        return l === a ? react__WEBPACK_IMPORTED_MODULE_1__.Children.count(c) > 1 ? react__WEBPACK_IMPORTED_MODULE_1__.Children.only(null) : /* @__PURE__ */ /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(c) ? c.props.children : null : l;
      });
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(un, W({}, r, {
      ref: t
    }), /* @__PURE__ */ /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(c) ? /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(c, void 0, i) : null);
  }
  return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(un, W({}, r, {
    ref: t
  }), n);
});
gn.displayName = "Slot";
var un = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
  var n = e.children,
    r = _objectWithoutProperties(e, _excluded3);
  return /* @__PURE__ */ /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(n) ? /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(n, _objectSpread(_objectSpread({}, ca(r, n.props)), {}, {
    ref: t ? Sr(t, n.ref) : n.ref
  })) : react__WEBPACK_IMPORTED_MODULE_1__.Children.count(n) > 1 ? react__WEBPACK_IMPORTED_MODULE_1__.Children.only(null) : null;
});
un.displayName = "SlotClone";
var aa = function aa(_ref5) {
  var e = _ref5.children;
  return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, e);
};
function ia(e) {
  return /* @__PURE__ */ /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(e) && e.type === aa;
}
function ca(e, t) {
  var n = _objectSpread({}, t);
  var _loop = function _loop() {
    var o = e[r],
      a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = function () {
      a.apply(void 0, arguments), o.apply(void 0, arguments);
    } : o && (n[r] = o) : r === "style" ? n[r] = _objectSpread(_objectSpread({}, o), a) : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  };
  for (var r in t) {
    _loop();
  }
  return _objectSpread(_objectSpread({}, e), n);
}
var sa = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  $e = sa.reduce(function (e, t) {
    var n = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (r, o) {
      var a = r.asChild,
        c = _objectWithoutProperties(r, _excluded4),
        i = a ? gn : t;
      return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        window[Symbol["for"]("radix-ui")] = !0;
      }, []), /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(i, W({}, c, {
        ref: o
      }));
    });
    return n.displayName = "Primitive.".concat(t), _objectSpread(_objectSpread({}, e), {}, _defineProperty({}, t, n));
  }, {});
function la(e, t) {
  e && (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync)(function () {
    return e.dispatchEvent(t);
  });
}
function be(e) {
  var t = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(e);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    t.current = e;
  }), (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return function () {
      var _r2;
      var r;
      for (var _len4 = arguments.length, n = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        n[_key4] = arguments[_key4];
      }
      return (r = t.current) === null || r === void 0 ? void 0 : (_r2 = r).call.apply(_r2, [t].concat(n));
    };
  }, []);
}
function ua(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis == null ? void 0 : globalThis.document;
  var n = be(e);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var r = function r(o) {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r), function () {
      return t.removeEventListener("keydown", r);
    };
  }, [n, t]);
}
var fn = "dismissableLayer.update",
  fa = "dismissableLayer.pointerDownOutside",
  da = "dismissableLayer.focusOutside";
var kn;
var pa = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    layers: /* @__PURE__ */new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */new Set(),
    branches: /* @__PURE__ */new Set()
  }),
  va = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n;
    var _e$disableOutsidePoin = e.disableOutsidePointerEvents,
      r = _e$disableOutsidePoin === void 0 ? !1 : _e$disableOutsidePoin,
      o = e.onEscapeKeyDown,
      a = e.onPointerDownOutside,
      c = e.onFocusOutside,
      i = e.onInteractOutside,
      l = e.onDismiss,
      u = _objectWithoutProperties(e, _excluded5),
      d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(pa),
      _ee = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _ee2 = _slicedToArray(_ee, 2),
      f = _ee2[0],
      v = _ee2[1],
      p = (n = f == null ? void 0 : f.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document,
      _ee3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _ee4 = _slicedToArray(_ee3, 2),
      m = _ee4[1],
      h = Oe(t, function ($) {
        return v($);
      }),
      b = Array.from(d.layers),
      _slice = _toConsumableArray(d.layersWithOutsidePointerEventsDisabled).slice(-1),
      _slice2 = _slicedToArray(_slice, 1),
      y = _slice2[0],
      C = b.indexOf(y),
      A = f ? b.indexOf(f) : -1,
      x = d.layersWithOutsidePointerEventsDisabled.size > 0,
      E = A >= C,
      _ = ha(function ($) {
        var B = $.target,
          X = _toConsumableArray(d.branches).some(function (q) {
            return q.contains(B);
          });
        !E || X || (a == null || a($), i == null || i($), $.defaultPrevented || l == null || l());
      }, p),
      R = ga(function ($) {
        var B = $.target;
        _toConsumableArray(d.branches).some(function (q) {
          return q.contains(B);
        }) || (c == null || c($), i == null || i($), $.defaultPrevented || l == null || l());
      }, p);
    return ua(function ($) {
      A === d.layers.size - 1 && (o == null || o($), !$.defaultPrevented && l && ($.preventDefault(), l()));
    }, p), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (kn = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Un(), function () {
        r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = kn);
      };
    }, [f, p, r, d]), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      return function () {
        f && (d.layers["delete"](f), d.layersWithOutsidePointerEventsDisabled["delete"](f), Un());
      };
    }, [f, d]), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      var $ = function $() {
        return m({});
      };
      return document.addEventListener(fn, $), function () {
        return document.removeEventListener(fn, $);
      };
    }, []), /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e.div, W({}, u, {
      ref: h,
      style: _objectSpread({
        pointerEvents: x ? E ? "auto" : "none" : void 0
      }, e.style),
      onFocusCapture: me(e.onFocusCapture, R.onFocusCapture),
      onBlurCapture: me(e.onBlurCapture, R.onBlurCapture),
      onPointerDownCapture: me(e.onPointerDownCapture, _.onPointerDownCapture)
    }));
  });
function ha(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis == null ? void 0 : globalThis.document;
  var n = be(e),
    r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1),
    o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(function () {});
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var a = function a(i) {
        if (i.target && !r.current) {
          var u = function u() {
            Rr(fa, n, l, {
              discrete: !0
            });
          };
          var l = {
            originalEvent: i
          };
          i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
            once: !0
          })) : u();
        } else t.removeEventListener("click", o.current);
        r.current = !1;
      },
      c = window.setTimeout(function () {
        t.addEventListener("pointerdown", a);
      }, 0);
    return function () {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: function onPointerDownCapture() {
      return r.current = !0;
    }
  };
}
function ga(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalThis == null ? void 0 : globalThis.document;
  var n = be(e),
    r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var o = function o(a) {
      a.target && !r.current && Rr(da, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), function () {
      return t.removeEventListener("focusin", o);
    };
  }, [t, n]), {
    onFocusCapture: function onFocusCapture() {
      return r.current = !0;
    },
    onBlurCapture: function onBlurCapture() {
      return r.current = !1;
    }
  };
}
function Un() {
  var e = new CustomEvent(fn);
  document.dispatchEvent(e);
}
function Rr(e, t, n, _ref6) {
  var r = _ref6.discrete;
  var o = n.originalEvent.target,
    a = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? la(o, a) : o.dispatchEvent(a);
}
var en = 0;
function ma() {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var e, t;
    var n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : zn()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : zn()), en++, function () {
      en === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(function (r) {
        return r.remove();
      }), en--;
    };
  }, []);
}
function zn() {
  var e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var tn = "focusScope.autoFocusOnMount",
  nn = "focusScope.autoFocusOnUnmount",
  Gn = {
    bubbles: !1,
    cancelable: !0
  },
  ba = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var _e$loop = e.loop,
      n = _e$loop === void 0 ? !1 : _e$loop,
      _e$trapped = e.trapped,
      r = _e$trapped === void 0 ? !1 : _e$trapped,
      o = e.onMountAutoFocus,
      a = e.onUnmountAutoFocus,
      c = _objectWithoutProperties(e, _excluded6),
      _ee5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _ee6 = _slicedToArray(_ee5, 2),
      i = _ee6[0],
      l = _ee6[1],
      u = be(o),
      d = be(a),
      f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),
      v = Oe(t, function (h) {
        return l(h);
      }),
      p = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        paused: !1,
        pause: function pause() {
          this.paused = !0;
        },
        resume: function resume() {
          this.paused = !1;
        }
      }).current;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (r) {
        var h = function h(A) {
            if (p.paused || !i) return;
            var x = A.target;
            i.contains(x) ? f.current = x : ge(f.current, {
              select: !0
            });
          },
          b = function b(A) {
            if (p.paused || !i) return;
            var x = A.relatedTarget;
            x !== null && (i.contains(x) || ge(f.current, {
              select: !0
            }));
          },
          y = function y(A) {
            if (document.activeElement === document.body) {
              var _iterator = _createForOfIteratorHelper(A),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var E = _step.value;
                  E.removedNodes.length > 0 && ge(i);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          };
        document.addEventListener("focusin", h), document.addEventListener("focusout", b);
        var C = new MutationObserver(y);
        return i && C.observe(i, {
          childList: !0,
          subtree: !0
        }), function () {
          document.removeEventListener("focusin", h), document.removeEventListener("focusout", b), C.disconnect();
        };
      }
    }, [r, i, p.paused]), (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      if (i) {
        qn.add(p);
        var h = document.activeElement;
        if (!i.contains(h)) {
          var y = new CustomEvent(tn, Gn);
          i.addEventListener(tn, u), i.dispatchEvent(y), y.defaultPrevented || (ya(Ea(Lr(i)), {
            select: !0
          }), document.activeElement === h && ge(i));
        }
        return function () {
          i.removeEventListener(tn, u), setTimeout(function () {
            var y = new CustomEvent(nn, Gn);
            i.addEventListener(nn, d), i.dispatchEvent(y), y.defaultPrevented || ge(h !== null && h !== void 0 ? h : document.body, {
              select: !0
            }), i.removeEventListener(nn, d), qn.remove(p);
          }, 0);
        };
      }
    }, [i, u, d, p]);
    var m = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (h) {
      if (!n && !r || p.paused) return;
      var b = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
        y = document.activeElement;
      if (b && y) {
        var C = h.currentTarget,
          _Ca = Ca(C),
          _Ca2 = _slicedToArray(_Ca, 2),
          A = _Ca2[0],
          x = _Ca2[1];
        A && x ? !h.shiftKey && y === x ? (h.preventDefault(), n && ge(A, {
          select: !0
        })) : h.shiftKey && y === A && (h.preventDefault(), n && ge(x, {
          select: !0
        })) : y === C && h.preventDefault();
      }
    }, [n, r, p.paused]);
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e.div, W({
      tabIndex: -1
    }, c, {
      ref: v,
      onKeyDown: m
    }));
  });
function ya(e) {
  var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref7$select = _ref7.select,
    t = _ref7$select === void 0 ? !1 : _ref7$select;
  var n = document.activeElement;
  var _iterator2 = _createForOfIteratorHelper(e),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var r = _step2.value;
      if (ge(r, {
        select: t
      }), document.activeElement !== n) return;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function Ca(e) {
  var t = Lr(e),
    n = Wn(t, e),
    r = Wn(t.reverse(), e);
  return [n, r];
}
function Lr(e) {
  var t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function acceptNode(r) {
        var o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Wn(e, t) {
  var _iterator3 = _createForOfIteratorHelper(e),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var n = _step3.value;
      if (!wa(n, {
        upTo: t
      })) return n;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
function wa(e, _ref8) {
  var t = _ref8.upTo;
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Aa(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ge(e) {
  var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref9$select = _ref9.select,
    t = _ref9$select === void 0 ? !1 : _ref9$select;
  if (e && e.focus) {
    var n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Aa(e) && t && e.select();
  }
}
var qn = xa();
function xa() {
  var e = [];
  return {
    add: function add(t) {
      var n = e[0];
      t !== n && (n == null || n.pause()), e = Xn(e, t), e.unshift(t);
    },
    remove: function remove(t) {
      var n;
      e = Xn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Xn(e, t) {
  var n = _toConsumableArray(e),
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ea(e) {
  return e.filter(function (t) {
    return t.tagName !== "A";
  });
}
var Ue = globalThis != null && globalThis.document ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : function () {},
  Pa = react__WEBPACK_IMPORTED_MODULE_1__.useId || function () {};
var Oa = 0;
function $a(e) {
  var _P$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(Pa()),
    _P$useState2 = _slicedToArray(_P$useState, 2),
    t = _P$useState2[0],
    n = _P$useState2[1];
  return Ue(function () {
    e || n(function (r) {
      return r !== null && r !== void 0 ? r : String(Oa++);
    });
  }, [e]), e || (t ? "radix-".concat(t) : "");
}
var _a = ["top", "right", "bottom", "left"],
  ye = Math.min,
  J = Math.max,
  $t = Math.round,
  ht = Math.floor,
  Ce = function Ce(e) {
    return {
      x: e,
      y: e
    };
  },
  Sa = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
  Ta = {
    start: "end",
    end: "start"
  };
function dn(e, t, n) {
  return J(e, ye(t, n));
}
function fe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function de(e) {
  return e.split("-")[0];
}
function Ge(e) {
  return e.split("-")[1];
}
function mn(e) {
  return e === "x" ? "y" : "x";
}
function bn(e) {
  return e === "y" ? "height" : "width";
}
function We(e) {
  return ["top", "bottom"].includes(de(e)) ? "y" : "x";
}
function yn(e) {
  return mn(We(e));
}
function Ra(e, t, n) {
  n === void 0 && (n = !1);
  var r = Ge(e),
    o = yn(e),
    a = bn(o);
  var c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = _t(c)), [c, _t(c)];
}
function La(e) {
  var t = _t(e);
  return [pn(e), t, pn(t)];
}
function pn(e) {
  return e.replace(/start|end/g, function (t) {
    return Ta[t];
  });
}
function Fa(e, t, n) {
  var r = ["left", "right"],
    o = ["right", "left"],
    a = ["top", "bottom"],
    c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : c;
    default:
      return [];
  }
}
function Da(e, t, n, r) {
  var o = Ge(e);
  var a = Fa(de(e), n === "start", r);
  return o && (a = a.map(function (c) {
    return c + "-" + o;
  }), t && (a = a.concat(a.map(pn)))), a;
}
function _t(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Sa[t];
  });
}
function ja(e) {
  return _objectSpread({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, e);
}
function Fr(e) {
  return typeof e != "number" ? ja(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function St(e) {
  return _objectSpread(_objectSpread({}, e), {}, {
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Yn(e, t, n) {
  var r = e.reference,
    o = e.floating;
  var a = We(t),
    c = yn(t),
    i = bn(c),
    l = de(t),
    u = a === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    v = r[i] / 2 - o[i] / 2;
  var p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ge(t)) {
    case "start":
      p[c] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      p[c] += v * (n && u ? -1 : 1);
      break;
  }
  return p;
}
var Ma = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e, t, n) {
    var _n$placement, r, _n$strategy, o, _n$middleware, a, c, i, l, u, _Yn, d, f, v, p, m, h, _i$h, b, y, _yield$y, C, A, x, E, _Yn2;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _n$placement = n.placement;
          r = _n$placement === void 0 ? "bottom" : _n$placement;
          _n$strategy = n.strategy;
          o = _n$strategy === void 0 ? "absolute" : _n$strategy;
          _n$middleware = n.middleware;
          a = _n$middleware === void 0 ? [] : _n$middleware;
          c = n.platform;
          i = a.filter(Boolean);
          _context.next = 10;
          return c.isRTL == null ? void 0 : c.isRTL(t);
        case 10:
          l = _context.sent;
          _context.next = 13;
          return c.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          });
        case 13:
          u = _context.sent;
          _Yn = Yn(u, r, l);
          d = _Yn.x;
          f = _Yn.y;
          v = r;
          p = {};
          m = 0;
          h = 0;
        case 21:
          if (!(h < i.length)) {
            _context.next = 53;
            break;
          }
          _i$h = i[h];
          b = _i$h.name;
          y = _i$h.fn;
          _context.next = 27;
          return y({
            x: d,
            y: f,
            initialPlacement: r,
            placement: v,
            strategy: o,
            middlewareData: p,
            rects: u,
            platform: c,
            elements: {
              reference: e,
              floating: t
            }
          });
        case 27:
          _yield$y = _context.sent;
          C = _yield$y.x;
          A = _yield$y.y;
          x = _yield$y.data;
          E = _yield$y.reset;
          if (!(d = C !== null && C !== void 0 ? C : d, f = A !== null && A !== void 0 ? A : f, p = _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, b, _objectSpread(_objectSpread({}, p[b]), x))), E && m <= 50)) {
            _context.next = 50;
            break;
          }
          m++;
          _context.t0 = _typeof(E) == "object";
          if (!_context.t0) {
            _context.next = 48;
            break;
          }
          E.placement && (v = E.placement);
          _context.t1 = E.rects;
          if (!_context.t1) {
            _context.next = 47;
            break;
          }
          if (!(E.rects === !0)) {
            _context.next = 45;
            break;
          }
          _context.next = 42;
          return c.getElementRects({
            reference: e,
            floating: t,
            strategy: o
          });
        case 42:
          _context.t2 = _context.sent;
          _context.next = 46;
          break;
        case 45:
          _context.t2 = E.rects;
        case 46:
          u = _context.t2;
        case 47:
          _Yn2 = Yn(u, v, l), d = _Yn2.x, f = _Yn2.y;
        case 48:
          h = -1;
          return _context.abrupt("continue", 50);
        case 50:
          h++;
          _context.next = 21;
          break;
        case 53:
          return _context.abrupt("return", {
            x: d,
            y: f,
            placement: v,
            strategy: o,
            middlewareData: p
          });
        case 54:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Ma(_x, _x2, _x3) {
    return _ref10.apply(this, arguments);
  };
}();
function rt(_x4, _x5) {
  return _rt.apply(this, arguments);
}
function _rt() {
  _rt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e, t) {
    var n, r, o, a, c, i, l, _fe6, _fe6$boundary, u, _fe6$rootBoundary, d, _fe6$elementContext, f, _fe6$altBoundary, v, _fe6$padding, p, m, b, y, C, A, x, E;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          t === void 0 && (t = {});
          r = e.x;
          o = e.y;
          a = e.platform;
          c = e.rects;
          i = e.elements;
          l = e.strategy;
          _fe6 = fe(t, e);
          _fe6$boundary = _fe6.boundary;
          u = _fe6$boundary === void 0 ? "clippingAncestors" : _fe6$boundary;
          _fe6$rootBoundary = _fe6.rootBoundary;
          d = _fe6$rootBoundary === void 0 ? "viewport" : _fe6$rootBoundary;
          _fe6$elementContext = _fe6.elementContext;
          f = _fe6$elementContext === void 0 ? "floating" : _fe6$elementContext;
          _fe6$altBoundary = _fe6.altBoundary;
          v = _fe6$altBoundary === void 0 ? !1 : _fe6$altBoundary;
          _fe6$padding = _fe6.padding;
          p = _fe6$padding === void 0 ? 0 : _fe6$padding;
          m = Fr(p);
          b = i[v ? f === "floating" ? "reference" : "floating" : f];
          _context9.t0 = St;
          _context9.t1 = a;
          _context9.next = 24;
          return a.isElement == null ? void 0 : a.isElement(b);
        case 24:
          _context9.t3 = n = _context9.sent;
          _context9.t2 = _context9.t3 == null;
          if (_context9.t2) {
            _context9.next = 28;
            break;
          }
          _context9.t2 = n;
        case 28:
          if (!_context9.t2) {
            _context9.next = 32;
            break;
          }
          _context9.t4 = b;
          _context9.next = 38;
          break;
        case 32:
          _context9.t5 = b.contextElement;
          if (_context9.t5) {
            _context9.next = 37;
            break;
          }
          _context9.next = 36;
          return a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating);
        case 36:
          _context9.t5 = _context9.sent;
        case 37:
          _context9.t4 = _context9.t5;
        case 38:
          _context9.t6 = _context9.t4;
          _context9.t7 = u;
          _context9.t8 = d;
          _context9.t9 = l;
          _context9.t10 = {
            element: _context9.t6,
            boundary: _context9.t7,
            rootBoundary: _context9.t8,
            strategy: _context9.t9
          };
          _context9.next = 45;
          return _context9.t1.getClippingRect.call(_context9.t1, _context9.t10);
        case 45:
          _context9.t11 = _context9.sent;
          y = (0, _context9.t0)(_context9.t11);
          C = f === "floating" ? _objectSpread(_objectSpread({}, c.floating), {}, {
            x: r,
            y: o
          }) : c.reference;
          _context9.next = 50;
          return a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating);
        case 50:
          A = _context9.sent;
          _context9.next = 53;
          return a.isElement == null ? void 0 : a.isElement(A);
        case 53:
          if (!_context9.sent) {
            _context9.next = 62;
            break;
          }
          _context9.next = 56;
          return a.getScale == null ? void 0 : a.getScale(A);
        case 56:
          _context9.t13 = _context9.sent;
          if (_context9.t13) {
            _context9.next = 59;
            break;
          }
          _context9.t13 = {
            x: 1,
            y: 1
          };
        case 59:
          _context9.t12 = _context9.t13;
          _context9.next = 63;
          break;
        case 62:
          _context9.t12 = {
            x: 1,
            y: 1
          };
        case 63:
          x = _context9.t12;
          _context9.t14 = St;
          if (!a.convertOffsetParentRelativeRectToViewportRelativeRect) {
            _context9.next = 71;
            break;
          }
          _context9.next = 68;
          return a.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: C,
            offsetParent: A,
            strategy: l
          });
        case 68:
          _context9.t15 = _context9.sent;
          _context9.next = 72;
          break;
        case 71:
          _context9.t15 = C;
        case 72:
          _context9.t16 = _context9.t15;
          E = (0, _context9.t14)(_context9.t16);
          return _context9.abrupt("return", {
            top: (y.top - E.top + m.top) / x.y,
            bottom: (E.bottom - y.bottom + m.bottom) / x.y,
            left: (y.left - E.left + m.left) / x.x,
            right: (E.right - y.right + m.right) / x.x
          });
        case 75:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _rt.apply(this, arguments);
}
var Ia = function Ia(e) {
    return {
      name: "arrow",
      options: e,
      fn: function fn(t) {
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var n, r, o, a, c, i, l, _ref11, u, _ref11$padding, d, f, v, p, m, h, b, y, C, A, x, E, _, R, $, B, X, q, V, k, D, N, G, M;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                n = t.x, r = t.y, o = t.placement, a = t.rects, c = t.platform, i = t.elements, l = t.middlewareData, _ref11 = fe(e, t) || {}, u = _ref11.element, _ref11$padding = _ref11.padding, d = _ref11$padding === void 0 ? 0 : _ref11$padding;
                if (!(u == null)) {
                  _context2.next = 3;
                  break;
                }
                return _context2.abrupt("return", {});
              case 3:
                f = Fr(d);
                v = {
                  x: n,
                  y: r
                };
                p = yn(o);
                m = bn(p);
                _context2.next = 9;
                return c.getDimensions(u);
              case 9:
                h = _context2.sent;
                b = p === "y";
                y = b ? "top" : "left";
                C = b ? "bottom" : "right";
                A = b ? "clientHeight" : "clientWidth";
                x = a.reference[m] + a.reference[p] - v[p] - a.floating[m];
                E = v[p] - a.reference[p];
                _context2.next = 18;
                return c.getOffsetParent == null ? void 0 : c.getOffsetParent(u);
              case 18:
                _ = _context2.sent;
                R = _ ? _[A] : 0;
                _context2.t0 = !R;
                if (_context2.t0) {
                  _context2.next = 25;
                  break;
                }
                _context2.next = 24;
                return c.isElement == null ? void 0 : c.isElement(_);
              case 24:
                _context2.t0 = !_context2.sent;
              case 25:
                _context2.t1 = _context2.t0;
                if (!_context2.t1) {
                  _context2.next = 28;
                  break;
                }
                R = i.floating[A] || a.floating[m];
              case 28:
                $ = x / 2 - E / 2, B = R / 2 - h[m] / 2 - 1, X = ye(f[y], B), q = ye(f[C], B), V = X, k = R - h[m] - q, D = R / 2 - h[m] / 2 + $, N = dn(V, D, k), G = !l.arrow && Ge(o) != null && D != N && a.reference[m] / 2 - (D < V ? X : q) - h[m] / 2 < 0, M = G ? D < V ? D - V : D - k : 0;
                return _context2.abrupt("return", _defineProperty(_defineProperty(_defineProperty({}, p, v[p] + M), "data", _objectSpread(_defineProperty(_defineProperty({}, p, N), "centerOffset", D - N - M), G && {
                  alignmentOffset: M
                })), "reset", G));
              case 30:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
    };
  },
  Na = function Na(e) {
    return e === void 0 && (e = {}), {
      name: "flip",
      options: e,
      fn: function fn(t) {
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var n, r, o, a, c, i, l, u, _fe, _fe$mainAxis, d, _fe$crossAxis, f, v, _fe$fallbackStrategy, p, _fe$fallbackAxisSideD, m, _fe$flipAlignment, h, b, y, C, A, x, E, _, R, $, V, B, X, _V, k, D, q, N;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                o = t.placement, a = t.middlewareData, c = t.rects, i = t.initialPlacement, l = t.platform, u = t.elements, _fe = fe(e, t), _fe$mainAxis = _fe.mainAxis, d = _fe$mainAxis === void 0 ? !0 : _fe$mainAxis, _fe$crossAxis = _fe.crossAxis, f = _fe$crossAxis === void 0 ? !0 : _fe$crossAxis, v = _fe.fallbackPlacements, _fe$fallbackStrategy = _fe.fallbackStrategy, p = _fe$fallbackStrategy === void 0 ? "bestFit" : _fe$fallbackStrategy, _fe$fallbackAxisSideD = _fe.fallbackAxisSideDirection, m = _fe$fallbackAxisSideD === void 0 ? "none" : _fe$fallbackAxisSideD, _fe$flipAlignment = _fe.flipAlignment, h = _fe$flipAlignment === void 0 ? !0 : _fe$flipAlignment, b = _objectWithoutProperties(_fe, _excluded7);
                if (!((n = a.arrow) != null && n.alignmentOffset)) {
                  _context3.next = 3;
                  break;
                }
                return _context3.abrupt("return", {});
              case 3:
                y = de(o);
                C = de(i) === i;
                _context3.next = 7;
                return l.isRTL == null ? void 0 : l.isRTL(u.floating);
              case 7:
                A = _context3.sent;
                x = v || (C || !h ? [_t(i)] : La(i));
                !v && m !== "none" && x.push.apply(x, _toConsumableArray(Da(i, h, m, A)));
                E = [i].concat(_toConsumableArray(x));
                _context3.next = 13;
                return rt(t, b);
              case 13:
                _ = _context3.sent;
                R = [];
                $ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
                if (d && R.push(_[y]), f) {
                  V = Ra(o, c, A);
                  R.push(_[V[0]], _[V[1]]);
                }
                if (!($ = [].concat(_toConsumableArray($), [{
                  placement: o,
                  overflows: R
                }]), !R.every(function (V) {
                  return V <= 0;
                }))) {
                  _context3.next = 33;
                  break;
                }
                _V = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, k = E[_V];
                if (!k) {
                  _context3.next = 21;
                  break;
                }
                return _context3.abrupt("return", {
                  data: {
                    index: _V,
                    overflows: $
                  },
                  reset: {
                    placement: k
                  }
                });
              case 21:
                D = (X = $.filter(function (N) {
                  return N.overflows[0] <= 0;
                }).sort(function (N, G) {
                  return N.overflows[1] - G.overflows[1];
                })[0]) == null ? void 0 : X.placement;
                if (D) {
                  _context3.next = 31;
                  break;
                }
                _context3.t0 = p;
                _context3.next = _context3.t0 === "bestFit" ? 26 : _context3.t0 === "initialPlacement" ? 29 : 31;
                break;
              case 26:
                N = (q = $.map(function (G) {
                  return [G.placement, G.overflows.filter(function (M) {
                    return M > 0;
                  }).reduce(function (M, ae) {
                    return M + ae;
                  }, 0)];
                }).sort(function (G, M) {
                  return G[1] - M[1];
                })[0]) == null ? void 0 : q[0];
                N && (D = N);
                return _context3.abrupt("break", 31);
              case 29:
                D = i;
                return _context3.abrupt("break", 31);
              case 31:
                if (!(o !== D)) {
                  _context3.next = 33;
                  break;
                }
                return _context3.abrupt("return", {
                  reset: {
                    placement: D
                  }
                });
              case 33:
                return _context3.abrupt("return", {});
              case 34:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
    };
  };
function Kn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Zn(e) {
  return _a.some(function (t) {
    return e[t] >= 0;
  });
}
var Ba = function Ba(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    fn: function fn(t) {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var n, _fe2, _fe2$strategy, r, o, a, c, _a2, _c2;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              n = t.rects, _fe2 = fe(e, t), _fe2$strategy = _fe2.strategy, r = _fe2$strategy === void 0 ? "referenceHidden" : _fe2$strategy, o = _objectWithoutProperties(_fe2, _excluded8);
              _context4.t0 = r;
              _context4.next = _context4.t0 === "referenceHidden" ? 4 : _context4.t0 === "escaped" ? 9 : 14;
              break;
            case 4:
              _context4.next = 6;
              return rt(t, _objectSpread(_objectSpread({}, o), {}, {
                elementContext: "reference"
              }));
            case 6:
              a = _context4.sent;
              c = Kn(a, n.reference);
              return _context4.abrupt("return", {
                data: {
                  referenceHiddenOffsets: c,
                  referenceHidden: Zn(c)
                }
              });
            case 9:
              _context4.next = 11;
              return rt(t, _objectSpread(_objectSpread({}, o), {}, {
                altBoundary: !0
              }));
            case 11:
              _a2 = _context4.sent;
              _c2 = Kn(_a2, n.floating);
              return _context4.abrupt("return", {
                data: {
                  escapedOffsets: _c2,
                  escaped: Zn(_c2)
                }
              });
            case 14:
              return _context4.abrupt("return", {});
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    }
  };
};
function Va(_x6, _x7) {
  return _Va.apply(this, arguments);
}
function _Va() {
  _Va = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e, t) {
    var n, r, o, a, c, i, l, u, d, f, _ref22, v, p, m;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          n = e.placement;
          r = e.platform;
          o = e.elements;
          _context10.next = 5;
          return r.isRTL == null ? void 0 : r.isRTL(o.floating);
        case 5:
          a = _context10.sent;
          c = de(n);
          i = Ge(n);
          l = We(n) === "y";
          u = ["left", "top"].includes(c) ? -1 : 1;
          d = a && l ? -1 : 1;
          f = fe(t, e);
          _ref22 = typeof f == "number" ? {
            mainAxis: f,
            crossAxis: 0,
            alignmentAxis: null
          } : _objectSpread({
            mainAxis: 0,
            crossAxis: 0,
            alignmentAxis: null
          }, f), v = _ref22.mainAxis, p = _ref22.crossAxis, m = _ref22.alignmentAxis;
          return _context10.abrupt("return", (i && typeof m == "number" && (p = i === "end" ? m * -1 : m), l ? {
            x: p * d,
            y: v * u
          } : {
            x: v * u,
            y: p * d
          }));
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _Va.apply(this, arguments);
}
var Ha = function Ha(e) {
    return e === void 0 && (e = 0), {
      name: "offset",
      options: e,
      fn: function fn(t) {
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var n, r, o, a, c, i, l;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                o = t.x;
                a = t.y;
                c = t.placement;
                i = t.middlewareData;
                _context5.next = 6;
                return Va(t, e);
              case 6:
                l = _context5.sent;
                return _context5.abrupt("return", c === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
                  x: o + l.x,
                  y: a + l.y,
                  data: _objectSpread(_objectSpread({}, l), {}, {
                    placement: c
                  })
                });
              case 8:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }
    };
  },
  ka = function ka(e) {
    return e === void 0 && (e = {}), {
      name: "shift",
      options: e,
      fn: function fn(t) {
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          var n, r, o, _fe3, _fe3$mainAxis, a, _fe3$crossAxis, c, _fe3$limiter, i, l, u, d, f, v, p, m, b, y, C, A, _b, _y, _C, _A, h;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                n = t.x;
                r = t.y;
                o = t.placement;
                _fe3 = fe(e, t);
                _fe3$mainAxis = _fe3.mainAxis;
                a = _fe3$mainAxis === void 0 ? !0 : _fe3$mainAxis;
                _fe3$crossAxis = _fe3.crossAxis;
                c = _fe3$crossAxis === void 0 ? !1 : _fe3$crossAxis;
                _fe3$limiter = _fe3.limiter;
                i = _fe3$limiter === void 0 ? {
                  fn: function fn(b) {
                    var y = b.x,
                      C = b.y;
                    return {
                      x: y,
                      y: C
                    };
                  }
                } : _fe3$limiter;
                l = _objectWithoutProperties(_fe3, _excluded9);
                u = {
                  x: n,
                  y: r
                };
                _context6.next = 14;
                return rt(t, l);
              case 14:
                d = _context6.sent;
                f = We(de(o));
                v = mn(f);
                p = u[v], m = u[f];
                if (a) {
                  b = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", C = p + d[b], A = p - d[y];
                  p = dn(C, p, A);
                }
                if (c) {
                  _b = f === "y" ? "top" : "left", _y = f === "y" ? "bottom" : "right", _C = m + d[_b], _A = m - d[_y];
                  m = dn(_C, m, _A);
                }
                h = i.fn(_objectSpread(_objectSpread({}, t), {}, _defineProperty(_defineProperty({}, v, p), f, m)));
                return _context6.abrupt("return", _objectSpread(_objectSpread({}, h), {}, {
                  data: {
                    x: h.x - n,
                    y: h.y - r
                  }
                }));
              case 22:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }
    };
  },
  Ua = function Ua(e) {
    return e === void 0 && (e = {}), {
      options: e,
      fn: function fn(t) {
        var n = t.x,
          r = t.y,
          o = t.placement,
          a = t.rects,
          c = t.middlewareData,
          _fe4 = fe(e, t),
          _fe4$offset = _fe4.offset,
          i = _fe4$offset === void 0 ? 0 : _fe4$offset,
          _fe4$mainAxis = _fe4.mainAxis,
          l = _fe4$mainAxis === void 0 ? !0 : _fe4$mainAxis,
          _fe4$crossAxis = _fe4.crossAxis,
          u = _fe4$crossAxis === void 0 ? !0 : _fe4$crossAxis,
          d = {
            x: n,
            y: r
          },
          f = We(o),
          v = mn(f);
        var p = d[v],
          m = d[f];
        var h = fe(i, t),
          b = typeof h == "number" ? {
            mainAxis: h,
            crossAxis: 0
          } : _objectSpread({
            mainAxis: 0,
            crossAxis: 0
          }, h);
        if (l) {
          var A = v === "y" ? "height" : "width",
            x = a.reference[v] - a.floating[A] + b.mainAxis,
            E = a.reference[v] + a.reference[A] - b.mainAxis;
          p < x ? p = x : p > E && (p = E);
        }
        if (u) {
          var y, C;
          var _A2 = v === "y" ? "width" : "height",
            _x8 = ["top", "left"].includes(de(o)),
            _E = a.reference[f] - a.floating[_A2] + (_x8 && ((y = c.offset) == null ? void 0 : y[f]) || 0) + (_x8 ? 0 : b.crossAxis),
            _ = a.reference[f] + a.reference[_A2] + (_x8 ? 0 : ((C = c.offset) == null ? void 0 : C[f]) || 0) - (_x8 ? b.crossAxis : 0);
          m < _E ? m = _E : m > _ && (m = _);
        }
        return _defineProperty(_defineProperty({}, v, p), f, m);
      }
    };
  },
  za = function za(e) {
    return e === void 0 && (e = {}), {
      name: "size",
      options: e,
      fn: function fn(t) {
        return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
          var n, r, o, a, _fe5, _fe5$apply, c, i, l, u, d, f, _r$floating, v, p, m, h, b, y, C, A, x, _, _3, _4, R, $, B, E;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                n = t.placement;
                r = t.rects;
                o = t.platform;
                a = t.elements;
                _fe5 = fe(e, t);
                _fe5$apply = _fe5.apply;
                c = _fe5$apply === void 0 ? function () {} : _fe5$apply;
                i = _objectWithoutProperties(_fe5, _excluded10);
                _context7.next = 10;
                return rt(t, i);
              case 10:
                l = _context7.sent;
                u = de(n);
                d = Ge(n);
                f = We(n) === "y";
                _r$floating = r.floating;
                v = _r$floating.width;
                p = _r$floating.height;
                if (!(u === "top" || u === "bottom")) {
                  _context7.next = 36;
                  break;
                }
                m = u;
                _context7.t0 = d;
                _context7.next = 22;
                return o.isRTL == null ? void 0 : o.isRTL(a.floating);
              case 22:
                if (!_context7.sent) {
                  _context7.next = 26;
                  break;
                }
                _context7.t1 = "start";
                _context7.next = 27;
                break;
              case 26:
                _context7.t1 = "end";
              case 27:
                _context7.t2 = _context7.t1;
                if (!(_context7.t0 === _context7.t2)) {
                  _context7.next = 32;
                  break;
                }
                _context7.t3 = "left";
                _context7.next = 33;
                break;
              case 32:
                _context7.t3 = "right";
              case 33:
                h = _context7.t3;
                _context7.next = 37;
                break;
              case 36:
                h = u, m = d === "end" ? "top" : "bottom";
              case 37:
                b = p - l[m], y = v - l[h], C = !t.middlewareData.shift;
                A = b, x = y;
                if (f) {
                  _ = v - l.left - l.right;
                  x = d || C ? ye(y, _) : _;
                } else {
                  _3 = p - l.top - l.bottom;
                  A = d || C ? ye(b, _3) : _3;
                }
                if (C && !d) {
                  _4 = J(l.left, 0), R = J(l.right, 0), $ = J(l.top, 0), B = J(l.bottom, 0);
                  f ? x = v - 2 * (_4 !== 0 || R !== 0 ? _4 + R : J(l.left, l.right)) : A = p - 2 * ($ !== 0 || B !== 0 ? $ + B : J(l.top, l.bottom));
                }
                _context7.next = 43;
                return c(_objectSpread(_objectSpread({}, t), {}, {
                  availableWidth: x,
                  availableHeight: A
                }));
              case 43:
                _context7.next = 45;
                return o.getDimensions(a.floating);
              case 45:
                E = _context7.sent;
                return _context7.abrupt("return", v !== E.width || p !== E.height ? {
                  reset: {
                    rects: !0
                  }
                } : {});
              case 47:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }))();
      }
    };
  };
function we(e) {
  return Dr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ve(e) {
  var t;
  return (t = (Dr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Dr(e) {
  return e instanceof Node || e instanceof te(e).Node;
}
function pe(e) {
  return e instanceof Element || e instanceof te(e).Element;
}
function le(e) {
  return e instanceof HTMLElement || e instanceof te(e).HTMLElement;
}
function Qn(e) {
  return (typeof ShadowRoot === "undefined" ? "undefined" : _typeof(ShadowRoot)) > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
function ct(e) {
  var _oe = oe(e),
    t = _oe.overflow,
    n = _oe.overflowX,
    r = _oe.overflowY,
    o = _oe.display;
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ga(e) {
  return ["table", "td", "th"].includes(we(e));
}
function Cn(e) {
  var t = wn(),
    n = oe(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(function (r) {
    return (n.willChange || "").includes(r);
  }) || ["paint", "layout", "strict", "content"].some(function (r) {
    return (n.contain || "").includes(r);
  });
}
function Wa(e) {
  var t = ze(e);
  for (; le(t) && !Dt(t);) {
    if (Cn(t)) return t;
    t = ze(t);
  }
  return null;
}
function wn() {
  return (typeof CSS === "undefined" ? "undefined" : _typeof(CSS)) > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Dt(e) {
  return ["html", "body", "#document"].includes(we(e));
}
function oe(e) {
  return te(e).getComputedStyle(e);
}
function jt(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function ze(e) {
  if (we(e) === "html") return e;
  var t =
  // Step into the shadow DOM of the parent of a slotted node.
  e.assignedSlot ||
  // DOM Element detected.
  e.parentNode ||
  // ShadowRoot detected.
  Qn(e) && e.host ||
  // Fallback.
  ve(e);
  return Qn(t) ? t.host : t;
}
function jr(e) {
  var t = ze(e);
  return Dt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : le(t) && ct(t) ? t : jr(t);
}
function ot(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  var o = jr(e),
    a = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    c = te(o);
  return a ? t.concat(c, c.visualViewport || [], ct(o) ? o : [], c.frameElement && n ? ot(c.frameElement) : []) : t.concat(o, ot(o, [], n));
}
function Mr(e) {
  var t = oe(e);
  var n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  var o = le(e),
    a = o ? e.offsetWidth : n,
    c = o ? e.offsetHeight : r,
    i = $t(n) !== a || $t(r) !== c;
  return i && (n = a, r = c), {
    width: n,
    height: r,
    $: i
  };
}
function An(e) {
  return pe(e) ? e : e.contextElement;
}
function ke(e) {
  var t = An(e);
  if (!le(t)) return Ce(1);
  var n = t.getBoundingClientRect(),
    _Mr = Mr(t),
    r = _Mr.width,
    o = _Mr.height,
    a = _Mr.$;
  var c = (a ? $t(n.width) : n.width) / r,
    i = (a ? $t(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: c,
    y: i
  };
}
var qa = /* @__PURE__ */Ce(0);
function Ir(e) {
  var t = te(e);
  return !wn() || !t.visualViewport ? qa : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Xa(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function Pe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(),
    a = An(e);
  var c = Ce(1);
  t && (r ? pe(r) && (c = ke(r)) : c = ke(e));
  var i = Xa(a, n, r) ? Ir(a) : Ce(0);
  var l = (o.left + i.x) / c.x,
    u = (o.top + i.y) / c.y,
    d = o.width / c.x,
    f = o.height / c.y;
  if (a) {
    var v = te(a),
      p = r && pe(r) ? te(r) : r;
    var m = v.frameElement;
    for (; m && r && p !== v;) {
      var h = ke(m),
        b = m.getBoundingClientRect(),
        y = oe(m),
        C = b.left + (m.clientLeft + parseFloat(y.paddingLeft)) * h.x,
        A = b.top + (m.clientTop + parseFloat(y.paddingTop)) * h.y;
      l *= h.x, u *= h.y, d *= h.x, f *= h.y, l += C, u += A, m = te(m).frameElement;
    }
  }
  return St({
    width: d,
    height: f,
    x: l,
    y: u
  });
}
function Ya(e) {
  var t = e.rect,
    n = e.offsetParent,
    r = e.strategy;
  var o = le(n),
    a = ve(n);
  if (n === a) return t;
  var c = {
      scrollLeft: 0,
      scrollTop: 0
    },
    i = Ce(1);
  var l = Ce(0);
  if ((o || !o && r !== "fixed") && ((we(n) !== "body" || ct(a)) && (c = jt(n)), le(n))) {
    var u = Pe(n);
    i = ke(n), l.x = u.x + n.clientLeft, l.y = u.y + n.clientTop;
  }
  return {
    width: t.width * i.x,
    height: t.height * i.y,
    x: t.x * i.x - c.scrollLeft * i.x + l.x,
    y: t.y * i.y - c.scrollTop * i.y + l.y
  };
}
function Ka(e) {
  return Array.from(e.getClientRects());
}
function Nr(e) {
  return Pe(ve(e)).left + jt(e).scrollLeft;
}
function Za(e) {
  var t = ve(e),
    n = jt(e),
    r = e.ownerDocument.body,
    o = J(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    a = J(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  var c = -n.scrollLeft + Nr(e);
  var i = -n.scrollTop;
  return oe(r).direction === "rtl" && (c += J(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: c,
    y: i
  };
}
function Qa(e, t) {
  var n = te(e),
    r = ve(e),
    o = n.visualViewport;
  var a = r.clientWidth,
    c = r.clientHeight,
    i = 0,
    l = 0;
  if (o) {
    a = o.width, c = o.height;
    var u = wn();
    (!u || u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: i,
    y: l
  };
}
function Ja(e, t) {
  var n = Pe(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    a = le(e) ? ke(e) : Ce(1),
    c = e.clientWidth * a.x,
    i = e.clientHeight * a.y,
    l = o * a.x,
    u = r * a.y;
  return {
    width: c,
    height: i,
    x: l,
    y: u
  };
}
function Jn(e, t, n) {
  var r;
  if (t === "viewport") r = Qa(e, n);else if (t === "document") r = Za(ve(e));else if (pe(t)) r = Ja(t, n);else {
    var o = Ir(e);
    r = _objectSpread(_objectSpread({}, t), {}, {
      x: t.x - o.x,
      y: t.y - o.y
    });
  }
  return St(r);
}
function Br(e, t) {
  var n = ze(e);
  return n === t || !pe(n) || Dt(n) ? !1 : oe(n).position === "fixed" || Br(n, t);
}
function ei(e, t) {
  var n = t.get(e);
  if (n) return n;
  var r = ot(e, [], !1).filter(function (i) {
      return pe(i) && we(i) !== "body";
    }),
    o = null;
  var a = oe(e).position === "fixed";
  var c = a ? ze(e) : e;
  for (; pe(c) && !Dt(c);) {
    var i = oe(c),
      l = Cn(c);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ct(c) && !l && Br(e, c)) ? r = r.filter(function (d) {
      return d !== c;
    }) : o = i, c = ze(c);
  }
  return t.set(e, r), r;
}
function ti(e) {
  var t = e.element,
    n = e.boundary,
    r = e.rootBoundary,
    o = e.strategy;
  var c = [].concat(_toConsumableArray(n === "clippingAncestors" ? ei(t, this._c) : [].concat(n)), [r]),
    i = c[0],
    l = c.reduce(function (u, d) {
      var f = Jn(t, d, o);
      return u.top = J(f.top, u.top), u.right = ye(f.right, u.right), u.bottom = ye(f.bottom, u.bottom), u.left = J(f.left, u.left), u;
    }, Jn(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ni(e) {
  var _Mr2 = Mr(e),
    t = _Mr2.width,
    n = _Mr2.height;
  return {
    width: t,
    height: n
  };
}
function ri(e, t, n) {
  var r = le(t),
    o = ve(t),
    a = n === "fixed",
    c = Pe(e, !0, a, t);
  var i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var l = Ce(0);
  if (r || !r && !a) if ((we(t) !== "body" || ct(o)) && (i = jt(t)), r) {
    var u = Pe(t, !0, a, t);
    l.x = u.x + t.clientLeft, l.y = u.y + t.clientTop;
  } else o && (l.x = Nr(o));
  return {
    x: c.left + i.scrollLeft - l.x,
    y: c.top + i.scrollTop - l.y,
    width: c.width,
    height: c.height
  };
}
function er(e, t) {
  return !le(e) || oe(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Vr(e, t) {
  var n = te(e);
  if (!le(e)) return n;
  var r = er(e, t);
  for (; r && Ga(r) && oe(r).position === "static";) r = er(r, t);
  return r && (we(r) === "html" || we(r) === "body" && oe(r).position === "static" && !Cn(r)) ? n : r || Wa(e) || n;
}
var oi = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
    var t, n, r, o, a;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          t = e.reference, n = e.floating, r = e.strategy;
          o = this.getOffsetParent || Vr, a = this.getDimensions;
          _context8.t0 = ri;
          _context8.t1 = t;
          _context8.next = 6;
          return o(n);
        case 6:
          _context8.t2 = _context8.sent;
          _context8.t3 = r;
          _context8.t4 = (0, _context8.t0)(_context8.t1, _context8.t2, _context8.t3);
          _context8.t5 = _objectSpread;
          _context8.t6 = {
            x: 0,
            y: 0
          };
          _context8.next = 13;
          return a(n);
        case 13:
          _context8.t7 = _context8.sent;
          _context8.t8 = (0, _context8.t5)(_context8.t6, _context8.t7);
          return _context8.abrupt("return", {
            reference: _context8.t4,
            floating: _context8.t8
          });
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  }));
  return function oi(_x9) {
    return _ref14.apply(this, arguments);
  };
}();
function ai(e) {
  return oe(e).direction === "rtl";
}
var ii = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ya,
  getDocumentElement: ve,
  getClippingRect: ti,
  getOffsetParent: Vr,
  getElementRects: oi,
  getClientRects: Ka,
  getDimensions: ni,
  getScale: ke,
  isElement: pe,
  isRTL: ai
};
function ci(e, t) {
  var n = null,
    r;
  var o = ve(e);
  function a() {
    clearTimeout(r), n && n.disconnect(), n = null;
  }
  function c(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    var _e$getBoundingClientR = e.getBoundingClientRect(),
      u = _e$getBoundingClientR.left,
      d = _e$getBoundingClientR.top,
      f = _e$getBoundingClientR.width,
      v = _e$getBoundingClientR.height;
    if (i || t(), !f || !v) return;
    var p = ht(d),
      m = ht(o.clientWidth - (u + f)),
      h = ht(o.clientHeight - (d + v)),
      b = ht(u),
      C = {
        rootMargin: -p + "px " + -m + "px " + -h + "px " + -b + "px",
        threshold: J(0, ye(1, l)) || 1
      };
    var A = !0;
    function x(E) {
      var _ = E[0].intersectionRatio;
      if (_ !== l) {
        if (!A) return c();
        _ ? c(!1, _) : r = setTimeout(function () {
          c(!1, 1e-7);
        }, 100);
      }
      A = !1;
    }
    try {
      n = new IntersectionObserver(x, _objectSpread(_objectSpread({}, C), {}, {
        // Handle <iframe>s
        root: o.ownerDocument
      }));
    } catch (_unused4) {
      n = new IntersectionObserver(x, C);
    }
    n.observe(e);
  }
  return c(!0), a;
}
function si(e, t, n, r) {
  r === void 0 && (r = {});
  var _r3 = r,
    _r3$ancestorScroll = _r3.ancestorScroll,
    o = _r3$ancestorScroll === void 0 ? !0 : _r3$ancestorScroll,
    _r3$ancestorResize = _r3.ancestorResize,
    a = _r3$ancestorResize === void 0 ? !0 : _r3$ancestorResize,
    _r3$elementResize = _r3.elementResize,
    c = _r3$elementResize === void 0 ? typeof ResizeObserver == "function" : _r3$elementResize,
    _r3$layoutShift = _r3.layoutShift,
    i = _r3$layoutShift === void 0 ? typeof IntersectionObserver == "function" : _r3$layoutShift,
    _r3$animationFrame = _r3.animationFrame,
    l = _r3$animationFrame === void 0 ? !1 : _r3$animationFrame,
    u = An(e),
    d = o || a ? [].concat(_toConsumableArray(u ? ot(u) : []), _toConsumableArray(ot(t))) : [];
  d.forEach(function (y) {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), a && y.addEventListener("resize", n);
  });
  var f = u && i ? ci(u, n) : null;
  var v = -1,
    p = null;
  c && (p = new ResizeObserver(function (y) {
    var _y2 = _slicedToArray(y, 1),
      C = _y2[0];
    C && C.target === u && p && (p.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(function () {
      p && p.observe(t);
    })), n();
  }), u && !l && p.observe(u), p.observe(t));
  var m,
    h = l ? Pe(e) : null;
  l && b();
  function b() {
    var y = Pe(e);
    h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && n(), h = y, m = requestAnimationFrame(b);
  }
  return n(), function () {
    d.forEach(function (y) {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f && f(), p && p.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
var li = ka,
  ui = Na,
  fi = za,
  di = Ba,
  tr = Ia,
  pi = Ua,
  vi = function vi(e, t, n) {
    var r = /* @__PURE__ */new Map(),
      o = _objectSpread({
        platform: ii
      }, n),
      a = _objectSpread(_objectSpread({}, o.platform), {}, {
        _c: r
      });
    return Ma(e, t, _objectSpread(_objectSpread({}, o), {}, {
      platform: a
    }));
  },
  hi = function hi(e) {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn: function fn(n) {
        var _ref15 = typeof e == "function" ? e(n) : e,
          r = _ref15.element,
          o = _ref15.padding;
        return r && t(r) ? r.current != null ? tr({
          element: r.current,
          padding: o
        }).fn(n) : {} : r ? tr({
          element: r,
          padding: o
        }).fn(n) : {};
      }
    };
  };
var wt = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;
function Tt(e, t) {
  if (e === t) return !0;
  if (_typeof(e) != _typeof(t)) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  var n, r, o;
  if (e && t && _typeof(e) == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0;) if (!Tt(e[r], t[r])) return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0;) {
      var a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Tt(e[a], t[a])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Hr(e) {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nr(e, t) {
  var n = Hr(e);
  return Math.round(t * n) / n;
}
function rr(e) {
  var t = react__WEBPACK_IMPORTED_MODULE_1__.useRef(e);
  return wt(function () {
    t.current = e;
  }), t;
}
function gi(e) {
  e === void 0 && (e = {});
  var _e2 = e,
    _e2$placement = _e2.placement,
    t = _e2$placement === void 0 ? "bottom" : _e2$placement,
    _e2$strategy = _e2.strategy,
    n = _e2$strategy === void 0 ? "absolute" : _e2$strategy,
    _e2$middleware = _e2.middleware,
    r = _e2$middleware === void 0 ? [] : _e2$middleware,
    o = _e2.platform,
    _e2$elements = _e2.elements,
    _e2$elements2 = _e2$elements === void 0 ? {} : _e2$elements,
    a = _e2$elements2.reference,
    c = _e2$elements2.floating,
    _e2$transform = _e2.transform,
    i = _e2$transform === void 0 ? !0 : _e2$transform,
    l = _e2.whileElementsMounted,
    u = _e2.open,
    _P$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1
    }),
    _P$useState4 = _slicedToArray(_P$useState3, 2),
    d = _P$useState4[0],
    f = _P$useState4[1],
    _P$useState5 = react__WEBPACK_IMPORTED_MODULE_1__.useState(r),
    _P$useState6 = _slicedToArray(_P$useState5, 2),
    v = _P$useState6[0],
    p = _P$useState6[1];
  Tt(v, r) || p(r);
  var _P$useState7 = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
    _P$useState8 = _slicedToArray(_P$useState7, 2),
    m = _P$useState8[0],
    h = _P$useState8[1],
    _P$useState9 = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
    _P$useState10 = _slicedToArray(_P$useState9, 2),
    b = _P$useState10[0],
    y = _P$useState10[1],
    C = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (M) {
      M !== _.current && (_.current = M, h(M));
    }, []),
    A = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (M) {
      M !== R.current && (R.current = M, y(M));
    }, []),
    x = a || m,
    E = c || b,
    _ = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),
    R = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),
    $ = react__WEBPACK_IMPORTED_MODULE_1__.useRef(d),
    B = l != null,
    X = rr(l),
    q = rr(o),
    V = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function () {
      if (!_.current || !R.current) return;
      var M = {
        placement: t,
        strategy: n,
        middleware: v
      };
      q.current && (M.platform = q.current), vi(_.current, R.current, M).then(function (ae) {
        var ne = _objectSpread(_objectSpread({}, ae), {}, {
          isPositioned: !0
        });
        k.current && !Tt($.current, ne) && ($.current = ne, react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync(function () {
          f(ne);
        }));
      });
    }, [v, t, n, q]);
  wt(function () {
    u === !1 && $.current.isPositioned && ($.current.isPositioned = !1, f(function (M) {
      return _objectSpread(_objectSpread({}, M), {}, {
        isPositioned: !1
      });
    }));
  }, [u]);
  var k = react__WEBPACK_IMPORTED_MODULE_1__.useRef(!1);
  wt(function () {
    return k.current = !0, function () {
      k.current = !1;
    };
  }, []), wt(function () {
    if (x && (_.current = x), E && (R.current = E), x && E) {
      if (X.current) return X.current(x, E, V);
      V();
    }
  }, [x, E, V, X, B]);
  var D = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
      return {
        reference: _,
        floating: R,
        setReference: C,
        setFloating: A
      };
    }, [C, A]),
    N = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
      return {
        reference: x,
        floating: E
      };
    }, [x, E]),
    G = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
      var M = {
        position: n,
        left: 0,
        top: 0
      };
      if (!N.floating) return M;
      var ae = nr(N.floating, d.x),
        ne = nr(N.floating, d.y);
      return i ? _objectSpread(_objectSpread({}, M), {}, {
        transform: "translate(" + ae + "px, " + ne + "px)"
      }, Hr(N.floating) >= 1.5 && {
        willChange: "transform"
      }) : {
        position: n,
        left: ae,
        top: ne
      };
    }, [n, i, N.floating, d.x, d.y]);
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return _objectSpread(_objectSpread({}, d), {}, {
      update: V,
      refs: D,
      elements: N,
      floatingStyles: G
    });
  }, [d, V, D, N, G]);
}
function mi(e) {
  var _ee7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),
    _ee8 = _slicedToArray(_ee7, 2),
    t = _ee8[0],
    n = _ee8[1];
  return Ue(function () {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      var r = new ResizeObserver(function (o) {
        if (!Array.isArray(o) || !o.length) return;
        var a = o[0];
        var c, i;
        if ("borderBoxSize" in a) {
          var l = a.borderBoxSize,
            u = Array.isArray(l) ? l[0] : l;
          c = u.inlineSize, i = u.blockSize;
        } else c = e.offsetWidth, i = e.offsetHeight;
        n({
          width: c,
          height: i
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), function () {
        return r.unobserve(e);
      };
    } else n(void 0);
  }, [e]), t;
}
var kr = "Popper",
  _Tr = Tr(kr),
  _Tr2 = _slicedToArray(_Tr, 2),
  Ur = _Tr2[0],
  zr = _Tr2[1],
  _Ur = Ur(kr),
  _Ur2 = _slicedToArray(_Ur, 2),
  bi = _Ur2[0],
  Gr = _Ur2[1],
  yi = function yi(e) {
    var t = e.__scopePopper,
      n = e.children,
      _ee9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _ee10 = _slicedToArray(_ee9, 2),
      r = _ee10[0],
      o = _ee10[1];
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(bi, {
      scope: t,
      anchor: r,
      onAnchorChange: o
    }, n);
  },
  Ci = "PopperAnchor",
  wi = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = e.__scopePopper,
      r = e.virtualRef,
      o = _objectWithoutProperties(e, _excluded11),
      a = Gr(Ci, n),
      c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),
      i = Oe(t, c);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      a.onAnchorChange((r == null ? void 0 : r.current) || c.current);
    }), r ? null : /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e.div, W({}, o, {
      ref: i
    }));
  }),
  Wr = "PopperContent",
  _Ur3 = Ur(Wr),
  _Ur4 = _slicedToArray(_Ur3, 2),
  Ai = _Ur4[0],
  Zd = _Ur4[1],
  xi = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n, r, o, a, c, i, l, u;
    var d = e.__scopePopper,
      _e$side = e.side,
      f = _e$side === void 0 ? "bottom" : _e$side,
      _e$sideOffset = e.sideOffset,
      v = _e$sideOffset === void 0 ? 0 : _e$sideOffset,
      _e$align = e.align,
      p = _e$align === void 0 ? "center" : _e$align,
      _e$alignOffset = e.alignOffset,
      m = _e$alignOffset === void 0 ? 0 : _e$alignOffset,
      _e$arrowPadding = e.arrowPadding,
      h = _e$arrowPadding === void 0 ? 0 : _e$arrowPadding,
      _e$avoidCollisions = e.avoidCollisions,
      b = _e$avoidCollisions === void 0 ? !0 : _e$avoidCollisions,
      _e$collisionBoundary = e.collisionBoundary,
      y = _e$collisionBoundary === void 0 ? [] : _e$collisionBoundary,
      _e$collisionPadding = e.collisionPadding,
      C = _e$collisionPadding === void 0 ? 0 : _e$collisionPadding,
      _e$sticky = e.sticky,
      A = _e$sticky === void 0 ? "partial" : _e$sticky,
      _e$hideWhenDetached = e.hideWhenDetached,
      x = _e$hideWhenDetached === void 0 ? !1 : _e$hideWhenDetached,
      _e$updatePositionStra = e.updatePositionStrategy,
      E = _e$updatePositionStra === void 0 ? "optimized" : _e$updatePositionStra,
      _ = e.onPlaced,
      R = _objectWithoutProperties(e, _excluded12),
      $ = Gr(Wr, d),
      _ee11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _ee12 = _slicedToArray(_ee11, 2),
      B = _ee12[0],
      X = _ee12[1],
      q = Oe(t, function (ce) {
        return X(ce);
      }),
      _ee13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _ee14 = _slicedToArray(_ee13, 2),
      V = _ee14[0],
      k = _ee14[1],
      D = mi(V),
      N = (n = D == null ? void 0 : D.width) !== null && n !== void 0 ? n : 0,
      G = (r = D == null ? void 0 : D.height) !== null && r !== void 0 ? r : 0,
      M = f + (p !== "center" ? "-" + p : ""),
      ae = typeof C == "number" ? C : _objectSpread({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }, C),
      ne = Array.isArray(y) ? y : [y],
      lt = ne.length > 0,
      Ae = {
        padding: ae,
        boundary: ne.filter(Ei),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: lt
      },
      _gi = gi({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: M,
        whileElementsMounted: function whileElementsMounted() {
          for (var _len5 = arguments.length, ce = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            ce[_key5] = arguments[_key5];
          }
          return si.apply(void 0, ce.concat([{
            animationFrame: E === "always"
          }]));
        },
        elements: {
          reference: $.anchor
        },
        middleware: [Ha({
          mainAxis: v + G,
          alignmentAxis: m
        }), b && li(_objectSpread({
          mainAxis: !0,
          crossAxis: !1,
          limiter: A === "partial" ? pi() : void 0
        }, Ae)), b && ui(_objectSpread({}, Ae)), fi(_objectSpread(_objectSpread({}, Ae), {}, {
          apply: function apply(_ref2) {
            var ce = _ref2.elements,
              xe = _ref2.rects,
              dt = _ref2.availableWidth,
              pt = _ref2.availableHeight;
            var _xe$reference = xe.reference,
              De = _xe$reference.width,
              Xt = _xe$reference.height,
              je = ce.floating.style;
            je.setProperty("--radix-popper-available-width", "".concat(dt, "px")), je.setProperty("--radix-popper-available-height", "".concat(pt, "px")), je.setProperty("--radix-popper-anchor-width", "".concat(De, "px")), je.setProperty("--radix-popper-anchor-height", "".concat(Xt, "px"));
          }
        })), V && hi({
          element: V,
          padding: h
        }), Pi({
          arrowWidth: N,
          arrowHeight: G
        }), x && di(_objectSpread({
          strategy: "referenceHidden"
        }, Ae))]
      }),
      ut = _gi.refs,
      Qe = _gi.floatingStyles,
      zt = _gi.placement,
      Te = _gi.isPositioned,
      ie = _gi.middlewareData,
      _qr = qr(zt),
      _qr2 = _slicedToArray(_qr, 2),
      Re = _qr2[0],
      Le = _qr2[1],
      he = be(_);
    Ue(function () {
      Te && (he == null || he());
    }, [Te, he]);
    var Fe = (o = ie.arrow) === null || o === void 0 ? void 0 : o.x,
      Gt = (a = ie.arrow) === null || a === void 0 ? void 0 : a.y,
      ft = ((c = ie.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0,
      _ee15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _ee16 = _slicedToArray(_ee15, 2),
      Wt = _ee16[0],
      qt = _ee16[1];
    return Ue(function () {
      B && qt(window.getComputedStyle(B).zIndex);
    }, [B]), /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: ut.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: _objectSpread(_objectSpread({}, Qe), {}, {
        transform: Te ? Qe.transform : "translate(0, -200%)",
        // keep off the page when measuring
        minWidth: "max-content",
        zIndex: Wt,
        "--radix-popper-transform-origin": [(i = ie.transformOrigin) === null || i === void 0 ? void 0 : i.x, (l = ie.transformOrigin) === null || l === void 0 ? void 0 : l.y].join(" ")
      }),
      dir: e.dir
    }, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Ai, {
      scope: d,
      placedSide: Re,
      onArrowChange: k,
      arrowX: Fe,
      arrowY: Gt,
      shouldHideArrow: ft
    }, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e.div, W({
      "data-side": Re,
      "data-align": Le
    }, R, {
      ref: q,
      style: _objectSpread(_objectSpread({}, R.style), {}, {
        // if the PopperContent hasn't been placed yet (not all measurements done)
        // we prevent animations so that users's animation don't kick in too early referring wrong sides
        animation: Te ? void 0 : "none",
        // hide the content if using the hide middleware and should be hidden
        opacity: (u = ie.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
      })
    }))));
  });
function Ei(e) {
  return e !== null;
}
var Pi = function Pi(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn: function fn(t) {
      var n, r, o, a, c;
      var i = t.placement,
        l = t.rects,
        u = t.middlewareData,
        f = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0,
        v = f ? 0 : e.arrowWidth,
        p = f ? 0 : e.arrowHeight,
        _qr3 = qr(i),
        _qr4 = _slicedToArray(_qr3, 2),
        m = _qr4[0],
        h = _qr4[1],
        b = {
          start: "0%",
          center: "50%",
          end: "100%"
        }[h],
        y = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + v / 2,
        C = ((a = (c = u.arrow) === null || c === void 0 ? void 0 : c.y) !== null && a !== void 0 ? a : 0) + p / 2;
      var A = "",
        x = "";
      return m === "bottom" ? (A = f ? b : "".concat(y, "px"), x = "".concat(-p, "px")) : m === "top" ? (A = f ? b : "".concat(y, "px"), x = "".concat(l.floating.height + p, "px")) : m === "right" ? (A = "".concat(-p, "px"), x = f ? b : "".concat(C, "px")) : m === "left" && (A = "".concat(l.floating.width + p, "px"), x = f ? b : "".concat(C, "px")), {
        data: {
          x: A,
          y: x
        }
      };
    }
  };
};
function qr(e) {
  var _e$split = e.split("-"),
    _e$split2 = _slicedToArray(_e$split, 2),
    t = _e$split2[0],
    _e$split2$ = _e$split2[1],
    n = _e$split2$ === void 0 ? "center" : _e$split2$;
  return [t, n];
}
var Oi = yi,
  $i = wi,
  _i = xi,
  Si = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n;
    var _e$container = e.container,
      r = _e$container === void 0 ? globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body : _e$container,
      o = _objectWithoutProperties(e, _excluded13);
    return r ? /* @__PURE__ */react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(/* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e.div, W({}, o, {
      ref: t
    })), r) : null;
  });
function Ti(e, t) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(function (n, r) {
    var o = t[n][r];
    return o !== null && o !== void 0 ? o : n;
  }, e);
}
var xn = function xn(e) {
  var t = e.present,
    n = e.children,
    r = Ri(t),
    o = typeof n == "function" ? n({
      present: r.isPresent
    }) : react__WEBPACK_IMPORTED_MODULE_1__.Children.only(n),
    a = Oe(r.ref, o.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(o, {
    ref: a
  }) : null;
};
xn.displayName = "Presence";
function Ri(e) {
  var _ee17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
    _ee18 = _slicedToArray(_ee17, 2),
    t = _ee18[0],
    n = _ee18[1],
    r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({}),
    o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(e),
    a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("none"),
    c = e ? "mounted" : "unmounted",
    _Ti = Ti(c, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    }),
    _Ti2 = _slicedToArray(_Ti, 2),
    i = _Ti2[0],
    l = _Ti2[1];
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var u = gt(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), Ue(function () {
    var u = r.current,
      d = o.current;
    if (d !== e) {
      var v = a.current,
        p = gt(u);
      e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(d && v !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ue(function () {
    if (t) {
      var u = function u(f) {
          var p = gt(r.current).includes(f.animationName);
          f.target === t && p && (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync)(function () {
            return l("ANIMATION_END");
          });
        },
        d = function d(f) {
          f.target === t && (a.current = gt(r.current));
        };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), function () {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (u) {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function gt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Li(_ref4) {
  var e = _ref4.prop,
    t = _ref4.defaultProp,
    _ref4$onChange = _ref4.onChange,
    n = _ref4$onChange === void 0 ? function () {} : _ref4$onChange;
  var _Fi = Fi({
      defaultProp: t,
      onChange: n
    }),
    _Fi2 = _slicedToArray(_Fi, 2),
    r = _Fi2[0],
    o = _Fi2[1],
    a = e !== void 0,
    c = a ? e : r,
    i = be(n),
    l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (u) {
      if (a) {
        var f = typeof u == "function" ? u(e) : u;
        f !== e && i(f);
      } else o(u);
    }, [a, e, o, i]);
  return [c, l];
}
function Fi(_ref12) {
  var e = _ref12.defaultProp,
    t = _ref12.onChange;
  var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e),
    _n2 = _slicedToArray(n, 1),
    r = _n2[0],
    o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(r),
    a = be(t);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    o.current !== r && (a(r), o.current = r);
  }, [r, o, a]), n;
}
var Di = function Di(e) {
    if ((typeof document === "undefined" ? "undefined" : _typeof(document)) > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Ne = /* @__PURE__ */new WeakMap(),
  mt = /* @__PURE__ */new WeakMap(),
  bt = {},
  rn = 0,
  _Xr = function Xr(e) {
    return e && (e.host || _Xr(e.parentNode));
  },
  ji = function ji(e, t) {
    return t.map(function (n) {
      if (e.contains(n)) return n;
      var r = _Xr(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
    }).filter(function (n) {
      return !!n;
    });
  },
  Mi = function Mi(e, t, n, r) {
    var o = ji(t, Array.isArray(e) ? e : [e]);
    bt[n] || (bt[n] = /* @__PURE__ */new WeakMap());
    var a = bt[n],
      c = [],
      i = /* @__PURE__ */new Set(),
      l = new Set(o),
      _u2 = function u(f) {
        !f || i.has(f) || (i.add(f), _u2(f.parentNode));
      };
    o.forEach(_u2);
    var _d2 = function d(f) {
      !f || l.has(f) || Array.prototype.forEach.call(f.children, function (v) {
        if (i.has(v)) _d2(v);else {
          var p = v.getAttribute(r),
            m = p !== null && p !== "false",
            h = (Ne.get(v) || 0) + 1,
            b = (a.get(v) || 0) + 1;
          Ne.set(v, h), a.set(v, b), c.push(v), h === 1 && m && mt.set(v, !0), b === 1 && v.setAttribute(n, "true"), m || v.setAttribute(r, "true");
        }
      });
    };
    return _d2(t), i.clear(), rn++, function () {
      c.forEach(function (f) {
        var v = Ne.get(f) - 1,
          p = a.get(f) - 1;
        Ne.set(f, v), a.set(f, p), v || (mt.has(f) || f.removeAttribute(r), mt["delete"](f)), p || f.removeAttribute(n);
      }), rn--, rn || (Ne = /* @__PURE__ */new WeakMap(), Ne = /* @__PURE__ */new WeakMap(), mt = /* @__PURE__ */new WeakMap(), bt = {});
    };
  },
  Ii = function Ii(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || Di(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Mi(r, o, n, "aria-hidden")) : function () {
      return null;
    };
  },
  _se = function se() {
    return _se = Object.assign || function (t) {
      for (var n, r = 1, o = arguments.length; r < o; r++) {
        n = arguments[r];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
      }
      return t;
    }, _se.apply(this, arguments);
  };
function Yr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ni(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++) (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var At = "right-scroll-bar-position",
  xt = "width-before-scroll-bar",
  Bi = "with-scroll-bars-hidden",
  Vi = "--removed-body-scroll-bar-size";
function on(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Hi(e, t) {
  var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var or = /* @__PURE__ */new WeakMap();
function ki(e, t) {
  var n = Hi(t || null, function (r) {
    return e.forEach(function (o) {
      return on(o, r);
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(function () {
    var r = or.get(n);
    if (r) {
      var o = new Set(r),
        a = new Set(e),
        c = n.current;
      o.forEach(function (i) {
        a.has(i) || on(i, null);
      }), a.forEach(function (i) {
        o.has(i) || on(i, c);
      });
    }
    or.set(n, e);
  }, [e]), n;
}
function Ui(e) {
  return e;
}
function zi(e, t) {
  t === void 0 && (t = Ui);
  var n = [],
    r = !1,
    o = {
      read: function read() {
        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function useMedium(a) {
        var c = t(a, r);
        return n.push(c), function () {
          n = n.filter(function (i) {
            return i !== c;
          });
        };
      },
      assignSyncMedium: function assignSyncMedium(a) {
        for (r = !0; n.length;) {
          var c = n;
          n = [], c.forEach(a);
        }
        n = {
          push: function push(i) {
            return a(i);
          },
          filter: function filter() {
            return n;
          }
        };
      },
      assignMedium: function assignMedium(a) {
        r = !0;
        var c = [];
        if (n.length) {
          var i = n;
          n = [], i.forEach(a), c = n;
        }
        var l = function l() {
            var d = c;
            c = [], d.forEach(a);
          },
          u = function u() {
            return Promise.resolve().then(l);
          };
        u(), n = {
          push: function push(d) {
            c.push(d), u();
          },
          filter: function filter(d) {
            return c = c.filter(d), n;
          }
        };
      }
    };
  return o;
}
function Gi(e) {
  e === void 0 && (e = {});
  var t = zi(null);
  return t.options = _se({
    async: !0,
    ssr: !1
  }, e), t;
}
var Kr = function Kr(e) {
  var t = e.sideCar,
    n = Yr(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(r, _se({}, n));
};
Kr.isSideCarExport = !0;
function Wi(e, t) {
  return e.useMedium(t), Kr;
}
var Zr = Gi(),
  an = function an() {},
  Mt = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (e, t) {
    var n = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null),
      r = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        onScrollCapture: an,
        onWheelCapture: an,
        onTouchMoveCapture: an
      }),
      o = r[0],
      a = r[1],
      c = e.forwardProps,
      i = e.children,
      l = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      v = e.sideCar,
      p = e.noIsolation,
      m = e.inert,
      h = e.allowPinchZoom,
      b = e.as,
      y = b === void 0 ? "div" : b,
      C = Yr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
      A = v,
      x = ki([n, t]),
      E = _se(_se({}, C), o);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, d && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(A, {
      sideCar: Zr,
      removeScrollBar: u,
      shards: f,
      noIsolation: p,
      inert: m,
      setCallbacks: a,
      allowPinchZoom: !!h,
      lockRef: n
    }), c ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(react__WEBPACK_IMPORTED_MODULE_1__.Children.only(i), _se(_se({}, E), {
      ref: x
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(y, _se({}, E, {
      className: l,
      ref: x
    }), i));
  });
Mt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Mt.classNames = {
  fullWidth: xt,
  zeroRight: At
};
var qi = function qi() {
  if (( false ? 0 : _typeof(__webpack_require__.nc)) < "u") return __webpack_require__.nc;
};
function Xi() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = qi();
  return t && e.setAttribute("nonce", t), e;
}
function Yi(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ki(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Zi = function Zi() {
    var e = 0,
      t = null;
    return {
      add: function add(n) {
        e == 0 && (t = Xi()) && (Yi(t, n), Ki(t)), e++;
      },
      remove: function remove() {
        e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
      }
    };
  },
  Qi = function Qi() {
    var e = Zi();
    return function (t, n) {
      react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
        return e.add(t), function () {
          e.remove();
        };
      }, [t && n]);
    };
  },
  Qr = function Qr() {
    var e = Qi(),
      t = function t(n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Ji = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  cn = function cn(e) {
    return parseInt(e || "", 10) || 0;
  },
  ec = function ec(e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [cn(n), cn(r), cn(o)];
  },
  tc = function tc(e) {
    if (e === void 0 && (e = "margin"), (typeof window === "undefined" ? "undefined" : _typeof(window)) > "u") return Ji;
    var t = ec(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    };
  },
  nc = Qr(),
  rc = function rc(e, t, n, r) {
    var o = e.left,
      a = e.top,
      c = e.right,
      i = e.gap;
    return n === void 0 && (n = "margin"), "\n  .".concat(Bi, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(i, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), n === "margin" && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(r, ";\n    "), n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(At, " {\n    right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(xt, " {\n    margin-right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(At, " .").concat(At, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(xt, " .").concat(xt, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat(Vi, ": ").concat(i, "px;\n  }\n");
  },
  oc = function oc(e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r,
      a = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
        return tc(o);
      }, [o]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(nc, {
      styles: rc(a, !t, o, n ? "" : "!important")
    });
  },
  vn = !1;
if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u") try {
  var yt = Object.defineProperty({}, "passive", {
    get: function get() {
      return vn = !0, !0;
    }
  });
  window.addEventListener("test", yt, yt), window.removeEventListener("test", yt, yt);
} catch (_unused5) {
  vn = !1;
}
var Be = vn ? {
    passive: !1
  } : !1,
  ac = function ac(e) {
    return e.tagName === "TEXTAREA";
  },
  Jr = function Jr(e, t) {
    var n = window.getComputedStyle(e);
    return (
      // not-not-scrollable
      n[t] !== "hidden" &&
      // contains scroll inside self
      !(n.overflowY === n.overflowX && !ac(e) && n[t] === "visible")
    );
  },
  ic = function ic(e) {
    return Jr(e, "overflowY");
  },
  cc = function cc(e) {
    return Jr(e, "overflowX");
  },
  ar = function ar(e, t) {
    var n = t;
    do {
      (typeof ShadowRoot === "undefined" ? "undefined" : _typeof(ShadowRoot)) < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = eo(e, n);
      if (r) {
        var o = to(e, n),
          a = o[1],
          c = o[2];
        if (a > c) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  sc = function sc(e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  lc = function lc(e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  eo = function eo(e, t) {
    return e === "v" ? ic(t) : cc(t);
  },
  to = function to(e, t) {
    return e === "v" ? sc(t) : lc(t);
  },
  uc = function uc(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  fc = function fc(e, t, n, r, o) {
    var a = uc(e, window.getComputedStyle(t).direction),
      c = a * r,
      i = n.target,
      l = t.contains(i),
      u = !1,
      d = c > 0,
      f = 0,
      v = 0;
    do {
      var p = to(e, i),
        m = p[0],
        h = p[1],
        b = p[2],
        y = h - b - a * m;
      (m || y) && eo(e, i) && (f += y, v += m), i = i.parentNode;
    } while (
    // portaled content
    !l && i !== document.body ||
    // self content
    l && (t.contains(i) || t === i));
    return (d && (o && f === 0 || !o && c > f) || !d && (o && v === 0 || !o && -c > v)) && (u = !0), u;
  },
  Ct = function Ct(e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  ir = function ir(e) {
    return [e.deltaX, e.deltaY];
  },
  cr = function cr(e) {
    return e && "current" in e ? e.current : e;
  },
  dc = function dc(e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  pc = function pc(e) {
    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
  },
  vc = 0,
  Ve = [];
function hc(e) {
  var t = react__WEBPACK_IMPORTED_MODULE_1__.useRef([]),
    n = react__WEBPACK_IMPORTED_MODULE_1__.useRef([0, 0]),
    r = react__WEBPACK_IMPORTED_MODULE_1__.useRef(),
    o = react__WEBPACK_IMPORTED_MODULE_1__.useState(vc++)[0],
    a = react__WEBPACK_IMPORTED_MODULE_1__.useState(function () {
      return Qr();
    })[0],
    c = react__WEBPACK_IMPORTED_MODULE_1__.useRef(e);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    c.current = e;
  }, [e]), react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Ni([e.lockRef.current], (e.shards || []).map(cr), !0).filter(Boolean);
      return h.forEach(function (b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function () {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function (b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h, b) {
      if ("touches" in h && h.touches.length === 2) return !c.current.allowPinchZoom;
      var y = Ct(h),
        C = n.current,
        A = "deltaX" in h ? h.deltaX : C[0] - y[0],
        x = "deltaY" in h ? h.deltaY : C[1] - y[1],
        E,
        _ = h.target,
        R = Math.abs(A) > Math.abs(x) ? "h" : "v";
      if ("touches" in h && R === "h" && _.type === "range") return !1;
      var $ = ar(R, _);
      if (!$) return !0;
      if ($ ? E = R : (E = R === "v" ? "h" : "v", $ = ar(R, _)), !$) return !1;
      if (!r.current && "changedTouches" in h && (A || x) && (r.current = E), !E) return !0;
      var B = r.current || E;
      return fc(B, b, h, B === "h" ? A : x, !0);
    }, []),
    l = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h) {
      var b = h;
      if (!(!Ve.length || Ve[Ve.length - 1] !== a)) {
        var y = "deltaY" in b ? ir(b) : Ct(b),
          C = t.current.filter(function (E) {
            return E.name === b.type && E.target === b.target && dc(E.delta, y);
          })[0];
        if (C && C.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!C) {
          var A = (c.current.shards || []).map(cr).filter(Boolean).filter(function (E) {
              return E.contains(b.target);
            }),
            x = A.length > 0 ? i(b, A[0]) : !c.current.noIsolation;
          x && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    u = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h, b, y, C) {
      var A = {
        name: h,
        delta: b,
        target: y,
        should: C
      };
      t.current.push(A), setTimeout(function () {
        t.current = t.current.filter(function (x) {
          return x !== A;
        });
      }, 1);
    }, []),
    d = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h) {
      n.current = Ct(h), r.current = void 0;
    }, []),
    f = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h) {
      u(h.type, ir(h), h.target, i(h, e.lockRef.current));
    }, []),
    v = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (h) {
      u(h.type, Ct(h), h.target, i(h, e.lockRef.current));
    }, []);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    return Ve.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", l, Be), document.addEventListener("touchmove", l, Be), document.addEventListener("touchstart", d, Be), function () {
      Ve = Ve.filter(function (h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, Be), document.removeEventListener("touchmove", l, Be), document.removeEventListener("touchstart", d, Be);
    };
  }, []);
  var p = e.removeScrollBar,
    m = e.inert;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, m ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(a, {
    styles: pc(o)
  }) : null, p ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(oc, {
    gapMode: "margin"
  }) : null);
}
var gc = Wi(Zr, hc);
var no = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (e, t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Mt, _se({}, e, {
    ref: t,
    sideCar: gc
  }));
});
no.classNames = Mt.classNames;
var mc = no,
  ro = "Popover",
  _Tr3 = Tr(ro, [zr]),
  _Tr4 = _slicedToArray(_Tr3, 2),
  oo = _Tr4[0],
  Qd = _Tr4[1],
  En = zr(),
  _oo = oo(ro),
  _oo2 = _slicedToArray(_oo, 2),
  bc = _oo2[0],
  _e = _oo2[1],
  yc = function yc(e) {
    var t = e.__scopePopover,
      n = e.children,
      r = e.open,
      o = e.defaultOpen,
      a = e.onOpenChange,
      _e$modal = e.modal,
      c = _e$modal === void 0 ? !1 : _e$modal,
      i = En(t),
      l = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),
      _ee19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _ee20 = _slicedToArray(_ee19, 2),
      u = _ee20[0],
      d = _ee20[1],
      _Li = Li({
        prop: r,
        defaultProp: o,
        onChange: a
      }),
      _Li2 = _slicedToArray(_Li, 2),
      _Li2$ = _Li2[0],
      f = _Li2$ === void 0 ? !1 : _Li2$,
      v = _Li2[1];
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Oi, i, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(bc, {
      scope: t,
      contentId: $a(),
      triggerRef: l,
      open: f,
      onOpenChange: v,
      onOpenToggle: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        return v(function (p) {
          return !p;
        });
      }, [v]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        return d(!0);
      }, []),
      onCustomAnchorRemove: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
        return d(!1);
      }, []),
      modal: c
    }, n));
  },
  Cc = "PopoverTrigger",
  wc = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = e.__scopePopover,
      r = _objectWithoutProperties(e, _excluded14),
      o = _e(Cc, n),
      a = En(n),
      c = Oe(t, o.triggerRef),
      i = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e.button, W({
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": co(o.open)
      }, r, {
        ref: c,
        onClick: me(e.onClick, o.onOpenToggle)
      }));
    return o.hasCustomAnchor ? i : /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($i, W({
      asChild: !0
    }, a), i);
  }),
  ao = "PopoverPortal",
  _oo3 = oo(ao, {
    forceMount: void 0
  }),
  _oo4 = _slicedToArray(_oo3, 2),
  Ac = _oo4[0],
  xc = _oo4[1],
  Ec = function Ec(e) {
    var t = e.__scopePopover,
      n = e.forceMount,
      r = e.children,
      o = e.container,
      a = _e(ao, t);
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Ac, {
      scope: t,
      forceMount: n
    }, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(xn, {
      present: n || a.open
    }, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Si, {
      asChild: !0,
      container: o
    }, r)));
  },
  at = "PopoverContent",
  Pc = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = xc(at, e.__scopePopover),
      _e$forceMount = e.forceMount,
      r = _e$forceMount === void 0 ? n.forceMount : _e$forceMount,
      o = _objectWithoutProperties(e, _excluded15),
      a = _e(at, e.__scopePopover);
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(xn, {
      present: r || a.open
    }, a.modal ? /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Oc, W({}, o, {
      ref: t
    })) : /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($c, W({}, o, {
      ref: t
    })));
  }),
  Oc = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = _e(at, e.__scopePopover),
      r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),
      o = Oe(t, r),
      a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
      var c = r.current;
      if (c) return Ii(c);
    }, []), /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(mc, {
      as: gn,
      allowPinchZoom: !0
    }, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(io, W({}, e, {
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: me(e.onCloseAutoFocus, function (c) {
        var i;
        c.preventDefault(), a.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus();
      }),
      onPointerDownOutside: me(e.onPointerDownOutside, function (c) {
        var i = c.detail.originalEvent,
          l = i.button === 0 && i.ctrlKey === !0,
          u = i.button === 2 || l;
        a.current = u;
      }, {
        checkForDefaultPrevented: !1
      }),
      onFocusOutside: me(e.onFocusOutside, function (c) {
        return c.preventDefault();
      }, {
        checkForDefaultPrevented: !1
      })
    })));
  }),
  $c = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = _e(at, e.__scopePopover),
      r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1),
      o = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(!1);
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(io, W({}, e, {
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: function onCloseAutoFocus(a) {
        var c;
        if ((c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, a), !a.defaultPrevented) {
          var i;
          r.current || (i = n.triggerRef.current) === null || i === void 0 || i.focus(), a.preventDefault();
        }
        r.current = !1, o.current = !1;
      },
      onInteractOutside: function onInteractOutside(a) {
        var c, i;
        (c = e.onInteractOutside) === null || c === void 0 || c.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        var l = a.target;
        ((i = n.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
      }
    }));
  }),
  io = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = e.__scopePopover,
      r = e.trapFocus,
      o = e.onOpenAutoFocus,
      a = e.onCloseAutoFocus,
      c = e.disableOutsidePointerEvents,
      i = e.onEscapeKeyDown,
      l = e.onPointerDownOutside,
      u = e.onFocusOutside,
      d = e.onInteractOutside,
      f = _objectWithoutProperties(e, _excluded16),
      v = _e(at, n),
      p = En(n);
    return ma(), /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(ba, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: o,
      onUnmountAutoFocus: a
    }, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(va, {
      asChild: !0,
      disableOutsidePointerEvents: c,
      onInteractOutside: d,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onDismiss: function onDismiss() {
        return v.onOpenChange(!1);
      }
    }, /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_i, W({
      "data-state": co(v.open),
      role: "dialog",
      id: v.contentId
    }, p, f, {
      ref: t,
      style: _objectSpread(_objectSpread({}, f.style), {}, {
        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
      })
    }))));
  }),
  _c = "PopoverClose",
  Sc = /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function (e, t) {
    var n = e.__scopePopover,
      r = _objectWithoutProperties(e, _excluded17),
      o = _e(_c, n);
    return /* @__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)($e.button, W({
      type: "button"
    }, r, {
      ref: t,
      onClick: me(e.onClick, function () {
        return o.onOpenChange(!1);
      })
    }));
  });
function co(e) {
  return e ? "open" : "closed";
}
var Tc = yc,
  Rc = wc,
  Lc = Ec,
  Fc = Pc,
  Dc = Sc,
  jc = "_overlay_11atf_5",
  Mc = "_PopoverTrigger_11atf_17",
  Ic = "_PopoverContent_11atf_21",
  Nc = "_PopoverClose_11atf_45",
  Bc = "_partners_11atf_59",
  Vc = "_partner__icon_11atf_66",
  Hc = "_partner__link_11atf_71",
  kc = "_footer__link_11atf_90",
  Uc = "_slideDownAndFade_11atf_1",
  zc = "_slideLeftAndFade_11atf_1",
  Gc = "_slideUpAndFade_11atf_1",
  Wc = "_slideRightAndFade_11atf_1",
  qc = {
    overlay: jc,
    PopoverTrigger: Mc,
    PopoverContent: Ic,
    PopoverClose: Nc,
    partners: Bc,
    partner__icon: Vc,
    partner__link: Hc,
    footer__link: kc,
    slideDownAndFade: Uc,
    slideLeftAndFade: zc,
    slideUpAndFade: Gc,
    slideRightAndFade: Wc
  },
  Xc = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4867_62289)'%3e%3cpath%20d='M20.1179%201.93738H19.9919C7.93051%2010.1437%208.15102%2020.5198%208.17859%2020.9136C8.17859%2017.7805%209.42321%2014.7757%2011.6386%2012.5603C13.8541%2010.3448%2016.8588%209.10021%2019.9919%209.10021C22.0259%209.11037%2024.0248%209.63043%2025.8059%2010.6128C27.5869%2011.5951%2029.0932%2013.0084%2030.1869%2014.7234C31.3401%2016.5877%2031.9497%2018.7371%2031.947%2020.9293V37.6728C31.9471%2037.8016%2031.989%2037.9269%2032.0664%2038.0299C32.1438%2038.1329%2032.2525%2038.2079%2032.3763%2038.2437L38.3459%2039.9882C38.4345%2040.0138%2038.5278%2040.0185%2038.6185%2040.0019C38.7092%2039.9853%2038.7948%2039.9478%2038.8685%2039.8924C38.9422%2039.837%2039.002%2039.7653%2039.0432%2039.6828C39.0844%2039.6003%2039.1059%2039.5094%2039.1059%2039.4172V20.9254C39.1059%2018.4318%2038.6148%2015.9627%2037.6606%2013.659C36.7063%2011.3552%2035.3077%209.26203%2033.5445%207.49883C31.7813%205.73563%2029.6881%204.33699%2027.3843%203.38275C25.0806%202.42852%2022.6115%201.93738%2020.1179%201.93738Z'%20fill='%2379A340'/%3e%3cpath%20d='M19.9919%2032.7545C16.8588%2032.7545%2013.8541%2031.5099%2011.6386%2029.2944C9.42319%2027.079%208.17858%2024.0742%208.17858%2020.9411C8.17858%2020.9411%207.70998%2010.3091%2019.9919%201.95316C14.9666%201.98%2010.1545%203.98685%206.59921%207.53848C3.0439%2011.0901%201.03206%2015.9001%201%2020.9254C9.35991%2033.2231%2019.9919%2032.7545%2019.9919%2032.7545Z'%20fill='url(%23paint0_linear_4867_62289)'/%3e%3cpath%20d='M39.0429%200.610346C39.0435%200.517815%2039.0225%200.426424%2038.9815%200.343444C38.9406%200.260465%2038.8808%200.188187%2038.8071%200.132362C38.7333%200.0765371%2038.6475%200.0387056%2038.5565%200.0218779C38.4655%200.00505019%2038.3718%200.00969081%2038.2829%200.0354303L32.3132%201.77199C32.1895%201.80782%2032.0808%201.88287%2032.0033%201.98585C31.9259%202.08882%2031.8841%202.21415%2031.884%202.34297L32.01%2020.7403C32.01%2020.7403%2032.3487%2031.4196%2020.0549%2039.7873C30.3759%2039.7873%2039.1729%2031.2266%2039.1729%2020.7403L39.0429%200.610346Z'%20fill='%238CC63F'/%3e%3cpath%20d='M1%2020.9254C1%2031.4156%209.56862%2039.7756%2020.0549%2039.7756C28.9149%2033.6877%2031.1989%2026.6234%2031.8053%2023.0557C31.2671%2025.7918%2029.7943%2028.2556%2027.6391%2030.0251C25.4839%2031.7945%2022.7804%2032.7594%2019.9919%2032.7545C19.9919%2032.7545%209.35991%2033.2231%201.00394%2020.9411'%20fill='url(%23paint1_linear_4867_62289)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4867_62289'%20x1='10.5334'%20y1='12.9553'%20x2='10.8602'%20y2='26.8045'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.15'%20stop-color='%238CC63F'/%3e%3cstop%20offset='0.68'%20stop-color='%237EAD40'/%3e%3cstop%20offset='1'%20stop-color='%2379A340'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_4867_62289'%20x1='1'%20y1='30.3485'%20x2='31.7856'%20y2='30.3485'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.15'%20stop-color='%238CC63F'/%3e%3cstop%20offset='0.68'%20stop-color='%237EAD40'/%3e%3cstop%20offset='1'%20stop-color='%2379A340'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_4867_62289'%3e%3crect%20width='38.1689'%20height='40'%20fill='white'%20transform='translate(1)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Yc = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20clip-path='url(%23clip0_4867_62297)'%3e%3crect%20width='40'%20height='40'%20fill='url(%23pattern0_4867_62297)'/%3e%3c/g%3e%3cdefs%3e%3cpattern%20id='pattern0_4867_62297'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_4867_62297'%20transform='scale(0.0125)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_4867_62297'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3cimage%20id='image0_4867_62297'%20width='80'%20height='80'%20xlink:href='data:image/png;base64,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'/%3e%3c/defs%3e%3c/svg%3e",
  Kc = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4867_62302)'%3e%3cmask%20id='mask0_4867_62302'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='40'%20height='40'%3e%3cpath%20d='M40%200H0V40H40V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_4867_62302)'%3e%3cmask%20id='mask1_4867_62302'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='-1'%20y='1'%20width='43'%20height='38'%3e%3cpath%20d='M41.4799%201.79779H-0.520142V38.7978H41.4799V1.79779Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_4867_62302)'%3e%3cpath%20d='M34.4807%2027.9425L41.4657%2018.8285H35.6447L30.3996%2025.6854H24.0206V13.4114C24.0288%2013.022%2023.9559%2012.635%2023.8065%2012.2752C23.657%2011.9154%2023.4343%2011.5906%2023.1527%2011.3215C22.8805%2011.0478%2022.5559%2010.8318%2022.1983%2010.6865C21.8408%2010.5411%2021.4576%2010.4694%2021.0717%2010.4755H3.89068V1.99545H-1.00032V27.2875C-1.00875%2027.6772%20-0.935926%2028.0644%20-0.786483%2028.4244C-0.63704%2028.7844%20-0.414254%2029.1093%20-0.13232%2029.3785C0.138743%2029.6545%200.46282%2029.8729%200.820436%2030.0205C1.17805%2030.1682%201.56182%2030.2419%201.94868%2030.2375H19.0787V38.5994H23.9677V30.3635H30.3137L36.2137%2038.5994H41.9547L34.4807%2027.9425ZM19.1316%2025.3605H3.89068V15.1395H19.1297V16.9395L19.1316%2025.3605Z'%20fill='%2317233E'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4867_62302'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Zc = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4867_62355)'%3e%3cpath%20d='M6.04721%208.19188L6.05163%200.777857C6.05163%200.408853%206.35127%200.109222%206.72175%200.109222H10.6081C10.9771%200.109222%2011.2767%200.408853%2011.2782%200.777857L11.2841%203.3166C11.2871%204.22288%2010.9284%205.09225%2010.2878%205.73284L7.31067%208.71439C6.84278%209.18081%206.04721%208.85018%206.04721%208.19188ZM33.3904%2033.5793C33.3933%2034.7926%2032.9092%2035.9572%2032.0487%2036.8118L29.073%2039.7653C28.7144%2040.1225%2028.1033%2039.8657%2028.1048%2039.3594L28.121%2035.9852C25.8007%2037.8037%2022.8797%2038.8886%2019.7092%2038.8886C11.9572%2038.8886%205.69149%2032.3985%206.06197%2024.5668L6.04573%2016.8812C6.04278%2015.6679%206.52691%2014.5033%207.38743%2013.6487L10.3631%2010.6952C10.7217%2010.338%2011.3328%2010.5948%2011.3313%2011.1011L11.3151%2014.4635C13.3771%2012.8487%2015.907%2011.8096%2018.6538%2011.603C26.5623%2011.0052%2033.2059%2017.1867%2033.3682%2024.9343L33.3712%2024.9284V25.2236C33.3712%2025.2251%2033.3712%2025.2266%2033.3712%2025.228C33.3712%2025.2295%2033.3712%2025.2295%2033.3712%2025.231L33.3904%2033.5793ZM28.1328%2025.3314C28.1328%2020.6288%2024.307%2016.8029%2019.6044%2016.8029C14.9018%2016.8029%2011.076%2020.6288%2011.076%2025.3314C11.076%2030.0339%2014.9018%2033.8598%2019.6044%2033.8598C24.307%2033.8598%2028.1328%2030.0325%2028.1328%2025.3314Z'%20fill='url(%23paint0_linear_4867_62355)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_4867_62355'%20x1='6.04647'%20y1='20.0204'%20x2='33.3911'%20y2='20.0204'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FF4713'/%3e%3cstop%20offset='0.5'%20stop-color='%23DB0032'/%3e%3cstop%20offset='1'%20stop-color='%23AE1164'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_4867_62355'%3e%3crect%20width='27.4539'%20height='40'%20fill='white'%20transform='translate(6)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Qc = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%20clip-path='url(%23clip0_4867_62334)'%3e%3crect%20width='40'%20height='40'%20fill='url(%23pattern0_4867_62334)'/%3e%3c/g%3e%3cdefs%3e%3cpattern%20id='pattern0_4867_62334'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_4867_62334'%20transform='scale(0.0125)'/%3e%3c/pattern%3e%3cclipPath%20id='clip0_4867_62334'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3cimage%20id='image0_4867_62334'%20width='80'%20height='80'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAKrGlDQ1BJQ0MgUHJvZmlsZQAASImVlwdQU+kWx79700NCS4iAlNCb9BZASggtFEE6iEpIAoQSYiAo2BBZXIG1oCICNnSVouCqFFlsiGJbBBTsLsgioqyLBRsq7wJDcPfNe2/emTlzfjk53/873537zZwLAFmeIxKlwPIApAozxMHe7vTIqGg6bhgQgBrAAwUgx+Gmi5hBQf4Asdn4d3vfB6CpeNt0Suvf//+vpsDjp3MBgIIQjuOlc1MRPo34C65InAEA6gCS11mZIZridoSpYqRBhO9NccIMj05x3DSjwXRNaDALYSoAeBKHI04AgERH8vRMbgKiQ3JD2ELIEwgRFiHskpqaxkP4BMKGSA2SI03pM+K+00n4m2acVJPDSZDyzFmmDe8hSBelcLL+z8fxvy01RTK7hz7ipESxTzASFZFndi85zU/KwrhFgbMs4E3XT3OixCdslrnprOhZ5nE8/KRrUxb5z3K8wIst1clgh84yP90zZJbFacHSveLFLOYsc8Rz+0qSw6T5RD5bqp+dGBoxy5mC8EWznJ4c4jdXw5LmxZJgaf98obf73L5e0rOnpn93XgFbujYjMdRHenbOXP98IXNOMz1S2huP7+E5VxMmrRdluEv3EqUESev5Kd7SfHpmiHRtBvJCzq0Nkj7DJI5v0CwDFkgDKYiLAR34I788AMjgr8qYOggrTZQlFiQkZtCZyA3j09lCrtkCupWFlTUAU/d15nV4S5u+hxDt+lxuoxYAzlmTk5Otczm/LgBOnQWA+GAuZzAEgOx1AK7u5krEmTO56buEAUQgB6hABWgAHWAITIEVsANOwA14Al8QCEJBFFgGuCARpCKdrwRrwAaQDwrBNrALlIH94BCoAsfBSdAEWsFFcAXcAF2gFzwE/WAIvARj4D2YgCAIB5EhCqQCaUJ6kAlkBTEgF8gT8oeCoSgoFkqAhJAEWgNthAqhYqgMOghVQ79AZ6CL0DWoG7oPDUAj0BvoM4yCSTAVVof1YXOYATNhPzgUXgonwCvgbDgP3gKXwpXwMbgRvgjfgHvhfvglPI4CKBkUDaWFMkUxUCxUICoaFY8So9ahClAlqEpUHaoF1YG6jepHjaI+obFoCpqONkU7oX3QYWguegV6HboIXYauQjei29G30QPoMfQ3DBmjhjHBOGLYmEhMAmYlJh9TgjmCacBcxvRihjDvsVgsDWuAtcf6YKOwSdjV2CLsXmw99gK2GzuIHcfhcCo4E5wzLhDHwWXg8nF7cMdw53E9uCHcR7wMXhNvhffCR+OF+Fx8Cb4Gfw7fgx/GTxDkCXoER0IggUfIImwlHCa0EG4RhggTRAWiAdGZGEpMIm4glhLriJeJj4hvZWRktGUcZBbLCGRyZEplTshclRmQ+URSJBmTWKQYkoS0hXSUdIF0n/SWTCbrk93I0eQM8hZyNfkS+Qn5oyxF1kyWLcuTXS9bLtso2yP7So4gpyfHlFsmly1XIndK7pbcqDxBXl+eJc+RXydfLn9G/q78uAJFwVIhUCFVoUihRuGawnNFnKK+oqciTzFP8ZDiJcVBCoqiQ2FRuJSNlMOUy5QhKpZqQGVTk6iF1OPUTuqYkqKSjVK40iqlcqWzSv00FE2fxqal0LbSTtL6aJ/nqc9jzuPP2zyvbl7PvA/K85XdlPnKBcr1yr3Kn1XoKp4qySrbVZpUHquiVY1VF6uuVN2nell1dD51vtN87vyC+SfnP1CD1YzVgtVWqx1Su6k2rq6h7q0uUt+jfkl9VIOm4aaRpLFT45zGiCZF00VToLlT87zmC7oSnUlPoZfS2+ljWmpaPloSrYNanVoT2gbaYdq52vXaj3WIOgydeJ2dOm06Y7qaugG6a3RrdR/oEfQYeol6u/U69D7oG+hH6G/Sb9J/bqBswDbINqg1eGRINnQ1XGFYaXjHCGvEMEo22mvUZQwb2xonGpcb3zKBTexMBCZ7TboXYBY4LBAuqFxw15RkyjTNNK01HTCjmfmb5Zo1mb0y1zWPNt9u3mH+zcLWIsXisMVDS0VLX8tcyxbLN1bGVlyrcqs71mRrL+v11s3Wr21MbPg2+2zu2VJsA2w32bbZfrWztxPb1dmN2Ovax9pX2N9lUBlBjCLGVQeMg7vDeodWh0+Odo4Zjicd/3IydUp2qnF6vtBgIX/h4YWDztrOHOeDzv0udJdYlwMu/a5arhzXStenbjpuPLcjbsNMI2YS8xjzlbuFu9i9wf0Dy5G1lnXBA+Xh7VHg0emp6BnmWeb5xEvbK8Gr1mvM29Z7tfcFH4yPn892n7tsdTaXXc0e87X3Xevb7kfyC/Er83vqb+wv9m8JgAN8A3YEPFqkt0i4qCkQBLIDdwQ+DjIIWhH062Ls4qDF5YufBVsGrwnuCKGELA+pCXkf6h66NfRhmGGYJKwtXC48Jrw6/EOER0RxRH+keeTayBtRqlGCqOZoXHR49JHo8SWeS3YtGYqxjcmP6VtqsHTV0mvLVJelLDu7XG45Z/mpWExsRGxN7BdOIKeSMx7HjquIG+OyuLu5L3luvJ28Eb4zv5g/HO8cXxz/PME5YUfCSKJrYkniqIAlKBO8TvJJ2p/0ITkw+WjyZEpESn0qPjU29YxQUZgsbE/TSFuV1i0yEeWL+lc4rti1YkzsJz6SDqUvTW/OoCKD0U2JoeQHyUCmS2Z55seV4StPrVJYJVx1M8s4a3PWcLZX9s+r0au5q9vWaK3ZsGZgLXPtwXXQurh1bet11uetH8rxzqnaQNyQvOG3XIvc4tx3GyM2tuSp5+XkDf7g/UNtvmy+OP/uJqdN+39E/yj4sXOz9eY9m78V8AquF1oUlhR+KeIWXf/J8qfSnya3xG/p3Gq3dd827Dbhtr7trturihWKs4sHdwTsaNxJ31mw892u5buuldiU7N9N3C3Z3V/qX9q8R3fPtj1fyhLLesvdy+sr1Co2V3zYy9vbs89tX91+9f2F+z8fEBy4d9D7YGOlfmXJIeyhzEPPDocf7viZ8XP1EdUjhUe+HhUe7a8Krmqvtq+urlGr2VoL10pqR47FHOs67nG8uc607mA9rb7wBDghOfHil9hf+k76nWw7xThVd1rvdEUDpaGgEWrMahxrSmzqb45q7j7je6atxaml4VezX4+2arWWn1U6u/Uc8Vzeucnz2efHL4gujF5MuDjYtrzt4aXIS3faF7d3Xva7fPWK15VLHcyO81edr7Zec7x25jrjetMNuxuNN21vNvxm+1tDp11n4y37W81dDl0t3Qu7z/W49ly87XH7yh32nRu9i3q7+8L67t2Nudt/j3fv+f2U+68fZD6YeJjzCPOo4LH845Inak8qfzf6vb7frv/sgMfAzachTx8Ocgdf/pH+x5ehvGfkZyXDmsPVz62et454jXS9WPJi6KXo5cRo/p8Kf1a8Mnx1+i+3v26ORY4NvRa/nnxT9Fbl7dF3Nu/axoPGn7xPfT/xoeCjyseqT4xPHZ8jPg9PrPyC+1L61ehryze/b48mUycnRRwxZ3oUQCEOx8cD8OYoAOQoACjIDEFcMjNPTxs08w0wTeA/8czMPW12ANQhYWosYl0A4ATi+jmINhKnRqJQNwBbW0t9dvadntOnDIt8sRzwmKL7O5bmgH/YzAz/Xd//jGBK1Qb8M/4LUccITyfx5hgAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAFCgAwAEAAAAAQAAAFAAAAAAEihudQAADFxJREFUeAHtXQtwFdUZPv/ZvTfvhwkEkoIm5BICIqiIxQfojC2+i7U+KVQCRGx9FUvBWouRokVbhalDq2ZKwsPalnbU1qFWizgVxrFOq6AYkpAQTQgVeYe87t09f/+9ZeW+cnf33rNJhO5MZvec/c//f/+3/zl7XncDbJAdWHW5qhfvvVJwPpwhy2QcD4OfNauvTXwHNm7UBxlcBoMFUG/1mAmKig8gsBmEKTcSFwB8goi/VVP0X8PtTa2R9wcqPeAEdq4fW5ii61XIWCWRYAMPdnEGizn6X4CKliMDRZxp1wZgU1Tu2aiqgZK9d3OEpURenlPtBHyPwsUS+M7ujU7LypQfEAIDNaO/TlXyRSIuX4Iz76HK7vbOanhPgi7HKvqVwN51peO5UNYQysmOkVoUAMS1iq49AvP3fGIhKvV2vxDYsa60IE3wFchgDqF3zyYwP0N8UoWuVXDH3oNSmepDmXvOkEGjndNK2h+m7sgiSmb0gUF6NjnVxgB+pLw64UW3uz6uEajVlM2mWFtG7VyxdIbsK9yh6/yHqfN2vW6/iDNJ6QQG1vguY5w/STAudAbFPWlycoOmBJanzt5TL9uKNAKD7Rzy1YjwLQIpTa9Eh48xzqrVADwK8+o7ZOlN2lGsKc7VuPd+avGWMIQ0WcBc0wOsjQNbwVM91XDLTn+ydpIi0F/jm8uBP0ztXEmyQAag/C6G+kJPRdNrydhOiMBgOwf8p1RRpyZjfJCU/bsa6L0TKj/ZkwgeRwT2rC0vU1H8hCJuViLGBnEZQUTUKMAegTsa9jrBaYvAYDvHvA9SxC0g5VEzJU4MDmZZImMf/T3LW4oeh6q3NDtY4xKIq4dmBjJyb6bZj8co6grtKDwVZIiUJp3BQylz6v9g5U+fBPbU+koVxo1x6zQrJafqfQC2SdGgkro97X35GJPA3jW+cYoCW6hPV9BXwdMlnwhqUVj312BOa1Msn6MIxBfGnqX5tXdpLDksVoHTMc8g8agqJubP2n0s0n81MkP36z8fEPLSCxByRiNkjxRwRrmKaroAUAULHFPxSIOGR5o5dnyKrLNdicTsdpra/+IcnT9Pdm6LtBUWgYHa0ksYU7ZGCrmWzi9HPnK6gNIZDDJH2CIGO/cJbHoJcM8mhkcaw/C7hvN/ioXq52Phzl0NoXbCIhCAz0ai2/Vj2GRUzr2PGonJQNFuizgTE2QUcpjwPcboT7RvQ/xglY6f7wjzw5SVfObCI2aSzqpQvTw0gYJfHpqWfk3VVLlomaZetQFgOE3W0GsumYMXXQLKNRtVZeqTgmV+JRlVtspSb/u6SMEwAhlgaaSArDQUTdWVa//EoOxW6dECo2Zw5aoNyAqnuL1ufHYkH+EEMibdOcMgP6eSKVc8yyG9ILmQi0QfkoaMIlCnr1X4+Eo3G6HUEJPBS1cICzUC4+cJfv4i40G5Rl6oPT5pERCDiB9V94+9UOOyr8F3s1AmLY6MctlmovQpRCIfY7T37h/uOZddovPJS/olCmLRxKcsZSzHJ2Ldk5nnWhVWqc1j3ixnBAoN8XA9w9Y3BXb9hyqi4MyTySB/HA0qJwNkjXCgD5g67RdMe/UGpFVBB+Wc0esKgfzc+5FlF9sH3XuU6XXrEetqaWU3uFwR1jekNi2oC7KLdeoDcl46w57uvLGcn/cAin8/7YwVB9Lyq7CaZows7DlIQHHvVtT+fL3A7c+Y5PUJH4+1KGLrYtA3L0DWc8jW2xZ8NzLmyepTZ7I3pBMIxVcD2OzUirq1Qt88n7GuzxzhwLa3QNt0C2MdrZb+Q9pQ4KNvtEW2pbIYAo6AxygflaVQn8/OQSSg+OfjnDoctqM1TG9HK5F4M56o8mG3IhMwmuRcOuQSmDVCsOxR1oR0tqO2dXHyLvUcBm3bjy3ftJA7mmOuzxUSpRLIh19k6YzBmvi4Vofeo9ZE26G49W+An71nSY5SeLGljB1zkTJSCYThU8LenpHGgmnUmWj8oxzyDIXURcG6DdZj4PyoYWxMeE4zpRLIMoosnzK2vKazQKc10Q48Ee1vqwzjL6LxoedYYnNg8gtRqQRCas4Xivu6wEMfy4s+00igk4ljrfGbj/RC+XbJvkQCQTBvdnwnyCB2fe6KI3Bkd/wQVNPJV8Io+ZBGIO15RiZo6GV5JNhtsdKrd1s3C95sKy2O79tw2J5ORKGg6LHUB2qadYNvz2SYFKQXWUYXeDOlR7+lw2EoLRJUPS2dwByfVJsmJMwfZzmuR0+u9BeJXGeO77V8wnzEpZYkm6TYPUPeWB086da2h5RLj36pBOLBnZbkQPYoBQomSY0EGDPLlh+YW24ZpXYfmilny7ApbHlu+auliCHAz/u+ZbTYUmQI0cQFL7nGljjPGjnII7B7v4KH6i2jy1jShDEzLaPVDivqpbSkaaP6GrpgyNlyA4Z0SleIza/Y8Zsp5/8AoCi58SmctxDZsAvs+5BWwCFvnNQotG/cFi00UUAzy3ammBh1KZTLVjEouc6xQwgc+SWP6cqEuxw3BXDmFTY9sScmnUAm/Fzf/oxlNQ7C8+aAMu0phV/0KO0sGGGrDAy7kKnffB247ybrjnMMDnjZrZypKbZsxSgelSX9rRS00PB7huUzGWQVRxmMlcHLbuN81A0o2jYLbN7E2MHtQnQdoC3LNGpRUjRMH6YoxdcIGHEZQMH5yT10mqGmnQyIDZabT2NBjcoLqwKB2jJpTwbyx6Jy5Qu0HpERZiMKQbwMY4YFXHjGtIgVXK073u4Ym2dOQ1iZ5J5mHOfxYB2Id5fFkbBxyw3yDLMpOYwbG5IoxG2giCviwuM9aU80vQws60zkE+8Oe2onJVy8ouVR0bZFx9YtjB3YAWgsl2pdNGOUySFzJMCQicgn3ItiJ+2b1HoTxucqgQY94oNfAtO7kfbHJAzSEc09h6gnUIviw2paUBeRLxrOeg4zNP4O0J5CepszJTUpXK4TGCTxw2rAo806n7KcQ1peUoDjkYn1Lwr9X09xFugwbFjbQdrxp3XFU2l5L5LAXiqRYlkqAQH8dLOiH6xjyqQHdCi5PjIyEtAYUqRzH+rvr2TY9IprbfoJa1GTtmEGqUV19DOnEBfsXXa2M/0fixT9jbk6raRFgbGn5KQUBjpR3/4r1P7yDYM864g7WTTRq48iC4ZFIDBO4zCxMFJIdhrbtyl6+zbGzijTedntnBdOQZYzKuxh9mlT9yMe/BBpcYqJppe4rVFPn8oc3gDxcmSJsKcW+M2oS5mivh0p1C/prJEI+eN12kCkojcHeVoeNfBp9BEJ3SDJS7u1BB5vAyKfse4DYbj7BR9Flo5aeWpFc2OovSggWm3ZJqrKV4cK/f+aFsMQnvNW1N8VyUVUtVE0zyxjz1Sk4OmcJvIaPT0pS2NxEEUgzN95SAicTsL7YhU43fKoNrbSLzenw3d37I/lexSBhlDK3N0f0waMqRSJ78cqdLrk0VjvdQ/6p6VV7Grpy+eYBBrCqXN2N6kt376A5kPm0O6Ttr4UnIr5FHV7aJX7Wm9L4bX0hbiWeD5GvURiCePqszO19MCj1LefT/flr07HMjowecbn9JarLTNXQlWVrSUHWwSavnTXlBd7uFhGv6ebbeadImeNatlK9Sguh/uif9Iaz0dHBJqKTnyFbT2lzzXzvqxnCobNqOG9KZWNdYn4kBCBpiH6ZfsszvkTlC4y874sZwR8n7YaLfFUNL6RDOakCDQM4xrf0AB9BgU4X0FJbzJg+qnsEXq73uPt7XgJFrQnNxVDgJMm0HS6mz4VoPj1xTTFtoCWMuTOtphGkjsfF4grOzP0p/JuaT6anKqTpaURaKr0rxv9VUB4mibLLzbzBvpMM/e1muZ9LHX+zt2ysUgn0ATYW1N2G3D2OPWnSsy8/j/jO0zwhz1z6990y7ZrBBqAcd2EjIDePZ82XxrjSMdf6k3UaaMjzAQ+4Z3b+FyiOuyWc5VAE0SwfezV6Teo7B4zz6Wz8UO7lR3p2tMy27l4WPuFQBNAz/pSH2h8BYfgRxrNbBlnPwq2TheB5Wmn4ld8IxnqXTvmJgXxZ1TVfJH3EkhvYTpb6pnXsDWBskkX6dcIDEWLVVVcO+t3DyKISgJRHHrP5vUOgbA8paJ+o015V8QGjEDTmxPt40PUPt5p5sU9A9svUKw+rrJVsT7FFLesCzcHnEDTp+7qMSWKB5cSIOPbLEPM/JDzPupbPq8y/6rB8E8ITFz/BcAC6oQAJyXnAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e",
  Jc = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4867_62315)'%3e%3cpath%20d='M40%200C37.384%202.03569%2034.5932%203.83603%2031.66%205.38C30.44%206.04%2029.08%206.74%2027.66%207.38C21.9369%2010.0591%2015.8843%2011.969%209.66%2013.06C8.22%2013.3%206.72%2013.52%205.18%2013.68C3.64%2013.84%201.74%2014%200%2014C1.50896%2014.5515%203.07044%2014.9469%204.66%2015.18C4.36358%2016.4384%204.21591%2017.7272%204.22%2019.02C4.20736%2021.7907%204.86741%2024.5231%206.14346%2026.9826C7.41951%2029.442%209.27343%2031.555%2011.546%2033.14C13.8186%2034.7251%2016.442%2035.7349%2019.1908%2036.0827C21.9397%2036.4305%2024.7319%2036.1059%2027.3276%2035.1368C29.9234%2034.1677%2032.2451%2032.5831%2034.0935%2030.519C35.9419%2028.4549%2037.2617%2025.973%2037.9396%2023.2864C38.6174%2020.5999%2038.6331%2017.7889%2037.9852%2015.095C37.3373%2012.401%2036.0453%209.90457%2034.22%207.82C36.6342%205.6116%2038.5971%202.95589%2040%200ZM21.34%2018.76C22.0322%2018.76%2022.7089%2018.9653%2023.2845%2019.3499C23.8601%2019.7344%2024.3087%2020.2811%2024.5736%2020.9206C24.8385%2021.5601%2024.9078%2022.2639%2024.7727%2022.9428C24.6377%2023.6217%2024.3044%2024.2454%2023.8149%2024.7349C23.3254%2025.2244%2022.7017%2025.5577%2022.0228%2025.6927C21.3439%2025.8278%2020.6401%2025.7585%2020.0006%2025.4936C19.3611%2025.2287%2018.8144%2024.7801%2018.4299%2024.2045C18.0453%2023.6289%2017.84%2022.9522%2017.84%2022.26C17.84%2021.3317%2018.2087%2020.4415%2018.8651%2019.7851C19.5215%2019.1287%2020.4117%2018.76%2021.34%2018.76ZM34.54%2019.04C34.54%2022.5409%2033.1493%2025.8983%2030.6738%2028.3738C28.1983%2030.8493%2024.8409%2032.24%2021.34%2032.24C17.8391%2032.24%2014.4817%2030.8493%2012.0062%2028.3738C9.53071%2025.8983%208.14%2022.5409%208.14%2019.04C8.13289%2017.8775%208.28771%2016.7198%208.6%2015.6C10.2388%2015.69%2011.8812%2015.69%2013.52%2015.6C12.8819%2017.0475%2012.6574%2018.6435%2012.8714%2020.2108C13.0854%2021.7782%2013.7295%2023.2556%2014.7323%2024.479C15.735%2025.7025%2017.0572%2026.6242%2018.552%2027.1417C20.0468%2027.6593%2021.6558%2027.7525%2023.2004%2027.4111C24.745%2027.0696%2026.1648%2026.3068%2027.3022%2025.2073C28.4395%2024.1079%2029.2499%2022.7148%2029.6435%2021.1826C30.0371%2019.6505%2029.9984%2018.0392%2029.5318%2016.5277C29.0651%2015.0162%2028.1888%2013.6636%2027%2012.62C28.4731%2011.9664%2029.8853%2011.1833%2031.22%2010.28C33.3605%2012.6959%2034.5416%2015.8123%2034.54%2019.04Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4867_62315'%3e%3crect%20width='40'%20height='36.16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  es = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4867_62322)'%3e%3cpath%20d='M4.57062%2012.026C2.55801%2011.5384%202.04783%2011.1347%202.04783%2010.1435C2.04783%209.18525%202.89412%208.46283%204.41766%208.46283C6.02775%208.46283%207.0421%209.35412%207.14373%2011.0168L8.78601%2010.765C8.75482%208.44484%207.0592%207%204.58773%207C1.99751%207%200.32101%208.26099%200.32101%2010.2974C0.32101%2012.1639%201.16731%2013.0711%204.45188%2013.7766C6.46448%2014.2312%207.17694%2014.6509%207.17694%2015.761C7.17694%2016.8711%206.14448%2017.4916%204.67125%2017.4916C2.91123%2017.4916%201.74392%2016.5494%201.64128%2014.9686L0%2015.2534C0.20126%2017.6075%202.06493%2018.9904%204.57062%2018.9904C7.16084%2018.9904%208.92086%2017.6914%208.92086%2015.6781C8.92086%2013.6227%207.90551%2012.8493%204.57062%2012.026Z'%20fill='%23FF5500'/%3e%3cpath%20d='M12.5332%2013.4988H18.4284V12.0111H12.5332V8.5667H18.7336V7.09592H10.8394V18.7986H18.801V17.3268H12.5332V13.4988Z'%20fill='%23FF5500'/%3e%3cpath%20d='M22.8927%2013.4988H28.7881V12.0111H22.8927V8.5667H29.0922V7.09592H21.199V18.7986H29.1607V17.3268H22.8927V13.4988Z'%20fill='%23FF5500'/%3e%3cpath%20d='M0%2023.1492H3.63979V33.3789H5.33239V23.1492H8.92086V21.6763H0V23.1492Z'%20fill='%23FF5500'/%3e%3cpath%20d='M17.1072%2026.6078H12.5332V21.6763H10.8394V33.3789H12.5332V28.0797H17.1072V33.3789H18.801V21.6763H17.1072V26.6078Z'%20fill='%23FF5500'/%3e%3cpath%20d='M24.3073%2021.6763H21.199V23.1492H24.3073V31.905H21.199V33.3789H24.3587H26.0524H29.1607V31.905H26.0524V23.1492H29.1607V21.6763H26.001H24.3073Z'%20fill='%23FF5500'/%3e%3cpath%20d='M32.8685%208.5667H38.1147V18.7986H39.7122V7.09592H38.5943H32.0883H31.271V18.7986H32.8685V8.5667Z'%20fill='%23FF5500'/%3e%3cpath%20d='M35.6498%2026.5113C33.6371%2026.0235%2033.127%2025.6198%2033.127%2024.6284C33.127%2023.67%2033.9733%2022.9475%2035.4968%2022.9475C37.1069%2022.9475%2038.1213%2023.8389%2038.2229%2025.5019L39.8652%2025.2501C39.83%2022.9295%2038.1374%2021.4844%2035.6659%2021.4844C33.0767%2021.4844%2031.4002%2022.7446%2031.4002%2024.7823C31.4002%2026.6491%2032.2465%2027.5565%2035.5311%2028.2622C37.5436%2028.7159%2038.2561%2029.1366%2038.2561%2030.2469C38.2561%2031.3571%2037.2236%2031.9788%2035.7504%2031.9788C33.9904%2031.9788%2032.823%2031.0363%2032.7204%2029.4553L31.0792%2029.7412C31.2804%2032.0957%2033.1441%2033.4748%2035.6498%2033.4748C38.24%2033.4748%2040%2032.1756%2040%2030.1619C40%2028.1082%2038.9836%2027.3347%2035.6498%2026.5113Z'%20fill='%23FF5500'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4867_62322'%3e%3crect%20width='40'%20height='26.4748'%20fill='white'%20transform='translate(0%207)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  ts = {
    Actito: {
      icon: Xc,
      link: "https://www.actito.com/"
    },
    Adnami: {
      icon: Yc,
      link: "https://www.adnami.io/"
    },
    Bizzkit: {
      icon: Kc,
      link: "https://bizzkit.com/"
    },
    Ibexa: {
      icon: Zc,
      link: "https://www.ibexa.co/"
    },
    Qualifio: {
      icon: Qc,
      link: "https://www.qualifio.com/"
    },
    Raptor: {
      icon: Jc,
      link: "https://www.raptorservices.com/"
    },
    Seenthis: {
      icon: es,
      link: "https://www.seenthis.co/"
    }
  },
  ns = function ns(_ref13) {
    var e = _ref13.open,
      t = _ref13.overlayColor;
    var n = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ut);
    return /* @__PURE__ */S.jsx("div", {
      className: n("overlay"),
      "data-testid": "app-switcher-overlay",
      style: {
        opacity: e ? 1 : 0,
        backgroundColor: t
      }
    });
  },
  rs = function rs(_ref16) {
    var e = _ref16.icon,
      t = _ref16.link,
      n = _ref16.name;
    var r = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ut);
    return /* @__PURE__ */S.jsxs("a", {
      className: r("partner__link"),
      "data-testid": "app-switcher-partner-link",
      href: t,
      rel: "noreferrer",
      target: "_blank",
      children: [/* @__PURE__ */S.jsx("img", {
        src: e,
        alt: n,
        className: r("partner__icon")
      }), /* @__PURE__ */S.jsx("span", {
        children: n
      })]
    });
  },
  os = function os() {
    var e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Ut);
    return /* @__PURE__ */S.jsxs("a", {
      className: e("footer__link"),
      "data-testid": "qntm-ecosystem-link",
      href: "https://qntmgroup.com/solutions/",
      rel: "noreferrer",
      target: "_blank",
      children: [/* @__PURE__ */S.jsx("span", {
        children: "Discover"
      }), /* @__PURE__ */S.jsx(as, {}), /* @__PURE__ */S.jsx("span", {
        children: "ecosystem"
      })]
    });
  },
  as = function as() {
    return /* @__PURE__ */S.jsxs("svg", {
      width: "53",
      height: "10",
      viewBox: "0 0 53 10",
      children: [/* @__PURE__ */S.jsx("path", {
        d: "M27.7695 4.56776H29.3719V3.08609H37.3819V4.56776H38.9824V1.60614H27.7695V4.56776Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M34.1772 3.95056H32.5748V6.91391H30.9724V8.39558H35.7795V6.91391H34.1772V3.95056Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M53 1.60614H49.7971V3.08608H51.3995H53V1.60614Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M51.3995 3.08612L49.7971 4.56779V8.3956H53V6.91392H51.3995V4.56779V3.08612Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M15.3545 6.91392H13.7521V8.3956H16.955V4.56779L15.3545 3.08612V6.91392Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M22.9624 5.43221L24.5648 6.91389V3.08608H26.1672V1.60614H22.9624V5.43221Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M23.0803 6.7998L17.9067 2.01072C17.6318 1.75485 17.2579 1.61135 16.869 1.61135L13.7521 1.60443V3.08783H16.5399C16.6521 3.08783 16.7586 3.12933 16.839 3.20194L22.0108 7.99101C22.2856 8.24689 22.6596 8.38866 23.0485 8.38866L26.1654 8.39558V6.91391H23.3776C23.2654 6.91391 23.1588 6.87241 23.0784 6.7998H23.0803Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M42.1872 6.91392H40.5848V8.3956H43.7896V4.56779L42.1872 3.08612V6.91392Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M43.7017 1.61135L40.5848 1.60443V3.08783H43.3745C43.4867 3.08783 43.5933 3.12933 43.6737 3.20194L47.4693 6.722L48.6472 5.63279L44.7357 2.01245C44.4608 1.7583 44.0888 1.6148 43.6998 1.61308L43.7017 1.61135Z"
      }), /* @__PURE__ */S.jsx("path", {
        d: "M10.8146 5C10.8146 2.23893 8.39332 0 5.40732 0C2.42133 0 0 2.23721 0 4.99827C0 7.75934 2.41946 9.99827 5.40545 9.99827V8.39384C3.37864 8.39384 1.73326 6.87414 1.73326 5C1.73326 3.12586 3.37677 1.60443 5.40358 1.60443C7.4304 1.60443 9.07578 3.12414 9.07578 4.99827C9.07578 5.63105 8.88506 6.25 8.5242 6.78769C8.48868 6.84129 8.41389 6.85857 8.35592 6.82573C8.35032 6.82227 8.34471 6.81881 8.3391 6.81362C8.33349 6.80844 8.32788 6.80325 8.32227 6.79806L6.0767 4.72165C5.80184 4.46577 5.42789 4.324 5.03898 4.324L3.38799 4.31708V5.79703H4.70617C4.81835 5.79703 4.9268 5.83852 5.00533 5.91113L7.24342 7.98236C7.51828 8.23824 7.89223 8.38001 8.28113 8.38001L12.1459 8.38693V6.9139H10.3996C10.6725 6.30705 10.8128 5.65526 10.8109 4.99654L10.8146 5Z"
      })]
    });
  };
function is() {
  this.__data__ = [], this.size = 0;
}
var cs = is;
function ss(e, t) {
  return e === t || e !== e && t !== t;
}
var It = ss,
  ls = It;
function us(e, t) {
  for (var n = e.length; n--;) if (ls(e[n][0], t)) return n;
  return -1;
}
var Nt = us,
  fs = Nt,
  ds = Array.prototype,
  ps = ds.splice;
function vs(e) {
  var t = this.__data__,
    n = fs(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ps.call(t, n, 1), --this.size, !0;
}
var hs = vs,
  gs = Nt;
function ms(e) {
  var t = this.__data__,
    n = gs(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var bs = ms,
  ys = Nt;
function Cs(e) {
  return ys(this.__data__, e) > -1;
}
var ws = Cs,
  As = Nt;
function xs(e, t) {
  var n = this.__data__,
    r = As(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
var Es = xs,
  Ps = cs,
  Os = hs,
  $s = bs,
  _s = ws,
  Ss = Es;
function qe(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qe.prototype.clear = Ps;
qe.prototype["delete"] = Os;
qe.prototype.get = $s;
qe.prototype.has = _s;
qe.prototype.set = Ss;
var Bt = qe,
  Ts = Bt;
function Rs() {
  this.__data__ = new Ts(), this.size = 0;
}
var Ls = Rs;
function Fs(e) {
  var t = this.__data__,
    n = t["delete"](e);
  return this.size = t.size, n;
}
var Ds = Fs;
function js(e) {
  return this.__data__.get(e);
}
var Ms = js;
function Is(e) {
  return this.__data__.has(e);
}
var Ns = Is,
  Bs = _typeof(vt) == "object" && vt && vt.Object === Object && vt,
  so = Bs,
  Vs = so,
  Hs = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
  ks = Vs || Hs || Function("return this")(),
  Xe = ks,
  Us = Xe,
  zs = Us.Symbol,
  lo = zs,
  sr = lo,
  uo = Object.prototype,
  Gs = uo.hasOwnProperty,
  Ws = uo.toString,
  nt = sr ? sr.toStringTag : void 0;
function qs(e) {
  var t = Gs.call(e, nt),
    n = e[nt];
  try {
    e[nt] = void 0;
    var r = !0;
  } catch (_unused6) {}
  var o = Ws.call(e);
  return r && (t ? e[nt] = n : delete e[nt]), o;
}
var Xs = qs,
  Ys = Object.prototype,
  Ks = Ys.toString;
function Zs(e) {
  return Ks.call(e);
}
var Qs = Zs,
  lr = lo,
  Js = Xs,
  el = Qs,
  tl = "[object Null]",
  nl = "[object Undefined]",
  ur = lr ? lr.toStringTag : void 0;
function rl(e) {
  return e == null ? e === void 0 ? nl : tl : ur && ur in Object(e) ? Js(e) : el(e);
}
var Vt = rl;
function ol(e) {
  var t = _typeof(e);
  return e != null && (t == "object" || t == "function");
}
var Se = ol,
  al = Vt,
  il = Se,
  cl = "[object AsyncFunction]",
  sl = "[object Function]",
  ll = "[object GeneratorFunction]",
  ul = "[object Proxy]";
function fl(e) {
  if (!il(e)) return !1;
  var t = al(e);
  return t == sl || t == ll || t == cl || t == ul;
}
var Pn = fl,
  dl = Xe,
  pl = dl["__core-js_shared__"],
  vl = pl,
  sn = vl,
  fr = function () {
    var e = /[^.]+$/.exec(sn && sn.keys && sn.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
function hl(e) {
  return !!fr && fr in e;
}
var gl = hl,
  ml = Function.prototype,
  bl = ml.toString;
function yl(e) {
  if (e != null) {
    try {
      return bl.call(e);
    } catch (_unused7) {}
    try {
      return e + "";
    } catch (_unused8) {}
  }
  return "";
}
var Cl = yl,
  wl = Pn,
  Al = gl,
  xl = Se,
  El = Cl,
  Pl = /[\\^$.*+?()[\]{}|]/g,
  Ol = /^\[object .+?Constructor\]$/,
  $l = Function.prototype,
  _l = Object.prototype,
  Sl = $l.toString,
  Tl = _l.hasOwnProperty,
  Rl = RegExp("^" + Sl.call(Tl).replace(Pl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Ll(e) {
  if (!xl(e) || Al(e)) return !1;
  var t = wl(e) ? Rl : Ol;
  return t.test(El(e));
}
var Fl = Ll;
function Dl(e, t) {
  return e == null ? void 0 : e[t];
}
var jl = Dl,
  Ml = Fl,
  Il = jl;
function Nl(e, t) {
  var n = Il(e, t);
  return Ml(n) ? n : void 0;
}
var On = Nl,
  Bl = On,
  Vl = Xe,
  Hl = Bl(Vl, "Map"),
  fo = Hl,
  kl = On,
  Ul = kl(Object, "create"),
  Ht = Ul,
  dr = Ht;
function zl() {
  this.__data__ = dr ? dr(null) : {}, this.size = 0;
}
var Gl = zl;
function Wl(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ql = Wl,
  Xl = Ht,
  Yl = "__lodash_hash_undefined__",
  Kl = Object.prototype,
  Zl = Kl.hasOwnProperty;
function Ql(e) {
  var t = this.__data__;
  if (Xl) {
    var n = t[e];
    return n === Yl ? void 0 : n;
  }
  return Zl.call(t, e) ? t[e] : void 0;
}
var Jl = Ql,
  eu = Ht,
  tu = Object.prototype,
  nu = tu.hasOwnProperty;
function ru(e) {
  var t = this.__data__;
  return eu ? t[e] !== void 0 : nu.call(t, e);
}
var ou = ru,
  au = Ht,
  iu = "__lodash_hash_undefined__";
function cu(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = au && t === void 0 ? iu : t, this;
}
var su = cu,
  lu = Gl,
  uu = ql,
  fu = Jl,
  du = ou,
  pu = su;
function Ye(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ye.prototype.clear = lu;
Ye.prototype["delete"] = uu;
Ye.prototype.get = fu;
Ye.prototype.has = du;
Ye.prototype.set = pu;
var vu = Ye,
  pr = vu,
  hu = Bt,
  gu = fo;
function mu() {
  this.size = 0, this.__data__ = {
    hash: new pr(),
    map: new (gu || hu)(),
    string: new pr()
  };
}
var bu = mu;
function yu(e) {
  var t = _typeof(e);
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var Cu = yu,
  wu = Cu;
function Au(e, t) {
  var n = e.__data__;
  return wu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var kt = Au,
  xu = kt;
function Eu(e) {
  var t = xu(this, e)["delete"](e);
  return this.size -= t ? 1 : 0, t;
}
var Pu = Eu,
  Ou = kt;
function $u(e) {
  return Ou(this, e).get(e);
}
var _u = $u,
  Su = kt;
function Tu(e) {
  return Su(this, e).has(e);
}
var Ru = Tu,
  Lu = kt;
function Fu(e, t) {
  var n = Lu(this, e),
    r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
var Du = Fu,
  ju = bu,
  Mu = Pu,
  Iu = _u,
  Nu = Ru,
  Bu = Du;
function Ke(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n;) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ke.prototype.clear = ju;
Ke.prototype["delete"] = Mu;
Ke.prototype.get = Iu;
Ke.prototype.has = Nu;
Ke.prototype.set = Bu;
var Vu = Ke,
  Hu = Bt,
  ku = fo,
  Uu = Vu,
  zu = 200;
function Gu(e, t) {
  var n = this.__data__;
  if (n instanceof Hu) {
    var r = n.__data__;
    if (!ku || r.length < zu - 1) return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Uu(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
var Wu = Gu,
  qu = Bt,
  Xu = Ls,
  Yu = Ds,
  Ku = Ms,
  Zu = Ns,
  Qu = Wu;
function Ze(e) {
  var t = this.__data__ = new qu(e);
  this.size = t.size;
}
Ze.prototype.clear = Xu;
Ze.prototype["delete"] = Yu;
Ze.prototype.get = Ku;
Ze.prototype.has = Zu;
Ze.prototype.set = Qu;
var Ju = Ze,
  e0 = On,
  t0 = function () {
    try {
      var e = e0(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch (_unused9) {}
  }(),
  po = t0,
  vr = po;
function n0(e, t, n) {
  t == "__proto__" && vr ? vr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
var $n = n0,
  r0 = $n,
  o0 = It;
function a0(e, t, n) {
  (n !== void 0 && !o0(e[t], n) || n === void 0 && !(t in e)) && r0(e, t, n);
}
var vo = a0;
function i0(e) {
  return function (t, n, r) {
    for (var o = -1, a = Object(t), c = r(t), i = c.length; i--;) {
      var l = c[e ? i : ++o];
      if (n(a[l], l, a) === !1) break;
    }
    return t;
  };
}
var c0 = i0,
  s0 = c0,
  l0 = s0(),
  u0 = l0,
  Rt = {
    exports: {}
  };
Rt.exports;
(function (e, t) {
  var n = Xe,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    a = o && o.exports === r,
    c = a ? n.Buffer : void 0,
    i = c ? c.allocUnsafe : void 0;
  function l(u, d) {
    if (d) return u.slice();
    var f = u.length,
      v = i ? i(f) : new u.constructor(f);
    return u.copy(v), v;
  }
  e.exports = l;
})(Rt, Rt.exports);
var f0 = Rt.exports,
  d0 = Xe,
  p0 = d0.Uint8Array,
  v0 = p0,
  hr = v0;
function h0(e) {
  var t = new e.constructor(e.byteLength);
  return new hr(t).set(new hr(e)), t;
}
var g0 = h0,
  m0 = g0;
function b0(e, t) {
  var n = t ? m0(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var y0 = b0;
function C0(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
  return t;
}
var w0 = C0,
  A0 = Se,
  gr = Object.create,
  x0 = /* @__PURE__ */function () {
    function e() {}
    return function (t) {
      if (!A0(t)) return {};
      if (gr) return gr(t);
      e.prototype = t;
      var n = new e();
      return e.prototype = void 0, n;
    };
  }(),
  E0 = x0;
function P0(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var O0 = P0,
  $0 = O0,
  _0 = $0(Object.getPrototypeOf, Object),
  ho = _0,
  S0 = Object.prototype;
function T0(e) {
  var t = e && e.constructor,
    n = typeof t == "function" && t.prototype || S0;
  return e === n;
}
var go = T0,
  R0 = E0,
  L0 = ho,
  F0 = go;
function D0(e) {
  return typeof e.constructor == "function" && !F0(e) ? R0(L0(e)) : {};
}
var j0 = D0;
function M0(e) {
  return e != null && _typeof(e) == "object";
}
var st = M0,
  I0 = Vt,
  N0 = st,
  B0 = "[object Arguments]";
function V0(e) {
  return N0(e) && I0(e) == B0;
}
var H0 = V0,
  mr = H0,
  k0 = st,
  mo = Object.prototype,
  U0 = mo.hasOwnProperty,
  z0 = mo.propertyIsEnumerable,
  G0 = mr(/* @__PURE__ */function () {
    return arguments;
  }()) ? mr : function (e) {
    return k0(e) && U0.call(e, "callee") && !z0.call(e, "callee");
  },
  bo = G0,
  W0 = Array.isArray,
  yo = W0,
  q0 = 9007199254740991;
function X0(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= q0;
}
var Co = X0,
  Y0 = Pn,
  K0 = Co;
function Z0(e) {
  return e != null && K0(e.length) && !Y0(e);
}
var _n = Z0,
  Q0 = _n,
  J0 = st;
function e2(e) {
  return J0(e) && Q0(e);
}
var t2 = e2,
  Lt = {
    exports: {}
  };
function n2() {
  return !1;
}
var r2 = n2;
Lt.exports;
(function (e, t) {
  var n = Xe,
    r = r2,
    o = t && !t.nodeType && t,
    a = o && !0 && e && !e.nodeType && e,
    c = a && a.exports === o,
    i = c ? n.Buffer : void 0,
    l = i ? i.isBuffer : void 0,
    u = l || r;
  e.exports = u;
})(Lt, Lt.exports);
var wo = Lt.exports,
  o2 = Vt,
  a2 = ho,
  i2 = st,
  c2 = "[object Object]",
  s2 = Function.prototype,
  l2 = Object.prototype,
  Ao = s2.toString,
  u2 = l2.hasOwnProperty,
  f2 = Ao.call(Object);
function d2(e) {
  if (!i2(e) || o2(e) != c2) return !1;
  var t = a2(e);
  if (t === null) return !0;
  var n = u2.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Ao.call(n) == f2;
}
var p2 = d2,
  v2 = Vt,
  h2 = Co,
  g2 = st,
  m2 = "[object Arguments]",
  b2 = "[object Array]",
  y2 = "[object Boolean]",
  C2 = "[object Date]",
  w2 = "[object Error]",
  A2 = "[object Function]",
  x2 = "[object Map]",
  E2 = "[object Number]",
  P2 = "[object Object]",
  O2 = "[object RegExp]",
  $2 = "[object Set]",
  _2 = "[object String]",
  S2 = "[object WeakMap]",
  T2 = "[object ArrayBuffer]",
  R2 = "[object DataView]",
  L2 = "[object Float32Array]",
  F2 = "[object Float64Array]",
  D2 = "[object Int8Array]",
  j2 = "[object Int16Array]",
  M2 = "[object Int32Array]",
  I2 = "[object Uint8Array]",
  N2 = "[object Uint8ClampedArray]",
  B2 = "[object Uint16Array]",
  V2 = "[object Uint32Array]",
  H = {};
H[L2] = H[F2] = H[D2] = H[j2] = H[M2] = H[I2] = H[N2] = H[B2] = H[V2] = !0;
H[m2] = H[b2] = H[T2] = H[y2] = H[R2] = H[C2] = H[w2] = H[A2] = H[x2] = H[E2] = H[P2] = H[O2] = H[$2] = H[_2] = H[S2] = !1;
function H2(e) {
  return g2(e) && h2(e.length) && !!H[v2(e)];
}
var k2 = H2;
function U2(e) {
  return function (t) {
    return e(t);
  };
}
var z2 = U2,
  Ft = {
    exports: {}
  };
Ft.exports;
(function (e, t) {
  var n = so,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    a = o && o.exports === r,
    c = a && n.process,
    i = function () {
      try {
        var l = o && o.require && o.require("util").types;
        return l || c && c.binding && c.binding("util");
      } catch (_unused10) {}
    }();
  e.exports = i;
})(Ft, Ft.exports);
var G2 = Ft.exports,
  W2 = k2,
  q2 = z2,
  br = G2,
  yr = br && br.isTypedArray,
  X2 = yr ? q2(yr) : W2,
  xo = X2;
function Y2(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__") return e[t];
}
var Eo = Y2,
  K2 = $n,
  Z2 = It,
  Q2 = Object.prototype,
  J2 = Q2.hasOwnProperty;
function ef(e, t, n) {
  var r = e[t];
  (!(J2.call(e, t) && Z2(r, n)) || n === void 0 && !(t in e)) && K2(e, t, n);
}
var tf = ef,
  nf = tf,
  rf = $n;
function of(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, c = t.length; ++a < c;) {
    var i = t[a],
      l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), o ? rf(n, i, l) : nf(n, i, l);
  }
  return n;
}
var af = of;
function cf(e, t) {
  for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
  return r;
}
var sf = cf,
  lf = 9007199254740991,
  uf = /^(?:0|[1-9]\d*)$/;
function ff(e, t) {
  var n = _typeof(e);
  return t = t !== null && t !== void 0 ? t : lf, !!t && (n == "number" || n != "symbol" && uf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Po = ff,
  df = sf,
  pf = bo,
  vf = yo,
  hf = wo,
  gf = Po,
  mf = xo,
  bf = Object.prototype,
  yf = bf.hasOwnProperty;
function Cf(e, t) {
  var n = vf(e),
    r = !n && pf(e),
    o = !n && !r && hf(e),
    a = !n && !r && !o && mf(e),
    c = n || r || o || a,
    i = c ? df(e.length, String) : [],
    l = i.length;
  for (var u in e) (t || yf.call(e, u)) && !(c && (
  // Safari 9 has enumerable `arguments.length` in strict mode.
  u == "length" ||
  // Node.js 0.10 has enumerable non-index properties on buffers.
  o && (u == "offset" || u == "parent") ||
  // PhantomJS 2 has enumerable non-index properties on typed arrays.
  a && (u == "buffer" || u == "byteLength" || u == "byteOffset") ||
  // Skip index properties.
  gf(u, l))) && i.push(u);
  return i;
}
var wf = Cf;
function Af(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var xf = Af,
  Ef = Se,
  Pf = go,
  Of = xf,
  $f = Object.prototype,
  _f = $f.hasOwnProperty;
function Sf(e) {
  if (!Ef(e)) return Of(e);
  var t = Pf(e),
    n = [];
  for (var r in e) r == "constructor" && (t || !_f.call(e, r)) || n.push(r);
  return n;
}
var Tf = Sf,
  Rf = wf,
  Lf = Tf,
  Ff = _n;
function Df(e) {
  return Ff(e) ? Rf(e, !0) : Lf(e);
}
var Oo = Df,
  jf = af,
  Mf = Oo;
function If(e) {
  return jf(e, Mf(e));
}
var Nf = If,
  Cr = vo,
  Bf = f0,
  Vf = y0,
  Hf = w0,
  kf = j0,
  wr = bo,
  Ar = yo,
  Uf = t2,
  zf = wo,
  Gf = Pn,
  Wf = Se,
  qf = p2,
  Xf = xo,
  xr = Eo,
  Yf = Nf;
function Kf(e, t, n, r, o, a, c) {
  var i = xr(e, n),
    l = xr(t, n),
    u = c.get(l);
  if (u) {
    Cr(e, n, u);
    return;
  }
  var d = a ? a(i, l, n + "", e, t, c) : void 0,
    f = d === void 0;
  if (f) {
    var v = Ar(l),
      p = !v && zf(l),
      m = !v && !p && Xf(l);
    d = l, v || p || m ? Ar(i) ? d = i : Uf(i) ? d = Hf(i) : p ? (f = !1, d = Bf(l, !0)) : m ? (f = !1, d = Vf(l, !0)) : d = [] : qf(l) || wr(l) ? (d = i, wr(i) ? d = Yf(i) : (!Wf(i) || Gf(i)) && (d = kf(l))) : f = !1;
  }
  f && (c.set(l, d), o(d, l, r, a, c), c["delete"](l)), Cr(e, n, d);
}
var Zf = Kf,
  Qf = Ju,
  Jf = vo,
  ed = u0,
  td = Zf,
  nd = Se,
  rd = Oo,
  od = Eo;
function $o(e, t, n, r, o) {
  e !== t && ed(t, function (a, c) {
    if (o || (o = new Qf()), nd(a)) td(e, t, c, n, $o, r, o);else {
      var i = r ? r(od(e, c), a, c + "", e, t, o) : void 0;
      i === void 0 && (i = a), Jf(e, c, i);
    }
  }, rd);
}
var ad = $o;
function id(e) {
  return e;
}
var _o = id;
function cd(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var sd = cd,
  ld = sd,
  Er = Math.max;
function ud(e, t, n) {
  return t = Er(t === void 0 ? e.length - 1 : t, 0), function () {
    for (var r = arguments, o = -1, a = Er(r.length - t, 0), c = Array(a); ++o < a;) c[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t;) i[o] = r[o];
    return i[t] = n(c), ld(e, this, i);
  };
}
var fd = ud;
function dd(e) {
  return function () {
    return e;
  };
}
var pd = dd,
  vd = pd,
  Pr = po,
  hd = _o,
  gd = Pr ? function (e, t) {
    return Pr(e, "toString", {
      configurable: !0,
      enumerable: !1,
      value: vd(t),
      writable: !0
    });
  } : hd,
  md = gd,
  bd = 800,
  yd = 16,
  Cd = Date.now;
function wd(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = Cd(),
      o = yd - (r - n);
    if (n = r, o > 0) {
      if (++t >= bd) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var Ad = wd,
  xd = md,
  Ed = Ad,
  Pd = Ed(xd),
  Od = Pd,
  $d = _o,
  _d = fd,
  Sd = Od;
function Td(e, t) {
  return Sd(_d(e, t, $d), e + "");
}
var Rd = Td,
  Ld = It,
  Fd = _n,
  Dd = Po,
  jd = Se;
function Md(e, t, n) {
  if (!jd(n)) return !1;
  var r = _typeof(t);
  return (r == "number" ? Fd(n) && Dd(t, n.length) : r == "string" && t in n) ? Ld(n[t], e) : !1;
}
var Id = Md,
  Nd = Rd,
  Bd = Id;
function Vd(e) {
  return Nd(function (t, n) {
    var r = -1,
      o = n.length,
      a = o > 1 ? n[o - 1] : void 0,
      c = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, c && Bd(n[0], n[1], c) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o;) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var Hd = Vd,
  kd = ad,
  Ud = Hd,
  zd = Ud(function (e, t, n) {
    kd(e, t, n);
  }),
  Gd = zd;
var Wd = /* @__PURE__ */Zo(Gd),
  qd = /* @__PURE__ */S.jsx("svg", {
    "data-testid": "app-switcher-button",
    height: 16,
    viewBox: "0 0 16 16",
    width: 16,
    children: /* @__PURE__ */S.jsx("path", {
      d: "M4.57143 2.375C4.57143 2.97174 4.33061 3.54403 3.90196 3.96599C3.4733 4.38795 2.89192 4.625 2.28571 4.625C1.67951 4.625 1.09812 4.38795 0.66947 3.96599C0.240816 3.54403 0 2.97174 0 2.375C0 1.77826 0.240816 1.20597 0.66947 0.78401C1.09812 0.362053 1.67951 0.125 2.28571 0.125C2.89192 0.125 3.4733 0.362053 3.90196 0.78401C4.33061 1.20597 4.57143 1.77826 4.57143 2.375ZM4.57143 8C4.57143 8.59674 4.33061 9.16903 3.90196 9.59099C3.4733 10.0129 2.89192 10.25 2.28571 10.25C1.67951 10.25 1.09812 10.0129 0.66947 9.59099C0.240816 9.16903 0 8.59674 0 8C0 7.40326 0.240816 6.83097 0.66947 6.40901C1.09812 5.98705 1.67951 5.75 2.28571 5.75C2.89192 5.75 3.4733 5.98705 3.90196 6.40901C4.33061 6.83097 4.57143 7.40326 4.57143 8ZM2.28571 15.875C1.67951 15.875 1.09812 15.6379 0.66947 15.216C0.240816 14.794 0 14.2217 0 13.625C0 13.0283 0.240816 12.456 0.66947 12.034C1.09812 11.6121 1.67951 11.375 2.28571 11.375C2.89192 11.375 3.4733 11.6121 3.90196 12.034C4.33061 12.456 4.57143 13.0283 4.57143 13.625C4.57143 14.2217 4.33061 14.794 3.90196 15.216C3.4733 15.6379 2.89192 15.875 2.28571 15.875ZM10.2857 2.375C10.2857 2.97174 10.0449 3.54403 9.61624 3.96599C9.18759 4.38795 8.60621 4.625 8 4.625C7.39379 4.625 6.81241 4.38795 6.38376 3.96599C5.9551 3.54403 5.71429 2.97174 5.71429 2.375C5.71429 1.77826 5.9551 1.20597 6.38376 0.78401C6.81241 0.362053 7.39379 0.125 8 0.125C8.60621 0.125 9.18759 0.362053 9.61624 0.78401C10.0449 1.20597 10.2857 1.77826 10.2857 2.375ZM8 10.25C7.39379 10.25 6.81241 10.0129 6.38376 9.59099C5.9551 9.16903 5.71429 8.59674 5.71429 8C5.71429 7.40326 5.9551 6.83097 6.38376 6.40901C6.81241 5.98705 7.39379 5.75 8 5.75C8.60621 5.75 9.18759 5.98705 9.61624 6.40901C10.0449 6.83097 10.2857 7.40326 10.2857 8C10.2857 8.59674 10.0449 9.16903 9.61624 9.59099C9.18759 10.0129 8.60621 10.25 8 10.25ZM10.2857 13.625C10.2857 14.2217 10.0449 14.794 9.61624 15.216C9.18759 15.6379 8.60621 15.875 8 15.875C7.39379 15.875 6.81241 15.6379 6.38376 15.216C5.9551 14.794 5.71429 14.2217 5.71429 13.625C5.71429 13.0283 5.9551 12.456 6.38376 12.034C6.81241 11.6121 7.39379 11.375 8 11.375C8.60621 11.375 9.18759 11.6121 9.61624 12.034C10.0449 12.456 10.2857 13.0283 10.2857 13.625ZM13.7143 4.625C13.1081 4.625 12.5267 4.38795 12.098 3.96599C11.6694 3.54403 11.4286 2.97174 11.4286 2.375C11.4286 1.77826 11.6694 1.20597 12.098 0.78401C12.5267 0.362053 13.1081 0.125 13.7143 0.125C14.3205 0.125 14.9019 0.362053 15.3305 0.78401C15.7592 1.20597 16 1.77826 16 2.375C16 2.97174 15.7592 3.54403 15.3305 3.96599C14.9019 4.38795 14.3205 4.625 13.7143 4.625ZM16 8C16 8.59674 15.7592 9.16903 15.3305 9.59099C14.9019 10.0129 14.3205 10.25 13.7143 10.25C13.1081 10.25 12.5267 10.0129 12.098 9.59099C11.6694 9.16903 11.4286 8.59674 11.4286 8C11.4286 7.40326 11.6694 6.83097 12.098 6.40901C12.5267 5.98705 13.1081 5.75 13.7143 5.75C14.3205 5.75 14.9019 5.98705 15.3305 6.40901C15.7592 6.83097 16 7.40326 16 8ZM13.7143 15.875C13.1081 15.875 12.5267 15.6379 12.098 15.216C11.6694 14.794 11.4286 14.2217 11.4286 13.625C11.4286 13.0283 11.6694 12.456 12.098 12.034C12.5267 11.6121 13.1081 11.375 13.7143 11.375C14.3205 11.375 14.9019 11.6121 15.3305 12.034C15.7592 12.456 16 13.0283 16 13.625C16 14.2217 15.7592 14.794 15.3305 15.216C14.9019 15.6379 14.3205 15.875 13.7143 15.875Z",
      fill: "currentColor"
    })
  }),
  Ut = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(function () {
    return "";
  }),
  Jd = function Jd(_ref17) {
    var _ref17$buttonUI = _ref17.buttonUI,
      e = _ref17$buttonUI === void 0 ? qd : _ref17$buttonUI,
      _ref17$hideCloseButto = _ref17.hideCloseButton,
      t = _ref17$hideCloseButto === void 0 ? !1 : _ref17$hideCloseButto,
      _ref17$hideFooter = _ref17.hideFooter,
      n = _ref17$hideFooter === void 0 ? !1 : _ref17$hideFooter,
      _ref17$overlayColor = _ref17.overlayColor,
      r = _ref17$overlayColor === void 0 ? "transparent" : _ref17$overlayColor,
      _ref17$partnersConfig = _ref17.partnersConfig,
      o = _ref17$partnersConfig === void 0 ? {} : _ref17$partnersConfig,
      _ref17$customStyles = _ref17.customStyles,
      a = _ref17$customStyles === void 0 ? {} : _ref17$customStyles;
    var _ee21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
      _ee22 = _slicedToArray(_ee21, 2),
      c = _ee22[0],
      i = _ee22[1],
      l = Wd({}, ts, o),
      u = Object.entries(l).filter(function (_ref18) {
        var _ref19 = _slicedToArray(_ref18, 2),
          f = _ref19[1];
        return !f.shouldHide;
      }),
      d = function d(f) {
        return "".concat(qc[f], " ").concat(a[f] || "").trim();
      };
    return /* @__PURE__ */S.jsx(Ut.Provider, {
      value: d,
      children: /* @__PURE__ */S.jsxs(Tc, {
        onOpenChange: i,
        children: [/* @__PURE__ */S.jsx(Rc, {
          className: d("PopoverTrigger"),
          asChild: !0,
          children: e
        }), /* @__PURE__ */S.jsx(Lc, {
          children: /* @__PURE__ */S.jsxs(S.Fragment, {
            children: [/* @__PURE__ */S.jsxs(Fc, {
              className: d("PopoverContent"),
              collisionPadding: 10,
              side: "bottom",
              sideOffset: 20,
              children: [/* @__PURE__ */S.jsx("div", {
                className: d("partners"),
                children: u.map(function (_ref20) {
                  var _ref21 = _slicedToArray(_ref20, 2),
                    f = _ref21[0],
                    v = _ref21[1];
                  return /* @__PURE__ */S.jsx(rs, {
                    icon: v.icon,
                    link: v.link,
                    name: f
                  }, f);
                })
              }), !n && /* @__PURE__ */S.jsxs(S.Fragment, {
                children: [/* @__PURE__ */S.jsx("hr", {}), /* @__PURE__ */S.jsx(os, {})]
              }), !t && /* @__PURE__ */S.jsx(Dc, {
                "aria-label": "Close",
                className: d("PopoverClose"),
                "data-testid": "app-switcher-close-button",
                children: /* @__PURE__ */S.jsx(na, {})
              })]
            }), /* @__PURE__ */S.jsx(ns, {
              open: c,
              overlayColor: r
            })]
          })
        })]
      })
    });
  };


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/app-switcher/src/bundle/Resources/public/js/app.switcher.js"));
/******/ }
]);