//GLOBAL VARIABLES 
//Board pieces

//const NUMBER_OF_DISCS = 3;
var userInputedNumberOfDiscs; //= 3; // hardcoded for now; ask for user input to determine numberOfDiscs (part of Extension 2)

//const NUMBER_OF_PEGS = 3; 
//var userInputedNumberOfPegs; //= 3; // hardcoded; ask for user input to determine numberOfPegs (part of Extension 2)

const PEG_BASE = "--- ";
var selectedDisc; //for move function
var selectedPeg; // = destinationPeg

var numberOfMoves; //for count function
var gameOver; // Boolean for global reference

//Set the number of Discs to set the board with. PLACEHOLDER FOR USER INPUT.
function setNumberOfDiscs (numberOfDiscs) {
  //userInputedNumberOfDiscs = prompt("How many discs do you want to play with?");
  userInputedNumberOfDiscs = numberOfDiscs;
}

//function to initialize the board (object???) SEE BELOW
function initializeBoard(startingNumberOfDiscs) { //CHECK PARAMETERS: need more? less? different names? 
  //NUMBER_OF_DISCS = startingNumberOfDiscs
  let flexBoard = []; // variable for "flexible" board (flexible number of discs that can be set by user  

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
}

//Body of executable code
setNumberOfDiscs(8); // add setNumberOfPegs later
initializeBoard(userInputedNumberOfDiscs); //initializeBoard(userInputedNumberOfPegs, userInputedNumberOfDiscs);

//______________________________________

//only the above works
// moveDisc(x, y);
// console.log("Next move, please.");


// There should be a way to move discs from one peg to another.
var moveDisc = function(selectedDisc, destinationPeg){  // need pegOfOrigin, or determine that by the selectedDisc(inherent value); also need unusedPeg???
  if (!gameOver) {
    
} 


// There should be an object responsible for maintaining the state of the board and it should control the way to manipulate the inner state of the board. The board should maintain the number of moves that the player has done and output this value when the game completes.
var stateOfTheBoard = {
  var startingState; 
  var peg1;
  var peg2;
  var peg3;
}; //SEE board above

updateBoard(); // use MAP w/ board initialization.


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

//a function to check whether an inputted peg is empty or not (NOT PART OF ASSIGNMENT; could have functionality in legalMoves and maybe checkWinner)
function isPegEmpty(peg) {
  for (i = 0; i < board[peg].length; i++) {
  if ( board[num][i] != 0) return false;
  }
  return true;
  }

// a function that, given a certain peg, determines which other pegs the top disc from that peg can be moved to. 
//In order to complete this function, you MUST use a filter function at least once. (See comments below function definition)

var legalMoves = function moveValidation(peg){
  if (isPegEmpty(peg)) {  // create a "isPegEmpty(peg)" function???" SEE IMMEDIATELY ABOVE
    pegStatus = true;
  }; 
  else {

  }
  return (board[???][???]) // Return legal moves or ILLegal moves???
}

// var tweets = posts.filter(function (post) {
//   if (post.platform === 'twitter') {
//     return true;
//   }
// });

//.filter
// When to use: When you want to create a new array that is a subset of the original array and can be created by interrogating each element in the array.

// filter is exactly what it sounds like and is used to create a new array based on some qualifications. This helper function is commonly used on the front end for sorting lists. 

// filter also takes an "iterator function" as an argument - an anonymous function that will be invoked for each item in the array. However this function must return a truthy or falsey value. Only the truthy values will be added to the array.



// There should be a function checkWinner that checks to see if the player has won the game. You win the game by putting all the discs back in the original order but on a new peg. As a part of this function, you MUST use the reduce function at least once. As a helpful hint, we suggest that you test this function with only 3 pegs and 3 discs on the board as it will take significantly less moves to "win".

checkWinner()
//.reduce

gameOver = true;



// Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
endGame()
announceWinner() = console.log("Winner!");


function resetGame(start) {
  //getUserInputForNumberofDiscsAndPegs();
  initializeBoard(); 
  startGame(){} 
}

