var board = Board();

//when running tests, getting the user input will happen 3 times - once from the main.js file and then twice to test the function
describe("getUserInputForNewGame for Board", function () {
  it("only accepts peg numbers between 3 and 7", function () {
    var numPegs = board.getUserInputForNewGame()[0];
    expect(numPegs >= 3 || numPegs <= 7).toEqual(true);
})
    it("only accepts disc numbers between 2 and 5", function () {
      var numDiscs = board.getUserInputForNewGame()[1];
      expect(numDiscs >= 2 || numPegs <= 5).toEqual(true);

  });
});

describe("moveDisc for Board", function () {
  it("only moves when peg is in range", function () {
    board.newGame([3,2]);
    expect(board.moveDisc(1,0)).toEqual(false);
  })
  it("won't move when starting peg has no discs", function () {
    board.newGame([3,2]);
    expect(board.moveDisc(2,1)).toEqual(false);
  })
  it("will move when starting peg has discs and ending peg is empty", function () {
    board.newGame([3,2]);
    expect(board.moveDisc(1,2)).toEqual(true);
  })
  it("won't move when ending peg has a smaller disc on top than the starting peg", function () {
    board.newGame([3,2]);
    expect(board.moveDisc(1,2)).toEqual(true);
  })
});
