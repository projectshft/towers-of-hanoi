console.log('hello world');

// 1: Need to create a board, representing 3 pegs & 5 discs.
// 2: Print the board horizontally using map at least once.
// 3: Game must progress by players submitting moves and the game accepting or rejecting the moves.
// 4: There should be an object responsible for maintaining the state of the board.
// 5: There should be a way to moves discs from one peg to another.
// 6: There should be a check winner function.
// 7: Once a player wins, the game should automatically end by announcing the winner and reset for a new game.
// 8: As a bonus no for loops.

const towersOfHanoi = {
  board: [[5, 4, 3, 2], [], [1]],

  printBoard() {
    // displaying the board using map.
    this.board.map((element) => {
      console.log(`--- ${element.join(' ')}`);
    });
  },

  moveDisc(selected, moveTO) {
    // nested for loop to access the disc and index.
    this.board.forEach((element, index, array) => {
      // console.log(index, 'index');
      // console.log(array, 'array');
      // console.log(element, 'peg');

      // choosing the peg
      const currentPeg = array[selected - 1];
      const letsMove = array[moveTO - 1];

      console.log(currentPeg, 'currentPeg');
      console.log(letsMove, 'where to move');

      // console.log(currentPeg[currentPeg.length - 1], 'cp last element');
      // console.log(letsMove[letsMove.length - 1], 'Lm last element');

      const currentPegLe = currentPeg[currentPeg.length - 1];
      const letsMoveLe = letsMove[letsMove.length - 1];

      console.log(currentPegLe, 'Current Peg Last Element');
      console.log(letsMoveLe, 'Lets Move Last Element');

      if (currentPegLe > letsMoveLe) {
        const move = currentPeg.pop();
        console.log(move, 'move');
        letsMove.push(move);
      }

      // peg.forEach((disc, index) => {
      //   // console.log(index, 'index');
      //   console.log(disc, 'disc');
      // });
    });
  },

  checkWinner() {},
};
console.log(towersOfHanoi.board);
towersOfHanoi.printBoard();
towersOfHanoi.moveDisc(1, 2);
