var board = {

  // For user functionality, we create an initializer function
  // that determines peg's length x and populates index 0 with numbers
  // 1 - y. We also create a disc weight (using reduce, return 1, then add 2, then...)
  pegs: [
    [3, 2, 1],
    [],
    []
  ],

  totalMoves: 0,

  move: function(fromPeg, toPeg) {
    if (this.checkMove(fromPeg)) {

      var disc = this.pegs[fromPeg - 1].pop();
      this.pegs[toPeg - 1].push(disc);
      this.totalMoves++;
      console.log("That move was successful, board is now: ");
      this.printBoard();
      this.checkWin();
    } else {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
      this.printBoard();
    }
  },
  //We will return a filtered array
  //How do I reference the last indexed value of
  possibleMoves: function(startPeg) {
    var onStartPeg = this.pegs[startPeg - 1]; //disc = [3]

    var getTopDisc = function(array){
      if (array.length === 0) {
        return 0;
      } else {
      return array[array.length-1];
    }
    }

    var allMoves = this.pegs.filter(function(peg) {
      if (getTopDisc(peg) === 0) {
        return peg;
      }
      else if (getTopDisc(peg) > getTopDisc(onStartPeg)) {
        return peg;
      }
    });

    return allMoves;

  },

  checkMove: function(startPeg) {

    if (this.possibleMoves(startPeg).length === 0) {
      return false;
    } else {
      return true;
    }
  },

  checkWin: function() {

    console.log(this.totalMoves + ' total moves');

    var discWeights = this.pegs.reduce(function(array, currentPeg) {
      array.push(currentPeg.reduce(function(sum, currentDisc) {
        return sum += currentDisc;
      }, 0));
      return array;
    }, []);

    for (var i = 0; i < discWeights.length; i++) {
      if (discWeights[i] === 6) {
        this.winGame();
      }
    }
  },

  winGame: function() {
    console.log('You have won in ' + this.totalMoves + ' moves. Starting new game.');
    this.resetBoard();
    console.log("------------------------------");
  },

  resetBoard: function() {
    this.pegs = [
      [3, 2, 1],
      [],
      []
    ];
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

board.printBoard();
board.move(1, 3);
board.move(1, 2);

board.move(1, 2); //bad

board.move(3, 2);
board.move(1, 3);
board.move(2, 1);
board.move(2, 3);
board.move(1, 3);
board.printBoard();
