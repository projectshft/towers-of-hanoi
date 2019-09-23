// towers of Hanoi
var board = [
  ['3','2','1'],
  [],
  []
];

//create new arr from exisiting arr
var newBoard = board.map(function(element){
  return ("--- " + element.join(" "));
});

console.log(newBoard);


//player submits moves to game and game accepts/regects
var moveDisc = function(arr, ind) {
  var disc;
  var peg;
  if (peg === 0) {
    peg += 1;
 }
};

moveDisc(1,3)
console.log(moveDisc);

// check winner function to see if player has won the game.
checkWinner();
