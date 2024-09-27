const game = require('../main');

// Use fake timers to handle setTimeout during testing
jest.useFakeTimers();

describe('Towers of Hanoi', () => {
    beforeEach(() => {
        game.resetGame();  // Reset the board before each test
    });

    test('should initialize with all discs on peg1', () => {
        const expectedBoard = [[5, 4, 3, 2, 1], [], []];
        expect(game.board).toEqual(expectedBoard);
    });

    test('should move top disc from peg1 to peg2', () => {
        game.moveDisc(1, 2);
        const expectedBoard = [[5, 4, 3, 2], [1], []];
        expect(game.board).toEqual(expectedBoard);
    });

    test('should prevent larger disc being placed on smaller disc', () => {
        game.moveDisc(1, 2);  // Move 1 to peg2
        game.moveDisc(1, 3);  // Move 2 to peg3
        game.moveDisc(2, 3);  // Try to move 1 onto 2 (invalid)

        const expectedBoard = [[5, 4, 3], [1], [2]];  // Invalid move should not change the board
        expect(game.board).toEqual(expectedBoard);
    });

    test('should detect win condition when all discs are moved to peg3', () => {
        // Simulate a winning sequence of moves:
        game.moveDisc(1, 3);
        game.moveDisc(1, 2);
        game.moveDisc(3, 2);
        game.moveDisc(1, 3);
        game.moveDisc(2, 1);
        game.moveDisc(2, 3);
        game.moveDisc(1, 3);

        // Fast-forward the setTimeout used in resetGame
        jest.runAllTimers();

        // Check if the board reflects a win on peg3
        const expectedBoard = [[], [], [5, 4, 3, 2, 1]];
        expect(game.board).toEqual(expectedBoard);
    });
});
