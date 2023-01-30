// This program utilizes the module design for the game logic,
// which incorporates the returned object in towersOfHanoi() to
// maintain the state of the board. Notice also that there are
// no 'for' or 'while' loops being used to iterate through arrays.

var towersOfHanoi = function () {
  var board   = [[5, 4, 3, 2, 1], [], []];
  var numDiscs = 5;
  var startingBoard = function () {
    board.map(function (pegs) {
    return console.log(`--- ${pegs.join(' ')}`);
  })};
// Please note: showLastDisc() does not get used when playing the game.
// It was added and used as a tool to test what the last
// elements in the peg arrays were when testing the moveDisc() function.
// Figured I would leave it to highlight my thought process!
  var showLastDisc = function(pegA, pegB) {
    var peg1 = pegA - 1;
    var peg2 = pegB - 1;
    var peg1LastElement = board[peg1].length - 1;
    var peg2LastElement = board[peg2].length - 1;
    console.log (board[peg1][peg1LastElement]);
    console.log (board[peg2][peg2LastElement]);
  }

  var moveDisc = function (pegA, pegB) {
    var peg1 = pegA - 1;
    var peg2 = pegB - 1;
    var peg1LastElement = board[peg1].length - 1;
    var peg2LastElement = board[peg2].length - 1;
    
    if (board[peg1][peg1LastElement] > board[peg2][peg2LastElement]) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still: ');
      startingBoard();
    } else {
    board[peg2].push(board[peg1].pop());
    console.log('That move was successful, board is now: ');
    startingBoard();
    checkWinner();
    }
  }
  //checkWinner needs to check 1. if starting peg (board[0]) is an empty array/undefined, then
  // 2. if 1 is true, check if the Array.length() of the 2nd or 3rd pegs is equal to the number of discs in the game, defined by numDiscs  
  var checkWinner = function() {
    if (board[0] === undefined || board[0].length == 0 ) {
      if (numDiscs === board[1].length || numDiscs === board[2].length) {
        alert('Congratulations, you beat Towers of Hanoi!!! Click \'OK\' to play again!');
        resetBoard();
      }
    } 
  };
  
  var resetBoard = function() {
    board = [[5, 4, 3, 2, 1], [], []];
    console.log('Play again below!');
    startingBoard();
  }

  return {
    startingBoard: startingBoard,
    moveDisc: moveDisc,
    showLastDisc: showLastDisc,
    checkWinner: checkWinner,
    resetBoard: resetBoard
  }
};

var game = towersOfHanoi();

game.startingBoard();

var winningScenario = function () {
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,3);
game.moveDisc(2,1);
game.moveDisc(1,2);
game.moveDisc(3,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(2,1);
game.moveDisc(3,1);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(2,3);
game.moveDisc(2,1);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
};
// winningScenario();