//Prompt play, if yes print board
// var play = prompt("Are you ready to be challanged by 'The Towers of Hanoi'? ");
// console.log(play);
// if (play() === "yes") {
//     //  block of code to be executed if the condition is true
// } else {
//     //  block of code to be executed if the condition is false
// }

var board = [
    [3, 2, 1],
    [],
    []
];

var printBoard = function () {
    const mappedBoard = board.map(function (peg) {
        return "---" + peg.join("")
    });
    for (var i = 0; i < mappedBoard.length; i++) {
        console.log(mappedBoard[i])
    }
}

var legalMove = function (startPeg) {
    var discToMove = board[startPeg][board[startPeg].length - 1];
    

    board.filter(function (peg) {
        console.log(discToMove);
        if (startPeg < 1)
            return true;
    });
};

//list for startPeg to move to



//Moving disc (user will enter a value at 1 higher than index)
moveDisc = function (startPeg, endPeg) {
    var legalMoves = legalMove(startPeg - 1);

    var startIndex = startPeg - 1;
    var endIndex = endPeg - 1;
    var startPegArray = board[startIndex]
    var discMoved = startPegArray[startPegArray.length - 1]

    board[startIndex].pop()
    board[endIndex].push(discMoved)
    printBoard()
}
// Next move, use filter function - There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. 
// moving last item on the startPeg

moveDisc(1, 2)