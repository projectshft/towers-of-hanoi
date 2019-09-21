//initial board
let board = [
  [3, 2, 1],
  [],
  []
]


//function to print board to console
let printBoard = function () {board.map(function(pegs){
  console.log("---" + pegs.join(""));
});
}



printBoard();

//const BoardState = function() {
  let counter = 0;
//counter letiable to track the number of moves

    let boardMove = function() {
//takes input from user which peg to remove from
    let pillarFrom = prompt("Enter the pillar number from which you want to move");
//change input into number form for comparison
      let pillarFrom2 = parseInt(pillarFrom);
//value of the disc at the pillar selected
      let pillarFromValue = board[pillarFrom - 1];
        pillarFromValue = pillarFromValue[(pillarFromValue.length - 1)];
//removes the last item in the array specified by the user
        let fromValue = board[pillarFrom2 - 1].pop();
        console.log(fromValue);
//checks the board for which moves are possible based on the selection of pillar they are moving from
        let possibleMoves = board.filter(function(moves){
            return (1 < moves[moves.length - 1])
        });
            console.log("You can move this disc to the following pegs: " + possibleMoves);
//takes input from user which peg to move item to
    let pillarTo = prompt("Enter the pillar to which you want to move");


//stores the last item in the to array for checking if it is a valid move
      let toValue = board[pillarTo - 1];
      toValue = toValue[toValue.length -1];
//compares value of item to move to the last item in the array specified to move to
      if (fromValue < toValue || toValue == undefined) {
//adds item removed to the specified peg
      board[pillarTo - 1].push(fromValue);
//increments counter by one for each move
      counter += 1;
      } else {alert("That's not a valid move")}

      printBoard();
/*
function to check if any item in the array is 3 items long(I tried checking (3,
2, 1 order, but couldn't get reduce to change the bolean value. so this could
be manipulated by putting the fist disc back on the original peg.))
*/
      let checkWinner = board.reduce(function(hasElement, pegs) {
        if (pegs.length === 3) {
        hasElement = true;
        }
        return hasElement;
      }, false);

      if (checkWinner) {
        alert("Congratulations! You won the game in " + counter + " moves." )
      };
      console.log(counter);
    }
  //}


  boardMove();
  boardMove();



/*
  return {
    boardMove: boardMove
  }
};

BoardState.boardMove();



console.log(myBoard);
*/
