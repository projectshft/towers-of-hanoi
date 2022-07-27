let board = [[5, 4, 3, 2, 1], [], []];
let [a, b, c] = board;
let moves = 0;

// renderBoard(a, b, c);
renderBoard(board);

function move(oldTower, newTower) {
  if (newTower.length === 0) {
    moveDisc(oldTower, newTower);
  } else if (oldTower.slice(-1) > newTower.slice(-1)) {
    console.log("You can't make that move right now");
    console.log(`The board still looks like this: `);
    // renderBoard(a, b, c);
    renderBoard(board);
    console.log(`moves: ${moves}`);
  } else {
    moveDisc(oldTower, newTower);
    checkWinner(board);
  }
}
function moveDisc(moveOldTower, moveNewTower) {
  let currentDisc = moveOldTower.pop();
  moves++;
  moveNewTower.push(currentDisc);
  console.log(`That move was successful. The board looks like this: `);
  // renderBoard(a, b, c);
  renderBoard(board);
  console.log(`moves: ${moves}`);
}

function renderBoard(obj) {
  board.map((obj, number) => {
    console.log(`Tower ${number} --- ${obj.join(' ')}`);
  });
}

// function renderBoard(board) {
//   console.log(`Tower a: ---${board[0].join(' ')}`);
//   console.log(`Tower b: ---${board[1].join(' ')}`);
//   console.log(`Tower c: ---${board[2].join(' ')}`);
// }

function checkWinner() {
  if (
    board[0].length === 0 &&
    (board[1].length === 5 || board[2].length === 5)
  ) {
    console.log(
      `Great job! you won the game in ${moves} moves! That must be some kind of record!`
    );
  }
}
