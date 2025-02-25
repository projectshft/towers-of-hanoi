const towers = {
  //The starting board represented as a 2D array
  board: [[5,4,3,2,1],[],[]], 

  /**
   * Prints the current state of the board
   * Display peg with contents
   */
  printBoard() {
    const formattedBoard = this.board
      .map((peg)=> `--- ${peg}`)
      .join("\n")
    console.log(formattedBoard);
   },

  //Move the disc from source peg (fromPeg) to destination (toPeg)
  moveDisc(fromPeg, toPeg) {
      //Convert to 0-based indexing
      fromPeg -= 1; 
      toPeg -= 1; 

      //Get the disc from source peg
      const disc = this.board[fromPeg].pop(); 
      
      //Check if there is a disc to move
      if (disc === undefined) {
        console.log(`Invalid move: there are no discs to move on Peg ${fromPeg + 1}`);
        return;
      }

      //Get the top disc of the destination peg
      const topOfToPeg = this.board[toPeg][this.board[toPeg].length - 1]

      //Check to make sure the moved disc isn't larger than the one under it
      if (
        this.board[toPeg].length > 0 &&
        this.board[toPeg][this.board[toPeg].length - 1] < disc
      ) {
        //if the moved disc is larger, log error and move disc back
        console.log ('Invalid move: the moved disc is larger than the disc underneath it'); 
        this.board[fromPeg].push(disc); 
        return; 
      }

      //If its a valid move, move disc to destination 
      this.board[toPeg].push(disc); 
      console.log('Valid move'); 
      this.printBoard(); 

      //Check if game is won
      this.checkWinner(); 
  },

    /**
     * Checks if all discs moved to Peg 2 or 3
     * If true, resets the board
     */
    checkWinner() {
      if (this.board[1].length === 5 || this.board[2].length === 5){
        console.log("Congrats, you've won the game!"); 
        this.resetBoard(); 
        return; 
      }

    }, 
    resetBoard() {
      this.board = [[5,4,3,2,1],[],[]]; 
      return; 
    }

  }


  


