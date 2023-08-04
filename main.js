const boardState = {
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

    return returnBoard.toString().replaceAll("\n,", "\n").replaceAll(",", " ");
  },
  logMove: function (fromPeg, toPeg) {
    // Check if move is legal
    const prevBoard = this.getBoard();

    if (this.getTopDisc(toPeg) < this.getTopDisc(fromPeg)) {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: \n` + prevBoard.toString().replaceAll("\n,", "\n").replaceAll(",", " "));
      return;
    }

    // Update board state
    this.update(fromPeg, toPeg);

    const currentBoard = this.getBoard();

    // Check win conditions
    if (this.checkWinner()) {
      console.log(
        `Congratulations, you won! \n` +
          currentBoard
      );
      
      // Reset board
      this.initializeGame();
      console.log('Play again? \n' + this.getBoard());
    } else {
      console.log(
        `That move was successful, board is now: \n` +
          currentBoard
      );
    }
  },
  getTopDisc: function (peg) {
    return this.board[peg][this.board[peg].length - 1];
  },
  checkWinner: function () {
    if (this.board[2].length == 3) {
      return true;
    }
    return false;
  },
};

// Start game
boardState.initializeGame();
console.log(`Objective: Move a stack of disks from one peg to another, following the rules that only one disk can be moved at a time and no disk can be placed on top of a smaller disk.\nTo move a disk, type "moveDisc(fromPeg, toPeg)" and replace "fromPeg" with a number between 1 and 3 and "toPeg" with a number between 1 and 3. \n\n` + boardState.getBoard());

const moveDisc = function (fromPeg, toPeg) {
  fromPeg--;
  toPeg--;

  boardState.logMove(fromPeg, toPeg);
};

// moveDisc(1,2);
// moveDisc(1,3);
// moveDisc(2,1);
// moveDisc(3,2);
// moveDisc(1,2);
// moveDisc(1,3);
// moveDisc(2,1);
// moveDisc(2,3);
// moveDisc(1,3);

// Extension Options
// Add set board function with ability to set number of pegs and discs (minimum of 3 of each):
// const setUp = function () { };

// Create algorithm to play the game
