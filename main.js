const board = {
  pegs: [[5, 4, 3, 2, 1], [], []],
  plays: 0,
  originalBoard: null,
  moveDisc (startPeg, endPeg) {
    if (this.plays === 0) {
      this.originalPegs = this.createOriginalPegs();
    }

    const startPegArray = this.pegs[startPeg];
    const endPegArray = this.pegs[endPeg];

    const startPegDisc = startPegArray[startPegArray.length - 1];
    const endPegDisc = endPegArray[endPegArray.length - 1];

    if(startPegDisc > endPegDisc || startPegDisc === undefined) {
      console.log('Sorry this is an illegal move');
    } else {
      startPegArray.splice(startPegArray.length - 1, 1);
      endPegArray.push(startPegDisc);
    }
    
    this.plays += 1;
    this.printPlays();
    this.printBoard();
    this.checkWinner();
  },
  checkWinner() {
    const originalPegsFirstPegLength = this.originalBoard.Pegs[0].length;
    const currentPegsLastPegLength = this.pegs[this.pehs.length - 1].length;

    if (originalPegsFirstPegLength === currentPegsLastPegLength) {
      console.log(`You won and it only took you ${this.plays} plays!`);
      this.resetBoard();
    }
  },

  createOriginalPegs() {
    return this.pegs.map(function (peg){
      return peg.map(function (disc){
        return disc;
      });
    });
  },

  resetBoard() {
    this.pegs = [...this.originalPegs];
    this.plays = 0;
  },
  printBoard() {
    const printedBoard = this.pegs.map(function (peg){
      return `===${peg.map(function (peg) {
        return `${disc}`;
      })}`;
    });
  
    const loggedBoard = printedBoard.reduce(function (acc, arr) {
      let str = acc;
      return (str += `${arr}\n`);
    }, '');

    console.log(loggedBoard);
  },

  printPlays() {
    console.log(`This is play number ${this.plays}`);
  },
};

    startPegArray.splice(startPegArray.length - 1, 1);
    endPegArray.push(startPegDisc);

    console.log(statPeg, endPeg)
  },
};

board.moveDisc(0, 1);