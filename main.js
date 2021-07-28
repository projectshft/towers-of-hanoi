var board = {
  gameBoard:[],
  numMoves:null,
  winningPeg:[],
  create: function (numPegs, numDiscs) {
    this.numMoves = 0;
    this.gameBoard = [];
    if (numPegs < 3) {
      alert("The board must have at least 3 pegs, so we defaulted to 3 pegs.");
      numPegs = 3;
    };
    if (numPegs > 9) {
      alert("The board may not have more than 9 pegs, so we defaulted to 9 pegs.");
      numPegs = 9;
    };
    if (numDiscs < 1) {
      alert("The board must have at least 1 disc, so we defaulted to 1 disc.");
      numDiscs = 1;
    };
    if (numDiscs > 15) {
      alert("The board may not have more than 15 discs, so we defaulted to 15 discs.");
      numDiscs = 15;
    };    
    for (var i = 0; i < numPegs; i++) {
      this.gameBoard.push([]);
    }
    for (var i = numDiscs; i >= 1; i--) {
      this.gameBoard[0].push(i);
    }
    this.winningPeg = [...this.gameBoard[0]];
    this.print();
    console.log('\nNow you are ready to start playing! To make a move, use this format:\n\n   move(pegChoice1, pegChoice2);\n\nThis will move the top disc from [pegChoice1] to [pegChoice2], as long as you are not stacking a larger disc on top of a smaller disk!');
  },
  print: function(){
    var pegNum = 0;
    var printBoard = this.gameBoard.map(function (peg){
      pegNum++;
      return ('Peg #' + pegNum + ' ---- ') + peg.join(' ');
    });
    if (this.numMoves === 0) {
      console.log('*******************************************\n\nHERE IS YOUR BOARD BEFORE MAKING ANY MOVES:\n\n*******************************************\n\n');
    } else if (this.numMoves === 1) {
      console.log('************************************************\n\nHERE IS YOUR BOARD AFTER MAKING YOUR FIRST MOVE:\n\n************************************************\n\n');
    } else {
      console.log('**********************************\n\nHERE IS YOUR BOARD AFTER ' + this.numMoves + ' MOVES:\n\n**********************************\n\n');
    };
    console.log(printBoard.join('\n'));
  },
  checkWinner: function(index) {
    if (index === 0) {
      return false;
    };
    if (this.gameBoard[index].length != this.winningPeg.length) {
      return false;
    };
    var isWinner = true;
    for (var i = 0; i < this.gameBoard[index].length; i++) {
      if (this.gameBoard[index][i] != this.winningPeg[i]) {
        isWinner = false;
      };
    }
    return isWinner;
  },
  move: function(pegChoice1, pegChoice2){
    var pegChoice1Index = pegChoice1 - 1;
    var pegChoice2Index = pegChoice2 - 1;
    var indexOfLastDiscOnPeg1 = this.gameBoard[pegChoice1Index].length - 1;
    var indexOfLastDiscOnPeg2 = this.gameBoard[pegChoice2Index].length - 1;
    var lastDiscOnPeg2 = this.gameBoard[pegChoice2Index][indexOfLastDiscOnPeg2];
    var discThatMoves = this.gameBoard[pegChoice1Index][indexOfLastDiscOnPeg1];
    if(this.gameBoard[pegChoice1Index].length === 0) {
      alert('\nInvalid Move: There are no discs on Peg #' + pegChoice1 + '. Please try again\n');
      return;
    };
    if(lastDiscOnPeg2 > discThatMoves || lastDiscOnPeg2 === undefined) {
      this.gameBoard[pegChoice2Index].push(discThatMoves);
      this.gameBoard[pegChoice1Index].pop();
      this.numMoves++;
      this.print();
      if(this.checkWinner(pegChoice2Index)) {
        alert('CONGRATULATIONS! You successfully moved all of the discs to a new peg!');
        console.log('\n \nTo play again, create another board using this format:\n\n   create(numPegs, numDiscs);\n\nYour board may have 3-10 pegs, and 1-15 discs.\n');
        return;
      } else {
          console.log('\nNow make another move, using this format:\n\n   move(pegChoice1, pegChoice2)');
      };
    } else {
      alert('\nInvalid Move: You are not allowed to move a disc that is worth ' + discThatMoves + ' on top of a disc that is worth ' + lastDiscOnPeg2 + '. Please try again.\n');
    };

  },
};

var move = function (pegChoice1, pegChoice2) {
  board.move(pegChoice1,pegChoice2);
}

var create = function (numPegs, numDiscs) {
  board.create(numPegs, numDiscs);
}

//Gameplay Begins
console.log('Welcome to Towers of Husmann!\n \nTo begin, create a board using this format:\n\n   create(numPegs, numDiscs);\n\nYour board may have 3-9 pegs, and 1-15 discs.\n');
