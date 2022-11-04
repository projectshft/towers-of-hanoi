// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '<empty>',

  // Have to use .map() at least once to set up board?
  board: [
    ['---', 5, 4, 3, 2, 1],
    ['---'],
    ['---'],
  ],
  
  // a way to move discs from one peg to another (use array helper methods, not for loops when iterating on arrays)
  moveDisc: function (disc, peg) {
    // iterate through nested peg arrays
    var i = 0
    // i ++;
    
    // check for valid move
    gameState.board[i].forEach(function (element) {
      console.log(element);
      if (typeof(element) != 'string') {
        // -- valid move --
      };

      // if 
    });
  },
  
  // check if player won game, if true, announce (clog) winner and reset game
  checkWinner: function () {},
};



console.log(`That move was ${gameState.moveOutcome}. Board is now:`)
// console.log(gameState.board);
console.log(gameState.board[0]); // peg1
console.log(gameState.board[1]); // peg2
console.log(gameState.board[2]); // peg3


 // test function
console.log("Function Test: ", gameState.moveDisc(1, 2));


// new var to test output with map (use [i] for nested arrays, remove for board array)
var testOutputMap = gameState.board.map(function () {
  return testOutputMap;
});