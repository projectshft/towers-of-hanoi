

playGame = {

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
    reducer = this.board.reduce(function(accumulator,peg){

      accumulator[this.board.indexOf(peg)] = peg.length;
  
      return accumulator
    },
      {0: 0, 1: 0, 2: 0}
      )
      return reducer;
  },
};


 console.log(playGame.moveDisc(1,2));



 let board = [
  [5, 4, 3, 2, 1],
  [],
  []
]

function testing (){
  reducer = board.reduce(function(accumulator,peg){
    accumulator[board.indexOf(peg)] = peg.length;

    return accumulator
  },
    {0: 0, 1: 0, 2: 0}
    )
    return reducer;
}

console.log(testing())