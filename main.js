/* NEXT STEPS: 
- remove else logic on line 32-36
- fix if logic on line 24
*/


// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '',
  errorMsg: '',
  checkWinner: function () {}, // check if player won game, if true, announce winner and reset game

  // Have to use .map() at least once to set up board?
  board: [
    [5, 4, 3, 2, 1],
    [],
    [],
  ],
  
  // move discs from one peg to another (use array helper methods, not for loops)
  moveDisc: function (disc, peg) {
    gameState.board[peg - 1].forEach(function (element) { // check for valid move
      console.log("el: " + element);
      if (typeof(element) != 'number') { // -- valid move --
        if (element > disc) {  // if true, add element to end of peg array
          gameState.moveOutcome = 'valid';
          gameState.board[peg - 1].push(disc);
          } else { // -- invalid move --
            gameState.moveOutcome = 'invalid';
            gameState.errorMsg = 'Disc can\'t go on top of smaller disc.';
          };
          
      } else { // -- invalid move, disc can't go on base of peg --
        gameState.moveOutcome = 'invalid';
        gameState.errorMsg = 'Disc can\'t go on base of peg.';
      };
      
    });
    console.log(`That move was ${gameState.moveOutcome}. ${this.errorMsg} Board is now:`);
    gameState.moveOutcome = '';

    // Use .map() to setup/return board?
    var testOutputMap = gameState.board.map(function (element) {
      return element;
    });
    console.log(testOutputMap);
    
    // console.log(gameState.board);
    // console.log(`--- ${gameState.board[0].join(' ')}`); // peg1
    // console.log(`--- ${gameState.board[1].join(' ')}`); // peg2
    // console.log(`--- ${gameState.board[2].join(' ')}`); // peg3
  },
};

// test function
console.log("Function Test: ", gameState.moveDisc(1, 2));