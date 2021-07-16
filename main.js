var Game = function () {
  this.board = [['5','4','3','2','1'],[],[]];
 };

// Game.prototype.newGame = function (towers, discs) {
//   this.this.board.map(function (towers, discs) {
//     this.this.board.length = towers;
//     this.this.board.fill([]);
//     this.this.board[0].length = discs;
//     console.log(this.this.board);
//     debugger;
//   }) 
// };

 Game.prototype.moveDisc = function (start, end) {
  var startDisc = this.board[start-1][this.board[start-1].length-1];
  var endPosition = this.board[end-1][this.board[end-1].length-1];
  if (endPosition > startDisc || this.board[end-1].length === 0) {
    this.board[end-1].push(startDisc);
    this.board[start-1][this.board[start-1].pop()];
    console.log('Successful move! Your this.board now looks like');
    console.log(this.board); 
    if( this.checkWin()) {
      console.log('You win!');
    }
  } else {
    console.log('Your move was not vaild, try a different move.');
    console.log(this.board);
  }
};

Game.prototype.checkWin = function () {
  return (this.board[1].length === 5 || this.board[2].length === 5) 
}

var game = new Game;

game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(3, 2)
game.moveDisc(3, 1)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)
game.moveDisc(1, 2)
game.moveDisc(3, 2)
game.moveDisc(1, 3)
game.moveDisc(2, 1)
game.moveDisc(2, 3)
game.moveDisc(1, 3)