let board = [
  ["5", "4", "3", "2", "1"],
  [],
  []

];
let printBoard = function() {
  board.map(function (peg) {
    return peg.map(function (disc) {
      return disc;
    });

  });

  
};



/*const moveDisc = function (a, b) {
  if (board[a-1].length) < (board[b-1].length)
  
}*/

console.log(printBoard);