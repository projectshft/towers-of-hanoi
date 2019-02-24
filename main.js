var Board = function () {
  var board = [[3, 2, 1],[],[]];
  var numMoves = 0

  var countMoves = function() {
    //counts total number times move function used, needs to reset with checkWinner
    numMoves += 1
  }
  var printBoard = board.map(function (value) {
    console.log("--- " + value.join())
  });


  var legalMoves = board.filter(function (discNum) {
    legal = [];
    if (discNum < //lastDiscNum in each array) {

    }
    //USE FILTER TO PULL OUT LAST NUMBER IN EACH SUBARRAY

  //   var tweets = posts.filter(function (post) {
  // if (post.platform === 'twitter') {
  //   return true;
  }
});
    //1.recieves disc# from moveDisc
    //2. use filter to determine what pegs the disc can move to.
      //this should include empty subarray
    //2. return array of pegs disc can move to

  }
    var checkWinner = {
      var totalValue = board.reduce (function (total, array) {
        array.forEach (function (amount) {
          total += 1;
        });
        return total;
      }, 0);

      for (i = 1; i < board.length; i++) {
        if (totalValue == board[i].length) {
          if otherPegs === boardTotal {
            console.log("Congratulations, you win!")
            console.log("Total moves: "+ countMoves)
            restartGame
          }
        }
      }
    };

  return {
    board: board,
    countMoves: countMoves,
    legalMoves: legalMoves,
    checkWinner: checkWinner
  }
};
};

var Game = function () {
  //print current output of board
  var printBoard = board.map(function (value) {
    console.log("--- " + value.join())
  });


  var moveDisc = function (oldPeg, newPeg) {
    var discNum = board[oldPeg-1][board[oldPeg-1].length-1]   //1. get discNum from oldPeg

    var legal = legalMoves(discNum, newPeg);    //2. check if newPeg is in legalMoves array
    if discNum in legal {               //if yes -- accept move, print updated Board
      board[oldPeg-1].pop(discNum)
      board[newPeg-1].push(discNum)
      console.log("That move was successful, board is now:")
      printBoard;                     //3. Check winner and print updated Board.
      checkWinner;
      countMoves;
    };
    else {                              //if no-- console.log (illegal move)
      console.log("You cannot move a larger disc on top of a smaller one, board is still:")
      printBoard();
    };
  };

  var restartGame = function () {
      var board = [[3, 2, 1],[],[]];      //reset board to original
      var numMoves = 0                   //reset numMoves = 0

  }

  return {
    moveDisc: moveDisc,
    printBoard: printBoard
  };

};
