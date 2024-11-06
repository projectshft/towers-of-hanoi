// the game board to display with the 1st peg being the "start" peg
let board = [
  [5,4,3,2,1],
  [],
  []
]

// function to execute to make the board visible
function displayBoard() {
  console.clear()
  board.map(function(pegs) {
    console.log(`--- ${pegs}`)
    return
  })
}




// -- main game-play function -- // 


function moveDiscs(start, dest) {
  start--
  dest--

  // check if the starting peg has any discs to move
if (board[start].length === 0) {
  console.log('no discs to move')
  return
}

// a disc to move
const disc = board[start].pop()


// alert player of an invalid move
if (board[dest].length > 0 && board[dest][board[dest].length - 1] < disc) {
    console.log('cannot put a larger disc on a smaller disc')
    board[start].push(disc)
    return
  }

  // valid disc move
  board[dest].push(disc)
  displayBoard()
  determineWinner()

}


// -- end main game-play function -- // 




// winner 
function determineWinner() {
  const winningPeg = [1, 2, 3, 4, 5]

  if (board[1] === winningPeg || board[2] === winningPeg) {
    console.log('you won!')
    return
  }
}


// restart the game 
function restartGame() {
  console.log('new game')
  board = [
    [5, 4, 3, 2, 1],
    [],
    []
  ]
  displayBoard()
}


// display the board in the console
displayBoard()

// player can make moves (1 = board[0], 2 = board[1], 3 = board[2])
moveDiscs(1, 3)
moveDiscs(1, 2)