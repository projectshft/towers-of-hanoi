var game;
beforeEach(function () {
  game = new TowersOfHanoiEngine();
  game.generateBoard(5,3);
});

describe("checkMove ", function () {
  it("won't let you move a disc off the board", function () {
    expect(game.checkMove(1,6)).toEqual(false);
  });

  it("won't let you move a larger disc on top of a smaller disc", function () {
    game.makeMove(1,2);
    expect(game.checkMove(1,2)).toEqual(false);
  });

  it("won't let you move from a peg without a disc on it", function () {
    expect(game.checkMove(2,3)).toEqual(false);
  });
});

describe("makeMove ", function () {
  it("should move disc to new peg", function () {
    game.makeMove(1,3)
    expect(game.board[2][0]).toEqual('1');
  });

  it("should move disc to top of new peg", function () {
    game.makeMove(1,3);
    game.makeMove(1,2);
    game.makeMove(3,2);
    expect(game.board[1]).toEqual(['2', '1']);
  });
});

describe("checkWinner ", function () {
  it("should not be true when all the discs are on the first peg", function () {
    game.makeMove(1,3);
    game.makeMove(3,1);
    expect(game.checkWinner()).toEqual(false);
  });

  it("should be true and game should reset when all discs are on another peg", function () {
    game.makeMove(1,3);
    game.makeMove(1,2);
    game.makeMove(1,4);
    game.makeMove(2,4);
    game.makeMove(3,4);
    expect(game.board).toEqual([['3','2','1'],[],[],[],[]]);
  });
});
