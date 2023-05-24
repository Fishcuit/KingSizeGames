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
  const message = document.getElementById("messaging");
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

    savedPreviousHandMultipliers: [],
  };
  game.selectedIndex = Math.floor(Math.random() * game.hand.length);

  localStorage.setItem("playerBalance", game.bank.toString());
  dealHand();

  function dealHand() {
    game.selected = null;
    game.flipped = false;
    game.deck = shuffle(rules.deck);
    game.deck = shuffle(rules.deck);

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

      if (index === game.selectedIndex) {
        // Check if the current index matches the random index
        card.classList.add("selected"); // Mark the card as selected
        game.selected = card; // Update the game.selected variable
        handleFreePick(index);
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
      message.innerText = "Press Reveal to continue!";

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
      if (isFreePlayCard) {
        return card;
      }

      // If the card is not a multiplier card, return null
      return isMultiplierCard ? card : null;
    });
    console.log(JSON.stringify(game.previousHandMultipliers));
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

    const bonusPopup = document.getElementById("bonus-popup");

    const isBonusCard = selectedCard.imgSource === "bonus up.png";

    if (isBonusCard) {
      setTimeout(() => {
        showBonusPopup();
      }, 2000); // Delay execution by 2000 milliseconds (2 seconds)

      function showBonusPopup() {
        bonusPopup.style.display = "flex";

        // Wait for the next frame before changing other properties
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            bonusPopup.style.opacity = "1";
            bonusPopup.style.transform = "scale(1)";
          });
        });
      }
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
      message.innerText =
        selectedCard.name +
        " pays $" +
        selectedCard.payOut * game.multiplier +
        ". \n Press Deal to Play again.";
    } else if (selectedCard.payOut > 0 && game.multiplier > 1) {
      message.innerText =
        game.multiplier +
        "x " +
        selectedCard.name +
        "  pays $" +
        selectedCard.payOut * game.multiplier +
        ". \n Press Deal to Play again.";
    } else if (selectedCard.name == "Bonus") {
      message.innerText = "Bonus Level Achieved. Good Luck";
    } else {
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
    message.innerText = "Pick any Card to play!";
  });

  // *********************************************************************************BONUS GAME*******************************************************************************************

  let symbols = [
    {
      symbol: "💎",
      count: 13,
    },
    {
      symbol: "🪨",
      count: 12,
    },
    {
      symbol: "⭐",
      count: 0,
    },
    {
      symbol: "🔮",
      count: 0,
    },
    {
      symbol: "🌙",
      count: 0,
    },
    {
      symbol: "🍀",
      count: 0,
    },
    {
      symbol: "💣",
      count: 0,
    },
    {
      symbol: "🎁",
      count: 0,
    },
  ];

  const gridSize = 5;

  let gameBoard = [];
  let level = 0;
  let selectedCells = 0;
  let score = 0;
  let matchedSymbols = 0;

  document.getElementById("continueButton").addEventListener("click", () => {
    hideModal();
    startNextLevel();
  });
  document.getElementById("startOverButton").addEventListener("click", () => {
    hideEndModal();
    hideBonusModal();
    resetGame();
  });

  function generateFirstLevelSymbols() {
    const symbolList = [];

    for (let i = 0; i < symbols.length; i++) {
      const symbol = symbols[i].symbol;
      const count = symbols[i].count;

      for (let j = 0; j < count; j++) {
        symbolList.push(symbol);
      }
    }

    return symbolList;
  }

  function generateSubsequentLevelSymbols(level) {
    const symbolList = [];
    const symbolCount = Math.ceil((gridSize * gridSize) / level);
    console.log("Level: " + level);
    console.log("symbol 1: " + symbols[0].count);
    console.log("symbol 2: " + symbols[1].count);
    console.log("symbol 3: " + symbols[level].count);
    for (let i = 0; i < symbols.length; i++) {
      const symbol = symbols[i].symbol;
      const count = symbols[i].count;

      for (let j = 0; j < count; j++) {
        symbolList.push(symbol);
      }
    }

    return symbolList;
  }

  function initBoard(level) {
    gameBoard = [];

    // Generate a list of symbols for the current level
    let symbolList =
      level === 1
        ? generateFirstLevelSymbols()
        : generateSubsequentLevelSymbols(level);

    // Shuffle the symbol list
    for (let i = symbolList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [symbolList[i], symbolList[j]] = [symbolList[j], symbolList[i]];
    }

    // Fill the game board with shuffled symbols
    let index = 0;
    for (let i = 0; i < gridSize; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < gridSize; j++) {
        gameBoard[i][j] = symbolList[index++];
      }
    }

    // Reset matchedSymbols for the next level
    matchedSymbols = 0;
  }

  function renderBoard() {
    const board = document.getElementById("gameBoard");
    board.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("div");
        const symbol = document.createElement("span");
        const cover = document.createElement("span");

        cell.classList.add("grid-item");
        symbol.classList.add("symbol");
        cover.classList.add("cover");

        symbol.textContent = gameBoard[i][j];
        cell.appendChild(symbol);
        cell.appendChild(cover);

        cell.addEventListener("click", () => handleCellClick(cell));
        board.appendChild(cell);
      }
    }
  }

  function findSymbolByCharacter(character) {
    return symbols.find((symbolObj) => symbolObj.symbol === character);
  }

  function handleCellClick(cell) {
    // If the player has already selected 5 cells or a match has been found, do nothing
    if (selectedCells >= 5 || checkForMatch()) {
      return;
    }

    const cover = cell.querySelector(".cover");
    const symbol = cell.querySelector(".symbol");

    // If the cell is already uncovered, do nothing
    if (cover.style.display === "none") {
      return;
    }

    cover.style.display = "none";
    symbol.style.display = "block";
    selectedCells++;

    // Decrease the count of the selected symbol
    const selectedSymbol = findSymbolByCharacter(symbol.textContent);
    if (selectedSymbol) {
      selectedSymbol.count--;
      console.log(symbols[0].count);
      console.log(symbols[1].count);
      console.log(symbols[2].count);
    }

    if (selectedCells >= 3) {
      // Check for matches after uncovering the symbol
      if (checkForMatch()) {
        if (selectedCells >= 3 && selectedCells <= 5) {
          score++;
          updateLevelAndScoreDisplays();
          console.log("Score:", score);

          // Set the matchedSymbols value
          matchedSymbols = selectedCells;

          // Show the modal
          setTimeout(() => {
            showModal();
          }, 2000); // Delay execution by 2000 milliseconds (2 seconds)
        }
        // If a match is found in the first 3 selections, prevent further selections
        return;
      } else if (selectedCells === 5) {
        gameOver();
      }
    }
  }

  function checkForMatch() {
    const selectedSymbols = document.querySelectorAll(
      '.grid-item .symbol[style*="display: block"]'
    );

    if (selectedSymbols.length < 3) {
      return false;
    }

    const symbolCounts = {};
    selectedSymbols.forEach((symbol) => {
      const symbolText = symbol.textContent;
      symbolCounts[symbolText] = (symbolCounts[symbolText] || 0) + 1;
    });

    const matchingSymbol = Object.keys(symbolCounts).find(
      (symbol) => symbolCounts[symbol] >= 3
    );

    if (matchingSymbol) {
      selectedSymbols.forEach((symbol) => {
        if (symbol.textContent === matchingSymbol) {
          symbol.classList.add("pulse");
        }
      });
      return true;
    }

    return false;
  }

  function gameOver() {
    let winnings = 0;

    if (score >= 8) winnings = 3000;
    else if (score >= 6) winnings = 300;
    else if (score >= 5) winnings = 90;
    else if (score >= 3) winnings = 30;
    else if (score >= 1) winnings = 15;

    const gameOverMessage = document.getElementById("gameOverMessage");
    gameOverMessage.innerText = `Final Score: ${score} \n You won $${winnings}.`;

    showEndModal();
    game.bank += winnings;
    currentScore.innerText = "$" + game.bank;
  }

  function updateLevelAndScoreDisplays() {
    const levelDisplay = document.getElementById("levelDisplay");
    const scoreDisplay = document.getElementById("scoreDisplay");

    levelDisplay.textContent = "Level: " + level;
    scoreDisplay.textContent = "Score: " + score;
  }

  function updateLevelSymbolsDisplay() {
    const levelSymbolsDiv = document.getElementById("levelSymbols");
    levelSymbolsDiv.innerHTML = ""; // Clear previous content

    const currentSymbols = symbols.slice(0, level + 1);

    currentSymbols.forEach((symbolObj) => {
      const symbolSpan = document.createElement("span");
      symbolSpan.textContent = symbolObj.symbol;
      symbolSpan.style.fontSize = "24px";
      symbolSpan.style.marginRight = "10px";

      const countSpan = document.createElement("span");
      countSpan.textContent = "x" + symbolObj.count;
      countSpan.style.fontSize = "16px";
      countSpan.style.marginRight = "20px";

      levelSymbolsDiv.appendChild(symbolSpan);
      levelSymbolsDiv.appendChild(countSpan);
    });
  }

  function showModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
  }

  function hideModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  function showEndModal() {
    let modal = document.getElementById("gameOverModal");
    modal.style.display = "block";
  }

  function hideEndModal() {
    let modal = document.getElementById("gameOverModal");
    modal.style.display = "none";
  }
  function hideBonusModal() {
    let modal = document.getElementById("bonus-popup");
    modal.style.display = "none";
  }

  function resetGame() {
    level = 0;
    score = 0;
    selectedCells = 0;
    matchedSymbols = 0;

    symbols.forEach((symbolObj, index) => {
      symbolObj.count = index === 0 ? 13 : index === 1 ? 12 : 0;
    });

    startNextLevel();
  }

  function startNextLevel() {
    level++;
    symbols[level].count += selectedCells;
    console.log("Symbol count: " + symbols[level].count);
    selectedCells = 0;
    initBoard(level);
    updateLevelAndScoreDisplays();
    renderBoard();
    updateLevelSymbolsDisplay();
    logGameBoard(); // Log the game board state

    // Remove the pulse class from all symbols
    const allSymbols = document.querySelectorAll(".grid-item .symbol");
    allSymbols.forEach((symbol) => symbol.classList.remove("pulse"));
  }

  function logGameBoard() {
    console.log("Game Board:");
    for (let i = 0; i < gridSize; i++) {
      let row = "";
      for (let j = 0; j < gridSize; j++) {
        row += gameBoard[i][j] + " ";
      }
      console.log(row);
    }
  }

  // Start the game at level 1
  startNextLevel();
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
