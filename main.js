const state = {
  board: [[5, 4, 3, 2, 1], [], []]
};

//const board = [[5, 4, 3, 2, 1], [], []];

const printBoard = function (boardArr) {
  return boardArr.forEach(function (peg) {
    if (peg.length === 0) {
      console.log(`---`);
    } else {
      console.log(`--- ${peg.join(' ')}`);
    }
  });
};

const moveDisc = function (startingPeg, endingPeg) {
  const discStart = state.board[startingPeg - 1];
  const discEnd = state.board[endingPeg - 1];
  if (discStart[discStart.length - 1] > discEnd[discEnd.length - 1]) {
    console.log('You cannot move a larger disc on top of a smaller one, board is still:');
  } else {
    discEnd.push(discStart.pop());
  }
  return printBoard(state.board);
};

printBoard(state.board);
