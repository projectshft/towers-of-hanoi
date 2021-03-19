const TowersOfHanoiEngine = function () {
  this.board = [];

  //Creates the intial game board
  this.generateBoard = function (pegs, discs) {
    var initialBoard = [];
    for (i = 0; i < pegs; i++) {
      initialBoard.push([])
    }
    for (i = discs; i >= 1; i--) {
      initialBoard[0].push(i.toString());
    }
    this.board = initialBoard;
  }

  //Displays board to console
  this.displayBoard = function () {

  }

  //Updates board with move
  this.makeMove = function (disc, newPeg) {

  }

  //Checks if it is a valid move
  this.checkMove = function (disc, newPeg) {

  }

  //Check if player has won the game
  this.checkWinner = function () {

  }

  //Begins the game
  this.playGame = function () {

  }
}

var game = new TowersOfHanoiEngine();
game.generateBoard(4,9);
console.log(game.board);