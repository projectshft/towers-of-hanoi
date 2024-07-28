const TOHBoard = function () {
  let board = [[5, 4, 3, 2, 1], [], []];
  const boardObject = {
    1: board[0],
    2: board[1],
    3: board[2],
  };

  const initialDisplay = function () {
    board.map((peg) => console.log(`--- ${peg}`));
  };

  const displayBoard = function () {
    console.log("Current Board:");
    for (const peg in boardObject) {
      console.log(`${peg}: --- ${boardObject[peg]}`);
    }
    return board;
  };

  const moveDisc = function (initialPeg, newPeg) {
    const initialArray = boardObject[initialPeg];
    const newArray = boardObject[newPeg];
    if (
      initialArray[initialArray.length - 1] < newArray[newArray.length - 1] ||
      newArray.length === 0
    ) {
      newArray.push(initialArray[initialArray.length - 1]);
      initialArray.splice(initialArray.length - 1);
    } else {
      console.log(
        "A disc cannot be moved to a peg if it is larger than the topmost disc on that peg. Please try again."
      );
      return false;
    }
    displayBoard();
    checkWinner();
    return board;
  };

  const checkWinner = function () {
    const winCondition = [5, 4, 3, 2, 1];
    if (
      boardObject[2].toString() === winCondition.toString() ||
      boardObject[3].toString() === winCondition.toString()
    ) {
      console.log("Congratulations! You win!");
      console.log("New Game:");
      resetBoard();
      displayBoard();
      return true;
    } else {
      return false;
    }
  };

  const resetBoard = function () {
    boardObject[1] = [5, 4, 3, 2, 1];
    boardObject[2] = [];
    boardObject[3] = [];
    board = [[5, 4, 3, 2, 1], [], []];
    return board;
  };

  // BUG: solvePuzzle currently only works from starting position, not from any position
  const solvePuzzle = function (n, origin, destination, auxiliary) {
    const originArray = boardObject[origin];
    const destinationArray = boardObject[destination];

    if (n === 0) {
      return;
    }

    solvePuzzle(n - 1, origin, auxiliary, destination);

    const currentPeg = board.find((arr) => arr.includes(n));
    const currentDiscIndex = currentPeg.indexOf(n);
    destinationArray.push(currentPeg[currentDiscIndex]);
    originArray.splice(currentDiscIndex);
    displayBoard();

    solvePuzzle(n - 1, auxiliary, destination, origin);

    return board;
  };

  return {
    initialDisplay: initialDisplay,
    displayBoard: displayBoard,
    moveDisc: moveDisc,
    checkWinner: checkWinner,
    resetBoard: resetBoard,
    solvePuzzle: solvePuzzle,
  };
};

const myBoard = new TOHBoard();
console.log(myBoard.displayBoard());
console.log(myBoard.moveDisc(1, 2));
myBoard.displayBoard();
console.log(myBoard.resetBoard());
myBoard.displayBoard();

//solvePuzzle(5, 1, 3, 2);

// This was my attempt at winning the game.
// moveDisc(1, 3);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(2, 1);
// moveDisc(3, 1);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(2, 3);
// moveDisc(2, 1);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
// moveDisc(1, 3);
// moveDisc(2, 3);
// moveDisc(1, 2);
// moveDisc(3, 1);
// moveDisc(3, 2);
// moveDisc(1, 2);
