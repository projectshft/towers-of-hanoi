const checkWinner = (boardPegSize, boardToCheck, winRefArr) => {
  for (let peg = 1; peg < boardPegSize; peg++) {
    if (boardToCheck[peg] == winRefArr) {
      console.log('You won!')
      return true;
    } else {
      console.log('You haven\'t won yet.');
      return false;
    }
  }
}

checkWinner(3, [[], [], [3, 2, 1]], [3, 2, 1]);