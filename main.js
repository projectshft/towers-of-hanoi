var game = {

  gameDiscs: null,

  gamePegs: null,

  board: [
    []
  ],

  totalMoves: 0,

  // User is limited to 3-16 discs and 3-16 pegs.The upper limits are not quite
  // arbitrary - http://towersofhanoi.info/Animate.aspx limits the user to 16
  // pegs, and I did not want to deal with a number of discs exceeding the
  // alphabet, given that I label the pegs alphabetically and only accept
  // alphabetical input for moving discs.
  input: function(inputDiscs, inputPegs) {
    this.resetBoard();
    if (inputDiscs >= 3 && inputPegs >= 0 && inputDiscs <= 16 && inputPegs <= 16 && typeof inputDiscs === 'number' && typeof inputPegs === 'number') {
      this.gamePegs = inputPegs;
      this.gameDiscs = inputDiscs;
      console.log('Board is now:')
      this.populateBoard();
      this.printBoard();
    } else {
      console.log('Invalid input, board is still clear.');
    }

  },

  // A function for populating the board. Called by input()
  populateBoard: function() {

    var discNumber = this.gameDiscs;

    for (var i = 0; i < this.gameDiscs; i++) {
      this.board[0].push(discNumber);
      discNumber--;
    }

    for (var i = 0; i < this.gamePegs - 1; i++) {
      this.board.push([]);
    }

  },

  // A function for transforming user input from strings to numbers.
  // Called by move()
  // Accepts lowercase or uppercase letter strings, 'A' through 'P'.
  // Returns -1 if given invalid inputs.
  changeToNumber: function(letter) {

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

  //  A function that takes user input and changes the placement
  //  of "discs" on each peg. Syntactically-permitted user input is validated by
  //  changeToNumber(), while valid game input is validated by checkMove().
  //  printBoard() is called regardless of user input. If user input is valid,
  //  the board is mutated, totalMoves is incremented, the console messages
  //  the user and prints the new board, and checkWin() is called.
  move: function(fromInput, toInput) {

    console.log(fromInput + " --> " + toInput);
    var fromPeg = this.changeToNumber(fromInput);
    var toPeg = this.changeToNumber(toInput);

    if (toPeg === -1 || fromPeg === -1) {
      console.log("Invalid input, board is still: ");
      this.printBoard();

    } else if (this.checkMove(fromPeg, toPeg)) {
      var disc = this.board[fromPeg].pop();
      this.board[toPeg].push(disc);
      this.totalMoves++;
      console.log("That move was successful, board is now: ");
      this.printBoard();
      this.checkWin();

    } else {
      console.log("Invalid input, board is still: ");
      this.printBoard();
    }

  },

  // A function that checks whether the user's move is valid according to then
  // game's logic (no "peg" can be placed on top of a peg smaller than itself).
  checkMove: function(yourStartPeg, yourEndPeg) {

    var check = null; //boolean
    var getTopDisc = function(array) {
      if (array.length === 0) {
        return 0;
      } else {
        return array[array.length - 1];
      }
    }

    var onYourStartPeg = getTopDisc(this.board[yourStartPeg]);
    var toYourEndPeg = this.board[yourEndPeg];

    // filter returns an array with all possible moves
    if (onYourStartPeg === 0) {
      check = false; // user cannot move a nonexistent disc

    } else {
      var possibleMoves = this.board.filter(function(peg) {
        if (getTopDisc(peg) === 0) {
          return peg;
        } else if (getTopDisc(peg) > onYourStartPeg) {
          return peg;
        }
      });

      check = possibleMoves.includes(toYourEndPeg);
    }

    return check;
  },

  // A function called by move() to see if the user has won the game, by
  // checking the "weight" of all total disks on each peg.
  // If the user has won, winGame() is called.
  checkWin: function() {

    var totalDiscWeight = 0;
    var totalDiscs = this.gameDiscs;

    for (var i = 0; i < this.gameDiscs; i++) {
      totalDiscWeight += totalDiscs;
      totalDiscs--;
    }

    var weightOnPeg = this.board.reduce(function(array, currentPeg) {
      array.push(currentPeg.reduce(function(sum, currentDisc) {
        return sum += currentDisc;
      }, 0));
      return array;
    }, []);

    // Note that var i starts with 1, in order to prevent the User
    // from "winning" by moving the disks back onto the initial peg.
    for (var i = 1; i < this.gamePegs; i++) {
      if (weightOnPeg[i] === totalDiscWeight) {
        this.winGame();
      }
    }

  },

  // This function informs the user of a winning solution and prints
  // the number of (valid) moves the user took to achieve the solution.
  // It then prompts the user to input
  winGame: function() {

    console.log('You have won in ' + this.totalMoves + ' moves. Starting new game.');
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log('Please input the desired number of pegs and discs.')

  },

  resetBoard: function() {
    this.gameDiscs = null;
    this.gamePegs = null;
    this.board = [
      []
    ];
    this.totalMoves = 0;
  },

  // A function that prints the board using vertical columns. Example:
  //
  // 1   *   *
  // 2   *   *
  // 3   *   *
  // A   B   C
  // ============
  //
  // The board consists of a pegHeight dependent on user input and
  // a "base" whose lenght is dependent on user input, consisting of
  // alphabetical labels for each peg over "=".
  printBoard: function() {

    // Variables scoped to the entire function
    var pegHeight = this.gameDiscs;
    var baseHeight = 2; //
    var totalHeight = pegHeight + baseHeight;
    var space = "   ";
    var spaceBetweenPegs = ["==", space];
    for (var i = 0; i < pegHeight; i++) {
      spaceBetweenPegs.push(space);
    }

    // Mapping the current state of the board to a format with base and pegs
    // labels, and asterisks designaing empty space on the peg.
    var transformedBoard = this.board.map(function(peg, index) {
      var initialPegIndex = index;
      var initialPegLength = peg.length;
      var asterisksNeeded = pegHeight - initialPegLength;
      var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];

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

    //Splicing in space between "pegs" for readability
    var lengthBeforeSpacing = transformedBoard.length; // ran into a freakout her
    var counter = 1;
    for (var i = 0; i < lengthBeforeSpacing; i++) {
      transformedBoard.splice(counter, 0, spaceBetweenPegs);
      counter += 2;
    }

    // Mapping transformedBoard to a new set of arrays corresponding
    // to each "row" of verticalBoard, from top to bottom. Hence, var i
    // decrements in the outer for loop.
    var verticalBoard = [];

    for (var i = (totalHeight - 1); i > -1; i--) {
      var newColumn = "";
      for (var j = 0; j < transformedBoard.length; j++) {
        newColumn = newColumn.concat(transformedBoard[j][i]);
      }
      verticalBoard.push(newColumn);
    }

    for (var i = 0; i < verticalBoard.length; i++) {
      console.log(verticalBoard[i]);
    }
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"); //formatting
  }

}

console.log('Please input the desired number of pegs and discs.');

game.input(3, 3);


game.move('A', 'C');
game.move('a', 'b');

game.move('a', 'b'); // Invalid move
game.move('C', 'b');
game.move('A', 'c');
game.move(2, 1); // Invalid input
game.move('b', 'a');
game.move('b', 'c');
game.move('a', 'c');

game.input(4, 7);

game.move('A', 'C');
game.move('a', 'b');
game.move('a', 'b'); // Invalid move

game.move('C', 'b');
game.move('A', 'c');
game.move('C', 'A');
game.move('B', 'A');
game.move('B', 'A'); // Invalid move
game.move('A', 'C');
game.move('B', 'A');
game.move('C', 'A'); // Invalid move
