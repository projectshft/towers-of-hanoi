var startingBoard = [
  [5, 4, 3, 2, 1],
  [],
  []
]



var boardMapped = [];

var createBoard = function(array) {
  startingBoard.forEach(function(arr) {
    var newArr = arr.map(function(num) {
      return Number(num);
    })
    array.push(newArr);
  });
}

createBoard(boardMapped);


var printBoard = function() {
    console.log("--- " + boardMapped[0].join(" "));
    console.log("--- " + boardMapped[1].join(" "));
    console.log("--- " + boardMapped[2].join(" "));
};



var checkWinner = function() {
  if (boardMapped.find(function(arr) {
      return arr.reduce(function(sum, number) {
        return sum + number
      }, 0) === 5 && arr.every(function(num, i, array) {
        return num > array[i + 1] || num === 1
      })
    }) && boardMapped[0].length === 0) {
    console.log("You won the game! " + board.totalMoves +
    " moves!");
    createBoard(boardMapped);
  }
}
//
function moveDisc(fromPeg, toPeg) {
  start = prompt(("Which disk do you want to move?  Choose between 1, 2, or 3"));
    if (typeof fromPeg === 'number' && typeof toPeg === 'number') {
        if (fromPeg > 0 && fromPeg < boardMapped.totalPegs + 1 && toPeg > 0 && toPeg < boardMapped.totalPegs + 1) {
          if ((boardMapped[fromPeg- 1][boardMapped[fromPeg - 1].length - 1] < boardMapped[toPeg - 1][boardMapped[toPeg - 1].length - 1]))
            boardMapped.totalMoves += 1;
            console.log("Total Moves: " + board.totalMoves);
            console.log("Nice Move!:");
            checkWinner();

        } else {
          console.log("Invalid Move!:");
          printBoard();
        }
      }
    }
  
  


alert("Here is the starting board:");
printBoard();

moveDisc();

// var board = {

//   totalPegs: 3,

//   totalMoves: 0,

//   moveDisc: function(start, finish) {
//     start = prompt(("Which disk do you want to move?  Choose between 1, 2, or 3"));
//     if (typeof start === 'number' && typeof finish === 'number') {
//         if (start > 0 && start < board.totalPegs + 1 && finish > 0 && finish < board.totalPegs + 1) {
//           if ((boardMapped[start - 1][boardMapped[start - 1].length - 1] < boardMapped[finish - 1][boardMapped[finish - 1].length - 1]))
//             board.totalMoves += 1;
//             console.log("Total Moves: " + board.totalMoves);
//             console.log("Nice Move!:");
//             checkWinner();

//         } else {
//           console.log("Invalid Move!:");
//           printBoard();
//         }
//       }
//     }
//   }


 
