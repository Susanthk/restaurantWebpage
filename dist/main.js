/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createDescription(){\n    let description = document.createElement(\"p\")\n    description.innerText = \"Best Pizza in Arlington,TX!\"\n    return description\n}\n\nfunction clear_children(div){\n    while(div.firstChild){\n        div.removeChild(div.firstChild)\n    }\n}\nfunction loadHomePage(){\n    \n    \n    let content = document.querySelector(\".details\")\n    clear_children(content)\n\n\n    let description = createDescription()\n    content.appendChild(description)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\n\n//# sourceURL=webpack://restaurantwebpage/./pages/home.js?");

/***/ }),

/***/ "./pages/init_page.js":
/*!****************************!*\
  !*** ./pages/init_page.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader(){\n    let header = document.createElement(\"h1\")\n    header.textContent = \"Marcos Pizza\"\n    return header\n}\n\nfunction nav_bar(){\n    let navBar = document.createElement('nav')\n    navBar.classList.add('navBar')\n\n    let homeButton = document.createElement('button')\n    homeButton.innerText = \"Home\"\n    homeButton.setAttribute('id','home')\n    //homeButton.addEventListener(\"click\", console.log(\"Choose home\"))\n\n    let menuButton = document.createElement('button')\n    menuButton.innerHTML = \"Menu\"\n    menuButton.setAttribute('id','menu')\n    //menuButton.addEventListener(\"click\", console.log(\"Choose menu\"))\n    \n\n    navBar.appendChild(homeButton)\n    navBar.appendChild(menuButton)\n\n    return navBar\n}\n\nfunction initialize_page(){\n    let content = document.getElementById(\"content\")\n    let header = createHeader()\n    let navBar = nav_bar()\n    let details = document.createElement(\"div\")\n    details.classList.add(\"details\")\n\n    content.appendChild(header)\n    content.appendChild(navBar)\n    content.append(details)\n\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize_page);\n\n\n//# sourceURL=webpack://restaurantwebpage/./pages/init_page.js?");

/***/ }),

/***/ "./pages/menu.js":
/*!***********************!*\
  !*** ./pages/menu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction clear_children(div){\n    while(div.firstChild){\n        div.removeChild(div.firstChild)\n    }\n}\n\nfunction createMenu(){\n\n    let item = document.createElement(\"div\")\n    item.classList.add(\"item\")\n\n    let itemImg = document.createElement(\"img\")\n    itemImg.setAttribute(\"id\", \"guttivankayaImg\")\n    itemImg.src = \"../img/guttivankaya.jpeg\"\n\n    let desc = document.createElement(\"p\")\n    desc.setAttribute(\"id\", \"guttivankayaTxt\")\n    desc.textContent = \"Egg plant curry\"\n\n    item.appendChild(itemImg)\n    item.appendChild(desc)\n\n    return item\n\n}\n\n\nfunction displayMenu(){\n    let content = document.querySelector(\".details\")\n\n    clear_children(content)\n\n    let menu = createMenu()\n    content.appendChild(menu)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurantwebpage/./pages/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home.js */ \"./pages/home.js\");\n/* harmony import */ var _pages_init_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/init_page.js */ \"./pages/init_page.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu.js */ \"./pages/menu.js\");\n\n\n\n\n\n\n\nfunction navBar(){\n    let homeButton = document.querySelector(\"#home\")\n    homeButton.addEventListener(\"click\", _pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n    let menuButton = document.querySelector(\"#menu\")\n    menuButton.addEventListener(\"click\", _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] )\n\n}\n\ninit()\nfunction init(){\n\n    ;(0,_pages_init_page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    navBar()\n    ;(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    \n}\n\n\n\n//# sourceURL=webpack://restaurantwebpage/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;