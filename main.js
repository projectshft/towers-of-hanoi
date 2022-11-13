// STRARTING: Please enter playGame.startGame(x, y). Enter in a starting Peg and a peg you'd like to move a disc to. 
// Example: playGame.startGame(1, 2) this would move the top disc from the 1 peg to the 2 peg.

// CONTINUAL PLAY: Once you've moved the first disc, you'll now use playGame.moveDisc(x, y) to make the remainder of your moves. 
// Example: playGame.moveDisc(x, y) the first argument is the current peg and the second is your future peg.


playGame = {

  startGame: function(startPeg, futPeg){
    console.log(playGame.moveDisc(startPeg, futPeg));
  },

   board: [
    [5, 4, 3, 2, 1],
    [],
    []
  ],

   formatter: function(){
    string = this.board.map(function(peg){
      console.log(`--- ${peg.join(' ')}\n`);
   }); 
   return ''; // I just didn't like seeing undefined
  },


  checkMove: function(currentPeg, futurePeg){
    currentPeg = currentPeg -1
    futurePeg = futurePeg -1;  

    // Checks if the peg exists. Hardcoded so watchout if you start adding new pegs later on
    if(currentPeg < 0 || currentPeg >= 3 || futurePeg < 0 || futurePeg >= 3){
      console.log(`Please enter a peg between 1-3!`);
      return false;
    } 
    
    // Checks if the current peg has anything to move
    if(this.board[currentPeg].length === 0){
      console.log(`Peg ${currentPeg +1} has nothing to move.`)
      return false;
    };

    // Checks if the last element in the futurePeg is less than the currentPeg
    if(this.board[futurePeg][this.board[futurePeg].length-1] < this.board[currentPeg][this.board[currentPeg].length-1]){
      console.log(`Moving a disc from Peg ${currentPeg + 1} to Peg ${futurePeg + 1}, is not an accepted move. The disc is too large.`);
      return false;
    };
    // If any of those checks above are true it will not allow a move, a error message will tell you what went wrong. Otherwise the function evaluates to true.
    return true;
  },

  // This checks to see if checkMove returns true. If it does, then we'll remove the last item in the cPeg, storing it in disc, then push disc into the fPeg. Lastly, we will console the checkwinner to see if we won and return the formatted board.
  moveDisc: function(cPeg, fPeg){ 
    if(this.checkMove(cPeg, fPeg)){
      disc = this.board[cPeg -1].pop();
      this.board[fPeg -1].push(disc);
    };
  
    console.log(this.checkWinner());
    return this.formatter();
  },

  

  checkWinner: function(){
    // this will return the length of each array and reduce it into an object.
    reducer = playGame.board.reduce(function(accumulator,peg){
      accumulator[playGame.board.indexOf(peg)] = peg.length;
      return accumulator
    },
      {0: 0, 1: 0, 2: 0}
      ); 

    // If the new move is equal to an object that has all the discs on either index 1 or 2, you win. Otherwise it's false.
      if(JSON.stringify(reducer) === JSON.stringify({0: 0, 1: 5, 2: 0}) || JSON.stringify(reducer) === JSON.stringify({0: 0, 1: 0, 2: 5})){
        console.log(`You Won the game!!!`);
        console.log(`${this.formatter()}`);
      } else {
        console.log(`Win:`)
        return false;
      };

    //if the overall function returns true we'll restart for a new game, using resetGame()

      return this.resetGame();
    },


  resetGame: function(){
     console.log(`Time for a new game! Make your first Move!`)
      this.board = [ [5, 4, 3, 2, 1], [], [] ];
    return this.formatter();
    }, // Resets the game to it's orginal game play position, and prompts the user to make the first move. No need to go back to startGame().
};

// there's defintely an easier way to do checkwinner but I wanted to use reduce for practice.


// Final note. Some of these things are hardcoded, so they won't scale if we try to make new pegs or discs. If you come back to this, beware of this bad practice.