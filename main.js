const towersOfHanoi = {
  board: [[3, 2, 1], [], []],
  // begin new game
  startGame() {
    console.log('Game started!');
    this.drawBoard();
  },
  // reset board to original state
  resetGame() {
    console.log('Resetting the board!');
    this.board = [[3, 2, 1], [], []];
  },
  // move a disc to specified peg
  moveDisc(start, end) {
    const startDisc = this.board[start - 1][this.board[start - 1].length - 1];
    const endDisc = this.board[end - 1][this.board[end - 1].length - 1];
    if (startDisc > endDisc) {
      console.log('Invalid move, try again.');
      this.moveCount();
      this.checkWinner();
      this.drawBoard();
    }
    if (endDisc === undefined || startDisc < endDisc) {
      console.log('Disc moved!');
      this.board[end - 1].push(startDisc);
      this.board[start - 1].pop();
      this.moveCount();
      this.drawBoard();
      this.checkWinner();
    }
  },
  // log current board state to console
  drawBoard() {
    const p1 = towersOfHanoi.board[0].map((disc) => disc);
    const p2 = towersOfHanoi.board[1].map((disc) => disc);
    const p3 = towersOfHanoi.board[2].map((disc) => disc);
    console.log(`Peg 1 --- ${p1.join(' ')}`);
    console.log(`Peg 2 --- ${p2.join(' ')}`);
    console.log(`Peg 3 --- ${p3.join(' ')}`);
  },
  // check if player has met winning conditions
  checkWinner() {
    if (this.board[1].length === victory || this.board[2].length === victory) {
      console.log(
        'You have beat the game! Resetting the board.',
        '\n\nMoves taken:',
        count,
        '\n\nUse startGame() to play again!'
      );
      this.board = [[3, 2, 1], [], []];
    }
  },
  moveCount() {
    count += 1;
  },
};
// original length of starting peg
const victory = towersOfHanoi.board[0].length;
let count = 0;

towersOfHanoi.startGame();
towersOfHanoi.moveDisc(1, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(3, 2);
towersOfHanoi.moveDisc(1, 3);
towersOfHanoi.moveDisc(2, 1);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 3);
