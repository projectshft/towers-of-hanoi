var towersOfHanoi = function() {

  // A board representing 3 pegs and 3 discs on the first peg in ascending order
  var board = [
    ['3', '2', '1'],
    [],
    []
  ];

  var counter = 0;

  var moveDisc = function(startPeg, endPeg) {
    // if the disc on the endPeg is greater than the disc you're moving, OR if the endPeg is empty
    if ((board[endPeg][0] > board[startPeg][board[startPeg].length -1]) || (board[endPeg][0] === undefined)){
    // push starting disc to the top of the endPeg
    board[endPeg].push(board[startPeg][board[startPeg].length -1]);
    // then delete the starting disc in its original location
    board[startPeg].splice(board[startPeg].length -1);
    // add 1 to the counter
    counter ++;
    // check to see if the game is over
    checkWinner();
    } else {
    throw "cannot move a bigger disc onto a smaller disc";
    }
  };

  var possibleMoves = function(startPeg) {
    //if the startPeg isn't empty
    if (board[startPeg][0] !== undefined) {
      console.log('Your disc can be moved to these peg(s):');
      //return array of discs the startPeg disc can be moved to
      possiblePegs = board.filter(function(peg) {
        return (board[startPeg][board[startPeg].length-1] < peg[0] || peg[0] === undefined);
      });
      // find and report what pegs those discs are on, but only if startPeg isn't one of those pegs
      possiblePegs.forEach(function(peg) {
        if (board.indexOf(peg) !== startPeg) {
          console.log(board.indexOf(peg));
        }
      });
      //if the startPeg is empty, say so
    } else console.log("There's no disc on that peg");
  };

  var printBoard = function() {
    // return board without commas
    var printedBoard = board.map(function(num) {
      return "--- " + num.join(" ")
    })
    // print board
    console.log(printedBoard);
  }

  var checkWinner = function() {
    // set reduce function = isItAWing
    var isItAWin = board.reduce(function(accumulator, peg, currentIndex) {
      // after first loop, if a peg is full, return true
      if ((currentIndex >= 1) && (peg.length === 3)) {
        accumulator = true;
        }
      return accumulator
    },false)
    // if true, declare winner and reset board
    if (isItAWin === true) {
      console.log("Now that's a winner! You completed the game in " + counter + " moves.")
      console.log("Here's your winning board. Play again?")
      console.log(printBoard())
      board = [['3', '2', '1'],[],[]]
    }
  }

  return {
    moveDisc: moveDisc,
    possibleMoves: possibleMoves,
    printBoard: printBoard
  }
}

var action = towersOfHanoi()

action.moveDisc(0,2)
action.moveDisc(0,1)
action.moveDisc(2,1)
action.moveDisc(0,2)
action.moveDisc(1,0)
action.printBoard()
action.possibleMoves(1)
