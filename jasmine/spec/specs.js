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
  });

  it('creates a board with predetermined discs and pegs if the input is invalid', () => {
    const board = new Board(-1, 5);
    expect(board.getState[0].length).toEqual(5);
    expect(board.getState.length).toEqual(5);
  });
});

describe('moveDisc for board', () => {
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
});
