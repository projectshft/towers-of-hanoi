let board = {
  gameBoard: [
  ['5', '4', '3', '2', '1'],
  [],
  []
],

  moveDisc: function (start, end) {
   let startPeg = this.gameBoard[start - 1];
   let endPeg = this.gameBoard[end - 1];
   let lastDiscOnStartPeg = startPeg[startPeg.length - 1];
   let lastDiscOnEndPeg = endPeg[endPeg.length - 1];
   
   if (lastDiscOnStartPeg > lastDiscOnEndPeg) {
     console.log('You cannot move a larger disc on top of a smaller one, board is still:');
     this.printBoard();
   } else {
     endPeg.push(lastDiscOnStartPeg);
     startPeg.pop(lastDiscOnStartPeg);
     this.checkWinner();
     console.log('That move was successful, board is now:');
     this.printBoard();
   }
  },
 
  printBoard: function () {
    let rows = function(arr) {
    let string = arr.join(' ');
    return ` --- ${string}`;
  };
    let endBoard = this.gameBoard.map(function(arr) {
    return rows(arr);
  });
    console.log(endBoard[0]);
    console.log(endBoard[1]);
    console.log(endBoard[2]);
  },

  checkWinner: function () {
    let winningPeg = ['5', '4', '3', '2', '1'].toString();
    let peg1 = this.gameBoard[0].toString();
    let peg2 = this.gameBoard[1].toString();
    let peg3 = this.gameBoard[2].toString();

    if (peg2 === winningPeg || peg3 === winningPeg) {
      console.log('You won!');
      this.resetGame();
    }
  },

  resetGame: function () {
    this.gameBoard[0] = ['5', '4', '3', '2', '1'];
    this.gameBoard[1] = [];
    this.gameBoard[2] = [];
  }
} 