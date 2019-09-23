var start = prompt ("Would you like to play Tower of Hanoi?");
var gameWon = false;
if (start.toLowerCase() == "yes") {
   var game = {
       board : [[3, 2, 1], [], []]
   }
}
else (alert("Have a good day!"));

var move = function(startPeg, endPeg){
   var printBoard = game.board.map(function(peg){
       console.log("---" + peg.join(" "));
       });
   startPeg = prompt("What peg would you like to move from?");
   endPeg = prompt("Which peg would you like to move to?");
   var diskToBeMoved = game.board[startPeg-1].pop();
   game.board[endPeg-1].push(startPeg-1);
   printBoard;
}