var start = prompt ("Would you like to play Tower of Hanoi?");

if (start.toLowerCase() == "yes") {
    var game = {
        board : [[5, 4, 3, 2, 1], [], []] ,
        count : 0,
        win : false  
    }
    
    //var pegs= prompt("How many pegs?");
    //var disks= prompt("How many disk?");
    printBoard();
        if (game.win == false) 
        {
        move();
        printBoard();
        } 
}
else (alert("Have a good day!"));

function move()
            {
            var startPeg = parseInt(prompt("Which peg would you like to move from?"));
            var endPeg = parseInt(prompt("Which peg would you like to move to?"));
                console.log(startPeg);
                console.log(endPeg);
                console.log(game.board[startPeg-1]);
                console.log(game.board[startPeg-1][game.board[startPeg-1].length-1]);
                console.log(game.board[endPeg-1][game.board[endPeg-1].length-1]);
                //if (game.board[startPeg-1][game.board.length-1] < game.board[endPeg-1][game.board.length-1]){
                //    console.log("Your move has been accepted!");
                //    var moveDisk = game.board[startPeg-1].pop();
                //    game.board[endPeg-1].push(moveDisk);}
                //else (
                //    prompt("Try a different move");
                //    startPeg = prompt("What peg would you like to move from?");
                //    endPeg = prompt("Which peg would you like to move to?");
                //)
            }

function printBoard() {
    var gameBoard = game.board.map(function(peg){
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
 
