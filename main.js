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
    if(this.checkMove(currentPeg,newPeg)) {
      var discMoved = this.board[currentPeg-1].pop();
      this.board[newPeg-1].push(discMoved);
    }
  }

  //Checks if it is a valid move
  this.checkMove = function (currentPeg, newPeg) {
    //Checks if inputs are numbers
    if(typeof currentPeg !== 'number' || typeof newPeg !== 'number') {
      console.log('Please choose a proper peg number')
      return false;
    }

    //Checks if inputs are actual peg locations
    if(currentPeg < 1 || currentPeg > this.board.length || newPeg < 1 || newPeg > this.board.length) {
      console.log('There is no peg at that location. Please choose again.');
      return false;
    }

    //Checks if there is a disc on the peg user wishes to move a disc from.
    if(this.board[currentPeg-1].length === 0) {
      console.log(`There is no disc on ${currentPeg}. That is an invalid move.`);
      return false
    }

    //checks if the disc user wishes to move is larger than the top disc on the desired peg
    var discMoved = this.board[currentPeg-1][this.board[currentPeg-1].length-1];
    var currentTopDisc = this.board[newPeg-1][this.board[newPeg-1].length-1];
    if(parseInt(discMoved) > parseInt(currentTopDisc)) {
      console.log('You cannot move a larger disc onto a smaller disc. That is an invalid move');
      return false
    }
    
    return true
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