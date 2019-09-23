//Board 2D array - array with in array, disk on pegs, alert game play ("Welcome to Tower of Hanoi! Are you ready to be challenged?);
//if yes print Board
var play = prompt("Are you ready to be challanged by 'The Towers of Hanoi'? ");

  if (play() == "yes") {
    var gamePlay = {
      board : [[3, 2, 1], [], []]
    } else {
      alert("Maybe Next Time!"))
    }
// if yes, print board
    var towers = [
      [3, 2, 1],
      [],
      []
    ];

      //for(var i = 0, board -= 3, board -= 2, board -= 3 )

var startPeg = prompt("Which peg would you like to move from?")
var endPeg = prompt("Which peg would you like to move to?")
    function playerMove(startPeg, endPeg) {
//need to create function that will print after every play
        var printBoard = function() {
            concat.board + [i]
          //console.log("---" + board[2].join));
// 1 is in 2 index position, to join with which ever peg player tells to move to. Make prompt for disk?
  });
    console.log(startPeg);
    console.log(endPeg);
//send prompt
  var moveDisk = towers.board[startPeg-1].pop();
      towers.board[endPeg - 1].push(startPeg-1);
      printBoard;
}
playerMove();

/
//var checkWinner =
  //if(board = [],[3, 2, 1] []] or [], [], [3, 2, 1]] ) {
 //alert("Winner")
   // code will run if condition evaluates to true
//} else {
  //alert("Try again")
  // or "you cannot add a larger disc to a smaller disc"
