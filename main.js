var initBoard = [
  ["5", "4", "3", "2", "1"],
  [],
  []
]

var boardMapped = [];

/* The createBoard function changes all the strings from the initial
board setup into numbers. */

var createBoard = function(array) {
  initBoard.forEach(function(arr) {
    var newArr = arr.map(function(num) {
      return Number(num);
    })
    array.push(newArr);
  });
}

createBoard(boardMapped);




// the printBoard function logs the current state of the board to the console
var printBoard = function() {
    console.log("--- " + boardMapped[0].join(" "));
    console.log("--- " + boardMapped[1].join(" "));
    console.log("--- " + boardMapped[2].join(" "));
};

/*
 The checkWinner function checks after a successful move to see whether the
player has won the game.  It checks for 3 conditions:
1. It finds an array whose values together equal a sum of 15.
2. It ensures the values of the winning array are in the correct order.
3. It ensures the array is not found in the same position it began the game.
*/

var checkWinner = function() {
  if (boardMapped.find(function(arr) {
      return arr.reduce(function(sum, number) {
        return sum + number
      }, 0) === 15 && arr.every(function(num, i, array) {
        return num > array[i + 1] || num === 1
      })
    }) && boardMapped[0].length === 0) {
    console.log("Congratulations! You won the game in " + board.totalMoves +
    " moves!");
    createBoard(boardMapped);
  }
}


console.log("Here is the starting board:");
printBoard();


var board = {

  totalPegs: 3,

  totalMoves: 0,

  moveDisc: function(start, finish) {

    if (typeof start === 'number' && typeof finish === 'number') {
      if (start > 0 && start < board.totalPegs + 1 && finish > 0 && finish < board.totalPegs + 1) {
        if (boardMapped[start - 1][boardMapped[start - 1].length - 1] < boardMapped[finish - 1][boardMapped[finish - 1].length - 1] || boardMapped[finish - 1].length === 0) {
          boardMapped[finish - 1].push(boardMapped[start - 1].pop());
          board.totalMoves += 1;
          console.log("Total Moves: " + board.totalMoves);
          console.log("That move was successful, board is now:");
          printBoard();
          checkWinner();

        } else {
          console.log("You cannot move a larger disc on top of a smaller one, board is still:");
          printBoard();
        }
      } else {
        throw "Both numbers must be between 1-" + board.totalPegs
      }
    } else {
      throw "Please enter 2 actual numbers.";
    }

  },

  hint: function(num) {
    if (boardMapped.every(function(line) {
        return boardMapped[num - 1][boardMapped[num - 1].length - 1] >= line[line.length - 1]
      })) {
      console.log("You cannot move from peg " + num + ".");
      return;
    } else {
      var possibleArrays = boardMapped.filter(function(arr) {
        return boardMapped[num - 1][boardMapped[num - 1].length - 1] < arr[arr.length - 1] || arr.length === 0;
      });
      var possiblePegs = [];
      boardMapped.forEach(function(num, i) {
        if (possibleArrays.includes(num)) {
          possiblePegs.push(i + 1)
        }
      })
      console.log("Here is a list of the possible places you can move from peg " + num + ": " + possiblePegs.join(" or "))
    }
  },
}
