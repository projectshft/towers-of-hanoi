## The Challenge - Towers of Hanoi

For today's challenge, we're going to have you try to build a program that lets you play one of the most classic games that most programmers learn on. The goal of Towers of Hanoi is to move a set of discs of different sizes from one peg to another while only allowing the player to take the topmost disc off the peg and not putting a larger disc on top of a smaller one. Here is a site that lets you see the game being played with the ability to change the amount of pegs/discs: http://towersofhanoi.info/Animate.aspx.

The story goes that priests in a temple move 64 discs around 3 pegs to fulfill the prophecy that if they complete their task the world will end. Thankfully, based on the math that we know, to complete this task would take 2^64-1 seconds to complete, or ~585 billion years. We won't have you try to solve this puzzle. We suggest that you start with 3 - 5 discs in your initial solution.

For the most part, we will let you control your own structure and technique for this project unless stated that you must use a certain technique or function. Please be sure to follow the instructions, as we will be grading based on these instructions.

To start, [fork and clone this repo](https://github.com/projectshft/towers-of-hanoi). It's basically completely empty. You can add and remove whatever you want from the repo. When you're finished, submit a pull request so we can give you a code review and leave comments.

Here are the requirements:

- First of all it will need a `board`. We'll utilize a 2D array to do this:

```JavaScript
// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
[["5", "4", "3", "2", "1"],
[],
[]]
```

- We'll want to be able to print the board horizontally. You MUST utilize a `map` function at least once to accomplish this part of the assignment. The starting board will log the 2D array to the console like this (if you'd like a challenge, try printing the board vertically):

```JavaScript
--- 5 4 3 2 1
---
---
```

- Our game will progress with the player submitting moves to the game and the game accepting or rejecting the move and updating the board if the move is allowed. Remember, you must only move the top disc from the peg and you can't move a disc on top of another if it is bigger than that disc. For example with moves originating from the above starting board:

```JavaScript
// Move the disc from peg 1 to peg 2
board.moveDisc(1,2);
That move was successful, board is now:
--- 5 4 3 2
--- 1
---

// Move disc from peg 1 to peg 3
board.moveDisc(1,3);
That move was successful, board is now:
--- 5 4 3
--- 1
--- 2

// Move disc from peg 1 to peg 2
board.moveDisc(1,2);
You cannot move a larger disc on top of a smaller one, board is still:
--- 5 4 3
--- 1
--- 2
```

- There should be an object responsible for maintaining the state of the board and it should control the way to manipulate the inner state of the board. The board should maintain the number of moves that the player has done and output this value when the game completes.
- There should be a way to move discs from one peg to another.
- There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. In order to complete this function, you MUST use a `filter` function at least once (HINT: If the user says they want to move a certain disc to another peg, wouldn't it be nice if you had a function that could take that disc size and look at all the pegs on the board and only return the ones that the disc you want to move would fit on?).
- There should be a function `checkWinner` that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the `reduce` function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".
- Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.

---
ok. yeah.
