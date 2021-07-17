
var Game = function () {
  this.board= [];
  this.pegCount = 3;
  this.discCount = 5;
}

Game.prototype.newGame = function () {
  this.board[0] = ["5", "4", "3", "2", "1"];
  this.board[1] = [];
  this.board[2] = [];
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
    acc += currPeg.join(' ') + '\n';
    return acc;
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

    if (topDisc2 > topDisc1 || !topDisc2) {
      destPeg.push(topDisc1);
      sourcePeg.pop();
      console.log("Move successful, board is now: ");
    } else {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
    }
  
    this.printBoard();

    if (this.checkWinner(destPeg)) {
      console.log("********** \n Winner! \n**********");
      this.newGame();
    }
    
  } else {
    console.log("There aren't that many pegs!");
  }
}

Game.prototype.checkWinner = function (peg) {
  if (peg != 0 && peg.length == 5) {

    var isWinner = peg.reduce(function (hasWon, curr, index) {
      if (index > 0) {
        var previous = peg[index - 1];

        if (curr != previous - 1) {
          hasWon = false;
        }
      }
      return hasWon;
    }, true);

    return isWinner;
  }
  return false;
}

var game = new Game();
game.newGame();
