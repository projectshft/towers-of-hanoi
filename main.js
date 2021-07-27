var board = {
  gameBoard:[],
  numMoves:0,
  create:function (numPegs, numDiscs) {
    this.gameBoard = [];
      if (numPegs < 3) {
        console.log("The board must have at least 3 pegs, so we defaulted to 3 pegs.");
        numPegs = 3;
      };
      if (numPegs > 10) {
        console.log("The board may not have more than 10 pegs, so we defaulted to 10 pegs.");
        numPegs = 10;
      };
      if (numDiscs < 1) {
        console.log("The board must have at least 1 disc, so we defaulted to 1 disc.");
        numDiscs = 3;
      };
      if (numDiscs > 15) {
        console.log("The board may not have more than 15 discs, so we defaulted to 15 discs.");
        numDiscs = 15;
      };
    
    for (var i = 0; i < numPegs; i++) {
      board.gameBoard.push([]);
    }

    for (var i = numDiscs; i >= 1; i--) {
      board.gameBoard[0].push(i);
    }
    this.print();
  },
  print:function(){
    var pegNum = 0;
    var printBoard = this.gameBoard.map(function (peg){
      pegNum++;
      return ('Peg #' + pegNum + ' ---- ') + peg.join(' ');
    });
    if (this.numMoves === 0) {
      console.log('\nHERE IS YOUR BOARD BEFORE MAKING ANY MOVES.\n\n');
    } else if (this.numMoves === 1) {
      console.log('\nHERE IS YOUR BOARD AFTER MAKING YOUR FIRST MOVE.\n\n');
    } else {
      console.log('\nHERE IS YOUR BOARD AFTER ' + this.numMoves + ' MOVES.\n\n');
    };
    console.log(printBoard.join('\n'));
  }
};
//This is where the console game is played

console.log('Welcome to Towers of Husmann!\n \nTo begin, create a board using this format:\n\n   board.create(numPegs, numDiscs);\n\nYour board may have 3-10 pegs, and 1-15 discs.\n');
board.create(3,4);