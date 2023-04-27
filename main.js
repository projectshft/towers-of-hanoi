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
printGameBoard();

// Move disc on board
function moveDisc(fromPeg, toPeg) {
  let from = gameBoard[fromPeg - 1];
  let to = gameBoard[toPeg - 1];
  let disc = from[from.length - 1];
  if (!disc){
    console.log("Oops, no disc on peg " + fromPeg);
  } else if (to.length > 0 && to[to.length - 1] < disc) {
    console.log("You cannot put a bigger disc on a smaller one");
  } else {
    from.pop();
    to.push(disc);
    console.log("You move disc " + disc + " from peg " + fromPeg + " to peg " + toPeg);
  }
}

// Check for winner, can't be on the original peg to win
function checkWinner() {
  return gameBoard[1].length === 5 || gameBoard[2].length === 5;
}
// Play the game 
function playGame() {
  printGameBoard();
  while (!checkWinner()) {
    let fromPeg = parseInt(prompt("Select a peg to move"));
    let toPeg = parseInt(prompt("Select where to move the peg"));
    moveDisc(fromPeg, toPeg);
    printGameBoard();
  }
  console.log("You WON!");
  gameBoard = [[5,4,3,2,1],[],[]];
}
playGame();