var array = [
  [1],
  [2],
  [5, 4, 3],
];

var gameBoardObj = {
  isWinner: false,
  turnNumber: 1,
};

console.log( `To start a new game of Towers of Hanoi type startGame() into the console and press enter`);

var startGame = function() {
  console.log('Instructions for Towers of Hanoi: The goal of Towers of Hanoi is to move a set of discs from one peg to another while only moving one disc at a time and not placing a larger disc on top of a smaller disc. Discs range in size from 1 - 5 with 5 being the largest disc and 1 being the smallest disc.To move a disc from a peg, type moveDisc(Number1, Number2) in the console. Number1 is the peg you wish to remove a disc from and number2 is the peg you wish to place the current disc you just removed. (Example: moveDisc(1, 3) means I wish to remove the top disk from peg 1 and place it at the top of peg 3)You can only remove a disk from the top of the stack of discs on a peg. Larger discs cannot be placed on smaller discs. A player wins when all discs are assembled in order of size on a different peg than the one the discs started on. Good luck.');
  newGame(array, gameBoardObj);
  return convertArray(array);
}

var convertArray = function(array) {
  array.forEach(function(item) {
     console.log(`--- ${item.join(' ')}`);
  })
  return;
}

var moveDisc = function(parameter1, parameter2) {
  p1 = array[parameter1 - 1];
  p2 = array[parameter2 - 1];
 
  if (p1.length === 0) {
    console.log(`There are no more discs on that peg, you are still on turn number ${(gameBoardObj.turnNumber)}, and the board is still:`);
    return convertArray(array);
  }
  if (p2.length === 0) {
    var disc = p1.pop();
    array[parameter2 - 1].push(disc);
    gameBoardObj.turnNumber++;
    console.log(`That move was successful, you are now on turn number ${(gameBoardObj.turnNumber)}, and the board is now:`);
    return convertArray(array);
  } else {
    if (p1[p1.length - 1] > p2[p2.length - 1]) {
      console.log(`You cannot move a larger disc on top of a smaller one, you are still on turn number ${(gameBoardObj.turnNumber )}, and the board is still: `);
      return convertArray(array);
    } else {
      var removedDisc = array[parameter1 - 1].pop();
      array[parameter2 - 1].push(removedDisc);
      gameBoardObj.turnNumber++;
      checkWinner(); 
    }
  }
}

var newGame = function(array, object) {
  array[0] = [5, 4, 3, 2, 1];
  array[1] = [];
  array[2] = [];
  object.isWinner = false;
  object.turnNumber = 1;
}

var checkWinner = function() {
  if ((array[0].length === 0 && array[1].length === 0) || (array[0].length === 0 && array[2].length === 0)) {
    console.log(`Winner, Winner, Chicken Dinner! It took you ${gameBoardObj.turnNumber} turns to complete the Towers of Hanoi game`);
    console.log(convertArray(array));
    gameBoardObj.isWinner = true;
    // newGame(array, gameBoardObj);
    return;
  } else {
  console.log(successfulText);
  return convertArray(array);
  } 
}

// var convertArray = function(array) {
//   var newArray = array.map(function(item) {
//     return `--- ${item.join(' ')}`;
//   })
//   console.log(newArray);
//   return newArray;
// }


// console.log(convertArray([[5, 4, 3, 2, 1], [], []]));