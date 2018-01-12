const Board = function (x) {
x = [["1", "2", "3"],
["4", "5", "6"],
["7", "8", "9"]];
return x;
}

var gameBoard;
var playerTurn;
var moveCount = 0;

function printBoard() {
  var output = gameBoard[0].join("") + "\n" + gameBoard[1].join("") + "\n" + gameBoard[2].join("");
  console.log(output);
}

function newGame() {
  moveCount = 0;
  playerTurn = "O"
  gameBoard = new Board;
  console.log("\n\n\n\n\n" + "NEW GAME");
  printBoard();
  console.log("X goes first. Use 'play()' to take a turn.")
}

function checkWinner() {
  if (gameBoard[0][0] == gameBoard[0][1] && gameBoard[0][0] == gameBoard[0][2]) {
    console.log(gameBoard[0][0] + " wins!");
    newGame();
  } else if (gameBoard[1][0] == gameBoard[1][1] && gameBoard[1][0] == gameBoard[1][2]) {
    console.log(gameBoard[1][0] + " wins!");
    newGame();
  } else if (gameBoard[2][0] == gameBoard[2][1] && gameBoard[2][0] == gameBoard[2][2]) {
    console.log(gameBoard[2][0] + " wins!");
    newGame();
  } else if (gameBoard[0][0] == gameBoard[1][0] && gameBoard[0][0] == gameBoard[2][0]) {
    console.log(gameBoard[0][0] + " wins!");
    newGame();
  } else if (gameBoard[0][1] == gameBoard[1][1] && gameBoard[0][1] == gameBoard[2][1]) {
    console.log(gameBoard[0][1] + " wins!");
    newGame();
  } else if (gameBoard[0][2] == gameBoard[1][2] && gameBoard[0][2] == gameBoard[2][2]) {
    console.log(gameBoard[0][2] + " wins!");
    newGame();
  } else if (gameBoard[0][0] == gameBoard[1][1] && gameBoard[0][0] == gameBoard[2][2]) {
    console.log(gameBoard[0][0] + " wins!");
    newGame();
  } else if (gameBoard[2][0] == gameBoard[1][1] && gameBoard[2][0] == gameBoard[0][2]) {
    console.log(gameBoard[2][0] + " wins!");
    newGame();
  } else if (moveCount > 7) {
    console.log("Tie game!")
    newGame();
  } else {
    //If there is no winner, log which player goes next.
    if (playerTurn == "O") {
      console.log("X's turn");
    } else {
      console.log("O's turn");
    }
  }
}

function play(position) {
  position = position.toString();
  //track whose turn it is.
  if (playerTurn == "O") {
    playerTurn = "X";
  } else {
    playerTurn = "O";
  }
  //find the position on the board and replace it with the player character.
  if (gameBoard[0].indexOf(position) == -1 && gameBoard[1].indexOf(position) == -1 && gameBoard[2].indexOf(position) == -1 ) {
    console.log("Invalid move. You lose a turn.")
  } else if (position > 3 && position < 7) {
    gameBoard[1][gameBoard[1].indexOf(position)] = playerTurn;
  } else if (position > 6) {
    gameBoard[2][gameBoard[2].indexOf(position)] = playerTurn;
  } else if (position < 4) {
    gameBoard[0][gameBoard[0].indexOf(position)] = playerTurn;
  }
  moveCount += 1;
  printBoard();
  checkWinner();
}

newGame();
