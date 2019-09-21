/* This is the classic Towers of Hanoi Game. Play consists of selecting the number of pegs and discs,
   and making moves from the top of a peg to another that is either empty or has a larger
   top disk (integer representation).  There is also a recursive three peg solution that prints to the
   console the actual moves and optimal total # moves, based on the number of discs entered. 
*/

// initialize key variables
let board = [];
let numMoves = 0;
let initialBoard = '';
let numPegs = 0
let numDiscs = 0;
let fromPeg = 1, toPeg = 1;

// create module for playing new games
const TowersModule = () => {
  const makeBoard = (numPegs = 3, numDiscs) => {
    let discs = [];
    for (let i = numDiscs; i >= 1; --i) {
      discs.push(i);
    }

    board.push(discs);
    for (let i = 1; i < numPegs; ++i) {
      board.push([]);
    }

    initialBoard = board[0].reduce((acc, num) => {
      return acc + num;
    }, '');

    return board;
  };

  const renderBoard = () => {
    let boardList = document.querySelector('ul');
    boardList.innerHTML = '';

    const stringBoard = board.map((arr) => {
      return `--- ${arr.join(' ')}`;
    });

    stringBoard.forEach((peg) => {
      let boardListEl = document.querySelector('ul');
      let pegEl = document.createElement('li');
      pegEl.setAttribute('style', 'list-style-type:none;');

      pegEl.innerHTML = peg;
      boardListEl.appendChild(pegEl);
      console.log(peg);
    })

  };

  // check to see what pegs are available 
  const viablePegs = (fromPeg) => {
    let result = [];

    // filter for available pegs
    const availablePegs = board.filter((peg) => {
      if (!board[fromPeg - 1]) {
        alert("That peg doesn't exist!");
        return;
      }
      // smaller on larger, any on empty
      return peg.length === 0 || peg[peg.length - 1] >= board[fromPeg - 1][board[fromPeg - 1].length - 1];
    });

    // get original index for each available peg
    availablePegs.forEach((peg) => {
      let index = board.findIndex((el) => {
        return peg === el;
      });
      result.push(index + 1);

    })
    return result;
  };

  const moveDisc = (fromPeg, toPeg) => {
    const viable = viablePegs(fromPeg);
    // if viable move, make it
    if (viable.includes(toPeg)) {
      const item = board[fromPeg - 1][board[fromPeg - 1].length - 1];
      board[toPeg - 1].push(item);
      board[fromPeg - 1].pop();
      ++numMoves
      renderBoard(board);
      checkWinner(board);
    } else {
      console.log("Make sure to move a disc on top of a smaller one!");
      alert('Make sure to move a disc on top of a smaller one!');
    }

  };

  const checkWinner = () => {
    let result = [];
    // get a string value for each peg to compare to initialBoard 
    board.forEach((peg) => {
      result.push(peg.reduce((acc, num) => {
        return acc + num;
      }, ''));
    })

    // filter the array of strings for the one that's the same as initialBoard
    const winner = result.filter((pegStr) => pegStr === initialBoard);

    // if there's a winner create dom elements and message it
    if (winner.length) {
      const h2El = document.querySelector('h2');
      h2El.innerText = `Good job - you did it in ${numMoves} moves!`;
      h2El.setAttribute('style', "color:blue");
      console.log(`Good job - you did it in ${numMoves} moves`);
      const inputEl = document.querySelectorAll('form');
      const boardEl = document.querySelector('ul');
      boardEl.innerHTML = '';
      inputEl.forEach((node) => { node.innerHTML = '' });
      
      // return to original text after five seconds
      setTimeout(() => { 
        location.reload();
        // h2El.innerText = 'Can you solve it?';
        // h2El.setAttribute('style', "color:black");    
      }, 5000);
    }
  };

  // object for rendering and changing the game
  return {
    makeBoard: makeBoard,
    renderBoard: renderBoard,
    moveDisc: moveDisc
  };
}

// create new game
const newGame = TowersModule(); 

// set event listener for reset button
document.getElementById('reset').addEventListener('click', (e) => {
  const boardListEl = document.querySelectorAll('form');
  if (boardListEl) boardListEl.forEach((node) => { node.innerHTML = '' });
  generateGameDOM();
})

// set event listener for the 3 peg recursive button
document.getElementById('algo-solve').addEventListener('click', (e) => {
  const discNumber = parseInt(prompt('How many disks?'));
  renderTowerThreePegs(discNumber, 'left', 'middle', 'right');
  console.log(`Number of moves: ${numMovesAlgo}`);
  numMovesAlgo = 0;
})

/* create dynamic dom elements for playing game */
const generateGameDOM = (note) => {
  board = []; 
  numPegs = parseInt(prompt('Enter # of pegs'));
  numDiscs = parseInt(prompt('Enter # discs'));
  newGame.makeBoard(numPegs, numDiscs);
  newGame.renderBoard();

  // Create from peg form
  const fromPegFormEl = document.createElement('form');
  const fromPegInputEl = document.createElement('input');
  const fromPegInputSubmitEl = document.createElement('input');
  fromPegFormEl.setAttribute('id', 'fromPeg');
  fromPegInputEl.placeholder = 'enter peg to move from';
  fromPegInputEl.name = 'fromPeg';
  fromPegInputSubmitEl.setAttribute('type', 'submit');
  fromPegFormEl.appendChild(fromPegInputEl);
  fromPegFormEl.appendChild(fromPegInputSubmitEl);
  document.body.appendChild(fromPegFormEl);

  // Create to peg form
  const toPegFormEl = document.createElement('form');
  const toPegInputEl = document.createElement('input');
  const toPegInputSubmitEl = document.createElement('input');
  toPegFormEl.setAttribute('id', 'toPeg');
  toPegInputEl.placeholder = 'enter peg to move to';
  toPegInputEl.name = 'toPeg';
  toPegInputSubmitEl.setAttribute('type', 'submit');
  toPegFormEl.appendChild(toPegInputEl);
  toPegFormEl.appendChild(toPegInputSubmitEl);
  document.body.appendChild(toPegFormEl);

  // Set event listeners for peg movement elements
  document.getElementById('fromPeg').addEventListener('submit', function (e) {
    e.preventDefault();
    fromPeg = parseInt(document.querySelector('input[name="fromPeg"]').value);
    e.target.reset();
  });

  document.getElementById('toPeg').addEventListener('submit', function (e) {
    e.preventDefault();
    toPeg = parseInt(document.querySelector('input[name="toPeg"]').value);
    e.target.reset();
    newGame.moveDisc(fromPeg, toPeg);
  });

};

// Recursive function for 3 pegs
let numMovesAlgo = 0
const renderTowerThreePegs = (numDisks, left, middle, right) => {
  // Base case
  if (numDisks === 1) {
    ++numMovesAlgo;
    console.log(`Move disk 1 from ${left} to ${right}`);
    return;
  } // else recurse
  else {
    renderTowerThreePegs(numDisks-1, left, right, middle);
    ++numMovesAlgo;
    console.log(`Move disk ${numDisks} from ${left} to ${right}`);
    renderTowerThreePegs(numDisks-1, middle, left, right);
  }
}









