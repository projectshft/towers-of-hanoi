let board = {
  tower1: [5, 4, 3, 2, 1],
  tower2: [2, 3],
  tower3: []
}


const moveDisc = (oldTower, newTower) => {
  // need code to set arguemnts to arrays in board (maybe use switch statement?)
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


  


  // conditional to check if move can be done
  oldTower.forEach(function (disc) {
    console.log(disc);
  })
}

console.log(moveDisc(1, 2));