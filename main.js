
var board = function () {

  var theBoard = [[5,4,3,2,1],[],[]];
  var numberOfMoves = 0;

  var printBoard = function () {
    var buildPeg = function (array) {
      var pegStr = "";
      array.forEach(function (number){
        pegStr += number + " ";
      });
      return pegStr;
    }
    console.log("--- ", buildPeg(theBoard[0]), "\n--- ", buildPeg(theBoard[1]), "\n--- ", buildPeg(theBoard[2]));
  }

  var moveDisc = function (pegOrig, pegDest) {
    var validStr = "That move was successful. Board is now: \n";
    var invalidStr = "You cannot move a larger disc on top of a smaller one, board is still: \n";
    var pegArrayOrig = theBoard[pegOrig - 1];
    var pegArrayDest = theBoard[pegDest - 1];
    var discOrigSize = pegArrayOrig[pegArrayOrig.length - 1];
      
    if (pegArrayDest.length === 0){
      var discDestSize = 6;
      } else {
        var discDestSize = pegArrayDest[pegArrayDest.length - 1];
      }

    if (discOrigSize < discDestSize) {
      console.log(validStr);
      theBoard[pegDest-1].push(theBoard[pegOrig-1].pop());
      numberOfMoves += 1;
      printBoard();
    } else {
      console.log(invalidStr);
      printBoard();
    }
    if (checkWinner()) {
        console.log("Congrats! You won the game in " + numberOfMoves + " moves.");
        theBoard = [[5,4,3,2,1], [], []];
        numberOfMoves = 0;
        console.log("Play again. The board is reset to:");
        printBoard();
    }
  }

  var help = function (givenPeg) {

    var givenPegValue = theBoard[givenPeg-1];
    var outputPegStr = '';

    if (givenPegValue === undefined){
      console.log("There is no disc on the chosen peg.");
    } else {
      var validPegs = theBoard.filter(function(boardPeg){
        return (boardPeg === undefined || (givenPegValue < boardPeg[boardPeg.length - 1]))
      });
      for (var i = 0; i < theBoard.length; i++){
        for (var j = 0; j < validPegs.length; j++){
          if (theBoard[i] === validPegs[j]){
            outputPegStr += ((i+1) + " ");
          }
        }
      }
      if (outputPegStr == "") {
        console.log("There are no allowed moves from the chosen peg.");
      } else {
      console.log("Valid moves are to peg(s) " + outputPegStr);
      }
    }

  }

  var checkWinner = function () {
    var pegTwoCount = theBoard[1].reduce(function(sum, number){
      return sum + number;
    }, 0);
    var pegThreeCount = theBoard[2].reduce(function(sum, number){
      return sum + number;
    }, 0);
    return (pegTwoCount === 15 || pegThreeCount === 15);
  }

  return {
    printBoard: printBoard,
    moveDisc: moveDisc,
    help: help
  }
}

var game = board();
game.printBoard();
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(2,1);
game.moveDisc(3,1);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(2,3);
game.moveDisc(2,1);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
