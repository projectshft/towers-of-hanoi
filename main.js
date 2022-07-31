/**Towers of Hanoi outline
 * 
// establish initial board state, a 2d array of pegs with discs
// print board
// function that loops through the pegs (using array helper methods only)
// function that loops through each disc of each peg (using array helper methods only)
// take each disc and add to a string
// print the string to console
// end function
// function that takes in an argument for the source peg and target peg...
// and moves discs FROM a peg TO a peg
//FROMPEG and TOPEG must not equal each other!!
// test if the source peg has a disc
// test if target peg can accept that peg (validate move)
// if valid, move the disc from source to target
// (manipulate the board state directly)
// print message accordingly
// test valid move
// test multiple invalid moves
// function to determine if it's a winner, printing message accordingly
// reset the game to initial state
*/

var board = [[5, 4, 3, 2, 1], [], []];
var checkWinner = function () {
  board.map(function (peg) {
    if (board[0].length == 0 && board[1].length == 0) {
      console.log(
        "You have conquered the Towers of Hanoi, and hereby are declared a winner. According to Brahmin priests, the world will end now. But if remain in existence, try the game again and see if you can win using just 31 moves."
      );
      // console.log(); print initial state of board
    } else {
      console.log(printUpdate);
    }
  });
};
// checkWinner();

var printUpdate = function () {
  board.map(function (peg) {
    let line = "--- ";
    peg.forEach(function (disc) {
      line += disc + " ";
    });

    console.log(line);
  });
};
printUpdate();

/**
 * // write a function that takes in two arguments- one for the source  peg and one for the target peg; 'fromPeg' and 'toPeg' must be numbers in the interval I=[1,3]; test if the source peg has a disc; test if target peg can accept that peg (validate move); print message and board according to how the conditions are met/not met*/

var moveDisc = function (fromPeg, toPeg) {
  //arguments must be in the interval I= [1,3]
  if (fromPeg <= 0 || toPeg <= 0 || fromPeg > 3 || toPeg > 3) {
    console.log("Please choose peg numbers between 1 and 3, inclusive");
    console.log(printUpdate());
  } else if (
    (fromPeg >= 1 &&
      fromPeg <= 3 &&
      toPeg >= 1 &&
      toPeg <= 3 &&
      //condition: if the size of the top disc on the FROMPEG is smaller than the size of the top disc on the TOPEG
      board[fromPeg[fromPeg.length - 1]] < board[toPeg[toPeg.length - 1]]) ||
    board[toPeg[toPeg.length - 1]] == null
  ) {
    let addedDisc = board[fromPeg - 1].pop();
    board[toPeg - 1].push(addedDisc);
    console.log("That move was successful, board is now:");
    console.log(printUpdate());
  } else {
    console.log(
      "You cannot move a larger disc on top of a smaller one, board is still:"
    );
    console.log(printUpdate());
  }
};

/**
 *   write a function that tests for 'winner'... in the case that there's a winner, print the appropriate message and end the game immediately w/console log.Reset the board to initial conditions*/
