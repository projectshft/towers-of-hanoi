// let board = [];

let board = [[3, 2, 1], [], []];
let [a, b, c] = board;
let moves = 0;
setUpGame(board, moves);

function setUpGame() {
  board = [[3, 2, 1], [], []];
  moves = 0;
  renderBoard(board, moves);
  // renderBoard();
}

function renderBoard(board, moves) {
  board.map((obj, number) => {
    console.log(`Tower ${number} --- ${obj.join(' ')}`);
  });
  console.log(`Moves: ${moves}`);
}

function move(moveFrom, moveTo) {
  if (moveCheck(moveFrom, moveTo)) {
    let topDisc = moveFrom.pop();

    moves++;
    moveTo.push(topDisc);
    console.log(`That move was successful. The board looks like this: `);
    renderBoard(board, moves);
    if (!checkWinner()) {
    } else {
      console.log("You can't make that move right now");
      console.log(`The board still looks like this: `);

      renderBoard(board, moves);
      // renderBoard();
    }
  }
}

function moveCheck(from, to) {
  if (to.length === 0 || to.slice(-1) > from.slice(-1)) {
    return true;
  } else {
    return false;
  }
}

function checkWinner() {
  if (
    board[0].length === 0 &&
    (board[1].length === 3 || board[2].length === 3)
  ) {
    console.log(`Great job! You beat the game in ${moves} moves!`);
    console.log("Let's play again now!");

    setUpGame();
  }
}

console.log(move(a, b));
console.log(move(a, c));
console.log(move(b, c));
console.log(move(a, b));
console.log(move(c, a));
console.log(move(c, b));

console.log(move(a, b));
