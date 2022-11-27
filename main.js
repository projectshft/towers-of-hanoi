var gameBoard = {
  board: [
    [2],
    [1],
    [5, 4, 3],
  ],
  isWon: function () {
    var won = this.board[1].length === 5 || this.board[2].length === 5;
    if (won) {
      console.log('You won!');
      return true;
    }
  },
  print: function () {
   this.board.map((tower) => {
      console.log(`--- ${tower.join(' ')}\n`);
    });
  },
  confirmValidMove: function (startTower, endTower) {
    if (typeof startTower !== 'number' || typeof endTower !== 'number') {
      console.log('Please enter a number');
      return false;
    }
    if (startTower < 1 || startTower > 3 || endTower < 1 || endTower > 3) {
      console.log('Please enter a number between 1 and 3');
      return false;
    }
    if (this.board[startTower - 1].length === 0) {
      console.log('There are no disks in this tower');
      this.print()
      return false;
    }
    console.log('start', this.board[startTower - 1][this.board[startTower - 1].length - 1]);
    console.log('end', this.board[endTower - 1][this.board[endTower - 1].length - 1]);
    if (this.board[startTower - 1][this.board[startTower - 1].length - 1] > this.board[endTower - 1][this.board[endTower - 1].length - 1]) {
      console.log('You cannot place a larger disk on top of a smaller disk');
      this.print()
      return false;
    }
    return true;
  },
  move: function (from, to) {
    if (this.confirmValidMove(from, to)) {
      this.board[to - 1].push(this.board[from - 1].pop());
      this.print();
      this.isWon();
    }
  },
};

// test in browser console by running gameBoard.move(1, 2)


