var start = {
  board: [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
  ],
  playerIsX: true
};

//can add optional function to change who goes first
//would be nice to add way to cancel out of game.

function printBoard(board) {
  var boardDisplay = '';
  board.forEach(function(line) {
    boardDisplay += line.join('') + '\n'
  });
  boardDisplay = boardDisplay.trim();
  return boardDisplay; //changed from console.log statement to return value to make this testable in Jasmine
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
    console.log(printBoard(state.board));
    var nextPlayer = state.playerIsX ? 'X' : 'O';
    var position = prompt(`${nextPlayer}, please enter a position.`)
    if (position === null){
      break; // player can exit game by hitting "cancel" at prompt
    }
    state = play(position, state);
  }
}

playGame(start);
