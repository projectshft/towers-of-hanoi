var board = [];

var initializeBoard = function () {
 board = [ ['5','4','3','2','1'], [], [] ];
 console.log('Game begin, board is:');
 printBoard();
}

var printBoard = function() {
 var pegDisplay =  board.map(function(peg) {
   return ('--- '+peg.join(' '));
  })
  console.log(pegDisplay[0]);
  console.log(pegDisplay[1]);
  console.log(pegDisplay[2]);
}

var moveDisc = function(fromPeg,toPeg) {
  if(board[fromPeg-1].length < 1) {
    console.log(`There are no discs on peg ${fromPeg}, board is still:`);
    printBoard();
  } else if
  (board[fromPeg-1][board[fromPeg-1].length-1] > board[toPeg-1][board[toPeg-1].length-1] ) {
    console.log('You cannot move a larger disc on top of a smaller one, board is still:');
    printBoard();
  } else {
    var liftedPeg = board[fromPeg-1].splice(board[fromPeg-1].length-1,1);
    board[toPeg-1].push(liftedPeg[0]);
    console.log('That move was successful, board is now:');
    printBoard();
    checkWinner();
  }
}

var checkWinner = function() {
  var winCondition = '54321';
  if (board[1].join('') === winCondition || board[2].join('') === winCondition) {
    console.log('Congratulations, you win!');
    console.log('Resetting...');
    initializeBoard();
  }
}

initializeBoard();

moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(3, 1);
moveDisc(2, 1);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(3, 2);
moveDisc(3, 1);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
//moveDisc(1, 3);

