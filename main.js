// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '',

  // Have to use .map() at least once to set up board?
  board: [
    ['---', 5, 4, 3, 2, 1],
    ['---'],
    ['---'],
  ],
  
  // move discs from one peg to another (use array helper methods, not for loops)
  moveDisc: function (disc, peg) {
    // check for valid move
    gameState.board[peg].forEach(function (element) {
      // -- valid move --
      if (typeof(element) === 'number') {
        gameState.moveOutcome = 'valid';
        if (peg < element) {
          // -- valid move --
            // SOME COME FOR MOVING DISC HERE...
          } else { // -- invalid move, disc can't go on top of bigger disc --
            gameState.moveOutcome = 'invalid';
            console.log('sorry, can\'t move disc here');
          }
          
      } else { // -- invalid move, disc can't go on base of peg --
        gameState.moveOutcome = 'invalid';
        console.log('sorry, can\'t move disc here');
      }
      
    });
    console.log(`That move was ${gameState.moveOutcome}. Board is now:`)
    gameState.moveOutcome = '';
  },
  
  // check if player won game, if true, announce (clog) winner and reset game
  checkWinner: function () {},
};


// console.log(gameState.board);
console.log(gameState.board[0]); // peg1
console.log(gameState.board[1]); // peg2
console.log(gameState.board[2]); // peg3

 // test function
console.log("Function Test: ", gameState.moveDisc(1, 2));


// USING MAP FOR PEG ARRAYS OR FOR BOARD ARRAY??

// new var to test output with map (use [i] for nested arrays, remove for board array)
// var testOutputMap = gameState.board.map(function () {
//   return testOutputMap;
// });

// working on using map for pegs (nest in boards array... [0] SHOULD refer to peg1 array and map over that length to get length of peg2 and peg3 arrays? use '-' for blank)
// [0].map((index) => {
//   return '-';
//   // if (typeof(index) === 'string') {
//     // }
//   //   return 'index';
// });