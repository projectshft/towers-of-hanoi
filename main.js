const state = {
  board: [],
  pegNum: 3,
  discNum: 5,
};

// Once user has entered in number of pegs and discs, build out the game board
const createGame = function (pegs, discs) {
  const discArray = [];
  if (Number.isNaN(pegs) || Number.isNaN(discs)) {
    pegs = 3;
    discs = 5;
    console.log('Game defaulted to 3 pegs and 5 discs because you did not enter a number.');
  }
  state.pegNum = pegs;
  state.discNum = discs;
  for (let i = discs; i > 0; i -= 1) {
    discArray.push(i);
  }
  state.board.push(discArray);
  for (let i = 1; i < pegs; i += 1) {
    state.board.push([]);
  }
}

// Displays the current state of the board in the console
const printBoard = function (boardArr) {
  return boardArr.forEach(function (peg) {
    if (peg.length === 0) {
      console.log(`---`);
    } else {
      console.log(`--- ${peg.join(' ')}`);
    }
  });
};

// Check to see if the user has won at the end of each move
const checkWinner = function (array) {
  array.forEach(function (peg) {
    if (array[0].length === 0 && peg.length === state.discNum) {
      console.log('Congratulations! You win!');
      return true;
    }
  });
  return false;
};

// Moves the disc from peg to another and checks if move is allowed
const moveDisc = function (startingPeg, endingPeg) {
  const discStart = state.board[startingPeg - 1];
  const discEnd = state.board[endingPeg - 1];
  if (discStart[discStart.length - 1] > discEnd[discEnd.length - 1]) {
    console.log('You cannot move a larger disc on top of a smaller one, board is still:');
  } else if (discStart.length === 0) {
    console.log(`You can't do that. Peg ${startingPeg} is empty. Board is still:`);
  } else {
    discEnd.push(discStart.pop());
  }
  printBoard(state.board);
  checkWinner(state.board);
};

// Get the number of pegs and discs from the user so the game can be created
let numOfPegs = parseInt(prompt("Please enter the number of pegs."));
let numOfDiscs = parseInt(prompt("Plesae enter the number of discs."));

createGame(numOfPegs, numOfDiscs);
printBoard(state.board);
