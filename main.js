const board = {

  pegs: [
    ["5", "4", "3", "2", "1"],
    [],    
    []
  ],

  printBoard (str) {
    console.log(str + '\n' + this.pegs.map(peg => {
      return `--- ${peg.join("")}\n`;
      }).join(""));
  },
  
  moveDisc (startPeg, endPeg) {
    startPeg = startPeg - 1;
    endPeg = endPeg - 1;
  
    // LOG entered peg does not exist (invalid input)
    if (this.pegs.length - 1 < startPeg || this.pegs.length - 1 < endPeg) {
  
      this.printBoard('Peg(s) not in existence, board is still:');
  
      return;
  
    // LOG starting peg is empty (invalid input)
    } else if (this.pegs[startPeg].length === 0) {
      
      this.printBoard('Your starting peg is empty, board is still:');
  
      return;
    }
  
    const disc = this.pegs[startPeg].pop();
    
    // LOG cannot move larger disc on top of a smaller one
    if (this.pegs[endPeg][0] < disc || this.pegs[endPeg.length - 1] < disc) {

      this.pegs[startPeg].push(disc);
  
      this.printBoard('You can\'t move a larger disc on top of a smaller one, the board is still:');

      return;
  
    // LOG move was successful
    } else if (this.pegs[startPeg].length >= 0) {
      
      this.pegs[endPeg].push(disc);
      
      this.printBoard('That move was successful, the board is now:');

      this.checkWinner();
  
      return this.pegs;
    }
  },

  startRound () {

    this.pegs[0] = ["5", "4", "3", "2", "1"];
    this.pegs[1] = [];
    this.pegs[2] = [];

    this.printBoard('Let\'s play! The board is:')

    return this.pegs;
  },

  checkWinner () {

    const winningOrder = '54321';

    const checkOrder = function (array, element) {
      return array[element].join("");
    };

    if (checkOrder(this.pegs, 1) === winningOrder || checkOrder(this.pegs, 2) === winningOrder) {
      console.log('YOU WIN! Resetting for a new game...');
      setTimeout(() => {console.log('.')}, 2500);
      setTimeout(() => {console.log('.')}, 3000);
      setTimeout(() => {console.log('.')}, 3500);
      setTimeout(() => {console.clear()}, 5000);
      setTimeout(() => {this.startRound()}, 5100);
    };
    
  },
  
};

board.startRound();

board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(2, 3);
board.moveDisc(2, 1);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2); 
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);