var Game = function() {
  var attributes = {
    pegNumber: 0,
    discNumber: 0,
    moveCount: 0,
    boardArray: []
  };

  // initiate game based on user input
  // (move count and array reset; "new game" not created by the reset with
  // (0,0) in checkWinner or if peg/disc numbers aren't positive integers).
  // it would be nice to add checks on input in case a trivial or
  // unsolvable game (e.g., (2,1) or (1,2)) were initiated by a player.

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

  // print with vertical orientation
  // (transforms boardArray with matrix ops before generating display)

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

  // turns rightmost peg element into a number for comparison
  // (empy pegs given value of 1 greater than largest peg on the
  // board so that comparison operations elsewhere work out)

  var getSizeOfTopDiscOnPeg = function(peg) {
    if (peg.length === 0) {
      return attributes.discNumber + 1;
    } else {
      return Number(peg[peg.length - 1]);
    }
  };

  // a nice extension of the following would be a function that returns
  // all possible moves given the current board state

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

  // moveDisc only increases moveCount for successful moves and logs
  // specific errors for certain bad attempts (general "not valid"
  // method for miscellaneous bad attempts). may need more checks on
  // number input from player.

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

  // the following may no longer be necessary, given the restrictions in
  // the moveDisc function

  var verifyFullPegOrder = function(fullPeg) {
    var result = false;
    for (var i = 0; i < fullPeg.length - 1; i++) {
      if (Number(fullPeg[i]) > Number(fullPeg[i + 1])) {
        result = true;
      } else {
        result = false;
      }
    }
    return result;
  };

  // checks that one peg (not the original) is full, with correctly ordered
  // discs, and if so, gives message with move count and resets game

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
      initiateGame(0, 0);
    } else {
      console.log("Your move count is " + attributes.moveCount + ". Make another move.");
    }
  };

  // user can see (but not directly edit) attributes of initiated game

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
// sample player code

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
*/
