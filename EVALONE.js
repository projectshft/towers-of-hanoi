//create board array at starting position
var board = [
    [5, 4, 3, 2],
    [1],
    []
  ];
  console.log(board);
  
  
  //map through board and add pegs
  var printBoard = function () {
    var printedBoard = board.map(function (peg) {
      return "---" + peg.join(" ");
    });
  
    printedBoard.forEach(function (i) {
      console.log(i);
    });
  }
  var moves = 0;
  
  
  //create function to allow player to move discs around pegs 
  //make sure larger discs can't be placed on smaller ones
  function moveDisc(startPegPosition, endPegPosition) {
    //define startPeg and endPeg in terms of parameters
    var startPeg = board[startPegPosition];
    console.log("the starting peg is", startPeg);
  
    var lastDisconStartPeg = startPeg[startPeg.length - 1];
    var endPeg = board[endPegPosition];
  
    //conditional logic
    //filter somewhere in here
    if (startPeg[startPeg.length - 1] > endPeg[endPeg.length - 1]) {
      console.log("You cannot move a larger disc on top of a smaller one, board is still:");
      printBoard();
    } else {
      startPeg.pop();
      endPeg.push(lastDisconStartPeg);
      return "That move was successful, board is now:"
      moves++;
      console.log(moveDisc(board));
    }
  };
  
  //Capturing user's move here
  // console.log (moveDisc(0,1));
  
  //function checking for a winning arrangement, 
  //tell player they've won when condition is met.
  //reduce checks if the contents of each peg reaches the sum of 1-5. 
  
  let checkWinner = function () {
  let checkWin = newPeg.reduce(function (total, num) {
  return total + num;
  }, 0);
  
  if (checkWin === 15) {
  console.log(`You've won! It took you ${moves} to win!`);
  //reset board
  console.log(printBoard);
  } else {
  console.log("What's your next move?");
  }
  
  // //this displays number of attempts
  console.count(moveDiscs);
  }
  
  
  
  