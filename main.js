/** 
 * Board Module 
 * @param {Array} array - The starting board 
 * @param {Int} moves - Keeps tracks of the number of moves
 */
var Board = function (board, boardCopy, moves) {
  // state of board
  var state = {
    board: board,
    moves: moves,
    boardCopy: boardCopy
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
   * @param {String} attribute - The attribute we want to get
   */
  var getAttribute = function (attribute) {
    if (state.hasOwnProperty(attribute)) {
      return state[attribute];
    }
  };

  /** Function that adds a disc to increase difficulty */
  var addDisc = function () {
    var boardLength = state.board[0].length;
    state.board[0].unshift(boardLength + 1);
    state.boardCopy[0].unshift(boardLength + 1);
    displayBoard();
  }

  /** 
   * function that moves one disc to another peg, returns a number to display error type
   * on makeMove function
   * @param {Int} moveOne - The starting peg 
   * @param {Int} moveTwo - The ending peg 
   */
  var moveDisc = function (moveOne, moveTwo) {
    var moveStatus;
    var gameCompleted;
    var numberOfPegs = state.boardCopy.length;

    if ((moveOne < 1 || moveOne > numberOfPegs) || (moveTwo > numberOfPegs || moveTwo < 1)) {
      moveStatus = 3;
      return moveStatus;
    }

    var startPeg = state.boardCopy[moveOne - 1];
    var lastIndexOfStartPeg = startPeg.length - 1;
    var topDiscOfStartPeg = startPeg[lastIndexOfStartPeg];

    var endPeg = state.boardCopy[moveTwo - 1];

    if (startPeg.length === 0) {
      moveStatus = 1;
      return moveStatus;
    }

    // boolean used to control the move status, it its valid or not
    var pegIsOk = true;

    // if the endPeg is not empty, preform a check to make sure the move is valid
    if (endPeg.length !== 0) {
      pegIsOk = checkTopOfPeg(startPeg, endPeg);
    }

    if (!pegIsOk) {
      moveStatus = 2;
      return moveStatus;
    }

    startPeg.splice(lastIndexOfStartPeg, 1)
    endPeg.push(topDiscOfStartPeg);
    state.moves++

    gameCompleted = checkWinner(endPeg);
    if (gameCompleted) {
      moveStatus = 5;
      return moveStatus;
    }
    return;
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

    var goodPegs = state.boardCopy.filter(function (peg) {
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

  /**
   * checkWinner - checks if the users has won the game by adding the total
   * number of discs on the ending peg and comparing it with the original peg
   * @param {Array} endPeg - The peg that will be checked if the discs are in the right order.
   * @return {boolean} - Returns true if the user won otherwise false
   */
  function checkWinner(endPeg) {
    var originalStartPegSum = state.board[0].reduce(function (total, disc) {
      return total += disc;
    }, 0);

    var copyStartPegSum = state.boardCopy[0].reduce(function (total, disc) {
      return total += disc;
    }, 0)

    var userPegSum = endPeg.reduce(function (total, disc) {
      return total + disc;
    }, 0);

    if (originalStartPegSum !== copyStartPegSum && originalStartPegSum === userPegSum) {
      return true;
    }

    return false;
  };

  /**
   * Starts a new game by resetting back to the default values
   */
  var resetGame = function () {
    state.board = [[3, 2, 1], [], []];
    state.boardCopy = [[3, 2, 1], [], []];
    state.moves = 0;
    displayBoard();
  };

  /** function that shows the current board state to the user */
  var displayBoard = function () {
    state.boardCopy.map(function (peg) {
      console.log('---', ...peg);
    });
  }

  return {
    addDisc: addDisc,
    resetGame: resetGame,
    moveDisc: moveDisc,
    displayBoard: displayBoard,
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
} // End Board Module 



/** Setting a new game on window load */
var startingBoard = [[3, 2, 1], [], []];
var startingBoardCopy = [[3, 2, 1], [], []];
var initialMoves = 0;
var board = Board(startingBoard, startingBoardCopy, initialMoves);
console.log("Starting Board")
board.displayBoard();


/** 
 * Function that gets invoked every time the user clicks the move button  
 */
function makeMove() {
  // variable used to control the game status
  var gameStatus = true;

  do {
    var userInput = prompt('enter move: (ex: 2,3)');
    try {
      var input = userInput.split(",");
      if (input.length !== 2) {
        console.log('Please enter two numbers only: ')
        board.displayBoard();
        return;
      }

      if (isNaN(input[0]) || isNaN(input[1])) {
        console.log('Please enter numbers only, board is still: (ex: 1,2)');
        board.displayBoard();
        return;
      }
      // convert user input to Integers
      var startPeg = parseInt(input[0], 10);
      var endPeg = parseInt(input[1], 10);

      if (startPeg === endPeg) {
        console.log('Please choose two different pegs, board is still:');
        board.displayBoard();
        return;
      }

    } catch {
      console.log('Move cancelled')
      gameStatus = false;
      return;
    }

    var moveStatus = board.moveDisc(startPeg, endPeg);
    if (moveStatus === 1) {
      console.log("You cannot move a disc from an empty peg, please try again, board is still")
      board.displayBoard();
    } else if (moveStatus === 2) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still:")
      board.displayBoard();
    } else if (moveStatus === 3) {
      console.log(`Input out of bounds, make sure you your input is within 1 and ${board.getAttribute('boardCopy').length}`)
      board.displayBoard();
    } else if (moveStatus === 4) {
      console.log('Please enter numbers only, board is still: ');
      board.displayBoard();
    } else if (moveStatus === 5) {
      console.clear();
      console.log(`You have won the game with ${board.getAttribute('moves')} moves!`);
      console.log('Starting a new game');
      board.resetGame();
      gameStatus = false;
    } else {
      console.log(`That move was successful, board is now: (current moves: ${board.getAttribute('moves')})`);
      board.displayBoard();
    }

  } while (gameStatus)
}