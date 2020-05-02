const board = {
  //the gameboard will be filled at the start of the game with the number of pegs and discs the player wants to play with
  gameBoardArray: [],

  //this puts the player's moves into an array for tracking and to know how many moves it takes to win
  gameMoves: [],

  //this function will move a disc from one peg to another if the move is allowed, see below
  moveDisc: function (startPeg, endPeg) {

    const startPegArray = this.gameBoardArray[startPeg - 1];
    const endPegArray = this.gameBoardArray[endPeg - 1];
    const sizeOfDiscToMove = startPegArray[startPegArray.length - 1];

    //this checks if there are any discs on the start peg, because there has to be a disc on the peg if we want to move it
    if (startPegArray.length === 0) {
      console.log(`There is not a disc on your starting peg. Board is still:`);
      this.printGameBoard()
      return;
    }

    //this checks if the move is legal and if so, adds the move to gameMoves array, moves the disc and checks for a win
    if (this.moveIsLegal(sizeOfDiscToMove, endPegArray)) {
      this.gameMoves.push([startPeg, endPeg]);
      endPegArray.push(startPegArray.pop());
      this.checkForWin(endPegArray);

    } else {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: `);
      this.printGameBoard();
    }
  },

  //this creates a array of pegs that we are allowed to move the disc to. If the desired end peg is in this array, the move is allowed by returning 'true'  
  moveIsLegal: function (discSize, endPegArray) {
    const legalPegs = this.gameBoardArray.filter(function (peg) {
      return peg.length === 0 || peg[peg.length - 1] > discSize;
    });

    return legalPegs.includes(endPegArray) ? true : false;
  },

  //this needs work, we have to check for a win by using reduce function, and also check that the full peg is not peg 1
  checkForWin: function (endPegArray) {
    if (endPegArray.length === 4 && this.gameBoardArray[0].length === 0) {
      console.log(`Winner! You beat the game in ${this.gameMoves.length} moves.`);
      this.printGameBoard();
      console.log(`Here are the moves you made: \n(${this.gameMoves.join(') -> (')})`);
      this.resetGame(endPegArray);
    } else {
      console.log(`That move was successful, board is now:`)
      this.printGameBoard();
    }
  },

  //this will reset the game with all discs on the first peg
  resetGame: function (endPegArray) {
    this.gameBoardArray[0] = endPegArray;
    endPegArray.length = 0;
    this.gameMoves.length = 0;
  },


  //this will print the gameboard to the console for easy viewing
  printGameBoard: function () {
    const printedMap = this.gameBoardArray.map(function (peg) {
      return `--- ${peg.join(' ')}\n`
    }).join('');
    console.log(printedMap);
  },

  //this will fill the gameboard array with the number of pegs and discs the players wants to play with 
  startGame: function (numberOfPegs, numberOfDiscs) {
    for (let i = 0; i < numberOfPegs; i++) {
      this.gameBoardArray.push([]);
    }
    for (let i = numberOfDiscs; i > 0; i--) {
      this.gameBoardArray[0].push(i);
    }
    console.log(`Here is your starting gameboard, please make a move:`);
    this.printGameBoard();
  }


}


//still need to print the initial game board and print the winning game board

// board.startGame();

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
// board.moveDisc(1, 2);

console.log(`Welcome to Towers of Hanoi! Please type: \nboard.startGame(x, y) \n(where x is the number of pegs and y is the number of discs you want to play with) \n\nFor example: board.startGame(4, 4) will be a game of 4 pegs and 4 discs. \n\nLet's go!\n`);

board.startGame(4, 4);


board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 4);
board.moveDisc(2, 4);
board.moveDisc(3, 2);
board.moveDisc(3, 4);
board.moveDisc(2, 4);

// board.moveDisc(1, 2);
// board.moveDisc(2, 1);