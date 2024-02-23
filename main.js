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


const board = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: [] 
};

const startingBoard = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: [] 
};

const printBoard = (board) => {
  Object.values(board).forEach((peg) => console.log('---', peg)
  )};

printBoard(board);

const moveDisc = (src, dest) => {

  if (src.board.peg < dest.board.peg) {
    console.log('That move was successful! The board is now:', printBoard(board));
  } else if (src.board > dest.board.peg){
    console.log('Error: You cannot move a larger disc on top of a smaller one. The board is still:', printBoard(board));
  };


};


const checkWinner = function() {
  const winning = [5, 4, 3, 2, 1];
  if (board[0][1] === winning || board[0][2] === winning) {
    console.log('Congrats, you win!'); 
    
    const board = startingBoard;
  };
};


// Tests:
// Move the disc from peg 1 to peg 2
moveDisc(1, 2);
console.log('That move was successful, board is now:');

// Move disc from peg 1 to peg 3
moveDisc(1, 3);
console.log('That move was successful, board is now:');

// Move disc from peg 1 to peg 2
moveDisc(1, 2);
console.log('You cannot move a larger disc on top of a smaller one, board is still:');

