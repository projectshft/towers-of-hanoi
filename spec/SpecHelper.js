var board;

beforeEach(function () {
  board = new Board;
})

describe("Moves disc from one peg to the next", function() {
  it("Removes disc from origin peg", function () {
    board.moveDisc(1,2);
    expect(board.layout[0].length).toEqual(board.numDiscs - 1);
  });

  it("Adds disc to destination peg", function () {
    board.moveDisc(1,2);
    expect(board.layout[1].length).toEqual(1);
  })
});

describe("Only allows legal moves", function () {
  it("Prevents placing larger disc on a smaller one", function() {
    board.moveDisc(1,2);
    board.moveDisc(2,1);
    expect(board.layout[0].length).toEqual(board.numDiscs - 1);
  });

  it("Only allows users to select pegs on the board", function() {

  });
});


describe("Check for winning conditions", function () {
  it ("Returns 'true' when a player wins", function () {
  board.layout =[[5,4,3,2,1], [], []];
  
  expect(board.checkWinner()).toEqual(true); 
  });
});