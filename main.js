let board = [
  [3, 2, 1],
  [],
  []
];


let numOfDiscs = board[0].length;

// check winner
const checkWinner = () => {
  // check if all the discs are in tower3
  if (board[board.length - 1].length == numOfDiscs) {
    console.log(`You won!`);
    // reset game 
    resetGame();
  }
}

// reset game 
const resetGame = () => {
  board = [
    [3, 2, 1],
    [],
    []
  ];
}

const printBoard = () => {
  board.map(tower => console.log('---', tower.join(' ')));
}

const moveDisc = (oldTower, newTower) => {
  // set arguemnts to arrays in board
  switch (oldTower) {
    case 1:
      oldTower = board[0];
      break;
    case 2:
      oldTower = board[1];
      break;
    case 3:
      oldTower = board[2];
      break;
    default:
      console.log(`Invalid First Tower. Pick a number between 1 and 3.`)
      break;
  }

  switch (newTower) {
    case 1:
      newTower = board[0];
      break;
    case 2:
      newTower = board[1];
      break;
    case 3:
      newTower = board[2];
      break;
    default:
      console.log(`Invalid Second Tower. Pick a number between 1 and 3.`)
      break;
  }

  // declared variables for top discs in towers
  let discOldTower = oldTower[oldTower.length - 1];
  let discNewTower = newTower[newTower.length - 1];

  // conditional to check if move can be done
  if (newTower.length == 0) {
    // Move disc
    newTower.push(discOldTower);
    oldTower.pop();

    console.log(`Disc has been moved:`);
    printBoard();
    checkWinner();
  } else if (newTower.length) {
    // check if last element from oldTower is smaller than last element in newTower
    if (discOldTower < discNewTower) {
      // Move disc
      newTower.push(discOldTower);
      oldTower.pop();

      console.log(`Disc has been moved:`);
      printBoard();
      checkWinner()
    } else {
      // move can't be done, print board
      console.log(`You cannot move a larger disc on top of a smaller one.`)
      printBoard();
    }
  } else {
    // move can't be done, print board
    console.log(`You cannot move a larger disc on top of a smaller one.`)
    printBoard();
  }
}
