//create a global variable for depicting the bottom portion of the board
//doesn't have to be global; move to renderBoard ???
const PEG_BASE = "--- "; 

function startGame(startingNumberOfDiscs) { //Flexible number of discs, hard-coded for three pegs; add peg parameter later to make dynamic
  let board = []; // variable for "flexible" board (flexible number of discs to play with)

  //Hardcoding 3 pegs; Create a function for populating the board with given number of pegs -- using a loop, likely a forEach -- to allow dynamic number of pegs
  //These three peg variables are comparable to what's inside the board/stateOfTheBoard 
  let firstPeg = [];
  let secondPeg = [];
  let thirdPeg = [];

  //populate the firstPeg array with the starting number of discs; all on firstPeg for starting position at beginning of the game
  for (let i = startingNumberOfDiscs; i > 0; i--){         
      firstPeg.push(i);
    };

  //populate the board with three pegs in starting position (hard-coded)
  board.push(firstPeg, secondPeg, thirdPeg);

  //graphical depiction to console of the board: 3 pegs, all discs on first peg, in starting position
  //REPETITIVE FUNCTION, THIS SHOULD JUST CALL renderBoard 
  // MAKE CHANGE after renderBoard is written properly (currently two versions)
  //renderBoard(board);
  board.forEach(function (currentInstanceOfPegArray) {
      console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
    });
    // console.log("To play this game, please enter moveDisc(disc, destinationPeg), where disc is the number of disc you want to move, and destinationPeg is the peg to which you wish to move it.";
    console.log("First move, please."); //create variable for message string that updates to "new move" or 


    // //create an object for the state of the board; (review inheritence, prototypes, this)
    // // key: value pairs are a way to keep track of which peg discs are on; perhaps cleaner than keeping track of which peg discs are on as array ???
    // //IS THIS NECESSARY FOR THIS DESIGN? 
    // let stateOfTheBoard = { 
    //   peg1: board[0], // or pegOfOrigin, destinationPeg, unusedPeg???
    //   peg2: board[1], 
    //   peg3: board[2]
    //   // include also in the object key:value pairs for numberOfMovesMade (a number) and gameStatus (a boolean, "gameOver")

    //   //finalNumberOfMoves: function(numberofMovesMade) {
    //   //   console.log("You won in " + numberOfMovesMade)
    //   // }
    // };
  
  //return board; // is a return necessary here? return to stateOfTheBoardObject?
}


function renderBoard(updatedBoard){ //use map
  updatedBoard.forEach(function (currentInstanceOfPegArray) {
    console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
  });
  console.log("Next move, please.");
}


function moveDisc(selectedDisc, destinationPeg){  
  // check if move is legal
  //invoke legalMove (to return boolean)
  // if (!legalMove) {
  //   console.log("That's not a legal move. Try again.");
  //   //break?
  // }
 

  //create variable for pegOfOrigin
  // pegOfOrigin's value is inherent in selected disc value (there is only ever one disc/number on the entire board, regardless of which peg it's on)
  var pegOfOrigin = 0;
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[i].length; j++){
      if (board[i][j] === selectedDisc) {
        pegOfOrigin = i++;
      };
    };
  };

  //update state of the board 
  //pop disc from pegOfOrigin and push onto destinationPeg; 
  //MAP // or map in renderBoard function
   
  renderBoard(board);
}

//return moveDisc function so it's "publicly" available to the player;
//moveDisc should be the only function available to the player. 
//could offer "quit" "reset" "goBack" moves to the player for added dynamism


//______________________________________________________________________________


startGame(5);





















 
