// First of all it will need a board. We'll utilize a 2D array to do this
// There should be an object responsible for maintaining the state of the board.
let boardState = {};
var numPegs;
var numDiscs;


function startGame() {
  // Build the ability to change the number of pegs/discs and update the game board and playing style.
  numPegs = parseInt(prompt('How many pegs?'));
  numDiscs = parseInt(prompt('How many discs?'));
  for(let i = 1; i <= numPegs; i++) {
    if(i === 1) {
      boardState[i] = [];
      for(let j = numDiscs; j > 0; j--) {
        boardState[i].push(j);
      }
    } else {
      boardState[i] = [];
    }
  }
  logBoard();
}

//Log the state of the board to the console
function logBoard() {
  //dynamic for any number of pegs
  for(i = 1; i <= numPegs; i++) {
    console.log("--- " + boardState[i].map(x => x).join(' '));
  }
}

//Function to move the discs
function moveDisc(startPeg, endPeg) { 
  //only move the last item in the array (array.length -1)
  //can't move a disc on top of another if it is bigger than that disc.
  let endPegLength = boardState[endPeg].length;
  if(endPegLength === 0) { //if the destination peg is empty, move the last item in the array of the start peg onto the end peg
    boardState[endPeg].push(boardState[startPeg].pop());
    console.log('That move was successful, board is now:');
    logBoard();
  }
  if(endPegLength !== 0) { // if the dest. peg is not empty
    //Set the value of the disc thats moving and the value of the top disc on the dest. peg
    let movingDisc = boardState[startPeg][boardState[startPeg].length - 1];
    let destDisc = boardState[endPeg][boardState[endPeg].length - 1];
    //If dest disc is greater than moving disc, let it move!
    if(destDisc > movingDisc) {
      boardState[endPeg].push(boardState[startPeg].pop());
      console.log('That move was successful, board is now:');
      logBoard();
    } else {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');
      logBoard();
    }
  }
  checkWinner();
} 

function setWinningCondition(peg) {
  // check if a specified peg has all the games discs in order
  for(let i = 0; i < numDiscs; i++) {
    if(peg[i] !== numDiscs - i) { // example: if(peg[0] !== numDiscs - 0)
      return false;
    } 
  }
  return true;
}

// Function to check if the game has been won and then starts a new game!
function checkWinner() {
 
  for(let i = 2; i <= numPegs; i++) {
    if(setWinningCondition(boardState[i])) {
      console.log('You Win! Lets play again:')
      boardState = {};
      startGame();
    }
  }
}

startGame();