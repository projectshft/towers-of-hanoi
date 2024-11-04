## Towers of Hanoi

This project has been created by a student at Parsity, an online software engineering course. The work in this repository is wholly of the student based on a sample starter project that can be accessed by looking at the repository that this project forks.

If you have any questions about this project or the program in general, visit [parsity.io](https://parsity.io/) or email hello@parsity.io.

---

This version of the Towers of Hanoi enables the player to initialize and name different boards with different numbers of pegs and discs. To do this, declare a variable with this syntax:

const boardName = new Towers('Board Name', pegs, discs).

This new game object will contain a few properties/methods:

.name stores the name of the board given in the initial argument  
.pegs stores the number of pegs given in the initial argment  
.discs stores the number of discs given in the initial argument  
.moveCount starts at 0 when the board is initialized and increments by one with every move  
.printboard = will print the current state of the board  
.shouldAutoPlay starts with the boolean value of true and changes to false if the game is won to stop the .autoPlay prototype function

In addition, there are two prototype methods:  
.moveDisc(from, to) is a prototype function which enables the game to be played incrementally by moving discs from one peg to another  
.autoPlay(numMoves) is a prototype function which enables a certain number of random moves to be made until the number of moves is reached or the game is won, stopping the autoPlay function's loop.
