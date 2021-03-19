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
    var pegArr = this.board.map(function (line) {
      return '--- ' + line.join(' ');
    })
    pegArr.reduce(function (acc, line) {
      //Adds an extra blank space every time to avoid problem in Chrome console of identical lines being collapsed together rather than each line displaying seperately
      // example "3 ---" shows up in console rather than "---" displaying three times if these lines are identical.
      acc = acc + " "
      console.log(line + acc)
      return acc;
    },'')
  }

  //Updates board with move
  this.makeMove = function (currentPeg, newPeg) {
    var discMoved = this.board[currentPeg-1].pop();
    this.board[newPeg-1].push(discMoved);
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
game.displayBoard();