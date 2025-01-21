(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-dashboard-blocks-js"],{

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

/***/ }),

/***/ "./vendor/ibexa/dashboard/src/bundle/Resources/public/js/blocks/quick.actions.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/dashboard/src/bundle/Resources/public/js/blocks/quick.actions.js ***!
  \***************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, React, ReactDOM, Routing) {
  var udwRoot = null;
  var udwContainer = doc.getElementById('react-udw');
  var quickActionUDWTrigers = doc.querySelectorAll('.ibexa-db-quick-actions [data-udw-config]');
  var onConfirm = function onConfirm(items) {
    closeUDW();
    global.location.href = Routing.generate('ibexa.content.view', {
      contentId: items[0].ContentInfo.Content._id,
      locationId: items[0].id
    });
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var triggerBtn = event.currentTarget;
    var _triggerBtn$dataset = triggerBtn.dataset,
      title = _triggerBtn$dataset.udwTitle,
      udwConfig = _triggerBtn$dataset.udwConfig;
    var config = JSON.parse(udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      activeTab: 'create',
      title: title
    }, config)));
  };
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  quickActionUDWTrigers.forEach(function (tiggerBtn) {
    tiggerBtn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.blocks.js":
/*!***********************************************************************************!*\
  !*** ./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.blocks.js ***!
  \***********************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard/blocks/top_clicks.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard/blocks/top_clicks.js ***!
  \****************************************************************************************************/
/***/ (() => {

(function (doc) {
  var popularityDurationSelect = doc.querySelector('.dashboard_popularity_duration');
  if (popularityDurationSelect) {
    popularityDurationSelect.addEventListener('change', function () {
      this.form.submit();
    }, false);
  }
})(window.document);

/***/ }),

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.category.block.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.category.block.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, Translator) {
  var DoughnutChart = ibexa.core.chart.DoughnutChart;
  var previewMode = doc.querySelector('.ibexa-db-main-container.ibexa-db-preview');
  var renderProductCategoryCharts = function renderProductCategoryCharts() {
    var chartsContainer = doc.querySelectorAll('.ibexa-chart.ibexa-chart--product-category');
    if (!chartsContainer.length) {
      return;
    }
    chartsContainer.forEach(function (chartContainer) {
      renderProductCategoryChart(chartContainer);
    });
  };
  var renderProductCategoryChart = function renderProductCategoryChart(chartContainer) {
    var graphColors = ibexa.adminUiConfig.chartColorPalette;
    var chartDataRaw = chartContainer.dataset.chartData;
    var chartData = JSON.parse(chartDataRaw);
    var labels = Object.values(chartData).map(function (_ref) {
      var label = _ref.label;
      return label;
    });
    var datasetLabel = Translator.trans(/*@Desc("Products")*/'dashboard.products_by_categories.dataset_label', {}, 'ibexa_dashboard');
    var data = {
      ref: chartContainer,
      chartName: 'product-category',
      datasets: [{
        legend: labels,
        label: " ".concat(datasetLabel),
        data: Object.values(chartData).map(function (_ref2) {
          var value = _ref2.value;
          return value;
        }),
        backgroundColor: graphColors
      }],
      labels: labels
    };
    var options = {
      cutout: 180
    };
    var chart = new DoughnutChart(data, options);
    chart.render();
  };
  if (!previewMode) {
    return renderProductCategoryCharts();
  }
  doc.body.addEventListener('ibexa-post-update-blocks-preview', function (_ref3) {
    var detail = _ref3.detail;
    var blockIds = detail.blockIds;
    blockIds.forEach(function (blockId) {
      var block = doc.querySelector("[data-ez-block-id=\"".concat(blockId, "\""));
      var chartContainer = block.querySelector('.ibexa-chart.ibexa-chart--product-category');
      if (!chartContainer) {
        return;
      }
      renderProductCategoryChart(chartContainer);
    });
  });
  window.parent.document.body.addEventListener('ibexa-pb-app-iframe-loaded', function () {
    setTimeout(function () {
      renderProductCategoryCharts();
    }, 0);
  });
})(window, window.document, window.ibexa, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/dashboard/src/bundle/Resources/public/js/dashboard.blocks.js"), __webpack_exec__("./vendor/ibexa/dashboard/src/bundle/Resources/public/js/blocks/quick.actions.js"), __webpack_exec__("./vendor/ibexa/personalization/src/bundle/Resources/public/js/dashboard/blocks/top_clicks.js"), __webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.category.block.js"), __webpack_exec__("./vendor/ibexa/activity-log/src/bundle/Resources/public/js/recent.activity.block.js"));
/******/ }
]);