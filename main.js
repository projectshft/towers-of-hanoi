let board = [[5, 4, 3, 2, 1],
[],
[]]; 

// use map to create horizontal board view

let viewBoard = (board) => {
  let boardView = board.map(row => {
    return '--- ' + row.join(' ')
  }).join('\n\n');
  console.log(boardView);
};

// create function called moveDisk that takes two arguments
const moveDisk = (currPeg, nextPeg) => {
  let diskIndex = board[currPeg].pop();
  let destinationPeg = board[nextPeg];
  let nextPegLength = board[nextPeg].length
  let lastElement;
  if(nextPegLength < 1) {
    lastElement = 10;
  }else{ 
    lastElement = board[nextPeg][nextPegLength-1]
  }
  
  if(diskIndex < lastElement){
    destinationPeg.push(diskIndex);
  } else { 
  board[currPeg].push(diskIndex)
  console.log("You cannot move a larger disc on top of a smaller one.");
  };
  viewBoard(board);
  checkWinner();
};

let boardReset = () => {
  board = [[5, 4, 3, 2, 1],
[],
[]]; 
}
// create function called checkWinner 

let checkWinner = function () {
  let array0 = board[0]
  let array1 = board[1]
  let array2 = board[2]
  const winnerStatement = "Congrats! You have won!"
   if(array0.length === 0 && (array1.length === 0 || array2.length === 0)) {
    boardReset();
    console.log(winnerStatement);
   }
};

// console.log(moveDisk(0,1));
