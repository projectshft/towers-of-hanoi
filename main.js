let board = [[5, 4, 3, 2, 1],
[],
[]];
function horizontalBoard(board){
    board.map(function(peg, i) {
    console.log("---"  + peg);
});
}


function PegBoard() {
  this.board = [[5, 4, 3, 2, 1], [], []];
}
PegBoard.prototype.moveDisc = function(startPeg, endPeg) {
  let disc = this.board[startPeg].pop();
  if (this.board[endPeg].length === 0 || disc < this.board[endPeg][this.board[endPeg].length - 1]) {
    this.board[endPeg].push(disc);
    console.log(`Move successful, board is now:`);
    this.printBoard();
  } else {
    console.log(`You cannot move a larger disc on top of a smaller one, board is still:`);
    this.board[startPeg].push(disc);
  }
};

PegBoard.prototype.printBoard = function() {
  board.map(function(peg, i) {
  console.log("---"  + peg);
});
}
PegBoard.prototype.checkWinner = function() {
  if (this.board[1].length === 5 || this.board[2].length === 5) {
    console.log(`Hooray! You have won!`);
  }
}

let game = new PegBoard();