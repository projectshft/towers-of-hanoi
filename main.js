const game = {
  board : 
  [[5, 4, 3, 2, 1],
  [],
  []],
  count : 0
};

const printBoard = function() {
  let boardState = game.board;
  boardState.map((e) => {
      console.log("--- " + e)    
  });
};

const checkWinner = function() {
  if (game.count === 0) {
    throw new Error("You can't win if you haven't begun!")
  }
  let emptyPeg = 0;
  //check if two pegs are empty
  game.board.forEach((e) => {
    if (e.length === 0) {
      emptyPeg += 1;
    }
    
  });
  if (emptyPeg === 2) {
      console.log(`You Win! It only took you ${game.count} tries!`)
      game.board = [[5, 4, 3, 2, 1],
      [],
      []];
      printBoard();
    }
};

const moveDisc = function (start, end) {
  if (start < 1 || start > 3) {
    throw new Error("Invalid starting peg. Select peg 1, 2, or 3");
  }
  if (end < 1 || end > 3) {
    throw new Error("Invalid ending peg. Select peg 1, 2, or 3");
  }
  let startPeg = game.board[start - 1];
  let endPeg = game.board[end - 1];
  let discToMove = startPeg.at(-1);
  if (startPeg.length === 0) {
    throw new Error(`Peg ${start} is empty!`)
  }
  //if endPeg is empty, no need to check for disc size
  if(endPeg.length === 0) {
    endPeg[0] = discToMove;
    startPeg.pop();
  }else {
    if (endPeg.at(-1) < discToMove) {
      throw new Error("You can not place a larger disc atop a smaller one.")
    }else{
      endPeg.push(discToMove);
      startPeg.pop();
    }
  }
  game.count += 1;
  printBoard();
  checkWinner();
}