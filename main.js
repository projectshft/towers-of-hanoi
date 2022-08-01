// Towers of Hanoi outline
// establish initial board state, a 2d array of pegs with discs
// print board
// function that loops through the pegs (using array helper methods only)
// function that loops through each disc of each peg (using array helper methods only)
// take each disc and add to a string
// print the string to console
// end function
// function that takes in an argument for the source peg and target peg...
// and moves discs FROM a peg TO a peg
// FROMPEG and TOPEG must not equal each other!!
// test if the source peg has a disc
// test if target peg can accept that peg (validate move)
// if valid, move the disc from source to target
// (manipulate the board state directly)
// print message accordingly
// test valid move
// test multiple invalid moves
// function to determine if it's a winner, printing message accordingly
// reset the game to initial state
//restructure 'return' and 'printUpdate'
//create a reset function that is called by 'board'
//test dozens of moveDisc pairs

var reset = function () {
  return [[5, 4, 3, 2, 1], [], []];
};

var board = reset();

var checkWinner = function () {
  if (board[0].length == 0 && board[1].length == 0) {
    console.log(
      "You have conquered the Towers of Hanoi, and hereby are declared a winner. According to Brahmin priests, the world will end now. But if remain in existence, try the game again and see if you can win by using no more than 31 moves."
    );
    board = reset();
    printUpdate();
    return true;
  } else {
    return false;
  }
};

var printUpdate = function () {
  board.map(function (peg) {
    let line = "--- ";
    peg.forEach(function (disc) {
      line += disc + " ";
    });
    return console.log(line);
  });
};
printUpdate();

var getTopDisc = function (peg) {
  var pegLength = board[peg - 1].length;
  return board[peg - 1][pegLength - 1];
};

var moveDisc = function (fromPeg, toPeg) {
  //arguments must be in the interval I= [1,3]
  if (fromPeg <= 0 || toPeg <= 0 || fromPeg > 3 || toPeg > 3) {
    console.log("Please choose peg numbers between 1 and 3, inclusive");
    return printUpdate();
  }

  if (
    getTopDisc(toPeg) === undefined ||
    getTopDisc(fromPeg) < getTopDisc(toPeg)
  ) {
    let disc = board[fromPeg - 1].pop();
    board[toPeg - 1].push(disc);
    console.log("That move was successful, board is now: ");
  } else {
    console.log(
      "You cannot move a larger disc on top of a smaller one, board is still: "
    );
  }

  printUpdate();
  checkWinner();
  return;
};
