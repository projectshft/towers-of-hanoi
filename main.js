//Towers of Hanoi project

var game = {
board: [
[5, 4, 3, 2, 1],
[3,1],
[5,7]
],
move: function(from, to) {
  var fromDisc = this.board[from - 1][this.board[from - 1].length - 1];
  var toDisc = this.board[to - 1][this.board[to - 1].length - 1];
 console.log(fromDisc)
 console.log(toDisc)
}
}

// var fromDisc = game.board[0][game.board[0].length - 1];

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