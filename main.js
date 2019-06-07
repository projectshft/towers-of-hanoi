var board = [
  [3, 2, 1],
  [],
  []
];

var displayBoard = board.map(function (peg) {
  var boardString = "--- "
  peg.map(function (disc) {
    return (boardString += disc + " ")
  })
  return boardString;
})

console.log(displayBoard.toString().replace(/,/g, '\n'));
