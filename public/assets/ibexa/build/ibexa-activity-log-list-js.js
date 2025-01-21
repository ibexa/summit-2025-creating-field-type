(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-activity-log-list-js"],{

/***/ "./vendor/ibexa/activity-log/src/bundle/Resources/public/js/filters.js":
/*!*****************************************************************************!*\
  !*** ./vendor/ibexa/activity-log/src/bundle/Resources/public/js/filters.js ***!
  \*****************************************************************************/
/***/ (() => {

(function (global, doc) {
  var searchForm = doc.querySelector('.ibexa-al-list-search-form');
  var filtersContainerNode = doc.querySelector('.ibexa-al-filters');
  var applyFiltersBtn = filtersContainerNode.querySelector('.ibexa-btn--apply');
  var clearFiltersBtn = filtersContainerNode.querySelector('.ibexa-btn--clear');
  var userFilterNode = doc.querySelector('.ibexa-al-filters__item--user');
  var actionFilterNode = doc.querySelector('.ibexa-al-filters__item--action');
  var objectClassFilterNode = doc.querySelector('.ibexa-al-filters__item--object-class');
  var timeFilterNode = doc.querySelector('.ibexa-al-filters__item--time');
  var isNodeTimeFilter = function isNodeTimeFilter(filterNode) {
    return filterNode.classList.contains('ibexa-al-filters__item--time');
  };
  var clearFilter = function clearFilter(filterNode) {
    if (!filterNode) {
      return;
    }
    var sourceSelect = filterNode.querySelector('.ibexa-al-filters__item-content .ibexa-dropdown__source .ibexa-input--select');
    var sourceSelectOptions = sourceSelect === null || sourceSelect === void 0 ? void 0 : sourceSelect.querySelectorAll('option');
    var checkboxes = filterNode.querySelectorAll('.ibexa-al-filters__item-content .ibexa-input--checkbox:not([name="dropdown-checkbox"])');
    if (sourceSelect) {
      sourceSelectOptions.forEach(function (option) {
        return option.selected = false;
      });
      if (isNodeTimeFilter(filterNode)) {
        sourceSelectOptions[0].selected = true;
      }
    } else if (checkboxes.length) {
      checkboxes.forEach(function (checkbox) {
        return checkbox.checked = false;
      });
    }
    searchForm.submit();
  };
  var attachFilterEvent = function attachFilterEvent(filterNode) {
    if (!filterNode) {
      return;
    }
    var sourceSelect = filterNode.querySelector('.ibexa-al-filters__item-content .ibexa-dropdown__source .ibexa-input--select');
    var checkboxes = filterNode.querySelectorAll('.ibexa-al-filters__item-content .ibexa-input--checkbox:not([name="dropdown-checkbox"])');
    sourceSelect === null || sourceSelect === void 0 || sourceSelect.addEventListener('change', filterChange, false);
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', filterChange, false);
    });
  };
  var hasFilterValue = function hasFilterValue(filterNode) {
    if (!filterNode) {
      return;
    }
    var select = filterNode.querySelector('.ibexa-dropdown__source .ibexa-input--select');
    var checkedCheckboxes = filterNode.querySelectorAll('.ibexa-input--checkbox:checked');
    if (isNodeTimeFilter(filterNode)) {
      return !!parseInt(select.value, 10);
    }
    return !!(select !== null && select !== void 0 && select.value || checkedCheckboxes !== null && checkedCheckboxes !== void 0 && checkedCheckboxes.length);
  };
  var isSomeFilterSet = function isSomeFilterSet() {
    var hasUserFilterValue = hasFilterValue(userFilterNode);
    var hasActionFilterValue = hasFilterValue(actionFilterNode);
    var hasObjectClassFilterValue = hasFilterValue(objectClassFilterNode);
    var hasTimeFilterValue = hasFilterValue(timeFilterNode);
    return hasUserFilterValue || hasActionFilterValue || hasObjectClassFilterValue || hasTimeFilterValue;
  };
  var attachInitEvents = function attachInitEvents() {
    attachFilterEvent(userFilterNode);
    attachFilterEvent(actionFilterNode);
    attachFilterEvent(objectClassFilterNode);
    attachFilterEvent(timeFilterNode);
  };
  var filterChange = function filterChange() {
    var hasFiltersSetValue = isSomeFilterSet();
    applyFiltersBtn.disabled = false;
    clearFiltersBtn.disabled = !hasFiltersSetValue;
  };
  var clearAllFilters = function clearAllFilters() {
    clearFilter(userFilterNode);
    clearFilter(actionFilterNode);
    clearFilter(objectClassFilterNode);
    clearFilter(timeFilterNode);
  };
  attachInitEvents();
  clearFiltersBtn.addEventListener('click', clearAllFilters, false);
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/activity-log/src/bundle/Resources/public/js/filters.js"));
/******/ }
]);