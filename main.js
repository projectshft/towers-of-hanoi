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
    if (gameState.board[1].length === 5 || gameState.board[2].length === 5 ) {
      console.log("🎉 Congratulations, you win! 🎉")
      startGame();
    }
  },
  
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
    gameState.moveDisc(newFromPeg, newToPeg);
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
      
      gameState.checkWinner();
      // return testOutputMap
    },
};

// var for user to easily interact with
var move = gameState.checkMove;

// use to start new game and to reset game after win
var startGame = function () {
  gameState.board = [
    [5, 4, 3, 2, 1],
    [],
    [],
  ]
  console.log("---------- NEW GAME ----------")
  console.log("** OBJECTIVE: The goal of the game is to move a set of discs of different sizes (5, 4, 3, 2, 1) from one peg to another while only moving the topmost disc off each peg and not putting a larger disc on top of a smaller one. ")
  console.log("** INSTRUCTIONS: in order to make a move, please type 'move(X,Y)' below, where X is the peg to move from and Y is the peg to move to. Good luck!")
  console.log(`--- ${gameState.board[0].join(' ')}`) // oops I hard coded this because it was easier 🫣
  console.log(`--- ${gameState.board[1].join(' ')}`)
  console.log(`--- ${gameState.board[2].join(' ')}`)
};


// test game
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// console.log(gameState.checkMove(1, 3), "Next Move?");
// console.log(gameState.checkMove(2, 3), "Next Move?");
// console.log(gameState.checkMove(1, 2), "Next Move?");
// // console.log(gameState.checkMove(1, 2), "Next Move?"); // error works correctly
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
// console.log(gameState.checkMove(1, 2));