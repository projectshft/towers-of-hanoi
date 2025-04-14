
var GameBoard = function () {
  this.board = [[5,4,3,2,1],[],[]],
  this.numberOfPegs = 3,
  this.disks = 5
};

/**
 * Functions that interact/alter the GameBoard
 */
GameBoard.prototype.stringFormattedGameBoard = function() {
  // Returns an array of strings that are formatted to be pegs
  return this.board.map((peg) => {
    return peg.reduce((prev, cur) => prev + cur, "---");
  });
};

GameBoard.prototype.logGameBoard = function (message) {
  var strings = this.stringFormattedGameBoard();
  if (message) {
    console.log(message);
  }
  return strings.forEach((string) => console.log(string));
};

GameBoard.prototype.moveIsValid = function (from, to) {
  // Returns an array containing if the move is valid and it's error message

  if (!from || !to){
    return [false, "Valid disk not selected"]
  }

  if (from.length === 0){
    return [false, "Cannot move disk from an empty peg"];
  } else if (from[from.length - 1] > to[to.length - 1]) {
    return [false, "You cannot move a larger disc on top of a smaller one"];
  } else {
    return [true, "That move was successful"];
  }
}

GameBoard.prototype.move = function(from, to) {
  var startingPeg = this.board[from];
  var targetPeg = this.board[to];
  var moveIsValid = this.moveIsValid(startingPeg, targetPeg);
  if (moveIsValid[0] === true){
    var removeDisk = startingPeg.pop();
    targetPeg.push(removeDisk);
    this.logGameBoard(moveIsValid[1] + ", " + "the board is now: ");

    return moveIsValid;
  }

  this.logGameBoard(moveIsValid[1] + ", " + "The board is still: ");
  return moveIsValid;
}

GameBoard.prototype.resetBoard = function() { 
  const newBoard = new Array(3).fill().map(() => []);
  for (let i = this.disks; i > 0; i--) {
    newBoard[0].push(i);
  }

  this.board = newBoard;
  this.logGameBoard("Game Board has been reset, it is now: ");
  return newBoard;
}

GameBoard.prototype.checkIfAllButOnePegIsEmpty = function(board){
  //todo: check
  let emptyPeg;
  board.forEach((peg, index) => {
    if (peg.length > 0) {
      if (emptyPeg == undefined) {
        emptyPeg = index;
      } else {
        return emptyPeg = -1;
      }
    }
  })
  return emptyPeg;
};

GameBoard.prototype.checkIfPegIsInOrder = function(peg) {
  var oneLessThanPrevious = (cur, prev) => {
    return cur == prev - 1;
  }

  return peg.every((disk, index, arr) => {
    return (index == 0) ? true : oneLessThanPrevious(disk, arr[index - 1]); 
  });
};

GameBoard.prototype.checkWinner = function() {
  var board = this.board;
  var filledPeg = this.checkIfAllButOnePegIsEmpty(board);
  return (filledPeg > 0) && this.checkIfPegIsInOrder(board[filledPeg]);
}



