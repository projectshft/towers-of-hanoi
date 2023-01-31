//Towers of Hanoi Eval
console.log("Please refer to instructions above");
console.log("Starter code arrMove(0, 0)");
console.log("Cheat code winningMoves()");
//Gameboards

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
  arrMove(0, 2)
  arrMove(0, 1);
  arrMove(2, 1)
  arrMove(0, 2)
  arrMove(1, 0)
  arrMove(1, 2)
  arrMove(0, 2)
  arrMove(0, 1);
  arrMove(2, 0)
  arrMove(0, 1);
  arrMove(2, 0)
  arrMove(1, 0)
  arrMove(2, 1)
  arrMove(0, 2)
  arrMove(0, 1);
  arrMove(2, 0)
  arrMove(0, 1);
  arrMove(0, 2)
  arrMove(1, 2)
  arrMove(1, 0)
  arrMove(2, 0)
  arrMove(1, 2)
  arrMove(0, 1)
  arrMove(0, 2)
  arrMove(1, 2)
  arrMove(2, 0)
  arrMove(2, 1)
  arrMove(0, 2)
  arrMove(2, 1)
  arrMove(2, 0)
  arrMove(1, 2)
  arrMove(2, 0)
  arrMove(0, 2)
  arrMove(1, 0)
  arrMove(2, 0)
  arrMove(1, 2)
  arrMove(0, 2)
  arrMove(0, 1);
  arrMove(2, 1)
  arrMove(0, 2)
  arrMove(1, 0)
  arrMove(1, 2)
  arrMove(0, 2)
  };
  
//Displays Original Board
console.table(board);


//Function to map board play by play, move pieces, throw error if a larger number is placed on top of another and reset board

function arrMove(oldIndex, newIndex) {
  board = board.map( function (someVar){
    return someVar.map (function(arr2) {
      return arr2;
    });
  });
  

//Reset Function
  function winAndReset() {
    alert("You have won!  Hit ok to reset board");
   board2.forEach(function(item) {
    console.log(`--- ${item}`)
   })
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
    board[newIndex].push(board[oldIndex].pop(1));
  };
//Rules

  if (board[oldIndex][board[oldIndex].length - 1] > board[newIndex][board[newIndex].length - 1] ) {
    alert ("Illegal Move");
  } else {
    moveRule();
  };
//Tracks moves
board.forEach(function (peg) {
    console.log(`--- ${peg}`)
})
//If Statement to check if game is won and then reset
  if (arrayEquals(board[1], board2[0])) {
    console.log("board[1]", board[1], "board[0]", board[0])
    winAndReset();
  } else if(arrayEquals(board[2], board2[0])) {
    winAndReset();
  };
};
