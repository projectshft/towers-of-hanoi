var board = [
  ['5', '4', '3', '2', '1'],
  [],
  []
];

var rowIndicator = '-';


var printBoard = function () {
  var rowsAsStrings = board.map(function (row) {
    return row.join(' ');
  });
  
  var fullString = rowsAsStrings.reduce(function (acc, element) {
    acc += `${rowIndicator.repeat(3)} ${element}\n`;
    return acc;
  }, '');

  console.log(fullString);
};

var moveDisc = function (startPeg, endPeg) {
  // note: the pegs are not the same as the index: so peg 1 is index 0 in its row
  var startPegDiscs = board[startPeg - 1];
  var endPegDiscs = board[endPeg - 1];

  if (moveIsLegal(startPeg, endPeg) {
    endPegDiscs.push(startPegDiscs.pop())
    console.log('That move was successful!');
    printBoard();
  } else {
    console.log(`You cannot move a larger disc onto a smaller one.\nBoard remains unchanged.`)
    printBoard();
  }
};