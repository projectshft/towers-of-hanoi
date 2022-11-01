var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];

// we want to be able to print the board horizontally.  You MUST use a map function at least once to accomplish this part of the assignment.
var stringBoard = board.map(element => {
  return "--- " + element.join(' ');
});


var showBoard = function() {
  return stringBoard.join("\n")
}

var currentBoard = {
  pegOne: board[0],
  pegTwo: board[1],
  pegThree: board[2],
  hasWinner: false
}

function moveDisc(disc, peg) {
  // locate peg in array (index of board)
  var pegToMove = board[peg - 1]; 
  // identify the current disc on top of the peg
  var topDiscOnPeg = pegToMove[pegToMove.length - 1]
  // check if disc is larger than the current disc at the top of the peg - if true, log error
  if (disc > topDiscOnPeg) {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:\n" + showBoard());
  } else {
    // find disc on board
    for (var i = 0; i < board.length; i++) {
      var currentPeg = board[i];
      var topDisc = currentPeg[currentPeg.length - 1];
      // if disc is equal to top disc on peg
      if (disc === topDisc) {
      // remove 
        currentPeg.pop();
      } 
    }
  } 
  // push disc to pegToMove
  pegToMove.push(disc);
  console.log("That move was successful, board is now:\n" + showBoard());
}
console.log(board);
console.log(showBoard());
console.log(moveDisc(1, 3));


// function checkWinneer(board){
//   // check board to see if [5, 4, 3, 2, 1] is on peg 2 or 3
// }