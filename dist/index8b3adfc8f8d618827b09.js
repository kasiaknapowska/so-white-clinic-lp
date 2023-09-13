/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/cookies.js":
/*!***************************!*\
  !*** ./src/js/cookies.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cookies": () => (/* binding */ Cookies)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Cookies = /*#__PURE__*/function () {
  function Cookies(banner) {
    _classCallCheck(this, Cookies);
    this.banner = banner;
    this.checkAcceptance();
    this.closeCookies();
  }
  _createClass(Cookies, [{
    key: "checkAcceptance",
    value: function checkAcceptance() {
      var self = this;
      if (localStorage.getItem("cookiesAccepted") === null) {
        setTimeout(function () {
          self.banner.classList.remove("d-none");
        }, 5000);
      }
    }
  }, {
    key: "closeCookies",
    value: function closeCookies() {
      var self = this;
      this.banner.lastElementChild.addEventListener("click", function () {
        self.banner.classList.add("d-none");
        localStorage.setItem("cookiesAccepted", true);
      });
    }
  }]);
  return Cookies;
}();

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* binding */ Form)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Form = /*#__PURE__*/function () {
  function Form(form, fields, loader, submitBtn) {
    _classCallCheck(this, Form);
    this.form = form;
    this.fields = fields;
    this.loader = loader;
    this.submitBtn = submitBtn;
    this.formData = {};
    this.validateOnSubmit();
  }
  _createClass(Form, [{
    key: "validateOnSubmit",
    value: function validateOnSubmit() {
      var _this = this;
      var self = this;
      this.form.addEventListener("submit", function (e) {
        e.preventDefault();
        var errors = 0;
        self.fields.forEach(function (field) {
          var input = _this.form[field];
          if (self.validateFields(input) === false) {
            errors++;
          }
        });
        if (errors === 0) {
          _this.formData = new FormData(_this.form);
          _this.sendMail(_this.formData);
          _this.submitBtn.style.display = "none";
          _this.loader.style.display = "block";
        }
      });
    }
  }, {
    key: "validateFields",
    value: function validateFields(field) {
      var emailValidRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (field.name !== "message" && field.value.trim() === "") {
        this.setStatus(field, "Wypełnij to pole", "error");
        return false;
      }
      if (field.name === "phone" && (field.value.length < 7 || !isFinite(field.value))) {
        this.setStatus(field, "Podaj prawidłowy numer telefonu", "error");
        return false;
      }
      if (field.name === "email" && !field.value.match(emailValidRegEx)) {
        this.setStatus(field, "Podaj prawidłowy adres e-mail", "error");
        return false;
      }
      if (field.type === "checkbox" && !field.checked) {
        this.setStatus(field, "Zaznacz zgodę", "error");
        return false;
      }
      this.setStatus(field, null, "success");
      return true;
    }
  }, {
    key: "setStatus",
    value: function setStatus(field, message, status) {
      var errorMessage = field.parentElement.querySelector(".error-message");
      if (status === "error") {
        errorMessage.innerText = message;
        field.classList.add("input-error");
      }
      if (status === "success") {
        if (errorMessage) {
          errorMessage.innerText = "";
        }
        field.classList.remove("input-error");
      }
    }
  }, {
    key: "makeRequest",
    value: function makeRequest(title, formData, endpoint) {
      return fetch("https://formsubmit.co/ajax/".concat(endpoint), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          title: title,
          name: "".concat(formData.get("name")),
          email: "".concat(formData.get("email")),
          phone: "".concat(formData.get("phone")),
          message: "".concat(formData.get("message"))
        })
      }).then(function (response) {
        return response.json();
      });
    }
  }, {
    key: "sendMail",
    value: function sendMail(formData) {
      var request1 = this.makeRequest("New lead from So white Clinic landing page", formData, "ca26f5ec6f466a4de7ad179895f5f8d8");
      var request2 = this.makeRequest("New lead from So white Clinic landing page", formData, "708204b20fd8f37dc286446700a680df");
      Promise.all([request1, request2]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          data1 = _ref2[0],
          data2 = _ref2[1];
        console.log(data1, data2);
        window.location.replace("/thankyou.html");
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }]);
  return Form;
}();

/***/ }),

/***/ "./src/js/scrollToTop.js":
/*!*******************************!*\
  !*** ./src/js/scrollToTop.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollToTop": () => (/* binding */ ScrollToTop)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ScrollToTop = /*#__PURE__*/function () {
  function ScrollToTop(button) {
    _classCallCheck(this, ScrollToTop);
    this.button = button;
    this.displayOnScroll();
    this.scrollOnClick();
  }
  _createClass(ScrollToTop, [{
    key: "displayOnScroll",
    value: function displayOnScroll() {
      var self = this;
      var width = document.body.clientWidth;
      if (width > 900) {
        window.addEventListener("scroll", function () {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            self.button.style.display = "block";
          } else {
            self.button.style.display = "none";
          }
        });
      }
    }
  }, {
    key: "scrollOnClick",
    value: function scrollOnClick() {
      this.button.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
  }]);
  return ScrollToTop;
}();

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons/icon-fb.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/icon-fb.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-fb.svg";

/***/ }),

/***/ "./src/assets/icons/icon-home.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/icon-home.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-home.svg";

/***/ }),

/***/ "./src/assets/icons/icon-insta.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/icon-insta.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-insta.svg";

/***/ }),

/***/ "./src/assets/icons/icon-mail.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/icon-mail.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-mail.svg";

/***/ }),

/***/ "./src/assets/icons/icon-phone.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/icon-phone.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon-phone.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _js_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/form */ "./src/js/form.js");
/* harmony import */ var _js_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/cookies */ "./src/js/cookies.js");
/* harmony import */ var _js_scrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/scrollToTop */ "./src/js/scrollToTop.js");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_icons_icon_fb_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/icon-fb.svg */ "./src/assets/icons/icon-fb.svg");
/* harmony import */ var _assets_icons_icon_insta_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/icon-insta.svg */ "./src/assets/icons/icon-insta.svg");
/* harmony import */ var _assets_icons_icon_phone_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/icon-phone.svg */ "./src/assets/icons/icon-phone.svg");
/* harmony import */ var _assets_icons_icon_home_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icons/icon-home.svg */ "./src/assets/icons/icon-home.svg");
/* harmony import */ var _assets_icons_icon_mail_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icons/icon-mail.svg */ "./src/assets/icons/icon-mail.svg");










window.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

  // icons
  var logoImg = document.getElementById("logo");
  logoImg.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__;
  var fbImg = document.getElementById("fb");
  fbImg.src = _assets_icons_icon_fb_svg__WEBPACK_IMPORTED_MODULE_5__;
  var inImg = document.getElementById("in");
  inImg.src = _assets_icons_icon_insta_svg__WEBPACK_IMPORTED_MODULE_6__;
  var phoneImg = document.getElementById("callus");
  phoneImg.src = _assets_icons_icon_phone_svg__WEBPACK_IMPORTED_MODULE_7__;
  var phone1Img = document.getElementById("phone1");
  phone1Img.src = _assets_icons_icon_phone_svg__WEBPACK_IMPORTED_MODULE_7__;
  var homeImg = document.getElementById("home");
  homeImg.src = _assets_icons_icon_home_svg__WEBPACK_IMPORTED_MODULE_8__;
  var mailImg = document.getElementById("mail");
  mailImg.src = _assets_icons_icon_mail_svg__WEBPACK_IMPORTED_MODULE_9__;

  //form
  var form = document.querySelector("#contact-form");
  var fields = ["name", "phone", "email", "message", "acceptdata", "acceptpolicy"];
  var loader = document.querySelector(".lds-ring");
  var submitBtn = document.querySelector(".submit-text");
  var validator = new _js_form__WEBPACK_IMPORTED_MODULE_1__.Form(form, fields, loader, submitBtn);

  // cookie banner
  var cookieBanner = document.querySelector(".cookies");
  var cookies = new _js_cookies__WEBPACK_IMPORTED_MODULE_2__.Cookies(cookieBanner);
});

//scroll to top button
var scrollToTopBtn = document.querySelector("#scrollToTop");
var top = new _js_scrollToTop__WEBPACK_IMPORTED_MODULE_3__.ScrollToTop(scrollToTopBtn);
})();

/******/ })()
;
//# sourceMappingURL=index8b3adfc8f8d618827b09.js.map