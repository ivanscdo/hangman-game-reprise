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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hangmanStyle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hangmanStyle.js":
/*!*************************!*\
  !*** ./hangmanStyle.js ***!
  \*************************/
/*! exports provided: hangmanStyle, resetStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hangmanStyle\", function() { return hangmanStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetStyle\", function() { return resetStyle; });\nfunction cardClassifier(card) {\r\n    let cardClass = `.${card.toLowerCase().split(\" \").join(\"-\")}`;\r\n    return cardClass;\r\n}\r\n\r\nfunction cardCountClassifier(card) {\r\n    let cardClass = `.${card.toLowerCase().concat(\" count\").split(\" \").join(\"-\")}`;\r\n    return cardClass;\r\n}\r\n\r\nfunction cardDestroyer(cardItem) {\r\n    let footer = document.querySelector(\"footer\");\r\n    let cardClass = cardClassifier(cardItem);\r\n    let cardCountClass = cardCountClassifier(cardItem);\r\n\r\n    let card = document.querySelector(cardClass);\r\n    card.classList.remove(\"card-title\");\r\n\r\n    let cardCount = document.querySelector(cardCountClass);\r\n    cardCount.classList.remove(\"card-text\");\r\n\r\n    let cardDeck = document.querySelector(\".card-deck\");\r\n    if (cardDeck) {\r\n        cardDeck.remove();\r\n    }\r\n    console.log(`cardDestroyer!\r\n    card:      ${card}\r\n    cardCount: ${cardCount}`)\r\n    \r\n    footer.appendChild(card);\r\n    footer.appendChild(cardCount);\r\n}\r\n\r\nfunction resetStyle() {\r\n    let navbarLeft = document.querySelector(\".navbarLeft\");\r\n    let navbarRight = document.querySelector(\".navbarRight\");\r\n    if (navbarLeft && navbarRight) {\r\n        navbarLeft.remove();\r\n        navbarRight.remove();\r\n    }\r\n    // let cardTitles = [\"Wins\", \"Losses\", \"Current Word\", \"Guesses Remaining\", \"Letters Already Guessed\"];\r\n    // cardTitles.map(cardDestroyer);\r\n    // let bingFooter = document.querySelector(\".card-deck\");\r\n    // if (bingFooter) {\r\n    //     bingFooter.remove();\r\n    // }\r\n}\r\n\r\nfunction createNavItems(navItem) {\r\n    let navAnchor = document.createElement(\"a\");\r\n\r\n    navAnchor.classList.add(\"nav-item\", \"nav-link\");\r\n    navAnchor.setAttribute(\"href\", \"#\");\r\n    navAnchor.innerHTML = navItem;\r\n\r\n    return navAnchor;\r\n}\r\n\r\nfunction navbarBing() {\r\n        let navbar, navbarLeft, navbarLeftLinks, navbarRight, navbarRightLinks;\r\n\r\n        // document.querySelector(\"nav\").classList.remove(\"d-none\");\r\n    \r\n        navbar = document.getElementById(\"Hangman-Navbar\");\r\n\r\n        navbarLeft = document.createElement(\"div\");      \r\n        navbarLeft.classList.add(\"navbarLeft\", \"navbar-nav\", \"ml-5\", \"mr-auto\");\r\n        navbarLeftLinks = [\"Images\", \"Videos\", \"Maps\", \"News\", \"MSN\", \"Office Online\", \"Outlook\"];\r\n        navbarLeftLinks.map(createNavItems).forEach(navItem => navbarLeft.appendChild(navItem));\r\n        navbar.appendChild(navbarLeft);\r\n\r\n        navbarRight = document.createElement(\"div\");\r\n        navbarRight.classList.add(\"navbarRight\", \"navbar-nav\",  \"mr-5\");\r\n        navbarRightLinks = [\"Sign In\", \"<i class='fas fa-user'>\", \"Rewards\", \"<i class='fas fa-gift'>\", \"<span class='navbar-toggler-icon'>\"];\r\n        navbarRightLinks.map(createNavItems).forEach(navItem => navbarRight.appendChild(navItem));\r\n        navbar.appendChild(navbarRight);\r\n}\r\n\r\nfunction cardCreator(cardItem) {\r\n    let card, cardBody, cardClass, cardTitle, cardCountClass, cardText;\r\n\r\n    card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    cardBody = document.createElement(\"div\");\r\n    cardBody.classList.add(\"card-body\");\r\n\r\n    cardClass = cardClassifier(cardItem)\r\n    cardTitle = document.querySelector(cardClass);\r\n    cardTitle.classList.add(\"card-title\");\r\n    cardBody.appendChild(cardTitle);\r\n\r\n    cardCountClass = cardCountClassifier(cardItem)\r\n    cardText = document.querySelector(cardCountClass);\r\n    cardText.classList.add(\"card-text\");\r\n    cardBody.appendChild(cardText);\r\n    card.appendChild(cardBody);\r\n\r\n    return card\r\n}\r\n\r\nfunction footerBing() {\r\n    let footer, cardDeck, cardTitles;\r\n\r\n    footer = document.querySelector(\"footer\");\r\n    cardDeck = document.createElement(\"div\");\r\n    cardDeck.classList.add(\"card-deck\");\r\n    cardTitles = [\"Wins\", \"Losses\", \"Current Word\", \"Guesses Remaining\", \"Letters Already Guessed\"];\r\n    cardTitles.map(cardCreator).forEach(cardItem => cardDeck.appendChild(cardItem));\r\n    footer.appendChild(cardDeck);\r\n}\r\n\r\nfunction hangmanStyle(computerChoice) {\r\n    resetStyle();\r\n\r\n    if (computerChoice === \"Bing\") {\r\n        navbarBing();\r\n        footerBing()\r\n    }\r\n    // else if (computerChoice === \"DuckDuckGo\") {\r\n    //     hangmanDuckDuckGo();\r\n    // } else if (computerChoice === \"WolframAlpha\") {\r\n    //     hangmanWolframAlpha();\r\n    // }  else if (computerChoice === \"Google\") {\r\n    //     hangmanGoogle(); \r\n    // }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./hangmanStyle.js?");

/***/ })

/******/ });