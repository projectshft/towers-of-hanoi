const state = {
  board: [[5, 4, 3, 2, 1], [], []],
  pegNum: 3,
  discNum: 5,
};

const printBoard = function (boardArr) {
  return boardArr.forEach(function (peg) {
    if (peg.length === 0) {
      console.log(`---`);
    } else {
      console.log(`--- ${peg.join(' ')}`);
    }
  });
};

const checkWinner = function (array) {
  array.forEach(function (peg) {
    if (array[0].length === 0 && peg.length === state.discNum) {
      return console.log('Congratulations! You win!');
    }
  });
};

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

printBoard(state.board);
