console.log("Input move with \'play(" + "%cinput move here" + ")\'", "font-style: italic");

var ticTacToe = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var player1 = {
  type: "X",
  turn: true
}
var player2 = {
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
    console.log("%cGame over!", "font-size: 40px")
    if (nPlayer == player1) {
      console.log("%cPLAYER 1 WINS!", "font-size: 50px");
    } else if (nPlayer == player2) {
      console.log("%cPLAYER 2 WINS!", "font-size: 50px");
    };
    var setTicTacToe = function() {
      ticTacToe = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      for (i = 0; i < ticTacToe.length; i++) {
        console.log("" + ticTacToe[0][0] + " " + ticTacToe[0][1] + " " + ticTacToe[0][2] + "\n" + ticTacToe[1][0] + " " + ticTacToe[1][1] + " " + ticTacToe[1][2] + "\n" + ticTacToe[2][0] + " " + ticTacToe[2][1] + " " + ticTacToe[2][2]);
      }
      if (player == player1) {
        console.log("%cPLAYER 1, it is your turn.", "font-weight: bold");
      } else if (player == player2) {
        console.log("%cPLAYER 2, it is your turn.", "font-weight: bold");
      };
    }
    return setTicTacToe();
  } else if (ticTacToe[0][0] != 1 && ticTacToe[0][1] != 2 && ticTacToe[0][2] != 3 && ticTacToe[1][0] != 4 && ticTacToe[1][1] != 5 && ticTacToe[1][2] != 6 && ticTacToe[2][0] != 7 && ticTacToe[2][1] != 8 && ticTacToe[2][2] != 9) {
    console.log("%cGame over!", "font-size: 40px");
    console.log("%cIt's a tie...", "font-size: 50px");
    var setTicTacToe = function() {
      ticTacToe = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
      for (i = 0; i < ticTacToe.length; i++) {
        console.log("" + ticTacToe[0][0] + " " + ticTacToe[0][1] + " " + ticTacToe[0][2] + "\n" + ticTacToe[1][0] + " " + ticTacToe[1][1] + " " + ticTacToe[1][2] + "\n" + ticTacToe[2][0] + " " + ticTacToe[2][1] + " " + ticTacToe[2][2]);
      }
      if (player == player1) {
        console.log("%cPLAYER 1, it is your turn.", "font-weight: bold");
      } else if (player == player2) {
        console.log("%cPLAYER 2, it is your turn.", "font-weight: bold");
      };
    }
    return setTicTacToe();
  } else {
    if (player == player1) {
      console.log("%cPLAYER 1, it is your turn.", "font-weight: bold");
    } else if (player == player2) {
      console.log("%cPLAYER 2, it is your turn.", "font-weight: bold");
    };
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
    console.warn("Space " + num + " is already taken.");
  }
  var errMsg1 = function() {
    console.warn(num + " does not exist.");
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
