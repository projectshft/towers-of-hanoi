var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];

function addPeg() {
  board.push([]);
  currentBoard.numberOfPegs += 1;
}

function addDisc() {
  board[0].unshift(board[0].length + 1);
  currentBoard.numberOfDiscs += (1 * num);
}
// NEED TO FIGURE OUT HOW TO STOP addPeg AND addDisc FROM BEING CALLED ONCE THE moveDisc IS INVOKED


// we want to be able to print the board horizontally.  You MUST use a map function at least once to accomplish this part of the assignment.
function stringBoard(board) {
  return board.map(row => {
    return "--- " + row.join(' ');
  });
}

function showBoard() {
  return stringBoard(board).join("\n")
}


var currentBoard = {
  numberOfPegs: 3,
  numberOfDiscs: 5,
  hasWinner: false
}


function moveDisc(disc, peg) {
  // locate peg in array (index of board)
  var destinationPeg = board[peg - 1]; 
  // identify the current disc on top of the peg
  var lastDiscOnDestinationPeg = destinationPeg[destinationPeg.length - 1]
  // check if disc is larger than the current disc at the top of the peg - if true, log error
  if (disc > lastDiscOnDestinationPeg) {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:\n" + showBoard());
  } else {
  // find disc on board
  for (var i = 0; i < board.length; i++) {
    var currentPeg = board[i];
    var topDisc = currentPeg[currentPeg.length - 1];
    // if disc is not equal to top disc on peg
    if (disc === topDisc) {
      // remove disc/topDisc from current
      // push disc to destinationPeg
      destinationPeg.push(currentPeg.pop());
      console.log("That move was successful, board is now:\n" + showBoard());
      break;
    }
    }
  }
}




function checkWinner() {
//   // check board to see if [5, 4, 3, 2, 1] is on peg 2 or 3
  for (var i = 1; i < board.length; i++)
  var peg = board[i];
  if (peg.length === currentBoard.numberOfDiscs) {
    currentBoard.hasWinner = true;
    console.log("Victory!");
  } else {
    console.log("The game has not been won, keep trying!")
  }
}

