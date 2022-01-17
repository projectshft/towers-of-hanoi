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

      if (checkWinner(board.boardSize.pegNum, )) {
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

  board.winRefArr = [];
  for (let peg = pegNum; peg > 0; peg--) {
    board.winRefArr.push(peg);
  }

  console.log(`\n${board.printBoard}`);
  console.log('\nA new game has begun, your move.\n');
}

const convertBoard = boardToConvert => {
  const mapBoard = boardToConvert.map(arr => "--- " + arr.toString().replaceAll(',', ' '));
  const str = mapBoard.toString().replaceAll(',', '\n');
  return str;
}

const checkWinner = (boardPegSize, boardCheck, winCheck) => {
  for (let peg = 1; peg < boardPegSize; peg++) {
    if (boardCheck[peg] === winCheck) {
      console.log('You won!')
      return true;
    } else {
      console.log('You haven\'t won yet.');
      return false;
    }
  }
}

const launch = () => {
  console.log('To play Towers of Hanoi, please enter \"startGame(3, 5)\" in the console. Feel free to change the parameters. The 1st number is the numbers of pegs the board will start with, and the 2nd number is the number of discs. Good luck!');
}

launch();