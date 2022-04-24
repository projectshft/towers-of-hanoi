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

const updateMoves = () => game.moves = game.board.length - 1;

const nextState = (from, to) => {
  const disc = currentState()[from - 1].at(-1);

  if (disc > currentState()[to - 1].at(-1)) {
    console.log('ILLEGAL MOVE\nCannot move larger disc on top of smaller one.\nBoard remains:')
    return currentState()
  }

  console.log(`SUCCESSFUL MOVE\nMoved disc ${disc} from peg ${from} to peg ${to}.\nBoard is now:`)
  return currentState().map((peg, index) => {
    return index === (from - 1) ? peg.slice(0, -1) :
           index === (to - 1)   ? peg.concat(disc) :
                                  peg;
  });
}

const checkWinner = array => {
  return array.some((value, index) => {
    return value.at(-1) === 1 && (value.length === 5) && index > 0
  })
}

const moveDisc = (fromPeg, toPeg) => {
  const stateUpdate = nextState(fromPeg, toPeg);

  if (stateUpdate !== currentState()) {
    game.board.push(stateUpdate);
    updateMoves();
  }

  if (checkWinner(currentState())) {
    console.log(`YOU WIN!\nIt took you ${game.moves} moves.`);
  }

  return currentState()
}

console.log(display(game.board[0]))
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(1, 3)));
console.log(display(moveDisc(2, 3)));
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(3, 2)));
console.log(display(moveDisc(3, 1)));
console.log(display(moveDisc(2, 3)));
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(3, 2)));
console.log(display(moveDisc(1, 3)));
console.log(display(moveDisc(2, 3)));
console.log(display(moveDisc(2, 1)));
console.log(display(moveDisc(3, 1)));
console.log(display(moveDisc(2, 3)));
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(1, 3)));
console.log(display(moveDisc(2, 3)));
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(3, 1)));
console.log(display(moveDisc(3, 2)));
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(3, 1)));
console.log(display(moveDisc(2, 3)));
console.log(display(moveDisc(2, 1)));
console.log(display(moveDisc(3, 1)));
console.log(display(moveDisc(3, 2)));
console.log(display(moveDisc(1, 3)));
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(3, 1)));
console.log(display(moveDisc(2, 3)));
console.log(display(moveDisc(1, 3)));
console.log(display(moveDisc(1, 2)));
console.log(display(moveDisc(3, 1)));
console.log(display(moveDisc(3, 2)));
console.log(display(moveDisc(1, 2)));

console.log(game.moves)