let gameBoard = [["5", "4", "3", "2", "1"],
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
      this.checkWinner();
    }

    if (movingDisk > destinationDisk) {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still:`);
      this.printBoard();
    }
  },
  checkWinner() {
    if (gameBoard[1].length === 5 || gameBoard[2].length === 5) {
      console.log(`YOU WON THE GAME!`);
      this.newGame();
    }
  },
  newGame() {
    gameBoard = [["5", "4", "3", "2", "1"],
    [],
    []];
    console.log(`Board is now reset for a new game:`);
    this.printBoard();
  }
};

// board.moveDisk(1, 2);
// board.moveDisk(1, 3);
// board.moveDisk(1, 2);
// board.moveDisk(2, 3);
// board.moveDisk(1, 2);
// board.moveDisk(3, 1);
// board.moveDisk(3, 2);
// board.moveDisk(1, 2);
// board.moveDisk(1, 3);
// board.moveDisk(2, 3);
// board.moveDisk(2, 1);
// board.moveDisk(3, 1);
// board.moveDisk(2, 3);
// board.moveDisk(1, 2);
// board.moveDisk(1, 3);
// board.moveDisk(2, 3);
// board.moveDisk(1, 2);
// board.moveDisk(3, 2);
// board.moveDisk(3, 1);
// board.moveDisk(2, 1);
// board.moveDisk(3, 2);
// board.moveDisk(1, 3);
// board.moveDisk(1, 2);
// board.moveDisk(3, 2);
// board.moveDisk(3, 1);
// board.moveDisk(2, 3);
// board.moveDisk(2, 1);
// board.moveDisk(3, 1);
// board.moveDisk(2, 3);
// board.moveDisk(1, 2);
// board.moveDisk(1, 3);
// board.moveDisk(2, 3);
// board.moveDisk(1, 2);
// board.moveDisk(3, 2);
// board.moveDisk(3, 1);
// board.moveDisk(2, 1);
// board.moveDisk(3, 2);
// board.moveDisk(1, 3);
// board.moveDisk(1, 2);
// board.moveDisk(3, 2);