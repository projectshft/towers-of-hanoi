//Prompt play, if yes print board
// var play = prompt("Are you ready to be challanged by 'The Towers of Hanoi'? ");
// console.log(play);

var board = [
    [3, 2, 1],
    [],
    []
];

var printBoard = function () {
    board.map(function (peg) {
        console.log("---" + peg.join(""))
    });
}

printBoard();

// if (play() === "yes") {
//     //  block of code to be executed if the condition is true
// } else {
//     //  block of code to be executed if the condition is false
// }