// >>> Towers of Hanoi <<<

// TODO: Make an object responsible for maintaining the state of the board.
// TODO: Make a function that moves a disc moveDisc(sourcePeg, destinationPeg)
// TODO: Make a checkWinner function that checks to see if the player has won the game.
// Winning the game means all of the discs are placed on a different peg in the same order.
// TODO: When the player wins, announce the winner and reset for a new game.
// Try to use array helper methods instead of for or while loops.

// example starting board
// --- 5 4 3 2 1
// ---
// ---

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.

const startingBoard = [
  [5, 4, 3, 2, 1],
  [],
  []
];

const printBoard = function() {
  this.board.map(function(peg) {
    let output = "";
    peg.forEach(function(disc) {
      output += ` ${disc} `;
    })
    console.log("---" + output);
  })
};

const startBoard = function() {
  this.board = startingBoard.map(function (item) {
    return item;
  });
  this.update();
};

const updatePegs = function() {
  this.peg1 = this.board[0];
  this.peg2 = this.board[1];
  this.peg3 = this.board[2]; 
}

const moveDisc = function(source, destination) {
    let sourcePeg = this[`peg${source}`];
    let destinationPeg = this[`peg${destination}`];

    if (sourcePeg.length === 0) {
      console.log("Sorry. You can't move a disc that isn't there!")
      return;
    }

    if (sourcePeg[sourcePeg.length - 1] > destinationPeg[destinationPeg.length - 1]) {
      console.log("Sorry. You can't move a larger disc on top of a smaller disc.")
      return;
    }

    this.moveCount += 1;

    let disc = sourcePeg.pop();
    destinationPeg.push(disc);
};

const resetBoard = function() {

};

// const checkWinner = function() {};

let boardState = {
  board: [],
  peg1: [],
  peg2: [],
  peg3: [],
  moveCount: 0,
  start: startBoard,
  update: updatePegs,
  print: printBoard,
  reset: resetBoard,
  move: moveDisc,
  //quit: quitGame,
};

debugger;