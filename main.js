var start = prompt ("Would you like to play Tower of Hanoi?");
var startPeg;
var endPeg;


if (start.toLowerCase() == "yes") {
    var game = {
        board : [[5, 4, 3, 2, 1], [], []] ,
        count : 0,
        win : false  
    }
    
    var peg= game.board;
    
    //var pegs= prompt("How many pegs?");
    //var disks= prompt("How many disk?");
    printBoard();
    
    console.log(startPeg);
    console.log(endPeg);

    if (game.win === false) {
        move();
        printBoard();
    } 
}
else (alert("Have a good day!"));

function move(){
    startPeg = parseInt(prompt("Which peg would you like to move from?"));
    console.log(startPeg);
    endPeg = parseInt(prompt("Which peg would you like to move to?"));
        console.log(endPeg);
        console.log(peg[startPeg-1][peg[startPeg-1].length-1]);
        console.log(peg[1].length);
        //console.log(peg[1].length);

        if (peg[startPeg-1][peg[startPeg-1].length-1] < peg[endPeg-1][peg[endPeg-1].length-1]){
            console.log("Your move has been accepted!");
            var moveDisk = peg[startPeg-1].pop();
            peg[endPeg-1].push(moveDisk);
            game.count++
            console.log(game.count);
        }
        else if (!peg[endPeg-1][peg[endPeg-1].length-1]){
            console.log("Your move has been accepted!");
            var moveDisk = peg[startPeg-1].pop();
            peg[endPeg-1].push(moveDisk);
            game.count++
            console.log(game.count);
        }
        else {
            prompt("Try a different move");
            move();
            // startPeg = prompt("What peg would you like to move from?");
            // endPeg = prompt("Which peg would you like to move to?");
        }
    }

function printBoard() {
    var gameBoard = peg.map(function(peg)
    {
        console.log("---" + peg.join(" "));
    });
}


//let newGame = {
    //numPegs: parseInt(pegs),
    //numDisks: parseInt(disks),
    //counter: 0,
  //  gameBoard: [[]]

//};

//var board = [[3, 2, 1], [], []];
 
