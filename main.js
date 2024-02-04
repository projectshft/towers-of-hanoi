
// var pegs = 3;
// var discs = 5;

const board = [];

function startGame(board) {
this.board = [
  [5, 4, 3, 2, 1],
  [],
  []
  ];
console.log(' ');
console.log('TOWERS OF HANOI');
console.log(' ');
console.log('--- ' + this.board[0].join(' '));
console.log('--- ');
console.log('--- ');
console.log(' ');
};




function moveDisc(a, b) { 
  a -= 1;
  b -= 1;
  
  var isLegal = checkLegal(a, b); //should return boolean
  if (isLegal === false) { 
      console.log('You cannot move a larger disc on top of a smaller one, board is still:');
      printBoard(this.board);
  } else {
      console.log('That move was successful, board is now:');
      makeMove(a, b);
      printBoard(this.board);
      var isWinner = checkWinner(this.board);
      if (isWinner === true) {
        console.log('WINNER!!!');
        console.log(' ');
        startGame();
      };
  };
return;
};




function checkLegal(from, to) {
  
  if (typeof this.board[from][0] !== 'number') return false;
  if (typeof this.board[to][0] !== 'number') return true;
  
  let fromLength = this.board[from].length;
  let toLength = this.board[to].length;
  
  if (this.board[from][fromLength - 1] < this.board[to][toLength - 1]) return true
  else return false;

};




function makeMove(before, after) {


  let remove = this.board[before].pop();
  this.board[after].push(remove);
  return;
};




function printBoard (matrix) {

  matrix.map((peg) => {
    
    let displayPeg = '--- ' + peg.join(' ');
    console.log(displayPeg);
  
  });
  console.log(' ');
};




function checkWinner(current) {
  let targetSum = 15;
  let length = current.length;
  for (let i = 1; i < length; i++) {
    let total = current[i].reduce((acc, x) => acc + x, 0);
    if (total === targetSum) return true;
  };
  return false;
  
  };


 
  


startGame();


