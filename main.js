const TowersOfHanoi = (pegs = 3, discs = 3) => {
  let board,
  moves;

  //This will reset the board for new games and will also be used to create the initial board
  const resetBoard = (pegs, discs) => {
    let numDiscs = discs;
    
    board = new Array(pegs).fill([]);
    moves = 0;

    //arranges the discs on the first peg
    while(numDiscs != 0) {
      board[0] = board[0].concat(numDiscs);
      numDiscs--;
    }
  }

  const printBoard = () => {

    //maps through the board and creates a new string based on the length of the board
    const boardState = board.map(peg => `--- ${peg.join(' ')} \n`).join('')

    console.log(boardState);
  }

  //initializes the first board state when a new instance of TowersOfHanoi is created
  resetBoard(pegs, discs);

  
  return {
    printBoard : printBoard
  }

}

let newGame = TowersOfHanoi();
