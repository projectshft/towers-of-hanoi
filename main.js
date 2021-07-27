var board = {
  gameBoard:[],
  create:function (numPegs, numDiscs) {
    this.gameBoard = [];
      if (numPegs < 3) {
        console.log("The board must have at least 3 pegs, so that is how many your board will have.");
        numPegs = 3;
      };
      if (numPegs > 10) {
        console.log("The board may not have more than 10 pegs, so that is how many your board will have.");
        numPegs = 10;
      };
      if (numDiscs < 1) {
        console.log("The board must have at least 1 disc, so that is how many your board will have.");
        numDiscs = 3;
      };
      if (numDiscs > 15) {
        console.log("The board may not have more than 15 discs, so that is how many your board will have.");
        numDiscs = 15;
      };
    
    for (var i = 0; i < numPegs; i++) {
      board.gameBoard.push([]);
    }

    for (var i = numDiscs; i >= 1; i--) {
      board.gameBoard[0].push(i);
    }
  },
  print:function(){
    var pegNum = 1;
    var printBoard = this.gameBoard.map(function (peg){
      peg.unshift('Peg #' + pegNum + ' ---- ');
      console.log(peg.join(' '));
      pegNum++;
    });

  }
};
//This is where the console game is played

console.log('Welcome to Towers of Husmann!\n \nTo begin, create a board using this format:\n\n   board.create(numPegs, numDiscs);\n\nYour board may have 3-10 pegs, and 1-15 discs');
board.create(3,4);