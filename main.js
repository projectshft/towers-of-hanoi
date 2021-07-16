var board = [
  ["5", "4", "3", "2", "1"],
  [],
  []
]

var printBoard = function (arr) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i])
      console.log("--- " + arr[i].join(' '));
    else 
      console.log("--- ");
  }
}

Array.prototype.moveDisc = function (peg1, peg2) {
  peg1--;
  peg2--;
  if (peg1 < board.length && peg2 < board.length) {
    
    var sourcePeg = board[peg1];
    var destPeg = board[peg2];
    var topDisc1 = sourcePeg[sourcePeg.length - 1];
    var topDisc2 = destPeg[destPeg.length - 1];

    if (topDisc2 > topDisc1 || !topDisc2) {
      destPeg.push(topDisc1);
      sourcePeg.pop();
      console.log("Move successful, board is now: ");
    } else {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
    }

  } else {
    console.log("There aren't that many pegs!");
  }

  printBoard(board);
}

printBoard(board);
