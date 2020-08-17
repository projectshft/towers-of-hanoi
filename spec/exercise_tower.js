/* USER ERROR!
I can't wait to learn how to use this the right way.
*/

let board;
let inputBoardFiveDiscsThreePegs = [[5, 4, 3, 2, 1], [], []];

// creates a new game before each spec
beforeEach(function () {
  board = new TowersGameOverlord(inputBoardFiveDiscsThreePegs);
});

describe("displayBoard for TowerGameOverlord", function () {
  it("displays gameBoard", function () {
    board.displayBoard();

    expect(board.displayBoard()).toContain('---'); //expecting this text in the output
  });
});

describe("checkWinner for TowerGameOverlord", function () {
  it("checks whether all pegs are on one disc that is not the starting disc", function() {
    board.InternalCheckWinner();

    expect(board.InternalCheckWinner).toBeFalsy(); //expecting all pegs on first disc
  });
});
