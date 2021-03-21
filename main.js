/*eslint-disable*/

//gameboard object
let gameBoard = {

  // The pegs and there respective disks
 pegs:[
  [5,4,3,2,1],
  [],
  []
 ],

 
 //method to move around disks
 move: function(chooseIndex, chooseDestination){


    // this asks is the array you are choosing an ampty array. If it is you cant use it.
    if(this.pegs[chooseIndex].length === 0){
       console.log("Please choose a populated array")
    }

    else {
      //This maps the pegs board 
      let array = this.pegs.map(function(elem){
        return elem;
      })

      // This stores the top disk in variable. Used slice so it creates a new reference. 
      let lastIndex = array[chooseIndex].slice().pop();
    
      //This checks if the pegs top disk you are choosing to move; is not larger then the peg you want to move it too.
      if(lastIndex > this.pegs[chooseDestination][this.pegs[chooseDestination].length - 1]){
        console.log("You can not put a bigger value over a smaller value ")
      }

        else{
      //This does the actual moving and updates and logs the pegs to the current state after the move.
      let popElem = this.pegs[chooseIndex].pop()
      this.pegs[chooseDestination].push(popElem)
      console.log(this.pegs);
     
        }
      

    }
    
    //This calls the check winner to see if we have 5 disks on a seperate peg
    this.checkWinner();
 
},

//this is the method that checks for a winner.
 checkWinner: function(){

   //This asks if either the other pegs are populated correctly then logs winner.
  if(this.pegs[1].length == 5 || this.pegs[2].length == 5) {
    console.log("WINNER!");

    //this resets the gameboard to play again.
    this.pegs = [
      [5,4,3,2,1],
      [],
      []
     ],
    console.log(this.pegs);
  }
  
}

}


//these are the calls to show that all instances work.
gameBoard.move(1,2)
console.log("Method call above logs error about not choosing a populated peg");
gameBoard.move(0,2)
gameBoard.move(0,1)
gameBoard.move(2,1)
gameBoard.move(0,2)
gameBoard.move(1,0)
gameBoard.move(1,2)
gameBoard.move(0,2)
gameBoard.move(0,2)
console.log("Method call above Logs error about putting larger disk over smaller one");
gameBoard.move(0,1)
gameBoard.move(2,1)
gameBoard.move(2,0)
gameBoard.move(1,0)
gameBoard.move(2,1)
gameBoard.move(0,2)
gameBoard.move(0,1)
gameBoard.move(2,1)
gameBoard.move(0,2)
gameBoard.move(1,0)
gameBoard.move(1,2)
gameBoard.move(0,2)
gameBoard.move(1,0)
gameBoard.move(2,1)
gameBoard.move(2,0)
gameBoard.move(1,0)
gameBoard.move(1,2)
gameBoard.move(0,2)
gameBoard.move(0,1)
gameBoard.move(2,1)
gameBoard.move(0,2)
gameBoard.move(1,0)
gameBoard.move(1,2)
gameBoard.move(0,2)
