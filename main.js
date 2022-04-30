const board = [[5, 4, 3, 2, 1], [], []];
const printBoard = function (boardArr) {
  return boardArr.forEach(function (peg) {
    if (peg.length === 0) {
      console.log(`---`);
    } else {
      console.log(`--- ${peg.join(' ')}`);
    }
  });
};

printBoard(board);