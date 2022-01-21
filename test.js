const checkWinner = (boardToCheck, winRefArr) => {
  const index = boardToCheck.findIndex(peg => peg.length === winRefArr.length);
  return index > 0;
}

const pegSize = 3;
const loseBoard = [[3], [1], [2]];
const winBoard = [[], [], [3, 2, 1]];
const winRef = [3, 2, 1];

console.log(checkWinner(winBoard, winRef));