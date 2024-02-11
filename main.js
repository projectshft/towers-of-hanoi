// >>> Towers of Hanoi <<<

// To win Towers of Hanoi, you must successfully move all of the discs from one peg to another.
// You may only move the topmost disc; and you may not move a larger disc onto a smaller one.

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
    let output = "---";
    peg.forEach(function(disc) {
      output += ` ${disc} `;
    })
    console.log(output);
    logConsole(output);
  })
};

const startBoard = function() {
  // Make a copy of the startingBoard so that it isn't mutated.
  this.board = startingBoard().map(function (item) {
    return item;
  });
  boardState.update();
  boardState.print();
  boardState.check();
};

const updatePegs = function() {
  // Establishes references to the items in the board array.
  // Mutation of the peg means mutation of the board property.
  this.peg1 = this.board[0];
  this.peg2 = this.board[1];
  this.peg3 = this.board[2]; 
}

const moveDisc = function(source, destination) {
  clearStatus();
  
  let sourcePeg = this[`peg${source}`];
  let destinationPeg = this[`peg${destination}`];

  // What if I try to move a disc from a peg that is empty?
  if (sourcePeg.length === 0) {
    let message = "Sorry. You can't move a disc that doesn't exist!";
    console.log(message);
    clearConsole();
    displayStatus(message);
    boardState.print();
    this.moveCount += 1;
    clearMoves();
    displayMoves(this.moveCount);
    return;
  }

  // What if I try to move a larger disc on top of a smaller one?
  if (sourcePeg[sourcePeg.length - 1] > destinationPeg[destinationPeg.length - 1]) {
    let message = "Sorry. You can't move a larger disc on top of a smaller disc.";
    console.log(message)
    clearConsole();
    displayStatus(message);
    boardState.print();
    this.moveCount += 1;
    clearMoves();
    displayMoves(this.moveCount);
    return;
  }

  // What if I try to move the disc to the same peg?
  if (sourcePeg === destinationPeg) {
    let message = "Nothing changed...";
    console.log(message);
    clearConsole();
    displayStatus(message);
    boardState.print();
    this.moveCount += 1;
    clearMoves();
    displayMoves(this.moveCount);
    return;
  }

  let disc = sourcePeg.pop();
  destinationPeg.push(disc);
  clearConsole();
  boardState.print();
  clearMoves();
  this.moveCount += 1;
  displayMoves(this.moveCount);
  boardState.check();
};

const resetBoard = function() {
  console.log("Resetting game...")
  clearStatus();
  clearConsole();
  clearMoves();
  hideButton('reset');
  hideButton('noReset');
  boardState.moveCount = 0
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
        let message = "Congratulations! You have won this round. Would you like to play again?";
        displayStatus(message);
        unhideButton('reset');
        unhideButton('noReset')
        console.log(message);
      }
    })
  }
};

// A function that skips straight to a win. (Used for testing purposes.)
const skip = function() {
  for (let i = 4; i >= 0; i--) {
    boardState.peg1.pop();
  }
  for (let k = 5; k > 0; k--) {
    boardState.peg3.push(k);
  }
  boardState.check();
}


const printInstructions = function() {
  console.log(`To win, you must successfully move all of the discs from one peg to another.
You may only move the topmost disc; and you may not move a larger disc onto a smaller one.
To move a disk run the following command: 
      
  boardState.move(sourcePeg, destinationPeg)

This example moves a disc from peg 1 to peg 2: 
      
  boardState.move(1,2)

Good luck!`
  );
};

const displayInstructions = function() {
  let result = `To win, you must successfully move all of the discs from one peg to another.
  You may only move the topmost disc; and you may not move a larger disc onto a smaller one.
  Good luck!`
  let output = document.getElementById("instructions");
  output.textContent = result;
  hideButton("instButton");
}

const displayStatus = function(message) {
  // Create a new paragraph element
  let paragraph = document.createElement('p');
  // Set the text content to the provided message
  paragraph.textContent = message;
  // Append the paragraph to the console container
  document.getElementById('status').appendChild(paragraph);
}

const clearStatus = function() {
  let div = document.getElementById('status');
  div.innerHTML = '';
}

const logConsole = function(message) {
  // Create a new paragraph element
  let paragraph = document.createElement('p');
  // Set the text content to the provided message
  paragraph.textContent = message;
  // Append the paragraph to the console container
  document.getElementById('console').appendChild(paragraph);
}

const clearConsole = function() {
  let div = document.getElementById('console');
  div.innerHTML = '';
}

// Send the selected peg values
const sendSelection = function() {
  let sourceElement = document.getElementById('sourcePeg');
  let sourceValue = Number(sourceElement.value);
  let destElement = document.getElementById('destPeg');
  let destValue = Number(destElement.value);
  boardState.move(sourceValue,destValue);
}

// Display score beneath the board.
const displayMoves = function(message) {
  // Create a new paragraph element
  let paragraph = document.createElement('p');
  // Set the text content to the provided message
  paragraph.textContent = "Total moves: " + message;
  // Append the paragraph to the console container
  document.getElementById('moves').appendChild(paragraph);
}

const clearMoves = function() {
  let div = document.getElementById('moves');
  div.innerHTML = '';
}

// Hide a button when clicked
const hideButton = function(id) {
  // Get the button element by its ID
  let button = document.getElementById(id);
  // Set the CSS display property to 'none' to hide the button
  button.style.display = 'none';
}

// Unhide a button
const unhideButton = function(id) {
  // Get the button element by its ID
  let button = document.getElementById(id);
  // Set the CSS display property to 'none' to hide the button
  button.style.display = 'inline';
}

let boardState = {
  board: [],
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
};

//Start the game.
console.log("Welcome to Towers of Hanoi!")
printInstructions();
boardState.start();
//displayMoves(boardState.moveCount);