var board = [
            ["1"],
            ["2"],
            ["5", "4", "3"]
            ];

var boardPrint = board.map(function(peg) {
  return peg.map(function(disc) {
    return disc;
  }).join(' ');
});
var display = boardPrint.join('\n');

var moveDisc = function (a, b) {

if (board[a-1][board[a-1].length-1] < board[b-1][board[b-1].length-1] || board[b-1][board[b-1].length-1] === undefined) {
  let removed = board[a-1].pop();
  board[b-1].push(removed);    

  var boardPrint = board.map(function(peg) {
    return peg.map(function(disc) {
      return disc;
    }).join(' ');
  });
  var updatedDisplay = boardPrint.join('\n');
  console.log("That move was successful, board is now: \n" + updatedDisplay);

    var declareWinner = function() {
      if (board[b-1].length === 5) {
      board = [["5", "4", "3", "2", "1"],
              [],
              []];
      var newPrint = board.map(function(peg) {
        return peg.map(function(disc) {
          return disc;
        }).join(' ')
      })
      var newPrint = newPrint.join('\n');
      console.log("You won the game, board is reset to: \n" + newPrint);
      };
    };

    declareWinner();
      return;

} if (board[a-1][board[a-1].length-1] > board[b-1][board[b-1].length-1]) {
  console.log("You cannot move a larger disc on top of a smaller one, board is still: \n" + display);

} if (board[a-1][board[a-1].length-1] === undefined) {
  console.log("There are no discs on the peg, board remains unchanged");
};
};

moveDisc(2, 3);
moveDisc(1, 3);
