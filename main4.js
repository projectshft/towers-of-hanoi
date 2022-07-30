let Game = () => {
  let board = [[3, 2, 1], [], []];
  let [a, b, c] = board;
  let moves = 0;
  renderBoard(board);

  function move(oldPeg, newPeg) {
    if (newPeg.length === 0) {
      moveDisc(oldPeg, newPeg);
    } else if (oldPeg.slice(-1) > newPeg.slice(-1)) {
      console.log("You can't make that move right now");
      console.log(`The board still looks like this: `);
      renderBoard(board);
      console.log(`moves: ${moves}`);
    } else {
      moveDisc(oldPeg, newPeg);

      if (a.length === 0 && (b.length === 3 || c.length === 3)) {
        console.log(
          `Great job! you won the game in ${moves} moves! That must be some kind of record!`
        );
        board = [[3, 2, 1], [], []];
        moves = 0;
        renderBoard(board);
      }
    }
  }
  function moveDisc(moveOldPeg, moveNewPeg) {
    let currentDisc = moveOldPeg.pop();
    moves++;
    moveNewPeg.push(currentDisc);
    console.log(`That move was successful. The board looks like this: `);
    renderBoard(board);
    console.log(`moves: ${moves}`);
  }

  function renderBoard(board) {
    board.map((obj, number) => {
      console.log(`Tower ${number} ==== ${obj.join(' ')}`);
    });
  }
};
let game = Game();
