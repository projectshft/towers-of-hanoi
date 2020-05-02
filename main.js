const board = {
  /* The gameInfo object will store information about the game
      The gameboard array will be filled at the start of the game, per the player's choice of peg and disc numbers 
      The gameMoves array will store all the player's completed moves
  */    
    gameInfo: {
    gameBoardArray: [],
    gameMoves: [],
    numberOfPegs: 0,
    numberOfDiscs: 0
  },

  //this function will move a disc from one peg to another IF the move is allowed, see below
  moveDisc: function (startPeg, endPeg) {

    const startPegArray = this.gameInfo.gameBoardArray[startPeg - 1];
    const endPegArray = this.gameInfo.gameBoardArray[endPeg - 1];
    const sizeOfDiscToMove = startPegArray[startPegArray.length - 1];
    const totalDiscs = this.gameInfo.numberOfDiscs;

    //this checks if there are any discs on the start peg (there has to be a disc on the peg if we want to move it)
    if (startPegArray.length === 0) {
      console.log(`There is not a disc on your starting peg. Board is still:`);
      this.printGameBoard()
      return;
    }

    //this checks if the move is legal and if so, adds the move to gameMoves array, moves the disc and checks for a win
    if (this.moveIsLegal(sizeOfDiscToMove, endPegArray)) {
      this.gameInfo.gameMoves.push([startPeg, endPeg]);
      endPegArray.push(startPegArray.pop());    //disc is removed from one peg, added to another
      this.checkForWin(totalDiscs);

    } else {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: `);
      this.printGameBoard();
    }
  },


  //this creates a array of pegs that we are allowed to move the disc to. If the desired end peg is in this array, the move is allowed by returning 'true'  
  moveIsLegal: function (discSize, endPegArray) {
    const legalPegs = this.gameInfo.gameBoardArray.filter(function (peg) {
      return peg.length === 0 || peg[peg.length - 1] > discSize;
    });

    return legalPegs.includes(endPegArray) ? true : false;
  },


  /* This function uses the reduce method to determine if there is a win
     If there is a full stack of discs on any peg but peg 1, 'isAWin' will be true
     If win is true, the winning message and gameboard will print and game will reset
  */
  checkForWin: function (totalDiscs) {
    const isAWin = this.gameInfo.gameBoardArray.reduce(function (booleanAcc, pegArray, index) {
      if (index > 0) {
        return booleanAcc || pegArray.length === totalDiscs;
      } else {
        return booleanAcc;
      }
    }, false);


    if (isAWin) {
      console.log(`Winner! You beat the game in ${this.gameInfo.gameMoves.length} moves.`);
      this.printGameBoard();
      console.log(`Here are the moves you made: \n(${this.gameInfo.gameMoves.join(') -> (')})`);
      this.resetGame();
    } else {
      console.log(`That move was successful, board is now:`)
      this.printGameBoard();
    }
  },


  //this will reset the game with all discs on the first peg
  resetGame: function () {
    this.constructTheBoard(this.gameInfo.numberOfPegs, this.gameInfo.numberOfDiscs);
    this.gameInfo.gameMoves.length = 0;
  },


  //this will print the gameboard to the console for easy viewing
  printGameBoard: function () {
    const printedMap = this.gameInfo.gameBoardArray.map(function (peg) {
      return `--- ${peg.join(' ')}\n`
    }).join('');
    console.log(printedMap);
  },


  //this will fill the gameboard array with the number of pegs and discs of the player's choosing
  startGame: function (numberOfPegs, numberOfDiscs) {
    this.gameInfo.numberOfPegs = numberOfPegs;
    this.gameInfo.numberOfDiscs = numberOfDiscs;

    this.constructTheBoard(numberOfPegs, numberOfDiscs);
    console.log(`Here is your starting gameboard, please make a move: \n(type board.moveDisc(1, 2))\n`);
    this.printGameBoard();
  },


  //this will build the board at the beginning of the game and on reset
  constructTheBoard: function(numberOfPegs, numberOfDiscs) {
    this.gameInfo.gameBoardArray.length = 0;
    for (let i = 0; i < numberOfPegs; i++) {
      this.gameInfo.gameBoardArray.push([]);
    }
    for (let i = numberOfDiscs; i > 0; i--) {
      this.gameInfo.gameBoardArray[0].push(i);
    }
  },
}



console.log(`Welcome to Towers of Hanoi! Please type: \nboard.startGame(x, y) \n(where x is the number of pegs and y is the number of discs you want to play with) \n\nFor example: board.startGame(4, 4) will be a game of 4 pegs and 4 discs. \n\nLet's go!\n`);

board.startGame(3, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);

console.log(board.gameInfo);


// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(1, 4);
// board.moveDisc(2, 4);
// board.moveDisc(3, 2);
// board.moveDisc(3, 4);
// board.moveDisc(2, 4);

// board.moveDisc(1, 2);
// board.moveDisc(2, 1);