var Board = function (pegs, discs) {
  this.board = [];
  this.pegs = pegs;
  this.discs = discs;

  this.startNewGame();
}

Board.prototype.startNewGame = function () {
  this.board = [];
  
  for (var i = 0; i < this.pegs; i++) {
    this.board.push([]);
  }

  for (var i = this.discs; i > 0; i--) {
    this.board[0].push(i);
  }

  this.displayBoard();
  return this.board.board;
}

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

Board.prototype.moveDisc = function (pegMoveFrom, pegMoveTo) {
  if (!this.board[pegMoveFrom - 1]) {
    return 'The peg you want to move a disc from doesn\'t exist! Board is still:';
  } else if (!this.board[pegMoveTo - 1]) {
    return 'The peg you want to move a disc to doesn\'t exist! Board is still:';
  } else if (this.board[pegMoveFrom - 1].length === 0) {
    return 'There aren\'t any discs on that peg! Board is still:';
  } else if (this.board[pegMoveTo - 1].length === 0) {
    var discToMove = this.board[pegMoveFrom - 1].pop();
    this.board[pegMoveTo - 1].push(discToMove);
    this.displayBoard();
    return 'That move was successful. Board is now:'
  } else {
    if (this.board[pegMoveFrom - 1].slice(-1) > this.board[pegMoveTo - 1].slice(-1)) { 
      return 'You cannot move a larger disc on top of a smaller one. Board is still:';
    } else {
      var discToMove = this.board[pegMoveFrom - 1].pop();
      this.board[pegMoveTo - 1].push(discToMove);

      if (this.checkWinner()) {
        this.startNewGame();
        return 'You win! Starting new game...'
      } else {
        this.displayBoard();
        return 'That move was successful. Board is now:'
      }
    }
  }
}

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

function openNewBoardInputForm() {
  closeMoveDiscInputForm();
  gameMessage.innerText = '';
  gameDiv.innerText = '';
  document.querySelector('#new-board-input').style.display = 'grid';
}

function closeNewBoardInputForm() {
  document.querySelector('#new-board-input').style.display = 'none';
}

function openMoveDiscInputForm() {
  document.querySelector('#move-disc-input').style.display = 'grid';
}

function closeMoveDiscInputForm() {
  document.querySelector('#move-disc-input').style.display = 'none';
}

function createNewBoard(e) {
  e.preventDefault();
  var pegs = document.querySelector('input[id=pegs]');
  var discs = document.querySelector('input[id=discs]');

  closeNewBoardInputForm();
  openMoveDiscInputForm();
  gameMessage.innerText = 'Starting new game...';
  return myBoard = new Board(Number(pegs.value), Number(discs.value));
}

function submitMoveDisc(e) {
  e.preventDefault();
  var pegMoveFrom = document.querySelector('input[id=peg-move-from]');
  var pegMoveTo = document.querySelector('input[id=peg-move-to]');

  var message = myBoard.moveDisc(pegMoveFrom.value, pegMoveTo.value);
  gameMessage.innerText = message;

  pegMoveFrom.value = '';
  pegMoveTo.value = '';
}

function resetBoard() {
  myBoard.startNewGame();
  gameMessage.innerText = 'Starting new game...'
}

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
