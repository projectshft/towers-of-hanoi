var player;
beforeEach(function () {
  player = new Game();
});

//describe block is a block of tests
describe("board property contains the correct array that was passed into it", function () {
  //our it block will be an individual test
  it("The first peg has all of the discs", function () {
    expect(player.board[0]).toEqual([5, 4, 3, 2, 1]);
  });
  it("The second peg is empty", function () {
    expect(player.board[1]).toEqual([]);
  });
  it("The third peg is empty", function () {
    expect(player.board[2]).toEqual([]);
  });
});
// top disc can move to empty peg
describe("moveDisc function only makes valid disc moves", function () {
  it("discs can move to empty pegs", function () {
    player.moveDisc(1, 2);
    expect(player.board[1]).toEqual([1]);
    player.moveDisc(1, 3);
    expect(player.board[2]).toEqual([2]);
  });
  it("larger discs can not go on top of smaller discs", function () {
    player.moveDisc(1, 2);
    player.moveDisc(1, 2);
    expect(player.board[0]).toEqual([5, 4, 3, 2]);
    expect(player.board[1]).toEqual([1]);
  });

  it("currentPeg argument should be a peg on the board", function () {
    player.moveDisc(1, 2);
    expect(player.board[0]).toEqual([5, 4, 3, 2]);
    player.moveDisc(0, 3);
    expect(player.board[-1]).toEqual(undefined);
    expect(player.board[2]).toEqual([]);
  });
  it("newPeg argument should be a peg on the board", function () {
    player.moveDisc(1, 3);
    expect(player.board[2]).toEqual([1]);
    player.moveDisc(1, 5);
    expect(player.board[-5]).toEqual(undefined);
    expect(player.board[0]).toEqual([5, 4, 3, 2]);
  });
  it("only numbers can be used to change pegs", function () {
    player.moveDisc(1, 3);
    expect(player.board[0]).toEqual([5, 4, 3, 2]);
    player.moveDisc("1", 3);
    expect(player.board[0]).toEqual([5, 4, 3, 2]);
  });
});

describe("checkWinner resets board if win criteria is met", function () {
  it("rings stacked from biggest to smallest on a new peg resets the board", function () {
    var endPlayer = new Game();
    endPlayer.board = [[1], [5, 4, 3, 2], []];
    endPlayer.moveDisc(1, 2);
    expect(endPlayer.board[0]).toEqual([5, 4, 3, 2, 1]);
  });
});

// checkWinner
// should check if the discs have been restacked in the correct order
// should fail if the row of discs is on the 1st peg
//if a peg is full the others should be empty
