// debugger;

let board = {
  boardSize: {},
  moveDisc: (from, to) => {
    if (board.currentBoard[from - 1][board.currentBoard[from - 1].length - 1] > board.currentBoard[to - 1][board.currentBoard[to - 1].length - 1]) {
      console.log('\nYou can\'t move a larger disc on top of a smaller one, board is still:');
      console.log(`\n${board.printBoard}\n`);
    } else {
      board.currentBoard[to - 1].push(board.currentBoard[from - 1].pop());
      board.printBoard = convertBoard(board.currentBoard);

      if (checkWinner()) {
        console.log(`\n${board.printBoard}`);
        console.log('\nYou win!\n')
      } else {
        console.log(`\n${board.printBoard}`);
        console.log('\nYour move.\n');
      }
    }
  }
}
const createBoard = (pegNum, discNum) => {
  const boardArr = [];
  for (let peg = 0; peg < pegNum; peg++) {
    boardArr.push([]);
  }
  for (let disc = discNum; disc > 0; disc--) {
    boardArr[0].push(disc);
  }
  return boardArr;
}

const startGame = (pegNum, discNum) => {
  board.boardSize.pegs = pegNum;
  board.boardSize.discs = discNum;
  board.currentBoard = createBoard(pegNum, discNum);
  board.printBoard = convertBoard(board.currentBoard);
  board.winRefArr = board.currentBoard.map(num => num);

  console.log(`\n${board.printBoard}`);
  console.log('\nA new game has begun, your move.\n');
}

const convertBoard = boardParam => {
  const mapBoard = boardParam.map(arr => "--- " + arr.toString().replaceAll(',', ' '));
  const str = mapBoard.toString().replaceAll(',', '\n');
  return str;
}

const checkWinner = () => {
  for (let peg = 1; peg <= board.pegNum; peg++) {
    if (board.currentBoard[peg] === board.winRefArr) {
      return true;
    }
  }
}