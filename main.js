const PlayGame = {
  
  board:  [[5, 4, 3, 2, 1], [], []],
  results: function () {
    for (let i=0; i < this.board.length; i++) {
      const rowResults = this.board[i].map(num => num.toString()).join(" ");
      console.log ("---" + " "  + rowResults);
    }
  },
  
  checkWinner: function () {
    const winningPeg = [5, 4, 3, 2, 1];
    
    for (let i = 0; i < this.board.length; i++) {
        const checkDiscsRow = this.board[i];
        if (JSON.stringify(checkDiscsRow) === JSON.stringify(winningPeg)) {
          console.log("You Won");
          return;
        }
      }
      console.log("No winner yet");
},
      gameReset: function () {
      const winningPeg = [5, 4, 3, 2, 1];
      for (let i = 1; i < this.board.length; i++) {
      const checkDiscsRow1 = this.board[i];
      if (JSON.stringify(checkDiscsRow1) === JSON.stringify(winningPeg)) {
  

        

    
  
        const array = checkDiscsRow1.splice(0,checkDiscsRow1.length);
        this.board[0].push(...array);
        console.log("Game Reset. Board is now:", this.board);
        return;
      }
    }
    console.log('no reset needed');
},

  moveDisc: function(startPeg, endPeg) {
    if (this.board[startPeg].length === 0) {
        console.log( `${startPeg}` , "does not have any discs");
        return;
      } else if (this.board[endPeg].length === 0 || (this.board[endPeg][this.board[endPeg].length-1] > this.board[startPeg][this.board[startPeg].length -1])  
      ) {
        const disc = this.board[startPeg].pop(); 
        this.board[endPeg].push(disc);
        console.log( "The move is succesful, board is now:", this.board);
        return;
      }  else if (this.board[endPeg][this.board[endPeg].length - 1] < this.board[startPeg][this.board[startPeg].length - 1]) {
       console.log("You cannot move a larger disc on top of a smaller one, board is still:", this.board);
        return;
    } else {
      console.log("No move was not made; board is still", this.board);
      return;
    }
  },
};
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.moveDisc(1,2);
PlayGame.results(); 
PlayGame.moveDisc(1,2);
PlayGame.results(); 
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(2,0);
PlayGame.results();
PlayGame.moveDisc(2,1);
PlayGame.results();
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.moveDisc(1,0);
PlayGame.results();
PlayGame.moveDisc(1,2);
PlayGame.results();
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(2,0);
PlayGame.results();
PlayGame.moveDisc(1,0);
PlayGame.results();
PlayGame.moveDisc(1,2);
PlayGame.results();
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.moveDisc(1,2);
PlayGame.results();
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(2,0);
PlayGame.results();
PlayGame.moveDisc(2,1);
PlayGame.results();
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(2,0);
PlayGame.results();
PlayGame.moveDisc(1,0);
PlayGame.results();
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.moveDisc(1,0);
PlayGame.results();
PlayGame.moveDisc(2,0);
PlayGame.results();
PlayGame.moveDisc(2,1);
PlayGame.results();
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(2,1);
PlayGame.results();
PlayGame.moveDisc(1,0);
PlayGame.results();
PlayGame.moveDisc(1,2);
PlayGame.results();
PlayGame.moveDisc(0,2);
PlayGame.results();
PlayGame.moveDisc(0,1);
PlayGame.results();
PlayGame.moveDisc(2,0);
PlayGame.results();
PlayGame.moveDisc(2,1);
PlayGame.results();
PlayGame.moveDisc(0,1);

PlayGame.results();
PlayGame.checkWinner();
PlayGame.gameReset();

 




 