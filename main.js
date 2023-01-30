//Towers of Hanoi Eval
console.log("Please refer to instructions above");
console.log("Starter code arrMove(board, 0, 0)");
console.log("Cheat code winningMoves()");
//Gameboards
var gameBoard = board2

var board = [
  [5, 4, 3, 2, 1], 
  new Array(), 
  new Array()
];

var board2 = [
  [5, 4, 3, 2, 1], 
  new Array(), 
  new Array()
];

//Cheat Code
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


//Function to map board play by play, move pieces, throw error if a larger number is placed on top of another and reset board

function arrMove(arr, oldIndex, newIndex) {
  var newBoard = arr.map( function (someVar){
    return someVar.map (function(arr2) {
      return arr2;
    });
  });
  board  = newBoard;

//Reset Function
  function winAndReset() {
    alert("You have won!  Hit ok to reset board");
   console.table(board2);
   board = board2
    };
//Comparison function used to check winner
  function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  };

  //Function to move pieces depending on rules
  function moveRule() {
    newBoard[newIndex].push(newBoard[oldIndex].pop(1));
  };
//Rules
  if (newBoard[oldIndex][newBoard[oldIndex].length - 1] > newBoard[newIndex][newBoard[newIndex].length - 1] ) {
    alert ("Illegal Move");
  } else {
    moveRule();
  };
//Tracks moves
  console.table(board);
//If Statement to check if game is won and then reset
  if (arrayEquals(newBoard[1], board[0])) {
    winAndReset();
  } else if(arrayEquals(newBoard[2], board[0])) {
    winAndReset();

  };
};
