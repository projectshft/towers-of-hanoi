newGame();

function newGame(){
    var startPeg;
    var endPeg;
    var start = prompt ("Would you like to play Tower of Hanoi?");

if (start.toLowerCase() == "yes") {
    var game = {
        board : [[3, 2, 1], [], []] ,
        count : 0,
        win : false  
    }
    
    var peg= game.board;
    var count= game.count;
    var winner= game.win;
    
    //var pegs= prompt("How many pegs?");
    //var disks= prompt("How many disk?");
    printBoard(peg);
    
    console.log(startPeg);
    console.log(endPeg);

    while (winner === false) {
        move(peg, count);
        printBoard(peg);
        checkwinner(peg);
    }
}
else (alert("Have a good day!"));
}
function move(peg, count){
    startPeg = parseInt(prompt("Which peg would you like to move from?"));
    console.log(startPeg);
    endPeg = parseInt(prompt("Which peg would you like to move to?"));

        if (peg[startPeg-1][peg[startPeg-1].length-1] < peg[endPeg-1][peg[endPeg-1].length-1]){ //validates move
            console.log("Your move has been accepted!");
            var moveDisk = peg[startPeg-1].pop();
            peg[endPeg-1].push(moveDisk);
            count++
            console.log("move count="+ count);
        }
        else if (!peg[endPeg-1][peg[endPeg-1].length-1]){ //if endPeg is empty
            console.log("Your move has been accepted!");
            var moveDisk = peg[startPeg-1].pop();
            peg[endPeg-1].push(moveDisk);
            count++
            console.log("move count="+ count);
        }
        else {
            alert("Try a different move");
        }
    }

function printBoard(peg) {
    peg.map(function(peg)
    {
        console.log("---" + peg.join(" "));
    });
}

function checkwinner(peg) {
    if (peg[0].length === 0){
        if (peg[1].length === 3) {
            console.log('You Win');
           winner= true;
           newGame();
        } else if (peg[2].length === 3) {
            console.log('You Win');
            winner= true;
            newGame();
        }
        else 
        winner= false;
    }
}