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

// console.log(printBoard())
printBoard()

//Moving disc
var movedisc = function (startPeg, endPeg) {
    

}





// //Prompt which disc do you want to move
// var startPeg = prompt("Which peg would you like to move from?");
// var endPeg = prompt("Which peg would you like to move to?");