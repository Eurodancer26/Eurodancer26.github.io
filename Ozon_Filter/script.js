/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/catalog.js":
/*!***********************************!*\
  !*** ./src/js/modules/catalog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button');
  let isOpen;
  function openCatalog() {
    document.querySelector('.catalog').style.display = 'block';
    attachCatalogEvents();
  }
  function closeCatalog() {
    document.querySelector('.catalog').style.display = '';
    detachCatalogEvents();
  }
  function attachCatalogEvents() {
    btnCatalog.addEventListener('click', closeCatalog);
    btnCatalog.addEventListener('click', handleBtnCatalog);
    document.querySelector('.catalog').addEventListener('click', handleCatalog);
  }
  function handleBtnCatalog() {
    if (!isOpen) {
      closeCatalog();
    }
  }
  function handleCatalog(e) {
    const isClick = !!e.target.closest('.catalog-list');
    if (isClick) {
      closeCatalog();
    }
  }
  function detachCatalogEvents() {
    btnCatalog.removeEventListener('click', closeCatalog);
    btnCatalog.removeEventListener('click', handleBtnCatalog);
    document.querySelector('.catalog').removeEventListener('click', handleCatalog);
  }
  btnCatalog.addEventListener('click', openCatalog);
};
/* harmony default export */ __webpack_exports__["default"] = (catalog);

/***/ }),

/***/ "./src/js/modules/filters.js":
/*!***********************************!*\
  !*** ./src/js/modules/filters.js ***!
  \***********************************/
/*! exports provided: funcFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "funcFilter", function() { return funcFilter; });
function funcFilter(goods, minVal, maxVal, checkSale, searchVal, categoryVal) {
  return goods.filter(goodsItem => {
    const isMin = minVal ? goodsItem.price >= minVal : true,
      isMax = maxVal ? goodsItem.price <= maxVal : true,
      isSale = checkSale ? goodsItem.sale : true,
      isCategory = categoryVal ? goodsItem.category.includes(categoryVal) : true,
      isTitle = searchVal ? goodsItem.title.toLowerCase().includes(searchVal.toLowerCase()) : true;
    return isMin && isMax && isSale && isTitle && isCategory;
  });
}
;


/***/ }),

/***/ "./src/js/modules/helpers.js":
/*!***********************************!*\
  !*** ./src/js/modules/helpers.js ***!
  \***********************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
var _this = undefined;
const debounce = function (func) {
  let ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  let timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(_this, args);
    }, ms);
  };
};


/***/ }),

/***/ "./src/js/modules/load.js":
/*!********************************!*\
  !*** ./src/js/modules/load.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/js/modules/render.js");


const load = url => {
  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])(url).then(goods => {
    Object(_render__WEBPACK_IMPORTED_MODULE_1__["default"])(goods);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (load);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ "./src/js/modules/renderCart.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


const modal = (btnsSelector, modalSelector, closeSelector, modalContentSelector, modifierSelector) => {
  const btn = document.getElementById(btnsSelector),
    modal = document.querySelector(modalSelector),
    modalTotalPrice = modal.querySelector('.cart-total > span'),
    TotalPrice = document.querySelector('#cart .counter'),
    cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    modalSendBtn = modal.querySelector('.cart-confirm'),
    modalWrap = document.querySelector('.cart-wrapper'),
    goodsWrap = document.querySelector('.goods');
  function openModal() {
    setTimeout(() => {
      modal.classList.add(modifierSelector);
    }, 200);
    modal.style.display = 'flex';
    // document.body.style.overflow = 'hidden';
    // document.body.style.marginRight = `${scroll}px`;
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    Object(_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart);
    modalTotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
    attachModalEvents();
  }
  function closeModal() {
    modal.classList.remove(modifierSelector);
    setTimeout(() => {
      modal.style.display = 'none';
    }, 200);
    // document.body.style.overflow = '';
    // document.body.style.marginRight = `0px`;
    detachModalEvents();
  }
  function attachModalEvents() {
    modal.querySelector(closeSelector).addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscape);
    modal.addEventListener('click', handleOutside);
  }
  const handleEscape = e => e.key === 'Escape' ? closeModal() : null;
  function handleOutside(e) {
    const isClickOutside = !!e.target.closest(modalContentSelector);
    console.log(!isClickOutside);
    if (!isClickOutside && !e.target.classList.contains('btn-primary')) {
      closeModal();
    }
  }
  function detachModalEvents() {
    modal.querySelector(closeSelector).removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
    modal.removeEventListener('click', handleOutside);
  }
  btn.addEventListener('click', openModal);
  TotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
  goodsWrap.addEventListener('click', e => {
    if (e.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        price = localStorage.getItem('price') ? JSON.parse(localStorage.getItem('price')) : [],
        card = e.target.closest('.card'),
        key = card.dataset.key,
        goods = JSON.parse(localStorage.getItem('goods')),
        goodsItem = goods.find(item => item.id === +key);
      cart.push(goodsItem);
      price.push(goodsItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      TotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
    }
  });
  modalWrap.addEventListener('click', e => {
    if (e.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
        card = e.target.closest('.card'),
        key = card.dataset.key,
        index = cart.findIndex(item => item.id === +key);
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      Object(_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart);
      modalTotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
      TotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
    }
  });
  modalSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])(cart).finally(() => {
      localStorage.removeItem('cart');
      Object(_renderCart__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
      modalTotalPrice.textContent = 0;
      TotalPrice.textContent = 0;
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/render.js":
/*!**********************************!*\
  !*** ./src/js/modules/render.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const render = goods => {
  const goodsWrap = document.querySelector('.goods');
  localStorage.setItem('goods', JSON.stringify(goods));
  goodsWrap.innerHTML = '';
  goods.forEach(item => {
    goodsWrap.insertAdjacentHTML('beforeend', `
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="card" data-key="${item.id}">
                    ${item.sale === true ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${item.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${item.price}</div>
                        <h5 class="card-title">${item.title}</h5>
                        <button class="btn btn-primary">В корзину</button>
                    </div>
                </div>
            </div>
        `);
  });
};

// https://test-4abc2-default-rtdb.firebaseio.com/goods.json

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/js/modules/renderCart.js":
/*!**************************************!*\
  !*** ./src/js/modules/renderCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderCart = cart => {
  const cartWrap = document.querySelector('.cart-wrapper');
  localStorage.setItem('cart', JSON.stringify(cart));
  cartWrap.innerHTML = '';
  if (cart.length === 0) {
    cartWrap.insertAdjacentHTML('beforeend', `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `);
  } else {
    cart.forEach(item => {
      cartWrap.insertAdjacentHTML('beforeend', `
                <div class="card" data-key="${item.id}">
                    ${item.sale === true ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${item.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${item.price}</div>
                        <h5 class="card-title">${item.title}</h5>
                        <button class="btn btn-primary">удалить</button>
                    </div>
                </div>
            `);
    });
  }
};

// https://test-4abc2-default-rtdb.firebaseio.com/goods.json

/* harmony default export */ __webpack_exports__["default"] = (renderCart);

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/js/modules/render.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ "./src/js/modules/filters.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/js/modules/helpers.js");




const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input'),
    minInp = document.getElementById('min'),
    maxInp = document.getElementById('max'),
    checkBoxInp = document.getElementById('discount-checkbox'),
    labelCheckSale = document.querySelector('.filter-check_checkmark'),
    itemCatalog = document.querySelectorAll('.catalog li');
  let _category;
  function checkNumInput(e) {
    if (e.key.match(/[^0-9]/ig)) {
      e.preventDefault();
    }
  }
  const debounceFunc = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
    let min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    let sale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let searchInput = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    let categoryVal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])().then(goods => {
      Object(_render__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_filters__WEBPACK_IMPORTED_MODULE_2__["funcFilter"])(goods, min, max, sale, searchInput, categoryVal));
    });
  }, 800);
  function showChecked() {
    if (!labelCheckSale.classList.contains('checked')) {
      labelCheckSale.classList.add('checked');
    } else {
      labelCheckSale.classList.remove('checked');
    }
  }
  itemCatalog.forEach(item => {
    item.addEventListener('click', () => {
      _category = item.textContent;
      console.log(_category);
      Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])().then(goods => {
        debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category);
      });
    });
  });
  searchInput.addEventListener('input', () => {
    debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category);
  });
  checkBoxInp.addEventListener('click', () => {
    showChecked();
    debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category);
  });
  minInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category));
  minInp.addEventListener('keypress', checkNumInput);
  maxInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category));
  maxInp.addEventListener('keypress', checkNumInput);
};
/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ "./src/js/modules/load.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");
/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ "./src/js/modules/catalog.js");




window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('cart', '.cart', '.cart-close', '.cart-body', 'cart-confirm');
  Object(_modules_search__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_load__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_catalog__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async cart => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(cart)
  });
  return await res.json();
};
const getResource = async value => {
  try {
    const res = await fetch(`https://test-4abc2-default-rtdb.firebaseio.com/goods.json?${value ? `search=${value}` : ''}`);
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map