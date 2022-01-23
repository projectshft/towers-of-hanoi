var board = [
  ['5', '4', '3', '2', '1'],
  [],
  []
];

var rowIndicator = '-';


var printBoard = function (boardArray) {
  var rowsAsStrings = boardArray.map(function (row) {
    return row.join(' ');
  });
  
  var fullString = rowsAsStrings.reduce(function (acc, element) {
    acc += `${rowIndicator * 3} ${element}\n`;
    return acc;
  }, '');

  console.log(fullString);
};