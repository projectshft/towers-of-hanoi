var board = {
// Start a game with directions
  directions: function() {
    var gameDirections = [`TOWERS OF HANOI`, 
                      `Directions: Towers of Hanoi is an ancient puzzle played with three stacks and five differently-sized discs. At the start, all the discs are in the leftmost stack, with the largest disc on the bottom and the smallest on the top. The object is to get all the discs, stacked from biggest to smallest over to the right most peg with the following rules:`, 
                      `- You can only move one disc per move, and you can only move the top disc on a stack.`, 
                      `- You can't move a larger disc on top of a smaller disc. `, 
                      `- Discs can only be moved to empty pegs or on top of larger discs.`, 
                      `- To start the game, type in board.startGame(numPegs, numDiscs) and hit enter. numPegs represents the numbers of pegs you would like the game to have. numDiscs represents how many discs you would like your game to have.`
                    ];

    gameDirections.map((direction) => {
      console.log(direction);
    });
  },

  // Builds game board based on user input
  startGame: function(numPegs, numDiscs) {
    if (numPegs < 3 || numDiscs < 1) {
      console.log('The number of pegs must be greater than or equal to 3 and the number of discs must be greater than 0! Please try again!');
      return;
    };

    var pegBoard = Array(numPegs).fill().map(() => Array()); 

    for (let discs = numDiscs; discs > 0; discs--) {
      pegBoard[0].push(discs);
    };

    console.log(`- To move a disc, type into the console board.moveDisc(numberOne, numberTwo). numberOne is the peg you want to move from. numberTwo is disc you want to move the peg to. For example, board.moveDisc(1, 2) would move a disc from peg 1 to peg 2. Good luck!`);
    this.printBoard(pegBoard);
    board.startingPegBoard = pegBoard;
    board.currentPegBoard = JSON.parse(JSON.stringify(pegBoard));
  },

  // Placeholders for game boards
  startingPegBoard: [],
  currentPegBoard: [],

  // Moves discs between pegs
  moveDisc: function (startPeg, endPeg) {
    // Checks that startPeg and endPeg are between 1 - 3
    if (startPeg < 1 || startPeg > this.numPegs || endPeg < 1 || endPeg > this.numPegs) {
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
    pegBoard.map((peg, index) => {
      console.log(`Peg ${index + 1}: ${peg.join(' ')}`);
    });
  },

  // checks if the player has won
  checkWinner: function(currentPegBoard) {
    var winningStack = this.startingPegBoard[0];
    console.log('winningStack: ', winningStack);

    // checks if the right most stack has the winning order
    if (winningStack.every(function(element, index) {
      return element === currentPegBoard[currentPegBoard.length - 1][index]; 
      })) {
        console.log('Congratulations! You are a Tower of Hanoi MASTER!!! Play again?');
        board.directions();
        return;
    };

    // Reprints the board to continue game play
    if (this.currentPegBoard[1].length !== winningStack.length || this.currentPegBoard[2].length !== winningStack.length) {
      console.log('That move was successful, board is now:');
      this.printBoard(currentPegBoard);
    };
  }   
};

board.directions();