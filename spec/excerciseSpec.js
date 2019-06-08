/**
 * Tests for Towers of Hanoi game
 * 
 * Tests are run on a 3 peg, 3 disc game unless stated otherwise
 * 
 * TODO:
 *  test checkWinner
 *  test setBoard
 */

// creates a new game before each spec
beforeEach(function () {
  game = Board();
});

// sets books back to 'checked in' after each spec
afterEach(function() {
  game = Board();
});

//board creation tests
describe("board creation", function () {
  it("game object should only return functions", function () {
    //game.three = 3; here to see if following tests would fail, they do
    for (let prop in game) {
      expect(typeof game[prop]).toEqual("function");

      typeof game[prop];
    }
  });

  it("game object inputs must be at least 3 pegs and 1 disc", function () {
    game = Board(1,1);

    expect(game).toEqual(null);

    game = Board(3,0);

    expect(game).toEqual(null);

    game = Board(4,4);

    expect(typeof game).toEqual('object');
  });
});

//printBoard tests
describe("printBoard for Board", function () {
  it("checks initial printBoard for 5 peg 5 disc game - ignores whitespace", function () {
    game = Board(5,5);
    let gameStateString = '\n--- 5 4 3 2 1 \n--- \n--- \n--- \n--- ';

    expect(game.printBoard().replace(/\s/g, '')).toEqual(gameStateString.replace(/\s/g, ''));

    game.printBoard();
  });

  it("checks printBoard after .moveDisc(1,2) and .moveDisc(1,3) - ignores whitespace", function (){
    let gameStateString = '\n--- 3 \n--- 1 \n--- 2 ';
    game.moveDisc(1,2);
    game.moveDisc(1,3);

    expect(game.printBoard().replace(/\s/g, '')).toEqual(gameStateString.replace(/\s/g, ''));
  
    game.printBoard();
  });
});

//moveDisc tests
describe("moveDisc for Board", function () {
  it("checks if moveDisc first parameter handles incorrect input", function () {
    expect(game.moveDisc(0,1)).toEqual(false);

    game.moveDisc(0,1);

    expect(game.moveDisc(5,1)).toEqual(false);

    game.moveDisc(5,1);

    expect(game.moveDisc('string',2)).toEqual(false);

    game.moveDisc('string',2);
  });

  it("checks if moveDisc second parameter handles incorrect input", function () {
    expect(game.moveDisc(1,0)).toEqual(false);

    game.moveDisc(1,0);

    expect(game.moveDisc(1,5)).toEqual(false);

    game.moveDisc(1,5);

    expect(game.moveDisc(2,'string')).toEqual(false);

    game.moveDisc(2,'string');
  });

  it("checks if moveDisc was successful", function () {
    let response = game.moveDisc(1,2);

    expect(response.moveSuccessful).toEqual(true);

    response = game.moveDisc(1,2);

    expect(response.moveSuccessful).toEqual(false);

    response = game.moveDisc(3,1);

    expect(response.moveSuccessful).toEqual(false);
  });

  it("checks if checkWinner function is successful", function () {
    let response = game.moveDisc(1,2);

    expect(response.gameWon).toEqual(false);

    game.moveDisc(1,3);
    game.moveDisc(2,3);
    game.moveDisc(1,2);
    game.moveDisc(3,1);
    game.moveDisc(3,2);
    response = game.moveDisc(1,2);

    expect(response.gameWon).toEqual(true);
  });

  it("checks if checkWinner is false when on first peg", function () {
    game.moveDisc(1,2);

    let response = game.moveDisc(2,1);

    expect(response.gameWon).toEqual(false);

    //more moves in case of unexpected edge cases?
    game.moveDisc(1,2);
    game.moveDisc(1,3);
    game.moveDisc(2,3);
    game.moveDisc(1,2);
    game.moveDisc(2,1);
    game.moveDisc(3,2);
    game.moveDisc(3,1);
    response = game.moveDisc(2,1);

    expect(response.gameWon).toEqual(false);
  });
});

//legalMoves tests
describe("legalMoves for Board", function () {
  it("checks legal destinations for disc on peg \"1\"", function () {
    expect(game.legalMoves(1)).toEqual([2,3]);

    game.legalMoves(1);
  });

  it("should return undefined if no discs on given peg position", function () {
    expect(game.legalMoves(2)).toEqual(undefined);

    game.legalMoves(2);
  });

  it("should return array of legal peg numbers disc can move to", function () {
    game = Board(10,4);

    expect(game.legalMoves(1)).toEqual([2,3,4,5,6,7,8,9,10]);

    game.legalMoves(1);
  });

  it("should return empty array when no legal moves exist from peg", function () {
    game.moveDisc(1,2);
    game.moveDisc(1,3);

    expect(game.legalMoves(1)).toEqual([]);

    game.legalMoves(1);
  });
});