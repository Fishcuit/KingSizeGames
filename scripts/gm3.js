function createCard(index) {
  const board = document.getElementById("board");
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.cardIndex = index;
  // card.dataset.cardValue = index;
  card.style.backgroundImage = `url("img/cards/XX.png")`;
  board.appendChild(card);
  return card;
}

function getCard(index) {
  const card = document.querySelector(`[data-card-value="${index}"]`);
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

  const currentWin = document.getElementById("current-win");
  const showCards = document.getElementById("show-cards");
  // dealContainer.style.display = "none";
  const game = {
    flipped: false,
    selected: null,
    deck: null,
    hand: [],
    bank: 100,
    bet: 1,
    multiplier: 1,
    previousHandMultipliers: [],
    bonusLevel: 0,
  };
  function dealHand() {
    game.selected = null;
    game.flipped = false;
    game.deck = shuffle(getBonusDeck(game.bonusLevel));

    for (const [index, card] of game.hand.entries()) {
      card.style.backgroundImage = `url("img/cards/XX.png")`;
      card.classList.remove("selected");
      card.dataset.cardIndex = index;
      card.style.animationDelay = `${index * 0.2}s`;
    }
    setTimeout(() => {
      for (const [index, card] of game.hand.entries()) {
        (function (card, index) {
          setTimeout(() => {
            card.classList.add("deal"); // Add the deal class to each card with a delay
          }, index * 200);
        })(card, index);
      }
    }, 0);
    displayDeck(getBonusDeck(game.bonusLevel));
  }

  function displayDeck(deck) {
    const showCards = document.getElementById("show-cards");
    showCards.innerHTML = "";

    deck.forEach((card) => {
      const img = document.createElement("img");
      img.src = `img/cards/${card.imgSource}`;
      img.classList.add("show-card"); // Change this line to use the 'show-card' class
      showCards.appendChild(img);
    });
  }

  for (let i = 0; i < rules.dealtCards; i++) {
    const newCard = createCard(i);
    game.hand.push(newCard);
    newCard.addEventListener("click", function () {
      if (game.flipped) {
        return;
      }
      if (game.selected !== null) {
        game.selected.classList.remove("selected");
      }
      game.selected = newCard;
      newCard.classList.add("selected");
      confirmButtonContainer.style.display = "";
    });
    console.log(i);
  }
  dealHand();

  confirmButton.addEventListener("click", function () {
    if (game.flipped) {
      return;
    }
    if (game.bonusLevel < 1) {
      game.bank -= game.bet;
    }
    console.log(game.selected.dataset.cardIndex);
    console.log(game.deck[game.selected.dataset.cardIndex]);

    const selectedCard = game.deck[game.selected.dataset.cardIndex];

    const selectedMultiplier =
      game.previousHandMultipliers[game.selected.dataset.cardIndex];

    const isBonusCard = selectedCard.imgSource === "bonus up.png";
    if (isBonusCard) {
      game.bonusLevel++;
    } else {
      game.bonusLevel = 0; // Reset bonusLevel to 1 if the selected card is not a bonus card
    }
    if (selectedMultiplier) {
      const multiplierValue = parseInt(
        selectedMultiplier.imgSource.replace("x.png", ""),
        10
      );
      game.multiplier = multiplierValue;
    } else {
      game.multiplier = 1;
    }

    const increment = 1;
    const cycles =
      ((selectedCard.payOut || 0) * game.bet * game.multiplier) / increment;
    for (let i = 0; i < cycles; i++) {
      setTimeout(() => {
        game.bank += increment;
        currentScore.innerText = "$" + game.bank;
        // Update the player's total display here, if necessary
      }, i * 100); // Adjust the delay time as needed
    }
    // game.bank += (selectedCard.payOut || 0) * game.bet * game.multiplier;
    currentScore.innerText = "$" + game.bank;
    currentWin.innerText =
      "$" + (selectedCard.payOut || 0) * game.bet * game.multiplier;

    console.log(game.bank);
    console.log(game.bonusLevel);

    game.flipped = true;
    confirmButtonContainer.style.display = "none";
    dealContainer.style.display = "none";
    for (const cardi in game.hand) {
      const cardEl = game.hand[cardi];
      cardEl.style.backgroundImage = `url("img/cards/${game.deck[cardi].imgSource}")`;
    }
    dealContainer.style.display = "block";
  });
  dealButton.addEventListener("click", function () {
    dealHand();
    dealContainer.style.display = "none";
    currentWin.innerText = "--";
  });
}

function getBonusDeck(bonusLevel) {
  if (bonusLevel > 0 && bonusLevel <= rules.bonusDecks.length) {
    return rules.bonusDecks[bonusLevel - 1];
  } else {
    return rules.deck;
  }
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
