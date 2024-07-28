var board;

// creates a new game before each spec
beforeEach(function () {
  board = new TOHBoard();
});

describe("moveDisc", function () {
  it("moves the topmost disc from one peg to another", function () {
    expect(board.moveDisc(1, 2)).toEqual([[5, 4, 3, 2], [1], []]);
  });

  it("prevents user from stacking a larger disc on top of a smaller one", function () {
    board.moveDisc(1, 2);
    board.moveDisc(1, 3);
    expect(board.moveDisc(1, 3)).toEqual(false);
  });
});

describe("solvePuzzle", function () {
  it("completes the puzzle from the starting position", function () {
    expect(board.solvePuzzle(5, 1, 2, 3)).toEqual([[], [5, 4, 3, 2, 1], []]);
  });
});

describe("checkWinner", function () {
  it("checks if user has won the game", function () {
    expect(board.checkWinner()).toEqual(false);

    board.solvePuzzle(5, 1, 2, 3);

    expect(board.checkWinner()).toEqual(true);
  });
});

describe("resetBoard", function () {
  it("resets board to starting position", function () {
    board.solvePuzzle(5, 1, 2, 3);
    expect(board.displayBoard()).toEqual([[], [5, 4, 3, 2, 1], []]);

    board.resetBoard();

    expect(board.displayBoard()).toEqual([[5, 4, 3, 2, 1], [], []]);
  });
});
