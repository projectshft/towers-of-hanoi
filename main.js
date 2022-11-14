const gameBoard = {
  board: [
    [5, 4, 3, 2, 1], // peg 1
    [], // peg 2
    [], // peg 3
  ],
  isWon: function () {
    
   if ( this.board[1].length === 5 || this.board[2].length === 5)
   return console.log ('you win!!')
  },
  print: function () {
   this.board.map((peg) => {
      
      console.log(`--- ${peg.join(' ')}\n`);
    });
  },
  move: function (from, to) {

    console.log(this.board[to - 1][this.board[to - 1].length] < this.board[from - 1][this.board[from - 1].length])

    if (this.board[to - 1][this.board[to - 1].length] > this.board[from - 1][this.board[from - 1].length]) {
      this.board[to - 1].push(this.board[from -1].pop());
      } else {
        console.log(`you can't move the things`)
    }
    
    
    this.print()

    this.isWon()
    
    
    
    
  }
}

// test in browser console by running gameBoard.move(1, 2)

