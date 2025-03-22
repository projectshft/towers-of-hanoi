/*function towersofHanoi(n, fromRod, toRod, usingRod){
    if (n === 1) {
        console.log('Move disk 1 from ${fromRod} to ${toRod}')
        return
    }
    towersofHanoi(n-1, fromRod, usingRod, toRod)
    console.log('Move disk ${n} from ${fromRod} to ${toRod}')
    towersofHanoi(n-1, usingRod, toRod, fromRod)
}

towersofHanoi(3, 'A', 'C', 'B')*/

// TowersOfHanoi class that manages the game
class TowersOfHanoi {
    constructor(numDiscs) {
      // Initialize the board with 3 pegs, where the first peg contains all the discs
      this.board = [
        Array.from({ length: numDiscs }, (_, index) => numDiscs - index), // peg 1 starts with discs
        [], // peg 2 is empty initially
        [] // peg 3 is empty initially
      ];
    }
  
    // Method to print the board
    printBoard() {
      this.board.map(peg => {
        console.log(peg.length === 0 ? '---' : `--- ${peg.join(' ')}`);
      });
      console.log('---');
    }
  
    // Method to move a disc from one peg to another
    moveDisc(fromPeg, toPeg) {
      if (this.board[fromPeg].length === 0) {
        console.log("Cannot move disc. The source peg is empty.");
        return; // No discs to move from this peg
      }
      
      // Check if the move is valid
      const discToMove = this.board[fromPeg][this.board[fromPeg].length - 1];
      const targetTopDisc = this.board[toPeg][this.board[toPeg].length - 1];
      
      if (targetTopDisc !== undefined && targetTopDisc < discToMove) {
        console.log("Invalid move. Cannot place a larger disc on top of a smaller one.");
        return; // Cannot place a larger disc on a smaller one
      }
      
      // Move the disc
      this.board[toPeg].push(this.board[fromPeg].pop());
      this.printBoard(); // Show the updated board after the move
    }
  
    // Method to check if the player has won
    checkWinner() {
      if (this.board[2].length === this.board[0].length) {
        console.log("Congratulations! You've won the game!");
        this.resetGame(); // Reset the game for a new round
      }
    }
  
    // Method to reset the game
    resetGame() {
      console.log("Resetting the game...");
      this.board = [
        Array.from({ length: this.board[0].length }, (_, index) => this.board[0].length - index), // peg 1
        [],
        []
      ];
      this.printBoard();
    }
  }
  
  // Initialize the game with 5 discs
  const game = new TowersOfHanoi(5);
  
  // Display the starting board
  game.printBoard();
  
  // Example moves (use in console)
  // game.moveDisc(0, 1); // Move disc from peg 1 to peg 2
  // game.moveDisc(0, 2); // Move disc from peg 1 to peg 3
  // game.moveDisc(0, 1); // Invalid move (larger disc on smaller one)
  
  // To check if you won
  // game.checkWinner();
  