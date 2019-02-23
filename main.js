/** 
 * Board Module 
 * @param {array} array - The starting board 
 * @param {Int} moves - Keeps tracks of the number of moves
 */
var Board = function (array, moves) {
  // state of board
  var state = {
    board: array,
    moves: moves
  }

  /**
   * Setter 
   * @param {String} attribute - The attribute that will be changed
   * @param {Any} value - The value the attribute will be set to
   */
  var setAttribute = function (attribute, value) {
    if (state.hasOwnProperty(attribute)) {
      state[attribute] = value;
    }
  };

  /** 
   * Getter 
   * @param {attribute} attribute - The attribute we want to get
   */
  var getAttribute = function (attribute) {
    if (state.hasOwnProperty(attribute)) {
      return state[attribute];
    }
  };

  /** 
   * function that moves one disc to another peg, returns a boolean 
   * @param {Int} moveOne - The starting peg 
   * @param {Int} moveTwo - The ending peg 
   */
  var moveDisc = function (moveOne, moveTwo) {
    var startPeg = state.board[moveOne - 1];
    var lastIndexOfStartPeg = startPeg.length - 1;
    var topDiscOfStartPeg = startPeg[lastIndexOfStartPeg];

    var endPeg = state.board[moveTwo - 1];

    // boolean used to control the move status, it its valid or not
    var pegIsOk = true;

    // if the endPeg is not empty, preform a check to make sure the move is valid
    if (endPeg.length !== 0) {
      pegIsOk = checkTopOfPeg(startPeg, endPeg);
    }

    if (!pegIsOk) {
      return false
    }

    startPeg.splice(lastIndexOfStartPeg, 1)
    endPeg.push(topDiscOfStartPeg);
    state.moves++
    return true;
  };

  /** 
   * function that checks if the disc can be moved or not, returns a boolean 
   * @param {Array} startPeg - The peg the where disc will be moved from
   * @param {Array} endPeg - The peg where the disc will be moved to
   */
  function checkTopOfPeg(startPeg, endPeg) {
    var lastIndexOfStartPeg = startPeg.length - 1;
    var topDiscOfStartPeg = startPeg[lastIndexOfStartPeg];

    var lastIndexOfEndPeg = endPeg.length - 1;
    var topDiscOfEndPeg = endPeg[lastIndexOfEndPeg];

    var goodPegs = state.board.filter(function (peg) {
      var index = peg.length - 1;
      return topDiscOfStartPeg < peg[index];
    });

    if (goodPegs === undefined || goodPegs.length === 0) {
      return false
    }

    if (topDiscOfStartPeg > topDiscOfEndPeg) {
      return false;
    }

    return true;
  };

  /* function that checks if the user has won the game */
  var checkWinner = function () {
    // use reduce  here 
    // check if board is in original order
    // but in another peg
  };

  var resetGame = function () {
    // start a new game
    // reset board state (or just create a new board object)
  };

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



/** Starting board */
var startingBoards = [[3, 2, 1], [], []];
var board = Board(startingBoards, 0);
console.log("Starting Board")
board.displayBoard();


/** 
 * Function that gets invoked every time the user clicks the move button  
 */
function makeMove() {
  // variable used to control the game status
  var gameStatus;
  // get user input
  var userInput = prompt('enter move: ex: 1, 2)');

  do {

    try {
      var input = userInput.split(",");
      if (input.length !== 2) {
        userInput = prompt('Please enter two numbers');
      }

      // convert user input to Integers
      var startPeg = parseInt(input[0], 10);
      var endPeg = parseInt(input[1], 10);

    } catch {
      console.log('GAME TERMINATED')
      gameStatus = false;
    }

    var moveStatus = board.moveDisc(startPeg, endPeg);

    if (!moveStatus) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still:")
      board.displayBoard();
      gameStatus = false;
    } else {
      console.log('That move was successful, board is now:');
      board.displayBoard();
    }

    gameStatus = false;
  } while (gameStatus)
}