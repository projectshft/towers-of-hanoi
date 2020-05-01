//Create 2D array

let board = [
  [3,2,1],
  [],
  []
];

console.log(board)

//helper function to determine if start & end values are valid peg numbers
let isValidMoveType = (moveType) => {
  return (moveType >= 0) && (moveType <= 2)
}

const moveDisc = (start, end) => {
  let startDisc = board[start][board[start].length - 1];
  console.log(`startDisc = ${startDisc}`);
  let endDisc = board[end][board[end].length - 1]
  console.log(`endDisc = ${endDisc}`)

  if (!isValidMoveType(start) || !isValidMoveType(end)) {
    console.log(`INVALID MOVE: Please enter a valid peg number (Between 0 and 2). The board is still:`);
    console.log(board);
    return;
  }

  if(board[start].length === 0) {
    console.log(`INVALID MOVE: There are no more moves for that peg, please refer to board printout. The board is still:`);
    console.log(board);
    return;
  }

  if(startDisc > endDisc) {
    console.log(`INVALID MOVE: You can not move a larger disc on top of a smaller disc. The board is still:`);
    console.log(board);
    return;
  }

  
  board[end].push(board[start][board[start].length - 1]);
  board[start].pop();
  console.log(`The move was successful. The board is now:`);
  console.log(board);
};

// moveDisc(-1, 1)
// moveDisc('pizza', 1)
// moveDisc(0,3)
// moveDisc(0, 2)
// moveDisc(0, 2)
// moveDisc(0, 2)
moveDisc(0, 2)

moveDisc(0,2)

moveDisc(2, 0)




//Saved code for later

//board[0].splice(board[(board[0].length- 1)],0,1) keep for future reference (might need splice later)
//board[0].push(board[2][(board[2].length - 1)])

  // if (typeof(start) !== 'number' || typeof(end) !== 'number') {
  //    return console.log(`Please enter a valid peg number (Between 0 and 2)`)
  // }

  // if (start > 2 || start < 0 || end > 2 || end < 0 ) {
  //   return console.log(`Please enter a valid peg number (Between 0 and 2)`)
  // }