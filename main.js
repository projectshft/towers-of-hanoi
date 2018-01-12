/*
Here are the requirements:

First of all it will need a board. We'll utilize a 2D array to do this:
[["1", "2", "3"],
["4", "5", "6"],
["7", "8", "9"]]

We'll want to be able to print the board. The empty board will log the 2D array to the console like this (warning, this part is difficult):
  123
  456
  789

Our game will take two players, each player should have a name and their respective character - one will be 'X', and the other, 'O'. As they play, they will replace the numbers on the board with their characters. For example:
[["O", "O", "X"],
["0", "X", "6"],
["X", "8", "9"]]
There should be some kind of function for play that takes the position the player wants to play. For each play, it should switch which player is currently playing (so no player can go two times in a row).

There needs to be some kind of function to checkWinner to see if anyone has won. This part is pretty hard as you have to check if a player has won vertically, horizontally or diagonally, OR if there's a tie.

Once a player wins, the game should automatically end by announcing the winner (through a console log) and reset for a new game.
*/
var start = {
  board: [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
  ],
  playerIsX: true
};

//can add optional function to change who goes first

function printBoard(board) {
  var boardDisplay = '';
  board.forEach(function(line) {
    boardDisplay += line.join('') + '\n'
  })
  console.log(boardDisplay.trim());
}

function play(position, state) {
  var posNum = parseInt(position);
  var row = 0;
  if (4 <= posNum && posNum <= 6) {
    row = 1;
  } else if (7 <= posNum && posNum <= 9) {
    row = 2;
  }
  var square = state.board[row].indexOf(position);
  if (square === -1) {
    console.log('Sorry, that position is unavailable. Please try again.')
    return state;
  } else {
    var newBoard = [];
    state.board.forEach(function(origRow) {
      newBoard.push(origRow.slice());
    })
    newBoard[row][square] = state.playerIsX ? 'X' : 'O';
    return {
      board: newBoard,
      playerIsX: !state.playerIsX
    }
  }
}


function checkGameOver(state) {
  var gameOver = false;

  function makeColumnArrays(board) {
    var columnHolder = [];
    var col0 = [];
    var col1 = [];
    var col2 = [];
    board.forEach(function(row) {
      col0.push(row[0]);
      col1.push(row[1]);
      col2.push(row[2]);
    })
    columnHolder.push(col0, col1, col2);
    return columnHolder;
  }

  function makeDiags(board) {
    var diagsHolder = [];
    var diag1 = [];
    var diag2 = [];
    diag1.push(board[0][0], board[1][1], board[2][2]);
    diag2.push(board[0][2], board[1][1], board[2][0]);
    diagsHolder.push(diag1, diag2);
    return diagsHolder;
  }
  var columns = makeColumnArrays(state.board);
  var diags = makeDiags(state.board);

  function checkArrayForWin(array) {
    if (array.every(function(square) {
        return square === 'X';
      })) {
      winner = 'X';
    } else if (array.every(function(square) {
        return square === 'O';
      })) {
      winner = 'O';
    }
  }

  function checkArrayForTie(array) {
    return array.some(function(square) {
      return square === 'X';
    }) && array.some(function(square) {
      return square === 'O';
    })
  }

  function checkNestedForWin(nested) {
    nested.forEach(checkArrayForWin);
  }

  function checkNestedforTies(nested) { // should return true only if ALL rows contain ties
    return nested.every(function(row) {
      return checkArrayForTie(row);
    })
  }

  function checkWinner() {
    winner = null;
    checkNestedForWin(state.board);
    checkNestedForWin(columns);
    checkNestedForWin(diags);
    return winner;
  }

  function checkTie() {
    return checkNestedforTies(state.board) &&
      checkNestedforTies(columns) && checkNestedforTies(diags);
  }

  if (checkWinner(state)) {
    gameOver = true;
    console.log(`${winner} has won!`)
  } else if (checkTie(state.board)) {
    gameOver = true;
    console.log(`It's a stalemate!`)
  }
  return gameOver;
}

function playGame(state) {
  while (!checkGameOver(state)) {
    printBoard(state.board);
    var nextPlayer = state.playerIsX ? 'X' : 'O';
    var position = prompt(`${nextPlayer}, please enter a position.`)
    state = play(position, state);
  }
}

playGame(start);
