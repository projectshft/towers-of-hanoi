//create a global variable for depicting the bottom portion of the board
//doesn't have to be global; move to renderBoard ???

//Creat a Game "module"

var Game = function() { 
const PEG_BASE = "--- "; 
var board = []; // variable for "flexible" board (flexible number of discs to play with)
var stateOfTheBoard = {};
var moveCounter = 0;
  //Create a function to initialize board and establish beginning values.
  function startGame(startingNumberOfDiscs) { //Flexible number of discs, hard-coded for three pegs; add peg parame ter later to make dynamic
    // const PEG_BASE = "--- "; 
    // var board = []; // variable for "flexible" board (flexible number of discs to play with)
    // var stateOfTheBoard = {};
    // var moveCounter = 0;
    //Hardcoding 3 pegs; Create a function for populating the board with given number of pegs -- using a loop, likely a forEach -- to allow dynamic number of pegs
    //These three peg variables are comparable to what's inside the board/stateOfTheBoard 
    var firstPeg = [];
    var secondPeg = [];
    var thirdPeg = [];

    //populate the firstPeg array with the starting number of discs; all on firstPeg for starting position at beginning of the game
    for (let i = startingNumberOfDiscs; i > 0; i--){        
        firstPeg.push(i);
      };

    //populate the board with three pegs in starting position (hard-coded)
    board.push(firstPeg, secondPeg, thirdPeg);

    //establish the winningTotal value to be checked by checkWinner
    //var currentPegToSum = firstPeg; 
    var winningTotalSum = firstPeg.reduce(function(discAccumulator, startingValue) {
      console.log(discAccumulator);
      return accumulator + startingValue; //startingValue = 0, so is it necessary here???
    }, 0);
    //call this in checkWinner? 

    //graphical depiction to console of the board: 3 pegs, all discs on first peg, in starting position
    //REPETITIVE FUNCTION, THIS SHOULD JUST CALL renderBoard (I think). But this allows an introductory "first move" message to be delivered, distinct from the "next move" to be used through the rest of the game.
   
    //renderBoard(board);

    //Create a message variable that can be selected via moveCount (if moveCount === 0, console.log first message.) ???
   
    board.forEach(function (currentInstanceOfPegArray) {
        console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
      });

      // console.log("To play this game, please enter moveDisc(disc, destinationPeg), where disc is the number of disc you want to move, and destinationPeg is the peg to which you wish to move it.";
      console.log("First move, please."); //create variable for message string that updates to "new move" or 


      // //create an object for the state of the board; (review inheritence, prototypes, this)
      // // key: value pairs are a way to keep track of which peg discs are on; perhaps cleaner than keeping track of which peg discs are on as array ???
      // BUT IS THIS NECESSARY FOR THIS DESIGN? 
      stateOfTheBoard.peg1 = board[0]; // or pegOfOrigin, destinationPeg, unusedPeg???
      stateOfTheBoard.peg2 = board[1]; 
      stateOfTheBoard.peg3 = board[2];
      // stateOfTheBoard.winnngTotal = (sumDiscs(startingNumberOfDiscs); //(board[0].length));

      //console testing
      console.log(stateOfTheBoard);
      
      return board; // is a return necessary here? return to stateOfTheBoardObj?
      //return stateOfTheBoardObj // necessary? consider where to place, re: scope
  };
//placement of stateOfTheBoard object?
//include also in the object key:value pairs for numberOfMovesMade (a number) and gameStatus (a boolean, "gameOver")
    //finalNumberOfMoves: function(numberofMovesMade) {
    //   console.log("You won in " + numberOfMovesMade.toString)
    // }
    // };
// let stateOfTheBoard = {    
// };
// peg1: board[0], // or pegOfOrigin, destinationPeg, unusedPeg???
// peg2: board[1], 
// peg3: board[2]

// console.log(stateOfTheBoard);

  var renderBoard = function(updatedBoard, pegToCheckForWinner){ //use map?
    updatedBoard.forEach(function (currentInstanceOfPegArray) {
      console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
    });
    moveCounter++; // need to fix this // moveCount function or inside stateOfBoard object
    if (checkWinner(pegToCheckForWinner)) {
      console.log("You win!")
      //console.log("You won in " + moveCounter + " moves.") // moveCounter value to string ???
    }
    else console.log("Next move, please.");
  };

// a function that, given a certain peg, determines which other pegs the top disc from that peg can be moved to.
//filter OUT the pegs that are NOT available; filter should create subset of avaialable pegs.
//In order to complete this function, you MUST use a filter function at least once.
  
function legalMove(discToBeMoved) { //return boolean
  var legalMovesArr = []; //push legal moves here

  //a function to find and return empty pegs;
  var emptyPegs = function() { //what parameter(s) to take here ??? 
    var arrayOfEmptyPegs = board.filter(function (potentiallyEmptyPeg) {
      return potentiallyEmptyPeg.length === 0; //need to reference index (indexOf()?)
    });
  };

  //return the topmost disc on a peg
  var topDisc = function () {
    board.forEach(function (instanceOfPegArray) {
      instanceOfPegArray.length !== 0;
       // last element in each peg array
    });
    return instanceOfPegArray[(instanceOfPegArray.length - 1)];
  };
}

//   //if (emptyPeg.length === 0)
//   //if (pegIsEmpty || topDisc > discToBeMoved) {
//     return true; 
//   }
//   //var legalMoves = board.filter(function (individualPegState) {
//   else return false;
// }

  // a function to moveDisc
  function moveDisc(selectedDisc, destinationPeg){  
    // check if move is legal
    //invoke legalMove (to return boolean)
    // if (!legalMove) {
    //   console.log("That's not a legal move. Try again.");
    //   //break?
    // }
  

    //create variable for pegOfOrigin
    // pegOfOrigin's value is inherent in selected disc value (there is only ever one disc/number on the entire board, regardless of which peg it's on)
    //use filter here; related to legalMove
    //var unusedPeg = 
    var pegOfOrigin = board.find(function(onePeg) { //assignment calls for filter???
      return onePeg[onePeg.length - 1] === selectedDisc;
      // if ((onePeg[onePeg.length - 1]) === selectedDisc){
      //   return true;
      // };
    });

    //Create a variable for the peg number (1, 2, or 3) of the origin peg
    // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    var numberOfPegOfOrigin = (board.indexOf(pegOfOrigin) + 1); //add one to value because peg numbers start at one, not zero
    
    // CONSOLE TESTING 
    console.log("pegOfOrigin[0]")
    console.log(pegOfOrigin[0]);

    console.log("numberOfPegOfOrigin");
    console.log(numberOfPegOfOrigin);

    //pop disc from pegOfOrigin array and push it onto the destinationPeg
    //use MAP here?
    board[destinationPeg - 1 ].push(pegOfOrigin.pop());
    
    console.log("board"); 
    console.log(board);
  
    //MAP // or map in renderBoard function

    // update of stateOfBoard, for moveDisc, to create board to be passed to renderBoard
    //Add moveCounter, isPegEmpty, legalMoves


    renderBoard(board, destinationPeg);
  };

  var checkWinner = function(board) { 
    //if // pegsToCheck ~= board
    // .reduce(function (potentialWinningPeg) {
      // reduce() on an empty array without an initial value is an error.
      var winningTotalSum = currentPegToSum.reduce(function(discAccumulator, startingValue) {
        console.log(discAccumulator);
        return accumulator + startingValue; //startingValue = 0, so is it necessary here???
      }, 0);
      // moveCounter here?

  };
  
//return moveDisc function so it's "publicly" available to the player;
//moveDisc should be the only function available to the player. 
// return {
//   moveDisc: moveDisc
// };
//could offer "quit" "reset" "goBack" moves to the player for added dynamism
//}

//______________________________________________________________________________


startGame(5);
