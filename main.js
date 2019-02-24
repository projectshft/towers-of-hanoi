const Board = function() {
  const board = [[], [], []]; // Creates the board
  let numOfDiscs = prompt('Please choose your number of starting discs (2-7)', '3');
  let moveCounter = 0;
  const playerMessage = 'Please select the starting peg and ending peg for your move!'; // Sets default player message 
  
  document.getElementById('message').innerHTML = playerMessage;

  // Checks if user hit cancel or input something out of range and sets to default of 3
  numOfDiscs >= 2 && numOfDiscs <= 7 ? numOfDiscs : numOfDiscs = 3; 

  // Builds initial board state based on user selected number of discs
  const buildBoard = function(numOfDiscs) {
    for(let i = numOfDiscs; i > 0; i--) {
      board[0].push(i);
    }
  }
  
  buildBoard(numOfDiscs); 

  // Sets win condition to total of peg1 at start of game after board has been built
  const winCondition = board[0].reduce(((sum, num) => sum + parseInt(num)), 0); 
  
  // Outputs the current state of the board to the console
  const boardState = function() {
    console.log('Current Board State: (Moves: ' + moveCounter + ')');
    board.map(function(item) {
    const pegState = item.join(' ');
    console.log('--- ' + pegState);
    });
    console.log(''); // Adds a blank line to console for easier readability
  }

  boardState();  // Puts initial board state into the console before you start game

  // Moves a disk from one peg to another if it's a valid move else prints error to screen and console
  const moveDisc = function(pegStart, pegEnd) {
    pegStart = document.getElementById('pegStart').value; // Grabs start peg from user input
    pegEnd = document.getElementById('pegEnd').value;  // Grabs end peg from user input
    
    if(errorCheck(pegStart, pegEnd)) { // Checks for general errors before starting a move
      const discCanMoveHere = whereCanDiscMove(pegStart);
      const pegStartVal = board[pegStart -1];
      const pegEndVal = board[pegEnd -1];

      if(discCanMoveHere.indexOf(pegEnd - 1) !== -1) {
        pegEndVal.push(pegStartVal.pop());
        $('#message').html(playerMessage);
      } else {
        console.error('You are not allowed to move a larger disc onto a smaller disc. Try Again!');
        $('#message').html('You are not allowed to move a larger disc onto a smaller disc. Try Again!');
        boardState();
        return;
      }

    moveCounter += 1;
    checkWinner();
    boardState();
    }
  }

  // Given the chosen peg you want to move a disc from, returns pegs that are valid to move to
  const whereCanDiscMove = function(pegStart) {
    const pegStartIndex = pegStart - 1;
    return board.map((peg, index) => 
    (peg.length === 0 || board[pegStartIndex][[board[pegStartIndex].length -1]] < peg[peg.length - 1]) ? index : undefined)
    .filter(pegIndex => pegIndex >= 0);
  }

  // Checks if the win condition is met
  const checkWinner = function() {
    const peg2 = board[1].reduce(((sum, num) => sum + parseInt(num)), 0); // Checks total of peg2 discs
    const peg3 = board[2].reduce(((sum, num) => sum + parseInt(num)), 0); // Checks total of peg3 discs
    const winnerSound = document.getElementById('winner');

    if(peg2 === winCondition || peg3 === winCondition) {  // Checks peg2 & peg3 against win condition 
      if(moveCounter === Math.pow(2, numOfDiscs) - 1) {
        console.log('AMAZING! You completed the puzzle in the minimum of ' + moveCounter + ' moves!'); 
        $('#message').html('AMAZING! You completed the puzzle in the minimum of ' + moveCounter + ' moves!');
      } else {
      console.log('You win!  This attempt took you a total of ' + moveCounter + ' moves!<br>' + 
      'The minimum number of moves to solve this puzzle was ' + (Math.pow(2, numOfDiscs) - 1)); 
      $('#message').html('You win!  This attempt took you a total of ' + moveCounter + ' moves!<br>' + 
        'The minimum number of moves to solve this puzzle was ' + (Math.pow(2, numOfDiscs) - 1));
      }
      winnerSound.play();
    }
  }
  
  // Checks for basic errors 
  const errorCheck = function(pegStart, pegEnd) {
    if(pegStart === pegEnd){
      console.error('You tried to move a disc to the peg it is currently on.  Try again!');
      $('#message').html('You tried to move a disc to the peg it is currently on.  Try again!');
      boardState();
      return false;
    } else if((pegStart < 1 || pegStart > board.length) || (pegEnd < 1 || pegEnd > board.length)) {
      console.error('One of the pegs you selected does not exist. Try again!');
      $('#message').html('One of the pegs you selected does not exist. Try again!');
      boardState();
      return false;
    } else if(board[pegStart -1].length === 0) {
      console.error('You tried to move a disc from an empty peg. Try again!');
      $('#message').html('You tried to move a disc from an empty peg. Try again!');
      boardState();
      return false;
    } else {
      return true;
    }
  }

  // Grabs the current state of the board 
  const getBoardState = function() {
    return board;
  }

  // Grabs the current number of moves made during the game
  const getTotalMoves = function() {
    return moveCounter;
  }

  // Grabs the number of discs being used in the current game
  const getNumDiscs = function() {
    return numOfDiscs;
  }

  //  Tells the game to reset itself and start over
  const resetGame = function() {
    document.location.reload();
  }

  //  Returns object with links to necessary functions that need to be accessed outside scope
  return {
    moveDisc: moveDisc,
    getBoardState: getBoardState,
    getTotalMoves: getTotalMoves,
    resetGame: resetGame,
    getNumDiscs: getNumDiscs
  }
}

const board = new Board();