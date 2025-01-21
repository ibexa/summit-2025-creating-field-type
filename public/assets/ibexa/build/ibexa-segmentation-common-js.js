(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-segmentation-common-js"],{

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

/***/ "./vendor/ibexa/segmentation/src/bundle/Resources/public/js/add.segment.group.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/segmentation/src/bundle/Resources/public/js/add.segment.group.js ***!
  \***************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var addSegmentTable = doc.querySelector('.ibexa-table--add-segments');
  if (!addSegmentTable) {
    return;
  }
  var addSegmentTableBody = addSegmentTable.querySelector('tbody');
  var addSegmentTableHead = addSegmentTable.querySelector('thead');
  var THEAD_HIDDEN_CLASS = 'ibexa-table__head--hidden';
  var lastIndex = 0;
  var addButton = doc.querySelector('.ibexa-table-header--add-segments .ibexa-btn--add');
  var removeButton = doc.querySelector('.ibexa-table-header--add-segments .ibexa-btn--remove');
  var refreshTableMainCheckbox = function refreshTableMainCheckbox() {
    var refreshEvent = new CustomEvent('ibexa-refresh-main-table-checkbox');
    addSegmentTable.dispatchEvent(refreshEvent);
  };
  var addSegment = function addSegment() {
    var index = lastIndex++;
    var template = addSegmentTable.dataset.template;
    var tbodyFragment = doc.createElement('tbody');
    var renderedTemplate = template.replace(/__name__/g, index);
    tbodyFragment.insertAdjacentHTML('beforeend', renderedTemplate);
    var trBody = tbodyFragment.querySelector('tr.ibexa-table__row');
    trBody.querySelector('.ibexa-input--checkbox').addEventListener('change', function () {
      var isSomeCheckboxSelected = _toConsumableArray(addSegmentTable.querySelectorAll('.ibexa-table__body .ibexa-input--checkbox')).some(function (checkbox) {
        return checkbox.checked;
      });
      var methodName = isSomeCheckboxSelected ? 'removeAttribute' : 'setAttribute';
      removeButton[methodName]('disabled', 'disabled');
    }, false);
    addSegmentTableBody.appendChild(trBody);
    addSegmentTableHead.classList.remove(THEAD_HIDDEN_CLASS);
    refreshTableMainCheckbox();
  };
  var removeSegments = function removeSegments() {
    var selectedSegments = addSegmentTable.querySelectorAll('.ibexa-table__body .ibexa-input--checkbox:checked');
    selectedSegments.forEach(function (selectedSegment) {
      return selectedSegment.closest('tr').remove();
    });
    refreshTableMainCheckbox();
    removeButton.setAttribute('disabled', 'disabled');
    if (!addSegmentTableBody.children.length) {
      addSegmentTableHead.classList.add(THEAD_HIDDEN_CLASS);
    }
  };
  var initTableHeader = function initTableHeader() {
    addSegmentTableHead.classList.add('ibexa-table__head');
    if (!addSegmentTableBody.children.length) {
      addSegmentTableHead.classList.add(THEAD_HIDDEN_CLASS);
    }
  };
  addButton.addEventListener('click', addSegment, false);
  removeButton.addEventListener('click', removeSegments, false);
  initTableHeader();
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/segmentation/src/bundle/Resources/public/js/add.segment.group.js"), __webpack_exec__("./public/bundles/ibexaadminui/js/scripts/button.state.toggle.js"));
/******/ }
]);