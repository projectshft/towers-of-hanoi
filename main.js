//TO-DO LIST

//Reconsider global variables ??? What needs to be "protected" or referenced/passed-by-reference ??? 

//Check variable names for flexBoard, board, and Board. 

//Check various variable names that refer to discs (userInpuNumberOfDiscs, etc.)

//Check various variable names that refer to pegs, pegArray, pegInstance, pegState, etc.

//??? What should be a straight-up function declaration, and what should be a variable assigned to a function ???

//Compare & consider merging board initialization and updateBoard (could initial starting position just be the first call to updateBoard?)

//Re-examine isPegEmpty, topDisc, legalMoves, and checkWinner. ??? Can these be condensed and/or more reliant on each other ???

//Clean-up gobblety-gook at the bottom; decide what to keep and what to cut: startGame, announceWinner, endGame/resetGame, etc.

//RUN MORE SPECIFIC TESTS

//Convert functions to arrow functions where possible and simpler

//Examine where to use 'this'

//Examine more closely where closure is taking place, and where it might yield errors; understand this better

//??? is bind, ball, or prototype necessary anywhere in this program ???

//Create classes and/or pseudo Modules; define methods within board/Board object. Also need one board object that meets assignment description/objections, but also maybe another that tracks ONLY the pegs and not the other, excess info (numberOfMoves, gameOver)

//OOP vs functional programming; re-evaluate design in this context

//HTML/CSS rendering; prompts for user input; linking between files; simple, straightforward presentation


//GLOBAL VARIABLES 

//Board pieces
//const NUMBER_OF_DISCS = 3;
var userInputedNumberOfDiscs; //= 3; // hardcoded for now; ask for user input to determine numberOfDiscs (part of Extension 2)
var sumOfAllDiscs = 
//const NUMBER_OF_PEGS = 3; 
//var userInputedNumberOfPegs; //= 3; // hardcoded; ask for user input to determine numberOfPegs (part of Extension 2)

const PEG_BASE = "--- ";
var selectedDisc; //for move function
var selectedPeg; // = destinationPeg

var numberOfMoves; //for count function
var gameOver; // Boolean for global reference

var errorMessage = ("Error!");

//Set the number of Discs to set the board with. PLACEHOLDER FOR USER INPUT.
function setNumberOfDiscs (numberOfDiscs) {
  //userInputedNumberOfDiscs = prompt("How many discs do you want to play with?");
  userInputedNumberOfDiscs = numberOfDiscs;
}

//function to initialize the board (object???) SEE BELOW
function initializeBoard(startingNumberOfDiscs) { //CHECK PARAMETERS: need more? less? different names? 
  //NUMBER_OF_DISCS = startingNumberOfDiscs
  let flexBoard = []; // variable for "flexible" board (flexible number of discs that can be set by user 
  // use "this" here? 

  //Hardcoding 3 pegs; Create an initializeNumberOfPegs function (using a loop, likely a forEach) to allow user to set number of pegs
  let firstPeg = [];
  let secondPeg = [];
  let thirdPeg = [];

  //populate the firstPeg array with the starting number of discs; all on firstPeg for starting position at beginning of the game
  for (let i = startingNumberOfDiscs; i > 0; i--){         
      firstPeg.push(i);
    };

  //populate the flexBoard with three pegs in starting position
  flexBoard.push(firstPeg, secondPeg, thirdPeg);

  //graphical depiction to console of flexBoard and pegs, with discs in starting position
  flexBoard.forEach(function (currentInstanceOfPegArray) {
      console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
    });
  
  //set (or reset) dynamic global variables to starting values
  selectedDisc = null;
  selectedPeg = null;
  numberOfMoves = 0;
  gameOver = false; 
  console.log("First move, please.");
  return flexBoard; // is this return necessary? return to stateOfTheBoardObject?
}
//______________________________________

// There should be an object responsible for maintaining the state of the board and it should control the way to manipulate the inner state of the board. The board should maintain the number of moves that the player has done and output this value when the game completes.
let stateOfTheBoard = { // 
  peg1: peg1, // flexBoard[0] // or pegOfOrigin, destinationPeg, unusedPeg???
  peg2: peg2, // flexBoard[1] // 
  peg3: peg3, // flexBoard[2]
  numberOfMovesMade: numberOfMovesMade,
  gameStatus: gameStatus // Boolean, related to gameOver
  //finalNumberOfMoves: function(numberofMovesMade) {
  //   console.log("You won in " + numberOfMovesMade)
  // }
};

//______________________________________


// There should be a way to move discs from one peg to another.
//var moveDisc = 
function moveDisc(selectedDisc, destinationPeg){  // need pegOfOrigin, or determine that by the selectedDisc(inherent value); also need unusedPeg???
  //if (!gameOver) {}
  //if (!checkWinner) {}
  //if (checkIfMoveIsLegal()) {}
  var updateBoard = function () { //use map?
    var discToBeMoved = board.find(function(oneNumberInBoardArrayOfPegArrays)
    { 
      return oneNumberInBoardArrayOfPegArrays === selectedDisc;
    });

    if (discToBeMoved === undefined) {
      console.log(errorMessage);
    }; 
    //board.destinationPeg.push(board.pegOfOrigin.pop); // must distinguish pegOfOrigin value here.
    board.destinationPeg.push(discToBeMoved); //  
  
  //graphical depiction to console of flexBoard and pegs, with discs in starting position
  flexBoard.forEach(function (currentInstanceOfPegArray) {
      console.log(PEG_BASE + currentInstanceOfPegArray.join("  "))
    });

    console.log("Next move, please.");
  };
} 


// a function that, given a certain peg, determines which other pegs the top disc from that peg can be moved to.
//filter OUT the pegs that are NOT available; filter should create subset of avaialable pegs.
//In order to complete this function, you MUST use a filter function at least once.
var legalMoves = board.filter(function (individualPegState) {
  return (isPegEmpty(individualPegState) || topDisc >= discToBeMoved);
});

//a function to check whether peg is empty; returns Boolean
function isPegEmpty(givenPegNumber) { // numberOfPeg === board[(numberOfPeg-1)]
  for (i = 0; i < board.length; i++) {
    if (board[i] != []) return false;
  };
    return true;
  }

//a variable thagit t invokes a function that returns the topmost disc on a peg
var topDisc = function topmostDisc(peg) {
  for (i = 0; i < board[(peg-1)].length; i++) {
    if (board[peg-1][i] != 0) return  i;
    };
    return -1;
  } 

//topDisc first alternative version
var topDiscOfPeg = board[(givenPegNumber.length - 1)]; // last element in each peg array

//topDisc second alternative version
var topDiscOfPeg = function () {
if (!pegArray.prototype.last){
  pegArray.prototype.last = function(){
      return this[this.length - 1];
    };
  };
}

//a function to check whether an inputted peg is empty or not (NOT PART OF ASSIGNMENT; could have functionality in legalMoves and maybe checkWinner)
// function checkIfMoveIsLegal ();
//   function isPegEmpty(peg) {
//     for (i = 0; i < board[peg].length; i++) {
//     if ( board[num][i] != 0) return false;
//     }
//     return true;
//     }

// function moveValidation(peg){
//   if (isPegEmpty(peg)) {  // create a "isPegEmpty(peg)" function???" SEE IMMEDIATELY ABOVE
//     pegStatus = true;
//   }; 
//   else {
//     if (discSelectedToMove <= topDiscOnPeg) {
//       pegStatus = true;
//     }
//   }
//   return (board[???][???]) // Return legal moves or ILLegal moves???
// }

// var pegsAvailableForLegalMove = board.filter(function (individualPegState) {
//   return (isPegEmpty(individualPegState) || topDisc >= discToBeMoved);
// });

//filter OUT pegs not available; filter should create subset of avaialable pegs

//.filter
// When to use: When you want to create a new array that is a subset of the original array and can be created by interrogating each element in the array.

// filter is exactly what it sounds like and is used to create a new array based on some qualifications. This helper function is commonly used on the front end for sorting lists. 

// filter also takes an "iterator function" as an argument - an anonymous function that will be invoked for each item in the array. However this function must return a truthy or falsey value. Only the truthy values will be added to the array.

//___________________________________________

//updateBoard(); // use MAP w/ board initialization.

//maintain the number of moves
moveCounter()
//var numberOfMoves = 0; //set globally???
  numberOfMoves++;
  console.log(numberOfMoves);

//from "this" lesson, cohort-5-curriculum/week-01/day-03/this.md

//"this" refers to the object that called (or invoked) the function
//"this" is defined when the function is invoked, NOT when it is written
//In this example counter invoked (or called) the updateCounter function. This increments counter's count property. Inside the updateCounter method, the "this.count" is the same as the alerted "counter.count" or, in other words, we can say this===counter (the object that invoked the function)
var counter = {
  count: 0,

  updateCounter: function() {
    this.count += 1;
  }
};

counter.updateCounter();

alert(counter.count);

//_________________________________________________

// There should be a function checkWinner that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the reduce function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".
checkWinner() 
// discs CANNOT be on peg1; must be peg 2 or peg 3
//invoke isPegEmpty here; one of peg 2 or peg 3 must be empty
  if (isPegEmpty(pegToCheck)) {
  var nonEmptyPeg_DiscSum = threePegsArray.reduce(function (sumOfAllDiscs, nonEmptyPegNumber) {
    //if (isPegEmpty(onePegToCheck/presumedEmptyPeg))  
    });
  }
  //compare current sum of discs on one peg with sumOfAllDiscs

//.reduce
// When to use: When you want a single value that is an accumulation of information in an array.

// The definition for reduce given to us by MDN is, "The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value." The most common way we've seen something like this is to sum an array of integers. 
gameOver = true;

function sumDiscs (userInputedNumberOfDiscs) {
  let sumOfAllDiscs = 0;
  for (let i=userInputedNumberOfDiscs; i>0; i--) { //use helper function instead of for loop???
    sumOfAllDiscs = sumOfAllDiscs + i + (i-1); 
    //(userInputedNumberOfDiscs + (userInputedNumberOfDiscs -1));
    //userInputedNumberOfDiscs--;
  };
  return sumOfAllDiscs;
}

board.peg1.reduce(function () { // board.reduce(function () if board.i == board.peg1)

    //if (isPegEmpty(onePegToCheck/presumedEmptyPeg))  
  });
}

//_____________________________________________________

// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
endGame() {
  console.log(""); // Output number of moves ( count or moveCount)
}
announceWinner() = console.log("Winner!");


function resetGame(start) {
  //getUserInputForNumberofDiscsAndPegs();
  initializeBoard(); 
  startGame(){} 
}

