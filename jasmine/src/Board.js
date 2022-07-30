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
    const firstPeg = [];
    const gameArray = [firstPeg];
    for (let i = this.getDiscs; i > 0; i -= 1) {
      firstPeg.push(i);
    }
    for (let i = 0; i < this.getPegs - 1; i += 1) {
      gameArray.push([]);
    }
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
    return isWinner;
  }
}
