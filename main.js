const gameBoard = {
  board: [
    [5, 4, 3, 2, 1], // peg 1
    [], // peg 2
    [], // peg 3
  ],
  isWon: function () {
    // check if the second or third peg has all the disks
   if ( this.board.peg1 === 0 && this.board.peg3 ===0)
   return win?
  },
  print: function () {
   this.board.map((peg) => {
      // use map to print each peg
      return peg.println 
    });
  },
  move: function (from, to) {
    // accept two arguments, from and to

    // check if the move is valid
    if (this.board.disc < //the number of the disc its going on top of)
    
    // if valid, move the disk
    .push??
    // print the board
    println
    // check if the game is won
    if (this.board.peg2 === 5)
    return console.log(You Win!!)
    
  }
}

// test in browser console by running gameBoard.move(1, 2)

console.log(gameBoard)