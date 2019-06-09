var Game = function() {
  var boardArray = [];
  var pegNumber;
  var discNumber;
  var moveCount = 0;

  var initiateGame = function(board) {
    pegNumber = board.getAttribute('pegNumber');
    discNumber = board.getAttribute('discNumber');
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
    return "The game has begun. Make your first move."
  };

  // print with horizontal orientation

  var printHorizontal = function() {
    boardArray.map(function(peg) {
      var discString = '--- ';
      peg.forEach(function(disc) {
        discString += disc + ' ';
      });
      console.log(discString);
      return discString;
    });
  };

  //

  // print with vertical orientation

  var makeVerticalArray = function(array) {
    var verticalBoard = [];
    for (var i = 0; i < discNumber; i++) {
      verticalBoard.push([]);
    }
    for (var i = 0; i < pegNumber; i++) {
      for (var j = 0; j < discNumber; j++) {
        verticalBoard[j].push(array[i][discNumber - 1 - j]);
      }
    }
    return verticalBoard;
  };

  var printVertical = function() {
    var arrayV = makeVerticalArray(boardArray);
    arrayV.map(function(level) {
      var levelString = ' ';
      level.forEach(function(item) {
        var itemDisplay;
        if (item === undefined) {
          itemDisplay = " ";
        } else {
          itemDisplay = Number(item);
        }
        levelString += ' ' + itemDisplay + ' ';
      });
      console.log(levelString);
      return levelString;
    });
    var pegBase = ' ';
    for (i = 0; i < pegNumber; i++) {
      pegBase += " - ";
    }
    console.log(pegBase);
  };

  //

  var getSizeOfTopDiscOnPeg = function(peg) {
    if (peg.length === 0) {
      return discNumber + 1;
    } else {
      return Number(peg[peg.length - 1]);
    }
  };

  var possibleMovesFromPeg = function(startPeg) {
    var endPegIndices = [];
    var startPegTopDiscSize = getSizeOfTopDiscOnPeg(boardArray[startPeg - 1]);
    var endPegs = boardArray.filter(function(endPeg) {
      var endPegTopDiscSize = getSizeOfTopDiscOnPeg(endPeg);
      if ((endPeg !== boardArray[startPeg - 1]) &&
        (startPegTopDiscSize < endPegTopDiscSize)) {
        endPegIndices.push(1);
        return true;
      } else {
        endPegIndices.push(0);
        return false;
      }
    });
    if (endPegIndices.indexOf(1) === -1) {
      return "You cannot move any discs from peg " + startPeg + ".";
    } else {
      var endPegs = [];
      for (var i = 0; i < endPegIndices.length; i++) {
        if (endPegIndices[i] === 1) {
          endPegs.push(i + 1);
        }
      }
      return "You can move a disc from peg " + startPeg + " to the following peg(s): " + endPegs + ".";
    }
  };

  var moveDisc = function(sourcePeg, targetPeg) {
    var sourcePegTopDiscSize = getSizeOfTopDiscOnPeg(boardArray[sourcePeg - 1]);
    var targetPegTopDiscSize = getSizeOfTopDiscOnPeg(boardArray[targetPeg - 1]);
    if (sourcePegTopDiscSize < targetPegTopDiscSize) {
      boardArray[targetPeg - 1].push(boardArray[sourcePeg - 1].pop());
      moveCount++;
      console.log("That move was successful, board is now: ");
    } else if (sourcePegTopDiscSize === discNumber + 1) {
      console.log("There are no discs to move from peg " + sourcePeg + ", board is still: ");
    } else if (sourcePegTopDiscSize > targetPegTopDiscSize) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
    } else {
      console.log("That was not a valid move, board is still: ");
    }
    return printVertical();
  };

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

  var checkWinner = function() {
    if (board.getAttribute('winStatus')) {
      return "The game has been won in " + moveCount + " moves."
    } else {
      var indexOfFullPeg = 0;
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
        board.setAttribute('winStatus', true);
      }
      return (board.getAttribute('winStatus')) ? "The game has been won in " + moveCount + " moves." : "The game has not been won.";
    }
  };

  return {
    initiateGame: initiateGame,
    printHorizontal: printHorizontal,
    printVertical: printVertical,
    moveDisc: moveDisc,
    checkWinner: checkWinner,
    possibleMovesFromPeg: possibleMovesFromPeg
  };
};

var Board = function(pegNumber, discNumber) {
  var attributes = {
    pegNumber: pegNumber,
    discNumber: discNumber,
    winStatus: false
  };
  var getAttribute = function(attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
  };
  var setAttribute = function(attribute, value) {
    if (attributes.hasOwnProperty(attribute)) {
      attributes[attribute] = value;
    }
  };
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  };
};


//
var numberOfPegs = 3;
var numberOfDiscs = 3;
var game;
var board;

game = Game();
board = Board(numberOfPegs, numberOfDiscs);

game.initiateGame(board);

game.printHorizontal();
game.printVertical();

game.moveDisc(1, 2);

game.possibleMovesFromPeg(1);
game.possibleMovesFromPeg(2);
game.possibleMovesFromPeg(3);

game.moveDisc(1, 3);
game.moveDisc(2, 3);
game.moveDisc(1, 2);
game.moveDisc(3, 1);
game.moveDisc(3, 2);
game.moveDisc(1, 2);

game.checkWinner();

//
