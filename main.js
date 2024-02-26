class TowersOfHanoi {
  constructor(numDiscs, numPegs) {
    this.board = Array.from({ length: numPegs }, (_, index) => {
      return index === 0 ? Array.from({ length: numDiscs }, (_, i) => numDiscs - i) : [];
    });
  }

  printBoard() {
    this.board.map((peg, index) => {
      console.log(`Peg ${index + 1}: ${peg.join(' ')}`);
    });
    console.log('---');
  }

  moveDisc(sourcePeg, targetPeg) {
    const source = sourcePeg - 1;
    const target = targetPeg - 1;
  
    if (this.isValidMove(source, target)) {
      const disc = this.board[source].pop();
      this.board[target].push(disc);
      console.log(`Move disc from peg ${sourcePeg} to peg ${targetPeg}`);
      this.printBoard();
    } else {
      console.log('Invalid move. Please try again.');
    }
  
    if (this.checkWinner()) {
      console.log('Congratulations! You have won the game!');
      this.resetGame();
    }
  }

  isValidMove(source, target) {
    const sourcePeg = this.board[source];
    const targetPeg = this.board[target];

    return sourcePeg.length > 0 && (targetPeg.length === 0 || sourcePeg[sourcePeg.length - 1] < targetPeg[targetPeg.length - 1]);
  }

  checkWinner() {
    const targetPeg = this.board[this.board.length - 1];
    const firstPeg = this.board[0];
  
    if (targetPeg.length !== firstPeg.length) {
      return false;
    }
  
    for (let i = 0; i < targetPeg.length; i++) {
      if (targetPeg[i] !== firstPeg[firstPeg.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  

  resetGame() {
    const numDiscs = this.board[0].length;
    const numPegs = this.board.length;
    this.board = Array.from({ length: numPegs }, (_, index) => {
      return index === 0 ? Array.from({ length: numDiscs }, (_, i) => numDiscs - i) : [];
    });
  }
}

// Instructions

// Create a new game with 5 discs and 3 pegs
const game = new TowersOfHanoi(5, 3);

// Print the initial board
game.printBoard();

// Move discs to play the game
game.moveDisc(1, 2);