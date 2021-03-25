const gameBoard = [["5", "4", "3", "2", "1"],
[],
[]];

const board = {
  printBoard() {
    gameBoard.map(peg => {
     if (!peg.includes('---')) peg.unshift('---');
     console.log(...peg);
   });
 },
  moveDisk(start, end) {
    const startPeg = gameBoard[start - 1];
    const endPeg = gameBoard[end - 1];
    const movingDisk = startPeg[startPeg.length - 1];
    const destinationDisk = endPeg[endPeg.length - 1];
console.log(endPeg.length)
console.log(gameBoard)
    if (movingDisk < destinationDisk || endPeg.length === 0) {
      endPeg.push(startPeg.pop());
      console.log(`That move was successful, board is now:`);
      this.printBoard();
    }

    //if (movingDisk < des)
  },
  checkWinner() {

  },
  newGame() {

  }
};

board.moveDisk(1, 2);
board.moveDisk(1, 3);
