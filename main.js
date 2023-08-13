var boards = [
  [5, 4, 3, 2, 1],
  [],
  [] 
  
];


var gameBoard = function(){
  boards.forEach(function(peg,index){
    var index = index += 1;
    
    console.log("Peg " + index + ": " + peg.join(" "))
  })
  return gameBoard
};
  
  
var moveRing = function(current, target){
  var currentPeg = boards[current];
  var targetPeg = boards[target];

  if (currentPeg.length === 0){
    console.log("Invalid move, no rings on peg. The board is still:");
    gameBoard();
    return;
  }

  var movingRing = currentPeg[currentPeg.length - 1];
  if (targetPeg.length === 0 || movingRing < targetPeg[targetPeg.length - 1]){
    targetPeg.push(currentPeg.pop());
    console.log("Successful move, the board is now:")
    
  } else {
    console.log("Larger Rings can't be placed onto smaller rings, the board is still:")
  }
  gameBoard();
}


var checkWinner = function(){
  if(boards[2].length === 5)
  console.log("Game Over, you win!")
  return checkWinner;
}

checkWinner();


