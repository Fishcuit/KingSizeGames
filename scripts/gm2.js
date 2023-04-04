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
    {
      imgSource: "Spades_2.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_3.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_4.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_5.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_6.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_7.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_8.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_9.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_10.png",
      payOut: 0,
    },
    {
      imgSource: "Spades_J.png",
      payOut: 1,
    },
    {
      imgSource: "Spades_Q.png",
      payOut: 2,
    },
    {
      imgSource: "Spades_K.png",
      payOut: 3,
    },
    {
      imgSource: "Spades_A.png",
      payOut: 4,
    },
    {
      imgSource: "Diamonds_2.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_3.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_4.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_5.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_6.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_7.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_8.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_9.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_10.png",
      payOut: 0,
    },
    {
      imgSource: "Diamonds_J.png",
      payOut: 1,
    },
    {
      imgSource: "Diamonds_Q.png",
      payOut: 2,
    },
    {
      imgSource: "Diamonds_K.png",
      payOut: 3,
    },
    {
      imgSource: "Diamonds_A.png",
      payOut: 4,
    },
    {
      imgSource: "Hearts_2.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_3.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_4.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_5.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_6.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_7.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_8.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_9.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_10.png",
      payOut: 0,
    },
    {
      imgSource: "Hearts_J.png",
      payOut: 1,
    },
    {
      imgSource: "Hearts_Q.png",
      payOut: 2,
    },
    {
      imgSource: "Hearts_K.png",
      payOut: 3,
    },
    {
      imgSource: "Hearts_A.png",
      payOut: 4,
    },
    {
      imgSource: "Clubs_2.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_3.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_4.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_5.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_6.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_7.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_8.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_9.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_10.png",
      payOut: 0,
    },
    {
      imgSource: "Clubs_J.png",
      payOut: 1,
    },
    {
      imgSource: "Clubs_Q.png",
      payOut: 2,
    },
    {
      imgSource: "Clubs_K.png",
      payOut: 3,
    },
    {
      imgSource: "Clubs_A.png",
      payOut: 4,
    },
    {
      imgSource: "2x.png",
      payOut: 0,
    },
    {
      imgSource: "3x.png",
      payOut: 0,
    },
    {
      imgSource: "4x.png",
      payOut: 0,
    },
    {
      imgSource: "5x.png",
      payOut: 0,
    },
    {
      imgSource: "free pick.png",
      payOut: 0,
    },
    {
      imgSource: "bonus up.png",
      payOut: 0,
    },
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
    deck: null,
    hand: [],
    bank: 100,
    bet: 1,
    multiplier: 1,
    previousHandMultipliers: [],
  };
  function dealHand() {
    game.selected = [null, null, null];
    game.flipped = [false, false, false];
    game.deck = [shuffle(), shuffle(), shuffle()]; // Shuffle three decks

    for (let row = 0; row < 3; row++) {
      for (const [index, card] of game.hand[row].entries()) {
        // Display multipliers from the previous hand on the card backs
        const previousMultiplier = game.previousHandMultipliers[index];
        const cardBack = previousMultiplier
          ? previousMultiplier.imgSource.replace(".png", " on card.png")
          : "XX.png";
        card.style.backgroundImage = `url("img/cards/${cardBack}")`;
        card.classList.remove("selected");
        card.dataset.cardIndex = index;

        // Assign the correct card object from the shuffled deck
        card.cardObject = game.deck[row][index];
      }
    }
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
        const allRowsSelected = game.selected.every(
          (selectedCard) => selectedCard !== null
        );

        if (allRowsSelected) {
          confirmButtonContainer.style.display = "";
        } else {
          confirmButtonContainer.style.display = "none";
        }
      });
      console.log(i);
    }
  }
  dealHand();

  function resetMultiplier() {
    game.multiplier = 1;
  }

  function updatePreviousMultipliers() {
    game.previousHandMultipliers = game.hand.map((cardEl, index) => {
      const card = game.deck[cardEl.dataset.cardIndex];
      return card.imgSource.match(/\dx\.png$/) ? card : null;
    });
  }

  confirmButton.addEventListener("click", function () {
    if (game.flipped.every((flipStatus) => flipStatus)) {
      return;
    }

    game.bank -= game.bet;

    let totalWin = 0;
    for (let row = 0; row < 3; row++) {
      for (let index = 0; index < rules.dealtCards; index++) {
        const card = game.hand[row][index];
        const cardObject = game.deck[row][index];
        card.style.backgroundImage = `url("img/cards/${cardObject.imgSource}")`;
      }

      const selectedCardIndex = game.selected[row].dataset.cardIndex;
      const selectedCard = game.deck[row][selectedCardIndex];
      const selectedMultiplier =
        game.previousHandMultipliers[selectedCardIndex];

      if (selectedMultiplier) {
        if (selectedMultiplier.imgSource === "2x.png") {
          game.multiplier = 2;
        } else if (selectedMultiplier.imgSource === "3x.png") {
          game.multiplier = 3;
        } else if (selectedMultiplier.imgSource === "4x.png") {
          game.multiplier = 4;
        } else if (selectedMultiplier.imgSource === "5x.png") {
          game.multiplier = 5;
        }
      } else {
        game.multiplier = 1;
      }

      totalWin += (selectedCard.payOut || 0) * game.bet * game.multiplier;

      game.selected[
        row
      ].style.backgroundImage = `url("img/cards/${selectedCard.imgSource}")`;
    }

    game.bank += totalWin;
    currentScore.innerText = "$" + game.bank;
    lastWin.innerText = "WON: " + totalWin;
    dealContainer.style.display = "block";
    confirmButtonContainer.style.display = "none";
    updatePreviousMultipliers();
    game.flipped = true;
    
    // Change the following line from 'in' to 'of'
    for (const cardi of game.hand) {
      const cardEl = cardi;
      cardEl.style.backgroundImage = `url("img/cards/${game.deck[cardi].imgSource}")`;
    }
  });
  dealButton.addEventListener("click", function () {
    dealHand();
    confirmButtonContainer.style.display = "none";
    dealContainer.style.display = "none";
    lastWin.innerText = "";
  });
}

function shuffle() {
  const deckCopy = rules.deck.slice();
  const shuffledDeck = [];
  while (deckCopy.length > 0) {
    shuffledDeck.push(
      deckCopy.splice(Math.floor(Math.random() * deckCopy.length), 1)[0]
    );
  }

  return shuffledDeck;
}

startGame();
