var BoardModule = function() {
  // Initialize board representing 3 pegs and 3 discs in starting position
  var board = [[3, 2, 1], [], []]

  // Print board status horizontally
  var boardPrint = function () {
    board.map(function (peg) {
      let boardString = "--- "
      peg.forEach(function (disc) {
        boardString += (" " + disc)
      })
      console.log(boardString)
    })
  }

  // Move disc from start peg to end peg
  function move(startPos, endPos) {
    var currentPegArr = board[startPos - 1]
    var targetPegArr = board[endPos - 1]
    var grabDisc = currentPegArr.pop();
    targetPegArr.push(grabDisc)
  }

  // Checks topmost disc of peg for potential moves
  function possibleMoves(peg) {
    const disc = peg[peg.length-1]
    
  }

  return {
    move: move,
    boardPrint: boardPrint
  }
}

var game = BoardModule();
game.boardPrint()
game.move(1, 3)
game.boardPrint()
game.move(1,3)
game.boardPrint()
