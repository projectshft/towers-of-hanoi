var myBoard;
var boardState;

beforeEach(function() {
  myBoard = Object.create(board);
  boardState = myBoard.boardState();
});

describe("initializeBoard for boardState", function() {
  it("creates with disk on the first peg", function() {
    expect(boardState.returnBoardCopy()).toEqual([]);

    boardState.initializeBoard();

    expect(boardState.returnBoardCopy()).toEqual([
      ["3", "2", "1"],
      [],
      []
    ]);
  });
  it("resets the move counter to 0", function() {
    boardState.initializeBoard();
    myBoard.playerMove(1, 2, boardState);
    boardState.initializeBoard();
    expect(boardState.getMoves()).toEqual(0);
  })
});

describe("setPegs for boardState", function() {
  it("should set peg value for board", function() {
    boardState.setPegs(5);
    expect(boardState.getPegs()).toEqual(5);
  })
})

describe("setDisks for boardState", function() {
  it("should set disk value for board", function() {
    boardState.setDisks(5);
    expect(boardState.getDisks()).toEqual(5);
  })
})

describe("incrementMoves for boardState", function() {
  it("should raise move counter by 1", function() {
    boardState.initializeBoard();
    expect(boardState.getMoves()).toEqual(0);

    boardState.incrementMoves();

    expect(boardState.getMoves()).toEqual(1);
  })
});

describe("playerMove for board", function() {
  it("should move disk from one peg to another", function() {
    boardState.initializeBoard();
    expect(boardState.returnBoardCopy()).toEqual([
      ["3", "2", "1"],
      [],
      []
    ]);
    myBoard.playerMove(1, 3, boardState);
    expect(boardState.returnBoardCopy()).toEqual([
      ["3", "2"],
      [],
      ["1"]
    ]);
  })

  it("cannot move disk on top of a smaller disk", function() {
    boardState.initializeBoard();
    expect(boardState.returnBoardCopy()).toEqual([
      ["3", "2", "1"],
      [],
      []
    ]);
    myBoard.playerMove(1, 3, boardState);
    expect(boardState.returnBoardCopy()).toEqual([
      ["3", "2"],
      [],
      ["1"]
    ]);
    myBoard.playerMove(1, 3, boardState);
    expect(boardState.returnBoardCopy()).toEqual([
      ["3", "2"],
      [],
      ["1"]
    ]);
  })
});

describe("isValidMove for board", function() {
  it("returns false if a move is invalid", function() {
    boardState.initializeBoard();
    myBoard.playerMove(1, 3, boardState);
    expect(myBoard.isValidMove(0, 2, boardState)).toEqual(false);
  });
  it("returns true if a move is valid", function() {
    boardState.initializeBoard();
    expect(myBoard.isValidMove(0, 2, boardState)).toEqual(true);
  })
})

describe("pegsAreEqual for BoardModule", function() {
  it("returns true if arrays contain the same values (strings)", function() {
    expect(myBoard.pegsAreEqual(["1", "2", "4"], ["1", "2", "4"])).toEqual(true);
    expect(myBoard.pegsAreEqual([], [])).toEqual(true);
  });
  it("returns false if arrays do not contain the same values (strings)", function() {
    expect(myBoard.pegsAreEqual(["1", "2", "4"], ["1", "2", "3"])).toEqual(false);
    expect(myBoard.pegsAreEqual(["1", "2", "4"], [])).toEqual(false);
    expect(myBoard.pegsAreEqual([], ["1", "2", "4"])).toEqual(false);
  })
})

describe("calculateWinningPeg for board", function() {
  it("returns a string representing a winning peg", function() {
    expect(myBoard.calculateWinningPeg(boardState)).toEqual("321");
  });
})

describe("checkWinner for board", function() {
  it("returns true if a game has been won", function() {
    boardState.initializeBoard();
    myBoard.playerMove(1, 3, boardState);
    myBoard.playerMove(1, 2, boardState);
    myBoard.playerMove(3, 2, boardState);
    myBoard.playerMove(1, 3, boardState);
    myBoard.playerMove(2, 1, boardState);
    myBoard.playerMove(2, 3, boardState);
    myBoard.playerMove(1, 3, boardState);
    expect(myBoard.checkWinner(boardState)).toEqual(true);

    boardState.initializeBoard();
    myBoard.playerMove(1, 2, boardState);
    myBoard.playerMove(1, 3, boardState);
    myBoard.playerMove(2, 3, boardState);
    myBoard.playerMove(1, 2, boardState);
    myBoard.playerMove(3, 1, boardState);
    myBoard.playerMove(3, 2, boardState);
    myBoard.playerMove(1, 2, boardState);
    expect(myBoard.checkWinner(boardState)).toEqual(true);
  });

  it("returns false if a game has not been won", function() {
    boardState.initializeBoard();
    expect(myBoard.checkWinner(boardState)).toEqual(false);
    myBoard.playerMove(1, 2, boardState);
    expect(myBoard.checkWinner(boardState)).toEqual(false);
  })
});

describe("validMoves for boardState", function() {
  it("returns an array with pegs that are available to move to from sourcePegIndex", function() {
    boardState.initializeBoard();
    expect(boardState.validMoves(0)).toEqual([
      [],
      []
    ]);
    myBoard.playerMove(1, 3, boardState);
    expect(boardState.validMoves(2)).toEqual([
      ["3", "2"],
      []
    ]);
  })
})

describe("clearBoard for boardState", function() {
  it("clears disks from board so that it is empty", function() {
    boardState.initializeBoard();
    boardState.clearBoard();
    expect(boardState.returnBoardCopy()).toEqual([]);
  })
})
