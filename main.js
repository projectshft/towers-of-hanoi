var board = [
  [5, 4, 3, 2, 1],
  [],
  []
];

var stateOfBoard = {
  numberOfPegs: 3,
  numberOfDiscs: 5,
  hasGameStarted: false,
  hasWinner: false,
  numberOfMoves: 0
}

var cannotAddItemsMessage = "The game has already started, you cannot add any more items to the board. The board is still:\n"
var discIsTooLargeMessage = "You cannot move a larger disc on top of a smaller one, board is still:\n";
var discMustMoveMessage = "In order to move a disc, it must actually move to a different peg.  Please try again.  The board is still:\n";
var discsAddedMessage = "The discs were successfully added, the board is now:\n";
var originPegIsEmptyMessage = "There are no discs on this peg. Please try again. The board is still:\n";
var oneDiscAddedMessage = "The disc was successfully added, the board is now:\n";
var onePegAddedMessage = "The peg was successfully added, the board is now:\n";
var pegDoesNotExistMessage = "You can only move discs to/from pegs that exist on the board.  Please try again.  The board is still:\n";
var pegIsNotANumberMessage = "Pegs can only be identified by their numeral value - please resubmit your request.  The board is still:\n";
var pegsAddedMessage = "The pegs were successfully added, the board is now:\n";
var successMessage = "That move was successful, board is now:\n";
var victoryMessage = "Victory!\n\nYou won that game in " + stateOfBoard.numberOfMoves + " moves.\n\nCan you do better?\n\nThe board has been reset for your next attempt:\n";

function addDisc(num) {
  if (!stateOfBoard.hasGameStarted) {
    if (num === 1) {
      // add numbered disc to the front of the first peg
      board[0].unshift(board[0].length + 1);
      showBoard(oneDiscAddedMessage);
    } else {
      let i = 0;
      // if num > 1, add discs until i is equal to num
      while (i < num) {
        board[0].unshift(board[0].length + 1);
        i++;
      }
      showBoard(discsAddedMessage);
    } 
  } else {
    showBoard(cannotAddItemsMessage);
  }
  // add num to update numberOfDiscs on stateOfBoard
  stateOfBoard.numberOfDiscs += num;
}

function addPeg(num) {
  if (!stateOfBoard.hasGameStarted) {
    if (num === 1) {
      // add peg (empty array) to the board array
      board.push([]);
      // log message and show board
      showBoard(onePegAddedMessage);
      return;
    } else {
      let i = 0;
      // if num > 1, add pegs until i is equal to num
      while (i < num) {
      board.push([]);
      i++;
      }
      // log message and show board
      showBoard(pegsAddedMessage);
    }
  } else {
    showBoard(cannotAddItemsMessage);
  }
  // add num to update numberOfPegs on stateOfBoard
  stateOfBoard.numberOfPegs += num;
}

function checkWinner() {
  // check board to see if a complete array of discs is on a peg that is not board[0]
 board.forEach((peg, index) => {
   // edge case to eliminate checking board[0]
  if (index === 0) return;
   // if the length of the peg is equal to number of discs in the game, toggle value of .hasWinner to true
  if (peg.length === stateOfBoard.numberOfDiscs) {
     stateOfBoard.hasWinner = true;
     resetBoard();
     showBoard(victoryMessage);
   } 
 });
}

function moveDisc(origin, destination) {
  if (origin === destination) {
    showBoard(discMustMoveMessage);
    return;
  }
  // if origin or destination does not exist on the board, log message and showBoard
  if ((origin > board.length || destination > board.length) || (origin <= 0 || destination <= 0)) {
    showBoard(pegDoesNotExistMessage);
    return; 
  }
  // if origin or destination is not a number, log message and showBoard
  if (typeof(origin) !== 'number' || typeof(destination) !== 'number') {
    showBoard(pegIsNotANumberMessage);
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
    showBoard(originPegIsEmptyMessage);
  } else if (originPegDisc > destinationPegDisc) {
      showBoard(discIsTooLargeMessage);
  } else {
    destinationPeg.push(originPeg.pop());
    showBoard(successMessage);
    stateOfBoard.hasGameStarted = true;
    stateOfBoard.numberOfMoves++;
  }    
  checkWinner();
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
function showBoard(message) {
  // display message with stringBoard elements as one string with a line break to separate each row on the console
  console.log(message + stringBoard(board).join("\n"));
}

function stringBoard(board) {
  // map each row into a string and return an array containing each string
  return board.map(row => {
    return "--- " + row.join(' ');
  });
}