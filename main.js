// Initial game board
var towersBoard = {
    board: [
        [5, 4, 3, 2, 1], // Peg A
        [],              // Peg B
        []               // Peg C
    ]
};

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        var element = this[i];
        callback(element);
    }
};

function displayBoard() {
    towersBoard.board.myForEach(function(peg) {
        console.log(peg);
    });
};

function moveDisc(fromPeg, toPeg) {
    if (towersBoard.board[fromPeg].length === 0) {
        console.log('No disc to move');
        return;
    };

var disc = towersBoard.board[fromPeg][towersBoard.board[fromPeg].length - 1];
var destinationPeg = towersBoard.board[toPeg];

    // Make sure that the move is valid (smaller disc on top of larger disc)
    if (destinationPeg.length === 0 || disc < destinationPeg[destinationPeg.length - 1]) {
        towersBoard.board[toPeg].push(towersBoard.board[fromPeg].pop());
        console.log(`Moved disc ${disc} from Peg ${fromPeg + 1} to Peg ${toPeg + 1}`);
        displayBoard();
        checkWinner();
    } else {
        console.log('Invalid move, large discs may not be place on smaller ones. Try again');
    };
};
function checkWinner() {
    if (towersBoard.board[1, 2].length === 5) {
        console.log('Congrats, You Win!');
        resetGame();
        
    }

function resetGame() {
    towersBoard.board = [
        [5, 4, 3, 2, 1], // Peg A
        [],              // Peg B
        []               // Peg C
    ];
    console.log('The game has been reset!');
    displayBoard();
    };
};
    
console.log('Let us begin')
displayBoard();   


// type "cheatCode()" in console for Easter Egg fun!
function cheatCode() {
var cheatStartMessage = 'I want to play a game'
var easterEgg = 'all your base are belong to us!'

setTimeout(() => {
    moveDisc(0,2);
    moveDisc(0,1);
    moveDisc(2,1);
    moveDisc(0,2);
    moveDisc(1,0);
    moveDisc(1,2);
    moveDisc(0,2);
    moveDisc(0,1);
    moveDisc(2,1);
    moveDisc(2,0);
    moveDisc(1,0);
    moveDisc(2,1);
    moveDisc(0,2);
    moveDisc(0,1);
    moveDisc(2,1);
    moveDisc(0,2);
    moveDisc(1,0);
    moveDisc(1,2);
    moveDisc(0,2);
    moveDisc(1,0);
    moveDisc(2,1);
    moveDisc(2,0);
    moveDisc(1,0);
    moveDisc(1,2);
    moveDisc(0,2);
    moveDisc(0,1);
    moveDisc(2,1);
    moveDisc(0,2);
    moveDisc(1,0);
    moveDisc(1,2);
    moveDisc(0,2);   
      }, 0);
       alert(cheatStartMessage.toLocaleUpperCase());
    setTimeout(() => {  
       alert(easterEgg.toUpperCase());
      }, 1991);
};




