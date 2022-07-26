let board = { a: [5, 4, 3, 2, 1], b: [], c: [] };
let a = board.a;
let b = board.b;
let c = board.c;
let moves = 0;
renderBoard(a, b, c);

function move(oldPeg, newPeg) {
  if (newPeg.length === 0) {
    moveDisc(oldPeg, newPeg);
  } else if (oldPeg.slice(-1) > newPeg.slice(-1)) {
    console.log("You can't make that move right now");
    console.log(`The board still looks like this: `);
    renderBoard(a, b, c);
    console.log(`moves: ${moves}`);
  } else {
    moveDisc(oldPeg, newPeg);

    if (a.length === 0 && (b.length === 5 || c.length === 5)) {
      console.log(
        `Great job! you won the game in ${moves} moves! That must be some kind of record!`
      );
    }
  }
}
function moveDisc(moveOldPeg, moveNewPeg) {
  let currentDisc = moveOldPeg.pop();
  moves++;
  moveNewPeg.push(currentDisc);
  console.log(`That move was successful. The board looks like this: `);
  renderBoard(a, b, c);
  console.log(`moves: ${moves}`);
  // console.log(moves);
}

function renderBoard(a, b, c) {
  console.log(`---${a}`);
  console.log(`---${b}`);
  console.log(`---${c}`);
}
