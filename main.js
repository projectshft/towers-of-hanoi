// A board representing 3 pegs and 3 discs on the first peg in ascending order
board = [
  ['3', '2', '1'],
  [],
  []
]

var moveDisc = function(x, y) {
  board[y].push(board[x][board[x].length -1]);
  board[x].splice(board[x].length -1)
  console.log(board)
}

moveDisc(0, 2);


//take board[x].length and move it to board[y].length
//
