var playTowersOfHanoi = function () {
  console.log("Welcome to Towers of Hanoi!");
  console.log("To win, stack all discs (represented by numbers 1 to 5) on to another peg.");
  console.log("You cannot place a bigger disc (size represented by it's number) onto a smaller disc.")

}

var board = function () {
  var theBoard = [];
  var initBoard = function () {
    theBoard = [[5,4,3,2,1],[],[]];
  }
  var viewBoard = function () {
    console.log("--- ", theBoard[0].values());
  }
  return {
    initBoard: initBoard,
    viewBoard: viewBoard

  }
}
var game1 = board();
game1.initBoard();
game1.viewBoard();
