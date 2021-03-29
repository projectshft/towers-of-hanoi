// Dan Piston Eval 1 - Towers of Hanoi - 3/25/2021

// Any time you iterate through an array, you must refrain from using for or while loops - instead you must use the Array helper methods except for forEach - you may not use forEach.

// array object responsible for maintaining state of board
var board = [
  [5, 4, 3, 2, 1],
  [],
  [],
];

var numberOfDiscs = board[0].length; // for future use

// print board using MAP at least once 
var printBoard = function (x) {
  var printedBoard = x.map(function (innerArray) {
    return '---' + innerArray.join(' ') 
  });
  console.log(printedBoard.join('\n'));
}

printBoard(board);

// moveDesc to play the game as board.moveDesc(1, 3) for example
board.moveDisc = function (oldPegNumber, newPegNumber) {
  oldPegNumber -= 1;
  newPegNumber -= 1;
  var arr1 = this[oldPegNumber];
  var arr2 = this[newPegNumber];

  console.log(arr1[arr1.length - 1], arr2[arr2.length-1]);

  // make sure there's a disc to move!
  if (arr1.length === 0){
    console.log('there are no discs on that peg - try again');
    return 
  }

  // make sure the disc being moved is smaller than the existing disc
  if (arr2.length === 0 || (arr1[arr1.length-1] < arr2[arr2.length-1])) {
    tempElement = this[oldPegNumber].pop();
    this[newPegNumber].push(tempElement);
  } else {
    console.log('You cannot put a larger disc onto a smaller one');
  }

  // see if there's a winner (array with length 5 that is not array1)
  // to make generalize-able: get all inner array lengths into a new array
  var lenArr = this.map(function (x) {
    return x.length;
  })
    // drop the first one
  lenArr.splice(0, 1);
    // see if any are == numberOfDiscs

  console.log(numberOfDiscs);


  if (lenArr.some(win => win == numberOfDiscs)) {
    console.log('You won!');
    printBoard(this);
    var board = [
      [5, 4, 3, 2, 1],
      [],
      [],
    ];
    console.log('Board Reset:');
    printBoard(board);

    return
  }


  printBoard(this);
};




  







