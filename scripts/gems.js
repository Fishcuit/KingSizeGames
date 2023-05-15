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
        showModal();
      }
      // If a match is found in the first 3 selections, prevent further selections
      return;
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

  return Object.values(symbolCounts).some((count) => count >= 3);
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
  
    const currentSymbols = symbols.slice(0, level+1);
  
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
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
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
