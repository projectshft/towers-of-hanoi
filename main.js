/*
Towers of Hanoi is generally played with pegs and discs on one board. The digital manifestation of the board, pegs, and discs will be referred to as follows:

Board: A 2D array assigned to the variable 'board'.
Pegs: The nested arrays inside the board array.
Discs: The numbers inside the nested array. The larger the number, the bigger the disc.

The discs in towers of hanoi are started on Peg 1 with the discs layered from largest at the bottom to the top. The manifestation of that structure in this game is the largest number in the first index of the array on peg 1 (board[0]). Each number (disc) is stacked on top of (next Index) the previous number.

All functions to control the game are located in the object assigned as "controlBoard". 

This game is designed to be played in the console.
*/

let board = [
  [5, 4, 3, 2, 1],
  [],
  []
];

const controlBoard = {
  //move count initially set to zero; only increases after a successful move
  moveCount: 0,

  //object to hold most messages for readability
  messageBoard: {
    errorOne: `INVALID MOVE: Please enter a valid peg number (Between 1 and 3). The board is still:`,
    errorTwo: `INVALID MOVE: There are no more moves for that peg, please refer to board printout. The board is still:`,
    errorThree: `INVALID MOVE: You can not move a larger disc on top of a smaller disc. The board is still:`,
    validMove: `The move was successful. The board is now:`,
  },

  isValidPeg (moveValue) { 
    return (moveValue >= 1) && (moveValue <= board.length)
  },

  moveDisc(start, end) { //user selects 1-3. 
    //The code for referencing the arrays is adjusted accordingly with (-1) add to start and end
    //initial validation for correct inputs
    if (!this.isValidPeg(start) || !this.isValidPeg(end)) {
      console.log(this.messageBoard.errorOne)
      this.printBoard();
      return;
    }
  
    if(board[start - 1].length === 0) {
      console.log(this.messageBoard.errorTwo)
      this.printBoard();
      return;
    }
    
    //variables for moving the discs based on user input
    let startDisc = board[start - 1][board[start - 1].length - 1];
    let endDisc = board[end - 1][board[end - 1].length - 1]
    
    if(startDisc > endDisc) {
      console.log(this.messageBoard.errorThree)
      this.printBoard();
      return;
    }
    
    //moving the discs begins below (if constraints are passed above)
    board[end - 1].push(board[start -1][board[start - 1].length - 1]);
    board[start - 1].pop();
    
    this.moveCount = this.moveCount + 1
    
    //after successful move, board is printed and checked for a winning state
    console.log(this.messageBoard.validMove)
    this.printBoard();
    this.checkWinner();
  },

  moveOptions(pegNumber) {
     
    let newBoard = JSON.parse(JSON.stringify(board));
    
    newBoard.forEach((boards) => {
      boards.unshift(('Peg' + ' ' + newBoard.indexOf(boards)))
    });

    // console.log(newBoard);
    // console.log('break')
    // console.log(newBoard[0])
    // console.log(newBoard[1])
    // console.log(newBoard[2])

    let filter = newBoard.filter((pegs) => {  
      if ((pegs.slice(-1)[0]) > newBoard[pegNumber].slice(-1)[0] || pegs.slice(-1)[0] === typeof(string)) {
      console.log(pegs.slice(-1)[0])
        //console.log(`Peg: ${board.indexOf(pegs)} is an available move`);
       
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
    //reduce helper methods that transforms the board into objects.
    //object keys equal array indexes board and the values are the sum of the nested arrays
    let boardCalc =  board.reduce((accumulator, boards) => {
      let id = board.indexOf(boards);
      let pegCalc = boards.reduce((accumulator, peg) => (accumulator += peg),0)

      accumulator[id] = pegCalc;

      return accumulator
    }, {});

    //After the first successful move only the winning pegs (not the first one) can have all of the discs at one time. 
    //The sum of all of the discs equals a winning peg. 
    if (boardCalc['1'] === 15 || boardCalc['2'] === 15) {
      console.log(`WINNER! IT TOOK YOU ${this.moveCount} MOVES TO COMPLETE THE GAME. THE GAME BOARD WILL NOW BE RESET FOR A NEW GAME.`);
      return this.resetBoard()
    } else {
      return;
    }
  },

  resetBoard() {
    this.moveCount = 0
    board = [[5,4,3,2,1],[],[]]
    return this.printBoard();
  }
}

//console.log(board)
console.log(controlBoard.moveOptions(1))


//Tests are below:
// controlBoard.moveDisc(-1, 1) // invalid move
// controlBoard.moveDisc(1,3)
// controlBoard.moveDisc(3,2)
// controlBoard.moveDisc(1,3)
// controlBoard.moveDisc(3,2)




//saved just in case new filter function does not work

  // let filter = board.filter((pegs) => {  
  //   if ((pegs.slice(-1)[0]) > board[pegNumber].slice(-1)[0] || pegs.slice(-1)[0] === undefined) {
  //   console.log(`Peg: ${board.indexOf(pegs)} is an available move`);
  //     return true;
  //   }
  //  });
  
  // return filter