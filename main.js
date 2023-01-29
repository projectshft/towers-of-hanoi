//CONTROLS: Use 'moveDisk(from, to)' and use 'peg1', 'peg2', or 'peg3' as arguments to move the top disk of one peg to another peg
//Added the option to add on more pegs and/or disks but the addDisk() function only adds more disks with the value '6' :(

var boardArr = [[5, 4, 3, 2, 1], [], []];

var peg1 = boardArr[0];
var peg2 = boardArr[1];
var peg3 = boardArr[2];
  
var checkWinner = function () {
  if (peg2.length === 5 || peg3.length === 5) {
    console.log('You win!');
  }
};
  
gameReset = () => {
  boardArr = [[5, 4, 3, 2, 1], [], []];
  
  peg1 = boardArr[0];
  peg2 = boardArr[1];
  peg3 = boardArr[2];

  printBoard(boardArr);

}

var printBoard = function (arr) {
  var gameBoard = arr.map(function (peg) {
    console.log('---' + peg) 
    return gameBoard;
  })
}
  
var moveDisk = (from, to) => {
  let disk;
  
  if (to.length === 0) {
    disk = from.pop([]);
    to.push(disk);
  } else if (to[to.length - 1] > from[from.length - 1]) {
    disk = from.pop([]);
    to.push(disk);
  } else if (to[to.length - 1] < from[from.length - 1]) {
    console.log('INVALID MOVE');
  }
checkWinner();
printBoard(boardArr);
};
  
printBoard(boardArr);
  
var addPeg = function () {
  boardArr.push([]);
  printBoard(boardArr);
}
  
var addDisk = function () {
   peg1.unshift(6)
}

  