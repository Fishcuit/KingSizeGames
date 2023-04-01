function createCard(index) {
  const board = document.getElementById("board");
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.cardIndex = index;
  // card.dataset.cardValue = index;
  card.id = `card-${index}`;
  card.style.backgroundImage = `url("img/cards/XX.png")`;
  board.appendChild(card);
  return card;
}

function getCard(index) {
  const card = document.querySelector(`#card-${index}`); // Update this line to use the new id
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
  ],
  bonusDecks: [
    [
      { imgSource: "Mini.png", payOut: 15 },
      { imgSource: "Mini.png", payOut: 15 },
      { imgSource: "Mini.png", payOut: 15 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Minor.png", payOut: 30 },
      { imgSource: "Minor.png", payOut: 30 },
      { imgSource: "Minor.png", payOut: 30 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Minor.png", payOut: 30 },
      { imgSource: "Major.png", payOut: 90 },
      { imgSource: "Major.png", payOut: 90 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Minor.png", payOut: 30 },
      { imgSource: "Major.png", payOut: 90 },
      { imgSource: "Mega.png", payOut: 300 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Major.png", payOut: 90 },
      { imgSource: "Major.png", payOut: 90 },
      { imgSource: "Mega.png", payOut: 300 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Major.png", payOut: 90 },
      { imgSource: "Mega.png", payOut: 300 },
      { imgSource: "Mega.png", payOut: 300 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Major.png", payOut: 90 },
      { imgSource: "Mega.png", payOut: 300 },
      { imgSource: "Grand.png", payOut: 3000 },
      { imgSource: "bonus up.png", payOut: 0 },
      { imgSource: "bonus up.png", payOut: 0 },
    ],
    [
      { imgSource: "Mega.png", payOut: 90 },
      { imgSource: "Mega.png", payOut: 300 },
      { imgSource: "Grand.png", payOut: 3000 },
      { imgSource: "Grand.png", payOut: 3000 },
      { imgSource: "Grand.png", payOut: 3000 },
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
  const currentWager = document.getElementById("current-wager");
  const currentWin = document.getElementById("current-win");
 
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
    bonusLevel: 1,
  };

//If bonusLevel is greater than 1, show the cards to the player before flipping and shuffling them
  if (game.bonusLevel > 1) {
    dealContainer.style.display = "none";
    confirmButtonContainer.style.display = "block";
    confirmButton.addEventListener("click", function () {
      dealContainer.style.display = "block";
      confirmButtonContainer.style.display = "none";
      dealHand();
    });
  } else {
    dealHand();
  }
  function dealHand() {
    game.selected = null;
    game.flipped = false;
    game.deck = shuffle(getBonusDeck(game.bonusLevel));
    

    for (const [index, card] of game.hand.entries()) {
      // Display multipliers from the previous hand on the card backs
      const previousMultiplier = game.previousHandMultipliers[index];
      const cardBack = previousMultiplier
        ? previousMultiplier.imgSource.replace(".png", "card.png")
        : "XX.png";
      card.style.backgroundImage = `url("img/cards/${cardBack}")`;
      card.classList.remove("selected");
      card.dataset.cardIndex = index;
    }
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

      // Check if the card back is a Free Play card
      const previousCard =
        game.previousHandMultipliers[newCard.dataset.cardIndex];
      const isFreePlayCardBack =
        previousCard && previousCard.imgSource === "free pick.png";

      // Subtract the bet when the player clicks on a card, except if it's a Free Play card back
      if (!isFreePlayCardBack) {
        // game.bank -= game.bet;
        currentScore.innerText = "$" + game.bank;
      } else {
        // Set the bet to 0 when a Free Play card back is selected
        game.bet = 0;
        currentWager.innerText = "$" + game.bet;
      }
    });
    console.log(i);
  }
  dealHand();

  function resetMultiplier() {
    game.multiplier = 1;
  }

  function updatePreviousMultipliers() {
    game.previousHandMultipliers = game.hand.map((cardEl, index) => {
      const card = game.deck[cardEl.dataset.cardIndex];
      const isMultiplierCard = card.imgSource.match(/\dx\.png$/);
      const isFreePlayCard = card.imgSource.match(/free\ pick\.png$/);

      if (isMultiplierCard && index == game.selected.dataset.cardIndex) {
        const selectedCardMultiplier = parseInt(
          card.imgSource.replace("x.png", ""),
          10
        );
        const previousMultiplier = game.previousHandMultipliers[index];

        if (previousMultiplier) {
          const previousCardMultiplier = parseInt(
            previousMultiplier.imgSource.replace("x.png", ""),
            10
          );
          const newMultiplierValue =
            selectedCardMultiplier * previousCardMultiplier;

          // Return the new multiplier card with the combined multiplier value
          return {
            imgSource: `${newMultiplierValue}x.png`,
            payOut: 0,
          };
        }
      }
      // If the card is a Free Play card, return it, even if it's not selected
      if (isFreePlayCard) {
        return card;
      }

      // If the card is not a multiplier card, return null
      return isMultiplierCard ? card : null;
    });
    console.log(game.previousHandMultipliers);
  }

  confirmButton.addEventListener("click", function () {
    if (game.flipped) {
      return;
    }
    game.bank -= game.bet;
    console.log(game.selected.dataset.cardIndex);
    console.log(game.deck[game.selected.dataset.cardIndex]);
    const selectedCard = game.deck[game.selected.dataset.cardIndex];

    const selectedMultiplier =
      game.previousHandMultipliers[game.selected.dataset.cardIndex];

    const isBonusCard = selectedCard.imgSource === "bonus up.png";
    if (isBonusCard) {
      game.bonusLevel++;
    } else {
      game.bonusLevel = 1; // Reset bonusLevel to 1 if the selected card is not a bonus card
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
    if (isNaN(game.multiplier)) {
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
    currentWin.innerText = "$" + ((selectedCard.payOut || 0) * game.bet * game.multiplier);

    updatePreviousMultipliers();

    game.flipped = true;
    confirmButtonContainer.style.display = "none";
    dealContainer.style.display = "none";
    for (const cardi in game.hand) {
      const cardEl = game.hand[cardi];
      cardEl.style.backgroundImage = `url("img/cards/${game.deck[cardi].imgSource}")`;
    }
    dealContainer.style.display = "block";
    game.bet = 1;
  });
  dealButton.addEventListener("click", function () {
    currentWager.innerText = "$" + game.bet;
    dealHand();
    dealContainer.style.display = "none";
    currentWin.innerText = "--"
  });
}

function getBonusDeck(bonusLevel) {
  if (bonusLevel > 1 && bonusLevel <= rules.bonusDecks.length) {
    return rules.bonusDecks[bonusLevel - 2];
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
