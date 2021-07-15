var board = [["5", "4", "3", "2", "1"],
[],
[]]
var moveDisc = function (start, end) {
  board[end-1].push(board[start-1][board[start-1].length-1]);
  board[start-1][board[start-1].pop()];
  console.log(board); 
}