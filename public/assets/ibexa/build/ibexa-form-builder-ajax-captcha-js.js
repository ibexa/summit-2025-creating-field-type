(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-form-builder-ajax-captcha-js"],{

/***/ "./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/captcha.js":
/*!***************************************************************************************!*\
  !*** ./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/captcha.js ***!
  \***************************************************************************************/
/***/ (() => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function (global, doc) {
  var getCaptchaPath = function getCaptchaPath(image, callback, errorCallback) {
    var fieldId = image.dataset.fieldId;
    var request = new Request("/form/captcha/get-url/".concat(fieldId), {
      method: 'GET',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(function (response) {
      return response.json();
    }).then(function (data) {
      return callback(data, image);
    })["catch"](function () {
      return errorCallback(image);
    });
  };
  var setCaptchaImage = function setCaptchaImage(data, image) {
    image.setAttribute('src', data.image);
  };
  var fetchCaptchaImages = function fetchCaptchaImages(captchaImages) {
    captchaImages.forEach(function (image) {
      if (image.hasAttribute('data-events-attached')) {
        return;
      }
      getCaptchaPath(image, setCaptchaImage, showErrorMessage);
    });
  };
  var showErrorMessage = function showErrorMessage(image) {
    var errorElement = image.parentNode.querySelector('.captcha__fail-to-load');
    errorElement.removeAttribute('hidden');
  };
  var hideErrorMessage = function hideErrorMessage(image) {
    var errorElement = image.parentNode.querySelector('.captcha__fail-to-load');
    errorElement.setAttribute('hidden', 'hidden');
  };
  global.addEventListener('load', function () {
    var captchaImages = _toConsumableArray(doc.querySelectorAll('.captcha_image'));
    fetchCaptchaImages(captchaImages);
    captchaImages.forEach(function (image) {
      var reloadLink = image.parentNode.querySelector('.captcha_reload');
      if (reloadLink && !image.hasAttribute('data-events-attached')) {
        reloadLink.addEventListener('click', function () {
          getCaptchaPath(image, setCaptchaImage, showErrorMessage);
          hideErrorMessage(image);
        });
      }
      image.setAttribute('data-events-attached', true);
    });
  }, false);
})(window, window.document);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/form-builder/src/bundle/Resources/public/js/fieldType/captcha.js"));
/******/ }
]);