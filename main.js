var ticTacToe = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var player1 = {
  name: 'Player 1',
  type: "X",
  turn: true
}
var player2 = {
  name: 'Player 2',
  type: "O",
  turn: !player1.turn
}
if (player1.turn) {
  var player = player1;
} else if (player2.turn) {
  var player = player2;
};

var checkWinner = function() {
  if (player1.turn) {
    var player = player1;
    var nPlayer = player2;
  } else if (player2.turn) {
    var player = player2;
    var nPlayer = player1;
  };
  if (ticTacToe[0][0] == nPlayer.type && ticTacToe[0][1] == nPlayer.type && ticTacToe[0][2] == nPlayer.type
  || ticTacToe[1][0] == nPlayer.type && ticTacToe[1][1] == nPlayer.type && ticTacToe[1][2] == nPlayer.type
  || ticTacToe[2][0] == nPlayer.type && ticTacToe[2][1] == nPlayer.type && ticTacToe[2][2] == nPlayer.type
  || ticTacToe[0][0] == nPlayer.type && ticTacToe[1][0] == nPlayer.type && ticTacToe[2][0] == nPlayer.type
  || ticTacToe[0][1] == nPlayer.type && ticTacToe[1][1] == nPlayer.type && ticTacToe[2][1] == nPlayer.type
  || ticTacToe[0][2] == nPlayer.type && ticTacToe[1][2] == nPlayer.type && ticTacToe[2][2] == nPlayer.type
  || ticTacToe[0][0] == nPlayer.type && ticTacToe[1][1] == nPlayer.type && ticTacToe[2][2] == nPlayer.type
  || ticTacToe[0][2] == nPlayer.type && ticTacToe[1][1] == nPlayer.type && ticTacToe[2][0] == nPlayer.type) {
    console.log("Game over!")
    console.log(nPlayer.name + " wins!");
    var setTicTacToe = function() {
      ticTacToe = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      for (i = 0; i < ticTacToe.length; i++) {
        console.log("" + ticTacToe[0][0] + " " + ticTacToe[0][1] + " " + ticTacToe[0][2] + "\n" + ticTacToe[1][0] + " " + ticTacToe[1][1] + " " + ticTacToe[1][2] + "\n" + ticTacToe[2][0] + " " + ticTacToe[2][1] + " " + ticTacToe[2][2]);
      };
    }
    return setTicTacToe();
  } else if (ticTacToe[0][0] != 1 && ticTacToe[0][1] != 2 && ticTacToe[0][2] != 3 && ticTacToe[1][0] != 4 && ticTacToe[1][1] != 5 && ticTacToe[1][2] != 6 && ticTacToe[2][0] != 7 && ticTacToe[2][1] != 8 && ticTacToe[2][2] != 9) {
    console.log("Game over!");
    console.log("It's a tie!");
    var setTicTacToe = function() {
      ticTacToe = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      for (i = 0; i < ticTacToe.length; i++) {
        console.log("" + ticTacToe[0][0] + " " + ticTacToe[0][1] + " " + ticTacToe[0][2] + "\n" + ticTacToe[1][0] + " " + ticTacToe[1][1] + " " + ticTacToe[1][2] + "\n" + ticTacToe[2][0] + " " + ticTacToe[2][1] + " " + ticTacToe[2][2]);
      };
    }
    return setTicTacToe();
  } else {
    console.log(player.name + ", it is your turn.")
  };
};

var showTicTacToe = function() {
  for (i = 0; i < ticTacToe.length; i++) {
    console.log("" + ticTacToe[0][0] + " " + ticTacToe[0][1] + " " + ticTacToe[0][2] + "\n" + ticTacToe[1][0] + " " + ticTacToe[1][1] + " " + ticTacToe[1][2] + "\n" + ticTacToe[2][0] + " " + ticTacToe[2][1] + " " + ticTacToe[2][2]);
  };
  return checkWinner();
};

showTicTacToe();

var play = function(num) {
  var errMsg = function() {
    console.log("Space " + num + " is already taken.");
  }
  var errMsg1 = function() {
    console.log(num + " does not exist.");
  }
  if (player1.turn) {
    var player = player1;
  } else if (player2.turn) {
    var player = player2;
  };
  if (num == 1) {
    if (ticTacToe[0][0] == num) {
      ticTacToe[0][0] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 2) {
    if (ticTacToe[0][1] == num) {
      ticTacToe[0][1] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 3) {
    if (ticTacToe[0][2] == num) {
      ticTacToe[0][2] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 4) {
    if (ticTacToe[1][0] == num) {
      ticTacToe[1][0] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 5) {
    if (ticTacToe[1][1] == num) {
      ticTacToe[1][1] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 6) {
    if (ticTacToe[1][2] == num) {
     ticTacToe[1][2] = player.type;
   } else {
     return errMsg();
   }
  } else if (num == 7) {
    if (ticTacToe[2][0] == num) {
      ticTacToe[2][0] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 8) {
    if (ticTacToe[2][1] == num) {
      ticTacToe[2][1] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 9) {
    if (ticTacToe[2][2] == num) {
      ticTacToe[2][2] = player.type;
    } else {
      return errMsg();
    }
  } else {
    return errMsg1();
  };
  player1.turn = !player1.turn;
  player2.turn = !player1.turn;
  return showTicTacToe();
};
