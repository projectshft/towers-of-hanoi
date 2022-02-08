let board = {
  pegs: [ [ 5, 4, 3, 2, 1], [], []],
  plays: 0,
  originalBoard: null,
  moveDisc(startPeg, endPeg) {
    if (this.plays ===0) {
      this.originalBoard = this.creatOrigingalBoard();
    }

    let startPegArray = this.pegs[startPeg];
    let endPegArray = this.pegs[endPeg];

    let startPegDisc = startPegArray[startPegArray.length -1];
    let endPegDisc = endPegArray[endPegArray.length -1];

    if (startPegDisc > endPegDisc || startPegDisc === undefined) {
      console.log('Invalid move there friend!!!');
    } else {

    startPegArray.splice(startPegArray.length -1, 1);
    endPegArray.push(startPegDisc);
    }

    this.plays += 1;
    this.printPlays();
    this.printBoard();
    //this.checkWinner();

  },
  creatOrigingalBoard() {
    return this.pegs.map(function (peg) {
      return peg.map(function (disc) {
        return disc;
      });
    });
  },
  printBoard() {
    const printedBoard = this.pegs.map(function (peg) {
      return `---${peg.map(function (disc) {
        return ` ${disc}`;
      })}`;
     });
    
    

     const loggedBoard = printedBoard.reduce(function (acc, arr) {
       let str = acc;
       return (acc += `${arr}\n`);
     }, '');

     console.log(loggedBoard);
  },
  printPlays() {
    console.log(`This is play number ${this.plays}`);
  },
};

board.moveDisc(0, 1);
board.moveDisc(0, 1);
board.moveDisc(2, 1);

