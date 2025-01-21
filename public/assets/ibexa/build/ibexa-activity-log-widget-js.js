(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-activity-log-widget-js"],{

/***/ "./vendor/ibexa/activity-log/src/bundle/Resources/public/js/recent.activity.block.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/activity-log/src/bundle/Resources/public/js/recent.activity.block.js ***!
  \*******************************************************************************************/
/***/ (() => {

(function (global, doc, Routing, _activityBlock$queryS, _activityBlock$queryS2) {
  var CONTENT_ITEM_NAME_CLASS = '.ibexa-al-block__content-name';
  var CONTENT_PARENT_NAME_CLASS = '.ibexa-al-block__content-info-id';
  var TILE_ITEM_CLASS = '.ibexa-al-block__tile';
  var activityBlock = doc.querySelector('.ibexa-al-block');
  var MAX_LETTERS_LENGTH = 100;
  var TILE_PADDING = 24;
  var allActivityBtn = activityBlock === null || activityBlock === void 0 ? void 0 : activityBlock.querySelector('.ibexa-al-block__all-activity-btn');
  var contentNames = (_activityBlock$queryS = activityBlock === null || activityBlock === void 0 ? void 0 : activityBlock.querySelectorAll("".concat(CONTENT_ITEM_NAME_CLASS, ", ").concat(CONTENT_PARENT_NAME_CLASS))) !== null && _activityBlock$queryS !== void 0 ? _activityBlock$queryS : [];
  var showMoreBtns = (_activityBlock$queryS2 = activityBlock === null || activityBlock === void 0 ? void 0 : activityBlock.querySelectorAll('.ibexa-al-block__show-more-btn')) !== null && _activityBlock$queryS2 !== void 0 ? _activityBlock$queryS2 : [];
  var goToActivityLog = function goToActivityLog() {
    window.location.href = Routing.generate('ibexa.activity_log.list');
  };
  var resizeContentName = function resizeContentName(items) {
    items.forEach(function (contentName) {
      var tile = contentName.closest(TILE_ITEM_CLASS);
      if (tile.clientWidth - TILE_PADDING < contentName.offsetWidth) {
        contentName.classList.add('ibexa-al-block__content-name--overflowed');
      }
    });
  };
  var initRecentActivityBlock = function initRecentActivityBlock() {
    resizeContentName(contentNames);
  };
  contentNames.forEach(function (contentName) {
    var text = contentName.textContent;
    if (text.length > MAX_LETTERS_LENGTH) {
      var truncatedText = "".concat(text.substring(0, MAX_LETTERS_LENGTH).trim(), "...");
      contentName.textContent = truncatedText;
    }
  });
  allActivityBtn === null || allActivityBtn === void 0 || allActivityBtn.addEventListener('click', goToActivityLog, false);
  global.addEventListener('resize', function () {
    return resizeContentName(contentNames);
  }, false);
  showMoreBtns.forEach(function (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      var tile = showMoreBtn.closest(TILE_ITEM_CLASS);
      var collapsibleList = tile.querySelector('.ibexa-al-block__collapsible-list');
      var collapsibleItems = collapsibleList.querySelectorAll("".concat(CONTENT_ITEM_NAME_CLASS, ", ").concat(CONTENT_PARENT_NAME_CLASS));
      resizeContentName(collapsibleItems);
    }, false);
  }, false);
  initRecentActivityBlock();
})(window, window.document, window.Routing);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/activity-log/src/bundle/Resources/public/js/recent.activity.block.js"));
/******/ }
]);