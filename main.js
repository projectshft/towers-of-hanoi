//OBJECT WITH ARRAYS CAN BE CONSIDERED AS 2D ARRAYS
let gameBoard = {
  peg1: [5, 4, 3, 2, 1],
  peg2: [],
  peg3: [],
}

console.log(gameBoard)

//Message to player with game rules.
console.log('Game starts here! The goal is to stack the discs onto another peg, making sure that larger discs are not placed on smaller ones.  Good luck!!')

//TRY WITH MAP - WILL WORK AS OBJECT?  CHECK INTO "ARRAY-LIKE"
showBoard = () => {
console.log('Peg1:  ' + '---' + gameBoard.peg1.join(' '));
console.log('Peg2:  ' + '---' + gameBoard.peg2.join(' '));
console.log('Peg3:  ' + '---' + gameBoard.peg3.join(' '));
}

showBoard();

resetBoard = () => {
  console.log('Lets play again!')
  gameBoard = {
    peg1: [5, 4, 3, 2, 1],
    peg2: [],
    peg3: [],
  }
  showBoard();
  
};

// checkWinner = (toPeg) => {
//   if (toPeg,length ===5) {
//     console.log("Hurray!  You won!");
//     resetBoard();
//   }
// };

moveDisc = (fromPeg, toPeg) => {
  if (fromPeg.length === 0) {
    console.log("No disc to move!  Try another peg");
    return showBoard();
  } else if (fromPeg === toPeg) {
    console.log("You must move your piece to a different peg - try again!")
    return showBoard();
  } else if (toPeg.length !==0 && toPeg[toPeg.length-1] < fromPeg[fromPeg.length-1]) {
    console.log("Larger discs cannot be placed on smaller discs.  Try again.");
    return showBoard();
  } else {
    let disc = fromPeg.pop();
    toPeg.push(disc);
    
    if (toPeg.length === 5) {
      console.log('AWESOME move - YOU WON!!');
      showBoard();
      return resetBoard();
            
    } else {
    console.log("Good move!  Board is now:")
    return showBoard();
  }
}
}
//ROUND ONE
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg2)
moveDisc(gameBoard.peg3, gameBoard.peg2)
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg2, gameBoard.peg1)
moveDisc(gameBoard.peg2, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg2)
moveDisc(gameBoard.peg3, gameBoard.peg2)
moveDisc(gameBoard.peg3, gameBoard.peg1)
moveDisc(gameBoard.peg2, gameBoard.peg1)
moveDisc(gameBoard.peg3, gameBoard.peg2)
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg2)
moveDisc(gameBoard.peg3, gameBoard.peg2)
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg2, gameBoard.peg1)
moveDisc(gameBoard.peg2, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg2, gameBoard.peg1)
moveDisc(gameBoard.peg3, gameBoard.peg2)
moveDisc(gameBoard.peg3, gameBoard.peg1)
moveDisc(gameBoard.peg2, gameBoard.peg1)
moveDisc(gameBoard.peg2, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg2)
moveDisc(gameBoard.peg3, gameBoard.peg2)
moveDisc(gameBoard.peg1, gameBoard.peg3)
moveDisc(gameBoard.peg2, gameBoard.peg1)
moveDisc(gameBoard.peg2, gameBoard.peg3)
moveDisc(gameBoard.peg1, gameBoard.peg3)
//ROUND TWO
moveDisc(gameBoard.peg1, gameBoard.peg3)

