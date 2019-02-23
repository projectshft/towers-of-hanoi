/** Board Module */
var Board = function (array, moves) {
  // state of board
  var state = {
    board: array,
    moves: moves
  }

  var setAttribute = function (attribute, value) {
    if (state.hasOwnProperty(attribute)) {
      state[attribute] = value;
    }
  }

  var getAttribute = function (attribute) {
    if (state.hasOwnProperty(attribute)) {
      return state[attribute];
    }
  }

  /** function that moves one disc to another peg */
  var moveDisc = function (moveOne, moveTwo) {
    var startPeg = state.board[moveOne - 1];
    var lastIndexOfStartPeg = startPeg.length - 1;
    var topDiscOfStartPeg = startPeg[lastIndexOfStartPeg];

    var endPeg = state.board[moveTwo - 1];

    var okPeg = true;
    if (endPeg.length !== 0) {
      okPeg = checkTopOfPeg(startPeg, endPeg);
    }

    if (!okPeg) {
      return false
    }

    startPeg.splice(lastIndexOfStartPeg, 1)
    endPeg.push(topDiscOfStartPeg);
    state.moves++
    return true;
  }

  /* function that checks if the user has won the game */
  var checkWinner = function () {
    // use reduce  here 
    // check if board is in original order
    // but in another peg
  }

  /** function that checks if the peg can be moved or not */
  var checkTopOfPeg = function (startPeg, endPeg) {
    var lastIndexOfStartPeg = startPeg.length - 1;
    var topDiscOfStartPeg = startPeg[lastIndexOfStartPeg];

    var lastIndexOfEndPeg = endPeg.length - 1;
    var topDiscOfEndPeg = endPeg[lastIndexOfEndPeg];

    var filteredPegs = state.board.filter(function (peg) {
      var index = peg.length - 1;
      return topDiscOfStartPeg < peg[index];
    });

    if (filteredPegs === undefined || filteredPegs.length === 0) {
      return false
    }

    if (topDiscOfStartPeg > topDiscOfEndPeg) {
      return false;
    }

    return true;
  }

  var resetGame = function () {
    // start a new game
    // reset board state (or just create a new board object)
  }

  /** function that shows the current board state to user */
  var displayBoard = function () {
    state.board.map(function (peg) {
      console.log('---', ...peg);
    });
  }

  return {
    moveDisc: moveDisc,
    checkWinner: checkWinner,
    resetGame: resetGame,
    displayBoard: displayBoard,
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
} // End Board Module 


var startingBoards = [[3, 2, 1], [], []];

// function init() {
var board = Board(startingBoards, 0);
console.log("Starting Board")
board.displayBoard();
// }


function makeMove() {
  var gameFlag;
  var userInput = prompt('enter move: ex: 1, 2)');


  do {

    try {
      var input = userInput.split(",");
      if (input.length !== 2) {
        userInput = prompt('Please enter two numbers');
      }

      var startPeg = parseInt(input[0], 10);
      var endPeg = parseInt(input[1], 10);

    } catch {
      console.log('GAME TERMINATED')
      gameFlag = false;
    }

    var moveStatus = board.moveDisc(startPeg, endPeg);

    if (!moveStatus) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still:")
      board.displayBoard();
      gameFlag = false;
    } else {
      console.log('That move was successful, board is now:');
      board.displayBoard();
    }

    gameFlag = false;
  } while (gameFlag)
}