//Requirements: 
//We will need a board and will tilize a 2D array

//Must utilize a map function at least once to accomplish this part of the assignment.  The starting board will log the 2D array to the console like:


//There should be a behckWinner function that checks to see if the player has won the game(disc in original order but on different peg)
//once game is won the game should automatically end by announcing the winner(though console.log) and reset for a new game
//BONUS:  any tiem you iterate through the array, try and refrain from using for or while loops - try using helper methods


//I need 3 array
var line1 = [5, 4, 3, 2, 1];
var line2 = new Array();
var line3 = new Array();

var winningArray = [5, 4, 3, 2, 1];

var board = [line1, line2, line3];


console.table(board);

//when mod args that are sent insdie func you can have uninted side effect could change board
//arr and obj are pass by reference

//Function to create board, move piece and throw error if a larger number is placed on top of another

function arrMove(arr, oldIndex, newIndex) {
  var newBoard = arr.map( function (someVar){
    return someVar.map(function(arr2) {
      return arr2;
    });
  });


  function moveRule() {
    newBoard[newIndex].push(newBoard[oldIndex].pop(1));
  };

  if (newBoard[oldIndex][newBoard[oldIndex].length - 1] > newBoard[newIndex][newBoard[newIndex].length - 1] ) {
    alert ("Illegal Move");
  } else {
    moveRule();
  };

  board  = newBoard;
};

//Winning Moves
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


console.table(board);
console.log(board[2]);



// var sam21 = board.map(function(arr) {
//   return arr.indexOf(3)
// });
//  console.log(sam21);


// console.log(winningArray);
// console.log(board[2]);
// if (board[2] == winningArray) {
//   alert("Congrats youve won");
// }


//I need a function to check winner and reset game 
//arrMove will modify game board meaning original board will never change.
// and then the resetBoard function can just be
// gameBoard = originalBoard
//To add func to resetBoard Helpful to have gameboard and original board arrMov

//To add function for win

// var checkWin = function (arr) {
//   if () {

//   }
// }

// var resetBoard = function (arr)  {
//   gameBoard = originalBoard;
// }