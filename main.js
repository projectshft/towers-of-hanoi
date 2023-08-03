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
  getBoard: function () {
    const returnBoard = this.board.map((element) => {
      return `---  ${element} \n`;
    });

    return returnBoard;
  },
  logMove: function (fromPeg, toPeg) {
    const prevBoard = this.getBoard();

    if (this.getTopDisc(toPeg) < this.getTopDisc(fromPeg)) {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: \n` + prevBoard.toString().replaceAll("\n,", "\n").replaceAll(",", " "));
      return;
    }

    this.update(fromPeg, toPeg);

    const currentBoard = this.getBoard();

    if (this.checkWinner()) {
      console.log(
        `Congratulations, you won! \n` +
          currentBoard.toString().replaceAll("\n,", "\n").replaceAll(",", " ")
      );
      
      console.log('Play again?');
      this.initializeGame();
    } else {
      console.log(
        `That move was successful, board is now: \n` +
          currentBoard.toString().replaceAll("\n,", "\n").replaceAll(",", " ")
      );
    }
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
    if (this.board[2].length == 3) {
      return true;
    }
    return false;
  },
};

boardState.initializeGame();
// log starting board

const moveDisc = function (fromPeg, toPeg) {
  fromPeg--;
  toPeg--;

  boardState.logMove(fromPeg, toPeg);

  console.log(boardState.board); //testing
};

//moveDisc(1,2);

// Extension Options
// Add set board function with ability to set number of pegs and discs (minimum of 3 of each):
// const setUp = function () { };

// Create algorithm to play the game
