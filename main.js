// >>> Towers of Hanoi <<<

// To win Towers of Hanoi, you must successfully move all of the discs from one peg to another.
// You may only move the topmost disc; and you may not move a larger disc onto a smaller one.

// example starting board
// --- 5 4 3 2 1
// ---
// ---

// A board class that defaults to 3 pegs. 5 discs start on the first peg in ascending order.

class Board{
  constructor() {
    this.peg1 = [5, 4, 3, 2, 1];
    this.peg2 = [];
    this.peg3 = [];
    this.moveCount = 0;
    this.winningState = false;
  }
}

Board.prototype.move = function(source, destination) {
  
  const sourcePeg = this['peg' + source];
  const destinationPeg = this['peg' + destination]
  const disc = sourcePeg[sourcePeg.length - 1];

  // What if I try to move a disc from a peg that is empty?
  if (sourcePeg.length === 0) {
    console.log("Sorry. You can't move a disc that doesn't exist!");
    this.moveCount += 1;
    return;
  }

  // What if I try to move a larger disc on top of a smaller one?
  if (disc > destinationPeg[destinationPeg.length - 1]) {
    console.log("Sorry. You can't move a larger disc on top of a smaller disc.");
    this.moveCount += 1;
    return;
  }

  // What if I try to move the disc to the same peg?
  if (source === destination) {
    console.log("Nothing changed...");
    this.moveCount += 1;
    return;
  }

  this['peg' + source] = sourcePeg.filter(item => item !== disc);
  this['peg' + destination] = [...destinationPeg, disc];
  this.moveCount += 1;
  this.check();
  this.print();
};

Board.prototype.print = function() {

  // Put the pegs in an array
  let pattern = /peg/;
  let pegs = Object.keys(this).filter(key => {
    if (pattern.test(key)) {
      return key;
    }
  });

  pegs.map(peg => {
    let output = "---";
    this[peg].forEach(disc => {
      output += ` ${disc} `;
    })
    console.log(output);
  })
};

Board.prototype.check = function() {
  // The winning condition is when all of the discs are not on 'peg1';
  // and the discs are in their original order.
  
  // Put the pegs in an array
  let pattern = /peg/;
  let pegs = Object.keys(this).filter(key => {
    if (pattern.test(key)) {
      return key;
    }
  });

  // Is peg1 empty?
  if (this.peg1.length === 0) {
    // Does another peg have all of the discs?
    pegs.forEach(peg => {
      if (peg !== "peg1" && this[peg].length === 5) {
        // Are the discs in the correct order?
        // let isEqual = this.every((value, index) => value === array2[index]);
        this.winningState = true;
      }
    });
  }

  if (this.winningState) {
    console.log(`Congratulations! You have won this round in ${this.moveCount} moves.`)
    board = start();
    board.print();
  }
};

// A function that skips straight to a win. (Used for testing purposes.)
const skip = function() {
  for (let i = 4; i >= 0; i--) {
    board.peg1.pop();
  }
  for (let k = 5; k > 0; k--) {
    board.peg3.push(k);
  }
  board.check();
}

const instructions = `To win, you must successfully move all of the discs from one peg to another.
You may only move the topmost disc; and you may not move a larger disc onto a smaller one.
To move a disk run the following command: 
      
  board.move(sourcePeg, destinationPeg)

This example moves a disc from peg 1 to peg 2: 
      
  board.move(1,2)

Good luck!`;

const start = function() {
  return new Board();
}

console.log("Welcome to Towers of Hanoi!");
console.log(instructions);
let board = new Board();
board.print();