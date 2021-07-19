var board = {
  pegs: [[5, 4, 3, 2, 1],
  [],
  []],

  moveDisc: function(startPeg, endPeg) {
  console.log(`--- ${board.pegs[0]}`);
  console.log(`--- ${board.pegs[1]}`);
  console.log(`--- ${board.pegs[2]}`);


    var startPegArray = board.pegs[(startPeg-1)];
    var endPegArray = board.pegs[(endPeg-1)];

    var startPegDisc = startPegArray[startPegArray.length - 1];
    var endPegDisc = endPegArray[endPegArray.length - 1];
    
    if (startPegDisc > endPegDisc) {
      console.log('Sorry, this is an illegal move!');
    } else if (endPegDisc === undefined || startPegDisc < endPegDisc) {
      startPegArray.splice(startPegArray.length - 1, 1);
      endPegArray.push(startPegDisc);
      console.log(`The move is successful.`);
    }
    this.checkWinner();
    this.printBoard();
  },

  checkWinner: function() {
    var winner = [5, 4, 3, 2, 1];
   
    if (this.pegs[1].length === winner.length || this.pegs[2].length === winner.length) {
      console.log(`You're a winner!`);
      this.pegs[0].push(5, 4, 3, 2, 1)
      this.pegs[1].splice(0, 5);
      this.pegs[2].splice(0, 5);
    };
  },

  printBoard: function() {
    board.pegs.map(peg => {
      console.log(`--- ${peg}`);
    });
  }
};

// winning moves
board.moveDisc(1, 3)
board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)
board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(3, 1)
board.moveDisc(2, 1)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(3, 2)
board.moveDisc(3, 1)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)
board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)


