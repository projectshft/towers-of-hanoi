var Board = {
  board: [
    ['5', '4', '3', '2', '1'],
    [],
    []
  ],

  printBoard: function () {
    console.log('--- ' + this.board[0].join(' '));
    console.log('--- ' + this.board[1].join(' '));
    console.log('--- ' + this.board[2].join(' '));
  },

  startGame: function () {
    this.printBoard();
  },

  moveDisk: function (startPeg, endPeg) {
    var peg1 = this.board[startPeg - '1'];
    var peg2 = this.board[endPeg - '1'];
    var topDisk = peg1[peg1.length - '1'];
    var endTopDisk = peg2[peg2.length - '1'];

    if(topDisk > endTopDisk) {
      console.log('Error: Invalid move, try a different move');
    } else {
      peg2.push(topDisk);
      peg1.pop();
      console.clear();
      this.printBoard();
      this.checkWinner();
    };
  },

  checkWinner: function () {
    if(this.board[1].length === 5 || this.board[2].length === 5){
      console.clear();
      console.log('Game Over: You Win!');
      console.log('Play again?');
      this.newGame();
    };
  },

  newGame: function () {
    this.board = [['5', '4', '3', '2', '1'], [], []];
    this.startGame();
  },
};


Board.moveDisk(1, 2);
Board.moveDisk(1, 3);
Board.moveDisk(2, 3);
Board.moveDisk(1, 2);
Board.moveDisk(3, 1);
Board.moveDisk(3, 2);
Board.moveDisk(1, 2);
Board.moveDisk(1, 3);
Board.moveDisk(2, 3);
Board.moveDisk(2, 1);
Board.moveDisk(3, 1);
Board.moveDisk(2, 3);
Board.moveDisk(1, 2);
Board.moveDisk(1, 3);
Board.moveDisk(2, 3);
Board.moveDisk(1, 2);
Board.moveDisk(3, 2);
Board.moveDisk(3, 1);
Board.moveDisk(2, 1);
Board.moveDisk(3, 2);
Board.moveDisk(1, 3);
Board.moveDisk(3, 2);
Board.moveDisk(1, 3);
Board.moveDisk(2, 3);
Board.moveDisk(2, 1);
Board.moveDisk(3, 2);
Board.moveDisk(3, 1);
Board.moveDisk(2, 1);
Board.moveDisk(3, 2);
Board.moveDisk(1, 2);
Board.moveDisk(1, 3);
Board.moveDisk(2, 3);
Board.moveDisk(1, 2);
Board.moveDisk(3, 1);
Board.moveDisk(3, 2);
Board.moveDisk(1, 2);

