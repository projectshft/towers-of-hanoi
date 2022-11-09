// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '',
  errorMsg: '',

  // Have to use .map() at least once to set up board?
  board: [
    [5, 4, 3, 2, 1],
    [],
    [],
  ],
  
  testBoard: [
    ['---', 5, 4],
    ['---', 3,],
    ['---', 2, 1],
  ],
  
  // move discs from one peg to another (use array helper methods, not for loops)
  moveDisc: function (disc, peg) {
    // check for valid move
    gameState.board[peg - 1].forEach(function (element) {
      // -- valid move --
      if (typeof(element) === 'number') {
        gameState.moveOutcome = 'valid';
        if (element > disc) {  // if true, add element to array and remove first index
          gameState.board[peg - 1].push(disc);
          gameState.board[peg - 1].shift();
          } else { // -- invalid move, disc can't go on top of bigger disc --
            gameState.moveOutcome = 'invalid';
            gameState.errorMsg = 'Disc can\'t go on top of smaller disc.';
          };
          
      } else { // -- invalid move, disc can't go on base of peg (type mismatch) --
        gameState.moveOutcome = 'invalid';
        gameState.errorMsg = 'Disc can\'t go on base of peg (type mismatch).';
      };
      
    });
    console.log(`That move was ${gameState.moveOutcome}. ${this.errorMsg} Board is now:`);
    gameState.moveOutcome = '';
    // console.log(gameState.board);
    console.log(`--- ${gameState.board[0].join(' ')}`); // peg1
    console.log(`--- ${gameState.board[1].join(' ')}`); // peg2
    console.log(`--- ${gameState.board[2].join(' ')}`); // peg3
  },
  
  // check if player won game, if true, announce (clog) winner and reset game
  checkWinner: function () {},
};

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