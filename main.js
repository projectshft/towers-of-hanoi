// Towers of Hanoit Prompt

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
const beginBoard = [[5, 4, 3, 2, 1], [], []];
// var for current state of board to track where array contents are moved
var currentBoardState = [[5, 4, 3, 2, 1], [], []];
// winning pattern array to check
const winningPattern = [5, 4, 3, 2, 1];
// uninitialized var for a new game
var newGame;

// Game class
class Game {
  constructor(beginBoard, currentBoard){
    this.beginBoard = beginBoard;
    this.currentBoard = currentBoard;
  }

  //function to move array items to different arrays
  move(start, destination){

  }
  // function to map current board state
  mapBoard(currentBoard){

  }
  // function to check if a player has won the game
  checkWinner(){

  }

}

// function to start a new game
function startGame(){
  newGame = new Game(beginBoard, currentBoardState);
  return newGame;
}

// start game function called
startGame();



