## Towers of Hanoi

This project has been created by a student at Project Shift, a software engineering fellowship located in Downtown Durham.  The work in this repository is wholly of the student based on a sample starter project that can be accessed by looking at the repository that this project forks.

If you have any questions about this project or the program in general, visit projectshift.io or email hello@projectshift.io.

Eval 1: Towers of Hanoi 
Project requirement status with callouts of what has not been satisfied in this submission 

1. Game board is represented as a 2D array for three pegs and five discs has been implemented.  Most parameters  needed to vary number of pegs and discs are implemented.  Dynamic configuration and initialization of an array for anarbitrary number of pegs and discs remain to be implemented.
2. Function to print board can display variable number of pegs and discs in vertical format.  Have not yet implemented horizontal display using map function.
3. Logging player actions and flagging and reacting to invalid commands has been implemented. moveDisc(src,dst) works from console
4. Game state has not yet been implemented as an object.
5. A moveDisc function has been implemented.
6. A function to determine legal moves has been implemented. It does not yet utilize a filter function.
7. checkWinner has been implemented using a reduce function. there is an option to designate a specific peg number as the win location. A peg number of 0 allows for a win on any peg other than the starting peg.
8. Player is informed of the win, also informed of a false win when a specific peg is the target and another peg has all the discs.
