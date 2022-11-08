var array = [
  [5, 4, 3, 2, 1],
  [],
  [],
];

var gameBoardObj = {
  peg1: array[0],
  peg2: array[1],
  peg3: array[2],
  isWinner: false,
  turnNumber: 1,
};

console.log( `To start a new game of Towers of Hanoi type startGame() into the console and press enter`);

var startGame = function() {
  console.log('Instructions for Towers of Hanoi: The goal of Towers of Hanoi is to move a set of discs from one peg to another while only moving one disc at a time and not placing a larger disc on top of a smaller disc. Discs range in size from 1 - 5 with 5 being the largest disc and 1 being the smallest disc.To move a disc from a peg, type moveDisc(Number1, Number2) in the console. Number1 is the peg you wish to remove a disc from and number2 is the peg you wish to place the current disc you just removed. (Example: moveDisc(1, 3) means I wish to remove the top disk from peg 1 and place it at the top of peg 3)You can only remove a disk from the top of the stack of discs on a peg. Larger discs cannot be placed on smaller discs. A player wins when all discs are assembled in order of size on a different peg than the one the discs started on. Good luck.');
  newGame(array, gameBoardObj);
  console.log(`Round ${gameBoardObj.turnNumber}, Fight!`);
  console.log(convertArray(array));
  return gameBoardObj;
};

var convertArray = function(array) {
  var convertArray = array.map(function(item) {
    return `--- ${item}`;
  })
  var string = convertArray.join('\n');
  return string.replaceAll(',', ' ');
};

var moveDisc = function(parameter1, parameter2) {
  p1 = array[parameter1 - 1];
  p2 = array[parameter2 - 1];
 
  if (p1.length === 0) {
    console.log(`There are no more discs on that peg, you are still on turn number ${(gameBoardObj.turnNumber)}, and the board is still:`);
    console.log(convertArray(array));
    return gameBoardObj;
  }
  if (p2.length === 0) {
    var disc = p1.pop();
    array[parameter2 - 1].push(disc);
    gameBoardObj.turnNumber++;
    console.log(`That move was successful, you are now on turn number ${(gameBoardObj.turnNumber)}, and the board is now:`);
    console.log(convertArray(array));
    return gameBoardObj;
  } else {
    if (p1[p1.length - 1] > p2[p2.length - 1]) {
      console.log(`You cannot move a larger disc on top of a smaller one, you are still on turn number ${(gameBoardObj.turnNumber )}, and the board is still: `);
      console.log(convertArray(array));
      return gameBoardObj;
    } else {
      var removedDisc = array[parameter1 - 1].pop();
      array[parameter2 - 1].push(removedDisc);
      gameBoardObj.turnNumber++;
      checkWinner(); 
      return gameBoardObj;
    }
  }
};

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

var checkWinner = function() {
  if ((array[0].length === 0 && array[1].length === 0) || (array[0].length === 0 && array[2].length === 0)) {
    console.log(`Winner, Winner, Chicken Dinner! It took you ${gameBoardObj.turnNumber} turns to complete the Towers of Hanoi game`);
    console.log(convertArray(array));
    gameBoardObj.isWinner = true;
    // newGame(array, gameBoardObj);
    return gameBoardObj;
  } else {
  console.log(`That move was successful, you are now on turn number ${(gameBoardObj.turnNumber)}, and the board is now:`);
  console.log(convertArray(array));
  return gameBoardObj;
  } 
};