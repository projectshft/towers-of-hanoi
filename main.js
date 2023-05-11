// First of all it will need a board. We'll utilize a 2D array to do this
// There should be an object responsible for maintaining the state of the board.
let boardState = {
  1: [5, 4, 3, 2, 1],
  2: [],
  3: []
};

// We'll use your Chrome Browser JavaScript Console to play the game. We'll want to be able to print the board horizontally. 
// You MUST utilize a map function at least once to accomplish this part of the assignment. 

function logBoard() {
  //I MUST to use MAP -_-
  console.log("--- " + boardState['1'].map(x => x).join(' '));//Log peg one of the board (Map does nothing)
  console.log("--- " + boardState['2'].map(x => x).join(' '));//Log peg two of the board on a new line (Map does nothing)
  console.log("--- " + boardState['3'].map(x => x).join(' '));//Log peg three of the board on a new line (Map does nothing)

  // The code below also works but at the start of the game it doesnt print the empty pegs twice which is why im using the code above instead.
  // [boardState['1'], boardState['2'], boardState['3']].map(section => {
  //   if(section.length === 0) {
  //     console.log('---');
  //   } else {
  //     console.log('---', ...section);
  //   }
  // })
}

// Our game will progress with the player submitting moves to the game and the game accepting or rejecting the move and updating the board if the move is allowed. Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc. For example, with moves originating from the above starting board:

function moveDisc(startPeg, endPeg) { //Because this function doesnt return anything, im getting 'undefined' everytime I move a disc. Need to fix this...
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

// There should be a checkWinner function that checks to see if the player has won the game. 
// You win the game by putting all the discs back in the original order but on a new peg.
// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
function checkWinner() {
  if(JSON.stringify(boardState['2']) === JSON.stringify([5, 4, 3, 2, 1]) || JSON.stringify(boardState['3']) === JSON.stringify([5, 4, 3, 2, 1])) {
    console.log('You Win! Lets play again:')
    boardState['1'] = [5, 4, 3, 2, 1];
    boardState['2'] = [];
    boardState['3'] = [];
    logBoard();
  } else {
    console.log('Not a winner');
  }
}

logBoard(); //Log the board to start the game when the page loads.