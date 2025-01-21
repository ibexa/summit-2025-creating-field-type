(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-tabs-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.adaptive.tabs.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.adaptive.tabs.js ***!
  \******************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, bootstrap) {
  var TABS_SELECTOR = '.ibexa-tabs';
  var SELECTOR_TABS_LIST = '.ibexa-tabs__list';
  var SELECTOR_TAB_MORE = '.ibexa-tabs__tab--more';
  var toggleContainer = function toggleContainer(event) {
    var toggler = event.target;
    var header = toggler.closest('.ibexa-header');
    var headerContainer = header.parentElement;
    var tabContent = headerContainer.querySelector('.ibexa-tab-content');
    toggler.classList.toggle('ibexa-tabs__toggler--rolled-up');
    tabContent.classList.toggle('ibexa-tab-content--rolled-up');
  };
  doc.querySelectorAll('.ibexa-tabs__toggler').forEach(function (toggler) {
    toggler.addEventListener('click', toggleContainer, false);
  });
  doc.querySelectorAll(TABS_SELECTOR).forEach(function (tabsContainer) {
    var tabsList = tabsContainer.querySelector(SELECTOR_TABS_LIST);
    var tabMore = tabsList.querySelector(SELECTOR_TAB_MORE);
    if (tabMore) {
      var tabs = _toConsumableArray(tabsList.querySelectorAll(':scope > .ibexa-tabs__tab:not(.ibexa-tabs__tab--more)'));
      var tabsLinks = _toConsumableArray(tabsList.querySelectorAll('.ibexa-tabs__link:not(.ibexa-tabs__tab--more)'));
      var popupMenuElement = tabsContainer.querySelector('.ibexa-popup-menu');
      var popupMenu = new ibexa.core.PopupMenu({
        popupMenuElement: popupMenuElement,
        triggerElement: tabMore,
        onItemClick: function onItemClick(event) {
          var itemElement = event.currentTarget;
          var tabLinkId = itemElement.dataset.tabLinkId;
          var tabToShow = tabsList.querySelector(".ibexa-tabs__link#".concat(tabLinkId));
          bootstrap.Tab.getOrCreateInstance(tabToShow).show();
        },
        position: function position() {
          var popupMenuLeftPosition = tabMore.offsetLeft + tabsList.offsetLeft - popupMenuElement.offsetWidth + tabMore.offsetWidth + 20;
          popupMenuElement.style.left = "".concat(popupMenuLeftPosition, "px");
        }
      });
      var popupItemsToGenerate = tabs.map(function (tab) {
        var tabLink = tab.querySelector('.ibexa-tabs__link');
        var tabLinkLabel = tabLink.textContent;
        return {
          label: tabLinkLabel,
          tabLinkId: tabLink.id
        };
      });
      popupMenu.generateItems(popupItemsToGenerate, function (itemElement, item) {
        itemElement.dataset.tabLinkId = item.tabLinkId;
      });
      popupMenu.updatePosition();
      var adaptiveItems = new ibexa.core.AdaptiveItems({
        itemHiddenClass: 'ibexa-tabs__tab--hidden',
        container: tabsList,
        getActiveItem: function getActiveItem() {
          var activeTabLink = tabsLinks.find(function (tabLink) {
            return tabLink.classList.contains('active');
          });
          var activeTab = activeTabLink ? activeTabLink.closest('.ibexa-tabs__tab') : null;
          return activeTab;
        },
        onAdapted: function onAdapted(visibleTabsWithoutSelector, hiddenTabsWithoutSelector) {
          var hiddenTabsLinksIds = _toConsumableArray(hiddenTabsWithoutSelector).map(function (tab) {
            return tab.querySelector('.ibexa-tabs__link').id;
          });
          popupMenu.toggleItems(function (popupMenuItem) {
            return !hiddenTabsLinksIds.includes(popupMenuItem.dataset.tabLinkId);
          });
          popupMenu.updatePosition();
        }
      });
      adaptiveItems.init();
      tabsLinks.forEach(function (tabLink) {
        tabLink.addEventListener('shown.bs.tab', function () {
          adaptiveItems.adapt();
        });
      });
    }
  });
  doc.querySelectorAll('.ibexa-tabs__link').forEach(function (tabLink) {
    var tab = tabLink.parentElement;
    tabLink.addEventListener('focus', function () {
      tab.focus();
    });
  });
})(window, window.document, window.ibexa, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js ***!
  \********************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var SELECTOR_TABS = '.ibexa-tabs';
  var SELECTOR_TAB = '.ibexa-tabs__tab';
  var SELECTOR_TAB_ACTIVE = '.ibexa-tabs__tab--active';
  var CLASS_TAB_ACTIVE = 'ibexa-tabs__tab--active';
  var contentColumn = doc.querySelector('.ibexa-main-container__content-column');
  var switchActiveTabs = function switchActiveTabs(currentTab, previousTab) {
    if (previousTab) {
      previousTab.classList.remove(CLASS_TAB_ACTIVE);
    }
    currentTab.classList.add(CLASS_TAB_ACTIVE);
  };
  var changeHashForPageReload = function changeHashForPageReload(hash) {
    global.location.hash = "".concat(hash, "#tab");
  };
  var handleTabShown = function handleTabShown(event) {
    var target = event.target,
      relatedTarget = event.relatedTarget;
    var currentTab = target.closest(SELECTOR_TAB);
    var previousTab = relatedTarget.closest(SELECTOR_TAB);
    changeHashForPageReload(event.target.hash);
    switchActiveTabs(currentTab, previousTab);
  };
  var setActiveHashTab = function setActiveHashTab() {
    var activeHashTabLink = doc.querySelector(".ibexa-tabs a[href=\"#".concat(global.location.hash.split('#')[1], "\"]"));
    if (!activeHashTabLink) {
      return;
    }
    var activeHashTab = activeHashTabLink.closest(SELECTOR_TAB);
    var parentTabs = activeHashTab.closest(SELECTOR_TABS);
    var currentActiveTab = parentTabs.querySelector(SELECTOR_TAB_ACTIVE);
    bootstrap.Tab.getOrCreateInstance(activeHashTabLink).show();
    switchActiveTabs(activeHashTab, currentActiveTab);
    setTimeout(function () {
      contentColumn.scrollTo(0, 0);
    }, 0);
  };
  setActiveHashTab();
  doc.querySelectorAll('.ibexa-tabs a').forEach(function (tab) {
    return tab.addEventListener('shown.bs.tab', handleTabShown);
  });
})(window, window.document, window.bootstrap);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tab.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.adaptive.tabs.js"));
/******/ }
]);