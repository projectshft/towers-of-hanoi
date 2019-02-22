let board = [["3", "2", "1"], [], []];
const initialState = board[0].length;

// Outputs the current state of the board to the console
 let boardState = function() {
  board.map(function(item) {
  let pegState = item.join(' ');
  console.log('--- ' + pegState);
});
  console.log(""); // Adds a blank line to console for easier readability
}

// Moves a disk from one peg to another
function moveDisk(pegStart, pegEnd) {
  boardState();
  pegStart = board[pegStart -1];
  pegEnd = board[pegEnd -1];
  pegEnd.push(pegStart.pop());
  checkWinner();
}

// Checks if the win condition is met
function checkWinner() {
  const peg2 = board[1].length;
  const peg3 = board[2].length;
  if(peg2 === initialState || peg3 === initialState){
    console.log('You win!')
  }
}

moveDisk(1,2);
moveDisk(1,3);
moveDisk(2,3);
moveDisk(1,2);
moveDisk(3,1);
moveDisk(3,2);
moveDisk(1,2);


