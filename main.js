/*
  Project Shift Week 1 Project - Tic-Tac-Toe
  Austin Stevens
*/

// Board array
var board = [["1", "2", "3"],["4", "5", "6"],["7", "8", "9"]];

/*
  Players array to track both players
  Each player has a name, character of X or O, and a status to indicate
  whether he/she is able to play
*/
var players = {
  player1: {
    name: '',
    character: 'X',
    moves: []
  },
  player2: {
    name: '',
    character: 'O',
    moves: []
  },
  currentPlayer: {},
  gridSize: 3,
  nameSet: false, // By default, names are empty strings;
  moveCount: 0 // Tracking the number of turns taken.
}

// Print the board
function print () {
  var printBoard = '';
  board.forEach( function (element) {
    // Log each row as a string without the commas.
    printBoard += element.join('') + '\n';
  });
  console.log(printBoard);
};

/*
  Setup function for gameplay that outputs instructions and assigns each player's
  name and the player order (first name goes first, second name goes second).
  Also, given a successful setup, the score array is filled based on the grid size.
*/
function setup (player1, player2) {
  var player1Trimmed = player1.trim();
  var player2Trimmed = player2.trim();
  // Check if setup has been completed already.
  if (players.nameSet) {
    console.log('Setup complete - play on!');
  // Check for non-string names
  } else if (typeof player1 != 'string' || typeof player2 != 'string' ||
            player1Trimmed.length == 0 || player2Trimmed.length == 0) {
    console.log('Invalid name(s). Please setup again.')
  } else {
    //Assign names, players.nameSet becomes true, and player1 is set as currentPlayer.
    players.player1.name = player1Trimmed;
    players.player2.name = player2Trimmed;
    players.nameSet = true;
    players.currentPlayer = players.player1; // By default, player1 starts.
    console.log('\nWelcome to Tic-Tac-Toe, ' + player1Trimmed + ' and ' + player2Trimmed + '!\n' +
    player1Trimmed + ' will play first. Take turns using \'play(number of position)\'\n' +
    'Have fun, y\'all!\n' );
  }

}
setup('      b  ', 'Bob');
setup('Willy', 'Rob');

/*
  Finder function to locate the element in board specified by play().
  This will add the move to the players moves array and replace the element
  with a player's character.
*/
function findAndReplace (position) {
  board.forEach( function (row) {
    if (row.indexOf(position) != -1) {
      // Push the player's move into their move array to track the winner.
      players.currentPlayer.moves.push(position);
      // Once the position is found, replace it with currentPlayer's character.
      row[row.indexOf(position)] = players.currentPlayer.character;
    }
  });
}
/*
  Play function checks which player has 'play' status for valid moves.
  Each move replaces a digit with either 'X' or 'O' and switches a user's status
*/
function play (position) {
  // Test if a position is open to play, the game is "set up," and you're not passing in a filthy object
  if (board.join('').includes(position) && players.nameSet && typeof position !== 'object') {
    findAndReplace(position.toString());
    players.moveCount++;
    players.currentPlayer === players.player1 ? players.currentPlayer = players.player2 : players.currentPlayer = players.player1;
    //checkWinner();
  } else {
    // Error message if position is already taken or game has not been setup.
    console.log('Invalid play!');
  }
}
play(1);
print();
play(4);
print();
play(2);
print();
play(5);
print();
play(3);
print();
console.log(returnWinner());
/*
  Checking function to test if a player has won or a tie has occurred
  after each move.
  The game ends if a win or tie occurs, and the result is logged to the console.
  The game resets after a win or tie.
*/
function checkWinner () {
  // Check rows
  for (var i = 0; i < players.gridSize; i++) {
    for (var j = 0; j < players.gridSize; i++) {
      if (board[i][j] != )
    }
  }
}

/*
  Resetting function will restore the board and players objects to their initial
  states, setting up a new game
*/
