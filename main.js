// Towers of Hanoit Prompt

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
const beginBoard = [[5, 4, 3, 2, 1], [], []];
// var for current state of board to track where array contents are moved
var currentBoardState = [[5, 4, 3, 2, 1], [], []];
// winning pattern array to check
const winningPattern = [5, 4, 3, 2, 1];
// uninitialized var for a new game
var newGame;

// HTML element variables
var heading = document.getElementById("heading");
var startBtn = document.getElementById("startBtn");
var message = document.getElementById("message");
var startInputLbl = document.getElementById("startInputLbl");
var destInputLbl = document.getElementById("destInputLbl");
var moveFromDropMenu = document.getElementById("fromDrop");
var moveDestDropMenu = document.getElementById("destDrop");
var bay1 = document.getElementById("bay1");
var bay2 = document.getElementById("bay2");
var bay3 = document.getElementById("bay3");
var makeMoveBtn = document.getElementById("submitMoveBtn");

// Game class
class Game {
  // Game class constructor
  constructor(beginBoard, currentBoard){
    this.beginBoard = beginBoard;
    this.currentBoard = currentBoard;
  }
  // Game class getters and setters
  getBeginBoard(){
    return this.beginBoard;
  }
  setBeginBoard(board){
    board = this.beginBoard;
  }
  getCurrentBoardState(){
    return this.currentBoardState;
  }
  setCurrentBoard(board){
    board = this.currentBoardState;
  }

  //function to move array items to different arrays
  move(start, destination){
    start = moveFromDropMenu.nodeValue;
    destination = moveDestDropMenu.nodeValue;
  }
  // function to map current board state
  mapBoard(currentBoard){
    currentBoard = this.currentBoard;
    return currentBoard;
  }
  // function to check if a player has won the game
  checkWinner(boardState){

  }

}

// function to start a new game
function startGame(){
  newGame = new Game(beginBoard, currentBoardState);
  startBtn.hidden = true;
  message.hidden = false;
  startInputLbl.hidden = false;
  destInputLbl.hidden = false;
  moveFromDropMenu.hidden = false;
  moveDestDropMenu.hidden = false;
  bay1.hidden = false;
  bay2.hidden = false;
  bay3.hidden = false;
  makeMoveBtn.hidden = false;

  newGame.setCurrentBoard(beginBoard);
  newGame.mapBoard(newGame.getCurrentBoardState());
  console.log(newGame);
  console.log(newGame.getCurrentBoardState());
  return newGame;
}



