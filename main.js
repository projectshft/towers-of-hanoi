console.log("Welcome to the Towers of Hanoi! To start a new game type 'startGame()' below.")

// object responsible for maintaining the state of the board
var gameState = {
  moveOutcome: '',
  errorMsg: '',
  board: [
    [5, 4, 3, 2, 1],
    [],
    [],
  ],
  
  // check if player won game, if true, announce winner and reset game
  checkWinner: function () {
    if (this.board[1].length === 5 || this.board[2].length === 5 ) {
      console.log("🎉 Congratulations, you win! 🎉")
      startGame();
    }
  },
  
  // check if move is valid, set moveOutcome and errorMsg, call moveDisc
  checkMove: function (fromPeg, toPeg) {
    var newFromPeg = fromPeg -1;
    var newToPeg = toPeg - 1;
    // check that arguments are ints
    if (typeof(fromPeg) != 'number' || typeof(toPeg) != 'number') {
      this.moveOutcome = 'invalid';
      this.errorMsg = 'Please enter a number.';
      this.moveDisc(newFromPeg, newToPeg);
    // check that arguments are greater than 0
    } else if (fromPeg <= 0 || toPeg <= 0) {
      this.moveOutcome = 'invalid';
      this.errorMsg = 'Please enter a number greater than 0.';
      this.moveDisc(newFromPeg, newToPeg);
    // check that arguments are within number of pegs
    } else if (fromPeg < 1 || fromPeg > 3 || toPeg < 1 || toPeg > 3) {
      this.moveOutcome = 'invalid';
      this.errorMsg = 'Please select a a number between 1 and 3.';
      this.moveDisc(newFromPeg, newToPeg);
    // check if fromPeg array is empty
    } else if (this.board[newFromPeg].length === 0) {
      this.moveOutcome = 'invalid';
      this.errorMsg = 'There are no more discs to move from this peg.';
      this.moveDisc(newFromPeg, newToPeg);
    // check if toPeg is empty -> move is valid
    } else if (this.board[newToPeg].length === 0) {
      this.moveOutcome = 'valid';
      this.moveDisc(newFromPeg, newToPeg);
    // check if topmost disc on fromPeg will fit on toPeg -> move is valid
    } else if (this.board[newToPeg][this.board[newToPeg].length -1] > this.board[newFromPeg][this.board[newFromPeg].length -1]) {
      this.moveOutcome = 'valid';
      this.moveDisc(newFromPeg, newToPeg);
    } else { // disc is too big to fit on peg -> invalid move
      this.moveOutcome = 'invalid';
      this.errorMsg = 'Disc can\'t go on top of smaller disc.';
      this.moveDisc(newFromPeg, newToPeg);
    };
  },
    
    // move disc from one peg to another (use array helper methods, not for loops)
    moveDisc: function (moveFromPeg, moveToPeg) {
      if (this.moveOutcome === 'valid') {
        this.board[moveToPeg].push(this.board[moveFromPeg].at(-1));
        this.board[moveFromPeg].pop();
      };
    
      // log move and reset props after evaluating conditionals
      console.log(`That move was ${this.moveOutcome}. ${this.errorMsg} Board is now:`);
      this.moveOutcome = '';
      this.errorMsg = '';

      // Use .map() to return board
      this.board.map(function (element) {
        console.log(`--- ${element.join(' ')}`)
      });
      
      this.checkWinner();
    },
};

// var to start new game and to reset game after win
var startGame = function () {
  this.board = [
    [5, 4, 3, 2, 1],
    [],
    [],
  ]
  console.log(`---------- NEW GAME ---------- \n \n ** OBJECTIVE: The goal of the game is to move a set of discs of different sizes (5, 4, 3, 2, 1) from one peg to another while only moving the topmost disc off each peg and not putting a larger disc on top of a smaller one. \n \n ** INSTRUCTIONS: in order to make a move, please type 'gameState.checkMove(X,Y)' below, where X is the peg to move a disc from and Y is the peg to move the disc to. Good luck! \n \n Starting game board is:`)
  this.board.map(function (element) {
    console.log(`--- ${element.join(' ')}`)
    console.log(`\n`)
  });
};

// // un-comment to test game play
// startGame();
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 3), "Next Move?");
// console.log(gameState.checkMove(2, 3), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?"); // error works correctly
// console.log(gameState.checkMove(3, 1), "Next Move?");
// console.log(gameState.checkMove(3, 2), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 3), "Next Move?");
// console.log(gameState.checkMove(2, 3), "Next Move?");
// console.log(gameState.checkMove(2, 1), "Next Move?");
// console.log(gameState.checkMove(3, 1), "Next Move?");
// console.log(gameState.checkMove(2, 3), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 3), "Next Move?");
// console.log(gameState.checkMove(2, 3), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(3, 1), "Next Move?");
// console.log(gameState.checkMove(3, 2), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(3, 1), "Next Move?");
// console.log(gameState.checkMove(2, 3), "Next Move?");
// console.log(gameState.checkMove(2, 1), "Next Move?");
// console.log(gameState.checkMove(3, 1), "Next Move?");
// console.log(gameState.checkMove(3, 2), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 3), "Next Move?");
// console.log(gameState.checkMove(2, 3), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(3, 1), "Next Move?");
// console.log(gameState.checkMove(3, 2), "Next Move?");
// // console.log(gameState.checkMove(1, 2));