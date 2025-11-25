
// Create a board with 3 pegs using Array.map
// return a board: {
// [[5,4,3,2,1], [],[]] }
var newBoard = function () {
  var array = [1,2,3];
  var board = array.map(function (_,i) {
    if (i === 0) {
      return [5,4,3,2,1];
    } else {
      return [];
    }
  })
  return board;
}

// object that tracks current state of the board
var gameState = {
  1: [5,4,3,2,1],
  2: [],
  3: []
}

// checks if it's possible to move a disc to an adjacent peg.
// pop the last disk from the current peg and push it onto the new peg if possible
// check winner after every move
var movePeg = function (currentPeg, newPeg) {
  var currPeg = gameState[currentPeg];
  var nPeg = gameState[newPeg];

    if (nPeg.length === 0) {
      nPeg.push(currPeg[currPeg.length - 1]);
      currPeg.pop();
    } else if (nPeg.length === 5) {
      console.log("This peg is full, you cannot add anymore discs.")
    } else if (nPeg[nPeg.length -1] < currPeg[currPeg.length -1]) {
      console.log("You cannot place a bigger disc over a smaller disc.");
    } else {
      nPeg.push(currPeg[currPeg.length - 1]);
      currPeg.pop();
    }
     checkWinner();
    return gameState;
};

var winningPegConfig = [5,4,3,2,1];

// helper function to check if peg is the same as the winning peg config
var checkIfEqual = function (a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// check if peg 2 or 3 looks the same as the winning peg config
// if there is a match, declare winner and restart the game
var checkWinner = function () {
  if (checkIfEqual(gameState[2], winningPegConfig) || checkIfEqual(gameState[3], winningPegConfig)) {
  console.log("You've won!")
  startGame();
  }
}

// initializes a new game by creating a new board.
var startGame = function () {
  var boardArray = newBoard(); 
  gameState = {
    1: boardArray[0],
    2: boardArray[1],
    3: boardArray[2]
  };
  return gameState;
};