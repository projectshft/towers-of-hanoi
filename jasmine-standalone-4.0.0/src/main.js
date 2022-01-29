const originalBoard = [
  ['5', '4', '3', '2','1'],
  [],
  []
];

let winPeg = ['5', '4', '3', '2','1'];

const board = {
  gameBoard: [
  ['5', '4', '3', '2','1'],
  [],
  []
  ],

  amountOfPegs: function (pegs) {
    for (let i = 0; i < pegs - 3; i++) {
      this.gameBoard.push([]);
  }
},

  amountOfDiscs: function (discs) {
    this.gameBoard[0] = [];
    winPeg = [];
    for (let i = discs; i > 0; i--) {
      this.gameBoard[0].push(i.toString());
      winPeg.push(i.toString());
  }
},

  moveDisc: function (start, end) {
    const startPeg = this.gameBoard[start - 1];
    const endPeg = this.gameBoard[end - 1];
    const lastDiscOnStartPeg = startPeg[startPeg.length - 1];
    const lastDiscOnEndPeg = endPeg[endPeg.length - 1];
   
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
    const rows = function(arr) {
    const string = arr.join(' ');
    return ` --- ${string}`;
    };

    const endBoard = this.gameBoard.map(function(arr) {
    return rows(arr);
    });

    endBoard.forEach(function(arr) {
      console.log(arr);
    })

     /* This is how I printed the board without using forEach, but I couldn't figure out how to make the game flexible (able to change # of discs and pegs) without using forEach
    console.log(endBoard[0]);
    console.log(endBoard[1]);
    console.log(endBoard[2]);
    */

  },
 
  checkWinner: function () {
    const winningPeg = winPeg.toString();
    console.log(winningPeg);
    const peg1 = this.gameBoard[0].toString();
    const gameBoardString = this.gameBoard.toString();
    const win = gameBoardString.includes(winningPeg);
    if (win && !peg1) {
      console.log('You Won!!!!');
      this.resetGame();
    }
  },

  resetGame: function () {
    this.gameBoard = originalBoard;
  },
}


