//creating pegs then the board. Wonder if this matters. 
/*
var peg1 = [5, 4, 3, 2, 1];
var peg2 = [];
var peg3 = [];

var board1 = [peg1, peg2, peg3];

board1.map(arr => console.log('--- ' + arr));
*/

// 2D array as the board without creating peg variables
/*
var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];

//prints the board horizontally to the console
board.map(arr => console.log('--- ' + arr));
*/

// setting up the board as an object
/*
var boardObj = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: []
};

//prints boardObj horizontally. Does not use map though
for (prop in boardObj) {
  console.log('--- ' + boardObj[prop]);
} */

// setting up the board as an object (object of objects in an array??)
var boardObj = {
  board: [
    [1],
    [5, 4, 3, 2],
    []
  ], 
};


//prints boardObj horizontally. Able to use map here
boardObj.board.map(function (arr) {
  console.log('--- ' + arr)
});

//move function with 2 arguments. fromPeg & toPeg (moving disc from 'fromPeg' to 'toPeg')
var moveDisc = function (fromPeg, toPeg) {
  //defining the peg arrays that will be used
  var fromArr = boardObj.board[fromPeg - 1];
  var toArr = boardObj.board[toPeg - 1];
  var winCondition1 = [[], [5, 4, 3, 2, 1], []];
  var winCondition2 = [[], [], [5, 4, 3, 2, 1]];

  //need to create conditional statement. A disc cannot be placed on a smaller disc than itself
  //need to also create conditional for if there are no discs on the toPeg
  //if (boardObj.board === winCondition1 || boardObj.board === winCondition2) 
  if (!fromArr[0]) {
    console.log('There is no disc on this peg. Please try again. The board is still:')
    } else if (!toArr[0]) {
  
    toArr.push(fromArr.pop()); 

    console.log('Disc moves to empty peg ' + toPeg + '. The board is now:');
    } else if (fromArr[fromArr.length - 1] > toArr[toArr.length - 1]) {
    
    console.log('You cannot move a larger disc on top of a smaller one, board is still:');
    } else if (fromArr[fromArr.length - 1] < toArr[toArr.length - 1]) {
    toArr.push(fromArr.pop()); 

    console.log('Disc moves to peg ' + toPeg + '. The board is now:');
    }
  
  // need to add condition so to announce winner and reset board
  

    
  
  //boardObj.board[fromPeg - 1][fromArr.length - 1]; === disc to be moved
  //boardObj.board[toPeg - 1][toArr.length - 1]; === disc that will be below the disc being moved

   /* disc = board[fromPeg - 1].pop();
  board[toPeg - 1].push(disc); 
  toArr.push(fromArr.pop()); 
  */
  boardObj.board.map(function (arr) {
    console.log('--- ' + arr)
  });
};

