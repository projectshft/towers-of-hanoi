const originalBoard = [
   ["1", "2", "3"],
   ["4", "5", "6"],
   ["7", "8", "9"]
];

const flatBoard = [].concat.apply([], originalBoard);

let modifiedBoard = flatBoard.slice();

const namer1 = function(typeName) {
   players.player1.name = typeName
}

const namer2 = function(typeName) {
   players.player2.name = typeName
}

const players = {
   player1: {
      xOrO: "X",
      namer: namer1
   },
   player2: {
      xOrO: "O",
      namer: namer2
   }
}

console.log("Please input player names with functions namer1() and namer2(), and the position you would like to play with the play() function.")
console.log("The Board:")
console.log(modifiedBoard.slice(0, 3).join(""))
console.log(modifiedBoard.slice(3, 6).join(""))
console.log(modifiedBoard.slice(6, 9).join(""))

const makeMove = function(whichPosition) {
   if (theGame.currentTurn === 1) {
      theGame.theBoard.splice(whichPosition - 1, 1, players.player1.xOrO)
   } else {
      theGame.theBoard.splice(whichPosition - 1, 1, players.player2.xOrO)
   }
}

let theGame = {
   theBoard: modifiedBoard,
   updateBoard: makeMove,
   movesMade: 0,
   currentTurn: 1,
   winStatus: 0
}

const gameChecker = function() {
   if (theGame.theBoard[0] === theGame.theBoard[1] && theGame.theBoard[1] === theGame.theBoard[2] ||
      theGame.theBoard[3] === theGame.theBoard[4] && theGame.theBoard[4] === theGame.theBoard[5] ||
      theGame.theBoard[6] === theGame.theBoard[7] && theGame.theBoard[7] === theGame.theBoard[8] ||
      theGame.theBoard[0] === theGame.theBoard[3] && theGame.theBoard[3] === theGame.theBoard[6] ||
      theGame.theBoard[1] === theGame.theBoard[4] && theGame.theBoard[4] === theGame.theBoard[7] ||
      theGame.theBoard[2] === theGame.theBoard[5] && theGame.theBoard[5] === theGame.theBoard[8] ||
      theGame.theBoard[0] === theGame.theBoard[4] && theGame.theBoard[4] === theGame.theBoard[8] ||
      theGame.theBoard[2] === theGame.theBoard[4] && theGame.theBoard[4] === theGame.theBoard[6]) {
      theGame.winStatus = 1
   }
}

const gameWinnerPrint = function() {
   if (theGame.winStatus === 0 && theGame.currentTurn === 1) {
      console.log("Make a move " + players.player1.name)
   } else if (theGame.winStatus === 0 && theGame.currentTurn === 0) {
      console.log("Make a move " + players.player2.name)
   } else if (theGame.winStatus === 1 && theGame.currentTurn === 1) {
      boardResetter.call()
      console.log(players.player2.name + " is the winner! Resetting board.")
   } else if (theGame.winStatus === 1 && theGame.currentTurn === 0) {
      boardResetter.call()
      console.log(players.player1.name + " is the winner! Resetting board.")
   }
}

const tieChecker = function() {
   if (theGame.winStatus === 0 && theGame.movesMade > 8) {
      boardResetter.call()
      console.log("It's a tie! Resetting board.")
   }
}

const boardResetter = function() {
   if (theGame.winStatus === 1) {
      theGame.theBoard = flatBoard,
         theGame.movesMade = 0,
         theGame.currentTurn = 1,
         theGame.winStatus = 0
   }
}

let play = function(num) {
   theGame.updateBoard(num)
   theGame.movesMade++
      if (theGame.currentTurn === 1) {
         theGame.currentTurn--
      } else {
         theGame.currentTurn++
      }
   gameChecker.call()
   gameWinnerPrint.call()
   console.log(theGame.theBoard.slice(0, 3).join(""))
   console.log(theGame.theBoard.slice(3, 6).join(""))
   console.log(theGame.theBoard.slice(6, 9).join(""))
}
