// factory function to create new board object
var Board = function (pegs, discs) {
  this.board = [];
  this.pegs = pegs;
  this.discs = discs;

  this.startNewGame();
}

// add method to start a new game
Board.prototype.startNewGame = function () {
  this.board = [];
  
  for (var i = 0; i < this.pegs; i++) {
    this.board.push([]);
  }

  for (var i = this.discs; i > 0; i--) {
    this.board[0].push(i);
  }

  this.displayBoard();
  return this.board;
}

// add method to update the board display board via HTML
Board.prototype.displayBoard = function () {
  gameDiv.innerText = '';

  this.board.map(function (peg) {
    var pegDiv = document.createElement('div');
    pegDiv.setAttribute('class', 'peg');

    var currentPeg = '--- ';
    peg.map(function (disc) {
      currentPeg += disc + ' ';
    })
    
    pegDiv.innerText = currentPeg;
    gameDiv.appendChild(pegDiv);
  })
}

// add method to move a disc 
Board.prototype.moveDisc = function (pegMoveFrom, pegMoveTo) {
  var pegMoveFromIndex = pegMoveFrom - 1;
  var pegMoveToIndex = pegMoveTo - 1;

  // if they select a peg to move from that doesn't exist on the board
  if (!this.board[pegMoveFromIndex]) {
    return 'The peg you want to move a disc from doesn\'t exist! Board is still:';
  // if they select a peg to move to that doesn't exist on the board  
  } else if (!this.board[pegMoveToIndex]) {
    return 'The peg you want to move a disc to doesn\'t exist! Board is still:';
  // if they select a peg to move from that is empty
  } else if (this.board[pegMoveFromIndex].length === 0) {
    return 'There aren\'t any discs on that peg! Board is still:';
  // if they select the same peg to move from and move to
  } else if (this.board[pegMoveFromIndex] === this.board[pegMoveToIndex]) {
    return 'You can\'t move a disc to and from the same peg! Board is still:';
  // if they select an empty peg to move to, remove top disc from peg to move from and add it to peg to move to, then update the display
  } else if (this.board[pegMoveToIndex].length === 0) {
    var discToMove = this.board[pegMoveFromIndex].pop();
    this.board[pegMoveToIndex].push(discToMove);
    this.displayBoard();
    return 'That move was successful. Board is now:'
  // if they select a non-empty peg to move to, check that the disc they are moving is smaller than the one they are putting it on top of
  } else {
    // if it's bigger
    if (this.board[pegMoveFromIndex].slice(-1) > this.board[pegMoveToIndex].slice(-1)) { 
      return 'You cannot move a larger disc on top of a smaller one. Board is still:';
    // if it's smaller, remove top disc from peg to move from and add it to peg to move to, then update the display
    } else {
      var discToMove = this.board[pegMoveFromIndex].pop();
      this.board[pegMoveToIndex].push(discToMove);

      // after disc is moved, check if the board meets the conditions to win the game. if so, reset board
      if (this.checkWinner()) {
        this.startNewGame();
        return 'You win! Starting new game...'
      // otherwise, update display and wait for next move
      } else {
        this.displayBoard();
        return 'That move was successful. Board is now:'
      }
    }
  }
}

// add method to check if the board meets the requirements to win--discs are not on original peg, the largest disc is on the bottom, and all discs are on the same peg
Board.prototype.checkWinner = function () {
  var pegsToCheck = this.board.slice(1);
  var maxDisc = this.discs;
  var winner = false;

  pegsToCheck.forEach(function (peg) {
    var bottomDisc = Number(peg.slice(0, 1));

    if (bottomDisc === maxDisc && peg.length === maxDisc) {
      winner = true;
    }
  })

  return winner;
}

// display input form for creating a new board
function openNewBoardInputForm() {
  closeMoveDiscInputForm();
  gameMessage.innerText = '';
  gameDiv.innerText = '';
  document.querySelector('#new-board-input').style.display = 'grid';
}

// close input form for creating a new board
function closeNewBoardInputForm() {
  document.querySelector('#new-board-input').style.display = 'none';
}

// display input form for selecting disc to move
function openMoveDiscInputForm() {
  document.querySelector('#move-disc-input').style.display = 'grid';
}

// close input form for selecting disc to move
function closeMoveDiscInputForm() {
  document.querySelector('#move-disc-input').style.display = 'none';
}

// create new board object based on form input
function createNewBoard(e) {
  e.preventDefault();
  var pegs = document.querySelector('input[id=pegs]');
  var pegsValue = pegs.value;
  var discs = document.querySelector('input[id=discs]');
  var discsValue = discs.value;

  closeNewBoardInputForm();
  openMoveDiscInputForm();
  gameMessage.innerText = 'Starting new game...';
  pegs.value = '';
  discs.value = '';
  
  return myBoard = new Board(Number(pegsValue), Number(discsValue));
}

// move disc based on form input and update game message
function submitMoveDisc(e) {
  e.preventDefault();
  var pegMoveFrom = document.querySelector('input[id=peg-move-from]');
  var pegMoveTo = document.querySelector('input[id=peg-move-to]');

  var message = myBoard.moveDisc(pegMoveFrom.value, pegMoveTo.value);
  gameMessage.innerText = message;

  pegMoveFrom.value = '';
  pegMoveTo.value = '';
}

// reset current board
function resetBoard() {
  myBoard.startNewGame();
  gameMessage.innerText = 'Starting new game...'
}

// add event listeners to game buttons
var gameDiv = document.querySelector('#game');
var createNewBoardButton = document.querySelector('#create-new-board-button');
var submitNewBoardButton = document.querySelector('#submit-new-board-input');
var submitMoveDiscButton = document.querySelector('#submit-move-disc-input');
var gameMessage = document.querySelector('#game-message');
var resetGameButton = document.querySelector('#reset-board-button');

createNewBoardButton.addEventListener('click', openNewBoardInputForm);
submitNewBoardButton.addEventListener('click', createNewBoard);
submitMoveDiscButton.addEventListener('click', submitMoveDisc);
resetGameButton.addEventListener('click', resetBoard);


// Solution for 3 pegs/5 discs
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(2, 1);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(2, 1);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(1, 3);
// myBoard.moveDisc(2, 3);
// myBoard.moveDisc(1, 2);
// myBoard.moveDisc(3, 1);
// myBoard.moveDisc(3, 2);
// myBoard.moveDisc(1, 2);
