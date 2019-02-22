var Board = function () {
  var board = [[3, 2, 1][][]];

  var numMoves = 0
  var countMoves = function() {
    //counts total number times move function used, needs to reset with checkWinner
    numMoves += 1
  }

  var legalMoves = function (oldPeg, newPeg) {
    //needs to use filter to check:
    //1. if last value of oldPeg is bigger than last value of newPeg
    //2. return true or false to .moveDisc

  }

  var checkWinner = function(board) {
    //needs to run function after every move.
    //needs to use reduce to see if all values were moved to new peg
      //must contain (3) values in peg2 or peg3 must be in descending order
    //if winner = false (do nothing) if winner = true (console.log "you win")
    //show number of moves it took to win
    //restartGame()

  }

  return {
    board: board,
    countMoves: countMoves,
    legalMoves: legalMoves,
    checkWinner: checkWinner
  }
};

var Game = function () {
  //print current output of board
  var printBoard = board.map(function (value) {
    console.log("--- " + value.join())
  });

  var numMoves = 0
  var moveDisc = function (peg1, peg2) {
    //1. check if newPeg is empty
      //-> if empty add newValue & add to counter
    //2. if not empty run legalMoves function
        //if Legal moves = true -> add newValue
          //
        //if Legal moves = false -> alert bag move.
        //3. Check winner and print updated Board.


  };

  var restartGame = function () {
    //reset counter to zero
    //reset array to original
  }

  return {
    moveDisc: moveDisc,
    printBoard: printBoard
    };

};
