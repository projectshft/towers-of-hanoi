/*need board - 2d array
need moveDisc function
    takes in whichdisk to move and which peg to move to
    checks if the disk is smaller than the disk its moving to
print board horizontally - must use map (array method) at least once for this

*/

/* maybe use this to ensure that prompts are numbers between 1 and 3?`
function promptForDisc( text)
{
    if(text == '' ){
     text = "Please enter a number from 1 to 100";   
    }
    var number = parseInt(window.prompt(text, ""));
    checkNumber(number);

}
function checkNumber(number){

    if (number <= 3 && number >= 1) {
    document.write("Your number (" + number + ")  matches requirements", "");
} else if (isNaN(number)) {
    promptForNumber("It is not a number. Please enter a number from 1 to 3", "");
} else {
    promptForNumber("Your number (" + number + ") is not between 1 and 3", "");
}

}
*/

BoardModule = function(){
    var board = [
        ["3","2","1"],
        [],
        []
    ];

    var printBoard = function(){ //array.map will iterate through our origin board above and print a new array using the spread operator to print the discs in each peg in an aesthetically pleasing way :)
        return board.map(function (peg) { 
            console.log( "---",...peg); 
        });
    };
 

    function moveDisc(whichdisc, whichpeg) {
        var moves = 0;
        function possibleMoves(whichdisc, whichpeg) { //use filter function at least once

    }
        forEach(board[whichpeg]) {
            if (board[whichpeg.length - 1] > whichdisc) {
                console.log("You cannot move a larger disk on top of a smaller one; board is still: " + printBoard);
            } else {
                board.pop("whichdisc");
                board.push = whichdisc; 
                moves += 1;
                printBoard();
                // printBoard
        } // needs to loop through the peg array that the user wants to move to, looking to see if it is a possible move or not 
    };

    function checkWinner() { // must use reduce function at least once
        
        console.log("You won in " + counter + "moves! Play again?");  //if win, this logs. and also the game resets to the starting board
        
        var resetBoard =function() {
            return board.map(function (peg) {
                ["3","2","1"];
            });
        }

        }
    };
    return {
        printBoard: printBoard,
        moveDisc: moveDisc
      };

};

 
  

// var TowerOfHanoi = BoardModule();
// TowerOfHanoi.moveDisc(2,1);
