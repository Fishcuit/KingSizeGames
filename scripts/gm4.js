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
    };
    function dealHand() {
      game.selected = null;
      game.flipped = false;
      game.deck = shuffle();
    
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
        return isMultiplierCard ? card : null;
      });
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
  

      if (selectedMultiplier) {
        const multiplierValue = parseInt(
          selectedMultiplier.imgSource.replace("x.png", ""),
          10
        );
        game.multiplier = multiplierValue;
      } else {
        game.multiplier = 1;
      }
      
      game.bank += (selectedCard.payOut || 0) * game.bet * game.multiplier;
      currentScore.innerText = "$" + game.bank;
      lastWin.innerText =
        "WON: " +
        +selectedCard.payOut * +game.multiplier +
        " Multi: " +
        game.multiplier;
  
      console.log(game.bank);
  
      updatePreviousMultipliers();
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
  