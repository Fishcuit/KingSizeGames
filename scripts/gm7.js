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
  };
  for (let i = 0; i < 35; i++) {
    rules.deck.push({
      imgSource: "bonus up.png",
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
    const backgroundMusic = new Audio("sound/backround.mp3");
    const bonusGame = document.getElementById("bonusGame");
    const closeButton = document.getElementById("closeButton");
    const grid = document.getElementById("grid");
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
    };
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
        if (isFreePlayCard) {
          return card;
        }
  
        // If the card is not a multiplier card, return null
        return isMultiplierCard ? card : null;
      });
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
  
      if (selectedMultiplier) {
        const multiplierValue = parseInt(
          selectedMultiplier.imgSource.replace("x.png", ""),
          10
        );
        game.multiplier = multiplierValue;
      } else {
        game.multiplier = 1;
      }
      const isBonusCard = selectedCard.imgSource === "bonus up.png";
      if (isBonusCard) {
        createGrid();
        bonusGame.style.display = "block";
      }
  
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
    });
  }
  
  const symbols = ["💎", "🪨", "⭐", "🔮", "🌙", "🍀", "💣", "🎁"];
        let gridSize = 5;
        let grid = document.getElementById("grid");
        let attempts = document.getElementById("attempts");
        let score = document.getElementById("score");
        let attemptCounter = 5;
        let scoreCounter = 0;

        function createGrid() {
            let gridArray = [];
            for (let i = 0; i < gridSize; i++) {
                for (let j = 0; j < gridSize; j++) {
                    let cell = document.createElement("div");
                    cell.className = "grid-item";
                    cell.addEventListener("click", handleCellClick);
                    grid.appendChild(cell);
                    gridArray.push(cell);
                }
            }
            return gridArray;
        }

        function populateGrid(gridArray) {
            // Create an array of 12 first symbols and 13 second symbols
            let symbolArray = new Array(12).fill(symbols[0]).concat(new Array(13).fill(symbols[1]));
            
            // Shuffle the symbolArray
            for (let i = symbolArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [symbolArray[i], symbolArray[j]] = [symbolArray[j], symbolArray[i]];
            }

            // Assign the symbols to the grid
            for (let i = 0; i < gridArray.length; i++) {
                gridArray[i].dataset.symbol = symbolArray[i];
            }
        }

        function handleCellClick(event) {
            if (attemptCounter === 0) return;

            // Reveal the symbol
            let cell = event.currentTarget;
            cell.textContent = cell.dataset.symbol;
            cell.style.backgroundColor = "white";

            // TODO: Implement game logic

            attemptCounter--;
            attempts.textContent = attemptCounter;
            // Game logic
            let revealedSymbols = Array.from(grid.children)
                .filter(cell => cell.textContent !== "" && cell.style.backgroundColor === "white");

            if (revealedSymbols.length === 3) {
                let uniqueSymbols = new Set(revealedSymbols.map(cell => cell.dataset.symbol));

                // Check if all three revealed symbols are the same
                if (uniqueSymbols.size === 1) {
                    // Replace matched symbols with the next symbol in the list
                    revealedSymbols.forEach(cell => {
                        let symbolIndex = symbols.indexOf(cell.dataset.symbol);
                        if (symbolIndex < symbols.length - 1) {
                            cell.dataset.symbol = symbols[symbolIndex + 1];
                        }
                    });

                    // Increase score
                    scoreCounter++;
                    score.textContent = scoreCounter;

                    // Reset attempts for the next level
                    attemptCounter = 5;
                    attempts.textContent = attemptCounter;

                    // Hide all symbols
                    Array.from(grid.children).forEach(cell => {
                        cell.textContent = "";
                        cell.style.backgroundColor = "gray";
                    });
                } else {
                    // If attempts are over, end the game
                    if (attemptCounter === 0) {
                        alert("Game Over! Your final score is: " + scoreCounter);
                    }
                }
            }
        }

        let gridArray = createGrid();
        populateGrid(gridArray);
        
    
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
  