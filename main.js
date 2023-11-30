

// Our game will progress with the player submitting moves to the game and the game accepting or rejecting the move and updating the board if the move is allowed. Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc. For example, with moves originating from the above starting board:
// There should be an object responsible for maintaining the state of the board.
// There should be a way to move discs from one peg to another.
// There should be a checkWinner function that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg.
// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
// As a bonus, any time you iterate through an array, try and refrain from using for or while loops - instead try to use the Array helper methods.


var playGame = {
  board:  [[5, 4, 3, 2, 1], [], []],
  results: function (){
    for (let i=0; i < this.board.length; i++) {
      const rowResults = this.board[i].map(num => num.toString()).join(" ");
      console.log("---" + " "  + rowResults)
    };
  },
  checkWinner: function () {
    const winningPeg = [5, 4, 3, 2, 1];
    for (let i = 1; i < this.board.length; i++) {
      const checkDiscsRow = this.board[i];
        if (checkDiscsRow == winningPeg) {
          console.log ("You Won")
        } 
    }
        return;
      
    },
  gameReset: function () {
    const winningPeg = [5, 4, 3, 2, 1];
    for (let i = 1; i < this.board.length; i++) {
      const checkDiscsRow1 = this.board[i];
    }
    if (checkDiscsRow1 == winningPeg) {
      var array = checkDiscsRow1.splice(0,checkDiscsRow1.length);
      this.board[0].push(array);
    }
    return;
  },
  };

var moveDisc = (startPeg, endPeg) => {
  var disc = playGame.board[startPeg].pop(); 
    playGame.board[endPeg].push(disc);
    if (startPeg.length === 0) {
      console.log( `${startPeg}` +  "does not have any discs");
    return;
      } else if (endPeg[endPeg.length-1] > disc) {
        console.log( "The move is succesful, board is now:");
    return;
      } else if (endPeg[endPeg.length -1] < disc) {
        console.log ("You cannot move a larger disc on top of a smaller one, board is still:");
    return;
      };
};
moveDisc(0,1);
playGame.results()
playGame.checkWinner()

 
 




 