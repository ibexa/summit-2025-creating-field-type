(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-site-factory-list-js"],{

/***/ "./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js":
/*!***********************************************************************!*\
  !*** ./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js ***!
  \***********************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ibexa-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ibexa-table__cell--has-checkbox .ibexa-input--checkbox'));
    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);
    if (!buttonRemove) {
      return;
    }
    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };
    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.js":
/*!********************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(function (global, doc, ibexa) {
  var popupMenusContainer = doc.querySelectorAll('.ibexa-sf-grid-view-site-item__actions-container');
  var switchViewSelect = doc.querySelector('.ibexa-sf-list-view-switcher');
  var selectView = function selectView(_ref) {
    var currentTarget = _ref.currentTarget;
    var linkToChangeView = doc.querySelector(".ibexa-sf-list-change-view[data-view-value=\"".concat(currentTarget.value, "\"]"));
    linkToChangeView.click();
  };
  switchViewSelect.addEventListener('change', selectView, false);
  popupMenusContainer.forEach(function (container) {
    var triggerElement = container.querySelector('.ibexa-sf-list-grid-entry__tools-trigger');
    var popupMenuElement = container.querySelector('.ibexa-popup-menu');
    if (!triggerElement) {
      return;
    }
    new ibexa.core.PopupMenu({
      popupMenuElement: popupMenuElement,
      triggerElement: triggerElement,
      position: function position(menu) {
        var leftPositionCorrectedOffset = 14;
        var _menu$getBoundingClie = menu.getBoundingClientRect(),
          menuWidth = _menu$getBoundingClie.width,
          menuXPosition = _menu$getBoundingClie.x;
        var maxLeftPositionOfMenu = global.innerWidth - menuWidth;
        if (menuXPosition > maxLeftPositionOfMenu) {
          var correctedLeftPosition = menuWidth + leftPositionCorrectedOffset;
          menu.style.left = "-".concat(correctedLeftPosition, "px");
        }
      }
    });
  });
})(__webpack_require__.g, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.modal.delete.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.modal.delete.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var deleteButtons = doc.querySelectorAll('.ibexa-btn--delete:not(:disabled) > .ibexa-popup-menu__item-content');
  var siteIdInput = doc.querySelector('#site_delete_site');
  var changeDeleteId = function changeDeleteId(event) {
    var siteId = event.currentTarget.dataset.siteId;
    siteIdInput.value = siteId;
  };
  deleteButtons.forEach(function (btn) {
    return btn.addEventListener('click', changeDeleteId);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.js"), __webpack_exec__("./vendor/ibexa/site-factory/src/bundle/Resources/public/js/sites.list.modal.delete.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js"));
/******/ }
]);