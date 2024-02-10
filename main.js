

const game = {
    pegs: [[5, 4, 3, 2, 1], [], []],
    startingBoard: [[5, 4, 3, 2, 1], [], []],
   
    //this function lets you know if you won the game by seeing if the sum of the discs in the function have moved to another peg besides peg 1
    isWon: function () { 
      return this.pegs[1].length === 5 || this.pegs[2].length === 5; 
      
    },
    //The move function moves the discs from the peg array you select first, to the peg array you select second
    move: function (startPeg, endPeg) {
      const start = startPeg -1; 
      const end = endPeg -1; 
      if (this.isValidMove(start, end)) {
        this.pegs[end].push(this.pegs[start].pop());
        this.print(); 
      }
      if (this.isWon()) {
        console.log("you won!")
        this.reset(); 

      }
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
     if (!this.pegs[startPeg].length) {
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
    // the print function in your code simply logs the current state of the pegs array to the console in JSON format
    print: function () {
        console.log(JSON.stringify(this.pegs));
    },
    reset: function () {  
          this.pegs = this.startingBoard; 
      
    },
    play: function (startPeg, endPeg) {
      console.log(`Welcome, here is your board: ${JSON.stringify(this.pegs)} make your move `)
    }
};
console.log(game.play()); 