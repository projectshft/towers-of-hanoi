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
  hasWinner: false
}


function moveDisc(disc, peg) {
  stateOfBoard.hasGameStarted = true;
  // locate peg in array (index of board)
  var destinationPeg = board[peg - 1]; 
  // identify the current disc on top of the peg
  var lastDiscOnDestinationPeg = destinationPeg[destinationPeg.length - 1]
  // check if disc is larger than the current disc at the top of the peg - if true, log error and show the board
  if (disc > lastDiscOnDestinationPeg) {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:\n" + showBoard());
  } else {
    var discMoved = false;
    board.forEach(peg => {
      var topDisc = peg[peg.length - 1];
      // if disc is not equal to top disc on peg return no value
      if (discMoved) {
        return;
      } else if (disc === topDisc) {
        // remove the topDisc and push it to the destinationPeg
        destinationPeg.push(peg.pop());
        // log that the move was successful and show the board
        console.log("That move was successful, board is now:\n" + showBoard());
        // toggle discMoved to true
        discMoved = true;
        return;
      } 
      });
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
    