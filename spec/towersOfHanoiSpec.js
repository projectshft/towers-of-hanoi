let game;

//creates a new game before each spec
beforeEach(function() {
    game = TowerOfHanoiGame(5);
})

describe("move disc", function() {
    it("moves disc from one peg to an empty peg", function() {
        expect(game.board[0][game.board[0].length - 1]).toEqual('1');
        expect(game.board[2][game.board[2].length - 1]).toBeUndefined;
        game.moveDisc(1,3);
        expect(game.board[0][game.board[0].length - 1]).toEqual('2');
        expect(game.board[2][game.board[2].length - 1]).toEqual('1');
    });

    it("can't move from empty peg", function() {
        game.moveDisc(2, 1);
        expect(game.board[0][game.board[0].length - 1]).toEqual('2');
        expect(game.board[1][game.board[1].length - 1]).toBeUndefined;
        game.moveDisc(3, 2);
        game.moveDisc(3, 2);
        expect(game.board[1][game.board[1].length - 1]).toEqual('1');
        expect(game.board[2][game.board[2].length - 1]).toBeUndefined;
    });

    it("can't move a disc from one peg to a peg that has a lower number on top", function() {
        game.moveDisc(1, 2);
        expect(game.board[0][game.board[0].length - 1]).toEqual('2');
        expect(game.board[1][game.board[1].length - 1]).toEqual('1');
    });

    it("moves disc from one peg to another peg that has a higher number on top", function() {
        game.moveDisc(1, 3);
        expect(game.board[0][game.board[0].length - 1]).toEqual('3');
        expect(game.board[1][game.board[1].length - 1]).toEqual('1');
        expect(game.board[2][game.board[2].length - 1]).toEqual('2');
        game.moveDisc(2, 3);
        expect(game.board[0][game.board[0].length - 1]).toEqual('3');
        expect(game.board[1][game.board[1].length - 1]).toBeUndefined;
        expect(game.board[2][game.board[2].length - 1]).toEqual('1');
    });
});

describe("check winner", function() {
    it("doesn't declare game is won if it's the first peg that holds all dics", function() {
        
    });
});