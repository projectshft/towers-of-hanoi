const board = {

  pegs: [
    null,
    ["5", "4", "3", "2"],
    [],    
    ["1"]
  ],
  
  moveDisc (startPeg, endPeg) {
  
    // LOG entered peg does not exist (invalid input)
    if (this.pegs.length - 1 < startPeg || this.pegs.length - 1 < endPeg) {
  
      console.log('Peg(s) not in existence, board is still:\n' + 
                  this.pegs.map(item => {
                    if (item !== null) {
                      return `--- ${item.join(" ")}\n`;
                    }
                  }).join(""));
  
      return;
  
      // LOG starting peg is empty (invalid input)
    } else if (this.pegs[startPeg].length === 0) {
      
      console.log('Your starting peg is empty, board is still:\n' + 
                  this.pegs.map(item => {
                    if (item !== null) {
                      return `--- ${item.join(" ")}\n`;
                    }
                  }).join(""));
  
      return;
      
    }
  
    const disc = this.pegs[startPeg].pop();
    
    // LOG cannot move larger disc on top of a smaller one
    if (this.pegs[endPeg][0] < disc || this.pegs[endPeg.length - 1] < disc) {

      this.pegs[startPeg].push(disc);
  
      console.log('You can\'t move a larger disc on top of a smaller one, the board is still:\n' + 
                  this.pegs.map(item => {
                    if (item !== null) {
                      return `--- ${item.join(" ")}\n`;
                    }
                  }).join(""));
  
      return;
  
      // LOG move was successful
    } else if (this.pegs[startPeg].length >= 0) {
      
      this.pegs[endPeg].push(disc);
      
      console.log('That move was successful, the board is now:\n' + 
              this.pegs.map(item => {
                if (item !== null) {
                  return `--- ${item.join(" ")}\n`;
                }
              }).join(""));

      this.checkWinner();
  
      return this.pegs;
      
    }
  },

  startRound () {

    this.pegs[0] = null;
    this.pegs[1] = ["5", "4", "3", "2", "1"];
    this.pegs[2] = [];
    this.pegs[3] = [];

    console.log('Let\'s play! The board is:\n' +
                this.pegs.map(item => {
                  if (item !== null) {
                    return `--- ${item.join(" ")}\n`;
                  }
                }).join(""));

    return this.pegs;
    
  },

  checkWinner () {

    const winningOrder = '54321';

    const checkOrder = function (array, element) {
      return array[element].join("");
    };

    if (checkOrder(this.pegs, 2) === winningOrder || checkOrder(this.pegs, 3) === winningOrder) {
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