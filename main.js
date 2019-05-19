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
    console.log('row is: ', row)
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

  // Take last disc from startRow and place disc in endRow
  // ONLY if the move is valid
  startBoard[startRow].pop() //selectedDisc
  startBoard[endRow].push()

  renderBoard()

}


// var moveDisc = function()
//   {
//     var popped = startBoard[0].pop();
//     console.log(popped);
//     startBoard[2].push(popped);
//     console.log(startBoard);
//   };

moveDisc(1, 2);