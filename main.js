/** Board Class */
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
  var moveDisc = function (startPeg, endPeg) {
    // move disc if valid, else don't
  }

  /* function that checks if the user has won the game */
  var checkWinner = function () {
    // use reduce  here 
    // check if board is in original order
    // but in another peg
  }

  /** function that checks if the peg can be moved or not */
  var checkTopOfPeg = function () {
    // use filter here
  }

  var resetGame = function () {
    // start a new game
    // reset board state (or just create a new board object)
  }

  /** function that shows the current board state to user */
  var displayBoard = function () {
    state.board[2].push(" ");
    state.board.map(function (peg, idx) {
      console.log(`--- ${peg} \n`)
    });
    state.board[2].shift();
  }

  return {
    moveDisc: moveDisc,
    checkWinner: checkWinner,
    checkTopOfPeg: checkTopOfPeg,
    resetGame: resetGame,
    displayBoard: displayBoard,
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}

// function init() {
var board = Board([[3, 2, 1], [], []], 0);
board.displayBoard();
// }

// init();

function startGame() {
  // initialize board
  // var board = Board([[3, 2, 1], [], []], 0);
  // board.setAttribute('moves', 0)
  do {
    var gameFlag = true;
    var userInput = prompt('enter move: ex: ( 1, 3)');

    var input = userInput.split(",");
    var startPeg = parseInt(input[0], 10);
    var endPeg = parseInt(input[1], 10);

    if (startPeg === 1) {
      gameFlag = false;
    }
    // gameFlag = false;
    console.log(board.getAttribute('board'));
    // gameFlag = false;
  } while (gameFlag)
}