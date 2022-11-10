// Game board array
var gameBoardArray = [
  [1],
  [2],
  [5, 4, 3],
];

// Game board object
var gameBoardObj = {
  peg1: gameBoardArray[0],
  peg2: gameBoardArray[1],
  peg3: gameBoardArray[2],
  isWinner: false,
  turnNumber: 1,
};

// Start game statement
console.log(`To start a new game of Towers of Hanoi type startGame() into the console and press enter`);

// Function to start a new game
var startGame = function() {
  console.log('Instructions for Towers of Hanoi: The goal of Towers of Hanoi is to move a set of discs from one peg to another while only moving one disc at a time and not placing a larger disc on top of a smaller disc. Discs range in size from 1 - 5 with 5 being the largest disc and 1 being the smallest disc.To move a disc from a peg, type moveDisc(Number1, Number2) in the console. Number1 is the peg you wish to remove a disc from and number2 is the peg you wish to place the current disc you just removed. (Example: moveDisc(1, 3) means I wish to remove the top disk from peg 1 and place it at the top of peg 3)You can only remove a disk from the top of the stack of discs on a peg. Larger discs cannot be placed on smaller discs. A player wins when all discs are assembled in order of size on a different peg than the one the discs started on. Good luck.');
  newGame(gameBoardArray, gameBoardObj);
  console.log(`Round ${gameBoardObj.turnNumber}, Fight!`);
  console.log(convertArray(gameBoardArray));
  return gameBoardObj;
};

// Function to convert game board array to game board string
var convertArray = function(array) {
  var convertArray = array.map(function(item) {
    return `--- ${item}`;
  })
  var string = convertArray.join('\n');
  return string.replaceAll(',', ' ');
};

 // Function to check if the user has won the game
 var checkWinner = function(array, object) {
  if (array[0].length === 0 && (array[1].length === 0 || array[2].length === 0)) {
    console.log(`Winner, Winner, Chicken Dinner! It took you ${object.turnNumber - 1} turns to complete the Towers of Hanoi game. To start another game of Towers of Hanoi type startGame() into the console and press enter`);
    object.isWinner = true;
    return object;
  }    
}

// Function for checks and logic for moving  discs to different pegs
var moveDisc = function(pegOne, pegTwo) {
  var p1 = gameBoardArray[pegOne - 1];
  var p2 = gameBoardArray[pegTwo - 1];

  // Function to move disk if all checks pass
  var startMove = function(array, object) {
    var removedDisc = array[pegOne - 1].pop();
      array[pegTwo - 1].push(removedDisc);
      console.log(`That move was successful. Way to go! You are now on turn number ${(object.turnNumber)}, and the board is now:`);
      console.log(convertArray(array));
      checkWinner(gameBoardArray, gameBoardObj);
      object.turnNumber++;
      return object;
  }

  //Logic for if the user chooses an input other than a number
  if (typeof pegOne !== 'number' && typeof pegTwo !== 'number') {
    console.log(`I don't know what that was you put into the moveDisc function, but it wasn't a number. Please only choose valid numbers for the inputs to the moveDisc function. You are still on turn number ${(gameBoardObj.turnNumber )}, and the board is still:`);
    return gameBoardObj;
  }

  // Logic for preventing people from choosing pegs that do not exist
  if (pegOne <= 0 || pegOne > gameBoardArray.length) {
    console.log(`You cannot move a disc from a peg that does not exist, you are still on turn number ${(gameBoardObj.turnNumber)}, and the board is still:`);
    return gameBoardObj;
  }

  // Logic for preventing people from trying to put discs on pegs that do not exist
  if (pegTwo <= 0 || pegTwo > gameBoardArray.length) {
    console.log(`You cannot move a disc to peg that does not exist, you are still on turn number ${(gameBoardObj.turnNumber)}, and the board is still:`);
    return gameBoardObj;
  }
  
  // Logic for if you try to move a disc from an empty peg
  if (p1.length === 0) {
    console.log(`Do you see a disc on that peg, because I don't? You are still on turn number ${(gameBoardObj.turnNumber)}, and the board is still:`);
    console.log(convertArray(gameBoardArray));
    return gameBoardObj;
  }
  
  // Logic for if the peg you are moving your disc to is empty
  if (p2.length === 0) {
    var disc = p1.pop();
    gameBoardArray[pegTwo - 1].push(disc);
    gameBoardObj.turnNumber++;
    console.log(`♬♬ One is the loneliest number that you'll ever do. ♬♬ That move was successful but that disc is feeling lonely. Better help him find his friends. You are now on turn number ${(gameBoardObj.turnNumber)}, and the board is now:`);
    console.log(convertArray(gameBoardArray));
    return gameBoardObj;
  }
  
  // Logic for if the disc you are trying to move is larger than the disc you are trying to put on top of
  if (p1[p1.length - 1] > p2[p2.length - 1]) {
    console.log(`You cannot move a larger disc on top of a smaller one, it could suffocate. You are still on turn number ${(gameBoardObj.turnNumber )}, and the board is still: `);
    console.log(convertArray(gameBoardArray));
    return gameBoardObj;
  }
  return startMove(gameBoardArray, gameBoardObj);
};

// Function that resets the game board array and the game board object
var newGame = function(array, object) {
  array[0] = [5, 4, 3, 2, 1];
  array[1] = [];
  array[2] = [];
  object.isWinner = false;
  object.turnNumber = 1;
  object.peg1 = array[0];
  object.peg2 = array[1];
  object.peg3 = array[2];
};