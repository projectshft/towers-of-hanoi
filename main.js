const towersofHanoi = () => {
    //board setup
    let board = [
        ["5", "4", "3", "2", "1"],
        [],
        []
    ];
    //move counter
    const counter = {
        counter: 0
    }

    //state of the board
    const boardState = () => {
        let state = board.map(peg => {
            console.log(" --- " + peg.join(" "));
        });
        return state;
    };

    //disc mover function
    const discMover = (startPeg, endPeg) => {
        //beginning peg
        let beg = startPeg -1;
        //peg destination
        let dest = endPeg -1;

        if (board[beg][board[beg].length - 1] < board[dest][board[dest].length - 1] || board[dest].length === 0) {
            board[dest].push(board[beg][board[beg].length - 1]);
            board[beg].pop();
            counter['counter']++;
            console.log("Valid move")
            validWinner();
          } else {
            console.log("Invalid move");
          }
          return displayBoard()
};

//need to check for open pegs
const openPegs = (peg) => {
    let validMoves = [];
    let currentPeg = board[peg - 1]
    let movingDisc = board[peg - 1][board[peg - 1]. length - 1];
    if (currentPeg.length === 0) {
        validMoves = board.filter(move => {
            if (move > movingDisc || move[move.length - 1] > movingDisc) {
                return move;
            }
        })
        return validMoves;
    };
return openPegs;
};

const validWinner = () => {
    let winner = board.reduce((total, disc) => {
        total += disc.length;
        return total;
    }, 0);
    if (board[board.length - 1].length === winner) {
        console.log(`You are the winner!!! It took you ${counter['counter']} moves`);
        //board reset
        board = [
            ["5", "4", "3", "2", "1"],
            [],
            []
        ];
        moves['counter'] = 0;
    }
};

return {
    boardState: boardState,
    moveDisc: discMover,
    openPegs: openPegs,
    validWinner: validWinner
};
};

const executeBoard = towersofHanoi();
