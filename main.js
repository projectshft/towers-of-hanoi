// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '',
  errorMsg: '',
  checkWinner: function () {}, // check if player won game, if true, announce winner and reset game
  board: [
    [5, 4, 3, 2, 1],
    [],
    [],
  ],
  
  // move discs from one peg to another (use array helper methods, not for loops)
  moveDisc: function (fromPeg, toPeg) {
    var newFromPeg = fromPeg -1;
    var newToPeg = toPeg - 1;
    var disc = gameState.board[newFromPeg][gameState.board[newFromPeg].length - 1]
    if (gameState.board[newToPeg].length === 0) { // if toPeg is empty, move is valid -> push disc to toPeg array & pop disc off of fromPeg array
      gameState.moveOutcome = 'valid';
      gameState.board[newToPeg].push(disc);
      gameState.board[newFromPeg].pop();
    } else {
      gameState.board[newToPeg].forEach(function (element) {
        if (element > disc) {  // if disc will fit on toPeg, move is valid -> push disc to toPeg array & pop disc off of fromPeg array
          gameState.moveOutcome = 'valid';
          gameState.board[newToPeg].push(disc);
          gameState.board[newFromPeg].pop();
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

    // Use .map() to return board
    var testOutputMap = gameState.board.map(function (element) {
      console.log(`--- ${element.join(' ')}`)
    });
  },
};

// test function
console.log(gameState.moveDisc(1, 2), "Next Move?");
console.log(gameState.moveDisc(1, 3), "Next Move?");
console.log(gameState.moveDisc(2, 3), "Next Move?");
console.log(gameState.moveDisc(1, 2), "Next Move?");
console.log(gameState.moveDisc(1, 2), "Next Move?"); // error works correctly
console.log(gameState.moveDisc(3, 1), "Next Move?"); // pops and pushes too many times, use something like break? move out of forEach loops?