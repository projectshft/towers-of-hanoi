// starting board
let board = [
  [5, 4, 3, 2, 1], 
  [], 
  []
];

// console display for gameboard
// --- 5 4 3 2 1
// ---
// ---

const display = array => {
  return array
    .map(peg => `--- ${peg.join(' ')}`)
    .join('\n')
}

// console.log(display(board))

const moveDisc = (fromPeg, toPeg) => {
  const disc = board[fromPeg -1][board[fromPeg -1].length - 1];
  console.log(`Moved disc ${disc} from peg ${fromPeg} to peg ${toPeg}`);
  return board = board
    .map((peg, index, array) => {
      return index === (fromPeg - 1) ? peg.slice(0, -1) : 
             index === (toPeg - 1)   ? peg.concat(disc) :
             /* otherwise */           peg;
    })
}

const move1 = moveDisc(1, 2);
const move2 = moveDisc(1, 3);

console.log(display(move2));