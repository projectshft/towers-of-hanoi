/*
 * PROCESS
 * Object: maintain the state / control the manipulation of the board / board maintains the number of moves
 * Move: a way to move disks from one peg to another
 * PegFilter: use filter() to determine what pegs the top disk can move to
 * checkWinner: checks to see if player has won using reduce()
 * console.log announcing winner and reset for new game
 */

var hanoi = function() {

  var board = [
    ["3", "2", "1"],
    [],
    []
  ]; // end board

  var boardMap = board.map(function(peg) {
    console.log("--- " + peg);
  });

  var count = 0;

  var attributes = {
    pegOne: board[0],
    pegTwo: board[1],
    pegThree: board[2]
  }

  var checkWinner = attributes.pegTwo.reduce(function(accumulator, number) {
    accumulator.push(number);
    return accumulator;
  }, []);

  var checkWinner2 = attributes.pegThree.reduce(function(accumulator2, number) {
    accumulator.push(number);
    return accumulator2;
  }, []);

  var moveDisk = function(currentPeg, newPeg) {

    var currentPeg = board[currentPeg - 1];
    var newPeg = board[newPeg - 1];
    var disk = currentPeg.pop();
    var result = newPeg.push(disk);

    if (newPeg < disk) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
      currentPeg.push(disk);
      newPeg.pop();
    } else if (newPeg >= disk) {
      console.log("That move was successful, board is now: ")
    } // end check on if disk is bigger or not
    count++;

    if (attributes.pegTwo.includes("3") && attributes.pegTwo.includes("2") && attributes.pegTwo.includes("1")) {
      console.log("Congrats you won! Moves: " + count);
      var game = hanoi();
    } else if (attributes.pegThree.includes("3") && attributes.pegThree.includes("2") && attributes.pegThree.includes("1")) {
      console.log("Congrats you won! Moves: " + count);
      var game = hanoi();
    }// end check if game has been won

    console.log(board.map(function(peg) {
      console.log("--- " + peg);
    }))
  }; // end moveDisk

  return {
    moveDisk: moveDisk,
    boardMap: boardMap,
    attributes: attributes,
    checkWinner: checkWinner
  };

} // end hanoi

var game = hanoi();

/* *******************************************************
* attempt at using filter to determine good peg or bad peg
*
var acceptablePegs = board.filter(function(newPeg){
  if (Number(newPeg) > Number(disk)) {
    console.log("That move was successful, board is now: ")
  }else var unAcceptablePegs = board.filter(function(newPeg){
    if (Number(newPeg) < Number(disk) && Number(newPeg) > 0) {
    console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
    currentPeg.push(disk);
    newPeg.pop();
  }
  })
}) // end check on if disk is bigger or not
*/
