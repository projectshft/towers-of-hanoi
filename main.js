var Board = function() {

  var board = [];
  var winningSum = 0;
  var makeNew = function(pegNum, blockNum) {
    if (pegNum > 2 && blockNum > 1) {
      for (var i = 0; i < pegNum; i++) {
        board.push([]);
      }
      for (var j = blockNum; j > 0; j--) {
        board[0].push(j);
        winningSum = winningSum + j;
      }
    }
    printBoard();
  }
  var moveCount = 0;

  var printBoard = function() {
    var currentBoard = [];
    currentBoard = board.map(function(element) {
      return element;
    });
    console.log("Move #" + moveCount + "   The current Board is:")
    console.log(currentBoard);
  }
  var moveBlock = function(startPeg, endPeg) {
    if (moveCheck(startPeg, endPeg) ) {
      board[endPeg].push(board[startPeg].pop());
      printBoard();
      moveCount++;
      checkWinner();
    } else {
      console.log("invalid move!")
    }
  }


  // var pegCheck = function(peg){
  //   var startVal = board[start][board[start].length - 1];
  //
  // }

    var moveCheck = function(start, end) {

      var thisPeg = board[start];
    var startVal = thisPeg[thisPeg.length-1];
    //console.log("startVal" + startVal)
    var pegValues = board.map(function(pegs){

      return ((pegs[pegs.length-1] > startVal) || pegs.length ===0);
     })
        //console.log(pegValues);
       //console.log(end + "end peg");
       //  console.log(pegValues[end])

     return pegValues[end];
}

      // Want to return the index value of the array whose last value is less than the startVal


  // var moveCheck = function(start, end) {
  //   var startVal = board[start][board[start].length - 1];
  //   var endVal = board[end][board[end].length - 1];
  //   if (endVal === undefined) {
  //     return true;
  //   };
  //   if (startVal === undefined) {
  //     console.log("There is no block there!");
  //     return false;
  //   }
  //   return startVal < endVal;
  // }

  var checkWinner = function() {
    for (var i = 1; i < board.length; i++) {
      var winCheck = 0;
      winCheck = board[i].reduce(function(bag, values) {
        return bag = bag += values;
      }, 0);

    if (winCheck == winningSum) {
      console.log("You won in " + moveCount + " moves!");
      board = [];
      moveCount = 0;
      printBoard();
    }
  }
  };
  return {
    //printBoard: printBoard,
    move: moveBlock,
    //moveCheck: moveCheck,
    makeNew: makeNew,

  }
  }
  console.log("Welcome to towers of Hanoi! to create a new game, create a new variable and ecercute the Board() function, then use the makeNew(peg#,block#) method to create a new board. Then use move(startPeg,endPeg) - (0 indexed :) ) to make a move!");


  var newBoard = Board();
  newBoard.makeNew(3, 3);
//   newBoard.move(0,1);
//   newBoard.move(0, 2);
//   newBoard.move(1, 2);
// newBoard.move(0, 1);
// newBoard.move(2, 0);
// newBoard.move(2, 1);
// newBoard.move(0, 1);
