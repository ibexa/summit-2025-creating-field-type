(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-personalization-account-js"],{

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/account.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/account.js ***!
  \********************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var copyButtons = _toConsumableArray(doc.querySelectorAll('.ibexa-perso-details__copy-button'));
  var coppiedClass = 'ibexa-perso-details__text--copied';
  var copyInformationTime = 5000;
  var handleCopy = function handleCopy(copyButton) {
    var copiedText = copyButton.previousElementSibling.textContent;
    var container = copyButton.closest('.ibexa-perso-details__text');
    container.classList.add(coppiedClass);
    global.navigator.clipboard.writeText(copiedText);
    setTimeout(function () {
      container.classList.remove(coppiedClass);
    }, copyInformationTime);
  };
  var handleCopyOnKeyDown = function handleCopyOnKeyDown(event) {
    if (event.key !== 'Enter' || event.key !== ' ') {
      return;
    }
    handleCopy(event.currentTarget);
  };
  var handleCopyOnClick = function handleCopyOnClick(_ref) {
    var currentTarget = _ref.currentTarget;
    handleCopy(currentTarget);
  };
  copyButtons.forEach(function (copyButton) {
    copyButton.addEventListener('click', handleCopyOnClick, false);
    copyButton.addEventListener('keydown', handleCopyOnKeyDown, false);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/account.js"));
/******/ }
]);