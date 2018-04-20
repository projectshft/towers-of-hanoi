var myBoard;
var player1;
var player2;

function cloneBoard(board){
  return board.map(function(arr){
    return(arr.slice());
  });
}

describe("Create a board", function(){
  it("creates a 3x3 board with numbers 1-9", function(){
    myBoard = new Board();
    expect(myBoard.board).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
  });
});

describe("Declare 1st player", function(){
  it("assigns a new player to player1", function(){
    expect(myBoard.player1).toEqual(undefined);
    player1 = new Player("Player 1", "X", myBoard);
    expect(myBoard.player1).toEqual(player1);
  });
  it("doesn't let the player play yet", function(){
    var oldBoard = cloneBoard(myBoard.board);
    player1.move(1);
    expect(myBoard.board).toEqual(oldBoard);
  });
});

describe("Declare 2nd player", function(){
  it("assigns a new player to player 2", function(){
    expect(myBoard.player2).toEqual(undefined);
    player2 = new Player("Player 2", "O", myBoard);
    expect(myBoard.player2).toEqual(player2);
  });
  it("sets the board to be ready", function(){
    expect(myBoard.ready).toEqual(true);
  });
  it("sets the turn to player1", function(){
    expect(myBoard.player1.turn).toEqual(true);
    expect(myBoard.player2.turn).toEqual(false);
  });
});
describe("1st move", function(){
  it("doesn't let player 2 move", function(){
    var oldBoard = cloneBoard(myBoard.board);
    player2.move(1);
    expect(myBoard.board).toEqual(oldBoard);
  });
  it("puts the symbol in the appropriate spot", function(){
    expect(myBoard.board[0][0]).toEqual(1);
    player1.move(1);
    expect(myBoard.board[0][0]).toEqual(player1.symbol);
  });
  it("removes the number from the 'available' array", function(){
    expect(myBoard.available.indexOf(1)).toEqual(-1);
  });
  it("changes the turn", function(){
    expect(myBoard.player1.turn).toEqual(false);
    expect(myBoard.player2.turn).toEqual(true);
  });
  it("doesn't let player 1 move again", function(){
    var oldBoard = cloneBoard(myBoard.board);
    player1.move(2);
    expect(myBoard.board).toEqual(oldBoard);
  });
  it("removes spot from play", function(){
    var oldBoard = cloneBoard(myBoard.board);
    player2.move(1);
    expect(myBoard.board).toEqual(oldBoard);
  });
  it("nobody has won", function(){
    expect(myBoard.checkWin).toEqual(false);
  });
});
describe("Horizontal win", function(){
  it("returns true for checkWin", function(){
    player2.move(5);
    player1.move(2);
    player2.move(8);
    player1.move(3);
    expect(myBoard.checkWin).toEqual(true);
  });
  it("doesn't let a player move again", function(){
    oldBoard = cloneBoard(myBoard.board);
    player2.move(9);
    expect(myBoard.board).toEqual(oldBoard);
  });
});
describe("Reset", function(){
  it("sets the board back to its initial state", function(){
    myBoard.reset();
    expect(myBoard.board).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
  });
  it("resets the 'available' array", function(){
    expect(myBoard.available).toEqual([1,2,3,4,5,6,7,8,9]);
  });
  it("sets the board as ready", function(){
    expect(myBoard.ready).toEqual(true);
  });
  it("sets the turn to player 1", function(){
    expect(player1.turn).toEqual(true);
    expect(player2.turn).toEqual(false);
  });
});
describe("Vertical win", function(){
  it("returns true for checkWin", function(){
    player1.move(1);
    player2.move(2);
    player1.move(3);
    player2.move(5);
    player1.move(7);
    player2.move(8);
    expect(myBoard.checkWin).toEqual(true);
  });
});
describe("Diagonal win", function(){
  it("returns true for checkWin", function(){
    myBoard.reset();
    player1.move(3);
    player2.move(2);
    player1.move(5);
    player2.move(6);
    player1.move(7);
    expect(myBoard.checkWin).toEqual(true);
  });
});
describe("Tie", function(){
  it("returns 'tie' for checkWin", function(){
    myBoard.reset();
    player1.move(1);
    player2.move(2);
    player1.move(5);
    player2.move(9);
    player1.move(3);
    player2.move(7);
    player1.move(8);
    player2.move(4);
    player1.move(6);
    expect(myBoard.checkWin).toEqual("tie");
  });
  it("doesn't let players move again", function(){
    oldBoard = cloneBoard(myBoard.board);
    player2.move(3);
    expect(myBoard.board).toEqual(oldBoard);
  });
});
