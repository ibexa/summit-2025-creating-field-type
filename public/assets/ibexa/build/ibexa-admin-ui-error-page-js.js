(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-error-page-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js ***!
  \******************************************************************************************/
/***/ (() => {

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
(function (global, doc, iconPaths) {
  var notificationsContainer = doc.querySelector('.ibexa-notifications-container');
  var notifications = JSON.parse(notificationsContainer.dataset.notifications);
  var template = notificationsContainer.dataset.template;
  var iconsMap = {
    info: 'system-information',
    error: 'circle-close',
    warning: 'warning-triangle',
    success: 'checkmark'
  };
  var escapeHTML = function escapeHTML(string) {
    var stringTempNode = doc.createElement('div');
    stringTempNode.appendChild(doc.createTextNode(string));
    return stringTempNode.innerHTML;
  };
  var addNotification = function addNotification(_ref) {
    var detail = _ref.detail;
    var label = detail.label,
      message = detail.message;
    var container = doc.createElement('div');
    var iconSetPath = iconPaths.iconSets[iconPaths.defaultIconSet];
    var iconPath = "".concat(iconSetPath, "#").concat(iconsMap[label]);
    var finalMessage = escapeHTML(message);
    var notification = template.replace('{{ label }}', label).replace('{{ message }}', finalMessage).replace('{{ icon_path }}', iconPath);
    container.insertAdjacentHTML('beforeend', notification);
    var notificationNode = container.querySelector('.alert');
    notificationsContainer.append(notificationNode);
  };
  Object.entries(notifications).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      label = _ref3[0],
      messages = _ref3[1];
    messages.forEach(function (message) {
      return addNotification({
        detail: {
          label: label,
          message: message
        }
      });
    });
  });
  doc.body.addEventListener('ibexa-notify', addNotification, false);
})(window, window.document, window.ibexa.iconPaths);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.error.page.js"));
/******/ }
]);