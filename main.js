const boardOrig = [];
const setGame = (numPegs, numDiscs) => {
  for (let i = 0; i < numPegs; i++) {
    boardOrig.push([]);
  }

  for (let j = numDiscs; j > 0; j--) {
    boardOrig[0].push(j);
  }
};

let numPegs = prompt("Enter the number of pegs: ");
let numDiscs = prompt("Enter the number of discs: ");
numPegs = parseInt(numPegs);
numDiscs = parseInt(numDiscs);

setGame(numPegs, numDiscs);
const resultCheck = structuredClone(boardOrig[0]);

console.log("Game start: ");
boardOrig
  .map((boa) => boa.join(" "))
  .forEach((boa) => console.log(`--- ${boa}`));

const state = {
  peg1: boardOrig[0],
  peg2: boardOrig[1],
  peg3: boardOrig[2],
};

const moveDisc = (moveFrom, moveTo) => {
  const pegFrom = "peg" + moveFrom; // connect "moveFrom" with state
  const pegTo = "peg" + moveTo;

  const lenFrom = boardOrig[moveFrom - 1].length - 1; // length of the "from" array - 1
  const lenTo = boardOrig[moveTo - 1].length - 1; // length of the "to" array - 1

  const lastEleFrom = state[pegFrom][lenFrom]; // last element of the "from" array
  const lastEleTo = state[pegTo][lenTo]; // last element of the "to" array

  if (state[pegTo][0] === undefined || lastEleFrom < lastEleTo) {
    state[pegTo].push(lastEleFrom);
    state[pegFrom].pop(lastEleFrom);
    console.log("That move was successful, board is now:\n");

    boardOrig
      .map((boa) => boa.join(" "))
      .forEach((boa) => console.log(`--- ${boa}`));
  }

  if (lastEleFrom > lastEleTo) {
    console.log(
      "You cannot move a larger disc on top of a smaller one, board is still:\n"
    );

    boardOrig
      .map((boa) => boa.join(" "))
      .forEach((boa) => console.log(`--- ${boa}`));
  }

  checkWinner();
};

const checkWinner = () => {
  if (
    state.peg2.toString() === resultCheck.toString() ||
    state.peg3.toString() === resultCheck.toString()
  ) {
    console.log("You win!");
    console.log("Refresh the page to start a new game!");
  } else {
    console.log("Keep going!");
  }
};
