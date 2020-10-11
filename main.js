let board;
// creates a function that plays the game, incapsulates all functions for game within
let playGame = () => {
    // creates arrays that have the game's "pegs", within the pegs are the disks ie 5,4,3,2,1 
    let towersBoard = [['5', '4', '3', '2', '1'],
    [],
    []];

    // function that takes in two parameters, starting peg and peg to move disk
    let moveDisc = (startPeg, endPeg) => {
        // variables to find the start peg and end peg arrays as well as the last elemen within those arrays
        let startPegPosition = towersBoard[startPeg - 1]
        let endPegPosition = towersBoard[endPeg -1]
        // function to check if the user wins the game, if true, resets the game
        let checkWin = () => {
            if (endPegPosition.length === 5 && !towersBoard[0].length) {
                console.log('You won!')
                towersBoard = [['5', '4', '3', '2', '1'],
                [],
                []];
            }
        }
        // function to display the board correctly 
        let printBoard = () => {
            let prettyBoard = towersBoard.map(disk => {
                return disk.toString().split(',').join(' ');
           })
           prettyBoard.forEach((array) => {
               console.log(' --- ' + array);
           })
        }
        //checks to see if there is a disk on the startPeg
        if(startPegPosition.length > 0){
            //checks to see if a move is valid aka moving a smaller disk ontop of a bigger one, if it is valid, disk is moved to the new peg
            if(endPegPosition[endPegPosition.length - 1] > startPegPosition[startPegPosition.length -1] || endPegPosition.length === 0) {
                endPegPosition.push(startPegPosition.pop());
                console.log('That move was successful, board is now:')
                
                printBoard();
                checkWin();
            // if the move is to move a larger disk on a smaller disk, throws error
            } 
            else {
                console.log('You cannot move a larger disc on top of a smaller one, board is still:');
                printBoard();
            }
        }   // if the move is to move a disk from an empty peg, throws an error
        else {
            console.log('You cannot move a disk from a peg that has no disks! Board is still:')
            printBoard();
        }       
    }
    // given the peg inputted as the argument, should determine which other pegs the top disc from that peg can be moved to
    let possibleMoves = (initialPeg) => {
         let pegPlayerCouldMoveTo = towersBoard.filter((i) => {
            //variables to get the correct array and the last element within that array
            let initialPegPosition = towersBoard[initialPeg - 1];
            let lastElementInInitialPeg = initialPegPosition[initialPegPosition.length - 1]
            // we want to return the arrays whos last indexed element is > than the last element on our startPeg array or === undefined;
            if (lastElementInInitialPeg < i[i.length - 1] || i[i.length - 1] === undefined) {
                return i;
            }
            else {
                console.log('You cannot move a disk from a peg that has no disks!')
            }

        })
        console.log(pegPlayerCouldMoveTo);
    }

    return {
        moveDisc: moveDisc,
        possibleMoves: possibleMoves,
    }
}
// sets the invoked playgame function to a variable in order to utilize methods created within
board = playGame();

board.moveDisc(1,2);
board.moveDisc(1,3);
board.moveDisc(2,3);
board.moveDisc(1,2);







