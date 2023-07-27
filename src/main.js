var Board = function (pegs, discs) {
  this.board = [];
  this.pegs = pegs;
  this.discs = discs;

  this.startNewGame();
}

Board.prototype.startNewGame = function () {
  this.board = [];
  
  for (var i = 0; i < this.pegs; i++) {
    this.board.push([]);
  }

  for (var i = this.discs; i > 0; i--) {
    this.board[0].push(i);
  }

  console.log('Starting a new game...');
  this.displayBoard();
  return this.board.board;
}

Board.prototype.displayBoard = function () {
  var gameDiv = document.querySelector('#game');

  this.board.map(function (peg) {
    var pegDiv = document.createElement('div');
    pegDiv.setAttribute('class', 'peg');

    var currentPeg = '--- ';
    peg.map(function (disc) {
      currentPeg += disc + ' ';
    })
    
    pegDiv.innerText = currentPeg;
    gameDiv.appendChild(pegDiv);
  })
}

Board.prototype.moveDisc = function (pegMoveFrom, pegMoveTo) {
  if (!this.board[pegMoveFrom - 1]) {
    console.log('The peg you want to move a disc from doesn\'t exist! Board is still:');
    this.displayBoard();
    return 'The peg you want to move a disc from doesn\'t exist! Board is still:';
  } else if (!this.board[pegMoveTo - 1]) {
    console.log('The peg you want to move a disc to doesn\'t exist! Board is still:');
    this.displayBoard();
    return 'The peg you want to move a disc to doesn\'t exist! Board is still:';
  } else if (this.board[pegMoveFrom - 1].length === 0) {
    console.log('There aren\'t any discs on that peg! Board is still:');
    this.displayBoard();
    return 'There aren\'t any discs on that peg! Board is still:';
  } else if (this.board[pegMoveTo - 1].length === 0) {
    var discToMove = this.board[pegMoveFrom - 1].pop();
    this.board[pegMoveTo - 1].push(discToMove);
    console.log('That move was successful. Board is now:');
    this.displayBoard();
  } else {
    if (this.board[pegMoveFrom - 1].slice(-1) > this.board[pegMoveTo - 1].slice(-1)) { 
      console.log('You cannot move a larger disc on top of a smaller one. Board is still:');
      this.displayBoard();
      return 'You cannot move a larger disc on top of a smaller one. Board is still:';
    } else {
      var discToMove = this.board[pegMoveFrom - 1].pop();
      this.board[pegMoveTo - 1].push(discToMove);

      if (this.checkWinner()) {
        console.log('You win! Here is the final board:');
        this.displayBoard();
        this.startNewGame();
      } else {
        console.log('That move was successful. Board is now:');
        this.displayBoard();
      }
    }
  }
}

Board.prototype.checkWinner = function () {
  var pegsToCheck = this.board.slice(1);
  var maxDisc = this.discs;
  var winner = false;

  pegsToCheck.forEach(function (peg) {
    var bottomDisc = Number(peg.slice(0, 1));

    if (bottomDisc === maxDisc && peg.length === maxDisc) {
      winner = true;
    }
  })

  return winner;
}

function createNewBoard(pegs, discs) {
  return new Board(pegs, discs);
}

function displayHTML(boardName) {
  var gameDiv = document.querySelector('#game');

  var gameBoard = document.createTextNode(boardName.displayBoard());

  gameDiv.appendChild(gameBoard);
}

var myBoard = createNewBoard(3, 5);
// displayHTML(myBoard);
// createNewBoard(5, 7);

// Solution for 3 pegs/5 discs
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(2, 1);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(2, 1);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
