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
}

var game = new TowersOfHanoiEngine();
game.generateBoard(4,9);
console.log(game.board);