console.info('Towers of Hanoi');
const initialBoard = [[5, 4, 3, 2, 1], [], []];
const totalPegs = initialBoard.length;
const totalDiscs = initialBoard[0].length;
let currentBoard;

function moveDisc(from, to) {
    if (!Number.isInteger(from) || !Number.isInteger(to)) {
        printBoard('✘ Pegs must be integers, board is still:');
        return;
    }
    if (from < 1 || from > totalPegs || to < 1 || to > totalPegs) {
        printBoard(`✘ Pegs must be between 1 & ${totalPegs}, board is still:`);
        return;
    }
    if (from === to) {
        printBoard('✘ You must move to a different peg, board is still:');
        return;
    }
    const fromPeg = currentBoard[from - 1];
    const toPeg = currentBoard[to - 1];
    if (fromPeg.length === 0) {
        printBoard('✘ You cannot move from an empty peg, board is still:');
        return;
    }
    if (toPeg.length > 0 && toPeg.at(-1) < fromPeg.at(-1)) {
        printBoard('✘ You cannot move a larger disc on top of a smaller one, board is still:');
        return;
    }
    toPeg.push(fromPeg.pop());
    printBoard('✔ That move was successful, board is now:');
    checkWinner();
}

function printBoard(message) {
    const boardString = currentBoard.map(peg => `--- ${peg.join(' ')}`).join('\n');
    console.log(`${message}\n\n${boardString}`);
}

function checkWinner() {
    const isWinner = currentBoard.slice(1).some(peg => peg.length === totalDiscs);
    if (!isWinner) return;
    console.info('🥳 GAME OVER - You Win!');
    newBoard();
}

function newBoard() {
    currentBoard = structuredClone(initialBoard);
    printBoard('New game, board is now:');
}

newBoard();
