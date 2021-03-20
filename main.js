const TowersOfHanoiEngine = function () {
  this.board = [];
  this.discs = 0;
  this.pegs = 0;

  //Creates game board
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
  }

  //Displays board to console
  this.displayBoardConsole = function () {
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

  //Displays board to HTML page
  this.displayBoardHTML = function () {
    var numOfDiscs = this.discs;
    //This if statement is so that jasmine can run. Since the jasmine page doesn't have a boardHTML element it will throw an error without the if statement.
    if(boardHTML) {
      boardHTML.innerHTML = this.board.reduce(function (htmlString, peg, index, array) {
        htmlString += '<div>'
        for(j = numOfDiscs-1; j >= 0; j--) {
          htmlString += array[index][j] ? `<h1>${array[index][j]}</h1>` : '<h1>.</h1>';
        }
        htmlString += `<h1>Peg ${index+1}__</h1></div>`
        return htmlString;
      },'')
    }
  }

  //Updates board with desired move
  this.makeMove = function (currentPeg, newPeg) {
    if(this.checkMove(currentPeg,newPeg)) {
      var discMoved = this.board[currentPeg-1].pop();
      this.board[newPeg-1].push(discMoved);
      if(this.checkWinner()) {
        this.displayBoardConsole();
        this.displayBoardHTML();
        console.log('You have won the game! Play Again:');
        this.generateBoard(this.pegs, this.discs);
      } else {
        console.log('That move was successful. Board is now:')
      }
    }
    this.displayBoardConsole();
    this.displayBoardHTML();
  }

  //Checks if desired move is valid
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

    //checks if the disc the user wishes to move is larger than the top disc on the desired peg
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
}

//HTML functionality
var pegNumberInput = document.querySelector('.pegNumber');
var discNumberInput = document.querySelector('.discNumber');
var generateButton = document.querySelector('.generateButton')
var boardHTML = document.querySelector('.board');
var startingPegInput = document.querySelector('.startingPeg');
var endingPegInput = document.querySelector('.endingPeg');
var moveButton = document.querySelector('.moveDisc');
generateButton.onclick = () => {
  //Creates a new board and displays it to console and page
  game.generateBoard(parseInt(pegNumberInput.value), parseInt(discNumberInput.value));
  game.displayBoardConsole();
  game.displayBoardHTML();
}
moveButton.onclick = () => {
  game.makeMove(parseInt(startingPegInput.value), parseInt(endingPegInput.value));
}


var game = new TowersOfHanoiEngine();
game.generateBoard(3,5)
game.displayBoardHTML();
game.displayBoardConsole();