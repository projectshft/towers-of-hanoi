// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '',
  errorMsg: '',
  checkWinner: function () {}, // check if player won game, if true, announce winner and reset game

  // Have to use .map() at least once to set up board?
  board: [
    [5, 4, 3],
    [1],
    [2],
  ],
  
  // move discs from one peg to another (use array helper methods, not for loops)
  moveDisc: function (disc, peg) {
    if (gameState.board[peg - 1].length === 0) { // check if array is empty. if true, move is valid -> move disc
      gameState.moveOutcome = 'valid';
      gameState.board[peg - 1].push(disc);
    } else {
      gameState.board[peg - 1].forEach(function (element) { // check each element (disc) on a given peg
        if (element > disc) {  // check if disc will fit on peg. if true, move is valid -> add element to end of peg array
          gameState.moveOutcome = 'valid';
          gameState.board[peg - 1].push(disc);
          } else { // -- invalid move --
            gameState.moveOutcome = 'invalid';
            gameState.errorMsg = 'Disc can\'t go on top of smaller disc.';
          };
      });
    };
    
    console.log(`That move was ${this.moveOutcome}. ${this.errorMsg} Board is now:`);
    // reset props after evaluating conditionals
    gameState.moveOutcome = '';
    gameState.errorMsg = '';

    // Use .map() to setup/return board?
    var testOutputMap = gameState.board.map(function (element) {
      console.log(`--- ${element.join(' ')}`)
    });
  },
};

// test function
console.log("Function Test: ", gameState.moveDisc(3, 2));