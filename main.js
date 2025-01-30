function Peg(numOfRings = 5) {
  this.rings = [...Array(numOfRings)].map((_, index) => {
    return numOfRings - index;
  });
};

function Board() {
  this.createPegStr = function (numOfPegs) {
    return [...Array(numOfPegs)]
      .reduce((acc, _, i) => {
        acc.push(i + 1);
        return acc;
      }, [])
      .join(' ,');
  };

  this.messages = {
    start: `Enter number of pegs to play with:
      \nLeave blank for default, which is 3`,
    won: `You won!`,
    success: `That move was successful, board is \x1b[35mnow\x1b[0m:`,
    unsuccess: `You cannot move a larger disc on top \x1b[35mof\x1b[0m 
    a smaller one, board is \x1b[35mstill\x1b[0m:`,
    startPrompt: `Enter ${this.createPegStr(this.numOfPegs)} to move ring from:
    \n(enter 'quit' to quit.)`,
    endPrompt: `Move peg to:\n(enter 'quit' to quit.)`,
  };

  this.getNumPegs = function () {
    let numOfPegs = parseInt(prompt(this.messages.start));
    if (!numOfPegs || numOfPegs < 3 || numOfPegs > 6) {
      numOfPegs = 3;
    }
    return numOfPegs;
  };

  this.build = function () {
    this.numOfPegs = this.getNumPegs();
    this.numOfRings = 5;
    this.pegs = {
      1: new Peg(this.numOfRings),
    };

    Array.from({ length: this.numOfPegs - 1 }).map((_, index) => {
      this.pegs[index + 2] = new Peg(0);
    });
  };

  this.moveDisc = function (start, end, numOfRings) {
    const startRings = this.pegs[start].rings;
    const endRings = this.pegs[end].rings;

    const startRing = startRings[startRings.length - 1];
    let endRing = endRings[endRings.length - 1];
    if (endRings.length === 0) {
      endRing = numOfRings;
    }
    if (startRing <= endRing) {
      startRings.pop();
      endRings.push(startRing);
      this.printBoard(this.messages.success);
    } else {
      this.printBoard(this.messages.unsuccess);
    }
  };

  this.startGame = function () {
    this.build();
    this.printBoard();
    this.loopGame(this.numOfRings, this.numOfPegs);
  };

  this.loopGame = function (numOfRings, numOfPegs) {
    while (!this.winner(numOfRings, numOfPegs)) {
      let start;
      let quit;
      while ((!start && !quit) || start < 0 || start > numOfRings) {
        start = prompt(this.messages.startPrompt);
        start === 'quit' ? (quit = true) : null;
      }
      let end;
      while ((!end && !quit) || end < 0 || end > numOfRings) {
        end = prompt(this.messages.endPrompt);
        end === 'quit' ? (quit = true) : null;
      }

      if (quit) {
        console.log('You quit.');
        break;
      }

      this.moveDisc(start, end, numOfRings);
    }
  };

  this.printBoard = function (string = 'The board is currently:') {
    let toPrint = [];
    toPrint.push(string);
    for (const key in this.pegs) {
      let lineToPrint = '';
      this.pegs[key].rings.forEach((element) => {
        lineToPrint += element;
      });
      toPrint.push(`--- ${lineToPrint}`);
    }
    toPrint = toPrint.join('\n');
    console.log(toPrint);
  };

  this.winner = function (numOfRings, numOfPegs) {
    const finalPeg = this.pegs[numOfPegs].rings;

    if (finalPeg.length === numOfRings) {
      const winner = finalPeg
        .map((element, index) => {
          return element === numOfRings - index ? true : false;
        })
        .every((v) => v);

      if (winner) {
        console.log(this.messages.won);
        return true;
      }
    }
    return false;
  };
};

const game = new Board();
game.startGame();
