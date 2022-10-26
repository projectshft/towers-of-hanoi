var game1, game2, game3, game4;
var gamesArray;

beforeEach(function () {
  game1 = new TowersGame(3, 3, "game1");
  game2 = new TowersGame(5, 3, "game2");
  game3 = new TowersGame(5, 5, "game3");
  game4 = new TowersGame(10, 15, "game4");
  gamesArray = [game1, game2, game3, game4];
});


describe("createFreshBoard for TowersGame", function () {
  it("creates a gameboard in the starting position. A 2D array, with all disks on first peg", function () {
    gamesArray.forEach((game) => {
      expect(game.gameboard[0].length).toEqual(game.disks);

      expect(game.gameboard.length).toEqual(game.pegs);
    });
  });
});


describe("Creating a new game for TowersGame", function () {
  it("should make games unique from one another", function () {
    expect(game1).not.toEqual(game2);
    expect(game2).not.toEqual(game3);
    expect(game3).not.toEqual(game4);
    expect(game4).not.toEqual(game1);
    expect(game1).not.toEqual(game3);
    expect(game2).not.toEqual(game4);
  });

  it("should create objects", function () {
    expect(typeof game1).toEqual("object");
    expect(typeof game2).toEqual("object");
    expect(typeof game3).toEqual("object");
    expect(typeof game4).toEqual("object");
  });
});


describe("startGame for TowersGame", function () {
  it("should create new gameboard when createFreshBoard is called", function () {
    game3.moveDisk(1, 3);
    game3.startGame(game3.createFreshBoard, game3.displayBoard);
    expect(game3.gameboard[0].length).toEqual(game3.disks);

    expect(game3.gameboard.length).toEqual(game3.pegs);
  });
});


describe("isMoveValid for TowersGame", function () {
  it("should return false if you try to move a disk to the same peg", function () {
    game1Board = game1.gameboard;
    expect(game1.isMoveValid(1, 1, game1Board)).toBe(false);
  });

  it("should return false if you try to move a larger disk on top of a smaller disk", function () {
    game2.moveDisk(1, 2);
    game2Board = game2.gameboard;
    expect(game2.isMoveValid(1 - 1, 2 - 1, game2Board)).toBe(false);
  });
});


describe("moveDisk for TowersGame", function () {
  it("should move a disk from one peg to another", function() {
    game2.moveDisk(1,2);
    expect(game2.gameboard[1].length).toEqual(1);
  })
});
