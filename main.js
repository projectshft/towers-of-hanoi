var board = {
  pegs: [
    [5, 4, 3, 2, 1],
    [],
    []
  ],
  moveDisc: function (startPeg, endPeg) {
    startPeg -= 1;
    endPeg -= 1;
    if (this.pegs[endPeg] > 0 && this.pegs[endPeg] < this.pegs[startPeg]){
      console.log(`You cannot move a larger disc on top of a smaller one, board is still: `)
    } else {
      startPeg = this.pegs[startPeg].pop();
      endPeg = this.pegs[endPeg].push(startPeg);
      printBoard;
      this.checkWinner();
    } 
    var printBoard = this.pegs.map(function (peg){
      console.log(peg);
    });    
  },
  checkWinner: function() {
    var startPos = 5;
    if (this.pegs[2].length === startPos || this.pegs[1].length === startPos){
      console.log(`winner!`);
    } else {
      console.log(`That move was successful, board is now:`)
    }
  },
  
};




