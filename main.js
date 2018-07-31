var origBoard = [                    //original game board
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"]
  ];

var Player = function (token) {   //create a player constructor
  this.token = token;
};

  //all winning combinations
var winCombos = [
    ["0","1","2"],
    ["3","4","5"],
    ["6","7","8"],
    ["0","3","6"],
    ["1","4","7"],
    ["2","5","8"],
    ["0","4","8"],
    ["2","4","6"]
  ];

    //play function
var play = function (location, character) {
  for (var i = 0; i < origBoard.length; i++) {
    for (var j = 0; j < origBoard[i].length; j++) {
      if (origBoard[i][j] === location) {
        origBoard[i][j] = character;
      }
    }
  }
}

var newBoard = Array.from(origBoard);

  //start new game
// var startGame = function () {
//   console.log("Where would you like to go?", newBoard);
// }

  //check to see if a player has won
var checkWinner = function () {

    //check horizontal
  for (var i = 0; i < 3; i++){
    if (newBoard[i][0] === newBoard[i][1] && newBoard [i][0] === newBoard[i][2]) {
      return newBoard[i][0]
    }
  }
    //check vertical
  for (var j = 0; j < 3; j++){
    if (newBoard[0][j] === newBoard[1][j] && newBoard [0][j] === newBoard[2][j]) {
      return newBoard[0][j]
    }
  }
    //check diagonal top left to bottom right
  if (newBoard[0][0] === newBoard[1][1] && newBoard [0][0] === newBoard[2][2]) {
    return newBoard[0][0]
  }
    //check diagonal top right to bottom left
  if (newBoard[0][2] === newBoard[1][1] && newBoard [0][2] === newBoard[2][0]) {
    return newBoard[0][2]
  }
  else {
    return "It's a tie!"
  }
};

var player1 = new Player("O");      //create player 1
var player2 = new Player("X");      //create player 2

  //need to specify which player is playing somehow
play("1", "X");
console.log(origBoard)

// startGame();
console.log(player1);
