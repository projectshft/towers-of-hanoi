var example = {
  board: [
    [1, 2, 'X'],
    ['O', 5, 'O'],
    [7, 8, 'X']
  ],
  playerIsX: true
};

describe("checkGameOver", function() {

  it("returns true if board has three Xs in a row", function() {
    var a = {
      board: [
        [1, 2, 'X'],
        [4, 5, 'X'],
        [7, 8, 'X']
      ],
      playerIsX: true
    }
    expect(checkGameOver(a)).toBe(true);
  })

  it("returns true if there is a stalemate", function() {
    var b = {
      board: [
        ['X', 'O', 'X'],
        [4, 'X', 'O'],
        ['O', 'O', 'X']
      ],
      playerIsX: true
    }
    expect(checkGameOver(b)).toBe(true);

  });

  it("returns true if board has 3 Os in a row", function() {
    var a = {
      board: [
        ['O', 2, 3],
        [4, 'O', 6],
        [7, 8, 'O']
      ],
      playerIsX: true
    }
    expect(checkGameOver(a)).toBe(true);
  });
});

describe("printBoard", function() {
  it("returns a 3-line representation of the tic tac toe board", function() {
    var a = {
      board: [
        [1, 2, 'X'],
        ['O', 5, 'O'],
        [7, 8, 'X']
      ],
      playerIsX: true
    };
    expect(printBoard(a.board)).toEqual("12X\nO5O\n78X");
  });


});

describe("play", function() {
  it("only accepts numerical characters as input", function() {
    expect(play('a', example)).toEqual(example);
  });
  it("only accepts numbers 1-9 as input", function() {
    expect(play('12', example)).toEqual(example);
  });
  it("does not allow plays on squares containing X or O", function() {
    expect(play('3', example)).toEqual(example);
  });

  it("switches the current player when the turn is complete", function() {
    var b = {
      board: [
        [1, 2, 'X'],
        ['O', 5, 'O'],
        [7, 8, 'X']
      ],
      playerIsX: true
    };
    expect(play(8, b).playerIsX).toBe(false);
  });
});
