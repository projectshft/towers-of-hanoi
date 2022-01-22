var board = [["5", "4", "3", "2", "1"],
[],
[]];


var printBoard = board.map(function (element) {
  return "--- " + element;
});

console.log(printBoard[0],`\n${printBoard[1]}`,`\n${printBoard[2]}`);