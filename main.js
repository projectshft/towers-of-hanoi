var boardArray = [["5", "4", "3", "2", "1"],
[],
[]];


var board = {
  moveDisc: function (fromPeg, toPeg) {
    var startPeg = boardArray[fromPeg - 1];
    var endPeg = boardArray[toPeg - 1];
    var lowerDisc;

    //Creating two new variables to helpe me log the updated board to the console.
    var newBoard;
    var printBoard;
    
    //Finding the disc the user wants to move.
    var travelDisc = startPeg.find(function (disc) {
      return startPeg.indexOf(disc) + 1 == startPeg.length;
    });

    //Determining if a disc already exists on destination peg and what size disc it is.
    if (endPeg.length == 0) {
      lowerDisc = null;
    } else {
      lowerDisc = endPeg.find(function (disc) {
        return endPeg.indexOf(disc) + 1 == endPeg.length;
      })
    };

    if (lowerDisc == null || travelDisc < lowerDisc) {
      endPeg.push(travelDisc);
      startPeg.pop(travelDisc);
      console.log('That move was successful. Board is now:')
    } else {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
    }
    newBoard = boardArray.map(function (element) {
      return "--- " + element;
    });
    printBoard = `${newBoard[0].replaceAll(","," ")}\n${newBoard[1].replaceAll(","," ")}\n${newBoard[2].replaceAll(","," ")}`;
    console.log(printBoard);
    this.checkWinner;
  },
  checkWinner: function () {
    if (boardArray[0].length) {
      if (boardArray[1].length == 5 || boardArray[2].length == 5) {
        console.log('Congratulations! You win!!')
      }
    }

  },
};

board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(1, 3);
board.moveDisc(1, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 2);
board.moveDisc(3, 2);
board.moveDisc(3, 2);
board.moveDisc(1, 3);