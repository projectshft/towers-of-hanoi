//Towers of Hanoi Parsity Eval

//initial board setup
const board = [
  [5, 4, 3, 2, 1],
  [],
  []
]

//object to track current state of board
const boardState = {
  peg1: board[0],
  peg2: board[1],
  peg3: board[2],
}


const moveDiscValidator = function(from, to) {
  const fromPeg = boardState[`peg${from}`]
  const toPeg = boardState[`peg${to}`]
  if(toPeg.length === 0) {
    console.log('you moved to an empty peg.  The updated board is:')
    return true;
  } else if(from === to) {
    console.log('you must move the disc to a different peg than the current')
    return false;
  } else if(fromPeg.length  === 0) {
    console.log('you must move from a peg that has a disc')
    return false;
  } else if(fromPeg[fromPeg.length - 1] < toPeg[toPeg.length -1]) {
    console.log('That move is valid.  The updated board is:')
    return true;
  } else {
    console.log('You cannot move a larger disc onto a smaller')
    return false;
  }
}

const moveDisc = function(from, to) {
  if(moveDiscValidator(from, to)) {
    let disc = boardState[`peg${from}`].pop();
    boardState[`peg${to}`].push(disc);
  }
  board.forEach(element => {
    let printArray = element.map(e => `${e}`)
    console.log(`--- ${printArray.join(' ')}`)
  })
  checkWinner(); 
}

const checkWinner = function() {
  if(boardState.peg2 === [5, 4, 3, 2, 1] || boardState.peg3 === [5, 4, 3, 2, 1]) {
    console.log('Winner Winner Chicken Dinner!!');
    board = [
      [5, 4, 3, 2, 1],
      [],
      []
    ]
  }
}



/* conditions of moves:
--can move a smaller disc onto a larger disc or an empty peg
--cannot move from and empty peg.  
--cannot move a larger disc onta a smaller disc
--cannot move from and to the same peg
*/
