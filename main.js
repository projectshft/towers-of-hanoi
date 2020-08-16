let board;
let startingBoard = [
    ['3', '2', '1'],
    [],
    []
];
let playingBoard= [];

const mapping = function(boardArray) {
    let spacing = ''
    let pegs = '|'
    
    if(boardArray === startingBoard) {
        boardArray[0].reverse();
        startingBoard.forEach(element => {
            let copying = element.map(x => x)
            playingBoard.push(copying)
        })
    }

    for (let i = 0; i < boardArray.length; i++) {
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

const Board = function() {
    let gameOver = false;
    let moves = 0;
    
    let moveDisc = function(startPeg, endPeg) {
        let startPegIndex = startPeg - 1;
        let endPegIndex = endPeg - 1;

        if(Math.min(...playingBoard[endPegIndex]) < Math.min(...playingBoard[startPegIndex])) {
            console.log('You cannot move a larger disc on top of a smaller one, board is still:')
            mapping(playingBoard)
        } else {
            let disc = playingBoard[startPegIndex].shift();
            playingBoard[endPegIndex].unshift(disc);
            console.log('That move was successful, board is now:')
            mapping(playingBoard);
            moves++;
            checkWinner();
        }

        if(gameOver) {
            console.log(`Congratulations! You win!`);
            console.log(`Number of moves: ${moves}`)
            console.log('           ')
            console.log('Play again?')
            startingBoard[0].reverse();
            mapping(startingBoard)         
        }
    };

    let moveCheck = function(peg) {
        let pegIndex = peg -1
        let pegMin = Math.min(...playingBoard[pegIndex]);
        
        if(playingBoard[pegIndex].length == 0) {
            console.log('There is no disc to move on this peg');
        } else {
            playingBoard.filter(element => {
                let currentPeg = playingBoard.indexOf(element) + 1;
                if (Math.min(...element) == Infinity || pegMin < Math.min(...element)) {
                    console.log(`You can move a disc from this peg to peg ${currentPeg}`)
                } else {
                    console.log(`You cannot move a disc from this peg to peg ${currentPeg}`)
                }
            })
        };
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
    };

    let addPegs = function(numOfPegs) {
        for (let i = 0; i < numOfPegs; i++) {
            startingBoard.push([])
        }
    }

    let addDiscs = function(numOfDiscs) {
        for (let j = 0; j < numOfDiscs; j++) {
            startingBoard[0].unshift((Math.max(...startingBoard[0]) + 1).toString())
        }
    }

    return {
        moveDisc: moveDisc,
        moveCheck: moveCheck,
        addPegs: addPegs,
        addDiscs: addDiscs
    };
};

board = Board();

//board.moveDisc(1, 2);
board.addPegs(1);
board.addDiscs(2);
mapping(startingBoard);
//console.log(startingBoard)
// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 1);
// board.moveDisc(3, 2);
// board.moveDisc(1, 2);

