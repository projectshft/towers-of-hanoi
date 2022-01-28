
// class that defines number of pegs and discs for board
class TowersOfHanoi {
  
  constructor(pegs = 3, discs = 5) {
    var boardArr = createBoard(pegs, discs);
    
    this.boardAttributes = {
      numberOfDiscs : discs,
      numberOfPegs : pegs,
      //default boardArr : [['5', '4', '3', '2', '1'], [], []]
      boardArr : boardArr
    };

    this.moveDisc = moveDisc;
    this.printBoard = printBoard;
    this.checkWinner = checkWinner;
    this.resetGame = resetGame;
    this.getAttribute = getAttribute;
    this.setAttribute = setAttribute;

  }
}

// create initial board from pegs and discs
var createBoard = function(pegs, discs) {
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
var moveDisc = function(src, dest) {
  var sourceArr = this.boardAttributes.boardArr[src - 1];
  var destArr = this.boardAttributes.boardArr[dest - 1];
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

  this.printBoard();

  if (this.checkWinner()){
    console.log("You win!!");
    this.resetGame();
  } 
};


// function that prints board Array to console
var printBoard = function() {
  this.boardAttributes.boardArr.map(function(peg) {

    var strPeg = peg.reduce(function(accumulator, peg) {
      return accumulator + peg + " "; 
    }, "--- " )
    console.log(strPeg);
    return peg;
  })
};

// function that checks if game has been won
var checkWinner = function() {

  var noneInFirstPeg = this.boardAttributes.boardArr[0].length === 0;
  var allInOnePeg = this.boardAttributes.boardArr.some((peg) => {
    return peg.length == this.boardAttributes.numberOfDiscs;
  });

  return noneInFirstPeg && allInOnePeg;
}

// resets board back to initial setup
var resetGame = function() {
  var newBoard = createBoard(this.boardAttributes.numberOfPegs, this.boardAttributes.numberOfDiscs); 
  this.setAttribute('boardArr', newBoard);
  console.log('Game reset. Play first move:')
  this.printBoard();    
}

var getAttribute = function(attribute) {
  if (this.boardAttributes.hasOwnProperty(attribute)){
    return this.boardAttributes[attribute];
  } 
};

var setAttribute = function(attribute, value) {
  if (this.boardAttributes.hasOwnProperty(attribute)){
    return this.boardAttributes[attribute] = value;
  } 
};


/*
TESTS
var board = new TowersOfHanoi(3, 5);


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
*/
















