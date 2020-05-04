var board = {
  boardState: function() {
    var pegs = 3;
    var disks = 3;
    var moves = 0;
    var board = [];

    var setPegs = function(pegNumber) {
      pegs = pegNumber;
    }

    var setDisks = function(diskNumber) {
      disks = diskNumber;
    }

    var clearBoard = function() {
      var boardLength = board.length;
      for (let i = 0; i < boardLength; i++) {
        board.pop();
      }
    }

    var initializeBoard = function() {
      moves = 0;
      clearBoard();
      for (let i = 0; i < pegs; i++) {
        board.push([]);
      }
      for (let i = disks; i > 0; i--) {
        board[0].push(i.toString());
      }
    }

    var incrementMoves = function() {
      moves += 1;
    }

    var returnBoardCopy = function() {
      return board.slice();
    }

    var validMoves = function(sourcePegIndex) {
      var sourcePeg = board[sourcePegIndex];
      return board.filter(peg => {
        if (peg.length === 0) {
          return true;
        } else {
          return peg !== sourcePeg && Number(peg[peg.length - 1]) > Number(sourcePeg[sourcePeg.length - 1]);
        }
      });
    }

    var getMoves = function() {
      return moves;
    }

    var getPegs = function() {
      return pegs;
    }

    var getDisks = function() {
      return disks;
    }

    var moveDisk = function(sourcePegIndex, targetPegIndex) {
      board[targetPegIndex].push(board[sourcePegIndex].pop());
    }

    return {
      setPegs: setPegs,
      setDisks: setDisks,
      initializeBoard: initializeBoard,
      incrementMoves: incrementMoves,
      returnBoardCopy: returnBoardCopy,
      validMoves: validMoves,
      getMoves: getMoves,
      getPegs: getPegs,
      getDisks: getDisks,
      moveDisk: moveDisk,
      clearBoard: clearBoard
    }
  },

  convertToIndex: function(pegNumber) {
    return pegNumber - 1;
  },

  playerMove: function(sourcePeg, targetPeg, boardState) {
    sourcePegIndex = this.convertToIndex(sourcePeg);
    targetPegIndex = this.convertToIndex(targetPeg);
    if (this.isValidMove(sourcePegIndex, targetPegIndex, boardState)) {
      boardState.moveDisk(sourcePegIndex, targetPegIndex);
      console.log("The move was successful, board is now:");
      this.display(boardState);
      boardState.incrementMoves();
    } else {
      alert("You cannot move a larger disk on top of a smaller one, board is still:");
      console.log("You cannot move a larger disk on top of a smaller one, board is still:");
      this.display(boardState);
    }
    this.checkWinner(boardState);
  },

  isValidMove: function(sourcePegIndex, targetPegIndex, boardState) {
    var moveIsValid = false;
    boardState.validMoves(sourcePegIndex).forEach(validTarget => {
      if (this.pegsAreEqual(validTarget, boardState.returnBoardCopy()[targetPegIndex])) {
        moveIsValid = true;
      }
    });
    return moveIsValid;
  },

  pegsAreEqual: function(peg1, peg2) {
    if (peg1.join('') === peg2.join('')) return true;
    return false;
  },

  display: function(boardState) {
    var displayableBoard = boardState.returnBoardCopy().map(function(displayPeg) {
      return "---" + displayPeg.join(' ');
    })
    displayableBoard.forEach(peg => console.log(peg));
    console.log("");
  },

  calculateWinningPeg: function(boardState) {
    var winningPeg = "";
    for (let i = boardState.getPegs(); i > 0; i--) {
      winningPeg += i.toString();
    }
    return winningPeg;
  },

  checkWinner: function(boardState) {
    var gameWon = false;
    var winningPeg = this.calculateWinningPeg(boardState);
    for (let i = 1; i < boardState.returnBoardCopy().length; i++) {
      var currentPeg = boardState.returnBoardCopy()[i].reduce(function(disks, currentDisk) {
        return disks + currentDisk;
      }, "");
      if (currentPeg === winningPeg) {
        alert("Congratulation! You've won!");
        alert(`You solved the puzzle in ${boardState.getMoves()} moves!`);
        gameWon = true;
      }
    }
    return gameWon;
  },
}
