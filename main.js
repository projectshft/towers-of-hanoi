// TOWERS OF HANOI
// Stripped down to basic function declarations (still using some aray helper methods) to startGame (with flexible, inputted numberOfDics), renderBoard, establish the winningSum, and allow player to moveDisc. Maintains the current state of the board via 2D array and current pegOfOrigin, destinationPeg, and unusedPeg. 

// REMOVED legalMoves
// REMOVED isPegEmpty and topDiscOfPeg, which feed into legalMoves
// REMOVED: checkWinner, endGame, and restartGame
// ALL are necessary for a fully operational game and will be reconceptualized and completed later

// CURRENTLY DOES NOT *formally* prevent illegal moves and notify the player, although the program initiates errors, breaks, and won't proceed if the player tries to moveDisc with an illegal move.

// DOES NOT check for winner and yield a winning message with numberOfMoves, and then resetGame. As long as they play by the rules, a player could theoretically play one game for ~585 billion years... and beyond.  

//********************************************

// create a variable for depicting the bottom portion of the board
const PEG_BASE = "--- "; 

// create empty board array to be populated with 3 peg arrays and the startingNumberOfDiscs. 
var board = []; 

// create a function to initialize board and establish beginning values.
function startGame(startingNumberOfDiscs) { //flexible number of discs, hard-coded for three pegs

  // three peg variables are comparable to what's inside the board/stateOfTheBoard 
  var firstPeg = [];
  var secondPeg = [];
  var thirdPeg = [];

  // populate the firstPeg array with the starting number of discs; all on firstPeg for starting position at beginning of the game
  for (let i = startingNumberOfDiscs; i > 0; i--){ 
    firstPeg.push(i);
  };

  // populate the board with three pegs in starting position (hard-coded)
  board.push(firstPeg, secondPeg, thirdPeg);
  
  // establish the winningTotal value to be checked by checkWinner function, as yet unwritten, which will also utilize reduce
  var winningTotalSum = firstPeg.reduce(function(discAccumulator, startingValue) {
  return discAccumulator + startingValue; //startingValue = 0, so is it necessary here???
      }, 0);
  
  // *initial* graphical depiction to console of the board: 3 pegs, all discs on first peg, in starting position. 
  // this could be removed and renderBoard invoked, but this design allows an introductory "first move" prompt to be consoled, distinct from the "next move" that will prompt the player throughout the rest of the game.
  board.forEach(function (currentInstanceOfPegArray) {
    console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
    });

  // request first move from player  
  console.log("First move, please.");
}

// a function to graphically render the board in the console (use map???
//pegToCheckForWinner us taken as parameter for later, as yet unimplemented design
function renderBoard(updatedBoard, pegToCheckForWinner){ //use map?
  updatedBoard.forEach(function (currentInstanceOfPegArray) {
    console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
    });
  // if !endOfGame, request next move from player
  console.log("Next move, please.");
}

// a function to move disc
function moveDisc(selectedDisc, destinationPeg){ 
    
  // create variable for arrayOfpegOfOrigin
  // arrayOfPegOfOrigin's value is inherent in selected disc value (there is only ever one disc/number on the entire board, regardless of which peg it's on)
  var arrayOfPegOfOrigin = board.find(function(onePeg) {
    return ((onePeg[onePeg.length - 1]) === selectedDisc);
  });
 
  // create variable for the number of the peg of origin
  var numberOfPegOfOrigin = (board.indexOf(arrayOfPegOfOrigin) + 1); //add one to value because peg numbers start at one, not zero
 
  // create variable array of peg numbers to be used to find the number of the unused peg
  var possiblePegs = [1, 2, 3];
 
  // create variable for numberofUnusedPeg and find value (potentially useful in later design) 
  var numberOfUnusedPeg = possiblePegs.find(function(pegNumberToLookFor) { 
    return ((pegNumberToLookFor != numberOfPegOfOrigin) && (pegNumberToLookFor != destinationPeg));
  }); 

  // pop disc from pegOfOrigin array and push it onto the destinationPeg
  board[destinationPeg - 1].push(arrayOfPegOfOrigin.pop());
   
  // call renderBoard to update graphical representation of board
  renderBoard(board, destinationPeg);
}
//______________________________________

// Executable
startGame(5);
// board will be rendered and prompt user for first move



   
