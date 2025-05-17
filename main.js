var towersOfHanoi = {
  board: [
    [5, 4, 3, 2, 1],
    [],
    []
  ],
  showBoard() {
    this.board.map((x) => console.log(`--- ${x.join(" ")}`));
  },
  moveDisc(from, to) {
    var fromPeg = this.board[from - 1];
    var toPeg = this.board[to - 1];
    
    if (toPeg.length == 0) {
      toPeg.push(fromPeg.pop());
      console.log('That move was successful, board is now:');
    } else if (fromPeg[fromPeg.length - 1] < toPeg[toPeg.length - 1]) {
      toPeg.push(fromPeg.pop());
      console.log('That move was successful, board is now:');
    } else {moveconsole.log("Invalid move! Can't place a larger disk on top of a smaller disc.")};
    
    this.board.map((x) => console.log(`--- ${x.join(" ")}`));
    if (to !== 1) {
      towersOfHanoi.checkWinner(toPeg);
    };
  },
  checkWinner(peg) {
    const winner = '5 4 3 2 1';
    
    if (peg.join(" ") === winner) {
      console.log('You won! Play again below.');
      this.board = [
        [5, 4, 3, 2, 1],
        [],
        []
      ];
      towersOfHanoi.showBoard(this.board);
    };
  }
};

towersOfHanoi.showBoard();
var moveDisc = towersOfHanoi.moveDisc.bind(towersOfHanoi);

// var board = towersOfHanoi.board;

// var showBoard = function (boardArray) {
//   boardArray.map((x) => console.log(`--- ${x.join(" ")}`))
// };

// var moveDisc = function (from, to) {
//   var fromPeg = board[from - 1];
//   var toPeg = board[to - 1];
  
//   if (toPeg.length == 0) {
//     toPeg.push(fromPeg.pop());
//     console.log('That move was successful, board is now:');
//   } else if (fromPeg[fromPeg.length - 1] < toPeg[toPeg.length - 1]) {
//     toPeg.push(fromPeg.pop());
//     console.log('That move was successful, board is now:');
//   } else {moveconsole.log("Invalid move! Can't place a larger disk on top of a smaller disc.")}
  
//   board.map((x) => console.log(`--- ${x.join(" ")}`));
//   if (to !== 1) {
//     checkWinner(toPeg);
//   }
// };

// var checkWinner = function (peg) {
//   const winner = '5 4 3 2 1';
  
//   if (peg.join(" ") === winner) {
//     console.log('You won! Play again below.');
//     board = [
//     [5, 4, 3, 2, 1],
//     [],
//     []
//   ];
//     showBoard(board);
//   }
// };

// showBoard(board);