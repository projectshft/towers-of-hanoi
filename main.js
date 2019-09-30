// game Towers of Hanoi

// Begin board using a 2d array
let startBoard = [
  ['3','2','1'],
  [],
  []
];

//Print board horizontally using .map()
const printBoard = startBoard.map(function(element){
  return ("--- " + element.join(" "));
});

console.log(printBoard);


var gamePlay = {
  pegs: 3,
  moves: 0,

//player submits moves to game and game accepts/regects
  moveDisc: function(startingPeg, endingPeg) {
       var lastDiscOnStartingPeg = startBoard[startingPeg].pop();
       console.log("Board state after moving first disc", startBoard);
       startBoard[endingPeg].push(lastDiscOnStartingPeg);
       console.log("Board State after placing disc on new peg", startBoard);
       console.log('Disc to move is', lastDiscOnStartingPeg);
     }

 };

  var moves = startBoard.filter(function(move){
       return move.moves;

});

console.log(moves);
console.log(gamePlay.moveDisc(0,2));


// check winner function to see if player has won the game.
//checkWinner();
