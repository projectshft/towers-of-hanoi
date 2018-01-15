var startBoard = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var board = [];
var player1 = "X";
var player2 = "O";
var messages = {
  welcome: "Welcome to Tic Tac Toe!",
  player1First: "Player One goes first! You are 'X'. Choose an unoccupied position from the board!",
  player2First: "Player Two goes next! You are 'O' Choose an unoccupied position from the board!",
  player1Next: "Player One's turn again!",
  player2Next: "Player Two's turn again!",
  wrongMove: "That move is not allowed, try again."
}
var message = "";
var player = "";
var moves = 0;

var printBoard = function(board) {
  var line = [];
  for (i = 0; i < board.length; i++) {
    line[i] = board[i][0].toString() + board[i][1].toString() + board[i][2].toString();
  }
  return (line[0] + '\n' + line[1] + '\n' + line[2]);
};

var startGame = function() {
  startBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  board = startBoard.slice(0);
  player = player1;
  moves = 0;
  message = messages.welcome;
  console.log(message);
  console.log("");
  message = messages.player1First;
  console.log(printBoard(board))
  position1 = prompt(message + '\n' + printBoard(board));
  play(position1);
};

var play = function(position) {
  if (!position) {
    console.log(printBoard(board));
    return;
  }
  var spot = [];
  for (i = 0; i < board.length; i++) {
    spot[i] = board[i].findIndex(function(element) {
      return (element == position);
    });
  }
  spot2 = spot.findIndex(function(element) {
    return element > -1;
  });
  if (spot2 > -1 && player == player1) {
    console.log("Player One chose position " + board[spot2][spot[spot2]]);
    console.log(printBoard(board));
    console.log("");
    board[spot2][spot[spot2]] = "X";
  } else if (spot2 > -1 && player == player2) {
    console.log("Player Two chose position " + board[spot2][spot[spot2]]);
    console.log(printBoard(board));
    console.log("");
    board[spot2][spot[spot2]] = "O";
  } else {
    message = messages.wrongMove;
    play(prompt(message + '\n' + printBoard(board)));
  }
  moves += 1;
  printBoard(board);
  console.log();
  playerControl();
};

var playerControl = function() {
  if (player == player1) {
    player = player2;
    if (moves < 2) {
      message = messages.player2First;
    } else message = messages.player2Next;
  } else {
    player = player1;
    if (moves < 1) message = messages.player1First;
    else message = messages.player1Next;
  }
  if (checkWin()) {
    if (confirm(checkWin() + '\n' + printBoard(board) + '\n' + "Would you like to play again?")) {
      console.log(checkWin())
      startGame()
    } else return
  } else play(prompt(message + '\n' + printBoard(board)));
};

var checkWin = function() {
  boardArr = printBoard(board).replace(/\n/g, "").split("");
  var checkStr = "";
  var winStates = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  for (var i = 0; i < winStates.length; i++) {
    checkStr = boardArr[winStates[i][0] - 1] + boardArr[winStates[i][1] - 1] + boardArr[winStates[i][2] - 1];
    if (checkStr == "XXX") {
      return "Player One Wins!!";
    } else if (checkStr == "OOO") {
      return "Player Two Wins!!";
    }
  }
  if (moves == 9) {
    return "It's a Tie!";
  }
};

startGame();
