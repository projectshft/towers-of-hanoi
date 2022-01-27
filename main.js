let board = {
  gameBoard: [
  ['5', '4', '3', '2', '1'],
  [],
  []
],

  moveDisc: function(start, end) {
   let startPeg = this.gameBoard[start - 1];
   let endPeg = this.gameBoard[end - 1];
   let lastDiscOnStartPeg = startPeg[startPeg.length - 1];
   let lastDiscOnEndPeg = endPeg[endPeg.length - 1];
   
   if (lastDiscOnStartPeg > lastDiscOnEndPeg) {
     console.log('You cannot move a larger disc on top of a smaller one, board is still:');
     printBoard();
   } else {
     endPeg.push(lastDiscOnStartPeg);
     startPeg.pop(lastDiscOnStartPeg);
   }
  },
}