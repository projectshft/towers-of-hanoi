// moveDisc()
// validateInput()
// stateStr
// getState
// checkWinner()

// const year = 2022;
// describe('Get year dates', () => {
//   it('they should be a number', () => {
//     expect(year).toBe(2022);
//   });
// });

// board creation / initBoard()
describe('initBoard for Board', () => {
  it('creates a board with the specified number of pegs and discs', () => {
    const board = new Board(8, 3);
    expect(board.getState[0].length).toEqual(8);
    expect(board.getState.length).toEqual(3);
    expect(board.getPegs).toEqual(3);
    expect(board.getDiscs).toEqual(8);
  });

  it('creates a board with predetermined discs and pegs if the input is invalid', () => {
    const board = new Board(-1, 5);
    expect(board.getState[0].length).toEqual(5);
    expect(board.getState.length).toEqual(5);
  });
});

describe('moveDisc for Board', () => {
  it('correctly moves a disk from the specified starting peg to the specified ending peg', () => {
    const board = new Board(5, 3);
    board.moveDisc(1, 3);
    expect(board.getState[2][0]).toEqual(1);
    expect(board.getState[0][3]).toEqual(2);
  });

  it('will not change the board if the input is not valid', () => {
    const board = new Board(5, 3);
    board.moveDisc('a', -2);
    board.moveDisc(1, 5);
    expect(board.getState[0][4]).toEqual(1);
  });
  it('will call checkWinner() when a move goes through', () => {
    const board = new Board(5, 3);
    spyOn(board, 'checkWinner');
    board.moveDisc(1, 3);
    expect(board.checkWinner).toHaveBeenCalled();
  });
});

describe('validateInput for Board', () => {
  it('will correctly reject non whole number inputs', () => {
    const board = new Board(5, 3);
    expect(board.validateInput(1.2, 3)).toEqual(false);
    expect(board.validateInput(NaN, 3)).toEqual(false);
    expect(board.validateInput(1, NaN)).toEqual(false);
    expect(board.validateInput(1, 3.8)).toEqual(false);
  });
  it('will correctly reject input data outside of the bounds of the board array', () => {
    const board = new Board(5, 3);
    expect(board.validateInput(0, 3)).toEqual(false);
    expect(board.validateInput(1, 4)).toEqual(false);
    expect(board.validateInput(-1, -4)).toEqual(false);
  });
  it('will correctly reject inputs where there is no peg at the designated starting index', () => {
    const board = new Board(5, 3);
    expect(board.validateInput(2, 3)).toEqual(false);
    board.moveDisc(1, 2);
    expect(board.validateInput(2, 3)).toEqual(true);
    board.moveDisc(2, 3);
    expect(board.validateInput(2, 3)).toEqual(false);
  });
  it('will check if there is a disc on the specified peg and if the disc on the final peg is smaller than the disc on the initial peg', () => {
    const board = new Board(5, 3);
    expect(board.validateInput(1, 2)).toEqual(true);
    board.moveDisc(1, 2);
    expect(board.validateInput(1, 3)).toEqual(true);
    board.moveDisc(1, 3);
    expect(board.validateInput(3, 2)).toEqual(false);
    expect(board.validateInput(2, 3)).toEqual(true);
    board.moveDisc(2, 3);
  });
});
describe('stateStr for Board', () => {
  it('returns a string of the given board state', () => {
    const boardExample = '--- 5 4 3 2 1\n---\n---';
    const boardExample2 = '--- 5 4 3 2\n---\n--- 1';
    const board = new Board(5, 3);
    expect(board.stateStr).toEqual(boardExample);
    board.moveDisc(1, 3);
    expect(board.stateStr).toEqual(boardExample2);
  });
});
describe('getState for Board', () => {
  it('returns an array of the game state', () => {
    const boardExample = [[5, 4, 3, 2, 1], [], [], []];
    const boardExample2 = [[5, 4, 3, 2], [], [], [1]];
    const board = new Board(5, 4);
    expect(board.getState).toEqual(boardExample);
    board.moveDisc(1, 4);
    expect(board.getState).toEqual(boardExample2);
  });
});
describe('getDiscs for Board', () => {
  it('returns the number of discs in the game', () => {
    const board = new Board(10, 4);
    expect(board.getDiscs).toEqual(10);
    const board2 = new Board(17, 4);
    expect(board2.getDiscs).toEqual(17);
    const board3 = new Board(-5, 1);
    expect(board3.getDiscs).toEqual(5);
  });
});
describe('getPegs for Board', () => {
  it('returns the number of pegs in the game', () => {
    const board = new Board(10, 4);
    expect(board.getPegs).toEqual(4);
    const board2 = new Board(17, 100);
    expect(board2.getPegs).toEqual(100);
    const board3 = new Board(-5, 1);
    expect(board3.getPegs).toEqual(3);
  });
});
// describe('checkWinner for Board', () => {
//   it('returns if the player has won or not', () => {
//     const boardExample = [[], [], [5, 4, 3, 2, 1], []];
//     const board = new Board(5, 3);
//     board.boardArray = boardExample;
//     expect(board.checkWinner()).toEqual(true);
//     const board2 = new Board(17, 100);
//     expect(board2.checkWinner()).toEqual(false);
//   });
// });
describe('changeGamePieces for Board', () => {
  it('changes the number of discs and pegs in the game while restarting the game', () => {
    const boardExample = [[10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [], [], []];
    const board = new Board(5, 3);
    board.moveDisc(1, 3);
    board.moveDisc(1, 2);
    board.changeGamePieces(10, 4);
    expect(board.getState).toEqual(boardExample);
    expect(board.getDiscs).toEqual(10);
    expect(board.getPegs).toEqual(4);
  });
  it('validates if the input is valid and does not restart when input is invalid', () => {
    const board = new Board(8, 3);
    board.moveDisc(1, 3);
    board.moveDisc(1, 2);
    board.changeGamePieces(0, 4);
    expect(board.getDiscs).toEqual(8);
    expect(board.getPegs).toEqual(3);
  });
});
