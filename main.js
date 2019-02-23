var Game = function() {
  var makeBoard = [[],["3","2","1"],[]]

function drawBoard() {
  var pegOne = "";
  var pegTwo = "";
  var pegThree = "";
  makeBoard = makeBoard.map(function(position,i,makeBoard) {
    if (makeBoard[0][i]) {
      pegOne += makeBoard[0][i] + " ";
    } 
    if (makeBoard[1][i]) {
      pegTwo += makeBoard[1][i] + " ";
    } 
    if (makeBoard[2][i]) {
      pegThree += makeBoard[2][i] + " ";
    }
  return position;
});
  console.log(pegOne);
  console.log(pegTwo);
  console.log(pegThree);
}

  var moveDisc = function(input, output) {
    if (input !== null && output !== null) { //Input is home peg. Output is destination peg.
      var homeLastElement = makeBoard[input-1].length-1; //index of last element in home peg array.
      var homeValue = makeBoard[input-1][homeLastElement]; //element value that is being moved from home peg.
      var destinationLastElement = makeBoard[output-1].length-1; //index of last element in destination peg.
      var destinationValue = makeBoard[output-1][destinationLastElement]; //element value of top disc in destination peg.
        if (homeValue < destinationValue || (destinationValue === undefined && homeValue !== undefined)) {
          console.log(homeValue, destinationValue);
          makeBoard[input-1].splice([homeLastElement],1);
          makeBoard[output-1].push(homeValue);
          console.clear(); 
          userSelection();
            } else if (homeValue === undefined) {
                console.clear();
                console.log("There's no disc on that peg. Try again.")
                userSelection();
              } else {
                  console.clear();
                  console.log("You cannot move a larger disc onto a smaller one. Try again.");
                  userSelection();
              }
    }
  }
  var userSelection = function() { //need to fix allowing empty strings ""
    drawBoard();
      var input = window.prompt("Move from which peg?");
      var output = window.prompt("Move to which peg?");
    moveDisc(input, output);
  }

  return {
    userSelection: userSelection,
  }
}
 var gameLoop = Game();
 gameLoop.userSelection();
