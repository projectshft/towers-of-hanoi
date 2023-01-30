var towersOfHanoi = function () {
  var board   = [[5, 4, 3, 2, 1], [], []];
  var checkBoard = [[5, 4, 3, 2, 1], [], []]
  var startingBoard = function () {
    board.map(function (pegs) {
    return console.log(`--- ${pegs.join(' ')}`);
  })};

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
    // showLastDisc(pegA, pegB);
    // checkWinner();
    }
  }
  
  var checkWinner = function() {
    console.log(board);
    console.log(checkBoard);
    // if (startingBoard() !== checkBoard) {
    // } else {
    //   return console.log('You Won!');
    // }
  };
  return {
    startingBoard: startingBoard,
    moveDisc: moveDisc,
    showLastDisc: showLastDisc,
    checkWinner: checkWinner
  }
};

var game = towersOfHanoi();
game.startingBoard();
game.moveDisc(1, 2);
game.moveDisc(1, 3);
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
console.log('Winning Board below: ');
game.startingBoard();



// game.checkWinner();



// game.moveDisc
// game.showLastDisc(1, 2);
// game.moveDisc(1, 2);
// game.checkWinner();
