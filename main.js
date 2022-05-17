let board = [
  ['5', '4', '3', '2','1'],
  [],
  []
];

let firstPeg = board[0];
let secondPeg = board[1];
let thirdPeg = board[2];

let move = firstPeg.pop();
secondPeg.push(move);     

firstPeg.splice()
board.map(x => {
  if (x.length < 1) {
    console.log('---')
  } else {
    console.log(`---${x}`)
  }
})
