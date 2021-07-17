var Board = function () {
  this.towers = [['5','4','3','2','1'],[],[]];
 };

 Board.prototype.moveDisc = function (start, end) {
  var startDisc = this.towers[start-1][this.towers[start-1].length-1];
  var endPosition = this.towers[end-1][this.towers[end-1].length-1];
  if (endPosition > startDisc || this.towers[end-1].length === 0) {
    this.towers[end-1].push(startDisc);
    this.towers[start-1][this.towers[start-1].pop()];
    console.log('Successful move! Your towers now looks like');
    this.logBoard();
    if( this.checkWin()) {
      console.log('You win!');
    }
  } else {
    console.log('Your move was not vaild, try a different move.');
    this.logBoard();
  }
};

Board.prototype.checkWin = function () {
  return (this.towers[1].length === 5 || this.towers[2].length === 5) 
}

Board.prototype.logBoard = function () {
  this.towers.map(function (tower, index) {
    console.log('---' + board.towers[index].toString());
  })
};

var board = new Board;

board.moveDisc(1,2);