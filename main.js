// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '',
  errorMsg: '',
  isWinner: false,
  board: [
    [5, 4, 3, 2, 1],
    [],
    [],
  ],

  // check if player won game, if true, announce winner and reset game
  checkWinner: function () {},
  
  // check if move is valid
  checkMove: function (fromPeg, toPeg) {
    var newFromPeg = fromPeg -1;
    var newToPeg = toPeg - 1;
    var disc = gameState.board[newFromPeg][gameState.board[newFromPeg].length - 1]
    if (gameState.board[newToPeg].length === 0) { // if toPeg is empty, move is valid
      gameState.moveOutcome = 'valid';
    } else {
      gameState.board[newToPeg].forEach(function (element) {
        if (element > disc) {  // if disc will fit on toPeg, move is valid
          gameState.moveOutcome = 'valid';
        } else { // invalid move
          gameState.moveOutcome = 'invalid';
        };
      });
    };
    gameState.moveDisc(newFromPeg, newToPeg)
    },
    
    // move discs from one peg to another (use array helper methods, not for loops)
    moveDisc: function (moveFromPeg, moveToPeg) {
      if (gameState.moveOutcome === 'valid') {
        gameState.board[moveToPeg].push(gameState.board[moveFromPeg].at(-1));
        gameState.board[moveFromPeg].pop();
      } else {
      gameState.errorMsg = 'Disc can\'t go on top of smaller disc.';
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
console.log(gameState.checkMove(1, 2), "Next Move?");
console.log(gameState.checkMove(1, 3), "Next Move?");
console.log(gameState.checkMove(2, 3), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?"); // error works correctly
console.log(gameState.checkMove(3, 1), "Next Move?");
console.log(gameState.checkMove(3, 2), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");
console.log(gameState.checkMove(1, 3), "Next Move?");
console.log(gameState.checkMove(2, 3), "Next Move?");
console.log(gameState.checkMove(2, 1), "Next Move?");
console.log(gameState.checkMove(3, 1), "Next Move?");
console.log(gameState.checkMove(2, 3), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");
console.log(gameState.checkMove(1, 3), "Next Move?");
console.log(gameState.checkMove(2, 3), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");
console.log(gameState.checkMove(3, 1), "Next Move?");
console.log(gameState.checkMove(3, 2), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");
console.log(gameState.checkMove(3, 1), "Next Move?");
console.log(gameState.checkMove(2, 3), "Next Move?");
console.log(gameState.checkMove(2, 1), "Next Move?");
console.log(gameState.checkMove(3, 1), "Next Move?");
console.log(gameState.checkMove(3, 2), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");
console.log(gameState.checkMove(1, 3), "Next Move?");
console.log(gameState.checkMove(2, 3), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");
console.log(gameState.checkMove(3, 1), "Next Move?");
console.log(gameState.checkMove(3, 2), "Next Move?");
console.log(gameState.checkMove(1, 2), "Next Move?");