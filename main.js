const state = {
  board: [],
  pegNum: 3,
  discNum: 5,
};

// Once user has entered in number of pegs and discs, build out the game board
const createGame = function () {
  const discArray = [];
  state.board = [];
  let numOfPegs = NaN;
  let numOfDiscs = NaN;
  while (Number.isNaN(numOfPegs) || Number.isNaN(numOfDiscs)) {
    numOfPegs = parseInt(prompt("Please enter the number of pegs."));
    numOfDiscs = parseInt(prompt("Plesae enter the number of discs."));
  }
  state.pegNum = numOfPegs;
  state.discNum = numOfDiscs;
  for (let i = numOfDiscs; i > 0; i -= 1) {
    discArray.push(i);
  }
  state.board.push(discArray);
  for (let i = 1; i < numOfPegs; i += 1) {
    state.board.push([]);
  }
}

// Displays the current state of the board in the console
const printBoard = function (boardArr) {
  return boardArr.map(function (peg) {
    console.log(`--- ${peg.join(' ')}`);
  });
};

// Check to see if the user has won at the end of each move
const checkWinner = function (array) {
  return array.find(function (peg) {
    if (array[0].length === 0 && peg.length === state.discNum) {
      console.log('Congratulations! You win!');
      return true;
    }
  });
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
  if (checkWinner(state.board)) {
    setTimeout(function () {
      createGame();
      return printBoard(state.board);
    }, 3000);
  };
};

createGame();
printBoard(state.board);
