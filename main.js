var Board = function (pegs, discs) {
  this.board = [];
  this.pegs = pegs;
  this.discs = discs;
}

Board.prototype.startNewGame = function () {
  for (var i = 0; i < this.pegs; i++) {
    this.board.push([]);
  }

  for (var i = this.discs; i > 0; i--) {
    this.board[0].push(i);
  }

  this.displayBoard();
}

Board.prototype.displayBoard = function () {
  this.board.map(function (peg) {
    var currentPeg = '';
    peg.map(function (disc) {
      currentPeg += disc + ' ';
    })
    console.log('---', currentPeg);
  })
}

Board.prototype.moveDisc = function (pegMoveFrom, pegMoveTo) {
  if (!this.board[pegMoveFrom - 1]) {
    console.log('The peg you want to move a disc from doesn\'t exist! Board is still:');
    console.log(this.displayBoard());
  } else if (!this.board[pegMoveTo - 1]) {
    console.log('The peg you want to move a disc to doesn\'t exist! Board is still:');
    console.log(this.displayBoard());
  } else if (this.board[pegMoveFrom - 1].length === 0) {
    console.log('There aren\'t any discs on that peg! Board is still:');
    console.log(this.displayBoard());
  } 
  
  if (this.board[pegMoveTo - 1].length === 0) {
    var discToMove = this.board[pegMoveFrom - 1].pop();
    this.board[pegMoveTo - 1].push(discToMove);
    console.log('That move was successful. Board is now:');
    console.log(this.displayBoard());
  } else {
    if (this.board[pegMoveFrom - 1].slice(-1) > this.board[pegMoveTo - 1].slice(-1)) { 
      console.log('You cannot move a larger disc on top of a smaller one. Board is still:');
      console.log(this.displayBoard());
    } else {
      var discToMove = this.board[pegMoveFrom - 1].pop();
      this.board[pegMoveTo - 1].push(discToMove);

      if (this.checkWinner()) {
        console.log('You win! Here is the final board:');
        console.log(this.displayBoard());
      } else {
        console.log('That move was successful. Board is now:');
        console.log(this.displayBoard());
      }
    }
  }
}

Board.prototype.checkWinner = function () {
  var winner = false;
  var pegsToCheck = this.board.slice(1);

  pegsToCheck.forEach(function (peg) {
    winner = peg.reduce(function (acc, disc) {
      if (acc - disc === 1) {
        return true;
      } else {
        return false;
      }
    }, this.discs + 1);
  })

  return winner;
}

var board = new Board(3, 5);

board.startNewGame();
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
