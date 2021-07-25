var board = 
[
  ['5','4','3','2','1'],
  [],
  []
];

var winningPeg = ['5','4','3','2','1'];

var printBoard = function(board) {
  var boardAsStringArray = board.map(peg => {
    return '--- ' + peg.join(' ');
  });
  
  var boardAsString = boardAsStringArray.reduce(function(boardString, item) {
    return boardString + item + '\n';
  },'')

  console.log(boardAsString);
};

var moveDisc = function(pegFrom, pegTo) {
  var startPeg = pegFrom - 1;
  var endPeg = pegTo - 1;

  if (board[startPeg].length === 0) {
    console.log('The start peg does not have any discs to move, board is still:');
  } else if (board[startPeg][board[startPeg].length - 1] > board[endPeg][board[endPeg].length - 1]) {
    console.log('You cannot move a larger disc on top of a smaller one, board is still:');
  } else {
    board[endPeg].push(board[startPeg].pop());
    console.log('That move was successful, board is now:');
  }
  
  printBoard(board);
  checkWinner();
};

var checkWinner = function() {
  if (JSON.stringify(board[1]) === JSON.stringify(winningPeg) || JSON.stringify(board[2]) === JSON.stringify(winningPeg)) {
    console.log('Congrats! The game is over and you have won!');
    board = 
    [
      ['5','4','3','2','1'],
      [],
      []
    ]
  }
};

console.log('Welcome to Towers of Hanoi! The starting board is:')
printBoard(board);