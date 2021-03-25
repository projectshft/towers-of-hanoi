const gameBoard = [["5", "4", "3", "2", "1"],
[],
[]];

const board = {
  printBoard() {
    gameBoard.map(peg => {
      console.log('---', ...peg);
    })
 },
  moveDisk(start, end) {
    const startPeg = gameBoard[start - 1];
    const endPeg = gameBoard[end - 1];
    const movingDisk = startPeg[startPeg.length - 1];
    const destinationDisk = endPeg[endPeg.length - 1];

    if (movingDisk < destinationDisk || endPeg.length === 0) {
      endPeg.push(startPeg.pop());
      console.log(`That move was successful, board is now:`);
      this.printBoard();
    }

    if (movingDisk > destinationDisk) {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still:`);
      this.printBoard();
    }
  },
  checkWinner() {

  },
  newGame() {

  }
};
//board.printBoard();
board.moveDisk(1, 2);
board.moveDisk(1, 3);
board.moveDisk(1, 2);