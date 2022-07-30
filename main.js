//First of all it will need a board. We'll utilize a 2D array to do this.We'll use your Chrome Browser JavaScript Console to play the game. We'll want to be able to print the board horizontally. You MUST utilize a map function at least once to accomplish this part of the assignment. The starting board will log the 2D array to the console

var board = [[5, 4, 3, 2, 1], [], []];

var print = function () {
  board.map(function (peg) {
    let line = "--- ";
    peg.forEach(function (disc) {
      line += disc + " ";
    });

    console.log(line);
  });
};

print();

// // why does this block result in print dialogue??
// function Board(peg1, peg2, peg3) {
//   this.peg1 = [];
//   this.peg2 = [];
//   this.peg3 = [];
//   this.print = function () {
//     this.map(function (peg) {
//       let line = "--- ";
//       peg.forEach(function (disc) {
//         line += disc + " ";
//       });

//       console.log(line);
//     });
//   };
// }

// Our game will progress with the player submitting moves to the game and the game accepting or rejecting the move and updating the board if the move is allowed. Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc.

var isAcceptable = function (fromPeg, toPeg) {
  if (
    fromPeg >= 1 &&
    fromPeg <= 3 &&
    toPeg >= 1 &&
    fromPeg <= 3 &&
    fromPeg[fromPeg.length - 1] < toPeg[toPeg.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
};

var message = function () {
  if ((isAcceptable = true)) {
    console.log("That move was successful, board is now:");
    print();
  } else if ((isAcceptable = false)) {
    console.log(
      "You cannot move a larger disc on top of a smaller one, board is still: "
    );
    print();
  }
};

//There should be a way to move discs from one peg to another

var moveDiscs = function (fromPeg, toPeg) {
  var fromPeg = [];
  var toPeg = [];
  return toPeg.push(fromPeg[fromPeg.length - 1]);

  console.log(message);
};
moveDiscs();
