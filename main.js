var game = function(numberOfPegs, numberOfDiscs) {

  /*
  Description of variables used in the game object:
    theBoard : This is the state of the board. It should only be able to be
      altered by the methods moveDisc(arg1, arg2) and resetBoard().
    numberOfMoves : tracker to keep track of all valid moves throughout the
      game play. This value should be printed to the console upon winning the
      game. The method resetBoard() reinitializes the variable to zero.
    numberOfPegsOnBoard : user-defined choice that initializes the board's
      number of pegs.
    numberOfDiscsOnBoard : user-defined choice that initializes the board's
      number of discs.
  */
  var theBoard = [];
  var numberOfMoves = 0;
  var numberOfPegsOnBoard = numberOfPegs;
  var numberOfDiscsOnBoard = numberOfDiscs;

  /*
  setBoard() is a private method that should set the board according to the user
  defined number of pegs and number of discs when the game object is created.
  setBoard() is also invoked by resetBoard() at any time by the user, or
  automatically when the game has been won.
  */
  var setBoard = function() {
    for (var peg = 0; peg < numberOfPegsOnBoard; peg++) {
      theBoard[peg] = [];
      for (var disc = 1; disc <= numberOfDiscsOnBoard; disc++) {
        if (peg === 0) {
          theBoard[peg].unshift(disc);
        }
      }
    }
  }
  setBoard();

  /*
  resetBoard should reset the game board to the orginal state of the board when
  the game was initialized, utilizing the same number of pegs and discs chosen
  by the user. Also, the total number of moves being tracked for the game is
  reset to zero. This method is called automatically when the game is won, or
  can be called at any time by the user.
  */
  var resetBoard = function() {
    numberOfMoves = 0;
    setBoard();
  }

  /*
  printBoard() is a user-accessible method that should print the current state
  of the game board, theBoard, automatically after every move attempt and board
  reset. This method should also be called by the user at any time.
  */
  var printBoard = function() {
    for (var i = 0; i < theBoard.length; i++) {
      var pegAsString = theBoard[i].map(function(element) {
        return element.toString();
      });
      var outputString = '--- ';
      for (var j = 0; j < pegAsString.length; j++) {
        outputString += pegAsString[j] + " ";
      }
      console.log(outputString);
    }
  }

  /*
  moveDisc(pegOrigin, pegDestination) is a user-accessible method to move discs from one
  peg (pegOrigin) to another peg (pegDestination). Only valid moves will increment the
  move counter, numberOfMoves.
  */
  var moveDisc = function(pegOrigin, pegDestination) {
    var validString = "That move was successful. Board is now:";
    var invalidString = "You cannot move a larger disc on top of a smaller one, board is still:";
    var pegOriginEmptyString = "The origin peg is empty. Choose a peg with a disc present.";

    var pegArrayOrigin = theBoard[pegOrigin - 1];
    var pegArrayDestination = theBoard[pegDestination - 1];
    var discOriginSize = pegArrayOrigin[pegArrayOrigin.length - 1];

    //
    if (pegArrayDestination.length === 0) {
      var discDestinationSize = 6;
    } else {
      var discDestinationSize = pegArrayDestination[pegArrayDestination.length - 1];
    }

    if (discOriginSize < discDestinationSize) {
      console.log(validString);
      theBoard[pegDestination - 1].push(theBoard[pegOrigin - 1].pop());
      numberOfMoves += 1;
      printBoard();
    } else if (discOriginSize === undefined) {
      console.log(pegOriginEmptyString);
      printBoard();
    } else {
      console.log(invalidString);
      printBoard();
    }
    if (checkWinner()) {
      console.log("Congrats! You won the game in " + numberOfMoves + " moves.");
      resetBoard();
      console.log("Play again. The board is reset to:");
      printBoard();
    }
  }

  /*
  help() is a method accessible by the user to help determine valid moves from
  a chosen peg. Handles the error of the chosen peg being empty.
  */
  var help = function(givenPeg) {

    var givenPegTopDiscValue = theBoard[givenPeg - 1][theBoard[givenPeg - 1].length - 1];
    var outputPegString = '';
    var errorMessageNoDiscOnPeg = "There is no disc on peg " + givenPeg + ". Try another peg.";

    //Check for no disc on the peg passed to help()
    if (givenPegTopDiscValue === undefined) {
      console.log(errorMessageNoDiscOnPeg);
    } else {

      //builds an array of valid peg moves called validPegs
      var validPegs = theBoard.filter(function(peg) {
        return (peg.length === 0 || (givenPegTopDiscValue < peg[peg.length - 1]))
      });

      /*
      validPegs is an array of every valid peg that the givenPeg can be moved to.
      However, the index of validPegs does not represent the actual pegs of the
      game board. The following code compares the validPegs to theBoard
      to build a string of valid peg numbers.
      */
      validPegs.forEach(function(peg){
        for(var i = 0; i < theBoard.length; i++ ){
          if (peg === theBoard[i]){
            outputPegString += ((i + 1) + " ");
          }
        }
      })
    
      if (outputPegString == "") {
        console.log("There are no allowed moves from peg " + givenPeg + ". Try another peg.");
      } else {
        console.log("From peg: " + givenPeg + ", valid moves are to peg(s) " + outputPegString);
      }
    }
    printBoard();
  }

  /*
  checkWinner() counts the numeric representations of the discs on peg 2 and 3.
  A value of 15 indicates that all 5 discs exist on that peg, and the game has
  been solved. checkWinner() is not accessible by the user.
  */
  var checkWinner = function() {

    var result = theBoard.reduce(function(state, peg) {
      if (!state) {
        return (peg.length == numberOfDiscsOnBoard && peg != theBoard[0]);
      } else {
        return true;
      }
    }, false);

    return result;
  }

  return {
    printBoard: printBoard,
    moveDisc: moveDisc,
    help: help,
    resetBoard: resetBoard
  }
}

//initialize the game
var game = game(3, 5);

//check printBoard() functionality
game.printBoard();

game.help(1);
//Solve the game in 31 moves
game.moveDisc(1, 2);
game.moveDisc(1, 3);
game.moveDisc(2, 3);
game.moveDisc(1, 2);
game.moveDisc(3, 1);
game.moveDisc(3, 2);
game.moveDisc(1, 2);
game.moveDisc(1, 3);
game.moveDisc(2, 3);
game.moveDisc(2, 1);
game.moveDisc(3, 1);
game.moveDisc(2, 3);
game.moveDisc(1, 2);
game.moveDisc(1, 3);
game.moveDisc(2, 3);
game.moveDisc(1, 2);
game.moveDisc(3, 1);
game.moveDisc(3, 2);
game.moveDisc(1, 2);
game.moveDisc(3, 1);
game.moveDisc(2, 3);
game.moveDisc(2, 1);
game.moveDisc(3, 1);
game.moveDisc(3, 2);
game.moveDisc(1, 2);
game.moveDisc(1, 3);
game.moveDisc(2, 3);
game.moveDisc(1, 2);
game.moveDisc(3, 1);
game.moveDisc(3, 2);
game.moveDisc(1, 2);

//Show invalid move where chosen peg has no disc
game.moveDisc(2, 1);

//test help()
game.help(1);

//test help() for an invalid input. Chosen peg has no disc.
game.help(2);

//sequence showing an invalid move where chosen peg's disc is larger than destination
game.moveDisc(1, 2);
game.moveDisc(1, 2);
game.moveDisc(1, 3);

//test help() for no move available
game.help(1);
