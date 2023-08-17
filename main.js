// Towers of Hanoit Prompt

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
var beginBoard = [[5, 4, 3, 2, 1], [], []];
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
function Game(beginBoard){
  this.beginBoard = beginBoard;
}
function Game(beginBoard, currentBoardState) {
  this.beginBoard = beginBoard;
  this.currentBoardState = currentBoardState;
}
  // Game class getters and setters
function getBeginBoard(){
    return this.beginBoard;
  }
function setBeginBoard(board){
    board = beginBoard;
  }
function getCurrentBoardState(){
    return this.currentBoardState;
  }
function setCurrentBoard(board){
    board = currentBoardState;
  }

  //function to move array items to different arrays
function move(fromBoardIndex, toBoardIndex){
    fromBoardIndex = start.value;
    toBoardIndex = destination.value;

    var bayToMoveFrom = getCurrentBoardState()[fromBoardIndex - 1];
    var itemToMove = bayToMoveFrom[bayToMoveFrom.length-1];

    bayStack = getCurrentBoardState()[toBoardIndex-1];
    destTopItem = bayStack[bayStack.length-1];

    switch(true){
      case fromBoardIndex === toBoardIndex:
        message.textContent = "You must move the disc to a different bay than the one it occupies.";
        break;
      case getCurrentBoardState()[fromBoardIndex-1].length === 0:
        message.textContent = "There is no item to move from selected bay. Choose another";
        break;
      case itemToMove > destTopItem:
        message.textContent = "You cannot move a larger disc on top of a smaller one.";
        break;
      case bayStack.length === 0:
        mover = getCurrentBoardState()[fromBoardIndex-1].pop();
        getCurrentBoardState()[toBoardIndex-1].push(mover);
        message.textContent = "That move was successful, board is now: ";
        gameBoardDisplay.innerHTML = mapBoard(getCurrentBoardState());
        checkWinner(currentBoardState);
        return currentBoardState;
      default:
        mover = getCurrentBoardState()[fromBoardIndex-1].pop();
        setBeginBoard(getCurrentBoardState()[toBoardIndex-1].push(mover));
        gameBoardDisplay.innerHTML = mapBoard(getCurrentBoardState());
        message.textContent = "That move was successful, board is now: ";
        console.log("current board state: " + "\n" + mapBoard(getCurrentBoardState()));
        checkWinner(currentBoardState);
    }
  }

  // function to map current board state
function mapBoard(currentBoard){
    var bay = 1;
    return currentBoard.map(function (boardItem){
      var line = `Bay ${bay++}: --- ${boardItem} <br/> \n`;
      line = line.split(",");
      line = line.join(" - ");
      return line;
    });
  }

  // function to check if the game has been won
function checkWinner(boardState){
    var arraysToCheck = boardState.slice(1, boardState.length + 1);
    var winString = winningPattern.toString();
    var matches = false;

    arraysToCheck.forEach(function (item){
      item = item.toString();
      if(item === winString){
        matches = true;
        message.textContent = "The game has been won!!!";
        console.log("The game has been won!  Game board reset...");
        alert("The game has been won!!!");
        resetGame();
      }
    });
    return matches;
  }

// function to start a new game
function startGame(){
  // new Game instance created and set with the beginning board state and current board state to track changes to the board throughout the game
  newGame = new Game(beginBoard, currentBoardState);
  gameBoardDisplay.textContent = mapBoard(beginBoard);

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

// function to reset game
function resetGame(){
  // new Game instance created and set with the beginning board state and current board state to track changes to the board throughout the game
  currentBoardState = getBeginBoard();
  gameBoardDisplay.textContent = mapBoard(getBeginBoard());
  
  // HTML elements to hide or display on start of game
  startBtn.hidden = false;
  moveMessage.hidden = true;
  startInputLbl.hidden = true;
  destInputLbl.hidden = true;
  start.hidden = true;
  start[0].selected = true;
  destination.hidden = true;
  destination[0].selected = true;
  message.hidden = true;
  message.textContent = "Current Board: ";
  makeMoveBtn.hidden = true;
  gameBoardDisplay.hidden = true;
  gameBoardDisplay.innerHTML = mapBoard(getCurrentBoardState());
}



