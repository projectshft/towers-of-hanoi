
var towers = towersOfHanoi

// creates a new game before each spec
beforeEach(function () {
  towers.reset()
});

// sets books back to 'checked in' after each spec
afterEach(function() {
  towers.reset();
});

describe("moveDisc", function () {
  it("moves the top disc of one peg to the top of another", function () {
    expect(towers.gameboard[1].length).toEqual(0);

    towers.moveDisc(1, 2);

    expect(towers.gameboard[1][0]).toEqual(1);
  });

  it("does not allow a larger disc on top of a smaller one", function () {
    towers.moveDisc(1, 2);

    towers.moveDisc(1, 2);

    expect(towers.gameboard[1][0]).toEqual(1);

  });
});

describe("checkWinner", function () {
  it("recognizes the winner and resets the game", function () {
    towers.gameboard = [
      [1],
      [5, 4, 3, 2],
      []
    ];

    towers.moveDisc(1, 2);

    expect(towers.gameboard[0]).toEqual([5, 4, 3, 2, 1]);

  });
});

describe("changeFormat", function () {
  it("should allow any number of pegs", function () {
    
    towers.changeFormat(8, 3)
    
    expect(towers.gameboard.length).toEqual(8);
  });

  it("should allow any number of discs", function () {
    towers.changeFormat(3, 13)
    
    expect(towers.gameboard[0].length).toEqual(13);
  });
});
