(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-form-builder-submissions-tab-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/admin.location.change.language.js":
/*!**********************************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/admin.location.change.language.js ***!
  \**********************************************************************************/
/***/ (() => {

(function (global, doc) {
  var changeLocationLanguage = function changeLocationLanguage(event) {
    global.location = event.currentTarget.value;
  };
  var locationLanguageSwitchers = doc.querySelectorAll('.ibexa-location-language-change');
  locationLanguageSwitchers.forEach(function (locationLanguageSwitcher) {
    locationLanguageSwitcher.addEventListener('change', changeLocationLanguage, false);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./public/bundles/ibexaadminui/js/scripts/admin.location.change.language.js"));
/******/ }
]);