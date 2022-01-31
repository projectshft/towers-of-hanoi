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
    // console.log([firstMove]);
    var disc = firstMove.pop();
    secondMove.push(disc);
    // var mapBoard = board.map(printBoard);
  }
};

// var board =
//  [["5", "4", "3", "2", "1"],
//   [],
//   []];
 
// var moveDisc = function(peg1, peg2) {
//   var firstPeg = peg1 -= 1;
//   var secondPeg = peg2 -= 1;
//   var disc = board[firstPeg].pop();
//   board[secondPeg].push(disc);
//   var mapBoard = board.map(printBoard);
// }



var printBoard = function() {
  return board.join();
}

var checkWinner = function() {

}

//board.moveDisc(1,2);
// moveDisc(1,3);

board.moveDisc(1, 3)
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



//console.log(values);