const game = {
    pegs: [[5, 4, 3, 2, 1], [], []],
    
    isWon: function () {
      
    },
    move: function (startPeg, endPeg) {
     
      const start = this.pegs[startPeg]; 
      const end = this.pegs[endPeg]; 
      const result = start.pop(); 
      end.push(result); 
      return this.pegs;
    },
    isValidMove: function (startPeg, endPeg) {
      if (startPeg < 0 || startPeg >= this.pegs.length || endPeg < 0 || endPeg >= this.pegs.length) {
        console.error("Invalid Move");
        return;
    }
    },
    print: function () {
        console.log(JSON.stringify(this.pegs));
    },
    reset: function () {
        
    },
    play: function (startPeg, endPeg) {
      
    }
};


console.log(game.move(0, 2));

console.log(game.isValidMove(1,3)); 
