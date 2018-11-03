var playTowersOfHanoi = function () {
  console.log("Welcome to Towers of Hanoi!");
  console.log("To win, stack all discs (represented by numbers 1 to 5) on to another peg.");
  console.log("You cannot place a bigger disc (size represented by it's number) onto a smaller disc.")

}

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
    if (pegArrayOrig.length === 0){
        var discOrigSize = 6;
      } else {
        var discOrigSize = pegArrayOrig[pegArrayOrig.length - 1];
      }
    if (pegArrayDest.length === 0){
      var discDestSize = 6;
      } else {
        var discDestSize = pegArrayDest[pegArrayDest.length - 1];
      }

    if (discOrigSize < discDestSize) {
      console.log(validStr);
      theBoard[pegDest-1].push(theBoard[pegOrig-1].pop());
      numberOfMoves += 1;
      this.printBoard();
    } else {
      console.log(invalidStr);
      this.printBoard();
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

  return {
    printBoard: printBoard,
    moveDisc: moveDisc,
    help: help
  }
}
var game1 = board();
game1.printBoard();
game1.moveDisc(1,2);
game1.moveDisc(1,3);
game1.help(2);
game1.help(3);
game1.help(1);
