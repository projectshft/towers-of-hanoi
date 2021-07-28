var board = {
  gameBoard:[],
  numMoves:0,
  initialGameBoard:[],
  create: function (numPegs, numDiscs) {
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
      this.gameBoard.push([]);
    }
    for (var i = numDiscs; i >= 1; i--) {
      this.gameBoard[0].push(i);
    }
    this.print();
    this.initialGameBoard = [...this.gameBoard];
    console.log('\nNow you are ready to start playing!\n \nTo make a move, use this format:\n\n   board.move(pegChoice1, pegChoice2);\n\nThis will move the top disc from [pegChoice1] to [pegChoice2], as long as you are not stacking a larger disc on top of a smaller disk!');
  },
  print: function(){
    var pegNum = 0;
    var printBoard = this.gameBoard.map(function (peg){
      pegNum++;
      return ('Peg #' + pegNum + ' ---- ') + peg.join(' ');
    });
    if (this.numMoves === 0) {
      console.log('\nHERE IS YOUR BOARD BEFORE MAKING ANY MOVES:\n\n');
    } else if (this.numMoves === 1) {
      console.log('\nHERE IS YOUR BOARD AFTER MAKING YOUR FIRST MOVE:\n\n');
    } else {
      console.log('\nHERE IS YOUR BOARD AFTER ' + this.numMoves + ' MOVES:\n\n');
    };
    console.log(printBoard.join('\n'));
  },
  move: function(pegChoice1, pegChoice2){
    var pegChoice1Index = pegChoice1 - 1;
    var pegChoice2Index = pegChoice2 - 1;
    var indexOfLastDiscOnPeg1 = this.gameBoard[pegChoice1Index].length - 1;
    var indexOfLastDiscOnPeg2 = this.gameBoard[pegChoice2Index].length - 1;
    var lastDiscOnPeg2 = this.gameBoard[pegChoice2Index][indexOfLastDiscOnPeg2];
    var discThatMoves = this.gameBoard[pegChoice1Index][indexOfLastDiscOnPeg1];
    if(this.gameBoard[pegChoice1Index].length === 0) {
      console.log('Invalid Move: There are no discs on Peg #' + pegChoice1 + '. Try Again\n');
      this.print();
      return;
    };
    if(lastDiscOnPeg2 > discThatMoves || lastDiscOnPeg2 === undefined) {
      this.gameBoard[pegChoice2Index].push(discThatMoves);
      this.gameBoard[pegChoice1Index].pop();
      this.numMoves++;
      this.print();
      console.log('\nNow make another move, using this format:\n\n   board.move(pegChoice1, pegChoice2)');
    } else {
      console.log('Invalid Move: You are not allowed to move a disc that is worth ' + discThatMoves + ' on top of a disc that is worth ' + lastDiscOnPeg2 + '. Try Again\n');
      this.print();
    };
  },
};

//This is where the console game is played
console.log('Welcome to Towers of Husmann!\n \nTo begin, create a board using this format:\n\n   board.create(numPegs, numDiscs);\n\nYour board may have 3-10 pegs, and 1-15 discs.\n');
board.create(3,4);
