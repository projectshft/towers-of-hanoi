var towersOfHanoi = function() {

  // A board representing 3 pegs and 3 discs on the first peg in ascending order
  var board = [
    ['3', '2', '1'],
    [],
    []
  ]

  var moveDisc = function(startPeg, endPeg) {
    // if the disc on the endPeg is greater than the disc you're moving, OR if the endPeg is empty
    if ((board[endPeg][0] > board[startPeg][board[startPeg].length -1]) || (board[endPeg][0] === undefined)){
    // push starting disc to the top of the endPeg
    board[endPeg].push(board[startPeg][board[startPeg].length -1]);
    // then delete the starting disc in its original location
    board[startPeg].splice(board[startPeg].length -1)
    // add 1 to the counter
    boardControls.counter ++
    // check to see if the game is over
    boardControls.checkWinner()
    } else {
    throw "cannot move a bigger disc onto a smaller disc"
    }
  }

  var possibleMoves = function(startPeg) {
    //take a disc
    //look at all pegs on the board that have a larger number
    var possiblePegs = board.find(function(peg) {
      return (peg[0] === undefined) || (board[startPeg][board[startPeg].length-1] > peg[0])
      // (board[startPeg][board[startPeg].length-1] > peg[0])
    })
    console.log(board[possiblePegs]);
  }

  var printBoard = function(peg) {
    // return board without commas
    var printedBoard = board.map(function(num) {
      return "---" + num.join(" ")
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
      console.log("Now that's a winner! You completed the game in " + boardControls.counter + " moves.")
      console.log("Play again?")
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

action.printBoard();




















///////////////////////
// board = [
//   ['3', '2', '1'],
//   [],
//   []
// ]
//
// var boardControls = {
//   counter: 0,
//
//   possibleMoves: function(startPeg) {
//     //take a disc
//     //look at all pegs on the board that have a larger number
//     var possiblePegs = board.find(function(peg) {
//       return (peg[0] === undefined) || (board[startPeg][board[startPeg].length-1] > peg[0])
//       // (board[startPeg][board[startPeg].length-1] > peg[0])
//     })
//     console.log(board[possiblePegs]);
//   },
//
//   moveDisc: function(startPeg, endPeg) {
//     // if the disc on the endPeg is greater than the disc you're moving, OR if the endPeg is empty
//     if ((board[endPeg][0] > board[startPeg][board[startPeg].length -1]) || (board[endPeg][0] === undefined)){
//     // push starting disc to the top of the endPeg
//     board[endPeg].push(board[startPeg][board[startPeg].length -1]);
//     // then delete the starting disc in its original location
//     board[startPeg].splice(board[startPeg].length -1)
//     // add 1 to the counter
//     boardControls.counter ++
//     // check to see if the game is over
//     boardControls.checkWinner()
//     } else {
//     throw "cannot move a bigger disc onto a smaller disc"
//     }
//
//   },
//   checkWinner: function() {
//     // set reduce function = isItAWing
//     var isItAWin = board.reduce(function(accumulator, peg, currentIndex) {
//       // after first loop, if a peg is full, return true
//       if ((currentIndex >= 1) && (peg.length === 3)) {
//         accumulator = true;
//         }
//       return accumulator
//     },false)
//     // if true, declare winner and reset board
//     if (isItAWin === true) {
//       console.log("Now that's a winner! You completed the game in " + boardControls.counter + " moves.")
//       console.log("Play again?")
//       board = [['3', '2', '1'],[],[]]
//     }
//   },
//   printBoard: function(peg) {
//     // return board without commas
//     var printedBoard = board.map(function(num) {
//       return "---" + num.join(" ")
//     })
//     // print board
//     console.log(printedBoard);
//   }
// }
//
// boardControls.moveDisc(0, 2);
// boardControls.moveDisc(0, 1);
// boardControls.moveDisc(2, 1);
// boardControls.moveDisc(0, 2);
// boardControls.moveDisc(1, 0);
// boardControls.moveDisc(1, 2);
// boardControls.moveDisc(0, 2);
//
//
// boardControls.printBoard();
// boardControls.possibleMoves(0);

// boardControls.moveDisc(0, 1);
// boardControls.moveDisc(0, 2);
// boardControls.moveDisc(1, 2);
// boardControls.moveDisc(0, 1);
// boardControls.moveDisc(2, 0);
// boardControls.moveDisc(2, 1);
// boardControls.moveDisc(0, 1);

// console.log(board)




//take board[x].length and move it to board[y].length
// if board[y][0] is smaller than board[x][length]
//if peg 1 and 3 or peg 1 and 2 are empty, the user

//start with board
//two arrays should be empty
//
