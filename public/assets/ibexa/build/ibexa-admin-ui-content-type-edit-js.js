(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-content-type-edit-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var togglers = doc.querySelectorAll('.ibexa-card__body-display-toggler');
  var toggleFieldTypeView = function toggleFieldTypeView(event) {
    event.preventDefault();
    event.currentTarget.closest('.ibexa-card--toggle-group').classList.toggle('ibexa-card--collapsed');
  };
  var attachToggleField = function attachToggleField(btn) {
    return btn.addEventListener('click', toggleFieldTypeView);
  };
  togglers.forEach(function (btn) {
    return attachToggleField(btn);
  });
  doc.body.addEventListener('ibexa-initialize-card-toggle-group', function (event) {
    return attachToggleField(event.detail.button);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.edit.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.edit.js ***!
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
(function (global, doc, ibexa, Routing, Translator, bootstrap) {
  var SELECTOR_INPUTS_TO_VALIDATE = '.ibexa-input[required]:not([disabled]):not([hidden])';
  var SELETOR_FIELD_INPUTS = '.ibexa-input-text-wrapper:not(.ibexa-input-text-wrapper--search) > input.ibexa-input--text:not([hidden]):not(ibexa-input-text-wrapper--search)';
  var TIMEOUT_REMOVE_HIGHLIGHT = 3000;
  var sourceContainer = null;
  var currentDraggedItem = null;
  var isEditFormValid = false;
  var editForm = doc.querySelector('.ibexa-content-type-edit-form');
  var inputsToValidate = editForm.querySelectorAll(SELECTOR_INPUTS_TO_VALIDATE);
  var draggableGroups = [];
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var sectionsNode = doc.querySelector('.ibexa-content-type-edit__sections');
  var filterFieldInput = doc.querySelector('.ibexa-available-field-types__sidebar-filter');
  var popupMenuElement = sectionsNode.querySelector('.ibexa-popup-menu');
  var addGroupTriggerBtn = sectionsNode.querySelector('.ibexa-content-type-edit__add-field-definitions-group-btn');
  var fieldDefinitionsGroups = doc.querySelectorAll('.ibexa-collapse--field-definitions-group');
  var noFieldsAddedError = Translator.trans(/*@Desc("You have to add at least one field definition")*/'content_type.edit.error.no_added_fields_definition', {}, 'ibexa_content_type');
  var endpoints = {
    add: {
      actionName: 'add_field_definition',
      method: 'POST',
      contentType: 'application/vnd.ibexa.api.ContentTypeFieldDefinitionCreate+json'
    },
    remove: {
      actionName: 'remove_field_definition',
      method: 'DELETE',
      contentType: 'application/vnd.ibexa.api.ContentTypeFieldDefinitionDelete+json'
    },
    reorder: {
      actionName: 'reorder_field_definitions',
      method: 'PUT',
      contentType: 'application/vnd.ibexa.api.ContentTypeFieldDefinitionReorder+json'
    }
  };
  new ibexa.core.PopupMenu({
    popupMenuElement: popupMenuElement,
    triggerElement: addGroupTriggerBtn,
    onItemClick: function onItemClick(event) {
      var relatedCollapseSelector = event.currentTarget.dataset.relatedCollapseSelector;
      doc.querySelector(relatedCollapseSelector).classList.remove('ibexa-collapse--hidden');
      afterChangeGroup();
      toggleAddGroupTriggerBtnState();
    }
  });
  var toggleAddGroupTriggerBtnState = function toggleAddGroupTriggerBtnState() {
    var addGroupBtns = doc.querySelectorAll('.ibexa-content-type-edit__add-field-definitions-group [data-related-collapse-selector]');
    var areAllAddGroupBtnsDisabled = _toConsumableArray(addGroupBtns).every(function (btn) {
      return btn.classList.contains('ibexa-popup-menu__item-content--disabled');
    });
    var isAddGroupTriggerBtnDisabled = addGroupTriggerBtn.dataset.isDisabled == 'true';
    addGroupTriggerBtn.disabled = isAddGroupTriggerBtnDisabled || areAllAddGroupBtnsDisabled;
  };
  var searchField = function searchField(event) {
    var fieldFilterQueryLowerCase = event.currentTarget.value.toLowerCase();
    var fields = doc.querySelectorAll('.ibexa-available-field-types__list .ibexa-available-field-type');
    fields.forEach(function (field) {
      var fieldNameNode = field.querySelector('.ibexa-available-field-type__label');
      var fieldNameLowerCase = fieldNameNode.innerText.toLowerCase();
      var isFieldHidden = !fieldNameLowerCase.includes(fieldFilterQueryLowerCase);
      field.classList.toggle('ibexa-available-field-type--hidden', isFieldHidden);
    });
  };
  var removeDragPlaceholders = function removeDragPlaceholders() {
    var placeholderNodes = doc.querySelectorAll('.ibexa-field-definitions-placeholder');
    placeholderNodes.forEach(function (placeholderNode) {
      return placeholderNode.remove();
    });
  };
  var createFieldDefinitionNode = function createFieldDefinitionNode(fieldNode, _ref) {
    var targetContainer = _ref.targetContainer,
      draggedItemPosition = _ref.draggedItemPosition;
    var targetPlace = '';
    var items = targetContainer.querySelectorAll('.ibexa-collapse');
    if (typeof fieldNode === 'string') {
      var container = doc.createElement('div');
      container.insertAdjacentHTML('beforeend', fieldNode);
      fieldNode = container.querySelector('.ibexa-collapse');
    }
    if (draggedItemPosition === -1) {
      targetPlace = targetContainer.lastChild;
    } else if (draggedItemPosition === 0) {
      targetPlace = targetContainer.firstChild;
    } else {
      targetPlace = _toConsumableArray(items).find(function (item, index) {
        return index === draggedItemPosition;
      });
    }
    fieldNode.classList.add('ibexa-collapse--field-definition-highlighted');
    targetContainer.insertBefore(fieldNode, targetPlace);
    return fieldNode;
  };
  var attachFieldDefinitionNodeEvents = function attachFieldDefinitionNodeEvents(fieldNode, _ref2) {
    var targetContainer = _ref2.targetContainer;
    var fieldGroupInput = fieldNode.querySelector('.ibexa-input--field-group');
    var fieldDefinitionsInputs = fieldNode.querySelectorAll(SELETOR_FIELD_INPUTS);
    var removeFieldBtns = fieldNode.querySelectorAll('.ibexa-collapse__extra-action-button--remove-field-definitions');
    var fieldInputsToValidate = fieldNode.querySelectorAll(SELECTOR_INPUTS_TO_VALIDATE);
    var groupCollapseNode = targetContainer.closest('.ibexa-collapse--field-definitions-group');
    var fieldsGroupId = groupCollapseNode.dataset.fieldsGroupId;
    fieldInputsToValidate.forEach(attachValidateEvents);
    fieldGroupInput.value = fieldsGroupId;
    removeFieldBtns.forEach(function (removeFieldBtn) {
      removeFieldBtn.addEventListener('click', removeField, false);
    });
    if (navigator.userAgent.includes('Firefox')) {
      fieldDefinitionsInputs.forEach(function (fieldDefinitionsInput) {
        fieldDefinitionsInput.addEventListener('mouseenter', mouseEnterInputHandlerForFirefox, false);
        fieldDefinitionsInput.addEventListener('mouseleave', mouseLeaveInputHandlerForFirefox, false);
      });
    }
    var dropdowns = fieldNode.querySelectorAll('.ibexa-dropdown');
    dropdowns.forEach(function (dropdownContainer) {
      var dropdownAlreadyInitialized = !!ibexa.helpers.objectInstances.getInstance(dropdownContainer);
      if (dropdownAlreadyInitialized) {
        return;
      }
      var dropdown = new ibexa.core.Dropdown({
        container: dropdownContainer
      });
      dropdown.init();
    });
    draggableGroups.forEach(function (group) {
      group.reinit();
    });
  };
  var dispatchInsertFieldDefinitionNode = function dispatchInsertFieldDefinitionNode(fieldNode) {
    doc.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
    doc.body.dispatchEvent(new CustomEvent('ibexa-drop-field-definition', {
      detail: {
        nodes: [fieldNode]
      }
    }));
    doc.body.dispatchEvent(new CustomEvent('ibexa-autogenerate-identifier:init', {
      detail: {
        fieldNode: fieldNode,
        shouldAutogenerateValue: true
      }
    }));
  };
  var insertFieldDefinitionNode = function insertFieldDefinitionNode(fieldNode, _ref3) {
    var targetContainer = _ref3.targetContainer,
      draggedItemPosition = _ref3.draggedItemPosition;
    var fieldDefinitionNode = createFieldDefinitionNode(fieldNode, {
      targetContainer: targetContainer,
      draggedItemPosition: draggedItemPosition
    });
    removeDragPlaceholders();
    attachFieldDefinitionNodeEvents(fieldDefinitionNode, {
      targetContainer: targetContainer
    });
    dispatchInsertFieldDefinitionNode(fieldDefinitionNode);
    return fieldDefinitionNode;
  };
  var generateRequest = function generateRequest(action, bodyData, languageCode) {
    var _endpoints$action = endpoints[action],
      actionName = _endpoints$action.actionName,
      method = _endpoints$action.method,
      contentType = _endpoints$action.contentType;
    var _sectionsNode$dataset = sectionsNode.dataset,
      contentTypeGroupId = _sectionsNode$dataset.contentTypeGroupId,
      contentTypeId = _sectionsNode$dataset.contentTypeId;
    var endpointURL = "/api/ibexa/v2/contenttypegroup/".concat(contentTypeGroupId, "/contenttype/").concat(contentTypeId, "/").concat(actionName);
    if (languageCode) {
      endpointURL += "/".concat(languageCode);
    }
    return new Request(endpointURL, {
      method: method,
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/html',
        'Content-Type': contentType,
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      body: JSON.stringify(bodyData)
    });
  };
  var afterChangeGroup = function afterChangeGroup() {
    var groups = doc.querySelectorAll('.ibexa-collapse--field-definitions-group');
    var itemsAction = doc.querySelectorAll('.ibexa-content-type-edit__add-field-definitions-group .ibexa-popup-menu__item-content');
    groups.forEach(function (group) {
      var groupFieldsDefinitionCount = group.querySelectorAll('.ibexa-collapse--field-definition').length;
      var emptyGroupPlaceholder = group.querySelector('.ibexa-field-definitions-empty-group');
      var removeBtn = group.querySelector('.ibexa-collapse__extra-action-button--remove-field-definitions-group');
      emptyGroupPlaceholder.classList.toggle('ibexa-field-definitions-empty-group--hidden', groupFieldsDefinitionCount !== 0);
      removeBtn.disabled = groupFieldsDefinitionCount > 0;
    });
    itemsAction.forEach(function (itemAction) {
      var relatedCollapseSelector = itemAction.dataset.relatedCollapseSelector;
      var isGroupHidden = doc.querySelector(relatedCollapseSelector).classList.contains('ibexa-collapse--hidden');
      itemAction.classList.toggle('ibexa-popup-menu__item-content--disabled', !isGroupHidden);
    });
    doc.querySelectorAll('.ibexa-collapse--field-definition').forEach(function (fieldDefinition, index) {
      var positionInput = fieldDefinition.querySelector('.ibexa-input--position');
      if (positionInput) {
        fieldDefinition.querySelector('.ibexa-input--position').value = index;
      }
    });
  };
  var addField = function addField(_ref4) {
    var targetContainer = _ref4.targetContainer,
      draggedItemPosition = _ref4.draggedItemPosition,
      fieldRendered = _ref4.fieldRendered;
    if (!sourceContainer.classList.contains('ibexa-available-field-types__list')) {
      var insertedField = insertFieldDefinitionNode(currentDraggedItem, {
        targetContainer: targetContainer,
        draggedItemPosition: draggedItemPosition
      });
      insertedField.classList.add('ibexa-collapse--field-definition-loading');
      afterChangeGroup();
      global.setTimeout(function () {
        insertedField.classList.remove('ibexa-collapse--field-definition-loading');
        removeHighlight(insertedField);
      }, TIMEOUT_REMOVE_HIGHLIGHT);
      return;
    }
    var languageCode = sectionsNode.dataset.languageCode;
    var itemIdentifier = currentDraggedItem.dataset.itemIdentifier;
    var fieldsGroupId = targetContainer.closest('.ibexa-collapse--field-definitions-group').dataset.fieldsGroupId;
    var loadingField = createFieldDefinitionNode(fieldRendered, {
      targetContainer: targetContainer,
      draggedItemPosition: draggedItemPosition
    });
    var addedField = loadingField;
    var bodyData = {
      FieldDefinitionCreate: {
        fieldTypeIdentifier: itemIdentifier,
        fieldGroupIdentifier: fieldsGroupId
      }
    };
    if (draggedItemPosition !== -1) {
      bodyData.FieldDefinitionCreate.position = draggedItemPosition;
    }
    global.setTimeout(function () {
      removeHighlight(addedField);
    }, TIMEOUT_REMOVE_HIGHLIGHT);
    fetch(generateRequest('add', bodyData, languageCode)).then(ibexa.helpers.request.getTextFromResponse).then(function (response) {
      var shouldRemoveHighlight = loadingField.classList.contains('ibexa-collapse--field-definition-highlight-marked-to-remove');
      var insertedField = insertFieldDefinitionNode(response, {
        targetContainer: targetContainer,
        draggedItemPosition: draggedItemPosition
      });
      addedField = insertedField;
      if (shouldRemoveHighlight) {
        insertedField.classList.remove('ibexa-collapse--field-definition-highlighted');
      }
      loadingField === null || loadingField === void 0 || loadingField.remove();
      afterChangeGroup();
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var reorderFields = function reorderFields(_ref5) {
    var targetContainer = _ref5.targetContainer,
      draggedItemPosition = _ref5.draggedItemPosition;
    var reorderedField = createFieldDefinitionNode(currentDraggedItem, {
      targetContainer: targetContainer,
      draggedItemPosition: draggedItemPosition
    });
    removeDragPlaceholders();
    reorderedField.classList.add('ibexa-collapse--field-definition-highlighted');
    reorderedField.classList.add('ibexa-collapse--field-definition-loading');
    var fieldsOrder = _toConsumableArray(doc.querySelectorAll('.ibexa-collapse--field-definition')).map(function (fieldDefinition) {
      return fieldDefinition.dataset.fieldDefinitionIdentifier;
    });
    var bodyData = {
      FieldDefinitionReorder: {
        fieldDefinitionIdentifiers: fieldsOrder
      }
    };
    var request = generateRequest('reorder', bodyData);
    global.setTimeout(function () {
      removeHighlight(reorderedField);
    }, TIMEOUT_REMOVE_HIGHLIGHT);
    fetch(request).then(ibexa.helpers.request.getTextFromResponse).then(function () {
      reorderedField.classList.remove('ibexa-collapse--field-definition-loading');
      afterChangeGroup();
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var removeFieldsGroup = function removeFieldsGroup(event) {
    if (event.currentTarget.hasAttribute('disabled')) {
      return;
    }
    var collapseNode = event.currentTarget.closest('.ibexa-collapse');
    var fieldsToDelete = _toConsumableArray(collapseNode.querySelectorAll('.ibexa-collapse--field-definition')).map(function (fieldDefinition) {
      return fieldDefinition.dataset.fieldDefinitionIdentifier;
    });
    var bodyData = {
      FieldDefinitionDelete: {
        fieldDefinitionIdentifiers: fieldsToDelete
      }
    };
    fetch(generateRequest('remove', bodyData)).then(ibexa.helpers.request.getTextFromResponse).then(function () {
      collapseNode.classList.add('ibexa-collapse--hidden');
      collapseNode.querySelectorAll('.ibexa-collapse--field-definition').forEach(function (fieldDefinition) {
        fieldDefinition.remove();
      });
      afterChangeGroup();
      toggleAddGroupTriggerBtnState();
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };
  var removeField = function removeField(event) {
    var collapseNode = event.currentTarget.closest('.ibexa-collapse');
    var itemToDeleteIdentifiers = collapseNode.dataset.fieldDefinitionIdentifier;
    var bodyData = {
      FieldDefinitionDelete: {
        fieldDefinitionIdentifiers: [itemToDeleteIdentifiers]
      }
    };
    collapseNode.classList.add('ibexa-collapse--field-definition-removing');
    bootstrap.Collapse.getOrCreateInstance(collapseNode.querySelector('.ibexa-collapse__body'), {
      toggle: false
    }).hide();
    event.currentTarget.blur();
    fetch(generateRequest('remove', bodyData)).then(ibexa.helpers.request.getTextFromResponse).then(function () {
      collapseNode.classList.add('ibexa-collapse--field-definition-remove-animation');
      collapseNode.addEventListener('animationend', function () {
        collapseNode.remove();
        afterChangeGroup();
      });
    })["catch"](function (error) {
      collapseNode.classList.remove('ibexa-collapse--field-definition-removing');
      ibexa.helpers.notification.showErrorNotification(error);
    });
  };
  var toggleDraggableForFirefox = function toggleDraggableForFirefox(input, isMouseEnterEvent) {
    var fieldDefinitionNode = input.closest('.ibexa-collapse--field-definition');
    var collapseBodyNode = fieldDefinitionNode.querySelector('.ibexa-collapse__body');
    fieldDefinitionNode.setAttribute('draggable', !isMouseEnterEvent);
    collapseBodyNode.setAttribute('draggable', !isMouseEnterEvent);
  };
  var mouseEnterInputHandlerForFirefox = function mouseEnterInputHandlerForFirefox(_ref6) {
    var currentTarget = _ref6.currentTarget,
      type = _ref6.type;
    toggleDraggableForFirefox(currentTarget, type === 'mouseenter');
  };
  var mouseLeaveInputHandlerForFirefox = function mouseLeaveInputHandlerForFirefox(_ref7) {
    var currentTarget = _ref7.currentTarget,
      type = _ref7.type;
    toggleDraggableForFirefox(currentTarget, type === 'mouseenter');
  };
  var validateInput = function validateInput(input) {
    var isInputEmpty = !input.value;
    var field = input.closest('.form-group');
    var labelNode = field.querySelector('.ibexa-label');
    var errorNode = field.querySelector('.ibexa-form-error');
    input.classList.toggle('is-invalid', isInputEmpty);
    if (errorNode) {
      errorNode.innerHTML = '';
      if (isInputEmpty) {
        var fieldName = labelNode.innerHTML;
        var errorMessage = ibexa.errors.emptyField.replace('{fieldName}', fieldName);
        var formattedError = ibexa.helpers.formValidation.formatErrorLine(errorMessage);
        errorNode.append(formattedError);
      }
    }
    isEditFormValid = isEditFormValid && !isInputEmpty;
  };
  var validateForm = function validateForm() {
    var fieldDefinitionsStatuses = {};
    isEditFormValid = true;
    inputsToValidate = editForm.querySelectorAll(SELECTOR_INPUTS_TO_VALIDATE);
    inputsToValidate.forEach(function (input) {
      var fieldDefinition = input.closest('.ibexa-collapse--field-definition');
      if (fieldDefinition) {
        var fieldDefinitionIdentifier = fieldDefinition.dataset.fieldDefinitionIdentifier;
        var isInputEmpty = !input.value;
        if (!fieldDefinitionsStatuses[fieldDefinitionIdentifier]) {
          fieldDefinitionsStatuses[fieldDefinitionIdentifier] = [];
        }
        fieldDefinitionsStatuses[fieldDefinitionIdentifier].push(isInputEmpty);
      }
      validateInput(input);
    });
    Object.entries(fieldDefinitionsStatuses).forEach(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
        fieldDefinitionIdentifier = _ref9[0],
        inputsStatus = _ref9[1];
      var isFieldDefinitionValid = inputsStatus.every(function (hasError) {
        return !hasError;
      });
      var fieldDefinitionNode = doc.querySelector("[data-field-definition-identifier=\"".concat(fieldDefinitionIdentifier, "\"]"));
      fieldDefinitionNode.classList.toggle('is-invalid', !isFieldDefinitionValid);
    });
  };
  var attachValidateEvents = function attachValidateEvents(input) {
    input.addEventListener('change', validateForm, false);
    input.addEventListener('blur', validateForm, false);
    input.addEventListener('input', validateForm, false);
  };
  var scrollToInvalidInput = function scrollToInvalidInput() {
    var firstInvalidInput = editForm.querySelector('.ibexa-input.is-invalid');
    var fieldDefinition = firstInvalidInput.closest('.ibexa-collapse--field-definition');
    var scrollToNode = fieldDefinition !== null && fieldDefinition !== void 0 ? fieldDefinition : firstInvalidInput;
    scrollToNode.scrollIntoView({
      behavior: 'smooth'
    });
  };
  var setActiveGroup = function setActiveGroup(group) {
    var currentActiveGroup = doc.querySelector('.ibexa-collapse--field-definitions-group.ibexa-collapse--active-field-definitions-group');
    currentActiveGroup === null || currentActiveGroup === void 0 || currentActiveGroup.classList.remove('ibexa-collapse--active-field-definitions-group');
    group.classList.add('ibexa-collapse--active-field-definitions-group');
  };
  var removeHighlight = function removeHighlight(field) {
    var fieldIsStillLoading = field.classList.contains('ibexa-collapse--field-definition-loading');
    if (fieldIsStillLoading) {
      field.classList.add('ibexa-collapse--field-definition-highlight-marked-to-remove');
    } else {
      field.classList.remove('ibexa-collapse--field-definition-highlighted');
    }
  };
  var FieldDefinitionDraggable = /*#__PURE__*/function (_ibexa$core$Draggable) {
    "use strict";

    function FieldDefinitionDraggable(config) {
      var _this;
      _classCallCheck(this, FieldDefinitionDraggable);
      _this = _callSuper(this, FieldDefinitionDraggable, [config]);
      _this.emptyContainer = _this.itemsContainer.querySelector('.ibexa-field-definitions-empty-group');
      _this.getPlaceholderNode = _this.getPlaceholderNode.bind(_this);
      _this.getPlaceholderPositionTop = _this.getPlaceholderPositionTop.bind(_this);
      return _this;
    }
    _inherits(FieldDefinitionDraggable, _ibexa$core$Draggable);
    return _createClass(FieldDefinitionDraggable, [{
      key: "onDrop",
      value: function onDrop(event) {
        var targetContainer = event.currentTarget;
        var dragContainerItems = targetContainer.querySelectorAll('.ibexa-collapse--field-definition, .ibexa-field-definitions-placeholder');
        var targetContainerGroup = targetContainer.closest('.ibexa-collapse--field-definitions-group');
        var targetContainerList = targetContainerGroup.closest('.ibexa-content-type-edit__field-definitions-group-list');
        var fieldTemplate = targetContainerList.dataset.template;
        var fieldRendered = fieldTemplate.replace('{{ type }}', currentDraggedItem.dataset.itemIdentifier);
        var draggedItemPosition = _toConsumableArray(dragContainerItems).findIndex(function (item, index, array) {
          return item.classList.contains('ibexa-field-definitions-placeholder') && index < array.length - 1;
        });
        if (draggedItemPosition === -1) {
          draggedItemPosition = targetContainer.querySelectorAll('.ibexa-collapse--field-definition').length;
        }
        if (sourceContainer.isEqualNode(targetContainer)) {
          reorderFields({
            targetContainer: targetContainer,
            draggedItemPosition: draggedItemPosition
          });
        } else {
          addField({
            targetContainer: targetContainer,
            draggedItemPosition: draggedItemPosition,
            fieldRendered: fieldRendered
          });
        }
        setActiveGroup(targetContainerGroup);
        removeDragPlaceholders();
      }
    }, {
      key: "getPlaceholderNode",
      value: function getPlaceholderNode(event) {
        var draggableItem = _superPropGet(FieldDefinitionDraggable, "getPlaceholderNode", this, 3)([event]);
        if (draggableItem) {
          return draggableItem;
        }
        if (this.emptyContainer.contains(event.target)) {
          return this.emptyContainer;
        }
        return null;
      }
    }, {
      key: "onDragStart",
      value: function onDragStart(event) {
        _superPropGet(FieldDefinitionDraggable, "onDragStart", this, 3)([event]);
        currentDraggedItem = event.currentTarget;
        sourceContainer = currentDraggedItem.parentNode;
      }
    }, {
      key: "onDragOver",
      value: function onDragOver(event) {
        var isDragSuccessful = _superPropGet(FieldDefinitionDraggable, "onDragOver", this, 3)([event]);
        if (!isDragSuccessful) {
          return false;
        }
        var item = this.getPlaceholderNode(event);
        if (item.isSameNode(this.emptyContainer)) {
          this.emptyContainer.classList.toggle('ibexa-field-definitions-empty-group--hidden');
        }
        return true;
      }
    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        currentDraggedItem.style.removeProperty('display');
      }
    }, {
      key: "init",
      value: function init() {
        var _this2 = this;
        _superPropGet(FieldDefinitionDraggable, "init", this, 3)([]);
        doc.body.addEventListener('dragover', function (event) {
          if (!_this2.itemsContainer.contains(event.target)) {
            var groupFieldsDefinitionCount = _this2.itemsContainer.querySelectorAll('.ibexa-collapse--field-definition').length;
            _this2.emptyContainer.classList.toggle('ibexa-field-definitions-empty-group--hidden', groupFieldsDefinitionCount !== 0);
          } else {
            event.preventDefault();
          }
        });
      }
    }]);
  }(ibexa.core.Draggable);
  filterFieldInput.addEventListener('keyup', searchField, false);
  filterFieldInput.addEventListener('input', searchField, false);
  var firstFieldDefinitionsGroupContent = doc.querySelector('.ibexa-content-type-edit__section .ibexa-field-definitions-group-content');
  if (firstFieldDefinitionsGroupContent) {
    firstFieldDefinitionsGroupContent.classList.add('ibexa-collapse--active-field-definitions-group');
  }
  if (navigator.userAgent.includes('Firefox')) {
    doc.querySelectorAll(".ibexa-collapse--field-definition ".concat(SELETOR_FIELD_INPUTS)).forEach(function (inputField) {
      inputField.addEventListener('mouseenter', mouseEnterInputHandlerForFirefox, false);
      inputField.addEventListener('mouseleave', mouseLeaveInputHandlerForFirefox, false);
    });
  }
  doc.querySelectorAll('.ibexa-collapse__extra-action-button--remove-field-definitions').forEach(function (removeFieldDefinitionsBtn) {
    removeFieldDefinitionsBtn.addEventListener('click', removeField, false);
  });
  doc.querySelectorAll('.ibexa-collapse__extra-action-button--remove-field-definitions-group').forEach(function (removeFieldDefinitionsGroupBtn) {
    var groupFieldsDefinitionCount = removeFieldDefinitionsGroupBtn.closest('.ibexa-collapse--field-definitions-group').querySelectorAll('.ibexa-collapse--field-definition').length;
    removeFieldDefinitionsGroupBtn.toggleAttribute('disabled', groupFieldsDefinitionCount > 0);
    removeFieldDefinitionsGroupBtn.addEventListener('click', removeFieldsGroup, false);
  });
  doc.querySelectorAll('.ibexa-available-field-types__list .ibexa-available-field-type').forEach(function (availableField) {
    availableField.addEventListener('dragstart', function (event) {
      currentDraggedItem = event.currentTarget;
      sourceContainer = currentDraggedItem.parentNode;
      currentDraggedItem.classList.add('ibexa-available-field-type--is-dragging-out');
    }, false);
    availableField.addEventListener('dragend', function () {
      currentDraggedItem.classList.remove('ibexa-available-field-type--is-dragging-out');
    }, false);
    availableField.addEventListener('click', function (event) {
      var targetContainer = doc.querySelector('.ibexa-collapse--field-definitions-group.ibexa-collapse--active-field-definitions-group .ibexa-content-type-edit__field-definition-drop-zone');
      if (!targetContainer) {
        return;
      }
      currentDraggedItem = event.currentTarget;
      sourceContainer = currentDraggedItem.parentNode;
      var draggedItemPosition = targetContainer.querySelectorAll('.ibexa-collapse--field-definition').length;
      var targetContainerGroup = targetContainer.closest('.ibexa-collapse--field-definitions-group');
      var targetContainerList = targetContainerGroup.closest('.ibexa-content-type-edit__field-definitions-group-list');
      var fieldTemplate = targetContainerList.dataset.template;
      var fieldRendered = fieldTemplate.replace('{{ type }}', currentDraggedItem.dataset.itemIdentifier);
      targetContainer.querySelector('.ibexa-field-definitions-empty-group').classList.add('ibexa-field-definitions-empty-group--hidden');
      addField({
        targetContainer: targetContainer,
        draggedItemPosition: draggedItemPosition,
        fieldRendered: fieldRendered
      });
    }, false);
  });
  doc.querySelectorAll('.ibexa-content-type-edit__field-definition-drop-zone').forEach(function (collapseContentNode) {
    var draggable = new FieldDefinitionDraggable({
      itemsContainer: collapseContentNode,
      selectorItem: '.ibexa-collapse--field-definition',
      selectorPlaceholder: '.ibexa-field-definitions-placeholder',
      selectorPreventDrag: '.ibexa-collapse__body'
    });
    draggable.init();
    draggableGroups.push(draggable);
  });
  fieldDefinitionsGroups.forEach(function (group) {
    return group.addEventListener('click', function () {
      return setActiveGroup(group);
    }, false);
  });
  inputsToValidate.forEach(attachValidateEvents);
  editForm.addEventListener('submit', function (event) {
    var submitter = event.submitter;
    if (!(submitter !== null && submitter !== void 0 && submitter.hasAttribute('formnovalidate'))) {
      var fieldDefinitionsCount = doc.querySelectorAll('.ibexa-collapse--field-definition').length;
      validateForm();
      if (isEditFormValid) {
        if (!fieldDefinitionsCount) {
          event.preventDefault();
          ibexa.helpers.notification.showErrorNotification(noFieldsAddedError);
        }
      } else {
        event.preventDefault();
        scrollToInvalidInput();
      }
    }
  }, false);
  toggleAddGroupTriggerBtnState();
})(window, window.document, window.ibexa, window.Routing, window.Translator, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js":
/*!*********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js ***!
  \*********************************************************************************************************************/
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
(function (global, doc, ibexa, React, ReactDOM) {
  var SELECTOR_RESET_STARTING_LOCATION_BTN = '.ibexa-tag__remove-btn';
  var defaultLocationContainers = doc.querySelectorAll('.ibexa-default-location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;
  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };
  var renderTagItem = function renderTagItem(container, _ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      item = _ref2[0];
    var template = container.dataset.template.replaceAll('{{ content }}', item.name);
    container.innerHTML = template;
    var deleteBtn = container.querySelector(SELECTOR_RESET_STARTING_LOCATION_BTN);
    ibexa.helpers.ellipsis.middle.parseAll();
    deleteBtn.addEventListener('click', resetStartingLocation, false);
  };
  var onConfirm = function onConfirm(btn, items) {
    closeUDW();
    var locationId = items[0].id;
    var container = btn.closest('.ibexa-default-location');
    var pathSelector = container.querySelector('.ibexa-default-location__path-selector');
    container.querySelector(btn.dataset.relationRootInputSelector).value = locationId;
    pathSelector.classList.add('ibexa-default-location__path-selector--filled');
    ibexa.helpers.tagViewSelect.buildItemsFromUDWResponse(items, function (item) {
      return item.pathString;
    }, renderTagItem.bind(null, container.querySelector('.ibexa-default-location__selected-path')));
  };
  var onCancel = function onCancel() {
    return closeUDW();
  };
  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm.bind(null, event.currentTarget),
      onCancel: onCancel,
      title: event.currentTarget.dataset.universaldiscoveryTitle,
      multiple: false
    }, config)));
  };
  var resetStartingLocation = function resetStartingLocation(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var container = currentTarget.closest('.ibexa-default-location');
    var udwBtn = container.querySelector('.ibexa-btn--udw-relation-default-location');
    var pathSelector = container.querySelector('.ibexa-default-location__path-selector');
    var relationRootInputSelector = udwBtn.dataset.relationRootInputSelector;
    container.querySelector(relationRootInputSelector).value = '';
    container.querySelector('.ibexa-default-location__selected-path').innerHTML = '';
    pathSelector.classList.remove('ibexa-default-location__path-selector--filled');
  };
  var attachEvents = function attachEvents(container) {
    var udwBtn = container.querySelector('.ibexa-btn--udw-relation-default-location');
    var deleteBtn = container.querySelector(SELECTOR_RESET_STARTING_LOCATION_BTN);
    var choices = container.querySelectorAll('input[type="radio"]');
    udwBtn.addEventListener('click', openUDW, false);
    deleteBtn === null || deleteBtn === void 0 || deleteBtn.addEventListener('click', resetStartingLocation, false);
    choices.forEach(function (choice) {
      return choice.addEventListener('change', toggleDisabledState.bind(null, container), false);
    });
  };
  var toggleDisabledState = function toggleDisabledState(container) {
    var locationBtn = container.querySelector('.ibexa-btn--udw-relation-default-location');
    var deleteBtn = container.querySelector(SELECTOR_RESET_STARTING_LOCATION_BTN);
    var isDisabled = !container.querySelector('input[value="1"]').checked;
    locationBtn.classList.toggle('disabled', isDisabled);
    deleteBtn === null || deleteBtn === void 0 || deleteBtn.classList.toggle('disabled', isDisabled);
  };
  doc.body.addEventListener('ibexa-drop-field-definition', function (event) {
    var nodes = event.detail.nodes;
    nodes.forEach(function (node) {
      var defaultLocationContainer = node.querySelector('.ibexa-default-location');
      if (!defaultLocationContainer) {
        return;
      }
      attachEvents(defaultLocationContainer);
      toggleDisabledState(defaultLocationContainer);
    });
  }, false);
  defaultLocationContainers.forEach(function (defaultLocationContainer) {
    attachEvents(defaultLocationContainer);
    toggleDisabledState(defaultLocationContainer);
    ibexa.helpers.ellipsis.middle.parseAll();
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var SELECTOR_TEMPLATE = '.ezselection-settings-option-value-prototype';
  var SELECTOR_OPTION = '.ezselection-settings-option-value';
  var SELECTOR_OPTIONS_LIST = '.ezselection-settings-option-list';
  var SELECTOR_BTN_REMOVE = '.ezselection-settings-option-remove';
  var SELECTOR_BTN_ADD = '.ezselection-settings-option-add';
  var NUMBER_PLACEHOLDER = /__number__/g;
  var initField = function initField(container) {
    var findCheckedOptions = function findCheckedOptions() {
      return container.querySelectorAll('.ezselection-settings-option-checkbox:checked');
    };
    var toggleDisableState = function toggleDisableState() {
      var disabledState = !!findCheckedOptions().length;
      var methodName = disabledState ? 'removeAttribute' : 'setAttribute';
      container.querySelector(SELECTOR_BTN_REMOVE)[methodName]('disabled', disabledState);
    };
    var addOption = function addOption() {
      var template = container.querySelector(SELECTOR_TEMPLATE).innerHTML;
      var optionsList = container.querySelector(SELECTOR_OPTIONS_LIST);
      var nextId = parseInt(optionsList.dataset.nextOptionId, 10);
      optionsList.dataset.nextOptionId = nextId + 1;
      optionsList.insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, nextId));
    };
    var removeOptions = function removeOptions() {
      findCheckedOptions().forEach(function (element) {
        return element.closest(SELECTOR_OPTION).remove();
      });
      toggleDisableState();
    };
    container.querySelector(SELECTOR_OPTIONS_LIST).addEventListener('click', toggleDisableState, false);
    container.querySelector(SELECTOR_BTN_ADD).addEventListener('click', addOption, false);
    container.querySelector(SELECTOR_BTN_REMOVE).addEventListener('click', removeOptions, false);
  };
  doc.querySelectorAll('.ezselection-settings.options').forEach(initField);
  doc.body.addEventListener('ibexa-drop-field-definition', function (event) {
    var nodes = event.detail.nodes;
    nodes.forEach(function (node) {
      var isSelectionFieldType = node.querySelector(SELECTOR_OPTIONS_LIST);
      if (isSelectionFieldType) {
        initField(node);
      }
    });
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/fieldtype-matrix/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js":
/*!**********************************************************************************************************!*\
  !*** ./vendor/ibexa/fieldtype-matrix/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js ***!
  \**********************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var SELECTOR_SETTINGS_COLUMNS = '.ibexa-matrix-settings__columns';
  var SELECTOR_COLUMN = '.ibexa-matrix-settings__column';
  var SELECTOR_COLUMNS_CONTAINER = '.ibexa-table__body';
  var SELECTOR_COLUMN_CHECKBOX = '.ibexa-matrix-settings__column-checkbox';
  var SELECTOR_ADD_COLUMN = '.ibexa-btn--add-column';
  var SELECTOR_REMOVE_COLUMN = '.ibexa-btn--remove-column';
  var SELECTOR_TEMPLATE = '.ibexa-matrix-settings__column-template';
  var NUMBER_PLACEHOLDER = /__number__/g;
  var getNextIndex = function getNextIndex(parentNode) {
    return parentNode.dataset.nextIndex++;
  };
  var findCheckedColumns = function findCheckedColumns(parentNode) {
    return parentNode.querySelectorAll("".concat(SELECTOR_COLUMN_CHECKBOX, ":checked"));
  };
  var updateDisabledState = function updateDisabledState(parentNode) {
    var isEnabled = findCheckedColumns(parentNode).length > 0;
    var methodName = isEnabled ? 'removeAttribute' : 'setAttribute';
    parentNode.querySelectorAll(SELECTOR_REMOVE_COLUMN).forEach(function (btn) {
      return btn[methodName]('disabled', !isEnabled);
    });
  };
  var addItem = function addItem(event) {
    var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
    var template = settingsNode.querySelector(SELECTOR_TEMPLATE).innerHTML;
    var node = settingsNode.querySelector(SELECTOR_COLUMNS_CONTAINER);
    var table = settingsNode.querySelector('.ibexa-table');
    var tableHead = table.querySelector('.ibexa-table thead');
    var emptyPlaceholder = table.querySelector('.ibexa-table__empty-table-cell');
    if (emptyPlaceholder) {
      emptyPlaceholder.closest('.ibexa-table__row').remove();
      tableHead.hidden = false;
    }
    node.insertAdjacentHTML('beforeend', template.replace(NUMBER_PLACEHOLDER, getNextIndex(node)));
    initColumns(settingsNode);
    node.closest('.ibexa-table').dispatchEvent(new CustomEvent('ibexa-refresh-main-table-checkbox'));
  };
  var removeItems = function removeItems(event) {
    var _settingsNode$querySe;
    var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
    var checkedRows = findCheckedColumns(settingsNode);
    var allRows = settingsNode.querySelectorAll(':not(.ibexa-table__template--empty-row) .ibexa-table__row');
    var tableHead = settingsNode.querySelector('.ibexa-table thead');
    var tableBody = settingsNode.querySelector('.ibexa-table__body');
    var emptyPlaceholder = (_settingsNode$querySe = settingsNode.querySelector('.ibexa-table__template--empty-row')) === null || _settingsNode$querySe === void 0 ? void 0 : _settingsNode$querySe.content.cloneNode(true);
    var removedAllRows = checkedRows.length === allRows.length;
    var node = settingsNode.querySelector(SELECTOR_COLUMNS_CONTAINER);
    if (removedAllRows) {
      tableBody.appendChild(emptyPlaceholder);
    }
    setTimeout(function () {
      if (removedAllRows) {
        tableHead.hidden = true;
      }
      checkedRows.forEach(function (checkbox) {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
        checkbox.closest(SELECTOR_COLUMN).remove();
      });
      node.closest('.ibexa-table').dispatchEvent(new CustomEvent('ibexa-refresh-main-table-checkbox'));
    }, 0);
    initColumns(settingsNode);
  };
  var checkColumn = function checkColumn(event) {
    var settingsNode = event.target.closest(SELECTOR_SETTINGS_COLUMNS);
    updateDisabledState(settingsNode);
  };
  var initColumns = function initColumns(parentNode) {
    updateDisabledState(parentNode);
    parentNode.querySelectorAll(SELECTOR_COLUMN_CHECKBOX).forEach(function (checkbox) {
      checkbox.removeEventListener('change', checkColumn, false);
      checkbox.addEventListener('change', checkColumn, false);
    });
    parentNode.querySelector('.ibexa-table').dispatchEvent(new CustomEvent('ibexa-refresh-main-table-checkbox'));
  };
  var initComponent = function initComponent(container) {
    container.querySelector(SELECTOR_ADD_COLUMN).addEventListener('click', addItem, false);
    container.querySelector(SELECTOR_REMOVE_COLUMN).addEventListener('click', removeItems, false);
    initColumns(container);
  };
  doc.querySelectorAll(SELECTOR_SETTINGS_COLUMNS).forEach(function (container) {
    initComponent(container);
  });
  doc.body.addEventListener('ibexa-drop-field-definition', function (event) {
    var nodes = event.detail.nodes;
    nodes.forEach(function (container) {
      var matrixColumnsWidget = container.querySelector(SELECTOR_SETTINGS_COLUMNS);
      if (!matrixColumnsWidget) {
        return;
      }
      var table = matrixColumnsWidget.querySelector('.ibexa-table');
      doc.body.dispatchEvent(new CustomEvent('ibexa-init-main-table-checkboxes-listeners', {
        detail: {
          table: table
        }
      }));
      initComponent(container);
    });
  }, false);
})(window, document);

/***/ }),

/***/ "./vendor/ibexa/fieldtype-page/src/bundle/Resources/public/js/page-select-items.js":
/*!*****************************************************************************************!*\
  !*** ./vendor/ibexa/fieldtype-page/src/bundle/Resources/public/js/page-select-items.js ***!
  \*****************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa, Translator) {
  var toggleItemSelect = function toggleItemSelect(event) {
    var itemCheckbox = event.currentTarget;
    var groupContent = itemCheckbox.closest('.ibexa-page-select-items__group-content');
    var itemClassMethod = itemCheckbox.checked ? 'add' : 'remove';
    itemCheckbox.closest('.ibexa-page-select-items__item').classList[itemClassMethod]('ibexa-page-select-items__item--selected');
    updateGroupHeader(groupContent);
  };
  var toggleGroupItemsSelect = function toggleGroupItemsSelect(event) {
    var actionCheckbox = event.currentTarget;
    var groupContent = actionCheckbox.closest('.ibexa-page-select-items__group-content');
    var itemClassMethod = actionCheckbox.checked ? 'add' : 'remove';
    groupContent.querySelectorAll('.ibexa-page-select-items__items-list .ibexa-input--checkbox').forEach(function (itemCheckbox) {
      itemCheckbox.checked = actionCheckbox.checked;
      itemCheckbox.closest('.ibexa-page-select-items__item').classList[itemClassMethod]('ibexa-page-select-items__item--selected');
    });
    updateGroupHeader(groupContent);
  };
  var updateGroupHeader = function updateGroupHeader(container) {
    container.querySelectorAll('.ibexa-page-select-items__select-all-items').forEach(function (selectAllItemsCheckbox) {
      var group = selectAllItemsCheckbox.closest('.ibexa-page-select-items__group-content');
      var warningNode = group.querySelector('.ibexa-page-select-items__group-warning');
      var actionLabelNode = group.querySelector('.ibexa-page-select-items__group-action-label');
      var actionCheckboxNode = group.querySelector('.ibexa-page-select-items__select-all-items');
      var isAnyBlockUnchecked = _toConsumableArray(group.querySelectorAll('.ibexa-page-select-items__items-list .ibexa-input--checkbox')).some(function (checkbox) {
        return !checkbox.checked;
      });
      var warningClassMethod = isAnyBlockUnchecked ? 'remove' : 'add';
      if (isAnyBlockUnchecked) {
        actionCheckboxNode.checked = false;
        actionLabelNode.innerHTML = Translator.trans(/*@Desc("Select all")*/'item.select_all', {}, 'ibexa_page_fieldtype');
      } else {
        actionCheckboxNode.checked = true;
        actionLabelNode.innerHTML = Translator.trans(/*@Desc("Unselect all")*/'item.unselect_all', {}, 'ibexa_page_fieldtype');
      }
      if (warningNode) {
        warningNode.classList[warningClassMethod]('ibexa-page-select-items__group-warning--hidden');
      }
    });
  };
  doc.querySelectorAll('.ibexa-page-select-items__select-all-items').forEach(function (groupCheckbox) {
    groupCheckbox.addEventListener('change', toggleGroupItemsSelect, false);
  });
  doc.querySelectorAll('.ibexa-page-select-items__item .ibexa-input--checkbox').forEach(function (itemCheckbox) {
    itemCheckbox.addEventListener('change', toggleItemSelect, false);
  });
  doc.body.addEventListener('ibexa-drop-field-definition', function (event) {
    var nodes = event.detail.nodes;
    nodes.forEach(function (node) {
      node.querySelectorAll('.ibexa-page-select-items__select-all-items').forEach(function (groupCheckbox) {
        groupCheckbox.addEventListener('change', toggleGroupItemsSelect, false);
      });
      node.querySelectorAll('.ibexa-page-select-items__item .ibexa-input--checkbox').forEach(function (itemCheckbox) {
        itemCheckbox.addEventListener('change', toggleItemSelect, false);
      });
    });
  }, false);
})(window, window.document, window.ibexa, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/measurement/src/bundle/Resources/public/js/admin.settings.measurement.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/measurement/src/bundle/Resources/public/js/admin.settings.measurement.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var getContainer = function getContainer(node) {
    return node.closest('.ibexa-collapse--field-definition') || node.closest('.ibexa-pc-edit__form');
  };
  var updateBaseUnit = function updateBaseUnit(_ref) {
    var currentTarget = _ref.currentTarget;
    var container = getContainer(currentTarget);
    var unitList = container.querySelector(".ibexa-measurement-unit__original-dropdown .ibexa-input--select [label=\"".concat(currentTarget.value, "\"]"));
    var sourceDropdownSelect = container.querySelector('.ibexa-measurement-unit__dropdown-wrapper .ibexa-input--select');
    sourceDropdownSelect.innerHTML = '';
    unitList.querySelectorAll('option').forEach(function (option) {
      var renderedOption = "<option value=\"".concat(option.value, "\">").concat(option.innerHTML, "</option>");
      sourceDropdownSelect.insertAdjacentHTML('beforeend', renderedOption);
    });
  };
  var showInputType = function showInputType(_ref2) {
    var currentTarget = _ref2.currentTarget;
    var container = getContainer(currentTarget);
    var simpleInputSelected = currentTarget.value === '0';
    container.querySelector('.ibexa-measurement-sign').classList.toggle('ibexa-measurement-sign--hidden', !simpleInputSelected);
    container.querySelector('.ibexa-measurement-default-value--simple').classList.toggle('ibexa-measurement-default-value--hidden', !simpleInputSelected);
    container.querySelector('.ibexa-measurement-default-value--range').classList.toggle('ibexa-measurement-default-value--hidden', simpleInputSelected);
  };
  var updateUnitLabels = function updateUnitLabels(unitSelect) {
    var container = getContainer(unitSelect);
    var unit = unitSelect.querySelector("[value=\"".concat(unitSelect.value, "\"]")).innerHTML;
    [container.querySelector('.ibexa-measurement-form-number--minimum'), container.querySelector('.ibexa-measurement-form-number--maximum')].concat(_toConsumableArray(container.querySelectorAll('.ibexa-measurement-form-number--default-value'))).forEach(function (numberWrapper) {
      if (!numberWrapper) {
        return;
      }
      numberWrapper.querySelector('.ibexa-measurement-form-number__unit-wrapper').innerHTML = unit;
    });
  };
  var setUnit = function setUnit(_ref3) {
    var currentTarget = _ref3.currentTarget;
    var container = getContainer(currentTarget);
    var unitList = container.querySelector('.ibexa-measurement-unit__original-dropdown .ibexa-input--select');
    var unit = currentTarget.value;
    unitList.value = unit;
  };
  var addEventsListeners = function addEventsListeners(container) {
    var typeSelect = container.querySelector('.ibexa-measurement-type .ibexa-input--select');
    var inputTypeSelect = container.querySelector('.ibexa-measurement-input-type .ibexa-input--select');
    var unitSelect = container.querySelector('.ibexa-measurement-unit__dropdown-wrapper .ibexa-input--select');
    var minValueInput = container.querySelector('.ibexa-measurement-form-number--minimum .ibexa-input');
    var maxValueInput = container.querySelector('.ibexa-measurement-form-number--maximum .ibexa-input');
    var defaultRangeMinValueInput = container.querySelector('.ibexa-measurement-default-value--range .ibexa-measurement-form-number__input-wrapper--min .ibexa-input');
    var defaultRangeMaxValueInput = container.querySelector('.ibexa-measurement-default-value--range .ibexa-measurement-form-number__input-wrapper--max .ibexa-input');
    typeSelect.addEventListener('change', updateBaseUnit, false);
    inputTypeSelect === null || inputTypeSelect === void 0 || inputTypeSelect.addEventListener('change', showInputType, false);
    unitSelect.addEventListener('change', function (_ref4) {
      var currentTarget = _ref4.currentTarget;
      return updateUnitLabels(currentTarget);
    }, false);
    unitSelect.addEventListener('change', setUnit, false);
    minValueInput === null || minValueInput === void 0 || minValueInput.addEventListener('change', function () {
      defaultRangeMinValueInput.min = minValueInput.value;
      defaultRangeMaxValueInput.min = minValueInput.value;
    }, false);
    maxValueInput === null || maxValueInput === void 0 || maxValueInput.addEventListener('change', function () {
      defaultRangeMinValueInput.max = maxValueInput.value;
      defaultRangeMaxValueInput.max = maxValueInput.value;
    }, false);
    updateUnitLabels(unitSelect);
  };
  doc.querySelectorAll('.ibexa-measurement-type').forEach(function (typeNode) {
    addEventsListeners(getContainer(typeNode));
  });
  doc.body.addEventListener('ibexa-drop-field-definition', function (event) {
    var nodes = event.detail.nodes;
    nodes.forEach(function (container) {
      if (!container.querySelector('.ibexa-measurement-type')) {
        return;
      }
      addEventsListeners(container);
    });
  }, false);
})(window, document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.selection.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.card.toggle.group.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.relation.default.location.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.contenttype.edit.js"), __webpack_exec__("./vendor/ibexa/fieldtype-matrix/src/bundle/Resources/public/js/scripts/admin.contenttype.matrix.js"), __webpack_exec__("./vendor/ibexa/measurement/src/bundle/Resources/public/js/admin.settings.measurement.js"), __webpack_exec__("./vendor/ibexa/fieldtype-page/src/bundle/Resources/public/js/page-select-items.js"));
/******/ }
]);