

var Game = function() {
  var attributes = {
    pegNumber: 0,
    discNumber: 0,
    moveCount: 0,
    boardArray: []
  };

  var initiateGame = function(pegNum, discNum) {
    attributes.pegNumber = pegNum;
    attributes.discNumber = discNum;
    attributes.moveCount = 0;
    attributes.boardArray = [];
    if ((attributes.pegNumber > 0) && (attributes.discNumber > 0)) {
      for (var i = 0; i < attributes.pegNumber; i++) {
        if (i === 0) {
          var firstPeg = [];
          for (var j = 0; j < attributes.discNumber; j++) {
            firstPeg.push((attributes.discNumber - j) + '');
          }
          attributes.boardArray.push(firstPeg);
        } else {
          var otherPegs = [];
          attributes.boardArray.push(otherPegs);
        }
      }
      console.log("New game! Make your first move.");
      printVertical();
    }
  };

  // print with horizontal orientation

  var printHorizontal = function() {
    attributes.boardArray.map(function(peg) {
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
    for (var i = 0; i < attributes.discNumber; i++) {
      verticalBoard.push([]);
    }
    for (var i = 0; i < attributes.pegNumber; i++) {
      for (var j = 0; j < attributes.discNumber; j++) {
        verticalBoard[j].push(array[i][attributes.discNumber - 1 - j]);
      }
    }
    return verticalBoard;
  };

  var printVertical = function() {
    var arrayV = makeVerticalArray(attributes.boardArray);
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
    for (i = 0; i < attributes.pegNumber; i++) {
      pegBase += " - ";
    }
    console.log(pegBase);
  };

  //

  var getSizeOfTopDiscOnPeg = function(peg) {
    if (peg.length === 0) {
      return attributes.discNumber + 1;
    } else {
      return Number(peg[peg.length - 1]);
    }
  };

  var possibleMovesFromPeg = function(startPeg) {
    var endPegIndices = [];
    var startPegTopDiscSize = getSizeOfTopDiscOnPeg(attributes.boardArray[startPeg - 1]);
    var endPegs = attributes.boardArray.filter(function(endPeg) {
      var endPegTopDiscSize = getSizeOfTopDiscOnPeg(endPeg);
      if ((endPeg !== attributes.boardArray[startPeg - 1]) &&
        (startPegTopDiscSize < endPegTopDiscSize)) {
        endPegIndices.push(1);
        return true;
      } else {
        endPegIndices.push(0);
        return false;
      }
    });
    if (endPegIndices.indexOf(1) === -1) {
      console.log("You cannot move any discs from peg " + startPeg + ".");
    } else {
      var endPegs = [];
      for (var i = 0; i < endPegIndices.length; i++) {
        if (endPegIndices[i] === 1) {
          endPegs.push(i + 1);
        }
      }
      console.log("You can move a disc from peg " + startPeg + " to the following peg(s): " + endPegs + ".");
    }
  };

  var moveDisc = function(sourcePeg, targetPeg) {
    var sourcePegTopDiscSize = getSizeOfTopDiscOnPeg(attributes.boardArray[sourcePeg - 1]);
    var targetPegTopDiscSize = getSizeOfTopDiscOnPeg(attributes.boardArray[targetPeg - 1]);
    if (sourcePegTopDiscSize < targetPegTopDiscSize) {
      attributes.boardArray[targetPeg - 1].push(attributes.boardArray[sourcePeg - 1].pop());
      attributes.moveCount++;
      console.log("That move was successful, board is now: ");
    } else if (sourcePegTopDiscSize === attributes.discNumber + 1) {
      console.log("There are no discs to move from peg " + sourcePeg + ", board is still: ");
    } else if (sourcePegTopDiscSize > targetPegTopDiscSize) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
    } else {
      console.log("That was not a valid move, board is still: ");
    }
     printVertical();
     checkWinner();
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
      var indexOfFullPeg = 0;
      var checkFullPeg = attributes.boardArray.reduce(function(accumulator, peg) {
        if (peg.length === 0) {
          accumulator++;
        } else {
          indexOfFullPeg += accumulator;
        }
        return accumulator;
      }, 0);

      var fullPegDiscOrderCheck = verifyFullPegOrder(attributes.boardArray[indexOfFullPeg]);

      if ((checkFullPeg === attributes.boardArray.length - 1) && (indexOfFullPeg !== 0) && (fullPegDiscOrderCheck)) {
        console.log("You won the game in " + attributes.moveCount + " moves!");
        console.log("Initiate a new game to play again.");
        initiateGame(0,0);
      } else {
        console.log("Your move count is " + attributes.moveCount + ". Make another move.");
      }
  };

  var getAttribute = function(attribute) {
    if (attributes.hasOwnProperty(attribute)) {
      return attributes[attribute];
    }
  };

  return {
    initiateGame: initiateGame,
    printHorizontal: printHorizontal,
    printVertical: printVertical,
    moveDisc: moveDisc,
    possibleMovesFromPeg: possibleMovesFromPeg,
    getAttribute: getAttribute
  };
};

/*
//
var numberOfPegs = 3;
var numberOfDiscs = 3;

var board = Game();

board.initiateGame(numberOfPegs, numberOfDiscs);

// board.printHorizontal();
// board.printVertical();

board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);

board.possibleMovesFromPeg(1);
board.possibleMovesFromPeg(2);
board.possibleMovesFromPeg(3);

// board.moveDisc(1, 2);

//
*/
