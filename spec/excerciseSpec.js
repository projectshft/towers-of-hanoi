// creates a new game before each spec
beforeEach(function () {
  game = Board();
});

// sets books back to 'checked in' after each spec
afterEach(function() {
  game = Board();
});

describe("legalPegs for Board", function () {
  it("checks legal destinations for disc \"1\"", function () {
    expect(game.legalMoves(1)).toEqual([2,3]);

    game.legalMoves(1);
  });

  it("should return undefined if no discs on given peg position", function () {
    expect(game.legalMoves(2)).toEqual(undefined);

    game.legalMoves(2);
  });

  it("should return array of legal peg numbers disc can move to", function () {
    game = Board(10,4);

    expect(game.legalMoves(1)).toEqual([2,3,4,5,6,7,8,9,10]);

    game.legalMoves(1);
  });
});

