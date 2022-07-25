class Board {
  constructor(discs, pegs) {
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

  moveDisc(initial, final) {
    const startIndex = initial - 1;
    const endIndex = final - 1;
    // check if startIndex is inside boardArray and if endIndex is inside boardArray
    if(startIndex < this.getState.length && endIndex < this.getState.length){
      if (this.getState[startIndex].length === 0) {
        console.log('Error: There is no peg at the start index');
      } else if (
        this.getState[endIndex][this.getState[endIndex].length - 1] ===
          undefined ||
        this.getState[startIndex][this.getState[startIndex].length - 1] <
          this.getState[endIndex][this.getState[endIndex].length - 1]
      ) {
        // this.setState = [startIndex, endIndex];
        this.boardArray[endIndex].push(this.boardArray[startIndex].pop());
        console.log('That move was successful, board is now:');
        console.log(this.stateStr);
        if (this.checkWinner()) {
          console.log('YOU WON!\n\n\n');
          this.restartGame();
        }
      } else {
        console.log('Error: cannot move a larger disc onto a smaller disc');
        // console.log(
        //   this.getState[startIndex][this.getState[startIndex].length - 1]
        // );
        // console.log(this.getState[endIndex][this.getState[endIndex].length - 1]);
      }
    }
    else{
        console.log(`Error: Make sure your input is between 1 and ${this.discs}`)
    }
      

    // console.log(this.state);
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

  // set setState([initial, final]) {
  //   this.boardArray[final].push(this.boardArray[initial].pop());
  // }

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


