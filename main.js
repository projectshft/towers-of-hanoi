//create board at starting position 
var board = [[5,4,3,2,1],[],[]];

//add pegs with map function in order to return array with same number of items after applying a function to it. I chose constant because it won't change unlike board.


var peg1 = board[0];
var peg2 = board[1];
var peg3 = board[2];

const addPegs = board.map(["---"],["---"],["---"]);
console.log(board);

//create function to allow player to move discs around pegs. Pop will remove the last disc on the player's chosen peg and push will add it to the new peg of their choice.
function moveDiscs (){
  endPeg.push(startPeg.pop())
};



//This function checks if a move violates a) no larger discs on smaller ones. and b)only top disc moved.
function isAllowed(oldPeg, newPeg) {
  if (newPeg.length-1) < (oldPeg.length-1)
  return "Sorry, that's an illegal move."
} else {
  moveDiscs();
  return "Successful move."
};



//check for a winning arrangement, tell player they've won when condition is met. reduce checks if the contents of each peg reaches 15, which is the sum of 1-5. 
let checkWin = newPeg.reduce((acc, val) => {
  return acc + val;
});

if (checkWin===15) {
  console.log("You've won!")
};

//this displays number of attempts
console.count(moveDiscs);
//reset board
console.log(board);
console.log(addPegs);
