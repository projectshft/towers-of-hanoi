// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '<empty>',

  // Have to use .map() at least once to set up board?
  board: [
    ['---', 5, 4, 3, 2, 1],
    ['---'  ],
    ['---'],
  ],
  
  moveDisc: function (disc, peg) {}, // a way to move discs from one peg to another (use array helper methods, not for loops when iterating on arrays)
  
  checkWinner: function () {}, // check if player won game, if true, announce (clog) winner and reset game
};



console.log(`That move was ${gameState.moveOutcome}. Board is now:`)
// console.log(gameState.board);
console.log(gameState.board[0]); // peg1
console.log(gameState.board[1]); // peg2
console.log(gameState.board[2]); // peg3

console.log(gameState.moveDisc(1, 2)); // test function