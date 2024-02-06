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

var startingBoard = [
  [5, 4, 3, 2, 1],
  [],
  []
];

var printBoard = function() {
  this.board.map(function(peg) {
    var output = "";
    peg.forEach(function(disc) {
      output += ` ${disc} `;
    })
    console.log("---" + output);
  })
};

var startBoard = function() {
  this.board = startingBoard.map(function (item) {
    return item;
  });
  this.update();
};

var updateBoard = function() {
  this.peg1 = this.board[0];
  this.peg2 = this.board[1];
  this.peg3 = this.board[2]; 
}

// var moveDisc = function(source, destination) {
//     var sourcePeg = this[source];
//     var destinationPeg = this[destination];
//     var disc = sourcePeg.pop();
//     destinationPeg.push(disc);
// };

// var resetBoard = function() {};

// var checkWinner = function() {};

var boardState = {
  board: [],
  peg1: [],
  peg2: [],
  peg3: [],
  moveCount: 0,
  start: startBoard,
  update: updateBoard,
  print: printBoard,
  //move: moveDisc,
};

debugger;