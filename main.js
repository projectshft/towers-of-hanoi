var Towers = function() {
  var board = {};
  var moveCount = 0;
  var winningSum = 0;
  var newGame = function(pegs, blocks) {
    if (pegs > 2 && blocks > 1) {
      for (var i = 1; i <= pegs; i++) {
        board[i] = [];
      }
      for (var j = blocks; j >= 1; j--) {
        board[1].push(j);
        winningSum += j;
      }
    }
    printBoard();
  }
  var printBoard = function() {
    console.log("***** Current Board *****")
    for (var prop in board) {
      console.log("----" + board[prop]);
    }
  }
  var move = function(start, end) {
    board[end].push(board[start].pop());
    moveCount++;
    printBoard();
    }
    var validPegs = function(startPeg) {
      var startBlock = board[startPeg][board[startPeg].length - 1];
      //console.log(startPeg)
      var options = [];
      for (var pegs in board) {
        options.push(pegs)
      }
      var validOptions = options.filter(function(x) {

        return (board[x][board[x].length - 1] > startBlock || board[x].length === 0);

      });

      if (board[startPeg].length >= 1) {
        return validOptions;
      } else {
        console.log("Empty Peg!");
        return false
      }
    }

  var moveBlock = function(origin, final){
    var opts = (validPegs(origin))
    var valid = opts.find(function(x){
      return x == final;
    });
    if (valid){
      move(origin,final);
      checkWinner();
      printBoard();
      return true;

    }
    else {
      console.log("Invalid Move!");
      printBoard();
      return false
    }

    //move(origin,final);
    //printBoard();
  }

    var checkWinner = function() {
    for (var i in board) {
      var winCheck = 0;

      if (board[i].length > 0) {
        console.log("wincheck " + winCheck)
        winCheck = board[i].reduce(function(bag, values) {
          return bag = bag += values;
        }, 0);

        if (winCheck == winningSum) {
          console.log("You won in " + moveCount + " moves!");
          return true
          // board = [];
          // moveCount = 0;
        }
        else {
          return false
        }
      }
    }
  };

  var solve = function() {
    //while(4)
  }

  return {
    newGame: newGame,
    printBoard: printBoard,
    validPegs: validPegs,
    moveBlock:moveBlock,
    solve:solve
  };
}
var game = Towers();
game.newGame(9, 6);











//var Board = function() {
//
//   var board = [];
//   var winningSum = 0;
//   var moveCount = 0;
//
//   var makeNew = function(pegNum, blockNum) {
//     if (pegNum > 2 && blockNum > 1) {
//       for (var i = 0; i < pegNum; i++) {
//         board.push([]);
//       }
//       for (var j = blockNum; j > 0; j--) {
//         board[0].push(j);
//         winningSum = winningSum + j;
//       }
//     }
//     printBoard();
//   }
//
//
//   var printBoard = function() {
//     // var currentBoard = [];
//     // currentBoard = board.map(function(element) {
//     //   return element;
//     // });
//     console.log("Move #" + moveCount + "   The current Board is:")
//     board.forEach(function(element) {
//       console.log("---" + element);
//     });
//   }
//   var moveBlock = function(startPeg, endPeg) {
//     if (pegCheck(startPeg, endPeg)) {
//       board[endPeg].push(board[startPeg].pop());
//       printBoard();
//       moveCount++;
//       checkWinner();
//     } else {
//       console.log("invalid move!")
//     }
//   }
//
//   var pegOptions = function (startingPeg){
//     var startBlock = board[startingPeg][board[startingPeg].length-1];
//     var openPegs = board.filter(function(x){
//       return board[x]
//     })
//     console.log(openPegs)
//   }
//
//   var pegCheck = function(start, end) {
//     var first = board[start][board[start].length - 1];
//     console.log(first + " start block");
//     if (board[end][board[end].length - 1]) {
//       var end = board[end][board[end].length - 1];
//       console.log(end + "end block")
//     } else {
//       end = undefined;
//       return true;
//     }
//     if (start < end) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   var checkWinner = function() {
//     for (var i = 1; i < board.length; i++) {
//       var winCheck = 0;
//       winCheck = board[i].reduce(function(bag, values) {
//         return bag = bag += values;
//       }, 0);
//       if (winCheck == winningSum) {
//         console.log("You won in " + moveCount + " moves!");
//         board = [];
//         moveCount = 0;
//         printBoard();
//       }
//     }
//   };
//   return {
//     //printBoard: printBoard,
//     move: moveBlock,
//     //moveCheck: moveCheck,
//     makeNew: makeNew,
//     pegOptions:pegOptions
//
//   }
// }
//console.log("Welcome to towers of Hanoi! to create a new game, create a new variable and ecercute the Board() function, then use the makeNew(peg#,block#) method to create a new board. Then use move(startPeg,endPeg) - (0 indexed :) ) to make a move!");

// var newBoard = Board();
// newBoard.makeNew(5, 3);
// newBoard.pegOptions(0);
// newBoard.move(0, 2);
// newBoard.move(1, 2);
// newBoard.move(0, 1);
// newBoard.move(2, 0);
// newBoard.move(2, 1);
// newBoard.move(0, 1);
// // newBoard.move(0, 2);
