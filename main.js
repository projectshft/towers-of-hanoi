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
  peg3: board[2]
}

//when using the move function, it needs to be able to see what disc is on the peg of the 'from' and 'to' peg, and if it is a valid move or not. 

const moveDiscValidator = function(from, to) {
  // if(from === to) {
  //   console.log('you must move the disc to a different peg than the current')
  //   return false;
  // } 
  // if(boardState[`peg${from}`].length  === 0) {
  //   console.log('you must move from a peg that has a disc')
  //   return false;
  // }
  return true;


}

const moveDisc = function(from, to) {
  if (moveDiscValidator(from, to)) {
    let disc = boardState[`peg${from}`].pop();
    boardState[`peg${to}`].push(disc);
  }

  let printedBoard = board.map(element => {
    
  })
  console.log(printedBoard)
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

console.log(moveDisc(1, 2))

/* conditions of moves:
--you must move from a peg that actually has a disc, can't be empty
--you can move a smaller disc onto a larger disc or an empty peg
--cannot move from and to the same peg
*/
