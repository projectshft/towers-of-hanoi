var towers = [
  [5, 4, 3, 2, 1], 
  [], 
  []
];

function moveDisc(sourcePeg, destinationPeg) {
  if (towers[sourcePeg].length === 0) {
    console.log("Invalid move: peg is empty.");
    return;
  }

  let disc = towers[sourcePeg][towers[sourcePeg].length - 1];

  if (
    towers[destinationPeg].length > 0 &&
    towers[destinationPeg][towers[destinationPeg].length - 1] < disc
  ) {
    console.log("Invalid move: Cannot place a larger disc on a smaller one.");
    return;
  }

  towers[sourcePeg].pop();
  towers[destinationPeg].push(disc);

  console.log("That move was successful, board is now:");
  printTowers();

  checkWinner();
}

function checkWinner() {
  if (towers[1].length === 5 || towers[2].length === 5) {
    console.log("🎉 You are a winner! 🎉");
    resetGame();
  }
}

// Worked with my mentor on this part of the code, Had to look up .join and modified it with ${}, which I had to look up how to use as well. 


function printTowers() { 
  towers.forEach(peg => {
    console.log(`--- ${peg.join(' ')}`);
  });
}

function resetGame() {
  towers = [
    [5, 4, 3, 2, 1],
    [],
    []
  ];
  console.log("Game has been reset. Play again!");
  printTowers();
}
