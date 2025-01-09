let towersOfHanoi = {
  gameBoard: [
    [5, 4, 3, 2, 1],
    [],
    []    
  ],
  
  editBoard: function (changeAction, numOfArraysToChange) {
    // code to set the board with selected pegs 
    console.clear();
      
    console.log(`
      ------------------------------------------------------------------------------------------------------------------------------
        Objective:
          Move all the discs from the first peg to another peg while following these rules:
          1. Only one disc can be moved at a time.
          2. A larger disc cannot be placed on top of a smaller disc.
          3. You win when all discs are stacked in the same order on a different peg!
        
          How to Play:
          1. To move a disc, use: "towersOfHanoi.moveDisc(x, y);".
            - 'x' is the peg you’re moving a disc from.
            - 'y' is the peg you’re moving the disc to.
            Example: "towersOfHanoi.moveDisc(0, 2);" moves the top disc from peg 0(the first) to peg 2(the third).
        
          Need help?
            - Use "towersOfHanoi.help();" to view the list of available commands.
          
          Ready to begin? 
            - Make your first move and have fun!
      ------------------------------------------------------------------------------------------------------------------------------      
    `)

    // Checks if changeAction is a valid input:'Add' or 'Remove'
    if (changeAction !== "Add" && changeAction !== "Remove") {
      return console.log(`Please enter a valid changeAction value: "Add" or "Remove" - You entered: ${changeAction}`);     
    } else {

      // If 'Add' is entered, it will multiply * by the 'numOfArraysToChange' input
      if (changeAction === "Add") {
        for (let i = 0; i < numOfArraysToChange; i++) {
          this.gameBoard.push([]);
        }

      // If 'Remove' is entered, it will multiply * by the 'numOfArraysToChange' input
      } else if ( changeAction === "Remove") {

        // Ensures that the game board always has a Min. of 3 pegs to play.
        if (this.gameBoard.length - numOfArraysToChange < 3) {
          return console.log(`I'm sorry, you need to have at least 3 pegs to play. You cannot remove ${numOfArraysToChange} pegs.`);
        } else {
          for (let i = 0; i < numOfArraysToChange; i++) {
            this.gameBoard.pop();
          }
        }
      }
      console.log(`
      ------------------------------------------------------------------------------------------------------------------------------
          
        You've made the game more challenging! 
        
        ====> Your board now consists of ${this.gameBoard.length} pegs. <==== 

        * Remember the pegs are 0-indexed, so your peg choices are 0-${this.gameBoard.length - 1} *


        Enter your next move using:
          towersOfHanoi.moveDisc(x, y);
          
      ------------------------------------------------------------------------------------------------------------------------------
        
        `)
    }

    this.showBoard();
    return;
  },


  // Lets you view the current state of the board
  showBoard: function () {
    console.log("Current Game Board:", this.gameBoard);
  },


  moveDisc: function (x, y) { 
    console.clear(); // clears the console for clean layout.

    // Gets the disc to move (the top disc from peg x)
    const discToMove = this.gameBoard[x][this.gameBoard[x].length - 1];

    // Determines the top disc on peg y (or sets to ingfinity if the peg is empty)
    let pegToPlaceDiscOnSize;
    if(this.gameBoard[y].length === 0) {
      pegToPlaceDiscOnSize = Infinity;
    } else {
      pegToPlaceDiscOnSize = this.gameBoard[y][this.gameBoard[y].length - 1];
    }

    // Checks if peg x is empty
    if (discToMove === undefined) {
      console.log(`
        ** Peg ${x} is empty! You cannot move a disc from an empty peg. **
          
                              Please try again.
        `);

      this.showBoard(); // Shows the board after invalid move
      return; // Exits the function
    };
      
    // Checks if the move is valid or not
    if (discToMove > pegToPlaceDiscOnSize) {
      console.log(`
        * INVALID MOVE *
            The disc you've chosen: Disc #${discToMove}, is bigger than the disc on peg ${y}, Disc #${pegToPlaceDiscOnSize}. 
            
            Remember:
              Move all the discs from the first peg to another peg while following these rules:
                1. Only one disc can be moved at a time.
            ==> 2. A larger disc cannot be placed on top of a smaller disc. <==================================
                3. You win when all discs are stacked in the same order on a different peg!
            
          Please try again.
        `);

        this.showBoard(); // Shows the board after invalid move
        return;     
    };
    
    // Performs the move if valid
    this.gameBoard[y].push(this.gameBoard[x].pop()); // Pops (last Arr element) from peg 'x' and moves to peg 'y'
    console.log(`Successfull move processed. Disc #${discToMove} was moved from peg ${x} to peg ${y}.`);

    this.checkWinner(); // Automatically check if the player has won
    this.showBoard(); // Shows updated game board after a valid move
  },

  checkWinner: function () {
    // Defines what a winning tower looks like
    const winningTower = [5, 4, 3, 2, 1];

    // Check if the first peg is empty 
    if (this.gameBoard[0].length !== 0) {
      console.log("Enter your next move."); // Game is still going, not all discs have been moved from peg 0(1).  
      return; // Exits if peg 0(1) still has discs
    }
     
    // Loops through pegs 1 -> remainign pegs (defualt 3 pegs or more if a user added)
    for (let i = 1; i < this.gameBoard.length; i++) {
      if (this.gameBoard[i].toString() === winningTower.toString()) {
        // If the tower(arr) is the same as winningTower, then the winner message is logged
        console.log(`
                          !!!!     Congratulations       !!!! 

                                 You’ve won the game!

                  Great job on completing the Towers of Hanoi puzzle!

                     - To play again please refrash your browser -
      `);   
      return; // Exit after announcing 'you win'
      } 
    }
    console.log("Enter your next move."); // Prompt if no winning tower is found.
  },

  help: function () {
    console.clear();
    console.log(`
    Towers of Hanoi Commands:
    ------------------------------------------------------------------------------------------------------------------------------
    1. towersOfHanoi.start(userName)  
       - Clears the console and starts the game with an introduction and rules.
       - Parameter:
         - userName: Your name as a string to personalize the welcome message.
       - Example:
         towersOfHanoi.start('Chris');
    ------------------------------------------------------------------------------------------------------------------------------
    2. towersOfHanoi.showBoard()  
       - Displays the current state of the game board.
       - Example: 
         towersOfHanoi.showBoard();
         Output: Current Game Board: [[5, 4, 3, 2, 1], [], []]
    ------------------------------------------------------------------------------------------------------------------------------
    3. towersOfHanoi.editBoard(changeAction, numOfArraysToChange)  
       - Adds or removes pegs from the game board.
       - Parameters:
         - changeAction: "Add" to add pegs, "Remove" to remove pegs.
         - numOfArraysToChange: the number of pegs you want to add or remove.
       - Example:
         towersOfHanoi.editBoard("Add", 2);  // Adds 2 new pegs.
         towersOfHanoi.editBoard("Remove", 1);  // Removes 1 peg.
       - Note: The game board must always have at least 3 pegs to play.
    ------------------------------------------------------------------------------------------------------------------------------
    4. towersOfHanoi.moveDisc(x, y)  
       - Moves a disc from one peg to another.
       - Parameters:
         - x: The peg number (0-indexed) where the disc is being moved from.
         - y: The peg number (0-indexed) where the disc is being moved to.
       - Example:
         towersOfHanoi.moveDisc(0, 2);  // Moves the top disc from peg 0 to peg 2.
       - Note: Only the top disc can be moved, and you cannot place a larger disc on a smaller one.
    ------------------------------------------------------------------------------------------------------------------------------
    5. towersOfHanoi.checkWinner()  
       - Automatically checks if you’ve won the game by successfully moving all discs to a different peg.
       - This runs automatically after each move.
    ------------------------------------------------------------------------------------------------------------------------------
    6. towersOfHanoi.help()  
       - Lists all available commands and their descriptions.
       - Example:
         towersOfHanoi.help();
    ------------------------------------------------------------------------------------------------------------------------------
    `);
  },

  start: function (userName) {
    console.clear();

    if (userName === undefined) {
      console.log(`
        =============================================================
                 Welcome to the Towers of Hanoi!        
        =============================================================
      
        Objective:
        Move all the discs from the first peg to another peg while following these rules:
        1. Only one disc can be moved at a time.
        2. A larger disc cannot be placed on top of a smaller disc.
        3. You win when all discs are stacked in the same order on a different peg!
      
        How to Play:
        1. To move a disc, use: "towersOfHanoi.moveDisc(x, y);".
           - 'x' is the peg you’re moving a disc from (0, 1, or 2).
           - 'y' is the peg you’re moving the disc to (0, 1, or 2).
           Example: "towersOfHanoi.moveDisc(0, 2);" moves the top disc from peg 0 to peg 2.
      
        Need help?
          - Use "towersOfHanoi.help();" to view the list of available commands.
        
        Ready to begin? 
          - Make your first move and have fun!
        `);
        towersOfHanoi.showBoard();
    } else {
      console.log(`
        =============================================================
                 Welcome ${userName}, to the Towers of Hanoi!        
        =============================================================
      
        Objective:
        Move all the discs from the first peg to another peg while following these rules:
        1. Only one disc can be moved at a time.
        2. A larger disc cannot be placed on top of a smaller disc.
        3. You win when all discs are stacked in the same order on a different peg!
      
        How to Play:
        1. To move a disc, use: "towersOfHanoi.moveDisc(x, y);".
           - 'x' is the peg you’re moving a disc from (0, 1, or 2).
           - 'y' is the peg you’re moving the disc to (0, 1, or 2).
           Example: "towersOfHanoi.moveDisc(0, 2);" moves the top disc from peg 0 to peg 2.
      
        Need help?
          - Use "towersOfHanoi.help();" to view the list of available commands.
        
        Ready to begin ${userName}? 
          - Make your first move and have fun!
        `);
        towersOfHanoi.showBoard();
    }    
  },
}

console.log(`To begin, please enter: towersOfHanoi.start('Enter your name here with quotes.');`)

