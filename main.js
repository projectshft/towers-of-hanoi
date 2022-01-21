// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
[["5", "4", "3", "2", "1"],
[],
[]]


  
//Board setup 
const board = []
const row = 3
const col = 5
for(i = 0; i < row; i++) {
  board[i] = [];
  for(j = 0; j < col; j++) {
    board[i][j] = [null];
  }
};

//board pieces
const pieces = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1
}

//Board start setup
function start(idk) {
  board[0][0] = pieces.A;
  board[0][1] = pieces.B;
  board[0][2] = pieces.C;
  board[0][3] = pieces.D;
  board[0][4] = pieces.E;
}
start();
console.log(board)

//need to have a function that has (piece, position) that selects the piece and moves it to a new spot. 

function move(piece, position_x, position_y) {

  //Checks for a correct piece input
  var check = pieces.hasOwnProperty(piece)
  if(!check) {
    console.log('Not a valid game piece.');
  }

  
}
move('F', null, null);