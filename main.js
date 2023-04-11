let gameBoard = [
  [5, 4, 3, 2, 1],
  [],
  []
];

const peg1 = gameBoard[0];
const peg2 = gameBoard[1];
const peg3 = gameBoard[2];

console.log('Game starts here! The goal is to stack the discs in their original order onto another peg, making sure that larger discs are not placed on smaller ones.  Good luck!!')

let showBoard = () => {
  const gameBoardAppearance = gameBoard.map(value => value.join(' '));
  console.log(gameBoardAppearance.map(value => '---' + value));
};
showBoard();

resetBoard = () => {
  console.log('Erase your previous moves, and lets play again!')
  gameBoard = [
    [5, 4, 3, 2, 1],
    [],
    [],
  ]
};

checkWinner = () => {
  if (peg2.length === 5 || peg3.length === 5) {
    console.log('AWESOME move - YOU WON!!');
    showBoard();
    resetBoard();
  }
};
    
moveDisc = (fromPeg, toPeg) => {
  if (fromPeg.length === 0) {
    console.log("No disc to move!  Try another peg");
    return showBoard();
  } else if (fromPeg === toPeg) {
    console.log("You must move your piece to a different peg - try again!")
    return showBoard();
  } else if (toPeg.length !==0 && toPeg[toPeg.length-1] < fromPeg[fromPeg.length-1])  {
    console.log("Larger discs cannot be placed on smaller discs.  Try again.");
    return showBoard();
  } else {
    let disc = fromPeg.pop();
    toPeg.push(disc);
    console.log("Good move!  Board is now:")
    checkWinner();
    return showBoard();
    }
  };

//Game is played here, by entering fromPeg, followed by toPeg from the choices of 
//peg1, peg2 or peg3, representing each array of numbers.
moveDisc(peg1, peg3);
moveDisc(peg1, peg2);
moveDisc(peg3, peg2);
moveDisc(peg1, peg3);
moveDisc(peg2, peg1);
moveDisc(peg2, peg3);
moveDisc(peg1, peg3);
moveDisc(peg1, peg2);
moveDisc(peg3, peg2);
moveDisc(peg3, peg1);
moveDisc(peg2, peg1);
moveDisc(peg3, peg2);
moveDisc(peg1, peg2);
moveDisc(peg1, peg3);
moveDisc(peg2, peg1);
moveDisc(peg3, peg2);
moveDisc(peg1, peg2);
moveDisc(peg1, peg3);
moveDisc(peg2, peg1);
moveDisc(peg2, peg3);
moveDisc(peg1, peg3);
moveDisc(peg2, peg1);
moveDisc(peg3, peg2);
moveDisc(peg3, peg1);
moveDisc(peg2, peg1);
moveDisc(peg2, peg3);
moveDisc(peg1, peg3);
moveDisc(peg1, peg2);
moveDisc(peg3, peg2);
moveDisc(peg1, peg3);
moveDisc(peg2, peg1);
moveDisc(peg2, peg3);
moveDisc(peg1, peg3);