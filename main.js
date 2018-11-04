
var board = function () {

  var theBoard = [[5,4,3,2,1],[],[]];
  var numberOfMoves = 0;

  /*
  printBoard() is a user accessible method to print the current state of the
  game board, theBoard.
  */
  var printBoard = function () {
/*
    var buildPeg = function (array) {
      var pegStr = "";
      array.forEach(function (number){
        pegStr += number + " ";
      });
      return pegStr;
    }
*/
    var buildPeg = function (array) {
      var pegStr = "";
      array.map(function (number){
        pegStr += number + " ";
      });
      return pegStr;
    }   

    console.log("--- ", buildPeg(theBoard[0]), "\n--- ", buildPeg(theBoard[1]), "\n--- ", buildPeg(theBoard[2]));
  }

  /*
  moveDisc(pegOrig, pegDest) is a user-accessible method to move discs from one peg (pegOrig) to another
  peg (pegDest). Only valid moves will increment the move counter, numberOfMoves.
  */
  var moveDisc = function (pegOrig, pegDest) {
    var validStr = "That move was successful. Board is now:";
    var invalidStr = "You cannot move a larger disc on top of a smaller one, board is still:";
    var pegOrigEmptyStr = "The origin peg is empty. Choose a peg with a disc present.";
    var pegArrayOrig = theBoard[pegOrig - 1];
    var pegArrayDest = theBoard[pegDest - 1];
    var discOrigSize = pegArrayOrig[pegArrayOrig.length - 1];
    if (pegArrayDest.length === 0){
      var discDestSize = 6;
      } else {
        var discDestSize = pegArrayDest[pegArrayDest.length - 1];
      }
    if (discOrigSize < discDestSize) {
      console.log(validStr);
      theBoard[pegDest-1].push(theBoard[pegOrig-1].pop());
      numberOfMoves += 1;
      printBoard();
    } else if (discOrigSize === undefined) {
      console.log(pegOrigEmptyStr);
      printBoard();
    } else {
      console.log(invalidStr);
      printBoard();
    }
    if (checkWinner()) {
        console.log("Congrats! You won the game in " + numberOfMoves + " moves.");
        theBoard = [[5,4,3,2,1], [], []];
        numberOfMoves = 0;
        console.log("Play again. The board is reset to:");
        printBoard();
    }
  }

  /*
  help() is a method accessible by the user to help determine valid moves from a chosen
  peg. Handles the error of the chosen peg being empty.
  */
  var help = function (givenPeg) {
    var givenPegValue = theBoard[givenPeg-1][theBoard[givenPeg-1].length-1];
    var outputPegStr = '';
    if (givenPegValue === undefined){
      console.log("There is no disc on the chosen peg.");
    } else {
      var validPegs = theBoard.filter(function(boardPeg){
        return (boardPeg.length === 0 || (givenPegValue < boardPeg[boardPeg.length - 1]))
      });
      /*
      validPegs is an array of every valid peg that the givenPeg can be moved to.
      However, the index of validPegs does not represent the actual pegs of the game board.
      The following nested loop compares the validPegs to theBoard to build a string of
      valid peg numbers.
      */
      for (var i = 0; i < theBoard.length; i++){
        for (var j = 0; j < validPegs.length; j++){
          if (theBoard[i] === validPegs[j]){
            outputPegStr += ((i+1) + " ");
          }
        }
      }
      if (outputPegStr == "") {
        console.log("There are no allowed moves from the chosen peg.");
      } else {
      console.log("Valid moves are to peg(s) " + outputPegStr);
      }
    }

  }

/*
checkWinner() counts the numeric representations of the discs on peg 2 and 3.
A value of 15 indicates that all 5 discs exist on that peg, and the game has
been solved. checkWinner() is not accessible by the user.
*/
  var checkWinner = function () {
    var pegTwoCount = theBoard[1].reduce(function(sum, number){
      return sum + number;
    }, 0);
    var pegThreeCount = theBoard[2].reduce(function(sum, number){
      return sum + number;
    }, 0);
    return (pegTwoCount === 15 || pegThreeCount === 15);
  }

  return {
    printBoard: printBoard,
    moveDisc: moveDisc,
    help: help
  }
}

//initialize the game
var game = board();

//check printBoard() functionality
game.printBoard();

//Solve the game in 31 moves
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(2,1);
game.moveDisc(3,1);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(2,3);
game.moveDisc(2,1);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);
game.moveDisc(1,3);
game.moveDisc(2,3);
game.moveDisc(1,2);
game.moveDisc(3,1);
game.moveDisc(3,2);
game.moveDisc(1,2);

//Show invalid move where chosen peg has no disc
game.moveDisc(2,1);

//test help()
game.help(1);

//test help() for an invalid input. Chosen peg has no disc.
game.help(2);

//sequence showing an invalid move where chosen peg's disc is larger than destination
game.moveDisc(1,2);
game.moveDisc(1,2);
