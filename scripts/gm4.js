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
  ],
};
for (let i = 0; i < 37; i++) {
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
  const pokerWin = document.getElementById("poker-win");
  const backgroundMusic = new Audio("sound/backround.mp3");
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
    pokerHand: [],
  };
  displayBlankPokerHand();
  dealHand();

  function dealHand() {
    game.selected = null;
    game.flipped = false;
    game.deck = shuffle(rules.deck);

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

        game.previousHandMultipliers[newCard.dataset.cardIndex] = null;
      }
    });
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

    const isNotDuplicate = game.pokerHand.every(
      (pokerCard) => pokerCard.imgSource !== selectedCard.imgSource
    );

    const specialCards =
      game.pokerHand.length < 4
        ? ["JK.png", "2x.png", "3x.png", "4x.png", "5x.png", "free pick.png"]
        : ["2x.png", "3x.png", "4x.png", "5x.png", "free pick.png"];

    if (selectedMultiplier) {
      const multiplierValue = parseInt(
        selectedMultiplier.imgSource.replace("x.png", ""),
        10
      );
      game.multiplier = multiplierValue;
    } else {
      game.multiplier = 1;
    }
    console.log(game.multiplier);
    if (isNaN(game.multiplier)) {
      game.multiplier = 1;
    }
    console.log(game.multiplier);
    const increment = 1;
    const cycles =
      ((selectedCard.payOut || 0) * 1 * game.multiplier) / increment;
    const coinSound = new Audio("sound/coin.mp3");

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
    pokerPayout = calculatePayout()
    
    currentScore.innerText = "$" + game.bank;
    currentWin.innerText =
      "$" + ((selectedCard.payOut || 0) * 1 * game.multiplier + pokerPayout);

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

    const isSpecialCard = specialCards.includes(selectedCard.imgSource);
    if (!isSpecialCard && isNotDuplicate) {
      addToPokerHand(selectedCard);
    }
  });
  dealButton.addEventListener("click", function () {
    currentWager.innerText = "$" + game.bet;
    if (game.pokerHand.length === 5) {
      pokerWin.innerText = "--";
      resetPokerHand();
    }
    // for (const card of game.hand) {
    //   card.classList.remove("deal");
    // }
    dealHand();
    dealContainer.style.display = "none";
    currentWin.innerText = "--";
  });

  function calculatePayout() {
    let pokerHand = game.pokerHand;
    // let pokerHand = [{imgSource: 'Clubs_6.png', payOut: 0}, {imgSource: 'Clubs_6.png', payOut: 0}, {imgSource: 'Clubs_7.png', payOut: 0}, {imgSource: 'Clubs_7.png', payOut: 0}, {imgSource: 'Clubs_5.png', payOut: 0}]
    let payout = 0;
    let handName = "";

    console.log(pokerHand);

    // if (isRoyalFlush(pokerHand)) {
    //   payout = payouts["Royal Flush"];
    //   handName = "Royal Flush";
    // } else if (isStraightFlush(pokerHand)) {
    //   payout = payouts["Straight Flush"];
    //   handName = "Straight Flush";
    // } else if (isFourOfAKind(pokerHand)) {
    //   payout = payouts["Four of a Kind"];
    //   handName = "Four of a kind";
    // } else if (isFullHouse(pokerHand)) {
    //   payout = payouts["Full House"];
    //   handName = "Full House";
    // } else if (isFlush(pokerHand)) {
    //   payout = payouts["Flush"];
    //   handName = "Flush";
    // } else if (isStraight(pokerHand)) {
    //   payout = payouts["Straight"];
    //   handName = "Straight";
    if (isThreeOfAKind(pokerHand)) {
      payout = 8;
      handName = "Three of a kind";
      console.log(handName);
    } else if (isTwoPair(pokerHand)) {
      payout = 2;
      handName = "Two Pairs";
      console.log(handName);
    } else {
      payout = 0;
      handName = "No winner";
      console.log(handName);
    }

    const increment = 1;
    const cycles = ((payout || 0) * 1) / increment;
    const coinSound = new Audio("sound/coin.mp3");

    for (let i = 0; i < cycles; i++) {
      setTimeout(() => {
        game.bank += increment;
        currentScore.innerText = "$" + game.bank;
        coinSound.currentTime = 0; // Reset the playback position
        coinSound.play();
        // Update the player's total display here, if necessary
      }, i * 100); // Adjust the delay time as needed
    }

    currentScore.innerText = "$" + game.bank;
    pokerWin.innerText = handName + " pays: " + payout || "No Winner";

    return payout
  }

  function resetPokerHand() {
    game.pokerHand = [];

    // Clear the pokerHandElement
    const pokerHandElement = document.getElementById("poker-hand");
    pokerHandElement.innerHTML = "";

    // Call the displayBlankPokerHand function to set the card images
    displayBlankPokerHand();
  }

  function addToPokerHand(card) {
    const pokerHandElement = document.getElementById("poker-hand");
    const pokerCard = pokerHandElement.children[game.pokerHand.length];
    pokerCard.style.backgroundImage = `url("img/cards/${card.imgSource}")`;
    game.pokerHand.push(card);

    // Check if the poker hand has 5 cards after adding the new card
    if (game.pokerHand.length === 5) {
      calculatePayout();
    }
  }

  function displayBlankPokerHand() {
    const pokerHandElement = document.getElementById("poker-hand");
    for (let i = 0; i < 5; i++) {
      const pokerCard = document.createElement("pcard");
      pokerCard.classList.add("poker-card");

      if (i === 4) {
        // Set the background image of the last card to wild.png
        pokerCard.style.backgroundImage = `url("img/cards/wild.png")`;
      } else {
        pokerCard.style.backgroundImage = `url("img/cards/XX.png")`;
      }

      pokerHandElement.appendChild(pokerCard);
    }
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

function isThreeOfAKind(pokerHand) {
  let values = pokerHand.map((card) => {
    if (card.imgSource === "JK.png") {
      return "JK";
    } else {
      return card.imgSource.split("_")[1].slice(0, -4);
    }
  });

  let uniqueValues = new Set(values);

  for (let value of uniqueValues) {
    if (values.filter((v) => v === value).length === 3) {
      return true;
    } else if (
      values.filter((v) => v === value).length === 2 &&
      values.filter((v) => v === "JK").length === 1
    ) {
      return true;
    }
  }
  return false;
}

function isTwoPair(pokerHand) {
  let values = pokerHand.map((card) => {
    if (card.imgSource === "JK.png") {
      return "JK";
    } else {
      return card.imgSource.split("_")[1].slice(0, -4);
    }
  });

  let jokerCount = values.filter((v) => v === "JK").length;
  let uniqueValues = new Set(values);

  let pairs = Array.from(uniqueValues).filter(
    (value) => values.filter((v) => v === value).length === 2
  );

  if (pairs.length === 2 || (pairs.length === 1 && jokerCount === 1)) {
    return pairs;
  }

  return false;
}
