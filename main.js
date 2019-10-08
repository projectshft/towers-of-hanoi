var board = [
  [3, 2, 1],
  [],
  []
];

var printBoard = function () {
  const mappedBoard = board.map(function (peg) {
    return "---" + peg.join("")
  });
  for (var i = 0; i < mappedBoard.length; i++) {
    console.log(mappedBoard[i])
  }
}

//Moving disc (user will enter a value at 1 higher than index)
moveDisc = function (startPeg, endPeg) {
  var startIndex = startPeg - 1;
  var endIndex = endPeg - 1;
  var pegArray = board[startIndex];
  var discMoved = pegArray[pegArray.length - 1]

  board[startIndex].pop()
  board[endIndex].push(discMoved)
  printBoard()

}

moveDisc(1, 2)