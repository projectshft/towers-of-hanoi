function isInputNumber(num) {
  if (Number.isInteger(num)) {
    return true;
  }
  return false;
}

class Board {
  constructor(discs = 5, pegs = 3) {
    this.discs = discs;
    this.pegs = pegs;
    this.boardArray = this.initBoard();
  }

  initBoard() {
    const firstPeg = [];
    const gameArray = [firstPeg];
    for (let i = this.discs; i > 0; i -= 1) {
      firstPeg.push(i);
    }
    for (let i = 0; i < this.pegs - 1; i += 1) {
      gameArray.push([]);
    }
    return gameArray;
  }

  restartGame() {
    console.log('Restarting game...');
    this.boardArray = this.initBoard();
    console.log('Success! The current board is:');
    console.log(this.stateStr);
  }

  validateInput(initial, final) {
    // check if input are whole numbers
    if (
      isInputNumber(initial) &&
      isInputNumber(final) &&
      initial % 1 === 0 &&
      final % 1 === 0
    ) {
      // check if input are in the range of the boardArray
      const startIndex = initial - 1;
      const endIndex = final - 1;
      if (
        startIndex < this.getState.length &&
        endIndex < this.getState.length &&
        startIndex > -1 &&
        endIndex > -1
      ) {
        //  check if there is a peg at the designated starting index
        if (this.getState[startIndex].length !== 0) {
          // check if there is a disc at all on the peg or if the disk on the peg is larger than the peg we're trying to move
          if (
            this.getState[endIndex][this.getState[endIndex].length - 1] ===
              undefined ||
            this.getState[startIndex][this.getState[startIndex].length - 1] <
              this.getState[endIndex][this.getState[endIndex].length - 1]
          ) {
            return true;
          }
          console.log('Error: cannot move a larger disc onto a smaller disc');
          return false;
        }
        console.log('Error: There is no disc at the start index');
        return false;
      }
      console.log(
        'Error: Please make sure your inputs are in the range of the number of pegs'
      );
      return false;
    }
    console.log('Error: Please make sure inputs are whole numbers');
    return false;
  }

  moveDisc(initial, final) {
    console.log(`Move: ${initial}, ${final}`);
    // completes all input checks
    if (this.validateInput(initial, final)) {
      const startIndex = initial - 1;
      const endIndex = final - 1;
      this.boardArray[endIndex].push(this.boardArray[startIndex].pop());
      console.log('That move was successful, board is now:');
      console.log(this.stateStr);
      if (this.checkWinner()) {
        console.log('YOU WON!\n\n\n');
        this.restartGame();
      }
    }
  }

  get stateStr() {
    const stateStr = this.getState.map(
      (elem) => `---${elem.reduce((acc, curr) => `${acc} ${curr}`, '')}`
    );
    return stateStr.join('\n');
  }

  get getState() {
    return this.boardArray;
  }

  checkWinner() {
    const isWinner = this.getState.some((elem, index) => {
      if (index !== 0 && elem.length === this.discs) {
        return true;
      }
      return false;
    });
    return isWinner;
  }
}

const board = new Board(5, 3);
// Move the disc from peg 1 to peg 2
board.moveDisc(1, 2);
// That move was successful, board is now:
// --- 5 4 3 2
// --- 1
// ---

// Move disc from peg 1 to peg 3
board.moveDisc(1, 3);
// That move was successful, board is now:
// --- 5 4 3
// --- 1
// --- 2

// Move disc from peg 1 to peg 2
board.moveDisc(1, 2);
// You cannot move a larger disc on top of a smaller one, board is still:
// --- 5 4 3
// --- 1
// --- 2
board.moveDisc(3, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 1);
board.moveDisc(2, 1);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(1, 3);
board.moveDisc(2, 1);
board.moveDisc(1, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 2);
board.moveDisc(3, 1);
board.moveDisc(2, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 2);
board.moveDisc(2, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2); // winning move

// game 2
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 1);
board.moveDisc(2, 1);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(1, 3);
board.moveDisc(2, 1);
board.moveDisc(1, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 2);
board.moveDisc(3, 1);
board.moveDisc(2, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 2);
board.moveDisc(2, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2); // winning move

// Edge case and error testing
board.moveDisc(0, 2);
board.moveDisc(-10, 4);
board.moveDisc(-10, 1);
board.moveDisc(4, 4);
board.moveDisc(6, 1);
board.moveDisc(1, 10);
board.moveDisc('a', 4);
board.moveDisc(1, 3);
board.moveDisc('a', 4);
board.moveDisc();
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(3, 1);
