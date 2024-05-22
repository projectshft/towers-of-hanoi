// GAME SETUP

var board = [[5, 4, 3, 2, 1],
[],
[]];

var currentBoard = board.map(function (peg) {
    board.join('/n')
    return peg.join('');
});

function printBoard(){
  console.log({board});
}

console.log(board)

var winnerBoard1 = [[],
[],
[ 5, 4, 3, 2, 1]];

var winnerBoard2 = [[],
[5, 4, 3, 2, 1],
[]];



// GAME PLAY

function move(from, to){
// compare last peg (from) and last peg (to)
  var lastFrom = board[from].at(-1)
  var lastTo = board[to].at(-1)  

  console.log(lastFrom, lastTo)

// logic checks
if (from == to) {
  return 'Invalid move, try again.'
} else if (from < 0 || from > 3) {
  return 'Invalid move, try again.'
} else if (to < 0 || to > 3) {
  return 'Invalid move, try again.'
} else if (!lastFrom) {
  return 'Invalid move, try again'
} else if (!lastTo){
  board[to].push(board[from].pop());
  } else if (lastFrom > lastTo) {
  return 'The peg you move must be smaller than the peg beneath, try again.';
} else {
board[to].push(board[from].pop());
printBoard();
checkWinner();
}};

move(2, 2);


// GAME RULES

function checkWinner() {
  if (JSON.stringify(board) === JSON.stringify(winnerBoard1)) {
    board === board
  console.log('Congratulations! You win! Play again? ' + board);
} else if (JSON.stringify(board) === JSON.stringify(winnerBoard2)) {
console.log('Congratulations! You win! Play again? ' + board);
} else return;
};