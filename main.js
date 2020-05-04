var game = {

  gameDiscs: null,

  gamePegs: null,

  gameDiscWeight: null,

  board: [
    []
  ],

  totalMoves: 0,

  input: function(inputDiscs, inputPegs) {

    this.gamePegs = inputPegs;
    this.gameDiscs = inputDiscs;
    this.setGameDiscWeight();
    this.populateBoard();

  },

  setGameDiscWeight: function() {

    for (var i = 0; i < this.gameDiscs.length; i++) {
      this.gameDiscWeight += this.gameDiscs[i];
    }

  },

  populateBoard: function() {

    var remainingDiscs = this.gameDiscs;
    var weight = 0; //stop here

    for (var i = 0; i < this.gameDiscs; i++) {
      this.board[0].push(remainingDiscs);
      remainingDiscs--;
    }

    for (var i = 0; i < this.gamePegs - 1; i++) {
      this.board.push([]);
    }

  },

  translate: function(letter) {

    var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
    var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
    var number = undefined;

    if (letter == 'a' || letter == 'b' || letter == 'c' || letter == 'd' || letter == 'e' || letter == 'f' || letter == 'g' || letter == 'h' || letter == 'i' || letter == 'j' || letter == 'k' || letter == 'l' || letter == 'm' || letter == 'n' || letter == 'o' || letter == 'p') {
      number = lowercase.indexOf(letter);

    } else if (letter == 'A' || letter == 'B' || letter == 'C' || letter == 'D' || letter == 'E' || letter == 'F' || letter == 'G' || letter == 'H' || letter == 'I' || letter == 'J' || letter == 'K' || letter == 'L' || letter == 'M' || letter == 'N' || letter == 'O' || letter == 'P') {
      number = uppercase.indexOf(letter);

    } else {
      number = -1;
    }

    return number;

  },

  move: function(fromInput, toInput) {

    var fromPeg = this.translate(fromInput);
    var toPeg = this.translate(toInput);

    if (toPeg === -1 || fromPeg === -1) {
      console.log("Invalid input, board is still: ");
      this.printBoard();

    } else if (this.checkMove(fromPeg)) {
      var disc = this.board[fromPeg].pop();
      this.board[toPeg].push(disc);
      this.totalMoves++;
      console.log("That move was successful, board is now: ");
      this.printBoard();
      this.checkWin();

    } else {
      console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
      this.printBoard();
    }

  },

  possibleMoves: function(startPeg) {
    var onStartPeg = this.board[startPeg]; //disc = [3]

    var getTopDisc = function(array) {
      if (array.length === 0) {
        return 0;
      } else {
        return array[array.length - 1];
      }
    }

    var allMoves = this.board.filter(function(peg) {
      if (getTopDisc(peg) === 0) {
        return peg;
      } else if (getTopDisc(peg) > getTopDisc(onStartPeg)) {
        return peg;
      }
    });

    return allMoves;

  },

  checkMove: function(startPeg) {

    if (this.possibleMoves(startPeg).length === 0) {
      return false;
    } else {
      return true;
    }
  },

  checkWin: function() {

    var discWeights = this.board.reduce(function(array, currentPeg) {
      array.push(currentPeg.reduce(function(sum, currentDisc) {
        return sum += currentDisc;
      }, 0));
      return array;
    }, []);

    for (var i = 0; i < discWeights.length; i++) {
      if (discWeights[i] === 6) {
        this.winGame();
      }
    }

  },

  winGame: function() {

    console.log('You have won in ' + this.totalMoves + ' moves. Starting new game.');
    this.resetBoard();

    console.log("------------------------------");
    console.log('Please enter the desired number of pegs and discs.')

  },

  resetBoard: function() {
    this.gameDiscs = null;
    this.gamePegs = null;
    this.gameDiscWeight = null;
    this.board = [
      []
    ];
    this.totalMoves = 0;
  },

  printBoard: function() {

    // Vertical array looks.
    // 1   *   *
    // 2   2   *
    // 3   *   *
    // A   B   C
    // ============ // three "=" for each column

    // What if I just concatenate a string, and shift each new one onto
    // a new array? Then, I console.log each line, starting at the end of
    // the array.

    // Then, the last step. A double for loop.
    // For each "peg"[i]
    // And then, for each "disk" - peg[i[that peg's. length minus 1]]
    // We console log the last element (length-1) of each array (from 0 - n).
    // No, we concatenate a string with each element, and console log that.

    var pegHeight = this.gameDiscs;
    var baseHeight = 2;
    var space = "   ";
    var spaceBetweenPegs = ["==", space];
    for (var i = 0; i < pegHeight; i++) {
      spaceBetweenPegs.push(space);
    }

    var verticalBoard = this.board.map(function(peg, index) {
      var initialPegIndex = index;
      var initialPegLength = peg.length;
      var asterisksNeeded = pegHeight - initialPegLength;
      var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

      // Initial translation
      var transformedPeg = ["=="]; //
      transformedPeg.push(uppercase[initialPegIndex]);
      if (initialPegLength !== 0) {
        for (var i = 0; i < initialPegLength; i++) {
          transformedPeg.push(peg[i].toString());
        }
      }
      if (asterisksNeeded !== 0) {
        for (var i = 0; i < asterisksNeeded; i++) {
          transformedPeg.push("*");
        }
      }
      return transformedPeg;
    });

    //Adding spaces for readability
    var lengthBeforeSpacing = verticalBoard.length; // ran into a freakout her
    var counter = 1;
    for (var i = 0; i < lengthBeforeSpacing; i++) {
      verticalBoard.splice(counter, 0, spaceBetweenPegs);
      counter += 2;
    }

    // turning things the right way
    var printVertical = [];

    for(var j = (pegHeight + baseHeight - 1); j > -1; j-- ) {
      var newColumn = "";
      for(var i = 0; i < verticalBoard.length; i++) {
        newColumn = newColumn.concat(verticalBoard[i][j]);
      }
      printVertical.push(newColumn);
    }

    for (var i = 0; i < printVertical.length; i++) {
      console.log(printVertical[i]);
    }

  }

}

game.input(3, 3);
game.printBoard();

game.move('A', 'C');
game.move('a', 'b');

game.move('a', 'b'); //bad

game.move('C', 'b');
game.move('A', 'c');
game.move(2, 1);
game.move('b', 'a');
game.move('b', 'c');
game.move('a', 'c');

game.input(4, 7);
game.printBoard();

// How could I "enclose" this game such that the user
// only has public functions move and startNewGame?
