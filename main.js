// Pseudocode
// I need an object containing an array with 3 arrays / pegs
// then a few methods to control the state
// 1. a method to print the board to the console
// 2 a method: moveDisc(param1, param2) that moves the discs from the 3 pegs
// 3. check if the topDisc from the source peg is smaller than the disc/topDisc from the destination peg
// 4. a checkWinner function

var board = {
  pegs: [[5, 4, 3, 2, 1], [], []],
  // printBoard needs to convert [5, 4, 3, 2, 1] into --- 5 4 3 2 1
  // if the peg is empty it goes from [] to ---

  printBoard: function () {
    var stringLines = this.pegs.map(function (peg) {
      if (peg.length <= 0) {
        return `---`;
      } else {
        return `--- ${peg.join(" ")}`;
      }
    });
    stringLines.forEach(function (line) {
      console.log(line);
    });
  },
  moveDisc: function (fromPeg, toPeg) {
    // if the fromPeg is not empty and the topDisc is less than the disc/topDisc in toPeg,
    // move one disc into toPeg
    var sourcePeg = fromPeg - 1;
    var targetPeg = toPeg - 1;

    if (fromPeg < 1 || fromPeg > 3 || toPeg < 1 || toPeg > 3) {
      console.log("Invalid peg numbers");
      return;
    }
    if (fromPeg === toPeg) {
      console.log("We can't move disc to the same peg");
      return;
    }
    if (this.pegs[sourcePeg].length === 0) {
      console.log("Cannot move discs from an empty peg");
      return;
    }

    this.pegs[targetPeg].push(this.pegs[sourcePeg].pop());
    this.printBoard();
    this.checkWinner();
  },
  checkWinner: function () {
    // this function needs to check if all the initial discs in peg one
    // are now stacked in an descending order in peg 2 or 3
    var originalPeg = this.pegs[1 - 1];
    var candidatePeg1 = this.pegs[2 - 1];
    var candidatePeg2 = this.pegs[3 - 1];

    var totalDiscs =
      originalPeg.length + candidatePeg1.length + candidatePeg2.length;
    // console.log(totalDiscs);

    if (
      candidatePeg1.length !== totalDiscs &&
      candidatePeg2.length !== totalDiscs
    ) {
      return;
    }

    var winningPeg;
    if (candidatePeg1.length === totalDiscs) {
      winningPeg = candidatePeg1;
    } else {
      winningPeg = candidatePeg2;
    }
    for (var i = 0; i < winningPeg.length; i++) {
      if (winningPeg[i] !== totalDiscs - i) {
        return; // wrong order → not a win
      }
    }
    console.log(`Congrats! You won!`);
    this.pegs = [[5, 4, 3, 2, 1], [], []];
    this.printBoard();
  },
};
board.moveDisc(1, 3);
