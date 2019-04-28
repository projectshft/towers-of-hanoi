// Create a game module
const GameModule = (numberOfPegs, numberOfDiscs) => {
  /********************
   * Global variables
   * ******************/
  let board = [];
  let moveCounter = 0;

  const PEG_BASE = '--- ';

  /****************************************
   * A function to initialize game board
   * **************************************/
  const initializeBoard = () => {
    // Loop through user-specified number of pegs
    for (let peg = 0; peg < numberOfPegs; peg++) {
      board[peg] = [];
      for (let disc = numberOfDiscs; disc > 0; disc--) {
        if (peg === 0) {
          board[peg].push(disc);
        }
      }
    }
  };

  /************************************
   * A function to render game board
   * **********************************/
  const renderBoard = () => {
    for (let i = 0; i < board.length; i++) {
      let stringifiedPeg = board[i].map(peggy => {
        return peggy.toString();
      });
      let output = PEG_BASE;
      for (let j = 0; j < stringifiedPeg.length; j++) {
        output += stringifiedPeg[j] + ' ';
      }
      console.log(output);
    }
  };

  const checkWinner = () => {
    let result = board.reduce((state, peg) => {
      if (!state) {
        return peg.length == numberOfDiscs && peg != board[0];
      } else {
        return true;
      }
    }, false);

    return result;
  };

  const moveDisc = (pegOfOrigin, pegOfDestination) => {
    let originPeg = board[pegOfOrigin - 1];
    let destinationPeg = board[pegOfDestination - 1];
    let originDisc = originPeg[originPeg.length - 1];
    let discDestination = destinationPeg[destinationPeg.length - 1];
    // ERROR HANDLING
    // Check that disc exists on origin peg
    if (originDisc === undefined) {
      console.log('Please choose a peg with at least one disc on it.');
      renderBoard();

      // Check that an appropriate number is given for the origin peg
    } else if (pegOfOrigin < 1 || pegOfOrigin > numberOfPegs) {
      console.log('Please choose a peg number, 1 through ', numberOfPegs);
      renderBoard();
    }
    // Check that an appropriate number is given for the destination peg
    else if (pegOfDestination < 1 || pegOfDestination > numberOfPegs) {
      console.log('Please choose a peg number, 1 through ', numberOfPegs);
      renderBoard();
    }

    //Check that the disc would not be moved on top of a smaller disc
    else if (originDisc < discDestination || destinationPeg.length === 0) {
      console.log('Successful move.');
      board[pegOfDestination - 1].push(board[pegOfOrigin - 1].pop());
      moveCounter += 1;
      renderBoard();
      // Error catchall
    } else {
      console.log('Illegal move. Please try another.');
      renderBoard();
    }

    if (checkWinner()) {
      console.log('Winner! You won the game in ' + moveCounter + ' moves.');
      reset();
      console.log('Play again?');
      renderBoard();
    } else console.log('Next move...');
  };

  const reset = () => {
    moveCounter = 0;
    initializeBoard();
  };

  initializeBoard(); // Keep board initialize as an internal function, protected from user

  // Functions to return for user access
  return {
    renderBoard: renderBoard, // Necessary for first render
    move: moveDisc, // Primary game-playing command
    reset: reset // Make the reset command available to user
  };
};

let userSpecifiedNumberOfPegs = prompt(
  'Enter the number of pegs you want to play with, (up to 12 pegs):'
);
// Error handling
if (userSpecifiedNumberOfPegs > 12) {
  userSpecifiedNumberOfPegs = prompt(
    "That's too many pegs. Please choose a number less than 13"
  );
}

let userSpecifiedNumberOfDiscs = prompt(
  'Now enter the number of discs you want to play with:'
);
// Error handling
if (userSpecifiedNumberOfDiscs > 12) {
  userSpecifiedNumberOfDiscs = prompt(
    "That's too many discs. Please choose a number less than 13"
  );
}

const game = GameModule(userSpecifiedNumberOfPegs, userSpecifiedNumberOfDiscs);
console.log(
  "Welcome to Towers of Hanoi. To play, enter your moves in this format: 'game.move(x, y)' where x is the number of the peg from which you want to move the top disc, and y is the peg you want to move the disc to. You can reset the game at any time with the command 'reset()'. Good luck!"
);
game.renderBoard();
