var board;
let userPegs = 3;
let userDiscs = 3;

beforeAll(function() {
  board = TowersGame(userPegs, userDiscs);
})

afterEach(function() {
  board.resetBoard();
})


// create a board (2-d array) from pegs and discs
describe("makes initial board:", function() {
  it("initializes an empty board", function() {
    expect(Array.isArray(board.current["board"])).toBe(true);
  });

  it("defaults to 3 pegs & 3 discs", function() {
    // expect(board.setBoardSize).toHaveBeenCalled;
    expect(board.current.pegs).toBe(userPegs);
    expect(board.current.discs).toBe(userDiscs);
  });

  it("modifies an empty board to have the right number of pegs and discs", function() {
    expect(typeof board.resetBoard === 'function').toEqual(true);

    expect(board.current["board"].length).toEqual(board.current.pegs);

    expect(board.current["board"].every(element => Array.isArray(element))).toEqual(true);

    let defaultDiscs = [3, 2, 1];

    expect(board.current["board"][0]).toEqual(defaultDiscs);
  });

  it("logs the current board status", function() {
    spyOn(console, 'log');

    let testStr = "Peg 1 --- 3 2 1";

    board.resetBoard();

    expect(console.log).toHaveBeenCalledWith(testStr);
  });
});

// print the board horizontally
describe("prints the board horizontally:", function() {
  it("prints a string to console with peg info", function() {
    spyOn(window.console, 'log');

    let testStr = "Peg 1 --- 3 2 1";

    board.resetBoard();
    board.printBoard();

    expect(console.log).toHaveBeenCalledWith(testStr);
  });
});

// allow for moving discs
describe("allow moving discs: ", function() {
  it("should have a function to move the disc", function() {
    expect(typeof board.moveDisc === 'function').toEqual(true);
  });

  it("should be able to modify the board", function() {
    let originalBoard = [3, 2, 1];

    board.moveDisc(1, 2);

    expect(originalBoard).not.toEqual(board.current["board"][0]);
  });

  it("should throw an error if there is no disc for given peg", function() {
    expect(() => {
      board.moveDisc(3, 2)
    }).toThrowError();
  });

  it("should throw error if no arguments are given for moveDisc", function() {
    expect(() => {
      board.moveDisc()
    }).toThrowError();
  })

  it("should throw error if arguments for moveDisc are not numbers", function() {
    expect(() => {
      board.moveDisc(NaN, NaN)
    }).toThrowError();
  })

  it("should only move disc if no smaller disc on desired peg", function() {
    expect(() => {
      board.moveDisc(1, 2);
      board.moveDisc(1, 2);
    }).toThrowError();
  });
});

// check for winners
describe("check for winners using reduce:", function() {
  it("should have a checkWinner method", function() {
    expect(typeof board.checkWinner === 'function').toBe(true);
  });

  it("should return false if not a winner", function() {
    board.moveDisc(1, 2);

    expect(board.checkWinner()).toBeFalsy();
  });

  it("should not return winner after 0 moves", function() {
    expect(board.checkWinner()).not.toEqual(true);
  })

  it("if there's a win, alert that the user has won & reset", function() {
    spyOn(console, 'log').and.callThrough();

    const winMessage = "You won! Play again!"

    board.moveDisc(1, 2);
    board.moveDisc(1, 3);
    board.moveDisc(2, 3);
    board.moveDisc(1, 2);
    board.moveDisc(3, 1);
    board.moveDisc(3, 2);
    board.moveDisc(1, 2);

    expect(console.log).toHaveBeenCalled();
    expect(board.resetBoard).toHaveBeenCalled;
  });
});
