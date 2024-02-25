/* eslint-disable prettier/prettier */

// Requirements:
// use .map method and Array Helper methods
// player submits moves to the game. the game accepts or rejects the move (need error statements). 
// If move is acceptable, then the board will be updated
// can only move smaller discs on top of larger discs

// a way to move discs from on peg to another
// need a checkWinner() that checks to see if the player has won the game
// winning = all the disks are put back in original order on a different peg
// once the player has won, the game ends and announces the winner, and the game is reset back to starting position
// try not to use for or while loops

const successMsg = 'That move was successful! The board is now:';
const errorMsg = 'Error: You cannot move a larger disc on top of a smaller one. The board is still:';

const board = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: [] 
  
};

// const startPos = [[5, 4, 3, 2, 1], [], []];

// eslint-disable-next-line no-shadow
const printBoard = (board) => {
  Object.values(board).forEach((peg) => console.log('---', peg)
  )};

console.log('The board looks like:', printBoard(board));

const moveDisc = (currentP, nextP) => {
  if ( board.pegs[0][1] < board.pegs[0][2]) {

    console.log(successMsg, printBoard(board));
  } else if (currentP.board.peg[0][1] > nextP.board.peg[0][2]){
    console.log(errorMsg, printBoard(board));
  };
};

const checkWinner = () => {
  const winning = [5, 4, 3, 2, 1];
  if (board.peg2 === winning || board.peg3 === winning) {
    console.log('Congrats, you win!'); 
    
    reset();
  };
};

console.log(checkWinner());

const reset = function() {
  board.peg1[0].empty();
  board.peg2[0].empty();
  board.peg3[0].empty();
};



// Tests:
// Move the disc from peg 1 to peg 2
moveDisc(1, 2);
console.log(successMsg);

// Move disc from peg 1 to peg 3
moveDisc(1, 3);
console.log(successMsg);

// Move disc from peg 1 to peg 2
moveDisc(1, 2);
console.log(errorMsg);




