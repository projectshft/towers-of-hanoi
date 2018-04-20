// debugger;

class Game {
  constructor() {
    this.board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  }
  reset() {
    this.board = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    counter = 0;
  }


  checkWinner(gameBoard) {
    var position1 = game.board[0][0];
    var position2 = game.board[0][1];
    var position3 = game.board[0][2];
    var position4 = game.board[1][0];
    var position5 = game.board[1][1];
    var position6 = game.board[1][2];
    var position7 = game.board[2][0];
    var position8 = game.board[2][1];
    var position9 = game.board[2][2];
    if (position1 == "X" && position2 == "X" && position3 == "X") {
      console.log("X wins top across");
      game.reset();
    } else if (position1 == "O" && position2 == "O" && position3 == "O") {
      console.log("O wins top across");
      game.reset();
    } else if (position4 == "X" && position5 == "X" && position6 == "X") {
      console.log("X wins middle across");
      game.reset();
    } else if (position4 == "O" && position5 == "O" && position6 == "O") {
      console.log("O wins middle across");
      game.reset();
    } else if (position7 == "X" && position8 == "X" && position9 == "X") {
      console.log("X wins bottom across");
      game.reset();
    } else if (position7 == "O" && position8 == "O" && position9 == "O") {
      console.log("O wins bottom across");
      game.reset();
    } else if (position1 == "X" && position4 == "X" && position7 == "X") {
      console.log("X wins left-side down");
      game.reset();
    } else if (position1 == "O" && position4 == "O" && position7 == "O") {
      console.log("O wins left-side down");
      game.reset();
    } else if (position2 == "X" && position5 == "X" && position8 == "X") {
      console.log("X wins middle down");
      game.reset();
    } else if (position2 == "O" && position5 == "O" && position8 == "O") {
      console.log("O wins middle down");
      game.reset();
    } else if (position3 == "X" && position6 == "X" && position9 == "X") {
      console.log("X wins right-side down");
      game.reset();
    } else if (position3 == "O" && position6 == "O" && position9 == "O") {
      console.log("O wins right-side down");
      game.reset();
    } else if (position1 == "X" && position5 == "X" && position9 == "X") {
      console.log("X wins diagonal");
      game.reset();
    } else if (position1 == "O" && position5 == "O" && position9 == "O") {
      console.log("O wins diagonal");
      game.reset();
    } else if (position7 == "X" && position5 == "X" && position3 == "X") {
      console.log("X wins diagonal");
      game.reset();
    } else if (position7 == "O" && position5 == "O" && position3 == "O") {
      console.log("O wins diagonal");
      game.reset();
    } else if (counter >= 9) {
      console.log("TIE!");
      game.reset();
    }
  }
};
class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }

  playPosition1() {
    if (checkPositions().position1 != "X" && checkPositions().position1 != "O") {
      game.board[0][0] = this.symbol;
      counter++;
      game.checkWinner(game.board);

      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition2() {
    if (checkPositions().position2 != "X" && checkPositions().position2 != "O") {
      game.board[0][1] = this.symbol;
      counter++;
      game.checkWinner(game.board);

      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition3() {
    if (checkPositions().position3 != "X" && checkPositions().position3 != "O") {
      game.board[0][2] = this.symbol;
      counter++;
      game.checkWinner(game.board);

      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition4() {
    if (checkPositions().position4 != "X" && checkPositions().position4 != "O") {
      game.board[1][0] = this.symbol;
      counter++;
      game.checkWinner(game.board);

      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition5() {
    if (checkPositions().position5 != "X" && checkPositions().position5 != "O") {
      game.board[1][1] = this.symbol;
      counter++;
      game.checkWinner(game.board);

      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition6() {
    if (checkPositions().position6 != "X" && checkPositions().position6 != "O") {
      game.board[1][2] = this.symbol;
      counter++;
      game.checkWinner(game.board);

      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition7() {
    if (checkPositions().position7 != "X" && checkPositions().position7 != "O") {
      game.board[2][0] = this.symbol;
      counter++;
      game.checkWinner(game.board);

      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition8() {
    if (checkPositions().position8 != "X" && checkPositions().position8 != "O") {
      game.board[2][1] = this.symbol;
      counter++;
      game.checkWinner(game.board);
      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }
  playPosition9() {
    if (checkPositions().position9 != "X" && checkPositions().position9 != "O") {
      game.board[2][2] = this.symbol;
      counter++;
      game.checkWinner(game.board);
      console.log("This is the current game board: " + "\n" + game.board[0] + "\n" + game.board[1] + "\n" + game.board[2]);
    } else {
      console.log("That move is already taken!")
    }
  }

};

var checkPositions = function() {
  var position1 = game.board[0][0];
  var position2 = game.board[0][1];
  var position3 = game.board[0][2];
  var position4 = game.board[1][0];
  var position5 = game.board[1][1];
  var position6 = game.board[1][2];
  var position7 = game.board[2][0];
  var position8 = game.board[2][1];
  var position9 = game.board[2][2];

  return {
    position1: position1,
    position2: position2,
    position3: position3,
    position4: position4,
    position5: position5,
    position6: position6,
    position7: position7,
    position8: position8,
    position9: position9
  }
}

var counter = 0;

var game = new Game;
var player1 = new Player("X");
var player2 = new Player("O");
