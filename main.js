/*
1. Prompt user for starting peg and ending peg
2. validate move
3. If move is allowed, move disc, otherwise don't and log error
4. After successful move, check to see if game is won
5. Rinse/repeat for each move until the game is won
*/


console.log('Life is a game and you are the player.'+' As you master the game, so you also create it.');

// prompt user for starting peg and ending peg
// store user input in array
// convert user input value into ith index in board
// push array into moveA, moveB

// create board array
var board = [['3', '2', '1'], [], []];
  //console.log(board);
  //console.log(board.length);

//object to maintain state of the state of the board
var StateOfBoard = function() {
  var board = [['3', '2', '1'], [], []];


  var printBoard = function(peg) {
    console.log('---' + peg);
  };
  board.map(printBoard);


  return {
    moveDisc: moveDisc,
    printBoard: printBoard
  };
};

var board = StateOfBoard();

board.moveDisc(8);
board.printBoard();

/*
// checkMove function checks if move is valid
var checkMove = stateOfBoard.find(function(moveA,moveB) {
  //if stateOfBoard.peg.bool = true && pegs
    //move disc

  //condition #1: That move was successful, board is now:
  //condition #2: You cannot move a larger disc on top of a smaller one, board is still:
  //if last disc on moveA > last disc on moveB
  //console.log 'can not move'

  //keep track of # of moves each time checkMove is invoked
});
*/

/*
// moveDisc function to take in player submitted moves
var moveDisc = function() {
  // checkMove function checks if move is valid
    //if moveA = true; //peg has disc

    //if state == true;
      board.pop();
      //board[0].push(moveB);

      console.log(peg);
};

//board.moveDisc(1,2);



/*
// checkWinner function checks if won
//var checkWinner = takes result of moveDisc
  //if sum = 6
  //reduce method
*/
