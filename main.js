const Board = function() {
  const board = [["3", "2", "1"], [], []]; // Sets initial board state
  const winCondition = board[0].reduce(((sum, num) => sum + parseInt(num)), 0); //Sets win condition to total of peg1 at start of game
  let moveCounter = 0;  // Tracks number of moves

  // Outputs the current state of the board to the console
  const boardState = function() {
    console.log('Current Board State:')
    board.map(function(item) {
    const pegState = item.join(' ');
    console.log('--- ' + pegState);
  });
    console.log(''); // Adds a blank line to console for easier readability
  }
  boardState();

  // Moves a disk from one peg to another if valid move or print error
  const moveDisc = function(pegStart, pegEnd) {
    errorCheck(pegStart, pegEnd);
    const discCanMoveHere = whereCanDiscMove(pegStart);

    // pegStart = board[pegStart -1];
    // pegEnd = board[pegEnd -1];
    // if( pegEnd.length === 0 || (pegStart[pegStart.length - 1] < pegEnd[pegEnd.length -1])) {
    //   pegEnd.push(pegStart.pop());
    // } else {
    //   console.log('Invalid Move. Try Again!');
    //   boardState();
    //   return;
    // }
    // moveCounter += 1;
    // checkWinner();
    // boardState();
  }

  const whereCanDiscMove = function(peg) {
    return board.map((pegNum, index) => 
    pegNum.length === 0 || (pegNum[pegNum.length - 1] < pegNum[pegNum.length - 1]) ? index : undefined)
    .filter(pegIndex => pegIndex);
  }

  // Checks if the win condition is met
  const checkWinner = function() {
    const peg2 = board[1].reduce(((sum, num) => sum + parseInt(num)), 0);
    const peg3 = board[2].reduce(((sum, num) => sum + parseInt(num)), 0);
    
    if(peg2 === winCondition || peg3 === winCondition) {
      console.log('You win!  This attempt took you a total of ' + moveCounter + ' moves!'); 
    }
  }

  const errorCheck = function(pegStart, pegEnd) {
    if(pegStart === pegEnd){
      console.log('You tried to move a disc to the peg it is currently on.  Try again!');
      boardState();
      return;
    } else if((pegStart < 1 || pegStart > board.length) || (pegEnd < 1 || pegEnd > board.length)) {
      console.log('moveDisc parameters were out of bounds');
      boardState();
      return;
    }
  }
    return {
      moveDisc: moveDisc
    }
}

const board = new Board();

board.moveDisc(1,1);
board.moveDisc(1,2);
board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);
board.moveDisc(3,1);
board.moveDisc(3,2);
board.moveDisc(1,2);





// // Shortest solution to 3x3
// moveDisc(1,2);
// moveDisc(1,3);
// moveDisc(2,3);
// moveDisc(1,2);
// moveDisc(3,1);
// moveDisc(3,2);
// moveDisc(1,2);



