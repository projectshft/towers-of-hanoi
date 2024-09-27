const game = {
    board: [[5, 4, 3, 2, 1], [], []],
    peg1EmptiedOnce: false,  // Track whether peg1 has been emptied

    // Display the current state of the board using map
    displayBoard() {
        console.log("--- Board State ---");
        this.board.map(peg => {
            console.log("--- " + peg.join(' '));
        });
    },

    // Move a disc from one peg to another
    moveDisc(fromPegNumber, toPegNumber) {
        const fromPegIndex = fromPegNumber - 1; // Convert peg number to index (1 -> 0, 2 -> 1, etc.)
        const toPegIndex = toPegNumber - 1;     // Convert peg number to index

        const fromPeg = this.board[fromPegIndex];
        const toPeg = this.board[toPegIndex];

        // Check if fromPeg is empty
        if (fromPeg.length === 0) {
            console.log("No discs on this peg to move!");
            return;
        }

        // Logic for peg1 (initial peg)
        if (fromPegNumber === 1 && !this.peg1EmptiedOnce) {
            // Before peg1 is emptied, only the top disc can be moved
            const discToMove = fromPeg[fromPeg.length - 1]; // Only move the top disc
            if (toPeg.length > 0 && discToMove > toPeg[toPeg.length - 1]) {
                console.log("You cannot move a larger disc onto a smaller disc!");
                return;
            }

            // Move the top disc
            toPeg.push(fromPeg.pop());

            // Check if peg1 is now empty to update the flag
            if (fromPeg.length === 0) {
                this.peg1EmptiedOnce = true;  // Now peg1 has been emptied once
            }
        } 
        // Logic for moving multiple discs from peg2 or peg3, or from peg1 after it has been emptied
        else {
            const discsToMove = [...fromPeg]; // Copy all discs to move them as a stack

            // Check that all discs are in order (largest to smallest)
            const isOrdered = discsToMove.every((disc, index) => {
                return index === 0 || disc < discsToMove[index - 1];
            });

            // If discs are not in order, reject the move
            if (!isOrdered) {
                console.log("Discs must be in descending order to move them together!");
                return;
            }

            // Ensure we're not placing a larger disc on a smaller disc
            if (toPeg.length > 0 && discsToMove[0] > toPeg[toPeg.length - 1]) {
                console.log("You cannot move a larger disc onto a smaller disc!");
                return;
            }

            // Move the stack of discs
            toPeg.push(...discsToMove);
            fromPeg.length = 0; // Remove all discs from the fromPeg
        }

        // Display the updated board after the move
        this.displayBoard();

        // Check if the player has won
        this.checkWin();
    },

    // Check if the game is won (all discs moved to peg 2 or 3)
    checkWin() {
        const winningPeg = [5, 4, 3, 2, 1];
        const isWin = this.board.slice(1).some(peg => peg.join() === winningPeg.join());
        if (isWin) {
            console.log("YOU WIN! Congratulations!\n");
            setTimeout(() => this.resetGame(), 2000); // 2-second delay before resetting
        }
    },

    // Reset the game to its initial state
    resetGame() {
        this.board = [[5, 4, 3, 2, 1], [], []];
        this.peg1EmptiedOnce = false;  // Reset the flag when the game restarts
        this.displayBoard();
        console.log("New game started! Move the discs using moveDisc(fromPeg, toPeg).");
    }
};

// Start the game
game.displayBoard();

// Example moves:
game.moveDisc(1, 2); // Move top disc from peg 1 to peg 2
game.moveDisc(1, 3); // Move top disc from peg 1 to peg 3
game.moveDisc(2, 3); // Move disc from peg 2 to peg 3
game.moveDisc(3, 2); // Move disc from peg 3 to peg 2
game.moveDisc(1, 3); // Move top disc from peg 1 to peg 3
game.moveDisc(2, 3); // Move top disc from peg 2 to peg 3
game.moveDisc(1, 2); // Move top disc from peg 1 to peg 2
game.moveDisc(3, 2); // Move disc from peg 3 to peg 2
game.moveDisc(1, 3); // Move top disc from peg 1 to peg 3
game.moveDisc(2, 3); // Move disc from peg 2 to peg 3

module.exports = game;  // Export the 'game' object for testing accessibility
