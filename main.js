//Requirements: 
//We will need a board and will tilize a 2D array

//Must utilize a map function at least once to accomplish this part of the assignment.  The starting board will log the 2D array to the console like:


//There should be a behckWinner function that checks to see if the player has won the game(disc in original order but on different peg)
//once game is won the game should automatically end by announcing the winner(though console.log) and reset for a new game
//BONUS:  any tiem you iterate through the array, try and refrain from using for or while loops - try using helper methods

//GameBoard
var line1 = [5, 4, 3, 2, 1];
var line2 = new Array();
var line3 = new Array();
var board = [line1, line2, line3];

//Solution to the game invoke function to win or peak to cheat
var winningMoves =  function () {
  arrMove(board, 0, 2)
  arrMove(board, 0, 1);
  arrMove(board, 2, 1)
  arrMove(board, 0, 2)
  arrMove(board, 1, 0)
  arrMove(board, 1, 2)
  arrMove(board, 0, 2)
  arrMove(board, 0, 1);
  arrMove(board, 2, 0)
  arrMove(board, 0, 1);
  arrMove(board, 2, 0)
  arrMove(board, 1, 0)
  arrMove(board, 2, 1)
  arrMove(board, 0, 2)
  arrMove(board, 0, 1);
  arrMove(board, 2, 0)
  arrMove(board, 0, 1);
  arrMove(board, 0, 2)
  arrMove(board, 1, 2)
  arrMove(board, 1, 0)
  arrMove(board, 2, 0)
  arrMove(board, 1, 2)
  arrMove(board, 0, 1)
  arrMove(board, 0, 2)
  arrMove(board, 1, 2)
  arrMove(board, 2, 0)
  arrMove(board, 2, 1)
  arrMove(board, 0, 2)
  arrMove(board, 2, 1)
  arrMove(board, 2, 0)
  arrMove(board, 1, 2)
  arrMove(board, 2, 0)
  arrMove(board, 0, 2)
  arrMove(board, 1, 0)
  arrMove(board, 2, 0)
  arrMove(board, 1, 2)
  arrMove(board, 0, 2)
  arrMove(board, 0, 1);
  arrMove(board, 2, 1)
  arrMove(board, 0, 2)
  arrMove(board, 1, 0)
  arrMove(board, 1, 2)
  arrMove(board, 0, 2)
  };
  
//Displays Original Board
console.table(board);

//Function to create board, move piece and throw error if a larger number is placed on top of another

function arrMove(arr, oldIndex, newIndex) {
  var newBoard = arr.map( function (someVar){
    return someVar.map(function(arr2) {
      return arr2;
    });
  });

  function winAndReset() {
    alert("You have won");
  };

  function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  };

  
  function moveRule() {
    newBoard[newIndex].push(newBoard[oldIndex].pop(1));
  };

  if (newBoard[oldIndex][newBoard[oldIndex].length - 1] > newBoard[newIndex][newBoard[newIndex].length - 1] ) {
    alert ("Illegal Move");
  } else {
    moveRule();
  };

  if (arrayEquals(newBoard[1], line1)) {
    winAndReset();
  } else if(arrayEquals(newBoard[2], line1)) {
    winAndReset();
  };

  board  = newBoard;
  console.table(board);


};


winningMoves();

// console.table(board);


//I need a function to reset game 
// and then the resetBoard function can just be
// gameBoard = originalBoard
//To add func to resetBoard Helpful to have gameboard and original board arrMov
