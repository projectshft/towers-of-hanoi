var PlayGame = {
  
  board:  [[5, 4, 3, 2, 1], [], []],
  results: function () {
    for (let i=0; i < this.board.length; i++) {
      const rowResults = this.board[i].map(num => num.toString()).join(" ");
      console.log ("---" + " "  + rowResults);
    };
  },
  
  checkWinner: function () {
    const winningPeg = [5, 4, 3, 2, 1];
    for (let i = 1; i < this.board.length; i++) {
      const checkDiscsRow = this.board[i];
      let flag = true;
      checkDiscsRow.forEach((disc, index) => {
        if(disc != winningPeg[index]) {
          flag = false;
        }
      })
        if (flag === true) {
          console.log ("You Won");
        } 
    }
      return;
    },
  
    gameReset: function () {
    const winningPeg = [5, 4, 3, 2, 1];
    for (let i = 1; i < this.board.length; i++) {
      const checkDiscsRow1 = this.board[i];
    }
    if (checkDiscsRow1 === winningPeg) {
      var array = checkDiscsRow1.splice(0,checkDiscsRow1.length);
      this.board[0].push(array);
    }
    return;
  },

  moveDisc: function(startPeg, endPeg) {
    if (this.board[startPeg].length === 0) {
        console.log( `${startPeg}` +  "does not have any discs");
        return;
      } else if (this.board[endPeg].length === 0 || (this.board[endPeg][endPeg.length-1] > this.board[startPeg][startPeg.length -1])) {
        var disc = this.board[startPeg].pop(); 
        this.board[endPeg].push(disc);
        console.log( "The move is succesful, board is now:", this.board);
        return;
      } else if (this.board[endPeg][endPeg.length-1] < this.board[startPeg][startPeg-1]); {
        console.log ("You cannot move a larger disc on top of a smaller one, board is still:");
        return;
      };
  }
};
PlayGame.moveDisc(0,1);
PlayGame.moveDisc(0,2);
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.checkWinner();
 
 




 