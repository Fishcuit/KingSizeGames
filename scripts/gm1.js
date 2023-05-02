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
  const currentWager = document.getElementById("current-wager");
  const currentWin = document.getElementById("current-win");
  const message = document.getElementById("messaging")
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
    bonusLevel: 1,
    
  };
  game.selectedIndex = Math.floor(Math.random() * game.hand.length);


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
    game.deck = shuffle(getBonusDeck(game.bonusLevel));

    const randomIndex = Math.floor(Math.random() * game.hand.length); // Initialize the randomIndex variable instead of player choice

    
    for (const [index, card] of game.hand.entries()) {
      // Display multipliers from the previous hand on the card backs
      const previousMultiplier = game.previousHandMultipliers[index];
      const cardBack = previousMultiplier
        ? previousMultiplier.imgSource.replace(".png", "card.png")
        : "XX.png";

      card.style.backgroundImage = `url("img/cards/${cardBack}")`;
      card.classList.remove("selected");
      card.dataset.cardIndex = index;

      if (index === game.selectedIndex) { // Check if the current index matches the random index
        card.classList.add("selected"); // Mark the card as selected
        game.selected = card; // Update the game.selected variable
        handleFreePick(index)
      }
      confirmButtonContainer.style.display = "";
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
      game.selectedIndex = parseInt(newCard.dataset.cardIndex); // Store the selected card index
      newCard.classList.add("selected");
      confirmButtonContainer.style.display = "";
      message.innerText = "Press Reveal to continue!"

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
        const isFreePlayCardBack =
          previousMultiplier &&
          previousMultiplier.imgSource === "free pick.png";
          

        if (previousMultiplier && game.multiplier == 1) {
          // If a bonus card has been selected, and the previous multiplier is not null
          // and the multiplier has not been set yet, return null
          return null;
        } else if (previousMultiplier) {
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
      if (isFreePlayCard && game.bonusLevel == 1) {
        return card;
      }

      if (game.bonusLevel > 1) {
        return null;
      }

      // If the card is not a multiplier card, return null
      return isMultiplierCard ? card : null;
    });
    console.log(JSON.stringify(game.previousHandMultipliers))
  }

  function handleFreePick(cardIndex) {
    const previousCard = game.previousHandMultipliers[cardIndex];
    const isFreePlayCardBack =
      previousCard && previousCard.imgSource === "free pick.png";
  
    if (isFreePlayCardBack) {
      game.bet = 0;
      currentWager.innerText = "$" + game.bet;
      game.previousHandMultipliers[cardIndex] = null;
    } else {
      game.bet = 1;
      currentWager.innerText = "$" + game.bet;
    }
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

    if (
      selectedMultiplier &&
      selectedMultiplier.imgSource !== "free pick.png"
    ) {
      const multiplierValue = parseInt(
        selectedMultiplier.imgSource.replace("x.png", ""),
        10
      );
      game.multiplier = multiplierValue;
    } else {
      game.multiplier = 1;
    }

    const isBonusCard = selectedCard.imgSource === "bonus up.png";
    const isBonusDownCard = selectedCard.imgSource === "bonus down.png";

    if (isBonusCard) {
      game.bonusLevel++;
    } else if (isBonusDownCard) {
      game.bonusLevel--;
    } else {
      game.bonusLevel = 1;
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
    if (selectedCard.payOut > 0 && game.multiplier === 1) {
      message.innerText = selectedCard.name + " pays $" + selectedCard.payOut* game.multiplier + ". \n Press Deal to Play again." ;
    } else if (selectedCard.payOut > 0 && game.multiplier > 1){
      message.innerText = game.multiplier + "x " + selectedCard.name + "  pays $" + selectedCard.payOut* game.multiplier + ". \n Press Deal to Play again." ;
    } else if (selectedCard.name == 'Bonus'){
      message.innerText = "Bonus Level Achieved. Good Luck" ;
    }  else {
      message.innerText = "No Winner.\n Press Deal to Play again!";
    }
    currentScore.innerText = "$" + game.bank;
    currentWin.innerText =
      "$" + (selectedCard.payOut || 0) * 1 * game.multiplier;

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
    message.innerText = "Pick any Card to play!"

    const bonusPopup = document.getElementById("bonus-popup");
    const bonusLevelElement = document.getElementById("bonus-level");
    const bonusRewardElement = document.getElementById("bonus-reward");
    const closePopupButton = document.getElementById("close-popup");
    if (game.bonusLevel > 1) {
      showBonusPopup();
    }
    function showBonusPopup() {
      bonusPopup.classList.remove("hidden");
      bonusPopup.classList.add("color-swirl");
      bonusLevelElement.textContent = game.bonusLevel - 1;

      const rewards = getReward(game.bonusLevel);
      const rewardsHtml = rewards
        .map(
          (reward) =>
            `<img src="img/cards/${reward.imgSource}" alt="${reward.imgSource}">`
        )
        .join(" ");
      bonusRewardElement.innerHTML = `${rewardsHtml}`;

      setTimeout(() => {
        bonusPopup.classList.remove("color-swirl");
      }, 2000);
    }

    function getReward(level) {
      const currentDeck = rules.bonusDecks[level - 2];
      const rewards = currentDeck.map((card) => {
        return { imgSource: card.imgSource, payOut: card.payOut };
      });
      return rewards;
    }

    closePopupButton.addEventListener("click", () => {
      bonusPopup.classList.add("hidden");
      for (const card of game.hand) {
        card.classList.remove("deal");
      }
      dealHand();
    });
  });

  function getBonusDeck(bonusLevel) {
    if (bonusLevel > 1 && bonusLevel <= rules.bonusDecks.length) {
      game.multiplier = 1;
      console.log(game.previousHandMultipliers);
      return rules.bonusDecks[bonusLevel - 2];
    } else {
      return rules.deck;
    }
  }
}

function shuffle(deck) {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
}

startGame();
