//I need to create a way to move between rod values, change the arrays, modify the arrays to reflect the new values, 

// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
let board = [[5, 4, 3, 2, 1], [], []];
const rod1 = board[0];
const rod2 = board[1];
const rod3 = board[2];



console.log('Welcome to Towers of Hanoi! To play, use moveDisk and refence the rod you are moving from/to. ex: moveDisk(rod1, rod2)');

const moveDisk = function(oldRod, newRod) {

    if (newRod.length === 0)
    { let movedDisk = oldRod.pop([])
    newRod.push(movedDisk);
    console.log('you moved to an empty rod!');
    }

    else if (newRod[newRod.length -1] > oldRod[oldRod.length -1]) {
        console.log("You can't make that move.");
    }
        
    else if (newRod[newRod.length -1] < oldRod[oldRod.length -1]) 
        {let movedDisk = oldRod.pop([])
        newRod.push(movedDisk);
        console.log('sucessful move!');
        };

    const printBoard = board.map(function (boards) {
            console.log(`---${boards}`)
        });

        printBoard;

     function checkWinner() {
         if (rod2.toString() == '5,4,3,2,1' || rod3.toString() == '5,4,3,2,1' ) {
             console.log('You won the game!'),
             board = [[5, 4, 3, 2, 1], [], []],
            console.log('Welcome to a new game. Make a move using moveDisk()');
            }
        };

        checkWinner(board);
    };


moveDisk(rod1, rod2);