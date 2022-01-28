let originalBoard = [
  ['5', '4', '3', '2','1'],
  [],
  []
];

let board = {
  gameBoard: [
  ['5', '4', '3', '2','1'],
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
     
     console.log('That move was successful, board is now:');
     this.printBoard();
     this.checkWinner();
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
    endBoard.forEach(function(arr) {
      console.log(arr);
    })
  },
 

  checkWinner: function () {
    let winningPeg = ['5', '4', '3', '2', '1'].toString();
    let peg1 = this.gameBoard[0].toString();
    let gameBoardString = this.gameBoard.toString();
    let win = gameBoardString.includes(winningPeg);

    if (win && !peg1) {
      console.log('You Won!!!!');
      this.resetGame();
    }
  },

  resetGame: function () {
  this.gameBoard = originalBoard;
  }
}