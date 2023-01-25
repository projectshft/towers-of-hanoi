//Requirements: 
//We will need a board and will tilize a 2D array

//Must utilize a map function at least once to accomplish this part of the assignment.  The starting board will log the 2D array to the console like:

// --- 5 4 3 2 1
// ---
// ---

//There should be an object maintaining the state of the board
//There shoul be a way to move discs form one peg to another
//There should be a behckWinner function that checks to see if the player has won the game(disc in original order but on different peg)
//once game is won the game should automatically end by announcing the winner(though console.log) and reset for a new game
//BONUS:  any tiem you iterate through the array, try and refrain from using for or while loops - try using helper methods

var line1 = ['-', '-', '-', 5, 4, 3, 2, 1];
var line2 = ['-', '-', '-'];
var line3 = ['-', '-', '-'];

console.log(line1, line2, line3);

var board = {
  line1: ['-', '-', '-', 5, 4, 3, 2, 1],
  line2: ['-', '-', '-'],
  line3: ['-', '-', '-']
};

console.log(board);