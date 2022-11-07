var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];

function addPeg() {
  // if game has not started
  if (!stateOfBoard.hasGameStarted) {
    // add new peg (array) to board
    board.push([]);
    // add 1 to stateOfBoard.numberOfPegs
    stateOfBoard.numberOfPegs += 1;
    console.log("The peg was successfully added, the board is now:\n" + showBoard());
  } else {
    console.log("The game has already started, you cannot add any more pegs to the board.");
  }
}

function addDisc() {
  // if game has not started
  if (!stateOfBoard.hasGameStarted) {
    // add numbered disc to the front of the first peg
    board[0].unshift(board[0].length + 1);
    // update stateOfBoard.numberOfDiscs by 1
    stateOfBoard.numberOfDiscs += 1;
    console.log("The disc was successfully added, the board is now:\n" + showBoard());
  } else {
    console.log("The game has already started, you cannot add any more discs to the board.");
  }
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
  // toggle hasGameStarted to true
  stateOfBoard.hasGameStarted = true;
  // locate peg in array (index of board)
  var destinationPeg = board[peg - 1]; 
  // identify the current disc on top of the peg
  var lastDiscOnDestinationPeg = destinationPeg[destinationPeg.length - 1]
  // check if disc is larger than the current disc at the top of the peg - if true, log error and show the board
  if (disc > lastDiscOnDestinationPeg) {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:\n" + showBoard());
  } else {
    for (var i = 0; i < board.length; i++) {
      var currentPeg = board[i];
      var topDisc = currentPeg[currentPeg.length - 1];
      // if disc is not equal to top disc on peg return no value
      if (disc !== topDisc) {
        return;
      } else {
        // remove the topDisc and push it to the destinationPeg
        destinationPeg.push(currentPeg.pop());
        // log that the move was successful and show the board
        console.log("That move was successful, board is now:\n" + showBoard());
        return;
      } 
      };
    }

    checkWinner();

    if (stateOfBoard.hasWinner) {
      // if stateOfBoard.hasWinner = true, log victory message and reset board and stateOfBoard values to starting values
      console.log("Victory! Congratulations, the board has now reset.")
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
    