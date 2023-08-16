// Towers of Hanoit Prompt

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
const beginBoard = [[5, 4, 3, 2, 1], [], []];
// var for current state of board to track where array contents are moved
var currentBoardState = [[5, 4, 3, 2, 1], [], []];
// winning pattern array to check
const winningPattern = [5, 4, 3, 2, 1];

// var holds array of stack values at given
var bayStack;
// var holds value of array item to be moved from one bay to another
var mover;
// var holds value of item at top of the stack in the destination array
var destTopItem;
// uninitialized var for a new game
var newGame;

// HTML element variables
var heading = document.getElementById("heading");
var startBtn = document.getElementById("startBtn");
var moveMessage = document.getElementById("moveMessage");
var startInputLbl = document.getElementById("startInputLbl");
var destInputLbl = document.getElementById("destInputLbl");
var start = document.getElementById("fromDrop");
var destination = document.getElementById("destDrop");
var makeMoveBtn = document.getElementById("submitMoveBtn");
var message = document.getElementById("message");
var gameBoardDisplay = document.getElementById("gameboard");

// Game class
function Game(beginBoard, currentBoardState) {
  this.beginBoard = beginBoard;
  this.currentBoardState = currentBoardState;
}
  // Game class getters and setters
function getBeginBoard(){
    return this.beginBoard;
  }
function setBeginBoard(board){
    board = this.beginBoard;
  }
function getCurrentBoardState(){
    return this.currentBoardState;
  }
function setCurrentBoard(board){
    board = this.currentBoardState;
  }

  //function to move array items to different arrays
function move(fromBoardIndex, toBoardIndex){
    fromBoardIndex = start.value;
    toBoardIndex = destination.value;

    var bayToMoveFrom = getCurrentBoardState()[fromBoardIndex - 1];
    var itemToMove = bayToMoveFrom[bayToMoveFrom.length-1];

    bayStack = getCurrentBoardState()[toBoardIndex-1];
    destTopItem = bayStack[bayStack.length-1];

    
  }

  // function to map current board state
function mapBoard(currentBoard){
    var bay = 1;
    // currentBoard = this.currentBoardState;s
    return currentBoard.map(function (boardItem){
      var line = `Bay ${bay++}: --- ${boardItem} <br/> \n`;
      line = line.split(",");
      line = line.join(" - ");
      return line;
    });
  }

  // function to check if a player has won the game
function checkWinner(boardState){
    
  }

// function to start a new game
function startGame(){
  // new Game instance created and set with the beginning board state and current board state to track changes to the board throughout the game
  newGame = new Game(beginBoard, currentBoardState);
  setCurrentBoard(beginBoard);
  gameBoardDisplay.textContent = mapBoard(getCurrentBoardState());

  // HTML elements to hide or display on start of game
  startBtn.hidden = true;
  moveMessage.hidden = false;
  startInputLbl.hidden = false;
  destInputLbl.hidden = false;
  start.hidden = false;
  destination.hidden = false;
  message.hidden = false;
  makeMoveBtn.hidden = false;
  gameBoardDisplay.hidden = false;
  gameBoardDisplay.innerHTML = mapBoard(getCurrentBoardState());

  return newGame;
}



