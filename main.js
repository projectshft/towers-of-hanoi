var Board = function () {
  this.towers = [['5','4','3','2','1'],[],[]];
 };

// Board.prototype.newBoard = function (towers, discs) {
//   var towers = towers;
//   var discs = discs;
//   this.towers.map(function (towers, discs) {
//     this.towers.length = towers;
//     this.towers.fill([0]);
//     this.towers[0].length = discs;
//     console.log(this.towers);
//     debugger;
//   }) 
// };

 Board.prototype.moveDisc = function (start, end) {
  var startDisc = this.towers[start-1][this.towers[start-1].length-1];
  var endPosition = this.towers[end-1][this.towers[end-1].length-1];
  if (endPosition > startDisc || this.towers[end-1].length === 0) {
    this.towers[end-1].push(startDisc);
    this.towers[start-1][this.towers[start-1].pop()];
    console.log('Successful move! Your this.towers now looks like');
    console.log('---',this.towers[0].toString(),'\n','---',this.towers[1].toString(),'\n','---',this.towers[2].toString()); 
    if( this.checkWin()) {
      console.log('You win!');
    }
  } else {
    console.log('Your move was not vaild, try a different move.');
    console.log('---',this.towers[0].toString(),'\n','---',this.towers[1].toString(),'\n','---',this.towers[2].toString());
  }
};

Board.prototype.checkWin = function () {
  return (this.towers[1].length === 5 || this.towers[2].length === 5) 
}

var board = new Board;

board.moveDisc(1,2);