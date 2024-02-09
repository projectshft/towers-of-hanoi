// >>> Towers of Hanoi <<<

// To win Towers of Hanoi, you must successfully move all of the discs from one peg to another.
// You may only move the topmost disc; and you may not move a larger disc onto a smaller one.

// TODO: Make a checkWinner function that checks to see if the player has won the game.
// TODO: When the player wins, announce the winner and reset for a new game.
// TODO: Try to use array helper methods instead of for or while loops.
// TODO: Make it interactive in a webpage.

// example starting board
// --- 5 4 3 2 1
// ---
// ---

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
const startingBoard = function() {
  return [[5, 4, 3, 2, 1],[],[]];
};

const printBoard = function() {
  this.board.map(function(peg) {
    let output = "";
    peg.forEach(function(disc) {
      output += ` ${disc} `;
    })
    console.log("---" + output);
  })
};

const startBoard = function() {
  this.board = startingBoard().map(function (item) {
    return item;
  });
  this.update();
};

const updatePegs = function() {
  // Establishes references to the items in the board array
  // Mutation of the peg means mutation of the board.
  this.peg1 = this.board[0];
  this.peg2 = this.board[1];
  this.peg3 = this.board[2]; 
}

const moveDisc = function(source, destination) {
    let sourcePeg = this[`peg${source}`];
    let destinationPeg = this[`peg${destination}`];

    // What if I try to move a larger disc on top of a smaller one?
    if (sourcePeg.length === 0) {
      console.log("Sorry. You can't move a disc that isn't there!")
      return;
    }

    // What if I try to move a disc from a peg that is empty?
    if (sourcePeg[sourcePeg.length - 1] > destinationPeg[destinationPeg.length - 1]) {
      console.log("Sorry. You can't move a larger disc on top of a smaller disc.")
      return;
    }

    // What if I try to move the disc to the same peg?

    this.moveCount += 1;

    let disc = sourcePeg.pop();
    destinationPeg.push(disc);
};

const resetBoard = function() { //Reset is not actually resetting the board
  //console.log("Would you like to play again?");
  // let answer = "y";
  // if (answer == "n") {
  //   console.log("Thanks for playing!")
  //   return;
  // } else {
  //   // Revert the boardState.board property to the startingBoard value
  //   boardState.start();
  // }
  console.log("Resetting board.")
  boardState.start();
};

const checkWinner = function() {
  // What is the winning condition?
  // When all of the discs are not on 'peg1' and the discs are in their original order
  // let winningCondition = [5, 4, 3, 2, 1];
  
  // Put the pegs in an array
  let pattern = /peg/;
  let pegs = Object.keys(boardState).filter(function(key) {
    if (pattern.test(key)) {
      return key;
    }
  });

  // Is peg1 empty?
  if (this.peg1.length === 0) {
    // Does another peg have all of the discs?
    pegs.forEach(function(peg) {
      if (peg !== "peg1" && boardState[peg].length === 5) {
        // Are the discs in the correct order?
        // let isEqual = this.every((value, index) => value === array2[index]);
        // console.log(isEqual); // Output: true
        this.winner = true;
        console.log("Congratulations! You have won this round.")
        boardState.reset();
      }
    })
  }

};

// A function that skips straight to a win. (Used for testing purposes.)
const skip = function() {
  boardState.start();
  for (let i = 4; i >= 0; i--) {
    boardState.peg1.pop();
  }
  for (let k = 5; k > 0; k--) {
    boardState.peg3.push(k);
  }
}

let boardState = {
  board: [], // Make an instance of the startingBoard and reference it with .board
  peg1: [],
  peg2: [],
  peg3: [],
  moveCount: 0,
  winner: false,
  start: startBoard,
  update: updatePegs,
  print: printBoard,
  reset: resetBoard,
  move: moveDisc,
  check: checkWinner,
  //quit: quitGame,
};

// Start the game with a welcome message.

debugger;