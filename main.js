var myBoard = [[5, 4, 3, 2, 1], [], []];

var displayBoard = function (){
  myBoard.forEach(function (peg, index){
  console.log('--- ${peg.join("") || "-"}');
});
    console.log("---");
};

var isValidMove = function (source, dest) {
  var sourcePeg = myBoard [source - 1];
  var destPeg = myBoard[dest - 1];
  if (sourcePeg === 0) {
    console.log("Invalid Move: You cannot move a larger disc on top of a smaller one.");
    return false;
  } else if (destPeg.length !== 0 && sourcePeg[sourcePeg.length - 1] > destPeg[destPeg.length - 1]){
    console.log("")
    return false;
  }
  return true;
};