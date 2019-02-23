var Game = function() {
  var makeBoard = [["5", "4", "3"],["2","1"],[]]

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
    if (input !== null && output !== null) {
      var a = makeBoard[input-1].length-1;
      var moveFromValue = makeBoard[input-1][a];
      makeBoard[input-1].splice([a],1);
      makeBoard[output-1].push(moveFromValue);
      console.clear(); 
      userSelection();
    }
  }
  var userSelection = function() {
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