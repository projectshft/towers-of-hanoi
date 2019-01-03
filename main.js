/*There is a board with 3 pegs.  1 peg is holding 5 discs decreasing in size up the peg.*/
var board = [
    ["5", "4", "3", "2", "1"],
    [],
    []
];



//remove disc from 1 peg to another
var moveDisc = function (from, to) {
    var fromPeg = board[from-1];
    var toPeg = board[to-1];

    var fromDisc = fromPeg[fromPeg.length - 1];
    var toDisc = toPeg[toPeg.length - 1];

    //Check to see if the peg can take that disc;
    if (fromDisc < toDisc || toDisc == undefined) {
        console.log("Moving your disc!");
        var disc = fromPeg.pop();
        toPeg.push(disc);
    } else {
        console.log("Remember that you can only move a disc onto a larger disc. Please try again." + "The board is still :" + board); //NEED CURRENT BOARD
    };
};


    // var count = 0;
    // var moveCount = function () {
    //     count += 1;
    //     return count;
    // }
    // console.log("Moves: " + count);


moveDisc(1, 2);
//update/print board function (see shopping cart)

console.log(board);


/*USE FILTER ARRAY HELPER: filter out the pegs that are not the given fromPeg*/

// var availPegs = board.filter(function (peg) {
//     if ((board.indexOf(peg)) != fromPeg - 1) {
//         return true;
//     }
// });

// console.log(availPegs);



// Repeat steps

/*Win when all 5 discs are in order on a different peg than they started. Check if they won after every move.  If yes, end the game by announcing the winner (console.log) and reset the board.*/
// var checkWinner = function () {
//     for (var i = 0; i < board.length; i++) {
//         if (board[i].length == 5) {
//             console.log("YOU DID IT!");
//             board = [
//                 ["5", "4", "3", "2", "1"],
//                 [],
//                 []
//             ];
//         } else {
//             console.log("Please submit your next move.")
//         }
//     }
// }