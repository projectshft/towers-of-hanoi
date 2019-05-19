// import { start } from "repl";

/*
1. Prompt user for starting peg and ending peg
2. Validate move
3. If move is allowed, move disc, otherwise don't and log error
4. After successful move, check to see if game is won
5. Rinse/repeat for each move until the game is won
*/


var startBoard = [
  ['3', '2', '1'],
  [],
  []
];

var peg = ["--- "];


// Function to display the board
const renderBoard = () => {
  var printBoard = startBoard.map(function(row) {

    var discs = row.join(' ')
    return peg + discs
  })
  
  printBoard.forEach(function(row) {
    console.log(row)
  })
}

renderBoard()

      
// Function to move a disc
var moveDisc = function(start, end) {
  console.log('start: ', start, 'end: ', end)

  startRow = start-1
  endRow = end-1

  console.log('startRow: ', startRow, 'endRow: ', endRow)

  // Identify last disc from startRow as the disc to move
  var poppedDisc = startBoard[startRow][startBoard[startRow].length-1]
  console.log('poppedDisc: ', poppedDisc)

    // If move is not valid
    if (poppedDisc > startBoard[endRow][startBoard[endRow].length-1] ) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
      renderBoard()
    } 
    // Else, take last disc from startRow and place disc in endRow
    else {
      console.log('That move was successful, board is now:')
      startBoard[startRow].pop() 
      startBoard[endRow].push(poppedDisc)
      renderBoard()
    }
}

// Function to check if game has been won



moveDisc(1, 2)
moveDisc(1, 2)