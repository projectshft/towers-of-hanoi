// Game board array
var gameBoardArray = [
  [5, 4, 3, 2, 1],
  [],
  [],
];

// Game board object
var gameBoardObject = {
  peg1: gameBoardArray[0],
  peg2: gameBoardArray[1],
  peg3: gameBoardArray[2],
  isWinner: false,
  turnNumber: 1,
  numberOfPegs: 3,
  numberOfDiscs: 5,
};

// Function to add more pegs to the game
var addPeg = function() {
  if (gameBoardObject.turnNumber === 1) {
    gameBoardArray.push([]);
    gameBoardObject.numberOfPegs++;
    gameBoardObject[`peg${gameBoardArray.length}`] = gameBoardArray[gameBoardArray.length - 1];
    console.log(`There are now ${gameBoardArray.length} pegs and the current board looks like this: `);
    console.log(convertArray(gameBoardArray));
    return gameBoardObject;
  } else {
    console.log(`You cannot add a peg after the game has started. You are on turn number ${(gameBoardObject.turnNumber)}, and the board is still:`);
    return gameBoardObject;
  }
}; 

// Function to add more discs to the first peg
var addDisk = function() {
  if (gameBoardObject.turnNumber === 1) {
      gameBoardArray[0].unshift(gameBoardArray[0].length + 1);
      gameBoardObject.numberOfDiscs++;
      console.log(`There are now ${gameBoardArray[0].length} discs and the current board looks like this: `);
      console.log(convertArray(gameBoardArray));
      return gameBoardObject;
  } else {
    console.log(`You cannot add a disc after the game has started. You are on turn number ${(gameBoardObject.turnNumber)}, and the board is still:`);
    return gameBoardObject;
  }
};

// Start game statement
console.log(`To start a new game of Towers of Hanoi type startGame() into the console and press enter`);

// Function that resets the game board array and the game board object
var gameReset = function(array, object) {
  array[0] = [5, 4, 3, 2, 1];
  array[1] = [];
  array[2] = [];
  object.isWinner = false;
  object.turnNumber = 1;
  object.peg1 = array[0];
  object.peg2 = array[1];
  object.peg3 = array[2];
};

// Function to start a new game
var startGame = function() {
  console.log('Instructions for Towers of Hanoi: The goal of Towers of Hanoi is to move a set of discs from one peg to another while only moving one disc at a time and not placing a larger disc on top of a smaller disc. You can only move a disk from the top of the stack of discs on a peg. To move a disc from a peg, type moveDisc(Number1, Number2) in the console. The parameter Number1 signifies the peg you wish to remove a disc from and the parameter number2 signifies the peg you wish to place that disc on. (Example: moveDisc(1, 3) means I wish to remove the top disk from peg 1 and place it at the top of peg 3.  A player wins when all discs are assembled in descending order on a different peg other than the one the discs started on. If you would like to make the game more difficult you can add pegs by typing addPeg() and add discs by typing addDisc() into the console but you cannot add a disc or a peg after you have started the game. Good luck!');
  gameReset(gameBoardArray, gameBoardObject);
  console.log(`Round ${gameBoardObject.turnNumber}, Fight!`);
  console.log(convertArray(gameBoardArray));
  return gameBoardObject;
};

// Function to convert game board array to game board string
var convertArray = function(array) {
  var convertArray = array.map(function(item) {
    return `--- ${item}`;
  })
  var string = convertArray.join('\n');
  return string.replaceAll(',', ' ');
};

 // Function to inform user they have won the game
 var crownWinner = function(object) {
  console.log(`Winner, Winner, Chicken Dinner! It took you ${object.turnNumber - 1} turns to complete the Towers of Hanoi game. To start another game of Towers of Hanoi type startGame() into the console and press enter`);
  object.isWinner = true;
  return object;  
}

// Function for logic for moving  discs to different pegs
var moveDisc = function(pegOne, pegTwo) {
  var peg1Array = gameBoardArray[pegOne - 1];
  var peg2Array = gameBoardArray[pegTwo - 1];

  // Check for if the user chooses an input other than a number
  if (typeof pegOne !== 'number' && typeof pegTwo !== 'number') {
    console.log(`I don't know what that was you put into the moveDisc function, but it wasn't a number. Please only choose valid numbers for the inputs to the moveDisc function. You are still on turn number ${(gameBoardObject.turnNumber )}, and the board is still:`);
    return gameBoardObject;
  }

  // Check for preventing people from choosing pegs that do not exist
  if (pegOne <= 0 || pegOne > gameBoardArray.length) {
    console.log(`You cannot move a disc from a peg that does not exist, you are still on turn number ${(gameBoardObject.turnNumber)}, and the board is still:`);
    return gameBoardObject;
  }

  // Check for preventing people from trying to put discs on pegs that do not exist
  if (pegTwo <= 0 || pegTwo > gameBoardArray.length) {
    console.log(`You cannot move a disc to peg that does not exist, you are still on turn number ${(gameBoardObject.turnNumber)}, and the board is still:`);
    return gameBoardObject;
  }
  
  // Check for if you try to move a disc from an empty peg
  if (peg1Array.length === 0) {
    console.log(`Do you see a disc on that peg, because I don't? You are still on turn number ${(gameBoardObject.turnNumber)}, and the board is still:`);
    console.log(convertArray(gameBoardArray));
    return gameBoardObject;
  }
  
  // Check for if the peg you are moving your disc to is empty
  if (peg2Array.length === 0) {
    var removedDiscB = peg1Array.pop();
    gameBoardArray[pegTwo - 1].push(removedDiscB);
    gameBoardObject.turnNumber++;
    console.log(`♬♬ One is the loneliest number that you'll ever do. ♬♬ That move was successful but that disc is feeling lonely. Better help him find his friends. You are now on turn number ${(gameBoardObject.turnNumber)}, and the board is now:`);
    console.log(convertArray(gameBoardArray));
    return gameBoardObject;
  }
  
  // Check for if the disc you are trying to move is larger than the disc you are trying to put on top of
  if (peg1Array[peg1Array.length - 1] > peg2Array[peg2Array.length - 1]) {
    console.log(`You cannot move a larger disc on top of a smaller one, it could suffocate. You are still on turn number ${(gameBoardObject.turnNumber )}, and the board is still: `);
    console.log(convertArray(gameBoardArray));
    return gameBoardObject;
  }
  
  // Logic for moving discs when all checks are passed
  var removedDiscA = gameBoardArray[pegOne - 1].pop();
  gameBoardArray[pegTwo - 1].push(removedDiscA);
  gameBoardObject.turnNumber++;
  console.log(`That move was successful. Way to go! You are now on turn number ${(gameBoardObject.turnNumber)}, and the board is now:`);
  console.log(convertArray(gameBoardArray));
  checkWinner(gameBoardArray, gameBoardObject);
  return gameBoardObject;
};

// Function to move disk if all checks pass and check to see if user has won
var checkWinner = function(array, object) {
  array.forEach(function(element, index, array) {
    if (index === 0) {
      return;
    }
    if (element.length === object.numberOfDiscs) {
      crownWinner(object);
    } 
  })
};