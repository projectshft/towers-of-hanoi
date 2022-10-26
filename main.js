// This function will render the board during gameplay and initialization of game.
let renderGame = function () {
  gameBoard.map((pegs) => {
    console.log(`---- ${pegs.toString().replace(/,/g, " ")}`);
  });
};

// This function will check the board for winning order and will alert user and reset board if true.
const checkWinner = function () {
  if (peg3.toString() === "5,4,3,2,1" || peg2.toString() === "5,4,3,2,1") {
    console.log("You Won!");
    resetBoard();
  }
};

// This function will initialize gameplay and reset the board after winning.
const resetBoard = function () {
  console.log(`Welcome to Towers of Hanoi!`);
  gameBoard = [[5, 4, 3, 2, 1], [], []];
  peg1 = gameBoard[0];
  peg2 = gameBoard[1];
  peg3 = gameBoard[2];
  renderGame();
};

resetBoard();

// This is the game body where movements are made.
const moveDiscFrom = function (pegStart, pegFinal) {
  let disc = pegStart[pegStart.length - 1];

  if (!disc) {
    console.log(`You did not grab a disc, board is still: `);
    renderGame();
  } else if (
    disc < pegFinal[pegFinal.length - 1] ||
    pegFinal[pegFinal.length - 1] === undefined
  ) {
    pegStart.pop(disc);
    pegFinal.push(disc);
    console.log(`That move was successful, board is now: `);
    renderGame();
  } else if (disc === pegFinal[pegFinal.length - 1]) {
    console.log(`Awkward... You didn't move anything, board is still: `);
    renderGame();
  } else {
    console.log(
      `You cannot move a larger disc on top of a smaller one, board is still: `
    );
    renderGame();
  }

  checkWinner();
};

// Below is the combination to solve the problem.

// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg1, peg2);
// moveDiscFrom(peg3, peg2);
// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg2, peg1);
// moveDiscFrom(peg2, peg3);
// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg1, peg2);
// moveDiscFrom(peg3, peg2);
// moveDiscFrom(peg3, peg1);
// moveDiscFrom(peg2, peg1);
// moveDiscFrom(peg3, peg2);
// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg1, peg2);
// moveDiscFrom(peg3, peg2);
// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg2, peg1);
// moveDiscFrom(peg2, peg3);
// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg2, peg1);
// moveDiscFrom(peg3, peg2);
// moveDiscFrom(peg3, peg1);
// moveDiscFrom(peg2, peg1);
// moveDiscFrom(peg2, peg3);
// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg1, peg2);
// moveDiscFrom(peg3, peg2);
// moveDiscFrom(peg1, peg3);
// moveDiscFrom(peg2, peg1);
// moveDiscFrom(peg2, peg3);
// moveDiscFrom(peg1, peg3);
