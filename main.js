/*
  Project Shift Week 1 Project - Tic-Tac-Toe
  Austin Stevens
*/

/*
  Players array to track both players
  Each player has a name, character of X or O, and a status to indicate
  whether he/she is able to play
*/
var TicTacToe = function() {
  var board = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
  ];
  var currentPlayer = player1;
  var gridSize = 3;
  var moveCount = 0; // Tracking the number of turns taken.
  var nameSet = false; // Indicates that setup is completed with valid names.

  var player1 = {
    name: '',
    character: 'X'
  };
  var player2 = {
    name: '',
    character: 'O'
  };

  /*
    Function to test if a player has won or a tie has occurred after each move.
    The game ends if a win or tie occurs, and the result is logged to the console.
  */
  var checkWinner = function() {
    var winChar = currentPlayer.character;
    var winString = '';
    var win1 = 'XXX';
    var win2 = 'OOO';
    var winCheck = function() {
      if (winString == win1 || winString == win2) {
        console.log(currentPlayer.name + ' wins!\nUse game.setup() to play again!');
        reset();
        return true;
      }
      return false;
    };
    // Check rows
    for (var i = 0; i < gridSize; i++) {
      winString = '';
      for (var j = 0; j < gridSize; j++) {
        if (board[i][j] == winChar) {
          winString += winChar;
        }
        winCheck();
      }
    }

    // Check columns
    winString = '';
    for (var i = 0; i < gridSize; i++) {
      winString = '';
      for (var j = 0; j < gridSize; j++) {
        if (board[j][i] == winChar) {
          winString += winChar;
        }
        winCheck();
      }
    }

    // Check diagonal
    winString = '';
    for (var i = 0; i < gridSize; i++) {
      if (board[i][i] == winChar) {
        winString += winChar;
      }
      winCheck();
    }

    // Check anti-diagonal
    winString = '';
    for (var i = 0; i < gridSize; i++) {
      if (board[i][(gridSize - 1) - i] == winChar) {
        winString += winChar;
      }
      winCheck();
    }


    // Check for tie
    if (moveCount == (Math.pow(gridSize, 2) - 1)) {
      console.log('Cat\'s Game - it\'s a tie!\nUse game.setup() to play again!');
      reset();
      return true;
    }
    return false;
  }

  /*
    Finder function to locate the element in board specified by play().
    This will replace the corresponding board element with a player's character.
  */
  var findAndReplace = function(position) {
    board.forEach(function(row) {
      if (row.indexOf(position) != -1) {
        // Once the position is found, replace it with currentPlayer's character.
        row[row.indexOf(position)] = currentPlayer.character;
      }
    });
  };

  /*
    Play function checks which player has 'play' status for valid moves.
    Each move replaces a digit with either 'X' or 'O' and switches a user's status
  */
  var play = function(position) {
    // Test if a position is open to play, the game is "set up," and you're not passing in a filthy object
    if (nameSet && typeof position !== 'object' && board.join('').includes(position)) {
      findAndReplace(position.toString());
      moveCount++;
      print();
      checkWinner();
      currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
      // Log the next player as long as the game hasn't been reset.
      if (nameSet) {
        console.log('It\'s your move, ' + currentPlayer.name + '!');
      }
    } else {
      // Error message if position is already taken or game has not been setup.
      console.log('Invalid play!');
    }
  };

  /*
    Print the current game board.
  */
  var print = function() {
    var printBoard = '';
    board.forEach(function(element) {
      // Log each row as a string without the commas.
      printBoard += element.join('') + '\n';
    });
    console.log(printBoard);
  };

  /*
    Setup function for gameplay that outputs instructions and assigns each player's
    name and the player order (first name goes first, second name goes second).
  */
  var setup = function(name1, name2) {
    var player1Trimmed = name1.trim();
    var player2Trimmed = name2.trim();

    // Check if setup has been completed already.
    if (nameSet) {
      console.log('Setup complete - play on!');
      // Check for non-string names
    } else if (typeof name1 != 'string' || typeof name2 != 'string' ||
      player1Trimmed.length == 0 || player2Trimmed.length == 0) {
      console.log('Invalid name(s). Please setup again.')
    } else {
      //Assign names, players.nameSet becomes true, and player1 is set as currentPlayer.
      player1.name = player1Trimmed;
      player2.name = player2Trimmed;
      nameSet = true;
      currentPlayer = player1; // By default, player1 starts.
      console.log('\nWelcome to Tic-Tac-Toe, ' + player1Trimmed + ' and ' + player2Trimmed + '!\n' +
        player1Trimmed + ' will play first. Take turns using \'game.play(number of position)\'\n' +
        'Have fun, y\'all!\n');
      print();
    }
  };

  /*
    Resetting function will restore the board and players objects to their initial
    states, setting up a new game
  */
  var reset = function() {
    var value = 0;
    board = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ];
    player1.name = '';
    player2.name = '';
    currentPlayer = player1;
    moveCount = 0;
    nameSet = false;
  };

  return {
    play: play,
    setup: setup,
  };
};

/*
  Initialization
*/
var game = TicTacToe();
console.log('Use game.setup(\'name1\', \'name2\') to add names for Player 1 and' +
  ' Player 2 and setup the game.');
