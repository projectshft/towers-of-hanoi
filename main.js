// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
// starting position is constant as it is used to set game to completed and reset to start of the game

const startingPosition = [[5, 4, 3, 2, 1],[],[]];
var board = [[5, 4, 3, 2, 1],[],[]];
var gameRunning = true;
var state = {
    1: board[0],
    2: board[1],
    3: board[2]
};

// console.log(state[1]);
// console.log(startingPosition[0]);

// this function takes two parameters and moves the pegs accordingly 

var moveDisc = function (pegA, pegB) {
 
    // this conditional can only operate when the game is not over
    if (gameRunning === true){
        if (state[pegB].length === 0 || state[pegB].at(-1) > state[pegA].at(-1)){
            state[pegB].push(state[pegA].pop());
            console.log("That move was successful, board is now: ");
        }else{
            console.log("You cannot move a larger disc on top of a smaller one, board is still: ");
        }   
        checkWinner(gameRunning);
    } 
    // return desired output by mapping the board array
    return board.map(function (temp) {
        console.log(`--- ${temp}`);
    }); 
    
}

//
var checkWinner = function (gameRunning) {
    // this will iterate the third peg of the board as well as the index of starting position, and if the conditional is met it will end the game
    var result = state[3].forEach(function (temp, index) {
        if (state[3].length === startingPosition[0].length && temp === startingPosition[0][index]){
            gameRunning = false; 
        }
    });
    if (gameRunning === false){
        console.log("Congratulations! You won!");
        board[0] = [...startingPosition[0]];
        board[1] = [...startingPosition[1]];
        board[2] = [...startingPosition[2]];
        
    }
}



moveDisc(1, 3); 
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(3, 1);
moveDisc(2, 1);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(3, 2);
moveDisc(3, 1);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);
moveDisc(1, 2);
moveDisc(3, 2);
moveDisc(1, 3);
moveDisc(2, 1);
moveDisc(2, 3);
moveDisc(1, 3);

// console.log(state[3]);
// console.log(startingPosition[0]);
// console.log(board);