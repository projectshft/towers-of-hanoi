const TowersOfHanoi = (pegs = 3, discs = 3) => {
  let board,
  moves,
  discTotal;

  //This will reset the board for new games and will also be used to create the initial board
  const resetBoard = (pegs, discs) => {
    let numDiscs = discs;
    
    board = new Array(pegs).fill([]);
    moves = 0;
    discTotal = 0;

    //arranges the discs on the first peg and keeps track of the total sum of the discs for checking the winner
    while(numDiscs != 0) {
      board[0] = board[0].concat(numDiscs);
      discTotal += numDiscs;
      numDiscs--;
    }

    //need to create new instances of arrays so they aren't referencing eachother
    board.forEach((peg, index) => {
      if (index !== 0) {
        board[index] = [];
      }
    })
  }

  const printBoard = () => {

    //maps through the board and creates a new string based on the length of the board
    const boardState = board.map(peg => `--- ${peg.join(' ')} \n`).join('')

    console.log(boardState);
  }

  //attempts to move a disc from one peg to another
  const moveDisc = (start, end) => {
    const source = start - 1,
    target = end - 1;

    if (board[target] && board[end]) {
      board[target].push(board[source].pop());
    } 
    else {
      console.log('Please select a proper move')
    }
    
    printBoard();
  }

  //initializes the first board state when a new instance of TowersOfHanoi is created
  resetBoard(pegs, discs);

  
  return {
    printBoard : printBoard,
    moveDisc : moveDisc,
    discTotal : discTotal,
    moves : moves
  }

}

let newGame = TowersOfHanoi();
