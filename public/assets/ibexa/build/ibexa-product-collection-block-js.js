(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-product-collection-block-js"],{

/***/ "./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js ***!
  \*************************************************************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
(function (global, doc, ibexa, Translator) {
  var collection = doc.querySelector('.ibexa-pb-product-collection');
  var collectionListHeader = collection.querySelector('.ibexa-pb-product-collection__list-header');
  var selectProductBtn = collection.querySelector('.ibexa-pb-product-collection__select-product-btn');
  var addProductBtn = collection.querySelector('.ibexa-pb-product-collection__add-product-btn');
  var collectionListWrapper = collection.querySelector('.ibexa-pb-product-collection__list-wrapper');
  var collectionList = collection.querySelector('.ibexa-pb-product-collection__list');
  var collectionListItems = collectionList.querySelectorAll('.ibexa-pb-product-collection-item');
  var hiddenInputsList = collection.querySelector('.ibexa-pb-product-collection__hidden-inputs-list');
  var productCodeInput = collection.querySelector('.ibexa-pb-product-collection__product-code-input');
  var FIRST_PRODUCT_ID = 0;
  var INIT_PRODUCTS_LIST_LENGTH = 0;
  var PRODUCTS_LIST_NO_ITEMS_CLASS = 'ibexa-pb-product-collection__list-wrapper--no-items';
  var ERROR_HIDDEN_CLASS = 'ibexa-pb-product-collection__error--hidden';
  var prepareRequest = function prepareRequest(url, requestOptions) {
    var token = document.querySelector('meta[name="CSRF-Token"]').content;
    var siteaccess = document.querySelector('meta[name="SiteAccess"]').content;
    return new Request(url, _objectSpread(_objectSpread({
      mode: 'same-origin',
      credentials: 'same-origin'
    }, requestOptions), {}, {
      headers: _objectSpread({
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      }, requestOptions.headers)
    }));
  };
  var fetchRequest = function fetchRequest(request) {
    return fetch(request).then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    });
  };
  var loadProduct = function loadProduct(productCode) {
    var request = prepareRequest("/api/ibexa/v2/product/catalog/products/".concat(productCode), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.ProductGet+json',
        Accept: 'application/json'
      }
    });
    return fetchRequest(request);
  };
  var loadProductView = function loadProductView(productList) {
    var request = prepareRequest("/api/ibexa/v2/product/catalog/products/view", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.ProductViewInput+json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        ViewInput: {
          identifier: 'Default',
          ProductQuery: {
            limit: productList.length,
            offset: 0,
            Filter: {
              ProductCodeCriterion: productList
            },
            SortClauses: {
              ProductName: 'descending'
            }
          }
        }
      })
    });
    return fetchRequest(request);
  };
  var loadLocationsList = function loadLocationsList(contentId) {
    var request = prepareRequest("/api/ibexa/v2/content/objects/".concat(contentId, "/locations"), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.LocationList+json',
        Accept: 'application/json'
      }
    });
    return fetchRequest(request);
  };
  var loadLocation = function loadLocation(url) {
    var request = prepareRequest(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.ibexa.api.Location+json',
        Accept: 'application/json'
      }
    });
    return fetchRequest(request);
  };
  var updateListCounter = function updateListCounter() {
    var collectionLength = collectionList.children.length;
    var listTitle = Translator.trans(/*@Desc("Product list (%count%)")*/'product.collection.product_list', {
      count: collectionLength
    }, 'ibexa_page_builder_block');
    collectionListHeader.innerHTML = listTitle;
  };
  var toggleError = function toggleError(errorType) {
    var errors = doc.querySelectorAll('.ibexa-pb-product-collection__error');
    errors.forEach(function (error) {
      return error.classList.add(ERROR_HIDDEN_CLASS);
    });
    if (errorType) {
      var errorContainer = collection.querySelector(".ibexa-pb-product-collection__error--".concat(errorType));
      errorContainer.classList.remove(ERROR_HIDDEN_CLASS);
    }
  };
  var checkIfProductExist = function checkIfProductExist(productCode) {
    var productInputs = _toConsumableArray(hiddenInputsList.querySelectorAll('input.ibexa-pb-product-collection-item__input'));
    var isProductAdded = productInputs.some(function (input) {
      return input.value === productCode;
    });
    return isProductAdded;
  };
  var attachListenersToProduct = function attachListenersToProduct(item, hiddenItem) {
    item.querySelector('.ibexa-btn--trash').addEventListener('click', function (event) {
      return removeProduct(event, item, hiddenItem);
    }, false);
  };
  var onUDWConfirm = function onUDWConfirm(products, draggable) {
    var productsObj = products.map(function (product) {
      var productSpecification = product.ContentInfo.Content.CurrentVersion.Version.Fields.field.find(function (field) {
        return field.fieldTypeIdentifier === 'ibexa_product_specification';
      });
      return {
        locationId: product.id,
        code: productSpecification.fieldValue.code
      };
    });
    var productsCodes = productsObj.map(function (product) {
      return product.code;
    });
    loadProductView(productsCodes).then(function (result) {
      var productList = result.ProductView.Result.ProductList.Product;
      productList.forEach(function (product) {
        var code = product.code,
          name = product.name,
          identifier = product.ProductType.identifier;
        var location = productsObj.find(function (productObj) {
          return productObj.code === code;
        });
        if (checkIfProductExist(code)) {
          return;
        }
        addProduct(code, name, identifier, product.Content._id, location.locationId, draggable);
      });
    });
  };
  var openUdw = function openUdw(_ref, draggable) {
    var currentTarget = _ref.currentTarget;
    var config = JSON.parse(currentTarget.dataset.udwConfig);
    var title = Translator.trans(/*@Desc("Select products")*/'product.collection.select_products', {}, 'ibexa_page_builder_block');
    var selectedLocations = _toConsumableArray(collectionList.querySelectorAll('.ibexa-pb-product-collection-item')).map(function (item) {
      return parseInt(item.dataset.locationId, 10);
    });
    var openUdwEvent = new CustomEvent('ibexa-open-udw', {
      detail: _objectSpread({
        title: title,
        multiple: true,
        selectedLocations: selectedLocations,
        onConfirm: function onConfirm(products) {
          return onUDWConfirm(products, draggable);
        }
      }, config)
    });
    doc.body.dispatchEvent(openUdwEvent);
  };
  var removeProduct = function removeProduct(event, product, hiddenItem) {
    event.preventDefault();
    product.remove();
    hiddenItem.remove();
    updateListCounter();
    if (hiddenInputsList.children.length <= INIT_PRODUCTS_LIST_LENGTH) {
      collectionListWrapper.classList.add(PRODUCTS_LIST_NO_ITEMS_CLASS);
    }
  };
  var checkProduct = function checkProduct(productCode, draggable) {
    loadProduct(productCode).then(function (result) {
      if (!result) {
        return;
      }
      if (result.Product.isVariant) {
        toggleError('cannot-add-variant');
        return;
      }
      if (checkIfProductExist(productCode)) {
        toggleError('already-added');
        return;
      }
      var _result$Product = result.Product,
        name = _result$Product.name,
        identifier = _result$Product.ProductType.identifier,
        _result$Product$Conte = _result$Product.Content,
        _result$Product$Conte2 = _result$Product$Conte === void 0 ? {} : _result$Product$Conte,
        contentId = _result$Product$Conte2._id;

      //for remote PIM scenario we don't have access to Content, thus contentId and locationId are not used anywhere
      if (contentId === undefined) {
        addProduct(productCode, name, identifier, '', draggable);
        return;
      }
      loadLocationsList(contentId).then(function (locationList) {
        var _locationList$Locatio = _slicedToArray(locationList.LocationList.Location, 1),
          locationOptions = _locationList$Locatio[0];
        loadLocation(locationOptions._href).then(function (location) {
          var id = location.Location.id;
          addProduct(productCode, name, identifier, contentId, id, draggable);
        });
      });
    })["catch"](function (response) {
      if (response.status === 404) {
        toggleError('not-found');
      } else {
        var error = new Error(response.statusText);
        ibexa.helpers.notification.showErrorNotification(error);
      }
    });
  };
  var addProduct = function addProduct(productCode, name, productType, contentId, locationId, draggable) {
    toggleError();
    var _collectionListWrappe = collectionListWrapper.dataset,
      productTemplate = _collectionListWrappe.productTemplate,
      nextIndexId = _collectionListWrappe.nextIndexId;
    var index = parseInt(nextIndexId, 10) || FIRST_PRODUCT_ID;
    var filledProductTemplate = productTemplate.replaceAll('__name__', index);
    hiddenInputsList.insertAdjacentHTML('beforeend', filledProductTemplate);
    var hiddenProductItem = hiddenInputsList.lastElementChild;
    var hiddenProductInput = hiddenProductItem.querySelector('input');
    hiddenProductItem.dataset.id = index;
    hiddenProductInput.value = productCode;
    productCodeInput.value = '';
    addProductBtn.disabled = true;
    collectionListWrapper.dataset.nextIndexId = index + 1;
    var itemTemplate = collectionList.dataset.itemTemplate;
    var renderedItem = itemTemplate.replaceAll('__product_name__', name).replaceAll('__product_code__', productCode).replaceAll('__product_type__', productType).replaceAll('__location_id__', locationId).replaceAll('__content_id__', contentId).replaceAll('__id__', index);
    collectionList.insertAdjacentHTML('beforeend', renderedItem);
    collectionListWrapper.classList.remove(PRODUCTS_LIST_NO_ITEMS_CLASS);
    var addedProductRow = collectionList.lastElementChild;
    attachListenersToProduct(addedProductRow, hiddenProductItem);
    draggable.reinit(addedProductRow);
    ibexa.helpers.ellipsis.middle.parse(collectionList);
    var itemActionsMenuContainer = addedProductRow.querySelector('.ibexa-embedded-item-actions__menu');
    var itemActionsTriggerElement = addedProductRow.querySelector('.ibexa-embedded-item-actions__menu-trigger-btn');
    doc.body.dispatchEvent(new CustomEvent('ibexa-embedded-item:create-dynamic-menu', {
      detail: {
        contentId: contentId,
        locationId: locationId,
        productCode: productCode,
        menuTriggerElement: itemActionsTriggerElement,
        menuContainer: itemActionsMenuContainer
      }
    }));
    updateListCounter();
  };
  var sortInputs = function sortInputs() {
    var listItems = _toConsumableArray(collectionList.querySelectorAll('.ibexa-pb-product-collection-item'));
    var hiddenListItems = _toConsumableArray(hiddenInputsList.querySelectorAll('.ibexa-pb-product-collection__item'));
    if (listItems.length === hiddenListItems.length) {
      var idOrder = listItems.map(function (item) {
        return item.dataset.id;
      });
      idOrder.forEach(function (id, index) {
        var hiddenInputsListItem = hiddenListItems.find(function (item) {
          return item.dataset.id === id;
        });
        hiddenInputsList.insertBefore(hiddenInputsListItem, hiddenInputsList.childNodes[index]);
      });
    }
  };
  var initProductCollection = function initProductCollection() {
    var draggable = new CollectionDraggable({
      itemsContainer: collectionList,
      selectorItem: '.ibexa-pb-product-collection-item',
      selectorPlaceholder: '.ibexa-pb-product-collection-placeholder'
    });
    if (isSelectBtnAvailable()) {
      draggable.openUdwBtn = selectProductBtn;
    }
    collectionListItems.forEach(function (listItem) {
      var productCode = listItem.dataset.id;
      var hiddenItem = _toConsumableArray(hiddenInputsList.children).find(function (item) {
        return item.dataset.id === productCode;
      });
      attachListenersToProduct(listItem, hiddenItem);
    });
    draggable.init();
    selectProductBtn === null || selectProductBtn === void 0 || selectProductBtn.addEventListener('click', function (event) {
      return openUdw(event, draggable);
    }, false);
    addProductBtn.addEventListener('click', function () {
      return checkProduct(productCodeInput.value.trim(), draggable);
    }, false);
    productCodeInput.addEventListener('input', function (event) {
      addProductBtn.disabled = event.target.value.trim() === '';
    }, false);
    addProductBtn.disabled = !productCodeInput.value;
    if (hiddenInputsList.children.length <= INIT_PRODUCTS_LIST_LENGTH) {
      collectionListWrapper.classList.add(PRODUCTS_LIST_NO_ITEMS_CLASS);
    }
  };
  var isSelectBtnAvailable = function isSelectBtnAvailable() {
    return selectProductBtn !== null;
  };
  var CollectionDraggable = /*#__PURE__*/function (_ibexa$core$Draggable) {
    "use strict";

    function CollectionDraggable() {
      _classCallCheck(this, CollectionDraggable);
      return _callSuper(this, CollectionDraggable, arguments);
    }
    _inherits(CollectionDraggable, _ibexa$core$Draggable);
    return _createClass(CollectionDraggable, [{
      key: "onDrop",
      value: function onDrop() {
        _superPropGet(CollectionDraggable, "onDrop", this, 3)([]);
        sortInputs();
      }
    }, {
      key: "reinit",
      value: function reinit(renderedItem) {
        _superPropGet(CollectionDraggable, "reinit", this, 3)([]);
        this.triggerHighlight(renderedItem);
      }
    }]);
  }(ibexa.core.Draggable);
  initProductCollection();
})(window, window.document, window.ibexa, window.Translator);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/product-catalog/src/bundle/Resources/public/js/product.collection.block.js"));
/******/ }
]);