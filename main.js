// Refactor to Factory Function...

const BoardState = function () {
  let board = [];

  let discs = 3;

  const initializeGame = function () {
    board = [[3, 2, 1], [], []];
  };

  const customGame = function (number) {
    discs = number;
    // update board array
    // update board display
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

    if (fromPeg < 0 || fromPeg > 2 || toPeg < 0 || toPeg > 2) {
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
      console.log(`Congratulations, you won! \n` + currentBoard);

      // Reset board
      initializeGame();
      console.log("Play again? \n" + displayBoard());
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

  return { initializeGame, displayBoard, logMove };
};

// Create instance of BoardState
const boardState = BoardState();

// Start game
boardState.initializeGame();
console.log(
  `Objective: Move a stack of disks from one peg to another, following the rules that only one disk can be moved at a time and no disk can be placed on top of a smaller disk.\nTo move a disk, type "moveDisc(fromPeg, toPeg)" and replace "fromPeg" with a number between 1 and 3 and "toPeg" with a number between 1 (top peg) and 3 (bottom peg).\nTo increase the difficulty, use the "setDiscs(number)" function and replace "number" with the desired number of discs (at least 3, at most 7). \n\n` +
    boardState.displayBoard()
);

const moveDisc = function (fromPeg, toPeg) {
  fromPeg--;
  toPeg--;

  boardState.logMove(fromPeg, toPeg);
};

const setDiscs = function (number) {
  if (number < 3 || number > 7) {
    return "Disc number is out of range. Enter a number between 3 and 7.";
  }

  boardState.customGame(number);
};

moveDisc(1, 3);
moveDisc(1,2);
moveDisc(3,2);
moveDisc(1,3);
moveDisc(2,1);
moveDisc(2,3);
moveDisc(1,3);

// Extension Options
// Add set board function with ability to set number of pegs and discs (minimum of 3 of each):
// const setUp = function (numPegs, numDiscs) { };

// Create algorithm to play the game
