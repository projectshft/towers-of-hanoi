// Creating board
var board = [[5, 4, 3, 2, 1], [], []];

var displayBoard = function (){
  board.forEach(function (peg, index){
  console.log(`--- ${peg.join("") || "-"}`);
});
    console.log("---");
};

// Check to see if is a valid move. 
var isValidMove = function (source, dest) {
  var sourcePeg = board [source - 1];
  var destPeg = board[dest - 1];
  if (sourcePeg === 0) {
    console.log("Invalid Move: You cannot move a larger disc on top of a smaller one.");
    return false;
  } else if (destPeg.length !== 0 && sourcePeg[sourcePeg.length - 1] > destPeg[destPeg.length - 1]){
    console.log("")
    return false;
  }
  return true;
};

// Moves disc to new tower.
var moveDisc = function (source, dest) {
  if (isValidMove(source, dest)) {
    var sourcePeg = board[source - 1];
    var disc = sourcePeg.pop();
    board[dest - 1].push(disc);
    console.log (`Moved disc ${disc} from peg ${String.fromCharCode(64 + source)} to peg ${String.fromCharCode(64 + dest)}`);
    displayBoard();
    checkWinner();
  };
};

// Checks for winner condition, and restarts game if won.
var checkWinner = function () {
  if (board[1].length === 5 || board[2].length === 5) {
    console.log("Congragulations! You have won the game!");
    restartGame();
  };
};

board.map(function (playField) {
  console.log("--- " + playField.join(" ") || "-");
});

console.log("---");