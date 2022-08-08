function isInputNumber(num) {
  if (Number.isInteger(num)) {
    return true;
  }
  return false;
}
function validNumberPegs(pegNum) {
  return isInputNumber(pegNum) && pegNum > 2;
}
function validNumberDiscs(discNum) {
  return isInputNumber(discNum) && discNum > 0;
}

function validateWholeNumber(num) {
  if (isInputNumber(num) && num % 1 === 0) return true;
  console.log('Error: Please make sure inputs are whole numbers');
  return false;
}

class Board {
  constructor(discs = 5, pegs = 3) {
    this.discs = discs;
    this.pegs = pegs;
    this.boardArray = this.initBoard();
  }

  initBoard() {
    if (!validNumberDiscs(this.getDiscs)) {
      this.discs = 5;
      console.log(
        'Error: Discs have been set to 5. Minimum disc in this game is 1 disc'
      );
    }
    if (!validNumberPegs(this.getPegs)) {
      this.pegs = 3;
      console.log(
        'Error: Pegs have been set to 3. Minimum pegs in this game are 3 pegs'
      );
    }
    // Creates array from 1 to N
    const firstPeg = Array.from({ length: this.getDiscs }, (_, i) => i + 1);
    // Makes the array from N to 1 for the game
    firstPeg.reverse();
    // Create an array of N empty arrays to simulate the pegs in the game
    const gameArray = Array.from(
      {
        length: this.getPegs,
      },
      () => []
    );
    // Change first peg to have discs on it
    gameArray[0] = firstPeg;
    return gameArray;
  }

  changeGamePieces(discs, pegs) {
    if (validNumberDiscs(discs) && validNumberPegs(pegs)) {
      this.discs = discs;
      this.pegs = pegs;
      this.restartGame();
    } else {
      console.log(
        'Please enter a valid number of discs and pegs to change the board type'
      );
    }
  }

  restartGame() {
    console.log('Restarting game...');
    this.boardArray = this.initBoard();
    console.log('Success! The current board is:');
    console.log(this.stateStr);
  }

  isInRange(num) {
    const index = num - 1;
    if (index < this.getState.length && index > -1) {
      return true;
    }
    console.log(
      'Error: Please make sure your inputs are in the range of the number of pegs'
    );
    return false;
  }

  pegExists(num) {
    const index = num - 1;
    if (this.getState[index].length !== 0) {
      return true;
    }
    console.log('Error: There is no disc at the start index');
    return false;
  }

  isPegLarger(initial, final) {
    const startIndex = initial - 1;
    const endIndex = final - 1;
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

  validateInput(initial, final) {
    if (
      validateWholeNumber(initial) &&
      validateWholeNumber(final) &&
      this.isInRange(initial) &&
      this.isInRange(final) &&
      this.pegExists(initial) &&
      this.isPegLarger(initial, final)
    ) {
      return true;
    }
    return false;
  }

  moveDisc(initial, final) {
    console.log(`Move: ${initial}, ${final}`);
    // completes all input checks
    if (this.validateInput(initial, final)) {
      // convert user input to array indeces
      const startIndex = initial - 1;
      const endIndex = final - 1;
      // Remove disc from the top of the peg
      const movedDisc = this.boardArray[startIndex].pop();
      // Add disc to the new peg
      this.boardArray[endIndex].push(movedDisc);
      console.log('That move was successful, board is now:');
      console.log(this.stateStr);
      this.checkWinner();
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

  get getDiscs() {
    return this._discs;
  }

  get getPegs() {
    return this._pegs;
  }

  set discs(disc) {
    this._discs = disc;
  }

  set pegs(pegs) {
    this._pegs = pegs;
  }

  checkWinner() {
    const isWinner = this.getState.some((elem, index) => {
      if (index !== 0 && elem.length === this.getDiscs) {
        return true;
      }
      return false;
    });

    if (isWinner) {
      this.dealWithWinner();
    }
  }

  dealWithWinner() {
    console.log('YOU WON!\n\n\n');
    this.restartGame();
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
