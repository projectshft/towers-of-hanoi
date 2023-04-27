// Make a game board that prints to console
let gameBoard = [[5,4,3,2,1], [], []];
function printGameBoard () {
  gameBoard.forEach(function(peg) {
    let row = "";
    peg.map(function(disc) {
      row += disc + " ";
    });
    console.log("---" + row );
  }) 
}