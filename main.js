var pegs = [
  [5,4,3,2,1],
  [],
  []
];


//Initial state of board.
var initBoard = [
[5,4,3,2,1],
[],
[]
];

function resetGame() {
  pegs = initBoard
};

function displayBoard() {
  pegs.map(function(peg) {
  console.log('---' + peg);
  });
};

function moveDisc(from, to) {
  //Checks if the user inputted proper source and destination pegs.
  if (from < 1 || from > 3) {
    console.log('Please select a number that is either 1, 2, or 3 to pull the disk from. The board is still:\n');
    displayBoard();
    return;
  }
  if (to < 1 || to > 3) {
    console.log('Please select a number that is either 1, 2, or 3 to send the disk to. The board is still:\n');
    displayBoard();
    return;
  };

  // Renamed to source and destination for easier readability.
  var source = pegs[from-1];
  var destination = pegs[to-1];

  //Checks if there is a disk available to be moved.
  if (source.length === 0) {
  console.log('There is no disk to move. The board is still:\n');
  displayBoard();
  return;
  };

  //Checks if the disk being moved is larger than the one it will be placed on.
  if (destination.length > 0 && source.slice(-1) > destination.slice(-1)) {
    console.log('You cannot move a larger disc on top of a smaller one. The board is still: \n');
    displayBoard();
    return;
  };

  //Moves the disk to the new peg.
  destination.push(source.pop());
  console.log('That move was successful, the board is now: \n');
  displayBoard();

//Checks if the win condition has been met. 
  checkWinner();
}

function checkWinner() {
if (pegs[1].length === 5 || pegs[2].length === 5) {
  console.log('Congratulations! You won! Restarting board for next game.\n');
  resetGame();
  displayBoard();
}
}

displayBoard();


// Solution
moveDisc(1,2)
moveDisc(1,3)
moveDisc(2,3)
moveDisc(1,2)
moveDisc(3,1)
moveDisc(3,2)
moveDisc(1,2)
moveDisc(1,3)
moveDisc(2,3)
moveDisc(2,1)
moveDisc(3,1)
moveDisc(2,3)
moveDisc(1,2)
moveDisc(1,3)
moveDisc(2,3)
moveDisc(1,2)
moveDisc(3,1)
moveDisc(3,2)
moveDisc(1,2)
moveDisc(3,1)
moveDisc(2,3)
moveDisc(2,1)
moveDisc(3,1)
moveDisc(3,2)
moveDisc(1,2)
moveDisc(1,3)
moveDisc(2,3)
moveDisc(1,2)
moveDisc(3,1)
moveDisc(3,2)
moveDisc(1,2)