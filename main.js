const TowersOfHanoi = (pegs = 3, discs = 3) => {
  let board;
  let moves;
  let discSum;

  const printBoard = () => {
    const currentBoard = board.map(peg => `--- ${peg.join(' ')}\n`).join('');

    console.log(currentBoard);
  };

  const moveDisc = (start, end) => {
    // Subtract 1 from start and end for 0 based index
    const startPosition = start - 1;
    const endPosition = end - 1;
    const startPeg = board[startPosition];
    const endPeg = board[endPosition];

    // Check for unallowed moves
    if (!startPeg) {
      console.log(
        "You can't move a disk from off of the board, board is still:"
      );
      return printBoard();
    }

    if (endPosition > board.length - 1) {
      console.log(
        'You must move the disc to a spot on the board, board is still:'
      );
      return printBoard();
    }

    if (startPeg.length === 0) {
      console.log("You can't move a disk from an empty peg, board is still:");
      return printBoard();
    }

    if (startPosition === endPosition) {
      console.log(
        "You can't move the disc to the same spot on the board, board is still:"
      );
      return printBoard();
    }

    if (!allowedMoves(startPeg, endPosition)) {
      console.log(
        "You can't move a larger disc on top of a smaller one, board is still:"
      );
      return printBoard();
    }

    // Successful move
    console.log('That move was successful, board is now:');
    const disc = startPeg.pop();
    endPeg.push(disc);
    moves++;
    printBoard();
    checkWinner();
  };

  const allowedMoves = (peg, endPosition) => {
    const topDisc = peg[peg.length - 1];
    const allowedPegs = [];

    board.filter((currentPeg, i) => {
      const currentPegTopDisc = currentPeg[currentPeg.length - 1];

      // Make sure disc is smaller than the one on the top of the peg
      // If peg length === 0 peg is empty and available to move to
      if (currentPegTopDisc > topDisc || currentPeg.length === 0) {
        allowedPegs.push(i);
      }
    });

    return allowedPegs.includes(endPosition);
  };

  const checkWinner = () => {
    board.forEach((peg, i) => {
      // Can't win in starting positon
      if (i !== 0) {
        const currentDiscSum = peg.reduce((total, n) => (total += n), 0);

        if (currentDiscSum === discSum) {
          console.log(`You win! It took ${moves} moves.`);
          console.log('The game will now reset...\n');
          resetGame();
        }
      }
    });
  };

  const resetGame = () => {
    board = newGameBoard(pegs, discs);
    moves = 0;
    // Sum the sequence from 1 to the value of discs
    discSum = (discs * (1 + discs)) / 2;

    console.log(
      'Welcome to the Towers of Hanoi game!\nThis is the board, make a move:'
    );
    printBoard();
  };

  const newGameBoard = (pegs, discs) => {
    return Array.from({ length: pegs }, (_, i) => {
      if (i !== 0) {
        return [];
      }

      return Array.from({ length: discs }, (_, i) => discs - i);
    });
  };

  // Start game upon invocation
  resetGame();

  return {
    moveDisc,
    resetGame,
  };
};
