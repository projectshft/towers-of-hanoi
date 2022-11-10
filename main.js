var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];

function addPeg(num) {
  if (!stateOfBoard.hasGameStarted) {
    if (num === 1) {
      // add peg (empty array) to the board array
      board.push([]);
      // log message and show board
      console.log("The peg was successfully added, the board is now:\n" + showBoard());
      return;
    } else {
      let i = 0;
      // if num > 1, add pegs until i is equal to num
      while (i < num) {
      board.push([]);
      i++;
      }
      // log message and show board
      console.log(num + " pegs were successfully added, the board is now:\n" + showBoard());
    }
  } else {
    // log message that pegs cannot be added because game has already started
    console.log("The game has already started, you cannot add any more pegs to the board.");
  }
  // add num to update numberOfPegs on stateOfBoard
  stateOfBoard.numberOfPegs += num;
}

function addDisc(num) {
  if (!stateOfBoard.hasGameStarted) {
    if (num === 1) {
      // add numbered disc to the front of the first peg
      board[0].unshift(board[0].length + 1);
      // log message and show board
      console.log("The disc was successfully added, the board is now:\n" + showBoard());
    } else {
      let i = 0;
      // if num > 1, add discs until i is equal to num
      while (i < num) {
        board[0].unshift(board[0].length + 1);
        i++;
      }
      // log message and show board
      console.log(num + " discs were successfully added, the board is now:\n" + showBoard());
    } 
  } else {
    // log message that pegs cannot be added because game has already started
    console.log("The game has already started, you cannot add any more discs to the board.");
  }
  // add num to update numberOfDiscs on stateOfBoard
  stateOfBoard.numberOfDiscs += num;
}

function stringBoard(board) {
  // map each row into a string and return an array containing each string
  return board.map(row => {
    return "--- " + row.join(' ');
  });
}

function showBoard() {
  // display stringBoard elements as one string with a line break to separate each row on the console
  return stringBoard(board).join("\n")
}

var stateOfBoard = {
  numberOfPegs: 3,
  numberOfDiscs: 5,
  hasGameStarted: false,
  hasWinner: false,
  successfulMove: false
}

function moveDisc(origin, destination) {
  // !!!!! created this successfulMove property for testing - not sure if I need this
  stateOfBoard.successfulMove = false;
  // if origin or destination does not exist on the board, log message and showBoard
  if ((origin > board.length || destination > board.length) || (origin <= 0 || destination <= 0)) {
    console.log("You can only move discs to/from pegs that exist on the board.  Please try again.  The board is still:\n" + showBoard());
    return; 
  }
  // if origin or destination is not a number, log message and showBoard
  if (typeof(origin) !== 'number' || typeof(destination) !== 'number') {
    console.log(typeof(origin));
    console.log('Pegs can only be identified by their numeral value - please resubmit your request')
    return;
  }

  var originPeg = board[origin - 1];
  var destinationPeg = board[destination - 1];
  // identify last disc on originPeg
  var originPegDisc = originPeg[originPeg.length - 1];
  // identify last disc on the destinationPeg
  var destinationPegDisc = destinationPeg[destinationPeg.length - 1]; 
  // if originPeg is empty, log message and showBoard
  if (originPeg.length === 0) {
    console.log("There are no discs on this peg.  Please try again.\n" + showBoard());
  // otherwise, if originPegDisc is larger that destinationPegDisc, log message and showBoard
  } else if (originPegDisc > destinationPegDisc) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still:\n" + showBoard());
  } else {
    destinationPeg.push(originPeg.pop());
    // log that the move was successful and show the board
    console.log("That move was successful, board is now:\n" + showBoard());
    stateOfBoard.successfulMove = true;
    stateOfBoard.hasGameStarted = true;
  }
    
  checkWinner();

  if (stateOfBoard.hasWinner) {
    // if stateOfBoard.hasWinner = true, log victory message and reset board and stateOfBoard values to starting values
    console.log("Victory! Congratulations, the board has now reset.")
    resetBoard();
  }
}

function resetBoard() {
  board = [
    [5, 4, 3, 2, 1],
    [],
    []
  ];
  stateOfBoard.numberOfPegs = 3;
  stateOfBoard.numberOfDiscs = 5;
  stateOfBoard.hasGameStarted = false;
  stateOfBoard.hasWinner = false;
}

function checkWinner() {
   // check board to see if a complete array of discs is on a peg that is not board[0]
  board.forEach((peg, index) => {
    // edge case to eliminate checking board[0]
   if (index === 0) return;
    // if the length of the peg is equal to number of discs in the game, toggle value of .hasWinner to true
    if (peg.length === stateOfBoard.numberOfDiscs) {
      stateOfBoard.hasWinner = true;
    } 
  });
}

