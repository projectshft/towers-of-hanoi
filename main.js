const board = {
  gameBoardArray: [
    [4, 3, 2, 1],
    [],
    [],
    []
  ], 

  //keep track of moves, use an array becuase moves are ordered
  gameMoves: [], 

  //try putting the moveDisc method inside the game object  
  moveDisc: function(startPeg, endPeg) {
    
    const startPegArray = this.gameBoardArray[startPeg - 1];
    const endPegArray = this.gameBoardArray[endPeg - 1];
    const discToMove = startPegArray[startPegArray.length - 1];

    //this puts the player's moves in the gameMoves array for tracking and to know how many moves it takes to win
    
  
    //this checks if there are any discs on the start peg
    if (startPegArray.length === 0) {
      console.log(`There is not a disc on your starting peg. Board is still:`);
      this.printGameBoard()
      return;
    }
    
    //this checks if the move is legal and if so, adds the move to gameMoves array, moves the disc and checks for a win
    if (this.moveIsLegal(discToMove, endPegArray)) {
      this.gameMoves.push([startPeg, endPeg]);
      endPegArray.push(startPegArray.pop());
      this.checkForWin(endPegArray);
     

    } else {
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: `);
      this.printGameBoard();
    } 
   
  }, 


  moveIsLegal: function(discValue, endPegArray) {
    const legalPegs = this.gameBoardArray.filter(function(peg) {
      return peg.length === 0 || peg[peg.length - 1] > discValue;
    });
    
    if (legalPegs.includes(endPegArray)) {
      return true;
    } else {
      return false;
    }
    
  }, 

  checkForWin: function(endPegArray) {
    
  //this needs work, we have to check for a win by using reduce function, and also check that the full peg is not peg 1
    if (endPegArray.length === 4) {
      console.log(`Winner! You beat the game in ${this.gameMoves.length} moves.`);
      console.log(`Here are the moves you made: ${this.gameMoves}`)
      this.resetGame(endPegArray);
    } else {
      console.log(`That move was successful, board is now:`)
      this.printGameBoard();
    }
  },
  
  resetGame: function(endPegArray) {
    endPegArray.splice(0, 4);
    this.gameBoardArray[0].push(4, 3, 2, 1);
  },

  printGameBoard: function() {
    const printedMap = this.gameBoardArray.map(function(peg) {
      return `--- ${peg.join(' ')}\n` 
    }).join('');
    console.log(printedMap);
  }
} 


//still need to print the initial game board and print the winning game board



board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 4);
board.moveDisc(2, 4);
board.movDisc(3, 2);
board.moveDisc(3, 4);
board.moveDisc(2, 4);

// board.moveDisc(1, 2);
// board.moveDisc(1, 2);

