
var Board = function() {
  var pegs = [];
  var moves = 0;
  var numPegs = 0;

  var addPeg = function(peg) {
    pegs.push(peg);
    numPegs++;
  };

  var listPegs = function() {
    var boardString = ''
    pegs.map(function(peg) {
      return boardString += "--- " + peg + "\n"
    })
    console.log(boardString.replace(/,/g, ' '))
  };

  var move = function(source, target) {
    source = source -1;
    target = target -1;
    if (this.testMove(source, target)){
    var tempDisc = pegs[source].pop();
    pegs[target].push(tempDisc);
    moves++;
    if (this.checkWinner()) {
      console.log('You won! Moves: ' + moves)
      moves = 0;
      newGame();
    }
    else {
      console.log('Move successful! Moves: ' + moves);
      this.listPegs();
    }

  }
  else {
    console.log('Move unsuccessful.  Please try again: ' + moves)
  }
  }

  var testMove = function(src, tgt) {
    var tempSrc = pegs[src].pop();
    if (tempSrc === undefined) {
      return false
    }
    tempTgt = pegs[tgt].pop();
    if (tempSrc > 0) {
          pegs[src].push(tempSrc);
    }
    if (tempTgt > 0) {
    pegs[tgt].push(tempTgt)
    }
    if (tempSrc < tempTgt || tempTgt === undefined) {
      return true
    }
    return false
  }

  var checkWinner = function() {
    for (i = 1; i < pegs.length; i++) {
      if (pegs[i].length === numPegs) {
        return true;
      }
    }
    return false;
  }

  return {
    move: move,
    addPeg: addPeg,
    listPegs: listPegs,
    testMove: testMove,
    checkWinner: checkWinner
  };
};

var newGame = function() {
  var peg1 = [3, 2, 1],
  peg2 = [],
  peg3 = [],
  board = new Board();

  board.addPeg(peg1);
  board.addPeg(peg2);
  board.addPeg(peg3);

  board.listPegs();
}

var peg1 = [3, 2, 1],
peg2 = [],
peg3 = [],
board = new Board();

board.addPeg(peg1);
board.addPeg(peg2);
board.addPeg(peg3);

board.listPegs();
