var board;

// creates a new game before each spec
beforeEach(function () {
  board = TowersOfHanoi(3,5);

});

// sets board back to reset
afterEach(function() {
  board.setAttribute('boardArr', [['5', '4', '3', '2', '1'],[],[]])
});

// test move DISC
describe("moveDisc for board", function () {
  it("moves a disc from peg 1 to peg 2", function () {
    expect(board.getAttribute('boardArr')).toEqual([['5', '4', '3', '2', '1'],[],[]]);

    board.moveDisc(1,2);

    expect(board.getAttribute('boardArr')).toEqual([['5', '4', '3', '2'],['1'],[]]);
  });

  it("only allows you to move to peg with bigger disc", function () {

    expect(board.getAttribute('boardArr')).toEqual([['5', '4', '3', '2', '1'],[],[]]);

    board.moveDisc(1,2);
    board.moveDisc(1,2);

    expect(board.getAttribute('boardArr')).toEqual([['5', '4', '3', '2'],['1'],[]]);
  });
});