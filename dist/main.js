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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-setup */ \"./src/page-setup.js\");\n\n\n\n(0,_page_setup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n\n//# sourceURL=webpack://ossys-restuarant/./src/index.js?");

/***/ }),

/***/ "./src/page-setup.js":
/*!***************************!*\
  !*** ./src/page-setup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst content = document.getElementById('content')\n\nfunction createHeader() {\n    const header = document.createElement('div')\n    header.classList.add('header')\n\n    const nav = document.createElement('div');\n    nav.classList.add('nav')\n\n    const headerLogo = document.createElement('div');\n    headerLogo.classList.add('logo')\n    headerLogo.textContent  = \"Ossy's\";\n    \n\n\n    const navItems = document.createElement('div');\n    navItems.classList.add('navItems')\n\n    const navUL = document.createElement('ul');\n    navUL.classList.add('navUL')\n\n    const navBook = document.createElement('li');\n    navBook.classList.add('navli')\n    navBook.textContent = 'Book a table'\n\n    const navMenu = document.createElement('li');\n    navMenu.classList.add('navli')\n    navMenu.textContent = 'Menus'\n\n\n    const navEvents = document.createElement('li');\n    navEvents.classList.add('navli')\n    navEvents.textContent = 'Events & offers'\n\n\n    const navContact = document.createElement('li');\n    navContact.classList.add('navli')\n    navContact.textContent = 'Contact'\n\n\n    const hambugerMenu = document.createElement('div')\n    hambugerMenu.classList.add('hambugerMenu')\n    const aLink = document.createElement('a')\n    aLink.classList.add('aLink')\n    const svgImage = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"45\" height=\"50\"><path d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" /></svg>'\n    aLink.innerHTML = svgImage;\n\n    hambugerMenu.appendChild(aLink);\n    navUL.appendChild(navBook);\n    navUL.appendChild(navMenu);\n    navUL.appendChild(navEvents);\n    navUL.appendChild(navContact);\n\n    navItems.appendChild(navUL);\n    nav.appendChild(headerLogo);\n    nav.appendChild(navItems);\n    nav.appendChild(hambugerMenu);\n    header.appendChild(nav);\n    return header;\n};\n\n\nfunction createMain() {\n    const main = document.createElement('div')\n    main.classList.add('main')\n\n    const firstMain = document.createElement('div')\n    firstMain.classList.add('firstMain')\n    \n    \n    main.appendChild(firstMain)\n    return main;\n};\n\nfunction createFooter() {\n    const footer = document.createElement('div')\n    footer.classList.add('footer')\n    return footer;\n};\n\n\nfunction initialisePage() {\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialisePage);\n\n//# sourceURL=webpack://ossys-restuarant/./src/page-setup.js?");

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