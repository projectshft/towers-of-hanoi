const TowersOfHanoiEngine = function () {
  this.board = [];
  this.discs = 0;
  this.pegs = 0;

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
    this.discs = discs;
    this.pegs = pegs;
    this.displayBoard();
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
      if(this.checkWinner()) {
        this.displayBoard();
        console.log('You have won the game! Play Again:');
        this.generateBoard(this.pegs, this.discs);
      } else {
        console.log('That move was successful. Board is now:')
        this.displayBoard();
      }
    }
  }

  //Checks if it is a valid move
  this.checkMove = function (currentPeg, newPeg) {
    //Checks if inputs are numbers
    if(typeof currentPeg !== 'number' || typeof newPeg !== 'number') {
      console.log('Please choose a proper peg number. Board is still:')
      return false;
    }

    //Checks if inputs are actual peg locations
    if(currentPeg < 1 || currentPeg > this.board.length || newPeg < 1 || newPeg > this.board.length) {
      console.log('There is no peg at that location. Board is still:');
      return false;
    }

    //Checks if there is a disc on the peg user wishes to move a disc from.
    if(this.board[currentPeg-1].length === 0) {
      console.log(`There is no disc on ${currentPeg}. Board is still:`);
      return false
    }

    //checks if the disc user wishes to move is larger than the top disc on the desired peg
    var discMoved = this.board[currentPeg-1][this.board[currentPeg-1].length-1];
    var currentTopDisc = this.board[newPeg-1][this.board[newPeg-1].length-1];
    if(parseInt(discMoved) > parseInt(currentTopDisc)) {
      console.log('You cannot move a larger disc onto a smaller disc. Board is still:');
      return false
    }
    
    return true
  }

  //Checks if player has won the game
  this.checkWinner = function () {
    var numOfDiscs = this.discs;
    var hasWon = this.board.some(function (peg, index) {
      //checks to see if all the discs are on one peg other than the first one
      return peg.length === numOfDiscs && index !== 0
    })
    return hasWon
  }

  this.playTurn = function () {
        //asks for user to make move
    //updates the game board
    //checks to see if they have one
    //If not asks user for next move...
  }

  //Begins the game
  this.playGame = function () {
    //first asks user how many discs and pegs they would like to play with
    //generates the game board
    //calls playTurn
  }
}

var game = new TowersOfHanoiEngine();
game.generateBoard(5,3);
// var game = new TowersOfHanoiEngine();
// game.generateBoard(4,2);
// game.displayBoard();