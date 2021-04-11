//2D array representing three pegs on the board
var board = {
  boardState: [
  ["5", "4", "3", "2", "1"],
  [],
  []],

  startStack: this.boardState[0],

  moveDisc: function (startPeg, endPeg) {
    
    let startArr = this.boardState[startPeg - 1];
    let endArr = this.boardState[endPeg - 1];

    if(endArr.length === 0 ||  startArr[startArr.length - 1] < endArr[endArr.length - 1]) {
      endArr.push(startArr.pop());
      console.log('That move was successful. The board is now: ');
      this.printBoard();
    } else {
      console.log('You can not move a larger disc on top of a smaller one, board is still: ');
      this.printBoard();
    }
    
    if (board.checkWinner()) {
      console.log ("Congratulations, you won!!");
      this.resetBoard();
    } else {
      console.log ("Enter next move:");
    }
  },

  printBoard: function () {
    const boardToPrint = this.boardState.map(p => `--- ${p.join(' ')}`);
    console.log(boardToPrint.join('\n'));
  },

  checkWinner: function () {
      for (let i=1; i < this.boardState.length - 1; i++) {
        if (this.boardState[i].length === 5 && this.boardState[i][0] == 5) {
          return true
        } else {
          return false
        }
      }
    }
  }

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
board.moveDisc(1,3);
board.moveDisc(3,2);
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