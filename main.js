let board = [["3", "2", "1"], [], []];
const initialState = board[0].length;
let moveCounter = 0;

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
  moveCounter += 1;
  pegStart = board[pegStart -1];
  pegEnd = board[pegEnd -1];
  if( pegEnd.length === 0 || (pegStart[pegStart.length - 1] < pegEnd[pegEnd.length -1])) 
  {
    pegEnd.push(pegStart.pop());
  } else {
    console.log('Invalid Move');
    return;
  }
  boardState();
  checkWinner();
}

// Checks if the win condition is met
function checkWinner() {
  const peg2 = board[1].length;
  const peg3 = board[2].length;
  if(peg2 === initialState || peg3 === initialState){
    console.log('You win!  This attempt took you a total of ' + moveCounter + ' moves!')
  }
}














// moveDisk(1,2);
// moveDisk(1,2);
// moveDisk(1,3);
// moveDisk(1,3);
// moveDisk(2,3);
// moveDisk(1,2);
// moveDisk(3,1);
// moveDisk(3,2);
// moveDisk(1,2);

// boardState();




// // Shortest solution to 3x3
// moveDisk(1,2);
// moveDisk(1,3);
// moveDisk(2,3);
// moveDisk(1,2);
// moveDisk(3,1);
// moveDisk(3,2);
// moveDisk(1,2);



