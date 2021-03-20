var Board = function () {
  this.pegs = [
    [5, 4, 3, 2, 1],
    [],
    []
  ],
  this.moves = 0;
};


Board.prototype.moveDisc = function (startPeg, endPeg) {
  var startPegMinOne = startPeg -= 1;
  var endPegMinOne = endPeg -= 1;
  var indexOfDiscToBeMoved = (this.pegs[startPeg].length) -1;
  var indexOfDiscToCompare = (this.pegs[endPeg].length) -1;

  var startingPeg = this.pegs[startPegMinOne];
  var endingPeg = this.pegs[endPegMinOne];
  var discToBeMoved = startingPeg[indexOfDiscToBeMoved];
  var discToCompareTo = endingPeg[indexOfDiscToCompare];

  var removeStartPegLastDiscFunction = function() { 
    startingPeg.pop();
  };

  var placeDisc = function(disc) {
    endingPeg.push(disc);
  };

  if (discToCompareTo === undefined) {
    removeStartPegLastDiscFunction();
    placeDisc(discToBeMoved);
    console.log("Good move!")
  } else if (discToCompareTo > discToBeMoved) {
    removeStartPegLastDiscFunction();
    placeDisc(discToBeMoved);
    console.log("Good move!");
  } else {
    console.log('Bad move! Try something else!');
  };
  this.moves++;
  this.showCurrentBoard();
  return `Attempts: ${this.moves} \n` + this.checkForWin();
};

Board.prototype.showCurrentBoard = function () {
  var pegsArray = this.pegs.map(function (pegArray, i) {
      return `Peg ${i+1} --- ${pegArray.join(' ')} \n`;
  });
  pegsArray.map(function (value) {
    console.log(value);
  });
  return "There is the current board.";
};

Board.prototype.checkForWin = function () {
  var solution = "54321";
  var checkOne = Object.values(this.pegs[1]).join('');
  var checkTwo = Object.values(this.pegs[2]).join('');
  var message = "Keep playing";
  if (checkOne === solution || checkTwo === solution) {
    message = "You win! The board has been reset.";
    this.resetBoard();
    return message;
  } 
  return message;
};

Board.prototype.resetBoard = function () {
  this.pegs = new Board().pegs;
  this.moves = new Board().moves;
  return "Board reset";
};


console.log("Welcome to Towers of Hanoi. Use the following commands to play! \n towers.moveDisc(peg number, peg number) \n towers.showCurrentBoard() \n towers.checkForWin() \n towers.resetBoard()")

var towers = new Board();

/************************************************************** 
Gameplay:

this.showCurrentBoard()
this.checkForWin()
this.moveDisc(num, num)
this.resetBoard()


Solution:

towers.moveDisc(1,3)
towers.moveDisc(1,2)
towers.moveDisc(3,2)
towers.moveDisc(1,3)
towers.moveDisc(2,1)
towers.moveDisc(2,3)
towers.moveDisc(1,3)
towers.moveDisc(1,2)
towers.moveDisc(3,2)
towers.moveDisc(3,1)
towers.moveDisc(2,1)
towers.moveDisc(3,2)
towers.moveDisc(1,3)
towers.moveDisc(1,2)
towers.moveDisc(3,2)
towers.moveDisc(1,3)
towers.moveDisc(2,1)
towers.moveDisc(2,3)
towers.moveDisc(1,2)
towers.moveDisc(2,3)
towers.moveDisc(2,1)
towers.moveDisc(3,2)
towers.moveDisc(3,1)
towers.moveDisc(2,1)
towers.moveDisc(2,3)
towers.moveDisc(1,3)
towers.moveDisc(1,2)
towers.moveDisc(3,2)
towers.moveDisc(1,3)
towers.moveDisc(2,1)
towers.moveDisc(2,3)
towers.moveDisc(1,3)
**************************************************************/
