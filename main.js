var Game = function() {
  var makeBoard = [[],["3","2","1"],[]];


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
      var homeRow = makeBoard[input-1];
      var destinationRow = makeBoard[output-1];
      var homeLastElement = makeBoard[input-1].length-1; //index of last element in home peg array.
      var homeValue = makeBoard[input-1][homeLastElement]; //element value that is being moved from home peg.
      var destinationLastElement = makeBoard[output-1].length-1; //index of last element in destination peg.
      var destinationValue = makeBoard[output-1][destinationLastElement]; //element value of top disc in destination peg.
      var checkMove = validMoves(homeValue, destinationRow);
        if (checkMove.length !== 0 || destinationValue == undefined) {
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
    checkWinner();
      var input = window.prompt("Move from which peg?");
      var output = window.prompt("Move to which peg?");
    moveDisc(input, output);
  }
  
  function checkWinner() {
    var startIndex = 1; //sets the location of the starting peg
    for (var i=0; i<makeBoard.length; i++) {
      if (makeBoard[i].length != 0 && i != startIndex) {
    var win = makeBoard[i].reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
  }
    } if (win == 321) { //array concats as "321" since they are strings and not numbers
      alert("You win!!");
      makeBoard = [[],["3","2","1"],[]];
      console.clear();
      drawBoard();
    }
  }

  function validMoves(home, dest) {
       return dest.filter(function (value) {
        return home < value;
  });
}

  return {
    userSelection: userSelection,
  }
}

 var gameLoop = Game();
 gameLoop.userSelection();