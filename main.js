//
var numberOfPegs = 3;
var numberOfDiscs = 3;
var game;
var board;

game = Game();
board = Board(numberOfPegs, numberOfDiscs);

game.initiateGame(board);

game.printBoard();
game.moveDisc(1, 2);
game.moveDisc(1, 3);
game.moveDisc(2, 3);
game.moveDisc(1, 2);
game.moveDisc(3, 1);
game.moveDisc(3, 2);
game.moveDisc(1, 2);
game.checkWinner();
//

var Game = function() {
  var boardArray = [];
  var pegNumber = board.getAttribute('pegNumber');
  var discNumber = board.getAttribute('discNumber');

  var initiateGame = function(board) {

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
  };

  var printBoard = function() {
    boardArray.forEach(function(peg) {
      var discString = '--- ';
      peg.forEach(function(disc) {
        discString += disc + ' ';
      });
      console.log(discString);
    });
  };

  var getSizeOfTopDiscOnPeg = function(peg) {
    if (peg.length === 0) {
      return discNumber + 1;
    } else {
      return Number(peg[peg.length - 1]);
    }
  };

  var moveDisc = function(sourcePeg, targetPeg) {
    var sourcePegTopDiscSize = getSizeOfTopDiscOnPeg(boardArray[sourcePeg - 1]);
    var targetPegTopDiscSize = getSizeOfTopDiscOnPeg(boardArray[targetPeg - 1]);
    if (sourcePegTopDiscSize < targetPegTopDiscSize) {
      boardArray[targetPeg - 1].push(boardArray[sourcePeg - 1].pop());
      return "The move was successful.";
    } else {
      return "The move was not successful.";
    }
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
      return "The game has been won."
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
      return (board.getAttribute('winStatus')) ? "The game has been won." : "The game has not been won.";
    }
  };

  return {
    initiateGame: initiateGame,
    printBoard: printBoard,
    moveDisc: moveDisc,
    checkWinner: checkWinner
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
