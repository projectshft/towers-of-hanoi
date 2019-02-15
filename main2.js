const Board = () => {
    let startBoard = [
        //initial board setup
        ["5", "4", "3", "2", "1"],
        [],
        []
    ];

    const moves = {
        //increments if the move is valid
        counter: 0
    }

    //displays current state of the board
    const printBoard = () => {
        let boardStatus = startBoard.map(peg => {
            console.log(" --- " + peg.join(" "));
        });
        return boardStatus;
    };

    //moves the top disc to another peg
    const moveDisc = (startPeg, endPeg) => {
        let fromPeg = startPeg -1;
        let toPeg = endPeg -1;
        
        if (startBoard[fromPeg][startBoard[fromPeg].length - 1] < startBoard[toPeg][startBoard[toPeg].length - 1] || startBoard[toPeg].length === 0) {
            startBoard[toPeg].push(startBoard[fromPeg][startBoard[fromPeg].length - 1]);
            startBoard[fromPeg].pop();
            moves['counter']++;
            console.log(`That move was successful, board is now`)
            checkWinner();
          } else {
            console.log(`You cannot move a larger disc on top of a smaller one. Board is still:`);
          }
          return printBoard()
}; 

//check for available pegs

const availableMoves = (peg) => {
    let validMoves = [];
    let currentPeg = board[peg - 1]
    let topDisc = startBoard[peg - 1][startBoard[peg - 1]. length - 1];
    if (currentPeg.length === 0) {
        validMoves = startBoard.filter(move => {
            if (move > topDisc || move[move.length - 1] > topDisc) {
                return move;
            }
        })
        return validMoves;
    };

    return availableMoves;
};

const checkWinner = () => {
    let result = startBoard.reduce((sum, disc) => {
        sum += disc.length;
        return sum;
    }, 0);
    if (startBoard[startBoard.length - 1].length === result) {
        console.log(`Congratulations. You won in ${moves['counter']} moves. Reset board to restart game.`);
        
        //reset board after winning to restart game.
        startBoard = [
            ["5", "4", "3", "2", "1"],
            [],
            []
        ];
        moves['counter'] = 0;
    }
};

return {
    printBoard: printBoard,
    moveDisc: moveDisc,
    availableMoves: availableMoves,
    checkWinner: checkWinner
};
};

const board = Board();