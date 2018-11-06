/*There is a board with 3 pegs.  1 peg is holding 5 discs decreasing in size up the peg.*/
var board = [
    ["5", "4", "3", "2", "1"],
    [],
    []
];

console.log(board);

//User submits to move the disc from 1 peg to another
//fromPeg and toPeg need to be avail to
var moveDisc = function (fromDisc, toDisc) {
    board.pop(fromDisc);
    board.push(toDisc);
    //recreate board with move included
}
moveDisc(1, 2); //this is an example

var fromDisc = board[fromPeg - 1][board[fromPeg - 1].length - 1];
var toDisc = board[toPeg - 1][board[toPeg - 1].length - 1];

/*Check to see if the fromPeg has a disc to move. If Yes, check to toPeg.  If no, ask the user to choose again and show them the board.*/
var checkPeg = function (fromPeg) {
    for (var i = 0; i < board.length; i++) {
        //use i?
        if (board[fromPeg - 1].length != 0) {
            availPeg();
        } else {
            console.log("The peg you chose does not have a disc to move.  Please try again.  The board is still: " + board);
        }
    };
};
/*Check to see if the toPeg can take that disc; the value of its top disc is < the value of the fromPeg topDisc.  You can only put the disc on a smaller disc. If yes,  move the peg and add to the move count. If no, ask user to choose the pegs again and show them the board.*/
var availPeg = function (toPeg) {
    for (var i = 0; i < board.length; i++) {
        if (fromDisc < toDisc) {
            moveDisc();
            moveCount();
        } else {
            console.log("Remember that you can only move a disc onto a larger disc. Please try again" + "The board is still :" + board)
        }
    }
}

var moveCount = function () {
    var count = 0;
    count += 1;
    return count;
}
console.log("Moves: " + count);

// Repeat steps
/*Win when all 5 discs are in order on a different peg than they started. Check if they won after every move.  If yes, end the game by announcing the winner (console.log) and reset the board.*/
var checkWinner = function () {
    for (var i = 0; i < board.length; i++) {
        if (board[i].length == 5) {
            //check order or not, since would not let move unless in order
            console.log("YOU DID IT!");
            board = [
                ["5", "4", "3", "2", "1"],
                [],
                []
            ];
        } else {
            console.log("Please submit your next move.")
        }
    }
}
