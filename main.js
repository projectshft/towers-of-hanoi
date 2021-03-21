const TowersOfHanoiEngine = function () {
  this.board = [];
  this.discs = 0;
  this.pegs = 0;
  this.movesTaken = 0;

  //This is so that jasmine can run properly. When set to true the displayBoardHTML and updateMoveCounter methods won't be called in the makeMove method and alert won't be displayed upon winning.
  this.runningJasmine = false;

  //Creates game board
  this.generateBoard = function (pegs, discs) {
    var initialBoard = [];
    for (i = 0; i < pegs; i++) {
      initialBoard.push([])
    }
    //Creates stack of discs on first peg
    for (i = discs; i >= 1; i--) {
      initialBoard[0].push(i.toString());
    }
    this.board = initialBoard;
    this.discs = discs;
    this.pegs = pegs;
    this.movesTaken = 0;
  }

  //Displays board to console
  this.displayBoardConsole = function () {
    var pegDisplayStrings = this.board.map(function (peg) {
      return '--- ' + peg.join(' ');
    })
    pegDisplayStrings.reduce(function (acc, peg) {
      //Adds an extra blank space every time to avoid problem in Chrome console of identical lines being collapsed together rather than each line displaying seperately
      // example: "3 ---" shows up in console rather than "---" displaying three times if these lines are identical.
      acc = acc + " "
      console.log(peg + acc)
      return acc;
    },'')
  }

  //Displays board to HTML page
  this.displayBoardHTML = function () {
    var numOfDiscs = this.discs;
    boardHTML.innerHTML = this.board.reduce(function (htmlString, peg, index, array) {
      htmlString += '<div>'
      for(j = numOfDiscs-1; j >= 0; j--) {
        //Tests whether there is a disc present and places either the disc number or a . placeholder
        htmlString += array[index][j] ? `<h1>${array[index][j]}</h1>` : '<h1>.</h1>';
      }
      htmlString += `<h1>_Peg ${index+1}_</h1></div>`
      return htmlString;
    },'')
  }

  //Updates the Total Moves Taken display on the page
  this.updateMoveCounter = function () {
    moveCounter.innerHTML = `Total Moves Taken: ${this.movesTaken}`;
  }

  //Updates board with desired move
  this.makeMove = function (currentPeg, newPeg) {
    //First checks if it is a valid move
    if(this.checkMove(currentPeg, newPeg)) {
      var discMoved = this.board[currentPeg-1].pop();
      this.board[newPeg-1].push(discMoved);
      this.movesTaken += 1;
      //After move checks if player has won
      if(this.checkWinner()) {
        this.displayBoardConsole();
        console.log('You have won the game! Play Again:');
        !this.runningJasmine ? alert(`You have won the game in ${this.movesTaken} moves! Play Again:`): null;
        this.generateBoard(this.pegs, this.discs);
      } else {
        console.log('That move was successful. Board is now:')
      }
    }

    this.displayBoardConsole();
    if(!this.runningJasmine) {
      this.displayBoardHTML();
      this.updateMoveCounter();
    }
  }

  //Checks if desired move is valid
  this.checkMove = function (currentPeg, newPeg) {
    //Checks if inputs are numbers
    if(typeof currentPeg !== 'number' || typeof newPeg !== 'number') {
      console.log('Please choose a proper peg number. Board is still:');
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

    //checks if the disc the user wishes to move is larger than the top disc on the desired peg
    var discToBeMoved = this.board[currentPeg-1][this.board[currentPeg-1].length-1];
    var currentTopDisc = this.board[newPeg-1][this.board[newPeg-1].length-1];
    if(parseInt(discToBeMoved) > parseInt(currentTopDisc)) {
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

  //Solves the game utilizing the first three pegs by getting all the discs to the second peg
  //Note: Only works when run if board is in its start of game setup (i.e. all the discs on the first peg)
  this.solve = function (numofDiscsToBeMoved=this.discs, currentPeg=1, destinationPeg=2, flipper=true) {
      // debugger;
    if(numofDiscsToBeMoved === 0) {
      return
    }
    var newDestinationPeg = flipper ? destinationPeg + 1 : destinationPeg - 1;
    if (newDestinationPeg > 3) {
      newDestinationPeg = 1;
    }
    if (newDestinationPeg < 1) {
      newDestinationPeg = 3;
    }

    //Moves all discs on top of bottom disc
    this.solve(numofDiscsToBeMoved-1, currentPeg, newDestinationPeg, !flipper);
    //Moves bottom disc to desired peg
    this.makeMove(currentPeg, destinationPeg);
    //Moves the remaining discs back on top of bottom disc on the new peg
    this.solve(numofDiscsToBeMoved-1, newDestinationPeg, destinationPeg, !flipper);
  }
}

//HTML functionality
var pegNumberInput = document.querySelector('.pegNumber');
var discNumberInput = document.querySelector('.discNumber');
var generateButton = document.querySelector('.generateButton')
var boardHTML = document.querySelector('.board');
var startingPegInput = document.querySelector('.startingPeg');
var endingPegInput = document.querySelector('.endingPeg');
var moveButton = document.querySelector('.moveDisc');
var moveCounter = document.querySelector('.moveCounter');
var solveButton = document.querySelector('.solveButton');

//Creates a new board and updates the console and page with it
generateButton.onclick = () => {
  game.generateBoard(parseInt(pegNumberInput.value), parseInt(discNumberInput.value));
  game.displayBoardConsole();
  game.displayBoardHTML();
  game.updateMoveCounter();
};

moveButton.onclick = () => {
  game.makeMove(parseInt(startingPegInput.value), parseInt(endingPegInput.value));
};

solveButton.onclick = () => {
  game.solve();
}


var game = new TowersOfHanoiEngine();
game.generateBoard(3,5)
game.displayBoardHTML();
game.displayBoardConsole();