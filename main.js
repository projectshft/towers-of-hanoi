var Game = function() { //
  var makeBoard = [["5","4","3","2","1"],[],[],[],[]]; //board array
  var movesCounter = 0; //tracks number of successful moves by the player

function drawBoard() { //function to handle rendering the board to the console
  var pegOne = "";
  var pegTwo = "";
  var pegThree = "";
  var pegFour = "";
  var pegFive = "";

  makeBoard = makeBoard.map(function(position,i,makeBoard) { //map function requirement - overwrites the makeBoard array each time drawBoard is invoked
    if (makeBoard[0][i]) {
      pegOne += makeBoard[0][i] + " ";
    } 
    if (makeBoard[1][i]) {
      pegTwo += makeBoard[1][i] + " ";
    } 
    if (makeBoard[2][i]) {
      pegThree += makeBoard[2][i] + " ";
    }
    if (makeBoard[3][i]) {
      pegFour += makeBoard[3][i] + " ";
    }
    if (makeBoard[4][i]) {
      pegFive += makeBoard[4][i] + " ";
    }
      return position; //returns full array to makeBoard variable
  });
    console.log(pegOne); 
    console.log(pegTwo);
    console.log(pegThree);
    console.log(pegFour);
    console.log(pegFive);
  }

  var moveDisc = function(input, output) { //Function that controls all peg movement once user input is received
    if (input !== null && output !== null) { //Input is home peg. Output is destination peg.
      var destinationRow = makeBoard[output-1];
      var homeLastElement = makeBoard[input-1].length-1; //index of last element in home peg array.
      var homeValue = makeBoard[input-1][homeLastElement]; //element value that is being moved from home peg.
      var destinationLastElement = makeBoard[output-1].length-1; //index of last element in destination peg.
      var destinationValue = makeBoard[output-1][destinationLastElement]; //element value of top disc in destination peg.
      var checkMove = validMoves(homeValue, destinationRow); //invokes validMoves.

        if (checkMove.toString() === destinationRow.toString() && homeValue != undefined || destinationValue == undefined && homeValue != undefined) {
          makeBoard[input-1].splice([homeLastElement],1);
          makeBoard[output-1].push(homeValue);
          movesCounter++;
          console.clear(); //clear to keep console log uncluttered
          console.log("The move was successful");
          userSelection();
            } else if (homeValue === undefined) {
                console.clear();
                console.log("There's no disc on that peg. Try again.")
                userSelection();
              } else if (destinationValue == homeValue) { //gives a warning if the user tries to move from an empty peg to another empty peg
                  console.log("You picked the same peg. Try again.")
                  userSelection();
                } else { //final incorrect move warning condition
                    console.clear();
                    console.log("You cannot move a larger disc onto a smaller one. Try again.");
                    userSelection();
                }
    }
  }

  function validMoves(home, dest) { //Uses filter to compare home peg to destination peg disc size.
    return dest.filter(function (value) {
     return home < value;
});
}

  var userSelection = function() { //need to fix allowing empty strings ""
    drawBoard();
    checkWinner();
      var input = window.prompt("Move from which peg?");
      var output = window.prompt("Move to which peg?");
    moveDisc(input, output);
  }
  
  function checkWinner() {
    var startIndex = 0; //Sets the location of the starting peg so we can ignore it to prevent winning by putting them discs back there.
    for (var i=0; i<makeBoard.length; i++) {
      if (makeBoard[i].length != 0 && i != startIndex) { //Loops through peg arrays to check to see if a non-starting peg has all the discs
        var win = makeBoard[i].reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });
  }
    } if (win == 54321) { //Array concats as "54321" since they are strings and not numbers
      alert("You win!! It took you " + movesCounter + " moves to win.");
      movesCounter = 0; //Resets move counter
      makeBoard = [["5","4","3","2","1"],[],[],[],[]]; //Resets board for next game
      console.clear();
      drawBoard();
    }
  }

  return {
    userSelection: userSelection, //Exposes a method to our gameLoop object to initiate the game.
  }
}

 var gameLoop = Game();
 gameLoop.userSelection(); //gameLoop is the object responsible for maintaining the state of the board
