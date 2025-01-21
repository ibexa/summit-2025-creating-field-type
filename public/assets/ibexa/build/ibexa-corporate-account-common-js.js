(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-corporate-account-common-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js":
/*!***********************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js ***!
  \***********************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa) {
  var containers = doc.querySelectorAll('.ibexa-adaptive-filters');
  containers.forEach(function (container) {
    var clearBtn = container.querySelector('.ibexa-adaptive-filters__clear-btn');
    var applyBtn = container.querySelector('.ibexa-adaptive-filters__submit-btn');
    var dropdownNodes = _toConsumableArray(container.querySelectorAll('.ibexa-dropdown'));
    var textInputNodes = _toConsumableArray(container.querySelectorAll('.ibexa-input--text'));
    var dateInputNodes = _toConsumableArray(container.querySelectorAll('.ibexa-input--date'));
    var originalValuesMap = new Map();
    var dropdownSelectionsEqual = function dropdownSelectionsEqual(selection1, selection2) {
      if (selection1.length !== selection2.length) {
        return false;
      }
      for (var i = 0; i < selection1.length; ++i) {
        if (selection1[i] !== selection2[i]) return false;
      }
      return true;
    };
    var checkFieldsValuesChanged = function checkFieldsValuesChanged() {
      return dropdownNodes.some(function (dropdownNode) {
        var dropdown = dropdownNode.ibexaInstance;
        var value = _toConsumableArray(dropdown.getSelectedItems()).map(function (item) {
          return item.value;
        });
        var originalValue = originalValuesMap.get(dropdown);
        return !dropdownSelectionsEqual(value, originalValue);
      }) || textInputNodes.some(function (textInputNode) {
        var value = textInputNode.value;
        var originalValue = originalValuesMap.get(textInputNode);
        return value !== originalValue;
      });
    };
    var checkAreFiltersCleared = function checkAreFiltersCleared() {
      return textInputNodes.every(function (textInputNode) {
        return textInputNode.disabled || textInputNode.value === '';
      }) && dropdownNodes.every(function (dropdownNode) {
        var isDisabled = dropdownNode.classList.contains('ibexa-dropdown--disabled');
        var selectNode = dropdownNode.querySelector('.ibexa-input--select');
        var dropdown = dropdownNode.ibexaInstance;
        return isDisabled || (dropdown.canSelectOnlyOne ? selectNode.selectedIndex === 0 : selectNode.selectedIndex === -1);
      });
    };
    var clearForm = function clearForm() {
      textInputNodes.forEach(function (textInputNode) {
        if (!textInputNode.disabled) {
          textInputNode.value = '';
        }
      });
      dateInputNodes.forEach(function (dateInputNode) {
        if (!dateInputNode.disabled) {
          var datePickerNode = dateInputNode.closest('.ibexa-picker');
          var datePickerInstance = ibexa.helpers.objectInstances.getInstance(datePickerNode);
          datePickerInstance.clear();
        }
      });
      dropdownNodes.forEach(function (dropdownNode) {
        var isDisabled = dropdownNode.classList.contains('ibexa-dropdown--disabled');
        if (!isDisabled) {
          var dropdown = dropdownNode.ibexaInstance;
          if (dropdown.canSelectOnlyOne) {
            dropdown.selectFirstOption();
          } else {
            dropdown.clearCurrentSelection();
          }
        }
      });
    };
    var handleFormClear = function handleFormClear() {
      clearForm();
      clearBtn.disabled = true;
      applyBtn.disabled = !checkFieldsValuesChanged();
      applyBtn.click();
    };
    var handleInputChange = function handleInputChange() {
      clearBtn.disabled = checkAreFiltersCleared();
      applyBtn.disabled = !checkFieldsValuesChanged();
    };
    dropdownNodes.forEach(function (dropdownNode) {
      var dropdown = dropdownNode.ibexaInstance;
      var originalValue = _toConsumableArray(dropdown.getSelectedItems()).map(function (item) {
        return item.value;
      });
      originalValuesMap.set(dropdown, originalValue);
    });
    textInputNodes.forEach(function (textInputNode) {
      var originalValue = textInputNode.value;
      originalValuesMap.set(textInputNode, originalValue);
    });
    if (applyBtn) {
      applyBtn.disabled = true;
    }
    if (clearBtn) {
      clearBtn.disabled = checkAreFiltersCleared();
      clearBtn.addEventListener('click', handleFormClear, false);
    }
    dropdownNodes.forEach(function (dropdownNode) {
      var select = dropdownNode.querySelector('.ibexa-input--select');
      select.addEventListener('change', handleInputChange, false);
    });
    textInputNodes.forEach(function (textInputNode) {
      return textInputNode.addEventListener('input', handleInputChange, false);
    });
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserInvitationModal: () => (/* binding */ UserInvitationModal)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
var _window = window,
  ibexa = _window.ibexa,
  Translator = _window.Translator;
var UserInvitationModal = /*#__PURE__*/function () {
  function UserInvitationModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, UserInvitationModal);
    if (!options.modal) {
      throw new Error('No valid modal option provided');
    }
    this.modal = options.modal;
    this.stickyTopContainer = this.modal.querySelector('.ibexa-user-invitation-modal__sticky-top');
    this.searchInput = this.modal.querySelector('.ibexa-user-invitation-modal__search-input');
    this.searchBtn = this.modal.querySelector('.ibexa-input-text-wrapper__action-btn--search');
    this.searchNoEntries = this.modal.querySelector('.ibexa-user-invitation-modal__search-no-entries');
    this.badFileAlert = this.modal.querySelector('.ibexa-user-invitation-modal__bad-file-alert');
    this.badFileAlertCloseBtn = this.badFileAlert.querySelector('.ibexa-alert__close-btn');
    this.issuesAlert = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert');
    this.issuesAlertIssuesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert-issues');
    this.issuesAlertCloseBtn = this.issuesAlert.querySelector('.ibexa-alert__close-btn');
    this.goToNextIssueBtn = this.issuesAlert.querySelector('.ibexa-user-invitation-modal__next-issue-btn');
    this.addNextBtn = this.modal.querySelector('.ibexa-user-invitation-modal__add-next-btn');
    this.entriesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__entries');
    this.entryPrototype = this.entriesContainer.dataset.prototype;
    this.fileUploadMessage = this.modal.querySelector('.ibexa-user-invitation-modal__upload-file-message');
    this.dropZone = this.modal.querySelector('.ibexa-user-invitation-modal__drop');
    this.uploadLocalFileBtn = this.modal.querySelector('.ibexa-user-invitation-modal__file-select');
    this.fileInput = this.modal.querySelector('.ibexa-user-invitation-modal__file-input');
    this.fakeSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__fake-submit-btn');
    this.realSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__real-submit-btn');
    this.lastScrolledToEntryWithIssue = null;
    this.attachEntryListeners = this.attachEntryListeners.bind(this);
    this.preventDefaultAction = this.preventDefaultAction.bind(this);
    this.handleEntryAdd = this.handleEntryAdd.bind(this);
    this.handleEntryDelete = this.handleEntryDelete.bind(this);
    this.handleDropUpload = this.handleDropUpload.bind(this);
    this.handleInputUpload = this.handleInputUpload.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.scrollToNextIssue = this.scrollToNextIssue.bind(this);
  }

  // eslint-disable-next-line no-unused-vars
  return _createClass(UserInvitationModal, [{
    key: "processCSVInvitationFile",
    value: function processCSVInvitationFile(file) {
      throw new Error('processCSVInvitationFile should be overridden in subclass.');
    }
  }, {
    key: "countFilledLinesInFile",
    value: function countFilledLinesInFile(file) {
      return file.text().then(function (text) {
        var nonEmptyLineRegexp = /^([^\r\n]+)$/gm;
        var matchedData = _toConsumableArray(text.matchAll(nonEmptyLineRegexp));
        return matchedData.length;
      });
    }
  }, {
    key: "resetEntry",
    value: function resetEntry(entry) {
      this.toggleInvalidEmailState(entry, {
        isEmptyError: false,
        isInvalidFormatError: false
      });
      this.toggleDuplicateEntryState(entry, false);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "isEntryEmpty",
    value: function isEntryEmpty(entry) {
      throw new Error('isEntryEmpty should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkEntryMatchesSearch",
    value: function checkEntryMatchesSearch(entry, searchText) {
      throw new Error('checkEntryMatchesSearch should be overridden in subclass.');
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "checkIsEntryDuplicate",
    value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
      throw new Error('checkIsEntryDuplicate should be overridden in subclass.');
    }
  }, {
    key: "checkHasEntryIssue",
    value: function checkHasEntryIssue(entry) {
      var hasEmptyEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var hasInvalidEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var hasDuplicateIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      return hasEmptyEmailIssue || hasInvalidEmailIssue || hasDuplicateIssue;
    }
  }, {
    key: "findDuplicateEntry",
    value: function findDuplicateEntry(invitationData, entriesToCompare) {
      var _iterator = _createForOfIteratorHelper(entriesToCompare),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entryToCompare = _step.value;
          if (this.checkIsEntryDuplicate(invitationData, entryToCompare)) {
            return entryToCompare;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "toggleIssueNode",
    value: function toggleIssueNode(entry, issueNode, show, position, template) {
      var entryIssuesContainer = entry.querySelector('.ibexa-user-invitation-modal__entry-issues');
      if (show) {
        if (!issueNode) {
          entryIssuesContainer.insertAdjacentHTML(position, template);
        }
      } else {
        if (issueNode) {
          issueNode.remove();
        }
      }
    }
  }, {
    key: "toggleDuplicateEntryState",
    value: function toggleDuplicateEntryState(entry, isDuplicate) {
      var duplicateEntryIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      var issueDuplicateInfoTemplate = this.entriesContainer.dataset.issueDuplicateInfoTemplate;
      this.toggleIssueNode(entry, duplicateEntryIssueNode, isDuplicate, 'beforeend', issueDuplicateInfoTemplate);
    }
  }, {
    key: "toggleInvalidEmailState",
    value: function toggleInvalidEmailState(entry, _ref) {
      var isEmptyError = _ref.isEmptyError,
        isInvalidFormatError = _ref.isInvalidFormatError;
      var emptyEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var invalidEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var _this$entriesContaine = this.entriesContainer.dataset,
        issueInvalidEmailTemplate = _this$entriesContaine.issueInvalidEmailTemplate,
        issueEmptyEmailTemplate = _this$entriesContaine.issueEmptyEmailTemplate;
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      emailInput.classList.toggle('is-invalid', isEmptyError || isInvalidFormatError);
      this.toggleIssueNode(entry, emptyEmailIssueNode, isEmptyError, 'afterbegin', issueEmptyEmailTemplate);
      this.toggleIssueNode(entry, invalidEmailIssueNode, isInvalidFormatError, 'afterbegin', issueInvalidEmailTemplate);
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(emailInput) {
      var isEmpty = !emailInput.value.trim();
      if (isEmpty) {
        return {
          isEmptyError: isEmpty,
          isInvalidFormatError: false
        };
      }
      var isValid = ibexa.errors.emailRegexp.test(emailInput.value);
      return {
        isEmptyError: false,
        isInvalidFormatError: !isValid
      };
    }
  }, {
    key: "validateEntryEmail",
    value: function validateEntryEmail(entry) {
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      var errors = this.validateEmail(emailInput);
      this.toggleInvalidEmailState(entry, errors);
      this.manageIssuesAlert();
      return errors.isEmptyError || errors.isInvalidFormatError;
    }
  }, {
    key: "handleEmailValidation",
    value: function handleEmailValidation(event) {
      var emailInput = event.currentTarget;
      var entry = emailInput.closest('.ibexa-user-invitation-modal__entry');
      this.validateEntryEmail(entry);
    }
  }, {
    key: "prepareIssuesAlert",
    value: function prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount) {
      var messages = [];
      if (emptyEmailsCount) {
        var emptyEmailsMessage = Translator.trans(/*@Desc("Empty emails (%count%)")*/'modal.entry_issues.alert.empty_emails', {
          count: emptyEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(emptyEmailsMessage);
      }
      if (invalidEmailsCount) {
        var invalidEmailsMessage = Translator.trans(/*@Desc("Invalid emails (%count%)")*/'modal.entry_issues.alert.invalid_emails', {
          count: invalidEmailsCount
        }, 'ibexa_user_invitation');
        messages.push(invalidEmailsMessage);
      }
      if (duplicateEntryCount) {
        var duplicatedEmailsMessage = Translator.trans(/*@Desc("Duplicated emails (%count%)")*/'modal.entry_issues.alert.duplicate_emails', {
          count: duplicateEntryCount
        }, 'ibexa_user_invitation');
        messages.push(duplicatedEmailsMessage);
      }
      this.issuesAlertIssuesContainer.innerText = messages.join(' | ');
    }
  }, {
    key: "manageIssuesAlert",
    value: function manageIssuesAlert() {
      var emptyEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-empty').length;
      var invalidEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-invalid-format').length;
      var duplicateEntryCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-duplicate').length;
      var isAnyIssue = emptyEmailsCount || invalidEmailsCount || duplicateEntryCount;
      if (isAnyIssue) {
        this.prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount);
      }
      this.toggleIssuesAlert(isAnyIssue);
    }
  }, {
    key: "toggleIssuesAlert",
    value: function toggleIssuesAlert(show) {
      this.issuesAlert.classList.toggle('ibexa-user-invitation-modal__issues-alert--hidden', !show);
    }
  }, {
    key: "toggleBadFileAlert",
    value: function toggleBadFileAlert(show) {
      this.badFileAlert.classList.toggle('ibexa-user-invitation-modal__bad-file-alert--hidden', !show);
    }

    // eslint-disable-next-line no-unused-vars
  }, {
    key: "addEntry",
    value: function addEntry() {
      var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var entryPrototypeRendered = this.entryPrototype.replaceAll('__name__', this.entryCounter);
      this.entryCounter = this.entryCounter + 1;
      this.entriesContainer.insertAdjacentHTML('beforeend', entryPrototypeRendered);
      var insertedEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (isFileRelated) {
        insertedEntry.classList.add('ibexa-user-invitation-modal__entry--file-related');
      }
      this.attachEntryListeners(insertedEntry);
      document.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
      return {
        insertedEntry: insertedEntry
      };
    }
  }, {
    key: "deleteEntry",
    value: function deleteEntry(entry) {
      var isForceRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var entryNodes = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var isLastEntry = entryNodes.length === 1;
      if (isLastEntry && !isForceRemove) {
        this.resetEntry(entry);
      } else {
        if (entry === this.lastScrolledToEntryWithIssue) {
          this.lastScrolledToEntryWithIssue = this.lastScrolledToEntryWithIssue.previousElementSibling;
        }
        entry.remove();
      }
    }
  }, {
    key: "deleteTrailingEntriesIfEmpty",
    value: function deleteTrailingEntriesIfEmpty() {
      var lastEntry = this.entriesContainer.querySelector(':scope > :last-child');
      if (!lastEntry) {
        return;
      }
      if (this.isEntryEmpty(lastEntry)) {
        this.deleteEntry(lastEntry, true);
        this.deleteTrailingEntriesIfEmpty();
        this.manageIssuesAlert();
        this.updateModalTitle();
      }
    }
  }, {
    key: "handleEntryAdd",
    value: function handleEntryAdd() {
      this.addEntry();
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "handleEntryDelete",
    value: function handleEntryDelete(event) {
      var deleteBtn = event.currentTarget;
      var entry = deleteBtn.closest('.ibexa-user-invitation-modal__entry');
      this.deleteEntry(entry);
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "attachEntryListeners",
    value: function attachEntryListeners(entry) {
      var deleteEntryBtn = entry.querySelector('.ibexa-user-invitation-modal__entry-delete-btn');
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      deleteEntryBtn.addEventListener('click', this.handleEntryDelete, false);
      emailInput.addEventListener('blur', this.handleEmailValidation, false);
    }
  }, {
    key: "getNextEntryWithIssue",
    value: function getNextEntryWithIssue() {
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var firstEntryWithIssue = _toConsumableArray(entries).find(this.checkHasEntryIssue);
      if (!firstEntryWithIssue) {
        return;
      }
      var nextEntryWithIssue = null;
      if (!this.lastScrolledToEntryWithIssue) {
        nextEntryWithIssue = firstEntryWithIssue;
      } else {
        var currentlyCheckedEntry = this.lastScrolledToEntryWithIssue;
        while (currentlyCheckedEntry.nextElementSibling) {
          currentlyCheckedEntry = currentlyCheckedEntry.nextElementSibling;
          if (this.checkHasEntryIssue(currentlyCheckedEntry)) {
            nextEntryWithIssue = currentlyCheckedEntry;
            break;
          }
        }
        if (!nextEntryWithIssue) {
          nextEntryWithIssue = firstEntryWithIssue;
        }
      }
      return nextEntryWithIssue;
    }
  }, {
    key: "scrollToNextIssue",
    value: function scrollToNextIssue() {
      var nextEntryWithIssue = this.getNextEntryWithIssue();
      var scrollTopOffset = this.stickyTopContainer.offsetHeight;
      var entryScrollPosition = nextEntryWithIssue.getBoundingClientRect().top + window.pageYOffset - scrollTopOffset;
      this.modal.scrollTo({
        top: entryScrollPosition,
        behavior: 'smooth'
      });
      this.lastScrolledToEntryWithIssue = nextEntryWithIssue;
    }
  }, {
    key: "searchEntries",
    value: function searchEntries(searchText) {
      var _this = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        var doesEntryMatchSearch = _this.checkEntryMatchesSearch(entry, searchText);
        entry.classList.toggle('ibexa-user-invitation-modal__entry--not-matching-search', !doesEntryMatchSearch);
      });
    }
  }, {
    key: "toggleSearchNoEntriesBasedOnSearch",
    value: function toggleSearchNoEntriesBasedOnSearch() {
      var isAnyEntryShowed = !!this.modal.querySelectorAll('.ibexa-user-invitation-modal__entry:not(.ibexa-user-invitation-modal__entry--not-matching-search)').length;
      this.searchNoEntries.classList.toggle('ibexa-user-invitation-modal__search-no-entries--hidden', isAnyEntryShowed);
    }
  }, {
    key: "toggleUpload",
    value: function toggleUpload(isForceHide) {
      this.fileUploadMessage.classList.toggle('ibexa-user-invitation-modal__upload-file-message--hidden', isForceHide);
      this.dropZone.classList.toggle('ibexa-user-invitation-modal__drop--hidden', isForceHide);
    }
  }, {
    key: "showUploadedFileNotification",
    value: function showUploadedFileNotification(fileName) {
      var message = Translator.trans(/*@Desc("File %fileName% was uploaded")*/'modal.file_uploaded.message', {
        fileName: fileName
      }, 'ibexa_user_invitation');
      ibexa.helpers.notification.showInfoNotification(message);
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var _this2 = this;
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        return _this2.deleteEntry(entry);
      });
      this.manageIssuesAlert();
      this.updateModalTitle();
      this.toggleUpload(false);
    }
  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "handleInvitationFile",
    value: function () {
      var _handleInvitationFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
        var _this3 = this;
        var numberOfNonEmptyLines, invitationsData, entriesBeforeFileAdded;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.toggleUpload(true);
              this.showUploadedFileNotification(file.name);
              _context.next = 4;
              return this.countFilledLinesInFile(file);
            case 4:
              numberOfNonEmptyLines = _context.sent;
              _context.next = 7;
              return this.processCSVInvitationFile(file);
            case 7:
              invitationsData = _context.sent;
              if (!(numberOfNonEmptyLines === 0 || numberOfNonEmptyLines !== invitationsData.length)) {
                _context.next = 12;
                break;
              }
              this.toggleBadFileAlert(true);
              this.toggleUpload(false);
              return _context.abrupt("return");
            case 12:
              this.toggleBadFileAlert(false);
              this.deleteTrailingEntriesIfEmpty();
              entriesBeforeFileAdded = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
              invitationsData.forEach(function (invitationData) {
                var duplicateEntry = _this3.findDuplicateEntry(invitationData, entriesBeforeFileAdded);
                if (duplicateEntry) {
                  _this3.toggleDuplicateEntryState(duplicateEntry, true);
                  _this3.manageIssuesAlert();
                } else {
                  var _this3$addEntry = _this3.addEntry(true, invitationData),
                    insertedEntry = _this3$addEntry.insertedEntry;
                  _this3.validateEntryEmail(insertedEntry);
                }
              });
              this.updateModalTitle();
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function handleInvitationFile(_x) {
        return _handleInvitationFile.apply(this, arguments);
      }
      return handleInvitationFile;
    }()
  }, {
    key: "handleInputUpload",
    value: function handleInputUpload(event) {
      this.preventDefaultAction(event);
      var file = this.fileInput.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleDropUpload",
    value: function handleDropUpload(event) {
      this.preventDefaultAction(event);
      var file = event.dataTransfer.files[0];
      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      this.searchEntries(this.searchInput.value);
      this.toggleSearchNoEntriesBasedOnSearch();
    }
  }, {
    key: "updateModalTitle",
    value: function updateModalTitle() {
      var titleNode = this.modal.querySelector('.modal-title');
      var invitationsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry').length;
      titleNode.innerText = Translator.trans(/*@Desc("Invite members (%invitations_count%)")*/'modal.title', {
        invitations_count: invitationsCount
      }, 'ibexa_user_invitation');
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;
      this.initialEntries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      this.entryCounter = this.initialEntries.length;
      this.initialEntries.forEach(function (initialEntry) {
        _this4.attachEntryListeners(initialEntry);
        var emailInput = initialEntry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
        var isEmailEmpty = !emailInput.value;
        if (!isEmailEmpty) {
          _this4.validateEntryEmail(initialEntry);
        }
      });
      this.modal.addEventListener('shown.bs.modal', function () {
        window.addEventListener('drop', _this4.preventDefaultAction, false);
        window.addEventListener('dragover', _this4.preventDefaultAction, false);
      });
      this.modal.addEventListener('hidden.bs.modal', function () {
        window.removeEventListener('drop', _this4.preventDefaultAction, false);
        window.removeEventListener('dragover', _this4.preventDefaultAction, false);
        _this4.clearForm();
      });
      this.addNextBtn.addEventListener('click', this.handleEntryAdd, false);
      this.dropZone.addEventListener('drop', this.handleDropUpload, false);
      this.uploadLocalFileBtn.addEventListener('click', function (event) {
        event.preventDefault();
        _this4.fileInput.value = '';
        _this4.fileInput.click();
      }, false);
      this.fileInput.addEventListener('change', this.handleInputUpload, false);
      this.badFileAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleBadFileAlert(false);
      }, false);
      this.issuesAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleIssuesAlert(false);
      }, false);
      this.goToNextIssueBtn.addEventListener('click', this.scrollToNextIssue, false);
      this.searchInput.addEventListener('keyup', this.handleSearch, false);
      this.searchBtn.addEventListener('keyup', this.handleSearch, false);
      this.fakeSubmitBtn.addEventListener('click', function () {
        var allEntries = _toConsumableArray(_this4.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry'));
        var isFormValid = allEntries.map(function (entry) {
          return _this4.validateEntryEmail(entry);
        }).every(function (isError) {
          return !isError;
        });
        if (isFormValid) {
          _this4.realSubmitBtn.click();
        }
      }, false);
      this.updateModalTitle();
    }
  }]);
}();

/***/ }),

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/bulk.delete.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/bulk.delete.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var deleteBtn = doc.querySelector('.ibexa-ca-bulk-delete__delete-btn');
  if (!deleteBtn) {
    return;
  }
  var deleteCheckboxes = doc.querySelectorAll('.ibexa-ca-bulk-delete__checkbox');
  var setRemoveButtonState = function setRemoveButtonState() {
    var isAnyCheckboxSelected = _toConsumableArray(deleteCheckboxes).some(function (checkbox) {
      return checkbox.checked;
    });
    deleteBtn.disabled = !isAnyCheckboxSelected;
  };
  deleteCheckboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('change', setRemoveButtonState, false);
  });
  setRemoveButtonState();
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invitation.table.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invitation.table.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, Translator, bootstrap) {
  var COPY_TOOLTIP_TIMEOUT = 3000;
  var table = doc.querySelector('.ibexa-ca-invitation-table');
  if (!table) {
    return;
  }
  var resendForm = doc.querySelector('form[name="ibexa_user_invitation_resend-form"]');
  var resendHashInput = resendForm.querySelector('#ibexa_user_invitation_resend-form');
  var reinviteForm = doc.querySelector('form[name="ibexa_user_invitation_reinvite-form"]');
  var reinviteHashInput = reinviteForm.querySelector('#ibexa_user_invitation_reinvite-form');
  var copyLinkBtns = table.querySelectorAll('.ibexa-ca-invitation-table__copy-link-btn');
  var reinviteBtns = table.querySelectorAll('.ibexa-ca-invitation-table__reinvite-btn');
  var resendBtns = table.querySelectorAll('.ibexa-ca-invitation-table__resend-btn');
  var handleCopyLink = function handleCopyLink(event) {
    var btn = event.currentTarget;
    var btnTooltip = bootstrap.Tooltip.getOrCreateInstance(btn);
    var link = btn.dataset.link;
    if (!global.navigator.clipboard) {
      ibexa.helpers.notification.showErrorNotification(Translator.trans(/*@Desc("Cannot copy invitation link due to browser limitations.")*/'table.invitations.actions.copy_link.copy_clipboard_error', {}, 'ibexa_corporate_account'));
      return;
    }
    var copiedTooltipTitle = Translator.trans(/*@Desc("Copied!")*/'table.invitations.actions.copy_link.copied_tooltip.title', {}, 'ibexa_corporate_account');
    var originalTooltipTitle = btn.dataset.bsOriginalTitle;
    global.navigator.clipboard.writeText(link);
    btn.dataset.bsOriginalTitle = copiedTooltipTitle;
    btnTooltip.show();
    setTimeout(function () {
      btnTooltip.hide();
      btn.dataset.bsOriginalTitle = originalTooltipTitle;
    }, COPY_TOOLTIP_TIMEOUT);
  };
  var handleReinvite = function handleReinvite(event) {
    var btn = event.currentTarget;
    var inviteHash = btn.dataset.inviteHash;
    reinviteHashInput.value = inviteHash;
    reinviteForm.submit();
  };
  var handleResend = function handleResend(event) {
    var btn = event.currentTarget;
    var inviteHash = btn.dataset.inviteHash;
    resendHashInput.value = inviteHash;
    resendForm.submit();
  };
  copyLinkBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleCopyLink, false);
  });
  reinviteBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleReinvite, false);
  });
  resendBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleResend, false);
  });
})(window, window.document, window.ibexa, window.Translator, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invite.members.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invite.members.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibexa_admin_ui_src_bundle_Resources_public_js_scripts_user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ibexa-admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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

(function (global, doc, ibexa) {
  var modal = doc.querySelector('.ibexa-ca-invite-members');
  if (!modal) {
    return;
  }
  var UserGroupInvitationModal = /*#__PURE__*/function (_UserInvitationModal) {
    function UserGroupInvitationModal() {
      _classCallCheck(this, UserGroupInvitationModal);
      return _callSuper(this, UserGroupInvitationModal, arguments);
    }
    _inherits(UserGroupInvitationModal, _UserInvitationModal);
    return _createClass(UserGroupInvitationModal, [{
      key: "processCSVInvitationFile",
      value: function processCSVInvitationFile(file) {
        return file.text().then(function (text) {
          var lineRegexp = /^([^;\r\n]+);([^;\r\n]+)$/gm;
          var matchedData = _toConsumableArray(text.matchAll(lineRegexp));
          var invitationsData = matchedData.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
              email = _ref2[1],
              role = _ref2[2];
            return {
              email: email,
              role: role
            };
          });
          return invitationsData;
        });
      }
    }, {
      key: "resetEntry",
      value: function resetEntry(entry) {
        _superPropGet(UserGroupInvitationModal, "resetEntry", this, 3)([entry]);
        var emailInput = entry.querySelector('.ibexa-ca-invite-members__entry-email');
        var dropdownNode = entry.querySelector('.ibexa-dropdown');
        var dropdownOptionsCount = dropdownNode.querySelectorAll('.ibexa-input--select option').length;
        var dropdown = ibexa.helpers.objectInstances.getInstance(dropdownNode);
        emailInput.value = null;
        if (dropdownOptionsCount > 0) {
          dropdown.selectFirstOption();
        }
      }
    }, {
      key: "isEntryEmpty",
      value: function isEntryEmpty(entry) {
        var emailInput = entry.querySelector('.ibexa-ca-invite-members__entry-email');
        var dropdownNode = entry.querySelector('.ibexa-dropdown');
        var dropdown = ibexa.helpers.objectInstances.getInstance(dropdownNode);
        var dropdownSelectedOption = dropdown.getSelectedItems()[0];
        var dropdownFirstOption = dropdownNode.querySelector('.ibexa-dropdown__source option');
        return !emailInput.value && dropdownSelectedOption === dropdownFirstOption;
      }
    }, {
      key: "addEntry",
      value: function addEntry() {
        var _invitationData$email, _invitationData$role;
        var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var addEntryData = _superPropGet(UserGroupInvitationModal, "addEntry", this, 3)([isFileRelated, invitationData]);
        var insertedEntry = addEntryData.insertedEntry;
        var email = (_invitationData$email = invitationData === null || invitationData === void 0 ? void 0 : invitationData.email) !== null && _invitationData$email !== void 0 ? _invitationData$email : null;
        var role = (_invitationData$role = invitationData === null || invitationData === void 0 ? void 0 : invitationData.role) !== null && _invitationData$role !== void 0 ? _invitationData$role : null;
        var emailInput = insertedEntry.querySelector('.ibexa-ca-invite-members__entry-email');
        var dropdownContainer = insertedEntry.querySelector('.ibexa-dropdown');
        var dropdown = new ibexa.core.Dropdown({
          container: dropdownContainer
        });
        dropdown.init();
        var optionToSelect = role ? dropdownContainer.querySelector(".ibexa-dropdown__item[data-value=\"".concat(role, "\"")) : null;
        if (optionToSelect) {
          dropdown.selectOption(role);
        }
        emailInput.value = email;
        return addEntryData;
      }
    }, {
      key: "checkEntryMatchesSearch",
      value: function checkEntryMatchesSearch(entry, searchText) {
        var emailInput = entry.querySelector('.ibexa-ca-invite-members__entry-email');
        var email = emailInput.value;
        return email.includes(searchText);
      }
    }, {
      key: "checkIsEntryDuplicate",
      value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
        var entryToCompareEmailInput = entryToCompare.querySelector('.ibexa-ca-invite-members__entry-email');
        return invitationData.email === entryToCompareEmailInput.value;
      }
    }]);
  }(_ibexa_admin_ui_src_bundle_Resources_public_js_scripts_user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__.UserInvitationModal);
  var userInvitationModal = new UserGroupInvitationModal({
    modal: modal
  });
  userInvitationModal.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/tucked.menu.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/tucked.menu.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, Popper) {
  var tuckedMenus = doc.querySelectorAll('.ibexa-ca-tucked-menu');
  tuckedMenus.forEach(function (tuckedMenu) {
    var tuckedMenuBtn = tuckedMenu.querySelector('.ibexa-ca-tucked-menu__btn');
    var popupMenu = tuckedMenu.querySelector('.ibexa-popup-menu');
    var popperInstance = Popper.createPopper(tuckedMenuBtn, popupMenu, {
      placement: 'bottom-end'
    });
    var _handleClickOutsidePopup = function handleClickOutsidePopup(event) {
      var isClickInsideTuckedMenu = event.target.closest('.ibexa-ca-tucked-menu') === tuckedMenu;
      if (isClickInsideTuckedMenu) {
        return;
      }
      popupMenu.classList.add('ibexa-popup-menu--hidden');
      doc.removeEventListener('click', _handleClickOutsidePopup, false);
    };
    var handleBtnClick = function handleBtnClick() {
      var isPopupOpened = !popupMenu.classList.contains('ibexa-popup-menu--hidden');
      if (isPopupOpened) {
        popupMenu.classList.add('ibexa-popup-menu--hidden');
        doc.removeEventListener('click', _handleClickOutsidePopup, false);
      } else {
        popupMenu.classList.remove('ibexa-popup-menu--hidden');
        popperInstance.update();
        doc.addEventListener('click', _handleClickOutsidePopup, false);
      }
    };
    tuckedMenuBtn.addEventListener('click', handleBtnClick, false);
  });
})(window, window.document, window.ibexa, window.Popper);

/***/ }),

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/update.default.shipping.address.js":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/update.default.shipping.address.js ***!
  \*****************************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var updateDefaultShippingAddress = function updateDefaultShippingAddress(event) {
    doc.querySelector('#company_update_default_shipping_address_address').value = event.target.value;
    doc.querySelector('form[name="company_update_default_shipping_address"]').submit();
  };
  doc.querySelectorAll('input[name="updateDefaultShippingAddress"]').forEach(function (input) {
    return input.addEventListener('change', updateDefaultShippingAddress, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.role.change.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.role.change.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, bootstrap) {
  var modal = doc.querySelector('.ibexa-ca-user-role-change-modal');
  if (!modal) {
    return;
  }
  var bootstrapModalInstance = bootstrap.Modal.getOrCreateInstance(modal);
  var userIdInput = modal.querySelector('#member_role_change_member_user');
  var companyIdInput = modal.querySelector('#member_role_change_member_company');
  var roleSelect = modal.querySelector('#member_role_change_new_role');
  var roleDropdownNode = roleSelect.closest('.ibexa-dropdown');
  var roleDropdownInstance = ibexa.helpers.objectInstances.getInstance(roleDropdownNode);
  var userChangeRoleBtns = doc.querySelectorAll('.ibexa-ca-user-change-role-btn');
  var prepareModal = function prepareModal(userId, companyId, currentRoleId) {
    userIdInput.value = userId;
    companyIdInput.value = companyId;
    roleDropdownInstance.selectOption(currentRoleId);
  };
  var handleUserRoleChange = function handleUserRoleChange(event) {
    var btn = event.currentTarget;
    var _btn$dataset = btn.dataset,
      userId = _btn$dataset.userId,
      companyId = _btn$dataset.companyId,
      currentRoleId = _btn$dataset.currentRoleId;
    prepareModal(userId, companyId, currentRoleId);
    bootstrapModalInstance.show();
  };
  userChangeRoleBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleUserRoleChange, false);
  });
})(window, window.document, window.ibexa, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.status.change.confirmation.modal.js":
/*!***********************************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.status.change.confirmation.modal.js ***!
  \***********************************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, Translator) {
  var modal = doc.querySelector('.ibexa-ca-user-status-change-confirmation-modal');
  if (!modal) {
    return;
  }
  var bootstrapModalInstance = bootstrap.Modal.getOrCreateInstance(modal);
  var activateBtn = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__activate-btn');
  var deactivateBtn = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__deactivate-btn');
  var modalTitleNode = modal.querySelector('.modal-title');
  var questionNode = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__question');
  var noteNode = modal.querySelector('.ibexa-ca-user-status-change-confirmation-modal__note');
  var userStatusChangeBtns = doc.querySelectorAll('.ibexa-ca-user-status-change-btn');
  var currentHref = null;
  var toggleUserStatus = function toggleUserStatus() {
    window.location.href = currentHref;
  };
  var prepareModal = function prepareModal(statusChangeType, username, href) {
    currentHref = href;
    if (statusChangeType === 'activate') {
      var modalTitle = Translator.trans(/*@Desc("Activate user")*/'modal.user_status_change.title.activate', {}, 'ibexa_corporate_account');
      var questionText = Translator.trans(/*@Desc("Are you sure you want to activate %username%?")*/'modal.user_status_change.question.activate', {
        username: username
      }, 'ibexa_corporate_account');
      var noteText = Translator.trans(/*@Desc("This user will get access to their account.")*/'modal.user_status_change.note.activate', {
        username: username
      }, 'ibexa_corporate_account');
      modalTitleNode.innerText = modalTitle;
      questionNode.innerText = questionText;
      noteNode.innerText = noteText;
      activateBtn.hidden = false;
      deactivateBtn.hidden = true;
    } else {
      var _modalTitle = Translator.trans(/*@Desc("De-activate user")*/'modal.user_status_change.title.deactivate', {}, 'ibexa_corporate_account');
      var _questionText = Translator.trans(/*@Desc("Are you sure you want to de-activate %username%?")*/'modal.user_status_change.question.deactivate', {
        username: username
      }, 'ibexa_corporate_account');
      var _noteText = Translator.trans(/*@Desc("This user will lose access to their account.")*/'modal.user_status_change.note.deactivate', {
        username: username
      }, 'ibexa_corporate_account');
      modalTitleNode.innerText = _modalTitle;
      questionNode.innerText = _questionText;
      noteNode.innerText = _noteText;
      activateBtn.hidden = true;
      deactivateBtn.hidden = false;
    }
  };
  var handleUserStatusChange = function handleUserStatusChange(event) {
    var btn = event.currentTarget;
    var _btn$dataset = btn.dataset,
      statusChangeType = _btn$dataset.statusChangeType,
      username = _btn$dataset.username,
      href = _btn$dataset.href;
    prepareModal(statusChangeType, username, href);
    bootstrapModalInstance.show();
  };
  userStatusChangeBtns.forEach(function (btn) {
    return btn.addEventListener('click', handleUserStatusChange, false);
  });
  activateBtn.addEventListener('click', toggleUserStatus, false);
  deactivateBtn.addEventListener('click', toggleUserStatus, false);
})(window, window.document, window.bootstrap, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/update.default.shipping.address.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/bulk.delete.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/filters.action.btns.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invitation.table.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/invite.members.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/tucked.menu.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.role.change.js"), __webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/common/user.status.change.confirmation.modal.js"));
/******/ }
]);