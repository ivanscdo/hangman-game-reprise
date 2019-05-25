import {hangmanStyle, resetStyle} from './hangmanStyle.js';

// let wordList = ["Google", "DuckDuckGo", "Bing", "WolframAlpha"];
let wordList = ["Bing"];
// let wordList = ["Bing", "Google"];
let computerChoice = "";
let alreadyGuessed = [];
let currentWord = [];
let guessesStart = 10
let guessesRemaining = guessesStart;
let wins = 0;
let losses = 0;

let form = document.querySelector("form");
let input = document.querySelector("input");
let startButton = document.querySelector("button.start-button");
let navNavbar = document.querySelector("nav.navbar");

let statsContainer = document.querySelector(".stats-container");
let winsCount = document.querySelector(".wins-count");
let lossesCount = document.querySelector(".losses-count");
let currentWordCount = document.querySelector(".current-word-count");
let guessesRemCount = document.querySelector(".guesses-remaining-count");
let alreadyGuessedCount = document.querySelector(".letters-already-guessed-count");

// prevents page reload when user hits Enter inside input
form.addEventListener("submit", function(e) {
    e.preventDefault();
});

function ifGameWon() {
    if (guessesRemaining !== 0 && currentWord.join("") === computerChoice) {
        wins++;
        winsCount.innerHTML = wins;
        input.value = "You Won!";
        input.setAttribute("disabled", true);
        statsContainer.classList.remove("red-wine-success");
        navNavbar.classList.remove("red-wine-success");
        // resetStyle();
    }
}

function ifGameLost() {
    if (guessesRemaining === 0 ) {
        losses++
        lossesCount.innerHTML = losses;
        input.value = "You lost";
        input.setAttribute("disabled", true);
        statsContainer.classList.remove("red-wine-success");
        navNavbar.classList.remove("red-wine-success");
        resetStyle();
    }
}

// matches correct user guess to index of guess in mystery word
function correctGuess(guessedLetter) {
    for (let i = 0; i < computerChoice.length; i++) {
        if (computerChoice[i] === guessedLetter) {
            currentWord[i] = guessedLetter;
            currentWordCount.innerHTML = currentWord.join("");
        } 
    }
}

// adds incorrect user guess to list of letters user has already guessed
function incorrectGuess(guessedLetter) {
    alreadyGuessed.push(guessedLetter);
    alreadyGuessedCount.innerHTML = alreadyGuessed.join(" ");
} 

// checks if user guess is correct (indexOf doesn't return -1) or incorrect (indexOf returns -1)
// passes to corresponding function: correctGuess() or incorrectGuess()
// checks if game has been won or lost
function indexOfGuess(guess, indexOfGuess) {
    if (indexOfGuess !== -1 ) {
        correctGuess(guess);
        ifGameWon();
    } else if (indexOfGuess === -1 && computerChoice !== "") {
        guessesRemaining--
        guessCounter(guessesRemaining);
        incorrectGuess(guess);
        ifGameLost();
    }
}

// computerChoice (mystery word) contains both lower and upper case characters
// user guess should match both lower and upper case, e.g.: g should match both G and g in Google
// caseofGuess() converts user guess to both upper and lower case
// checks if either lower or upper case match, if both match, if only one matches, or if there was no match
function caseOfGuess(guessedLetter) {
    let lowerCaseGuess = guessedLetter.toLowerCase();
    let indexOfLowerCase = computerChoice.indexOf(lowerCaseGuess);
    let upperCaseGuess = guessedLetter.toUpperCase();
    let indexOfUpperCase = computerChoice.indexOf(upperCaseGuess);

    if (indexOfLowerCase !== -1 || indexOfUpperCase !== -1) {
        if (indexOfLowerCase !== -1 && indexOfUpperCase !== -1) {
            indexOfGuess(lowerCaseGuess, indexOfLowerCase);
            indexOfGuess(upperCaseGuess, indexOfUpperCase);
        } else if (indexOfLowerCase !== -1) {
            indexOfGuess(lowerCaseGuess, indexOfLowerCase);
        } else if (indexOfUpperCase !== -1) {
            indexOfGuess(upperCaseGuess, indexOfUpperCase);
        }
    } else {
        indexOfGuess(lowerCaseGuess, indexOfLowerCase);
    }
}

// game only accepts alphabetical characters
// regex validates user input by checking KeyboardEvent Code, eg: letter a has code KeyA
function onlyLetters(e) {
    let onlyLetters = /Key[A-Z]/; 

    if (onlyLetters.test(e.code)) {
        return e.key
    }
}

// passes KeyboardEvent object to onlyLetters()
// receives either letter or undefined
// if letter, passes letter to caseOfGuess()
function userGuess(e) {
    let guessedLetter = onlyLetters(e);
    console.log(guessedLetter);
    if (guessedLetter) {
        caseOfGuess(guessedLetter);
    }
}

function guessCounter(num) {
    guessesRemaining = num;
    guessesRemCount.innerHTML = guessesRemaining;
}

// creates one underscore per letter in mystery word
function gameboardSetup() {
    // console.log(computerChoice)
    currentWord = [];
    for (let i = 0; i < computerChoice.length; i++) {
        currentWord.push(" _ ");
        currentWordCount.innerHTML = currentWord.join("");
    }    
}

function resetGame() {
    input.value = "";
    input.setAttribute("placeholder", `${computerChoice.length} letter word. Enter your guess here.`)
    input.removeAttribute("disabled");
    alreadyGuessed = [];
    alreadyGuessedCount.innerHTML = alreadyGuessed.join("");
}

function startGame() {
    computerChoice = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(`startGame(): ${computerChoice}`);
    resetGame();
    hangmanStyle(computerChoice);
    gameboardSetup();
    guessCounter(guessesStart);
    input.addEventListener("keyup", userGuess);
    statsContainer.classList.add("red-wine-success");
    navNavbar.classList.add("red-wine-success");

}

startButton.addEventListener("mouseup", startGame);

// uncomment: hangmanStyle, resetStyle, .stats-container
// add: .d-none in .pug