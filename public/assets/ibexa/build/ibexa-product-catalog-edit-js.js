(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-catalog-edit-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/edit.form.validator.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/edit.form.validator.js ***!
  \********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa) {
  var validateIsEmptyField = ibexa.helpers.formValidation.validateIsEmptyField;
  var submitBtn = doc.querySelector('.ibexa-pc-edit__submit-btn');
  var editForm = doc.querySelector('.ibexa-pc-edit__form');
  var isCustomValidation = editForm.dataset.isCustomValidation;
  if (isCustomValidation) {
    return;
  }
  var fieldsToValidate = editForm.querySelectorAll('.ibexa-pc-edit__form-field-required');
  var validateForm = function validateForm(event) {
    event.preventDefault();
    var isFormValid = _toConsumableArray(fieldsToValidate).map(validateIsEmptyField).every(function (_ref) {
      var isValid = _ref.isValid;
      return isValid;
    });
    if (isFormValid) {
      editForm.submit();
    }
  };
  var attachTriggerToValidateFields = function attachTriggerToValidateFields(fieldList) {
    fieldList.forEach(function (field) {
      var input = field.querySelector('.ibexa-input');
      if (input) {
        input.addEventListener('blur', function () {
          return validateIsEmptyField(field);
        }, false);
      }
    });
  };
  attachTriggerToValidateFields(fieldsToValidate);
  submitBtn.addEventListener('click', validateForm, false);
  doc.body.addEventListener('ibexa-pc-edit-form-added-field', function (event) {
    var inputsContainer = event.detail.inputsContainer;
    var addedRequiredFields = inputsContainer.querySelectorAll('.ibexa-pc-edit__form-field-required');
    fieldsToValidate = editForm.querySelectorAll('.ibexa-pc-edit__form-field-required');
    attachTriggerToValidateFields(addedRequiredFields);
  });
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/edit.form.validator.js"));
/******/ }
]);