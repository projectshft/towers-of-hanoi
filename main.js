// Towers of Hanoit Prompt

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
var defaultBoard = [[5, 4, 3, 2, 1], [], []];
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

// string messages
var sameBayErr = "You must move the disc to a different bay than the one it occupies.";
var emptyBayErr = "There is no item to move from selected bay. Choose another";
var biggerDiscErr = "You cannot move a larger disc on top of a smaller one.";
var successfulMove = "That move was successful, board is now: ";
var gameWinner = "The game has been won!!!  Game board reset...";

// game
class Game {
  constructor(defaultBoard, currentBoardState) {
    this.defaultBoard = defaultBoard;
    this.currentBoardState = currentBoardState;
  }

  getDefaultBoard(){
    return this.defaultBoard;
  }

  setDefaultBoard(board){
    board = defaultBoard;
  }
  getCurrentBoardState(){
    return this.currentBoardState;
  }
  setCurrentBoard(board){
    board = currentBoardState;
  }

}
  // Game class getters and setters
function getDefaultBoard(){
    return this.defaultBoard;
  }
function setDefaultBoard(board){
    board = defaultBoard;
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
        message.textContent = sameBayErr;
        break;
      case getCurrentBoardState()[fromBoardIndex-1].length === 0:
        message.textContent = emptyBayErr;
        break;
      case itemToMove > destTopItem:
        message.textContent = biggerDiscErr;
        break;
      default:
        mover = getCurrentBoardState()[fromBoardIndex-1].pop();
        setDefaultBoard(getCurrentBoardState()[toBoardIndex-1].push(mover));        
        console.log("current board state: " + "\n" + mapBoard(getCurrentBoardState()));
        gameBoardDisplay.innerHTML = mapBoard(getCurrentBoardState());        
        console.log("current board state: " + "\n" + mapBoard(getCurrentBoardState()));
        message.textContent = successfulMove;
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
        gameBoardDisplay.innerHTML = mapBoard(getCurrentBoardState());
        message.textContent = gameWinner;
        console.log(gameWinner);
        alert(gameWinner);
        matches = true;
        console.log("in checkWinner, boardstate: " + mapBoard(getCurrentBoardState()));
        resetGame();
      }
    });
    return matches;
  }

// function to start a new game
function startGame(){
  // new Game instance created and set with the beginning board state and current board state to track changes to the board throughout the game
  newGame = new Game(defaultBoard, currentBoardState);
  gameBoardDisplay.textContent = mapBoard(defaultBoard);

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
  currentBoardState = getDefaultBoard();
  gameBoardDisplay.textContent = mapBoard(getDefaultBoard());
  
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



