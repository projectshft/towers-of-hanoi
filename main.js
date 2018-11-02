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

      console.log(discOrigSize);
      console.log(discDestSize);
    if (discOrigSize < discDestSize) {
      console.log(validStr);
      theBoard[pegDest-1].push(theBoard[pegOrig-1].pop());
      this.printBoard();
    } else {
      console.log(invalidStr);
      this.printBoard();
    }
  }

  return {
    printBoard: printBoard,
    moveDisc: moveDisc
  }
}
var game1 = board();
game1.printBoard();
game1.moveDisc(1,2);
