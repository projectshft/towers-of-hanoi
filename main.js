var board = [
  ['5', '4', '3', '2', '1'],
  [],
  []
];

var rowIndicator = '-';

var boardState = {
  playing: true,
  illegalMove: ''
};


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

var moveIsLegal = function (firstPeg, lastPeg) {
  var startPegDiscs = board[firstPeg - 1];
  var endPegDiscs = board[lastPeg - 1];
  var topDisc = startPegDiscs[startPegDiscs.length - 1]
  var bottomDisc = endPegDiscs[0];
  var rowHasDiscs = startPegDiscs.length;
  var acceptableDiscSize = topDisc < bottomDisc || bottomDisc === undefined;
  if (!rowHasDiscs) {
    boardState.illegalMove = 'There are no discs to move on that peg!';
  }
  if (!acceptableDiscSize) {
    boardState.illegalMove = 'You cannot place a larger disc on top of a smaller.';
  }
  
  return rowHasDiscs && acceptableDiscSize;
};



var moveDisc = function (startPeg, endPeg) {
  // note: the pegs are not the same as the index: so peg 1 is index 0 in its row
  var startPegDiscs = board[startPeg - 1];
  var endPegDiscs = board[endPeg - 1];

  if (moveIsLegal(startPeg, endPeg)) {
    endPegDiscs.push(startPegDiscs.pop())
    console.log('That move was successful!');
    printBoard();
  } else {
    console.log(boardState.illegalMove);
    console.log(`Board remains unchanged.`)
    printBoard();
  }
};