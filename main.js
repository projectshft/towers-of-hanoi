var boardArray = [["5", "4", "3", "2", "1"],
[],
[]];

//Creating two new variables to helpe me log the updated board to the console
var newBoard;
var printBoard;

//Displays welcome message and starting board
console.log('Welcome to Towers of Hanoi! Your goal is to move all of the discs (represented by numbers) from the top peg to one of the bottom two pegs. You can only move a disc on top of a disc that is larger than it (ex. You can move 4 on top of 5, but not vice versa). Good luck!')
newBoard = boardArray.map(function (element) {
  return "--- " + element;
});
printBoard = `${newBoard[0].replaceAll(","," ")}\n${newBoard[1].replaceAll(","," ")}\n${newBoard[2].replaceAll(","," ")}`;
console.log(printBoard);

var board = {
  moveDisc: function (fromPeg, toPeg) {
    //Using passed in arguments to create variables that are easier to work with
    var startPeg = boardArray[fromPeg - 1];
    var endPeg = boardArray[toPeg - 1];
    var lowerDisc;

    //Function that checks if win conditions are met
    function checkWinner() {
      if (boardArray[0].length == 0) {
        if (boardArray[1].length == 5 || boardArray[2].length == 5) {
          return true;
        } else {
          return false;
        }
      }
    }
    
    //Finding the disc the user wants to move
    var travelDisc = startPeg.find(function (disc) {
      return startPeg.indexOf(disc) + 1 == startPeg.length;
    });

    //Determines if a disc already exists on destination peg and what size disc it is
    if (endPeg.length == 0) {
      lowerDisc = null;
    } else {
      lowerDisc = endPeg.find(function (disc) {
        return endPeg.indexOf(disc) + 1 == endPeg.length;
      })
    };

    //Updates board based on user input
    if (lowerDisc == null || travelDisc < lowerDisc) {
      endPeg.push(travelDisc);
      startPeg.pop(travelDisc);

      //Checks for win condition and, if false, alerts user of a successful move
      if (checkWinner()) {
        console.log('Congratulations! You win!!\nBoard reset to:');
        boardArray = [["5", "4", "3", "2", "1"], [], []];
      } else {
        console.log('That move was successful. Board is now:')
      };
    
    //Informs the user of an illegal move
    } else {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
    };

    //Displays updated board
    newBoard = boardArray.map(function (element) {
      return "--- " + element;
    });
    printBoard = `${newBoard[0].replaceAll(","," ")}\n${newBoard[1].replaceAll(","," ")}\n${newBoard[2].replaceAll(","," ")}`;
    console.log(printBoard);
  },
  
};

//User moves that make a win!
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);