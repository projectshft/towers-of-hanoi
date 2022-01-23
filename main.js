
// class that defines number of pegs and discs for board
var TowersOfHanoi = function(pegs = 3, discs = 5) {

  var boardArr = createBoard(pegs, discs);
  // private attributes only accessible with getter/setter
  // and by moveDisc
  var boardAttributes = {
    numberOfDiscs : discs,
    numberOfPegs : pegs,
    //boardArr : [['5', '4', '3', '2', '1'], [], []]
    boardArr : boardArr
  }

  // create initial board from pegs and discs
  function createBoard(pegs, discs) {
    var boardArr = [];
  
    // create pegs
    for (let i = 0; i < pegs; i++) {
      boardArr.push([]);
    }
  
    // add discs to first peg
    for (let i = discs; i > 0; i--) {
      boardArr[0].push(i);
    }
      return boardArr;
  }


  // moves disc from pegs if a valid move
  function moveDisc(src, dest) {
    var sourceArr = boardAttributes.boardArr[src - 1];
    var destArr = boardAttributes.boardArr[dest - 1];
    // assuming we never pick from an empty peg...
    var sourceDisc = sourceArr[sourceArr.length - 1];
    var destLength = destArr.length;

    // move without testing if no discs of peg
    if (destLength === 0) {
      // move 
      var disc = sourceArr.pop();
      destArr.push(disc);
      console.log("That move was successful, board is now:")
    } else {
      var lastDisc = destArr[destLength - 1];

      if (lastDisc < sourceDisc){
        // don't move
        console.log("You cannot move a larger disc on top of a smaller one, board is still:");
      } else {
        // move 
        var disc = sourceArr.pop();
        destArr.push(disc);
        console.log("That move was successful, board is now:");
      }
    }

    printBoard();
    if (checkWinner()){
      console.log("You win!!");
      resetGame();
    } 
  };

  // function that prints board Array to console
  function printBoard() {
    boardAttributes.boardArr.map(function(peg) {
  
      var strPeg = peg.reduce(function(accumulator, peg) {
        return accumulator + peg + " "; 
      }, "--- " )
      console.log(strPeg);
      return peg;
    })
  };

  // function that checks if game has been won
  function checkWinner() {
    var noneInFirstPeg = boardAttributes.boardArr[0].length === 0;
    var allInOnePeg = boardAttributes.boardArr.some(function(peg) {
      return peg.length == boardAttributes.numberOfDiscs;
    });
  
    return noneInFirstPeg && allInOnePeg;
  }
  
  // resets board back to initial setup
  function resetGame() {
    var newBoard = createBoard(boardAttributes.numberOfPegs, boardAttributes.numberOfDiscs); 
    setAttribute('boardArr', newBoard);
    console.log('Game reset. Play first move:')
    printBoard();    
  }

  function getAttribute(attribute) {
    if (boardAttributes.hasOwnProperty(attribute)){
      return boardAttributes[attribute];
    } 
  };

  function setAttribute(attribute, value) {
    if (boardAttributes.hasOwnProperty(attribute)){
      return boardAttributes[attribute] = value;
    } 
  };

  return { 
    moveDisc: moveDisc,
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
}


var board = new TowersOfHanoi(3, 5);
// console.log(board.getAttribute('boardArr'));


// how to win
board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(2,1);
board.moveDisc(3,1);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(2,3);
board.moveDisc(2,1);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);

// OTHER
// board.moveDisc(1,2);
// board.moveDisc(1,3);
// board.moveDisc(2,3);
// board.moveDisc(1,2);
// board.moveDisc(3,1);
// board.moveDisc(3,2);
// board.moveDisc(1,2);
// board.moveDisc(1,2);
















