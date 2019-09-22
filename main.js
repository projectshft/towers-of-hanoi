//initial board
let board = [
  [5, 4, 3, 2, 1],
  [],
  []
];
//variable that points to the value that user chooses for from column.
let pegFrom;
//variable that points to the value that user chooses for the to column.
let pegTo;
//function to print board to console.
let printBoard = function () {
  board.map(function(pegs) {
  console.log("---" + pegs.join(""));
  });
}

printBoard();

//takes input from user which peg to remove from.
let moveFromPeg = function() {
  pegFrom = prompt("Enter the peg number from which you want to move");
//validates that user entry is a valid selection.
    if (!((pegFrom == 1) || (pegFrom == 2) || (pegFrom == 3))) {
      alert("Please enter a valid  number between 1 and 3.");
      pegFrom = prompt("Let's try that again. Please enter a number " +
      "between 1 and 3.");
    }
//converts string from prompt into number form.
  pegFrom = parseInt(pegFrom);
  return pegFrom;
}

//takes input from user which peg to move item to.
let moveToPeg = function() {
  pegTo = prompt("Enter the peg to which you want to move");
//validates that user entry is a valid selection.
    if (!((pegTo == 1) || (pegTo == 2) || (pegTo == 3))) {
      alert("Please enter a valid number between 1 and 3.");
      pegTo = prompt("Let's try that again. Please enter a number between" +
      "1 and 3.");
    }
  pegTo = parseInt(pegTo);
  return pegTo;
}


//variable to store the state of the board.
const BoardState = function() {
/*
counter able to track the number of moves to be stored inside variable
but use closure to continue to iterate with moves.
*/
  let counter = 0;
  let boardMove = function() {
//executes moving functions.
  moveFromPeg();
//value of the disc at the peg selected.
  let pegFromValue = board[pegFrom - 1];
    pegFromValue = pegFromValue[pegFromValue.length - 1];
//removes the last item on the peg specified by the user.
  let fromValue = board[pegFrom - 1].pop();
/*
checks the board for which moves are possible based on the selection of peg
they are moving from. Since filter only returns an array, this looks wonky in
the console. It lists the actual array, not the peg/index numbers that you can
move to.
*/
  let possibleMoves = board.filter(function(moves) {
    return (fromValue < moves[moves.length - 1] ||
    moves.length === 0);
  });
  console.log("You can move this disc to the following pegs: " + possibleMoves);

  moveToPeg();

  let toValue = board[pegTo - 1];
    toValue = toValue[toValue.length -1];
//compares value of item to move to the last item in the array specified to
//move to.

  if (fromValue < toValue || toValue === undefined) {
//adds item to the specified peg.
      board[pegTo - 1].push(fromValue);
//increments counter by one for each move.
      counter += 1;
  } else {
      board[pegFrom - 1].push(fromValue);
      alert("That's not a valid move");
    }

  printBoard();
  console.log("Moves: " + counter);
/*
function to check if any item in the array is 5 items long. I tried checking 5,
4, 3, 2, 1 order, but couldn't get reduce to change the bolean value. So this
could be manipulated by putting the fist disc back on the original peg.
*/
  let checkWinner = board.reduce(function(hasElement, pegs) {
    if (pegs.length === 5) {
      hasElement = true;
    }
    return hasElement;
  }, false);
//if user wins the games, resets the counter to 0 and the board to its original
//state.
  if (checkWinner) {
    alert("Congratulations! You won the game in " + counter + " moves.");
    counter = 0;
    board = [
      [5, 4, 3, 2, 1],
      [],
      []
    ];
    printBoard();
  }

}
/*
Uses closure so boardmove can be invoked from the global scope, while
protecting the count variable so that it doesn't reset after every move.
*/
  return boardMove;
}

let playTheGame = BoardState();

//while loop so that the game will continue to play until user wins.
while (true){
  playTheGame()
};
