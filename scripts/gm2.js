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
      name: "Jack",
    },
    {
      imgSource: "Spades_Q.png",
      payOut: 2,
      name: "Queen",
    },
    {
      imgSource: "Spades_K.png",
      payOut: 3,
      name: "King",
    },
    {
      imgSource: "Spades_A.png",
      payOut: 4,
      name: "Ace",
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
      name: "Jack",
    },
    {
      imgSource: "Diamonds_Q.png",
      payOut: 2,
      name: "Queen",
    },
    {
      imgSource: "Diamonds_K.png",
      payOut: 3,
      name: "King",
    },
    {
      imgSource: "Diamonds_A.png",
      payOut: 4,
      name: "Ace",
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
      name: "Jack",
    },
    {
      imgSource: "Hearts_Q.png",
      payOut: 2,
      name: "Queen",
    },
    {
      imgSource: "Hearts_K.png",
      payOut: 3,
      name: "King",
    },
    {
      imgSource: "Hearts_A.png",
      payOut: 4,
      name: "Ace",
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
      name: "Jack",
    },
    {
      imgSource: "Clubs_Q.png",
      payOut: 2,
      name: "Queen",
    },
    {
      imgSource: "Clubs_K.png",
      payOut: 3,
      name: "King",
    },
    {
      imgSource: "Clubs_A.png",
      payOut: 4,
      name: "Ace",
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
      name: "Bonus",
    },
  ],
  bonusDecks: [
    [
      { imgSource: "Mini.png", payOut: 15, name: "Mini" },
      { imgSource: "Mini.png", payOut: 15, name: "Mini" },
      { imgSource: "Mini.png", payOut: 15, name: "Mini" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
    ],
    [
      { imgSource: "Minor.png", payOut: 30, name: "Minor" },
      { imgSource: "Minor.png", payOut: 30, name: "Minor" },
      { imgSource: "Minor.png", payOut: 30, name: "Minor" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
      { imgSource: "bonus down.png", payOut: 0 },
    ],
    [
      { imgSource: "Minor.png", payOut: 30, name: "Minor" },
      { imgSource: "Major.png", payOut: 90, name: "Major" },
      { imgSource: "Major.png", payOut: 90, name: "Major" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
      { imgSource: "bonus down.png", payOut: 0 },
    ],
    [
      { imgSource: "Minor.png", payOut: 30, name: "Minor" },
      { imgSource: "Major.png", payOut: 90, name: "Major" },
      { imgSource: "Mega.png", payOut: 300, name: "Mega" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
      { imgSource: "bonus down.png", payOut: 0 },
    ],
    [
      { imgSource: "Major.png", payOut: 90, name: "Major" },
      { imgSource: "Major.png", payOut: 90, name: "Major" },
      { imgSource: "Mega.png", payOut: 300, name: "Mega" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
      { imgSource: "bonus down.png", payOut: 0 },
    ],
    [
      { imgSource: "Major.png", payOut: 90, name: "Major" },
      { imgSource: "Mega.png", payOut: 300, name: "Mega" },
      { imgSource: "Mega.png", payOut: 300, name: "Mega" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
      { imgSource: "bonus down.png", payOut: 0 },
    ],
    [
      { imgSource: "Major.png", payOut: 90, name: "Major" },
      { imgSource: "Mega.png", payOut: 300, name: "Mega" },
      { imgSource: "Grand.png", payOut: 3000, name: "Grand" },
      { imgSource: "bonus up.png", payOut: 0, name: "Bonus" },
      { imgSource: "bonus down.png", payOut: 0 },
    ],
    [
      { imgSource: "Mega.png", payOut: 90, name: "Mega" },
      { imgSource: "Mega.png", payOut: 300, name: "Mega" },
      { imgSource: "Grand.png", payOut: 3000, name: "Grand" },
      { imgSource: "Grand.png", payOut: 3000, name: "Grand" },
      { imgSource: "Grand.png", payOut: 3000, name: "Grand" },
    ],
  ],
};
for (let i = 0; i < 35; i++) {
  rules.deck.push({
    imgSource: "JK.png",
    payOut: 0,
  });
}

function startGame() {
  const confirmButtonContainer = document.getElementById(
    "confirm-choice-container"
  );
  const dealContainer = document.getElementById("deal-container");
  const confirmButton = document.getElementById("confirm-choice");
  const dealButton = document.getElementById("deal");
  const currentScore = document.getElementById("current-score");
  const currentWin = document.getElementById("current-win");

  const game = {
    flipped: [false, false, false],
    selected: [null, null, null],
    deck: null,
    hand: [],
    bank: 100,
    bet: 3,
    multiplier: 1,
    previousHandMultipliers: [],
  };
  function dealHand() {
    game.selected = [null, null, null];
    game.flipped = [false, false, false];
    game.deck = [shuffle(), shuffle(), shuffle()]; // Shuffle three decks
  
    if (typeof game.initialRandomIndices === "undefined") {
      game.initialRandomIndices = [
        Math.floor(Math.random() * rules.dealtCards),
        Math.floor(Math.random() * rules.dealtCards),
        Math.floor(Math.random() * rules.dealtCards),
      ]; // Calculate the random indices only if they're not set
    }
  
    for (let row = 0; row < 3; row++) {
      for (const [index, card] of game.hand[row].entries()) {
        // Display multipliers from the previous hand on the card backs
        const previousMultiplier = game.previousHandMultipliers.length > 0
          ? game.previousHandMultipliers[row][index]
          : null;
        const cardBack = previousMultiplier
          ? previousMultiplier.imgSource.replace(".png", "card.png")
          : "XX.png";
        card.style.backgroundImage = `url("img/cards/${cardBack}")`;
        card.classList.remove("selected");
        card.dataset.cardIndex = index;
  
        // Assign the correct card object from the shuffled deck
        card.cardObject = game.deck[row][index];
  
        if (index === game.initialRandomIndices[row]) {
          // Use the stored index for each row's selection
          card.classList.add("selected");
          game.selected[row] = card;
        }
      }
    }
    confirmButtonContainer.style.display = "";
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

        game.initialRandomIndices[row] = parseInt(newCard.dataset.cardIndex); // Update the corresponding index when the player selects a card
      });
    }
  }
  dealHand();

  function resetMultiplier() {
    game.multiplier = 1;
  }

  function updatePreviousMultipliers() {
    game.previousHandMultipliers = game.hand.map((row, rowIndex) => {
      return row.map((cardEl, index) => {
        const card = game.deck[rowIndex][cardEl.dataset.cardIndex];
        const isMultiplierCard = card.imgSource.match(/\dx\.png$/);
  
        if (
          isMultiplierCard &&
          index == game.selected[rowIndex].dataset.cardIndex
        ) {
          const selectedCardMultiplier = parseInt(
            card.imgSource.replace("x.png", ""),
            10
          );
          const previousMultiplier =
            game.previousHandMultipliers[rowIndex][index];
  
          let previousCardMultiplier = 1;
          if (previousMultiplier) {
            previousCardMultiplier = parseInt(
              previousMultiplier.imgSource.replace("x.png", ""),
              10
            );
          }
  
          const newMultiplierValue =
            selectedCardMultiplier * previousCardMultiplier;
  
          return {
            imgSource: `${newMultiplierValue}x.png`,
            payOut: 0,
          };
        }
  
        return isMultiplierCard ? card : null;
      });
    });
  }
  
  
  
  

  confirmButton.addEventListener("click", function () {
    if (game.flipped.every((flipStatus) => flipStatus)) {
      return;
    }
  
    confirmButtonContainer.style.display = "none";
    dealContainer.style.display = "";
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
      
 
  
      totalWin += (selectedCard.payOut || 0) * game.multiplier;

      currentWin.innerText = "$" + totalWin
  
      game.selected[row].style.backgroundImage = `url("img/cards/${selectedCard.imgSource}")`;
  
      game.flipped[row] = true; // Set the flipped flag for the current row
    }
  
    if (game.flipped.every((flipStatus) => flipStatus)) {
      dealContainer.style.display = "block";
    }
  
    game.bank += totalWin;
    currentScore.innerText = "$" + game.bank;
   
  
    updatePreviousMultipliers();
  });
  
  dealButton.addEventListener("click", function () {
    dealHand();
    confirmButtonContainer.style.display = "";
    dealContainer.style.display = "none";
    
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
