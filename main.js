// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
  let board = [[5, 4, 3, 2, 1],
[],
[]]

var logBoard = function(){
board.map(
    function (peg){
      var pegString = peg.toString();
      var pegNoCommas = pegString.replaceAll(',', ' ')
      console.log(`---${pegNoCommas}`)})}

var startGame = function(){logBoard();}
  
startGame();

var moveDisc = function (peg1, peg2) {
  // debugger;
  const sourcePeg = board[peg1-1]
  const targetPeg = board[peg2-1]
  if(sourcePeg[sourcePeg.length-1] > targetPeg[targetPeg.length-1])
    {console.error('You cannot put a larger disc on top of a smaller one!');}
  else {
   board[peg2-1].push(board[peg1-1].pop());

    logBoard();}
    checkWinner();
}

var checkWinner = function (){
  if(board[2].length === 5)
  {
    console.log('You win!')
  }
}
//look into substrings
//look into passing arguments in board.join(' ')
//look into "fetch" in
var winGame = function(){
  moveDisc(1, 3);
  moveDisc(1, 2)
  moveDisc(3, 2)
  moveDisc(1, 3)
  moveDisc(2, 1)
  moveDisc(2, 3)
  moveDisc(1, 3)
  moveDisc(1, 2)
  moveDisc(3, 2)
  moveDisc(3, 1)
  moveDisc(2, 1)
  moveDisc(3, 2)
  moveDisc(1, 3)
  moveDisc(1, 2)
  moveDisc(3, 2)
  moveDisc(1, 3)
  moveDisc(2, 1)
  moveDisc(2, 3)
  moveDisc(1, 3)
  moveDisc(2, 1)
  moveDisc(3, 2)
  moveDisc(3, 1)
  moveDisc(2, 1)
  moveDisc(2, 3)
  moveDisc(1, 3)
  moveDisc(1, 2)
  moveDisc(3, 2)
  moveDisc(1, 3)
  moveDisc(2, 1)
  moveDisc(2, 3)
  moveDisc(1, 3)
}

