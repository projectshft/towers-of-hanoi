var Tower = function (peg, disc) {
var board = [
    ["5", "4", "3", "2", "1"],
    [],
    []
  ];

  var moves = 0;
  //prints out the current status of the board
  board.forEach(function (element) {
    console.log(element);
  });

  //moves disc from one peg to the another
  var moveDisc = function(current, target) {
    var currentPeg= board[current -1];
    var targetPeg = board[target -1];
//checks whether or not the peg we are trying to move the disc to is valid. If it's valid, it moves the peg. If not, the board remains still until the move is corrected
    var isMoveValid = function(currentPeg, targetPeg) {
      if (isMoveValid) {
        console.log('That move was successful, board is now:');
        currentPeg.pop();
        targetPeg.push();
        moves++;
      } else {
        console.log("You can't move a larger disc on top of a smaller one, board is still:");
      }
    }
  }
  return {
    moveDisc: moveDisc,
    isMoveValid: isMoveValid
  }
};
