var board = [["5", "4", "3", "2", "1"],
[],
[]]
var moveDisc = function (start, end) {
  var startDisc = board[start-1][board[start-1].length-1];
  var endPosition = board[end-1][board[end-1].length-1];
  debugger
  if (endPosition > startDisc || board[end-1].length === 0) {
    board[end-1].push(startDisc);
    board[start-1][board[start-1].pop()];
    console.log('Successful move! Your board now looks like');
    console.log(board); 
  } else {
    console.log('Your move was not vaild, try a different move.');
    console.log(board);
  }
}