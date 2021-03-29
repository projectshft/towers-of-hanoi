//2D array representing three pegs on the board
let startStack = ["5","4","3","2","1"];

var board = {
  boardState: [
  ["5", "4", "3", "2", "1"],
  [],
  []],

  moveDisc: function (startPeg, endPeg) {
    
    let startArr = this.boardState[startPeg - 1];
    let endArr = this.boardState[endPeg - 1];

    if(endArr.length === 0 ||  startArr[startArr.length - 1] < endArr[endArr.length - 1]) {
    endArr.push(startArr.pop());
    console.log('That move was successful. The board is now: ');
    this.boardState.map(x => console.log(`--- ${x.join(' ')}`));
    } else {
      console.log('You can not move a larger disc on top of a smaller one, board is still: ');
      this.boardState.map(x => console.log(`--- ${x.join(' ')}`));
      }
      board.checkWinner(endArr);
  },

  checkWinner: function (arr) {
      if(startStack === arr) {
        console.log('Great job! You won!');
        }
        else {
          console.log('Enter next move.');
        }
  }
};

board.boardState.map(x => console.log(`--- ${x.join(' ')}`));

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