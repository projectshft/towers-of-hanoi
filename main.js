
//creating function to wrap game in
const Towers = function() {
  let board = [["3", "2", "1"],[],[]];
  let checkWinner;
  let peg;
  let disc;
  //counter function
  let moves = 0;


  var printBoard = function() {
    alert('The starting board is shown on your console:')
    return board.map(function (peg) {
      console.log("---", ...peg);

    });
  };
  //starting board print test - works in console
  printBoard();


  var moveDisc = function(startPeg, endPeg) {  
    var userInput = board[startPeg].pop();
    board[endPeg - 1].push(userInput);
    //test to make sure userInput works when moving disc
    console.log("worked!");
    printBoard();
    moves +- 1;



  //reducer function from Array.prototype.reduce
    var checkWinner = board[endPeg].reduce(function(accumulator, currentValue) {
      if (board[endPeg] !== board[0]) { 
      return accumulator + currentValue;
    } else console.log("You are a winner!");
    })
  };

//gives access to moveDisc function
  return {
    moveDisc: moveDisc
  };
};


var newGame = Towers();

