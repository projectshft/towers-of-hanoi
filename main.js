//Towers of Hanoi project

var board = [
[5, 4, 3, 2, 1],
[],
[]
];

var pegOne = board[0].map(function(disc) {
 return disc
});
var pegTwo = board[1].map(function(disc) {
  return disc
 });
 var pegThree = board[2].map(function(disc) {
  return disc
 });

console.log('--- ' + pegOne.join(' '));
console.log('--- ' + pegTwo.join(' '));
console.log('--- ' + pegThree.join(' '));