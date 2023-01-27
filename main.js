var board   = [[5, 4, 3, 2, 1], [], []];

var startingBoard = function () {
  return board.map(function (pegs) {
  return console.log(`--- ${pegs.join(' ')}`);
})};

startingBoard();

var moveDisc = function (pegA, pegB) {
  var peg1 = pegA - 1;
  var peg2 = pegB - 1;

  board[peg2].push(board[peg1].pop());
  console.log('That move was successful, board is now: ');
  startingBoard();
}
