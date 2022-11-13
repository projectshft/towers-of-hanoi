// Game Rules: 
// only ONE disc can be moved at a time
// NO disc can be placed on top of a smaller disc
// stack the discs on ANOTHER (peg2 or peg3) peg to win
// player can only move the TOP disc on a peg

// a board representing 3 pegs, and 5 discs on the first peg in ascending order  
var gameBoard = [
  [5, 4, 3, 2, 1],
  [],
  [],
];

// a function to move a disc from one peg to another
function swapElements(startingPeg, endingPeg) {
  endingPeg.push(startingPeg.at(-1));
  startingPeg.pop();
};

// a function to show the state of gameboard to the user
function showBoard() {
  gameBoard.map(function(peg) {
    console.log ('--- ' + peg.join(' '));
   });
  }

// function to test for diffrent criteria
var moveDisc = function(positionFrom, positionTo) {
  var pegInitial = gameBoard[positionFrom - 1];
  var pegFinal = gameBoard[positionTo - 1];

    if (positionFrom > 3 || positionTo > 3) {     // in case the player chooses a peg that does not exist
      console.log('You chose a peg that does not exist. Please try again.');
    } else if (pegInitial.length == 0) {     // in case the player tries to move a peg FROM an empty peg
    console.log('You chose an empty peg; try again.');
    } else if (pegInitial.length > 0 && pegFinal.length == 0) {     // in case the player tries to move a disc TO an empty peg
    swapElements(pegInitial, pegFinal);
    console.log('That move was successful, board is now: ');
    showBoard();    //checkWinner function is omitted from this if condition since moving a disc to an empty peg can never result in the final move to win the game
    } else if (pegInitial.length > 0 && pegInitial.at(-1) < pegFinal.at(-1)) {      // condition to make sure a disc is moved from a valid peg AND placed on top of a larger disc
    swapElements(pegInitial, pegFinal);
    console.log('That move was successful, board is now: ');
    showBoard();
    checkWinner();      // check to see if this move resulted in winning the game
    } else {      // only scenario left is if the player attempts to move a disc on top of a smaller one
    console.log('You cannot move a larger disc on top of a smaller one, board is still: ');
    showBoard();

}}

//function to check if the player won the game, then reset the game
function checkWinner() {
  if (gameBoard[1].length == 5 || gameBoard[2].length == 5) {
    console.log('Congratulations! You won!\n----------------------------------\nThis is the start of a new game');
    gameBoard = [
      [5, 4, 3, 2, 1],
      [],
      [],
    ];
    showBoard();
  }
}

showBoard();