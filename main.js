let board = {
  peg1: [5, 4, 3, 2, 1], 
  peg2: [], 
  peg3: [],
}; 
//SETTING UP DISKS FOR EACH PEG w/ OBJECT
  
const pegNumber = {
  1: 'peg1',
  2: 'peg2',
  3: 'peg3'
}; 

//WILL ALLOW ME TO ACCESS PEGS BY JUST # AND NOT BY PEG + # 

function displayBoard() {
  for (let peg in board) {
  console.log('--- ' + board[peg].join(' '));
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
}
//SETTING UP BOARD HORIZONTALLY


function isMoveValid(fromPeg, toPeg) {
  if (board[fromPeg].length === 0) {
    return false;
  }
  const disk = board[fromPeg].at(-1);
  
  if (board[toPeg].length === 0 || board[toPeg].at(-1) > disk) {
    return true;
}
return false;
}
//VALIDATING IF DISK MOVE IS VALID VALID. 


function moveDisk(fromPeg, toPeg) {

fromPeg = pegNumber[fromPeg];
toPeg = pegNumber[toPeg];
//PEG1 = 1, PEG2 = 2, PEG3 = 3


  if (isMoveValid(fromPeg, toPeg)) {
    const disk = board[fromPeg].pop()
    board[toPeg].push(disk)
  console.log('Move is VALID!')
} else { 
  console.log('Move is INVALID');
}
displayBoard();
checkWinner();
}
//EXECUTING DISK IF MOVE IS MOVE IS VALID AND UPDATING BOARD


function checkWinner() {
  if (board.peg3.length === 5 && board.peg3.every(function(disk,index) {
  return disk === 5 - index;
})) {
  console.log('You won!');
  resetGame();
  return true;
}
return false;
}
//CODE TO CHECK IF PLAYER HAS WON. IF SO GAME WILL RESET


function resetGame() {
  console.log('Resetting the game.');
  board = {
    peg1: [5, 4, 3, 2, 1],
    peg2: [],
    peg3: []
  };
  displayBoard();
}
//CODE TO EXECUTE GAME RESET


displayBoard();
//DISPLAY NEW GAME