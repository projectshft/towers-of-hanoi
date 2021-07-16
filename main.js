var board = []

var newGame = function () {
  board[0] = ["5", "4", "3", "2", "1"];
  board[1] = [];
  board[2] = [];
  console.log("New game started!")
  printBoard(board);
}

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
  var sourcePeg = board[peg1];
  var destPeg = board[peg2];

  if (peg1 < board.length && peg2 < board.length) {
    
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

  if (checkWinner(destPeg)) {
    console.log("Winner!");
    console.log("**********");
    newGame();
  }
}

var checkWinner = function (peg) {
  if (peg != 0 && peg.length == 5) {

    var isWinner = peg.reduce(function (hasWon, curr, index) {
      if (index > 0) {
        var previous = peg[index - 1];

        if (curr != previous - 1) {
          hasWon = false;
        }
      }
      return hasWon;
    }, true);

    return isWinner;
  }
  return false;
}

newGame();