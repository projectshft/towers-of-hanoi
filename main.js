
//This Board module will return a board object that will limit the player to starting a game and moving a disc. Game info, including accessing the game board, will be kept private

const Board = function(totalPegs, totalDiscs) {
  /* The gameInfo object will store information about the game
      The gameboard array will be filled at the start of the game, from totalPegs and totalDiscs values
      The gameMoves array will store all the player's completed moves
  */
  const gameInfo = { 
    gameBoardArray: [],
    gameMoves: [],
    totalPegs: totalPegs,
    totalDiscs: totalDiscs
  };


  //this function will move a disc from one peg to another IF the move is allowed, see below
  const moveDisc = function (startPeg, endPeg) {

    const startPegArray = gameInfo.gameBoardArray[startPeg - 1] || null;
    const endPegArray = gameInfo.gameBoardArray[endPeg - 1] || null;


    // This checks if the player has chosen pegs that are on the board
    if (startPegArray === null || endPegArray === null) {
      console.log('You must choose pegs that are on the board. Board is still:');
      printGameBoard()
      return;
    }

    // This checks if there are any discs on the start peg (there has to be a disc on the peg if we want to move it)
    if (startPegArray.length === 0) {
      console.log(`There is not a disc on your starting peg. Board is still:`);
      printGameBoard()
      return;
    } 

    // If the player chooses an acceptable start peg(above), we can grab the disc and check if the move is legal (meaning we can only place a smaller disc on a larger disc). If it's legal, we'll add the move to gameMoves array, move the disc and check for a win
    const sizeOfDiscToMove = startPegArray[startPegArray.length - 1];

    if (moveIsLegal(sizeOfDiscToMove, endPegArray)) {
      gameInfo.gameMoves.push([startPeg, endPeg]);
      endPegArray.push(startPegArray.pop());    //disc is removed from one peg, added to another
      checkForWin();

    } else {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: `);
      printGameBoard();
    }
  };


  // This creates a array of pegs that we are allowed to move the disc to. If the desired end peg is in this array, the move is allowed by returning 'true'  
  const moveIsLegal = function (discSize, endPegArray) {
    const legalPegs = gameInfo.gameBoardArray.filter(function (peg) {
      return peg.length === 0 || peg[peg.length - 1] > discSize;
    });
    
    return legalPegs.includes(endPegArray) ? true : false; 
  };


  /* This function uses the reduce method to determine if there is a win
     If there is a full stack of discs on any peg but peg 1, 'isAWin' will be true
     If win is true, the winning message and gameboard will print and game will reset
  */
  const checkForWin = function () {
    const isAWin = gameInfo.gameBoardArray.reduce(function (booleanAcc, pegArray, index) {
      if (index > 0) {
        return booleanAcc || pegArray.length === gameInfo.totalDiscs;
      } else {
        return booleanAcc;
      }
    }, false);


    if (isAWin) {
      printGameBoard();
      console.log(`Winner! You beat the game in ${gameInfo.gameMoves.length} moves.\nHere are the moves you made: \n(${gameInfo.gameMoves.join(') -> (')})\n`);
      refreshTheBoard();
      console.log(`Want to play again with the same board? Here it is, just Type board.moveDisc() like before!\n`);
      printGameBoard();
      console.log(`Want to play with a new board? Just type board.startGame(x, y) where x and y are your pegs and discs, and you'll be good to go!`);
    
    } else {
      console.log(`That move was successful, board is now:`)
      printGameBoard();
    }
  };


  // This will print the gameboard array to the console for easy viewing
  const printGameBoard = function () {
    const printedMap = gameInfo.gameBoardArray.map(function (peg) {
      return `--- ${peg.join(' ')}\n`
    }).join('');
    console.log(printedMap);
  };


  /* -This will set the game's number of pegs and discs to the players's choosing.
     -If the player doesn't specify the numbers of pegs and discs, they will default to the previous game, or default to the numbers set from when board object was created (eg, board = Board(3, 3)).
     -The board will then refresh and print
  */
  const startGame = function (numberOfPegs = gameInfo.totalPegs, numberOfDiscs = gameInfo.totalDiscs) {
    gameInfo.totalPegs = numberOfPegs;
    gameInfo.totalDiscs = numberOfDiscs;
    refreshTheBoard();
    console.log(`Here is your gameboard, please make a move: type board.moveDisc(1, 2)`);
    printGameBoard();
  };


  // This will build the board and clear the moves array after winning or starting a new game
  const refreshTheBoard = function() {
    gameInfo.gameMoves.length = 0;
    gameInfo.gameBoardArray.length = 0;
    for (let i = 0; i < gameInfo.totalPegs; i++) {
      gameInfo.gameBoardArray.push([]);
    }
    for (let i = gameInfo.totalDiscs; i > 0; i--) {
      gameInfo.gameBoardArray[0].push(i);
    }
  };

  return {
    startGame: startGame,
    moveDisc: moveDisc,
  }
};


const board = Board(3, 3);

console.log(`Welcome to Towers of Hanoi! \n\nThe game will default to 3 pegs and 3 discs. \nType 'board.startGame()' to play!\n\nIf you'd like to play with a different number of pegs and discs, type\n'board.startGame(x, y)'  (x = number of pegs, y = number of discs) \n\nFor example: board.startGame(4, 4) will be a game of 4 pegs and 4 discs. \n\nLet's go!\n`);

board.startGame();

// board.moveDisc(4, 1);
// board.moveDisc(0, 4);
// board.moveDisc(1, 2);

// // board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 1);
// board.moveDisc(3, 1);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);

// board.moveDisc(1, 2);
// board.startGame(4, 4);


//board.startGame(4, 4);

// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(1, 4);
// board.moveDisc(2, 4);
// board.moveDisc(3, 2);
// board.moveDisc(3, 4);
// board.moveDisc(2, 4);

// board.startGame();
