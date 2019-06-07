var numberOfPegs = 3;
var numberOfDiscs = 3;

var makeBoard = function(pegNumber, discNumber) {
  var boardArray = [];
  for (var i = 0; i < pegNumber; i++) {
    if (i === 0) {
      var firstPeg = [];
      for (var j = 0; j < discNumber; j++) {
        firstPeg.push((discNumber - j) + '');
      }
      boardArray.push(firstPeg);
    } else {
      var otherPegs = [];
      boardArray.push(otherPegs);
    }
  }
  return boardArray;
};

var board = makeBoard(numberOfPegs, numberOfDiscs);

var printBoard = function(boardArray) {
  return boardArray.forEach(function(peg) {
    var discString = '--- ';
    peg.forEach(function(disc) {
      discString += disc + ' ';
    });
    console.log(discString);
  });
};

printBoard(board);

var getSizeOfTopDiscOnPeg = function(peg) {
  if (peg.length === 0) {
    return numberOfDiscs + 1;
  } else {
    return Number(peg[peg.length - 1]);
  }
};

// specific to "board" array (generalize?)
var moveDisc = function(sourcePeg, targetPeg) {
  var sourcePegTopDiscSize = getSizeOfTopDiscOnPeg(board[sourcePeg - 1]);
  var targetPegTopDiscSize = getSizeOfTopDiscOnPeg(board[targetPeg - 1]);
  if (sourcePegTopDiscSize < targetPegTopDiscSize) {
    board[targetPeg - 1].push(board[sourcePeg - 1].pop());
    return "The move was successful.";
  } else {
    return "The move was not successful.";
  }
};

moveDisc(1, 2);
printBoard(board);

var verifyFullPegOrder = function(fullPeg) {
  result = false;
  for (var i = 0; i < fullPeg.length - 1; i++) {
    if (Number(fullPeg[i]) > Number(fullPeg[i + 1])) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};

var checkWinner = function(boardArray) {
  var indexOfFullPeg = 0;
  var winStatus = false;

  var checkFullPeg = boardArray.reduce(function(accumulator, peg) {
    if (peg.length === 0) {
      accumulator++;
    } else {
      indexOfFullPeg += accumulator;
    }
    return accumulator;
  }, 0);

  var fullPegDiscOrderCheck = verifyFullPegOrder(boardArray[indexOfFullPeg]);

  if ((checkFullPeg === boardArray.length - 1) && (indexOfFullPeg !== 0) && (fullPegDiscOrderCheck)) {
    winStatus = true;
  }
  return winStatus;
};

checkWinner(board);

moveDisc(1, 3);
printBoard(board);
moveDisc(2, 3);
printBoard(board);
moveDisc(1, 2);
printBoard(board);
moveDisc(3, 1);
printBoard(board);
moveDisc(3, 2);
printBoard(board);
moveDisc(1, 2);
printBoard(board);

checkWinner(board);
printBoard(board);
