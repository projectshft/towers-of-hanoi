// starting board
const board = [
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

console.log(display(board))