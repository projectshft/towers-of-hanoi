var hanoiGame;

// creates a new game before each spec
beforeEach(function () {
  //can't think of any before eaches yet
});

// sets books back to 'checked in' after each spec
afterEach(function() {
  //don't need any after eaches
});

describe("checks proper game setup", function () {
  it("pegs must be at least 3 and discs must be at least 1", function () {
    hanoiGame = HanoiGame(0,0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(0,1);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(0,2);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(0,3);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1,0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1,1);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1,2);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(1,3);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2,0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2,1);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2,2);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(2,3);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(3,0);
    expect(hanoiGame).toEqual(null);
    hanoiGame = HanoiGame(3,1);
    expect(typeof hanoiGame).toEqual('object');
    hanoiGame = HanoiGame(3,2);
    expect(typeof hanoiGame).toEqual('object');
    hanoiGame = HanoiGame(3,3);
    expect(typeof hanoiGame).toEqual('object');
  });

  // it("only allows you to check out books that exist in the library", function () {
  //   var toot = Book('Toot', 'Leslie Patricelli');

  //   expect(toot.getAttribute('checkedOut')).toEqual(false);

  //   library.checkOutBook(toot);

  //   expect(toot.getAttribute('checkedOut')).toEqual(false);
  // });
});