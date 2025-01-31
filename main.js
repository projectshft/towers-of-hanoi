var board = 
    [[5, 4, 3 , 2, 1],
    [],
    []];

console.log('Welcome to the Towers of Hanoi!');
console.log('Move disks by calling the following function in the console with integers 1-3: moveDisk(fromPeg, toPeg)');
console.log('When you have moved all the disks to a new peg... You win!');

var printBoard = function() {
  var curBoard = board.map( function(peg) {
    if (peg.length === 0){
      return '--- ';
    }  
    else {
      return '--- ' + peg.join(' ');
    }
  });
  
  curBoard.forEach( function(peg) {
    console.log(peg);
  });

  return '';
};

var checkWinner = function() {
  if (board[1].join() == [5, 4, 3, 2, 1].join()
     || board[2].join() == [5, 4, 3, 2, 1].join()) {
    console.log('You\'re a winner!! Congratulations on solving the game.');
    board =
      [[5, 4, 3, 2, 1],
      [],
      []];
    console.log('Your board has been reset, it is now:');
    printBoard();
  }
  return '';
};

var moveDisc = function(sourcePeg, targetPeg) {
  var originPeg = board[sourcePeg-1];
  var moveToPeg = board[targetPeg-1];


  if (moveToPeg.length === 0  || moveToPeg[moveToPeg.length-1] > originPeg[originPeg.length-1]) {
    moveToPeg.push(originPeg.pop());
    console.log('That move was successful, board is now:');
    printBoard();
  }
  else {
    console.log('This is an invalid move, board is now:');
    printBoard();
  }

  checkWinner();
  return '';
};



