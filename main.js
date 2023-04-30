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
  //?? Maybe add a method that can be invoked to print the current board ??
  // Then could add the method below in the moveDisc function. maybe have to use 'this'
};

//prints boardObj horizontally. Able to use map here
boardObj.board.map(function (arr) {
  console.log('--- ' + arr.join(' '))
});

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

  boardObj.board.map(function (arr) {
    console.log('--- ' + arr.join(' '))
  });

  // need to add condition to announce winner and reset board
  //boardObj.board[1].includes(1, boardObj.board[1].length - 1)
  if (boardObj.board[1].includes(1, 4)) {
    console.log("Congratulations! You are the winner!");
    console.log("The board is ready for a new game.")

    //since this win condition knows the discs are on peg 2
    //the function removes the empty array and index 0 
    //then it adds a new empty array to the end of the array of arrays
    //creating a new set of 3 pegs with the discs all on the new peg 1
    boardObj.board.shift();
    boardObj.board.push([]);

    boardObj.board.map(function (arr) {
      console.log('--- ' + arr.join(' '))
    });

  } else if (boardObj.board[2].includes(1, 4)) {
    console.log("Winner! You have brought the world to an end!");
    console.log("Can you do it again?")

    //Same idea as above but this win is on peg 3
    //two empty array removed from the beginning and 2 empty arrays added to end
    boardObj.board.shift();
    boardObj.board.shift();
    boardObj.board.push([]);
    boardObj.board.push([]);

    boardObj.board.map(function (arr) {
      console.log('--- ' + arr.join(' '))
    });
  }
};

var checkWinner = function () {
  if (boardObj.board[1].includes(1, 4)) {
    console.log("Congratulations! You are the winner!");
    console.log("The board is ready for a new game.")

    //since this win condition knows the discs are on peg 2
    //the function removes the empty array and index 0 
    //then it adds a new empty array to the end of the array of arrays
    //creating a new set of 3 pegs with the discs all on the new peg 1
    boardObj.board.shift();
    boardObj.board.push([]);

    boardObj.board.map(function (arr) {
      console.log('--- ' + arr.join(' '))
    });

  } else if (boardObj.board[2].includes(1, 4)) {
    console.log("Winner! You have brought the world to an end!");
    console.log("Can you do it again?")

    //Same idea as above but this win is on peg 3
    //two empty array removed from the beginning and 2 empty arrays added to end
    boardObj.board.shift();
    boardObj.board.shift();
    boardObj.board.push([]);
    boardObj.board.push([]);

    boardObj.board.map(function (arr) {
      console.log('--- ' + arr.join(' '))
    });
  } else { 
    console.log("Sorry, You have not won yet! Keep going!")

    boardObj.board.map(function (arr) {
      console.log('--- ' + arr.join(' '))
    });    
  }
}