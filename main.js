var array = [
  [5, 4, 3, 2, 1],
  [],
  [],
];

console.log('Instructions for Towers of Hanoi: To move a disc from a peg, type moveDisc(number1, number2)in the console. Number1 is the peg you wish to remove a disc from and number2 is the peg you wish to place the current disc you just removed (Example: moveDisc(1, 3) means I wish to remove the top disk from peg 1 and place it at the top of peg 3). You can only remove a disk from the top of the stack of discs on a peg. Discs range in size from 1 - 5 with 5 being the largest disc and 1 being the smallest disc. Larger discs cannot be placed on smaller discs so you can only place a disc on the top of a new peg if it is smaller than the current disc on that peg. A player wins when all discs are assembled in order of size on a different peg than the one the discs started on. Good luck.');



// var startingBoard = function(array) {
//   var board = array.map(function(item) {
//     item.unshift('---');
//     return item.join(" ");
//   })
//   console.log(board[0]);
//   console.log(board[1]);
//   console.log(board[2]);
// }




var moveDisc = function(parameter1, parameter2) {
  console.log(array);
  p1 = array[parameter1 - 1];
  p2 = array[parameter2 - 1];
 
  if (p1.length === 0) {
    console.log('There are no more discs on that peg');
    return array;
  }
  
  if (p2.length === 0) {
    var disc = p1.pop();
    array[parameter2 - 1].push(disc);
    console.log('That move was successful, the board is now: ')
    return array;
  } else {
    if (p1[p1.length - 1] > p2[p2.length - 1]) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
      return array;
    } else {
      var removedDisc = array[parameter1 - 1].pop();
    array[parameter2 - 1].push(removedDisc);
    console.log('That move was successful, the board is now:')
    console.log(array)
      if (array[0].length === 0 && array[1].length === 0) {
        console.log('Winner, Winner, Chicken Dinner!');
        console.log(array);
        console.log('Starting New Game');
        startOver(array);
        return array;
      }
    }
  }
}


var startOver = function(array) {
  array[0] = [5, 4, 3, 2, 1];
  array[1] = [];
  array[2] = [];
}



moveDisc(1, 2);
moveDisc(1, 3);
moveDisc(2, 3);


