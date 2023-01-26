let board = {
  tower1: [5, 4, 3, 2, 1],
  tower2: [],
  tower3: []
}

const moveDisc = (oldTower) => {
  // need code to set arguemnts to arrays in board (maybe use switch statement?)
  if (oldTower == 1) {
    oldTower = board.tower1;
    console.log(oldTower);
  } else if (oldTower == 2) {
    oldTower = board.tower2;
    console.log(oldTower);
  } else if (oldTower == 3) {
    oldTower = board.tower3
    console.log(oldTower);
  } else {
    console.log(`Invalid Tower. Pick a number between 1 and 3.`)
  }
  // conditional to check if move can be done
  // if ()
}

console.log(moveDisc(2));