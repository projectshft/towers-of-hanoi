// default board for start game. including winning value
const settingBoard = function () {
  var defaultBoard = [[5, 4, 3, 2], [], [],];
  const winVal = (accumulator, currentValue) => accumulator + currentValue;
  let winningValue = defaultBoard[0].reduce(winVal);

  return entry = defaultBoard, toWin = winningValue;
};
// creating game board with move counter
var GameBoard = function (board) {
  this.board = entry;
  this.moveCounter = 0;
  this.winningValue = toWin;
};
// visual console.log display of current game board
GameBoard.prototype.displayBoard = function () {
  this.board.map(function (board) {
    console.log('|---' + board)
  })
  console.log(' ')
};

// game logic and execusion of the moves
GameBoard.prototype.moveDisc = function (startPeg, endPeg) {

  this.startPeg = startPeg;
  this.endPeg = endPeg;
  let discToMove = (this.board[startPeg - 1].pop());
  let pegToMove = [this.board[endPeg - 1]];
  let toWIn = this.winningValue;

  //  To filter array and return arrays player can move peg on.
  const test = this.board.filter(function (element, ind, board, newArr) {
    if ((element[element.length - 1]) === undefined || (element[element.length - 1]) > discToMove) {
      return true
    }
    else { false };
  });

  // cheching for "allowed move" of the disc. 
  function isTrue(possibleArray, endArray) {
    return possibleArray.some(i => endArray.includes(i));
  };

  // move logic and conditions
  if (discToMove === undefined) {
    return console.log('this PEG is empty')
  } if (isTrue(test, pegToMove) === true) {
    this.board[endPeg - 1].push(discToMove);
    this.moveCounter++
  } else {
    this.board[startPeg].push(discToMove);
    console.log('this move is not allowed')
    return
  };
  // displaying game board after sucessful move as well as move counter
  console.log('move number:', this.moveCounter)
  board.displayBoard();

  // checking for winner. using reduce on last peg that disc was placed
  const arrayValue = (accumulator, currentValue) => accumulator + currentValue;
  function checkWinner2(board) {
    if (board[endPeg - 1].reduce(arrayValue, 0) === toWin) {
      return true
    }
  };
  // win condition display + reset of the move counter and game board
  if (checkWinner2(this.board) === true) {
    console.log(' YOU HAVE WON! in ' + this.moveCounter + ' moves')
    return board = new GameBoard(settingBoard())
  }
};


// ****** testing part ******
// Move discs by calling  board.moveDisc(fromPeg, toPeg)
var board = new GameBoard(settingBoard());

// below are moves to win    currently 4 disc settings
// board.moveDisc(1, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 3)
// board.moveDisc(1, 2)
// board.moveDisc(3, 2)
// board.moveDisc(3, 1)
// board.moveDisc(2, 1)
// board.moveDisc(2, 3)
// board.moveDisc(1, 2)
// board.moveDisc(1, 3)
// board.moveDisc(2, 3)
// board.moveDisc(1,2)
// board.moveDisc(3,2)
// board.moveDisc(3,1)
// board.moveDisc(2,1)
// board.moveDisc(3,2)
// board.moveDisc(1,3)
// board.moveDisc(1,2)
// board.moveDisc(3,2)

// from here starts new game
// board.moveDisc(1,3)
// board.moveDisc(1,2)
// console.log('TEST LOG for board and counter resets ', board)

// ******** testing end *******

