var pegs = [
  [3, 2, 1],
  [],
  []
];

var move = function(fromPeg, toPeg) {
  var disc = fromPeg.pop();
  toPeg.push(disc);
};

//Why does printing the whole array - console.log(pegs) - give identical
// results if move was called? It's passed by reference - do you want it
// array at the time of console.log, or at the time?

// var printBoard = function() {
//   console.log(pegs);
// }

var printBoard = function() {

  var printablePegs = pegs.map(function(peg) {
    var base = "---  "; //strings are immutable
    peg.forEach(function(disc) {
      base = base.concat(disc + " "); //so we reassign base each time
    })
    return base;
    });

  printablePegs.forEach(function(peg) {
    console.log(peg);
  });

  console.log("------------------------------")
}

printBoard();
move(pegs[0], pegs[2]);
printBoard();
