var Board = function () {
  var board = [];
  var numMoves = 0

  var startGame = function () {
    board = []                          //clear board
    board.push([3, 2, 1], [], [])       //reset board to original
    var numMoves = 0                    //reset numMoves = 0
  }

  var countMoves = function() {
    numMoves += 1
  }

  var legalMoves = function (discNum) {
    //1. Create an array with all the last values
    var last = {};
    for (i = 0; i < board.length; i++) {
      last[i] = board[i][board[i].length - 1];
    }
    
    // last = [];
    // var findLasts = board.forEach(function (num) {
    //   var index = num[num.length - 1]
    //   return (last.push(index))
    // });
    //2. Filter last array to compare to discNum return array of true or false

  }

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
  var checkWinner = function () {
                //check total amount of discs in game
    var totalValue = board.reduce (function (total, array) {
      array.forEach (function (amount) {
        total += 1;
      });
      return total;
    }, 0);
                //check if total discs is on peg2 or peg3.
    for (i = 1; i < board.length; i++) {
      if (totalValue == board[i].length) {
          console.log("Congratulations, you win!")
          console.log("Total moves: "+ countMoves)
          startGame
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
    console.log("--- " + value.join(" "))
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

  return {
    moveDisc: moveDisc,
    printBoard: printBoard
  };

};
startGame
