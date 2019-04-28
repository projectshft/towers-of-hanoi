//TODO: convert logic to use filter *somewhere* per assignment directive, bc inane rubric

// Create a game module
const GameModule = (numberOfPegs, numberOfDiscs) => {
  /********************
   * Global variables
   * ******************/
  let board = [];
  let moveCounter = 0;

  const PEG_BASE = '--- ';

  // Modularize functions so some are protected from user access. Protection is great, including from cavalier advice to NOT modularize bc "You won't learn how to do that until week 6"
  /****************************************
   * A function to initialize gameboard
   * **************************************/
  const initializeBoard = () => {
    // Loop through user-specified number of pegs
    for (let peg = 0; peg < numberOfPegs; peg++) {
      board[peg] = [];
      // Populate first peg with user-specified number of discs
      for (let disc = numberOfDiscs; disc > 0; disc--) {
        if (peg === 0) {
          board[peg].push(disc);
        }
      }
    }
  };

  /************************************
   * A function to render gameboard
   * **********************************/
  const renderBoard = () => {
    // Loop through pegs; use map helper method and string each peg along bc why would you expend any effort to rectify the misinformation you gave them, even if they might waste their entire weekend trying to figure out what the f you meant?

    for (let i = 0; i < board.length; i++) {
      let stringifiedPeg = board[i].map(peggy => {
        return peggy.toString();
      });
      let gameBoard = PEG_BASE;
      // Assemble gameboard
      for (let j = 0; j < stringifiedPeg.length; j++) {
        gameBoard = gameBoard + stringifiedPeg[j] + ' ';
      }
      // Render gameboard to console
      console.log(gameBoard);
    }
  };

  /********************************************
   * A function to check whether user has won
   * / TODO: Rewrite a cleaner, clearer version of this
   * ******************************************/
  const checkStateForWinner = () => {
    let winnerCheck = board.reduce((check, pegster) => {
      if (!check) {
        return pegster.length == numberOfDiscs && pegster != board[0];
      } else {
        return true;
      }
    }, false);

    return winnerCheck;
  };

  /********************************************
   * A user-accessible function to move discs
   * ******************************************/
  const moveDisc = (pegOfOrigin, pegOfDestination) => {
    let originPeg = board[pegOfOrigin - 1];
    let destinationPeg = board[pegOfDestination - 1];
    let originDisc = originPeg[originPeg.length - 1];
    let discDestination = destinationPeg[destinationPeg.length - 1];

    /*------------------------------------------
     * ERROR HANDLING <> Check for legal moves
     (force a use of filter here?)
     * -----------------------------------------*/
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

    // Check that the disc would not be moved on top of a smaller disc
    else if (originDisc < discDestination || destinationPeg.length === 0) {
      console.log('Successful move.');
      board[pegOfDestination - 1].push(board[pegOfOrigin - 1].pop());
      moveCounter += 1;
      renderBoard();

      // Error catchall; useful for people who might receive, trust, and follow misguided advice
    } else {
      console.log('Bad move. Try again. Listen to your instinct.');
      renderBoard();
    }

    // Incite winner announcement, board reset, and invitation to play again
    if (checkStateForWinner()) {
      console.log('Winner! You won the game in ' + moveCounter + ' moves.');
      restart();
      console.log('Play again?');
      renderBoard();
    } else console.log('Next move...');
  };

  /****************************************************
   * A user-accessible function to restart game
   * **************************************************/
  const restart = () => {
    moveCounter = 0;
    initializeBoard();
  };

  initializeBoard(); // Keep board initialization as an internal function, protected from user

  /*****************************************
   * Functions to return for user access
   * **************************************/
  return {
    renderBoard: renderBoard, // Necessary to be made public for first render
    move: moveDisc, // Primary game-playing command
    restart: restart // Make the restart command available to user
  };
};

let userSpecifiedNumberOfPegs = prompt(
  'Enter the number of PEGS you want to play with, (up to 12 pegs):'
);
// Prevent user from entering too many pegs
if (userSpecifiedNumberOfPegs > 12) {
  userSpecifiedNumberOfPegs = prompt(
    "That's too many pegs. Please choose a number less than 13"
  );
}

let userSpecifiedNumberOfDiscs = prompt(
  'Now enter the number of DISCS you want to play with:'
);
// Prevent user from entering too many discs
if (userSpecifiedNumberOfDiscs > 12) {
  userSpecifiedNumberOfDiscs = prompt(
    "That's too many discs. Please choose a number less than 13"
  );
}
alert('This game is played in the console. Please open your console now.');
const game = GameModule(userSpecifiedNumberOfPegs, userSpecifiedNumberOfDiscs);
console.log(
  "Welcome to Towers of Hanoi. To play, enter your moves in this format: 'game.move(x, y)' where x is the number of the peg from which you want to move the top disc, and y is the peg you want to move the disc to. You can restart the game at any time with the command 'restart()'. Good luck!"
);
game.renderBoard();
