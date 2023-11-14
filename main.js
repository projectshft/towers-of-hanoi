var gameBoard = [
  [5, 4, 3, 2, 1], // Peg 1
  [],              // Peg 2
  []               // Peg 3
];
var displayBoard = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    const peg = gameBoard[i];
    console.log(`--- ${peg.join(' ')}`);
  } 
};
var moveDisc = function(peg1, peg2) {
  let fromPeg = gameBoard[peg1 - 1];
  let toPeg = gameBoard[peg2 - 1];

    if (toPeg.length === 0 || fromPeg[fromPeg.length - 1] < toPeg[toPeg.length - 1]) {
    const disc = fromPeg.pop();
    toPeg.push(disc);
    console.log("That move was successful, board is now:");
    displayBoard();
  } else {
    console.log("Invalid move: Cannot move a larger disc on top of a smaller one.");
    displayBoard();
  }
};
var checkWinner = function () {
  if (gameBoard[2].length === 5) {
    console.log('Congratulations! You have won the game.');
    resetGame();
  } else {
    console.log("Sorry, keep playing!");
  }
}; 
var resetGame = function () {
  gameBoard = [
    [5, 4, 3, 2, 1],
    [],
    []
  ];
  console.log('Game has been reset.');
  displayBoard();
};

displayBoard();
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(3, 1);
moveDisc(2, 1);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(3, 2);
moveDisc(3, 1);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
checkWinner();