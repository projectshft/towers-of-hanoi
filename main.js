//Towers of Hanoi Parsity Eval

//need to add limits to the size of board and number of pegs

let numOfPegs = 3
let numOfDiscs = 5

//create board array dynamically
const createBoard = function() {
  const board = [...Array(numOfPegs)].map((e, i) => {
    if(i === 0) {
      return [...Array(numOfDiscs).keys()].map(x => x + 1).sort((a,b) => b - a);
    } else {
      return Array()
    }
  })
  return board;
}
let board = createBoard();

//dynamically create boardState obj based on size of board
const boardState = {}
board.forEach((e ,i) => boardState[`peg${i + 1}`] = board[i]);

//function to validate whether moves are valid
const moveDiscValidator = function(from, to) {
  const fromPeg = boardState[`peg${from}`]
  const toPeg = boardState[`peg${to}`]

  //input validations
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

  //move type validations
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

//function to play the game
const moveDisc = function(from, to) {
  if(moveDiscValidator(from, to)) {
    let disc = boardState[`peg${from}`].pop();
    boardState[`peg${to}`].push(disc);
    console.log(board)
    draw();
  }
  board.forEach(element => {
    let printArray = element.map(e => `${e}`)
    console.log(`--- ${printArray.join(' ')}`)
  })
  checkWinner(); 
}


const checkWinner = function() {
  const completedPeg = [...Array(numOfDiscs).keys()].map(x => x + 1).sort((a,b) => b - a).join();
  for(peg in boardState) {
    if(peg !== 'peg1' && boardState[peg].join() === completedPeg) {
      console.log('Winner Winner Chicken Dinner!!');
      board = createBoard();
    }
    
  }
}

//p5 canvas drawing of game
const canvasWidth = 200 * numOfPegs;
const canvasHeight = 200;

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('p5-canvas')
  noLoop();
}

function draw() {
  background('#DFDCE3');
  /* need to push and pop each time the function is called 
  so the translate gets reset each call*/
  push()

  translate(0, canvasHeight/2); 
  scale(1,-1) //needed to flip the disc orientation horizontally

  // for loop drawing the discs and pegs
  for (i=0; i<board.length; i++){
    //creates pegs
    rectMode(CENTER)
    rect((i+1)*200-100, 0, 10, numOfDiscs*15, 2)
    for(j=board[i].length; j>=0; j--) {
      //creates discs
      if (typeof(board[i][j]) === 'number') {
        const discWidth = ((board[i][j]+1) * 20)
        rect((i+1)*200-100, (j * 10) - 33, discWidth, 10, 4)
        
      }  
    }
  }
  pop()
  

}
