var board = {
  pegOne: ["5", "4", "3", "2", "1"],
  pegTwo: [],
  pegThree: [],
  moveDisc: function(peg1, peg2) {
  // identify pegs
    if (peg1 === 1) {
      var firstMove = board.pegOne;
    } else if (peg1 === 2) {
      var firstMove = board.pegTwo;
    } else {
      var firstMove = board.pegThree;
    }
    if (peg2 === 1) {
      var secondMove = board.pegOne;
    } else if (peg2 === 2) {
      var secondMove = board.pegTwo;
    } else {
      var secondMove = board.pegThree;
    }
  // move discs
    var disc = firstMove.pop();
    secondMove.push(disc);

  // print board
    var firstPeg = Object.values(board.pegOne);
    var secondPeg = Object.values(board.pegTwo);
    var thirdPeg = Object.values(board.pegThree);

    this.printBoard(firstPeg, secondPeg, thirdPeg);
   
  // check if won
   
    this.checkWinner(secondPeg,thirdPeg);
;
  },
  printBoard: function(firstPeg, secondPeg, thirdPeg) {
    console.log('--- ' + firstPeg.join(' '));
    console.log('--- ' + secondPeg.join(' '));
    console.log('--- ' + thirdPeg.join(' '));
  
    // var currentBoard = firstPeg.map(function (num) {
    //   //return num * 1;
    //   return num;
    // });
    // currentBoard.toString();
;
    
  },
  checkWinner: function(checkTwo,checkThree) {
    var winCondition = "5,4,3,2,1";
    if(checkTwo.toString() === winCondition || checkThree.toString() === winCondition) {
      result = 'You won!';
    } else {
      result = 'Keep going';
    }
    console.log(result);
    if (result === 'You won!') {
      this.resetGame;
    }
  },
  resetGame: function() {
    this.pegOne = [5,4,3,2,1];
    this.pegTwo = [];
    this.pegThree = [];
    console.log(this.pegOne);
  }
};


// board.moveDisc(1, 3);

// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(3, 1)
// board.moveDisc(2, 1)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(3, 2)
// board.moveDisc(3, 1)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 3)

// board.moveDisc(1, 3);