//Goal: Create a game that can be played in the console using the following rules:
  //1. There are 3 pegs, one peg starts with all the disks from largest at the bottom to smallest at the top
  //2. The player can only move one disk at a time
  //3. larger disks can only exist under smaller disks

//Instruction:
  //A board that utilizes a 2D Array
    // [
    //   [5, 4, 3, 2, 1],
    //   [],
    //   []
    // ]
  //be able to print the board horizontally in the console
    //this should utilize a map function
  //move function
    //accepts disk to move from and to move to
    //checks if move is valid
      //if valid updates gameboard
      //if invalid logs message to the user, but does not update the board
  //There should be an object that maintains the state of the board
  //There should be a way to move discs from one peg to another.
  // There should be a checkWinner function
   // You win the game by putting all the discs back in the original order but on a new peg.
  //  Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.