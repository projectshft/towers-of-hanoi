// A board representing 3 pegs and 3 discs on the first peg in ascending order
board = [
  ['3', '2', '1'],
  [],
  []
]

var boardControls = {
  counter: 0,

  moveDisc: function(x, y) {
    if ((board[y][0] > board[x][board[x].length -1]) || (board[y][0] === undefined)){
    board[y].push(board[x][board[x].length -1]);
    board[x].splice(board[x].length -1)
    boardControls.counter ++
    boardControls.checkWinner()

    } else {
    throw "cannot move a bigger disc onto a smaller disc"
    }
  },
  checkWinner: function() {
    var isItAWin = board.reduce(function(accumulator, peg, currentIndex) {
      if (currentIndex >= 1) {
        if (peg.length === 3) {
          accumulator = true;
        }
      }
      return accumulator
    },false)
    if (isItAWin === true) {
      console.log("Now that's a winner! You completed the game in " + boardControls.counter + " moves.")
      console.log("Play again?")
      board = [['3', '2', '1'],[],[]]
    }
  },
  printBoard: function(peg) {
    var pegOne = board.map(function(num) {
      return '--- ' + num + '-'
    })
    console.log(pegOne);
  }
}
//
boardControls.moveDisc(0, 2);
boardControls.moveDisc(0, 1);
boardControls.moveDisc(2, 1);
boardControls.moveDisc(0, 2);
boardControls.moveDisc(1, 0);
boardControls.moveDisc(1, 2);
boardControls.moveDisc(0, 2);

// boardControls.moveDisc(0, 1);
// boardControls.moveDisc(1, 0);


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
