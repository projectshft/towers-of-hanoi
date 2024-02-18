Here are the requirements:

First of all it will need a board. We'll utilize a 2D array to do this:
// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
[[5, 4, 3, 2, 1],
[],
[]]
We'll use your Chrome Browser JavaScript Console to play the game. We'll want to be able to print the board horizontally. You MUST utilize a map function at least once to accomplish this part of the assignment. The starting board will log the 2D array to the console like this:
--- 5 4 3 2 1
---
---
Our game will progress with the player submitting moves to the game and the game accepting or rejecting the move and updating the board if the move is allowed. Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc. For example, with moves originating from the above starting board:
// Move the disc from peg 1 to peg 2
moveDisc(1, 2);
That move was successful, board is now:
--- 5 4 3 2
--- 1
---

// Move disc from peg 1 to peg 3
moveDisc(1, 3);
That move was successful, board is now:
--- 5 4 3
--- 1
--- 2

// Move disc from peg 1 to peg 2
moveDisc(1, 2);
You cannot move a larger disc on top of a smaller one, board is still:
--- 5 4 3
--- 1
--- 2
There should be an object responsible for maintaining the state of the board.
There should be a way to move discs from one peg to another.
There should be a checkWinner function that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg.
Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
As a bonus, any time you iterate through an array, try and refrain from using for or while loops - instead try to use the Array helper methods.