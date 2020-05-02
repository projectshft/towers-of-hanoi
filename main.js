/**
 * TowersGame is a factory function to make new game instances and
 * its methods allow the user to play in Towers of Hanoi in the console.
 *
 * @param {number} userPegs Number of pegs on the board.
 * @param {number} userDiscs number of discs on the board, initially all on the first peg
 * @return {object} -- methods
 */

var TowersGame = function(userPegs, userDiscs) {
  let current = {
    board: [],
  }

  /**
   * prints the board to the console
   *
   * we don't want to mutate the array for our strings
   */
  var printBoard = function() {
    let discStrs = current["board"].map(peg => {
      return peg.toString().split(',').join(' ');
    });

    discStrs.forEach((discStr, index) => {
      console.log("Peg " + (index + 1) + " --- " + discStr);
    });
  }

  /**
   * resets the board and moves to 0
   *
   * reprints instructions each time
   */
  var resetBoard = function() {
    current.moves = 0;

    for (let i = 0; i < current.pegs; i++) {
      current.board[i] = []; // not push, need to rewrite pegs
    }

    // reverse order to represent size of disc
    for (let i = current.discs; i > 0; i--) {
      current.board[0].push(i);
    }

    console.log(`Type these methods in your console to play:
      board.resetBoard() to reset the board

      To move a disc,  input the pegs you'd like to lift FROM to the DESTINATION peg.
      For example, if we wanted to move a disc from peg 1 to peg 2, we'd use:

      board.moveDisc(1, 2).

      Illegal moves will not work. There are three illegal situations that will throw an error:
      1. If there is no disc on the peg you are removing from
      2. If the destination peg has a smaller disc than the one you are moving)
      3. If you input something into board.moveDisc() other than numbers

      To print the current board, use board.printBoard().

      If you win, the game will automatically alert you. Have fun!`);

    console.log("The reset board is: ");
    printBoard();
  }

  /**
   * Sets the board up for the first time
   *
   * added this in order to have user-inputted boards & pegs
   * we need setBoardsize to be invoked for the initial round
   * moves couldn't be used becasue it is always 0 when board is reset
   */
  if (!current.hasOwnProperty("pegs")) {
    setBoardSize();
    resetBoard();
  }

  /**
   * Moves the disc but first has to check for legality, then invokes mover()
   *
   * checks for any illegal moves by making a "legal" list of pegs {allowedPegs}
   *
   * @param {number} originPeg the peg that we are moving a disc FROM
   * @param {number} desiredPeg the peg the user would like to move the disc to
   */

  var moveDisc = function(originPeg, desiredPeg) {
    if (typeof originPeg != "number" || typeof desiredPeg != "number") {
      throw new Error("Input the peg number you are moving from and peg you are moving to");
    } else if (current.board[originPeg - 1].length === 0) {
      throw new Error("No discs on that peg!");
    }

    // need to be decremented because of 0-index
    desiredPeg--;
    originPeg--;
    let allowedPegs = [];

    current.board.filter((peg, pegNumber) => {
      let lastDiscOrigin = current.board[originPeg][current.board[originPeg].length - 1];
      let lastDiscPeg = peg[peg.length - 1];

      if (peg.length == 0 || lastDiscPeg > lastDiscOrigin) {
        allowedPegs.push(pegNumber);
      }
    });

    if (allowedPegs.includes(desiredPeg)) {
      mover();
    } else {
      throw new Error("You can't put a big disc onto a small disc!");
    }

    /**
     * Actually moves the disk
     *
     * Immediately increments moves, logs success, prints board, and checks for winner
     */
    function mover() {
      current["board"][desiredPeg].push(current["board"][originPeg].pop());
      current.moves += 1;
      console.log("Your move #" + current.moves + " was successful. Board is now: ");
      printBoard();
      if (checkWinner()) {
        promptPlayAgain();
      };
    }
  };

  /**
   * Checks for the winner
   *
   * Won't return a winner if 0 moves made
   * Calculates the sum of the discs if they were all on one pegs
   * Uses the sum of the discs on any given peg
   * @return {number} - 0 is falsy for check in mover()
   */
  function checkWinner() {
    if (current.moves === 0) return false;

    let expectedSum = 0;

    for (let i = 1; i <= current.discs; i++) {
      expectedSum += i;
    }

    let pegSum; // after reduce, should be equal to expected sum for a win

    return current.board.reduce((winnerStatus, peg) => {
      if (peg.length > 0) {
        pegSum = peg.reduce((sum, disc) => sum + disc);
      }

      if (pegSum === expectedSum) {
        winnerStatus += 1;
      }

      return winnerStatus;
    }, 0);
  }

  /**
   * resets the board after a win
   *
   */
  function promptPlayAgain() {
    console.log("You won! Let's play again!");
    resetBoard();
  }

  /**
   * sets attributes on current so that resetBoard knows how many pegs/discs to use
   *
   * this function is linked to a test to see if it's the initial round of the game
   *
   * although not strictly necessary, the thought behind this function would be
   * to build the ability to re-size the board upon user input
   */
  function setBoardSize() {
    current.pegs = userPegs;
    current.discs = userDiscs;
  }

  return {
    checkWinner,
    resetBoard,
    current,
    printBoard,
    moveDisc,
  }
};
