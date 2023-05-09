// First of all it will need a board. We'll utilize a 2D array to do this
var gameBoard = [
  [5, 4, 3, 2, 1],
  [],
  []
];

// There should be an object responsible for maintaining the state of the board.

var boardState = {

}

// We'll use your Chrome Browser JavaScript Console to play the game. 
// We'll want to be able to print the board horizontally.
// You MUST utilize a map function at least once to accomplish this part of the assignment. 
function logBoard() {
  
}

// There should be an object responsible for maintaining the state of the board.
var gameBoardObj = {
  pegOne: gameBoard[0],
  pegTwo: gameBoard[1],
  pegThree: gameBoard[2]
};


//function that sets the initial board for the game.
function setStartingBoard() {
  gameBoard = [[5, 4, 3, 2, 1],[],[]];
}

// There should be a way to move discs from one peg to another.
// The end of this function should log the new board to the console if the move is valid.
function moveDisc(disc, peg) {

}





// There should be a checkWinner function that checks to see if the player has won the game. 
// You win the game by putting all the discs back in the original order but on a new peg.

// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.

// As a bonus, any time you iterate through an array, try and refrain from using for or while loops - instead try to use the Array helper methods.
