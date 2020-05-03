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

const controlBoard = {

  moveCount: 0,

  messageBoard: {
    errorOne: `INVALID MOVE: Please enter a valid peg number (Between 0 and 2). The board is still:`,
    errorTwo: `INVALID MOVE: There are no more moves for that peg, please refer to board printout. The board is still:`,
    errorThree: `INVALID MOVE: You can not move a larger disc on top of a smaller disc. The board is still:`,
    validMove: `The move was successful. The board is now:`,
    winningMessage: `WINNER! IT TOOK YOU ${this.moveCount} MOVES TO COMPLETE THE GAME. THE GAME BOARD WILL NOW BE RESET FOR A NEW GAME.`
  },

  isValidPeg (moveType) { //helper function to help simplify moveDisc function
    return (moveType >= 0) && (moveType <= board.length - 1)
  },

  moveDisc(start, end) {

    if (!this.isValidPeg(start) || !this.isValidPeg(end)) {
      console.log(this.messageBoard.errorOne)//(`INVALID MOVE: Please enter a valid peg number (Between 0 and 2). The board is still:`);
      this.printBoard();
      return;
    }
  
    if(board[start].length === 0) {
      console.log(this.messageBoard.errorTwo)//(`INVALID MOVE: There are no more moves for that peg, please refer to board printout. The board is still:`);
      this.printBoard();
      return;
    }
    
    //consider moving the functions below to a helper function
    let startDisc = board[start][board[start].length - 1];
    let endDisc = board[end][board[end].length - 1] // try and use the .slice(-1)[0]
    
    if(startDisc > endDisc) {
      console.log(this.messageBoard.errorThree)//(`INVALID MOVE: You can not move a larger disc on top of a smaller disc. The board is still:`);
      this.printBoard();
      return;
    }
    
    //If a move is valid and passes all constraints the act of moving the discs has 
    board[end].push(board[start][board[start].length - 1]);
    board[start].pop();
    
    this.moveCount = this.moveCount + 1
    
    console.log(this.messageBoard.validMove)//(`The move was successful. The board is now:`);
    this.printBoard();
    this.checkWinner();
  },

  moveOptions(pegNumber) {
    let filter = board.filter((pegs) => {
      if ((pegs.slice(-1)[0]) > board[pegNumber].slice(-1)[0] || pegs.slice(-1)[0] === undefined) {
        console.log(`Peg: ${board.indexOf(pegs)} is an available move`);
        return;
      }
    });
  
    return filter
  },


  printBoard() {
    return board.map((boards) => {
      let printedBoard = boards.join(' ')
      console.log(`--- ${printedBoard}`)
    });
  },

  checkWinner() {
    
    let boardCalc =  board.reduce((accumulator, boards) => {
      let id = board.indexOf(boards);
      let pegCalc = boards.reduce((accumulator, peg) => (accumulator += peg),0)

      accumulator[id] = pegCalc;

      return accumulator
    }, {});

    if (boardCalc['1'] === 6 || boardCalc['2'] === 6) {
      console.log(this.messageBoard.winningMessage)//(`WINNER! IT TOOK YOU ${this.moveCount} MOVES TO COMPLETE THE GAME. THE GAME BOARD WILL NOW BE RESET FOR A NEW GAME.`);
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

console.log(controlBoard.moveOptions(0));
//console.log(controlBoard.messageBoard['errorOne']);

//Tests are below:
// console.log(board)
// controlBoard.moveDisc(-1, 1) // invalid move
// console.log(controlBoard.moveCount) // 0
// controlBoard.moveDisc('pizza', 1) // invalid move
// console.log(controlBoard.moveCount) // 0
// controlBoard.moveDisc(0,3) // invalid move
// console.log(controlBoard.moveCount) // 0
// controlBoard.moveDisc(0, 2) // valid move
// console.log(controlBoard.moveCount) // 1
// controlBoard.moveDisc(0, 1) // valid move
// console.log(controlBoard.moveCount) // 2
// controlBoard.moveDisc(2,1) // valid move
// console.log(controlBoard.moveCount) // 3
// controlBoard.moveDisc(0, 2) // valid move
// console.log(controlBoard.moveCount) // 4
// controlBoard.moveDisc(0,1) // invalid move
// console.log(controlBoard.moveCount) // 5
// controlBoard.moveDisc(1,0)
// controlBoard.moveDisc(1,2)
// controlBoard.moveDisc(0,2) // FINAL MOVE TO WIN GAME - OUTPUT SHOULD BE THE CHECKWINNER TRUE RESULT





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