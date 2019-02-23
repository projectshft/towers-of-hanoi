var Game = function() {
  var board = [["5", "4", "3"],["2","1"],[]]
  var input;
  var output;

var makeBoard = board.map(function(position) {
  console.log(position);
  return position;
});

  // var drawBoard = function() {
  //   console.log(makeBoard[0]); //[][] for values, [] for peg(0,1,2), board for whole board as object
  //   console.log(makeBoard[1]);
  //   console.log(makeBoard[2]);
  // } 
  var moveDisc = function() {
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
    input = window.prompt("Move from which peg?");
    output = window.prompt("Move to which peg?");
    moveDisc();
  }

  return {
    userSelection: userSelection,
  }
}
 var gameLoop = Game();
 gameLoop.userSelection();