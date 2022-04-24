const game = {
  moves: 0,
  board: [
    [[5, 4, 3, 2, 1], [], []]
  ]
}

const display = array => {
  return array
    .map(peg => `--- ${peg.join(' ')}`)
    .join('\n')
}

const currentState = () => game.board.at(-1);

const moveUpdate = () => game.moves = game.board.length - 1;

const nextState = (from, to) => {
  const disc = currentState()[from - 1].at(-1);
  return currentState().map((peg, index) => {
    return index === (from - 1) ? peg.slice(0, -1) :
           index === (to - 1)   ? peg.concat(disc) :
                                  peg;
  });
}

const moveDisc = (fromPeg, toPeg) => {
  const stateUpdate = nextState(fromPeg, toPeg);

  game.board.push(stateUpdate);
  moveUpdate();
  console.log(`Moved disc from peg ${fromPeg} to peg ${toPeg}`)

  return currentState()
}

console.log(display(game.board[0]))
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(1, 3)));
console.log(display(moveDisc(2, 3)));
// console.log(display(moveDisc(1, 2)));
// console.log(display(moveDisc(3, 2)));
// console.log(display(moveDisc(3, 1)));
// console.log(display(moveDisc(2, 3)));
// console.log(display(moveDisc(1, 2)));
// console.log(display(moveDisc(3, 2)));
console.log(game.board)
console.log(game.moves)