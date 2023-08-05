// Refactor to Factory Function...

const BoardState = function () {
  let board = [];

  let discs = 3;

  const initializeGame = function (number) {
    if (number) {
      discs = number;
    } 

    let newBoard = new Array(discs);

    let num = discs;

    // update board array
    newBoard = newBoard.fill(0).map((element) => {
      let value = element + num;
      num--;
      return value;
    });

    board = [newBoard, [], []];

    // display board
    console.log(
      `Objective: Move a stack of disks from one peg to another, following the rules that only one disk can be moved at a time and no disk can be placed on top of a smaller disk.\nTo move a disk, type "moveDisc(fromPeg, toPeg)" and replace "fromPeg" with a number between 1 (top peg) and 3 (bottom peg) and "toPeg" with a number between 1 and 3.\nTo increase the difficulty, use the "setDiscs(number)" function and replace "number" with the desired number of discs (at least 3, at most 12). Note: Although you are allowed to add 12 discs, it would take you 2^12 - 1 (4,095) steps to complete. If you want to watch the computer solve the puzzle for you, type "runAlgorithm()". \n\n` + displayBoard()
    );

  };

  const update = function (fromPeg, toPeg) {
    board[toPeg].push(board[fromPeg].pop());
  };

  const displayBoard = function () {
    const returnBoard = board.map((element) => {
      return `---  ${element} \n`;
    });

    return returnBoard.toString()
    .replaceAll("\n,", "\n")
    .replaceAll(",", " ");
  };

  const logMove = function (fromPeg, toPeg) {
    // Check if move is legal
    const prevBoard = displayBoard();

    if (fromPeg < 0 || fromPeg > discs - 1 || toPeg < 0 || toPeg > discs - 1) {
      console.log(
        `Peg out of range. Pick a number between 1 and 3. Board is still: \n` +
          prevBoard
      );
      return;
    }

    if (getTopDisc(toPeg) < getTopDisc(fromPeg)) {
      console.log(
        `You cannot move a larger disc on top of a smaller one, board is still: \n` +
          prevBoard
      );
      return;
    }

    if (isNaN(getTopDisc(fromPeg))) {
      console.log(
        `The peg you chose to move from is empty, board is still: \n` +
          prevBoard
      );
      return;
    }

    // Update board state
    update(fromPeg, toPeg);

    const currentBoard = displayBoard();

    // Check win conditions
    if (checkWinner()) {
      console.log(`Congratulations, you won! \n` + currentBoard + '\n\nPlay again?');

      // Reset board
      initializeGame();
    } else {
      console.log(`That move was successful, board is now: \n` + currentBoard);
    }
  };

  const getTopDisc = function (peg) {
    return board[peg][board[peg].length - 1];
  };
  
  checkWinner = function () {
    if (board[2].length == discs) {
      return true;
    }
    return false;
  };

  getDiscs = function () {
    return discs;
  };

  return { initializeGame, logMove, getDiscs }; 
};

// Create instance of BoardState
const boardState = BoardState();

// Start game
boardState.initializeGame();

// Player functions
const moveDisc = function (fromPeg, toPeg) {
  fromPeg--;
  toPeg--;

  boardState.logMove(fromPeg, toPeg);
};

const setDiscs = function (number) {
  if (number < 3 || number > 12) {
    return "Disc number is out of range. Enter a number between 3 and 12.";
  }

  boardState.initializeGame(number);
};

const solvePuzzle = function (currentDiscs, fromPeg, toPeg, auxPeg) {
  if (currentDiscs == 0) {
    return;
  }

  solvePuzzle(currentDiscs - 1, fromPeg, auxPeg, toPeg);
  moveDisc(fromPeg, toPeg);
  solvePuzzle(currentDiscs - 1, auxPeg, toPeg, fromPeg);
};
    
const runAlgorithm = function () {
  solvePuzzle(boardState.getDiscs(), 1, 3, 2);
};

// moveDisc(1, 3);
// moveDisc(1,2);
// moveDisc(3,2);
// moveDisc(1,3);
// moveDisc(2,1);
// moveDisc(2,3);
// moveDisc(1,3);

// Extension Options
// Add set board function with ability to set number of pegs and discs (minimum of 3 of each):
// const setUp = function (numPegs, numDiscs) { };

// Create algorithm to play the game
