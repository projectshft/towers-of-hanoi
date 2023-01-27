var board   = [[5, 4, 3, 2, 1], [], []];

var startingBoard = function () {
  return board.map(function (pegs) {
  return console.log(`--- ${pegs.join(' ')}`);
})};

startingBoard();

