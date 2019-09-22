// A board representing 3 pegs, and 3 discs on the first peg in ascending order.  
var game = {
    boardArray: [["3", "2", "1"],[],[]]
};

// function that prints board to console using map
function printBoard() {
    game.boardArray.map(function(peg) {
        console.log(" --- " + peg.join(''));
    });
};


    
//var inputPrompt = prompt("Choose a disc and which peg you would like to move it to.");

//if (windowPrompt != 
// prompt that takes in disc and peg input





/*function isMovePossbile() {
    game.boardArray.filter(function(filter){
       if (move > game.boardArray {
    })
    // conditional logic 
    if ( ) {
        // possible move
    } else {
        // not possible move
    }
};

*/

// prompt that welcomes user to game 
var windowPrompt = alert("Welcome to Towers of Hanoi !");      
    startPeg = prompt("Which disc do you want to move ? ");
    endPeg = prompt("Which peg do you want to move to ?");
//alert("Have a good day"); //change this


var move = function(startPeg, endPeg) {        
    //startPeg();
    //endPeg();
    //console.log(startPeg, endPeg);
    var discToBeMoved = game.boardArray[startPeg].pop();
    game.boardArray[endPeg].push(discToBeMoved);
    //console.log(discToBeMoved);
    //console.log(game.boardArray);
    
};

//var checkWinner = 

printBoard();
//debugger;
move(0, 2);
printBoard();




/* need to create three arrays here for the three pegs 
on game start run board (use map to print board!)
step 1. player submits move ( function)
step 2. game checks if move is valid ( function)
step 3. action based on step 2. If move is valid, excute move and print. If move is invalid we'll print message to the user. 

need a hint function where user can enter peg number. Use filter to return pegs with valid moves 
all discs on one peg 
have to be in certain order, highest value to lowest value, has to be a different peg. if all conditions are met game will check winner and the gane will end using reduce function 
*/