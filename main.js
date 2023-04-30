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
    [5, 4, 3, 2, 1],
    [],
    []
  ],
  winCondition: [5, 4, 3, 2, 1], 
  printBoard: function () {
    this.board.map(function (arr) {
      console.log('--- ' + arr.join(' '));
    });
  },
  resetBoard: function () {
    this.board = [
      [5, 4, 3, 2, 1],
      [],
      []
    ];
    this.winCondition = [5, 4, 3, 2, 1];
    this.printBoard();
    //resetBoard will just reset to the default of 3 pegs and 5 discs
  },
  createBoard: function (numPegs, numDiscs) {
    this.board = [];
  
    for (var i = 0; i < numPegs; i++) {
      this.board.push([]);
    }
  
    for (var j = numDiscs; j > 0; j--) {
    this.board[0].push(j);
    }
  
    this.winCondition = this.board[0];
  
    this.printBoard();
  },
  checkWinner: function () {
    var solutionCheck = boardObj.board.slice(1);

    if (solutionCheck.some(function(arr) {
      return arr.toString() === boardObj.winCondition.toString();
    })) {
      console.log("Congratulations! You are the winner!");
      console.log("The board is ready for a new game.")
  
      boardObj.resetBoard();
    } else {
      console.log("Sorry, you have not won yet! Keep going!")

      boardObj.printBoard();
    }
  }
};
//Print board to see the starting board.
boardObj.printBoard();

//move function with 2 arguments. fromPeg & toPeg (moving disc from 'fromPeg' to 'toPeg')
var moveDisc = function (fromPeg, toPeg) {
  //defining the peg arrays that will be used
  var fromArr = boardObj.board[fromPeg - 1];
  var toArr = boardObj.board[toPeg - 1];
  
  //need to create conditional statement. A disc cannot be placed on a smaller disc than itself
  //need to also create conditional for if there are no discs on the toPeg
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
     
  //boardObj.board[fromPeg - 1][fromArr.length - 1]; === disc to be moved
  //boardObj.board[toPeg - 1][toArr.length - 1]; === disc that will be below the disc being moved
/*
  boardObj.board.map(function (arr) {
    console.log('--- ' + arr.join(' '))
  }); */

  boardObj.printBoard();

  // need to add condition to announce winner and reset board
  // this will automatically end the game, announce the winner and reset the board for a new game
  for (var i = 1; i < boardObj.board.length; i++) {
    if (boardObj.board[i].toString() === boardObj.winCondition.toString()) {
      console.log("Congratulations! You are the winner!");
      console.log("The board is ready for a new game.")
      
      boardObj.resetBoard();
    }
  }

  //old code. Longer but made it possible to have multiple winning announcments.
  /* if (boardObj.board[1].toString() === [5, 4, 3, 2, 1].toString()) {
    console.log("Congratulations! You are the winner!");
    console.log("The board is ready for a new game.")
    
    boardObj.resetBoard();

  } else if (boardObj.board[1].toString() === [5, 4, 3, 2, 1].toString()) {
    console.log("Winner! You have brought the world to an end!");
    console.log("Can you do it again?")

    boardObj.resetBoard();
  } */
};
