(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-site-context-location-view-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ***!
  \********************************************************************************************/
/***/ (() => {

(function (global, doc, React, ReactDOM, ibexa) {
  var contentTreeContainer = doc.querySelector('.ibexa-content-tree-container');
  if (!contentTreeContainer) {
    return;
  }
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var contentTreeRootElement = doc.querySelector('.ibexa-content-tree-container__root');
  var _contentTreeContainer = contentTreeContainer.dataset,
    currentLocationPath = _contentTreeContainer.currentLocationPath,
    treeRootLocationId = _contentTreeContainer.treeRootLocationId;
  var userId = window.ibexa.helpers.user.getId();
  var removeContentTreeContainerWidth = function removeContentTreeContainerWidth(event) {
    if (event.detail.id !== 'ibexa-content-tree') {
      return;
    }
    contentTreeContainer.style.width = null;
  };
  var renderTree = function renderTree() {
    var contentTreeRoot = ReactDOM.createRoot(contentTreeRootElement);
    contentTreeRoot.render(React.createElement(ibexa.modules.ContentTree, {
      userId: userId,
      currentLocationPath: currentLocationPath,
      rootLocationId: parseInt(treeRootLocationId, 10),
      restInfo: {
        token: token,
        siteaccess: siteaccess
      }
    }));
  };
  doc.body.addEventListener('ibexa-tb-rendered', removeContentTreeContainerWidth);
  renderTree();
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit');
  var languageRadioOption = doc.querySelector('.ibexa-content-menu-wrapper .ibexa-extra-actions--edit.ibexa-extra-actions--prevent-show .ibexa-input--radio');
  if (!languageRadioOption) {
    return;
  }
  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change'));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var createActions = doc.querySelectorAll('.ibexa-extra-actions--create');
  var bindCreateActionsEvents = function bindCreateActionsEvents(container) {
    var radioInputs = container.querySelectorAll('.form-check [type="radio"]');
    var submitBtn = container.querySelector('.ibexa-extra-actions__btn--confirm');
    radioInputs.forEach(function (radioInput) {
      return radioInput.addEventListener('change', function (event) {
        var selectedItems = container.querySelectorAll('.ibexa-instant-filter__group-item--selected');
        var itemToSelect = event.currentTarget.closest('.ibexa-instant-filter__group-item');
        selectedItems.forEach(function (selectedItem) {
          return selectedItem.classList.remove('ibexa-instant-filter__group-item--selected');
        });
        itemToSelect.classList.add('ibexa-instant-filter__group-item--selected');
        submitBtn.removeAttribute('disabled');
      }, false);
    });
  };
  doc.body.addEventListener('ibexa-instant-filters:add-group', function (event) {
    var createActionsContainer = event.detail.container.closest('.ibexa-extra-actions--create');
    bindCreateActionsEvents(createActionsContainer);
  });
  if (!createActions.length) {
    return;
  }
  createActions.forEach(bindCreateActionsEvents);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js ***!
  \***************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, bootstrap, Routing) {
  var editActions = doc.querySelectorAll('.ibexa-extra-actions--edit, .ibexa-extra-actions--edit-user');
  var resetRadioButtons = function resetRadioButtons(btns) {
    return btns.forEach(function (btn) {
      btn.checked = false;
    });
  };
  var addDraft = function addDraft(form) {
    form.submit();
    bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
  };
  var redirectToUserEdit = function redirectToUserEdit(languageCode, contentId, form) {
    var versionNo = form.querySelector('#user_edit_version_info_version_no').value;
    window.location.href = Routing.generate('ibexa.user.update', {
      contentId: contentId,
      versionNo: versionNo,
      language: languageCode
    });
  };
  var onModalHidden = function onModalHidden(btns) {
    resetRadioButtons(btns);
    var event = new CustomEvent('ibexa-draft-conflict-modal-hidden');
    doc.body.dispatchEvent(event);
  };
  var attachModalListeners = function attachModalListeners(wrapper, form, btns) {
    var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
    var conflictModal = doc.querySelector('#version-draft-conflict-modal');
    if (addDraftButton) {
      addDraftButton.addEventListener('click', addDraft.bind(null, form), false);
    }
    wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
      return btn.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    });
    if (conflictModal) {
      bootstrap.Modal.getOrCreateInstance(conflictModal).show();
      conflictModal.addEventListener('hidden.bs.modal', onModalHidden.bind(null, btns));
      conflictModal.addEventListener('shown.bs.modal', function () {
        return ibexa.helpers.tooltips.parse();
      });
    }
  };
  var showModal = function showModal(form, btns, modalHtml) {
    var wrapper = doc.querySelector('.ibexa-modal-wrapper');
    wrapper.innerHTML = modalHtml;
    attachModalListeners(wrapper, form, btns);
  };
  var changeHandler = function changeHandler(form, btns, event) {
    var contentIdInput = form.querySelector('.ibexa-extra-actions__form-field--content-info');
    var locationInput = form.querySelector('.ibexa-extra-actions__form-field--location');
    var contentId = contentIdInput.value;
    var locationId = locationInput.value;
    var checkedBtn = event.currentTarget;
    var languageCode = checkedBtn.value;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    fetch(checkVersionDraftLink, {
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.status === 409) {
        response.text().then(showModal.bind(null, form, btns));
      } else if (response.status === 200) {
        if (form.querySelector('#user_edit_version_info')) {
          redirectToUserEdit(languageCode, contentId, form);
          return;
        }
        form.submit();
      }
    });
  };
  var attachEventsToEditActionsWidget = function attachEventsToEditActionsWidget(container) {
    var btns = _toConsumableArray(container.querySelectorAll('.form-check [type="radio"]'));
    var form = container.querySelector('form');
    btns.forEach(function (btn) {
      return btn.addEventListener('change', changeHandler.bind(null, form, btns), false);
    });
  };
  _toConsumableArray(editActions).forEach(attachEventsToEditActionsWidget);
})(window, window.document, window.ibexa, window.bootstrap, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit-user');
  var languageRadioOption = doc.querySelector('.ibexa-extra-actions--edit-user.ibexa-extra-actions--prevent-show .ibexa-input--radio');
  var editActions = doc.querySelector('.ibexa-extra-actions--edit-user');
  if (!editActions || !languageRadioOption) {
    return;
  }
  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change'));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa) {
  var CLASS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_EXPANDED = 'ibexa-context-menu--expanded';
  var CLASS_PREVENT_SHOW = 'ibexa-extra-actions--prevent-show';
  var closeBtns = doc.querySelectorAll('.ibexa-extra-actions .ibexa-btn--close, .ibexa-extra-actions .ibexa-extra-actions__btn--cancel');
  var btns = _toConsumableArray(doc.querySelectorAll('.ibexa-btn--extra-actions'));
  var menu = doc.querySelector('.ibexa-context-menu');
  var backdrop = new ibexa.core.Backdrop();
  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };
  var removeBackdrop = function removeBackdrop() {
    backdrop.hide();
    doc.body.classList.remove('ibexa-scroll-disabled');
  };
  var closeExtraActions = function closeExtraActions(actions) {
    actions.classList.add(CLASS_HIDDEN);
    if (menu) {
      menu.classList.remove(CLASS_EXPANDED);
    }
    doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:after-close'));
    removeBackdrop();
  };
  var toggleExtraActionsWidget = function toggleExtraActionsWidget(widgetData) {
    var actions = doc.querySelector(".ibexa-extra-actions[data-actions=\"".concat(widgetData.actions, "\"]"));
    if (widgetData.validate && !parseInt(widgetData.isFormValid, 10)) {
      return;
    }
    var isHidden = haveHiddenPart(actions);
    var focusElement = actions.querySelector(widgetData.focusElement);
    var _detectClickOutside = function detectClickOutside(event) {
      if (event.target.classList.contains('ibexa-backdrop')) {
        closeExtraActions(actions);
        doc.body.removeEventListener('click', _detectClickOutside, false);
      }
    };
    actions.classList.toggle(CLASS_HIDDEN, !isHidden);
    if (menu) {
      menu.classList.toggle(CLASS_EXPANDED, isHidden);
    }
    if (!actions.classList.contains(CLASS_HIDDEN)) {
      backdrop.show();
      doc.body.addEventListener('click', _detectClickOutside, false);
      doc.body.classList.add('ibexa-scroll-disabled');
    } else {
      doc.body.removeEventListener('click', _detectClickOutside);
      removeBackdrop();
    }
    if (focusElement) {
      focusElement.focus();
    }
  };
  var initExtraActionsWidget = function initExtraActionsWidget(dataset) {
    var hashes = window.location.hash.split('#');
    if (hashes.includes(dataset.actions)) {
      toggleExtraActionsWidget(dataset);
    }
  };
  var hideMenu = function hideMenu(btn) {
    var menuBranch = btn.closest('.ibexa-multilevel-popup-menu__branch');
    if (!(menuBranch !== null && menuBranch !== void 0 && menuBranch.menuInstanceElement)) {
      return;
    }
    var menuInstance = ibexa.helpers.objectInstances.getInstance(menuBranch.menuInstanceElement);
    menuInstance.closeMenu();
  };
  btns.forEach(function (btn) {
    var dataset = btn.dataset;
    btn.addEventListener('click', function () {
      toggleExtraActionsWidget(dataset);
      hideMenu(btn);
    }, false);
    initExtraActionsWidget(dataset);
  });
  doc.body.addEventListener('ibexa-extra-actions:toggle-widget', function (event) {
    return toggleExtraActionsWidget(event.detail);
  }, false);
  closeBtns.forEach(function (closeBtn) {
    return closeBtn.addEventListener('click', function (event) {
      closeExtraActions(event.currentTarget.closest('.ibexa-extra-actions'));
    }, false);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js ***!
  \************************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var filterTimeout;
  var SELECTOR_ITEM = '.ibexa-instant-filter__group-item';
  var timeout = 200;
  var filters = doc.querySelectorAll('.ibexa-instant-filter');
  var toggleGroupDisplay = function toggleGroupDisplay(group) {
    var areChildrenHidden = _toConsumableArray(group.querySelectorAll(SELECTOR_ITEM)).every(function (item) {
      return item.hasAttribute('hidden');
    });
    group.toggleAttribute('hidden', areChildrenHidden);
  };
  var filterItems = function filterItems(itemsMap, groups, event) {
    window.clearTimeout(filterTimeout);
    filterTimeout = window.setTimeout(function () {
      var query = event.target.value.toLowerCase();
      var results = itemsMap.filter(function (item) {
        return item.label.includes(query);
      });
      itemsMap.forEach(function (item) {
        return item.element.setAttribute('hidden', true);
      });
      results.forEach(function (item) {
        return item.element.removeAttribute('hidden');
      });
      groups.forEach(toggleGroupDisplay);
    }, timeout);
  };
  var initFilter = function initFilter(filter) {
    var filterInput = filter.querySelector('.ibexa-instant-filter__input');
    var groups = _toConsumableArray(filter.querySelectorAll('.ibexa-instant-filter__group'));
    var items = _toConsumableArray(filter.querySelectorAll(SELECTOR_ITEM));
    var itemsMap = items.reduce(function (total, item) {
      return [].concat(_toConsumableArray(total), [{
        label: item.textContent.toLowerCase(),
        element: item
      }]);
    }, []);
    filterInput.addEventListener('change', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('blur', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keyup', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }, false);
  };
  doc.body.addEventListener('ibexa-instant-filters:add-group', function (event) {
    var filterContainer = event.detail.container.closest('.ibexa-instant-filter');
    initFilter(filterContainer);
  });
  filters.forEach(initFilter);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/add.translation.js":
/*!*************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/add.translation.js ***!
  \*************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa, bootstrap) {
  var openTranslationModal = function openTranslationModal(event) {
    var _event$detail = event.detail,
      item = _event$detail.item,
      contentLanguages = _event$detail.contentLanguages,
      permissions = _event$detail.permissions;
    var restrictedLanguageCodes = permissions.restrictedLanguageCodesList.restrictedLanguageCodes;
    var existingLanguages = contentLanguages.map(function (_ref) {
      var languageCode = _ref.languageCode;
      return languageCode;
    });
    var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--translation');
    var modal = contentFormContainer.querySelector('#content-tree-add-translation-modal');
    var locationInput = modal.querySelector('[name="content_tree_content_translation[location]"]');
    var baseLanguage = modal.querySelector('.ibexa-translation__language-wrapper--base-language');
    var targetLanguage = modal.querySelector('.ibexa-translation__language-wrapper--language');
    var modalWidget = bootstrap.Modal.getOrCreateInstance(modal);
    var noLanguageOption = baseLanguage.querySelector('[value=""]');
    locationInput.value = item.id;
    targetLanguage.innerHTML = '';
    baseLanguage.innerHTML = '';
    baseLanguage.append(noLanguageOption);
    Object.values(ibexa.adminUiConfig.languages.mappings).forEach(function (_ref2) {
      var languageCode = _ref2.languageCode,
        name = _ref2.name,
        enabled = _ref2.enabled;
      var hasPermissionToLanguage = restrictedLanguageCodes.length === 0 || restrictedLanguageCodes.includes(languageCode);
      if (!enabled || !hasPermissionToLanguage) {
        return;
      }
      var optionRendered = "<option value=\"".concat(languageCode, "\">").concat(name, "</option>");
      var container = doc.createElement('select');
      container.insertAdjacentHTML('beforeend', optionRendered);
      if (existingLanguages.includes(languageCode)) {
        baseLanguage.append(container.firstElementChild);
      } else {
        targetLanguage.append(container.firstElementChild);
      }
    });
    modalWidget.show();
  };
  doc.body.addEventListener('ibexa-content-tree:open-language-modal', openTranslationModal, false);
})(window, window.document, window.ibexa, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/create.content.js":
/*!************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/create.content.js ***!
  \************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator) {
  var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--create');
  if (!contentFormContainer) {
    return;
  }
  var contentTypeItemsContainers = contentFormContainer.querySelector('.ibexa-instant-filter__items');
  var contentTypeGroups = _toConsumableArray(contentTypeItemsContainers.querySelectorAll('.ibexa-instant-filter__group'));
  var contentTypesMap = Object.values(ibexa.adminUiConfig.contentTypes).reduce(function (output, contentTypeGroup) {
    return contentTypeGroup.reduce(function (groupOutput, group) {
      return _objectSpread(_defineProperty({}, group.id, group), groupOutput);
    }, output);
  }, {});
  var prepareLanguageDropdown = function prepareLanguageDropdown() {
    var dropdownSource = contentFormContainer.querySelector('.ibexa-extra-actions__section-content .ibexa-dropdown__source .ibexa-input');
    dropdownSource.innerHTML = '';
    var configLanguages = ibexa.adminUiConfig.languages;
    var languages = configLanguages.priority.map(function (languageCode) {
      return configLanguages.mappings[languageCode];
    });
    Object.values(languages).forEach(function (_ref) {
      var languageCode = _ref.languageCode,
        name = _ref.name,
        enabled = _ref.enabled;
      if (!enabled) {
        return;
      }
      var optionRendered = "<option value=\"".concat(languageCode, "\">").concat(name, "</option>");
      var container = doc.createElement('select');
      container.insertAdjacentHTML('beforeend', optionRendered);
      dropdownSource.append(container.firstElementChild);
    });
    if (languages.length) {
      dropdownSource.value = languages[0].languageCode;
    }
  };
  var preparePermissionsWidget = function preparePermissionsWidget(permissions) {
    if (!permissions.restrictedContentTypeIdsList.restrictedContentTypeIds.length) {
      return;
    }
    var visibleTypes = permissions.restrictedContentTypeIdsList.restrictedContentTypeIds.map(function (contentTypeId) {
      return contentTypesMap[parseInt(contentTypeId, 10)].identifier;
    });
    contentTypeGroups.forEach(function (group) {
      var contentTypeGroupItems = _toConsumableArray(group.querySelectorAll('.ibexa-instant-filter__group-item'));
      var groupHiddenItemsCount = 0;
      contentTypeGroupItems.forEach(function (groupItem) {
        var groupItemInput = groupItem.querySelector('.ibexa-input--radio');
        var isElementHidden = !visibleTypes.includes(groupItemInput.value);
        groupItem.classList.toggle('ibexa-content-tree-content-form-container__hidden-element', isElementHidden);
        if (isElementHidden) {
          groupHiddenItemsCount++;
        }
      });
      group.classList.toggle('ibexa-content-tree-content-form-container__hidden-element', groupHiddenItemsCount === contentTypeGroupItems.length);
    });
  };
  var prepareSuggestionsWidget = function prepareSuggestionsWidget() {
    var suggestions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var existingSuggestionContainer = contentTypeItemsContainers.querySelector('.ibexa-instant-filter__group--suggestions');
    existingSuggestionContainer === null || existingSuggestionContainer === void 0 || existingSuggestionContainer.remove();
    if (!suggestions.length) {
      return;
    }
    var groupTemplate = contentTypeItemsContainers.dataset.groupTemplate;
    var suggestionsHeader = Translator.trans(/*@Desc("Suggestions")*/'content_type_suggestions', {}, 'ibexa_content_tree_ui');
    var suggestionsNewContainer = doc.createElement('div');
    var filledTemplate = groupTemplate.replace('{{ group_name }}', suggestionsHeader).replace('{{ group_options }}', '');
    var groupsParent = contentTypeItemsContainers.querySelector('.ibexa-instant-filter__group').parentNode;
    suggestionsNewContainer.insertAdjacentHTML('beforeend', filledTemplate);
    var suggestionsGroup = suggestionsNewContainer.querySelector('.ibexa-instant-filter__group');
    suggestionsGroup.classList.add('ibexa-instant-filter__group--suggestions');
    suggestions.forEach(function (_ref2) {
      var identifier = _ref2.identifier;
      var item = contentTypeItemsContainers.querySelector(".ibexa-instant-filter__group-item[data-identifier=\"".concat(identifier, "\"]"));
      var clonedItem = item.cloneNode(true);
      var clonedInput = clonedItem.querySelector('.ibexa-input');
      var clonedInputId = "".concat(clonedInput.id, "__ibexa_suggestion");
      clonedItem.querySelectorAll("label[for=\"".concat(clonedInput.id, "\"]")).forEach(function (labelNode) {
        return labelNode.setAttribute('for', clonedInputId);
      });
      clonedInput.setAttribute('id', clonedInputId);
      suggestionsGroup.append(clonedItem);
    });
    groupsParent.prepend(suggestionsGroup);
    doc.body.dispatchEvent(new CustomEvent('ibexa-instant-filters:add-group', {
      detail: {
        container: suggestionsGroup
      }
    }));
  };
  var openContentCreateWidget = function openContentCreateWidget(event) {
    var _event$detail = event.detail,
      permissions = _event$detail.permissions,
      item = _event$detail.item,
      suggestions = _event$detail.suggestions;
    var locationInput = contentFormContainer.querySelector('[name="content_tree_content_create[parent_location]"]');
    locationInput.value = item.id;
    preparePermissionsWidget(permissions);
    prepareLanguageDropdown();
    prepareSuggestionsWidget(suggestions);
    document.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:toggle-widget', {
      detail: {
        actions: 'content-tree-create'
      }
    }));
  };
  doc.body.addEventListener('ibexa-content-tree:open-create-widget', openContentCreateWidget, false);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/edit.content.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/edit.content.js ***!
  \**********************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var openContentEditWidget = function openContentEditWidget(event) {
    var _event$detail = event.detail,
      item = _event$detail.item,
      contentLanguages = _event$detail.contentLanguages,
      permissions = _event$detail.permissions;
    var restrictedLanguageCodes = permissions.restrictedLanguageCodesList.restrictedLanguageCodes;
    var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--edit');
    var counterContainer = contentFormContainer.querySelector('.ibexa-extra-actions__counter');
    var contentInput = contentFormContainer.querySelector('[name="content_tree_content_edit[content_info]"]');
    var locationInput = contentFormContainer.querySelector('[name="content_tree_content_edit[location]"]');
    var contentLanguagesCodes = contentLanguages.map(function (_ref) {
      var languageCode = _ref.languageCode;
      return languageCode;
    }).filter(function (languageCode) {
      return restrictedLanguageCodes.length === 0 || restrictedLanguageCodes.includes(languageCode);
    });
    contentInput.value = item.internalItem.contentId;
    locationInput.value = item.internalItem.locationId;
    if (contentLanguagesCodes.length !== 1) {
      var inputs = contentFormContainer.querySelectorAll('.ibexa-input--radio');
      _toConsumableArray(inputs).forEach(function (input) {
        var optionWrapper = input.closest('.form-check');
        optionWrapper.hidden = !contentLanguagesCodes.includes(input.value);
      });
      counterContainer.innerHTML = contentLanguagesCodes.length;
      document.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:toggle-widget', {
        detail: {
          actions: 'content-tree-edit'
        }
      }));
    } else {
      var languageRadioOption = contentFormContainer.querySelector(".ibexa-input--radio[value=\"".concat(contentLanguagesCodes[0], "\"]"));
      if (!languageRadioOption) {
        return;
      }
      languageRadioOption.checked = true;
      languageRadioOption.dispatchEvent(new CustomEvent('change'));
    }
  };
  doc.body.addEventListener('ibexa-content-tree:open-edit-widget', openContentEditWidget, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/content-tree/src/bundle/Resources/public/js/hide.reveal.content.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/content-tree/src/bundle/Resources/public/js/hide.reveal.content.js ***!
  \*****************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var contentFormContainer = doc.querySelector('.ibexa-content-tree-content-form-container--visibility');
  var hideRevealContent = function hideRevealContent(item, visible) {
    var form = contentFormContainer.querySelector('form');
    var contentInput = contentFormContainer.querySelector('[name="content_tree_content_visibility[contentInfo]"]');
    var locationInput = contentFormContainer.querySelector('[name="content_tree_content_visibility[location]"]');
    var visibilityInput = contentFormContainer.querySelector('[name="content_tree_content_visibility[visible]"]');
    contentInput.value = item.internalItem.contentId;
    locationInput.value = item.internalItem.locationId;
    visibilityInput.value = visible ? 1 : 0;
    form.submit();
  };
  var hideContent = function hideContent(event) {
    if (event.detail.item.internalItem.reverseRelationsCount) {
      var handleConfirm = function handleConfirm() {
        return hideRevealContent(event.detail.item, false);
      };
      var modal = contentFormContainer.querySelector('#content-tree-hide-content-modal');
      var confirmBtn = modal.querySelector('.ibexa-btn--confirm');
      doc.body.appendChild(modal); // move element on top of everything to avoid being nested in absolute element
      bootstrap.Modal.getOrCreateInstance(modal).show();
      confirmBtn.addEventListener('click', handleConfirm, false);
      modal.addEventListener('hidden.bs.modal', function () {
        contentFormContainer.append(modal);
        confirmBtn.removeEventListener('click', handleConfirm, false);
      });
    } else {
      hideRevealContent(event.detail.item, false);
    }
  };
  var revealContent = function revealContent(event) {
    hideRevealContent(event.detail.item, true);
  };
  doc.body.addEventListener('ibexa-content-tree:hide', hideContent, false);
  doc.body.addEventListener('ibexa-content-tree:reveal', revealContent, false);
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/site-context/src/bundle/Resources/public/js/admin.location.preview.view.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/site-context/src/bundle/Resources/public/js/admin.location.preview.view.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_loader_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.loader.class */ "./vendor/ibexa/site-context/src/bundle/Resources/public/js/preview.loader.class.js");

(function (global, doc) {
  var previewFullNode = doc.querySelector('.ibexa-sc-location-full-preview');
  if (!previewFullNode) {
    return;
  }
  var previewIframeWrapperNode = previewFullNode.querySelector('.ibexa-sc-location-full-preview__iframe-wrapper');
  var loaderWrapperNode = previewFullNode.querySelector('.ibexa-sc-location-full-preview__loader-wrapper');
  var previewIframe = previewIframeWrapperNode.querySelector('.ibexa-sc-location-full-preview__iframe');
  var resizeIframe = function resizeIframe() {
    var currentPreviewWidth = previewIframeWrapperNode.offsetWidth;
    var currentIframeWidth = previewIframe.offsetWidth;
    var scaleValue = currentPreviewWidth / currentIframeWidth;
    var offsetTop = previewIframe.getBoundingClientRect().top;
    var windowHeight = global.innerHeight;
    var iframeHeight = (windowHeight - offsetTop) / scaleValue;
    previewIframe.style.scale = scaleValue;
    previewIframe.style.height = "".concat(iframeHeight, "px");
  };
  var resizeObserver = new ResizeObserver(function () {
    resizeIframe();
  });
  var iframeLoadCallback = function iframeLoadCallback(event, _ref) {
    var isAccepted = _ref.isAccepted;
    if (isAccepted) {
      previewIframe.classList.add('ibexa-sc-location-full-preview__iframe--success');
      resizeIframe();
      resizeObserver.observe(previewIframeWrapperNode);
    }
    this.blockPointerEvents();
    previewFullNode.classList.add('ibexa-sc-location-full-preview--loaded');
  };
  var previewLoaderInstance = new _preview_loader_class__WEBPACK_IMPORTED_MODULE_0__["default"]({
    iframeWrapper: previewIframeWrapperNode,
    loaderWrapper: loaderWrapperNode,
    previewUrl: previewIframeWrapperNode.dataset.previewUrl,
    iframeLoadCallback: iframeLoadCallback
  });
  previewLoaderInstance.init();
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/site-context/src/bundle/Resources/public/js/preview.loader.class.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/site-context/src/bundle/Resources/public/js/preview.loader.class.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STATUS_GROUPS: () => (/* binding */ STATUS_GROUPS),
/* harmony export */   "default": () => (/* binding */ PreviewLoader)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var STATUS_GROUPS = {
  INFORMATIONAL: 'informational',
  SUCCESSFUL: 'successful',
  REDIRECTION: 'redirection',
  CLIENT_ERROR: 'client error',
  SERVER_ERROR: 'server error'
};
var PreviewLoader = /*#__PURE__*/function () {
  function PreviewLoader(_ref) {
    var iframeWrapper = _ref.iframeWrapper,
      loaderWrapper = _ref.loaderWrapper,
      previewUrl = _ref.previewUrl,
      acceptableStatusGroups = _ref.acceptableStatusGroups,
      iframeLoadCallback = _ref.iframeLoadCallback,
      fallbackTheme = _ref.fallbackTheme;
    _classCallCheck(this, PreviewLoader);
    this.iframeWrapper = iframeWrapper;
    this.iframe = iframeWrapper.querySelector('iframe');
    this.loaderWrapper = loaderWrapper;
    this.previewUrl = previewUrl;
    this.fallbackTheme = fallbackTheme !== null && fallbackTheme !== void 0 ? fallbackTheme : 'light';
    this.acceptableStatusGroups = acceptableStatusGroups !== null && acceptableStatusGroups !== void 0 ? acceptableStatusGroups : [STATUS_GROUPS.SUCCESSFUL];
    this.iframeLoadCallback = iframeLoadCallback !== null && iframeLoadCallback !== void 0 ? iframeLoadCallback : this.defaultIframeLoadCallback;
    this.abortController = new AbortController();
    this.checkPreviewStatusCode = this.checkPreviewStatusCode.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    this.initIframe = this.initIframe.bind(this);
  }
  return _createClass(PreviewLoader, [{
    key: "checkPreviewStatusCode",
    value: function checkPreviewStatusCode(statusCode) {
      return this.acceptableStatusGroups.some(function (statusGroup) {
        var _PreviewLoader$getSta = PreviewLoader.getStatusRangeCodes(statusGroup),
          start = _PreviewLoader$getSta.start,
          end = _PreviewLoader$getSta.end;
        return statusCode >= start && statusCode <= end;
      });
    }
  }, {
    key: "getPreviewStatus",
    value: function getPreviewStatus() {
      var signal = this.abortController.signal;
      return fetch(this.previewUrl, {
        method: 'HEAD',
        signal: signal
      }).then(function (_ref2) {
        var status = _ref2.status;
        return status;
      });
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      this.loaderWrapper.style.display = 'none';
    }
  }, {
    key: "blockPointerEvents",
    value: function blockPointerEvents() {
      var documentHTML = this.iframe.contentWindow.document.documentElement;
      documentHTML.style.pointerEvents = 'none';
    }
  }, {
    key: "defaultIframeLoadCallback",
    value: function defaultIframeLoadCallback() {
      this.blockPointerEvents();
    }
  }, {
    key: "initIframe",
    value: function initIframe(url, _ref3) {
      var _this = this;
      var isAccepted = _ref3.isAccepted;
      this.iframe.src = url;
      this.iframe.addEventListener('load', function (event) {
        _this.iframeLoadCallback(event, {
          isAccepted: isAccepted
        });
        _this.hideLoader();
      }, false);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.abortController.abort();
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;
      this.getPreviewStatus().then(this.checkPreviewStatusCode).then(function (isAccepted) {
        var iframeUrl = isAccepted ? _this2.previewUrl : window.Routing.generate('ibexa.site_context.no_preview_available', {
          theme: _this2.fallbackTheme
        });
        _this2.initIframe(iframeUrl, {
          isAccepted: isAccepted
        });
      })["catch"](function (error) {
        if (error.name === 'AbortError') {
          return;
        }
      });
    }
  }], [{
    key: "getStatusRangeCodes",
    value: function getStatusRangeCodes(statusGroup) {
      switch (statusGroup) {
        case STATUS_GROUPS.INFORMATIONAL:
          return {
            start: 100,
            end: 199
          };
        case STATUS_GROUPS.SUCCESSFUL:
          return {
            start: 200,
            end: 299
          };
        case STATUS_GROUPS.REDIRECTION:
          return {
            start: 300,
            end: 399
          };
        case STATUS_GROUPS.CLIENT_ERROR:
          return {
            start: 400,
            end: 499
          };
        case STATUS_GROUPS.SERVER_ERROR:
          return {
            start: 500,
            end: 599
          };
        default:
          throw Error("status group not implemented: ".concat(statusGroup));
      }
    }
  }]);
}();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/site-context/src/bundle/Resources/public/js/admin.location.preview.view.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/add.translation.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/create.content.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/edit.content.js"), __webpack_exec__("./vendor/ibexa/content-tree/src/bundle/Resources/public/js/hide.reveal.content.js"));
/******/ }
]);