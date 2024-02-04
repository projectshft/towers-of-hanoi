let game = {}

function loadGame() {
  game.board = [
    [5, 4, 3, 2, 1],
    [],
    []
  ]

  game.winningPeg = [5, 4, 3, 2, 1],
  game.winner = false,
  game.moveCount = 0
}

function makeMove(currentPeg, destinationPeg) {
  currentPeg = game.board[currentPeg - 1];
  destinationPeg = game.board[destinationPeg - 1];

  let diskToMove = currentPeg[currentPeg.length - 1] /*?*/

  let currentDisk = destinationPeg[destinationPeg.length - 1]  /*?*/

  game.moveCount = game.moveCount + 1;

  if (diskToMove < currentDisk || currentDisk == undefined) {
    diskToMove = currentPeg.pop()

    destinationPeg.push(diskToMove) /*?*/


    printBoard();

    
  } else {
    
    console.log('Invalid Move 🔴')
  }
  
  checkWinner()

  return game.board
}

function printBoard() {
  game.board.map((peg) => {
    console.log(`--- ${peg}`);
  })
}

function checkWinner() {
  let won = game.board.some((peg) => peg.toString() === game.winningPeg.toString())
  if (won && game.moveCount !== 0) {
    game.winner = true;

    console.log("Winner! 🏆")
    
    loadGame()
  } else {
    console.log('Keep going!')
  }
}


// PROGRAM

// GAME SET UP
loadGame();

// PLAYGROUND

