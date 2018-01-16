console.log("Input move with \'play(" + "%cinput move here" + ")\'", "font-style: italic");

var board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var player1 = {
  type: "X",
  turn: true
};

var player2 = {
  type: "O",
  turn: !player1.turn
};

if (player1.turn) {
  var player = player1;
} else if (player2.turn) {
  var player = player2;
};

var setBoard = function() {
  board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  for (i = 0; i < board.length; i++) {
    console.log("" + board[0][0] + " " + board[0][1] + " " + board[0][2] + "\n" + board[1][0] + " " + board[1][1] + " " + board[1][2] + "\n" + board[2][0] + " " + board[2][1] + " " + board[2][2]);
  }
  if (player == player1) {
    console.log("%cPLAYER 1, it is your turn.", "font-weight: bold");
  } else if (player == player2) {
    console.log("%cPLAYER 2, it is your turn.", "font-weight: bold");
  };
}

var checkWinner = function() {
  if (player1.turn) {
    var player = player1;
    var nPlayer = player2;
  } else if (player2.turn) {
    var player = player2;
    var nPlayer = player1;
  };
  if (board[0][0] == nPlayer.type && board[0][1] == nPlayer.type && board[0][2] == nPlayer.type
  || board[1][0] == nPlayer.type && board[1][1] == nPlayer.type && board[1][2] == nPlayer.type
  || board[2][0] == nPlayer.type && board[2][1] == nPlayer.type && board[2][2] == nPlayer.type
  || board[0][0] == nPlayer.type && board[1][0] == nPlayer.type && board[2][0] == nPlayer.type
  || board[0][1] == nPlayer.type && board[1][1] == nPlayer.type && board[2][1] == nPlayer.type
  || board[0][2] == nPlayer.type && board[1][2] == nPlayer.type && board[2][2] == nPlayer.type
  || board[0][0] == nPlayer.type && board[1][1] == nPlayer.type && board[2][2] == nPlayer.type
  || board[0][2] == nPlayer.type && board[1][1] == nPlayer.type && board[2][0] == nPlayer.type) {
    console.log("%cGame over!", "font-size: 40px")
    if (nPlayer == player1) {
      console.log("%cPLAYER 1 WINS!", "font-size: 50px");
    } else if (nPlayer == player2) {
      console.log("%cPLAYER 2 WINS!", "font-size: 50px");
    };
    return setBoard();
  } else if (board[0][0] != 1 && board[0][1] != 2 && board[0][2] != 3 && board[1][0] != 4 && board[1][1] != 5 && board[1][2] != 6 && board[2][0] != 7 && board[2][1] != 8 && board[2][2] != 9) {
    console.log("%cGame over!", "font-size: 40px");
    console.log("%cIt's a tie...", "font-size: 50px");
    return setBoard();
  } else {
    if (player == player1) {
      console.log("%cPLAYER 1, it is your turn.", "font-weight: bold");
    } else if (player == player2) {
      console.log("%cPLAYER 2, it is your turn.", "font-weight: bold");
    };
  };
};

var showBoard = function() {
  for (i = 0; i < board.length; i++) {
    console.log("" + board[0][0] + " " + board[0][1] + " " + board[0][2] + "\n" + board[1][0] + " " + board[1][1] + " " + board[1][2] + "\n" + board[2][0] + " " + board[2][1] + " " + board[2][2]);
  };
  return checkWinner();
};

showBoard();

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
    if (board[0][0] == num) {
      board[0][0] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 2) {
    if (board[0][1] == num) {
      board[0][1] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 3) {
    if (board[0][2] == num) {
      board[0][2] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 4) {
    if (board[1][0] == num) {
      board[1][0] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 5) {
    if (board[1][1] == num) {
      board[1][1] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 6) {
    if (board[1][2] == num) {
     board[1][2] = player.type;
   } else {
     return errMsg();
   }
  } else if (num == 7) {
    if (board[2][0] == num) {
      board[2][0] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 8) {
    if (board[2][1] == num) {
      board[2][1] = player.type;
    } else {
      return errMsg();
    }
  } else if (num == 9) {
    if (board[2][2] == num) {
      board[2][2] = player.type;
    } else {
      return errMsg();
    }
  } else {
    return errMsg1();
  };
  player1.turn = !player1.turn;
  player2.turn = !player1.turn;
  return showBoard();
};
