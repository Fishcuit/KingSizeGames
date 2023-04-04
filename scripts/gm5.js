function createCard(index, row) {
  const rowElement = document.getElementById(`row-${row}`);
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.row = row;
  card.dataset.cardIndex = index;
  // card.dataset.cardValue = index;
  card.style.backgroundImage = `url("img/cards/XX.png")`;
  rowElement.appendChild(card);
  return card;
}

function getCard(index, row) {
  const card = document.querySelector(
    `#row-${row} [data-card-index="${index}"]`
  );
  return card;
}

const rules = {
  dealtCards: 5,
  deck: [
    { imgSource: "Clubs_2.png", payOut: 0 },
    { imgSource: "Diamonds_2.png", payOut: 0 },
    { imgSource: "Hearts_2.png", payOut: 0 },
    { imgSource: "Diamonds_J.png", payOut: 1 },
    { imgSource: "bonus up.png", payOut: 0 },
  ],
  bonusDecks: [
    [
      { imgSource: "Clubs_3.png", payOut: 0 },
      { imgSource: "Diamonds_3.png", payOut: 0 },
      { imgSource: "Diamonds_A.png", payOut: 4 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Clubs_4.png", payOut: 0 },
      { imgSource: "Diamonds_4.png", payOut: 0 },
      { imgSource: "Diamonds_A.png", payOut: 4 },
      { imgSource: "Mini.png", payOut: 10 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Clubs_5.png", payOut: 0 },
      { imgSource: "Diamonds_5.png", payOut: 0 },
      { imgSource: "Minor.png", payOut: 25 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Clubs_6.png", payOut: 0 },
      { imgSource: "Diamonds_6.png", payOut: 0 },
      { imgSource: "Mini.png", payOut: 10 },
      { imgSource: "Major.png", payOut: 25 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Mini.png", payOut: 10 },
      { imgSource: "Minor.png", payOut: 25 },
      { imgSource: "Major.png", payOut: 100 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Minor.png", payOut: 25 },
      { imgSource: "Major.png", payOut: 100 },
      { imgSource: "Mega.png", payOut: 500 },
      { imgSource: "Mega.png", payOut: 500 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Major.png", payOut: 100 },
      { imgSource: "Major.png", payOut: 100 },
      { imgSource: "Major.png", payOut: 100 },
      { imgSource: "Mega.png", payOut: 500 },
      { imgSource: "Grand.png", payOut: 1000 },
    ],
  ],
};

function startGame() {
  const confirmButtonContainer = document.getElementById(
    "confirm-choice-container"
  );
  const dealContainer = document.getElementById("deal-container");
  const confirmButton = document.getElementById("confirm-choice");
  const dealButton = document.getElementById("deal");
  const currentScore = document.getElementById("current-score");
  const lastWin = document.getElementById("last-win");

  const game = {
    flipped: [false, false, false],
    selected: [null, null, null],
    deck: [[], [], []],
    hand: [],
    bank: 100,
    bet: 1,
    rowLevels: [0,0,0],
  };
  function dealHand() {
    game.selected = [null, null, null];
    game.flipped = [false, false, false];
  
    for (let row = 0; row < 3; row++) {
      const deck =
        game.rowLevels[row] === 0
          ? rules.deck
          : rules.bonusDecks[game.rowLevels[row] - 1];

      displayDeck(deck, row);
  
      game.deck[row] = shuffle(deck);
      for (const [index, card] of game.hand[row].entries()) {
        card.style.backgroundImage = `url("img/cards/XX.png")`;
        card.classList.remove("selected");
        card.dataset.cardIndex = index;
  
        // Assign the correct card object from the shuffled deck
        card.cardObject = game.deck[row][index];
      }
      const randomIndex = Math.floor(Math.random() * 5);
      game.selected[row] = game.hand[row][randomIndex];
      game.selected[row].classList.add("selected");
    }
    confirmButtonContainer.style.display = "block";
  }
  
  

  for (let row = 0; row < 3; row++) {
    game.hand[row] = [];
    for (let i = 0; i < rules.dealtCards; i++) {
      const newCard = createCard(i, row);
      game.hand[row].push(newCard);
      newCard.addEventListener("click", function () {
        if (game.flipped.every((flipStatus) => flipStatus)) {
          return;
        }
        if (game.selected[row] !== null) {
          game.selected[row].classList.remove("selected");
        }
        game.selected[row] = newCard;
        newCard.classList.add("selected");

      });
      console.log(i);
    }
  }
  dealHand();



  confirmButton.addEventListener("click", function () {
    if (game.flipped.every((flipStatus) => flipStatus)) {
      return;
    }
  
    for (let row = 0; row < 3; row++) {
      if (game.rowLevels[row] < 1) {
        game.bank -= game.bet;
      }
    }
    let totalWin = 0;
    for (let row = 0; row < 3; row++) {
      for (let index = 0; index < rules.dealtCards; index++) {
        const card = game.hand[row][index];
        const cardObject = game.deck[row][index];
        card.style.backgroundImage = `url("img/cards/${cardObject.imgSource}")`;
      }
  
      const selectedCardIndex = game.selected[row].dataset.cardIndex;
      const selectedCard = game.deck[row][selectedCardIndex];
  
      if (selectedCard.imgSource === "bonus up.png") {
        game.rowLevels[row]++;
        if (game.rowLevels[row] > rules.bonusDecks.length) {
          game.rowLevels[row] = rules.bonusDecks.length;
        }
      } else {
        totalWin += (selectedCard.payOut || 0) * game.bet;
        game.rowLevels[row] = 0; // Reset the bonus level to 0 for non-"bonus up" cards
      }
  
      game.selected[
        row
      ].style.backgroundImage = `url("img/cards/${selectedCard.imgSource}")`;
    }
  
    game.bank += totalWin;
    currentScore.innerText = "$" + game.bank;
    lastWin.innerText = "WON: " + totalWin;
    confirmButtonContainer.style.display = "none";
    dealContainer.style.display = "block";
    game.flipped = true;
    // Change the following line from 'in' to 'of'
    for (const cardi of game.hand) {
      const cardEl = cardi;
      cardEl.style.backgroundImage = `url("img/cards/${game.deck[cardi].imgSource}")`;
    }
  });
  
  
  dealButton.addEventListener("click", function () {
    dealHand();
    confirmButtonContainer.style.display = "block";
    dealContainer.style.display = "none";
    lastWin.innerText = "";
  });
}

function displayDeck(deck, row) {
  const showCards = document.getElementById(`show-cards-${row}`);
  showCards.innerHTML = "";

  deck.forEach((card) => {
    const img = document.createElement("img");
    img.src = `img/cards/${card.imgSource}`;
    img.classList.add("show-card");
    showCards.appendChild(img);
  });
}

function shuffle(deck) {
  const deckCopy = deck.slice();
  const shuffledDeck = [];
  while (deckCopy.length > 0) {
    shuffledDeck.push(
      deckCopy.splice(Math.floor(Math.random() * deckCopy.length), 1)[0]
    );
  }

  return shuffledDeck;
}

startGame();
