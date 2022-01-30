var board = [["5", "4", "3", "2", "1"],
    [],
    []];
 
var moveDisc = function(peg1, peg2) {
  var firstPeg = peg1 -= 1;
  var secondPeg = peg2 -= 1;
  var disc = board[firstPeg].pop();
  board[secondPeg].push(disc);
  }


// moveDisc(1,2);
// moveDisc(1,3);

moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(3, 1)
moveDisc(2, 1)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(3, 2)
moveDisc(3, 1)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)


console.log(board);