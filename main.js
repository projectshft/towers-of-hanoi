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
 back and forth between users each time */
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

// for every time x is equal to one of the winning combos, console.log Winner!
//for every time o is equal to one of the winning combos
var checkWinner = function() {
  var winningCombos1 = [[0, 0], [0, 1], [0, 2]];
  var winningCombos2 = [[1, 0], [1, 1], [1, 2]];
  var winningCombos3 = [[2, 0], [2, 1], [2, 2]];
  var winningCombos4 = [[0, 0], [1, 0], [2, 0]];
  var winningCombos5 = [[0, 1], [1, 1], [2, 1]];
  var winningCombos6 = [[0, 2], [1, 1], [2, 2]];
  var winningCombos7 = [[0, 0], [1, 1], [2, 2]];
  var winningCombos8 = [[0, 2], [1, 1], [2, 0]];
  var playerResults = function() {
    if (gameBoard === winningCombos1 === player1)
  }

};
