// We'll want to be able to print the board horizontally. You MUST utilize a map function at least once

const board = {peg1: [5, 4, 3, 2, 1],
peg2: [],
peg3: []};

const moveDisc = function (start, end) {
  const lastDiscStart = board[`peg${start}`].length - 1;
  const lastDiscEnd = board[`peg${end}`].length - 1;

  if (board[`peg${start}`][lastDiscStart] === undefined) {

    console.log('You must choose a peg that has a disc.');
  } else if (board[`peg${end}`][lastDiscEnd] > board[`peg${start}`][lastDiscStart] || board[`peg${end}`].length === 0) {

    console.log(`You moved disk${board[`peg${start}`].slice(-1)[0]} to ${`peg${end}`}.`);

    board[`peg${end}`].push(board[`peg${start}`].pop());
  } else {

    console.log('The disk can not be bigger than the one already on the peg.')
  }
  console.log(`--- ${board.peg1.map(x => x).join(' ')}`);
  console.log(`--- ${board.peg2.map(x => x).join(' ')}`);
  console.log(`--- ${board.peg3.map(x => x).join(' ')}`);
//Checking if the you have won everytime you move a disc, using setTimeout just to make sure it doesn't go to the top of the stack
  setTimeout( () => {
    if(board['peg2'].length === 5 || board['peg3'].length === 5){

    console.log('All discs are moved from peg1 to peg2 or peg3. You win and the game has been reset.');

    board['peg1'] = [5, 4, 3, 2, 1]; 
    board['peg2'] = [];
    board['peg3'] = [];
    }
  }, 0);
}