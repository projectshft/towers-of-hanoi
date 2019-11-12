//Prompt play, if yes print board
// var play = prompt("Are you ready to be challanged by 'The Towers of Hanoi'? ");
// console.log(play);
// if (play() === "yes") {
//     //  block of code to be executed if the condition is true
// } else {
//     //  block of code to be executed if the condition is false
// }

var board = [
    [3],
    [2],
    [1]
];

// var names = ["Aaron", "Bob", "Sue"];


// names.forEach(function (name) {
//     console.log(name);
// });



var printBoard = function () {
    const mappedBoard = board.map(function (peg) {
        return "---" + peg.join("")
    });
    for (var i = 0; i < mappedBoard.length; i++) {
        console.log(mappedBoard[i])
    }
}

var legalMoves = function (startPeg) {
    var discToMove = board[startPeg][board[startPeg].length - 1];

    var legalPegs = board.filter(function (peg) {
        var lastItemOnPeg = peg[peg.length - 1];

        if (discToMove < lastItemOnPeg || lastItemOnPeg === undefined) {
            return true
        }
    });

    return legalPegs;
};

//list for startPeg to move to



//Moving disc (user will enter a value at 1 higher than index)
moveDisc = function (startPeg, endPeg) {
    var startIndex = startPeg - 1;
    var endIndex = endPeg - 1;

    var legalPegs = legalMoves(startIndex);

    var startPegArray = board[startIndex];
    var endPegArray = board[endIndex];

    if (legalPegs.includes(endPegArray)) {
        var discMoved = startPegArray[startPegArray.length - 1]

        board[startIndex].pop()
        board[endIndex].push(discMoved)
    } else {
        console.log('Sorry, illegal move');
    }

    printBoard()
}
// Next move, use filter function - There should be a function that given a certain peg, determines which other pegs the top disc from that peg can be moved to. 
// moving last item on the startPeg

moveDisc(1, 2)

//var checkWinner =
//if(board = [],[3, 2, 1] []] or [], [], [3, 2, 1]] ) {
//alert("Winner")
// code will run if condition evaluates to true
//} else {
//alert("Try again")
// or "you cannot add a larger disc to a smaller disc"
