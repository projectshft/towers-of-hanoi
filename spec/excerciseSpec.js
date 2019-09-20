var hanoiGame;

// creates a new game before each spec
beforeEach(function () {
  //can't think of any before eaches yet
});

// sets books back to 'checked in' after each spec
afterEach(function () {
  //don't need any after eaches
});

describe("checks proper game setup", function () {
  it("pegs must be at least 3 and discs must be at least 1", function () {
    hanoiGame = HanoiGame(0, 0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(0, 1);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(0, 2);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(0, 3);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1, 0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1, 1);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1, 2);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1, 3);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2, 0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2, 1);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2, 2);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2, 3);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(3, 0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(3, 1);
    expect(typeof hanoiGame).toEqual('object');
    hanoiGame = HanoiGame(3, 2);
    expect(typeof hanoiGame).toEqual('object');
    hanoiGame = HanoiGame(3, 3);
    expect(typeof hanoiGame).toEqual('object');
  });

  it("prints board. should be all discs on first peg", function () {
    hanoiGame = HanoiGame(3, 1);
    expect(hanoiGame.boardView()).toEqual("--- 1\n---\n---");
    hanoiGame = HanoiGame(3, 3);
    expect(hanoiGame.boardView()).toEqual("--- 3 2 1\n---\n---");
    hanoiGame = HanoiGame(3, 5);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---");
    hanoiGame = HanoiGame(5, 5);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---\n---\n---");
  });
});

describe("checks proper game movement", function () {
  it("moves pegs in mismatching board scenarios", function () {
    hanoiGame = HanoiGame(5, 5);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---\n---\n---");
    //move invalid peg numbers (both non-existing and same to same)
    hanoiGame.moveDisc(0, 0);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---\n---\n---");
    hanoiGame.moveDisc(0, 1);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---\n---\n---");
    hanoiGame.moveDisc(1, 0);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---\n---\n---");
    hanoiGame.moveDisc(1, 10);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---\n---\n---");
    hanoiGame.moveDisc(1, 1);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2 1\n---\n---\n---\n---");
  });
  it("moves pegs in valid scenarios", function () {
    //check valid moves
    hanoiGame = HanoiGame(5, 5);
    hanoiGame.moveDisc(1, 2);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2\n--- 1\n---\n---\n---");
    hanoiGame = HanoiGame(5, 5);
    hanoiGame.moveDisc(1, 3);
    expect(hanoiGame.boardView()).toEqual("--- 5 4 3 2\n---\n--- 1\n---\n---");
    hanoiGame = HanoiGame(5, 5);
    hanoiGame.moveDisc(1, 2);
    hanoiGame.moveDisc(1, 3);
    hanoiGame.moveDisc(1, 4);
    expect(hanoiGame.boardView()).toEqual("--- 5 4\n--- 1\n--- 2\n--- 3\n---");
    hanoiGame = HanoiGame(5, 5);
    hanoiGame.moveDisc(1, 2);
    hanoiGame.moveDisc(1, 3);
    hanoiGame.moveDisc(1, 4);
    hanoiGame.moveDisc(2, 4);
    expect(hanoiGame.boardView()).toEqual("--- 5 4\n---\n--- 2\n--- 3 1\n---");
  });
  it("attempts to move larger pegs onto smaller pegs", function () {
    //check invalid moves due to disc size
    hanoiGame = HanoiGame(5, 5);
    hanoiGame.moveDisc(1, 2);
    hanoiGame.moveDisc(1, 3);
    hanoiGame.moveDisc(1, 4);
    hanoiGame.moveDisc(4, 2);
    expect(hanoiGame.boardView()).toEqual("--- 5 4\n--- 1\n--- 2\n--- 3\n---");
  });
});

describe("play the game to check for winner", function () {
  it("moves pegs in solution order checking winner after each", function () {
    hanoiGame = HanoiGame(3, 3);
    hanoiGame.moveDisc(1, 2);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(1, 3);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(2, 3);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(1, 2);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(3, 1);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(3, 2);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(1, 2);
    expect(hanoiGame.checkWinner()).toEqual(true);
    //move it back
    hanoiGame.moveDisc(2, 1);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(2, 3);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(1, 3);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(2, 1);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(3, 2);
    expect(hanoiGame.checkWinner()).toEqual(false);
    hanoiGame.moveDisc(3, 1);
    expect(hanoiGame.checkWinner()).toEqual(false);
    //still false because first peg
    hanoiGame.moveDisc(2, 1);
    expect(hanoiGame.checkWinner()).toEqual(false);
  });
});