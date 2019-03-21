function cardClassifier(card) {
    let cardClass = `.${card.toLowerCase().split(" ").join("-")}`;
    return cardClass;
}

function cardCountClassifier(card) {
    let cardClass = `.${card.toLowerCase().concat(" count").split(" ").join("-")}`;
    return cardClass;
}

function cardDestroyer(cardItem) {
    let footer = document.querySelector("footer");
    let cardClass = cardClassifier(cardItem);
    let cardCountClass = cardCountClassifier(cardItem);

    let card = document.querySelector(cardClass);
    card.classList.remove("card-title");

    let cardCount = document.querySelector(cardCountClass);
    cardCount.classList.remove("card-text");

    let cardDeck = document.querySelector(".card-deck");
    if (cardDeck) {
        cardDeck.remove();
    }
    console.log(`cardDestroyer!
    card:      ${card}
    cardCount: ${cardCount}`)
    
    footer.appendChild(card);
    footer.appendChild(cardCount);
}

function resetStyle() {
    let navbarLeft = document.querySelector(".navbarLeft");
    let navbarRight = document.querySelector(".navbarRight");
    if (navbarLeft && navbarRight) {
        navbarLeft.remove();
        navbarRight.remove();
    }
    // let cardTitles = ["Wins", "Losses", "Current Word", "Guesses Remaining", "Letters Already Guessed"];
    // cardTitles.map(cardDestroyer);
    // let bingFooter = document.querySelector(".card-deck");
    // if (bingFooter) {
    //     bingFooter.remove();
    // }
}

function createNavItems(navItem) {
    let navAnchor = document.createElement("a");

    navAnchor.classList.add("nav-item", "nav-link");
    navAnchor.setAttribute("href", "#");
    navAnchor.innerHTML = navItem;

    return navAnchor;
}

function navbarBing() {
        let navbar, navbarLeft, navbarLeftLinks, navbarRight, navbarRightLinks;

        // document.querySelector("nav").classList.remove("d-none");
    
        navbar = document.getElementById("Hangman-Navbar");

        navbarLeft = document.createElement("div");      
        navbarLeft.classList.add("navbarLeft", "navbar-nav", "ml-5", "mr-auto");
        navbarLeftLinks = ["Images", "Videos", "Maps", "News", "MSN", "Office Online", "Outlook"];
        navbarLeftLinks.map(createNavItems).forEach(navItem => navbarLeft.appendChild(navItem));
        navbar.appendChild(navbarLeft);

        navbarRight = document.createElement("div");
        navbarRight.classList.add("navbarRight", "navbar-nav",  "mr-5");
        navbarRightLinks = ["Sign In", "<i class='fas fa-user'>", "Rewards", "<i class='fas fa-gift'>", "<span class='navbar-toggler-icon'>"];
        navbarRightLinks.map(createNavItems).forEach(navItem => navbarRight.appendChild(navItem));
        navbar.appendChild(navbarRight);
}

function cardCreator(cardItem) {
    let card, cardBody, cardClass, cardTitle, cardCountClass, cardText;

    card = document.createElement("div");
    card.classList.add("card");

    cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardClass = cardClassifier(cardItem)
    cardTitle = document.querySelector(cardClass);
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    cardCountClass = cardCountClassifier(cardItem)
    cardText = document.querySelector(cardCountClass);
    cardText.classList.add("card-text");
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    return card
}

function footerBing() {
    let footer, cardDeck, cardTitles;

    footer = document.querySelector("footer");
    cardDeck = document.createElement("div");
    cardDeck.classList.add("card-deck");
    cardTitles = ["Wins", "Losses", "Current Word", "Guesses Remaining", "Letters Already Guessed"];
    cardTitles.map(cardCreator).forEach(cardItem => cardDeck.appendChild(cardItem));
    footer.appendChild(cardDeck);
}

function hangmanStyle(computerChoice) {
    resetStyle();

    if (computerChoice === "Bing") {
        navbarBing();
        footerBing()
    }
    // else if (computerChoice === "DuckDuckGo") {
    //     hangmanDuckDuckGo();
    // } else if (computerChoice === "WolframAlpha") {
    //     hangmanWolframAlpha();
    // }  else if (computerChoice === "Google") {
    //     hangmanGoogle(); 
    // }
}

export {hangmanStyle, resetStyle};