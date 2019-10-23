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
//counter for moves
var moves = 0;



//create function to allow player to move discs around pegs 
//make sure larger discs can't be placed on smaller ones
function moveDisc(startPegPosition, endPegPosition) {
  //define startPeg and endPeg in terms of parameters
  var startPeg = board[startPegPosition];
  console.log("the starting peg is", startPeg);

  var lastDisconStartPeg = startPeg[startPeg.length - 1];
  var endPeg = board[endPegPosition];

  var legalMoveArray = legalMove(startPeg);


  if (legalMoveArray.includes(endPegPosition)) {
    startPeg.pop();
    endPeg.push(lastDisconStartPeg);
    console.log("That move was successful, board is now:");
    moves++;
    printBoard();
  } else {
    console.log("You cannot move a larger disc on top of a smaller one, board is still:");
    printBoard();
  }

  
};



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
};


var legalMove = function (start) {
  console.log(start);
    return board.filter(function (peg) {
      //filter through board and return pegs with the last disc on them smaller than the start peg's last disc
      //undefined accounts for the peg being empty of discs
      return peg[peg.length - 1] > start[start.length - 1] || peg[peg.length - 1] === undefined

    });
};    
    //Capturing user's move here

printBoard();
moveDisc(0,1);
moveDisc(0,2);
