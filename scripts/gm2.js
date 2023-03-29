function createCard(index, row) {
  const rowElement = document.getElementById(`row-${row}`);
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.row = row;
  card.dataset.cardIndex = index;
  // card.dataset.cardValue = index;
  card.style.backgroundImage = `url("/static/app/img/cards/XX.png")`;
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
      imgSource: "2S.png",
      payOut: 0,
    },
    {
      imgSource: "3S.png",
      payOut: 0,
    },
    {
      imgSource: "4S.png",
      payOut: 0,
    },
    {
      imgSource: "5S.png",
      payOut: 0,
    },
    {
      imgSource: "6S.png",
      payOut: 0,
    },
    {
      imgSource: "7S.png",
      payOut: 0,
    },
    {
      imgSource: "8S.png",
      payOut: 0,
    },
    {
      imgSource: "9S.png",
      payOut: 0,
    },
    {
      imgSource: "10S.png",
      payOut: 0,
    },
    {
      imgSource: "JS.png",
      payOut: 1,
    },
    {
      imgSource: "QS.png",
      payOut: 2,
    },
    {
      imgSource: "KS.png",
      payOut: 3,
    },
    {
      imgSource: "AS.png",
      payOut: 4,
    },
    {
      imgSource: "2D.png",
      payOut: 0,
    },
    {
      imgSource: "3D.png",
      payOut: 0,
    },
    {
      imgSource: "4D.png",
      payOut: 0,
    },
    {
      imgSource: "5D.png",
      payOut: 0,
    },
    {
      imgSource: "6D.png",
      payOut: 0,
    },
    {
      imgSource: "7D.png",
      payOut: 0,
    },
    {
      imgSource: "8D.png",
      payOut: 0,
    },
    {
      imgSource: "9D.png",
      payOut: 0,
    },
    {
      imgSource: "10D.png",
      payOut: 0,
    },
    {
      imgSource: "JD.png",
      payOut: 1,
    },
    {
      imgSource: "QD.png",
      payOut: 2,
    },
    {
      imgSource: "KD.png",
      payOut: 3,
    },
    {
      imgSource: "AD.png",
      payOut: 4,
    },
    {
      imgSource: "2H.png",
      payOut: 0,
    },
    {
      imgSource: "3H.png",
      payOut: 0,
    },
    {
      imgSource: "4H.png",
      payOut: 0,
    },
    {
      imgSource: "5H.png",
      payOut: 0,
    },
    {
      imgSource: "6H.png",
      payOut: 0,
    },
    {
      imgSource: "7H.png",
      payOut: 0,
    },
    {
      imgSource: "8H.png",
      payOut: 0,
    },
    {
      imgSource: "9H.png",
      payOut: 0,
    },
    {
      imgSource: "10H.png",
      payOut: 0,
    },
    {
      imgSource: "JH.png",
      payOut: 1,
    },
    {
      imgSource: "QH.png",
      payOut: 2,
    },
    {
      imgSource: "KH.png",
      payOut: 3,
    },
    {
      imgSource: "AH.png",
      payOut: 4,
    },
    {
      imgSource: "2C.png",
      payOut: 0,
    },
    {
      imgSource: "3C.png",
      payOut: 0,
    },
    {
      imgSource: "4C.png",
      payOut: 0,
    },
    {
      imgSource: "5C.png",
      payOut: 0,
    },
    {
      imgSource: "6C.png",
      payOut: 0,
    },
    {
      imgSource: "7C.png",
      payOut: 0,
    },
    {
      imgSource: "8C.png",
      payOut: 0,
    },
    {
      imgSource: "9C.png",
      payOut: 0,
    },
    {
      imgSource: "10C.png",
      payOut: 0,
    },
    {
      imgSource: "JC.png",
      payOut: 1,
    },
    {
      imgSource: "QC.png",
      payOut: 2,
    },
    {
      imgSource: "KC.png",
      payOut: 3,
    },
    {
      imgSource: "AC.png",
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
