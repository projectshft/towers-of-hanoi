

const initialState = [            //  declaring an array of arrays with "initialState"
    ["5", "4", "3", "2", "1"],    //  This is the first peg at index[0], five discs on the peg to begin
    [],                           //  This is the second peg at index[1], no discs to start (empty array)
    [],                           //  This is the third peg at index[2], no discs to start (empty array)
];                                //  Closing the array of arrays

const game = {                         // declaring an object of game
    board: [...initialState],          // key of board, the array ...initialState makes a copy of an object or an array content.  "Put these in there"
    displayPegs: () => {               //  Create a function called displayPegs, arrow function format
      console.log("gameboard:");       //  Console log of "gameboard" to indicate what the arrays represent
      game.board.map((item) => {       //  game.board.map  -- used to CHANGE TO NEW VALUES.  "item" is an argument
        console.log(item);             //  console.log the argument of item (from game.board.map)
      })
    },
    moveDisc: (initialPeg, targetPeg) => {    // Create a moveDisk function that takes in the initial and target pegs
      game.displayPegs()                      // Call (from the object of game) the displayPegs function
        
          initialPeg -= 1;                    // Array is 0, 1, 2 but player sees pegs 1, 2, 3
          targetPeg -= 1;                     // Array is 0, 1, 2 but player sees pets 1, 2 ,3

          var start = game.board[initialPeg];  //  declare a variable of start.  It equals the game.board initialPeg
          var end = game.board[targetPeg];     //  declare a variable of end.  It equals the game.board targetPeg
  
        if (end.length === 0 || start[start.length - 1] < end[end.length - 1]) {
          end.push(start.pop());  
        };                                     // If the targetPeg array equals 0 or the initialPeg array value is less than the targetPeg value, then do the following code.  This will allow the code to follow the rules of Towers of Hanoi --  a larger disc can not go on top of a smaller disc
                                               // Remove the value (pop) from ititialPeg and "push" value to targetPeg
        
                                               // after every move, you want to check for a winner
        game.checkWinner()                     // call the game.CheckWinner function
        game.displayPegs();                    // call the game.displayPegs function
    },
    checkWinner: () => {                       // declare a checkWinner function to check to see if player won
        
        
        var hasWon = (game.board[1].length === 5 || game.board[2].length === 5);
        //  this is the logic to check if the player has one the game.  The conditions are 5 discs on either Peg 2 or Peg 3
        if (hasWon) {                           // check to see if var hasWon is true
            console.log("You won!!")            // indicate to the player that they have won 
        }
    }
}












//  Code to use to check for a win in game
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)