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
    // move disc by calling checkTopOfPeg
    var okPeg = checkTopOfPeg(startPeg);
    console.log(okPeg);
    if (okPeg === undefined || okPeg.length === 0) {
      // if not true don't move
      // return false
      console.log('empty array bro')
    }
    // if true do the shifting

    // return true
  }

  /* function that checks if the user has won the game */
  var checkWinner = function () {
    // use reduce  here 
    // check if board is in original order
    // but in another peg
  }

  /** function that checks if the peg can be moved or not */
  var checkTopOfPeg = function (startPeg) {
    // use filter here
    var userPeg = state.board[startPeg - 1];
    var lastIndex = userPeg.length - 1;
    var topUserDisc = userPeg[lastIndex];
    // console.log(topUserDisc);
    var filteredPegs = state.board.filter(function (peg) {
      var len = peg.length;
      return topUserDisc < peg[len - 1];
    });

    return filteredPegs;

  }

  var resetGame = function () {
    // start a new game
    // reset board state (or just create a new board object)
  }

  /** function that shows the current board state to user */
  var displayBoard = function () {
    console.log("Current Board")
    state.board[2].push(" ");
    state.board.map(function (peg) {
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
var board = Board([[1, 3, 4], [2, 5], [1, 3], [2, 1, 6]], 0);
board.displayBoard();
// }


function startGame() {
  var gameFlag = true;
  var userInput = prompt('enter move: ex: 1, 2)');



  do {

    try {
      // console.log(input.length);
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

    // Continue with game logic
    // do valid case

    board.moveDisc(startPeg, endPeg);






    if (startPeg === 1) {
      gameFlag = false;
    }
  } while (gameFlag)
}