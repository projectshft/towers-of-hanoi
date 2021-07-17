
var Game = function (pegCount, discCount) {
  this.board = [];
  this.pegCount = pegCount;
  this.discCount = discCount;
}

Game.prototype.newGame = function () {
  this.board[0] = [];

  for (var i = this.discCount; i > 0; i--) {
    var disc = i.toString();
    this.board[0].push(disc);
  }

  for (var i = 1; i < this.pegCount; i++) {
    this.board[i] = [];
  }

  console.log("New game started!");
  this.printBoard();
}

Game.prototype.printBoard = function () {
  var printArr = this.board.map(function (peg) {
    var pegLine = "---";
    var newArr = [pegLine].concat(peg);
    return newArr;
  })

  var printStr = printArr.reduce(function (acc, currPeg) { 
    return acc += currPeg.join(' ') + '\n';;
  }, '')

  console.log(printStr);
}

Game.prototype.moveDisc = function (peg1, peg2) {
  peg1--;
  peg2--;
  var sourcePeg = this.board[peg1];
  var destPeg = this.board[peg2];

  if (peg1 < this.board.length && peg2 < this.board.length) {
    
    var topDisc1 = sourcePeg[sourcePeg.length - 1];
    var topDisc2 = destPeg[destPeg.length - 1];

    if (!topDisc1) {
      console.log("There's no disc there! Board is still: ")
    } else {
      if (topDisc2 > topDisc1 || !topDisc2) {
        destPeg.push(topDisc1);
        sourcePeg.pop();
        console.log("Move successful, board is now: ");
      } else {
        console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
      }
    }
    
    this.printBoard();

    if (this.checkWinner(destPeg) && peg2 != 0) {
      console.log("********** \n Winner! \n**********");
      this.newGame();
    }
    
  } else {
    console.log("There aren't that many pegs!");
  }
}

Game.prototype.checkWinner = function (peg) {
  if (peg.length == this.discCount) {
    return true;
  }
  return false;
}

var game = new Game(6, 3);
game.newGame();
