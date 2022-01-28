let game;

describe("Tower Of Hanoi Game", function() {
    it("initializes game with number passed as arg", function() {
        let num = Math.ceil(Math.random() * 100);
        game = TowerOfHanoiGame(num);
        if(num === 64) {
            num = 65
        } else if(num < 3) {
            num = 3;
        }
        expect(game.getDiscCount()).toEqual(num);
    });
    it("doesn't allow the player to initialize with 64 pegs", function() {
        game = TowerOfHanoiGame(64);
        expect(game.getDiscCount()).toEqual(65);
    });
    it("doesn't allow the player to initialize with less than three pegs", function() {
        game = TowerOfHanoiGame(2);
        expect(game.getDiscCount()).toEqual(3);
        game = TowerOfHanoiGame(1);
        expect(game.getDiscCount()).toEqual(3);
    });
});

describe("game play", function() {
    //scoping beforeEach to be within this describe rather than at global level so that the logic around the numDisc arg can be checked first
    beforeEach(function() {
        game = TowerOfHanoiGame(5);
    });
    
    describe("move disc", function() {
        it("moves disc from one peg to an empty peg", function() {
            game.moveDisc(1, 2);
            expect(game.getTopDisc(1)).toEqual('2');
            expect(game.getTopDisc(2)).toEqual('1');
        });

        it("moves disc from one peg to another peg that has a higher number on top", function() {
            game.moveDisc(1, 2);
            game.moveDisc(1, 3);
            game.moveDisc(2, 3);
            expect(game.getTopDisc(1)).toEqual('3');
            expect(game.getTopDisc(2)).toBeUndefined();
            expect(game.getTopDisc(3)).toEqual('1');
        });

        it("can't move from empty peg", function() {
            game.moveDisc(2, 1);
            expect(game.getTopDisc(1)).toEqual('1');
            expect(game.getTopDisc(2)).toBeUndefined();
        });

        it("can't move a disc from one peg to a peg that has a lower number on top", function() {
            game.moveDisc(1, 2);
            game.moveDisc(1, 2);
            expect(game.getTopDisc(1)).toEqual('2');
            expect(game.getTopDisc(2)).toEqual('1');
        });
    });

    describe("check winner", function() {
        it("doesn't declare game is won if it's the first peg that holds all discs", function() {
            expect(game.checkWinner(1)).toBeFalsy();
        });

        it("doesn't declare game is won if the peg a disc is moved to doesn't contain all the discs", function() {
            game.moveDisc(1, 3);
            expect(game.checkWinner(3)).toBeFalsy();
        })

        it("declares game is won if all discs are on peg 2 or 3", function() {
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(3, 1);
            game.moveDisc(2, 1);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(3, 2);
            game.moveDisc(3, 1);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            //have to check that checkWinner correctly identifies winning move via moveDisc since the game immediately resets
            expect(game.moveDisc(1, 3)).toBeTruthy();
        });
        it("calls reset board when the game is won", function() {
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(3, 1);
            game.moveDisc(2, 1);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(3, 2);
            game.moveDisc(3, 1);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            game.moveDisc(1, 3);
            game.moveDisc(1, 2);
            game.moveDisc(3, 2);
            game.moveDisc(1, 3);
            game.moveDisc(2, 1);
            game.moveDisc(2, 3);
            //winning move
            game.moveDisc(1, 3);

            game.moveDisc(1, 2);
            expect(game.getTopDisc(1)).toEqual('2');
            expect(game.getTopDisc(2)).toEqual('1');
            expect(game.getTopDisc(3)).toBeUndefined();
        });
    });

    describe("reset board", function() {
        it("resets board back to starting position", function() {
            game.moveDisc(1, 2);
            game.moveDisc(1, 3);
            game.resetBoard();
            expect(game.getTopDisc(1)).toEqual('1');
            expect(game.getTopDisc(2)).toBeUndefined();
            expect(game.getTopDisc(3)).toBeUndefined();
        });
    });
  });
