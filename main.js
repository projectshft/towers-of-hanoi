let Game = () => {
  let board;
  let moves;

  function newGame() {
    console.log(
      `New game! Try to move the discs from tower 1 to another tower`
    );
    //game set to three discs for testing purposes - if changing to more discs, be sure to change values in the gameEnd function as well
    board = [[3, 2, 1], [], []];
    moves = 0;
    renderBoard();
  }
  function renderBoard() {
    board.map((obj, num) => {
      console.log(`Tower ${num + 1} ==== ${obj.join(' ')}`);
    });
  }
  function move(from, to) {
    if (to.length === 0 || from.slice(-1) < to.slice(-1)) {
      let currentDisc = from.pop();
      moves++;
      to.push(currentDisc);
      console.log(`That move was successful, the board looks like this: `);
    } else {
      console.log(
        `That move was not successful. The board still looks like this: `
      );
    }
    gameEnd();
  }
  function gameEnd() {
    if (
      board[0].length === 0 &&
      (board[1].length === 3 || board[2].length === 3)
    ) {
      renderBoard();
      console.log(
        `Great job! You finished the game in ${moves} moves. Play again and try to beat your score!`
      );

      // renderBoard();
      game = Game();
    } else {
      renderBoard();
      console.log(`moves: ${moves}`);
    }
  }
  newGame();
  return {
    move: move,
    board: board,
    renderBoard: renderBoard,
  };
};
let game = Game();
console.log(game.move(game.board[0], game.board[1]));
console.log(game.move(game.board[0], game.board[2]));
console.log(game.move(game.board[1], game.board[2]));
console.log(game.move(game.board[0], game.board[1]));
console.log(game.move(game.board[2], game.board[0]));
console.log(game.move(game.board[2], game.board[1]));
// console.log(game.move(game.board[0], game.board[1]));
