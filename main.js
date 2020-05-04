var game = {
    //set up starting position of game board.
    gameBoard: [
      ['3', '2', '1'],
      [],
      [],
    ],
    //create move functionality
    moveDisk: function(oldPeg, newPeg) {
      //ideally, return a copy of the gameBoard using .map after every move that does not alter the original game board.
      var newBoard = game.gameBoard.map(function(board) {
        return board;
      });
      //create one-word variables so I have less typing.
      var old = newBoard[oldPeg];
      var to = newBoard[newPeg];
      //try to set up a move counter.
      var moveCounter = 0;
  
      //prevent illegal moves without using .filter because I could not figure out how to use .filter.
      if (to[to.length-1] <= old[old.length-1]) {
        console.log('Illegal move. The board is still:');
      } else {
        to.push(old.pop());
        console.log('That move was successful. The board is now:');
        //continue trying to set up a counter. I do not succeed.
        moveCounter ++;
      }
  
      //print the board.
      console.log(newBoard);
  
      //check for a winner using .reduce.
      var checkWinner = game.gameBoard.reduce(function(board) {
        if (newBoard[1].length == 3 || newBoard[2].length == 3) {
          return true;
        } else {
          return false;
        }
      })
  
      if (checkWinner === true) {
        console.log('Winner! Winner!');
      }
    }
  }