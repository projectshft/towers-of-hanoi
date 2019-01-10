//This is the Board State Array.
var pegs = [[3, 2, 1], [], []];

//This is meant to maintain the state of the board.
var boardState = {
  pegs,
  count: 0,
  gameWon: false
}

//This is meant to display the Board.
var printBoard = function() {
  return boardState.pegs.map(function(peg, i) {
    console.log(`Peg #${i} -- ${peg}`)
  })
}

//This is supposed to update every time a user posts a change in console log. You put in the console a move like moveDisc(0,1) which pops the last item out of Sub-Array 0 and pushes it into becoming the first item of the 2nd Array. 

var moveDisc = function(start, end) {
  var { pegs } = boardState;
  boardState.count += 1;

  var discToMove = pegs[start][pegs[start].length - 1];
  var pegToMoveTo = pegs[end];
  checkWinner()
  if (pegToMoveTo.length === 0) {
      console.log('VALID MOVE');
      pegs[start].pop();
      pegToMoveTo.push(discToMove);
      checkWinner()
      printBoard();
    } else if (discToMove > pegToMoveTo[pegToMoveTo.length - 1]) {
      return alert('invalid move -- the disc you are trying to move is bigger than the top disc of the peg you are trying to move to')
    } else {
      console.log('VALID MOVE');
      pegs[start].pop();
      pegToMoveTo.push(discToMove);
      checkWinner()
      printBoard();
    }
}


//This is meant to limit the number of moves a user can make. They cannot put a bigger number to the right of a smaller number within one of the three sub-arrays within the bigger array. 
var checkPossibleMoves = function(startPeg) {
  var availableMoves = pegs.filter(function(peg) {
    if (peg.length === 0) {
      return peg
    } else if (peg[peg.length - 1] > startPeg) {
      return peg
    }
  })
  return availableMoves;
}


//When you move all three Discs to another peg other than 0 where it starts, it will declare you as the winner. 
 function checkWinner() {
  return boardState.pegs.reduce(function(tally, peg, index){               
      if (peg.length === 3 && index !== 0) {
          boardState.gameWon = true;  
          console.log('you won')
      };
  }, 0);
}
  
 

//This is meant to reset the array to what it started as. To reset it you do reset()
 function reset() {
  console.log('board reset!')
  boardState.count = 0;
  boardState.pegs = [[3, 2, 1], [], []];
  printBoard();
}

