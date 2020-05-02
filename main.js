
let board = [
  [],
  [3,2,1],
  []
];

let controlBoard = {

  moveCount: 0,

  isValidMoveType (moveType) { //helper function to help simplify moveDisc function
    return (moveType >= 0) && (moveType <= 2)
  },

  moveDisc(start, end) {

    if (!this.isValidMoveType(start) || !this.isValidMoveType(end)) {
      console.log(`INVALID MOVE: Please enter a valid peg number (Between 0 and 2). The board is still:`);
      console.log(board);
      return;
    }
  
    if(board[start].length === 0) {
      console.log(`INVALID MOVE: There are no more moves for that peg, please refer to board printout. The board is still:`);
      console.log(board);
      return;
    }
  
    let startDisc = board[start][board[start].length - 1];
    let endDisc = board[end][board[end].length - 1]
    
    if(startDisc > endDisc) {
      console.log(`INVALID MOVE: You can not move a larger disc on top of a smaller disc. The board is still:`);
      console.log(board);
      return;
    }
  
    board[end].push(board[start][board[start].length - 1]);
    board[start].pop();
    this.moveCount = this.moveCount + 1
    console.log(`The move was successful. The board is now:`);
    console.log(board);
  },

  checkWinner() {
    
    let boardCalc =  board.reduce((accumulator, boards) => {
      let id = board.indexOf(boards);
      let pegCalc = boards.reduce((accumulator, peg) => (accumulator += peg),0)

      accumulator[id] = pegCalc;

      return accumulator
    }, {});

    if (boardCalc['1'] === 6 || boardCalc['2'] === 6) {
      return console.log('winner')
    };

  },

  resetBoard() {
    this.moveCount = 0
    return board = [[3,2,1],[],[]]
  }



}

console.log(controlBoard.checkWinner())



// controlBoard.moveDisc(-1, 1)
// console.log(controlBoard.moveCount)
// controlBoard.moveDisc('pizza', 1)
// console.log(controlBoard.moveCount)
// controlBoard.moveDisc(0,3)
// console.log(controlBoard.moveCount)
// controlBoard.moveDisc(0, 2)
// console.log(controlBoard.moveCount)
// controlBoard.moveDisc(0, 1)
// console.log(controlBoard.moveCount)
// controlBoard.moveDisc(2,1)
// console.log(controlBoard.moveCount)
// controlBoard.moveDisc(0, 2)
// console.log(controlBoard.moveCount)
// controlBoard.moveDisc(0,1)
// console.log(controlBoard.moveCount)
// controlBoard.resetBoard();
// console.log(board);
// console.log(controlBoard.moveCount)

// function sum(obj) {
//   return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
// }
// let sample = { a: 1 , b: 2 , c:3 };

// console.log(`sum:${sum(sample)}`);