
beforeEach(function () {
  accessBoard.endGame = false;
  accessBoard.boardRow1 = [1,2,3];
  accessBoard.boardRow2 = [4,5,6];
  accessBoard.boardRow3 = [7,8,9];
  validMove = true;
  announceWinner = false;
  winner = 'winner'
});

afterEach(function() {
  accessBoard.endGame = false;
  accessBoard.boardRow1 = [1,2,3];
  accessBoard.boardRow2 = [4,5,6];
  accessBoard.boardRow3 = [7,8,9];
  validMove = true;
  announceWinner = false;
  winner = 'winner'
});

describe("Checks the board for properties", function () {
  it("contains property boardRow1, boardRow2, boardRow3", function () {
    expect(accessBoard.hasOwnProperty('boardRow1')).toEqual(true);
    expect(accessBoard.hasOwnProperty('boardRow2')).toEqual(true);
    expect(accessBoard.hasOwnProperty('boardRow3')).toEqual(true);
  });
  it("contains property makeMove", function () {
    expect(accessBoard.hasOwnProperty('makeMove')).toEqual(true);
  });
  it("contains property checkWinner", function () {
    expect(accessBoard.hasOwnProperty('checkWinner')).toEqual(true);
  });
  it("contains property endGame", function () {
    expect(accessBoard.hasOwnProperty('endGame')).toEqual(true);
  });
});


describe("Play X across the first row", function () {
  it("alerts that X is the winner and ends the game", function () {
    play(1,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(2,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(3,'X');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('X');
  });
});

describe("Play O across the second row", function () {
  it("alerts that O is the winner and ends the game", function () {
    play(4,'O');
    expect(accessBoard.endGame).toEqual(false);
    play(5,'O');
    expect(accessBoard.endGame).toEqual(false);
    play(6,'O');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('O');
  });
});

describe("Play X across the third row", function () {
  it("alerts that X is the winner and ends the game", function () {
    play(7,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(8,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(9,'X');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('X');
  });
});

describe("Play X down the first column", function () {
  it("alerts that X is the winner and ends the game", function () {
    play(1,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(4,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(7,'X');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('X');
  });
});

describe("Play O down the second column", function () {
  it("alerts that O is the winner and ends the game", function () {
    play(2,'O');
    expect(accessBoard.endGame).toEqual(false);
    play(5,'O');
    expect(accessBoard.endGame).toEqual(false);
    play(8,'O');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('O');
  });
});

describe("Play X down the third column", function () {
  it("alerts that X is the winner and ends the game", function () {
    play(3,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(6,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(9,'X');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('X');
  });
});

describe("Play O diagonally from top left to bottom right", function () {
  it("alerts that O is the winner and ends the game", function () {
    play(1,'O');
    expect(accessBoard.endGame).toEqual(false);
    play(5,'O');
    expect(accessBoard.endGame).toEqual(false);
    play(9,'O');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('O');
  });
});

describe("Play X diagonally from bottom left to top right", function () {
  it("alerts that X is the winner and ends the game", function () {
    play(3,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(5,'X');
    expect(accessBoard.endGame).toEqual(false);
    play(7,'X');
    expect(accessBoard.endGame).toEqual(true);
    expect(announceWinner).toEqual(true);
    expect(winner).toEqual('X');
  });
});


describe("Attempts to play on the same space twice", function () {
  it("changes validMove to false", function () {
    play(3, 'X');
    expect(validMove).toEqual(true);
    play(3, 'O');
    expect(validMove).toEqual(false);
  });
});

describe("Attempts to play outside the board", function () {
  it("changes validMove to false", function () {
    play(10, 'X');
    expect(validMove).toEqual(false);
  });
});

describe("attempts to play game", function () {
  it("invokes startGame", function () {
    expect(accessBoard.hasOwnProperty('boardRow3')).toEqual(true);
    startGame();
  });
});
