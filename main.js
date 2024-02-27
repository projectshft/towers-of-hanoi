/* eslint-disable prettier/prettier */

const startingBoard = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: [],
};

const board = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: [],
};

// eslint-disable-next-line no-shadow
const printBoard = (board) => {
  Object.values(board).forEach((peg) => console.log('---', peg));
};

const moveDisc = (currentPeg, targetPeg) => {
  // Check if the source peg exists
  if (!board[currentPeg]) {
    console.error(`Error: The selected peg '${currentPeg}' does not exist.`);
    return;
  };
  // Get the top disc from the source peg i.e. last element
  const disc = board[currentPeg].pop();

  // Check if the target peg exists
  if (!board[targetPeg]) {
    console.error(`Error: The selected peg '${targetPeg}' does not exist.`);
    // Put the disc back on the source peg
    board[currentPeg].push(disc);
    return;
  };
  // Check if the move is valid (smaller disc on top)
  if (board[targetPeg].length === 0 || disc < board[targetPeg][board[targetPeg].length - 1]) {
    // This should add the disc to the top of the target peg
    board[targetPeg].push(disc);
    console.log(`Success! You moved disc ${disc} from ${currentPeg} to ${targetPeg}. The board is now: `);
    printBoard(board);
  } else {
    // In the case of an invalid move, the disc goes back on the previous peg
    board[currentPeg].push(disc);
    console.log(`Invalid move: You cannot place disc ${disc} on top of a smaller one. The board is still: `);
    printBoard(board);
  };
};


const checkWinner = () => {
  if (board.peg2.length === 5 || board.peg3.length === 5) {
    console.log("Congratulations! You've won the game!");

    resetBoard();
    console.log('Board has been reset:');
    printBoard(board);
    
  } else {
    console.log('Keep playing!');
  };
};


// Steps to win:
moveDisc('peg1', 'pegasus');
moveDisc('peg1', 'peg2');
moveDisc('peg1', 'peg3');
moveDisc('peg2', 'peg3');
moveDisc('peg1', 'peg2');
moveDisc('peg3', 'peg1');
moveDisc('peg3', 'peg2');
moveDisc('peg1', 'peg2');
moveDisc('peg1', 'peg3');
moveDisc('peg2', 'peg3');
moveDisc('peg2', 'peg1');
moveDisc('peg3', 'peg1');
moveDisc('peg2', 'peg3');
moveDisc('peg1', 'peg2');
moveDisc('peg1', 'peg3');
moveDisc('peg2', 'peg3');
moveDisc('peg1', 'peg2');
moveDisc('peg3', 'peg1');
moveDisc('peg3', 'peg2');
moveDisc('peg1', 'peg2');
moveDisc('peg3', 'peg1');
moveDisc('peg2', 'peg3');
moveDisc('peg2', 'peg1');
moveDisc('peg3', 'peg1');
moveDisc('peg3', 'peg2');
moveDisc('peg1', 'peg2');
moveDisc('peg1', 'peg3');
moveDisc('peg2', 'peg3');
moveDisc('peg1', 'peg2');
moveDisc('peg3', 'peg1');
moveDisc('peg3', 'peg2');
moveDisc('peg1', 'peg2');

checkWinner();


function resetBoard() {
  // Deep copy the initialBoard to avoid modifying the original
  board.peg1 = [...startingBoard.peg1];
  board.peg2 = [...startingBoard.peg2];
  board.peg3 = [...startingBoard.peg3];
};
