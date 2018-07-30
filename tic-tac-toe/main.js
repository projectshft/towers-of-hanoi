// declare fundamental variables of the game in global scope
var gameBoard;
var player1 = 'x';
var player2 = 'o';
var currentPlayer;

/* initialGame function 'starts' the game every time */
var initialGame = function() {
  gameBoard = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"]
  ];
  currentPlayer = 1;
  printGameBoard();
};

/* printGameBoard function prints the array to console
and invokes the play function.nested for loop is
commented out because it threw off the visual display
of the array 'grid' and i haven't figured out solution yet */
var printGameBoard = function() {
  for (var i = 0; i < gameBoard.length; i++) {
    var row = gameBoard[i];
    console.log(row);
      // for (var j = 0; j < row.length; j++) {
      //   console.log(row[j]);
      // }
    }
    play();
};

/* play function takes user input and switches
 back and forth between users each time. it also
 replaces the gameBoard array values with the
 respective player values of "x" or "o" depending
 on the input they chose */
var play = function() {
  var playerRow = prompt("Enter a row :", "1, 2, or 3");
  var playerColumn = prompt("Enter a column :", "1, 2, or 3")
  if (currentPlayer === 1) {
    gameBoard[playerRow - 1][playerColumn - 1] = "x";
    currentPlayer = 2;
  } else {
    gameBoard[playerRow - 1][playerColumn - 1] = "o";
    currentPlayer = 1;
  };
  printGameBoard();
};

//invocation to test in console.log
initialGame();

/* checkWinner function is where I hit a snag
with time, so it is unfinished -
my plans with more time would be to concatenate
winCombo multi-dimensional arrays and assign
them all to a masterCombo variable. if that
worked, then my plan would have been to utilize
this masterCombo variable in an if/else statement
comparing to player 1 & 2 to determine the winner.
had no plans yet for calculating a "draw"...
*/
var checkWinner = function() {
  var winCombo1 = [[0, 0], [0, 1], [0, 2]];
  var winCombo2 = [[1, 0], [1, 1], [1, 2]];
  var winCombo3 = [[2, 0], [2, 1], [2, 2]];
  var winCombo4 = [[0, 0], [1, 0], [2, 0]];
  var winCombo5 = [[0, 1], [1, 1], [2, 1]];
  var winCombo6 = [[0, 2], [1, 1], [2, 2]];
  var winCombo7 = [[0, 0], [1, 1], [2, 2]];
  var winCombo8 = [[0, 2], [1, 1], [2, 0]];
  };
