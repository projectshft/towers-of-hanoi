const Towers = function (name, pegs, discs) {
  this.name = name;
  this.discs = discs;
  this.pegs = pegs;
  this.moveCount = 0;
  this.initializeBoard = () => {
    const towers = [];

    for (let i = 0; i < this.pegs; i++) {
      towers.push([]);
    }

    for (let j = this.discs; j > 0; j--) {
      towers[0].push(j);
    }

    return towers;
  };
  this.towers = this.initializeBoard();
  this.printBoard = function () {
    this.towers.forEach((tower) => console.log("---", ...tower));
  };
  this.shouldAutoPlay = true;
};

Towers.prototype.moveDisc = function (from, to) {
  let possible = true;
  let message = {
    error1:
      "There are no discs currently on the tower you chose to move from. The board is still:",
    error2:
      "You cannont move a larger disc on top of a smaller one, the board is still:",
    successfulMove: `That move was successful, ${this.name} Towers board is now:`,
    win: `YOU WIN! The ${this.name} Towers board has been reset to it's original position. Play again?`,
  };

  if (!this.towers[from - 1][this.towers[from - 1].length - 1]) {
    possible = false;
    console.log(message.error1);
  }

  if (
    this.towers[from - 1][this.towers[from - 1].length - 1] >
    this.towers[to - 1][this.towers[to - 1].length - 1]
  ) {
    possible = false;
    console.log(message.error2);
  }

  if (possible) {
    this.towers[to - 1].push(
      this.towers[from - 1][this.towers[from - 1].length - 1]
    );
    this.towers[from - 1].splice(this.towers[from - 1].length - 1, 1);

    if (to !== 1 && this.towers[to - 1].length === this.discs) {
      console.log(message.win);

      this.towers = this.initializeBoard();
      this.shouldAutoPlay = false;
    } else {
      console.log(message.successfulMove);
    }
  }

  this.moveCount++;
  this.printBoard();
};

Towers.prototype.autoPlay = function (numMoves) {
  const randomMove = () => {
    const moveFrom = Math.ceil(Math.random() * this.towers.length);
    const moveTo = Math.ceil(Math.random() * this.towers.length);

    play = this.moveDisc(moveFrom, moveTo);
  };

  for (let i = 0; i < numMoves; i++) {
    randomMove();
    this.moveCount++;
    if (!this.shouldAutoPlay) {
      break;
    }
  }
};

const hanoi = new Towers("Hanoi", 3, 5);
const brooklyn = new Towers("Brooklyn", 5, 7);
const washingtonDC = new Towers("Washington, D.C.", 7, 9);
const parsity = new Towers("Parsity", 4, 6);

console.log(hanoi);
console.log(brooklyn);
console.log(washingtonDC);
console.log(parsity);
