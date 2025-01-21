(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-login-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js ***!
  \******************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var INPUT_PADDING = 12;
  var togglePasswordVisibility = function togglePasswordVisibility(event) {
    var passwordTogglerBtn = event.currentTarget;
    var passwordShowIcon = passwordTogglerBtn.querySelector('.ibexa-input-text-wrapper__password-show');
    var passwordHideIcon = passwordTogglerBtn.querySelector('.ibexa-input-text-wrapper__password-hide');
    var inputTextWrapper = passwordTogglerBtn.closest('.ibexa-input-text-wrapper');
    var input = inputTextWrapper.querySelector('.ibexa-input--text');
    if (input) {
      var inputTypeToSet = input.type === 'password' ? 'text' : 'password';
      input.type = inputTypeToSet;
      passwordShowIcon.classList.toggle('d-none');
      passwordHideIcon.classList.toggle('d-none');
    }
  };
  var clearText = function clearText(_ref) {
    var currentTarget = _ref.currentTarget;
    var inputWrapper = currentTarget.closest('.ibexa-input-text-wrapper');
    var input = inputWrapper.querySelector('.ibexa-input--text, .ibexa-input--date');
    input.value = '';
    input.dispatchEvent(new Event('input'));
    if (!input.readOnly) {
      input.select();
    }
    if (currentTarget.hasAttribute('data-send-form-after-clearing')) {
      currentTarget.closest('form').submit();
    }
  };
  var attachListenersToAllInputs = function attachListenersToAllInputs() {
    var inputClearBtns = doc.querySelectorAll("\n                .ibexa-input--text + .ibexa-input-text-wrapper__actions .ibexa-input-text-wrapper__action-btn--clear,\n                .ibexa-input--date + .ibexa-input-text-wrapper__actions .ibexa-input-text-wrapper__action-btn--clear\n        ");
    var passwordTogglerBtns = doc.querySelectorAll('.ibexa-input-text-wrapper__action-btn--password-toggler');
    inputClearBtns.forEach(function (clearBtn) {
      return clearBtn.addEventListener('click', clearText, false);
    });
    passwordTogglerBtns.forEach(function (passwordTogglerBtn) {
      return passwordTogglerBtn.addEventListener('click', togglePasswordVisibility, false);
    });
    recalculateStyling();
  };
  var recalculateInputStyling = function recalculateInputStyling(inputActionsContainer) {
    var input = inputActionsContainer.closest('.ibexa-input-text-wrapper').querySelector('input');
    if (!input) {
      return;
    }
    var _inputActionsContaine = inputActionsContainer.getBoundingClientRect(),
      actionsWidth = _inputActionsContaine.width;
    input.style.paddingRight = "".concat(actionsWidth + INPUT_PADDING, "px");
  };
  var recalculateStyling = function recalculateStyling() {
    var inputActionsContainers = doc.querySelectorAll('.ibexa-input-text-wrapper__actions');
    inputActionsContainers.forEach(function (inputActionsContainer) {
      var inputActionsContainerObserver = new ResizeObserver(function () {
        recalculateInputStyling(inputActionsContainer);
      });
      inputActionsContainerObserver.observe(inputActionsContainer);
      recalculateInputStyling(inputActionsContainer);
    });
  };
  doc.body.addEventListener('ibexa-inputs:added', attachListenersToAllInputs, false);
  doc.body.addEventListener('ibexa-inputs:recalculate-styling', recalculateStyling, false);
  attachListenersToAllInputs();
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js":
/*!*******************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js ***!
  \*******************************************************************************/
/***/ (() => {

(function (global, doc) {
  var AUTOFILL_TIMEOUT = 500;
  var loginBtn = doc.querySelector('.ibexa-login__btn--sign-in');
  var nameInput = doc.querySelector('.ibexa-login__input--name');
  var passwordInput = doc.querySelector('.ibexa-login__input--password');
  var toggleLoginBtnState = function toggleLoginBtnState() {
    var shouldBeDisabled = !nameInput.value || !passwordInput.value;
    loginBtn.toggleAttribute('disabled', shouldBeDisabled);
  };
  var handleAutofill = function handleAutofill() {
    var isNameInputAutofilled = nameInput.matches(':-webkit-autofill');
    var isPasswordInputAutofilled = nameInput.matches(':-webkit-autofill');
    var isAutofilled = isNameInputAutofilled && isPasswordInputAutofilled;
    if (isAutofilled) {
      loginBtn.removeAttribute('disabled');
    }
  };
  if (loginBtn) {
    nameInput.addEventListener('keyup', toggleLoginBtnState, false);
    nameInput.addEventListener('change', toggleLoginBtnState, false);
    passwordInput.addEventListener('keyup', toggleLoginBtnState, false);
    passwordInput.addEventListener('change', toggleLoginBtnState, false);
    toggleLoginBtnState();
    global.setTimeout(handleAutofill, AUTOFILL_TIMEOUT);
  }
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.input.text.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/login.js"));
/******/ }
]);