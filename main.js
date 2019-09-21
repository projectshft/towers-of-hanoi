//initial board
let board = [
  [5, 4, 3, 2, 1],
  [],
  [],
  [],
  []
]

//function to print board to console
let printBoard = function () {board.map(function(pegs){
  console.log("---" + pegs.join(""));
});
}

printBoard();

const BoardState = function() {
/*counter able to track the number of moves to be stored inside variable
but use closure to continue to iterate with moves.
*/
  let counter = 0;

  let boardMove = function() {
//takes input from user which peg to remove from
  let pillarFrom = prompt("Number of moves: " + counter +
  " Enter the pillar number from which you want to move");
//change input into number form for comparison
  let pillarFrom2 = parseInt(pillarFrom);
//value of the disc at the pillar selected
  let pillarFromValue = board[pillarFrom2 - 1];
  pillarFromValue = pillarFromValue[pillarFromValue.length - 1];
//removes the last item on the peg specified by the user
  let fromValue = board[pillarFrom2 - 1].pop();
/*
checks the board for which moves are possible based
on the selection of pillar they are moving from. Since filter only returns an
array, this looks wonky in the console. It lists the actual array, not the peg
numbers that you can move to. And since empty arrays don't show up in the
console those appear to be only a comma.
*/
  let possibleMoves = board.filter(function(moves){
    return  (fromValue < moves[moves.length - 1] ||
    moves[moves.length - 1] === undefined);
  });
  console.log("You can move this disc to the following pegs: " + possibleMoves);
//takes input from user which peg to move item to
  let pillarTo = prompt("Enter the pillar to which you want to move");
//stores the last item in the to array for checking if it is a valid move
  let toValue = board[pillarTo - 1];
  toValue = toValue[toValue.length -1];
//compares value of item to move to the last item in the array specified to
//move to
  if (fromValue < toValue || toValue == undefined) {
//adds item removed to the specified peg
      board[pillarTo - 1].push(fromValue);
//increments counter by one for each move
      counter += 1;
  } else {
    board[pillarFrom2 - 1].push(fromValue);
    alert("That's not a valid move");
    }

  printBoard();
/*
function to check if any item in the array is 5 items long(I tried checking 5,
4, 3, 2, 1 order, but couldn't get reduce to change the bolean value. So this
couldbe manipulated by putting the fist disc back on the original peg.
*/
  let checkWinner = board.reduce(function(hasElement, pegs) {
    if (pegs.length === 5) {
    hasElement = true;
    }
    return hasElement;
  }, false);
//if user wins the games, resets the counter to 0 and the board to its original
//state
  if (checkWinner) {
    alert("Congratulations! You won the game in " + counter + " moves." );
    counter = 0;
    board = [
      [5, 4, 3, 2, 1],
      [],
      [],
      [],
      []
    ]
    printBoard();
  }
  }
//uses closure so boardmove can be invoked from the global scope, while
//protecting the count variable so that it doesn't reset after every move.
  return boardMove;
}

let playTheGame = BoardState();


//while loop so that the game will continue to play until user wins
while (true){
playTheGame();
}
