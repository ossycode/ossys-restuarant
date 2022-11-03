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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst content = document.getElementById('content')\n\nfunction createHeader() {\n    const header = document.createElement('div')\n    header.classList.add('header')\n\n    const nav = document.createElement('div');\n    nav.classList.add('nav')\n\n    const headerLogo = document.createElement('div');\n    headerLogo.classList.add('logo')\n    headerLogo.textContent  = \"Ossy's\";\n    \n\n\n    const navItems = document.createElement('div');\n    navItems.classList.add('navItems')\n\n    const navUL = document.createElement('ul');\n    navUL.classList.add('navUL')\n\n    const navBook = document.createElement('li');\n    navBook.classList.add('navli')\n    navBook.textContent = 'Book a table'\n\n    const navMenu = document.createElement('li');\n    navMenu.classList.add('navli')\n    navMenu.textContent = 'Menus'\n\n\n    const navEvents = document.createElement('li');\n    navEvents.classList.add('navli')\n    navEvents.textContent = 'Events & offers'\n\n\n    const navContact = document.createElement('li');\n    navContact.classList.add('navli')\n    navContact.textContent = 'Contact'\n\n\n    const hambugerMenu = document.createElement('div')\n    hambugerMenu.classList.add('hambugerMenu')\n    const aLink = document.createElement('a')\n    aLink.classList.add('aLink')\n    const svgImage = '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"45\" height=\"50\"><path d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" /></svg>'\n    aLink.innerHTML = svgImage;\n\n    hambugerMenu.appendChild(aLink);\n    navUL.appendChild(navBook);\n    navUL.appendChild(navMenu);\n    navUL.appendChild(navEvents);\n    navUL.appendChild(navContact);\n\n    navItems.appendChild(navUL);\n    nav.appendChild(headerLogo);\n    nav.appendChild(navItems);\n    nav.appendChild(hambugerMenu);\n    header.appendChild(nav);\n    return header;\n};\n\n\nfunction createMain() {\n    const main = document.createElement('div')\n    main.classList.add('main')\n\n    const firstMain = document.createElement('div')\n    firstMain.classList.add('firstMain')\n    \n    //Create the slider\n    const wrapper = document.createElement('div')\n    wrapper.classList.add('wrapper')\n\n    const slider1 = document.createElement('img')\n    slider1.setAttribute('src', '../dist/assets/images/image1.jpg')\n\n    const slider2 = document.createElement('img')\n    slider2.setAttribute('src', '../dist/assets/images/Halloween-Pancake_2-3.jpg')\n\n    const slider3 = document.createElement('img')\n    slider3.setAttribute('src', '../dist/assets/images/image1.jpg')\n\n    const slider4 = document.createElement('img')\n    slider4.setAttribute('src', '../dist/assets/images/Halloween-Pancake_2-3.jpg')\n\n    // Create the information\n    const firstMainInfo = document.createElement('div')\n    firstMainInfo.classList.add('firstMainInfo')\n    firstMainInfo.innerHTML = \" <h1>HERE'S TO GOOD FRIENDS, GOOD FOOD & GOOD TIMES</h1>\" \n    firstMain.appendChild(firstMainInfo)\n\n    //Create the form to book a table on the main screen\n\n    const people = ['1 People', '2 People', '3 People', '4 People', '5 People', '6 People',\n    '7 People', '8 People','9 People','10 People','11 People','12 People','13 People','14 People',\n    '15 People']\n\n    const bookTable =  document.createElement('div');\n    bookTable.classList.add('bookTable')\n    bookTable.innerHTML = \"<h2>Book a table</h2>\"\n\n    const bookTableForm =  document.createElement('form');\n    bookTableForm.classList.add('bookTableForm')\n    bookTableForm.setAttribute('method',\"post\");\n    bookTableForm.setAttribute('action',\"submit.php\");\n\n    const locationInput = document.createElement(\"input\");\n    locationInput.classList.add('locationInput')\n    locationInput.setAttribute('type',\"text\");\n    locationInput.setAttribute('name',\"location\")\n    locationInput.setAttribute('placeholder',\"Enter location\")\n\n    const selectList = document.createElement(\"select\");\n    selectList.classList.add('mySelect')\n    \n\n    //Create and append the options\n    for (let i = 0; i < people.length; i++) {\n        let option = document.createElement(\"option\");\n        option.value = people[i];\n        option.text = people[i];\n        selectList.appendChild(option);\n    }\n\n    const dateInput = document.createElement(\"input\");\n    dateInput.classList.add('dateInput')\n    dateInput.setAttribute('type',\"date\");\n    dateInput.setAttribute('name',\"date\")\n    \n    const timeInput = document.createElement(\"input\");\n    timeInput.classList.add('timeInput')\n    timeInput.setAttribute('type',\"time\");\n    timeInput.setAttribute('name',\"time\")\n\n    const bookTableFormBtn = document.createElement(\"input\");\n    bookTableFormBtn.classList.add('formBtn')\n    bookTableFormBtn.setAttribute('type',\"submit\");\n    bookTableFormBtn.setAttribute('value',\"GO\");\n\n\n    bookTableForm.appendChild(locationInput);\n    bookTableForm.appendChild(selectList);\n    bookTableForm.appendChild(dateInput);\n    bookTableForm.appendChild(timeInput);\n    bookTableForm.appendChild(bookTableFormBtn);\n    bookTable.appendChild(bookTableForm)\n    firstMain.appendChild(bookTable)\n\n\n    wrapper.appendChild(slider1)\n    wrapper.appendChild(slider2)\n    wrapper.appendChild(slider3)\n    wrapper.appendChild(slider4)\n    firstMain.appendChild(wrapper)\n    main.appendChild(firstMain)\n\n\n    const whatOn = document.createElement(\"div\");\n    whatOn.classList.add('whatOn')\n    whatOn.innerHTML = \"<h1>What's on at Ossy's</h1>\"\n    main.appendChild(whatOn)\n\n    const whatOnInfo1 = document.createElement(\"div\");\n    whatOnInfo1.classList.add('whatOnInfo1')\n    \n\n    const whatOnInfo1TopLeft = document.createElement(\"div\");\n    whatOnInfo1TopLeft.classList.add('whatOnInfo1TopLeft')\n    whatOnInfo1.appendChild(whatOnInfo1TopLeft)\n\n    const whatOnInfo1TopRight = document.createElement(\"div\");\n    whatOnInfo1TopRight.classList.add('whatOnInfo1TopRight')\n    whatOnInfo1.appendChild(whatOnInfo1TopRight)\n    whatOnInfo1TopRight.innerHTML = \"<div> <h2>Christmas at Ossy's</h2><p> Get Christmas Party Ready with Ossy's! </p> <button type='submit'>Find our more </button></div>\";\n\n\n    const whatOnInfo1DownLeft = document.createElement(\"div\");\n    whatOnInfo1DownLeft.classList.add('whatOnInfo1DownLeft')\n    whatOnInfo1.appendChild(whatOnInfo1DownLeft)\n    whatOnInfo1DownLeft.innerHTML = \"<div> <h2>Seasonal Set Menu</h2><p> Sometimes being spoilt for choice makes it hard to make a choice at all. Fortunately our <br> carefully selected set menu makes it easier</p> <button type='submit'>Find our more </button></div>\";\n\n\n    const whatOnInfo1DownRight = document.createElement(\"div\");\n    whatOnInfo1DownRight.classList.add('whatOnInfo1DownRight')\n    whatOnInfo1.appendChild(whatOnInfo1DownRight)\n\n    main.appendChild(whatOnInfo1)\n    return main;\n};\n\nfunction createFooter() {\n    const footer = document.createElement('div')\n    footer.classList.add('footer')\n\n    const footerInfo = document.createElement('div')\n\n    const footerLogo = document.createElement('div');\n    footerLogo.classList.add('footerLogo')\n    footerLogo.textContent  = \"Ossy's\";\n\n    const footerLogoUL1 = document.createElement('ul');\n    footerLogoUL1.classList.add('footerLogoUL1')\n\n    const Ul1li1 = document.createElement('li');\n    Ul1li1.textContent  = \"Book a table\";\n    footerLogoUL1.appendChild(Ul1li1)\n\n    const Ul1li2 = document.createElement('li');\n    Ul1li2.textContent  = \"Menus\";\n    footerLogoUL1.appendChild(Ul1li2)\n\n    const Ul1li3 = document.createElement('li');\n    Ul1li3.textContent  = \"Private dinning\";\n    footerLogoUL1.appendChild(Ul1li3)\n\n    const Ul1li4 = document.createElement('li');\n    Ul1li4.textContent  = \"Locations\";\n    footerLogoUL1.appendChild(Ul1li4)\n    \n\n    const footerLogoUL2 = document.createElement('ul');\n    footerLogoUL2.classList.add('footerLogoUL2')\n\n    const Ul2li1 = document.createElement('li');\n    Ul1li2.textContent  = \"Contact us\";\n    footerLogoUL2.appendChild(Ul2li1)\n\n    const Ul2li2 = document.createElement('li');\n    Ul1li3.textContent  = \"FAQs\";\n    footerLogoUL2.appendChild(Ul2li2)\n\n    const Ul2li3 = document.createElement('li');\n    Ul2li3.textContent  = \"Join the team\";\n    footerLogoUL2.appendChild(Ul2li3)\n\n    const Ul2li4 = document.createElement('li');\n    Ul2li4.textContent  = \"Terms & Conditions\";\n    footerLogoUL2.appendChild(Ul2li4)\n    \n\n    const footerSocial = document.createElement('div');\n    footerSocial.classList.add('footerSocial')\n    const footerSocialh2 = document.createElement('h2');\n    footerSocialh2.textContent  = \"Follow us\";\n    footerSocial.appendChild(footerSocialh2)\n    \n\n    const footerNewsletter = document.createElement('div');\n    footerNewsletter.classList.add('footerNewsletter')\n    const footerNewsletterh2 = document.createElement('h2');\n    footerNewsletterh2.textContent  = \"Newsletter\";\n    footerNewsletter.appendChild(footerNewsletterh2)\n    const footerNewsletterBtn = document.createElement('button');\n    button.setAttribute('type', 'submit')\n    button.setAttribute('value', 'Sign up')\n\n   \n    footerInfo.appendChild(footerLogo)\n\n    footer.appendChild(footerInfo)\n    return footer;\n};\n\n\nfunction initialisePage() {\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialisePage);\n\n//# sourceURL=webpack://ossys-restuarant/./src/page-setup.js?");

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