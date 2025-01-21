(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-change-user-password-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js ***!
  \**********************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc, ibexa) {
  var form = doc.querySelector('form[name="user_password_change"]');
  var submitBtns = form.querySelectorAll('[type="submit"]:not([formnovalidate])');
  var oldPasswordInput = form.querySelector('#user_password_change_oldPassword');
  var newPasswordInput = form.querySelector('#user_password_change_newPassword_first');
  var confirmPasswordInput = form.querySelector('#user_password_change_newPassword_second');
  var SELECTOR_FIELD = '.ibexa-field';
  var SELECTOR_LABEL = '.ibexa-field__label';
  var CLASS_INVALID = 'is-invalid';

  /**
   * Creates an error node
   *
   * @method createErrorNode
   * @param {String} message
   * @returns {HTMLElement}
   */
  var createErrorNode = function createErrorNode(message) {
    return ibexa.helpers.formValidation.formatErrorLine(message);
  };

  /**
   * Toggles the error
   *
   * @method toggleError
   * @param {Boolean} isError
   * @param {String} message
   * @param {HTMLElement} target
   */
  var toggleError = function toggleError(isError, message, target) {
    var methodName = isError ? 'add' : 'remove';
    var field = target.closest(SELECTOR_FIELD);
    var errorsWrapper = field.querySelector('.ibexa-form-error');
    var errorNodes = errorsWrapper.querySelectorAll('.ibexa-form-error__row');
    field.classList[methodName](CLASS_INVALID);
    target.classList[methodName](CLASS_INVALID);
    errorNodes.forEach(function (el) {
      return el.remove();
    });
    if (isError) {
      errorsWrapper.append(createErrorNode(message));
    }
  };

  /**
   * Compares passwords
   *
   * @method comparePasswords
   * @return {Boolean}
   */
  var comparePasswords = function comparePasswords() {
    var newPassword = newPasswordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();
    var isNotEmptyPassword = checkIsNotEmpty(newPasswordInput) && checkIsNotEmpty(confirmPasswordInput);
    var passwordMatch = newPassword === confirmPassword;
    var areBothPasswordsFilled = newPassword !== '' && confirmPassword !== '';
    var message = ibexa.errors.notSamePasswords;
    if (!passwordMatch && areBothPasswordsFilled) {
      toggleError(!passwordMatch, message, confirmPasswordInput);
    }
    return passwordMatch && isNotEmptyPassword;
  };

  /**
   * Checks if input has not empty value
   *
   * @method checkIsNotEmpty
   * @param {HTMLElement} target
   * @return {Boolean}
   */
  var checkIsNotEmpty = function checkIsNotEmpty(target) {
    var isRequired = target.required;
    var isEmpty = !target.value.trim();
    var isError = isRequired && isEmpty;
    var fieldContainer = target.closest(SELECTOR_FIELD);
    var message = ibexa.errors.emptyField.replace('{fieldName}', fieldContainer.querySelector(SELECTOR_LABEL).innerHTML);
    toggleError(isError, message, target);
    return !isError;
  };
  form.setAttribute('novalidate', true);
  submitBtns.forEach(function (btn) {
    var clickHandler = function clickHandler(event) {
      if (!parseInt(btn.dataset.isFormValid, 10)) {
        event.preventDefault();
        var requiredFields = _toConsumableArray(form.querySelectorAll('.ibexa-field input[required]'));
        var isFormValid = requiredFields.map(checkIsNotEmpty).every(function (result) {
          return result;
        }) && comparePasswords();
        if (isFormValid) {
          btn.dataset.isFormValid = 1;
          // for some reason trying to fire click event inside the event handler flow is impossible
          // the following line breaks the flow so it's possible to fire click event on a button again.
          global.setTimeout(function () {
            return btn.click();
          }, 0);
        }
      }
    };
    btn.dataset.isFormValid = 0;
    btn.addEventListener('click', clickHandler, false);
  });
  oldPasswordInput.addEventListener('blur', function (event) {
    return checkIsNotEmpty(event.currentTarget);
  }, false);
  newPasswordInput.addEventListener('blur', function (event) {
    return checkIsNotEmpty(event.currentTarget);
  }, false);
  confirmPasswordInput.addEventListener('blur', function (event) {
    return checkIsNotEmpty(event.currentTarget);
  }, false);
  newPasswordInput.addEventListener('blur', comparePasswords, false);
  confirmPasswordInput.addEventListener('blur', comparePasswords, false);
})(window, window.document, window.ibexa);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user_password.change.js"));
/******/ }
]);