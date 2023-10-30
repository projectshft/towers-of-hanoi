var board = [
  [5, 4, 3, 2, 1],
  [],
  [],
];


var gameBoard = {
  board: [
    [5, 4, 3, 2, 1],
    [],
    [],
  ]
}

//the state of the board that is printed after each move
var printBoard = function() {
  board.map(function(disc) {
    var discAppearance = disc.join(" ");
    console.log("---" + discAppearance);
})};


//checks to see if either peg 2 or 3 has all 5 discs on it
var checkWinner = function() {
  if (board[1].length === 5 || board[2].length === 5) {
    console.log('Congrats, you win! Play again?');
    board = [
      [5, 4, 3, 2, 1],
      [],
      [],
    ];
    printBoard();
  }
};

var lastDiscOnPeg = function(peg) {
  return board[peg].at(-1);
};

// checks to ensure there are valid moves
var checkMove = function(currentPeg, targetPeg) {
  var currentPegIndex = currentPeg - 1; //index on the current peg
  var targetPegIndex = targetPeg - 1; //index on the target peg
  

  var discMove = function(startPeg, endPeg) {
    board[targetPegIndex].push(currentPegValue);
    board[currentPegIndex].pop();
  }

  if (typeof(currentPeg) !== 'number' || typeof(targetPeg) !== 'number') {
    console.log('Please enter a number between 1 and 3. Board is still:');
    return printBoard();
  } if (!(currentPeg > 0) || !(targetPeg > 0)) {
    console.log('Please enter a number between 1 and 3. Board is still:');
    return printBoard();
  } if (currentPeg > 3 || targetPeg > 3) {
    console.log('Please enter a number between 1 and 3. Board is still:');
    return printBoard();
  } if (board[currentPegIndex].length === 0) {
    console.log('That peg is empty! Please pick a peg with a disc on it. Board is still:');
    return printBoard();
  } if (currentPegIndex === targetPegIndex) {
    console.log('You must move the disc to a different peg. Board is still:');
    return printBoard();
  } 
    // this is the value of the disc at the end of the current peg
  var currentPegValue = lastDiscOnPeg(currentPegIndex);
    
    // this is the value of the disc at the end of the target peg
  var targetPegValue = lastDiscOnPeg(targetPegIndex);
  
  if (currentPegValue > targetPegValue) {
    console.log('You must move a smaller disc onto a larger disc. Board is still:')
    return printBoard();
  } else {
    discMove(currentPeg, targetPeg);
    console.log('The move was successful, board is now:');
    return printBoard();
  };
};

//function that makes valid moves
var moveDisc = function(pegFrom, pegTo) {
  checkMove(pegFrom, pegTo)
  checkWinner();
}