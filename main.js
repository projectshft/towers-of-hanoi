const board = {
  boardSize: {},
  moveDisc: (from, to) => {
    // checks to see if player is trying to move a larger disc onto a smaller disc
    if (board.currentBoard[from - 1][board.currentBoard[from - 1].length - 1] > board.currentBoard[to - 1][board.currentBoard[to - 1].length - 1]) {
      console.log('\nYou can\'t move a larger disc on top of a smaller one, board is still:');
      console.log(`\n${board.printBoard}\n`);
    } else { // if it's a proper move, this makes the move
      board.currentBoard[to - 1].push(board.currentBoard[from - 1].pop());
      board.printBoard = convertBoard(board.currentBoard);

      // after making the move, checks to see if player has won yet. if not, displays the board after the recent move
      if (checkWinner(board.currentBoard, board.winRefArr)) {
        console.log(`\n${board.printBoard}`);
        console.log(`\nYou win! Type startGame(${board.boardSize.pegs}, ${board.boardSize.discs}) to play again!\n`)
      } else {
        console.log(`\n${board.printBoard}`);
        console.log('\nYour move.\n');
      }
    }
  }
}


// logs the welcome message when the program is run
const launch = () => {
  console.log('To play Towers of Hanoi, please enter \"startGame(3, 5)\" in the console. Feel free to change the parameters. The 1st number is the number of pegs the board will start with, and the 2nd is the number of discs. Good luck!');
}

// Sets the game up with the requested board size
const startGame = (pegNum, discNum) => {
  board.boardSize.pegs = pegNum;
  board.boardSize.discs = discNum;
  board.currentBoard = createBoard(pegNum, discNum);
  board.printBoard = convertBoard(board.currentBoard, pegNum);
  
  board.winRefArr = [...board.currentBoard];
  
  console.log(`\n${board.printBoard}`);
  console.log('\nA new game has begun, your move.\n');
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

// converts the board array to the vertical verson to display in the console
const convertBoard = (boardToConvert, pegs) => {
  // const numArr = [];
  // for (let i = 1; i <= pegs; i++) {
  //   numArr.push(i);
  // }
  const mapBoard = boardToConvert.map(arr =>  "--- " + arr.toString().replaceAll(',', ' '));
  const str = mapBoard.toString().replaceAll(',', '\n');
  return str;
}

const checkWinner = (boardToCheck, winRefArr) => {
  const index = boardToCheck.findIndex(peg => peg.length === winRefArr.length);
  return index > 0;
}

launch();