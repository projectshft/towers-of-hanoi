var board = {
  pegOne: ["5", "4", "3", "2", "1"],
  pegTwo: [],
  pegThree: [],
  moveDisc: function(peg1, peg2) {
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
   
    var disc = firstMove.pop();
    secondMove.push(disc);
    var thirdPeg = Object.values(board.pegThree);
    //console.log(thirdPeg);
    //this.printBoard;
    
    this.checkWinner(board.pegTwo,thirdPeg);
    //console.log(board.pegThree);
    // var mapBoard = board.map(printBoard);
  },
  printBoard: function() {
    
    var currentBoard = board.map(function (boards) {
      console.log(boards.pegOne);
    });
    //firstPeg.join('');
  },
  checkWinner: function(checkTwo,checkThree) {
    var winCondition = "5,4,3,2,1";
    //var secondPeg = board.pegTwo;
    //var thirdPeg = board.pegThree;
    if(checkTwo === winCondition || checkThree.toString() === winCondition) {
      result = 'You won!';
    } else {
      result = 'Keep going';
    }
    console.log(result);
  },
  resetGame: function() {

  }
};


board.moveDisc(1, 3);

board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)
board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(3, 1)
board.moveDisc(2, 1)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(3, 2)
board.moveDisc(3, 1)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)
board.moveDisc(1, 2)
board.moveDisc(3, 2)
board.moveDisc(1, 3)
board.moveDisc(2, 1)
board.moveDisc(2, 3)
board.moveDisc(1, 3)

