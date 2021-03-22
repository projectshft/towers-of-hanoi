var board = {
  // Initialize starting board for game
  startingPegBoard: [
                      [5, 4, 3, 2, 1],
                      [],
                      []
                    ],
  
  // Initialize game board
  currentPegBoard: [
                    [5, 4, 3, 2, 1],
                    [],
                    []
                   ],

  // Moves discs between pegs
  moveDisc: function (startPeg, endPeg) {
    // Checks that startPeg and endPeg are between 1 - 3
    if (startPeg < 1 || startPeg > 3 || endPeg < 1 || endPeg > 3) {
      console.log('Please enter a startPeg and/or endPeg value between 1 and 3.');
      this.printBoard(this.currentPegBoard); 
      return;
    }

    // Define starting and ending pegs
    var currentPeg = startPeg - 1;
    let endingPeg = endPeg - 1;
    var startingPegValues = this.currentPegBoard[startPeg - 1];
    var endingPegValues = this.currentPegBoard[endPeg - 1];
    var startingPegLength = this.currentPegBoard[currentPeg].length;

    // Get the value of the top discs on the starting and ending pegs
    var discToMove = startingPegValues[startingPegValues.length - 1];
    var endingTopDisc = endingPegValues[endingPegValues.length - 1];

    // Sets an empty pegs top disc value to 0 if there are no discs
    if (endingTopDisc === undefined) {
      endingTopDisc = 0;
    };

    // Checks that there is a disc to move
    if (startingPegLength <= 0) {
      console.log('There is no disc to move on this peg. Please try again.');
      this.printBoard(this.currentPegBoard);
      return;
    }

    // Move the discs
    if (discToMove < endingTopDisc || endingTopDisc === 0) {
      this.currentPegBoard[endingPeg].push(discToMove);
      this.currentPegBoard[currentPeg].splice(-1, 1);
      this.checkWinner(this.currentPegBoard);
    };

    // Logs an error if user tries to put a larger disc on top of a smaller one
    if (discToMove > endingTopDisc && endingTopDisc !== 0) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');
      this.printBoard(this.currentPegBoard);
    };
  },

  // Prints board to console
  printBoard: function(pegBoard) {
    // CAN I ADD A PEG NUMBER TO THIS?
    pegBoard.map(peg => {
      console.log(`Peg: ${peg.join(' ')}`);
    });
  },

  // checks if the player has won
  checkWinner: function(currentPegBoard) {
    let winningStack = [5, 4, 3, 2, 1];
    // NEED TO SIMPLIFY THIS -- DUPLICATE CODE!
    
    if (winningStack.every(function(element, index) {
      return element === currentPegBoard[1][index]; 
      })) {
        console.log('Congratulations! You are a Tower of Hanoi MASTER!!! Play again?');
        board.currentPegBoard = board.startingPegBoard;
        this.printBoard(this.currentPegBoard);
        return;
    };

    if (winningStack.every(function(element, index) {
      return element === currentPegBoard[2][index]; 
      })) {
        console.log('Congratulations! You are a Tower of Hanoi MASTER!!! Play again?');
        board.currentPegBoard = board.startingPegBoard;
        this.printBoard(this.currentPegBoard);
        return;
    };

    if (this.currentPegBoard[1].length !== 5 || this.currentPegBoard[2].length !== 5) {
      console.log('That move was successful, board is now:');
      this.printBoard(currentPegBoard);
    };
  }   
}





