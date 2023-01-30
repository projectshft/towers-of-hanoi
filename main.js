let board = [];

// get number of discs in the game
let numOfTowers;
let numOfDiscs;

// function to start game
const startGame = () => {
numOfTowers = prompt("Choose the number of towers: ");
numOfDiscs = prompt("Choose the number of discs: ");

// check if numOfTowers is at least 3
if (numOfTowers < 3) {
  numOfTowers = prompt("Invalid number of towers. Please choose at least 3 towers.")

  setUpBoard();
  console.log(`This is the starting board:`)
  printBoard();
} else {
  setUpBoard();
  console.log(`This is the starting board:`)
  printBoard();
}
}

// set up board based on user inputs (towers & discs)
const setUpBoard = () => {
  // push numOfTowers as empty arrays into board
  for (let i=0; i < numOfTowers; i++) {
    board.push([]);
  }

  // push numOfDiscs as elements into first tower
  for (let i=numOfDiscs; i > 0; i--) {
    board[0].push(i)
  }
}

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

  // clear board
  board = [];

  console.log(`Game has reset. This is the starting board:`)
  setUpBoard();
  printBoard();
}

// prints board in a readable format
const printBoard = () => {
  board.map(tower => console.log('---', tower.join(' ')));
}

const moveDisc = (oldTower, newTower) => {
  // set arguemnts to arrays in board
  oldTower = board[oldTower - 1];
  newTower = board[newTower - 1];

  // declared variables for top discs in towers
  let discOldTower = oldTower[oldTower.length - 1];
  let discNewTower = newTower[newTower.length - 1];

  // conditional to check if move can be done
  if (newTower.length == 0) {
    // move disc
    newTower.push(discOldTower);
    oldTower.pop();

    console.log(`Disc has been moved:`);
    printBoard();
    checkWinner();
  } else if (newTower.length) {
    // check if last element from oldTower is smaller than last element in newTower
    if (discOldTower < discNewTower) {
      // move disc
      newTower.push(discOldTower);
      oldTower.pop();

      console.log(`Disc has been moved:`);
      printBoard();
      checkWinner()
    } else {
      // move can't be done, print board
      console.log(`You cannot move a larger disc on top of a smaller one, board is still:`)
      printBoard();
    }
  } else {
    // move can't be done, print board
    console.log(`You cannot move a larger disc on top of a smaller one, board is still:`)
    printBoard();
  }
}

startGame();