console.log("To begin a game of Towers of Hanoi please create a")
console.log("new board using createBoard with the number of pegs")
console.log("and number of discs you would like to play with")
console.log("and the peg you would like to start on!")
console.log("\n")
console.log("example:")
console.log("createBoard(3, 3, 3)")
console.log("Will create this board:")
console.log("\n")
console.log("---")
console.log("---")
console.log("--- 3 2 1")

 var createBoard = function(numPegs, numDiscs, startPeg) {
   board = []
   moves = 0
   startPeg = startPeg
   fullStack = []

   for (var i = 0; i < numPegs; i++) {
     board.push([])

     if (i == startPeg-1) {
       for (var j = 0; j < numDiscs; j++) {
         board[i].push(numDiscs - j)
         fullStack.push(numDiscs - j)
       }
     }
   }

   currentBoard = {
     board:board,
     moves:moves,
     startPeg:startPeg,
     fullStack:fullStack
   }
   printBoard(currentBoard)
   console.log("To move a disc, use moveDisc() and")
   console.log("select the peg the disc is on")
   console.log("And the peg you would like to move the disc to.")
   console.log("\n")
   console.log("example:")
   console.log("moveDisc(2,3) will move the top disc from peg 2 to peg 3")
   return currentBoard
 }


 var printBoard = function(board) {
   board = currentBoard.board
   pegNum = 0
   printableBoard = board.map(function(peg) {
     printablePeg = peg.reduce(function(pegString, disc) {
       return pegString += " " + disc.toString() + " "
     },[])
     pegNum ++
     return pegNum.toString() + " ---" + printablePeg + "\n"
   })

   printableBoard.forEach(function(printableBoard) {
     console.log(printableBoard)
   })
   return "The current board:"
 }

 var moveDisc = function(originalPeg, desiredPeg) {
   board = currentBoard.board
   moves = currentBoard.moves
   fromPeg = board[originalPeg-1]
   toPeg = board[desiredPeg-1]
   validMove = 0

   if(board[originalPeg-1].length == 0) {
     console.log("There is no disc there!")
   } else {
     viableMoves = board.filter(function(peg){
       if (peg[peg.length - 1] > fromPeg[fromPeg.length - 1]) {
         moves ++
         return moves
      }
    })
    for (var i = 0; i < viableMoves.length; i ++) {
      if (toPeg[toPeg.length - 1] == viableMoves[i][viableMoves[i].length - 1]) {
        validMove ++
      }
    }
    if (validMove == 1 || toPeg.length == 0) {
      moves += 1
      toPeg.push(fromPeg[fromPeg.length - 1])
      board[originalPeg-1] = fromPeg.slice(0,fromPeg.length-1)

      printBoard(board)
      checkWinner(board)

      return "The current board:"
    } else {
      console.log("Not a valid move!")
    }
  }

   printBoard(board)
   checkWinner(board)


 }


 var checkWinner = function(board) {
   board = currentBoard.board
   moves = currentBoard.moves
   fullStack = currentBoard.fullStack
   startPeg = currentBoard.startPeg

   for (var i = 0; i < board.length; i ++) {
     thisPegWinner = 1
     if (board[i].length != fullStack.length) {
       thisPegWinner = 0
     }
     for (var j = 0; j < board[i].length; j ++) {
       if (board[i][j] != fullStack[j]) {
         thisPegWinner = 0
       }
     }
     if  (thisPegWinner == 1 && i != startPeg-1) {
       currentBoard.startPeg = i+1
       console.log("Winner!")
       console.log("It took you " + moves + " moves to complete the game!")
       console.log("You can continue playing on this board")
       console.log("or you can use createBoard to make a new one!")
       currentBoard.moves = 0
     }
   }
 }
