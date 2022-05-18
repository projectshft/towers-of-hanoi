// console.log('hello world');
const towersOfHanoi = {
  board: [[5, 4, 3, 2, 1], [], []],

  moveDisc(move, moveTO) {
    // Arguments assigned to the array at ___ index.
    const chosenPeg = this.board[move - 1];
    const moveToPeg = this.board[moveTO - 1];
    // Last element in each array.
    const lastElementChosenPeg = chosenPeg[chosenPeg.length - 1];
    const lastElementMoveToPeg = moveToPeg[moveToPeg.length - 1];
    // Conditional statement for moving discs.
    if (
      lastElementMoveToPeg > lastElementChosenPeg ||
      lastElementMoveToPeg === undefined
    ) {
      const moveDisc = chosenPeg.pop();
      moveToPeg.push(moveDisc);
      console.log(`That move was a success!!! The board is now:`);
      this.printBoard();
    } else {
      console.log('That Move is Not Allowed');
    }
    // Reset the Game if Winner
    if (this.board[1].length === 5 || this.board[2].length === 5) {
      alert('You have won!');
      this.board = [[5, 4, 3, 2, 1], [], []];

      this.printBoard();
      this.checkWinner();
    }
  },
  // Print Board
  printBoard() {
    const displayBoard = this.board.map(
      (peg) => `--- ${peg.map((disc) => `${disc}`)}`
    );
    for (let i = 0; i < displayBoard.length; i++) {
      const displayConsole = displayBoard[i];
      console.log(displayConsole.replace(/,/g, ' '));
    }
  },
  // Check Winner
  checkWinner() {
    if (this.board[1].length === 5 || this.board[2].length === 5) {
      console.log('You have won!');
    } else {
      console.log('The Game is Not Over Yet');
    }
  },
};
