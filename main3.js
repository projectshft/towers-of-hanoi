let Board = () => {
  // let board = [[3, 2, 1], [], []];
  let board = [];
  let moves = 0;
  // let [a, b, c] = board;

  // resetBoard();
  // resetBoard(board, moves);

  let resetBoard = () => {
    board = [[3, 2, 1], [], []];
    moves = 0;
    console.log('<=============================>');
    console.log(`<<===== N E W ~ G A M E =====>>`);
    console.log('<=============================>');
    renderBoard(board);
  };

  let move = (oldTower, newTower) => {
    if (newTower.length === 0) {
      moveDisc(oldTower, newTower);
    } else if (oldTower.slice(-1) > newTower.slice(-1)) {
      console.log("You can't make that move right now");
      console.log(`The board still looks like this: `);

      renderBoard(board);
      console.log(`moves: ${moves}`);
    } else {
      moveDisc(oldTower, newTower);
      checkWinner(board);
    }
  };
  let moveDisc = (moveOldTower, moveNewTower) => {
    let currentDisc = moveOldTower.pop();
    moves++;
    moveNewTower.push(currentDisc);
    console.log(`That move was successful. The board looks like this: `);

    renderBoard(board);
    console.log(`moves: ${moves}`);
  };

  let renderBoard = () => {
    board.map((obj, number) => {
      console.log(`Tower ${number + 1} --- ${obj.join(' ')}`);
    });
  };

  let checkWinner = () => {
    if (
      board[0].length === 0 &&
      (board[1].length === 3 || board[2].length === 3)
    ) {
      console.log(
        `Great job! you won the game in ${moves} moves! That must be some kind of record!`
      );

      resetBoard();
    }
  };
  resetBoard();
};
let board = Board();

console.log(board.move(board[0], board[1]));
// console.log(move(a, c));
// console.log(move(b, c));
// console.log(move(a, b));
// console.log(move(c, a));
// console.log(move(c, b));
// console.log(move(a, b));
// console.log(move(a, b));
