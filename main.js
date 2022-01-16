let newBoard = [
  ["5", "4", "3", "2", "1"],
  [],
  []
]

let board = {
  moveDisc: (from, to) => {
    board.currentBoard[to - 1].push(board.currentBoard[from - 1].pop());
    board.printBoard = convertBoard(board.currentBoard);

    console.log(`\n${board.printBoard}`);
    console.log('\nYour move.\n');

    if (board.currentBoard[1] === newBoard[0] || board.currentBoard[2] === newBoard[0]) {
      console.log('You win this time...');
      startGame();
    }
  }
}

const convertBoard = boardParam => {
  const mapBoard = boardParam.map(arr => "--- " + arr.toString().replaceAll(',', ' '));
  const str = mapBoard.toString().replaceAll(',', '\n');
  return str;
}

const startGame = () => {
  board.currentBoard = newBoard;
  board.printBoard = convertBoard(newBoard);
  console.log(`\n${board.printBoard}`);
  console.log('\nGood luck, your move.\n');
}

startGame()