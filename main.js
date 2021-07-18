var boardArr = [];

var board = {

  initializeGame: function() {
    boardArr = [ ['5','4','3','2','1'], [], [] ];
    console.log('Game begin, board is:');
    this.printBoard();
  },

  printBoard: function() {
    var pegDisplay =  boardArr.map(function(peg) {
      return ('--- '+peg.join(' '));
     })
     console.log(pegDisplay[0]);
     console.log(pegDisplay[1]);
     console.log(pegDisplay[2]);
  },

  moveDisc: function(fromPeg,toPeg) {
    if(fromPeg < 1 || fromPeg > 3) {
      console.log(`Peg ${fromPeg} does not exist, board is still:`);
      this.printBoard();
    } else if(toPeg < 1 || toPeg > 3) {
      console.log(`Peg ${toPeg} does not exist, board is still:`);
      this.printBoard();
    } else if(fromPeg === toPeg) {
      console.log(`That disc is already on peg ${toPeg}, board is still:`);
      this.printBoard();
    } else if(boardArr[fromPeg-1].length < 1) {
      console.log(`There are no discs on peg ${fromPeg}, board is still:`);
      this.printBoard();
    } else if
    (boardArr[fromPeg-1][boardArr[fromPeg-1].length-1] > boardArr[toPeg-1][boardArr[toPeg-1].length-1] ) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');
      this.printBoard();
    } else {
      var liftedPeg = boardArr[fromPeg-1].splice(boardArr[fromPeg-1].length-1,1);
      boardArr[toPeg-1].push(liftedPeg[0]);
      console.log('That move was successful, board is now:');
      this.printBoard();
      this.checkWinner();
    }
  },

  checkWinner: function() {
    var winCondition = '54321';
    if (boardArr[1].join('') === winCondition || boardArr[2].join('') === winCondition) {
      console.log('Congratulations, you win!');
      console.log('Resetting...');
      this.initializeGame();
    }
  }
  
}

board.initializeGame();
