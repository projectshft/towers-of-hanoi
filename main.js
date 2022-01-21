var board = {
  pegs: [
    //["5", "4", "3", "2", "1"],
    ["3", "2", "1"],
    [],
    []
  ],

  printBoard: function() {
    var boardString = this.pegs.map(function(positions){
      return '--- ' + positions.toString() ;
    })
    console.log(boardString.join("\n"))
  },

  moveDisc: function(startPeg, endPeg) {
    startPeg -= 1;
    endPeg -= 1;
    if (this.pegs[endPeg] > 0 && this.pegs[endPeg] < this.pegs[startPeg]){
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: `)
      this.printBoard();
    } else {
      startPeg = this.pegs[startPeg].pop();
      endPeg = this.pegs[endPeg].push(startPeg);
      this.checkWinner();
    } 
  },

  checkWinner: function() {
    var winningPosition = 3;
    if (this.pegs[1].length === winningPosition || this.pegs[2].length === winningPosition) {
      console.log(`Winner!`)
      this.printBoard();
      this.resetGame();
    } else {
      console.log(`Successful move`)
      this.printBoard();
    }
  },

  resetGame: function() {
    console.log('Game Reset')
    this.pegs = [
      //["5", "4", "3", "2", "1"],
      ["3", "2", "1"],
      [],
      []
    ]
    this.printBoard()
  }
}

//Winner with 3 pegs
board.moveDisc(1,2)
board.moveDisc(1,3)
board.moveDisc(2,3)
board.moveDisc(1,2)
board.moveDisc(3,1)
board.moveDisc(3,2)
board.moveDisc(1,2)

//Illegal move
// board.moveDisc(1,2)
// board.moveDisc(1,2)
