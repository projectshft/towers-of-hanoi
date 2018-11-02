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
    theBoard[pegDest-1].push(theBoard[pegOrig-1].pop());
  }

  return {
    printBoard: printBoard,
    moveDisc: moveDisc
  }
}
var game1 = board();
game1.printBoard();
game1.moveDisc(1,2);
game1.printBoard();
