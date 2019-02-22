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

boardState();

// Moves a disk from one peg to another if valid move or print error
function moveDisc(pegStart, pegEnd) {
  moveCounter += 1;
  pegStart = board[pegStart -1];
  pegEnd = board[pegEnd -1];
  if( pegEnd.length === 0 || (pegStart[pegStart.length - 1] < pegEnd[pegEnd.length -1])) 
  {
    pegEnd.push(pegStart.pop());
  } else {
    console.log('Invalid Move. Try Again');
    boardState();
    return;
  }
  checkWinner();
  boardState();
}

// Checks if the win condition is met
function checkWinner() {
  const peg2 = board[1].length;
  const peg3 = board[2].length;
  if(peg2 === initialState || peg3 === initialState){
    console.log('You win!  This attempt took you a total of ' + moveCounter + ' moves!');
    
  }
}

moveDisc(1,2);
moveDisc(1,2);
moveDisc(1,3);
moveDisc(1,3);
moveDisc(2,3);
moveDisc(1,2);
moveDisc(3,1);
moveDisc(3,2);
moveDisc(1,2);





// // Shortest solution to 3x3
// moveDisc(1,2);
// moveDisc(1,3);
// moveDisc(2,3);
// moveDisc(1,2);
// moveDisc(3,1);
// moveDisc(3,2);
// moveDisc(1,2);



