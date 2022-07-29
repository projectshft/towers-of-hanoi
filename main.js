// an object the board for the game
var board = [[5, 4, 3, 2, 1], [], []];
var moves = 0;

// moves top disc to new destination
var moveDisc = function (source, destination) {
  
  // converts userInput to actual index num
  let trueSource = source - 1;
  let trueDestination = destination - 1;
  
// takes last element from source and pushes to destination
  let move = board[trueSource].pop();

  // prevents illegal moves
  if (move > board[trueDestination][0]){
    board[trueSource].push(move);
    return 'This move is illegal!';
  } 
  // executes and logs legal move
  else {
    board[trueDestination].push(move);
    moves++;
      console.log(`That move was successful. Moves: ${moves}. The board is now:`)
    printBoard();
      };
  if (checkWinner() === true){
    checkWinner();
  }
};

// creates visual representation of board
var printBoard = function () {
  let tohBoard = board.map(a => "--- " + a.join(" ")).join("\n"); 
  console.log(tohBoard);
}

// must check if all discs are on a new peg, declare a winner statement, and reset the board 
var checkWinner = function() {
  if (board[1].length === 5 || board[2].length === 5){
    console.log(`Congratulations! You have won in ${moves} moves.`);
    let moveReset = 0;
    moves = moveReset;
    console.log('Resetting board...');
    resetBoard();
  } 
};

// resets board to start position
var resetBoard = function() {
var newBoard = [[5, 4, 3, 2, 1], [], []];
board = newBoard;
return printBoard();
}
// html extension mdn document.getElementById, document.createElement, removal method

console.log(printBoard());
console.log(moveDisc(1, 3));
console.log(moveDisc(1, 2));
console.log(moveDisc(3, 2));
console.log(moveDisc(1, 3));
console.log(moveDisc(2, 1));
console.log(moveDisc(2, 3));
console.log(moveDisc(1, 3));
console.log(moveDisc(1, 2));
console.log(moveDisc(3, 2));
console.log(moveDisc(3, 1));
console.log(moveDisc(2, 1));
console.log(moveDisc(3, 2));
console.log(moveDisc(1, 3));
console.log(moveDisc(1, 2));
console.log(moveDisc(3, 2));
console.log(moveDisc(1, 3));
console.log(moveDisc(2, 1));
console.log(moveDisc(2, 3));
console.log(moveDisc(1, 2));
console.log(moveDisc(2, 3));
console.log(moveDisc(2, 1));
console.log(moveDisc(3, 2));
console.log(moveDisc(3, 1));
console.log(moveDisc(2, 1));
console.log(moveDisc(2, 3));
console.log(moveDisc(1, 3));
console.log(moveDisc(1, 2));
console.log(moveDisc(3, 1));
console.log(moveDisc(1, 2));
console.log(moveDisc(1, 3));
console.log(moveDisc(2, 1));
console.log(moveDisc(2, 3));
console.log(moveDisc(1, 3));