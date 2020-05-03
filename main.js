/*
Tower of Hanoi
Instructions:
-To start new game or clear game and start over: Use game.play(numOfPegs, numOfDiscs),
 entering your preferred # of pegs/discs
-To move discs: Use game.move(startPeg, endPeg), entering which peg to move the top disc from/to
-To view possible moves: Enter any peg as an argument for game.possibleMoves(startPeg) to view which
pegs its top disc can legally be moved to
-To print board: Use game.print() to print board horizontally, or game.printVert() to print
board vertically. Game board will print automatically after each move
*/


//object containing game board and functions needed to play
var game = {
  //array to hold arrays of "pegs" and "discs"
  board: [],

  //to store number of discs and pegs based on user input for simplicity sake
  discs: 0,
  pegs: 0,

  //function to start game play with user input for number of discs & pegs
  play: function(numOfPegs, numOfDiscs) {
    //resets game board in case function is invoked before previous game ends
    this.reset();

    //check if argument contains 2 whole numbers, print error if not
    if (!Number.isInteger(numOfPegs) || !Number.isInteger(numOfDiscs) || !numOfPegs || !numOfDiscs) {
      return console.log("Invalid: must enter 2 whole numbers");
    }

    //update disc and peg variables
    this.discs = numOfDiscs;
    this.pegs = numOfPegs;

    //populate board array with an empty array for each peg
    for (let i = 0; i < numOfPegs; i++) {
      this.board.push([]);
    }

    //populate first array ("peg") in board array with all "discs"
    var discSize = 0;
    for (let i = 0; i < numOfDiscs; i++) {
      discSize++;
      this.board[0].push(discSize);
    }

    //reverse array of first peg so highest numbers on "bottom"
    this.board[0].reverse();
    //print starting game board
    console.log(`New game started with ${numOfPegs} pegs and ${numOfDiscs} discs. Good luck!`)
    this.printVert();
  },

  //variable to hold number of player moves
  score: 0,

  //function to move discs
  move: function(startPeg, endPeg) {
    //check if entered start and end pegs exist & there is disc on start peg
    if (!this.board[startPeg] || !this.board[endPeg] || this.board[startPeg].length === 0) {
      return console.log("Illegal move");
    }

    //variables to hold start & end pegs/discs for clarity
    startPeg = this.board[startPeg];
    endPeg = this.board[endPeg];
    var movingDisc = startPeg.pop();
    var topDisc = endPeg[endPeg.length - 1];

    //check if end peg is empty or top disc of end peg is larger than moving disc
    if (endPeg.length === 0 || movingDisc < topDisc) {
      endPeg.push(movingDisc);
      this.score++;
    } else {
      startPeg.push(movingDisc);
      return console.log("Illegal move");
    }
    //print state of board after each move
    this.printVert();
    //check if player has won after each move
    this.checkWinner();
  },

  //function to print current state of game board using map
  print: function() {
    var basicBoard = this.board.map(function(peg) {
      return peg;
    });
    basicBoard.forEach(function(peg) {
      console.log(`--- ${peg.join(' ')}`);
    });
  },

  //function to print game board vertically
  printVert: function() {
    //array to hold vertical board arrays
    var vertBoard = [];

    //array to hold bottom of game board, matching its width to the num of pegs
    var bottomRow = ['='];
    for (let i = 0; i < this.pegs; i++) {
      bottomRow.push('==');
    }

    //adding an empty array into vertical board for each row on game board
    for (let i = 0; i < this.discs; i++) {
      vertBoard.push([]);
    }

    //iterating through vertical board arrays to compare against game board arrays
    vertBoard.forEach(function(row, index) {
      game.board.forEach(function(peg) {
        if (!peg[index]) {
          row.push(' |'); //add empty peg if no disc
        } else {
          row.push(` ${peg[index]}`); //if indexes match, add disc
        }
      });
    });

    //reversing array to prepare for printing
    vertBoard.reverse();
    //adding bottom row to board
    vertBoard.push(bottomRow);
    //printing board
    vertBoard.forEach(function(row) {
      console.log(row.join(''));
    });
  },

  //given a starting peg, use filter to check which pegs its top disc can legally be moved to
  possibleMoves: function(startPeg) {
    //check if start peg exists and holds discs, print error if not
    if (!this.board[startPeg] || this.board[startPeg].length === 0) {
      return console.log("Invalid: peg or disc does not exist");
    }

    // value of top disc of starting array
    var movingDisc = this.board[startPeg][this.board[startPeg].length - 1];

    //find all pegs that aren't start peg
    var moves = this.board.filter(function(peg, index) {
      return index !== startPeg;
    });

    //find index of available pegs that are empty or whose top disc is larger than moving disc
    moves = moves.map(function(peg, index, arr) {
      if (peg.length === 0 || movingDisc < peg[peg.length - 1]) {
        return game.board.indexOf(peg);
      }
    });

    //remove undefined elements from array
    moves = moves.filter(function(peg) {
      return peg !== undefined;
    });

    //check if any moves are available and print results
    if (moves.length === 0) {
      console.log("No possible moves");
    } else {
      console.log(`From peg ${startPeg}, you can move to peg(s): ${moves.join(' or ')}`);
    }
  },

  //function to check if player has won game using reduce
  checkWinner: function() {
    //check if all discs are on one peg & that peg is not the starting peg
    var isWinner = this.board.reduce(function(status, peg, index) {
      if (status === false && index !== 0 && peg.length === game.discs) {
        status = true;
      }
      return status;
    }, false);

    //if winner is true, print win/score and reset game
    if (isWinner) {
      console.log(`
      You win!!!!!
      You solved the puzzle in ${this.score} moves.
      Play again?`);
      this.reset();
    }
  },

  //function to reset game to original state
  reset: function() {
    this.board = [];
    this.discs = 0;
    this.pegs = 0;
    this.score = 0;
  },

  //for testing / fun (solution to game: only works on reset 3 x 3 board)
  cheatCode: function() {
    this.move(0, 2);
    this.move(0, 1);
    this.move(2, 1);
    this.move(0, 2);
    this.move(1, 0);
    this.move(1, 2);
    this.move(0, 2);
  }
};
