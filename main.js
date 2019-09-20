var BoardModule = function() {
  // Initialize board representing 3 pegs and 3 discs in starting position
  let board = [[3, 2, 1], [], []]

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
    var acceptableMove = false;
    var currentPegArr = board[startPos - 1]
    var targetPegArr = board[endPos - 1]
    var potentialPegs = possibleMoves(currentPegArr)

    potentialPegs.forEach(function (peg) {
      if (peg == targetPegArr){
        acceptableMove = true;
      } 
    })
    if (acceptableMove === true) {
      var grabDisc = currentPegArr.pop();
      targetPegArr.push(grabDisc)
    } else {
      console.log('AH AH AH')
    }
    boardPrint();
  }

  // Checks topmost disc of peg for potential moves
  function possibleMoves(selectedPeg) {
    var disc = selectedPeg[selectedPeg.length-1]
    var acceptablePegs = board.filter(function(peg) {
      if(disc < peg[peg.length - 1] || peg.length == 0) {
        return true;
      }
        return false;
    })
    return acceptablePegs;
  }


  return {
    move: move,
    boardPrint: boardPrint,
    possibleMoves: possibleMoves
  }
}

var game = BoardModule();
game.boardPrint()
game.move(1, 2)
game.move(1, 3)
game.move(1, 3)
game.move(3, 1)
