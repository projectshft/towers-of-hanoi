var moveOutcome = '[undefinded]';

// Have to use .map() at least once to set up board?
var board = {
  peg1: [5, 4, 3, 2, 1],
  peg2: ['-','-','-','-','-'],
  peg3: ['-','-','-','-','-'],
};

var moveDisc = function (dic, peg) {}; // use helper methods, not for loops

var checkWinner = function () {}; // if true, announce (clog) winner and reset game

console.log(`That move was ${moveOutcome}. Board is now:`)
// console.log(board);
console.log(board.peg1);
console.log(board.peg2);
console.log(board.peg3);

console.log(moveDisc(1, 2)); // test function