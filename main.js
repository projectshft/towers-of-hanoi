// Initialize board representing 3 pegs and 3 discs in starting position
var board = [[3,2,1],[],[]]

// Print board status horizontally
var boardPrint = function() {board.map(function (peg) {
    let boardString = "--- "
    peg.forEach(function(disc) {
      boardString += (" " + disc)
    })
  console.log(boardString)
})
}

boardPrint();

// Move disc from start peg to end peg
function move(startPos, endPos) {
  // Find top disc(smallest) in startPos array

  // Pop it off and place into endPos array


}