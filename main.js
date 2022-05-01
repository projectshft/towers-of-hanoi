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
  board: [[5, 4, 3, 2, 1], [], []],

  printBoard() {
    // displaying the board using map.

    const displayBoard = this.board.map((element) => {
      console.log(`--- ${element.join(' ')}`);
    });
    return displayBoard;
  },

  moveDisc(move, moveTO) {
    // Looping through the array to access the nested arrays.
    // eslint-disable-next-line no-unreachable-loop
    for (let i = 0; i < this.board.length; i++) {
      // const pegArray = this.board[i];

      // console.log(pegArray, 'The Pegs at index I first loop');

      // Arguments assigned to the array at ___ index.
      const chosenPeg = this.board[move - 1];
      const moveToPeg = this.board[moveTO - 1];

      // Last element in each array.
      let lastElementChosenPeg = chosenPeg[chosenPeg.length - 1];
      let lastElementMoveToPeg = moveToPeg[moveToPeg.length - 1];

      // setting undefined arrays to 0;
      if (lastElementChosenPeg === undefined) {
        lastElementChosenPeg = 0;
      }
      if (lastElementMoveToPeg === undefined) {
        lastElementMoveToPeg = 0;
      }
      // Conditional statement for moving discs.
      if (
        lastElementMoveToPeg > lastElementChosenPeg ||
        lastElementMoveToPeg === 0
      ) {
        const moveDisc = chosenPeg.pop();
        moveToPeg.push(moveDisc);
        console.log(
          `That move was a success!!! The board is now: ${this.printBoard()}`
        );
        break;
      } else {
        console.log('That Move is Not Allowed');
        break;
      }
    }

    // Reset the Game if Winner
    if (this.board[1].length === 5 || this.board[2].length === 5) {
      alert('You have won!');
      this.board = [[5, 4, 3, 2, 1], [], []];
      this.printBoard();
    }
  },

  checkWinner() {
    if (this.board[1].length === 5 || this.board[2].length === 5) {
      console.log('You have won!');
    } else {
      console.log('The Game is Not Over Yet');
    }
  },
};

towersOfHanoi.printBoard();
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(3, 2);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 2);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.moveDisc(1, 3);
towersOfHanoi.moveDisc(3, 2);
towersOfHanoi.moveDisc(3, 1);
towersOfHanoi.checkWinner();
towersOfHanoi.moveDisc(2, 3);
towersOfHanoi.printBoard();
