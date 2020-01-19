//The Challenge - Towers of Hanoi

// A board representing 3 pegs, and 3 discs on the first peg in ascending order.
let board = {
  pegs: [],
  //the number of moves that the player has done
  steps: 0,
  //the size of the winner peg array
  winnerSize: 0,

  initialize: function(array) {
    this.pegs = Array.from(array);
    if(array.length > 0) {
      this.winnerSize = this.pegs[0].reduce((total, currentValue) => {
        return total + parseInt(currentValue);
      }, 0);
    }
  },

  printBoard: function() {
    this.pegs.map((peg) => {
      console.log('--- ' + peg);
      console.log('\n');
    })
  },

  //to move discs from one peg to another
  moveDisc: function(src, dest) {
    let winner = false;
    //get the source array and the disc size of the last element
    let srcArr = this.pegs[src - 1];
    let srcDisc = parseInt(srcArr[srcArr.length - 1]);
    // let temp = this.pegs[src - 1][this.pegs[src - 1].length - 1]
    // console.log(temp)

    //check the last element size of the destination if any
    //getDiscSize will return 0 if peg is empty
    let existingDiscSize = this.getDiscSize(dest - 1);

    //if src size bigger, report a console.error();
    if (existingDiscSize > 0 && existingDiscSize < srcDisc) {
      console.log("Can't move a disc on top of another if it is bigger ");
    }
    else {
      //else update the board
      this.pegs[dest - 1].push(srcDisc);
      this.pegs[src - 1].pop(srcDisc);
      winner = this.checkWinner(this.winnerSize);
    }
    //increment number of moves
    this.steps++;

    if(winner) {
      //print final board and reset the game
      this.printBoard();
      this.resetGame(this.pegs);
    }
  },

  getDiscSize: function(dest) {
    //use filter
    let discs = Array.from(this.pegs[dest]);

    if(discs.length > 0) {
      let size = discs.filter(item => {
        if((discs.length - 1) === discs.indexOf(item))
        return parseInt(item);
      });
      return size[0];
    } else return 0;
  },

  checkWinner: function() {
    //use reduce
    let result = 0;
    this.pegs.forEach((item, index) => {
      if(index > 0 && item.length > 0) {
        result = item.reduce((acc, currentValue) => {
          return acc + currentValue;
        })
      }
    })
    //return true if we moved all the discs to a new peg false otherwise
    if(this.winnerSize === result) return true;
    else return false;
  },

  resetGame: function(result) {
    //announce the winner and initialize pegs array for a new game
    console.log('You WIN!');
    console.log('Number of moves: ' + this.steps + '. Illegal moves included.');
    //reset for a new game
    this.steps = 0;
    //init state
    this.initialize([]);
  }
}


board.initialize([["3", "2", "1"],[],[]]);

board.printBoard();

board.moveDisc(1,3);

//board.printBoard();

board.moveDisc(1,2);

//board.printBoard();

board.moveDisc(3,2);

//check for illigal move
board.moveDisc(1,2);

//board.printBoard();

board.moveDisc(1,3);

//board.printBoard();

board.moveDisc(2,1);

//board.printBoard();

board.moveDisc(2,3);

//board.printBoard();

board.moveDisc(1,3);

//board.printBoard();
board.initialize([["3", "2", "1"],[],[]]);
