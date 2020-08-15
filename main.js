let board;
let gameOver = false;
let moves = 0;
let startingBoard = [
    ['3', '2', '1'],
    [],
    []
];

const map = function(boardArray) {
    let spacing = ''
    let pegs = '|'
    
    for (let i = 0; i < boardArray.length; i++) {
        if(boardArray === startingBoard) {
            boardArray[i].reverse();
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
map(startingBoard)

//Install lodash to get this to work
/*
let playingBoard = _.cloneDeep(startingBoard);
console.log(playingBoard)
*/

const Board = function() {
    //let playingBoard = _.cloneDeep(startingBoard);

    let moveDisc = function(startPeg, endPeg) {
        let start = playingBoard[startPeg - 1].shift();
        playingBoard[endPeg - 1].unshift(start);
        map(playingBoard);
        moves++;
        if(gameOver) {
            console.log(`Congratulations! You win!`)
            playingBoard = Array.from(startingBoard)
        }
    }
    return {
        moveDisc: moveDisc
    }


}
// board = Board();
// board.moveDisc(1, 2);
// board.moveDisc(1, 3);
// board.moveDisc(2, 3);
// board.moveDisc(1, 2);
// board.moveDisc(3, 1);
// board.moveDisc(3, 2);
// gameOver = true
// board.moveDisc(1, 2);

// console.log(startingBoard);

//Right now game still needs functionality for determining a gameOver.
//Need to deep clone startingBoard to playingBoard in order to be able to reset the game
//Bullet point 6 on the project website!!!















// const board = function() {

//     let startingBoard = [
//         [3, 2, 1 ],
//         [],
//         [],
//     ];
    
//     // let boardState = {
//     //     numOfMoves: moves
//     // }
//     //let moveDisc = Board().moveDisc

//     //console.log(startingBoard);
    
//     return startingBoard
// }
// //board.moveDisc();

// const map = function(boardArray) {
//     boardArray.forEach((outerElement) => {
//         //console.log(outerElement)
//         outerElement.reverse().forEach((innerElement) => {
//             console.log(innerElement)
//         })
//     })
    
//     // let boardPegs = '|'
//     // for(let i = 1; i < boardArray.length; i++) {
//     //     boardPegs += '  |';
//     // }
//     // console.log(boardPegs)
// }
// //map(board());

// const Board = function() {
//     let moveDisc = (startPeg, endPeg) => {
//       console.log('hello')
//     };
//     console.log('hero')
//     // if(gameOver) {
//     //     console.log(boardState.numOfMoves)
//     // }
//     return {
//         moveDisc: moveDisc
//     }
// };
// Board().moveDisc();
