// Object representing entire game
const board = {
  // 2D array representing starting pegs
  pegs: [[5, 4, 3, 2, 1], [], []],
  moves: 0,
  startingBoard: null,
  // Method to move a disc
  moveDisc(startPeg, destPeg) {
    if (this.moves === 0) {
      this.startingBoard = this.createStartingBoard();
    }

    const startPegArray = this.pegs[startPeg];
    const destPegArray = this.pegs[destPeg];

    const startDisc = startPegArray[startPegArray.length - 1];
    const destDisc = destPegArray[destPegArray.length - 1];

    // check for an invalid move
    if (startDisc > destDisc || startDisc === undefined) {
      console.log('You cannot move a larger disc on top of a smaller one.');
    } else {
      // if valid, make the move
      startPegArray.splice(startPegArray.length - 1, 1);
      destPegArray.push(startDisc);
    }
    // increment move counter
    this.moves += 1;
    // log the move number
    this.logMoves();
    // log the current state of the game board
    this.printBoard();
    // check for winning condition
    this.checkWinner();
  },
  // Method to establish starting board state
  createStartingBoard() {
    return this.pegs.map((peg) => peg.map((disc) => disc));
  },
  // Method to print current board state in desired format
  printBoard() {
    const printedBoard = this.pegs.map(
      (peg) => `---${peg.map((disc) => ` ${disc}`)}`
    );
    const loggedBoard = printedBoard.reduce((acc, arr) => {
      let str = acc;
      return (str += `${arr}\n`);
    }, '');

    console.log(loggedBoard);
  },
  logMoves() {
    console.log(`This is move number ${this.moves}`);
  },
  // Method to check for winning condition. If met, congratulate and reset.
  checkWinner() {
    const startingFirstPegLength = this.startingBoard[0].length;
    const currentLastPegLength = this.pegs[this.pegs.length - 1].length;

    if (startingFirstPegLength === currentLastPegLength) {
      console.log(`You won in ${this.moves} moves!`);
      this.resetBoard();
    }
  },
  resetBoard() {
    this.pegs = [...this.startingBoard];
    this.moves = 0;
  },
};

// Winning Game
board.moveDisc(0, 2); // 0
board.moveDisc(0, 1); // 1
board.moveDisc(2, 1); // 2
board.moveDisc(0, 2); // 4
board.moveDisc(1, 0); // 5

board.moveDisc(1, 2); // 6
board.moveDisc(0, 2); // 7
board.moveDisc(0, 1); // 8
board.moveDisc(2, 1); // 9
board.moveDisc(2, 0); // 00

board.moveDisc(1, 0); // 00
board.moveDisc(2, 1); // 01
board.moveDisc(0, 2); // 02
board.moveDisc(0, 1); // 04
board.moveDisc(2, 1); // 05

board.moveDisc(0, 2); // 06
board.moveDisc(1, 0); // 07
board.moveDisc(1, 2); // 08
board.moveDisc(0, 1); // 09
board.moveDisc(1, 2); // 10

board.moveDisc(1, 0); // 10
board.moveDisc(2, 1); // 11
board.moveDisc(2, 0); // 12
board.moveDisc(1, 0); // 14
board.moveDisc(1, 2); // 15

board.moveDisc(0, 2); // 16
board.moveDisc(0, 1); // 17
board.moveDisc(2, 1); // 18
board.moveDisc(0, 2); // 19
board.moveDisc(1, 0); // 20
board.moveDisc(1, 2); // 20
board.moveDisc(0, 2); // 32
