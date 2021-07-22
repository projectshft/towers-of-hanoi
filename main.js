var Board = function () {
  this.towers = [['5','4','3','2','1'],[],[]];
  this.numDiscs = 5;
 };

 Board.prototype.moveDisc = function (start, end) {
  var startDisc = this.towers[start-1][this.towers[start-1].length-1];
  var endPosition = this.towers[end-1][this.towers[end-1].length-1];
  if (endPosition > startDisc || this.towers[end-1].length === 0) {
    this.towers[end-1].push(startDisc);
    this.towers[start-1][this.towers[start-1].pop()];
    console.log('Successful move! Your towers now looks like');
    this.logBoard();
  } else {
    console.log('Your move was not vaild, try a different move.');
    this.logBoard();
  }
  if( this.checkWin()) {
    console.log('You win! To play again use board.newGame(number of towers, number of discs)');
  }
 };

Board.prototype.checkWin = function () {
  return (this.towers[1].length === this.numDiscs || this.towers[2].length === this.numDiscs) 
}

Board.prototype.logBoard = function () {
  var printedBoard = this.towers.map(function (tower) {
    return `--- ${tower.map(function (disc) {
      return `${disc}`
    })}`
  });
  var loggedBoard = printedBoard.reduce(function (acc, arr) {
    return (acc += `${arr}\n`);
  }, '')
  console.log(loggedBoard);
};

Board.prototype.newGame = function (t,d) {
  this.towers = []
  for (let i = 0; i < t; i++) {
    this.towers.push([]);
  }
  for (let i = d; i > 0; i--) {
    this.towers[0].push(i);
  }
  this.numDiscs = d;
};


var board = new Board;
console.log('Welcome to the Towers of Hanoi. To play use board.moveDisc(moved disc start tower, moved disc destination).  To change size of board use board.newGame(number of towers, number of discs)');
board.logBoard();