const game = {
  board: [[5, 4, 3, 2, 1], [], []],

  printBoard() {
    this.board.forEach((rod, index) => {
      console.log(`Rod ${index + 1}: ${rod.join(' - ')}`);
    });
  },

  moveDisc(from, to) {
    let firstRod = this.board[from];
    let secondRod = this.board[to];

    if (firstRod.length === 0) {
      console.log('no discs');
      this.printBoard();
    } else if (secondRod.length === 0 || firstRod[firstRod.length - 1] < secondRod[secondRod.length - 1]) {
      let poppedElement = firstRod.pop();
      secondRod.push(poppedElement);
      console.log(`from rod ${from + 1} to rod ${to + 1}.. Success!.. board is now:`);
      this.printBoard();
    } else {
      console.log(`from rod ${from + 1} to rod ${to + 1}..failed! try again.. board is:`);
      this.printBoard();
    }
  },

  recursive(numOfDisks, startingRod, targetRod, intermediateRod) {
    if (numOfDisks === 0) return targetRod
    this.recursive(numOfDisks - 1, startingRod, intermediateRod, targetRod);
    this.moveDisc(startingRod, targetRod);
    this.recursive(numOfDisks - 1, intermediateRod, targetRod, startingRod);
  },

  checkWinner() {
    if (this.board[2].length === 5 && this.board[2].every((disk, index) => disk === 5 - index)) {
      console.log("You winn!");
      this.reset();
    }
  },

  reset() {
    this.board = [...this.board];
    console.log("Game reset!");
    this.printBoard();
  },

  start() {
    this.printBoard();
  }
};
