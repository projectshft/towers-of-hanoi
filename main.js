// Requirements:
// board represented by a 2D array
// print the board horizontally
// use .map method and Array Helper methods
// starting board looks a certain way - maybe need to print the starting board first
// player submits moves to the game. the game accepts or rejects the move (need error statements). 
// If move is acceptable, then the board will be updated
// can only move smaller discs on top of larger discs
// object responsible for maintaining the state of the board
// a way to move discs from on peg to another
// need a checkWinner() that checks to see if the player has won the game
// winning = all the disks are put back in original order on a different peg
// once the player has won, the game ends and announces the winner, and the game is reset back to starting position
// try not to use for or while loops


const board = {
  pegs: [[5, 4, 3, 2, 1],
  [],
  []
  ],


};

const peg1 = board.pegs[0];
const peg2 = board.pegs[1];
const peg3 = board.pegs[2];



const moveDisc = function(n, start, target, inter){
  // needs a comparison between big and smaller discs
  // if else statements
  // throw specific errors "You cannot move a larger disc on top of a smaller one, board is still:"
  if(n < 0){

  }

  // update board is move is acceptable - "That move was successful, board is now:"

};

const printBoard = function() {
  this.board.map()
;}

const checkWinner = function() {
  // insert if else statements
  // need a check for winning board

};

 const winnerWinner = function() {
  // announce a winner
  // reset the board

};

const output = function() {
  console.log()
};



// Tests:
// Move the disc from peg 1 to peg 2
moveDisc(1, 2);
console.log("That move was successful, board is now:");

// Move disc from peg 1 to peg 3
moveDisc(1, 3);
console.log("That move was successful, board is now:");

// Move disc from peg 1 to peg 2
moveDisc(1, 2);
console.log("You cannot move a larger disc on top of a smaller one, board is still:");


// ----------
// t(n, A, C, B)
// t(n-1, A, B, C)
// n -> C 
