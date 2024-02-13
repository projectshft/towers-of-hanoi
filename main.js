// The goal of Towers of Hanoi is to move a set of discs of different sizes from one peg to another while only allowing the player to take the topmost disc off the peg and not putting a larger disc on top of a smaller one.

// want to be able to print board horizontally
// must use map at least once to do so 
// starting board will log the 2D array to console like this:
// --- 5 4 3 2 1
// ---
// ---

// Our game will progress with the player:
//  submitting moves to the game and 
// the game accepting or rejecting the move and 
// updating the board if the move is allowed. 

// Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc

// to-do:
// create moveDisk function that takes two arguments: current peg and next peg
// remove last value of array and add it to next array (splice?)
// create restrictions that do not allow a larger number to be added to an array (compair new number to existing last number in array)
// only allow for last number in array to be moved
// if move is rejected console.log reason and return un-updated board state
// create object responsible for updating board state
// create checkWinner function to see if player has put the disks on another peg in the right order
// create console.log that returns when game is won 
// and function that resets game




let board = [[5, 4, 3, 2, 1],
[],
[]]; 

let boardState = {};
let winnerStatement = "Congrats! You have won!"

// board.map(function(value, index, array){
  
// });
    

let moveDisk = function(curr, next){
  board[next].push(board[curr][4].pop());
};

console.log(moveDisk(0,1))

// let checkWinner = function (state) {
//    boardState = state;

//    if(boardState === ) {
//     boardReset();
//     return winnerStatement;
//    }
// };

// let boardReset = function(){};

// console.log( + board);

