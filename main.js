var array = [
  [2],
  [1],
  [5, 4, 3]
];

var moveDisc = function(parameter1, parameter2) {
  p1 = array[parameter1 - 1];
  p2 = array[parameter2 - 1];
 
  if (p1.length === 0) {
    console.log('There are no more discs on that peg');
    console.log(array);
    return;
  }
  
  if (p2.length === 0) {
    var disc = p1.pop();
    array[parameter2 - 1].push(disc);
    console.log('That move was successful, the board is now: ')
    console.log(array);
  } else {
    if (p1[p1.length - 1] > p2[p2.length - 1]) {
      console.log('You cannot move a larger disc on top of a smaller one, board is still:')
      console.log(array);
    } else {
      var removedDisc = array[parameter1 - 1].pop();
    array[parameter2 - 1].push(removedDisc);
    console.log('That move was successful, the board is now:')
    console.log(array)
    if (array[0].length === 0 && array[1].length === 0) {
      console.log('Winner, Winner, Chicken Dinner!');
    }
    }
  }
  
  
  
  
  
  
  
  
  // (p1[p1.length - 1] > p2[p2.length - 1]) {
  //   console.log('You cannot move a larger disc on top of a smaller one, board is still:')
  //   console.log(array);
  // } else if ((p1[p1.length - 1] < p2[p2.length - 1])) {
  //   var removedDisc = array[parameter1 - 1].pop();
  //   array[parameter2 - 1].push(removedDisc);
  //   console.log(array)
  // } 
}


var startingBoard = function(array) {
  var board = array.map(function(item) {
    item.unshift('---');
    return item.join(" ");
  })
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

// var convert = function()



moveDisc(1, 3);
moveDisc(2, 3)

// startingBoard(array);