var board = [
  [5, 4, 3, 2, 1],
  [],
  [1]
];



// we want to be able to print the board horizontally.  You MUST use a map function at least once to accomplish this part of the assignment.
var stringBoard = board.map(element => {
  return "--- " + element.join(' ');
})


var showBoard = function() {
  return stringBoard.join("\n")
}

var currentBoard = {
  pegOne: board[0],
  pegTwo: board[1],
  pegThree: board[2]
}

function moveDisc(disc, peg) {

  var pegToMove = board[peg - 1]; 
  var topDiscOnPeg = pegToMove[pegToMove.length - 1]
  // check if disc is larger than the current disc at the top of the peg - if true, log error
  if (disc > topDiscOnPeg) {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:\n" + showBoard());
   
  // } else {
    // push disc to pegToMove
  //   pegToMove.push(disc);
    // remove disc from peg that has its value

    // console.log "That move was successful, board is now: " + printBoard

  }
 
}

console.log(moveDisc(3, 3))

//   // otherwise, push disc to peg array and remove it from the array it was originally located
//   // console.log "That move was successful, board is now:" + show board
// }


// function checkWinneer(board){
//   // check board to see if [5, 4, 3, 2, 1] is on peg 2 or 3
// }