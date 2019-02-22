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
    // console.log("--- " + state.board[0]);
    // console.log("--- " + state.board[1]);
    // console.log("--- " + state.board[2])
    console.log(`Starting Board\n--- ${state.board[0]}\n--- ${state.board[1]}\n--- ${state.board[2]}`);
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

function init() {
  var board = Board([[3, 2, 1], [], []], 0);

  function showBoard() {
    board.displayBoard();
  }

  showBoard();
}

init();

function startGame() {
  // initialize board
  // var board = Board([[3, 2, 1], [], []], 0);
  // board.setAttribute('moves', 0)
  do {
    var gameFlag;
    var userInput = prompt('enter move: ex: ( 1, 3)');
    console.log(userInput);

    var input = userInput.split(",");
    var startPeg = parseInt(input[0], 10);
    var endPeg = parseInt(input[1], 10);

    // gameFlag = false;
    console.log(board.getAttribute('board'));
    // gameFlag = false;
  } while (gameFlag)
}