(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-form-builder-fields-config-js"],{

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/field.config.content.height.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/field.config.content.height.js ***!
  \*************************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var SCROLL_POSITION_TO_FIT = 25;
  var MIN_HEIGHT_DIFF_FOR_FITTING_HEADER = 50;
  var CONFIG_PANEL_FOOTER_WITH_SCROLL = 'ibexa-fb-form-field-config__footer--slim';
  var CONFIG_PANEL_HEADER_WITH_SCROLL = 'ibexa-fb-form-field-config__header--slim';
  var ACTIVE_TAB_CLASS = 'ibexa-tabs__tab--active';
  var configPanelForm = doc.querySelector('.ibexa-fb-form-field-config');
  var tabChangeObserverConfig = {
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['class']
  };
  if (!configPanelForm) {
    return;
  }
  var configPanelBody = configPanelForm.querySelector('.ibexa-fb-form-field-config__content');
  var configPanelFooter = configPanelForm.querySelector('.ibexa-fb-form-field-config__actions');
  var configPanelHeader = configPanelForm.querySelector('.ibexa-fb-form-field-config__header');
  var tabs = _toConsumableArray(configPanelHeader.querySelectorAll('.ibexa-tabs__tab:not(.ibexa-tabs__tab--more)'));
  var fitFooter = function fitFooter() {
    var hasVerticalScrollbar = configPanelBody.scrollHeight > configPanelBody.clientHeight;
    toggleFooterScrollClass(hasVerticalScrollbar);
  };
  var fitHeader = function fitHeader(_ref) {
    var currentTarget = _ref.currentTarget;
    var configBodyHeightDiff = configPanelBody.scrollHeight - configPanelBody.clientHeight;
    var isScrollTop = currentTarget.scrollTop === 0;
    if (isScrollTop) {
      toggleHeaderScrollClass(!isScrollTop);
    }
    if (configBodyHeightDiff < MIN_HEIGHT_DIFF_FOR_FITTING_HEADER) {
      return;
    }
    var isScrolledDeep = currentTarget.scrollTop > SCROLL_POSITION_TO_FIT;
    toggleHeaderScrollClass(isScrolledDeep);
  };
  var toggleFooterScrollClass = function toggleFooterScrollClass(isScroll) {
    configPanelFooter.classList.toggle(CONFIG_PANEL_FOOTER_WITH_SCROLL, isScroll);
  };
  var toggleHeaderScrollClass = function toggleHeaderScrollClass(isScrolled) {
    configPanelHeader.classList.toggle(CONFIG_PANEL_HEADER_WITH_SCROLL, isScrolled);
  };
  var tabChange = function tabChange(mutationsList) {
    mutationsList.forEach(function (mutation) {
      var _mutation$oldValue;
      var isActive = mutation.target.classList.contains(ACTIVE_TAB_CLASS);
      var prevIsNotActive = !((_mutation$oldValue = mutation.oldValue) !== null && _mutation$oldValue !== void 0 && _mutation$oldValue.includes(ACTIVE_TAB_CLASS));
      if (isActive && prevIsNotActive) {
        var hasVerticalScrollbar = configPanelBody.scrollHeight > configPanelBody.clientHeight;
        if (hasVerticalScrollbar) {
          configPanelBody.scrollTo(0, 0);
        }
        toggleFooterScrollClass(hasVerticalScrollbar);
      }
    });
  };
  var tabChangeObserver = new MutationObserver(tabChange);
  global.addEventListener('load', fitFooter, false);
  global.addEventListener('resize', fitFooter, false);
  configPanelBody === null || configPanelBody === void 0 || configPanelBody.addEventListener('scroll', fitHeader, false);
  tabs.forEach(function (tab) {
    tabChangeObserver.observe(tab, tabChangeObserverConfig);
  });
})(window, document);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/action.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/action.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var CLASS_NO_SELECTION = 'ibexa-fb-field-config--no-selection';
  var SELECTOR_FIELD = '.ibexa-fb-form-field-config-fieldset__attribute--action';
  var SELECTOR_SOURCE_INPUT = '.ibexa-fb-form-field-config-fieldset__attribute-input';
  var SELECTOR_ACTION_VALUE = '#field_configuration_attributes_action_value_action';
  var showActionConfig = function showActionConfig(container, event) {
    var selectedOptionValue = _toConsumableArray(event.currentTarget.selectedOptions)[0].value;
    var configContainers = _toConsumableArray(container.querySelectorAll('[data-config]'));
    configContainers.forEach(function (config) {
      return config.setAttribute('hidden', true);
    });
    var selectedConfigContainer = configContainers.find(function (config) {
      return config.dataset.config === selectedOptionValue;
    });
    if (!selectedConfigContainer) {
      container.classList.add(CLASS_NO_SELECTION);
      return;
    }
    container.classList.remove(CLASS_NO_SELECTION);
    selectedConfigContainer.removeAttribute('hidden');
    container.querySelector(SELECTOR_ACTION_VALUE).value = selectedOptionValue;
  };
  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (container) {
    var sourceInput = container.querySelector(SELECTOR_SOURCE_INPUT);
    sourceInput.addEventListener('change', showActionConfig.bind(null, container), false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js":
/*!****************************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js ***!
  \****************************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, Translator, ibexa) {
  var prevInputValue;
  var contentConfigContainer = doc.querySelector('.ibexa-fb-form-field-config-fieldset__attribute-config[data-config="location_id"]');
  if (!contentConfigContainer) {
    return;
  }
  var configInput = contentConfigContainer.querySelector('.ibexa-fb-form-field-config-fieldset__attribute-input--location-id');
  var openUdwBtn = contentConfigContainer.querySelector('.ibexa-fb-field-config__btn--open-udw');
  var selectedItemContainer = doc.querySelector('.ibexa-fb-form-field-config-selected-item');
  var selectedItemName = selectedItemContainer.querySelector('.ibexa-fb-form-field-config-selected-item__name');
  var selectedItemType = selectedItemContainer.querySelector('.ibexa-fb-form-field-config-selected-item__type');
  var selectedItemCreatedDate = selectedItemContainer.querySelector('.ibexa-fb-form-field-config-selected-item__created-date');
  var removeSelectedItemBtn = selectedItemContainer.querySelector('.ibexa-fb-form-field-config-selected-item__action--remove');
  var openUdw = function openUdw(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select content")*/'action.redirect.udw.title', {}, 'ibexa_form_builder');
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        title: title,
        multiple: false,
        onConfirm: setSelectedItem,
        onCancel: restorePrevInputValue
      }, config)
    });
    doc.body.dispatchEvent(openUdwEvent);
    prevInputValue = configInput.value;
  };
  var restorePrevInputValue = function restorePrevInputValue() {
    return configInput.value = prevInputValue;
  };
  var setSelectedItem = function setSelectedItem(items) {
    var _items = _slicedToArray(items, 1),
      selectedItem = _items[0];
    var formatShortDateTime = ibexa.helpers.timezone.formatShortDateTime;
    var itemName = ibexa.helpers.text.escapeHTML(selectedItem.ContentInfo.Content.TranslatedName);
    var itemType = ibexa.helpers.text.escapeHTML(selectedItem.ContentInfo.Content.ContentTypeInfo.names.value[0]['#text']);
    var itemPublishDate = formatShortDateTime(selectedItem.ContentInfo.Content.publishedDate);
    selectedItemName.innerHTML = itemName;
    selectedItemType.innerHTML = itemType;
    selectedItemCreatedDate.innerHTML = itemPublishDate;
    configInput.value = selectedItem.id;
    selectedItemContainer.classList.remove('ibexa-fb-form-field-config-selected-item--hidden');
    openUdwBtn.setAttribute('hidden', true);
  };
  var removeSelectedItem = function removeSelectedItem() {
    configInput.value = '';
    openUdwBtn.removeAttribute('hidden');
    selectedItemContainer.classList.add('ibexa-fb-form-field-config-selected-item--hidden');
  };
  removeSelectedItemBtn.addEventListener('click', removeSelectedItem, false);
  openUdwBtn.addEventListener('click', openUdw, false);
})(window, window.document, window.Translator, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js ***!
  \***************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, Translator) {
  var updateTimeout;
  var ENTER_KEY_CODE = 13;
  var input = doc.querySelector('#field_configuration_name');
  var fieldId = doc.querySelector('#field_configuration_id').value.trim();
  var unlockInput = function unlockInput() {
    return input.disabled = false;
  };
  var preventSettingName = function preventSettingName() {
    var message = Translator.trans(/*@Desc("Field name '%oldFieldName%' is already in use.")*/'type.different.field.name', {
      oldFieldName: input.value
    }, 'ibexa_form_builder');
    ibexa.helpers.notification.showWarningNotification(message);
    input.value = input.dataset.prevValue;
    unlockInput();
  };
  var storePreviousName = function storePreviousName() {
    return input.dataset.prevValue = input.value;
  };
  var updateFieldNameOnHitEnter = function updateFieldNameOnHitEnter(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      updateFieldName(event);
    }
  };
  var updateFieldName = function updateFieldName(_ref) {
    var currentTarget = _ref.currentTarget;
    global.clearTimeout(updateTimeout);
    updateTimeout = global.setTimeout(function () {
      var customEvent = new CustomEvent('ibexa-update-field-name', {
        detail: {
          id: fieldId,
          name: currentTarget.value.trim(),
          successCallback: unlockInput,
          errorCallback: preventSettingName
        }
      });
      input.disabled = true;
      doc.body.dispatchEvent(customEvent);
    }, 200);
  };
  input.addEventListener('focus', storePreviousName, false);
  input.addEventListener('blur', updateFieldName, false);
  input.addEventListener('keydown', updateFieldNameOnHitEnter, false);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/location.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/location.js ***!
  \*************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
(function (global, doc, ibexa) {
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var languageCode = doc.querySelector('meta[name="LanguageCode"]').content;
  var selectLocationContainers = doc.querySelectorAll('.ibexa-fb-form-field-config-location');
  var selectLocation = function selectLocation(widget, selectedLocations) {
    var _selectedLocations = _slicedToArray(selectedLocations, 1),
      newSelectedLocation = _selectedLocations[0];
    ibexa.helpers.tagViewSelect.buildItemsFromUDWResponse([newSelectedLocation], function (item) {
      return item.id;
    }, function (items) {
      widget.addItems(items, true);
    });
  };
  var openUdw = function openUdw(widget, udwConfig) {
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        onConfirm: selectLocation.bind(null, widget),
        onCancel: function onCancel() {},
        restInfo: {
          token: token,
          siteaccess: siteaccess
        },
        cotfAllowedLanguages: [languageCode]
      }, udwConfig)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  selectLocationContainers.forEach(function (selectLocationContainer) {
    var selectLocationBtn = selectLocationContainer.querySelector('.ibexa-fb-form-field-config-location__btn-select-path');
    var udwConfig = JSON.parse(selectLocationBtn.dataset.udwConfig);
    var selectLocationWidget = new ibexa.core.TagViewSelect({
      fieldContainer: selectLocationContainer
    });
    selectLocationBtn.addEventListener('click', openUdw.bind(null, selectLocationWidget, udwConfig));
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/options.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/options.js ***!
  \************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
(function (global, doc, ibexa) {
  var draggable;
  var SELECTOR_ITEM = '.ibexa-fb-form-field-config-option';
  var SELECTOR_OPTIONS_WIDGET = '.ibexa-fb-form-field-config-fieldset__attribute--options';
  var SELECTOR_OPTIONS = '.ibexa-fb-form-field-config-options__body';
  var SELECTOR_BTN_REMOVE = '.ibexa-fb-form-field-config-option__remove-btn';
  var SELECTOR_BTN_ADD = '.ibexa-fb-form-field-config-options__add-btn';
  var SELECTOR_INPUT = '.ibexa-fb-form-field-config-fieldset__attribute-input';
  var SELECTOR_OPTION_INPUT = '.ibexa-fb-form-field-config-option__input';
  var optionsWidgets = doc.querySelectorAll(SELECTOR_OPTIONS_WIDGET);
  if (!optionsWidgets.length) {
    return;
  }
  var getItems = function getItems(container) {
    return _toConsumableArray(container.querySelectorAll(SELECTOR_ITEM));
  };
  var getItemValue = function getItemValue(item) {
    return item.querySelector(SELECTOR_OPTION_INPUT).value.trim();
  };
  var updateInputValue = function updateInputValue(container) {
    var input = container.querySelector(SELECTOR_INPUT);
    input.value = JSON.stringify(_toConsumableArray(getItems(container).map(getItemValue)));
  };
  var attachEventsToSelectedItem = function attachEventsToSelectedItem(container, item) {
    var optionsWidget = container.closest(SELECTOR_OPTIONS_WIDGET);
    item.querySelector(SELECTOR_BTN_REMOVE).onclick = function (event) {
      return removeItem(container, event);
    };
    item.querySelector(SELECTOR_OPTION_INPUT).onkeyup = function () {
      return updateInputValue(optionsWidget);
    };
  };
  var toggleRemoveBtnsDisabledState = function toggleRemoveBtnsDisabledState(container) {
    var btns = container.querySelectorAll(SELECTOR_BTN_REMOVE);
    var methodName = btns.length > 1 ? 'removeAttribute' : 'setAttribute';
    btns.forEach(function (btn) {
      return btn[methodName]('disabled', true);
    });
  };
  var createItem = function createItem(template) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var container = doc.createElement('div');
    container.innerHTML = template;
    doc.body.append(container);
    var _container$children = _slicedToArray(container.children, 1),
      option = _container$children[0];
    option.querySelector(SELECTOR_OPTION_INPUT).value = value;
    doc.body.removeChild(container);
    return option;
  };
  var addItem = function addItem(container) {
    var item = createItem(container.dataset.template);
    container.append(item);
    toggleRemoveBtnsDisabledState(container);
    draggable.reinit();
  };
  var addItems = function addItems(container, items) {
    var optionsWidget = container.closest(SELECTOR_OPTIONS_WIDGET);
    var fragment = doc.createDocumentFragment();
    var template = container.dataset.template;
    items.forEach(function (item) {
      return fragment.append(createItem(template, item));
    });
    container.append(fragment);
    updateInputValue(optionsWidget);
    draggable.reinit();
    toggleRemoveBtnsDisabledState(container);
  };
  var removeItem = function removeItem(container, event) {
    event.preventDefault();
    var optionsWidget = event.currentTarget.closest(SELECTOR_OPTIONS_WIDGET);
    event.currentTarget.closest(SELECTOR_ITEM).remove();
    updateInputValue(optionsWidget);
    toggleRemoveBtnsDisabledState(container);
  };
  var OptionsDraggable = /*#__PURE__*/function (_global$ibexa$core$Dr) {
    "use strict";

    function OptionsDraggable() {
      _classCallCheck(this, OptionsDraggable);
      return _callSuper(this, OptionsDraggable, arguments);
    }
    _inherits(OptionsDraggable, _global$ibexa$core$Dr);
    return _createClass(OptionsDraggable, [{
      key: "attachEventHandlersToItem",
      value: function attachEventHandlersToItem(item) {
        _superPropGet(OptionsDraggable, "attachEventHandlersToItem", this, 3)([item]);
        attachEventsToSelectedItem(this.itemsContainer, item);
      }
    }, {
      key: "onDrop",
      value: function onDrop() {
        _superPropGet(OptionsDraggable, "onDrop", this, 3)([]);
        var optionsWidget = this.itemsContainer.closest(SELECTOR_OPTIONS_WIDGET);
        updateInputValue(optionsWidget);
      }
    }]);
  }(global.ibexa.core.Draggable);
  optionsWidgets.forEach(function (optionsWidget) {
    var itemsContainer = optionsWidget.querySelector(SELECTOR_OPTIONS);
    var addOptionBtn = optionsWidget.querySelector(SELECTOR_BTN_ADD);
    var input = optionsWidget.querySelector(SELECTOR_INPUT);
    var inputValue = input.value.trim();
    draggable = new OptionsDraggable({
      itemsContainer: itemsContainer,
      selectorItem: SELECTOR_ITEM,
      selectorPlaceholder: '.ibexa-fb-form-field-config-option-placeholder'
    });
    draggable.init();
    addOptionBtn.addEventListener('click', function () {
      return addItem(itemsContainer);
    }, false);
    if (!inputValue.length) {
      return;
    }
    try {
      var items = JSON.parse(inputValue);
      if (items.length) {
        itemsContainer.innerHTML = '';
        addItems(itemsContainer, items);
      }
    } catch (error) {
      ibexa.helpers.notification.showErrorNotification('Issue occurred when parsing field value');
      console.error('Issue occurred when parsing field value', error);
    }
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js ***!
  \**********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var SELECTOR_FIELD = '.ibexa-fb-form-field-config-fieldset__validator--regex';
  var SELECTOR_SOURCE_INPUT = '.ibexa-fb-form-field-config-fieldset__validator-input--dropdown';
  var SELECTOR_CUSTOM_REGEX = '.ibexa-fb-form-field-config-fieldset__validator-config';
  var SELECTOR_REGEX_INPUT = '#field_configuration_validators_regex_value_pattern';
  var SELECTOR_SELECTED_ITEM = '.ibexa-dropdown__selected-item';
  var CUSTOM_REGEX_VALUE = '/.*/';
  var wasCustomRegexSelected = false;
  var customRegexValue = CUSTOM_REGEX_VALUE;
  var updateRegexStoredValue = function updateRegexStoredValue(event) {
    return customRegexValue = event.currentTarget.value;
  };
  var attachEventsToRegexInput = function attachEventsToRegexInput(input) {
    input.addEventListener('keyup', updateRegexStoredValue, false);
    input.addEventListener('blur', updateRegexStoredValue, false);
  };
  var showRegexConfig = function showRegexConfig(container, event) {
    var selectedOptionValue = _toConsumableArray(event.currentTarget.selectedOptions)[0].value;
    var isCustomRegexSelected = selectedOptionValue === CUSTOM_REGEX_VALUE;
    var regexConfigMethodName = isCustomRegexSelected ? 'removeAttribute' : 'setAttribute';
    var regexInput = container.querySelector(SELECTOR_REGEX_INPUT);
    container.querySelector(SELECTOR_CUSTOM_REGEX)[regexConfigMethodName]('hidden', true);
    if (!isCustomRegexSelected) {
      regexInput.value = selectedOptionValue;
      regexInput.removeEventListener('keyup', updateRegexStoredValue);
      regexInput.removeEventListener('blur', updateRegexStoredValue);
      return;
    }
    if (wasCustomRegexSelected) {
      regexInput.value = customRegexValue;
    } else {
      wasCustomRegexSelected = true;
      regexInput.value = CUSTOM_REGEX_VALUE;
    }
    attachEventsToRegexInput(regexInput);
  };
  doc.querySelectorAll(SELECTOR_FIELD).forEach(function (container) {
    var sourceInput = container.querySelector(SELECTOR_SOURCE_INPUT);
    var selectedItem = container.querySelector(SELECTOR_SELECTED_ITEM);
    if (selectedItem && selectedItem.dataset.value === CUSTOM_REGEX_VALUE) {
      var regexInput = container.querySelector(SELECTOR_REGEX_INPUT);
      wasCustomRegexSelected = true;
      customRegexValue = regexInput.value;
      showRegexConfig(container, {
        currentTarget: {
          selectedOptions: [{
            value: selectedItem.dataset.value
          }]
        }
      });
    }
    sourceInput.addEventListener('change', showRegexConfig.bind(null, container), false);
  });
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/field.config.content.height.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/location.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/options.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/action.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/action.redirect.content.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/field.name.js"), __webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/config-form/fields/regex.js"));
/******/ }
]);