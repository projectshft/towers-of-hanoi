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

    //Welcome the user to a new game and print out the board
    console.log('Welcome to the Towers of Hanoi game, please select a move with newGame.moveDisc(starting peg, ending peg)');
    printBoard();
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

    if (!board[target] || !board[source]) {
      console.log('Please select a proper move')
      return printBoard();
    }

    if (board[source].length === 0) {
      console.log('Please choose a peg that has discs')
      return printBoard();
    }

    if(board[source] === board[target]) {
      console.log('Please choose a different starting and ending peg')
      return printBoard();
    }
    
  }

  //function that returns an array of the indeces that are available for a move
  const checkMove = (peg) => {
    let moveArray = [];

    board.forEach((p, index) => {
      if(peg[peg.length - 1] < p[p.length - 1]  || p.length === 0) {
        moveArray = [...moveArray, index];
      }
    })
    return moveArray
  }

  //initializes the first board state when a new instance of TowersOfHanoi is created
  resetBoard(pegs, discs);

  
  return {
    printBoard : printBoard,
    moveDisc : moveDisc,
    discTotal : discTotal,
    checkMove : checkMove,
  }

}

let newGame = TowersOfHanoi();
