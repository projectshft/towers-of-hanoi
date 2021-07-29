var pegBoard = {
  pegs: [[5, 4, 3, 2, 1], [], []],
  plays: 0,
  originalPegs: null,

  moveDisc(startPeg, endPeg){ 
    if(this.plays === 0) {
      this.originalPegs = this.createOriginalPegs();
    }
    const startPegArray = this.pegs[startPeg];
    const endPegArray = this.pegs[endPeg];

    const startPegDisc = startPegArray[startPegArray.length - 1];
    const endPegDisc = endPegArray[endPegArray.length - 1];

    if (startPegDisc > endPegDisc || startPegDisc === undefined) {
      console.log('Illegal move, try again!');
    } else {
      startPegArray.splice(startPegArray.length - 1, 1);
      endPegArray.push(startPegDisc);
    }

    this.plays += 1;
    this.printPlays();
    this.printPegBoard();
    this.checkWinner();
  },
  
  checkWinner() {
    const originalPegsFirstPegLength = this.originalPegs[0].length;
    const currentPegsLastPegLength = this.pegs[this.pegs.length - 1].length;

    if(originalPegsFirstPegLength === currentPegsLastPegLength) {
      console.log(`You Won! It only took you ${this.plays} plays!`)
    }
  },
  createOriginalPegs() {
    return this.pegs.map(function(peg) {
      return peg.map(function (disc) {
        return disc;
      })
    })
  },
  resetPegBoard() {
    this.pegs = [...this.originalPegs];
    this.plays = 0;
  },

  printPegBoard() {
    const printedPegBoard =  this.pegs.map(function (peg) {
      return `---${peg.map(function (disc) {
        return ` ${disc}`;
      })}`;
    });

    const loggedBoard = printedPegBoard.reduce(function (acc, arr) {
      let str = acc;
      return (str += `${arr}\n`);
    }, '');

    console.log(loggedBoard);
  },
  printPlays() {
    console.log(`This is play number ${this.plays}`);
  }
};



