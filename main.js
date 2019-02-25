var board = [];
var numMoves = 0

var printBoard = function () {
  var print = board.map(function (value) {           //print current output of board
    console.log ("--- " + value.join(" "))
      });
  }


var startGame = function () {
  board = []                          //clear board
  board.push([3, 2, 1], [], [])       //reset board to original
  var numMoves = 0                    //reset numMoves = 0
  printBoard()
};

var countMoves = function() {
  numMoves += 1;
};

var legalMoves = function (oldPeg, newPeg) {
  return true;
  // var discNum = board[oldPeg-1][board[oldPeg-1].length-1]

  // var legal = board.filter (function(num, index, array) {
  //   if (array[index].length == 0) {
  //     return true;
  //   }
  // });
  // last = [];
  // var findLasts = board.forEach(function (num) {
  //   var index = num[num.length - 1]
  //   return (last.push(index))
  // });

  // var check = function (discNum, newPeg) {
  //   if (last[newPeg-1] < discNum) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
  // return check;
};

var checkWinner = function () {
  var totalValue = board.reduce (function (total, array) {    //check total amount of discs in game
    array.forEach (function (amount) {
      total += 1;
    });
      return total;
    }, 0);

    for (i = 1; i < board.length; i++) {                //check if total discs is on peg2 or peg3.
        if (totalValue == board[i].length) {
          console.log("Congratulations, you win!")
          console.log("Total moves: "+ numMoves)
            startGame();
        }
        };
    };

var moveDisc = function (oldPeg, newPeg) {
    var discNum = board[oldPeg-1][board[oldPeg-1].length-1]     //1. get discNum from oldPeg
    var newPeg = newPeg - 1;
    var legal = legalMoves(discNum, newPeg);                    //2. check if newPeg is in legalMoves array
    if (legal === true) {                                            //if yes -- accept move, print updated Board
      board[oldPeg-1].pop(discNum)
      board[newPeg].push(discNum)
      console.log("That move was successful, board is now:")
      printBoard();                                                   //3. Check winner and print updated Board.
      checkWinner();
      countMoves();
      }
      else {                                                          //if no-- console.log (illegal move)
        console.log("You cannot move a larger disc on top of a smaller one, board is still:")
        printBoard();
      };
    };

start = startGame();
