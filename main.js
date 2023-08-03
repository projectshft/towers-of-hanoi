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
  update: function (fromPeg, toPeg) {
    this.board[toPeg].push(this.board[fromPeg].pop());
  },
  logMove: function () {
    // must use map function to print the board
    const currentBoard = this.board.map((element) => {
      return `---  ${element} \n`;
    });

    console.log(`That move was successful, board is now: \n` + currentBoard.toString().replaceAll('\n,', '\n').replaceAll(',', ' '));
  },
  getTopDisc: function (peg) {
    
    return this.board[peg][this.board[peg].length - 1];
  },
  checkWinner: function () {
    // Check to see if the state of the board is the original order (largest to smallest) on the last peg instead of the first:
    // Winner! Play again? (board will be reset to original state)
    // ---
    // ---
    // --- 3 2 1
    return false;
  },
};

boardState.initializeGame();

const moveDisc = function (fromPeg, toPeg) {

  fromPeg--;
  toPeg--;

  // Verify that move is legal
  if (boardState.getTopDisc(toPeg) < boardState.getTopDisc(fromPeg)) {
    
    return `You cannot move a larger disc on top of a smaller one, board is still: ${boardState.board}`; // use logMove function
  }

  // Check winner
  if (boardState.checkWinner()) {
    return 'Congratulations! You won!';
  }

  // Update board state
  boardState.update(fromPeg, toPeg);
  console.log(boardState.board); //testing
  boardState.logMove();
};

//moveDisc(1,2);

// Extension Options
// Add set board function with ability to set number of pegs and discs (minimum of 3 of each):
// const setUp = function () { };

// Create algorithm to play the game
