/*
Towers of Hanoi is generally played with pegs and discs on one board. The digital manifestation of the board, pegs, and discs will be referred to as follows:

Board: A 2D array assigned to the variable 'board'.
Pegs: The nested arrays inside the board array.
Discs: The numbers inside the nested array. The larger the number, the bigger the disc.

The discs in towers of hanoi are started on Peg 1 with the discs layered from largest at the bottom to the top. The manifestation of that structure in this game is the largest number in the first index of the array on peg 1 (board[0]). Each number (disc) is stacked on top of (next Index) the previous number.

All functions to control the game are located in the object assigned as "controlBoard". 


This game is designed to be played in the console. Enjoy!
*/

let board = [
  [3, 2, 1],
  [],
  []
];

let controlBoard = {

  moveCount: 0,

  isValidPeg (moveType) { //helper function to help simplify moveDisc function
    return (moveType >= 0) && (moveType <= 2)
  },

  moveDisc(start, end) {

    if (!this.isValidPeg(start) || !this.isValidPeg(end)) {
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
    
    //If a move is valid and passes all constraints the act of moving the discs has 
    board[end].push(board[start][board[start].length - 1]);
    board[start].pop();
    
    this.moveCount = this.moveCount + 1
    console.log(`The move was successful. The board is now:`);
    this.printBoard();
    
    this.checkWinner();
  },

  printBoard() {
    
    return board.map((boards) => {
      let printedBoard = boards.join(' ')
      console.log(`--- ${printedBoard}`)
    })
    
    

  },

  checkWinner() {
    
    let boardCalc =  board.reduce((accumulator, boards) => {
      let id = board.indexOf(boards);
      let pegCalc = boards.reduce((accumulator, peg) => (accumulator += peg),0)

      accumulator[id] = pegCalc;

      return accumulator
    }, {});

    if (boardCalc['1'] === 6 || boardCalc['2'] === 6) {
      console.log(`WINNER! IT TOOK YOU ${this.moveCount} TO WIN COMPLETE THE GAME. THE GAME BOARD WILL NOW BE RESET`);
      return this.resetBoard()
    } else {
      return;
    }

  },

  resetBoard() {
    this.moveCount = 0
    return board = [[3,2,1],[],[]]
  }

}


//Tests are below:
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

// Interesting function I found
// function sum(obj) {
//   return Object.keys(obj).reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
// }
// let sample = { a: 1 , b: 2 , c:3 };

// console.log(`sum:${sum(sample)}`);

//this for in loop will print the board vertically; however, i'm not sure if this will print appropriately?
    // for (let i in board)
    //   {
    //     console.log(("peg") + i);
    //     for (var j in board[i])
    //       {
    //         console.log(" " + board[i][j])
    //       }
    //   }
    //   return;