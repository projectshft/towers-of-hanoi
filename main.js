var board = {

  pegs: [
    [3, 2, 1],
    [],
    []
  ],

  totalMoves: 0,

  move: function(fromPeg, toPeg) {
    var disc = this.pegs[fromPeg-1].pop();
    // Check to make sure
    this.pegs[toPeg-1].push(disc);

    this.totalMoves++
    //this.printBoard();
    this.checkWin();
  },

  checkMove: function() {},

  checkWin: function() {

    var discWeights = this.pegs.reduce(function(array, currentPeg) {
      array.push(currentPeg.reduce(function(sum, currentDisc) {
        return sum += currentDisc;
      }, 0));
      return array;
    }, []);

    console.log(discWeights);
    console.log(discWeights[1]);
    console.log(discWeights[2]);

    if (discWeights[1] === 6 || discWeights[2] === 6) {
      console.log('You have won in ' + this.totalMoves + ' moves. Starting new game.');
      this.resetBoard();
      console.log("------------------------------");
    }

  },

  resetBoard: function() {
    this.pegs = [ [3, 2, 1], [], [] ];
  },

  printBoard: function() {

    var printablePegs = this.pegs.map(function(peg) {
      var base = "---  "; //strings are immutable
      peg.forEach(function(disc) {
        base = base.concat(disc + " "); //so we reassign base each time
      })
      return base;
    });

    printablePegs.forEach(function(peg) {
      console.log(peg);
    });

    console.log("------------------------------");
  }

}

board.move(1, 3);
board.move(1, 2);
board.move(3, 2);
board.move(1, 3);
board.move(2, 1);
board.move(2, 3);
board.move(1, 3);
board.printBoard();
