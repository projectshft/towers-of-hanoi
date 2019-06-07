var board = [
  [3, 2, 1],
  [],
  []
];

var objBoard = {board};

//Displays the current state of the board
var displayBoard = objBoard.board.map(function (peg) {
  var boardString = "--- "
  peg.map(function (disc) {
    return (boardString += disc + " ")
  })
  return boardString;
})

//Moves discs on the board
var moveDisc = function(source, target) {
  var moveValue = objBoard.board[source-1].pop();
  objBoard.board[target-1].push(moveValue);
  displayBoard = objBoard.board.map(function (peg) {
    var boardString = "--- "
    peg.map(function (disc) {
      return (boardString += disc + " ")
    })
    return boardString;
  })
  console.log(displayBoard.toString().replace(/,/g, '\n'));
  }

console.log(displayBoard.toString().replace(/,/g, '\n'));
