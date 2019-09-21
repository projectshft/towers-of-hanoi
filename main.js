const welcome = "Welcome to Towers of Hanoi! Input 'game.move(start, end)' to move your disc! Input 'game.newGame()' for a new game."

var BoardModule = function() {
  let board;
  let hasWon;
  let discNum;
  let pegNum
  // Initialize board representing prompted pegs and discs in starting position
  function initGame() {
    console.log(welcome);
    board = [[]];
    pegNum = prompt('How many pegs would you like? (Recommend 3 to start)')
    discNum = prompt('How many discs to play with (Recommend 3 to start)')
    for (var i = discNum; i > 0; i--) {
      board[0].push(i)
    }
    

    for (var i = 1; i < pegNum; i++) {
      board[i] = [];
    }
    //board = [[3, 2, 1], [], []]
    //discNum = board[0].length;
    hasWon = false;
    boardPrint();
  }
  
  // Checks current board state checking if user won game
  function checkWinner() {
    if (board[0].length === 0) {
      hasWon = board.reduce(function (prevCondition, peg) {
        if (peg.length == discNum) {
          prevCondition = true;
        }
        return prevCondition;
      }, false)
    }
  }

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

  // Move disc from start peg to end peg if allowed
  function move(startPos, endPos) {
    var acceptableMove = false;
    var currentPegArr = board[startPos - 1]
    var targetPegArr = board[endPos - 1]

    // Checks for potential moves via possibleMoves function
    // If target array is found in possibleMoves, flag as acceptable move
    var potentialPegs = possibleMoves(currentPegArr)
    potentialPegs.forEach(function (peg) {
      if (peg == targetPegArr){
        acceptableMove = true;
      } 
    })

    if (acceptableMove === true) {
      var grabDisc = currentPegArr.pop();
      targetPegArr.push(grabDisc)
      console.log("Move complete! Board state is: ")
    } 
      else {
      console.log("Nope - can't move larger disc on top of smaller one. Board state is :")
    }
    boardPrint();
    checkWinner(); 
    if(hasWon) {
      console.log('WINNER WINNER CHICKEN DINNER')
      initGame();
    }
    
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
    newGame: initGame
  }
}

var game = BoardModule();
game.newGame()
game.move(1,3)
game.move(1,2)
game.move(3,2)
game.move(1,3)
game.move(2,1)
// game.move(2,3)
// game.move(1,3)
//game.startnew()