let board;
let gameOver = false;
let moves = 0;
let startingBoard = [
    ['3', '2', '1'],
    [],
    []
];
let playingBoard;

const map = function(boardArray) {
    let spacing = ''
    let pegs = '|'
    
    for (let i = 0; i < boardArray.length; i++) {
        if(boardArray === startingBoard) {
            boardArray[i].reverse();
            playingBoard = JSON.parse(JSON.stringify(startingBoard));
        }
        if(i >= 1) {
            spacing += '   '
        };
        for (let j = 0; j < boardArray[i].length; j++) {
            console.log(spacing + Number(boardArray[i][j]))
        };
    };

    for (let k = 0; k < boardArray.length; k++) {
        if ( k >= 1) {
            pegs += '  |'
        };
    }   
    console.log(pegs)
    console.log(spacing)
}
map(startingBoard);

const Board = function() {
    let moveDisc = function(startPeg, endPeg) {
        let startPegIndex = startPeg - 1;
        let endPegIndex = endPeg - 1;

        if(Math.min(...playingBoard[endPegIndex]) < Math.min(...playingBoard[startPegIndex])) {
            console.log('That is an invalid move!')
        } else {
            let start = playingBoard[startPegIndex].shift();
            playingBoard[endPegIndex].unshift(start);
            map(playingBoard);
            moves++;
            checkWinner();
        }

        if(gameOver) {
            console.log(`Congratulations! You win!`);
            console.log(`Number of moves: ${moves}`)
            startingBoard[0].reverse();
            playingBoard = startingBoard;
        }
    };

    let moveCheck = function(peg) {
        let pegIndex = peg -1
        let pegMin = Math.min(...playingBoard[pegIndex]);
        
        if(playingBoard[pegIndex].length == 0) {
            console.log('There is no disc to move on this peg');
        } else {
            for (let i = 0; i < playingBoard.length; i++) {
                if(Math.min(...playingBoard[i]) == Infinity || pegMin < Math.min(...playingBoard[i])) {
                    console.log(`you can move a disc to peg ${i + 1}`)
                } else {
                    console.log(`you cannot move a disc to peg ${i + 1}`)
                }
            }
        }
    };

    let checkWinner = function() {
        let winningPeg;
        playingBoard.forEach(element => {
            if (element.length > 0) {
                let reducer = (accumulator, currentValue) => accumulator + currentValue;
                winningPeg = element.reduce(reducer);
                if (winningPeg.length === startingBoard[0].length) {
                    return gameOver = true
                }
            }

        })
    }

    return {
        moveDisc: moveDisc,
        moveCheck: moveCheck
    }
}

board = Board();
board.moveDisc(1, 2);
board.moveDisc(1, 3);
board.moveDisc(2, 3);
board.moveDisc(1, 2);
board.moveDisc(3, 1);
board.moveDisc(3, 2);
board.moveDisc(1, 2);

//console.log(startingBoard);
//console.log(playingBoard);

