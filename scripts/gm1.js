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
  const backgroundMusic = new Audio('sound/backround.mp3');
  backgroundMusic.loop = true; // Loop the background music
  backgroundMusic.volume = 0.5; // Set the volume level (0.0 to 1.0)
  

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
    backgroundMusic.play();
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
    console.log(game.multiplier)
    if (isNaN(game.multiplier)) {
      game.multiplier = 1;
    }
    console.log(game.multiplier)
    const increment = 1;
    const cycles =
      ((selectedCard.payOut || 0) * game.bet * game.multiplier) / increment;
    const coinSound = new Audio('sound/coin.mp3');

    for (let i = 0; i < cycles; i++) {
      setTimeout(() => {
        game.bank += increment;
        currentScore.innerText = "$" + game.bank;
        coinSound.currentTime = 0; // Reset the playback position
        coinSound.play();
        // Update the player's total display here, if necessary
      }, i * 100); // Adjust the delay time as needed
    }
    // game.bank += (selectedCard.payOut || 0) * game.bet * game.multiplier;
    currentScore.innerText = "$" + game.bank;
    currentWin.innerText =
      "$" + (selectedCard.payOut || 0) * game.bet * game.multiplier;

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
    // for (const card of game.hand) {
    //   card.classList.remove("deal");
    // }
    dealHand();
    dealContainer.style.display = "none";
    currentWin.innerText = "--";
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

const fullscreenBtn = document.getElementById('fullscreen-btn');
const fullscreenElement = document.getElementById('canvas-wrapper');

fullscreenBtn.addEventListener('click', () => {
  if (fullscreenElement.requestFullscreen) {
    fullscreenElement.requestFullscreen();
  } else if (fullscreenElement.webkitRequestFullscreen) { /* Safari */
    fullscreenElement.webkitRequestFullscreen();
  } else if (fullscreenElement.msRequestFullscreen) { /* IE11 */
    fullscreenElement.msRequestFullscreen();
  }
});

