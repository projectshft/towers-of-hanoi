// First of all it will need a board. We'll utilize a 2D array to do this:
// // A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
// [["5", "4", "3", "2", "1"],
// [],
// []]

// We'll want to be able to print the board horizontally. You MUST utilize a map function at least once to accomplish this part of the assignment. The starting board will log the 2D array to the console like this (IF YOU'D LIKE A CHALLENGE, TRY PRINTING THE BOARD VERTICALLY):

// --- 5 4 3 2 1
// ---
// ---

// // Move the disc from peg 1 to peg 2
// board.moveDisc(1,2);
// That move was successful, board is now:
// --- 5 4 3 2
// --- 1
// ---

// // Move disc from peg 1 to peg 3
// board.moveDisc(1,3);
// That move was successful, board is now:
// --- 5 4 3
// --- 1
// --- 2

// // Move disc from peg 1 to peg 2
// board.moveDisc(1,2);
// You cannot move a larger disc on top of a smaller one, board is still:
// --- 5 4 3
// --- 1
// --- 2

//var Board = function() {

//create board using forEach
var board = [["3", "2", "1"], [], []]; // this is startingPosition; create a variable to hold it and return to it???
var pegBase = "--- ";
board.forEach(function (pegArray) {
  console.log(pegBase + pegArray.join("  "))
});

//alternative create board, using for loop
// var board = [["3", "2", "1"], [], []]; // board[0] = peg1; board[1] = peg2; board[2] = peg3;
// var pegBase = "--- ";
// for (let i=0; i<board.length; i++) {
//   console.log(pegBase + board[i].join("  "));
// };



// There should be a way to move discs from one peg to another.
var moveDisc = function(disc, destinationPeg){} // also need pegOfOrigin?


// There should be an object responsible for maintaining the state of the board and it should control the way to manipulate the inner state of the board. The board should maintain the number of moves that the player has done and output this value when the game completes.
var stateOfTheBoard = {};
var startingState; 

//maintain the number of moves
moveCounter()
var numberOfMoves = 0;
numberOfMoves++;
console.log(numberOfMoves);


//from "this" lesson, cohort-5-curriculum/week-01/day-03/this.md

//"this" refers to the object that called (or invoked) the function
//"this" is defined when the function is invoked, NOT when it is written
//In this example counter invoked (or called) the updateCounter function. This increments counter's count property. Inside the updateCounter method, the "this.count" is the same as the alerted "counter.count" or, in other words, we can say this===counter (the object that invoked the function)
var counter = {
  count: 0,

  updateCounter: function() {
    this.count += 1;
  }
};

counter.updateCounter();

alert(counter.count);


// a function that, given a certain peg, determines which other pegs the top disc from that peg can be moved to. 
//In order to complete this function, you MUST use a filter function at least once.
possibleOptions(peg)
//.filter


// There should be a function checkWinner that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the reduce function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".

checkWinner()
//.reduce



// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
endGame()
announceWinner() = console.log ("Winner!");
resetGame()

