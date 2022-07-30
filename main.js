//Towers of Hanoi project

var game = {
board: [
[5, 4, 3, 2, 1],
[],
[]
],
move: function(from, to) {
  var fromDisc = this.board[from - 1][this.board[from - 1].length - 1];
  var toDisc = this.board[to - 1][this.board[to - 1].length - 1];
  if(fromDisc > toDisc) {
    console.log('You Cannot move a larger disc on top of a smaller one, board is still:');
    this.boardStatus();
    this.checkWinner();
  } else if(fromDisc < toDisc || toDisc === undefined) {
    this.board[to - 1].push(fromDisc);
    this.board[from - 1].pop();
    console.log('That move was successful, board is now:');
    this.boardStatus()
    this.checkWinner();
  }
},
  boardStatus: function() {
    var pegOne = game.board[0].map(function(disc) {
      return disc;
     });
     var pegTwo = game.board[1].map(function(disc) {
       return disc;
      });
      var pegThree = game.board[2].map(function(disc) {
       return disc;
      });
      console.log('--- ' + pegOne.join(' '));
      console.log('--- ' + pegTwo.join(' '));
      console.log('--- ' + pegThree.join(' '));
  },
  checkWinner: function() {
    if(this.board[1].length === 5 || this.board[2].length === 5) {
      console.log('YOU WON!!!!');
    }
  },
  start: function() {
    console.log('Welcome to the Towers of Hanoi game! the board looks like:');
    this.boardStatus();
  }
}
