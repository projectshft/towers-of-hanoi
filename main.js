//Towers of Hanoi Parsity Eval

let numOfPegs = 5
let numOfDiscs = 6

//dynamically create board based on user input
const board = [...Array(numOfPegs)].map((e, i) => {
  if(i === 0) {
    return Array.from(Array(numOfDiscs).keys()).map(x => x + 1).sort((a,b) => b - a);;
  } else {
    return Array()
  }
})

//dynamically create boardState obj based on size of board
const boardState = {}
board.forEach((e ,index) => boardState[`peg${index + 1}`] = board[index]);


const moveDiscValidator = function(from, to) {
  const fromPeg = boardState[`peg${from}`]
  const toPeg = boardState[`peg${to}`]
  //add more rigid testing for parameters 
  if(typeof(from) !== 'number' || typeof(to) !== 'number') {
    console.log('Only number accepted')
    return false;
  } else if (from % 1 !== 0 || to % 1 !== 0) {
    console.log('Please only whole numbers')
    return false;
  } else if (from < 1 || from > numOfPegs || to < 1 || to > numOfPegs) {
    console.log(`Please only choose pegs within the range of 1 - ${numOfPegs}.`)
    return false;
  }
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
--must be within the range of the size of the board
--must only be a number
--must be whole number
*/
