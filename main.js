let board = {
  tower1: [1, 2, 3, 4, 5],
  tower2: [],
  tower3: []
}

const moveDisc = (oldTower, newTower) => {
  // set arguemnts to arrays in board
  switch (oldTower) {
    case 1:
      oldTower = board.tower1;
      break;
    case 2:
      oldTower = board.tower2;
      break;
    case 3:
      oldTower = board.tower3;
      break;
    default:
      console.log(`Invalid First Tower. Pick a number between 1 and 3.`)
      break;
  }

  switch (newTower) {
    case 1:
      newTower = board.tower1;
      break;
    case 2:
      newTower = board.tower2;
      break;
    case 3:
      newTower = board.tower3;
      break;
    default:
      console.log(`Invalid Second Tower. Pick a number between 1 and 3.`)
      break;
  }

  // declared variables for top discs in towers
  let discOldTower = oldTower[oldTower.length - 1];
  let discNewTower = newTower[newTower.length - 1];

  // conditional to check if move can be done
  if (newTower.length == 0) {
    // Move disc
    //newTower.push(discOldTower);
    console.log(`Disc has been moved`);
  } else if (newTower.length) {
    // check if last element from oldTower is smaller than last element in newTower
    if (discOldTower < discNewTower) {
      // Move disc
      console.log(`Disc has been moved`);
    } else {
      // move can't be done, print board
      console.log(`You cannot move a larger disc on top of a smaller one.`)
    }
  } else {
    // move can't be done, print board
    console.log(`You cannot move a larger disc on top of a smaller one.`)
  }
}

console.log(moveDisc(1, 3));