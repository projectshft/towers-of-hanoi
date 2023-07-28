describe('checkBoardSetup', function() {
  // var gameDiv;

  beforeEach(() => {
    // gameDiv = document.createElement('div');
    // gameDiv.id = 'game';

    pegs = 5;
    discs = 7;

    board = new Board(pegs, discs);
  });

  it('should return a nested array with lengths of peg input and disc input', function () {
    output = board.board;

    expect(output.length).toBe(pegs);
    expect(output[0].length).toBe(discs);
    expect(output[1].length).toBe(0);
    expect(output[2].length).toBe(0);

  });
});

describe('checkMoveValidity', function() {
  beforeEach(function () {
    pegs = 3;
    discs = 5;

    board = new Board(pegs, discs);
    board.startNewGame();
  });

  it('should return an error message if trying to move disc from a peg that does not exist', function (){

    output = board.moveDisc(4, 1);

    expect(output).not.toBeUndefined();
    expect(output).toBe('The peg you want to move a disc from doesn\'t exist! Board is still:')
  });

  it('should return an error message if trying to move disc to a peg that does not exist', function (){

    output = board.moveDisc(1, 4);

    expect(output).not.toBeUndefined();
    expect(output).toBe('The peg you want to move a disc to doesn\'t exist! Board is still:');
  });

  it('should return an error message if trying to move disc from empty peg', function (){

    output = board.moveDisc(3, 1);

    expect(output).not.toBeUndefined();
    expect(output).toBe('There aren\'t any discs on that peg! Board is still:');
  });

  it('should return an error message if trying to move a larger disc on top of a smaller one', function (){

    board.moveDisc(1, 2);
    output = board.moveDisc(1, 2);

    expect(output).not.toBeUndefined();
    expect(output).toBe('You cannot move a larger disc on top of a smaller one. Board is still:');
  });
});

describe('checkWinner', function () {
  beforeEach(function () {
    pegs = 3;
    discs = 5;

    board = new Board(pegs, discs);
    board.startNewGame();

  });

  it('should return winner = false if discs are in the right order but not all discs are on the same peg', function () {
    board.board = [[],
                   [5],
                   [4, 3, 2, 1]];

    output = board.checkWinner();

    expect(output).toBeFalsy();
  });
});