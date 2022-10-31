var board = [[5, 4, 3, 2, 1],
[],
[]];

var currentBoard = {
  pegOne: board[0],
  pegTwo: board[1],
  pegThree: board[2]
}

console.log(currentBoard);
// we want to be able to print the board horizontally.  You MUST use a map function at least once to accomplish this part of the assignment.

function moveDisc(disc, peg) {
  // if disc is larger than the last disc on the peg, throw error - "you cannot move a larger disc on top of a smaller one, board is still:" + show board
  // otherwise, push disc to peg array and remove it from the array it was originally located
  // console.log "That move was successful, board is now:" + show board
}


function checkWinneer(board){
  // check board to see if [5, 4, 3, 2, 1] is on peg 2 or 3
}