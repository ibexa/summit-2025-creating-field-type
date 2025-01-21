(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-customer-portal-js"],{

/***/ "./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/customer-portal/user.menu.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/customer-portal/user.menu.js ***!
  \****************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var userMenuContainer = doc.querySelector('.ibexa-ca-main-header__user-menu-column');
  if (!userMenuContainer) {
    return;
  }
  var togglerElement = userMenuContainer.querySelector('.ibexa-ca-main-header__username-btn');
  var popupMenuElement = userMenuContainer.querySelector('.ibexa-ca-main-header__user-popup-menu');
  new ibexa.core.PopupMenu({
    triggerElement: togglerElement,
    popupMenuElement: popupMenuElement
  });
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/corporate-account/src/bundle/Resources/public/js/customer-portal/user.menu.js"));
/******/ }
]);