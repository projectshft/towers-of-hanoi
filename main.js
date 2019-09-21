
let board = [];
let numMoves = 0;
let initialBoard = '';
let numPegs = 0
let numDiscs = 0;
let fromPeg = 1, toPeg = 1;

const TowersModule = () => {
  const makeBoard = (numPegs=3, numDiscs) => {
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
    const stringBoard = board.map((arr) => {
      return `--- ${arr.join(' ')}`;
    });
    stringBoard.forEach((peg) => {
      console.log(peg);
    })
  
  };

  const viablePegs = (fromPeg) => {
    let result = [];
  
    const availablePegs = board.filter((peg) => {
      return peg.length === 0 || peg[peg.length-1] >= board[fromPeg-1][board[fromPeg-1].length-1];
    });

    availablePegs.forEach((peg) => {
      let index = board.findIndex((el) => {
        return peg === el;
      });
      result.push(index+1);
      
    })
    return result;
  };

  const moveDisc = (fromPeg, toPeg) => {
    const viable = viablePegs(fromPeg);
  
    if (viable.includes(toPeg)) {
      const item = board[fromPeg - 1][board[fromPeg-1].length-1];
      board[toPeg - 1].push(item);
      board[fromPeg-1].pop();
      ++numMoves
      renderBoard(board);
      checkWinner(board);
    } else console.log('You cannot move a larger disc on top of a smaller one.')
  
  };

  const checkWinner = () => {
    let result = [];

    board.forEach((peg) => {
      result.push(peg.reduce((acc, num) => {
        return acc + num;
      }, ''));
    })

    const winner = result.filter((pegStr) => pegStr === initialBoard);

    if (winner.length) {
      return console.log(`You win after ${numMoves} moves!`);
    }
  };  

  return {
    makeBoard: makeBoard,
    renderBoard: renderBoard,
    moveDisc: moveDisc
  };
}

const newGame = TowersModule();

document.getElementById('reset').addEventListener('click', (e) => {
  generateGameDOM();
})


/*
document.getElementById('toPeg').addEventListener('submit', function (e) {
  e.preventDefault();
  numDiscs = parseInt(document.querySelector('input[name="discs"]').value);
  newGame.makeBoard(numPegs,numDiscs);
  e.target.reset();  
})
*/

/* MOVE TO VIEWS.js */
const generateGameDOM = (note) => {
  numPegs = parseInt(prompt('Enter # of pegs'));
  numDiscs = parseInt(prompt('Enter # discs'));
  newGame.makeBoard(numPegs,numDiscs);

  // Create from peg form
  const fromPegFormEl = document.createElement('form');
  const fromPegInputEl = document.createElement('input');
  const fromPegInputSubmitEl = document.createElement('input');
  fromPegFormEl.setAttribute('id','fromPeg');
  fromPegInputEl.placeholder= 'enter peg to move from';
  fromPegInputEl.name = 'fromPeg';
  fromPegInputSubmitEl.setAttribute('type', 'submit');
  fromPegFormEl.appendChild(fromPegInputEl);
  fromPegFormEl.appendChild(fromPegInputSubmitEl);
  document.body.appendChild(fromPegFormEl)

  // Create to peg form
  const toPegFormEl = document.createElement('form');
  const toPegInputEl = document.createElement('input');
  const toPegInputSubmitEl = document.createElement('input');
  toPegFormEl.setAttribute('id','toPeg');
  toPegInputEl.placeholder= 'enter peg to move to';
  toPegInputEl.name = 'toPeg';
  toPegInputSubmitEl.setAttribute('type', 'submit');
  toPegFormEl.appendChild(toPegInputEl);
  toPegFormEl.appendChild(toPegInputSubmitEl);
  document.body.appendChild(toPegFormEl)

  document.getElementById('fromPeg').addEventListener('submit', function (e) {
    e.preventDefault();
    fromPeg = parseInt(document.querySelector('input[name="fromPeg"]').value);
    e.target.reset();
  });

  document.getElementById('toPeg').addEventListener('submit', function (e) {
    e.preventDefault();
    toPeg = parseInt(document.querySelector('input[name="toPeg"]').value);
    e.target.reset();
    newGame.moveDisc(fromPeg,toPeg);
  });

  // textEl.classList.add('list-item__title');
  // noteEl.appendChild(textEl);

  // // setup the link
  // noteEl.setAttribute('href', `/edit.html#${note.id}`);
  // noteEl.classList.add('list-item');   
  
  // // setup the status message
  // statusEl.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
  // statusEl.classList.add('list-item__subtitle');
  // noteEl.appendChild(statusEl);

  //return noteEl;
};






