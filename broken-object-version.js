const towersOfHanoi = {
  board: [
    [3, 2, 1],
    [],
    [],
  ],

  peg1: this.board[0], // my code breaks here, but I can't figure out why! Uncaught TypeError: Cannot read properties of undefined (reading '0') at revised.js:8:19
  peg2: this.board[1],
  peg3: this.board[2],

  get gameStatus() { // use get here? 
    let board = this.board.map((pegs) => console.log("- - - " + pegs.join(" ")));
    return board;
  },

  checkWinner() {
    if (this.board[1].length === 3 || this.board[2].length === 3) {
      console.log("You won!");
      gameReset(this.board);
      console.log("Play again?");
    }
  },

  // A function to reset the game
  set gameReset(board) { // use set here? 
    board = [
      [3, 2, 1], 
      [], 
      []
    ];
  
    // I am not sure if redeclaring these is necessary. Commented it out for now.
    // peg1 = this.board[0];
    // peg2 = this.board[1];
    // peg3 = this.board[2];
  },

  moveDisc(peg, newPeg) {
    // Declaring a variable for reuse below
    let disc;
  
    // Conditionals
    // do I need to use .this for these? 
    if (newPeg.length === 0) {
      disc = peg.pop([]);
      newPeg.push(disc);
      console.log("That move was successful. The board is now:");
  
     } else if (newPeg[newPeg.length - 1] > peg[peg.length - 1]) {
      disc = peg.pop([]);
      newPeg.push(disc);
      console.log("That move was successful. The board is now:");
  
    } else if (newPeg[newPeg.length - 1] < peg[peg.length - 1]) { 
      console.log("You cannot move a larger disc on top of a smaller one. The board is still:");
  
    } else {
      console.log("Invalid input. Please try again.");
    }
  
    // These run each time moveDisc() is called
    this.checkWinner();
    this.gameStatus();
  },

};


alert(
  "Welcome to Jill's Towers of Hanoi Game!\n \n There are three pegs. In order from left to right: \n peg1, peg2, peg3 \n \n To play, type the following into the console:\n moveDisc(from, to); \n \n Ex:  moveDisc(peg1, peg2); \n \n To win, move all of the discs to peg2 or peg3."
);
console.log("Here's the starting board:");
towersOfHanoi.gameStatus(towersOfHanoi.board); // ?? maybe
console.log("Good luck!");
