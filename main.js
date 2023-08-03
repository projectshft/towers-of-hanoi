const boardState = {
  // will print current state of board
  // for example, the starting state would be:
  // --- 3 2 1
  // ---
  // ---

  // After a move:
  // That move was successful, board is now:
  // --- 3 2
  // --- 1
  // ---

  // Or:
  // You cannot move a larger disc on top of a smaller one, board is still:
  // --- 3 2
  // --- 1
  // ---
  board: [],
  initializeGame: function () {
    this.board = [[3, 2, 1], [], []];
  },
  logBoard: function () {
    // must use map function to print the board
  },
  checkWinner: function () {
    // Check to see if the state of the board is the original order (largest to smallest) on the last peg instead of the first:
    // Winner! Play again? (board will be reset to original state)
    // ---
    // ---
    // --- 3 2 1
  },
};

boardState.initializeGame();

const moveDisc = function (fromPeg, toPeg) {

  fromPeg--;
  toPeg--;
  // Verify that move is legal
  if (boardState.board[boardState.board[toPeg].length - 1] > boardState.board[boardState.board[fromPeg].length - 1]) {
    return `You cannot move a larger disc on top of a smaller one, board is still: ${boardState.board}`; // use logBoard function
  }

  boardState.board[toPeg].push(boardState.board[fromPeg].pop());
  console.log(boardState.board);
};

// Extension Options
// Add set board function with ability to set number of pegs and discs (minimum of 3 of each):
// const setUp = function () { };

// Create algorithm to play the game
