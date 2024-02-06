const game = {
    pegs: [[], [5, 4, 3, 2, 1], []],
    
    //This function was necessary to find the sum of the discs on the pegs, I did this so that you can play the game at scale
    sumOfDiscs: function (discs) {
      let sum = 0; 
      for (let i = 0; i < this.pegs.length; i++) {
        for (let j = 0; j < this.pegs[i].length; j++) {
          sum += this.pegs[i][j]; 
          }
        }
        return sum; 
    },
    //this function lets you know if you won the game by seeing if the sum of the discs in the function have moved to another peg besides peg 1
    isWon: function () { 
    const sumOfPegs = this.sumOfDiscs(); 

    if (this.sumOfDiscs(1) === sumOfPegs || this.sumOfDiscs(2) === sumOfPegs) {
      console.log("You won the game!")
    return true; 
    } 
    },
    //The move function moves the discs from the peg array you select first, to the peg array you select second
    move: function (startPeg, endPeg) {
      const start = this.pegs[startPeg]; 
      const end = this.pegs[endPeg]; 
      const result = start.pop(); 
      end.push(result); 
      return this.pegs;
    },

    //This first part of isValidMove ensures that the pegs you selected to move are within the range of arrays to select from
    isValidMove: function (startPeg, endPeg) {
      if (startPeg < 0 || startPeg >= this.pegs.length) {
        console.error('Invalid Start Peg Entry')
        return false; 
      }
      if (endPeg < 0 || endPeg >= this.pegs.length) {
        console.error("Invalid End Peg Entry");
        return false;
    }
    //This part ensures that you are selecting a peg that had a disc on it
     if (this.pegs[startPeg].length === 0) {
       console.error('No disc on selected peg')
       return false; 
     }

     //this part keeps you from adding a bigger disc on top of a smaller one
     const startPegLastValue = this.pegs[startPeg][this.pegs[startPeg].length - 1];
    const endPegLastValue = this.pegs[endPeg][this.pegs[endPeg].length - 1];
    if (startPegLastValue > endPegLastValue) {
        console.error('Invalid move: cannot stack bigger discs on top');
        return false;
    }
    return true; 
    },
    print: function () {
        console.log(JSON.stringify(this.pegs));
    },
    reset: function () {
        
    },
    play: function (startPeg, endPeg) {
      
    }
};
console.log(game.isWon()); 

console.log(game.move(0, 2));

console.log(game.isValidMove(0,1)); 
