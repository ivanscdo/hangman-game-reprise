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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hangman.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hangman.js":
/*!********************!*\
  !*** ./hangman.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hangmanStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hangmanStyle.js */ \"./hangmanStyle.js\");\n\r\n\r\n// let wordList = [\"Google\", \"DuckDuckGo\", \"Bing\", \"WolframAlpha\"];\r\nlet wordList = [\"Bing\"];\r\n// let wordList = [\"Bing\", \"Google\"];\r\nlet computerChoice = \"\";\r\nlet alreadyGuessed = [];\r\nlet currentWord = [];\r\nlet guessesStart = 10\r\nlet guessesRemaining = guessesStart;\r\nlet wins = 0;\r\nlet losses = 0;\r\n\r\nlet form = document.querySelector(\"form\");\r\nlet input = document.querySelector(\"input\");\r\nlet startButton = document.querySelector(\"button.start-button\");\r\nlet navNavbar = document.querySelector(\"nav.navbar\");\r\n\r\nlet statsContainer = document.querySelector(\".stats-container\");\r\nlet winsCount = document.querySelector(\".wins-count\");\r\nlet lossesCount = document.querySelector(\".losses-count\");\r\nlet currentWordCount = document.querySelector(\".current-word-count\");\r\nlet guessesRemCount = document.querySelector(\".guesses-remaining-count\");\r\nlet alreadyGuessedCount = document.querySelector(\".letters-already-guessed-count\");\r\n\r\n// prevents page reload when user hits Enter inside input\r\nform.addEventListener(\"submit\", function(e) {\r\n    e.preventDefault();\r\n});\r\n\r\nfunction ifGameWon() {\r\n    if (guessesRemaining !== 0 && currentWord.join(\"\") === computerChoice) {\r\n        wins++;\r\n        winsCount.innerHTML = wins;\r\n        input.value = \"You Won!\";\r\n        input.setAttribute(\"disabled\", true);\r\n        statsContainer.classList.remove(\"red-wine-success\");\r\n        navNavbar.classList.remove(\"red-wine-success\");\r\n        // resetStyle();\r\n    }\r\n}\r\n\r\nfunction ifGameLost() {\r\n    if (guessesRemaining === 0 ) {\r\n        losses++\r\n        lossesCount.innerHTML = losses;\r\n        input.value = \"You lost\";\r\n        input.setAttribute(\"disabled\", true);\r\n        statsContainer.classList.remove(\"red-wine-success\");\r\n        navNavbar.classList.remove(\"red-wine-success\");\r\n        Object(_hangmanStyle_js__WEBPACK_IMPORTED_MODULE_0__[\"resetStyle\"])();\r\n    }\r\n}\r\n\r\n// matches correct user guess to index of guess in mystery word\r\nfunction correctGuess(guessedLetter) {\r\n    for (let i = 0; i < computerChoice.length; i++) {\r\n        if (computerChoice[i] === guessedLetter) {\r\n            currentWord[i] = guessedLetter;\r\n            currentWordCount.innerHTML = currentWord.join(\"\");\r\n        } \r\n    }\r\n}\r\n\r\n// adds incorrect user guess to list of letters user has already guessed\r\nfunction incorrectGuess(guessedLetter) {\r\n    alreadyGuessed.push(guessedLetter);\r\n    alreadyGuessedCount.innerHTML = alreadyGuessed.join(\" \");\r\n} \r\n\r\n// checks if user guess is correct (indexOf doesn't return -1) or incorrect (indexOf returns -1)\r\n// passes to corresponding function: correctGuess() or incorrectGuess()\r\n// checks if game has been won or lost\r\nfunction indexOfGuess(guess, indexOfGuess) {\r\n    if (indexOfGuess !== -1 ) {\r\n        correctGuess(guess);\r\n        ifGameWon();\r\n    } else if (indexOfGuess === -1 && computerChoice !== \"\") {\r\n        guessesRemaining--\r\n        guessCounter(guessesRemaining);\r\n        incorrectGuess(guess);\r\n        ifGameLost();\r\n    }\r\n}\r\n\r\n// computerChoice (mystery word) contains both lower and upper case characters\r\n// user guess should match both lower and upper case, e.g.: g should match both G and g in Google\r\n// caseofGuess() converts user guess to both upper and lower case\r\n// checks if either lower or upper case match, if both match, if only one matches, or if there was no match\r\nfunction caseOfGuess(guessedLetter) {\r\n    let lowerCaseGuess = guessedLetter.toLowerCase();\r\n    let indexOfLowerCase = computerChoice.indexOf(lowerCaseGuess);\r\n    let upperCaseGuess = guessedLetter.toUpperCase();\r\n    let indexOfUpperCase = computerChoice.indexOf(upperCaseGuess);\r\n\r\n    if (indexOfLowerCase !== -1 || indexOfUpperCase !== -1) {\r\n        if (indexOfLowerCase !== -1 && indexOfUpperCase !== -1) {\r\n            indexOfGuess(lowerCaseGuess, indexOfLowerCase);\r\n            indexOfGuess(upperCaseGuess, indexOfUpperCase);\r\n        } else if (indexOfLowerCase !== -1) {\r\n            indexOfGuess(lowerCaseGuess, indexOfLowerCase);\r\n        } else if (indexOfUpperCase !== -1) {\r\n            indexOfGuess(upperCaseGuess, indexOfUpperCase);\r\n        }\r\n    } else {\r\n        indexOfGuess(lowerCaseGuess, indexOfLowerCase);\r\n    }\r\n}\r\n\r\n// game only accepts alphabetical characters\r\n// regex validates user input by checking KeyboardEvent Code, eg: letter a has code KeyA\r\nfunction onlyLetters(e) {\r\n    let onlyLetters = /Key[A-Z]/; \r\n\r\n    if (onlyLetters.test(e.code)) {\r\n        return e.key\r\n    }\r\n}\r\n\r\n// passes KeyboardEvent object to onlyLetters()\r\n// receives either letter or undefined\r\n// if letter, passes letter to caseOfGuess()\r\nfunction userGuess(e) {\r\n    let guessedLetter = onlyLetters(e);\r\n    console.log(guessedLetter);\r\n    if (guessedLetter) {\r\n        caseOfGuess(guessedLetter);\r\n    }\r\n}\r\n\r\nfunction guessCounter(num) {\r\n    guessesRemaining = num;\r\n    guessesRemCount.innerHTML = guessesRemaining;\r\n}\r\n\r\n// creates one underscore per letter in mystery word\r\nfunction gameboardSetup() {\r\n    // console.log(computerChoice)\r\n    currentWord = [];\r\n    for (let i = 0; i < computerChoice.length; i++) {\r\n        currentWord.push(\" _ \");\r\n        currentWordCount.innerHTML = currentWord.join(\"\");\r\n    }    \r\n}\r\n\r\nfunction resetGame() {\r\n    input.value = \"\";\r\n    input.setAttribute(\"placeholder\", `${computerChoice.length} letter word. Enter your guess here.`)\r\n    input.removeAttribute(\"disabled\");\r\n    alreadyGuessed = [];\r\n    alreadyGuessedCount.innerHTML = alreadyGuessed.join(\"\");\r\n}\r\n\r\nfunction startGame() {\r\n    computerChoice = wordList[Math.floor(Math.random() * wordList.length)];\r\n    console.log(`startGame(): ${computerChoice}`);\r\n    resetGame();\r\n    Object(_hangmanStyle_js__WEBPACK_IMPORTED_MODULE_0__[\"hangmanStyle\"])(computerChoice);\r\n    gameboardSetup();\r\n    guessCounter(guessesStart);\r\n    input.addEventListener(\"keyup\", userGuess);\r\n    statsContainer.classList.add(\"red-wine-success\");\r\n    navNavbar.classList.add(\"red-wine-success\");\r\n\r\n}\r\n\r\nstartButton.addEventListener(\"mouseup\", startGame);\r\n\r\n// uncomment: hangmanStyle, resetStyle, .stats-container\r\n// add: .d-none in .pug\n\n//# sourceURL=webpack:///./hangman.js?");

/***/ }),

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