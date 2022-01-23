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


