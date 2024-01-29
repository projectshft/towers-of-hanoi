// 1. Starting board
const board = {
  pegs: [
    [5, 4, 3, 2, 1],
    [],
    []
]
};


const gameBoard = board.pegs.map(function(peg){
  return peg
})


const peg1 = gameBoard[0];
const peg2 = gameBoard[1];
const peg3 = gameBoard[2];

console.log(`Welcome to the Towers of Hanoi! This is the starting board: \n--- ${peg1.join(' ')}\n--- \n---`);

// 2. Moving discs
const moveDisc = function(currPeg, nextPeg){
  if(currPeg > 3 || currPeg < 1 || nextPeg < 0 || nextPeg > 3){
    console.log(`Both entries must be between 1 and 3.`)
    return;
  }

  if(currPeg && nextPeg){
  currPeg = gameBoard[currPeg - 1] // The disc to be moved
  nextPeg = gameBoard[nextPeg - 1] // The location where the disc is being moved
  const lastOfCurrPeg = currPeg.slice(-1)[0] // Getting last element of current peg
  const lastOfNextPeg = nextPeg.slice(-1)[0] // Getting last element of next peg
  // Evaluating peg
   if(lastOfCurrPeg < lastOfNextPeg || !lastOfNextPeg){
    nextPeg.push(currPeg.slice(-1)) // Adding the last index to the new peg
    currPeg.pop() // Removing the last index of the old peg
    console.log(`You successfully moved disc ${lastOfCurrPeg}. The board is now:\n--- ${peg1.join(' ')}\n--- ${peg2.join(' ')}\n--- ${peg3.join(' ')}`)
   } else if(lastOfCurrPeg > lastOfNextPeg){
     console.log(`Invalid move. You cannot move a larger disc on top of a smaller one. The board is still:\n--- ${peg1.join(' ')}\n--- ${peg2.join(' ')}\n--- ${peg3.join(' ')}`);
   } else if(!lastOfCurrPeg){
    console.log(`There were no discs on that peg. The board is still:\n--- ${peg1.join(' ')}\n--- ${peg2.join(' ')}\n--- ${peg3.join(' ')}`)
   }
}

}

// Play game here:


//


const checkWinner = function(){
  const win = '5 4 3 2 1';
  if(peg3.join(' ') === win || peg2.join(' ') === win && !peg1){
    console.log("YOU WIN!!! Reset for another game.");
  }
}
checkWinner()




// Victory Testing
/*
moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(3, 1)
moveDisc(2, 1)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(3, 2)
moveDisc(3, 1)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)
moveDisc(1, 2)
moveDisc(3, 2)
moveDisc(1, 3)
moveDisc(2, 1)
moveDisc(2, 3)
moveDisc(1, 3)
*/



