/**
 * 
 * Tower of Hanoi evaluation from Project Shift
 * Author: Daniel Posse
 * 
 */

/**
 * Use expensive recursive algorithm for now
 * 
 * base case: 1 disc on stack => move to destination
 *  recusrive case: 
 *    move n-1 discs from stack to aux peg
 *    move 1 disc from stack to destination (base case)
 *    move n-1 discs from aux peg to destination
 * 
 * initially only using 3 pegs no matter how many the game has
 * 
 * since moveDisc() uses 1-3; 
 *  peg 1 is start
 *  peg 2 is aux
 *  peg 3 is end
 */

//leave on global or put inside solveGame?
//for now leaving on global to test in console
const moveTowers = (discs, start, aux, end) => {

  //base case
  if (discs === 1) {
    game.moveDisc(start,end);
    return;
  }

  moveTowers(discs-1, start, end, aux);
  moveTowers(1, start, aux, end);
  moveTowers(discs-1, aux, start, end);

};

