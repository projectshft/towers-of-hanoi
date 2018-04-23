var Game = {
  init: function(player1, player2) {
    this.player1 = { name: player1, char: "X"};
    this.player2 = { name: player2, char: "O"};
    this.curPlayer = this.player1;
    this.board = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    this.turns = 0;
    this.coords = {
      "1": [0,0],
      "2": [0,1],
      "3": [0,2],
      "4": [1,0],
      "5": [1,1],
      "6": [1,2],
      "7": [2,0],
      "8": [2,1],
      "9": [2,2],
    };
  },

  printBoard: function() {
    this.board.forEach(function(arr) {
      console.log(arr[0], arr[1], arr[2]);
    });

    console.log("Make your move " + this.curPlayer.name + "(" + this.curPlayer.char + ")");
  },

  play: function(playerSelection) {
    var char = this.curPlayer.char,
        x = this.coords[playerSelection][0],
        y = this.coords[playerSelection][1],
        boardVal = this.board[x][y];

    if (playerSelection > 0 && playerSelection < 10) {
      // if selected boardVal = playerSelection, change boardVal to playerSelection
      if (playerSelection === boardVal) {
        this.board[x][y] = char;

        this.turns ++;

        // check for winner
        if (this.checkWinner()) {
          console.log("Congratulations " + this.curPlayer.name + ", you Win!");
          this.rematch();
        }
        else if (this.turns >= 9) {
          console.log("Game over, nobody wins");
        }
        else {
          this.switchPlayer();
          this.printBoard();
        }
      } else {
        console.log("Spot taken, pick another position");
      }
    } else {
      console.log("Please make a valid selection 1 - 9");
    }
  },

  switchPlayer: function() {
    if (this.curPlayer == this.player1) {
      this.curPlayer = this.player2;
    } else {
      this.curPlayer = this.player1;
    }
  },

  rematch: function() {
    this.init(this.player1, this.player2);
    this.start();
  },

  checkWinner: function() {
    var position1 = this.board[0][0];
    var position2 = this.board[0][1];
    var position3 = this.board[0][2];
    var position4 = this.board[1][0];
    var position5 = this.board[1][1];
    var position6 = this.board[1][2];
    var position7 = this.board[2][0];
    var position8 = this.board[2][1];
    var position9 = this.board[2][2];

    if (position1 == position2 && position2 == position3 ||
        position4 == position5 && position5 == position6 ||
        position7 == position8 && position8 == position9 ||
        position1 == position4 && position4 == position7 ||
        position2 == position5 && position5 == position8 ||
        position3 == position6 && position6 == position9 ||
        position1 == position2 && position2 == position3 ||
        position1 == position5 && position5 == position9 ||
        position3 == position5 && position5 == position7 ) {
      return true;
    } else {
      return false;
    }
  },

  start: function() {
    console.log("New game, " + this.player1.name + " vs " + this.player2.name);
    this.printBoard();
  }
};

var myGame = Object.create(Game);
myGame.init("Bob", "John");
myGame.start();
