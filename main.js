// Tracks Board State //
const gameBoardObj = {
  1: [5, 4, 3, 2, 1],
  2: [],
  3: []
}

// Handles Display of Game Board //
function renderGame() {
  Object.values(gameBoardObj).forEach((peg) => {
  const pegs = peg.toString()
  const gameString = `--- ${pegs}`
  
  const gameDisplay = gameString.split(",").join(" ")

  
  console.log(gameDisplay)
})}

// Renders Game Board in Console //
renderGame()

// Checks For Win Condition and Resets the Game //
function checkWinner() {

  const fullPeg = [5, 4, 3, 2, 1]
  
  const isWinningPeg = peg => JSON.stringify(gameBoardObj[peg]) === JSON.stringify(fullPeg)
  
  if (isWinningPeg(2) || isWinningPeg(3)) {
    console.log("Congratulations! You win!")
    console.log("-=New Game=-")
    gameBoardObj[1] = fullPeg
    gameBoardObj[2] = []
    gameBoardObj[3] = []
    renderGame()
  }
}

// Handles Movement of Discs //
function movePeg(startPeg, endPeg) {
  const emptyPeg = []
  const isEmptyPeg = peg => JSON.stringify(gameBoardObj[peg]) === JSON.stringify(emptyPeg)
  const startingPeg = gameBoardObj[startPeg]
  const endingPeg = gameBoardObj[endPeg]
  const discToMove = startingPeg[startingPeg.length - 1]
  const endPegDisc = endingPeg[endingPeg.length - 1]

  if (endPegDisc === undefined || endPegDisc > discToMove) {
    if (startPeg === endPeg) {
      console.log('Invalid Move: You must move the disc to a new peg. The board is still:')
      renderGame()
      return
    }else if (isEmptyPeg(startPeg)) {
      console.log('Invalid Move: You cannot move a disc that does not exist. The board is still:')
      renderGame()
      return
    }
    endingPeg.push(discToMove)
    startingPeg.pop()
    
    console.log('Move successful, board is now:')
    renderGame()
    
  } else {
    console.log("Invalid Move: Discs can only be placed on top of smaller discs. The board is still:")
    renderGame()
  }
  checkWinner()
}
