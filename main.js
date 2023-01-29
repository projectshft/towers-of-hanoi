//Welcome to towers of hanoi type arrMove(board, "from Index (0,1,2)", or "from index(0,1,2)"
//example arrMove(board, 0, 2)
//type "winningMoves()" in console to automatically win

//GameBoard
var line1 = [5, 4, 3, 2, 1];
var line2 = new Array();
var line3 = new Array();
var board = [line1, line2, line3];
var board2 = [line1, line2, line3];

var setToOriginal = function (arr) {
  var newBoard2 = arr.map( function (someVar){
    return someVar.map(function(arr2) {
      return arr2;
    });
  });
  board2 = newBoard2
  console.table(board2);
}
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
  board  = newBoard;


  function winAndReset() {
    alert("You have won");
    setToOriginal(board2);
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

  console.table(board);

  if (arrayEquals(newBoard[1], line1)) {
    winAndReset();
  } else if(arrayEquals(newBoard[2], line1)) {
    winAndReset();
  };
};


// winningMoves();